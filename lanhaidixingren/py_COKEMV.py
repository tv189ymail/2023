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
#https://cokemv.me/vodshow/1--------2---.html
class Spider(Spider):
	def getName(self):
		return "COKEMV"
	def init(self,extend=""):
		pass
	def isVideoFormat(self,url):
		pass
	def manualVideoCheck(self):
		pass
	def homeContent(self,filter):
		result = {}
		cateManual = {
			"电影": "1",
			"剧集": "2",
			"动漫": "3",
			"综艺": "29",
			"抖音电影": "34",
			"新片快递": "35"
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
		rsp = self.fetch('https://cokemv.me/')
		htmlTxt = rsp.text
		videos = self.get_list(html=htmlTxt)
		result = {
			'list': videos
		}
		return result

	def categoryContent(self,tid,pg,filter,extend):
		result = {}
		url = 'https://cokemv.me/vodshow/{0}--------{1}---.html'.format(tid,pg)
		rsp = self.fetch(url)
		htmlTxt=rsp.text
		videos = self.get_list(html=htmlTxt)
		pag=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<a href=".+?-([0-9]+?)---.html" class="page-link page-next" title="尾页">尾页</a>',Index=1)
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
		Url='https://cokemv.me{0}'.format(aid)
		rsp = self.fetch(Url)
		htmlTxt = rsp.text
		line=self.get_RegexGetTextLine(Text=htmlTxt,RegexText=r'data-dropdown-value="(.+?)"><span>.+?</span>',Index=1)
		circuit=self.get_lineList(Txt=htmlTxt)
		playFrom = []
		videoList=[]
		pattern = re.compile(r'<a class="module-play-list-link" href="(.+?)" title="(.+?)"><span>.+?</span></a>')
		for v in circuit:
			ListRe=pattern.findall(v)
			vodItems = []
			for value in ListRe:
				vodItems.append(value[1]+"$"+value[0])
			joinStr = "#".join(vodItems)
			videoList.append(joinStr)
		playFrom=[t for t in line]
		vod_play_from='$$$'.join(playFrom)
		vod_play_url = "$$$".join(videoList)
		title=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<h1>(.+?)</h1>',Index=1)
		pic=self.get_RegexGetText(Text=htmlTxt,RegexText=r'data-original="(.+?)"',Index=1)
		typeName=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<a href="/vodshow.+?-\.html">(.+?)</a><span class="slash">',Index=1)
		year=self.get_RegexGetText(Text=htmlTxt,RegexText=r'href="/vodshow.+?[0-9]{4}\.html">([0-9]{4})</a></div>',Index=1)
		area=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<a href=.+?-\.html">(.+?)</a></',Index=1)
		act=self.get_RegexGetText(Text=htmlTxt,RegexText=r'主演：(.+?)</div>',Index=1)
		dir=self.get_RegexGetText(Text=htmlTxt,RegexText=r'导演：(.+?)</div>',Index=1)
		cont=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<p>(.+?)</p>',Index=1)
		vod = {
			"vod_id": aid,
			"vod_name": title,
			"vod_pic": pic,
			"type_name": typeName,
			"vod_year": year,
			"vod_area": self.removeHtml(txt=area),
			"vod_remarks": '',
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
		result = {
				'list': []
			}
		return result

	def playerContent(self,flag,id,vipFlags):
		result = {}
		Url='https://cokemv.me{0}'.format(id)
		rsp = self.fetch(Url)
		htmlTxt = rsp.text
		playUrl=Url
		parse=1
		m3u8Line=self.get_RegexGetTextLine(Text=htmlTxt,RegexText=r'url":"(.+?\.m3u8)"',Index=1)
		if len(m3u8Line)>0:
			playUrl="https://cokemv.me"+m3u8Line[0].replace("\\","")
			parse=0
		if playUrl.count('https:')>1 and len(m3u8Line)>0:
			playUrl=m3u8Line[0].replace("\\","")
		result["parse"] = parse
		result["playUrl"] = ''
		result["url"] = playUrl
		result["header"] = ''
		return result
	def get_RegexGetText(self,Text,RegexText,Index):
		returnTxt=""
		Regex=re.search(RegexText, Text, re.M|re.S)
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
			'Host': 'cokemv.me'
		}
		req = urllib.request.Request(url=urlStr, headers=headers)
		html = urllib.request.urlopen(req).read().decode('utf-8')
		return html
	def get_list(self,html):
		patternTxt=r'<a href="(.+?)" title="(.+?)" class="module-poster-item module-item">'
		pattern = re.compile(patternTxt)
		ListRe=pattern.findall(html)
		imgPattern = re.compile('data-original="(.+?)"')
		imgListRe=imgPattern.findall(html)
		videos = []
		i=0
		if len(imgListRe)!=len(ListRe):
			return videos
		for vod in ListRe:
			lastVideo = vod[0]
			title =vod[1]
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
	def get_lineList(self,Txt):
		circuit=[]
		origin=Txt.find('<div class="module-play-list">')
		while origin>8:
			end=Txt.find('</div>',origin)
			circuit.append(Txt[origin:end])
			origin=Txt.find('<div class="module-play-list">',end)
		return circuit
	config = {
		"player": {},
		"filter": {}
	}
	header = {
		"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36",
		'Host': 'cokemv.me',
		"Referer": "http://cokemv.me/"}

	def localProxy(self,param):
		return [200, "video/MP2T", action, ""]
