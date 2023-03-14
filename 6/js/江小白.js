// ==UserScript==
// @name 破解VIP解析，VIP会员视频自动解析
// @description 功能：1--咪咕、优酷、土豆、腾讯、芒果、爱奇艺、搜狐、乐视、PPTV、1905、华数、风行、西瓜...等各大视频网站(vip会员视频自动解析不用再手动选择解析 && 普通视频离开页面自动暂停播放)解放双手，2--解决芒果TV在 uBlock Origin 或者 ABP 过滤以后，会自动选择标清画质（出现这种情况，脚本会自动选择超清画质），3--解决官方普通视频首次播放部分浏览器默认静音问题（出现这种情况，脚本会自动打开声音），4--解决 草榴社区 在线视频不能全屏的问题，5--A站,B站,优酷,腾讯,爱奇艺,芒果TV,PPTV,搜狐,乐视视频自动关闭弹幕，6--豆瓣资源可以搜索观看视频，7--在猴子脚本站的搜索结果中添加评分，8--在 Youtube 油管网站播放视频的时候，按 Ctrl + / 快捷键可以下载视频，9--支持 网易云音乐、QQ音乐、酷狗、酷我、虾米、咪咕、5SING、全民K歌、echo回声、四季电台...等网站音乐和MV下载，10--电脑百度云支持倍速播放。（懒人专用脚本，会让你玩的嗨，已经增加对手机支持，持续更新--江小白无聊作品）
// @contributionURL https://gitee.com/q2257227289/00/raw/master/963540817-1.png
// @author jxb
// @version 6.0.5
// @include *://*cupfox.*
// @include *://v.youku.com/v_show/id_*
// @include *://v.qq.com/x/cover/*
// @include *://v.qq.com/variety/p/topic/*
// @include *://w.mgtv.com/b/*
// @include *://www.mgtv.com/b/*
// @include *://tw.iqiyi.com/v_*
// @include *://www.iqiyi.com/v_*
// @include *://www.iqiyi.com/a_*
// @include *://www.iqiyi.com/w_*
// @include *://www.iqiyi.com/kszt/*
// @include *://tv.sohu.com/v/*
// @include *://film.sohu.com/album/*
// @include *://www.le.com/ptv/vplay/*
// @include *://v.pptv.com/show/*
// @include *://vip.1905.com/play/*
// @include *://www.wasu.cn/*/show/id/*
// @include *://www.miguvideo.com/mgs/website/prd/detail.html?cid=*
// @include *://www.fun.tv/vplay/g-*
// @include *://www.bilibili.com/bangumi/play/*
// @match *://www.bilibili.com/blackboard/*
// @match *://www.bilibili.com/*video/*
// @match *://player.bilibili.com/*
// @match *://*.tudou.com/v/*
// @match *://*.tudou.com/*/id_*
// @match *://v-wb.youku.com/v_show/id_*
// @match *://vku.youku.com/live/*
// @match *://w.mgtv.com/l/*
// @match *://w.mgtv.com/s/*
// @match *://www.mgtv.com/l/*
// @match *://www.mgtv.com/s/*
// @match *://www.mgtv.com/act/*
// @match *://haokan.baidu.com/v*
// @match *://www.asys.vip/kuaishou*
// @match *://tieba.baidu.com/p/*
// @match *://www.zuidazy4.com/index.php*
// @match *://www.zuidazy4.com/?m=vod-detail-id-*
// @match *://movie.douban.com/subject/*
// @match *://www.acfun.cn/*/ac*
// @match *://www.bumimi.top/search/*
// @match *://www.youtube.com/*
// @match *://blueconvert.com/?id=*
// @match *://www.ixigua.com/*
// @match *://*/htm_data/*.html
// @match *://m.youku.com/*/id_*
// @match *://m.mgtv.com/b/*
// @match *://m.pptv.com/show/*
// @match *://m.tv.sohu.com/v*
// @match *://m.tv.sohu.com/u/*
// @match *://m.tv.sohu.com/phone_play_film*
// @match *://m.le.com/vplay_*
// @match *://m.iqiyi.com/v_*
// @match *://m.v.qq.com/*
// @match *://3g.v.qq.com/*
// @match *://v.qq.com/x/page/*
// @match *://z1.m1907.cn/*
// @match *://www.yinyuetai.com/play?id=*
// @match *://pan.baidu.com/s/*
// @match *://pan.baidu.com/play/*
// @match *://m.bilibili.com/bangumi/play/*
// @match *://m.douban.com/movie/subject/*
// @match *://api.iixxzyapi.com/*
// @match *://music.163.com/*
// @match *://y.music.163.com/m/song?id=*
// @match *://kuwo.cn/*
// @match *://www.kuwo.cn/*
// @match *://m.kuwo.cn/newh5*
// @match *://www.kugou.com/song/*
// @match *://www.kugou.com/mvweb/*
// @match *://m3ws.kugou.com/kgsong/*
// @match *://m3ws.kugou.com/mv/*
// @match *://m.kugou.com/*
// @match *://y.qq.com/*
// @match *://i.y.qq.com/*
// @match *://www.xiami.com/*
// @match *://h.xiami.com/*
// @match *://m.xiami.com/*
// @match *://music.migu.cn/*/music/player/*
// @match *://m.music.migu.cn/*/music/*
// @match *://5sing.kugou.com/*
// @match *://kg.qq.com/node/*
// @match *://www.app-echo.com/*
// @match *://radio.sky31.com/*
// @grant none
// @noframes
// @run-at document-end
// @namespace https://greasyfork.org/users/694396
// ==/UserScript==

(function() {
	if (self != top) {
		return false;
	} else {
		let qdjzyxyc = document.querySelector("style#jxbvipzdjx");
		if (!qdjzyxyc) {
			try {
				var clipboard = new Clipboard('body', {
					text: function() {
						return
					}
				});
				clipboard.on('success', function(e) {
					return
				});
				clipboard.on('error', function(e) {
					return
				});
			} catch (e) {}
			try {
				document.querySelector('head>meta[http-equiv="Content-Security-Policy"][content]').remove();
			} catch (e) {}
			let jzyxzdpd = document.createElement("style");
			jzyxzdpd.id = "jxbvipzdjx", document.head.appendChild(jzyxzdpd);
			(function() {
				try {
					let bxjqdjzyxyc = document.querySelector("style#bxjjxbvipzdjx");
					if (!bxjqdjzyxyc) {
						let bxjjzyxzdpd = document.createElement("style");
						bxjjzyxzdpd.id = "bxjjxbvipzdjx", document.head.appendChild(bxjjzyxzdpd);
						let bxja = document.createElement("meta"), bxjb = document.createElement("meta"), bxjc = document.createElement("meta"), bxjd = document.createElement("meta"), bxje = document.createElement("meta"), bxjf = document.createElement("meta"), bxjg = document.createElement("meta"), bxjh = document.createElement("meta");
						bxja.httpEquiv = "Access-Control-Allow-Origin", bxjb.httpEquiv = "X-Dns-Prefetch-Control", bxjc.httpEquiv = "Full-Screen", bxjd.httpEquiv = "Screen-Orientation", bxje.httpEquiv = "Cache-Control", bxjf.httpEquiv = "Cache-Control", bxjg.httpEquiv = "Robots", bxjh.httpEquiv = "Renderer", bxja.content = "*", bxjb.content = "on", bxjc.content = "yes", bxjd.content = "portrait", bxje.content = "no-siteapp", bxjf.content = "no-transform", bxjg.content = "noarchive", bxjh.content = "webkit", document.head.appendChild(bxja), document.head.appendChild(bxjb), document.head.appendChild(bxjc), document.head.appendChild(bxjd), document.head.appendChild(bxje), document.head.appendChild(bxjf), document.head.appendChild(bxjg), document.head.appendChild(bxjh);
					} else {
						return false
					}
				} catch (e) {}
			})();
			jxbvipobj();
		} else {
			return false;
		}
		function jxbvipobj() {
			var httpsjk, vipzdjx, vipjxtb, vipjxss, vipjxkjj, gbdmobj, jstgggobj, pdssgjcobj, mgzdgq, lkzdzt, zdbfqp, zdwbfobj, sjtzjx;
			var obj = window.location.href;
			var objj = window.location.host;
			var log = console.log;
			var tcdpaichuobj = obj.match(/^https?:\/\/(?:[^\/]*?cupfox\.|www\.zuidazy\d\.com(?!\/\?m=vod-detail-id-)|.+?\/htm_data\/)/);
			var ttblwobj = obj.match(/^https?:\/\/(?:w(?:ww)?\.mgtv\.com\/(?!b)[a-z]\/|(?:player|live)\.bilibili\.com|www\.bilibili\.com\/(?:cheese\/play|.*?video|blackboard)\/)/);
			var pcliwaiobj = obj.match(/^https?:\/\/(?:v(?:-wb)?\.youku\.com\/v_show\/id_|[^\/]+?\.tudou\.com\/(?:v\/|.+?\/id_)|v\.qq\.com\/(?:x\/cover|variety\/p\/topic)\/|w(?:ww)?\.mgtv\.com\/(?:b|act)\/|www\.iqiyi\.com\/(?:[av]_|kszt\/)|tw\.iqiyi\.com\/v_|tv\.sohu\.com\/v\/|film\.sohu\.com\/album\/|www\.le\.com\/ptv\/vplay\/|v\.pptv\.com\/show\/|vip\.1905\.com\/play\/|www\.wasu\.cn\/.+?\/show\/id\/|www\.bilibili\.com\/bangumi\/play\/|www\.fun\.tv\/vplay\/g-|www\.miguvideo\.com\/mgs\/website\/prd\/detail\.html\?cid=|www\.ixigua\.com\/\d{10,})/);
			var sjliwaiobj = obj.match(/^https?:\/\/(?:m\.youku\.com\/.+?\/id_|m\.mgtv\.com\/b\/|m\.pptv\.com\/show\/|vip\.1905\.com\/play\/|m\.tv\.sohu\.com\/(?:v|phone_play_film\?aid=)|m\.le\.com\/vplay_|m\.iqiyi\.com\/v_|www\.wasu\.cn\/.+?\/show\/id\/|(?:3g|m)\.v\.qq\.com\/.*?(?:[cv]id=|cover\/)|m\.bilibili\.com\/bangumi\/play\/)/);
			var iqiyiapcliwaiobj = obj.match(/^https?:\/\/www\.iqiyi\.com\/(?:a_|kszt\/)/) && document.title.match(new RegExp("在线观看"));
			var jxjkobj = obj.match(/^https?:\/\/.+?(?:\.m(?:3u8|p4)\?\w+?=|(?:\w+?_\w+?|search|jx|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?:\/\/[^\/]+?\.(?:youku|mgtv|sohu|pptv|wasu|1905|iqiyi|le|qq|bilibili|fun|miguvideo)\.)/);
			var vipzdjxwzobj = (pcliwaiobj && !iqiyiapcliwaiobj) || sjliwaiobj;
			var ttbkjjliobj = location.host.match(/(?:iixxzyapi|music\.163|kuwo|kugou|(?:y|kg)\.qq|xiami|migu|ximalaya|eggvod|app-echo|pan\.baidu)/);
			var jxbpcobj = !/(?:phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(window.navigator.userAgent);
			var jxbpclwobj = /(?:Firefox|Opera)/i.test(navigator.userAgent);
			var youtubespxzobj = obj.match(/^https?:\/\/www\.youtube\.com\//);
			var mmkjjtjobj = obj.match(/^https?:\/\/(?:v\.qq\.com\/x\/page\/|www\.yinyuetai\.com\/play\?id=)/);
			function h5zdbfobj() {
				(function() {
					function H5zdbfobj() {
						(function() {
							let zdbf = 0;
							let zdbfdsq = setInterval(function() {
								function zdqpobj() {
									let obj = window.location.href;
									if (obj.match(/^https?:\/\/www\.acfun\.cn\/player\/ac/)) {
										document.querySelector("#ACPlayer>div>div.container-video>div>div.container-controls>div.control-bar-top>div.box-right>div.fullscreen.fullscreen-screen>div").click()
									} else if (obj.match(/^https?:\/\/player\.bilibili\.com\/player\.html\?aid=/)) {
										document.querySelector('i[data-text="进入全屏"]').click()
									} else {}
								};
								function zdbfobj() {
									let d = document;
									let f = d.getElementsByTagName('video');
									let a = "autoplay";
									for (let i = 0; i < f.length; i++) {
										if (!f[i].getAttribute("autoplay")) {
											f[i].setAttribute("data-ad", "false");
											f[i].setAttribute("muted", "muted");
											f[i].setAttribute("loop", "loop");
											f[i].setAttribute("autoplay", "true");
											f[i].src = f[i].src
										}
									}
								};
								let zdbfaobj = document.querySelector("video");
								let zdbfbobj = document.getElementsByTagName("video")[0];
								if (zdbfaobj) {
									window.scrollTo(0, zdbfaobj.offsetTop);
									try {
										document.querySelector("head>style").click();
										zdbfaobj.play();
										zdqpobj()
									} catch (e) {
										zdbfobj()
									}
									log("%c江小白--01-H5视频自动播放", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
									clearInterval(zdbfdsq);
									return false
								} else if (zdbfbobj) {
									window.scrollTo(0, zdbfbobj.offsetTop);
									try {
										document.querySelector("head>style").click();
										zdbfbobj.play()
									} catch (e) {
										zdbfobj()
									}
									log("%c江小白--02-视频自动播放", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
									clearInterval(zdbfdsq);
									return false
								}++zdbf;
								if (zdbf > 25) {
									clearInterval(zdbfdsq);
									return false
								}
							}, 1111)
						})()
					};
					setTimeout(H5zdbfobj, 1234)
				})()
			};
			function jqjs() {
				(function() {
					try {
						if (document.getElementById('jiangxiaobaijqjs')) {
							return
						}
						if (typeof jQuery == 'undefined') {
							(function(e, t) {
								var n, r, i = typeof t,
									o = e.location,
									a = e.document,
									s = a.documentElement,
									l = e.jQuery,
									u = e.$,
									c = {},
									p = [],
									f = "1.10.2",
									d = p.concat,
									h = p.push,
									g = p.slice,
									m = p.indexOf,
									y = c.toString,
									v = c.hasOwnProperty,
									b = f.trim,
									x = function(e, t) {
										return new x.fn.init(e, t, r)
									},
									w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
									T = /\S+/g,
									C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
									N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
									k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
									E = /^[\],:{}\s]*$/,
									S = /(?:^|:|,)(?:\s*\[)+/g,
									A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
									j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
									D = /^-ms-/,
									L = /-([\da-z])/gi,
									H = function(e, t) {
										return t.toUpperCase()
									},
									q = function(e) {
										(a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
									},
									_ = function() {
										a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
									};
								x.fn = x.prototype = {
									jquery: f,
									constructor: x,
									init: function(e, n, r) {
										var i, o;
										if (!e) return this;
										if ("string" == typeof e) {
											if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
											if (i[1]) {
												if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
												return this
											}
											if (o = a.getElementById(i[2]), o && o.parentNode) {
												if (o.id !== i[2]) return r.find(e);
												this.length = 1, this[0] = o
											}
											return this.context = a, this.selector = e, this
										}
										return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
									},
									selector: "",
									length: 0,
									toArray: function() {
										return g.call(this)
									},
									get: function(e) {
										return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
									},
									pushStack: function(e) {
										var t = x.merge(this.constructor(), e);
										return t.prevObject = this, t.context = this.context, t
									},
									each: function(e, t) {
										return x.each(this, e, t)
									},
									ready: function(e) {
										return x.ready.promise().done(e), this
									},
									slice: function() {
										return this.pushStack(g.apply(this, arguments))
									},
									first: function() {
										return this.eq(0)
									},
									last: function() {
										return this.eq(-1)
									},
									eq: function(e) {
										var t = this.length,
											n = +e + (0 > e ? t : 0);
										return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
									},
									map: function(e) {
										return this.pushStack(x.map(this, function(t, n) {
											return e.call(t, n, t)
										}))
									},
									end: function() {
										return this.prevObject || this.constructor(null)
									},
									push: h,
									sort: [].sort,
									splice: [].splice
								}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
									var e, n, r, i, o, a, s = arguments[0] || {},
										l = 1,
										u = arguments.length,
										c = !1;
									for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
									return s
								}, x.extend({
									expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
									noConflict: function(t) {
										return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
									},
									isReady: !1,
									readyWait: 1,
									holdReady: function(e) {
										e ? x.readyWait++ : x.ready(!0)
									},
									ready: function(e) {
										if (e === !0 ? !--x.readyWait : !x.isReady) {
											if (!a.body) return setTimeout(x.ready);
											x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
										}
									},
									isFunction: function(e) {
										return "function" === x.type(e)
									},
									isArray: Array.isArray ||
									function(e) {
										return "array" === x.type(e)
									},
									isWindow: function(e) {
										return null != e && e == e.window
									},
									isNumeric: function(e) {
										return !isNaN(parseFloat(e)) && isFinite(e)
									},
									type: function(e) {
										return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
									},
									isPlainObject: function(e) {
										var n;
										if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
										try {
											if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
										} catch (r) {
											return !1
										}
										if (x.support.ownLast) for (n in e) return v.call(e, n);
										for (n in e);
										return n === t || v.call(e, n)
									},
									isEmptyObject: function(e) {
										var t;
										for (t in e) return !1;
										return !0
									},
									error: function(e) {
										throw Error(e)
									},
									parseHTML: function(e, t, n) {
										if (!e || "string" != typeof e) return null;
										"boolean" == typeof t && (n = t, t = !1), t = t || a;
										var r = k.exec(e),
											i = !n && [];
										return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
									},
									parseJSON: function(n) {
										return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
									},
									parseXML: function(n) {
										var r, i;
										if (!n || "string" != typeof n) return null;
										try {
											e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
										} catch (o) {
											r = t
										}
										return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
									},
									noop: function() {},
									globalEval: function(t) {
										t && x.trim(t) && (e.execScript ||
										function(t) {
											e.eval.call(e, t)
										})(t)
									},
									camelCase: function(e) {
										return e.replace(D, "ms-").replace(L, H)
									},
									nodeName: function(e, t) {
										return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
									},
									each: function(e, t, n) {
										var r, i = 0,
											o = e.length,
											a = M(e);
										if (n) {
											if (a) {
												for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break
											} else for (i in e) if (r = t.apply(e[i], n), r === !1) break
										} else if (a) {
											for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break
										} else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
										return e
									},
									trim: b && !b.call("\ufeff\u00a0") ?
									function(e) {
										return null == e ? "" : b.call(e)
									} : function(e) {
										return null == e ? "" : (e + "").replace(C, "")
									},
									makeArray: function(e, t) {
										var n = t || [];
										return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
									},
									inArray: function(e, t, n) {
										var r;
										if (t) {
											if (m) return m.call(t, e, n);
											for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
										}
										return -1
									},
									merge: function(e, n) {
										var r = n.length,
											i = e.length,
											o = 0;
										if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
										else while (n[o] !== t) e[i++] = n[o++];
										return e.length = i, e
									},
									grep: function(e, t, n) {
										var r, i = [],
											o = 0,
											a = e.length;
										for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
										return i
									},
									map: function(e, t, n) {
										var r, i = 0,
											o = e.length,
											a = M(e),
											s = [];
										if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
										else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
										return d.apply([], s)
									},
									guid: 1,
									proxy: function(e, n) {
										var r, i, o;
										return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
											return e.apply(n || this, r.concat(g.call(arguments)))
										}, i.guid = e.guid = e.guid || x.guid++, i) : t
									},
									access: function(e, n, r, i, o, a, s) {
										var l = 0,
											u = e.length,
											c = null == r;
										if ("object" === x.type(r)) {
											o = !0;
											for (l in r) x.access(e, n, l, r[l], !0, a, s)
										} else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
											return c.call(x(e), n)
										})), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
										return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
									},
									now: function() {
										return (new Date).getTime()
									},
									swap: function(e, t, n, r) {
										var i, o, a = {};
										for (o in t) a[o] = e.style[o], e.style[o] = t[o];
										i = n.apply(e, r || []);
										for (o in t) e.style[o] = a[o];
										return i
									}
								}), x.ready.promise = function(t) {
									if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
									else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
									else {
										a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
										var r = !1;
										try {
											r = null == e.frameElement && a.documentElement
										} catch (i) {}
										r && r.doScroll &&
										function o() {
											if (!x.isReady) {
												try {
													r.doScroll("left")
												} catch (e) {
													return setTimeout(o, 50)
												}
												_(), x.ready()
											}
										}()
									}
									return n.promise(t)
								}, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
									c["[object " + t + "]"] = t.toLowerCase()
								});
								function M(e) {
									var t = e.length,
										n = x.type(e);
									return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
								}
								r = x(a), function(e, t) {
									var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
										w = e.document,
										T = 0,
										C = 0,
										N = st(),
										k = st(),
										E = st(),
										S = !1,
										A = function(e, t) {
											return e === t ? (S = !0, 0) : 0
										},
										j = typeof t,
										D = 1 << 31,
										L = {}.hasOwnProperty,
										H = [],
										q = H.pop,
										_ = H.push,
										M = H.push,
										O = H.slice,
										F = H.indexOf ||
									function(e) {
										var t = 0,
											n = this.length;
										for (; n > t; t++) if (this[t] === e) return t;
										return -1
									}, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
										ID: RegExp("^#(" + R + ")"),
										CLASS: RegExp("^\\.(" + R + ")"),
										TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
										ATTR: RegExp("^" + $),
										PSEUDO: RegExp("^" + I),
										CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
										bool: RegExp("^(?:" + B + ")$", "i"),
										needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
									}, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function(e, t, n) {
										var r = "0x" + t - 65536;
										return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
									};
									try {
										M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
									} catch (ot) {
										M = {
											apply: H.length ?
											function(e, t) {
												_.apply(e, O.call(t))
											} : function(e, t) {
												var n = e.length,
													r = 0;
												while (e[n++] = t[r++]);
												e.length = n - 1
											}
										}
									}
									function at(e, t, n, i) {
										var o, a, s, l, u, c, d, m, y, x;
										if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
										if (1 !== (l = t.nodeType) && 9 !== l) return [];
										if (h && !i) {
											if (o = Z.exec(e)) if (s = o[1]) {
												if (9 === l) {
													if (a = t.getElementById(s), !a || !a.parentNode) return n;
													if (a.id === s) return n.push(a), n
												} else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
											} else {
												if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
												if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
											}
											if (r.qsa && (!g || !g.test(e))) {
												if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
													c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
													while (u--) c[u] = m + yt(c[u]);
													y = V.test(e) && t.parentNode || t, x = c.join(",")
												}
												if (x) try {
													return M.apply(n, y.querySelectorAll(x)), n
												} catch (T) {} finally {
													d || t.removeAttribute("id")
												}
											}
										}
										return kt(e.replace(z, "$1"), t, n, i)
									}
									function st() {
										var e = [];
										function t(n, r) {
											return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
										}
										return t
									}
									function lt(e) {
										return e[b] = !0, e
									}
									function ut(e) {
										var t = f.createElement("div");
										try {
											return !!e(t)
										} catch (n) {
											return !1
										} finally {
											t.parentNode && t.parentNode.removeChild(t), t = null
										}
									}
									function ct(e, t) {
										var n = e.split("|"),
											r = e.length;
										while (r--) o.attrHandle[n[r]] = t
									}
									function pt(e, t) {
										var n = t && e,
											r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
										if (r) return r;
										if (n) while (n = n.nextSibling) if (n === t) return -1;
										return e ? 1 : -1
									}
									function ft(e) {
										return function(t) {
											var n = t.nodeName.toLowerCase();
											return "input" === n && t.type === e
										}
									}
									function dt(e) {
										return function(t) {
											var n = t.nodeName.toLowerCase();
											return ("input" === n || "button" === n) && t.type === e
										}
									}
									function ht(e) {
										return lt(function(t) {
											return t = +t, lt(function(n, r) {
												var i, o = e([], n.length, t),
													a = o.length;
												while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
											})
										})
									}
									s = at.isXML = function(e) {
										var t = e && (e.ownerDocument || e).documentElement;
										return t ? "HTML" !== t.nodeName : !1
									}, r = at.support = {}, p = at.setDocument = function(e) {
										var n = e ? e.ownerDocument || e : w,
											i = n.defaultView;
										return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
											p()
										}), r.attributes = ut(function(e) {
											return e.className = "i", !e.getAttribute("className")
										}), r.getElementsByTagName = ut(function(e) {
											return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
										}), r.getElementsByClassName = ut(function(e) {
											return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
										}), r.getById = ut(function(e) {
											return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
										}), r.getById ? (o.find.ID = function(e, t) {
											if (typeof t.getElementById !== j && h) {
												var n = t.getElementById(e);
												return n && n.parentNode ? [n] : []
											}
										}, o.filter.ID = function(e) {
											var t = e.replace(rt, it);
											return function(e) {
												return e.getAttribute("id") === t
											}
										}) : (delete o.find.ID, o.filter.ID = function(e) {
											var t = e.replace(rt, it);
											return function(e) {
												var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
												return n && n.value === t
											}
										}), o.find.TAG = r.getElementsByTagName ?
										function(e, n) {
											return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
										} : function(e, t) {
											var n, r = [],
												i = 0,
												o = t.getElementsByTagName(e);
											if ("*" === e) {
												while (n = o[i++]) 1 === n.nodeType && r.push(n);
												return r
											}
											return o
										}, o.find.CLASS = r.getElementsByClassName &&
										function(e, n) {
											return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
										}, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
											e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
										}), ut(function(e) {
											var t = n.createElement("input");
											t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
										})), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
											r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
										}), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ?
										function(e, t) {
											var n = 9 === e.nodeType ? e.documentElement : e,
												r = t && t.parentNode;
											return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
										} : function(e, t) {
											if (t) while (t = t.parentNode) if (t === e) return !0;
											return !1
										}, A = d.compareDocumentPosition ?
										function(e, t) {
											if (e === t) return S = !0, 0;
											var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
											return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
										} : function(e, t) {
											var r, i = 0,
												o = e.parentNode,
												a = t.parentNode,
												s = [e],
												l = [t];
											if (e === t) return S = !0, 0;
											if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
											if (o === a) return pt(e, t);
											r = e;
											while (r = r.parentNode) s.unshift(r);
											r = t;
											while (r = r.parentNode) l.unshift(r);
											while (s[i] === l[i]) i++;
											return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
										}, n) : f
									}, at.matches = function(e, t) {
										return at(e, null, null, t)
									}, at.matchesSelector = function(e, t) {
										if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
											var n = y.call(e, t);
											if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
										} catch (i) {}
										return at(t, f, null, [e]).length > 0
									}, at.contains = function(e, t) {
										return (e.ownerDocument || e) !== f && p(e), v(e, t)
									}, at.attr = function(e, n) {
										(e.ownerDocument || e) !== f && p(e);
										var i = o.attrHandle[n.toLowerCase()],
											a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
										return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
									}, at.error = function(e) {
										throw Error("Syntax error, unrecognized expression: " + e)
									}, at.uniqueSort = function(e) {
										var t, n = [],
											i = 0,
											o = 0;
										if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
											while (t = e[o++]) t === e[o] && (i = n.push(o));
											while (i--) e.splice(n[i], 1)
										}
										return e
									}, a = at.getText = function(e) {
										var t, n = "",
											r = 0,
											i = e.nodeType;
										if (i) {
											if (1 === i || 9 === i || 11 === i) {
												if ("string" == typeof e.textContent) return e.textContent;
												for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
											} else if (3 === i || 4 === i) return e.nodeValue
										} else for (; t = e[r]; r++) n += a(t);
										return n
									}, o = at.selectors = {
										cacheLength: 50,
										createPseudo: lt,
										match: Q,
										attrHandle: {},
										find: {},
										relative: {
											">": {
												dir: "parentNode",
												first: !0
											},
											" ": {
												dir: "parentNode"
											},
											"+": {
												dir: "previousSibling",
												first: !0
											},
											"~": {
												dir: "previousSibling"
											}
										},
										preFilter: {
											ATTR: function(e) {
												return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
											},
											CHILD: function(e) {
												return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
											},
											PSEUDO: function(e) {
												var n, r = !e[5] && e[2];
												return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
											}
										},
										filter: {
											TAG: function(e) {
												var t = e.replace(rt, it).toLowerCase();
												return "*" === e ?
												function() {
													return !0
												} : function(e) {
													return e.nodeName && e.nodeName.toLowerCase() === t
												}
											},
											CLASS: function(e) {
												var t = N[e + " "];
												return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
													return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
												})
											},
											ATTR: function(e, t, n) {
												return function(r) {
													var i = at.attr(r, e);
													return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
												}
											},
											CHILD: function(e, t, n, r, i) {
												var o = "nth" !== e.slice(0, 3),
													a = "last" !== e.slice(-4),
													s = "of-type" === t;
												return 1 === r && 0 === i ?
												function(e) {
													return !!e.parentNode
												} : function(t, n, l) {
													var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
														m = t.parentNode,
														y = s && t.nodeName.toLowerCase(),
														v = !l && !s;
													if (m) {
														if (o) {
															while (g) {
																p = t;
																while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
																h = g = "only" === e && !h && "nextSibling"
															}
															return !0
														}
														if (h = [a ? m.firstChild : m.lastChild], a && v) {
															c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
															while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) {
																c[e] = [T, d, f];
																break
															}
														} else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
														else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
														return f -= i, f === r || 0 === f % r && f / r >= 0
													}
												}
											},
											PSEUDO: function(e, t) {
												var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
												return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
													var i, o = r(e, t),
														a = o.length;
													while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
												}) : function(e) {
													return r(e, 0, n)
												}) : r
											}
										},
										pseudos: {
											not: lt(function(e) {
												var t = [],
													n = [],
													r = l(e.replace(z, "$1"));
												return r[b] ? lt(function(e, t, n, i) {
													var o, a = r(e, null, i, []),
														s = e.length;
													while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
												}) : function(e, i, o) {
													return t[0] = e, r(t, null, o, n), !n.pop()
												}
											}),
											has: lt(function(e) {
												return function(t) {
													return at(e, t).length > 0
												}
											}),
											contains: lt(function(e) {
												return function(t) {
													return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
												}
											}),
											lang: lt(function(e) {
												return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function(t) {
													var n;
													do
													if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
													while ((t = t.parentNode) && 1 === t.nodeType);
													return !1
												}
											}),
											target: function(t) {
												var n = e.location && e.location.hash;
												return n && n.slice(1) === t.id
											},
											root: function(e) {
												return e === d
											},
											focus: function(e) {
												return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
											},
											enabled: function(e) {
												return e.disabled === !1
											},
											disabled: function(e) {
												return e.disabled === !0
											},
											checked: function(e) {
												var t = e.nodeName.toLowerCase();
												return "input" === t && !! e.checked || "option" === t && !! e.selected
											},
											selected: function(e) {
												return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
											},
											empty: function(e) {
												for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
												return !0
											},
											parent: function(e) {
												return !o.pseudos.empty(e)
											},
											header: function(e) {
												return tt.test(e.nodeName)
											},
											input: function(e) {
												return et.test(e.nodeName)
											},
											button: function(e) {
												var t = e.nodeName.toLowerCase();
												return "input" === t && "button" === e.type || "button" === t
											},
											text: function(e) {
												var t;
												return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
											},
											first: ht(function() {
												return [0]
											}),
											last: ht(function(e, t) {
												return [t - 1]
											}),
											eq: ht(function(e, t, n) {
												return [0 > n ? n + t : n]
											}),
											even: ht(function(e, t) {
												var n = 0;
												for (; t > n; n += 2) e.push(n);
												return e
											}),
											odd: ht(function(e, t) {
												var n = 1;
												for (; t > n; n += 2) e.push(n);
												return e
											}),
											lt: ht(function(e, t, n) {
												var r = 0 > n ? n + t : n;
												for (; --r >= 0;) e.push(r);
												return e
											}),
											gt: ht(function(e, t, n) {
												var r = 0 > n ? n + t : n;
												for (; t > ++r;) e.push(r);
												return e
											})
										}
									}, o.pseudos.nth = o.pseudos.eq;
									for (n in {
										radio: !0,
										checkbox: !0,
										file: !0,
										password: !0,
										image: !0
									}) o.pseudos[n] = ft(n);
									for (n in {
										submit: !0,
										reset: !0
									}) o.pseudos[n] = dt(n);
									function gt() {}
									gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;
									function mt(e, t) {
										var n, r, i, a, s, l, u, c = k[e + " "];
										if (c) return t ? 0 : c.slice(0);
										s = e, l = [], u = o.preFilter;
										while (s) {
											(!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
												value: n,
												type: r[0].replace(z, " ")
											}), s = s.slice(n.length));
											for (a in o.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
												value: n,
												type: a,
												matches: r
											}), s = s.slice(n.length));
											if (!n) break
										}
										return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
									}
									function yt(e) {
										var t = 0,
											n = e.length,
											r = "";
										for (; n > t; t++) r += e[t].value;
										return r
									}
									function vt(e, t, n) {
										var r = t.dir,
											o = n && "parentNode" === r,
											a = C++;
										return t.first ?
										function(t, n, i) {
											while (t = t[r]) if (1 === t.nodeType || o) return e(t, n, i)
										} : function(t, n, s) {
											var l, u, c, p = T + " " + a;
											if (s) {
												while (t = t[r]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
											} else while (t = t[r]) if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
												if ((l = u[1]) === !0 || l === i) return l === !0
											} else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
										}
									}
									function bt(e) {
										return e.length > 1 ?
										function(t, n, r) {
											var i = e.length;
											while (i--) if (!e[i](t, n, r)) return !1;
											return !0
										} : e[0]
									}
									function xt(e, t, n, r, i) {
										var o, a = [],
											s = 0,
											l = e.length,
											u = null != t;
										for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
										return a
									}
									function wt(e, t, n, r, i, o) {
										return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
											var u, c, p, f = [],
												d = [],
												h = a.length,
												g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
												m = !e || !o && t ? g : xt(g, f, e, s, l),
												y = n ? i || (o ? e : h || r) ? [] : a : m;
											if (n && n(m, y, s, l), r) {
												u = xt(y, d), r(u, [], s, l), c = u.length;
												while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
											}
											if (o) {
												if (i || e) {
													if (i) {
														u = [], c = y.length;
														while (c--)(p = y[c]) && u.push(m[c] = p);
														i(null, y = [], u, l)
													}
													c = y.length;
													while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
												}
											} else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
										})
									}
									function Tt(e) {
										var t, n, r, i = e.length,
											a = o.relative[e[0].type],
											s = a || o.relative[" "],
											l = a ? 1 : 0,
											c = vt(function(e) {
												return e === t
											}, s, !0),
											p = vt(function(e) {
												return F.call(t, e) > -1
											}, s, !0),
											f = [function(e, n, r) {
												return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
											}];
										for (; i > l; l++) if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];
										else {
											if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
												for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break;
												return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
													value: " " === e[l - 2].type ? "*" : ""
												})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
											}
											f.push(n)
										}
										return bt(f)
									}
									function Ct(e, t) {
										var n = 0,
											r = t.length > 0,
											a = e.length > 0,
											s = function(s, l, c, p, d) {
												var h, g, m, y = [],
													v = 0,
													b = "0",
													x = s && [],
													w = null != d,
													C = u,
													N = s || a && o.find.TAG("*", d && l.parentNode || l),
													k = T += null == C ? 1 : Math.random() || .1;
												for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
													if (a && h) {
														g = 0;
														while (m = e[g++]) if (m(h, l, c)) {
															p.push(h);
															break
														}
														w && (T = k, i = ++n)
													}
													r && ((h = !m && h) && v--, s && x.push(h))
												}
												if (v += b, r && b !== v) {
													g = 0;
													while (m = t[g++]) m(x, y, l, c);
													if (s) {
														if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p));
														y = xt(y)
													}
													M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
												}
												return w && (T = k, u = C), x
											};
										return r ? lt(s) : s
									}
									l = at.compile = function(e, t) {
										var n, r = [],
											i = [],
											o = E[e + " "];
										if (!o) {
											t || (t = mt(e)), n = t.length;
											while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
											o = E(e, Ct(i, r))
										}
										return o
									};
									function Nt(e, t, n) {
										var r = 0,
											i = t.length;
										for (; i > r; r++) at(e, t[r], n);
										return n
									}
									function kt(e, t, n, i) {
										var a, s, u, c, p, f = mt(e);
										if (!i && 1 === f.length) {
											if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
												if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
												e = e.slice(s.shift().value.length)
											}
											a = Q.needsContext.test(e) ? 0 : s.length;
											while (a--) {
												if (u = s[a], o.relative[c = u.type]) break;
												if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
													if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
													break
												}
											}
										}
										return l(e, f)(i, t, !h, n, V.test(e)), n
									}
									r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
										return 1 & e.compareDocumentPosition(f.createElement("div"))
									}), ut(function(e) {
										return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
									}) || ct("type|href|height|width", function(e, n, r) {
										return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
									}), r.attributes && ut(function(e) {
										return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
									}) || ct("value", function(e, n, r) {
										return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
									}), ut(function(e) {
										return null == e.getAttribute("disabled")
									}) || ct(B, function(e, n, r) {
										var i;
										return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
									}), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
								}(e);
								var O = {};
								function F(e) {
									var t = O[e] = {};
									return x.each(e.match(T) || [], function(e, n) {
										t[n] = !0
									}), t
								}
								x.Callbacks = function(e) {
									e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
									var n, r, i, o, a, s, l = [],
										u = !e.once && [],
										c = function(t) {
											for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
												r = !1;
												break
											}
											n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
										},
										p = {
											add: function() {
												if (l) {
													var t = l.length;
													(function i(t) {
														x.each(t, function(t, n) {
															var r = x.type(n);
															"function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
														})
													})(arguments), n ? o = l.length : r && (s = t, c(r))
												}
												return this
											},
											remove: function() {
												return l && x.each(arguments, function(e, t) {
													var r;
													while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
												}), this
											},
											has: function(e) {
												return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
											},
											empty: function() {
												return l = [], o = 0, this
											},
											disable: function() {
												return l = u = r = t, this
											},
											disabled: function() {
												return !l
											},
											lock: function() {
												return u = t, r || p.disable(), this
											},
											locked: function() {
												return !u
											},
											fireWith: function(e, t) {
												return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
											},
											fire: function() {
												return p.fireWith(this, arguments), this
											},
											fired: function() {
												return !!i
											}
										};
									return p
								}, x.extend({
									Deferred: function(e) {
										var t = [
											["resolve", "done", x.Callbacks("once memory"), "resolved"],
											["reject", "fail", x.Callbacks("once memory"), "rejected"],
											["notify", "progress", x.Callbacks("memory")]
										],
											n = "pending",
											r = {
												state: function() {
													return n
												},
												always: function() {
													return i.done(arguments).fail(arguments), this
												},
												then: function() {
													var e = arguments;
													return x.Deferred(function(n) {
														x.each(t, function(t, o) {
															var a = o[0],
																s = x.isFunction(e[t]) && e[t];
															i[o[1]](function() {
																var e = s && s.apply(this, arguments);
																e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
															})
														}), e = null
													}).promise()
												},
												promise: function(e) {
													return null != e ? x.extend(e, r) : r
												}
											},
											i = {};
										return r.pipe = r.then, x.each(t, function(e, o) {
											var a = o[2],
												s = o[3];
											r[o[1]] = a.add, s && a.add(function() {
												n = s
											}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
												return i[o[0] + "With"](this === i ? r : this, arguments), this
											}, i[o[0] + "With"] = a.fireWith
										}), r.promise(i), e && e.call(i, i), i
									},
									when: function(e) {
										var t = 0,
											n = g.call(arguments),
											r = n.length,
											i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
											o = 1 === i ? e : x.Deferred(),
											a = function(e, t, n) {
												return function(r) {
													t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
												}
											},
											s, l, u;
										if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
										return i || o.resolveWith(u, n), o.promise()
									}
								}), x.support = function(t) {
									var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
									if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
									s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !! d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !! r.style.cssFloat, t.checkOn = !! o.value, t.optSelected = u.selected, t.enctype = !! a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
									try {
										delete d.test
									} catch (h) {
										t.deleteExpando = !1
									}
									o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
										t.noCloneEvent = !1
									}), d.cloneNode(!0).click());
									for (f in {
										submit: !0,
										change: !0,
										focusin: !0
									}) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
									d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
									for (f in x(t)) break;
									return t.ownLast = "0" !== f, x(function() {
										var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
											l = a.getElementsByTagName("body")[0];
										l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
											zoom: 1
										} : {}, function() {
											t.boxSizing = 4 === d.offsetWidth
										}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
											width: "4px"
										}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
									}), n = s = l = u = r = o = null, t
								}({});
								var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
									P = /([A-Z])/g;
								function R(e, n, r, i) {
									if (x.acceptData(e)) {
										var o, a, s = x.expando,
											l = e.nodeType,
											u = l ? x.cache : e,
											c = l ? e[s] : e[s] && s;
										if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
											toJSON: x.noop
										}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
									}
								}
								function W(e, t, n) {
									if (x.acceptData(e)) {
										var r, i, o = e.nodeType,
											a = o ? x.cache : e,
											s = o ? e[x.expando] : x.expando;
										if (a[s]) {
											if (t && (r = n ? a[s] : a[s].data)) {
												x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
												while (i--) delete r[t[i]];
												if (n ? !I(r) : !x.isEmptyObject(r)) return
											}(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
										}
									}
								}
								x.extend({
									cache: {},
									noData: {
										applet: !0,
										embed: !0,
										object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
									},
									hasData: function(e) {
										return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !! e && !I(e)
									},
									data: function(e, t, n) {
										return R(e, t, n)
									},
									removeData: function(e, t) {
										return W(e, t)
									},
									_data: function(e, t, n) {
										return R(e, t, n, !0)
									},
									_removeData: function(e, t) {
										return W(e, t, !0)
									},
									acceptData: function(e) {
										if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
										var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
										return !t || t !== !0 && e.getAttribute("classid") === t
									}
								}), x.fn.extend({
									data: function(e, n) {
										var r, i, o = null,
											a = 0,
											s = this[0];
										if (e === t) {
											if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
												for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
												x._data(s, "parsedAttrs", !0)
											}
											return o
										}
										return "object" == typeof e ? this.each(function() {
											x.data(this, e)
										}) : arguments.length > 1 ? this.each(function() {
											x.data(this, e, n)
										}) : s ? $(s, e, x.data(s, e)) : null
									},
									removeData: function(e) {
										return this.each(function() {
											x.removeData(this, e)
										})
									}
								});
								function $(e, n, r) {
									if (r === t && 1 === e.nodeType) {
										var i = "data-" + n.replace(P, "-$1").toLowerCase();
										if (r = e.getAttribute(i), "string" == typeof r) {
											try {
												r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
											} catch (o) {}
											x.data(e, n, r)
										} else r = t
									}
									return r
								}
								function I(e) {
									var t;
									for (t in e) if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
									return !0
								}
								x.extend({
									queue: function(e, n, r) {
										var i;
										return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
									},
									dequeue: function(e, t) {
										t = t || "fx";
										var n = x.queue(e, t),
											r = n.length,
											i = n.shift(),
											o = x._queueHooks(e, t),
											a = function() {
												x.dequeue(e, t)
											};
										"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
									},
									_queueHooks: function(e, t) {
										var n = t + "queueHooks";
										return x._data(e, n) || x._data(e, n, {
											empty: x.Callbacks("once memory").add(function() {
												x._removeData(e, t + "queue"), x._removeData(e, n)
											})
										})
									}
								}), x.fn.extend({
									queue: function(e, n) {
										var r = 2;
										return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
											var t = x.queue(this, e, n);
											x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
										})
									},
									dequeue: function(e) {
										return this.each(function() {
											x.dequeue(this, e)
										})
									},
									delay: function(e, t) {
										return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
											var r = setTimeout(t, e);
											n.stop = function() {
												clearTimeout(r)
											}
										})
									},
									clearQueue: function(e) {
										return this.queue(e || "fx", [])
									},
									promise: function(e, n) {
										var r, i = 1,
											o = x.Deferred(),
											a = this,
											s = this.length,
											l = function() {
												--i || o.resolveWith(a, [a])
											};
										"string" != typeof e && (n = e, e = t), e = e || "fx";
										while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
										return l(), o.promise(n)
									}
								});
								var z, X, U = /[\t\r\n\f]/g,
									V = /\r/g,
									Y = /^(?:input|select|textarea|button|object)$/i,
									J = /^(?:a|area)$/i,
									G = /^(?:checked|selected)$/i,
									Q = x.support.getSetAttribute,
									K = x.support.input;
								x.fn.extend({
									attr: function(e, t) {
										return x.access(this, x.attr, e, t, arguments.length > 1)
									},
									removeAttr: function(e) {
										return this.each(function() {
											x.removeAttr(this, e)
										})
									},
									prop: function(e, t) {
										return x.access(this, x.prop, e, t, arguments.length > 1)
									},
									removeProp: function(e) {
										return e = x.propFix[e] || e, this.each(function() {
											try {
												this[e] = t, delete this[e]
											} catch (n) {}
										})
									},
									addClass: function(e) {
										var t, n, r, i, o, a = 0,
											s = this.length,
											l = "string" == typeof e && e;
										if (x.isFunction(e)) return this.each(function(t) {
											x(this).addClass(e.call(this, t, this.className))
										});
										if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
											o = 0;
											while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
											n.className = x.trim(r)
										}
										return this
									},
									removeClass: function(e) {
										var t, n, r, i, o, a = 0,
											s = this.length,
											l = 0 === arguments.length || "string" == typeof e && e;
										if (x.isFunction(e)) return this.each(function(t) {
											x(this).removeClass(e.call(this, t, this.className))
										});
										if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
											o = 0;
											while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
											n.className = e ? x.trim(r) : ""
										}
										return this
									},
									toggleClass: function(e, t) {
										var n = typeof e;
										return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
											x(this).toggleClass(e.call(this, n, this.className, t), t)
										}) : this.each(function() {
											if ("string" === n) {
												var t, r = 0,
													o = x(this),
													a = e.match(T) || [];
												while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
											} else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
										})
									},
									hasClass: function(e) {
										var t = " " + e + " ",
											n = 0,
											r = this.length;
										for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
										return !1
									},
									val: function(e) {
										var n, r, i, o = this[0]; {
											if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
												var o;
												1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
													return null == e ? "" : e + ""
												})), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
											});
											if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
										}
									}
								}), x.extend({
									valHooks: {
										option: {
											get: function(e) {
												var t = x.find.attr(e, "value");
												return null != t ? t : e.text
											}
										},
										select: {
											get: function(e) {
												var t, n, r = e.options,
													i = e.selectedIndex,
													o = "select-one" === e.type || 0 > i,
													a = o ? null : [],
													s = o ? i + 1 : r.length,
													l = 0 > i ? s : o ? i : 0;
												for (; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
													if (t = x(n).val(), o) return t;
													a.push(t)
												}
												return a
											},
											set: function(e, t) {
												var n, r, i = e.options,
													o = x.makeArray(t),
													a = i.length;
												while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
												return n || (e.selectedIndex = -1), o
											}
										}
									},
									attr: function(e, n, r) {
										var o, a, s = e.nodeType;
										if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
									},
									removeAttr: function(e, t) {
										var n, r, i = 0,
											o = t && t.match(T);
										if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
									},
									attrHooks: {
										type: {
											set: function(e, t) {
												if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
													var n = e.value;
													return e.setAttribute("type", t), n && (e.value = n), t
												}
											}
										}
									},
									propFix: {
										"for": "htmlFor",
										"class": "className"
									},
									prop: function(e, n, r) {
										var i, o, a, s = e.nodeType;
										if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
									},
									propHooks: {
										tabIndex: {
											get: function(e) {
												var t = x.find.attr(e, "tabindex");
												return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
											}
										}
									}
								}), X = {
									set: function(e, t, n) {
										return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
									}
								}, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
									var r = x.expr.attrHandle[n] || x.find.attr;
									x.expr.attrHandle[n] = K && Q || !G.test(n) ?
									function(e, n, i) {
										var o = x.expr.attrHandle[n],
											a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
										return x.expr.attrHandle[n] = o, a
									} : function(e, n, r) {
										return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
									}
								}), K && Q || (x.attrHooks.value = {
									set: function(e, n, r) {
										return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
									}
								}), Q || (z = {
									set: function(e, n, r) {
										var i = e.getAttributeNode(r);
										return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
									}
								}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
									var i;
									return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
								}, x.valHooks.button = {
									get: function(e, n) {
										var r = e.getAttributeNode(n);
										return r && r.specified ? r.value : t
									},
									set: z.set
								}, x.attrHooks.contenteditable = {
									set: function(e, t, n) {
										z.set(e, "" === t ? !1 : t, n)
									}
								}, x.each(["width", "height"], function(e, n) {
									x.attrHooks[n] = {
										set: function(e, r) {
											return "" === r ? (e.setAttribute(n, "auto"), r) : t
										}
									}
								})), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
									x.propHooks[t] = {
										get: function(e) {
											return e.getAttribute(t, 4)
										}
									}
								}), x.support.style || (x.attrHooks.style = {
									get: function(e) {
										return e.style.cssText || t
									},
									set: function(e, t) {
										return e.style.cssText = t + ""
									}
								}), x.support.optSelected || (x.propHooks.selected = {
									get: function(e) {
										var t = e.parentNode;
										return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
									}
								}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
									x.propFix[this.toLowerCase()] = this
								}), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
									x.valHooks[this] = {
										set: function(e, n) {
											return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
										}
									}, x.support.checkOn || (x.valHooks[this].get = function(e) {
										return null === e.getAttribute("value") ? "on" : e.value
									})
								});
								var Z = /^(?:input|select|textarea)$/i,
									et = /^key/,
									tt = /^(?:mouse|contextmenu)|click/,
									nt = /^(?:focusinfocus|focusoutblur)$/,
									rt = /^([^.]*)(?:\.(.+)|)$/;
								function it() {
									return !0
								}
								function ot() {
									return !1
								}
								function at() {
									try {
										return a.activeElement
									} catch (e) {}
								}
								x.event = {
									global: {},
									add: function(e, n, r, o, a) {
										var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
										if (v) {
											r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
												return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
											}, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
											while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
												type: g,
												origType: y,
												data: o,
												handler: r,
												guid: r.guid,
												selector: a,
												needsContext: a && x.expr.match.needsContext.test(a),
												namespace: m.join(".")
											}, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
											e = null
										}
									},
									remove: function(e, t, n, r, i) {
										var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
										if (m && (c = m.events)) {
											t = (t || "").match(T) || [""], u = t.length;
											while (u--) if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
												p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
												while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
												l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
											} else for (d in c) x.event.remove(e, d + t[u], n, r, !0);
											x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
										}
									},
									trigger: function(n, r, i, o) {
										var s, l, u, c, p, f, d, h = [i || a],
											g = v.call(n, "type") ? n.type : n,
											m = v.call(n, "namespace") ? n.namespace.split(".") : [];
										if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
											if (!o && !p.noBubble && !x.isWindow(i)) {
												for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
												f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
											}
											d = 0;
											while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
											if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
												f = i[l], f && (i[l] = null), x.event.triggered = g;
												try {
													i[g]()
												} catch (y) {}
												x.event.triggered = t, f && (i[l] = f)
											}
											return n.result
										}
									},
									dispatch: function(e) {
										e = x.event.fix(e);
										var n, r, i, o, a, s = [],
											l = g.call(arguments),
											u = (x._data(this, "events") || {})[e.type] || [],
											c = x.event.special[e.type] || {};
										if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
											s = x.event.handlers.call(this, e, u), n = 0;
											while ((o = s[n++]) && !e.isPropagationStopped()) {
												e.currentTarget = o.elem, a = 0;
												while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
											}
											return c.postDispatch && c.postDispatch.call(this, e), e.result
										}
									},
									handlers: function(e, n) {
										var r, i, o, a, s = [],
											l = n.delegateCount,
											u = e.target;
										if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
											for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
											o.length && s.push({
												elem: u,
												handlers: o
											})
										}
										return n.length > l && s.push({
											elem: this,
											handlers: n.slice(l)
										}), s
									},
									fix: function(e) {
										if (e[x.expando]) return e;
										var t, n, r, i = e.type,
											o = e,
											s = this.fixHooks[i];
										s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
										while (t--) n = r[t], e[n] = o[n];
										return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, o) : e
									},
									props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
									fixHooks: {},
									keyHooks: {
										props: "char charCode key keyCode".split(" "),
										filter: function(e, t) {
											return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
										}
									},
									mouseHooks: {
										props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
										filter: function(e, n) {
											var r, i, o, s = n.button,
												l = n.fromElement;
											return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
										}
									},
									special: {
										load: {
											noBubble: !0
										},
										focus: {
											trigger: function() {
												if (this !== at() && this.focus) try {
													return this.focus(), !1
												} catch (e) {}
											},
											delegateType: "focusin"
										},
										blur: {
											trigger: function() {
												return this === at() && this.blur ? (this.blur(), !1) : t
											},
											delegateType: "focusout"
										},
										click: {
											trigger: function() {
												return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
											},
											_default: function(e) {
												return x.nodeName(e.target, "a")
											}
										},
										beforeunload: {
											postDispatch: function(e) {
												e.result !== t && (e.originalEvent.returnValue = e.result)
											}
										}
									},
									simulate: function(e, t, n, r) {
										var i = x.extend(new x.Event, n, {
											type: e,
											isSimulated: !0,
											originalEvent: {}
										});
										r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
									}
								}, x.removeEvent = a.removeEventListener ?
								function(e, t, n) {
									e.removeEventListener && e.removeEventListener(t, n, !1)
								} : function(e, t, n) {
									var r = "on" + t;
									e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
								}, x.Event = function(e, n) {
									return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
								}, x.Event.prototype = {
									isDefaultPrevented: ot,
									isPropagationStopped: ot,
									isImmediatePropagationStopped: ot,
									preventDefault: function() {
										var e = this.originalEvent;
										this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
									},
									stopPropagation: function() {
										var e = this.originalEvent;
										this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
									},
									stopImmediatePropagation: function() {
										this.isImmediatePropagationStopped = it, this.stopPropagation()
									}
								}, x.each({
									mouseenter: "mouseover",
									mouseleave: "mouseout"
								}, function(e, t) {
									x.event.special[e] = {
										delegateType: t,
										bindType: t,
										handle: function(e) {
											var n, r = this,
												i = e.relatedTarget,
												o = e.handleObj;
											return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
										}
									}
								}), x.support.submitBubbles || (x.event.special.submit = {
									setup: function() {
										return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
											var n = e.target,
												r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
											r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
												e._submit_bubble = !0
											}), x._data(r, "submitBubbles", !0))
										}), t)
									},
									postDispatch: function(e) {
										e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
									},
									teardown: function() {
										return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
									}
								}), x.support.changeBubbles || (x.event.special.change = {
									setup: function() {
										return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
											"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
										}), x.event.add(this, "click._change", function(e) {
											this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
										})), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
											var t = e.target;
											Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
												!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
											}), x._data(t, "changeBubbles", !0))
										}), t)
									},
									handle: function(e) {
										var n = e.target;
										return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
									},
									teardown: function() {
										return x.event.remove(this, "._change"), !Z.test(this.nodeName)
									}
								}), x.support.focusinBubbles || x.each({
									focus: "focusin",
									blur: "focusout"
								}, function(e, t) {
									var n = 0,
										r = function(e) {
											x.event.simulate(t, e.target, x.event.fix(e), !0)
										};
									x.event.special[t] = {
										setup: function() {
											0 === n++ && a.addEventListener(e, r, !0)
										},
										teardown: function() {
											0 === --n && a.removeEventListener(e, r, !0)
										}
									}
								}), x.fn.extend({
									on: function(e, n, r, i, o) {
										var a, s;
										if ("object" == typeof e) {
											"string" != typeof n && (r = r || n, n = t);
											for (a in e) this.on(a, n, r, e[a], o);
											return this
										}
										if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
										else if (!i) return this;
										return 1 === o && (s = i, i = function(e) {
											return x().off(e), s.apply(this, arguments)
										}, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
											x.event.add(this, e, i, r, n)
										})
									},
									one: function(e, t, n, r) {
										return this.on(e, t, n, r, 1)
									},
									off: function(e, n, r) {
										var i, o;
										if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
										if ("object" == typeof e) {
											for (o in e) this.off(o, n, e[o]);
											return this
										}
										return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
											x.event.remove(this, e, r, n)
										})
									},
									trigger: function(e, t) {
										return this.each(function() {
											x.event.trigger(e, t, this)
										})
									},
									triggerHandler: function(e, n) {
										var r = this[0];
										return r ? x.event.trigger(e, n, r, !0) : t
									}
								});
								var st = /^.[^:#\[\.,]*$/,
									lt = /^(?:parents|prev(?:Until|All))/,
									ut = x.expr.match.needsContext,
									ct = {
										children: !0,
										contents: !0,
										next: !0,
										prev: !0
									};
								x.fn.extend({
									find: function(e) {
										var t, n = [],
											r = this,
											i = r.length;
										if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
											for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0
										}));
										for (t = 0; i > t; t++) x.find(e, r[t], n);
										return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
									},
									has: function(e) {
										var t, n = x(e, this),
											r = n.length;
										return this.filter(function() {
											for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0
										})
									},
									not: function(e) {
										return this.pushStack(ft(this, e || [], !0))
									},
									filter: function(e) {
										return this.pushStack(ft(this, e || [], !1))
									},
									is: function(e) {
										return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
									},
									closest: function(e, t) {
										var n, r = 0,
											i = this.length,
											o = [],
											a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
										for (; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
											n = o.push(n);
											break
										}
										return this.pushStack(o.length > 1 ? x.unique(o) : o)
									},
									index: function(e) {
										return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
									},
									add: function(e, t) {
										var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
											r = x.merge(this.get(), n);
										return this.pushStack(x.unique(r))
									},
									addBack: function(e) {
										return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
									}
								});
								function pt(e, t) {
									do e = e[t];
									while (e && 1 !== e.nodeType);
									return e
								}
								x.each({
									parent: function(e) {
										var t = e.parentNode;
										return t && 11 !== t.nodeType ? t : null
									},
									parents: function(e) {
										return x.dir(e, "parentNode")
									},
									parentsUntil: function(e, t, n) {
										return x.dir(e, "parentNode", n)
									},
									next: function(e) {
										return pt(e, "nextSibling")
									},
									prev: function(e) {
										return pt(e, "previousSibling")
									},
									nextAll: function(e) {
										return x.dir(e, "nextSibling")
									},
									prevAll: function(e) {
										return x.dir(e, "previousSibling")
									},
									nextUntil: function(e, t, n) {
										return x.dir(e, "nextSibling", n)
									},
									prevUntil: function(e, t, n) {
										return x.dir(e, "previousSibling", n)
									},
									siblings: function(e) {
										return x.sibling((e.parentNode || {}).firstChild, e)
									},
									children: function(e) {
										return x.sibling(e.firstChild)
									},
									contents: function(e) {
										return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
									}
								}, function(e, t) {
									x.fn[e] = function(n, r) {
										var i = x.map(this, t, n);
										return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
									}
								}), x.extend({
									filter: function(e, t, n) {
										var r = t[0];
										return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
											return 1 === e.nodeType
										}))
									},
									dir: function(e, n, r) {
										var i = [],
											o = e[n];
										while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
										return i
									},
									sibling: function(e, t) {
										var n = [];
										for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
										return n
									}
								});
								function ft(e, t, n) {
									if (x.isFunction(t)) return x.grep(e, function(e, r) {
										return !!t.call(e, r, e) !== n
									});
									if (t.nodeType) return x.grep(e, function(e) {
										return e === t !== n
									});
									if ("string" == typeof t) {
										if (st.test(t)) return x.filter(t, e, n);
										t = x.filter(t, e)
									}
									return x.grep(e, function(e) {
										return x.inArray(e, t) >= 0 !== n
									})
								}
								function dt(e) {
									var t = ht.split("|"),
										n = e.createDocumentFragment();
									if (n.createElement) while (t.length) n.createElement(t.pop());
									return n
								}
								var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
									gt = / jQuery\d+="(?:null|\d+)"/g,
									mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
									yt = /^\s+/,
									vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
									bt = /<([\w:]+)/,
									xt = /<tbody/i,
									wt = /<|&#?\w+;/,
									Tt = /<(?:script|style|link)/i,
									Ct = /^(?:checkbox|radio)$/i,
									Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
									kt = /^$|\/(?:java|ecma)script/i,
									Et = /^true\/(.*)/,
									St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
									At = {
										option: [1, "<select multiple='multiple'>", "</select>"],
										legend: [1, "<fieldset>", "</fieldset>"],
										area: [1, "<map>", "</map>"],
										param: [1, "<object>", "</object>"],
										thead: [1, "<table>", "</table>"],
										tr: [2, "<table><tbody>", "</tbody></table>"],
										col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
										td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
										_default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
									},
									jt = dt(a),
									Dt = jt.appendChild(a.createElement("div"));
								At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
									text: function(e) {
										return x.access(this, function(e) {
											return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
										}, null, e, arguments.length)
									},
									append: function() {
										return this.domManip(arguments, function(e) {
											if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
												var t = Lt(this, e);
												t.appendChild(e)
											}
										})
									},
									prepend: function() {
										return this.domManip(arguments, function(e) {
											if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
												var t = Lt(this, e);
												t.insertBefore(e, t.firstChild)
											}
										})
									},
									before: function() {
										return this.domManip(arguments, function(e) {
											this.parentNode && this.parentNode.insertBefore(e, this)
										})
									},
									after: function() {
										return this.domManip(arguments, function(e) {
											this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
										})
									},
									remove: function(e, t) {
										var n, r = e ? x.filter(e, this) : this,
											i = 0;
										for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
										return this
									},
									empty: function() {
										var e, t = 0;
										for (; null != (e = this[t]); t++) {
											1 === e.nodeType && x.cleanData(Ft(e, !1));
											while (e.firstChild) e.removeChild(e.firstChild);
											e.options && x.nodeName(e, "select") && (e.options.length = 0)
										}
										return this
									},
									clone: function(e, t) {
										return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
											return x.clone(this, e, t)
										})
									},
									html: function(e) {
										return x.access(this, function(e) {
											var n = this[0] || {},
												r = 0,
												i = this.length;
											if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
											if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
												e = e.replace(vt, "<$1></$2>");
												try {
													for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
													n = 0
												} catch (o) {}
											}
											n && this.empty().append(e)
										}, null, e, arguments.length)
									},
									replaceWith: function() {
										var e = x.map(this, function(e) {
											return [e.nextSibling, e.parentNode]
										}),
											t = 0;
										return this.domManip(arguments, function(n) {
											var r = e[t++],
												i = e[t++];
											i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
										}, !0), t ? this : this.remove()
									},
									detach: function(e) {
										return this.remove(e, !0)
									},
									domManip: function(e, t, n) {
										e = d.apply([], e);
										var r, i, o, a, s, l, u = 0,
											c = this.length,
											p = this,
											f = c - 1,
											h = e[0],
											g = x.isFunction(h);
										if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
											var i = p.eq(r);
											g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
										});
										if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
											for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
											if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
											l = r = null
										}
										return this
									}
								});
								function Lt(e, t) {
									return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
								}
								function Ht(e) {
									return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
								}
								function qt(e) {
									var t = Et.exec(e.type);
									return t ? e.type = t[1] : e.removeAttribute("type"), e
								}
								function _t(e, t) {
									var n, r = 0;
									for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
								}
								function Mt(e, t) {
									if (1 === t.nodeType && x.hasData(e)) {
										var n, r, i, o = x._data(e),
											a = x._data(t, o),
											s = o.events;
										if (s) {
											delete a.handle, a.events = {};
											for (n in s) for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
										}
										a.data && (a.data = x.extend({}, a.data))
									}
								}
								function Ot(e, t) {
									var n, r, i;
									if (1 === t.nodeType) {
										if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
											i = x._data(t);
											for (r in i.events) x.removeEvent(t, r, i.handle);
											t.removeAttribute(x.expando)
										}
										"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
									}
								}
								x.each({
									appendTo: "append",
									prependTo: "prepend",
									insertBefore: "before",
									insertAfter: "after",
									replaceAll: "replaceWith"
								}, function(e, t) {
									x.fn[e] = function(e) {
										var n, r = 0,
											i = [],
											o = x(e),
											a = o.length - 1;
										for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
										return this.pushStack(i)
									}
								});
								function Ft(e, n) {
									var r, o, a = 0,
										s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
									if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
									return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
								}
								function Bt(e) {
									Ct.test(e.type) && (e.defaultChecked = e.checked)
								}
								x.extend({
									clone: function(e, t, n) {
										var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
										if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
										if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
										else Mt(e, o);
										return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
									},
									buildFragment: function(e, t, n, r) {
										var i, o, a, s, l, u, c, p = e.length,
											f = dt(t),
											d = [],
											h = 0;
										for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
										else if (wt.test(o)) {
											s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
											while (i--) s = s.lastChild;
											if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
												o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
												while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
											}
											x.merge(d, s.childNodes), s.textContent = "";
											while (s.firstChild) s.removeChild(s.firstChild);
											s = f.lastChild
										} else d.push(t.createTextNode(o));
										s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
										while (o = d[h++]) if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
											i = 0;
											while (o = s[i++]) kt.test(o.type || "") && n.push(o)
										}
										return s = null, f
									},
									cleanData: function(e, t) {
										var n, r, o, a, s = 0,
											l = x.expando,
											u = x.cache,
											c = x.support.deleteExpando,
											f = x.event.special;
										for (; null != (n = e[s]); s++) if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
											if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
											u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
										}
									},
									_evalUrl: function(e) {
										return x.ajax({
											url: e,
											type: "GET",
											dataType: "script",
											async: !1,
											global: !1,
											"throws": !0
										})
									}
								}), x.fn.extend({
									wrapAll: function(e) {
										if (x.isFunction(e)) return this.each(function(t) {
											x(this).wrapAll(e.call(this, t))
										});
										if (this[0]) {
											var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
											this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
												var e = this;
												while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
												return e
											}).append(this)
										}
										return this
									},
									wrapInner: function(e) {
										return x.isFunction(e) ? this.each(function(t) {
											x(this).wrapInner(e.call(this, t))
										}) : this.each(function() {
											var t = x(this),
												n = t.contents();
											n.length ? n.wrapAll(e) : t.append(e)
										})
									},
									wrap: function(e) {
										var t = x.isFunction(e);
										return this.each(function(n) {
											x(this).wrapAll(t ? e.call(this, n) : e)
										})
									},
									unwrap: function() {
										return this.parent().each(function() {
											x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
										}).end()
									}
								});
								var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
									It = /opacity\s*=\s*([^)]*)/,
									zt = /^(top|right|bottom|left)$/,
									Xt = /^(none|table(?!-c[ea]).+)/,
									Ut = /^margin/,
									Vt = RegExp("^(" + w + ")(.*)$", "i"),
									Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
									Jt = RegExp("^([+-])=(" + w + ")", "i"),
									Gt = {
										BODY: "block"
									},
									Qt = {
										position: "absolute",
										visibility: "hidden",
										display: "block"
									},
									Kt = {
										letterSpacing: 0,
										fontWeight: 400
									},
									Zt = ["Top", "Right", "Bottom", "Left"],
									en = ["Webkit", "O", "Moz", "ms"];
								function tn(e, t) {
									if (t in e) return t;
									var n = t.charAt(0).toUpperCase() + t.slice(1),
										r = t,
										i = en.length;
									while (i--) if (t = en[i] + n, t in e) return t;
									return r
								}
								function nn(e, t) {
									return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
								}
								function rn(e, t) {
									var n, r, i, o = [],
										a = 0,
										s = e.length;
									for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
									for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
									return e
								}
								x.fn.extend({
									css: function(e, n) {
										return x.access(this, function(e, n, r) {
											var i, o, a = {},
												s = 0;
											if (x.isArray(n)) {
												for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
												return a
											}
											return r !== t ? x.style(e, n, r) : x.css(e, n)
										}, e, n, arguments.length > 1)
									},
									show: function() {
										return rn(this, !0)
									},
									hide: function() {
										return rn(this)
									},
									toggle: function(e) {
										return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
											nn(this) ? x(this).show() : x(this).hide()
										})
									}
								}), x.extend({
									cssHooks: {
										opacity: {
											get: function(e, t) {
												if (t) {
													var n = Wt(e, "opacity");
													return "" === n ? "1" : n
												}
											}
										}
									},
									cssNumber: {
										columnCount: !0,
										fillOpacity: !0,
										fontWeight: !0,
										lineHeight: !0,
										opacity: !0,
										order: !0,
										orphans: !0,
										widows: !0,
										zIndex: !0,
										zoom: !0
									},
									cssProps: {
										"float": x.support.cssFloat ? "cssFloat" : "styleFloat"
									},
									style: function(e, n, r, i) {
										if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
											var o, a, s, l = x.camelCase(n),
												u = e.style;
											if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
											if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
												u[n] = r
											} catch (c) {}
										}
									},
									css: function(e, n, r, i) {
										var o, a, s, l = x.camelCase(n);
										return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
									}
								}), e.getComputedStyle ? (Rt = function(t) {
									return e.getComputedStyle(t, null)
								}, Wt = function(e, n, r) {
									var i, o, a, s = r || Rt(e),
										l = s ? s.getPropertyValue(n) || s[n] : t,
										u = e.style;
									return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
								}) : a.documentElement.currentStyle && (Rt = function(e) {
									return e.currentStyle
								}, Wt = function(e, n, r) {
									var i, o, a, s = r || Rt(e),
										l = s ? s[n] : t,
										u = e.style;
									return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
								});
								function on(e, t, n) {
									var r = Vt.exec(t);
									return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
								}
								function an(e, t, n, r, i) {
									var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
										a = 0;
									for (; 4 > o; o += 2)"margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
									return a
								}
								function sn(e, t, n) {
									var r = !0,
										i = "width" === t ? e.offsetWidth : e.offsetHeight,
										o = Rt(e),
										a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
									if (0 >= i || null == i) {
										if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
										r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
									}
									return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
								}
								function ln(e) {
									var t = a,
										n = Gt[e];
									return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
								}
								function un(e, t) {
									var n = x(t.createElement(e)).appendTo(t.body),
										r = x.css(n[0], "display");
									return n.remove(), r
								}
								x.each(["height", "width"], function(e, n) {
									x.cssHooks[n] = {
										get: function(e, r, i) {
											return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
												return sn(e, n, i)
											}) : sn(e, n, i) : t
										},
										set: function(e, t, r) {
											var i = r && Rt(e);
											return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
										}
									}
								}), x.support.opacity || (x.cssHooks.opacity = {
									get: function(e, t) {
										return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
									},
									set: function(e, t) {
										var n = e.style,
											r = e.currentStyle,
											i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
											o = r && r.filter || n.filter || "";
										n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
									}
								}), x(function() {
									x.support.reliableMarginRight || (x.cssHooks.marginRight = {
										get: function(e, n) {
											return n ? x.swap(e, {
												display: "inline-block"
											}, Wt, [e, "marginRight"]) : t
										}
									}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
										x.cssHooks[n] = {
											get: function(e, r) {
												return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
											}
										}
									})
								}), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
									return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
								}, x.expr.filters.visible = function(e) {
									return !x.expr.filters.hidden(e)
								}), x.each({
									margin: "",
									padding: "",
									border: "Width"
								}, function(e, t) {
									x.cssHooks[e + t] = {
										expand: function(n) {
											var r = 0,
												i = {},
												o = "string" == typeof n ? n.split(" ") : [n];
											for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
											return i
										}
									}, Ut.test(e) || (x.cssHooks[e + t].set = on)
								});
								var cn = /%20/g,
									pn = /\[\]$/,
									fn = /\r?\n/g,
									dn = /^(?:submit|button|image|reset|file)$/i,
									hn = /^(?:input|select|textarea|keygen)/i;
								x.fn.extend({
									serialize: function() {
										return x.param(this.serializeArray())
									},
									serializeArray: function() {
										return this.map(function() {
											var e = x.prop(this, "elements");
											return e ? x.makeArray(e) : this
										}).filter(function() {
											var e = this.type;
											return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
										}).map(function(e, t) {
											var n = x(this).val();
											return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
												return {
													name: t.name,
													value: e.replace(fn, "\r\n")
												}
											}) : {
												name: t.name,
												value: n.replace(fn, "\r\n")
											}
										}).get()
									}
								}), x.param = function(e, n) {
									var r, i = [],
										o = function(e, t) {
											t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
										};
									if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
										o(this.name, this.value)
									});
									else for (r in e) gn(r, e[r], n, o);
									return i.join("&").replace(cn, "+")
								};
								function gn(e, t, n, r) {
									var i;
									if (x.isArray(t)) x.each(t, function(t, i) {
										n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
									});
									else if (n || "object" !== x.type(t)) r(e, t);
									else for (i in t) gn(e + "[" + i + "]", t[i], n, r)
								}
								x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
									x.fn[t] = function(e, n) {
										return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
									}
								}), x.fn.extend({
									hover: function(e, t) {
										return this.mouseenter(e).mouseleave(t || e)
									},
									bind: function(e, t, n) {
										return this.on(e, null, t, n)
									},
									unbind: function(e, t) {
										return this.off(e, null, t)
									},
									delegate: function(e, t, n, r) {
										return this.on(t, e, n, r)
									},
									undelegate: function(e, t, n) {
										return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
									}
								});
								var mn, yn, vn = x.now(),
									bn = /\?/,
									xn = /#.*$/,
									wn = /([?&])_=[^&]*/,
									Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
									Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
									Nn = /^(?:GET|HEAD)$/,
									kn = /^\/\//,
									En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
									Sn = x.fn.load,
									An = {},
									jn = {},
									Dn = "*/".concat("*");
								try {
									yn = o.href
								} catch (Ln) {
									yn = a.createElement("a"), yn.href = "", yn = yn.href
								}
								mn = En.exec(yn.toLowerCase()) || [];
								function Hn(e) {
									return function(t, n) {
										"string" != typeof t && (n = t, t = "*");
										var r, i = 0,
											o = t.toLowerCase().match(T) || [];
										if (x.isFunction(n)) while (r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
									}
								}
								function qn(e, n, r, i) {
									var o = {},
										a = e === jn;
									function s(l) {
										var u;
										return o[l] = !0, x.each(e[l] || [], function(e, l) {
											var c = l(n, r, i);
											return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
										}), u
									}
									return s(n.dataTypes[0]) || !o["*"] && s("*")
								}
								function _n(e, n) {
									var r, i, o = x.ajaxSettings.flatOptions || {};
									for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
									return r && x.extend(!0, e, r), e
								}
								x.fn.load = function(e, n, r) {
									if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
									var i, o, a, s = this,
										l = e.indexOf(" ");
									return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
										url: e,
										type: a,
										dataType: "html",
										data: n
									}).done(function(e) {
										o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
									}).complete(r &&
									function(e, t) {
										s.each(r, o || [e.responseText, t, e])
									}), this
								}, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
									x.fn[t] = function(e) {
										return this.on(t, e)
									}
								}), x.extend({
									active: 0,
									lastModified: {},
									etag: {},
									ajaxSettings: {
										url: yn,
										type: "GET",
										isLocal: Cn.test(mn[1]),
										global: !0,
										processData: !0,
										async: !0,
										contentType: "application/x-www-form-urlencoded; charset=UTF-8",
										accepts: {
											"*": Dn,
											text: "text/plain",
											html: "text/html",
											xml: "application/xml, text/xml",
											json: "application/json, text/javascript"
										},
										contents: {
											xml: /xml/,
											html: /html/,
											json: /json/
										},
										responseFields: {
											xml: "responseXML",
											text: "responseText",
											json: "responseJSON"
										},
										converters: {
											"* text": String,
											"text html": !0,
											"text json": x.parseJSON,
											"text xml": x.parseXML
										},
										flatOptions: {
											url: !0,
											context: !0
										}
									},
									ajaxSetup: function(e, t) {
										return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
									},
									ajaxPrefilter: Hn(An),
									ajaxTransport: Hn(jn),
									ajax: function(e, n) {
										"object" == typeof e && (n = e, e = t), n = n || {};
										var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
											f = p.context || p,
											d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
											h = x.Deferred(),
											g = x.Callbacks("once memory"),
											m = p.statusCode || {},
											y = {},
											v = {},
											b = 0,
											w = "canceled",
											C = {
												readyState: 0,
												getResponseHeader: function(e) {
													var t;
													if (2 === b) {
														if (!c) {
															c = {};
															while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
														}
														t = c[e.toLowerCase()]
													}
													return null == t ? null : t
												},
												getAllResponseHeaders: function() {
													return 2 === b ? a : null
												},
												setRequestHeader: function(e, t) {
													var n = e.toLowerCase();
													return b || (e = v[n] = v[n] || e, y[e] = t), this
												},
												overrideMimeType: function(e) {
													return b || (p.mimeType = e), this
												},
												statusCode: function(e) {
													var t;
													if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]];
													else C.always(e[C.status]);
													return this
												},
												abort: function(e) {
													var t = e || w;
													return u && u.abort(t), k(0, t), this
												}
											};
										if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
										l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
										for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
										if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
										w = "abort";
										for (i in {
											success: 1,
											error: 1,
											complete: 1
										}) C[i](p[i]);
										if (u = qn(jn, p, n, C)) {
											C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
												C.abort("timeout")
											}, p.timeout));
											try {
												b = 1, u.send(y, k)
											} catch (N) {
												if (!(2 > b)) throw N;
												k(-1, N)
											}
										} else k(-1, "No Transport");
										function k(e, n, r, i) {
											var c, y, v, w, T, N = n;
											2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
										}
										return C
									},
									getJSON: function(e, t, n) {
										return x.get(e, t, n, "json")
									},
									getScript: function(e, n) {
										return x.get(e, t, n, "script")
									}
								}), x.each(["get", "post"], function(e, n) {
									x[n] = function(e, r, i, o) {
										return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
											url: e,
											type: n,
											dataType: o,
											data: r,
											success: i
										})
									}
								});
								function Mn(e, n, r) {
									var i, o, a, s, l = e.contents,
										u = e.dataTypes;
									while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
									if (o) for (s in l) if (l[s] && l[s].test(o)) {
										u.unshift(s);
										break
									}
									if (u[0] in r) a = u[0];
									else {
										for (s in r) {
											if (!u[0] || e.converters[s + " " + u[0]]) {
												a = s;
												break
											}
											i || (i = s)
										}
										a = a || i
									}
									return a ? (a !== u[0] && u.unshift(a), r[a]) : t
								}
								function On(e, t, n, r) {
									var i, o, a, s, l, u = {},
										c = e.dataTypes.slice();
									if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
									o = c.shift();
									while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
									else if ("*" !== l && l !== o) {
										if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
											a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
											break
										}
										if (a !== !0) if (a && e["throws"]) t = a(t);
										else try {
											t = a(t)
										} catch (p) {
											return {
												state: "parsererror",
												error: a ? p : "No conversion from " + l + " to " + o
											}
										}
									}
									return {
										state: "success",
										data: t
									}
								}
								x.ajaxSetup({
									accepts: {
										script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
									},
									contents: {
										script: /(?:java|ecma)script/
									},
									converters: {
										"text script": function(e) {
											return x.globalEval(e), e
										}
									}
								}), x.ajaxPrefilter("script", function(e) {
									e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
								}), x.ajaxTransport("script", function(e) {
									if (e.crossDomain) {
										var n, r = a.head || x("head")[0] || a.documentElement;
										return {
											send: function(t, i) {
												n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
													(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
												}, r.insertBefore(n, r.firstChild)
											},
											abort: function() {
												n && n.onload(t, !0)
											}
										}
									}
								});
								var Fn = [],
									Bn = /(=)\?(?=&|$)|\?\?/;
								x.ajaxSetup({
									jsonp: "callback",
									jsonpCallback: function() {
										var e = Fn.pop() || x.expando + "_" + vn++;
										return this[e] = !0, e
									}
								}), x.ajaxPrefilter("json jsonp", function(n, r, i) {
									var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
									return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
										return s || x.error(o + " was not called"), s[0]
									}, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
										s = arguments
									}, i.always(function() {
										e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
									}), "script") : t
								});
								var Pn, Rn, Wn = 0,
									$n = e.ActiveXObject &&
								function() {
									var e;
									for (e in Pn) Pn[e](t, !0)
								};
								function In() {
									try {
										return new e.XMLHttpRequest
									} catch (t) {}
								}
								function zn() {
									try {
										return new e.ActiveXObject("Microsoft.XMLHTTP")
									} catch (t) {}
								}
								x.ajaxSettings.xhr = e.ActiveXObject ?
								function() {
									return !this.isLocal && In() || zn()
								} : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !! Rn && "withCredentials" in Rn, Rn = x.support.ajax = !! Rn, Rn && x.ajaxTransport(function(n) {
									if (!n.crossDomain || x.support.cors) {
										var r;
										return {
											send: function(i, o) {
												var a, s, l = n.xhr();
												if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
												n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
												try {
													for (s in i) l.setRequestHeader(s, i[s])
												} catch (u) {}
												l.send(n.hasContent && n.data || null), r = function(e, i) {
													var s, u, c, p;
													try {
														if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
														else {
															p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
															try {
																c = l.statusText
															} catch (f) {
																c = ""
															}
															s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
														}
													} catch (d) {
														i || o(-1, d)
													}
													p && o(s, c, p, u)
												}, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
											},
											abort: function() {
												r && r(t, !0)
											}
										}
									}
								});
								var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
									Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
									Jn = /queueHooks$/,
									Gn = [nr],
									Qn = {
										"*": [function(e, t) {
											var n = this.createTween(e, t),
												r = n.cur(),
												i = Yn.exec(t),
												o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
												a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
												s = 1,
												l = 20;
											if (a && a[3] !== o) {
												o = o || a[3], i = i || [], a = +r || 1;
												do s = s || ".5", a /= s, x.style(n.elem, e, a + o);
												while (s !== (s = n.cur() / r) && 1 !== s && --l)
											}
											return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
										}]
									};
								function Kn() {
									return setTimeout(function() {
										Xn = t
									}), Xn = x.now()
								}
								function Zn(e, t, n) {
									var r, i = (Qn[t] || []).concat(Qn["*"]),
										o = 0,
										a = i.length;
									for (; a > o; o++) if (r = i[o].call(n, t, e)) return r
								}
								function er(e, t, n) {
									var r, i, o = 0,
										a = Gn.length,
										s = x.Deferred().always(function() {
											delete l.elem
										}),
										l = function() {
											if (i) return !1;
											var t = Xn || Kn(),
												n = Math.max(0, u.startTime + u.duration - t),
												r = n / u.duration || 0,
												o = 1 - r,
												a = 0,
												l = u.tweens.length;
											for (; l > a; a++) u.tweens[a].run(o);
											return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
										},
										u = s.promise({
											elem: e,
											props: x.extend({}, t),
											opts: x.extend(!0, {
												specialEasing: {}
											}, n),
											originalProperties: t,
											originalOptions: n,
											startTime: Xn || Kn(),
											duration: n.duration,
											tweens: [],
											createTween: function(t, n) {
												var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
												return u.tweens.push(r), r
											},
											stop: function(t) {
												var n = 0,
													r = t ? u.tweens.length : 0;
												if (i) return this;
												for (i = !0; r > n; n++) u.tweens[n].run(1);
												return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
											}
										}),
										c = u.props;
									for (tr(c, u.opts.specialEasing); a > o; o++) if (r = Gn[o].call(u, e, c, u.opts)) return r;
									return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
										elem: e,
										anim: u,
										queue: u.opts.queue
									})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
								}
								function tr(e, t) {
									var n, r, i, o, a;
									for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
										o = a.expand(o), delete e[r];
										for (n in o) n in e || (e[n] = o[n], t[n] = i)
									} else t[r] = i
								}
								x.Animation = x.extend(er, {
									tweener: function(e, t) {
										x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
										var n, r = 0,
											i = e.length;
										for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
									},
									prefilter: function(e, t) {
										t ? Gn.unshift(e) : Gn.push(e)
									}
								});
								function nr(e, t, n) {
									var r, i, o, a, s, l, u = this,
										c = {},
										p = e.style,
										f = e.nodeType && nn(e),
										d = x._data(e, "fxshow");
									n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
										s.unqueued || l()
									}), s.unqueued++, u.always(function() {
										u.always(function() {
											s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
										})
									})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
										p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
									}));
									for (r in t) if (i = t[r], Vn.exec(i)) {
										if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
										c[r] = d && d[r] || x.style(e, r)
									}
									if (!x.isEmptyObject(c)) {
										d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
											x(e).hide()
										}), u.done(function() {
											var t;
											x._removeData(e, "fxshow");
											for (t in c) x.style(e, t, c[t])
										});
										for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
									}
								}
								function rr(e, t, n, r, i) {
									return new rr.prototype.init(e, t, n, r, i)
								}
								x.Tween = rr, rr.prototype = {
									constructor: rr,
									init: function(e, t, n, r, i, o) {
										this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
									},
									cur: function() {
										var e = rr.propHooks[this.prop];
										return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
									},
									run: function(e) {
										var t, n = rr.propHooks[this.prop];
										return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
									}
								}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
									_default: {
										get: function(e) {
											var t;
											return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
										},
										set: function(e) {
											x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
										}
									}
								}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
									set: function(e) {
										e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
									}
								}, x.each(["toggle", "show", "hide"], function(e, t) {
									var n = x.fn[t];
									x.fn[t] = function(e, r, i) {
										return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
									}
								}), x.fn.extend({
									fadeTo: function(e, t, n, r) {
										return this.filter(nn).css("opacity", 0).show().end().animate({
											opacity: t
										}, e, n, r)
									},
									animate: function(e, t, n, r) {
										var i = x.isEmptyObject(e),
											o = x.speed(t, n, r),
											a = function() {
												var t = er(this, x.extend({}, e), o);
												(i || x._data(this, "finish")) && t.stop(!0)
											};
										return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
									},
									stop: function(e, n, r) {
										var i = function(e) {
												var t = e.stop;
												delete e.stop, t(r)
											};
										return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
											var t = !0,
												n = null != e && e + "queueHooks",
												o = x.timers,
												a = x._data(this);
											if (n) a[n] && a[n].stop && i(a[n]);
											else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
											for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
											(t || !r) && x.dequeue(this, e)
										})
									},
									finish: function(e) {
										return e !== !1 && (e = e || "fx"), this.each(function() {
											var t, n = x._data(this),
												r = n[e + "queue"],
												i = n[e + "queueHooks"],
												o = x.timers,
												a = r ? r.length : 0;
											for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
											for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
											delete n.finish
										})
									}
								});
								function ir(e, t) {
									var n, r = {
										height: e
									},
										i = 0;
									for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
									return t && (r.opacity = r.width = e), r
								}
								x.each({
									slideDown: ir("show"),
									slideUp: ir("hide"),
									slideToggle: ir("toggle"),
									fadeIn: {
										opacity: "show"
									},
									fadeOut: {
										opacity: "hide"
									},
									fadeToggle: {
										opacity: "toggle"
									}
								}, function(e, t) {
									x.fn[e] = function(e, n, r) {
										return this.animate(t, e, n, r)
									}
								}), x.speed = function(e, t, n) {
									var r = e && "object" == typeof e ? x.extend({}, e) : {
										complete: n || !n && t || x.isFunction(e) && e,
										duration: e,
										easing: n && t || t && !x.isFunction(t) && t
									};
									return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
										x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
									}, r
								}, x.easing = {
									linear: function(e) {
										return e
									},
									swing: function(e) {
										return .5 - Math.cos(e * Math.PI) / 2
									}
								}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
									var e, n = x.timers,
										r = 0;
									for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
									n.length || x.fx.stop(), Xn = t
								}, x.fx.timer = function(e) {
									e() && x.timers.push(e) && x.fx.start()
								}, x.fx.interval = 13, x.fx.start = function() {
									Un || (Un = setInterval(x.fx.tick, x.fx.interval))
								}, x.fx.stop = function() {
									clearInterval(Un), Un = null
								}, x.fx.speeds = {
									slow: 600,
									fast: 200,
									_default: 400
								}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
									return x.grep(x.timers, function(t) {
										return e === t.elem
									}).length
								}), x.fn.offset = function(e) {
									if (arguments.length) return e === t ? this : this.each(function(t) {
										x.offset.setOffset(this, e, t)
									});
									var n, r, o = {
										top: 0,
										left: 0
									},
										a = this[0],
										s = a && a.ownerDocument;
									if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
										top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
										left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
									}) : o
								}, x.offset = {
									setOffset: function(e, t, n) {
										var r = x.css(e, "position");
										"static" === r && (e.style.position = "relative");
										var i = x(e),
											o = i.offset(),
											a = x.css(e, "top"),
											s = x.css(e, "left"),
											l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
											u = {},
											c = {},
											p, f;
										l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
									}
								}, x.fn.extend({
									position: function() {
										if (this[0]) {
											var e, t, n = {
												top: 0,
												left: 0
											},
												r = this[0];
											return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
												top: t.top - n.top - x.css(r, "marginTop", !0),
												left: t.left - n.left - x.css(r, "marginLeft", !0)
											}
										}
									},
									offsetParent: function() {
										return this.map(function() {
											var e = this.offsetParent || s;
											while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
											return e || s
										})
									}
								}), x.each({
									scrollLeft: "pageXOffset",
									scrollTop: "pageYOffset"
								}, function(e, n) {
									var r = /Y/.test(n);
									x.fn[e] = function(i) {
										return x.access(this, function(e, i, o) {
											var a = or(e);
											return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
										}, e, i, arguments.length, null)
									}
								});
								function or(e) {
									return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
								}
								x.each({
									Height: "height",
									Width: "width"
								}, function(e, n) {
									x.each({
										padding: "inner" + e,
										content: n,
										"": "outer" + e
									}, function(r, i) {
										x.fn[i] = function(i, o) {
											var a = arguments.length && (r || "boolean" != typeof i),
												s = r || (i === !0 || o === !0 ? "margin" : "border");
											return x.access(this, function(n, r, i) {
												var o;
												return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
											}, n, a ? i : t, a, null)
										}
									})
								}), x.fn.size = function() {
									return this.length
								}, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
									return x
								}))
							})(window);
						} else {}
					} catch (e) {
						return false;
					}
				})();
			};
			var remove = function(selector) {
					if (!document.querySelectorAll) {
						return;
					}
					var nodes = document.querySelectorAll(selector);
					if (nodes) {
						for (var i = 0; i < nodes.length; i++) {
							if (nodes[i] && nodes[i].parentNode) {
								nodes[i].parentNode.removeChild(nodes[i]);
							}
						}
					}
				};
			function removeobj(targetSelector, rootSelector = 'body', wait) {
				const rootElement = document.querySelector(rootSelector);
				const targetElement = rootElement.querySelector(targetSelector);
				if (targetElement) {
					return Promise.resolve(targetElement)
				}
				return new Promise((resolve, reject) => {
					const callback = function(matationList, observer) {
						const targetElement = rootElement.querySelector(targetSelector);
						if (targetElement) {
							resolve(targetElement);
							observer.disconnect()
						}
					};
					const observer = new MutationObserver(callback);
					observer.observe(rootElement, {
						subtree: true,
						childList: true
					});
					if (wait !== undefined) {
						setTimeout(() => {
							observer.disconnect()
						}, wait)
					}
				})
			};
			async function removeall(targetSelector, rootSelector, now = false) {
				if (now) {
					const parent = rootSelector ? document.querySelector(rootSelector) : document;
					if (parent) {
						const target = parent.querySelector(targetSelector);
						if (target) {
							target.remove();
							return true
						}
					}
					return false
				}
				const target = await removeobj(targetSelector, rootSelector);
				target.remove()
			};
			function cssobj(css) {
				document.head.insertAdjacentHTML("beforeend", '<style class="cssobj-jiangxiaobai" media="screen">' + (css) + "{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}</style>");
			};
			function dssxaobj() {
				setTimeout(function() {
					window.location.reload();
				}, 666);
			};
			function mgzdgqobj() {
				if (localStorage.getItem("mgzdgq") != null) {
					mgzdgq = localStorage.getItem("mgzdgq")
				} else {
					localStorage.setItem("mgzdgq", "1");
					dssxaobj();
				}
			};
			function bdzdjxobj() {
				if (localStorage.getItem("vipzdjx") != null) {
					vipzdjx = localStorage.getItem("vipzdjx")
				} else {
					localStorage.setItem("vipzdjx", "2");
					dssxaobj();
				}
			};
			function bdzdjxbyobj() {
				if (localStorage.getItem("vipzdjx") != null) {
					vipzdjx = localStorage.getItem("vipzdjx")
				} else {
					localStorage.setItem("vipzdjx", "1");
					dssxaobj();
				}
			};
			function bdjkobj() {
				if (localStorage.getItem("httpsjk") != null) {
					httpsjk = localStorage.getItem("httpsjk")
				} else {
					if (jxbpcobj) {
						if (objj.match(/ixigua\./)) {
							httpsjk = '19';
							localStorage.setItem("httpsjk", "19");
						} else {
							httpsjk = '4';
							localStorage.setItem("httpsjk", "4");
						}
					} else {
						httpsjk = '9';
						localStorage.setItem("httpsjk", "9");
					}
				}
			};
			function bdtbobj() {
				if (localStorage.getItem("vipjxtb") != null) {
					vipjxtb = localStorage.getItem("vipjxtb")
				} else {
					localStorage.setItem("vipjxtb", "1");
				}
				vipjxss = '1';
			};
			function zdjyobj() {
				if (localStorage.getItem("pchttpjk") != null) {
					localStorage.clear();
					dssxaobj();
				} else {}
				bdjkobj();
				bdtbobj();
			};
			function jxbzdjxobj() {
				bdzdjxobj();
				zdjyobj();
				cssobj('div.maomibtn li#vipjxtbli,div.maomibtn li#vipzdjxli{display:block!important}963540817');
			};
			function bdvipzdjxobj() {
				if ((localStorage.getItem("vipzdjx") != null || localStorage.getItem("vipzdjx") === "1")) {
					vipzdjx = localStorage.getItem("vipzdjx");
				} else {
					localStorage.setItem("vipzdjx", "2");
					dssxaobj();
				}
			};
			function zdgbdmobj() {
				cssobj('div.maomibtn li#gbdmobjli{display:block!important}963540817');
				if (localStorage.getItem("gbdmobj") != null) {
					gbdmobj = localStorage.getItem("gbdmobj");
				} else {
					localStorage.setItem("gbdmobj", "0");
					dssxaobj();
				}
			};
			function jxbzdjxhyobj() {
				bdvipzdjxobj();
				zdjyobj();
				cssobj('div.maomibtn li#vipjxtbli,div.maomibtn li#vipzdjxhyli{display:block!important}963540817');
			};
			function jxqtwzobj() {
				zdjyobj();
				cssobj('div.maomibtn li#vipjxtbli{display:block!important}963540817');
			};
			function jxqtwzhyobj() {
				bdtbobj();
				cssobj('div.maomibtn li#vipjxtbli{display:block!important}div.maomibtn li>a[target="_blank"]:not([class="maomi"]):not([href*="//wpa.qq.com/msgrd"]):not([href*="/00/raw/master/"])');
			};
			function apddjobj() {
				let pdssgjcobj_counter = 0;
				let pdssgjcobj_jiankong = setInterval(function() {
					let pdssgjcobj_btn = $(pdssgjcobj).length == 1;
					if (pdssgjcobj_btn) {
						window.open(document.querySelector(pdssgjcobj + ':first-child').href, "_blank");
						window.close();
						clearInterval(pdssgjcobj_jiankong);
						return false
					}++pdssgjcobj_counter;
					if (pdssgjcobj_counter > 10) {
						clearInterval(pdssgjcobj_jiankong);
						return false
					}
				}, 456)
			};
			function jxbvolumeobj() {
				(function() {
					let videovolumea_counter = 0;
					let videovolumea_jiankong = setInterval(function() {
						try {
							if (document.getElementsByTagName('video')[0].volume == 0) {
								document.getElementsByTagName('video')[0].volume = 1;
								clearInterval(videovolumea_jiankong);
								return false
							}++videovolumea_counter;
							if (videovolumea_counter > 20) {
								clearInterval(videovolumea_jiankong);
								return false
							}
						} catch (e) {}
					}, 789)
				})();
				(function() {
					let videovolumeb_counter = 0;
					let videovolumeb_jiankong = setInterval(function() {
						try {
							if (document.getElementsByTagName('video')[0].volume == 0) {
								document.getElementsByTagName('video')[0].volume = 1;
								clearInterval(videovolumeb_jiankong);
								return false
							}++videovolumeb_counter;
							if (videovolumeb_counter > 20) {
								clearInterval(videovolumeb_jiankong);
								return false
							}
						} catch (e) {}
					}, 987)
				})();
				(function() {
					let videovolumec_counter = 0;
					let videovolumec_jiankong = setInterval(function() {
						try {
							if (document.getElementsByTagName("video")[0]) {
								let v_player = document.getElementsByTagName("video");
								for (let i = 0, length = v_player.length; i < length; i++) {
									v_player[i].muted = false;
									v_player[i].volume = 1;
									break;
									return
								}
								clearInterval(videovolumec_jiankong);
								return false
							}++videovolumec_counter;
							if (videovolumec_counter > 20) {
								clearInterval(videovolumec_jiankong);
								return false
							}
						} catch (e) {}
					}, 1234)
				})();
			};
			function shipingquanpingobj() {
				+(function() {
					let MO = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
					if (MO) {
						let d = document;
						let f = d.getElementsByTagName('iframe');
						let a = "allowFullScreen";
						for (let i = 0; i < f.length; i++) {
							if (!f[i].getAttribute(a)) {
								f[i].setAttribute("data-ad", "false");
								f[i].setAttribute("autoLoad", "true");
								f[i].setAttribute("autoplay", "autoplay");
								f[i].setAttribute("loading", "lazy");
								f[i].setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
								f[i].setAttribute("marginwidth", "0");
								f[i].setAttribute("marginheight", "0");
								f[i].setAttribute("allowfullscreen", "allowfullscreen");
								f[i].setAttribute("mozallowfullscreen", "mozallowfullscreen");
								f[i].setAttribute("msallowfullscreen", "msallowfullscreen");
								f[i].setAttribute("oallowfullscreen", "oallowfullscreen");
								f[i].setAttribute("webkitallowfullscreen", "webkitallowfullscreen");
								f[i].setAttribute("allowTransparency", "allowTransparency");
								f[i].src = f[i].src
							}
						};
						let dd = document;
						let ff = d.getElementsByTagName('video');
						let aa = "allowFullScreen";
						for (let j = 0; j < ff.length; j++) {
							ff[j].play();
							if (!ff[j].getAttribute(aa)) {
								ff[j].src = ff[j].src
							}
						}
					} else {}
				})();
			};
			function lkzdztobj() {
				if (localStorage.getItem("lkzdzt") != null) {
					lkzdzt = localStorage.getItem("lkzdzt")
				} else {
					localStorage.setItem("lkzdzt", "1");
					dssxaobj();
				}
				cssobj('div.maomibtn li#lkzdztbyli{display:block!important}963540817');
			};
			function waitForElement(targetSelector, rootSelector = 'body', wait) {
				const rootElement = document.querySelector(rootSelector);
				const targetElement = rootElement.querySelector(targetSelector);
				if (targetElement) {
					return Promise.resolve(targetElement)
				}
				return new Promise((resolve, reject) => {
					const callback = function(matationList, observer) {
						const targetElement = rootElement.querySelector(targetSelector);
						if (targetElement) {
							resolve(targetElement);
							observer.disconnect()
						}
					};
					const observer = new MutationObserver(callback);
					observer.observe(rootElement, {
						subtree: true,
						childList: true
					});
					if (wait !== undefined) {
						setTimeout(() => {
							observer.disconnect()
						}, wait)
					}
				})
			};
			async function autoClickElement(targetSelector, rootSelector, now = false) {
				if (now) {
					const parent = rootSelector ? document.querySelector(rootSelector) : document;
					if (parent) {
						const target = parent.querySelector(targetSelector);
						if (target) {
							target.click();
							return true
						}
					}
					return false
				}
				const target = await waitForElement(targetSelector, rootSelector);
				target.click()
			};
			function zdztsp() {
				(function() {
					setTimeout(function() {
						try {
							var pauseOnLeaveTab = true;
							var allowAutoPlayWithinMillisecondsOfClick = 500;
							var autoPlaySitesWhitelist = [];
							var autoPlaySourcesWhitelist = [];
							var handlePlayingInAdditionToPlayEvent = false;
							var allowPauseAgainAfterFirstFound = false;
							var treatPlayingLikeOnPlay = false;
							var hasAutoPlaySourcesWhitelist = autoPlaySourcesWhitelist.length > 0;
							var hasAutoPlaySitesWhitelist = autoPlaySitesWhitelist.length > 0;
							var lastClickTimeMs = 0;
							function isUrlMatch(url, pattern) {
								var regex = "https?\:\/\/[a-zA-Z0-9\.\-]*?\.?" + pattern.replace(/\./, "\.") + "\/";
								var reg = new RegExp(regex, "i");
								return url.match(reg) !== null
							}
							function isAutoPlayAllowedForSite(url) {
								if (hasAutoPlaySitesWhitelist) {
									for (var i = 0; i < autoPlaySitesWhitelist.length; i++) {
										if (isUrlMatch(url, autoPlaySitesWhitelist[i])) return true
									}
								}
								return false
							}
							if (isAutoPlayAllowedForSite(document.url)) {
								return
							}
							var tabHiddenPropertyName, tabVisibleChangedEventName;
							if ("undefined" !== typeof document.hidden) {
								tabHiddenPropertyName = "hidden";
								tabVisibleChangedEventName = "visibilitychange"
							} else if ("undefined" !== typeof document.webkitHidden) {
								tabHiddenPropertyName = "webkitHidden";
								tabVisibleChangedEventName = "webkitvisibilitychange"
							} else if ("undefined" !== typeof document.msHidden) {
								tabHiddenPropertyName = "msHidden";
								tabVisibleChangedEventName = "msvisibilitychange"
							}
							function safeAddHandler(element, event, handler) {
								element.removeEventListener(event, handler);
								element.addEventListener(event, handler)
							}
							function getVideos() {
								return document.getElementsByTagName("video")
							}
							function isPlaying(vid) {
								return !!(vid.currentTime > 0 && !vid.paused && !vid.ended && vid.readyState > 2)
							}
							function onTabVisibleChanged() {
								var videos = getVideos();
								if (document[tabHiddenPropertyName]) {
									document.wasPausedOnChangeTab = true;
									for (var i = 0; i < videos.length; i++) {
										var vid = videos[i];
										pauseVideo(vid, true)
									}
								} else {
									document.wasPausedOnChangeTab = false
								}
							}
							if (pauseOnLeaveTab) {
								safeAddHandler(document, tabVisibleChangedEventName, onTabVisibleChanged)
							}
							function isAutoPlayAllowedForSource(url) {
								if (hasAutoPlaySourcesWhitelist) {
									for (var i = 0; i < autoPlaySitesWhitelist.length; i++) {
										if (isUrlMatch(url, hasAutoPlaySourcesWhitelist[i])) return true
									}
								}
								return false
							}
							function onPaused(e) {
								e.target.isPlaying = false
							}
							function pauseVideo(vid, isLeavingTab) {
								var eventName = "auto-play";
								if (isLeavingTab == true) {
									vid.wasPausedOnChangeTab = true;
									eventName = "on leaving tab"
								}
								vid.isPlaying = false;
								vid.pause()
							}
							function onPlay(e) {
								onPlayOrLoaded(e, true)
							}
							function onPlaying(e) {
								onPlayOrLoaded(e, false)
							}
							function onPlayOrLoaded(e, isPlayConfirmed) {
								var msSinceLastClick = Date.now() - lastClickTimeMs;
								var vid = e.target;
								if (msSinceLastClick > allowAutoPlayWithinMillisecondsOfClick && !isAutoPlayAllowedForSource(vid.currentSrc)) {
									pauseVideo(vid)
								} else {
									vid.isPlaying = isPlayConfirmed || treatPlayingLikeOnPlay
								}
							}
							function addListenersToVideo(vid, srcChanged) {
								var pauseNow = false;
								if (vid.hasAutoPlayHandlers != true) {
									vid.hasAutoPlayHandlers = true;
									safeAddHandler(vid, "play", onPlay);
									if (handlePlayingInAdditionToPlayEvent) safeAddHandler(vid, "playing", onPlaying);
									safeAddHandler(vid, "pause", onPaused);
									safeAddHandler(vid, "ended", onPaused);
									pauseNow = true
								}
								if (pauseNow || srcChanged == true) {
									pauseVideo(vid);
									if (allowPauseAgainAfterFirstFound) {
										vid.isPlaying = false
									}
								}
							}
							function addListeners() {
								var videos = getVideos();
								for (var i = 0; i < videos.length; i++) {
									var vid = videos[i];
									addListenersToVideo(vid)
								}
							}
							safeAddHandler(document, "click", function() {
								lastClickTimeMs = Date.now()
							});
							var observer = new MutationObserver(function(mutations) {
								mutations.forEach(function(mutation) {
									if (mutation.type == "attributes" && mutation.target.tagName == "VIDEO") {
										try {
											videoAdded = true;
											addListenersToVideo(mutation.target, true)
										} catch (e) {}
									}
									if (mutation.addedNodes.length > 0) {
										addListeners()
									}
								})
							});
							observer.observe(document, {
								attributes: true,
								childList: true,
								subtree: true,
								characterData: false,
								attributeFilter: ['src']
							});
							addListeners();
						} catch (e) {
							return false;
						}
					}, 123)
				})();
				(function() {
					setTimeout(function() {
						try {
							if (document.getElementsByTagName("video")[0]) {
								var v_player = document.getElementsByTagName("video");
								for (var i = 0, length = v_player.length; i < length; i++) {
									try {
										v_player[i].muted = true;
										v_player[i].volume = 0;
										v_player[i].pause();
										v_player[i].offsetParent.innerHTML = '';
									} catch (e) {}
								}
							} else if (document.getElementsByTagName("object")[0]) {
								var v_player = document.getElementsByTagName("object");
								for (var i = 0, length = v_player.length; i < length; i++) {
									v_player[i].parentNode.removeChild(v_player[i])
								}
							}
						} catch (e) {
							return false;
						}
					}, 1234)
				})();
			};
			if (iqiyiapcliwaiobj || youtubespxzobj) {} else if (pcliwaiobj || sjliwaiobj || jxjkobj || mmkjjtjobj || objj.match(/(?:bilibili|acfun|douban|yinyuetai|kuwo|kugou|m1907|(?:y|kg)\.qq|xiami|migu|ximalaya|app-echo|pan\.baidu|asys)\./)) {
				cssobj('[class^="myBtnxx"],[id^="myBtnxx"],[class*="app"][class*="-ad-view-box"],[id*="app"][id*="-ad-view-box"],[class*="app-topbanner"],[id*="app-topbanner"],[class*="_bg_ad"],[id*="_bg_ad"],[class*="advertise"],[id*="advertise"],[class^="bd_ad"],[id^="bd_ad"],[class*=" area ad"],[id*=" area ad"],[class*="ad"][class*="banner"],[id*="ad"][id*="banner"],[class^="ad_inner"],[id^="ad_inner"],[class^="slide-gg"],[id^="slide-gg"],[class^="side_gg"],[id^="side_gg"],[class^="slide_ad"],[id^="slide_ad"],[class^="side_ad"],[id^="side_ad"],[class^="mod_ad"],[id^="mod_ad"],[class^="ad-client"],[id^="ad-client"],[class*="play-tips-ad"],[id*="play-tips-ad"],[class^="ad-slider"],[class^="ad-festival"],[id^="ad-slider"],[id^="ad-festival"],[class^="ad-"][class*="fixed"],[id^="ad-"][id*="fixed"],[class*="modAdv"],[id*="modAdv"],[class*="boxAdv"],[id*="boxAdv"],[class*="-ad-bottom"],[id*="-ad-bottom"]');
				cssobj('ad,ads,marquee,foot,footer,div;not([style]);not([class]);not([id])>a[style*="block"][style*="!important"],[data-adzone],div[adid^="ad-"],div[class^="adv "],div[id^="adv "],div[class*="corneradv "],div[id*="corneradv "],div[class$="-browser"][style*="fixed"],[class*="qinfan"],[id*="qinfan"],[class*="qianfan"],[id*="qianfan"],[class*="header"][class*="ownload"],[id*="header"][id*="ownload"],[class*="app"][class*="ownload"],[id*="app"][id*="ownload"],[class$="-fullscreen-tip"],[_stat*="浮层"],div[class*="foot"],div[id*="foot"],div[class*="bottom"][class*="recommend"],div[id*="bottom"][id*="recommend"],div[class^="right-activity"],div[id^="right-activity"],[data-adpid-checked],[data-ad-client],[data-adext],[ad-status],div[class*="pause"]:not([id]):not([class*="player-paused"]):not([aria-label]):not([class*="bilibili"]):not([class*="auto"]):not([class*="hide"]):not([class*="shadow"]):not([class*="icon"]):not([class*="btn"]):not([class*="svg"]):not([class*="definition"]),div[id*="pause"]:not([class]):not([id*="player-paused"]):not([aria-label]):not([id*="bilibili"]):not([id*="auto"]):not([id*="hide"]):not([id*="shadow"]):not([id*="icon"]):not([id*="btn"]):not([id*="svg"]):not([id*="definition"]),[data-role*="pause"]');
				cssobj('[class*="open"][class*="mobile"],[id*="open"][id*="mobile"],[node-type*="open"][node-type*="mobile"],a[title*="领"][title*="礼包"],[class^="ad-"][class*="bottom"],[id^="ad-"][id*="bottom"],[class^="ad-platform"],[id^="ad-platform"],[class^="mod_ad"],[id^="mod_ad"],[class*="_ad_center_"],[id*="_ad_center_"],[class*="download"][class*="bottom"][class*="bar"],[id*="download"][id*="bottom"][id*="bar"],[class*="-link-box"],[id*="-link-box"],[class$="_gg"],[id$="_gg"],[class*="bottom"][class*="operation"][class*="box"],[id*="bottom"][id*="operation"][id*="box"],a[onclick*="ga"][onclick*="click"],div[class^="activity"],div[id^="activity"],div[class$="activity"],div[id$="activity"],[class*="Adv"],[id*="Adv"],[data-ad-client],[data-type*="oogle"],[data-target-url*="activity"][class*="box"][class*="details"][class*="ads"],[id*="box"][id*="details"][id*="ads"],[class*="bottom"][class*="banner"],[id*="bottom"][id*="banner"],[class^="foot"],[id^="foot"],[class*="footer"]:not([class*="clearfix"]),[id*="footer"]:not([id*="clearfix"])');
				cssobj('[class^="AD"],[class^="AD"],[id^="AD"],[id^="AD"],[class*="vip"][class*="guide"],[id*="vip"][id*="guide"],[src*=".cnzz."],[href*=".cnzz."]');
				remove('[class$="-ie-tips"],[id$="-ie-tips"]');
				remove('iframe[src*="/game/"],iframe[width="1"][height="1"]');
				remove('[class*="-ad-"][id*="banner"],[id*="-ad-"][id*="banner"]');
				remove('[src*=".cnzz."],[href*=".cnzz."]');
				removeall('ad,ads,marquee', undefined, false);
				removeall('iframe[class*="open"][class*="app"],iframe[id*="open"][id*="app"]', undefined, false);
				removeall('iframe[class*="google"],iframe[id*="google"],iframe[name*="google"]', undefined, false);
				removeall('[class*="cnzz"],[id*="cnzz"],[class*="google"],[id*="google"],[name*="google"]', undefined, false);
				removeall('[class*="miaozhenad"],[id*="miaozhenad"],[class*="BAIDU_DUP_"],[id*="BAIDU_DUP_"]', undefined, false);
			} else {} if (jxjkobj || objj.match(/m1907\./)) {
				if (!objj.match(/ufanw\./i)) {
					(function() {
						for (let e = new Array("div", "img", "span", "p", "a", "li"), n = 0; n < 6; n++) {
							let i = document.getElementsByTagName(e[n]);
							if (i && i.length > 0) for (let a = 0; a < i.length; a++) {
								let l = i[a], s = l.getAttribute("id"), d = l.getAttribute("class");
								d && "A" == l.tagName && -1 != d.indexOf("; ") && l.getAttribute("onclick") && l.getAttribute("target") && l.href && (l.style.display = "none"), s && d && s == d && d.length > 10 && "LI" == l.tagName && (l.style.display = "none"), s && (s.length > 30 && -1 == s.indexOf("-") && (l.style.display = "none"), /^[0-9]*$/.test(s) && s.length > 1 && (l.style.display = "none"), s.length > 7 && /[0-9]/.test(s) && /[a-z]/i.test(s) && l.getAttribute("style") && (l.style.display = "none")), s && d && (-1 != d.indexOf(" ") && -1 != d.indexOf(s) && l.getAttribute("style") && (l.style.display = "none"), s == d && /[0-9]/.test(s) && /[a-z]/i.test(s) && (l.style.display = "none"))
							}
						}
					})();
					(function(doc) {
						let tags = ['img'];
						function getStyle(o, s) {
							if (o.style[s]) return o.style[s];
							if (doc.defaultView && doc.defaultView.getComputedStyle) {
								let x = doc.defaultView.getComputedStyle(o, '');
								return x && x.getPropertyValue(s)
							}
						};
						function testStyle(o) {
							let s = getStyle(o, 'position');
							return s === 'fixed' || s === 'absolute'
						};
						function isFloatLay(o) {
							let x = o.offsetParent;
							return !x || x.tagName === 'BODY' || x.tagName === 'HTML'
						};
						tags.forEach(function(s) {
							tags.forEach.call(doc.getElementsByTagName(s), function(x) {
								while (x) {
									if (isFloatLay(x)) {
										testStyle(x) && x.parentNode.removeChild(x);
										break
									}
									x = x.offsetParent
								}
							})
						});
					})(document);
				} else {}(function() {
					if (document.querySelectorAll("embed,video,object,iframe[frameborder]")[0]) {
						var shijian = document.querySelectorAll("embed,video,object,iframe[frameborder]")[0];
						shijian.currentTime = 0;
						shijian.currentTimes = 0;
					}
					if (document.querySelectorAll("marquee")[0]) {
						document.querySelectorAll("marquee")[0].remove();
					} else {}
				})();
				(function() {
					'use strict';
					let iframes = document.getElementsByTagName("iframe");
					for (let i = 0; i < iframes.length; i++) {
						iframes[i].setAttribute("allowfullscreen", true)
					}
				})();
				remove('[style="display:none"],[style="display: none"],[style="display:none;"],[style="display: none;"]');
				removeall('[style="display:none"],[style="display: none"],[style="display:none;"],[style="display: none;"]', undefined, false);
				if (!objj.match(/m1907\./i)) {
					cssobj('[value="捐"],[value*="券"],[value="包"],[value*="赏"],body~div:not([style]):not([class]):not([id]),body>*:not(section):not(iframe):not(embed):not(object):not(video):not(main):not(nav):not(div):not(p):not(span),*:not(embed):not(object):not(video) img,div[class="a1"]~script~[style*="fixed"],div[id="a1"]~script~[style*="fixed"],div[class*="play"]~script~[style*="fixed"],div[id*="play"]~script~[style*="fixed"],[class*="player_pause"],[id*="player_pause"],[class^="layui-layer-"],[id^="layui-layer-"],[class*="jiaqun"],[id*="jiaqun"],[class*="qqun"],[id*="qqun"],[class*="weixin"],[id*="weixin"],div[class^="links"],div[class^="htmle"][class*="-"],div[class*="roll"][class*="switch"],div[class*="live"][class*="barrage"],[class^="dating"],[class="waifu"],[class*="layui-layer"][class*="tips"],[class*="Toast"][class*="Center"],[style*="block"][class*="banne"],[style*="block"][id*="banne"],[id*="bottom"],[style*="position:fixed;"][style*="bottom:0px;"],[style*="position: fixed;"][style*="bottom: 0px;"],[style*="position:fixed;"][style*="left:0px;"],[style*="position: fixed;"][style*="left: 0px;"],[style^="display:inline-block"],[style^=" display"][style*="none"]+[style*="fixed"],[style^="display"][style*="none"]+[style*="fixed"],div[style^="display"][style*="none"] script,div[style^=" display"][style*="none"] script,span[style^="display"][style*="none"] img,span[style^=" display"][style*="none"] img,span[style^="display"][style*="none"]+script,span[style^=" display"][style*="none"]+script,span[style^="display"][style*="none"]+script+div,span[style^=" display"][style*="none"]+script+div,script+span[style^="display"][style*="none"]+div,script+span[style^=" display"][style*="none"]+div,[style*="bottom:0px;left:0px;"][style*="position:fixed"],[style*="bottom: 0px; left: 0px;"][style*="position: fixed"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}::-webkit-scrollbar{width:0px!important;height:0px!important}963540817');
				} else {}
			} else {} if (jxbpcobj) {
				cssobj('ul#httpsvipul>li:last-of-type');
				if (jxbpclwobj) {
					cssobj('div#jxbhttps{top:70px!important;left:5px!important;transform:scale(0.5)!important;}ul#httpsvipul>li{margin:-7.5px -17.5px -7.5px -17.5px!important;transform:scale(0.75)!important;}ul#httpsvipul{top:115px!important;width:450px!important;}963540817');
				} else {}
				if (obj.match(/^https?:\/\/(?:v(?:-wb)?\.youku\.com\/v_show\/id_|vku\.youku\.com\/live\/)/)) {
					if (obj.match(/^https?:\/\/v(?:-wb)?\.youku\.com\/v_show\/id_/)) {
						jxbzdjxobj();
						zdgbdmobj();
						jxbvolumeobj();
						lkzdztobj();
						cssobj('.control-icon.control-phonewatch,.control-scroll-info.active,div[class^="u-app_"],div[class^="u-vip_"],.h5-ext-layer iframe,.h5-ext-layer iframe+div[style*="margin-left:"],.h5-ext-layer iframe,.h5-ext-layer iframe+div [style*="cursor"][style*="pointer"],li[class^="g-view_"][class*="top-nav-more-large_"]:last-of-type,.vip_limit_content_sid p,.vip_limit_content_sid em,[data-spm*="shoujikan"],[class^="panel_"][class*=" u-panel_"],[class^="logout-header_"],div.youku-layer-logo,#right-title-ad-banner');
						cssobj('div[class*="-position-"][style*="fixed"],div[class^="change-skin"],div[class^="top_area"],.control-scroll-infotop,.h5-ext-layer>div[style*="left:50%"][style*="top:50%"],.h5-ext-layer>div[style*="left: 50%"][style*="top: 50%"],span[class="iconfont iconshoucang"],div[class^="ab_"],div[id^="ab_"],.h5-ext-layer img,div[class^="switch-img"][class*="setconfig"],div[id^="Boh"]:not([id*="mment"]),div[class^="boh"]:not([class*="mment"]),div[class^="leftarea_"],[class*="foot"],[class^="fixed_bar_"] a[target*="_blank"],ul.play-fn,.js-top-icon');
						cssobj('div[class^="rightarea_"]{margin-left:auto!important;}[class^="fixed_bar_"]{background-color:transparent!important;}div.barrage-normal-container{float:left!important;width:100%!important;text-align:center;}div#ykPlayer{z-index:999999999!important}div[data-spm*="login"]>div[style*="block"][style*="fixed"]{z-index:2147483647!important;}div[id^="header-contain"]{position:absolute!important;}963540817');
					} else {
						jxqtwzhyobj();
						lkzdztobj();
						cssobj('h2.caption{margin-left:calc(100vw/4)!important;width:auto!important;text-align:center;}.content{margin-top:auto!important;}body{background-image:none!important;background-color:#333333!important;}::-webkit-scrollbar{width:0px!important;height:0px!important;}div.description,div.outlets,div.action');
					}
				} else if (obj.match(/^https?:\/\/[^\/]+?\.tudou\.com\/(?:v\/|.+?\/id_)/)) {
					jxbzdjxobj();
					jxbvolumeobj();
					lkzdztobj();
					cssobj('div[class^="u-app_"],div[class^="top_area"],.td-interactbox,.td-play__baseinfo,[class*="playbase"],[data-spm*="foot"],[data-js*="Down"],[class*="td-side-bar"] li:not([data-js-gotop*="gotop"])');
					cssobj('[class*="login"][class*="pop"],[id*="login"][id*="pop"]{z-index:2147483648!important}963540817');
				} else if (obj.match(/^https?:\/\/v\.qq\.com\/(?:x\/(?:cover|page)|variety\/p\/topic)\//)) {
					if (!obj.match(/\/x\/page\//)) {
						jxbzdjxobj();
						zdgbdmobj();
					} else {
						jxqtwzhyobj();
						cssobj('[data-role^="txp-ui-closetoendrecommend-container"],[class^="txp_recommend_popup"],[data-role^="txp-ui-closetoendrecommend-list"],a[class="btn_collect _btn_follow"]');
					}
					lkzdztobj();
					cssobj('.quick_vip.quick_item>.quick_link,.video_score,._site_channel_more,.txp_popup_download,txpdiv.txp_shadow,.icon_vip_pic,.quick_tips_inner,.video_info_wrap,[_r-component="c-mood"],.tips_promotion,[_hot*="客户端"],[class*="txp_ad_link"],[class*="txp_ad_more"],[data-role*="ad"][data-role*="pause"],.txp_comment_hot,.mod_action .action_wrap,div[_r-component="c-cover-recommend"],.txp-watermark-action,txpdiv.txp-watermark,[class*="_bg_ad"],[id*="_bg_ad"],[class^="mod_ad "],[data-role="txp-ui-favorite"],#mask_layer,.site_footer,._player_helper.player_helper,#shortcut');
					cssobj('[data-role^="txp-ui-title-mod"],[data-role^="txp-ui-screen-percent-wrap"],[data-role^="txp-ui-clock"],div[class="mod_row_box _movie_contact"],div[class="mod_row_box mod_row_loading"],.x_layer_card,.mod_row_box_casts.mod_row_box,div[class="mod_row_box"]:not([class*="forCommentsEntry"]):not([id*="forCommentsEntry"]),[_wind^="columnname="][_wind*="热区"],[_wind^="columnname="][_wind*="图片"],[_r-component="c-player-helper"],.mod_client_bubble.mod_quick_tips,div[_r-component="c-new-tv-preheat"],.container_short .txp_mod_barrage,.site_channel a:not([_stat*="电"]):not([_stat*="动"]):not([_stat*="综艺"]):not([_stat*="会员"]):not([_stat*="全部"])');
					cssobj('.player_headline{text-align:center;}.player_container .txp_mod_barrage{left:0!important;text-align:center;}div.mod_hanger{background-color:transparent!important;}div.site_container.container_main{background-color:#0f0f1e;}.wrapper_side .mod_title .title,div.figure_detail_row{color:#d8d4d3;}963540817');
					removeall('div[_r-component="c-new-tv-preheat"],div.figure_video', undefined, false);
					if (obj.match(/\/variety\/p\/topic\//)) {
						cssobj('body::-webkit-scrollbar{width:0!important;height:0!important}div[class*="module"][_wind="columnname=播放器"]{top:2.5vh!important}div[data-index="3"][_wind="columnname=视频列表"]{top:50vh!important}div[class="mod_column"]{margin-top:-50px}html,body,div[class*="background"]{background-color:#2e2e36!important}div[class*="background"] div{background:none!important;height:auto!important}div[class^="main-container"]{height:auto!important}.jimu-module .module-video_list .btn_change{top:-25%}.jimu-module .module-video_list .figures_list li.list_item a,.jimu-module .module-video_list .figures_list li.list_item a:active,.jimu-module .module-video_list .figures_list li.list_item a:hover,.jimu-module .module-video_list .figures_list li.list_item a:visited{color:aliceblue!important}.jimu-module .module-video_list .btn_change .icon-a{top:75%}div[class="mod_text_tabs"]{visibility:hidden!important}[_wind^="columnname="]:not([_wind*="播放器"]):not([_wind*="列表"]):not([_wind*="往期"]),div[data-index][_wind="columnname=视频列表"]:not([data-index="3"]),.txp_btn_loop.txp_btn');
						(function() {
							try {
								let b = document.querySelectorAll('ul[class*="list"] a[href*="/x/"][target*="_blank"]');
								for (let i = 0, len = b.length; i < len; i++) {
									b[i].setAttribute('target', '_top')
								}
							} catch (e) {
								return false
							}
						})();
					} else {}(function() {
						setInterval(() => {
							let txp_btn_volume = $(".txp_btn_volume");
							if (txp_btn_volume.attr("data-status") === "mute") {
								$(".txp_popup_volume").css("display", "block");
								txp_btn_volume.click();
								$(".txp_popup_volume").css("display", "none")
							}
						}, 500);
					})();
				} else if (obj.match(/^https?:\/\/w(?:ww)?\.mgtv\.com\//)) {
					if (!obj.match(/^https?:\/\/www\.mgtv\.com\/act\//)) {
						mgzdgqobj();
						jxbvolumeobj();
						lkzdztobj();
					} else {
						jxqtwzobj();
						cssobj('html,body{background:none!important;background-color:#1b1b1b!important;}div.wp-main.wp.page-section{margin-top:calc(10vh);}a.u-post{width:auto!important;}div.screen-top,[class*="qrcode"],div.mitem-index.mitem,div[class="c-header-panel-mod"]:not([id="honey-header-user"])');
						(function() {
							$("body").on('mouseover', 'a[class*="listbox"][href*=".mgtv.com/"]:not([href*="=http"]):not([href*="?http"]):not([href*="#http"])', function(e) {
								let jxbzqxjobj = $(this), href = jxbzqxjobj.attr('href') || jxbzqxjobj.data("href");
								jxbzqxjobj.off('click.chrome');
								jxbzqxjobj.on('click.chrome', function() {
									window.location.href = href
								}).attr('data-href', href).css({
									cursor: 'pointer'
								}).removeAttr('href')
							})
						})();
					}
					cssobj('mango-control-status,.m-report-tipoff-dialog,[class*="footer"],[class*="mgad_"],[id*="mgad_"],ul.menu.clearfix a:not([href*="/show/"]):not([href*="/tv/"]):not([href*="/movie/"]):not([href*="/cartoon/"]):not([href*="/vip/"]),[class*="rightnav"] ul li:not([mg-stat-mod*="history"]):not([class*="user"])');
					cssobj('div.mms-wrap,.control-right,[style*="top: 0px;left:0px;bottom:0px;right:0px"],[style*="top: 0px; left: 0px; bottom: 0px; right: 0px"],span[class$="bg"],.video-info.enable,.play-control .control-left .dos,.g-play .g-container-playcet .mod-wrap-side,.big-poster-conent,ul.honey-feedback-list li:not([class*="backtop"])');
					cssobj('.u-control-danmu-control.state-bottom{right:25%!important;text-align:center;}div.maomibtn li#mgzdgqli{display:block!important}div.login-main{z-index:2147483647!important;}963540817');
					if (obj.match(/^https?:\/\/w(?:ww)?\.mgtv\.com\/b\//)) {
						jxbzdjxobj();
						zdgbdmobj();
					} else {
						if (obj.match(/^https?:\/\/w(?:ww)?\.mgtv\.com\/s\//)) {
							zdgbdmobj();
						} else {} if (!obj.match(/^https?:\/\/www\.mgtv\.com\/act\//)) {
							jxqtwzhyobj();
						} else {}
					}
				} else if (obj.match(/^https?:\/\/www\.iqiyi\.com\/(?:[avw]_|kszt\/)/)) {
					if (obj.match(/^https?:\/\/www\.iqiyi\.com\/w_/)) {
						jxbvolumeobj();
						lkzdztobj();
					} else if (iqiyiapcliwaiobj) {} else {
						jqjs();
						zdgbdmobj();
						jxbvolumeobj();
						lkzdztobj();
						if (localStorage.getItem("vipzdjx") === "0") {} else {
							cssobj('div[style*="visibility"][style*="visible"]:not([class]):not([id]):not([style*="fixed"]){z-index:2147483647!important;}963540817');
						}
						cssobj('[data-player-hook*="top"],div#iProgress,div#userdata_el,#titleRow,[data-player-hook*="follow"],.vippay-btn-tip,[class*="-adv-under"],[id*="-adv-under"],[class^="100000"],[id^="100000"],[data-player-hook*="logo"],iqpdiv.iqp-logo-box,.pca-bg.qy-player-pca,div[style^="position:fixed"][style*="left:0"][style*="top:0"]:not([style*="visibility:visible"]):not(class):not(id),div[style^="position:fixed"][style*="left:0"][style*="top:0"]:not([style*="visibility:visible"]):not(class):not(id)');
						cssobj('[id^="nav_renewBtn"],[data-player-hook="blankarea"],[rseat*="feedback"],.vip-btn .link-wrap,[data-player-hook*="scoretask"],[class*="footer"],[id="block-F"],[id="block-G"],[id="block-BD"],[id="block-JJ"],[class="qy-mod-wrap"][data-asyn-pb="true"],[id*="appDown"],[id*="game"],.qy-flash-func,[class*="-ai-"][data-player-hook],[class*="hot"][data-player-hook],div.nav-channel a:not([rseat*="dian"]):not([rseat*="zongyi"]):not([rseat*="dongman"]),li[class^="anchor-list"]:not([class="anchor-list"])');
						cssobj('[data-barrage*="BarrageVue"]{text-align:center;margin-left:25%!important;}.flash-box.videoWindow{top:0!important;left:0!important;position:relative!important;z-index:300!important;width:100%!important;height:100%!important}iqpdiv[class*="img"][data-player-hook="progress-imageWrapper"]{bottom:20px!important;}iqpdiv[data-player-hook="progress-line"],iqpdiv[data-player-hook="heatmap"],[data-player-hook="pca"]');
						removeall('div[class^="qy-header-login-pop-"][class$="selected"]', undefined, false);
						if (obj.match(/^https?:\/\/www\.iqiyi\.com\/v_/)) {
							jxbzdjxobj();
						} else if (obj.match(/^https?:\/\/www\.iqiyi\.com\/(?:a_|kszt\/)/)) {
							jxbzdjxobj();
							document.head.insertAdjacentHTML('beforeend', '<style>[lequ-comid][lequ-componenttitle]:not([lequ-componenttitle*="现场"]):not([lequ-componenttitle*="独播"]):not([lequ-componenttitle*="播放"]):not([lequ-componenttitle*="完整"]):not([lequ-componenttitle*="正片"])>[cpnm]:not([cpnm*="现场"]):not([cpnm*="独播"]):not([cpnm*="播放"]):not([cpnm*="完整"]):not([cpnm*="正片"]),div[class^="videoBackGround"],div[class^="lequ-component lequ-comId"][data-block="PCW_lequ_code"][cpnm]>div.section0#section0,div[class*="weiboreyi-component"][data-block*="pinlun"],div[class^="banner"][class$="-outer"],div[id^="banner"][id$="-outer"],div.album-head-btn>a.qy-album-collect.J_collect_data,[class*="download"],[j-role*="scrollDiamondSign"],[class*="signin-btn"],#J-header-upload,#widget-playhistory-new,div.header-sideItem.header-vip,div.header-sideItem.header-download,div.header-sideItem.header-info,[class$=" cms-component-blank"][style="margin-bottom:0px;"]>*:not([class^="sec-"]):not([id^="sec-"]),[class*="sec-head-ad"],[class="relatedWork"],.slider-bar,[class*="djgm"],[class*="lhzz"],[class="sec-head show"] *:not([class*="title"]) img,[class="mod-footer-editor"],[class^="dhome"],[class="heat-info"],[class="episodePlot"][data-series-ele="juqing"],[id="widget-albumQiyu"],[class="albumRanklist"],[class="rank-num rank-active fl"],[data-tab-type="albumcomment"],[class="intro-effect clearfix"],[class="albumFocus-container"],[class^="top-"]>img[src*=".iqiyipic.com/common/20"][alt=""][class],li[class^="nav-L nav-"][data-nav-to^="#section"]:not([data-nav-to="#section1"]),[class="_mask_"],[class="vote-banner-box"],[class^="section"][class*=" section"],[class="nav-L nav-L2 nav_D"],div[class^="section2"],div[class^="section3"],div[class^="section4"],div[class^="section5"],div[class^="section6"],div[class^="section7"],div[class^="section8"],div[class^="section9"],[class^="footer"],div[class^="cms-component com-"][com-type="default"][style="margin-bottom:0px;"],div[class^="section"][id^="section-"]>img,.cms-wrapper>.layout-1020.cms-layout>.cms-row>.col-12.cms-block>.cms-component>.sec-head{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important}::-webkit-scrollbar{width:0!important;height:0!important}.cms-wrapper{background:none!important;background-color:black!important}[lequ-componenttitle*="看点"],[lequ-componenttitle$="花絮"],[lequ-componenttitle*="周边"],[lequ-componenttitle*="泡泡"],[lequ-componenttitle][data-block^="PC"][cpnm]:not([splcn*="独播"]),[lequ-componenttitle][data-block*="code"]:not([splcn*="独播"]),[style^="display:block;float:right"],[style^="display: block; float: right"],.lequ-component-box>[class^="lequ-component lequ-comId"][class*=" com-"] [class^="show"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important}html,.lequ-component-box{background-color:#232325!important}.lequ-content{text-align:center;margin-left:25%}.lequ-header{margin-left:-25%!important}</style>');
						}(function() {
							try {
								let aElement = document.querySelectorAll('div[class*="list"] a[href*="/v_"][href*=".html"][target="_blank"]');
								for (let i = 0; i < aElement.length; i++) {
									aElement[i].getAttributeNode('target').value = "_top"
								}
							} catch (e) {
								return false
							}
						})();
					};
				} else if (obj.match(/^https?:\/\/tw\.iqiyi\.com\/v_/)) {
					jqjs();
					jxqtwzobj();
					jxbvolumeobj();
					lkzdztobj();
					cssobj('.main-content{padding-bottom:inherit;}[class*="vip-side-wrap"],[id*="vip-side-wrap"],.tw-play-con,.tw-play-side,.tw-play-tag,.tw-play-num,.tw-play-intro,.collect');
				} else if (obj.match(/^https?:\/\/tv\.sohu\.com\/v\//)) {
					jxbzdjxobj();
					zdgbdmobj();
					jxbvolumeobj();
					lkzdztobj();
					cssobj('[class*="foot"],[id*="foot"],[data-pb-txid*="qianfan"],[class*="zhibo"],#tvphb,span.btn-tips,a[class*="-adv-"][target*="_blank"],a[id*="-adv-"][target*="_blank"],.ad,.adv,#ad,#adv,.x-hdr-btn,.x-fox-btn,#leftBar,div.side-set div,div.side-set a:not([class*="top"]),div#navLocker div:not([class*="history"]):not([class*="upload"]):not([class*="user"]):not([class*="login"])');
					cssobj('[class^="x-"][class*="hot"][class$="-btn"],[class^="x-clock"],[class^="x-webg"],[class^="x-pugc-title"],[class^="x-gradient-top"],[class^="x-info-panel"],#newplayNavCrumbs,.seeBox,div#content,.x_poster_card,.side-set,div.mod-column-main.l,[class*="share"],[id*="share"],div[class^="vBox vBox-"]');
					cssobj('html{background-color:#313136;}div.mod-column-side.r,div.right{width:inherit!important;}div#toolBar{text-align:center;width:calc(100vw/2)!important;}div[class^="globallogin"]{z-index:2147483647!important;}#player{z-index:999999999!important;}963540817');
					remove('iframe[src*="//tv.sohu."][width="0"][height="0"]');
				} else if (obj.match(/^https?:\/\/film\.sohu\.com\/album\//)) {
					jxbzdjxobj();
					cssobj('#go-top,.visible.J_vip_buttons_info.movie-info-vip-wrap,i.nav-new,a[href*="film.sohu.com/vip.html"],a[href*="film.sohu.com/vipAct.html"],div.player-content-bg,div.top_template,div.tm-wel1,.x-info-panel,.x-gradient-top,.x-hdr-btn,.x-fox-btn,div.content_main_hasrank,div.bg_main,.footer');
					cssobj('#vip_iframe__{position:relative!important;}div[class^="globallogin"]{z-index:2147483647!important;}963540817');
				} else if (obj.match(/^https?:\/\/www\.le\.com\/ptv\/vplay\//)) {
					jxbzdjxobj();
					zdgbdmobj();
					jxbvolumeobj();
					lkzdztobj();
					cssobj('[style^="position:"][style*="hidden"],.hv_topbar,.vipTabBanner,[data-statectn*="right"],.hv_buy,.tj_title,#j-hotguess,div.rank_box,.Foot,.user_bar .user_vip,.player-content-bg,.pop-operates,.QR_code,[class^="Banner_"],[id^="Banner_"],[class^="JS_banner_"],[id^="JS_banner_"],[id^="JS_banner_"]+div.column_title,[id^="JS_banner_"]+div.column_title+div.column_body,[id^="JS_banner_"]+div.column_title~div.column_title,[id^="JS_banner_"]+div.column_title+div.column_body~div.column_body');
					cssobj('div#LEPass_LOGIN_IFRAME{z-index:2147483647!important;}963540817');
					remove('.rightFix_tool,iframe[onload*="union"],[style^="position:"][style*="hidden"]');
					removeall('[style^="position:"][style*="hidden"]', undefined, false);
				} else if (obj.match(/^https?:\/\/v\.pptv\.com\/show\//)) {
					jxbzdjxobj();
					zdgbdmobj();
					jxbvolumeobj();
					lkzdztobj();
					cssobj('.buy_vod.down.login-a-tryover,.module-video2016-program .hd,.focusPeople,div#wxPop,[tj_id^="sb_"],[class*="download"],[class^="module-video"][class$="-ops cf"],div.sus-cont a,div.sus-cont li:not([class*="top"]),div.hot.cf a:not([href*="tv.pptv."]):not([href*="movie.pptv."]):not([href*="zongyi.pptv."]):not([href*="cartoon.pptv."])');
					cssobj('a#update_btn,.button-box .right,img[class^="roll-"],img[id^="roll-"],a[tj_id],[class^="module-video"][class$="newupload"],[class*="copyright"],[class*="banneradv"],#video-maincont,[id*="game"],[class*="side-adv"],[class^="afp-"],[id^="afp-"],[class^="afp_"],[id^="afp_"]');
					cssobj('div[class^="layer loginlayer"]{z-index:2147483647!important;}');
				} else if (obj.match(/^https?:\/\/vip\.1905\.com\/play\//)) {
					jxbzdjxobj();
					cssobj('div[class="qrcode_r fl"],ul.ecope_emailsuggest,iframe#bubbleMsg,.pay-mod-notlogin,.playerBox-info-rightPart,#zhichiBtnBox,[class^="fl popBox ele_uc ticket hidden"],figure,footer,#sideBar_help_webSite,[class*="-adver"],[id*="-adver"]');
					cssobj('div[class^="common-popup"]{z-index:2147483647!important;}');
				} else if (obj.match(/^https?:\/\/www\.wasu\.cn\/.+?\/show\/id\//)) {
					jxbzdjxobj();
					jxbvolumeobj();
					lkzdztobj();
					cssobj('form#postFrameData,div[style^="position:absolute; right:0;"],div#play_mask,.playli_momey,.playli_erwm,.open_vip,.wasu_jh,.play_video_b,ws-postershot,[class*="postershot"],[id*="AD_POP_"],iframe[src*="adload"],.play_global,.footer,.sidebar,[class*="_ad"],[id*="_ad"],[class*="ad_"]:not([class*="head"]),[id*="ad_"]:not([id*="head"])');
					cssobj('table[class^="boxy-wrapper"]{z-index:2147483647!important;}963540817');
				} else if (obj.match(/^https?:\/\/(?:www|player|live)\.bilibili\.com\//)) {
					lkzdztobj();
					h5zdbfobj();
					cssobj('[class*="-player-video-btn-jump"][class$="-player-video-btn-bilibili-logo"],[class*="-suspension-bar"],[class*="qrcode"],[class^="flip-view p-relative over-hidden"],[class*="player-video-top"],div#heimu,.bilibili-player-video-top.bilibili-player-video-top-pgc,[class*="-app-download"],.expand-more,#toolbar_module,div.clearfix.recom-item:nth-child(n+10),li.nav-link-item a[href*="/app.bilibili.com"],li.nav-link-item a[href*="/game.bilibili.com"]');
					if (!obj.match(/^https?:\/\/live\.bilibili\.com\//)) {
						zdgbdmobj();
					}
					if (obj.match(/^https?:\/\/www\.bilibili\.com\/bangumi\/play\//)) {
						jxbzdjxobj();
					} else {
						jxqtwzhyobj();
					}
				} else if (obj.match(/^https?:\/\/www\.fun\.tv\/vplay\/g-/)) {
					jqjs();
					jxqtwzobj();
					lkzdztobj();
					h5zdbfobj();
					cssobj('.fxp-video-cover,#mark-,#main-rt,.fix.rightBtn,span.tit-btn-icon,[class*="downlaod"]');
					cssobj('a.orange-btn.js-pay-open{text-align:center!important}div[class^="dialog-view"]{z-index:2147483647!important;}963540817');
				} else if (obj.match(/^https?:\/\/www\.ixigua\.com\/\d{10,}/)) {
					jqjs();
					jxbzdjxobj();
					jxbvolumeobj();
					lkzdztobj();
					zdgbdmobj();
					cssobj('div[class="teleplayPage__interactionZone__LeftActions"],div[class="teleplay__LvideoRecomment"],a[href*="/www.ixigua.com/app/"]');
					cssobj('div[class="teleplay__playerContainer__wrapper"]{z-index:2147483647!important;}963540817');
				} else if (obj.match(/^https?:\/\/www\.miguvideo\.com\/mgs\/website\/prd\/detail\.html\?cid=/)) {
					jxqtwzobj();
					lkzdztobj();
					cssobj('div.bulletScreen,div.recoment_to_you,[class*="download"],[class="float-btn"]>div:not([class*="top-btn"])');
				} else if (obj.match(/^https?:\/\/(?:www\.acfun\.cn\/(?:.+?\/ac|bangumi\/)|live\.acfun\.cn\/live\/)/)) {
					zdgbdmobj();
					jxqtwzhyobj();
					lkzdztobj();
					h5zdbfobj();
				} else if (obj.match(/^https?:\/\/haokan\.baidu\.com\/v/)) {
					jxqtwzhyobj();
					lkzdztobj();
					cssobj('li.land-item:nth-child(n+10),[class*="ownload"],[id*="ownload"],div[class="videoinfo-text clearfix"]>div,div[class="videoinfo-text clearfix"]>span:not([class*="left"])');
				} else if (obj.match(/^https?:\/\/tieba\.baidu\.com\/p\//)) {
					if (document.querySelector("video")) {
						jxqtwzhyobj();
						lkzdztobj();
					} else {}
				} else if (obj.match(/^https?:\/\/movie\.douban\.com\/subject\//)) {
					(function() {
						let myScriptStyle = document.createElement("style");
						myScriptStyle.innerHTML = '[class*="ticket"],[id*="download"],.gray_ad,#footer{display:none!important;}.c-aside.site_online {margin-top:-65px;}.c-aside-body a{border-radius:6px;color:#37A;display:inline-block;letter-spacing:normal;margin:0 8px 8px 0;padding:0 8px;text-align:center;width:65px}.c-aside-body a:link,.c-aside-body a:visited{background-color:#f5f5f5;color:#37A}.c-aside-body a:hover,.c-aside-body a:active{background-color:#e8e8e8;color:#37A}.c-aside-body a.disabled{text-decoration:line-through;color:#000}.c-aside-body a.available{background-color:#5ccccc;color:#006363;border-radius:10px;font-weight:bold;}.c-aside-body a.available:hover,.c-aside-body a.available:active{background-color:#3cc}.c-aside-body a.sites_r0{text-decoration:line-through}';
						document.getElementsByTagName("head")[0].appendChild(myScriptStyle);
						let aside_html = '<div class=c-aside > <h2><i class=""></i> · · · · · · </h2> <div class=c-aside-body style="padding: 0 12px;"> <ul class=bs > </ul> </div> </div>';
						if (!document.getElementById("seBwhA") && document.title.indexOf('豆瓣') !== -1) {
							var seBwhA = document.createElement("a");
							seBwhA.id = "seBwhA";
							document.getElementsByTagName("html")[0].appendChild(seBwhA);
							$(document).ready(function() {
								let parseURL = function(url) {
									return {}
								};
								var site_online, site_sub, update_site_offline_sites;
								site_online = $(aside_html);
								update_site_online_sites = function(title, en) {
									var i, l, link, link_parsed, n, name, site_online_sites;
									title = encodeURI(title);
									site_online_sites = {
										'最大网': 'http://www.zuidazy4.com/index.php?m=vod-search&wd=' + title,
										'布米米': 'http://www.bumimi.top/search/' + title,
										'茶杯狐': 'https://www.cupfox.com/search?key=' + title
									};
									for (name in site_online_sites) {
										link = site_online_sites[name];
										link_parsed = parseURL(link);
										link = $('<a></a>').attr('href', link);
										link.attr('data-host', link_parsed.host);
										link.attr('target', '_blank').attr('rel', 'nofollow');
										link.addClass('available');
										link.html(name);
										$('#content div.site-online-body ul').append(link)
									}
								};
								site_online.addClass('site_online');
								site_online.find('div.c-aside-body').addClass('site-online-body');
								site_online.find('h2 i').text('搜索播放');
								$('#content div.tags').before(site_online);
								var title, title_en, title_sec;
								title = title_sec = $('#content > h1 > span')[0].textContent.split(' ');
								title = title.shift();
								title_sec = title_sec.join(' ').trim();
								title_en = '';
								update_site_online_sites(title)
							})
						}
					})();
					(function() {
						try {
							let jxbdbobj = document.querySelector("#content>h1");
							jxbdbobj.innerHTML = '<a href="https://z1.m1907.cn/?jx=' + jxbdbobj.innerText.replace(/^\s*?(.+?第[^部季][部季]).*$/, "$1").replace(/^\s*?(?!.+?第[^部季][部季])(.+?)(?:\s+?(?:第)?.*)?$/, "$1") + '" onclick="window.open(this.href,\'bkmk_popup\',\'esizable=1,scrollbars=1,toolbar=0,status=0,width=1100,height=600,allowfullscreen=allowfullscreen,left=\'+(screen.availWidth-1100)/2+\',top=\'+(screen.availHeight-600)/2);return false" style="padding:5px 5px 5px 5px;color:#b9d7ea;border:1.5px outset buttonface;-webkit-border-radius:.5em;box-shadow:inset 0 1px 0 #7fd2f1,0 3px 0 #156785;background-image:-webkit-linear-gradient(bottom,#000 0,#156785 100%);" title="解析观看--' + jxbdbobj.innerText.replace(/^\s*?(.+?)\(.+?\).*$/, "$1") + '--资源">' + jxbdbobj.innerText.replace(/^\s*?(.+?)\(.+?\).*$/, "$1") + '</a><span class="year">' + jxbdbobj.innerText.replace(/^\s*?.+?(\(.+?\)).*$/, "$1") + '</span>';
						} catch (e) {
							return false;
						}
					})();
				} else if (obj.match(/^https?:\/\/www\.bumimi\.top\/search\//)) {
					pdssgjcobj = 'ul#result>li>a';
					apddjobj();
				} else if (obj.match(/^https?:\/\/(?:www\.youtube\.com\/watch\?v=|blueconvert.com\/\?id=)/)) {
					if (obj.match(/\/watch\?v=/)) {
						cssobj('ytd-compact-video-renderer[class="style-scope ytd-watch-next-secondary-results-renderer"]:nth-child(n+20)');
					} else {
						document.title = 'Youtube 视频下载';
						(function(b) {
							document.querySelectorAll(b)[0] && (document.querySelectorAll(b)[0].innerHTML = '<font color="#007bff">Youube</font>视频下载')
						})('h1');
						document.head.insertAdjacentHTML('beforeend', '<style>footer,header,h1+div[class^="input-group mb-"],div[class^="album py-"],div[class^="alert alert-danger"],p[class^="lead text-muted"],p[class^="card-text"]{display:none!important}html,section{background:url(https://gitee.com/ok3/16/raw/master/1.jpg)no-repeat fixed center/cover!important}[id^="videoDetail"]{background-color:transparent;border:none!important}[id^="videoTitle"]{color:initial;background-color:#cfceb063}button{background-color:#4CAF50!important}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){background-color:#03a9f44f;color:black;font-weight:bold;border:1px outset buttonface;text-decoration:none;text-align:center}*{border:none!important;outline:none!important}</style>');
					}
				} else if (obj.match(/^https?:\/\/(?:greasyfork|sleazyfork)\.org\/.+?\/(?:users\/|scripts(?:\/by-site\/|\?))/)) {
					(function() {
						'use strict';
						function addScore(script) {
							let separator = script.querySelector('h2>span.name-description-separator');
							let description = script.querySelector('h2>span.description');
							if (separator) {
								let score = document.createElement("strong");
								score.style.color = "darkgreen";
								score.innerHTML = script.getAttribute("data-script-rating-score");
								separator.parentNode.insertBefore(score, separator)
							}
							let installArea = script.querySelector("#install-area");
							if (installArea) {
								script.onmouseover = function(e) {
									installArea.style.display = "block"
								};
								script.onmouseout = function(e) {
									installArea.style.display = "none"
								}
							}
						};
						let sortDiv = document.querySelector("#script-list-sort");
						if (sortDiv) {
							let switchFilter = document.createElement("div");
							let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
							let observer = new MutationObserver(function(records) {
								records.map(function(record) {
									for (let i = 0; i < record.addedNodes.length; i++) {
										let curNode = record.addedNodes[i];
										if (curNode.className == "script-list") {
											let scripts = curNode.querySelectorAll('li');
											for (let i = 0; i < scripts.length; i++) {
												let script = scripts[i];
												addScore(script)
											}
										}
									}
								})
							});
							let option = {
								'childList': true
							};
							observer.observe(document.querySelector("body>.width-constraint .sidebarred-main-content"), option);
							let scripts = document.querySelectorAll('ol.script-list>li');
							for (let i = 0; i < scripts.length; i++) {
								let script = scripts[i];
								addScore(script)
							}
						}
					})();
				} else if (obj.match(/^https?:\/\/t6{2}y\.com\/htm_data\//)) {
					shipingquanpingobj();
					(function() {
						try {
							var table = document.querySelectorAll('.sptable_do_not_remove');
							if (document.querySelectorAll('.sptable_do_not_remove span').length > 0) {
								var str = document.querySelectorAll('.sptable_do_not_remove span')[0].className;
								for (var j = 0; j < table.length; j++) {
									var td = table[j].querySelectorAll('td');
									for (var i = 0; i < td.length; i++) {
										td[i].innerHTML = '<span class=' + str + '>&nbsp;</span>'
									}
								}
							} else {
								for (var k = 0; k < table.length; k++) {
									table[k].style.display = 'none'
								}
							}
							document.querySelector("div.tpc_content.do_not_catch>a:last-of-type").click();
						} catch (e) {
							return false;
						}
					})();
				} else if (obj.match(/^https?:\/\/www\.yinyuetai\.com\/play\?id=/)) {
					jxqtwzhyobj();
					lkzdztobj();
					h5zdbfobj();
				} else if (obj.match(/^https?:\/\/pan\.baidu\.com\/(?:s|play)\//)) {
					cssobj('[class="top-right-box"],[class="privilege-box"],span[node-type="app-user-vip-center"],a[class*="app-download"],span[class*="newIcon"],i[class*="-light-icon"],i[class^="bar-bling"],[class*="-functions-tips"],[node-type*="-info-container"],a[class*=" vipicon-"]');
					function bdyh5bfobj() {
						(function() {
							let m_xb = "<div href='javascript:void(0)' id='box' style='color:red!important;cursor:pointer;z-index:98;display:block;width:100px;height:500px;line-height:30px;position:fixed;left:0;top:200px;text-size:15px;text-align:center;overflow:visible'> <style>a{font-size:16px;text-decoration:none;}a:hover {color:red;text-decoration:none}</style><a style='color:blue'>可选速度</a><br/><a id='s1' style='color:black'>0.5倍</a><br/><a id='s2' style='color:black'>0.75倍</a><br/><a id='s3' style='color:black'>正常</a><br/><a id='s4' style='color:black'>1.25倍</a><br/><a id='s5' style='color:black'>1.5倍</a><br/><a id='s6' style='color:black'>2倍</a><br/><a id='s7' style='color:black'>2.5倍</a><br/><a id='s8' style='color:black'>3倍</a><br/><br/><a style='color:blue'>当前速度</a><br/><a id='m_ts' style='color:red;font-size:16px;'>1倍速</a></div>";
							$("body").append(m_xb);
							$("#s1").click(speed1);
							$("#s2").click(speed2);
							$("#s3").click(speed3);
							$("#s4").click(speed4);
							$("#s5").click(speed5);
							$("#s6").click(speed6);
							$("#s7").click(speed7);
							$("#s8").click(speed8);
							function speed1() {
								window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(0.5);
								document.getElementById("m_ts").innerHTML = "0.5倍速"
							}
							function speed2() {
								window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(0.75);
								document.getElementById("m_ts").innerHTML = "0.75倍速"
							}
							function speed3() {
								window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(1.0);
								document.getElementById("m_ts").innerHTML = "1.0倍速"
							}
							function speed4() {
								window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(1.25);
								document.getElementById("m_ts").innerHTML = "1.25倍速"
							}
							function speed5() {
								window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(1.5);
								document.getElementById("m_ts").innerHTML = "1.5倍速"
							}
							function speed6() {
								window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(2.0);
								document.getElementById("m_ts").innerHTML = "2.0倍速"
							}
							function speed7() {
								window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(2.5);
								document.getElementById("m_ts").innerHTML = "2.5倍速"
							}
							function speed8() {
								window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(3.0);
								document.getElementById("m_ts").innerHTML = "3.0倍速"
							}
						})();
					};
					if (obj.match(/^https?:\/\/pan\.baidu\.com\/play\//)) {
						bdyh5bfobj();
					} else if (obj.match(/^^https?:\/\/pan\.baidu\.com\/s\//)) {
						(function() {
							let bdybsbfboj_counter = 0;
							let bdybsbfboj_jiankong = setInterval(function() {
								let bdybsbfboj_btn = document.querySelector("video");
								if (bdybsbfboj_btn) {
									bdyh5bfobj();
									clearInterval(bdybsbfboj_jiankong);
									return false
								}++bdybsbfboj_counter;
								if (bdybsbfboj_counter > 100) {
									clearInterval(bdybsbfboj_jiankong);
									return false
								}
							}, 345)
						})();
					}
				} else if (jxjkobj || location.host.match(/(?:72du\.com|bo\.bobo)/)) {
					if (obj.match(/^https?:\/\/www\.eggvod\.cn\//)) {
						cssobj('iframe#palybox{height:666px!important}@media screen and (max-width:1200px){iframe#palybox{height:555px!important}}.url-box{background:black;padding:0}.input-group-addon{background-color:black;width:100%}.url-c{border-radius:0;padding:0;box-shadow:none;background-color:black;color:#4caf50}.url-text{height:auto;background:black;border:0;border-right:0;border-radius:0}button.btn.btn-default.btn-play{background:#4caf50;border-radius:20px}::-webkit-scrollbar{width:0!important;height:0!important}[style^=padding],.tips,header,nav,[target*="_blank"],input,p,[class*="-fixed-"],[role="alert"],section,[class^="unit-"],[class^="table"],[data-id],[data-uid],[class*="coin"],[id*="coin"],[id^="lv-"],[id*="coin"] ~ [class^="panel-"],[class*="tj"],[id*="tj"],[class*="dating_rukou"],[class*="dating"],[class*="waifu"],[id*="waifu"],[class^="tips_"],[id^="tips_"],canvas,[class*="bottom"],[id*="bottom"],[class^="trigger"][id^="trigger"],[class*="_top"],[id*="_top"],[style*="fixed"],br,img,[class="leftBg"],[class="juji-list"],[class$="-container"],[class^="login_"],[class^="mask_"],[class^="page_"],[class^="juji-"],[align="center"],[class^="live_"],[class*="-wrapper"],[class^="roll_"],[class*="layui-"],[class^="top_"],[class^="foot"],[class="jiaqun"],[class^="link"],[class*="menu"],[id*="menu"],.jconfirm-open.jconfirm-light.jconfirm,.ad,.footer.text-center,#film-play-url,.header,.hidden-xs.hint-text,.visible-lg.import-message,.hint-text-instruction{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important}html,body{background-image:none!important;background:black!important}img');
					} else if (obj.match(/^https?:\/\/tv\.wandhi\.com\//)) {
						if (!jxbpclwobj) {
							cssobj('body{zoom:0.678!important;}963540817');
						} else {
							cssobj('#player{height:321px!important;}963540817');
						}
						cssobj('.input-lg.input-group-addon,section,input,[onClick]:not([onClick*="dihejk()"]),div[style*="float"][style*="none"]>div:not([class*="column"]),body>div:not([style*="float:none"]):not([style*="float: none"]){display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}');
					} else if (obj.match(/^https?:\/\/zy\.aoxtv\.com\//)) {
						cssobj('body{background-color:black!important;}963540817');
					} else {}
					document.addEventListener('copy', function(e) {
						e.preventDefault();
						e.stopPropagation();
					});
					let titleTime;
					if (obj.match(/\.youku\./)) {
						document.title = '优酷视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = '优酷 视频解析中'
								}, 2000)
							}
						})
					} else if (obj.match(/\.mgtv\./)) {
						document.title = '芒果视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = '芒果 视频解析中'
								}, 2000)
							}
						})
					} else if (obj.match(/\.sohu\./)) {
						document.title = '搜狐视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = '搜狐视频解析中'
								}, 2000)
							}
						})
					} else if (obj.match(/\.pptv\./)) {
						document.title = 'PPTV视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = 'PPTV视频解析中'
								}, 2000)
							}
						})
					} else if (obj.match(/\.wasu\./)) {
						document.title = '华数视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = '华数视频解析中'
								}, 2000)
							}
						})
					} else if (obj.match(/\.1905\./)) {
						document.title = '1905视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = '1905视频解析中'
								}, 2000)
							}
						})
					} else if (obj.match(/\.iqiyi\./)) {
						document.title = '奇艺视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = '奇艺视频解析中'
								}, 2000)
							}
						})
					} else if (obj.match(/\.le\./)) {
						document.title = '乐视视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = '乐视视频解析中'
								}, 2000)
							}
						})
					} else if (obj.match(/\.qq\./)) {
						document.title = '腾讯视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = '腾讯视频解析中'
								}, 2000)
							}
						})
					} else if (obj.match(/\.bilibili\./)) {
						document.title = 'B站视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = 'B站视频解析中'
								}, 2000)
							}
						})
					} else if (obj.match(/\.fun\./)) {
						document.title = '风行视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = '风行视频解析中'
								}, 2000)
							}
						})
					} else if (obj.match(/\.miguvideo\./)) {
						document.title = '咪咕视频解析中';
						document.addEventListener('visibilitychange', function() {
							if (document.hidden) {
								document.title = '≥△≤ 已自动隐藏 ≥△≤';
								clearTimeout(titleTime)
							} else {
								document.title = '欢迎回来继续看视频';
								titleTime = setTimeout(function() {
									document.title = '咪咕视频解析中'
								}, 2000)
							}
						})
					} else {}
				} else {
					jxbmmanzxobj();
				}
			} else {
				try {
					if (window.mx_browser_obj.getweblogs("http")) {} else {}
				} catch (e) {
					cssobj('ul#httpsvipul>li:last-of-type');
				}
				cssobj('ul#httpsvipul>li>span>a1,ul#httpsvipul>li>span>a3');
				function sjmmss() {
					cssobj('ul#jxbewjul span#sjzdwss');
				};
				(function() {
					let zdjkhttpsjk_counter = 0;
					let zdjkhttpsjk_jiankong = setInterval(function() {
						let zdjkhttpsjk_btn = document.querySelector("ul#httpsvipul>li:last-of-type");
						if (zdjkhttpsjk_btn) {
							try {
								$('ul#httpsvipul>li').click(function() {
									if (document.querySelector("ul#httpsvipul>li>span.wsjxbshhjd>a2") == null) {} else {
										let httpsjksz = document.querySelector("ul#httpsvipul>li>span.wsjxbshhjd>a2").textContent;
										if (!document.querySelector('ul#httpsvipul>li>span.wsjxbshhjd>a4').innerText.match(new RegExp("^\s*?跳\s*?-"))) {
											localStorage.setItem("httpsjk", httpsjksz)
										} else {}
									}
								})
							} catch (e) {
								return false
							}
							clearInterval(zdjkhttpsjk_jiankong);
							return false
						}++zdjkhttpsjk_counter;
						if (zdjkhttpsjk_counter > 50) {
							clearInterval(zdjkhttpsjk_jiankong);
							return false
						}
					}, 500)
				})();
				document.addEventListener('copy', function(e) {
					e.preventDefault();
					e.stopPropagation();
				});
				if (obj.match(/^https?:\/\/m\.youku\.com\/.+?\/id_/)) {
					if (!obj.match(/\/id_[^==]+?==/)) {
						(function() {
							try {
								let host = document.domain;
								let ystr = location.href;
								let pos = ystr.indexOf('?');
								if (pos > -1) {
									ystr = ystr.substring(0, pos)
								}
								ystr = ystr.replace("/alipay_video/", "/video/");
								if (host.indexOf('youku.com') > -1 && ystr.indexOf(".html") > -1 && ystr.length > 53 && ystr.indexOf("=") == -1) {
									let xm = document.querySelector("DIV.anthologyStageStyle0.stageActive");
									if (xm) {
										xm.click()
									}
									xm = document.querySelector("DIV.stageStyle1ImgContainer");
									if (xm) {
										xm.click()
									}
								}
							} catch (e) {
								return false
							}
						})();
					} else {
						jqjs();
						jxbzdjxhyobj();
					}
					cssobj('.showMore,.brief-more,[sourcetype],[class^="brief-reserve"],[class^="h5-detail-feed"],div.x-trigger,div.uplader,#ykPlayer,.Push-container,.Corner-container,.h5-detail-ad,.h5-detail-guide.clipboard,.h5-detail-recommend,#comment-frame,.yk-footer,.brief-btm,#YKComment');
				} else if (obj.match(/^https?:\/\/m\.mgtv\.com\/b\//)) {
					jqjs();
					jxbzdjxhyobj();
					cssobj('div.m-vip-list,div.mg-app-swip,.mgui-btn-nowelt.mgui-btn,.clearfix.bd,[class^="mgui-card"]:not([class*="xuanji"]),.m-vip-list+div,.video-about.mg-stat,div#comment-id,[class*="footer"],.more,div#nav-bar a:not([href*="/show/"]):not([href*="/vip/"]):not([href*="/tv/"]):not([href*="/movie/"]):not([href*="/cartoon/"])');
				} else if (obj.match(/^https?:\/\/m\.pptv\.com\/show\//)) {
					jqjs();
					jxbzdjxhyobj();
					cssobj('#pp-details-titbits,#pp-details-lookAgain,#pp-details-relevant,#pp-details-guessLike,a.about,.mod_subtitle,.video_func,.layout-list.layout,.layout-discuss.layout,.openapp-bg.player-info,#pgotop,.trivia-wrap.trivia,.plist-w.plist6.plist,.comment-container,.m_copyright,.footbanner,.hide.vod-intor.player-info,.download,.star-page-enter');
					cssobj('.pp-details-infos,.pp-details-infos .mod_bd{min-height:auto;}963540817');
				} else if (obj.match(/^https?:\/\/vip\.1905\.com\/play\//)) {
					jqjs();
					jxbzdjxhyobj();
					cssobj('a#pay_href,section.actorModule.adContainer,section#exclusive_movie,section.app_search,section#fix_member,section#hot_movie,section#hot_telve,div#SOHUCS,.openApp,#app_store,.wakeAppBtn.fl,.openMembershipBtn,.downLoadBtn.commonPic,.open-app,.no-marg.f_song,.ad,.iconList');
				} else if (obj.match(/^https?:\/\/m\.tv\.sohu\.com\/(?:u\/|v|phone_play_film\?aid=)/)) {
					if (!obj.match(/^https?:\/\/m\.tv\.sohu\.com\/u\//)) {
						jqjs();
						jxbzdjxhyobj();
					} else {
						cssobj('.main-rec-view-box.main-view-box.app-view-box,.app-commentJS-box.app-vbox,.t_titlearrowup,.btn-xz-app');
					}
					if (obj.match(/^https?:\/\/m\.tv\.sohu\.com\/v/)) {
						cssobj('.app-vbox-head a.extra,.app-vbox.app-star-vbox,.winbox-mask.__mask,.G-browser,.js-app-topbanner.actv-banner,.btn-xz-app,.ph-vbox.app-vbox,.app-guess-vbox.app-vbox,.main-rec-view-box.main-view-box.app-view-box,#CommentTarget,footer,.twinfo_iconwrap,.t_titlearrowup,.js-btn-newhy.btn-new-hy');
					} else if (obj.match(/^https?:\/\/m\.tv\.sohu\.com\/phone_play_film\?aid=/)) {
						cssobj('.player_film_bg,.p_f_pannel,.btn-xz-app,.twinfo_iconwrap,#film_top_banner,.ph-vbox.app-vbox,.app-guess-vbox.app-vbox,.foot.sohu-swiper,#CommentTarget,footer,.player_film_cover,.t_titlearrowup');
					}
				} else if (obj.match(/^https?:\/\/m\.le\.com\/vplay_/)) {
					jqjs();
					jxbzdjxhyobj();
					cssobj('[class*="Daoliu"],[class^="j-Banner"],[id^="j-Banner"],[class*="Daoliu"],#j-leappMore,#j-zhoubian,#j-spoiler,#j-recommend,.leapp_btn,#j-toolbar>.animate1.column_box,.gamePromotionTxt,section#j-recommend,#j-comment,section.search_top,.footer,.intro_cnt dd,.up-letv');
				} else if (obj.match(/^https?:\/\/m\.iqiyi\.com\/v_/)) {
					jqjs();
					jxbzdjxhyobj();
					cssobj('div[__dfp][style^="visibility:"],div[class^="m-iqyGuide-layer"],section>a:first-child[href^="javascript:"]+a[href^="javascript:"],[name="m-vipWatch"]+div[class="m-box"],.m-title-anthology.m-title>.c-des,.m-linkMore,.m-hotSpot-update,.m-dom-loading-gray,[name="m-paopao"],[name="m-videoRec"]+div[class="m-box"],section.m-videoPlay-toolBar,.vue-portal-target,.m-iqylink-guide,.videoInfoFold-data,#openDesc,#comment,.page-c-items,.m-pp-entrance,.m-videoUser-spacing,[name="m-aroundVideo"],[name="m-videoRec"]');
					cssobj('section.m-hotWords-bottom,section.m-loading-info,[name="m-extendBar"]+div+div[class="m-box"],section.m-recommend-player,section.m-recommend-player+div[class="m-box-items m-box-items-full"],[name="m-extendBar"],.m-video-player .playCount-time,section.sourceHandle,div[is-call-app="true"]~div[class="m-box"],[class*="-banner"],[name="m-movieRec"],[name="m-movieHot"],[name="m-vipWatch"],[name="m-vipRights"],.video-data,.m-video-extendBar,.m-ipRelation-spacing.m-ipRelation-home.m-ipRelation');
				} else if (obj.match(/^https?:\/\/www\.wasu\.cn\/.+?\/show\/id\//)) {
					jqjs();
					jxbzdjxhyobj();
					cssobj('.appdown,.clearfix.player_menu_con,#gotop,.movie_title>.clearfix,.tele-play-rec.clearfix.ws_row.recommend,.hot-vcr,.ws_footer,div.navlist a:not([data-aliitemname*="电"]):not([data-aliitemname*="动"]):not([data-aliitemname="综艺"]):not([data-aliitemname="VIP"])');
				} else if (obj.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com/)) {
					if (!obj.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\/.*?(?:[cv]id=|cover\/)/)) {
						(function() {
							let qqasxobj_counter = 0;
							let qqasxobj_jiankong = setInterval(function() {
								let qqasxobj_btn = document.querySelector('a[href*="/x/"]');
								if (qqasxobj_btn) {
									(function() {
										try {
											let b = document.querySelectorAll('a[href*="/x/"]');
											for (let i = 0, len = b.length; i < len; i++) {
												b[i].setAttribute('target', '_blank')
											}
										} catch (e) {
											return false
										}
									})();
									clearInterval(qqasxobj_jiankong);
									return false
								}++qqasxobj_counter;
								if (qqasxobj_counter > 50) {
									clearInterval(qqasxobj_jiankong);
									return false
								}
							}, 666)
						})();
					} else {
						jqjs();
						jxbzdjxhyobj();
						cssobj('[dt-params*="推荐"],[dt-params*="会员特权"],[open-app]:not(li),.video_function.video_function_new,.mod_source,.U_color_b.video_types_new.video_types,.mod_promotion,.mod_recommend.mod_box,.mod_clips.mod_box,.mod_comment.mod_box,.mod_multi_figures_h.mod_sideslip_h.mod_box,.mod_game_rec.mod_box');
					}
				} else if (obj.match(/^https?:\/\/m\.bilibili\.com\/bangumi\/play\//)) {
					jqjs();
					jxbzdjxhyobj();
					cssobj('div.recom-wrapper,div[class*="footer"],[class^="bili-app"],[class^="open-app"]');
				} else if (obj.match(/^https?:\/\/m\.douban\.com\/movie\/subject\//)) {
					(function() {
						try {
							let jxbdbobj = document.querySelector("#subject-header-container>div.sub-info div.sub-title");
							jxbdbobj.innerHTML = '<a href="https://z1.m1907.cn/?jx=' + jxbdbobj.innerText.replace(/^\s*?(.+?第[^部季][部季]).*$/, "$1").replace(/^\s*?(?!.+?第[^部季][部季])(.+?)(?:\s+?(?:第)?.*)?$/, "$1") + '" onclick="window.open(this.href,\'bkmk_popup\',\'esizable=1,scrollbars=1,toolbar=0,status=0,width=1100,height=600,allowfullscreen=allowfullscreen,left=\'+(screen.availWidth-1100)/2+\',top=\'+(screen.availHeight-600)/2);return false" style="padding:0 5px 0 2px;color:#b9d7ea;border:1.5px outset buttonface;-webkit-border-radius:.25em;box-shadow:inset 0 1px 0 #7fd2f1,0 3px 0 #156785;background-image:-webkit-linear-gradient(bottom,#000 0,#156785 100%);" title="解析观看--' + jxbdbobj.innerText.replace(/^\s*?(.+?)\(.+?\).*$/, "$1") + '--资源">' + jxbdbobj.innerText.replace(/^\s*?(.+?)\(.+?\).*$/, "$1") + '</a>';
						} catch (e) {
							return false;
						}
					})();
					cssobj('div#subject-header-container{margin-top:50px!important;}div[class="sub-original-title"],section[class="subject-mark mark-movie"],a[class="write-comment"],a[class="write-review"],div.TalionNav-static,[class*="-banner"],.sub-vendor,.show-all,.score-write,section+div.center');
				} else {
					jxbmmanzxobj();
				}
			}
			function jxbmmanzxobj() {
				if (obj.match(/^https?:\/\/(?!.+?\.(?:og[gv]|m(?:p[34]|4a)|w(?:ebm|av)|flv)($|\?.+))(?:music\.163\.com\/|y\.music\.163\.com\/m\/(?:song|dj)\?id=|(?:www\.)?kuwo\.cn\/|m\.kuwo\.cn\/newh5|www\.kugou\.com\/(?:song|mvweb)\/|m3ws\.kugou\.com\/(?:kgsong|mv)\/|m\.kugou\.com\/|(?:i\.)?y\.qq\.com\/|(?:www|h|m)\.xiami\.com\/|music\.migu\.cn\/.+?\/music\/player\/|m\.music\.migu\.cn\/.*?\/music\/|5sing\.kugou\.com\/|www\.ximalaya\.com\/|kg\.qq\.com\/node\/|www\.app-echo\.com\/|radio\.sky31\.com\/)/)) {
					if (objj.match(/(?:kuwo|kugou|(?:y|kg)\.qq|xiami|migu|app-echo|radio\.sky31)\./)) {
						(function() {
							document.addEventListener('visibilitychange', function() {
								let audiovideoaobj = document.querySelectorAll("audio,video")[0];
								if (document.hidden) {} else if (audiovideoaobj.src.match(new RegExp("^http"))) {
									try {
										audiovideoaobj.play();
									} catch (e) {}
								} else {}
							})
						})()
					} else {}
					if (objj.match(/music/)) {
						cssobj('[href*="/store/product"],#g-topbar>div.m-top li.lst,SPAN.u-btn u-btn-red,#btn-open-id,I.arr ani,DIV.m-musicStreetWakeUp');
					} else if (objj.match(/kuwo/)) {
						if (jxbpcobj) {
							cssobj('[class*="foot"],[id*="foot"],[class*="copy"],[id*="copy"],[class^="qrcode-container"],[class*="xiuchang"]');
						} else {
							cssobj('div[id="top"],[class^="Bottom_"],[class*="download"],[class^="nav_title"],[class="tokuwo"],div[class="Mvplay_getbutt"],[class="Progress_body"]~*,.top .right');
						}
					} else if (objj.match(/kugou/)) {
						if (jxbpcobj) {
							cssobj('[aria-describedby*="down"],[class*="_banner_wrap"],[id*="_banner_wrap"],ul[class="subNav"],a[id="productCenter"],div[class="btnArea2 clearfix"],[class*="spread"]');
						} else {
							cssobj('[class*="down"],[id*="down"],[class*="openAppBtn"],[id*="openAppBtn"],[class*="comment_more"],[id*="comment_more"],[class*="mod_singer"],[id*="mod_singer"],[class*="morelrc"],[id*="morelrc"]');
						}
					} else if (objj.match(/y\.qq\.com/)) {
						cssobj('p[class="comment__rule"],div[id="limitButton"],[class="player_login__guide"],img[class="top_nav__mark"],[data-stat*="top.artists"],[class="popup_guide"],[data-tj],[data-expose="songsheet_$qm"],[data-expose="video_$qm"]');
					} else if (objj.match(/xiami/)) {
						cssobj('[class*="toApp"],[id*="toApp"],[class*="download"],[id*="download"]');
					} else if (objj.match(/ximalaya/)) {
						cssobj('[class^="dl-pc "],[id^="dl-pc "],[class*="-card _"],[id*="-card _"],[href*="download"],[href*=".tmall.com"]');
					} else {}(function() {
						let btn = document.createElement("span");
						btn.addEventListener('click', function() {
							if (obj.match(/music\.163\./)) {
								if (obj.match(/^https?:\/\/y\.music\.163\.com\/m\/(?:song|dj)\?id=/)) {
									window.open("https://music.163.com/song/media/outer/url?id=" + window.location.href.replace(/^.*?\/(?:song|dj)\?id=(\d+)$/, "$1"), "bkmk_popup");
								} else if (document.querySelector('div[class*="play"] a[hidefocus="true"][href*="?id="]').href.match(/^https?:\/\/music\.163\.com\/(?:song|dj)\?id=/)) {
									window.open("https://music.163.com/song/media/outer/url?id=" + document.querySelector('div[class*="play"] a[hidefocus="true"][href*="?id="]').href.replace(/^.*?\/(?:song|dj)\?id=(\d+)$/, "$1"), "bkmk_popup");
								} else {
									return false;
								}
							} else if (objj.match(/radio\.sky31\./)) {
								if (document.querySelectorAll("audio")[0].src.match(new RegExp("^http"))) {
									if (document.querySelector("audio")) {
										try {
											document.querySelector("audio").pause();
										} catch (e) {}
										window.open(document.querySelector("audio").src, "bkmk_popup");
										return false;
									} else {
										return false;
									}
								} else {
									return false;
								}
							} else if (objj.match(/(?:kuwo|kugou|(?:y|kg)\.qq|xiami|migu|app-echo)\./)) {
								if (document.querySelectorAll("audio,video")[0].src.match(new RegExp("^http"))) {
									if (document.querySelector("video")) {
										try {
											document.querySelector("video").pause();
										} catch (e) {}
										window.open(document.querySelector("video").src, "bkmk_popup");
										return false;
									} else if (document.querySelector("audio")) {
										try {
											document.querySelector("audio").pause();
										} catch (e) {}
										window.open(document.querySelector("audio").src, "bkmk_popup");
										return false;
									} else {
										return false;
									}
								} else {
									return false;
								}
							} else if (objj.match(/ximalaya\./)) {
								if (document.querySelector('div[class*="player-body"]>a[class*="title"][href]')) {
									window.open("http://www.eggvod.cn/music/?url=" + document.querySelector('div[class*="player-body"]>a[class*="title"][href]').href, "bkmk_popup");
								} else {
									return false;
								}
							} else {
								return false;
							}
						}, false);
						btn.setAttribute('style', 'display:inline-block;font-size:15px;color:white;width:35px;height:35px;line-height:35px;text-align:center;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAUVBMVEVHcEz20ZvppDoAAAD0rDtYPhbKkDD/tkT/7NX/6MP/szr///8WEQr4rjd7VhvEiSs2JgvpozTs7OxUOhKpdyXZmDBKSkqrq6vKyspqamqBgYGckC4AAAAACnRSTlMAHEb/yDqu8TdN02L+YQAABGVJREFUeNrdm+uCsyoMRaetVceCCOpUff8HPU35KHLR4gXEs39OVdYQSAKEnx9Nl0ue/3pSnl8uP990KMD1miSZZyXJ9ToPkHhufwoAGi8CyQpxORbges2yEE1j3LYYF0WWaQihARIV4H733/0YE1KWVYVQWXIz3O/xAKSp/8brGqHbW1UFRiiKNI0F4H7nf1BFKXmrbSm1/e4uSstSNM5FCMf6Z4TDAewGaBr+MHqpquq6LAlZA0JIVd008WH4McLBAJeLfQoSor8GIEsxmkbtfHUYJskrPPsEwC4AeW53wm1rexUw6toVwt48fINS+D3L8vx4gN9fOwCl9pe5AEJ1NUJjI05+AbXtJgC0EQC5ABS4rm8zgqBCads2TVnWdfURTNimadspE45d0SwAXgyA9gUoirK8fRE4qaW/cDXNGQBmRvFmnQMAYzOM7CWnQXg4gMsw/L8DzDuT9XJzxR4Bbq4A39zx+h5wCMdRAPhyRiIlOwOAHyOItPwMAH6mIg9FZwHY4pAR+nvrhmyTMCAAOgIAoWFg7PESe6nvJURYALYZwDYREer751t698onns+HoudTPrloEO4DwNYDmEu0vz9uW/M/kxqGhyb26PtVjmgegDkDPNYC6I5I/f9BXacjICSeYWwYwFzqcwuCUQQA6lYNQl03sivjDQ2DbiTxBP+Fv8WYAFiQkEQHID8NnQuuFj6tG0E+xYcoNwljr6hweoC+lwC8UfiL7NwPAJND9PkUMUGawDEtNwGGD0A3D/DwBDDuAQgw3OXqAHIa2qfrBhMM4QFURzTuXDkNTVcke0o+K4bgQgA6CcDCAKjbFKojUt3NbDhm42fqeoEr9gFQLQLQUjKXYCSSlq5jb3Wd7P7F4bg4HkA/unDJiOR2JSRt+iQVG90rAXpngNs+ANTYroOUez4pnZOYA84A+GgAeYS35w7ZuQD226ZASCxK4gPAGM8cUlO6x8Y1HPOM29AB8GEAGPPiCn7kxMtMzLxgKwJ0v/rleAD0xYf9cJbSLUNRP+qMDcBcXoIpzOnYNMsNAabVOz82AP5hM2zaXls2GOdLHrwDIFcAUWZGCBxFjzfUVMcBoEvCr/p27ABThUcigYTOXzoNYfCJTUl3AKwAoPAAWvkRTyGXdv63CR0/wNjx1rVZjrYlDTkLgExCIDjtm4qdBWDfAyt5THEmALxrCYNpBId1wcEA+x5dS6d+FgDXxYgoe4WUHgSlbWYp13hReg4AWKx8TzahdI8QvfQZFnmQ3ggYwDOT8tgB5sMvBFm30tbXops6JaWeAPBKgGknDKFpPtFyVxwA9sLmqQHoXtS8CQCHBLAVt9uLmqeWmOs1WV0fFMB2wcFW2g9lzHtffpm8YREYwLzkogNUlc2Rbr/8M3nLJjCAaYSxG/LT+SMDRAGgX3aTm9P2bZp9puDMbbvgACYCLEf5tm1RBGg+AgBASFM/nW1OvzQ1mo8AIMzF58Th5nV20M3r8eV3f3K8fR8S4D/eG/opuPbAOQAAAABJRU5ErkJggg==);text-align:center;overflow:hidden;user-select:none;position:fixed;right:0;top:0;bottom:280px;z-index:999999;border-radius:10px');
						document.body.appendChild(btn);
					})();
				} else if (obj.match(/^https?:\/\/www\.eggvod\.cn\/music\/\?url=http/)) {
					(function() {
						let mmyydsfzx_counter = 0;
						let mmyydsfzx_jiankong = setInterval(function() {
							let mmyydsfzx_btna = document.querySelector('span[class="am-input-group-btn"]>a[id="j-src-btn"][target="_blank"]').href.match(new RegExp("^http"));
							let mmyydsfzx_btnb = document.querySelector("form input+div").innerText.match(new RegExp("没有找到"));
							if (mmyydsfzx_btna) {
								if (document.querySelector('span[class="am-input-group-btn"]>a[id="j-src-btn"][target="_blank"]:not([href$="="])')) {
									document.querySelector('span[class="am-input-group-btn"]>a[id="j-src-btn"][target="_blank"]').click();
									window.close()
								} else {
									window.close()
								}
								clearInterval(mmyydsfzx_jiankong);
								window.close();
								return false
							}
							if (mmyydsfzx_btnb) {
								window.close();
								clearInterval(mmyydsfzx_jiankong);
								window.close();
								return false
							}++mmyydsfzx_counter;
							if (mmyydsfzx_counter > 88) {
								clearInterval(mmyydsfzx_jiankong);
								window.close();
								return false
							}
						}, 123)
					})();
				} else if (obj.match(/^https?:\/\/www\.asys\.vip\/kuaishou/)) {
					jxqtwzhyobj();
					lkzdztobj();
					h5zdbfobj();
				} else {}
			}; if (vipzdjxwzobj) {
				(function() {
					let aa = 1, bb = '<span><a1 style="display:none"></a1><a2 style="display:none">', cc = '<span><a1 style="color:darkgreen">搜索</a1><a2 style="display:none">', dd = '<span><a1 style="color:darkgreen">跳转</a1><a2 style="display:none">', ee = '<span><a1 style="color:darkgreen">小窗</a1><a2 style="display:none">', ff = '<span><a1 style="color:darkgreen">大窗</a1><a2 style="display:none">', ii = '<span style="background-color:hotpink"><a1 style="color:darkgreen"></a1><a2 style="display:none">', kk = '<span style="display:grid;background-color:#2196f3"><a1 style="color:darkgreen">自用</a1><a2 style="display:none">', jj = '<span style="background-color:darkorange"><a1 style="color:darkgreen"></a1><a2 style="display:none">', gg = '</a2><a3 style="color:#2196F3;zoom:0.8;font-weight:bold;">➽</a3><a4>', hh = '</a2><a3 style="display:none"></a3><a4>', https = [{
						name: cc + aa+++gg + "最大网",
						vip: "最大网"
					}, {
						name: cc + aa+++gg + "布米米",
						vip: "布米米"
					}, {
						name: ii + aa+++hh + "m1907",
						url: "https://z1.m1907.cn/?jx="
					}, {
						name: jj + aa+++hh + "B站可用①",
						url: "https://api.tv920.com/vip/?url="
					}, {
						name: jj + aa+++hh + "B站可用②",
						url: "https://jsap.attakids.com/?url="
					}, {
						name: jj + aa+++hh + "B站可用③",
						url: "https://jx.116kan.com/?url="
					}, {
						name: ii + aa+++hh + "920",
						url: "https://api.tv920.com/jx/?url="
					}, {
						name: ii + aa+++hh + "加速",
						url: "https://www.cuan.la/m3u8.php?url="
					}, {
						name: ii + aa+++hh + "久播",
						url: "https://vip.jiubojx.com/vip/?url=",
						vip: "&referer="
					}, {
						name: ii + aa+++hh + "思古",
						url: "https://zy.aoxtv.com/?url=https://api.sigujx.com/?url="
					}, {
						name: ii + aa+++hh + "思云",
						url: "https://jx.ap2p.cn/?url="
					}, {
						name: ii + aa+++hh + "973",
						url: "https://jx.973973.xyz/?url="
					}, {
						name: ii + aa+++hh + "乐多",
						url: "https://api.leduotv.com/wp-api/ifr.php?vid="
					}, {
						name: ii + aa+++hh + "蘑菇",
						url: "https://jx.wzslw.cn/?url="
					}, {
						name: ii + aa+++hh + "星驰",
						url: "https://vip.cjys.top/?url="
					}, {
						name: ii + aa+++hh + "福星",
						url: "https://jx.popo520.cn/jiexi/?url="
					}, {
						name: ii + aa+++hh + "大师",
						url: "https://jx.ergan.top/?url="
					}, {
						name: ii + aa+++hh + "金桥",
						url: "https://5.nmgbq.com/2/?url="
					}, {
						name: bb + aa+++hh + "Parwix",
						url: "https://vip.parwix.com:4433/player/?url="
					}, {
						name: bb + aa+++hh + "Ckplayer",
						url: "https://www.ckplayer.vip/jiexi/?url="
					}, {
						name: bb + aa+++hh + "大侠助手",
						url: "https://api.10dy.net/?url="
					}, {
						name: bb + aa+++hh + "1717",
						url: "https://www.1717yun.com/jiexi/?url=",
						vip: "?isckplayer="
					}, {
						name: bb + aa+++hh + "4080",
						url: "https://jx.urlkj.com/4080/?url="
					}, {
						name: bb + aa+++hh + "8090",
						url: "https://www.8090g.cn/?url="
					}, {
						name: bb + aa+++hh + "IK",
						url: "https://vip.ikjiexi.top/?url="
					}, {
						name: bb + aa+++hh + "H8",
						url: "https://www.h8jx.com/jiexi.php?url="
					}, {
						name: bb + aa+++hh + "M3u8",
						url: "https://jiexi.janan.net/jiexi/?url="
					}, {
						name: bb + aa+++hh + "月亮",
						url: "https://api.yueliangjx.com/?url="
					}, {
						name: bb + aa+++hh + "蝴蝶",
						url: "https://api.hdworking.top/?url="
					}, {
						name: bb + aa+++hh + "盖斯",
						url: "https://www.gai4.com/?url="
					}, {
						name: bb + aa+++hh + "盘古",
						url: "https://pangu.yilans.net/yun/?url="
					}, {
						name: bb + aa+++hh + "云解析",
						url: "https://jx.mw0.cc/?url="
					}, {
						name: bb + aa+++hh + "坤兰",
						url: "https://titan.mgtv.com.kunlanys.com/m3u8.php?url="
					}, {
						name: bb + aa+++hh + "诺讯",
						url: "https://www.ckmov.com/?url=",
						vip: "?isckplayer="
					}, {
						name: bb + aa+++hh + "纯白",
						url: "https://chkkk.top/jiexi/ys?url=",
						vip: "?isckplayer="
					}, {
						name: bb + aa+++hh + "贝吉塔",
						url: "https://ckmov.bjtjr.net/ckmov/?url="
					}, {
						name: bb + aa+++hh + "恶灵王",
						url: "https://jx.elwtc.com/vip/?url="
					}, {
						name: bb + aa+++hh + "小狼云",
						url: "https://jx.yaohuaxuan.com/?url="
					}, {
						name: bb + aa+++hh + "七夕",
						url: "https://api.80tvs.cn/m3u8.php?url="
					}, {
						name: bb + aa+++hh + "老斑",
						url: "https://vip.laobandq.com/jiexi.php?url="
					}, {
						name: bb + aa+++hh + "乐喵",
						url: "https://jx.hao-zsj.cn/vip/?url="
					}, {
						name: bb + aa+++hh + "丝瓜",
						url: "https://123.1dior.cn/?url="
					}, {
						name: bb + aa+++hh + "九八看",
						url: "https://jx.youyitv.com/?url="
					}, {
						name: bb + aa+++hh + "618G",
						url: "https://jx.618g.com/?url="
					}, {
						name: bb + aa+++hh + "3jx",
						url: "https://api.3jx.top/vip/?url="
					}, {
						name: bb + aa+++hh + "解析啦",
						url: "https://api.jiexi.la/?url="
					}, {
						name: bb + aa+++hh + "四七",
						url: "https://zy.aoxtv.com/?url=https://api.52wyb.com/webcloud/?v="
					}, {
						name: bb + aa+++hh + "核对",
						url: "https://api.hdworking.top/?url="
					}, {
						name: bb + aa+++hh + "夜空",
						url: "https://pay.520yk.cn/256/?url="
					}, {
						name: bb + aa+++hh + "云端",
						url: "https://jx.ergan.top/?url="
					}, {
						name: bb + aa+++hh + "佩里",
						url: "https://qq.peilili.com/jiexi/?url="
					}, {
						name: ee + aa+++gg + "OK",
						url: "https://api.okjx.cc:666/jx.php?url=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "17云",
						url: "http://17kyun.com/api.php?url=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "小蒋",
						url: "https://www.kpezp.cn/jlexi.php?url=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "大白",
						url: "http://wodaoba.cn/cstxre506.abc?noxiu=.pchp_unun_&needxiu=ixigua.c_uyuy_&ten1g1=&ten1g2=&ten1g3=&isjquery=&isckplayer=&pid=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "交响",
						url: "http://jx.clousx6.cn/player/analysis.php?v=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "酷博",
						url: "http://jx.x-99.cn/api.php?id=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "爱跟",
						url: "https://vip.2ktvb.com/player/?url=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "久已",
						url: "https://www.91jxs.com/jiexi/?url=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "无名",
						url: "https://www.administratorw.com/index.php?url=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "音萌",
						url: "https://api.v6.chat/?url=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "72看看",
						vip: "72看看"
					}, {
						name: ee + aa+++gg + "玩的嗨",
						url: "http://tv.wandhi.com/go.html?url=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "冰豆",
						url: "https://api.qianqi.net/vip/?url=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "懒人",
						url: "https://www.eggvod.cn/mobile.php?zhm_jx=",
						vip: "强制弹小窗"
					}, {
						name: ee + aa+++gg + "电影盒子",
						url: "http://jx5.178du.com/p1/?url=",
						vip: "强制弹小窗"
					}, {
						name: bb + aa+++hh + "嗅探-米侠",
						vip: "手机米侠浏览器"
					}];
					function createSelecthttps(https) {
						let httpsvipul = document.createElement("ul");
						httpsvipul.id = "httpsvipul";
						if (jxbpcobj) {
							httpsvipul.setAttribute("style", "display:none");
						} else {
							httpsvipul.setAttribute("style", "display:none;background:#18222d;width:99vw;max-width:728px;height:150px;margin:0;padding:0;position:fixed;bottom:7px;left:50%;transform:translateX(-50%);z-index:99999;overflow-x:hidden;overflow-y:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;border-radius:5.3px;");
						}
						for (var i = 0; i < https.length; i++) {
							let httpsvipli = document.createElement("li");
							let that = this;
							if (jxbpcobj) {} else {
								httpsvipli.setAttribute("style", "padding:0 1px 0 1px;margin:0;border-radius:10px;display:block;list-style:none;float:left;font-size:16px;color:#999!important;font-weight:900;height:47.5px;text-align:center;line-height:63.5px;letter-spacing:0;border-bottom:0.5px solid #333;position:relative;overflow:hidden;text-overflow:hidden;white-space:nowrap;cursor:pointer;");
							}(function(num) {
								httpsvipli.onclick = function() {
									var obj = window.location.href;
									var objj = window.location.host;
									let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"], bxjImg = Math.floor(Math.random() * arr.length), jxbimg = "https://gitee.com/qq963540817/pt/raw/master/" + arr[bxjImg] + ".jpg";
									var remove = function(selector) {
											if (!document.querySelectorAll) {
												return;
											}
											var nodes = document.querySelectorAll(selector);
											if (nodes) {
												for (var i = 0; i < nodes.length; i++) {
													if (nodes[i] && nodes[i].parentNode) {
														nodes[i].parentNode.removeChild(nodes[i]);
													}
												}
											}
										};
									var jxbjxurl, jjxxbb, jxb;
									function jxqzsxobj() {
										let url = window.location.href;
										setInterval(function() {
											let newUrl = window.location.href;
											if (newUrl != url) {
												url = window.location.href;
												location.reload();
											}
										});
									};
									function zdztsp() {
										(function() {
											setTimeout(function() {
												if (document.getElementsByTagName("video")[0]) {
													var v_player = document.getElementsByTagName("video");
													for (var i = 0, length = v_player.length; i < length; i++) {
														try {
															v_player[i].muted = true;
															v_player[i].volume = 0;
															v_player[i].pause();
														} catch (e) {
															return false;
														}
													}
												} else if (document.getElementsByTagName("object")[0]) {
													var v_player = document.getElementsByTagName("object");
													for (var i = 0, length = v_player.length; i < length; i++) {
														v_player[i].parentNode.removeChild(v_player[i])
													}
												}
											}, 500)
										})()
									};
									zdztsp();
									let tcthb = '<div id="vip_iframe__" style="width:100%;height:100%;border:none;outline:none;margin:0;padding:0;position:absolute;z-index:963540817;"><img id="vip_iframe__" data-ad="false" autoLoad="true" autoplay="autoplay" loading="lazy" allowtransparency="true" frameborder="0" scrolling="no" sandbox="allow-scripts allow-same-origin allow-forms" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" src="' + jxbimg + '" marginwidth="0" marginheight="0" width="100%" height="100%" style="width:100%;height:100%;border:none;outline:none;margin:0;padding:0;position:absolute;z-index:963540817;"></img></div>';
									if (jxbpcobj) {
										if (objj.indexOf('youku') > 0) {
											jxbjxurl = obj.replace(/^.+?\/id_([^\.=]+?)==.*$/, "http://v.youku.com/v_show/id_$1==.html").replace(/^https:\/\//, "http://").replace(/html[\W_].*?$/, "html");
											function pcyoukudszxobj() {
												vipobj('#player');
												ggobj('.youku-film-player');
												cssobj('#ykPlayer,.nav-mamu');
											};
											setTimeout(pcyoukudszxobj, 789);
										} else if (objj.indexOf('tudou') > 0) {
											jxbjxurl = obj.replace(/^.+?\/v\/([^\.=]+?)==.*$/, "http://v.youku.com/v_show/id_$1==.html").replace(/^.+?\/id_([^\.=]+?)==.*$/, "http://v.youku.com/v_show/id_$1==.html");
											vipobj('.td-playbox');
											vipobj('#player');
											remove('.td-interactbox');
										} else if (objj.indexOf('qq') > 0) {
											if (obj.indexOf('/x/cover/') > 0) {
												jxbjxurl = obj.replace(/^https:\/\//, "http://").replace(/html[\W_].*?$/, "html");
											} else if (obj.indexOf('/variety/p/topic/') > 0) {
												jxbjxurl = document.querySelector(".current .figure_title").offsetParent.href.replace(/^https:\/\//, "http://").replace(/html[\W_].*?$/, "html");
												(function() {
													try {
														let aElement = document.querySelectorAll('[_wind*="列表"] ul li a[href*="/x/"][target]');
														for (let i = 0; i < aElement.length; i++) {
															aElement[i].getAttributeNode('target').value = "_top"
														}
													} catch (e) {
														return false
													}
												})();
											}
											function qqdszx() {
												vipobj('#mod_player');
												ggobj('#dark_layer');
												ggallobj('div[class*="_vip_popup"]');
												remove('txpdiv,[class*="poplay"],[id*="poplay"],[class^="x_"],[id^="x_"],[class^="mod_action "],[id^="mod_action "],[class*="_vip_popup"],[class*="_vip_popup"],[id*="_vip_popup"],script[crossorigin="anonymous"],[_r-component="player"],[_r-component="c-popups"]');
												cssobj('.mod_player_section.cf{background-color:transparent}.mod_vip_popup.wrapper,.cf.mod_action');
											};
											setTimeout(qqdszx, 1234);
										} else if (objj.indexOf('mgtv') > 0) {
											if (obj.indexOf('mgtv.com/b/') > 0) {
												jxbjxurl = obj.replace(/^.+?\/b\/(.+?)\.html.*$/, "http://www.mgtv.com/b/$1.html");
												vipobj('#mgtv-player-wrap');
												ggobj("#mgtv-player-wrap container");
												cssobj("outer-bottom,container");
											} else if (obj.indexOf('mgtv.com/act/') > 0) {
												function iqiyiurltxobj() {
													jxbjxurl = document.querySelector('li[class^="play-item is-full is-"][class$=" on"]').getAttribute("data-vurl").replace(/^.*?\/b\/(.+?)\.html.*$/ig, "http://www.mgtv.com/b/$1.html");
													vipobj('.c-player-video');
												};
												iqiyiurltxobj();
												remove('[class^="frag-list-box"]');
												if (!document.querySelector("#vip_iframe__") && document.querySelector("ul.v-lists")) {
													let qisdjxa = document.querySelector("ul.v-lists");
													qisdjxa.onclick = function(e) {
														setTimeout(iqiyiurltxobj, 777);
													};
												} else {}
											}
										} else if (objj.indexOf('iqiyi') > 0) {
											function iqiyidszx() {
												jxbjxurl = obj.replace(/^https?:\/\/(?:t|ww)w\./, "http://www.").replace(/html[\W_].*?$/, "html");
												vipobj('#flashbox');
												ggobj('#secondFrame');
												remove('div#scrollTip,.qy-glide,#qy-glide,[class^="qy-glide"],[id^="qy-glide"],svg[display="none"][aria-hidden="true"],div[class*="player-side-ear"],div[class^="player-mnb"][data-asyn-pb]');
												removeall('div[style*="visibility"][style*="visible"]:not([class]):not([id]):not([style*="fixed"])', undefined, false);
												cssobj('div[class*="player-side-ear"],div[class^="player-mnb"][data-asyn-pb]');
											};
											setTimeout(iqiyidszx, 1234);
											if (obj.indexOf('iqiyi.com/v_') > 0) {
												(function() {
													$("body").on('mouseover', 'ul li [href*="/v_"][href*=".html"]:not([href*="=http"]):not([href*="?http"]):not([href*="#http"])', function(e) {
														let jxbzqxjobj = $(this), href = jxbzqxjobj.attr('href') || jxbzqxjobj.data("href");
														jxbzqxjobj.off('click.chrome');
														jxbzqxjobj.on('click.chrome', function() {
															window.location.href = href
														}).attr('data-href', href).css({
															cursor: 'pointer'
														}).removeAttr('href')
													})
												})();
											} else if (obj.indexOf('iqiyi.com/a_') > 0 || obj.indexOf('iqiyi.com/kszt/') > 0) {
												try {
													cssobj('div.lequPlayer{height:' + document.querySelector("div.play-dianbo").offsetHeight + 'px!important;width:' + document.querySelector("div.play-dianbo").offsetWidth + 'px!important;}');
												} catch (e) {}
												remove('div[class*="-list-box"][class*="-lianboList"],div[class$="-side-icon"],div[id*="scrollBox"],div[class*="tem_voteEnter"]');
											} else {}
										} else if (obj.indexOf('tv.sohu.com/v/') > 0) {
											jxbjxurl = obj.replace(/^https:\/\//, "http://").replace(/html[\W_].*?$/, "html");
											vipobj('#player');
											cssobj('#player_vipTips,#toolBar');
										} else if (obj.indexOf('film.sohu.com/album/') > 0) {
											jxbjxurl = obj.replace(/^https:\/\//, "http://").replace(/html[\W_].*?$/, "html");
											vipobj('#playerWrap');
											ggobj('#detail_btn_play');
											remove('.player-content-bg,.pop-operates');
										} else if (objj.indexOf('.le') > 0) {
											jxbjxurl = obj.replace(/^https:\/\//, "http://").replace(/html[\W_].*?$/, "html");
											vipobj('#fla_box');
										} else if (objj.indexOf('pptv') > 0) {
											jxbjxurl = obj.replace(/^^https?:\/\/\w+?\./, "http://www.").replace(/\.html\?.+$/, ".html");
											vipobj('#pptv_playpage_box');
											ggobj('.sidebarbtn');
											cssobj('div[class^="module-video"][class*="-ops"]');
										} else if (objj.indexOf('1905.com') > 0) {
											jxbjxurl = obj.replace(/^https:\/\//, "http://").replace(/html[\W_].*?$/, "html");
											vipobj('#playBox');
											ggobj('object');
											remove('.sc-content,.sc-paper,.sc-error');
											cssobj('.player-widget');
										} else if (objj.indexOf('wasu') > 0) {
											jxbjxurl = obj.replace(/^https:\/\//, "http://");
											vipobj('#player');
											vipobj('.player');
											ggobj('.qp');
											cssobj('div#pcplayer{height:100%;}.play_video_b');
										} else if (objj.indexOf('bilibili') > 0) {
											jxbjxurl = obj.replace(/^.+?\/(\w+)\/\?.*$/, "http://www.bilibili.com/bangumi/play/$1").replace(/\?spm_id_.*?$/, "");
											vipobj('#player_module');
											ggobj('#player_mask_module');
										} else if (objj.indexOf('.fun.tv') > 0) {
											jxbjxurl = obj.replace(/^https:\/\//, "http://");
											vipobj('#html-video-player-layout');
										} else if (objj.indexOf('.miguvideo.com') > 0) {
											jxbjxurl = obj.replace(/^https:\/\//, "http://");
											vipobj('.play');
											cssobj('div.episodeInfo+div.title,div.leftImgRightText');
										} else if (objj.indexOf('.ixigua.com') > 0) {
											jxbjxurl = obj.replace(/^https:\/\//, "http://");
											try {
												cssobj('.teleplayPage__playerSection__left,div[class="teleplay__playerContainer__wrapper"],div.teleplay__playerContainer__wrapper{height:' + document.querySelector("div.teleplay__playerContainer__wrapper").offsetHeight + 'px!important;width:' + document.querySelector("div.teleplay__playerContainer__wrapper").offsetWidth + 'px!important;}');
											} catch (e) {}
											cssobj('body{overflow-x:hidden!important;overflow-y:hidden!important;}div.teleplayPage__secondary');
											vipobj('.teleplayPage__playerSection__left');
											ggobj('#player_default');
										} else {}
									} else {
										if (objj.indexOf('youku') > 0) {
											jxbjxurl = obj.replace(/^.+?\/id_([^\.=]+?)==.*$/, "http://v.youku.com/v_show/id_$1==.html").replace(/^https:\/\//, "http://").replace(/html[\W_].*?$/, "html");
											function sjyoukudszxobj() {
												vipobj('#player');
											};
											setTimeout(sjyoukudszxobj, 789);
										} else if (objj.indexOf('mgtv') > 0) {
											jxbjxurl = obj.replace(/^.+?\/b\/(.+?)\.html.*$/, "http://www.mgtv.com/b/$1.html");
											vipobj('.video-area');
										} else if (objj.indexOf('pptv') > 0) {
											jxbjxurl = obj.replace(/^^https?:\/\/\w+?\./, "http://www.").replace(/\.html\?.+$/, ".html");
											vipobj('#playerbox');
											vipobj('section[class*="mod_box"][class*="video"]');
										} else if (objj.indexOf('1905.com') > 0) {
											jxbjxurl = obj.replace(/^https:\/\//, "http://").replace(/\.shtml\?.+$/, ".shtml");;
											vipobj('#player');
										} else if (obj.indexOf('tv.sohu.com') > 0) {
											jxbjxurl = obj.replace(/^https:\/\//, "http://").replace(/^.+?vid=(\w+).*$/, "http://m.tv.sohu.com/v$1.shtml").replace(/\.shtml\?.*$/, ".shtml");
											vipobj('.player');
										} else if (objj.indexOf('.le') > 0) {
											jxbjxurl = obj.replace(/^.+?\/vplay_(.+?)\.html.*$/, "http://www.le.com/ptv/vplay/$1.html");
											try {
												cssobj('section.column.playB{height:' + document.querySelector('section.column.playB').offsetHeight + 'px!important;}963540817');
											} catch (e) {}
											vipobj('section.column.playB');
										} else if (objj.indexOf('iqiyi') > 0) {
											jxbjxurl = obj.replace(/^.+?\/v_(.+?)\.html.*$/, "http://www.iqiyi.com\/v_$1.html");
											if (document.querySelector('div[time*=":"][class="m-box"]>div[style]:not([class]):not([id])')) {
												vipobj('.m-box-items.m-box-items-full');
												remove('div[class="m-box"]:not([total-pages])');
											} else {
												vipobj('.m-video-player');
											}
											cssobj('[name="m-videoInfo"]{margin-top:5%;}.m-video-player{background:black!important;}.m-video-player-wrap{top:-202px!important}963540817');
											remove('[id*="open_app_iframe"],[style*="hidden"][style*="absolute"]');
										} else if (objj.indexOf('wasu') > 0) {
											jxbjxurl = obj.replace(/^https:\/\//, "http://").replace(/\/wap\/play\/show\/id\//, "/play/show/id/");
											vipobj('.ws_play.relative');
											vipobj('#pop');
										} else if (objj.indexOf('qq.com') > 0) {
											function qqdszx() {
												if (document.querySelector('h2[class^="mod_title"]').innerText.match(/^\s*?(?:剧集|看点)\s*?$/g)) {
													if (document.querySelector('div#player')) {
														vipobj('div#player');
													} else {
														try {
															cssobj('section.mod_player{height:' + document.querySelector('section[class="mod_player"]').offsetHeight + 'px!important;}963540817');
														} catch (e) {}
														if (document.querySelector('section.mod_player')) {
															vipobj('section.mod_player');
														} else if (document.querySelector('[data-modid="player"]')) {
															vipobj('[data-modid="player"]');
														} else {
															vipobj('[dt-params*="主视频"][dt-params*="播放"]');
														}
													}
												} else {
													try {
														cssobj('section.mod_player{height:' + document.querySelector('div#player').offsetHeight + 'px!important;}963540817');
													} catch (e) {}
													if (document.querySelector('section.mod_player')) {
														vipobj('section.mod_player');
													} else if (document.querySelector('[data-modid="player"]')) {
														vipobj('[data-modid="player"]');
													} else {
														vipobj('[dt-params*="主视频"][dt-params*="播放"]');
													}
												}
											};
											if (obj.match(/[cv]id/)) {
												jxbjxurl = obj.replace(/^.+?cid=(\w+)(?:&vid=)?$/, "http://v.qq.com/x/cover/$1.html").replace(/^.+?cid=(\w+)&vid=(\w+).*$/, "http://v.qq.com/x/cover/$1/$2.html").replace(/^.+?\/(?![^\/]+?cid=)([^\/]+?)\.html\?vid=(\w+)$/, "http://v.qq.com/x/cover/$1/$2.html");
												setTimeout(qqdszx, 1680);
											} else {
												jxbjxurl = obj.replace(/^https?:\/\/(?!.+?[cv]id).{1,}\/(\w+?)\.html.*$/, "http://v.qq.com/x/cover/$1.html");
												setTimeout(qqdszx, 2345);
											}
											cssobj('.site_player_inner,#vipPosterContent');
										} else if (objj.indexOf('bilibili') > 0) {
											jxbjxurl = obj.replace(/^https?:\/\/m\.bilibili\.com\/bangumi\/play\/(\w*).*$/, "http://www.bilibili.com/bangumi/play/$1");
											try {
												cssobj('div.player-wrapper{height:' + document.querySelector("div.player-wrapper").offsetHeight + 'px!important;}963540817');
											} catch (e) {}
											vipobj('.player-wrapper');
											cssobj('.player-mask');
										} else {}
									}
									function cssobj(css) {
										document.head.insertAdjacentHTML("beforeend", '<style class="ywy-cssobj-jiangxiaobai" media="screen">' + (css) + "{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}</style>");
									};
									function ggobj(gg) {
										setTimeout(function() {
											if (document.querySelector(gg)) {
												try {
													document.querySelector(gg).remove()
												} catch (e) {}
											} else {}
										}, 250)
									};
									function ggallobj(all) {
										setTimeout(function() {
											if (document.querySelectorAll(all)) {
												try {
													document.querySelectorAll(all)[0].remove()
												} catch (e) {}
											} else {}
										}, 345)
									};
									function vipobj(vip) {
										try {
											if (document.getElementsByTagName('video')[0]) {
												document.getElementsByTagName('video')[0].volume = 0;
												document.getElementsByTagName('video')[0].pause();
											} else {}
										} catch (e) {}
										jjxxbb = https[num].url + jxbjxurl + https[num].vip;
										jxb = jjxxbb.replace(/^(.+?)undefined$/, "$1");
										setTimeout(function() {
											if (document.querySelector(vip)) {
												if (document.getElementsByTagName('video')) {
													try {
														if (document.getElementsByTagName('video')) {
															document.getElementsByTagName('video')[0].remove();
														} else {} if (document.getElementsByTagName('object')) {
															document.getElementsByTagName('object')[0].remove();
														} else {}
													} catch (e) {}
												} else {} if (jxb.match(new RegExp("^https:\/\/(?!.+?强制(?:弹[小大]窗|跳转))")) && !jxb.match(new RegExp("(?:最大网|布米米|米侠|72看看)"))) {
													if (!pcliwaiobj && https[num].name.match(new RegExp("无名"))) {
														document.querySelector(vip).innerHTML = tcthb;
														window.open(jxb, "bkmk_popup", "allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=600,height=600,left=" + (screen.availWidth - 600) / 2 + ",top=" + (screen.availHeight - 600) / 2);
													} else {
														document.querySelector(vip).innerHTML = '<div id="vip_iframe__" style="width:100%;height:100%;border:none;outline:none;margin:0;padding:0;position:absolute;z-index:963540817;"><iframe id="vip_iframe__" data-ad="false" autoLoad="true" autoplay="autoplay" loading="lazy" allowtransparency="true" frameborder="0" scrolling="no" sandbox="allow-scripts allow-same-origin allow-forms" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" src="' + jxb + '" marginwidth="0" marginheight="0" width="100%" height="100%" style="width:100%;height:100%;border:none;outline:none;margin:0;padding:0;position:absolute;z-index:963540817;"></iframe></div>';
													}
													jxqzsxobj();
												} else {
													function tcthbobj() {
														document.querySelector(vip).innerHTML = tcthb;
														jxqzsxobj();
													};
													if (jxb.match(new RegExp("最大网"))) {
														tcthbobj();
														(function() {
															try {
																let jxmmss_counter = 0;
																let jxmmss_jiankong = setInterval(function() {
																	let jxmmss_btn = document.querySelector("div.maomibtn");
																	if (jxmmss_btn) {
																		try {
																			window.open(document.querySelector('div.maomibtn>ul>li>ul>li>a[href*="//www.zuidazy"]').href, "_blank")
																		} catch (e) {}
																		clearInterval(jxmmss_jiankong);
																		return false
																	}++jxmmss_counter;
																	if (jxmmss_counter > 10) {
																		clearInterval(jxmmss_jiankong);
																		return false
																	}
																}, 500)
															} catch (e) {
																return false;
															}
														})();
													} else if (jxb.match(new RegExp("布米米"))) {
														tcthbobj();
														(function() {
															try {
																let jxmmss_counter = 0;
																let jxmmss_jiankong = setInterval(function() {
																	let jxmmss_btn = document.querySelector("div.maomibtn");
																	if (jxmmss_btn) {
																		try {
																			window.open(document.querySelector('div.maomibtn>ul>li>ul>li>a[href*="//www.bumimi"]').href, "_blank")
																		} catch (e) {}
																		clearInterval(jxmmss_jiankong);
																		return false
																	}++jxmmss_counter;
																	if (jxmmss_counter > 10) {
																		clearInterval(jxmmss_jiankong);
																		return false
																	}
																}, 500)
															} catch (e) {
																return false;
															}
														})();
													} else if (jxb.match(new RegExp("米侠"))) {
														tcthbobj();
														setTimeout(function() {
															try {
																window.mx_browser_obj.showSniff();
															} catch (e) {
																alert('此接口只能手机米侠浏览器专用');
															}
														}, 1234);
													} else if (jxb.match(new RegExp("72看看"))) {
														tcthbobj();
														window.open('http://' + Math.ceil(Math.random() * 100000) + '.mxtv.72du.com/?key=' + window.localStorage.uuid + '&url=' + encodeURIComponent(jxbjxurl), "bkmk_popup", "allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=600,height=600,left=" + (screen.availWidth - 600) / 2 + ",top=" + (screen.availHeight - 600) / 2);
													} else {
														tcthbobj();
														if (jxb.match(new RegExp("^https?:\/\/.+?强制跳转"))) {
															window.open(jxb.replace(/强制跳转.*?$/, ""), "bkmk_popup");
														} else if (jxb.match(new RegExp("^https?:\/\/.+?强制弹大窗"))) {
															let tmpobj = window.open(jxb.replace(/强制弹大窗.*?$/, ""), "bkmk_popup", "fullscreen=1");
															tmpobj.resizeTo(screen.width, screen.height);
														} else if (jxb.match(new RegExp("^https?:\/\/(?:.+?强制弹小窗)?"))) {
															window.open(jxb.replace(/强制弹小窗.*?$/, ""), "bkmk_popup", "allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left=" + (screen.availWidth - 1050) / 2 + ",top=" + (screen.availHeight - 600) / 2);
														}
													}
												}
											} else {}
										}, 500);
									};
								};
							})(i);
							httpsvipli.innerHTML = https[i].name;
							httpsvipul.appendChild(httpsvipli)
						};
						document.body.appendChild(httpsvipul)
					};
					if (jxbpcobj) {
						let vipjxzstb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADyUlEQVRYhc2UbWhbVRjHf7dpZzXGBemmU2FtM1uEZssoOOhmXbsXXLPVidqydTiZzQfpGPhlH2T95GKKzDGwijgdTJlbohXUdU5aypbqHDIYKih1rg4VphtoJY1U23L8cM7NufcmWe6tRX3gcF7+z3Oe33nOuRf+R3YIuAAI4DfgA+BupTUAo0oTauycrwaOAuOWdau+B1hyo+TOIEFoi+CZMYFh5GtzaIZhTKjD5NkFQHx5GZERiJ8nVZCvUhB9WQAifkBqGYHY2yt1c95/WCcZ/0Wvm23oEx0D/F6oEocA8WZKB8V6LFVAbmJqofriAM7k1paDMBacNBOXyW7hVYD3BzTRiogaXBkCIKzm5z+Fy2PFblLb0dchYEB0HWSzcm3Hk0r0L41ya+fjEsDf9hCJiT58lQwktXPj/cp5dopYD/j9cvr5+dLJrZYegXePy3FNrVqcvAQdz6ao6tpexr7BjwCo3gDAZ6PSp2E5hOrlOFcN4MhhbwAAty0sIrTvPVaWm6zcJgHOaf3RDtk3t8rebfmtFuuBjW06HoBgOKdrgJr1ALzwnA5uCMsqmKXzUv6d3ZARcLBfXl82C6++pMR7owUAAovgriYbaaQRWtfrTT8+5R7AtOvXYPg0dLTDQBII1EN4WwEAgJVdgD5pTa2+/+/H5YOiKoIbM7+C2jvgkU1m7Cpo67f52QHq5HGtJ93ZLfv0iFoItbgCyFnFIli6GdbEof018C8uAjALLK6DqgjpEXliq6XUp0Sk0xtAw3ZYF4e6zXJu2GUNUKl6dcLciXGUv3qVNwCnCeCWcgvA/i1dNgd1wt0xeYcBA5aH7HDmYzX13TEdnre2pNEO4C+HP2bk+MMX9/iY/vYrzgxfpHWXfJrBe2DZJrj6NWR+lI5VEflytx6U8+rV8MNFrQfD0HoArn8HU9fsa3eu0MmDFZBRyVPxp5l4+xV9I74HouxPn8SLCeDKGExPgWHc2DdYARPTcvxOopvMiTfA9ghHB9n3YLRg8FzNZCqS3A4AMJs+NW8QBrJCty8omjwfYL4gzOQAv/6lksefciYvDGBC9K7daFv70wOAcMyTiSfIpI4Uci0MADBzdsgGcZNHCGvy7Im3isnFAeYDokTy0gA5iJYNniGSz+8oldwdAMDMmWF6m9fmQRhmc/wDUn2dZJPH3GztDgBgZvRsHsQUMO0oR6qvk8njKbfbugcoBFHp0D0m/wfW1ExCCBJCsOsL2W5++LF/IbHVAk05AO7bOtddyku7FLPMuRbfe2t+CvuDl/hmcO77/Mf2N6TgrX4E/h5BAAAAAElFTkSuQmCC";
						let zbzsgd = "135px";
						let zbzszy = "25px";
						let zbzsdx = "0.6";
						let ywylbkd = "350px";
						let ywylbgd = "125px";
						let ywylbzy = "5px";
						let ywylbdx = "1";
						let ywylbjl = "33.3";
						function createMenuhttps() {
							let jxbhttps = document.createElement("div");
							jxbhttps.id = "jxbhttps";
							jxbhttps.title = "点击 此按钮 弹出 原网页解析 接口选择";
							jxbhttps.setAttribute('style', 'top:' + zbzsgd + ';left:' + zbzszy + ';zoom:' + zbzsdx + '!important;font-size:15px;width:35px;height:35px;line-height:35px;text-align:center;background-size:100% 100%;background-image:url(' + vipjxzstb + ');text-align:center;background-color:transparent;overflow:hidden;user-select:none;position:absolute;z-index:963540817;bottom:280px;border-radius:10px');
							jxbhttps.onclick = function() {
								let httpsvipul = document.getElementById("httpsvipul");
								httpsvipul.setAttribute('tabindex', '1');
								let redHide = document.getElementById('httpsvipul');
								redHide.onblur = (() => {
									redHide.style.display = 'none';
									this.style.transform = "rotateZ(0deg)";
								});
								if (httpsvipul.style.display == "none") {
									httpsvipul.style.display = "block";
									this.style.transform = "rotateZ(-90deg)";
								} else {
									httpsvipul.style.display = "none";
									this.style.transform = "rotateZ(0deg)";
								}
							};
							document.body.appendChild(jxbhttps);
						};
						createSelecthttps(https);
						createMenuhttps();
						document.head.insertAdjacentHTML('beforeend', '<style>ul#httpsvipul>li{margin:-4px 0px}ul#httpvipul>li{margin:-4px 0px}ul#httpsvipul{width:' + ywylbkd + ';top:' + ywylbgd + ';left:' + ywylbzy + ';zoom:' + ywylbdx + '!important;position:fixed;z-index:2147483647!important;font-size:13px;user-select:none;color:black;transition:all .5s ease 0s;overflow:hidden}ul#httpsvipul>li{width:' + ywylbjl + '%!important}ul#httpsvipul>li{color:black;display:flex;cursor:pointer;float:left;line-height:25px;padding:0;font-size:17px;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize;text-decoration:none;vertical-align:baseline;position:relative;zoom:.6}ul#httpsvipul>li>span{text-align:center;font-weight:bold;color:black;display:inline-block;padding:5px;margin:5px;font-size:18px;line-height:1;border:1px solid #fcfcfc;border-radius:3px;text-decoration:none;background-color:blanchedalmond;width:100%;box-shadow:1px 1px 4px #444,inset -2px -2px 4px #fff,inset 2px 2px 4px #aaa}ul#httpsvipul>li>span:hover{border-style:dashed!important;background:rebeccapurple!important;color:red!important}wsjxbshhjd#wsjxbshhjd>sapn:active{box-shadow:none!important;background-color:cornflowerblue!important}ul#httpsvipul>a:hover{border-style:dashed!important;background-color:rebeccapurple!important;color:aliceblue!important}ul#httpsvipul>a:active{box-shadow:none!important;background-color:cornflowerblue!important}ul#httpsvipul .wsjxbshhjd{color:red!important;background-color:darkblue!important;box-shadow:rgba(255,254,255,0.6) 0 .3em .3em inset,rgba(0,0,0,0.15) 0 -0.1em .3em inset,darkblue 0 .1em 3px,darkblue 0 .3em 1px,rgba(0,0,0,0.2) 0 .5em 5px!important}ul#httpsvipul .wsjxbshhjd a1{color:cyan!important}ul#httpsvipul>li:nth-child(1)>span,ul#httpsvipul>li:nth-child(2)>span,ul#httpsvipul>li:nth-child(3)>span,ul#httpsvipul>li:nth-child(4)>span{background-color:gold;}</style>');
					} else {
						function createMenuhttps() {
							var jxbhttps = document.createElement("div");
							jxbhttps.id = "jxbhttps";
							jxbhttps.innerHTML = '<div title="点击 此按钮 弹出 原网页解析 接口选择"><svg style="width:40px;height:40px;position:fixed;bottom:200px;right:0.5vmin;z-index:100000;text-align:center;line-height:48.5px;font-size:20.8px;border-radius:10.3px;cursor:pointer;"</svg>;<svg viewBox="128 128 256 256"><path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6z"/><path d="M222.2 303.4v-94.6l90.7 47.3L222.2 303.4z" fill="#18222d"/></svg>';
							jxbhttps.setAttribute("style", "color:#008000;fill:#008000;");
							jxbhttps.onclick = function() {
								let httpsvipul = document.getElementById("httpsvipul");
								httpsvipul.setAttribute('tabindex', '1');
								let redHide = document.getElementById('httpsvipul');
								if (httpsvipul.style.display == "none") {
									try {
										document.querySelector("#jxbewanobj").click();
									} catch (e) {}
								} else {
									try {
										document.querySelector("#jxbewanobj").click();
									} catch (e) {}
								}(function() {
									let pdjqjssfczobj_counter = 0;
									let pdjqjssfczobj_jiankong = setInterval(function() {
										let pdjqjssfczobj_btn = document.querySelector("script#jiangxiaobaijqjs");
										if (pdjqjssfczobj_btn) {
											try {
												$('ul#httpsvipul>li').click(function() {
													if (document.querySelector("ul#httpsvipul>li>span.wsjxbshhjd>a2") == null) {} else {
														let httpsjksz = document.querySelector("ul#httpsvipul>li>span.wsjxbshhjd>a2").textContent;
														if (!document.querySelector('ul#httpsvipul>li>span.wsjxbshhjd>a4').innerText.match(new RegExp("^\s*?跳\s*?-"))) {
															localStorage.setItem("httpsjk", httpsjksz)
														} else {}
													}
												});
											} catch (e) {
												return false
											}
											clearInterval(pdjqjssfczobj_jiankong);
											return false
										}++pdjqjssfczobj_counter;
										if (pdjqjssfczobj_counter > 100) {
											clearInterval(pdjqjssfczobj_jiankong);
											return false
										}
									}, 50)
								})();
								redHide.onblur = (() => {
									document.querySelector("#jxbhttps").click();
								});
								if (httpsvipul.style.display == "none") {
									httpsvipul.style.display = "block";
									this.style.cssText += "color:#cd7f32;fill:#cd7f32;background:0"
								} else {
									httpsvipul.style.display = "none";
									this.style.cssText += "color:#fff;fill:#008000;background:0"
								}
							};
							document.body.appendChild(jxbhttps)
						};
						createMenuhttps();
						createSelecthttps(https);
						(function() {
							const jxbqcsjjk = document.querySelectorAll('ul#httpsvipul li');
							for (let jxbqcsjjki = 0; jxbqcsjjki < jxbqcsjjk.length; jxbqcsjjki++) {
								const jxbqcsjjkmsa = jxbqcsjjk[jxbqcsjjki].querySelectorAll('a1');
								for (let jxbqcsjjkia = 0; jxbqcsjjkia < jxbqcsjjkmsa.length; jxbqcsjjkia++) {
									if (!jxbqcsjjk[jxbqcsjjki].innerText.match(/(?:爱跟|久已|蓝影|交响|时光|大白|我爱|冰豆)/g) && jxbqcsjjkmsa[jxbqcsjjkia].innerText.match(/(?:搜索|跳转|[小大]窗)/g)) {
										jxbqcsjjk[jxbqcsjjki].setAttribute('style', 'display:none!important')
									}
								};
								const jxbqcsjjkmsb = jxbqcsjjk[jxbqcsjjki].querySelectorAll('a4');
								for (let jxbqcsjjkib = 0; jxbqcsjjkib < jxbqcsjjkmsb.length; jxbqcsjjkib++) {
									let jkmcobj = jxbqcsjjkmsb[jxbqcsjjkib].innerText.match(/(?:四七|无名|九八看|乐多|恶灵王|贝吉塔|福星|大师|盖斯|Ckplayer|M1907|H8|思[古云]|B站|蘑菇|OK|小狼云|迪奥|618G|云端|老版|大白|365|920|1717|4080|8090|星驰|月亮|黑云|小蒋|九八看|猫视频|金桥|赤兔|诺讯)/i);
									let jkmclwobj = jxbqcsjjkmsb[jxbqcsjjkib].innerText.match(/(?:爱跟|久已|交响|时光|大白|我爱|冰豆)/);
									if (jxbqcsjjkmsb[jxbqcsjjkib].innerText.match(/Parwix/i) && location.host.match(/\.(?:bilibili|le)\./)) {
										jxbqcsjjk[jxbqcsjjki].setAttribute('style', 'display:none!important')
									} else {} if (jkmcobj) {
										jxbqcsjjk[jxbqcsjjki].setAttribute('style', 'display:none!important')
									}
									if (!jkmcobj && !jxbqcsjjkmsb[jxbqcsjjkib].innerText.match(/米侠/) && !jkmclwobj) {
										jxbqcsjjkmsb[jxbqcsjjkib].innerText = jxbqcsjjkmsb[jxbqcsjjkib].innerText.replace(/^(?!(?:(?:原|跳))?-)(.+?)$/, "原-$1");
									}
									if (jkmclwobj) {
										jxbqcsjjkmsb[jxbqcsjjkib].innerText = jxbqcsjjkmsb[jxbqcsjjkib].innerText.replace(/^(?!(?:(?:原|跳))?-)(.+?)$/, "跳-$1");
									}
								}
							}
						})();
						document.head.insertAdjacentHTML('beforeend', '<style>wsjxbshhjd#wsjxbshhjd>sapn:active{box-shadow:none!important;background-color:cornflowerblue!important}ul#httpsvipul>a:hover{border-style:dashed!important;background-color:rebeccapurple!important;color:aliceblue!important}ul#httpsvipul>a:active{box-shadow:none!important;background-color:cornflowerblue!important}ul#httpsvipul .wsjxbshhjd{color:red!important;background-color:darkblue!important;box-shadow:rgba(255,254,255,0.6) 0 .3em .3em inset,rgba(0,0,0,0.15) 0 -0.1em .3em inset,darkblue 0 .1em 3px,darkblue 0 .3em 1px,rgba(0,0,0,0.2) 0 .5em 5px!important}ul#httpsvipul .wsjxbshhjd a1{color:cyan!important}ul#httpsvipul>li:nth-child(1)>span,ul#httpsvipul>li:nth-child(2)>span,ul#httpsvipul>li:nth-child(3)>span,ul#httpsvipul>li:nth-child(4)>span{background-color:gold}ul#httpsvipul span[style^="background-color"]{background-color:transparent!important}::-webkit-scrollbar{width:0px!important;height:0px!important;}</style>');
						(function() {
							let jxbewj = '', jxbwjstyle = 'float:left;border-radius:3.5px;color:#000!important;box-shadow:inset rgba(255,254,255,.6) 0 0.3em 0.3em,inset rgba(0,0,0,.15) 0 -0.1em 0.3em,#d82661 0 0.1em 3px,#b7144a 0 0.3em 1px,rgba(0,0,0,.2) 0 0.5em 5px;background:0 0;font-weight:700;font-size:16px;padding:5px 2.5px 5px 2.5px;border:4px outset buttonface;text-decoration:none;background-color:#4CAF50;margin-top:1px;', jxbhttpsew = [{
								name: jxbewj + '<a style="' + jxbwjstyle + '" href="https://gitee.com/q2257227289/00/raw/master/963540817-1.png" target="_blank">\u8d5e\u52a9</a>'
							}, {
								name: jxbewj + '<a style="' + jxbwjstyle + '" href="https://jq.qq.com/?_wv=1027&k=l48Yev0E" target="_blank">\u52a0\u7fa4</a>'
							}, {
								name: jxbewj + '<span id="sjzdws" style="' + jxbwjstyle + '">\u641c</span>'
							}, {
								name: jxbewj + '<span id="sjzdwss" style="' + jxbwjstyle + '">\u7d22</span>'
							}, {
								name: jxbewj + '<a href="http://api.iixxzyapi.com/" style="' + jxbwjstyle + '">\u798f</a>'
							}, {
								name: jxbewj + '<a href="http://www.asys.vip/kuaishou/" style="' + jxbwjstyle + '">\u5229</a>'
							}, {
								name: jxbewj + '<span id="vipzdjxhy" style="' + jxbwjstyle + '">\u81ea\u52a8</span>'
							}, {
								name: jxbewj + '<span id="vipjxtbhy" style="' + jxbwjstyle + '" href="javascript:void(0);" onclick="localStorage.removeItem(\'httpsjk\');location.reload();">\u53cc\u51fb\u663e\u793a</span>'
							}];
							function createSelectew(jxbhttpsew) {
								let jxbewjul = document.createElement("ul");
								jxbewjul.id = "jxbewjul";
								jxbewjul.setAttribute("style", "display:none;background:#18222d;width:99vw;max-width:728px;height:auto;margin:0;padding:0;position:fixed;bottom:150px;left:50%;transform:translateX(-50%);z-index:102030;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-webkit-overflow-scrolling:touch;border-radius:5.3px;white-space:nowrap;text-align:center;");
								for (let i = 0; i < jxbhttpsew.length; i++) {
									let jxbewjli = document.createElement("li");
									let that = this;
									jxbewjli.setAttribute("style", "margin:0px 0.125px;display:inline-block;height:40px;text-align:center;");
									(function(jxbewj) {
										jxbewjli.onclick = function() {
											jxbhttpsew[jxbewj]
										}
									})(i);
									jxbewjli.innerHTML = jxbhttpsew[i].name;
									jxbewjul.appendChild(jxbewjli)
								}
								document.body.appendChild(jxbewjul)
							}
							function createMenuew() {
								let jxbewjBtn = document.createElement("div");
								jxbewjBtn.id = "jxbewanobj";
								jxbewjBtn.onclick = function() {
									let jxbewjul = document.getElementById("jxbewjul");
									if (jxbewjul.style.display == "none") {
										jxbewjul.style.display = "block"
									} else {
										jxbewjul.style.display = "none"
									}
								};
								document.body.appendChild(jxbewjBtn)
							}
							createMenuew();
							createSelectew(jxbhttpsew)
						})();
						function dssxbobj() {
							setTimeout(function() {
								window.location.reload();
							}, 666)
						};
						(function() {
							if (localStorage.getItem("vipzdjx") == '0') {
								document.getElementById('vipzdjxhy').innerText = '手动';
								document.querySelector("#vipzdjxhy").style.backgroundColor = '#268dcd';
							} else if (localStorage.getItem("vipzdjx") == '2') {
								document.getElementById('vipzdjxhy').innerText = '自动';
								document.querySelector("#vipzdjxhy").style.backgroundColor = '#49a34c';
							}
							document.getElementById('vipzdjxhy').onclick = function() {
								if (this.innerHTML == '手动') {
									localStorage.setItem("vipzdjx", "2");
									this.innerText = '自动';
									document.querySelector("#vipzdjxhy").style.backgroundColor = '#49a34c';
									dssxbobj();
								} else if (this.innerHTML == '自动') {
									localStorage.setItem("vipzdjx", "0");
									this.innerText = '手动';
									document.querySelector("#vipzdjxhy").style.backgroundColor = '#268dcd';
									dssxbobj();
								}
							}
						})();
						(function() {
							if (localStorage.getItem("vipjxtb") == '0') {
								let enable = false;
								let handler = 0;
								let dbclick = function() {
									enable = !enable;
									clearTimeout(handler);
									if (enable) {
										aScroll()
									}
								};
								document.body.removeEventListener('dblclick', dbclick);
								document.body.addEventListener('dblclick', dbclick);
								let aScroll = function() {
									try {
										document.querySelector("div#jxbhttps").click();
									} catch (e) {}
								};
								document.getElementById('vipjxtbhy').innerText = '默认显示';
								document.querySelector("#vipjxtbhy").style.backgroundColor = '#268dcd'
							} else if (localStorage.getItem("vipjxtb") == '2') {
								document.getElementById('vipjxtbhy').innerText = '双击显示';
								document.querySelector("#vipjxtbhy").style.backgroundColor = '#4CAF50'
							}
							document.getElementById('vipjxtbhy').onclick = function() {
								if (this.innerHTML == '默认显示') {
									localStorage.setItem("vipjxtb", "2");
									this.innerText = '双击显示';
									document.querySelector("#vipjxtbhy").style.backgroundColor = '#4CAF50';
									dssxbobj()
								} else if (this.innerHTML == '双击显示') {
									localStorage.setItem("vipjxtb", "0");
									this.innerText = '默认显示';
									document.querySelector("#vipjxtbhy").style.backgroundColor = '#268dcd';
									dssxbobj()
								}
							}
						})();
					}
					setTimeout(() => {
						try {
							document.querySelector("ul#httpsvipul>li:nth-child(" + localStorage.getItem("httpsjk") + ")>span").style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAMAAACHgmeRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURX//AIH8BobyGoT/CZP/J4nxIIL5C5T8LJj0PW2hJpgAAAAeSURBVAjXY2BlY4QABiZGBiigNouVGQoYONhZIAAAEpYAdsB2b4AAAAAASUVORK5CYII=)";
						} catch (e) {}
						let a = document.querySelectorAll('ul#httpsvipul>li>span');
						let l = a.length;
						for (let i = 0; i < l; i++) {
							a[i].onclick = function() {
								for (let j = 0; j < l; j++) {
									if (this == a[j]) {
										try {
											$("ul#httpsvipul>li>span").css("backgroundImage", "");
										} catch (e) {}
										this.className = "wsjxbshhjd"
									} else {
										a[j].className = ""
									}
								}
							}
						}
						let sjzdwsbtn = document.getElementById('sjzdws'), sjzdwssbtn = document.getElementById('sjzdwss');
						try {
							sjzdwsbtn.addEventListener('click', sjzdwsbtnClick, false);
							sjzdwssbtn.addEventListener('click', sjzdwssbtnClick, false);
						} catch (e) {}
						function sjzdwsbtnClick() {
							if (obj.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com/)) {
								location.replace("http://www.zuidazy4.com/index.php?m=vod-search&wd=" + document.querySelector('section[dt-params*="标题"]').innerText);
							} else {
								let jxbzdws = document.title.replace(/(?:动[漫画]|电(?:视剧|影)|综艺)\s*?_/, "").replace(/^动态漫画\s*?[\W_]\s*?/, "").replace(/(?:会员|升级|加长)\w*?\s*?版/, "").replace(/（[^）]+?）\s*?第/, "第").replace(/^(\W+?)\s*?（[^\w）:：]+?）\s*?([：:].*)$/, "$1$2").replace(/^([^：]+?)\s*?：(?:先导片|彩蛋|看点|花絮|预告|神剧亮了)\s*?$/, "$1").replace(/^([^\\u4e00-\\u9fa5a-z]+?)\s*?\d+?.*?\1\s*?第.+?$/i, "$1").replace(/^(?:\s*?[\-\—\_<《\(（]\s*?)?([^\s:：]+?)(?:\d{1,3}\s*?)?(?:\-|\—|\_|>|》|\)|）|:|：|\s+?).*?$/, "$1").replace(/^#([^\s]+?)\s*?\(\s*?[^\\u4e00-\\u9fa5a-z].*?$/i, "$1").replace(/^([^\\u4e00-\\u9fa5a-z\s:：\-]+?)[\(（:：]?第?\s*?\d+?\s*?[部季集话部期].*?$/i, "$1").replace(/^([^\-\s]+?)(?:\(|第)\s*?.{1,3}[部季集话部期].*?$/, "$1").replace(/^([^\\u4e00-\\u9fa5a-z]+?)(?:电视剧|剧集|电影|综艺|动漫)\W*?\s*?[\(（].*?$/i, "$1").replace(/^([^\.\_\-]+?)\.[_\-].*?$/, "$1").replace(/^([^:：\(]+?)。.*?$/, "$1").replace(/^([^\-\s]+?)—[^\\u4e00-\\u9fa5a-z]+?—.*?$/i, "$1").replace(/([^\\u4e00-\\u9fa5]+?)[a-zA-Z0-9]+?((?:\s+|$))/, "$1$2");
								location.replace("http://www.zuidazy4.com/index.php?m=vod-search&wd=" + jxbzdws);
							}
						};
						function sjzdwssbtnClick() {
							if (obj.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com/)) {
								location.replace("https://www.cupfox.com/search?key=" + document.querySelector('section[dt-params*="标题"]').innerText);
							} else {
								let jxbzdws = document.title.replace(/(?:动[漫画]|电(?:视剧|影)|综艺)\s*?_/, "").replace(/^动态漫画\s*?[\W_]\s*?/, "").replace(/(?:会员|升级|加长)\w*?\s*?版/, "").replace(/（[^）]+?）\s*?第/, "第").replace(/^(\W+?)\s*?（[^\w）:：]+?）\s*?([：:].*)$/, "$1$2").replace(/^([^：]+?)\s*?：(?:先导片|彩蛋|看点|花絮|预告|神剧亮了)\s*?$/, "$1").replace(/^([^\\u4e00-\\u9fa5a-z]+?)\s*?\d+?.*?\1\s*?第.+?$/i, "$1").replace(/^(?:\s*?[\-\—\_<《\(（]\s*?)?([^\s:：]+?)(?:\d{1,3}\s*?)?(?:\-|\—|\_|>|》|\)|）|:|：|\s+?).*?$/, "$1").replace(/^#([^\s]+?)\s*?\(\s*?[^\\u4e00-\\u9fa5a-z].*?$/i, "$1").replace(/^([^\\u4e00-\\u9fa5a-z\s:：\-]+?)[\(（:：]?第?\s*?\d+?\s*?[部季集话部期].*?$/i, "$1").replace(/^([^\-\s]+?)(?:\(|第)\s*?.{1,3}[部季集话部期].*?$/, "$1").replace(/^([^\\u4e00-\\u9fa5a-z]+?)(?:电视剧|剧集|电影|综艺|动漫)\W*?\s*?[\(（].*?$/i, "$1").replace(/^([^\.\_\-]+?)\.[_\-].*?$/, "$1").replace(/^([^:：\(]+?)。.*?$/, "$1").replace(/^([^\-\s]+?)—[^\\u4e00-\\u9fa5a-z]+?—.*?$/i, "$1").replace(/([^\\u4e00-\\u9fa5]+?)[a-zA-Z0-9]+?((?:\s+|$))/, "$1$2");
								location.replace("https://www.cupfox.com/search?key=" + jxbzdws);
							}
						};
					}, 2345)
				})();
			} else {}
			function zdbt() {
				if (jxbpcobj) {
					let jxbzdws = document.title.replace(/(?:动[漫画]|电(?:视剧|影)|综艺)\s*?_/, "").replace(/^动态漫画\s*?[\W_]\s*?/, "").replace(/(?:会员|升级|加长)\w*?\s*?版/, "").replace(/（[^）]+?）\s*?第/, "第").replace(/^(\W+?)\s*?（[^\w）:：]+?）\s*?([：:].*)$/, "$1$2").replace(/^([^：]+?)\s*?：(?:先导片|彩蛋|看点|花絮|预告|神剧亮了)\s*?$/, "$1").replace(/^([^\\u4e00-\\u9fa5a-z]+?)\s*?\d+?.*?\1\s*?第.+?$/i, "$1").replace(/^(?:\s*?[\-\—\_<《\(（]\s*?)?([^\s:：]+?)(?:\d{1,3}\s*?)?(?:\-|\—|\_|>|》|\)|）|:|：|\s+?).*?$/, "$1").replace(/^#([^\s]+?)\s*?\(\s*?[^\\u4e00-\\u9fa5a-z].*?$/i, "$1").replace(/^([^\\u4e00-\\u9fa5a-z\s:：\-]+?)[\(（:：]?第?\s*?\d+?\s*?[部季集话部期].*?$/i, "$1").replace(/^([^\-\s]+?)(?:\(|第)\s*?.{1,3}[部季集话部期].*?$/, "$1").replace(/^([^\\u4e00-\\u9fa5a-z]+?)(?:电视剧|剧集|电影|综艺|动漫)\W*?\s*?[\(（].*?$/i, "$1").replace(/^([^\.\_\-]+?)\.[_\-].*?$/, "$1").replace(/^([^:：\(]+?)。.*?$/, "$1").replace(/^([^\-\s]+?)—[^\\u4e00-\\u9fa5a-z]+?—.*?$/i, "$1").replace(/([^\\u4e00-\\u9fa5]+?)[a-zA-Z0-9]+?((?:\s+|$))/, "$1$2");
					let jxbzdwsjs = document.title.replace(/\s+?/, "").replace(/会员\w+?版/, "").replace(/^(?!.*?(?:(?:\s*?[\-\—\_<《\(（]\s*?)?[^\s:：]+?\d{1,3}?\s*?(?:\-|\—|\_|>|》|\)|）|:|：|\s+?)|(?:第\s*?.{1,3}|20\d{4,})\s*?[部季集话部期]|第\s*?\d{4}-\d{2}-\d{2}\s*?[部季集话部期]|先导片|彩蛋|看点|花絮|预告|神剧亮了)).*?$/, "").replace(/^(?!.+?(?:先导片|彩蛋|看点|花絮|预告|神剧亮了|[部季集话部期]\s*?[上下]|第\s*?.{1,3}\s*?[部季].*?第\s*?\d{4}-\d{2}-\d{2}\s*?期)).*((?:(?:第\s*?.{1,3}|(?:第\s*?|\s+?)20\d{4,})\s*?(?<![\-_])[部季集话部期])).*?$/i, "$1").replace(/.+?(先导片|彩蛋|看点|花絮|预告|神剧亮了|第\s*?.{1,3}\s*?[部季集话部期]\s*?[上下][部季集话部期]?).*?$/, "$1").replace(/^[^:：]+?(20\d{6})\s*?(期).*$/, "第$1$2").replace(/^(?!.+?(?:先导片|彩蛋|看点|花絮|预告|神剧亮了|[部季集话部期]\s*?[上下])).+?(第)\s*?(\d{4})-(\d{2})-(\d{2})\s*?([期]).*?$/, "$1$2$3$4$5").replace(/20\d{2}(\d{4}期)/, "$1");
					if (jxbzdwsjs == null || jxbzdwsjs == undefined || jxbzdwsjs == '') {
						document.title = jxbzdws + jxbzdwsjs;
					} else {
						document.title = jxbzdws + '：' + jxbzdwsjs;
					}
				} else {}
			};
			function zddjjk() {
				if (jxbpcobj) {
					let jihao1 = 'ul#httpsvipul>li:nth-child(' + httpsjk + ')';
					let jihaoa = [jihao1];
					for (i = 0; i < jihaoa.length; i++) {
						if (exist(jihaoa[i])) {
							exist(jihaoa[i]).click();
							log("%c电脑会员视频自动判断--成功点击", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px")
						}
					}
					function exist(jihaoa) {
						if (document.querySelector(jihaoa)) {
							return document.querySelector(jihaoa)
						} else {
							return false
						}
					}
				} else if (!document.querySelector('ul#httpsvipul>li:nth-child(' + httpsjk + ')>span>a4').innerText.match(new RegExp("^\s*?跳\s*?-"))) {
					let jihao1 = 'ul#httpsvipul>li:nth-child(' + httpsjk + ')';
					let jihaoa = [jihao1];
					for (i = 0; i < jihaoa.length; i++) {
						if (exist(jihaoa[i])) {
							exist(jihaoa[i]).click();
							log("%c手机会员视频自动判断--成功点击", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px")
						}
					}
					function exist(jihaoa) {
						if (document.querySelector(jihaoa)) {
							return document.querySelector(jihaoa)
						} else {
							return false
						}
					}
				} else {}
			};
			function zddj() {
				zdbt();
				if (vipzdjx == 1 || vipzdjx == 2 || vipjxss == 0) {
					if (vipzdjx == 2 || vipjxss == 0) {
						zddjjk()
					} else if (vipzdjx == 1) {
						$(function() {
							var qjzdjk_counter = 0;
							var qjzdjk_jiankong = setInterval(function() {
								var qjzdjk_btn = $("ul#httpsvipul>li");
								if (qjzdjk_btn) {
									zddjjk();
									clearInterval(qjzdjk_jiankong);
									return false
								}++qjzdjk_counter;
								if (qjzdjk_counter > 50) {
									clearInterval(qjzdjk_jiankong);
									return false
								}
							}, 500)
						})
					}
				}
				return false
			};
			function ggobj(jxbggobj) {
				setTimeout(function() {
					if (document.querySelector(jxbggobj)) {
						try {
							document.querySelector(jxbggobj).remove()
						} catch (e) {}
					} else {}
				}, 234)
			};
			if (objj.match(/(?:bilibili|acfun|youku|qq|iqiyi|mgtv|sohu|le|pptv|ixigua)\./)) {
				if (gbdmobj == 1) {
					if (obj.match(/^https?:\/\/www\.iqiyi\.com\/(?:[av]_|kszt\/)/)) {
						let iqiyidanmu = 'div[class*="barrage"],div[id*="barrage"],div[class^="player-mnb-mid"],div[id^="player-mnb-mid"],div[class*="_voteEnter"],div[id*="_voteEnter"]';
						remove(iqiyidanmu);
						removeall(iqiyidanmu, undefined, false);
					} else if (obj.match(/^https?:\/\/www\.ixigua\.com\/\d{10,}/)) {
						let ixiguadanmu = 'xg-bullet,div.teleplayPage__interactionZone';
						remove(ixiguadanmu);
						removeall(ixiguadanmu, undefined, false);
					} else if (obj.match(/^https?:\/\/tv\.sohu\.com\/v\//)) {
						let sohudanmu = '[class^="x-danmu-panel"],[id^="x-danmu-panel"],div[class^="toolBar"],div[id^="toolBar"]';
						remove(sohudanmu);
						removeall(sohudanmu, undefined, false);
					} else if (obj.match(/^https?:\/\/[^\/]+?\.bilibili\./)) {
						(function() {
							const SELECTOR_NATIVE = {
								on: "input[class='bui-switch-input']:checked[style='pointer-events: initial;']",
								off: "input[class='bui-switch-input']:not(:checked)",
							};
							const SELECTOR_EMBED = {
								on: "div[class~='bilibili-player-video-btn-danmaku'][data-text='打开弹幕']",
								off: "div[class~='bilibili-player-video-btn-danmaku'][data-text='关闭弹幕']",
							};
							const SELECTOR = document.location.hostname === "player.bilibili.com" ? SELECTOR_EMBED : SELECTOR_NATIVE;
							function disableDanmaku() {
								let buttonOn = document.querySelector(SELECTOR.on);
								if (buttonOn !== null) {
									buttonOn.click()
								}
								setTimeout(() => {
									if (document.querySelector(SELECTOR.off) === null) {
										disableDanmaku()
									}
								}, 500)
							}
							function detectPJAX() {
								let prevButtonOn = null;
								setInterval(() => {
									let buttonOn = document.querySelector(SELECTOR.on);
									if (buttonOn !== null && prevButtonOn !== buttonOn) {
										disableDanmaku();
										prevButtonOn = buttonOn
									}
								}, 500)
							}
							detectPJAX();
						})();
					} else {
						(function() {
							"use strict";
							let selector;
							const selectoracfuna = {
								on: "div[data-bind-key='danmaku_enabled'][data-bind-attr='true']",
								off: "div[data-bind-key='danmaku_enabled'][data-bind-attr='false']",
							};
							const selectoryoukua = {
								on: 'div[id="barrage-controller"] [class^="switch-img_"][class*="turn-on_"]',
								off: 'div[id="barrage-controller"] [class^="switch-img_"][class*="turn-off_"]',
							};
							const selectorqqa = {
								on: 'div[class*="barrage_switch"][class*="open"]',
								off: 'div[class*="barrage_switch"]:not([class*="open"])',
							};
							const selectormgtva = {
								on: 'div[class*="danmu-switcher"][class*="on"]',
								off: 'div[class*="danmu-switcher"]:not([class*="on"])',
							};
							const selectorlea = {
								on: 'label[class*="switch-btn"][class*="active"]',
								off: 'label[class*="switch-btn"]:not([class*="active"])',
							};
							const selectorpptva = {
								on: 'div[class*="w-barrage-open"]:not([class*="close"]',
								off: 'div[class*="w-barrage-close"]:not([class*="open"])',
							};
							if (obj.match(/^https?:\/\/(?:www\.acfun\.cn\/(?:.+?\/ac|bangumi\/)|live\.acfun\.cn\/live\/)/)) {
								selector = selectoracfuna;
							} else if (obj.match(/^https?:\/\/v(?:-wb)?\.youku\.com\/v_show\/id_/)) {
								selector = selectoryoukua;
							} else if (obj.match(/^https?:\/\/v\.qq\.com\/x\/cover\//)) {
								selector = selectorqqa;
							} else if (obj.match(/^https?:\/\/www\.mgtv\.com\/[bs]\//)) {
								selector = selectormgtva;
							} else if (obj.match(/^https?:\/\/www\.le\.com\/ptv\/vplay\//)) {
								selector = selectorlea;
							} else if (obj.match(/^https?:\/\/v\.pptv\.com\/show\//)) {
								selector = selectorpptva;
							} else {}
							function disableDanmaku() {
								let buttonOn = document.querySelector(selector.on);
								if (buttonOn !== null) {
									buttonOn.click();
								}
								setTimeout(() => {
									if (document.querySelector(selector.off) === null) {
										disableDanmaku()
									}
								}, 500)
							}
							function detectPJAX() {
								let prevButtonOn;
								setInterval(() => {
									try {
										let buttonOn = document.querySelector(selector.on);
										if (buttonOn !== null && prevButtonOn !== buttonOn) {
											disableDanmaku();
											prevButtonOn = buttonOn
										}
									} catch (e) {
										return false;
									}
								}, 500)
							}
							detectPJAX();
						})();
					}
				} else if (gbdmobj == 0) {}
			} else {} if (mgzdgq == 0 || mgzdgq == 1 || mgzdgq == 2 || vipzdjx == 2) {
				const ZDVIP = MutationObserver || WebKitMutationObserver || MozMutationObserver;
				if (ZDVIP) {
					let observer = new ZDVIP(function(records) {
						records.map(function(record) {
							if (record.addedNodes.length) {
								[].forEach.call(record.addedNodes, function(addedNode) {
									zdvip(addedNode);
								});
							};
						});
					});
					let option = {
						'childList': true,
						'subtree': true
					};
					observer.observe(document, option);
				};
				if (jxbpcobj) {
					function pcyouku() {
						zdztsp();
						autoClickElement('[data-tip*="暂停"]', undefined, true);
						remove('#toast_text,#vip_limit_content,#vip_limit_content>div.vip_limit_button_box,.vip_player_payment_toast,div.drm-error-layer,div.drm-error-layer div.note_normal_tit,div.preplay-layer>img[src*="/"],div.note_error_item_title');
						zddj();
					};
					function pcqq() {
						zdztsp();
						remove('.mod_vip_popup.wrapper,div[class*="vip"][class*="popup"][style*="fixed"],div[id*="vip"][id*="popup"][id*="fixed"],txpdiv.txp_alert_info txpdiv,div.wrapper.mod_vip_popup div.mod_hd,txpdiv.txp_ad_inner,#_vip_player_sec,txpdiv.txp_video_error,.content h1,txpdiv[data-role*="tips"][data-role*="text"],[data-role*="txp-ui-tips"]');
						zddj();
					};
					function pcmgtv() {
						zdztsp();
						remove('mango-control-wrap-left,mango-control-tip,.m-player-paytips-wrapper,mango-center-state-payment,mango-control-tip,[class*="player-paytips-locale"]');
						zddj();
					};
					function pciqiyi() {
						zdztsp();
						remove('.qy-player-vippay-popup,#flashbox>iqpdiv iqpdiv.iqp-bottom,#flashbox>iqpdiv iqpdiv.iqp-layer,[data-player-hook="error"],iqpspan');
						zddj();
					};
					function pctvsohu() {
						zdztsp();
						remove('#player_vipTips');
						zddj();
					};
					function pcfilmsohu() {
						zdztsp();
						remove('div.x-dash-tip-panel,[class="x-tip-btn x-tip-vip"]');
						zddj();
					};
					function pcle() {
						zdztsp();
						remove('div.playbox_vip_tip_bg.j-vipTip,div.hv_tip1.js-tip');
						zddj();
					};
					function pcpptv() {
						zdztsp();
						remove('.w-tips-content');
						zddj();
					};
					function pcyjlw() {
						zdztsp();
						setTimeout(function() {
							autoClickElement("div.sb-close");
						}, 1500);
						remove('div.sc-content.clearfix,.sc-content,div.pay-mod-notlogin>div.notlogin-login,#pDialog,div.hintInfo.memberTip.show');
						zddj();
					};
					function pcwasu() {
						zdztsp();
						remove('#flashContent ws-tipinfo');
						zddj();
					};
					function pcbilibili() {
						zdztsp();
						remove('#player_mask_module,.bilibili-player-video-toast-item,.mask-body,.mask-info,.twp-title');
						zddj();
					};
					function pctudou() {
						zdztsp();
						remove('div.information-tips,div.vip_info');
						zddj();
					};
					function pcixigua() {
						zdztsp();
						remove('span[class$="ips__gold"]');
						zddj();
					};
					function zdvip(ele) {
						if (!document.querySelector('div#vip_iframe__')) {
							for (i = 0; i < 1; i++) {
								if (i = 1) {
									try {
										if (obj.match(/^https?:\/\/v(?:-wb)?\.youku\.com\/v_show\/id_/)) {
											if ($("#toast_text:contains('试看')")[0] || $("#toast_text:contains('完整')")[0] || $("#toast_text:contains('购买')")[0]) {
												pcyouku();
												log("%c江小白-优酷会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($("#vip_limit_content:contains('试看')")[0] || $("#vip_limit_content:contains('完整')")[0] || $("#vip_limit_content:contains('购买')")[0]) {
												pcyouku();
												log("%c江小白-优酷会员自动解析-02-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($(".vip_player_payment_toast p:contains('试看')")[0] || $(".vip_player_payment_toast p:contains('完整')")[0] || $(".vip_player_payment_toast p:contains('购买')")[0]) {
												pcyouku();
												log("%c江小白-优酷会员自动解析-03-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if (!document.querySelector("#ykPlayer>div.youku-film-player>video") && !document.querySelector("div.youku-layer-logo") && document.querySelector('div.preplay-layer>img[src*=".ykimg.com/"][style^="display:"][style*="block"]')) {
												if ($("div.drm-error-layer div.note_normal_tit:contains('版权'):contains('加密'):contains('不支持')")[0] && document.querySelector('div.preplay-layer>img[src*="/"]') && $("div.note_error_item_title:contains('换'):contains('浏览器')")[0]) {
													pcyouku();
													log("%c江小白-优酷会员自动解析-04-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
												} else {}
											} else {}
										} else if (obj.match(/^https?:\/\/video\.tudou\.com\/v\//)) {
											if ($("div.information-tips:contains('看'):contains('会员')")[0]) {
												pctudou();
												log("%c江小白-土豆会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($("div.vip_info:contains('看'):contains('会员')")[0]) {
												pctudou();
												log("%c江小白-土豆会员自动解析-02-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else {}
										} else if (obj.match(/^https?:\/\/v\.qq\.com\/(?:x\/cover|variety\/p\/topic)\//)) {
											if ($("txpdiv.txp_alert_info txpdiv:contains('试看')")[0] && $("txpdiv.txp_alert_info txpdiv a:contains('会员')")[0]) {
												pcqq();
												log("%c江小白-腾讯会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if (document.querySelector("div.wrapper.mod_vip_popup") && $("div.wrapper.mod_vip_popup div.mod_hd>h1:contains('会员'):contains('看')")[0] && $("div.wrapper.mod_vip_popup div.mod_bd div.mod_pay a:contains('会员')")[0]) {
												pcqq();
												log("%c江小白-腾讯会员自动解析-02-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if (!document.querySelector("#video_scroll_wrap div.mod_episode") && $("txpdiv.txp_ad_inner txpdiv.txp_ad_control txpdiv.txp_ad_skip_text:contains('关闭'):contains('广告')")[0] && $("#_vip_player_sec a:contains('会员'):contains('看')")[0]) {
												let qqggbtn = document.querySelector("txpdiv.txp_ad_inner txpdiv.txp_ad_control button");
												if (qqggbtn) {
													qqggbtn.click();
													qqggbtn.remove();
													pcqq();
												} else {}
												log("%c江小白-腾讯会员自动解析-03-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if (!(document.querySelector("#video_scroll_wrap div.mod_episode") || $("#video_scroll_wrap>div.mod_text_tabs>a.tab_item.current:contains('往期')")[0]) && $("#_vip_player_sec a:contains('会员')")[0] && $("#_vip_player_sec a:contains('购买')")[0]) {
												pcqq();
												log("%c江小白-腾讯会员自动解析-04-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($("txpdiv.txp_video_error>txpdiv.txp_error_title>span:contains('版权'):contains('加密'):contains('不支持'):contains('播放')")[0] && $("txpdiv.txp_video_error>txpdiv.txp_error_code:contains('错误'):contains('反馈')")[0]) {
												pcqq();
												log("%c江小白-腾讯会员自动解析-05-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($(".content h1:contains('会员'):contains('超前'):contains('点播')")[0]) {
												pcqq();
												log("%c江小白-腾讯会员自动解析-06-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($('txpdiv[data-role*="tips"][data-role*="text"]:contains("试看"):contains("分钟")')[0]) {
												pcqq();
												log("%c江小白-腾讯会员自动解析-07-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($('[data-role*="txp-ui-tips"]:contains("版权"):contains("购买")')[0]) {
												pcqq();
												log("%c江小白-腾讯会员自动解析-08-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($('[data-role^="txp-ui-tips"]:contains("会员"):contains("看")')[0]) {
												pcqq();
												log("%c江小白-腾讯会员自动解析-09-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else {}
										} else if (obj.match(/^https?:\/\/(?:ww)?w\.mgtv\.com\/[a-z]\//)) {
											if ((mgzdgq == 1 || mgzdgq == 2) && document.querySelector(".m-player-h5-new .u-control-clarity .btn") && document.querySelector(".m-player-h5-new .u-control-clarity .btn").innerText.match(/^\s*?(?:自动|标清)/)) {
												if (mgzdgq == 1) {
													if (document.querySelector('a[data-name="超清"][data-purview="true"]')) {
														document.querySelector('a[data-name="超清"][data-purview="true"]').click();
														log("%c江小白-芒果自动选择超清-00-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
													} else if (document.querySelector('a[data-name="高清"][data-purview="true"]')) {
														document.querySelector('a[data-name="高清"][data-purview="true"]').click();
														log("%c江小白-芒果自动选择高清-00-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
													} else {}
												} else if (mgzdgq == 2) {
													if (document.querySelector('a[data-name="高清"][data-purview="true"]')) {
														document.querySelector('a[data-name="高清"][data-purview="true"]').click();
														log("%c江小白-芒果自动选择高清-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
													} else {}
												}
											} else if (mgzdgq == 0) {}
											if (vipzdjx == 2 && obj.match(/^https?:\/\/(?:ww)?w\.mgtv\.com\/b\//)) {
												if ($("div.control-tips-line>p:contains('费'):contains('看')")[0]) {
													pcmgtv();
													log("%c江小白-芒果TV会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
												} else if ($("mango-center-state>mango-center-state-error h2:contains('版权'):contains('限制')")[0] && $("mango-center-state>mango-center-state-error p:contains('扫码'):contains('看')")[0]) {
													pcmgtv();
													log("%c江小白-芒果TV会员自动解析-02-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
												} else if ($("mango-center-state div.m-player-paytips-title:contains('费'):contains('看')")[0] && $("mango-center-state div.m-player-paytips-buttons.onerow a:contains('费'):contains('看')")[0]) {
													pcmgtv();
													log("%c江小白-芒果TV会员自动解析-03-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
												} else if ($("mango-control-tip p:contains('看'):contains('分钟')")[0]) {
													pcmgtv();
													log("%c江小白-芒果TV会员自动解析-04-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
												} else if ($(".m-player-paytips-wrapper div.m-player-paytips-title:contains('会员'):contains('看')")[0]) {
													pcmgtv();
													log("%c江小白-芒果TV会员自动解析-05-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
												} else if ($("mango-center-state-payment:contains('购买')")[0]) {
													pcmgtv();
													log("%c江小白-芒果TV会员自动解析-06-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
												} else if ($("mango-control-tip:contains('完整')")[0]) {
													pcmgtv();
													log("%c江小白-芒果TV会员自动解析-07-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
												} else {}
											} else {}
										} else if (obj.match(/^https?:\/\/www\.iqiyi\.com\/(?:[av]_|kszt\/)/)) {
											if (document.querySelector("#flashbox>iqpdiv iqpdiv.iqp-bottom iqpspan") && document.querySelector("#flashbox>iqpdiv iqpdiv.iqp-bottom iqpspan>i") && document.querySelector("#flashbox>iqpdiv iqpdiv.iqp-bottom iqpspan>i+a")) {
												pciqiyi();
												log("%c江小白-爱奇艺会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if (document.querySelector("#flashbox>iqpdiv iqpdiv.iqp-layer.iqp-layer-error>iqpdiv") && document.querySelector("#flashbox>iqpdiv iqpdiv.iqp-layer.iqp-layer-error>iqpdiv>a") && document.querySelector("#rightPlayList>div.side-content>article a")) {
												pciqiyi();
												log("%c江小白-爱奇艺会员自动解析-02-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if (document.querySelector("div.qy-player-vippay-popup div.popup-main>p") && document.querySelector("div.qy-player-vippay-popup a.vippay-btn")) {
												pciqiyi();
												log("%c江小白-爱奇艺会员自动解析-03-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($("iqpspan:contains('试看')")[0] || $("iqpspan:contains('完整')")[0] || $("iqpspan:contains('开通')")[0] || $("iqpspan:contains('购买')")[0]) {
												pciqiyi();
												log("%c江小白-爱奇艺会员自动解析-04-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else {}
										} else if (obj.match(/^https?:\/\/tv\.sohu\.com\/v\//)) {
											if (!$("#player_vipTips:contains('以上画质')")[0] && $("#player_vipTips p:contains('会员'):contains('看')")[0]) {
												pctvsohu();
												log("%c江小白-搜狐电视会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else {}
										} else if (obj.match(/^https?:\/\/film\.sohu\.com\/album\//)) {
											if ($("div.x-dash-tip-panel>span:contains('看'):contains('分钟')")[0]) {
												pcfilmsohu();
												log("%c江小白-搜狐电影会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($('[class="x-tip-btn x-tip-vip"]:contains("购买")')[0]) {
												pcfilmsohu();
												log("%c江小白-搜狐电影会员自动解析-02-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else {}
										} else if (obj.match(/^https?:\/\/www\.le\.com\/ptv\/vplay\//)) {
											if ($("div.playbox_vip_tip_bg.j-vipTip:contains('会员'):contains('看')")[0]) {
												pcle();
												log("%c江小白-乐视会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($("div.hv_tip1.js-tip:contains('看'):contains('会员')")[0]) {
												pcle();
												log("%c江小白-乐视会员自动解析-02-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else {}
										} else if (obj.match(/^https?:\/\/v\.pptv\.com\/show\//)) {
											if ($(".w-tips-content span:contains('费'):contains('看')")[0]) {
												pcpptv();
												log("%c江小白-PPTV会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else {}
										} else if (obj.match(/^https?:\/\/vip\.1905\.com\/play\//)) {
											if ($("div.sb-toggle-card.card-pay.card-active:contains('费')")[0] && $("div.pay-mod-notlogin>div.notlogin-login:contains('会员'):contains('看')")[0]) {
												pcyjlw();
												log("%c江小白-1905会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if (document.querySelector("#pDialog") && $("div.sb-toggle-card.card-pay.card-active:contains('费')")[0] && $("#pSidebar>div.sb-content>div.sb-mod-pay p:contains('版权'):contains('二维码'):contains('下载'):contains('看')")[0]) {
												pcyjlw();
												log("%c江小白-1905会员自动解析-02-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if (!document.querySelector("div.sc-content.clearfix.hidden") && $("div.clearfix.rightCon_player>div.style_one.clearfix>p>a:contains('开通'):contains('会员')")[0] && $("div.sc-content.clearfix:contains('看'):contains('会员'):contains('完整')")[0]) {
												pcyjlw();
												log("%c江小白-1905会员自动解析-03-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											}
											if ($("div.hintInfo.memberTip.show:contains('费')")[0] || $("div.hintInfo.memberTip.show:contains('升级')")[0]) {
												pcyjlw();
												log("%c江小白-1905会员自动解析-04-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else {}
										} else if (obj.match(/^https?:\/\/www\.wasu\.cn\/.+?\/show\/id\//)) {
											if ($("#flashContent ws-tipinfo:contains('费'):contains('看')")[0]) {
												pcwasu();
												log("%c江小白-华数TV会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else {}
										} else if (obj.match(/^https?:\/\/www\.bilibili\.com\/bangumi\/play\//)) {
											if ($("#player_mask_module div.twp-title:contains('会员'):contains('看')")[0] && $("#player_mask_module div.twp-btns:contains('会员')")[0]) {
												pcbilibili();
												log("%c江小白-哔哩哔哩会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($(".bilibili-player-video-toast-item .video-float-hint-text:contains('会员'):contains('看')")[0]) {
												pcbilibili();
												log("%c江小白-哔哩哔哩会员自动解析-02-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($(".mask-info:contains('地区'):contains('无法')")[0]) {
												pcbilibili();
												log("%c江小白-哔哩哔哩会员自动解析-03-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else if ($(".twp-title:contains('会员')")[0]) {
												pcbilibili();
												log("%c江小白-哔哩哔哩会员自动解析-04-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else {}
										} else if (obj.match(/^https?:\/\/www\.ixigua\.com\/\d{10,}/)) {
											if ($('span[class$="ips__gold"]:contains("完整")')[0]) {
												pcixigua();
												log("%c江小白-西瓜视频会员自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
											} else {}
										} else {}
									} catch (e) {}
								}
							}
						} else {}
					}
				} else {
					function zdvip(ele) {
						if (!document.querySelector('div#vip_iframe__')) {
							for (i = 0; i < 1; i++) {
								if (i = 1) {
									try {
										if (document.querySelector("style#bxjjxbvipzdjx")) {
											document.querySelector("style#bxjjxbvipzdjx").remove();
											zddj();
										} else {}
									} catch (e) {}
								}
							}
						} else {}
					}
				}
			}
			document.onreadystatechange = function() {
				"complete" == document.readyState && setTimeout(function() {
					if (lkzdzt == 1) {
						(function() {
							let titleTime;
							let OriginTitile = document.title;
							document.addEventListener('visibilitychange', function() {
								let videoaobj = document.querySelector("video"), videobobj = document.querySelector('div#vip_iframe__');
								if (document.hidden && videoaobj && !videobobj) {
									videoaobj.pause();
									document.title = '自动暂停';
									clearTimeout(titleTime);
								} else if (videoaobj && !videobobj) {
									videoaobj.play();
									document.title = '恢复播放';
									titleTime = setTimeout(function() {
										document.title = OriginTitile;
									}, 1234);
								} else {}
							});
						})();
					} else if (lkzdzt == 0) {}
					if (pcliwaiobj) {
						(function() {
							let zdjkhttpsjk_counter = 0;
							let zdjkhttpsjk_jiankong = setInterval(function() {
								let zdjkhttpsjk_btn = document.querySelector("ul#httpsvipul>li:last-of-type");
								if (zdjkhttpsjk_btn) {
									try {
										$('ul#httpsvipul>li').click(function() {
											if (document.querySelector("ul#httpsvipul>li>span.wsjxbshhjd>a2") == null) {} else {
												let httpsjksz = document.querySelector("ul#httpsvipul>li>span.wsjxbshhjd>a2").textContent;
												if (!document.querySelector('ul#httpsvipul>li>span.wsjxbshhjd>a4').innerText.match(new RegExp("^\s*?跳\s*?-"))) {
													localStorage.setItem("httpsjk", httpsjksz)
												} else {}
											}
										})
									} catch (e) {
										return false
									}
									clearInterval(zdjkhttpsjk_jiankong);
									return false
								}++zdjkhttpsjk_counter;
								if (zdjkhttpsjk_counter > 20) {
									clearInterval(zdjkhttpsjk_jiankong);
									return false
								}
							}, 500)
						})();
					} else {} if (vipzdjx == 1 && jxbpcobj) {
						if (!document.querySelector('div#vip_iframe__')) {
							if (obj.match(/^https?:\/\/v\.youku\.com\/v_show\/id_/)) {
								zdztsp();
								autoClickElement("div.control-icon.control-play-icon.control-pause-icon>span.iconfont.icon-pause", undefined, true);
								zddj();
								log("%c江小白-优酷全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/v\.qq\.com\/x\/cover\//)) {
								zdztsp();
								zddj();
								log("%c江小白-腾讯全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/www\.mgtv\.com\/b\//)) {
								zdztsp();
								zddj();
								log("%c江小白-芒果TV全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/www\.iqiyi\.com\/(?:[av]_|kszt\/)/)) {
								zdztsp();
								zddj();
								log("%c江小白-爱奇艺全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/tv\.sohu\.com\/v\//)) {
								zdztsp();
								zddj();
								log("%c江小白-搜狐电视全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/film\.sohu\.com\/album\//)) {
								zdztsp();
								zddj();
								log("%c江小白-搜狐电影全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/www\.le\.com\/ptv\/vplay\//)) {
								zdztsp();
								zddj();
								log("%c江小白-乐视全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/v\.pptv\.com\/show\//)) {
								zdztsp();
								zddj();
								log("%c江小白-PPTV全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/vip\.1905\.com\/play\//)) {
								zdztsp();
								zddj();
								log("%c江小白-1905全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/www\.wasu\.cn\/Play\/show\/id\//)) {
								zdztsp();
								zddj();
								log("%c江小白-华数TV全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/www\.bilibili\.com\/bangumi\/play\//)) {
								zdztsp();
								zddj();
								log("%c江小白-哔哩哔哩全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/www\.fun\.tv\/vplay\/g-/)) {
								zdztsp();
								zddj();
								log("%c江小白-风行全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/www\.miguvideo\.com\/mgs\/website\/prd\/detail\.html\?cid=/)) {
								zdztsp();
								zddj();
								log("%c江小白-咪咕全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else if (obj.match(/^https?:\/\/www\.ixigua\.com\/\d{10,}/)) {
								zdztsp();
								zddj();
								log("%c江小白-西瓜视频全局自动解析-01-工作中", "border-left:5px solid #03A9F4;color:#03A9F4;padding:3px");
							} else {}
						}
					} else if (vipzdjx == 0) {}
					if (jxbpcobj && vipjxss == 1 && !tcdpaichuobj && !youtubespxzobj && !ttbkjjliobj) {
						(function() {
							let jxbzdwss = document.title.replace(/(?:动[漫画]|电(?:视剧|影)|综艺)\s*?_/, "").replace(/^动态漫画\s*?[\W_]\s*?/, "").replace(/(?:会员|升级|加长)\w*?\s*?版/, "").replace(/（[^）]+?）\s*?第/, "第").replace(/^(\W+?)\s*?（[^\w）:：]+?）\s*?([：:].*)$/, "$1$2").replace(/^([^：]+?)\s*?：(?:先导片|彩蛋|看点|花絮|预告|神剧亮了)\s*?$/, "$1").replace(/^([^\\u4e00-\\u9fa5a-z]+?)\s*?\d+?.*?\1\s*?第.+?$/i, "$1").replace(/^(?:\s*?[\-\—\_<《\(（]\s*?)?([^\s:：]+?)(?:\d{1,3}\s*?)?(?:\-|\—|\_|>|》|\)|）|:|：|\s+?).*?$/, "$1").replace(/^#([^\s]+?)\s*?\(\s*?[^\\u4e00-\\u9fa5a-z].*?$/i, "$1").replace(/^([^\\u4e00-\\u9fa5a-z\s:：\-]+?)[\(（:：]?第?\s*?\d+?\s*?[部季集话部期].*?$/i, "$1").replace(/^([^\-\s]+?)(?:\(|第)\s*?.{1,3}[部季集话部期].*?$/, "$1").replace(/^([^\\u4e00-\\u9fa5a-z]+?)(?:电视剧|剧集|电影|综艺|动漫)\W*?\s*?[\(（].*?$/i, "$1").replace(/^([^\.\_\-]+?)\.[_\-].*?$/, "$1").replace(/^([^:：\(]+?)。.*?$/, "$1").replace(/^([^\-\s]+?)—[^\\u4e00-\\u9fa5a-z]+?—.*?$/i, "$1").replace(/([^\\u4e00-\\u9fa5]+?)[a-zA-Z0-9]+?((?:\s+|$))/, "$1$2");
							let maomibtn = document.createElement("div");
							maomibtn.innerHTML = '<div class="maomibtn"><ul><li><a class="maomi">弹</a><ul><li id="jxbqyjxli"><hr><a href="https://gitee.com/q2257227289/00/raw/master/963540817-1.png" target="_blank" style="border-radius:1px;color:#000!important;box-shadow:inset rgba(255,254,255,.6) 0 0.3em 0.3em,inset rgba(0,0,0,.15) 0 -0.1em 0.3em,#d82661 0 0.1em 3px,#b7144a 0 0.3em 1px, rgba(0,0,0,.2) 0 0.5em 5px;background:0 0;font-weight:700;font-size:16px;text-decoration:none;background-color:#4CAF50;margin-top:1px;">\u53cb\u60c5\u8d5e\u52a9</a></li><br><li><a target="_blank" href="https://jq.qq.com/?_wv=1027&k=5fWKJJCJ"><img border="0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAWCAMAAAB37HsnAAACXlBMVEUVm+ZlxPTt8vsXoOkXnukUlOQpcqsZpO3+/v9Lo9Hm7vnx9fzg8PkSisvA4fMugLMUldvj6vXp7/o2re6h0uxK0vux2/JUteqi2vbd6Pbw+f0SjtLd5O5zwevR6faDyO3v0LQPiczf8PmBwuTV3OfqxKVMc5gTkdVAnM9SrNxBodWEzfTB5vlSpNDy17yeZEd7QCfr7vY5k8hMn8zR7Ps9i7ozodslnN1Wuu+8w+OBSDrz28PsyKqjblkMgsNbJRuGSSrEkW/e0ePh5/NWf6I0jcIZn+hGlcIynNRyncB0xvJyvORGs+5yuN5jm8O/iFhivOtOg2suhLsmpOphKB2XWzb348+lbk5zOive1etrMR3JlnLGzNZ2mLaa8f5tocdruZpz4/zM1N0Wxfj/4etCpdpKmcYwib9CkL/Q5/QilNInq+60eU2YWUOSXEqRy+rSq5W0fVWNqcJ3NCa1iXGpdmI1p+Xbs5aERC20lY3Nm3mvckiYYldWHhNYmcKTUzHn5uuLU0eMSjuaXj2qbl5tMyPdxLG2oJqasuG1dmLQv7alZlW0gmTPxsoZo/BxPjXUmWnoupW5zNyKttRjs5IUrfB0wKRjlLwOte//4/SU1fay4flkv/AjlM9osdfh19a93e6iz+apakLR4+3Bqai7v92Wu9a+m4UajNYsea6FPy3Eq540p+iixeBudmOknJP/8PJjPiddWkCsgnDQooNXd2HdzNn/29pzk3l5gGaAeHmLrKOkt8x7Uky0t5h3c3eFsdKXzvnlz7ONoK5JldpwqM9Tf59LeXm7u9K8//8lXEx1AAADhklEQVQ4y7WSB1cbRxDHJ6d1bn25u+i4O0lIQjUKkRBIigkdARJxqIaEDiE0O4l77733uDt2eu+9917sb+XZPWHLfrxn+4H/793d7Mzsb2dnDnyd8++JSt+E196gM+m+2ap7AZQKD8wgKs5Wy+dDqcRQqa2nGn49uefr/Yljc4QWH0G0IAipVVuOHh8+dXD39u1vDexBx9yh3/no6L7jBxp2JrrWrlix9Qa6pCQ/2eW6O/QCht6xct+B+premmTX2r6ulTfQfn9+cqXv+kkv4aTjHWjoL6PlWo6WyaY/NJURX3jmSB56/fq9ezfuqKk52HdoQ7LxFnQct8h8GXXrlr9cjiqvqrjS3b4WJeYrRx9cCP1jDonm0MSRvKpTvb31GyJrTgzufL+/bMvwNLqK/4ZVarsStdDd1GpJG20BUSyWXaJLLgYRKmgb1sqzQ+z1PcGkR+FZRBckGjYHygKbG+r7+2sHktNoUAxDkZ1qkei00A4H5WU7VGCfsFt0h3mi6sCTLng9ZgZEs9q6mYVObRusK6stqxvcVlsb2L+KoRfysLFazEPrNGrwslWDR4uoSIusPDXX68wE77iFfqIQSWsSEaw6kvgmUNe0+zBH25gcfhtD25wyW7lUvLrO3CqP+kM2wW/lGTab3bySTnuKg2Z1MAjoY+iCgoLXNzZF6iJN9QOnTzf2nUQHXUiY3N2EoYlTxsUrdAmB1XG02qnOorJBDBYgOm3HN2v2ZULMar6VPG6hpXUfj4yMHP4peeZMsvFzhubRKqGSCJty6A53GAiplEsIsS8tryI9caGCVAhxnXSUL7UTMhXKpC9dvsoa8gVw9POFkiSt89JDTceo9/dA5ETjV5OSxNE9chh66CcqGzxxusO4n8ASt4sQj4E+RwwItLCosQwjE39mYGpxkDfEfh09OnqWan9o9Ozo33/99uPwZ4gGVJGvklIV1E4lGtLlsB24YnIJQLESC/k2saVH6aQOZgTZHBcDmNVW3nPwWKGkNZ9rTbWOtWqt55ovXhz/4UvNQtsVUBQPeOzcypFh2lrmoLSNp8V8lOrI/C59iaHfvQk9tujFRf/iM/bf+Pj589/m0LeRR8kdMk9RFHaEB314obQVfoqjf2l+OKf/n0T9fGfo28hCex9CTT6NmmSWd47Quz6VJE3TslkvVzab1TQc47zZ6oMP4e1dD86k+2et964Bmu3GbSXsAFEAAAAASUVORK5CYII=" style="width:101%;height:100%;"></a></li><li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=963540817&site=qq&menu=yes"><img border="0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAWCAMAAACynuG2AAACClBMVEWFzvGs4vun4v6s5P4fSV2p4v6Z1vRqvu625/4LMkWc3v6v5P2Y2vqa3fyx5f3I7f+g2vao3fad2PWj4P256P+W1vSS0/Of4P4VPVGv3/ak4f6z5v6p3/gpVGmj2vVGdo2s3vaX2fiV1/au4vuy4PbB6/+T1fWs3/in3vi15fz///+Hw+AgHSe86f+w5Pyc1/Sg3/2i3Piu5f4yX3U8aoFkmrOq4PqU1POm4Pyx4fltwO9bjaak2/XG6vu14fa04/keSF3F7P/C5vh7yPCk3fe85PeSyOOq3faa2fdXi6N3r8mLxuO54veg3fqy5f1il7FpmrKEu9Zgj6Z0xO+BzPGd2vjA5fdyq8am2/b09/mp3PSk3vmj3vud3fv6+vomIipVg5qx5v6Ny+nNKBlto74/RFArKziY0euW1PNPgJlglrB9uNS6dDrp7fGNscVba3o9O0jQfCn8SCjEwLsCAgJ+ssqBoLOS0O01Mz3OjDDyFA6KMyqgGA7qTjmp1euukHT7hwSZKRT7uxRmn7pSYG3O8P9MLSXoOCHiop5vhZi6MiNne4/c5e73MxTBsZvGx8nO1+CwHRPCmm7/3FD5X0PNhEP2qQT/0y7/zRdela+cxdqWelrnyshFT1ji4uOy1ertjX3t8vaJjp2igUy1ijbcmTV2Z1355uazs7bfpUzmrlC5e1D/lwToiAiDw+jaAAADxklEQVQ4y63S6VfaWBjAYZiJTq9aC7VgGIlBoIIBt0kAY1TSahkhRYTqIGjEAuq4L3Xfqna673uns+/7/zjvTQh42q/93ZyTb89533uujtF9uMC6dPPMu13QOn/hfKlmfAqd0zpVqrlPpxu62XzqZHVqV6Hqz3AfFyqDPlL6FFcD1ZaqqKiobQbtTIFZXMp4p75abMLWwEA1VIl7D9MoqK1Nk5Tqitq5+8tTXmhyo4hVn8Q0rQPStDZcbaCiqA1p2uLW5DVmjbnm/e4ttloqS4OVFcJQByA+SpUighyRZB8hy77TSgNDul5Fq1uaWmbW7q4x3szSQGHHysoEgRA1iKUJhBAbrwn5BuGQgg9qkwjBR0gCJbGcqlVrWhPsqM6WmbzaouRwTKCEXj+Bkv4yiljvaGXJUJ4oFZDjlCxEWDY/o2KnW3p1vd1NkOWW9783r18fvzrMbKmUwxFCg3qIJsoGUQhvSdA1Y2MhOjomcVJUlnyxTVmOkTQRA6kKKmo/3Hu6d3j86t/Dvb17PKYcen0C6fV+v38dxTlWuTOBBIwQotHoDBGJxmnkiVFkLJ8XOWxVNRS1n3M7ud2jo6OnuZ3duyqmTxAY84fQOkuDNTrqQ2NxggNNIjgyInuQZ5b2xMSqzdmidqW7KRjcmNrdebj6YnX14e1cZmsDL6j3J5Dfb7Va4yjEse5RSCCilDANDk3JkfAwaGG6Kiw2zFENkN3uwFowGFzyLt/J5fZf/Hjn2wV4wgrmgnsDzEoTbri3vr6+doJubzcYBCJGzg1DoPVTNzgyKc7alfgrWOP5jPf3P27vp8bHmdTCLe+y3uVygTNBJtzuCZQ39lFUpH2aJSWDwTA8zKKZfpwHhcPJJMlyX9tPakGH9/4v46v7DMOMpxa+WZx0qZo1QeL35oa5aHhvXBywzRhLciQ9p2iiJylyWZHOFrXObp7nDw5+fZIax9iD77fTYNlsVqvbaDROU0QEduyqr4+LlGTwsKQY9pz10KQ40z9HJSlEm+wekbxhtzc2Nro6QXM6ef7R9l9PFlKpnx48/m3bBn0OGUdG0iMjAkI0YAbDNIdQLBw5i2vNhmfLy8tN4aTJZApkw1mwAmasXQTMsvL8zctnfz5+9Pfx85UVI1BpgHBdXUCBhVMcqFzJpBaAzGb4zGabqln46/Pz8/9cP4DfystnMJaKdb1rgVb+nhVQqILW3WOxWHiX02Kx2dLpNJZwClavVLBaW0uDQV9CRQgX6AHN0n2x1BeFLmld1urRcmpZitmUnOZOHfPJh4v5HwOrLNQznBGfAAAAAElFTkSuQmCC" style="width:101%;height:100%;"></a></li><li><a href="http://www.zuidazy4.com/index.php?m=vod-search&wd=' + jxbzdwss + '" target="_blank">最大网</a></li><li><a href="http://www.bumimi.top/search/' + jxbzdwss + '" target="_blank">布米米</a></li>' + '<li><a href="https://www.cupfox.com/search?key=' + encodeURIComponent(jxbzdwss) + '" target="_blank">茶杯狐</a></li>' + '<li><a href="https://www.jiaomh.com/search.php?searchword=' + encodeURIComponent(jxbzdwss) + '" target="_blank">麻花影视</a></li>' + '<li><a href="http://ivi.bupt.edu.cn/" target="_blank" style="background-color:yellow;">电视直播</a></li>' + '<li><a href="http://api.iixxzyapi.com/" target="_blank" style="background-color:yellow;">福利资源</a></li>' + '<li><a href="http://www.asys.vip/kuaishou/" target="_blank" style="background-color:yellow;">随机姐姐</a></li>' + '<li><a style="background-color:darksalmon;" href="javascript:(function(){try{if(!/(?:Firefox|Opera)/i.test(navigator.userAgent)){alert(\'快捷键 Ctrl + Alt + / 功能是：按此快捷键可以 恢复脚本默认设置 并刷新当前网页，\\n快捷键 Alt + / 功能是：按此快捷键可以快速 显示图标 或者 隐藏图标，\\n快捷键 Ctrl+ / 功能是：在 Youtube 网站播放视频的时候，按此快捷键可以下载视频，\\n快捷键 / 功能是：手动解析当前视频，\\n快捷键 , 功能是：使用--布米米资源--搜索当前视频资源，\\n快捷键 . 功能是：使用--最大网资源--搜索当前视频资源，\\n快捷键 ; 功能是：显示--接口列表，\\n快捷键 \\\' 功能是：普通视频原始全屏，\\n快捷键 \\\\ 功能是：普通视频开启画中画，\\n快捷键 - 功能是：使用随机接口弹窗解析，\\n快捷键 = 功能是：使用随机接口原网页解析。\');}else{alert(\'快捷键 Ctrl + Alt + / 功能是：按此快捷键可以 恢复脚本默认设置 并刷新当前网页，\\n快捷键 Alt + / 功能是：按此快捷键可以快速 显示图标 或者 隐藏图标，\\n快捷键 Ctrl+ / 功能是：在 Youtube 网站播放视频的时候，按此快捷键可以下载视频，\\n快捷键 / 功能是：手动解析当前视频，\\n快捷键 , 功能是：使用--布米米资源--搜索当前视频资源，\\n快捷键 . 功能是：使用--最大网资源--搜索当前视频资源，\\n快捷键 ; 功能是：显示--接口列表，\\n快捷键 - 功能是：使用随机接口弹窗解析，\\n快捷键 = 功能是：使用随机接口原网页解析。\');}}catch(e){return false;}})();">快捷键</a></li>' + '<hr><li id="vipjxtbli" style="display:none;"><a id="vipjxtb" style="color:beige;">显示图标</a></li><li id="zdwbfobjli" style="display:none;"><a id="zdwbfobj" style="color:beige;"></a></li><li id="mgzdgqli" style="display:none;"><a id="mgzdgq" style="color:beige;">超清画质</a></li><li id="gbdmobjli" style="display:none;"><a id="gbdmobj" style="color:beige;">关闭弹幕</a></li><li id="vipzdjxli" style="display:none;"><a id="vipzdjx" style="color:beige;">解析会员</a></li><li id="vipzdjxhyli" style="display:none;"><a id="vipzdjxhy" style="color:beige;">解析会员</a></li><li id="zdwbffsli" style="display:none;"><a id="zdwbffs" style="color:beige;">直链播放</a></li><li id="zdwbyjkli" style="display:none;"><a id="zdwbyjk" style="color:beige;">默认接口</a></li><li id="lkzdztbyli" style="display:none;"><a id="lkzdztby" style="color:beige;">自动暂停</a></li></ul></li></ul></div>';
							document.body.appendChild(maomibtn);
							let style = document.createElement("style");
							style.type = "text/css";
							style.innerHTML = ".maomibtn{font-family:arial,sans-serif;padding:0;margin:50px;z-index:963540817;position:absolute;top:30px;transform:scale(0.8);right:-45px;font-size:30px}.maomibtn ul{padding:0;margin:0;list-style-type:none}.maomibtn ul li{float:left;position:relative;list-style-type:none}.maomibtn ul li a,.maomibtn ul li a:visited{display:block;text-align:center;text-decoration:none;width:100px;height:30px;color:#000;border:2px solid #4CAF50;background:#c9c9a7;line-height:30px;font-size:20px}.maomibtn ul li ul{display:none}.maomibtn ul li:hover ul{display:block;position:absolute;top:30px;right:0;width:105px}.maomibtn ul li:hover ul li a{display:block;background:#faeec7;color:#000}.maomibtn ul li:hover ul li a:hover{background:#dfc184!important;color:#000!important}a.maomi{width:25px!important;height:auto!important;border-radius:10px}";
							document.querySelector(".maomibtn").appendChild(style);
							function dssxbobj() {
								setTimeout(function() {
									window.location.reload();
								}, 666);
							};
							(function() {
								if (localStorage.getItem("lkzdzt") == '0') {
									document.getElementById('lkzdztby').innerText = '暂停默认';
									document.querySelector("#lkzdztby").style.backgroundColor = '#268dcd';
								} else if (localStorage.getItem("lkzdzt") == '1') {
									document.getElementById('lkzdztby').innerText = '自动暂停';
									document.querySelector("#lkzdztby").style.backgroundColor = '#005200';
								}
								document.getElementById('lkzdztby').onclick = function() {
									if (this.innerHTML == '暂停默认') {
										localStorage.setItem("lkzdzt", "1");
										this.innerText = '自动暂停';
										document.querySelector("#lkzdztby").style.backgroundColor = '#005200';
										dssxbobj();
									} else if (this.innerHTML == '自动暂停') {
										localStorage.setItem("lkzdzt", "0");
										this.innerText = '暂停默认';
										document.querySelector("#lkzdztby").style.backgroundColor = '#268dcd';
										dssxbobj();
									}
								}
							})();
							(function() {
								if (localStorage.getItem("mgzdgq") == '0') {
									document.getElementById('mgzdgq').innerText = '默认画质';
									document.querySelector("#mgzdgq").style.backgroundColor = '#268dcd'
								} else if (localStorage.getItem("mgzdgq") == '1') {
									document.getElementById('mgzdgq').innerText = '强制超清';
									document.querySelector("#mgzdgq").style.backgroundColor = '#005200'
								} else if (localStorage.getItem("mgzdgq") == '2') {
									document.getElementById('mgzdgq').innerText = '强制高清';
									document.querySelector("#mgzdgq").style.backgroundColor = 'brown'
								}
								document.getElementById('mgzdgq').onclick = function() {
									if (this.innerHTML == '默认画质') {
										localStorage.setItem("mgzdgq", "1");
										this.innerText = '强制超清';
										document.querySelector("#mgzdgq").style.backgroundColor = '#005200';
										if (document.querySelector('a[data-name="超清"][data-purview="true"]')) {
											document.querySelector('a[data-name="超清"][data-purview="true"]').click()
										} else if (document.querySelector('a[data-name="高清"][data-purview="true"]')) {
											document.querySelector('a[data-name="高清"][data-purview="true"]').click()
										} else {
											document.querySelector('a[data-name="高清"][data-purview="true"]').click()
										}
										dssxbobj()
									} else if (this.innerHTML == '强制超清') {
										localStorage.setItem("mgzdgq", "2");
										this.innerText = '强制高清';
										document.querySelector("#mgzdgq").style.backgroundColor = 'brown';
										if (document.querySelector('a[data-name="高清"][data-purview="true"]')) {
											document.querySelector('a[data-name="高清"][data-purview="true"]').click()
										} else {
											document.querySelector('a[data-name="高清"][data-purview="true"]').click()
										}
										dssxbobj()
									} else if (this.innerHTML == '强制高清') {
										localStorage.setItem("mgzdgq", "0");
										this.innerText = '默认画质';
										document.querySelector("#mgzdgq").style.backgroundColor = '#268dcd';
										dssxbobj()
									}
								}
							})();
							(function() {
								if (localStorage.getItem("vipzdjx") == '0') {
									document.getElementById('vipzdjx').innerText = '手动解析';
									document.querySelector("#vipzdjx").style.backgroundColor = '#268dcd';
								} else if (localStorage.getItem("vipzdjx") == '1') {
									document.getElementById('vipzdjx').innerText = '解析全部';
									document.querySelector("#vipzdjx").style.backgroundColor = '#005200';
								} else if (localStorage.getItem("vipzdjx") == '2') {
									document.getElementById('vipzdjx').innerText = '解析会员';
									document.querySelector("#vipzdjx").style.backgroundColor = 'brown';
								}
								document.getElementById('vipzdjx').onclick = function() {
									if (this.innerHTML == '手动解析') {
										localStorage.setItem("vipzdjx", "1");
										this.innerText = '解析全部';
										document.querySelector("#vipzdjx").style.backgroundColor = '#005200';
										dssxbobj();
									} else if (this.innerHTML == '解析全部') {
										localStorage.setItem("vipzdjx", "2");
										this.innerText = '解析会员';
										document.querySelector("#vipzdjx").style.backgroundColor = 'brown';
									} else if (this.innerHTML == '解析会员') {
										localStorage.setItem("vipzdjx", "0");
										this.innerText = '手动解析';
										document.querySelector("#vipzdjx").style.backgroundColor = '#268dcd';
									}
								};
							})();
							(function() {
								if (localStorage.getItem("vipzdjx") == '0') {
									document.getElementById('vipzdjxhy').innerText = '手动解析';
									document.querySelector("#vipzdjxhy").style.backgroundColor = '#268dcd';
								} else if (localStorage.getItem("vipzdjx") == '2') {
									document.getElementById('vipzdjxhy').innerText = '解析会员';
									document.querySelector("#vipzdjxhy").style.backgroundColor = '#49a34c';
								}
								document.getElementById('vipzdjxhy').onclick = function() {
									if (this.innerHTML == '手动解析') {
										localStorage.setItem("vipzdjx", "2");
										this.innerText = '解析会员';
										document.querySelector("#vipzdjxhy").style.backgroundColor = '#49a34c';
										dssxbobj();
									} else if (this.innerHTML == '解析会员') {
										localStorage.setItem("vipzdjx", "0");
										this.innerText = '手动解析';
										document.querySelector("#vipzdjxhy").style.backgroundColor = '#268dcd';
										dssxbobj();
									}
								}
							})();
							(function() {
								if (localStorage.getItem("zdwbfobj") == '0') {
									document.getElementById('zdwbfobj').innerText = '开启播放';
									document.querySelector("#zdwbfobj").style.backgroundColor = '#268dcd'
								} else if (localStorage.getItem("zdwbfobj") == '1') {
									document.getElementById('zdwbfobj').innerText = '关闭播放';
									document.querySelector("#zdwbfobj").style.backgroundColor = '#005200'
								}
								document.getElementById('zdwbfobj').onclick = function() {
									if (this.innerHTML == '关闭播放') {
										localStorage.setItem("zdwbfobj", "0");
										this.innerText = '开启播放';
										document.querySelector("#zdwbfobj").style.backgroundColor = '#005200';
										location.reload()
									} else if (this.innerHTML == '开启播放') {
										localStorage.setItem("zdwbfobj", "1");
										this.innerText = '关闭播放';
										document.querySelector("#zdwbfobj").style.backgroundColor = '#268dcd';
										location.reload()
									}
								}
							})();
							(function() {
								if (localStorage.getItem("gbdmobj") == '0') {
									document.getElementById('gbdmobj').innerText = '默认弹幕';
									document.querySelector("#gbdmobj").style.backgroundColor = '#268dcd'
								} else if (localStorage.getItem("gbdmobj") == '1') {
									document.getElementById('gbdmobj').innerText = '关闭弹幕';
									document.querySelector("#gbdmobj").style.backgroundColor = '#005200'
								}
								document.getElementById('gbdmobj').onclick = function() {
									if (this.innerHTML == '关闭弹幕') {
										localStorage.setItem("gbdmobj", "0");
										this.innerText = '默认弹幕';
										document.querySelector("#gbdmobj").style.backgroundColor = '#005200';
										dssxbobj()
									} else if (this.innerHTML == '默认弹幕') {
										localStorage.setItem("gbdmobj", "1");
										this.innerText = '关闭弹幕';
										document.querySelector("#gbdmobj").style.backgroundColor = '#268dcd';
										dssxbobj()
									}
								}
							})();
							(function() {
								if (localStorage.getItem("zdwbffs") == '0') {
									document.getElementById('zdwbffs').innerText = '直链播放';
									document.querySelector("#zdwbffs").style.backgroundColor = '#268dcd'
								} else if (localStorage.getItem("zdwbffs") == '1') {
									document.getElementById('zdwbffs').innerText = '解析播放';
									document.querySelector("#zdwbffs").style.backgroundColor = '#005200'
								}
								document.getElementById('zdwbffs').onclick = function() {
									if (this.innerHTML == '直链播放') {
										localStorage.setItem("zdwbffs", "1");
										this.innerText = '解析播放';
										document.querySelector("#zdwbffs").style.backgroundColor = '#005200';
										setTimeout(function() {
											window.location.reload();
										}, 666)
									} else if (this.innerHTML == '解析播放') {
										localStorage.setItem("zdwbffs", "0");
										this.innerText = '直链播放';
										document.querySelector("#zdwbffs").style.backgroundColor = '#268dcd';
										setTimeout(function() {
											window.location.reload();
										}, 666)
									}
								}
							})();
							(function() {
								if (localStorage.getItem("zdwbyjk") == '0') {
									document.getElementById('zdwbyjk').innerText = '默认接口';
									document.querySelector("#zdwbyjk").style.backgroundColor = '#268dcd'
								} else if (localStorage.getItem("zdwbyjk") == '1') {
									document.getElementById('zdwbyjk').innerText = '备用接口';
									document.querySelector("#zdwbyjk").style.backgroundColor = '#005200'
								}
								document.getElementById('zdwbyjk').onclick = function() {
									if (this.innerHTML == '默认接口') {
										localStorage.setItem("zdwbyjk", "1");
										this.innerText = '备用接口';
										document.querySelector("#zdwbyjk").style.backgroundColor = '#005200';
										setTimeout(function() {
											window.location.reload();
										}, 666)
									} else if (this.innerHTML == '备用接口') {
										localStorage.setItem("zdwbyjk", "0");
										this.innerText = '默认接口';
										document.querySelector("#zdwbyjk").style.backgroundColor = '#268dcd';
										setTimeout(function() {
											window.location.reload();
										}, 666)
									}
								}
							})();
							(function() {
								function vipjxtbxs() {
									document.head.insertAdjacentHTML("beforeend", '<style class="viptb-jiangxiaobai" media="screen">div#jxbhttps,div.maomibtn{opacity:1}</style>');
								};
								function vipjxtbgb() {
									document.head.insertAdjacentHTML("beforeend", '<style class="viptb-jiangxiaobai" media="screen">div#jxbhttps,div.maomibtn{opacity:0}div#jxbhttps:hover,div.maomibtn:hover{opacity:1}</style>');
								};
								function vipjxtbzs() {
									document.head.insertAdjacentHTML("beforeend", '<style class="viptb-jiangxiaobai" media="screen">div#jxbhttps{opacity:1}div.maomibtn{opacity:0}div.maomibtn:hover{opacity:1}</style>')
								};
								if (localStorage.getItem("vipjxtb") == '0') {
									document.getElementById('vipjxtb').innerText = '关闭图标';
									document.querySelector("#vipjxtb").style.backgroundColor = '#268dcd'
								} else if (localStorage.getItem("vipjxtb") == '1') {
									document.getElementById('vipjxtb').innerText = '显示图标';
									document.querySelector("#vipjxtb").style.backgroundColor = '#005200'
								} else if (localStorage.getItem("vipjxtb") == '2' && (pcliwaiobj)) {
									document.getElementById('vipjxtb').innerText = '只显钻石';
									document.querySelector("#vipjxtb").style.backgroundColor = '#0087ff'
								} else if (localStorage.getItem("vipjxtb") == '2' && ttblwobj) {
									document.getElementById('vipjxtb').innerText = '显示图标';
									document.querySelector("#vipjxtb").style.backgroundColor = '#005200'
								}
								document.getElementById('vipjxtb').onclick = function() {
									if (pcliwaiobj || ttblwobj) {
										if (this.innerHTML == '关闭图标') {
											if (pcliwaiobj) {
												localStorage.setItem("vipjxtb", "2");
												this.innerText = '只显钻石';
												document.querySelector("#vipjxtb").style.backgroundColor = '#0087ff';
												vipjxtbzs()
											} else if (ttblwobj) {
												localStorage.setItem("vipjxtb", "1");
												this.innerText = '显示图标';
												document.querySelector("#vipjxtb").style.backgroundColor = '#005200';
												vipjxtbxs()
											}
										} else if (this.innerHTML == '只显钻石') {
											localStorage.setItem("vipjxtb", "1");
											this.innerText = '显示图标';
											document.querySelector("#vipjxtb").style.backgroundColor = '#005200';
											vipjxtbxs()
										} else if (this.innerHTML == '显示图标') {
											localStorage.setItem("vipjxtb", "0");
											this.innerText = '关闭图标';
											document.querySelector("#vipjxtb").style.backgroundColor = '#268dcd';
											vipjxtbgb()
										}
									} else {
										if (this.innerHTML == '关闭图标') {
											localStorage.setItem("vipjxtb", "1");
											this.innerText = '显示图标';
											document.querySelector("#vipjxtb").style.backgroundColor = '#005200';
											vipjxtbxs()
										} else if (this.innerHTML == '显示图标') {
											localStorage.setItem("vipjxtb", "0");
											this.innerText = '关闭图标';
											document.querySelector("#vipjxtb").style.backgroundColor = '#268dcd';
											vipjxtbgb()
										}
									}
								}
							})()
						})();
					} else if (vipjxss == 0) {}
				}, 666);
			};
			if (vipjxtb == 0) {
				try {
					function viptbjiangxiaobaia() {
						document.head.insertAdjacentHTML("beforeend", '<style class="viptb-jiangxiaobaia" media="screen">div#jxbhttps,div.maomibtn{opacity:0}div#jxbhttps:hover,div.maomibtn:hover{opacity:1}</style>')
					};
					try {
						viptbjiangxiaobaia()
					} catch (err) {
						viptbjiangxiaobaia()
					};
					function viptbjiangxiaobaiadsq() {
						if (!document.querySelector("head>style.viptb-jiangxiaobaia")) {
							viptbjiangxiaobaia()
						} else {}
					};
					setTimeout(viptbjiangxiaobaiadsq, 3333)
				} catch (e) {
					function viptbjiangxiaobaia() {
						document.head.insertAdjacentHTML("beforeend", '<style class="viptb-jiangxiaobaia" media="screen">div#jxbhttps,div.maomibtn{opacity:0}div#jxbhttps:hover,div.maomibtn:hover{opacity:1}</style>')
					};
					try {
						viptbjiangxiaobaia()
					} catch (err) {
						viptbjiangxiaobaia()
					};
					function viptbjiangxiaobaiadsq() {
						if (!document.querySelector("head>style.viptb-jiangxiaobaia")) {
							viptbjiangxiaobaia()
						} else {}
					};
					setTimeout(viptbjiangxiaobaiadsq, 3333)
				}
			} else if (vipjxtb == 2) {
				try {
					function viptbjiangxiaobaib() {
						document.head.insertAdjacentHTML("beforeend", '<style class="viptb-jiangxiaobaib" media="screen">div.maomibtn{opacity:0}div.maomibtn:hover{opacity:1}</style>')
					};
					try {
						viptbjiangxiaobaib()
					} catch (err) {
						viptbjiangxiaobaib()
					};
					function viptbjiangxiaobaibdsq() {
						if (!document.querySelector("head>style.viptb-jiangxiaobaib")) {
							viptbjiangxiaobaib()
						} else {}
					};
					setTimeout(viptbjiangxiaobaibdsq, 3333)
				} catch (e) {
					function viptbjiangxiaobaib() {
						document.head.insertAdjacentHTML("beforeend", '<style class="viptb-jiangxiaobaib" media="screen">div.maomibtn{opacity:0}div.maomibtn:hover{opacity:1}</style>')
					};
					try {
						viptbjiangxiaobaib()
					} catch (err) {
						viptbjiangxiaobaib()
					};
					function viptbjiangxiaobaibdsq() {
						if (!document.querySelector("head>style.viptb-jiangxiaobaib")) {
							viptbjiangxiaobaib()
						} else {}
					};
					setTimeout(viptbjiangxiaobaibdsq, 3333)
				}
			} else if (vipjxtb == 1) {}
			if ((pcliwaiobj && !ttbkjjliobj) || document.querySelector("style#wsjxbshhjd") || youtubespxzobj || mmkjjtjobj) {
				function qkjbsz() {
					(function() {
						try {
							localStorage.clear();
							location.reload();
						} catch (e) {
							return false;
						}
					})();
				};
				function tbxsyc() {
					if (!youtubespxzobj) {
						(function() {
							try {
								document.querySelector("div.maomibtn li#vipjxtbli>a#vipjxtb").click();
							} catch (e) {
								return false;
							}
						})();
					} else {}
				};
				function ytbspxz() {
					if (youtubespxzobj && !mmkjjtjobj) {
						if (document.querySelector("#upnext") && document.querySelector("#autoplay")) {
							(function() {
								try {
									if (document.getElementsByTagName("video")[0]) {
										var v_player = document.getElementsByTagName("video");
										for (var i = 0, length = v_player.length; i < length; i++) {
											v_player[i].pause()
										}
									} else if (document.querySelectorAll("embed,video,object,iframe[frameborder]")[0]) {
										var v_player = document.querySelectorAll("embed,video,object,iframe[frameborder]");
										for (var i = 0, length = v_player.length; i < length; i++) {
											v_player[i].parentNode.removeChild(v_player[i])
										}
									};
									window.open("https://blueconvert.com/?id=" + window.location.href.replace(/^.+?\/watch\?v=(.+)$/, "$1"), "_bkmk_popup", "allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left=" + (screen.availWidth - 1050) / 2 + ",top=" + (screen.availHeight - 600) / 2);
								} catch (e) {
									return false;
								}
							})();
						} else {}
					} else {}
				};
				function zdbmm() {
					if (!youtubespxzobj && !mmkjjtjobj) {
						(function() {
							try {
								window.open(document.querySelector('div.maomibtn>ul>li>ul>li>a[href*="//www.bumimi"]').href, "_blank");
								window.close();
							} catch (e) {
								return false;
							}
						})();
					} else {}
				};
				function zdzdw() {
					if (!youtubespxzobj && !mmkjjtjobj) {
						(function() {
							try {
								window.open(document.querySelector('div.maomibtn>ul>li>ul>li>a[href*="//www.zuidazy"]').href, "_blank");
								window.close();
							} catch (e) {
								return false;
							}
						})();
					} else {}
				};
				function sddj() {
					if (!document.querySelector("style#wsjxbshhjd") && !youtubespxzobj && pcliwaiobj && !mmkjjtjobj) {
						(function() {
							try {
								$(function() {
									var qjsdjk_counter = 0;
									var qjsdjk_jiankong = setInterval(function() {
										var qjsdjk_btn = $("ul#httpsvipul>li");
										if (qjsdjk_btn) {
											zddjjk();
											clearInterval(qjsdjk_jiankong);
											return false
										}++qjsdjk_counter;
										if (qjsdjk_counter > 50) {
											clearInterval(qjsdjk_jiankong);
											return false
										}
									}, 500)
								})
							} catch (e) {
								return false;
							}
						})();
					} else {}
				};
				function ywyjklb() {
					if (!document.querySelector("style#wsjxbshhjd") && !youtubespxzobj && !mmkjjtjobj) {
						(function() {
							try {
								document.querySelector("div#jxbhttps").click();
							} catch (e) {
								return false;
							}
						})();
					} else {}
				};
				function pyspqp() {
					if (!jxbpclwobj && !document.querySelector("style#wsjxbshhjd") && !youtubespxzobj) {
						(function() {
							try {
								let element = document.querySelector("video");
								if (element.requestFullScreen) {
									element.requestFullScreen()
								} else if (element.mozRequestFullScreen) {
									element.mozRequestFullScreen()
								} else if (element.webkitRequestFullScreen) {
									element.webkitRequestFullScreen()
								}
							} catch (e) {
								return false;
							}
						})();
					} else {}
				};
				function ptsphzh() {
					if (!jxbpclwobj && !document.querySelector("style#wsjxbshhjd")) {
						(function() {
							try {
								(async() => {
									const videos = Array.from(!document.querySelector("#vip_iframe__") && document.querySelectorAll('video')).filter(video => video.readyState != 0).filter(video => video.disablePictureInPicture == false).sort((v1, v2) => {
										const v1Rect = v1.getClientRects()[0];
										const v2Rect = v2.getClientRects()[0];
										return ((v2Rect.width * v2Rect.height) - (v1Rect.width * v1Rect.height))
									});
									if (videos.length === 0) return;
									const video = videos[0];
									if (video.hasAttribute('__pip__')) {
										await document.exitPictureInPicture()
									} else {
										await video.requestPictureInPicture();
										video.setAttribute('__pip__', true);
										video.addEventListener('leavepictureinpicture', event => {
											video.removeAttribute('__pip__')
										}, {
											once: true
										})
									}
								})();
							} catch (e) {
								return false;
							}
						})();
					} else {}
				};
				function sjsyjkjxa() {
					if (!document.querySelector("style#wsjxbshhjd") && !youtubespxzobj && !mmkjjtjobj) {
						(function() {
							try {
								function createRandom(num, from, to) {
									let arr = [];
									for (let i = from; i <= to; i++) arr.push(i);
									arr.sort(function() {
										return 0.5 - Math.random()
									});
									arr.length = num;
									return arr
								}
								function createRandom2(num, from, to) {
									let arr = [];
									let json = {};
									while (arr.length < num) {
										let ranNum = Math.ceil(Math.random() * (to - from)) + from;
										if (!json[ranNum]) {
											json[ranNum] = 1;
											arr.push(ranNum)
										}
									}
									return arr
								}
								localStorage.setItem("httpsjk", createRandom2(1, document.querySelectorAll("ul#httpsvipul>li").length - 16, document.querySelectorAll("ul#httpsvipul>li").length - 1));
								setTimeout(function() {
									try {
										$("ul#httpsvipul>li>span").css("backgroundImage", "");
										document.querySelector("ul#httpsvipul>li:nth-child(" + localStorage.getItem("httpsjk") + ")>span").style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAMAAACHgmeRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURX//AIH8BobyGoT/CZP/J4nxIIL5C5T8LJj0PW2hJpgAAAAeSURBVAjXY2BlY4QABiZGBiigNouVGQoYONhZIAAAEpYAdsB2b4AAAAAASUVORK5CYII=)";
									} catch (e) {}
									document.querySelector("ul#httpsvipul>li:nth-child(" + localStorage.getItem("httpsjk") + ")").click()
								}, 567)
							} catch (e) {
								return false;
							}
						})();
					} else {}
				};
				function sjsyjkjxb() {
					if (!document.querySelector("style#wsjxbshhjd") && !youtubespxzobj && !mmkjjtjobj) {
						(function() {
							try {
								function createRandom(num, from, to) {
									let arr = [];
									for (let i = from; i <= to; i++) arr.push(i);
									arr.sort(function() {
										return 0.5 - Math.random()
									});
									arr.length = num;
									return arr
								}
								function createRandom2(num, from, to) {
									let arr = [];
									let json = {};
									while (arr.length < num) {
										let ranNum = Math.ceil(Math.random() * (to - from)) + from;
										if (!json[ranNum]) {
											json[ranNum] = 1;
											arr.push(ranNum)
										}
									}
									return arr
								}
								localStorage.setItem("httpsjk", createRandom2(1, 3, document.querySelectorAll("ul#httpsvipul>li").length - 16));
								setTimeout(function() {
									try {
										$("ul#httpsvipul>li>span").css("backgroundImage", "");
										document.querySelector("ul#httpsvipul>li:nth-child(" + localStorage.getItem("httpsjk") + ")>span").style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAMAAACHgmeRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURX//AIH8BobyGoT/CZP/J4nxIIL5C5T8LJj0PW2hJpgAAAAeSURBVAjXY2BlY4QABiZGBiigNouVGQoYONhZIAAAEpYAdsB2b4AAAAAASUVORK5CYII=)";
									} catch (e) {}
									document.querySelector("ul#httpsvipul>li:nth-child(" + localStorage.getItem("httpsjk") + ")").click()
								}, 567)
							} catch (e) {
								return false;
							}
						})();
					} else {}
				};
				document.onkeydown = function(e) {
					if (window.event) {
						e = window.event
					}
					let code = event.key;
					if (e.ctrlKey && e.altKey && code == '/') {
						qkjbsz();
					} else if (e.altKey && code == '/') {
						tbxsyc();
					} else if (e.ctrlKey && code == '/') {
						ytbspxz();
					} else if (code == ',') {
						zdbmm();
					} else if (code == '.') {
						zdzdw();
					} else if (code == '/') {
						sddj();
					} else if (code == ';') {
						ywyjklb();
					} else if (code == '\'') {
						pyspqp();
					} else if (code == '\\') {
						ptsphzh();
					} else if (code == '-') {
						sjsyjkjxa();
					} else if (code == '=') {
						sjsyjkjxb();
					} else {}
				}
			} else {} if (obj.match(/^https?:\/\/www\.zuidazy\d\.com\/index\.php/)) {
				jqjs();
				setTimeout(function() {
					document.head.insertAdjacentHTML('beforeend', '<style>[id*="copy"],li[class^="xing_top_"]:not([class*="center"]),[class^="search-inner"]+[class*="right"],[class*="foot"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}::-webkit-scrollbar{width:0px!important;height:0px!important}.search{margin-left:200px}</style>');
					if ($("div.xing_vb>ul>li>span>a").length == 1) {
						window.location.href = document.querySelector("div.xing_vb>ul>li>span>a:first-child").href
					} else {}
				}, 500);
			} else if (obj.match(/^https?:\/\/www\.zuidazy\d\.com\/\?m=vod-detail-id-/)) {
				jqjs();
				cssobj('li#zdwbfobjli{display:block!important;}963540817');
				if (localStorage.getItem("zdwbfobj") != null) {} else {
					zdwbfobj = '1';
					localStorage.setItem("zdwbfobj", "1");
					location.reload();
				}
				if (localStorage.getItem("zdwbfobj") == '1') {
					(function() {
						if (self != top) {} else {
							function dssxcobj() {
								setTimeout(function() {
									window.location.reload();
								}, 666);
							};
							if (localStorage.getItem("zdwbffs") != null) {
								zdwbffs = localStorage.getItem("zdwbffs")
							} else {
								localStorage.setItem("zdwbffs", "0");
								localStorage.setItem("zdwbyjk", "0");
								dssxcobj();
							}
							if (localStorage.getItem("zdwbyjk") != null) {
								zdwbyjk = localStorage.getItem("zdwbyjk")
							} else {
								localStorage.setItem("zdwbyjk", "0");
								localStorage.setItem("zdwbyjk", "0");
								dssxcobj();
							}
							if (zdwbyjk == 0) {
								m3u8 = "https://liuliuyy.com/player/play.html?url=";
							} else if (zdwbyjk == 1) {
								m3u8 = "https://www.mhbofang.com/?url=";
							}
							document.head.insertAdjacentHTML('beforeend', '<style>li#vipjxtbli{display:block!important;}div.maomibtn br,li#jxbqyjxli{display:none!important;}</style>');
							let img = document.querySelector("div.vodImg>img").src;
							let title = document.title.replace(/^(.+)剧情介绍.*$/, "$1");
							document.querySelector("body>div.xing_top").remove();
							document.querySelector("body>div.sddm").remove();
							document.querySelector("body>div.container").remove();
							document.querySelector("body>div.foot").remove();
							$("body>div.warp>div>div.playBar.liketitle").remove();
							document.head.insertAdjacentHTML('beforeend', '<style>div.maomibtn{position:fixed!important;}li#zdwbffsli{display:block!important;}div.maomibtn ul li a[target="_blank"],#play_1>ul>li>input{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}::-webkit-scrollbar{width:0px!important;height:0px!important}.ibox{border:none!important;margin-bottom:0!important;background-color:transparent!important}</style>');
							function zuidall() {
								if (document.querySelector("#play_2>ul>li:first-child").innerText.match(/\.m3u8$/i)) {
									document.head.insertAdjacentHTML('beforeend', '<style>li#zdwbyjkli{display:block!important;}</style>')
								} else {}
								document.querySelector('body>div.warp>div[class="ibox"]:first-child').remove();
								document.querySelector("#play_1").remove();
								$("#play_2>h3").remove();
								$("#play_2 input").remove();
								document.onclick = function(e) {
									if (!document.querySelector("#play_2>ul>li:first-child").innerText.match(/\.m3u8$/i)) {
										const linka = /^([^$]+?)\$\s*?(https?:\/\/[^\/]+?\/share\/\w+)$/i;
										if (!e.target.innerHTML.match(/<jiangxiaobai /) && !e.target.innerHTML.match(/<iframe /) && e.target.innerText.match(linka)) {
											if ($("#jiangxiaobai")) {
												$("#jiangxiaobai").remove()
											} else {}
											e.target.innerHTML = e.target.innerHTML.replace(linka, '<jiangxiaobai id="jiangxiaobai" width="100%" height="500px"><br><div style="background-color:#000"><br><br><div style="display:inline-flex;margin-top:-25px"><h1 style="text-align:center;color:#4caf50;margin-top:75px">正在观看--</h1><a title="点击此图片关闭本视频" href="javascript:void((function(){if($(\'#jiangxiaobai\')){$(\'#jiangxiaobai\').remove()}else{}})())"><img style="width:150px;height:150px;border-radius:20px" src="' + img + '"></a><h1 style="text-align:center;color:#4caf50;margin-top:75px">--</h1><h1 style="text-align:center;color:#4caf50;margin-top:75px">资源视频</h1></div><br><br><div style="display:inline-flex"><h1 style="text-align:center;color:magenta">' + title + '</h1><h1 style="text-align:center;color:magenta">$1</h1></div><br><br></div><iframe src="$2" width="100%" height="500px" allowfullscreen="allowfullscreen" data-ad="false" autoLoad="true" autoplay="autoplay" style="border:none!important;outline:none!important"></iframe><br><br></jiangxiaobai>');
											window.scrollTo(0, document.querySelector("#jiangxiaobai").offsetTop);
											return false
										}
									} else {
										const linkb = /^([^$]+?)\$\s*?(https?:\/\/.+?\.m3u8)$/i;
										if (!e.target.innerHTML.match(/<jiangxiaobai /) && !e.target.innerHTML.match(/<iframe/) && e.target.innerText.match(linkb)) {
											if ($("#jiangxiaobai")) {
												$("#jiangxiaobai").remove()
											} else {}
											e.target.innerHTML = e.target.innerHTML.replace(linkb, '<jiangxiaobai id="jiangxiaobai" width="100%" height="500px"><br><div style="background-color:#000"><br><br><div style="display:inline-flex;margin-top:-25px"><h1 style="text-align:center;color:#4caf50;margin-top:75px">正在观看--</h1><a title="点击此图片关闭本视频" href="javascript:void((function(){if($(\'#jiangxiaobai\')){$(\'#jiangxiaobai\').remove()}else{}})())"><img style="width:150px;height:150px;border-radius:20px" src="' + img + '"></a><h1 style="text-align:center;color:#4caf50;margin-top:75px">--</h1><h1 style="text-align:center;color:#4caf50;margin-top:75px">资源视频</h1></div><br><br><div style="display:inline-flex"><h1 style="text-align:center;color:magenta">' + title + '</h1><h1 style="text-align:center;color:magenta">$1</h1></div><br><br></div><iframe src="' + m3u8 + '$2" width="100%" height="500px" allowfullscreen="allowfullscreen" data-ad="false" autoLoad="true" autoplay="autoplay" style="border:none!important;outline:none!important"></iframe><br><br></jiangxiaobai>');
											window.scrollTo(0, document.querySelector("#jiangxiaobai").offsetTop);
											return false
										}
									}
								};
								setTimeout(function() {
									window.scrollTo(0, document.body.scrollHeight);
									document.head.insertAdjacentHTML('beforeend', '<style>body{background-color:#585858}#down_1{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}::-webkit-scrollbar{width:0px!important;height:0px!important}.ibox{border:none!important;margin-bottom:0!important;background-color:transparent!important}div#play_2 li{color:#fff;font-weight:700;font-size:16px;text-decoration:none}div#play_2 li:hover{color:chartreuse}div#play_2{text-align:center}body>div.warp>div.ibox.playBox:nth-child(1)>div.vodplayinfo{text-align:center;font-size:16px;border:4px darkred;text-decoration:none;border-style:dashed;margin-top:20px;background-color:wheat!important;color:black!important}body>div.warp>div.ibox.playBox:nth-child(1)>div.vodplayinfo *{color:steelblue!important;background:#27282F!important;background-color:#27282F!important}</style>');
									if ($("div#play_2 ul li").length == 1) {
										document.querySelector("div#play_2 ul li:first-child").click()
									} else {}
								}, 500)
							};
							function zuidam3u8() {
								if (document.querySelector("#play_1>ul>li:first-child").innerText.match(/\.m3u8$/i)) {
									document.head.insertAdjacentHTML('beforeend', '<style>li#zdwbyjkli{display:block!important;}</style>')
								} else {}
								document.querySelector("body>div.warp>div:nth-child(4)>div").remove();
								$("#play_1>h3").remove();
								$("#play_1 input").remove();
								document.onclick = function(e) {
									if (!document.querySelector("#play_1>ul>li:first-child").innerText.match(/\.m3u8$/i)) {
										const linka = /^([^$]+?)\$\s*?(https?:\/\/[^\/]+?\/share\/\w+)$/i;
										if (!e.target.innerHTML.match(/<jiangxiaobai /) && !e.target.innerHTML.match(/<iframe /) && e.target.innerText.match(linka)) {
											if ($("#jiangxiaobai")) {
												$("#jiangxiaobai").remove()
											} else {}
											e.target.innerHTML = e.target.innerHTML.replace(linka, '<jiangxiaobai id="jiangxiaobai" width="100%" height="500px"><br><div style="background-color:#000"><br><br><div style="display:inline-flex;margin-top:-25px"><h1 style="text-align:center;color:#4caf50;margin-top:75px">正在观看--</h1><a title="点击此图片关闭本视频" href="javascript:void((function(){if($(\'#jiangxiaobai\')){$(\'#jiangxiaobai\').remove()}else{}})())"><img style="width:150px;height:150px;border-radius:20px" src="' + img + '"></a><h1 style="text-align:center;color:#4caf50;margin-top:75px">--</h1><h1 style="text-align:center;color:#4caf50;margin-top:75px">资源视频</h1></div><br><br><div style="display:inline-flex"><h1 style="text-align:center;color:magenta">' + title + '</h1><h1 style="text-align:center;color:magenta">$1</h1></div><br><br></div><iframe src="$2" width="100%" height="500px" allowfullscreen="allowfullscreen" data-ad="false" autoLoad="true" autoplay="autoplay" style="border:none!important;outline:none!important"></iframe><br><br></jiangxiaobai>');
											window.scrollTo(0, document.querySelector("#jiangxiaobai").offsetTop);
											return false
										}
									} else {
										const linkb = /^([^$]+?)\$\s*?(https?:\/\/.+?\.m3u8)$/i;
										if (!e.target.innerHTML.match(/<jiangxiaobai /) && !e.target.innerHTML.match(/<iframe/) && e.target.innerText.match(linkb)) {
											if ($("#jiangxiaobai")) {
												$("#jiangxiaobai").remove()
											} else {}
											e.target.innerHTML = e.target.innerHTML.replace(linkb, '<jiangxiaobai id="jiangxiaobai" width="100%" height="500px"><br><div style="background-color:#000"><br><br><div style="display:inline-flex;margin-top:-25px"><h1 style="text-align:center;color:#4caf50;margin-top:75px">正在观看--</h1><a title="点击此图片关闭本视频" href="javascript:void((function(){if($(\'#jiangxiaobai\')){$(\'#jiangxiaobai\').remove()}else{}})())"><img style="width:150px;height:150px;border-radius:20px" src="' + img + '"></a><h1 style="text-align:center;color:#4caf50;margin-top:75px">--</h1><h1 style="text-align:center;color:#4caf50;margin-top:75px">资源视频</h1></div><br><br><div style="display:inline-flex"><h1 style="text-align:center;color:magenta">' + title + '</h1><h1 style="text-align:center;color:magenta">$1</h1></div><br><br></div><iframe src="' + m3u8 + '$2" width="100%" height="500px" allowfullscreen="allowfullscreen" data-ad="false" autoLoad="true" autoplay="autoplay" style="border:none!important;outline:none!important"></iframe><br><br></jiangxiaobai>');
											window.scrollTo(0, document.querySelector("#jiangxiaobai").offsetTop);
											return false
										}
									}
								};
								setTimeout(function() {
									window.scrollTo(0, document.body.scrollHeight);
									document.head.insertAdjacentHTML('beforeend', '<style>body{background-color:#585858}#play_2,div#play_1>h3,#down_1,div.ibox:nth-of-type(1),div.playBox.ibox:nth-of-type(4){display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}::-webkit-scrollbar{width:0px!important;height:0px!important}.ibox{border:none!important;margin-bottom:0!important;background-color:transparent!important}div#play_1 li{color:#fff;font-weight:700;font-size:16px;text-decoration:none}div#play_1 li:hover{color:chartreuse}div#play_1{text-align:center}body>div.warp>div.ibox.playBox:nth-child(2)>div.vodplayinfo{text-align:center;font-weight:bold;font-size:16px;border:4px outset buttonface;color:steelblue;text-decoration:none;border-style:dotted;border-radius:20%;margin-top:20px}body>div.warp>div.ibox.playBox:nth-child(2)>div.vodplayinfo *{color:steelblue!important;background:#27282F!important;background-color:#27282F!important}</style>');
									if ($("div#play_1 ul li").length == 1) {
										document.querySelector("div#play_1 ul li:first-child").click()
									} else {}
								}, 500)
							};
							if (zdwbffs == 0) {
								if ($("span:contains('zuidall')")[0]) {
									zuidall()
								} else {
									zuidam3u8()
								}
							} else if (zdwbffs == 1) {
								if ($("span:contains('zuidam3u8')")[0]) {
									zuidam3u8()
								} else {
									zuidall()
								}
							}
						}
					})();
				} else if (localStorage.getItem("zdwbfobj") == '0') {
					cssobj('li#vipjxtbli{display:block!important;}div.maomibtn br,div.maomibtn>ul>li:first-child>ul>li:not([id="vipjxtbli"]):not([id="zdwbfobjli"])');
				}
			} else if (obj.match(/^https?:\/\/[^\/]*?cupfox\./)) {
				cssobj('[class$="search-other-names"],div>[style^="z-index:"],[class*="block"],[class$="movie border-shadow"],[class*="sidebar"],ul[class$="fixed-nav"],div[class$=" nav"]>span:not([class*="title"]):not([class*="xuanpian"]):not([class*="bangdan"]),img[width*="%"],[class$="movie border-shadow"]+[style^="z-index:"],[class$="title-wrapper"]~[class$="mobile-detail-block"],[class$="fixed-nav"]+[class$="movie border-shadow"],[class$="mobile-container"]+[class$="mobile-nav"],[class$="card border-shadow"],[class*="burger-button"],[id^="page-wrap"]>[style^="z-index:"],[id^="hjuj"]');
			} else if (obj.match(/^https?:\/\/api\.iixxzyapi\.com\/(?!\?m=vod-detail-id-)/)) {
				cssobj('table,ul>li[class^="xing_top_"]:not([class*="center"]),div[class*="search"]>[class*="right"],div[class^="foot"],div[id^="foot"]');
			} else if (obj.match(/^https?:\/\/api\.iixxzyapi\.com\/\?m=vod-detail-id-/)) {
				let crzpbfpdobj = document.querySelector('div[class="vodinfobox"] li[class="sm"]+li[style^="line-height:"] a[target="_blank"]');
				if (crzpbfpdobj) {
					document.querySelector("html").innerHTML = '<iframe src="' + crzpbfpdobj.href + '" allowfullscreen="allowfullscreen" data-ad="false" autoload="true" autoplay="autoplay"></iframe>';
				} else {
					document.querySelector("html").innerHTML = '<img src="https://api.btstu.cn/sjbz/api.php?lx=dongman&amp;format=images" allowfullscreen="allowfullscreen" data-ad="false" autoload="true" autoplay="autoplay"></img>';
				}
				if (jxbpcobj) {
					cssobj('html,body{background:black!important;}iframe[data-ad][autoload][autoplay],img[data-ad][autoload][autoplay]{border:none!important;outline:none!important;width:100%;height:98vh;}div.maomibtn');
				} else {
					cssobj('html,body{background:black!important;}iframe[data-ad][autoload][autoplay],img[data-ad][autoload][autoplay]{border:none!important;outline:none!important;width:100%;height:90vh;}div.maomibtn');
				}
			} else {}
		};
	}
	return false;
})();