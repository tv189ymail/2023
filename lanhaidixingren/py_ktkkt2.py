#coding=utf-8
#!/usr/bin/python
import sys
sys.path.append('..')
from base.spider import Spider
import base64
import math
import json
import requests
import urllib
from urllib import request, parse
import urllib.request
import re

class Spider(Spider):
	def getName(self):
		return "卡通站(ktkkt2)"
	def init(self,extend=""):
		pass
	def isVideoFormat(self,url):
		pass
	def manualVideoCheck(self):
		pass
	def homeContent(self,filter):
		result = {}
		cateManual = {
			"日本动漫": "1",
			"国语动画": "2",
			"粤语动画": "32",
			"粤语动画": "33",
			"欧美动漫": "34"
		}
		classes = []
		for k in cateManual:
			classes.append({
				'type_name': k,
				'type_id': cateManual[k]
			})

		result['class'] = classes
		if (filter):
			result['filters'] = self.config['filter']
		return result
	def homeVideoContent(self):
		rsp = self.fetch('https://www.ktkkt2.com/')
		htmlTxt = rsp.text
		videos = self.get_list(html=htmlTxt)
		result = {
			'list': videos
		}
		return result

	def categoryContent(self,tid,pg,filter,extend):
		result = {}
		url = 'https://www.ktkkt2.com/frim/index{0}-{1}.html'.format(tid,pg)
		htmlTxt=self.get_webReadFile(urlStr=url)
		videos = self.get_list(html=htmlTxt)
		pag=self.get_RegexGetText(Text=htmlTxt,RegexText=r"<li><a href='.+?-(\d+?).html'>尾页</a></li>",Index=1)
		if pag=="":
			pag=1
		numvL = len(videos)
		result['list'] = videos
		result['page'] = pg
		result['pagecount'] = pag
		result['limit'] = numvL
		result['total'] = numvL
		return result

	def detailContent(self,array):
		aid = array[0]
		url='https://www.ktkkt2.com{0}'.format(aid)
		rsp = self.fetch(url)
		htmlTxt = rsp.text
		line=self.get_RegexGetTextLine(Text=htmlTxt,RegexText=r'(<h3 class="title"><strong>(.+?))</strong><span class="text-muted pull-mid">',Index=1)
		playFrom = []
		videoList=[]
		vodItems = []
		if len(line)<1 and self.get_RegexGetText(Text=htmlTxt,RegexText=r'class="title"><strong>(迅雷下载)',Index=1)!='':
			line=['迅雷下载(不可播放)']
			GvodUrls1=self.get_RegexGetText(Text=htmlTxt,RegexText=r'var GvodUrls1\s*=\s*"(.+?)"',Index=1)
			playFrom=[t for t in line]
			ListRe=GvodUrls1.split('###')
			for value in ListRe:
				t=value.split('$')
				vodItems.append(t[0]+"$"+t[1])
				joinStr = "#".join(vodItems)
				videoList.append(joinStr)
		else:
			circuit=[]
			for i in line:
				circuit.append(self.get_playlist(Text=htmlTxt,headStr=i[0],endStr="</div>"))
			playFrom=[t[1] for t in line]
			pattern = re.compile(r"<li><a title=\'.+?\'\shref=\'(.+?)\'"+'\starget="_self">(.+?)</a></li>')
			for v in circuit:
				ListRe=pattern.findall(v)
				vodItems = []
				for value in ListRe:
					vodItems.append(value[1]+"$"+value[0])
				joinStr = "#".join(vodItems)
				videoList.append(joinStr)

		vod_play_from='$$$'.join(playFrom)
		vod_play_url = "$$$".join(videoList)
		title=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<div class="title11".*?>\r\n<h2>(.+?)</h2>',Index=1)
		pic=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<div class="pic"><img src="(.+?)"',Index=1)
		typeName=self.get_RegexGetText(Text=htmlTxt,RegexText=r'>类型：\s{0,4}(.*?)</p>',Index=1)
		year=self.get_RegexGetText(Text=htmlTxt,RegexText=r'>首播：\s{0,4}(.*?)</p>',Index=1)
		act=self.get_RegexGetText(Text=htmlTxt,RegexText=r'>主演：\s{0,4}(.*?)</p>',Index=1)
		dir=self.get_RegexGetText(Text=htmlTxt,RegexText=r'>导演：\s{0,4}(.*?)</p>',Index=1)
		cont=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<div class="abstract-content".*?>(.*?)</div>',Index=1)
		area=self.get_RegexGetText(Text=htmlTxt,RegexText=r'>语言：\s{0,4}(.*?)</p>',Index=1)
		cont=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<div class="abstract-content".*?>(.*?)</div>',Index=1)
		vod = {
			"vod_id": aid,
			"vod_name": title,
			"vod_pic": pic,
			"type_name": typeName,
			"vod_year": year,
			"vod_area": area,
			"vod_remarks": "",
			"vod_actor":  self.removeHtml(txt=act),
			"vod_director": self.removeHtml(txt=dir),
			"vod_content": self.removeHtml(txt=cont)
		}
		vod['vod_play_from'] = vod_play_from
		vod['vod_play_url'] = vod_play_url

		result = {
			'list': [
				vod
			]
		}
		return result

	def verifyCode(self):
		retry = 10
		header = {
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"}
		while retry:
			try:
				session = requests.session()
				img = session.get('https://ikan6.vip/index.php/verify/index.html?', headers=header).content
				code = session.post('https://api.nn.ci/ocr/b64/text', data=base64.b64encode(img).decode()).text
				res = session.post(url=f"https://ikan6.vip/index.php/ajax/verify_check?type=search&verify={code}",
								   headers=header).json()
				if res["msg"] == "ok":
					return session
			except Exception as e:
				print(e)
			finally:
				retry = retry - 1

	def searchContent(self,key,quick):
		Url='https://www.ktkkt2.com/search.php?searchword={0}'.format(urllib.parse.quote(key))
		rsp = self.fetch(Url)
		htmlTxt = rsp.text
		videos = self.get_list(html=htmlTxt)
		result = {
				'list': videos
			}
		return result

	def playerContent(self,flag,id,vipFlags):
		result = {}
		parse=1
		Url=''
		if flag=='迅雷下载(不可播放)':
			Url=''
			parse=0
		elif self.get_RegexGetText(Text=id,RegexText=r"(https{0,1}:)",Index=1)!='':
			Url=id
			parse=1
		else:
			Url='https://www.ktkkt2.com{0}'.format(id)
			rsp = self.fetch(Url)
			htmlTxt = rsp.text
			m3u8Line=self.get_RegexGetTextLine(Text=htmlTxt,RegexText=r'(https{0,1}://.+?\.m3u8)',Index=1)
			if len(m3u8Line)>0:
				Url=m3u8Line[0]
				parse=0
		result["parse"] = parse
		result["playUrl"] = ''
		result["url"] = Url
		result["header"] = ''
		return result
	def get_RegexGetText(self,Text,RegexText,Index):
		returnTxt=""
		Regex=re.search(RegexText, Text, re.M|re.I)
		if Regex is None:
			returnTxt=""
		else:
			returnTxt=Regex.group(Index)
		return returnTxt	
	def get_RegexGetTextLine(self,Text,RegexText,Index):
		returnTxt=[]
		pattern = re.compile(RegexText)
		ListRe=pattern.findall(Text)
		if len(ListRe)<1:
			return returnTxt
		for value in ListRe:
			returnTxt.append(value)	
		return returnTxt
	def get_playlist(self,Text,headStr,endStr):
		circuit=""
		origin=Text.find(headStr)
		if origin>8:
			end=Text.find(endStr,origin)
			circuit=Text[origin:end]
		return circuit
	def removeHtml(self,txt):
		soup = re.compile(r'<[^>]+>',re.S)
		txt =soup.sub('', txt)
		return txt.replace("&nbsp;"," ")
	def get_webReadFile(self,urlStr):
		headers = {
			'Referer':urlStr,
			'User-Agent': 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
			'Host': 'www.ktkkt2.com'
		}
		req = urllib.request.Request(url=urlStr, headers=headers)
		html = urllib.request.urlopen(req).read().decode('utf-8')
		return html
	def get_list(self,html):
		patternTxt=r'<a title="(.+?)" href="(.+?)">\r\n<div class="list-poster">\r\n<img src="(.+?)"\sclass="thumb"/>'
		pattern = re.compile(patternTxt)
		ListRe=pattern.findall(html)
		imgPattern = re.compile('<img src="(.+?)"\sclass="thumb"/>')
		imgListRe=imgPattern.findall(html)
		videos = []
		i=0
		if len(imgListRe)!=len(ListRe):
			return videos
		for vod in ListRe:
			lastVideo = vod[1]
			title =vod[0]
			img =imgListRe[i]
			if len(lastVideo) == 0:
				lastVideo = '_'
			videos.append({
				"vod_id":lastVideo,
				"vod_name":title,
				"vod_pic":img,
				"vod_remarks":''
			})
			i=i+1
		return videos
	config = {
		"player": {},
		"filter": {}
	}
	header = {
		"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36",
		'Host': 'www.ktkkt2.com',
		"Referer": "https://www.ktkkt2.com/"}

	def localProxy(self,param):
		return [200, "video/MP2T", action, ""]
