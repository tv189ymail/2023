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
		return "樱花动漫"
	def init(self,extend=""):
		pass
	def isVideoFormat(self,url):
		pass
	def manualVideoCheck(self):
		pass
	def homeContent(self,filter):
		result = {}
		cateManual = {
			"国产动漫": "3",
			"日本动漫": "2",
			"美国动漫": "4",
			"动漫电影": "1"
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
		rsp = self.fetch('http://www.dm88.me/')
		htmlTxt = rsp.text
		videos = self.get_list(html=htmlTxt)
		result = {
			'list': videos
		}
		return result

	def categoryContent(self,tid,pg,filter,extend):
		result = {}
		url = 'http://www.dm88.me/list/{0}_{1}.html'.format(tid,pg)
		rsp = self.fetch(url)
		htmlTxt=rsp.text
		videos = self.get_list(html=htmlTxt)
		pag=self.get_RegexGetText(Text=htmlTxt,RegexText=r'href="/list/2_(\d+?).html">尾页</a></li>',Index=1)
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
		url='http://www.dm88.me{0}'.format(aid)
		rsp = self.fetch(url)
		htmlTxt = rsp.text
		line=self.get_RegexGetTextLine(Text=htmlTxt,RegexText=r'<a href="(#playlist\d)" data-toggle="tab">(.+?)</a>',Index=1)
		playFrom = []
		videoList=[]
		vodItems = []
		circuit=self.get_lineList(Txt=htmlTxt,mark=r'<ul class="myui-content__list scrollbar sort-list clearfix" style="max-height: 300px; overflow: auto;">',after='</ul>')
		playFrom=[t[1] for t in line]
		pattern = re.compile(r'<a class="btn btn-default" href="(.+?)">(.+?)</a>')
		for v in circuit:
			ListRe=pattern.findall(v)
			vodItems = []
			for value in ListRe:
				vodItems.append(value[1]+"$"+value[0])
			joinStr = "#".join(vodItems)
			videoList.append(joinStr)

		vod_play_from='$$$'.join(playFrom)
		vod_play_url = "$$$".join(videoList)
		title=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<h1 class="title">(.+?)</h1>',Index=1)
		pic=self.get_RegexGetText(Text=htmlTxt,RegexText=r'data-original="(.+?)"',Index=1)
		typeName=self.get_RegexGetText(Text=htmlTxt,RegexText=r'分类：</span>(.+?)</a>',Index=1)
		year=self.get_RegexGetText(Text=htmlTxt,RegexText=r'年份：</span>(.+?)</a>',Index=1)
		area=self.get_RegexGetText(Text=htmlTxt,RegexText=r'地区：</span>(.+?)</a>',Index=1)
		act=self.get_RegexGetText(Text=htmlTxt,RegexText=r'主演：</span>(.*?)</p>',Index=1)
		dir=self.get_RegexGetText(Text=htmlTxt,RegexText=r'导演：</span>(.*?)</p>',Index=1)
		cont=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<span class="sketch content">(.*?)</span>',Index=1)
		vod = {
			"vod_id": aid,
			"vod_name": title,
			"vod_pic": pic,
			"type_name":self.removeHtml(txt=typeName),
			"vod_year": self.removeHtml(txt=year),
			"vod_area": area,
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
		Url='http://www.dm88.me/search.asp?searchword={0}&submit='.format(urllib.parse.quote(key))
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
		Url='http://www.dm88.me{0}'.format(id)
		rsp = self.fetch(Url)
		htmlTxt = rsp.text
		m3u8Line=self.get_RegexGetTextLine(Text=htmlTxt,RegexText=r'url":"(h.+?)",',Index=1)
		if len(m3u8Line)>0:
			Url=m3u8Line[0].replace("/","")
			parse=0 if Url.find('.m3u8')>1 else 1
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
			'Host': 'www.dm88.me'
		}
		req = urllib.request.Request(url=urlStr, headers=headers)
		html = urllib.request.urlopen(req).read().decode('utf-8')
		return html
	def get_list(self,html):
		patternTxt=r'href="(.+?)" title="(.+?)" data-original="(.+?)">'
		pattern = re.compile(patternTxt)
		ListRe=pattern.findall(html)
		videos = []
		for vod in ListRe:
			lastVideo = vod[0]
			title =vod[1]
			img =vod[2]
			if len(lastVideo) == 0:
				lastVideo = '_'
			videos.append({
				"vod_id":lastVideo,
				"vod_name":title,
				"vod_pic":img,
				"vod_remarks":''
			})
		return videos
	def get_lineList(self,Txt,mark,after):
		circuit=[]
		origin=Txt.find(mark)
		while origin>8:
			end=Txt.find(after,origin)
			circuit.append(Txt[origin:end])
			origin=Txt.find(mark,end)
		return circuit
	config = {
		"player": {},
		"filter": {}
	}
	header = {
		"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36",
		'Host': 'www.dm88.me'
	}

	def localProxy(self,param):
		return [200, "video/MP2T", action, ""]
