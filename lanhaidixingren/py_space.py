#coding=utf-8
#!/usr/bin/python
import sys
sys.path.append('..') 
from base.spider import Spider
import json
import time
import base64
from urllib import request, parse
import urllib
import urllib.request
import re
class Spider(Spider):  # 元类 默认的元类 type
	def getName(self):
		return "空间"
	def init(self,extend=""):
		print("============{0}============".format(extend))
		pass
	def isVideoFormat(self,url):
		pass
	def manualVideoCheck(self):
		pass
		#取分类名
	def homeContent(self,filter):
		result = {}
		cateManual = {
			"关注的Pu主": "pu",
			"个人收藏7": "Collection"
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
		result = {
			'list':[]
		}
		return result
		#取节目目录
	def categoryContent(self,tid,pg,filter,extend):		
		result = {}
		videos=[]
		if tid=="pu":
			videos=self.get_list_pu()
		else:
			videos = self.get_list_pu()
		result['list'] = videos
		result['page'] = pg
		result['pagecount'] = 1
		result['limit'] = 1
		result['total'] = 1
		return result
		#详情
	def detailContent(self,array):
		aid = array[0].split('###')
		tid = aid[0]
		logo = aid[3]
		lastVideo = 'https://www.ixigua.com/home/62435616925'
		title = aid[1]
		date = aid[0]
		if lastVideo == '_':
			return {}
		rsp = self.fetch(url)
		htmlTxt = rsp.text
		vodItems =[]
		vodItems = self.get_collection_xg(html=htmlTxt)
		vod = {
			"vod_id":tid,#array[0],
			"vod_name":title,
			"vod_pic":logo,
			"type_name":tid,
			"vod_year":"",
			"vod_area":"",
			"vod_remarks":"",
			"vod_actor":"",
			"vod_director":"",
			"vod_content":""
		}
		vod['vod_play_from'] = "线路"
		vod['vod_play_url'] = "#".join(vodItems)
		result = {
			'list':[
				vod
			]
		}
		return result

	def searchContent(self,key,quick):
		result = {
			'list':[]
		}
		return result
		#视频
	def playerContent(self,flag,id,vipFlags):
		result = {}
		
		result["parse"] = 1
		result["playUrl"] =""
		result["url"] = id
		result["header"] = ''
		return result
	def get_list_pu(self):
		ListRe=[("科技猿人","https://www.ixigua.com/home/62435616925/","西瓜"),("妈咪说MommyTalk","https://www.ixigua.com/home/62786280361/","西瓜")]
		videos = []
		for vod in ListRe:
			lastVideo = vod[1]
			title =vod[0]
			tid=vod[2]
			img = "https://agit.ai/lanhaidixingren/Tvbox/raw/branch/master/%E5%8D%93%E9%9B%85%281%29.jpg"
			if len(lastVideo) == 0:
				lastVideo = '_'
			guid = tid+'###'+vod[1]+'###'+lastVideo+'###'+img
			videos.append({
				"vod_id":guid,
				"vod_name":title,
				"vod_pic":img,
				"vod_remarks":''
			})
		return videos
	def get_collection_xg(self,html):
		videoList = []
		pattern = re.compile(r'title="(.+?)"\s*href="(.+?&amp;)".+? src="(.+?)"')
		ListRe=pattern.findall(html)
		for video in ListRe:
			videoList.append("0吕"+video[0]+"$https://www.ixigua.com"+video[1].replace('&amp;' , '&'))
		return videoList
	#访问网页
	def webReadFile(self,urlStr):
		headers = {
			'Referer':urlStr,
			'User-Agent': 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
			'Host': 'www.ixigua.com'
		}
		if urlStr.find("http")<0:
			return ""
		req = urllib.request.Request(url=urlStr, headers=headers)
		html = urllib.request.urlopen(req).read().decode('utf-8')
		return html
	config = {
		"player": {},
		"filter": {}
	}
	header = {
		"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36",
		"Referer": "https://www.ixigua.com/",
		'Host': 'www.ixigua.com'
	}


	def localProxy(self,param):
		return [200, "video/MP2T", action, ""]