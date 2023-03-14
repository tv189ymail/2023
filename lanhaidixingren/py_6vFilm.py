#coding=utf-8
#!/usr/bin/python
import sys
sys.path.append('..') 
from base.spider import Spider
import json
import time
import base64
import re
from urllib import request, parse
import urllib
import urllib.request

class Spider(Spider):  # 元类 默认的元类 type
	def getName(self):
		return "6V电影"
	def init(self,extend=""):
		print("============{0}============".format(extend))
		pass
	def isVideoFormat(self,url):
		pass
	def manualVideoCheck(self):
		pass
	def homeContent(self,filter):
		result = {}
		cateManual = {
			"科幻片": "kehuanpian",
			"动画片": "donghuapian",
			"电视剧": "dianshiju",
			"爱情片": "aiqingpian",
			"动作片": "dongzuopian",
			"喜剧片": "xijupian",
			"恐怖片": "kongbupian",
			"剧情片": "juqingpian",
			"战争片": "zhanzhengpian",
			"纪录片": "jilupian",
			"综艺": "ZongYi"
		}
		classes = []
		for k in cateManual:
			classes.append({
				'type_name':k,
				'type_id':cateManual[k]
			})
		result['class'] = classes
		if(filter):
			result['filters'] = self.config['filter']
		return result
	def homeVideoContent(self):
		htmlTxt=htmlTxt=self.webReadFile(urlStr="https://www.66s.cc")
		htmlTxt=htmlTxt+self.webReadFile(urlStr="https://www.66s.cc/index_2.html")
		videos = self.get_list(html=htmlTxt,tid="6v电影")
		result = {
			'list':videos
		}
		return result
	def categoryContent(self,tid,pg,filter,extend):
		result = {}
		url=""
		if tid=="qian50m":
			url=r"https://www.66s.cc/qian50m.html"
		else:
			url=r"https://www.66s.cc/{0}/".format(tid)
			if pg!="1":#pg值是字符串
				url=url+"index_{0}.html".format(pg)
		htmlTxt=self.webReadFile(urlStr=url)
		videos = self.get_list(html=htmlTxt,tid="6v电影")
		pag=self.get_RegexGetText(Text=htmlTxt,RegexText=r'index_([0-9]+?).html"\sclass="next">尾页</a>',Index=1)
		numvL = len(videos)
		result['list'] = videos
		result['page'] = pg
		result['pagecount'] = pag
		result['limit'] = numvL
		result['total'] = numvL
		return result
	def detailContent(self,array):
		result = {}
		aid = array[0].split('###')
		if aid[2].find("http")<0:
			return result
		tid = aid[0]
		logo = aid[3]
		lastVideo = self.get_UrlParameter(parameter=array[0])
		title = aid[1]
		date = aid[0]
		if lastVideo == '_':
			return result
		htmlTxt=self.webReadFile(urlStr=lastVideo)
		circuit=[]
		if htmlTxt.find('<h3>播放地址')>8:
			origin=htmlTxt.find('<h3>播放地址')
			while origin>8:
				end=htmlTxt.find('</div>',origin)
				circuit.append(htmlTxt[origin:end])
				origin=htmlTxt.find('<h3>播放地址',end)
		if len(circuit)<1:
			circuit.append(htmlTxt)
		#print(circuit)
		playFrom = []
		videoList = []
		patternTxt=r'<a title=\'(.+?)\'\s*href=\s*"(.+?)"\s*target=\s*"_blank"\s*class="lBtn" >(\1)</a>'
		pattern = re.compile(patternTxt)
		head="https://www.66s.cc"
		for v in circuit:
			ListRe=pattern.findall(v)
			temporary=re.search( r'<h3>(播放地址.*?)</h3>', v, re.M|re.I).group(1)
			playFrom.append(temporary)
			vodItems = []
			for value in ListRe:
				url=value[1]
				if url.find(head)<0:
					url=head+url
				vodItems.append(value[0]+"$"+url)
			joinStr = "#".join(vodItems)
			videoList.append(joinStr)
		if len(videoList) == 0:
			return {}
		vod_play_from = '$$$'.join(playFrom)
		vod_play_url = "$$$".join(videoList)
		typeName=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<br/>◎类　　别　(.+?)<br/>',Index=1)
		year=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<br/>◎年　　代　([0-9]{4})<br/>',Index=1)
		area=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<br/>◎产　　地　(.+?)<br/>',Index=1)
		act=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<br/>◎演　　员　(.+?)◎',Index=1)
		dir=self.get_RegexGetText(Text=htmlTxt,RegexText=r'<br/>◎导　　演　(.+?)◎',Index=1)
		cont=self.get_RegexGetText(Text=htmlTxt,RegexText=r'◎简　　介(.+?)<img',Index=1)
		vod = {
			"vod_id":array[0],
			"vod_name":title,
			"vod_pic":logo,
			"type_name":typeName,
			"vod_year":year,
			"vod_area":area,
			"vod_remarks":"",
			"vod_actor":"",
			"vod_director":self.get_removeHtml(txt=dir),
			"vod_content":self.get_removeHtml(txt=cont)
		}
		vod['vod_play_from'] = vod_play_from
		vod['vod_play_url'] = vod_play_url
		result = {
			'list':[
				vod
			]
		}
		return result

	def searchContent(self,key,quick):
		headers = {
			'User-Agent': 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
			'Host': 'www.66s.cc'
		}

		data="show=title&tempid=1&tbname=article&mid=1&dopost=search&submit=&keyboard="+urllib.parse.quote(key)
		payUrl="https://www.66s.cc/e/search/index.php"
		req = request.Request(url=payUrl, data=bytes(data, encoding='utf8'),headers=headers, method='POST')
		response = request.urlopen(req)
		urlTxt=response.geturl()
		response = urllib.request.urlopen(urlTxt)
		htmlTxt=response.read().decode('utf-8')
		videos = self.get_list(html=htmlTxt,tid="6v电影")
		result = {
			'list':videos
		}
		return result
	def playerContent(self,flag,id,vipFlags):
		result = {}
		htmlTxt=self.webReadFile(urlStr=id)
		pattern=re.compile(r'(https{0,1}://.+?\.m3u8.*?)')
		ListRe=pattern.findall(htmlTxt)
		url=""
		if ListRe==[]:	
			url=self.get_playUrlMethodOne(html=htmlTxt)
		else:
			url=ListRe[0]
		result["parse"] = 0
		result["playUrl"] =""
		result["url"] = url
		result["header"] = ''
		return result
	def get_playUrlMethodOne(self,html):
		#自定义函数时self参数是必要的,调用时self参数留空
		pattern =re.search( r'<div class="video"><iframe.+?src="(.+?)"></iframe></div>', html, re.M|re.I).group(1)
		if len(pattern)<4:
			return ""
		rsp = self.fetch(pattern)
		htmlTxt=rsp.text
		head=re.search( r'(https{0,1}://.+?)/', pattern, re.M|re.I).group(1)
		if len(head)<4:
			return ""
		url=re.search( r'var\smain\s*=\s*"(.+?)"', htmlTxt, re.M|re.I).group(1)
		url=head+url
		return url
	def get_list(self,html,tid):
		patternTxt='<div class="thumbnail">\s*<a href="(.+)"\s*class="zoom".*?title="(.+?)".*?\n*\s*<img src="(.+?)"'
		pattern = re.compile(patternTxt)
		ListRe=pattern.findall(html)
		videos = []
		head="https://www.66s.cc"
		for vod in ListRe:
			lastVideo = vod[0]
			soup = re.compile(r'<[^>]+>',re.S)
			title =soup.sub('', vod[1])
			if len(lastVideo) == 0:
				lastVideo = '_'
			if lastVideo.find(head)<0 and lastVideo!="_":
				lastVideo=head+lastVideo
			guid = tid+'###'+title+'###'+lastVideo+'###'+vod[2]
			img = vod[2]
			videos.append({
				"vod_id":guid,
				"vod_name":title,
				"vod_pic":img,
				"vod_remarks":''
			})
		return videos
	def webReadFile(self,urlStr):
		headers = {
			'Referer':'https://www.66s.cc/',
			'User-Agent': 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
			'Host': 'www.66s.cc'
		}
		if urlStr.find("http")<0:
			return ""
		req = urllib.request.Request(url=urlStr, headers=headers)
		html = urllib.request.urlopen(req).read().decode('utf-8')
		return html
	def get_UrlParameter(self,parameter):
		aid =parameter.split('###')
		for t in aid:
			if t.find("http")>-1 and t.find("html")>-1:
				return t	
		return "https://www.66s.cc/kehuanpian/18941.html"	
	def get_RegexGetText(self,Text,RegexText,Index):
		returnTxt=""
		Regex=re.search(RegexText, Text, re.M|re.I)
		if Regex is None:
			returnTxt=""
		else:
			returnTxt=Regex.group(Index)
		return returnTxt
	def get_removeHtml(self,txt):
		soup = re.compile(r'<[^>]+>',re.S)
		txt =soup.sub('', txt)
		return txt.replace("&nbsp;"," ")
	config = {
		"player": {},
		"filter": {}
		}
	header = {
		"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36",
		"Origin": "https://www.66s.cc",
		"Referer": "https://www.66s.cc/"
	}

	def localProxy(self,param):
		return [200, "video/MP2T", action, ""]