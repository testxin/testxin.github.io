/*    
 *    Copyright (c) 2015 Anton Bilan, Easy Bits Limited
 *    http://www.easy-bits.com
 *
 *    This is closed source commercial software:
 *    reverse-engineering, disassembly or modifications are not allowed
 *
 *    This software is distributed WITHOUT ANY WARRANTY;
 *    even the implied warranty of MERCHANTABILITY or FITNESS FOR 
 *    A PARTICULAR PURPOSE.
 *
 */
(function (f) {
    function d() {
    }

    d.prototype.save = function (d, f, w) {
        var C = document.createElement("a");
        C.Dd = f;
        C.href = "data:" + w + "/octet-stream;base64," + d;
        document.body.appendChild(C);
        C.click()
    };
    d.prototype.nc = function (d, f) {
        for (var w in f)"undefined" == typeof d[w] && (d[w] = f[w]);
        return d
    };
    d.prototype.time = function () {
        return (new Date).getTime()
    };
    d.prototype.Cd = function () {
        var d;
        if (f.XMLHttpRequest)d = new f.XMLHttpRequest; else try {
            d = new XDomainRequest
        } catch (B) {
            try {
                d = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (w) {
                d = new ActiveXObject("Microsoft.XMLHTTP")
            }
        }
        return d
    };
    d.prototype.Wc = function (d, f) {
        d.addEventListener ? d.addEventListener("message", f, !1) : d.attachEvent && d.attachEvent("onmessage", f)
    };
    d.prototype.Bb = function () {
        return -1 != navigator.appVersion.indexOf("MSIE") || !!navigator.userAgent.match(/Trident.*rv 11\./)
    };
    d.prototype.ya = function (d) {
        return d.split("/")[2]
    };
    d.prototype.Ta = function (d) {
        return /[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i.exec(this.ya(d))[0]
    };
    d.prototype.bind = function (d, f) {
        return function () {
            return d.apply(f, arguments)
        }
    };
    d.prototype.xd =
        function () {
            return "undefined" == typeof f.postMessage ? !1 : !0
        };
    f.easybits_Helper = function () {
        return new d
    }
})(window);
(function (f) {
    function d() {
    }

    function E() {
    }

    function B() {
        this.f = [];
        this.Na = [];
        this.ua = [];
        k.xd() && k.Wc(f, k.bind(this.md, this));
        if (k.Bb()) {
            var c = document.createElement("script");
            c.type = "text/vbscript";
            c.text = 'Function easy_arr(t)\neasy_arr= CStr(t)\nEnd Function\nFunction easy_arrl(t)\neasy_arrl= ""\nif LenB(t) mod 2 Then easy_arrl= Chr(AscB(RightB(t,1)))\nEnd Function';
            document.body.appendChild(c)
        }
    }

    function w(c) {
        this.w = c.w;
        this.R = c.R;
        this.ic = !0;
        this.wb = c.Ua;
        this.D = c.end;
        this.od = c.Cb;
        this.qd = c.Qa;
        this.vb =
            c.speed;
        this.o = this.Ha = this.ub = this.jc = this.tb = 0;
        this.sa = this.ra = c.start;
        this.La = [];
        this.p = I++
    }

    function C() {
        this.hd = document.URL;
        this.sb = this.Ja = !1;
        this.qb = !0;
        this.rb;
        this.e;
        this.gd = []
    }

    function F(c) {
        b = I = 0;
        k = f.easybits_Helper();
        "undefined" != typeof c && (y = k.nc(c, y));
        H = new E;
        u = new B;
        c = new C;
        c.sb = !0;
        c = u.f.push(c) - 1;
        u.f[c].e = c;
        f.Id = function (c, b) {
            return u.Bc(c, b)
        }
    }

    var A = [], y = {bpc: 8E4, minbpc: 2E4, maxbpc: 1E5}, z = [], I, b, k, H, u;
    F.prototype.Ma = function (c) {
        return u.Ma(c)
    };
    F.prototype.cancel = function (c) {
        for (var b =
            0; b < z.length; b++)if (z[b].p == c)return z[b].ic = !1, !0;
        return !1
    };
    F.prototype.load = function (c) {
        if ("function" !== typeof c.Cb)throw Error("Callback is not callable");
        if ("undefined" !== typeof c.Qa && "function" !== typeof c.Qa)throw Error("Callback is not callable");
        c = k.nc(c, {bType: "text", kb: !1, start: 0, end: "", speed: !1, R: 0});
        if (c.kb)for (var b = 0; b <= c.Ua.length; b++)A.push(c.Ua[b]);
        c = new w(c);
        z.push(c);
        c.nd();
        return c.p
    };
    f.easybits_getHTTPMultiStreaming = function (c) {
        return new F(c)
    };
    w.prototype.hc = function (c) {
        if (c.q ==
            this.sa)if (this.sa += c.i - c.q + 1, this.od({
                data: c.L,
                start: c.q,
                end: c.i,
                total: c.o,
                id: this.p,
                Md: c.qa,
                Jd: this.R && k.Ta(c.h) != k.Ta(document.URL)
            }), this.sa < this.D)for (c = 0; c < this.La.length; c++) {
            if (this.La[c].q == this.sa) {
                this.hc(this.La[c]);
                break
            }
        } else this.qd({Nd: (k.time() - this.ub) / 1E3, total: c.o}); else this.La.push(c)
    };
    w.prototype.ta = function (c) {
        if (!(this.ra >= this.D && "" != this.D)) {
            var D = y.bpc;
            if (u.f[c.e].Ja) {
                for (var x = 0, d = 0, f = 0; f < u.f.length; f++)c.e != f && u.f[f].qb && u.f[f].Ja && (d++, x += u.f[f].Ja);
                x && (D = Math.round(y.pbc *
                    u.f[c.e].Ja / (x / d)))
            }
            y.maxbpc < D && (D = y.maxbpc);
            y.minbpc > D ? u.f[c.e].qb = !1 : (x = this.ra, d = this.ra + D - 1, d > this.D && "" != this.D && (d = this.D, D = d - x + 1), this.ra += D, u.Ma({
                w: c.w,
                lc: k.time(),
                q: x,
                i: d,
                h: c.h,
                Ka: k.bind(this.pd, this),
                e: c.e,
                p: this.p,
                qa: ++b,
                R: this.R
            }))
        }
    };
    w.prototype.pd = function (c) {
        if (this.ic) {
            this.o = c.o;
            if (this.D > c.o || "" == this.D)this.D = c.o - 1;
            u.f[c.e].kc = u.f[c.e].kc ? (u.f[c.e].kc + c.L.length / (k.time() - c.lc)) / 2 : c.L.length / (k.time() - c.lc);
            this.hc(c);
            if (!(c.i >= c.o))if (this.vb) {
                this.Ha += c.L.length;
                var b = k.time() -
                    this.ub;
                this.jc = 1E3 * this.Ha / b;
                if (this.jc > this.vb) {
                    var d = this;
                    setTimeout(function () {
                        d.ta(c)
                    }, 1E3 * this.Ha / this.vb - b)
                } else this.ta(c)
            } else this.tb ? (d = this, setTimeout(function () {
                d.ta(c)
            }, 1E3 * this.tb), this.tb = 0) : this.ta(c)
        } else for (b = 0; b < z.length; b++)if (z[b].p == this.p) {
            z.splice(b, 1);
            break
        }
    };
    w.prototype.nd = function () {
        this.ub = k.time();
        for (var c = 0; c < this.wb.length; c++) {
            var b = u.Ia(this.wb[c]);
            if (b && b.qb) {
                var d = {e: b.e, h: this.wb[c], p: this.p, w: this.w};
                b.sb ? this.ta(d) : u.f[b.e].gd.push(d)
            }
        }
    };
    B.prototype.Ma = function (c) {
        if ("function" !== typeof c.Ka)throw Error("Callback is not callable");
        if (-1 != A.indexOf(c.h) || k.ya(c.h) == k.ya(document.URL))H.gc(c); else if (k.Ta(c.h) == k.Ta(document.URL)) {
            var b = u.Ia(c.h);
            document.getElementById(b.rb).contentWindow.Hd.Ma(c)
        } else b = u.Ia(c.h), u.ua.push(c), document.getElementById(b.rb).contentWindow.postMessage({
            source: "httpmutlistreaming",
            data: (new d).yc({
                oc: "easy_stream_getBytes",
                w: c.w,
                q: c.q,
                i: c.i,
                h: c.h,
                e: c.e,
                p: c.p,
                qa: c.qa,
                R: c.R
            })
        }, "*")
    };
    B.prototype.Ia = function (c) {
        -1 != A.indexOf(c) && (c = document.URL);
        c =
            k.ya(c);
        for (var b = 0; b < this.f.length; b++)if (k.ya(this.f[b].hd) == c)return this.f[b];
        return !1
    };
    B.prototype.Bc = function (c, b) {
        var d = this.Ia(c);
        d.rb = b;
        d.sb = !0;
        for (d = this.Na.length; d--;)if (this.Na[d].h == c) {
            var f = this.Na[d];
            this.Na.splice(d, 1);
            f.Ed(c, b, f.e)
        }
    };
    B.prototype.md = function (c) {
        if (c.data.source && "httpmutlistreaming" == !c.data.source) {
            var b = parseInt(c.data.data.substring(0, 7).replace(/^[0]+/g, "")), f = (new d).jd(c.data.data.substring(7, b + 7));
            switch (f.oc) {
                case "easy_onGetBytes":
                    for (var G = this.ua.length; G--;)if (this.ua[G].qa ==
                        f.qa) {
                        f.L = c.data.data.substring(7 + b);
                        c = this.ua[G];
                        this.ua.splice(G, 1);
                        c.R || (f.L = f.L.replace(/abcdezzz/g, String.fromCharCode(0)));
                        c.Ka(f);
                        break
                    }
                    break;
                case "easy_stream_getBytes":
                    f.Ka = k.bind(this.ld, this);
                    H.gc(f);
                    break;
                case "onLL":
                    u.Bc(f.url, f.id)
            }
        }
    };
    B.prototype.ld = function (c) {
        var b = new d, x = {}, k;
        for (k in c)"easy_data" != k && (x[k] = c[k]);
        x.oc = "easy_onGetBytes";
        f.parent.postMessage({source: "httpmutlistreaming", data: b.yc(x) + c.L.replace(/\0/g, "abcdezzz")}, "*")
    };
    E.prototype.dd = function (c) {
        function b() {
            4 == d.readyState &&
            c.rd(d)
        }

        var d = k.Cd();
        d.open("GET", c.url, !0);
        "text" == c.bType ? k.Bb() || d.overrideMimeType("text/plain; charset=x-user-defined") : d.responseType = "arraybuffer";
        d.setRequestHeader("Range", "bytes=" + c.q + "-" + c.i);
        "undefined" != typeof d.onload ? d.onload = b : d.onreadystatechange = b;
        d.send()
    };
    E.prototype.gc = function (c) {
        var b = this;
        this.dd({
            w: c.w,
            url: -1 == c.h.indexOf("?") ? c.h + "?bytes=" + c.q + c.i : c.h + "&bytes=" + c.q + c.i,
            q: c.q,
            i: c.i,
            rd: function (d) {
                d.getResponseHeader("Content-Range") ? c.o = d.getResponseHeader("Content-Range").split("/")[1] :
                    c.i = c.o = d.getResponseHeader("Content-Length");
                c.i >= c.o && (c.i = c.o - 1);
                if ("text" == c.bType) {
                    d = k.Bb() ? b.ed(d.Ld) : d.responseText;
                    var f = d.length
                } else d = d.response, f = d.byteLength;
                f && (c.L = c.Fd ? b.fd(d) : d, c.Ka(c))
            }
        })
    };
    E.prototype.ed = function (c) {
        return easy_arr(c).replace(/[\s\S]/g, function (c) {
                c = c.charCodeAt(0);
                return String.fromCharCode(c & 255, c >> 8)
            }) + easy_arrl(c)
    };
    E.prototype.fd = function (c) {
        c = c.replace(/\0/g, "abcdezzz");
        return "<![CDATA[" + c + "]]\x3e"
    };
    d.prototype.jd = function (c) {
        var b = {};
        c = c.split(";");
        for (var d =
            0; d < c.length; d++) {
            var f = c[d].split("abcdefghzzz");
            b[f[0]] = f[1]
        }
        return b
    };
    d.prototype.yc = function (c) {
        var b = "", d;
        for (d in c)b += d + "abcdefghzzz" + c[d] + ";";
        b = b.substring(0, b.length - 1);
        return this.kd(b.length) + b
    };
    d.prototype.kd = function (b) {
        var d;
        d = 7 - b.toString().length;
        return 0 < d ? Array(d + (/\./.test(b) ? 2 : 1)).join("0") + b : b + ""
    };
    f.Gd = function () {
        return new d
    }
})(window);
(function (f) {
    function d() {
        this.$a = !1;
        this.Q = this.Ub = this.Da = null;
        this.J = this.za = 0;
        this.Qb = !1;
        this.ba = this.d = this.a = this.Sa = NaN;
        this.TimeRanges = null;
        this.ca = this.m = NaN;
        this.b = this.index = 0
    }

    function E() {
        var a = !1, e = !1, l = !1;
        this.Uc = function () {
            this.ob();
            /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ? (a = document.createElement("iframe"), a.style.width = "1px", a.style.height = "1px", a.src = "http://www.easy-bits.com/jsv/i.html", document.body.appendChild(a)) : /(Android)/g.test(navigator.userAgent) && (e || (e = !0, l = document.createElement("video"),
                l.setAttribute("loop", !0), l.src = "/public/video/silence.mp4", document.body.appendChild(l)), A ? z.push(function () {
                l.play()
            }) : l.play())
        };
        this.ob = function () {
            l ? l.pause() : a && (a.parentNode.removeChild(a), a = !1)
        }
    }

    function B() {
        var a = document.getElementsByTagName;
        document.getElementsByTagName = function (e) {
            var l = a.call(document, e), l = [].slice.call(l), b = [];
            "video" == e && (e = a.call(document, "jsv"), b = [].slice.call(e));
            return l.concat(b)
        }
    }

    function w(a, e) {
        var l = new f.video_jsv;
        l.style.width = a.offsetWidth + "px";
        l.style.height =
            a.offsetHeight + "px";
        for (var b = "data-audio preload loop autoplay poster id class".split(" "), c = 0; c < b.length; c++)a.hasAttribute(b[c]) && l.setAttribute(b[c], a.getAttribute(b[c]));
        l.setAttribute("src", e);
        a.parentNode.replaceChild(l, a)
    }

    var C = !1, F = !1, A = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), y = A, z = [];
    if ("undefined" == typeof f.jsv_config || "undefined" == typeof f.jsv_config.doNotPatchCreateElement || !f.jsv_config.doNotPatchCreateElement) {
        var I = document.createElement;
        document.createElement = function (a) {
            return "video" ==
            a ? new f.video_jsv : I.call(document, a)
        };
        B()
    }
    (function (a) {
        C || (C = !0, document.addEventListener ? document.addEventListener("DOMContentLoaded", function l() {
            document.removeEventListener("DOMContentLoaded", l, !1);
            a()
        }, !1) : document.attachEvent && (document.attachEvent("onreadystatechange", function L() {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", L), a())
        }), document.documentElement.doScroll && f == f.top && function M() {
            if (!F) {
                try {
                    document.documentElement.doScroll("left")
                } catch (b) {
                    setTimeout(M,
                        0);
                    return
                }
                a()
            }
        }()))
    })(function () {
        F = !0;
        for (var a = document.getElementsByTagName("video"), e = 0; e < a.length; e++)if ("VIDEO" == a[e].tagName)if ("src"in a[e] && /\.jsv$/.test(a[e].src))w(a[e], a[e].src); else for (var l = a[e].getElementsByTagName("source"), b = 0; b < l.length; b++)/\.jsv$/.test(l[b].src) && w(a[e], l[b].src)
    });
    f.video_jsv = function () {
        var a = "muted volume loop preload data-audio poster src autoplay buffered seeking controls currentSrc currentTime defaultMuted defaultPlaybackRate playbackRate duration widthInt heightInt scale ended networkState paused readyState seekable played".split(" "),
            e = "muted volume loop preload data-audio poster src autoplay controls currentSrc currentTime defaultMuted defaultPlaybackRate playbackRate duration widthInt heightInt scale".split(" "), l = document.createElement("jsv");
        l.style.display = "block";
        var c = l.getAttribute;
        l.getAttribute = function (e) {
            return -1 != a.indexOf(e) ? b.prototype.__lookupGetter__(e).apply(this, arguments) : c.apply(this, arguments)
        };
        var d = l.setAttribute;
        l.setAttribute = function (a) {
            return -1 != e.indexOf(a) ? (d.apply(this, arguments), b.prototype.__lookupSetter__(a).apply(this,
                arguments)) : d.apply(this, arguments)
        };
        for (var h in b.prototype)-1 != a.indexOf(h) ? -1 != e.indexOf(h) ? Object.defineProperty(l, h, {
            get: b.prototype.__lookupGetter__(h),
            set: b.prototype.__lookupSetter__(h)
        }) : Object.defineProperty(l, h, {get: b.prototype.__lookupGetter__(h)}) : l[h] = b.prototype[h];
        l.Lb();
        return l
    };
    var b = f.Kd = function () {
        this.Lb()
    }, k = function () {
        return f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || function (a) {
                f.setTimeout(a, 1E3 / 60)
            }
    }();
    b.prototype.canPlayType = function (a) {
        return 'video/jsv; codecs="abilan"' ==
        a ? "probably" : ""
    };
    b.prototype.Pc = function () {
        this.buffer.advance(16);
        this.Sb.width = this.buffer.c(16);
        this.Sb.height = this.buffer.c(16);
        this.K || (this.u = this.buffer.c(16) / 100, this.u || (this.u = this.buffer.c(24) / 100), this.Aa = Math.ceil(this.ac / (this.u * this.n / this.ja)), this.ja > D && (this.buffer.$a = !0))
    };
    b.prototype.__defineGetter__("readyState", function () {
        return this.hb
    });
    b.prototype.__defineGetter__("paused", function () {
        return !this.l
    });
    b.prototype.__defineGetter__("networkState", function () {
        return this.bb
    });
    b.prototype.__defineGetter__("ended",
        function () {
            return this.ka
        });
    b.prototype.__defineGetter__("preload", function () {
        return this.fb
    });
    b.prototype.__defineSetter__("preload", function (a) {
        1 < arguments.length && (a = arguments[1]);
        this.fb = a
    });
    b.prototype.__defineGetter__("defaultPlaybackRate", function () {
        return this.Za
    });
    b.prototype.cb = function (a) {
        a = parseFloat(a);
        if (0 > a || 1 < a)a = 1;
        return a
    };
    b.prototype.__defineSetter__("defaultPlaybackRate", function (a) {
        1 < arguments.length && (a = arguments[1]);
        this.Za = this.cb(a)
    });
    b.prototype.__defineGetter__("playbackRate",
        function () {
            return this.Ea
        });
    b.prototype.__defineSetter__("playbackRate", function (a) {
        1 < arguments.length && (a = arguments[1]);
        this.Ea = this.cb(a);
        this.audio.playbackRate = this.Ea;
        var e = document.createEvent("CustomEvent");
        e.initCustomEvent("ratechange", !1, !1, null);
        this.dispatchEvent(e)
    });
    b.prototype.__defineGetter__("defaultMuted", function () {
        return this.Ya
    });
    b.prototype.__defineSetter__("defaultMuted", function (a) {
        1 < arguments.length && (a = arguments[1]);
        this.Ya = a
    });
    b.prototype.__defineGetter__("muted", function () {
        return this.Ca
    });
    b.prototype.__defineSetter__("muted", function (a) {
        1 < arguments.length && (a = arguments[1]);
        this.Ca = a;
        this.audio.muted = this.Ca
    });
    b.prototype.__defineGetter__("volume", function () {
        return this.jb
    });
    b.prototype.__defineSetter__("volume", function (a) {
        1 < arguments.length && (a = arguments[1]);
        this.jb = this.cb(a);
        this.audio.volume = this.jb;
        var e = document.createEvent("CustomEvent");
        e.initCustomEvent("volumechange", !1, !1, null);
        this.dispatchEvent(e)
    });
    b.prototype.__defineGetter__("data-audio", function () {
        return this.audio ?
            this.audio.src : ""
    });
    b.prototype.__defineSetter__("data-audio", function (a) {
        1 < arguments.length && (a = arguments[1]);
        this.audio.src = a
    });
    b.prototype.__defineGetter__("poster", function () {
        return this.v ? this.v.src : ""
    });
    b.prototype.__defineSetter__("poster", function (a) {
        1 < arguments.length && (a = arguments[1]);
        this.v || (this.style.position = "relative", this.v = document.createElement("img"), this.v.setAttribute("style", "z-index:2;position:absolute;top:0px;left:0px;bottom:0px;right:0px;width:100%;height:100%;"), this.appendChild(this.v));
        this.v.src = a
    });
    b.prototype.__defineGetter__("played", function () {
        var a = this.Gb(!0), e = {};
        e.__defineGetter__("length", function () {
            return a.length
        });
        e.start = function (e) {
            return a[e].start
        };
        e.end = function (e) {
            return a[e].end
        };
        return e
    });
    b.prototype.__defineGetter__("seekable", function () {
        var a = this;
        return {
            length: 1, start: function () {
                return 0
            }, end: function () {
                return a.u
            }
        }
    });
    b.prototype.__defineGetter__("buffered", function () {
        return this.buffer.vd()
    });
    b.prototype.__defineGetter__("seeking", function () {
        return this.W
    });
    b.prototype.__defineGetter__("controls", function () {
        return !1
    });
    b.prototype.__defineSetter__("controls", function () {
        return !1
    });
    b.prototype.__defineGetter__("duration", function () {
        return this.u
    });
    b.prototype.__defineSetter__("duration", function () {
        return !1
    });
    b.prototype.__defineGetter__("src", function () {
        return this.S
    });
    b.prototype.__defineSetter__("src", function (a) {
        1 < arguments.length && (a = arguments[1]);
        this.S = a;
        this.Rc()
    });
    b.prototype.__defineGetter__("currentSrc", function () {
        return this.S
    });
    b.prototype.__defineSetter__("currentSrc",
        function () {
            throw Error("Setting currentSrc is not allowed !");
        });
    b.prototype.__defineGetter__("currentTime", function () {
        return this.T / 1E3
    });
    b.prototype.Gb = function (a) {
        return a ? JSON.parse(JSON.stringify(this.Wb)) : this.Wb
    };
    b.prototype.Qc = function (a) {
        a *= 1E3;
        this.va(N);
        this.pb();
        try {
            for (; a - this.T > S;)this.va(N), this.pb()
        } catch (e) {
            this.M(e)
        }
        a = 12;
        this.Nb && (a += 64);
        this.Ob && (a += 64);
        a = 8 * a + 57;
        this.buffer.Cc(a);
        this.va(J);
        this.Ga();
        if (this.s())if (this.Ba) {
            this.Ba = !1;
            var l = this;
            this.audio.addEventListener("progress",
                function M() {
                    l.audio.removeEventListener("progress", M);
                    l.l || l.audio.pause();
                    l.Yb()
                });
            this.audio.play()
        } else this.Yb(); else this.Tb()
    };
    b.prototype.Yb = function () {
        var a = this;
        this.audio.addEventListener("seeked", function l() {
            a.audio.removeEventListener("seeked", l);
            a.l && a.audio.play();
            a.Tb()
        });
        this.audio.currentTime = this.currentTime
    };
    b.prototype.Tb = function () {
        this.W = !1;
        this.Pa();
        this.ib = NaN;
        var a = document.createEvent("CustomEvent");
        a.initCustomEvent("seeked", !1, !1, null);
        this.dispatchEvent(a);
        a = document.createEvent("CustomEvent");
        a.initCustomEvent("timeupdate", !1, !1, null);
        this.dispatchEvent(a)
    };
    b.prototype.__defineSetter__("currentTime", function (a) {
        if (this.s() && A)return !1;
        var e = document.createEvent("CustomEvent");
        e.initCustomEvent("seeking", !1, !1, null);
        this.dispatchEvent(e);
        this.Gb(!1);
        this.ma = this.ka = !1;
        this.W = !0;
        this.ib = a;
        e = Math.round(this.ja * a / this.u);
        try {
            this.buffer.seek(e) && this.Qc(a)
        } catch (l) {
            this.M(l)
        }
    });
    b.prototype.__defineGetter__("loop", function () {
        return this.Rb
    });
    b.prototype.__defineSetter__("loop", function (a) {
        this.Rb =
            a
    });
    b.prototype.__defineGetter__("autoplay", function () {
        return this.Hb
    });
    b.prototype.__defineSetter__("autoplay", function (a) {
        this.Hb = a
    });
    b.prototype.s = function () {
        return "" != this.audio.src
    };
    b.prototype.Bd = function () {
        var a = this;
        document.documentElement.addEventListener("touchstart", function l() {
            A = !1;
            document.documentElement.removeEventListener("touchstart", l);
            a.audio.play();
            a.audio.pause();
            for (var b = 0; b < z.length; b++)z[b]()
        }, !1)
    };
    b.prototype.Q = function (a) {
        if (!this.ma) {
            this.Zb = this.l;
            this.l = !1;
            var e = document.createEvent("CustomEvent");
            e.initCustomEvent("waiting", !1, !1, null);
            this.dispatchEvent(e);
            e = document.createEvent("CustomEvent");
            e.initCustomEvent("stalled", !1, !1, null);
            this.dispatchEvent(e)
        }
        this.hb = 1;
        this.ma = !0;
        throw a;
    };
    b.prototype.bind = function (a, e) {
        return function () {
            return a.apply(e, arguments)
        }
    };
    b.prototype.Vb = function () {
        this.V = {start: -2, end: -1, t: ""};
        this.Fb = !1;
        this.U = [];
        this.K = !1;
        this.Aa = u;
        this.Ba = !0;
        this.Wb = [];
        this.bb = this.hb = 0;
        this.ka = !1;
        this.Ob = this.Nb = 0;
        this.wa = this.F = NaN;
        this.la = this.ma = this.Zb = !1;
        this.ib = this.Xb = NaN;
        this.W = !1;
        this.Sb = {};
        this.Xa = !1;
        this.ja = NaN;
        this.ia = 0;
        this.u = this.Ib = NaN;
        this.buffer = new d;
        this.buffer.Q = this.bind(this.Q, this);
        this.buffer.Ub = this.bind(this.M, this);
        this.buffer.Da = this.bind(this.Da, this);
        this.T = 0
    };
    b.prototype.Rc = function () {
        this.Vb();
        var a = this.S.split(".").pop();
        "jsv" == a ? (this.K = !1, this.t = this.S) : "m3u8" == a && (this.K = this.Fb = !0, this.t = NaN);
        this.playbackRate = this.Za;
        this.muted = this.Ya;
        this.audio.playbackRate = this.Ea;
        this.audio.muted = this.Ca;
        this.K ? this.Oc() : this.fb ? this.M(0) : this.vc(0,
            this.n, !1);
        a = document.createEvent("CustomEvent");
        a.initCustomEvent("srcchange", !1, !1, null);
        this.dispatchEvent(a)
    };
    b.prototype.Da = function (a) {
        this.ia -= a.data.byteLength;
        this.K && (this.Kb(a.start).byteLength = NaN)
    };
    b.prototype.Sc = function (a) {
        a = a.split(/\n/g);
        a.pop();
        var e = [], l = this.S.split("/");
        l.pop();
        for (var l = l.join("/") + "/", b = 0; b < a.length; b++) {
            var c = a[b].split(",");
            e.push({
                start: 2 * b,
                end: 2 * b + 1,
                byteLength: NaN,
                url: l + c[0],
                Ic: parseFloat(c[1]),
                mc: parseFloat(c[2])
            })
        }
        1 < e[0].Ic || (this.u = e[e.length - 1].mc);
        this.Aa = Math.ceil(this.ac / (e[0].mc - e[0].Ic));
        this.u > x && (this.buffer.$a = !0);
        this.U = e;
        this.M(0)
    };
    b.prototype.Oc = function () {
        var a, e = this;
        this.ab.load({
            w: "text", kb: !0, Ua: [this.S], Cb: function (e) {
                a = e.data
            }, Qa: function () {
                e.Sc(a)
            }
        })
    };
    b.prototype.Nc = function (a) {
        for (var e = 0; e < this.U.length; e++)if (this.U[e].url == a)return this.U[e];
        return !1
    };
    b.prototype.Kb = function (a) {
        for (var e = 0; e < this.U.length; e++)if (this.U[e].start == a)return this.U[e];
        return !1
    };
    b.prototype.Jb = function () {
        clearTimeout(this.Mb)
    };
    b.prototype.Mc =
        function () {
            function a() {
                l.l && 700 < Date.now() - l.Pb && l.pause(!0)
            }

            function e() {
                l.Pb = Date.now();
                l.Mb = setTimeout(e, 50)
            }

            var l = this;
            e();
            this.audio.removeEventListener("timeupdate", a);
            this.audio.addEventListener("timeupdate", a, !1)
        };
    b.prototype.Lb = function () {
        this.t = this.S = NaN;
        this.audio = document.createElement("audio");
        A && this.Bd();
        this.gb = new E;
        this.Vb();
        this.Mb = this.Pb = !1;
        this.Ea = this.Za = this.jb = 1;
        this.Rb = this.Hb = this.v = this.fb = this.Ca = this.Ya = !1;
        this.ac = "undefined" == typeof f.jsv_config || "undefined" == typeof f.jsv_config.bufferSec ?
            H : f.jsv_config.bufferSec;
        this.n = "undefined" == typeof f.jsv_config || "undefined" == typeof f.jsv_config.chunkSize ? c : f.jsv_config.chunkSize;
        this.ab = f.easybits_getHTTPMultiStreaming({
            bpc: this.n,
            minbpc: Math.round(.25 * this.n),
            maxbpc: Math.round(1.25 * this.n)
        });
        this.Jc;
        this.canvas = document.createElement("canvas");
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.appendChild(this.canvas);
        this.dc = this.canvas.getContext("2d");
        this.bc = new Uint8Array(64);
        this.cc = new Uint8Array(64);
        this.g = new Int32Array(64)
    };
    b.prototype.vc = function (a, e, l) {
        "undefined" == typeof l && (l = !0);
        this.K ? (a = 0, e = "") : ("undefined" == typeof a ? (a = 0, e = "") : a % this.n && (a = Math.floor(a / this.n) * this.n), e = Math.ceil(e / this.n) * this.n - 1);
        if (!this.la || this.V.start != a || this.t != this.V.t) {
            this.la && this.ab.cancel(this.Xb);
            this.bb = 2;
            this.la = !0;
            this.V = {start: a, end: e, t: this.t};
            var b = this;
            a = {
                bType: "arraybuffer", start: a, end: e, kb: !0, Ua: [this.t], Cb: function (a) {
                    a.url = b.t;
                    b.zd(a)
                }, Qa: function () {
                    b.bb = 1;
                    b.la = !1;
                    if (l)b.M(b.V.end + 1); else {
                        var a = document.createEvent("CustomEvent");
                        a.initCustomEvent("suspended", !1, !1, null);
                        b.dispatchEvent(a)
                    }
                }
            };
            e = document.createEvent("CustomEvent");
            e.initCustomEvent("loadstart", !1, !1, null);
            this.dispatchEvent(e);
            this.Xb = this.ab.load(a)
        }
    };
    b.prototype.td = function (a) {
        var e = this.Kb(a), l = this.buffer.a ? this.buffer.a.start : 0;
        return e && (this.W || (a - l) / 2 <= this.Aa) ? (this.t = e.url, {start: e.start, end: e.end}) : !1
    };
    b.prototype.M = function (a) {
        this.K ? ("undefined" == typeof a && (a = this.V.end + 1), a = this.td(a)) : ("undefined" == typeof a && (a = Math.floor(this.buffer.index >>
            3)), a = this.buffer.sd(a, this.n, this.Aa, this.W));
        a ? this.vc(a.start, a.end) : (a = document.createEvent("CustomEvent"), a.initCustomEvent("suspended", !1, !1, null), this.dispatchEvent(a))
    };
    b.prototype.zd = function (a) {
        var e = a.data.byteLength;
        this.V.start += e;
        this.ia += e;
        if (this.K) {
            var l = this.Nc(a.url);
            l.byteLength = e;
            a.start = l.start;
            a.end = l.end
        } else this.ja = a.total;
        this.buffer.Vc(a);
        this.ma && (this.ma = !1, this.l = this.Zb, this.W ? this.currentTime = this.ib : this.l && (this.Fb || (this.buffer.index -= 2E4, this.buffer.b -= 2E4), this.va(J),
            this.Ga(), this.Pa()));
        this.ja == this.ia && (this.buffer.Qb = !0);
        this.Xa || (this.Pc(), a = document.createEvent("CustomEvent"), a.initCustomEvent("durationchange", !1, !1, null), this.dispatchEvent(a), this.va(J), this.yb = this.buffer.index, this.Ga(), this.Pa(), a = document.createEvent("CustomEvent"), a.initCustomEvent("loadedmetadata", !1, !1, null), this.dispatchEvent(a), this.autoplay && this.play());
        a = document.createEvent("CustomEvent");
        a.initCustomEvent("loadeddata", !1, !1, null);
        this.dispatchEvent(a);
        a = document.createEvent("CustomEvent");
        a.initCustomEvent("progress", !1, !1, null);
        this.dispatchEvent(a);
        this.Xa || (this.Xa = !0, a = document.createEvent("CustomEvent"), a.initCustomEvent("canplay", !1, !1, null), this.dispatchEvent(a), a = document.createEvent("CustomEvent"), a.initCustomEvent("canplaythrough", !1, !1, null), this.dispatchEvent(a));
        this.hb = 4
    };
    b.prototype.load = function () {
    };
    b.prototype.play = function () {
        if (this.s() && A)return !1;
        if (!this.l) {
            this.v && "none" != this.v.style.display && (this.v.style.display = "none");
            if (!this.u)return console.log("Cannot play, no metadata yet !"),
                !1;
            this.ka && this.reset();
            if (this.Ba && (this.Ba = !1, this.s())) {
                var a = this;
                this.audio.addEventListener("play", function L() {
                    a.audio.removeEventListener("play", L);
                    a.audio.pause();
                    a.play()
                });
                this.audio.play();
                return
            }
            y && this.gb.Uc();
            this.s() && this.Mc();
            this.l = !0;
            this.la || this.M();
            this.X = Date.now();
            this.s() && this.audio.play();
            this.Ec();
            var e = document.createEvent("CustomEvent");
            e.initCustomEvent("play", !1, !1, null);
            this.dispatchEvent(e)
        }
    };
    b.prototype.pause = function () {
        this.l = !1;
        this.s() && this.audio.pause();
        y &&
        this.gb.ob();
        this.s() && this.Jb();
        var a = document.createEvent("CustomEvent");
        a.initCustomEvent("pause", !1, !1, null);
        this.dispatchEvent(a)
    };
    b.prototype.reset = function () {
        this.buffer && (this.buffer.b = this.yb, this.buffer.index = this.yb, this.buffer.a = this.buffer.d, this.buffer.J = this.buffer.a.data.byteLength);
        this.ka = !1;
        this.T = 0;
        this.s() && (this.audio.pause(), this.audio.currentTime = 0)
    };
    b.prototype.C = function (a) {
        var e = 0;
        do e = a[e + this.buffer.c(1)]; while (0 <= e && 0 != a[e]);
        return a[e + 2]
    };
    b.prototype.va = function (a) {
        for (var e =
            0; e = this.buffer.Oa(), e != a && e != d.Va;);
    };
    b.prototype.xb = function (a, e) {
        for (var l = 0, b = a.length; l < b; l++)a[l] = e
    };
    b.prototype.Ra = 30;
    b.prototype.uc = 0;
    b.prototype.yb = 0;
    b.prototype.X = 0;
    b.prototype.Pa = function () {
        try {
            if (this.buffer)for (; ;) {
                var a = this.buffer.Oa();
                if (a == J)this.Ga(); else if (a == N)this.pb(); else {
                    if (a == T)return this.l && !this.W && this.Ec(), this.bd(), this.canvas;
                    if (a == d.Va) {
                        this.l = !1;
                        this.ka = !0;
                        y && this.gb.ob();
                        this.s() && this.Jb();
                        var e = document.createEvent("CustomEvent");
                        e.initCustomEvent("ended", !1,
                            !1, null);
                        this.dispatchEvent(e);
                        e = document.createEvent("CustomEvent");
                        e.initCustomEvent("pause", !1, !1, null);
                        this.dispatchEvent(e);
                        this.loop && this.Gc && this.play();
                        return null
                    }
                }
            }
        } catch (l) {
            this.M(l)
        }
    };
    b.prototype.Ec = function () {
        this.uc = Date.now() - this.X;
        var a = Math.max(0, 1E3 / this.Ra - this.uc);
        this.T += 1E3 / this.Ra;
        this.X = Date.now() + a;
        if (this.s()) {
            var e = this.T - 1E3 * this.audio.currentTime;
            if (300 > e)if (-100 < e)a -= 100, this.X -= 100; else {
                this.audio.pause();
                var l = this;
                f.clearTimeout(this.Jc);
                this.Jc = setTimeout(function () {
                    l.l &&
                    l.audio.play()
                }, 400 - e)
            } else 500 < e && (a += 100, this.X += 100)
        }
        18 > a ? this.Dc() : setTimeout(this.bind(this.Dc, this), a)
    };
    b.prototype.Dc = function () {
        k(this.bind(this.Pa, this), this.canvas);
        var a = document.createEvent("CustomEvent");
        a.initCustomEvent("timeupdate", !1, !1, null);
        this.dispatchEvent(a)
    };
    b.prototype.pb = function () {
        this.buffer.advance(1);
        var a = this.buffer.c(5), e = this.buffer.c(6);
        this.buffer.advance(1);
        var l = this.buffer.c(6), b = this.buffer.c(6);
        this.T = 1E3 * (60 * (60 * a + e) + l + (b + 1) / this.Ra)
    };
    b.prototype.Ga = function () {
        this.F =
            this.buffer.c(12);
        this.wa = this.buffer.c(12);
        this.buffer.advance(4);
        this.Ra = R[this.buffer.c(4)];
        if (this.Ib)a = 30; else {
            this.Ib = this.buffer.c(18);
            var a = 12
        }
        this.buffer.advance(a);
        this.wd();
        if (this.Nb = this.buffer.c(1)) {
            for (a = 0; 64 > a; a++)this.bc[O[a]] = this.buffer.c(8);
            this.tc = this.bc
        }
        if (this.Ob = this.buffer.c(1)) {
            for (a = 0; 64 > a; a++)this.cc[O[a]] = this.buffer.c(8);
            this.Ac = this.cc
        }
    };
    b.prototype.wd = function () {
        this.tc = U;
        this.Ac = V;
        this.P = this.F + 15 >> 4;
        this.xc = this.wa + 15 >> 4;
        this.yd = this.P * this.xc;
        this.A = this.P << 4;
        this.Xc =
            this.xc << 4;
        this.Y = this.A * this.Xc;
        this.sc = this.P << 3;
        if (!this.Gc) {
            this.Gc = !0;
            var a = f.Uint8ClampedArray || f.Uint8Array;
            f.Uint8ClampedArray || (this.ec = this.Yc, this.$b = this.Tc);
            this.aa = new a(this.Y);
            this.nb = new Uint32Array(this.aa.buffer);
            this.$ = new a(this.Y >> 2);
            this.mb = new Uint32Array(this.$.buffer);
            this.Z = new a(this.Y >> 2);
            this.lb = new Uint32Array(this.Z.buffer);
            this.ga = new a(this.Y);
            this.rc = new Uint32Array(this.ga.buffer);
            this.ea = new a(this.Y >> 2);
            this.qc = new Uint32Array(this.ea.buffer);
            this.da = new a(this.Y >>
                2);
            this.pc = new Uint32Array(this.da.buffer);
            this.canvas.width = this.F;
            this.canvas.height = this.wa;
            this.Fa = this.dc.getImageData(0, 0, this.F, this.wa);
            this.xb(this.Fa.data, 255)
        }
    };
    b.prototype.aa = null;
    b.prototype.$ = null;
    b.prototype.Z = null;
    b.prototype.Fa = null;
    b.prototype.I = 0;
    b.prototype.ga = null;
    b.prototype.ea = null;
    b.prototype.da = null;
    b.prototype.Ab = !1;
    b.prototype.zb = 0;
    b.prototype.fa = 0;
    b.prototype.r = 0;
    b.prototype.bd = function () {
        this.buffer.advance(10);
        this.I = this.buffer.c(3);
        this.buffer.advance(16);
        if (!(0 >= this.I ||
            this.I >= W)) {
            if (this.I == K) {
                this.Ab = this.buffer.c(1);
                this.zb = this.buffer.c(3);
                if (0 == this.zb)return;
                this.fa = this.zb - 1;
                this.r = 1 << this.fa
            }
            var a = 0;
            do a = this.buffer.Oa(); while (a == X || a == Y);
            for (; a >= Z && a <= aa;)this.cd(a & 255), a = this.buffer.Oa();
            this.buffer.Cc(32);
            void 0 != G && (this.Lc(), this.dc.putImageData(this.Fa, 0, 0));
            if (this.I == ba || this.I == K) {
                var a = this.ga, e = this.rc, b = this.ea, c = this.qc, d = this.da, h = this.pc;
                this.ga = this.aa;
                this.rc = this.nb;
                this.ea = this.$;
                this.qc = this.mb;
                this.da = this.Z;
                this.pc = this.lb;
                this.aa =
                    a;
                this.nb = e;
                this.$ = b;
                this.mb = c;
                this.Z = d;
                this.lb = h
            }
        }
    };
    b.prototype.Lc = function () {
        for (var a = this.aa, e = this.Z, b = this.$, c = this.Fa.data, d = 0, h = this.A, f = this.A + (this.A - this.F), p = 0, g = this.sc - (this.F >> 1), n = 0, k = 4 * this.F, m = 4 * this.F, r = this.F >> 1, u = this.wa >> 1, t, q, v, w, x = 0; x < u; x++) {
            for (var y = 0; y < r; y++)t = e[p], q = b[p], p++, v = q + (103 * q >> 8) - 179, q = (88 * t >> 8) - 44 + (183 * q >> 8) - 91, w = t + (198 * t >> 8) - 227, t = a[d++], c[n] = t + v, c[n + 1] = t - q, c[n + 2] = t + w, n += 4, t = a[d++], c[n] = t + v, c[n + 1] = t - q, c[n + 2] = t + w, n += 4, t = a[h++], c[k] = t + v, c[k + 1] = t - q, c[k + 2] = t + w,
                k += 4, t = a[h++], c[k] = t + v, c[k + 1] = t - q, c[k + 2] = t + w, k += 4;
            d += f;
            h += f;
            n += m;
            k += m;
            p += g
        }
    };
    b.prototype.Db = 0;
    b.prototype.Eb = !1;
    b.prototype.cd = function (a) {
        this.Eb = !0;
        this.B = (a - 1) * this.P - 1;
        this.H = this.k = this.G = this.j = 0;
        this.na = this.oa = this.pa = 128;
        for (this.Db = this.buffer.c(5); this.buffer.c(1);)this.buffer.advance(8);
        do this.$c(); while (!this.buffer.zc())
    };
    b.prototype.B = 0;
    b.prototype.O = 0;
    b.prototype.N = 0;
    b.prototype.xa = 0;
    b.prototype.ha = !1;
    b.prototype.wc = !1;
    b.prototype.G = 0;
    b.prototype.H = 0;
    b.prototype.j = 0;
    b.prototype.k =
        0;
    b.prototype.$c = function () {
        for (var a = 0, e = this.C(P); 34 == e;)e = this.C(P);
        for (; 35 == e;)a += 33, e = this.C(P);
        a += e;
        if (this.Eb)this.Eb = !1, this.B += a; else {
            if (this.B + a >= this.yd)return;
            1 < a && (this.na = this.oa = this.pa = 128, this.I == K && (this.H = this.k = this.G = this.j = 0));
            for (; 1 < a;)this.B++, this.O = this.B / this.P | 0, this.N = this.B % this.P, this.fc(this.G, this.H, this.ga, this.ea, this.da), a--;
            this.B++
        }
        this.O = this.B / this.P | 0;
        this.N = this.B % this.P;
        this.xa = this.C(ca[this.I]);
        this.ha = this.xa & 1;
        this.wc = this.xa & 8;
        0 != (this.xa & 16) && (this.Db =
            this.buffer.c(5));
        this.ha ? this.H = this.k = this.G = this.j = 0 : (this.na = this.oa = this.pa = 128, this.ad(), this.fc(this.G, this.H, this.ga, this.ea, this.da));
        for (var a = 0 != (this.xa & 2) ? this.C(da) : this.ha ? 63 : 0, e = 0, b = 32; 6 > e; e++)0 != (a & b) && this.Zc(e), b >>= 1
    };
    b.prototype.ad = function () {
        var a, e;
        e = 0;
        this.wc ? (a = this.C(Q), 0 != a && 1 != this.r ? (e = this.buffer.c(this.fa), e = (Math.abs(a) - 1 << this.fa) + e + 1, 0 > a && (e = -e)) : e = a, this.j += e, this.j > (this.r << 4) - 1 ? this.j -= this.r << 5 : this.j < -this.r << 4 && (this.j += this.r << 5), this.G = this.j, this.Ab && (this.G <<=
            1), a = this.C(Q), 0 != a && 1 != this.r ? (e = this.buffer.c(this.fa), e = (Math.abs(a) - 1 << this.fa) + e + 1, 0 > a && (e = -e)) : e = a, this.k += e, this.k > (this.r << 4) - 1 ? this.k -= this.r << 5 : this.k < -this.r << 4 && (this.k += this.r << 5), this.H = this.k, this.Ab && (this.H <<= 1)) : this.I == K && (this.H = this.k = this.G = this.j = 0)
    };
    b.prototype.fc = function (a, e, b, c, d) {
        var h, f, p, g, n, k, m = this.nb, r = this.lb, u = this.mb;
        h = this.A;
        f = h - 16;
        p = 1 == (e & 1);
        g = ((this.O << 4) + (e >> 1)) * h + (this.N << 4) + (a >> 1);
        n = this.O * h + this.N << 2;
        k = n + (h << 2);
        var t, q, v;
        if (1 == (a & 1))if (p)for (; n < k;) {
            t = b[g] +
                b[g + h];
            g++;
            for (p = 0; 4 > p; p++)q = b[g] + b[g + h], g++, v = t + q + 2 >> 2 & 255, t = b[g] + b[g + h], g++, v |= t + q + 2 << 6 & 65280, q = b[g] + b[g + h], g++, v |= t + q + 2 << 14 & 16711680, t = b[g] + b[g + h], g++, v |= t + q + 2 << 22 & 4278190080, m[n++] = v;
            n += f >> 2;
            g += f - 1
        } else for (; n < k;) {
            t = b[g++];
            for (p = 0; 4 > p; p++)q = b[g++], v = t + q + 1 >> 1 & 255, t = b[g++], v |= t + q + 1 << 7 & 65280, q = b[g++], v |= t + q + 1 << 15 & 16711680, t = b[g++], v |= t + q + 1 << 23 & 4278190080, m[n++] = v;
            n += f >> 2;
            g += f - 1
        } else if (p)for (; n < k;) {
            for (p = 0; 4 > p; p++)v = b[g] + b[g + h] + 1 >> 1 & 255, g++, v |= b[g] + b[g + h] + 1 << 7 & 65280, g++, v |= b[g] + b[g + h] + 1 << 15 & 16711680,
                g++, v |= b[g] + b[g + h] + 1 << 23 & 4278190080, g++, m[n++] = v;
            n += f >> 2;
            g += f
        } else for (; n < k;) {
            for (p = 0; 4 > p; p++)v = b[g], g++, v |= b[g] << 8, g++, v |= b[g] << 16, g++, v |= b[g] << 24, g++, m[n++] = v;
            n += f >> 2;
            g += f
        }
        h = this.sc;
        f = h - 8;
        p = 1 == (e / 2 & 1);
        g = ((this.O << 3) + (e / 2 >> 1)) * h + (this.N << 3) + (a / 2 >> 1);
        n = this.O * h + this.N << 1;
        k = n + (h << 1);
        if (1 == (a / 2 & 1))if (p)for (; n < k;) {
            a = c[g] + c[g + h];
            m = d[g] + d[g + h];
            g++;
            for (p = 0; 2 > p; p++)e = c[g] + c[g + h], t = d[g] + d[g + h], g++, b = a + e + 2 >> 2 & 255, q = m + t + 2 >> 2 & 255, a = c[g] + c[g + h], m = d[g] + d[g + h], g++, b |= a + e + 2 << 6 & 65280, q |= m + t + 2 << 6 & 65280, e = c[g] + c[g +
                h], t = d[g] + d[g + h], g++, b |= a + e + 2 << 14 & 16711680, q |= m + t + 2 << 14 & 16711680, a = c[g] + c[g + h], m = d[g] + d[g + h], g++, b |= a + e + 2 << 22 & 4278190080, q |= m + t + 2 << 22 & 4278190080, u[n] = b, r[n] = q, n++;
            n += f >> 2;
            g += f - 1
        } else for (; n < k;) {
            a = c[g];
            m = d[g];
            g++;
            for (p = 0; 2 > p; p++)e = c[g], t = d[g++], b = a + e + 1 >> 1 & 255, q = m + t + 1 >> 1 & 255, a = c[g], m = d[g++], b |= a + e + 1 << 7 & 65280, q |= m + t + 1 << 7 & 65280, e = c[g], t = d[g++], b |= a + e + 1 << 15 & 16711680, q |= m + t + 1 << 15 & 16711680, a = c[g], m = d[g++], b |= a + e + 1 << 23 & 4278190080, q |= m + t + 1 << 23 & 4278190080, u[n] = b, r[n] = q, n++;
            n += f >> 2;
            g += f - 1
        } else if (p)for (; n < k;) {
            for (p =
                     0; 2 > p; p++)b = c[g] + c[g + h] + 1 >> 1 & 255, q = d[g] + d[g + h] + 1 >> 1 & 255, g++, b |= c[g] + c[g + h] + 1 << 7 & 65280, q |= d[g] + d[g + h] + 1 << 7 & 65280, g++, b |= c[g] + c[g + h] + 1 << 15 & 16711680, q |= d[g] + d[g + h] + 1 << 15 & 16711680, g++, b |= c[g] + c[g + h] + 1 << 23 & 4278190080, q |= d[g] + d[g + h] + 1 << 23 & 4278190080, g++, u[n] = b, r[n] = q, n++;
            n += f >> 2;
            g += f
        } else for (; n < k;) {
            for (p = 0; 2 > p; p++)b = c[g], q = d[g], g++, b |= c[g] << 8, q |= d[g] << 8, g++, b |= c[g] << 16, q |= d[g] << 16, g++, b |= c[g] << 24, q |= d[g] << 24, g++, u[n] = b, r[n] = q, n++;
            n += f >> 2;
            g += f
        }
    };
    b.prototype.pa;
    b.prototype.oa;
    b.prototype.na;
    b.prototype.g =
        null;
    b.prototype.Zc = function (a) {
        var b = 0, c;
        this.xb(this.g, 0);
        if (this.ha) {
            4 > a ? (b = this.pa, c = this.C(ea)) : (b = 4 == a ? this.oa : this.na, c = this.C(fa));
            if (0 < c) {
                var d = this.buffer.c(c);
                this.g[0] = 0 != (d & 1 << c - 1) ? b + d : b + (-1 << c | d + 1)
            } else this.g[0] = b;
            4 > a ? this.pa = this.g[0] : 4 == a ? this.oa = this.g[0] : this.na = this.g[0];
            this.g[0] <<= 8;
            c = this.tc;
            b = 1
        } else c = this.Ac;
        for (d = 0; ;) {
            var f = 0, d = this.C(ga);
            if (1 == d && 0 < b && 0 == this.buffer.c(1))break;
            65535 == d ? (f = this.buffer.c(6), d = this.buffer.c(8), 0 == d ? d = this.buffer.c(8) : 128 == d ? d = this.buffer.c(8) -
                256 : 128 < d && (d -= 256)) : (f = d >> 8, d &= 255, this.buffer.c(1) && (d = -d));
            b += f;
            f = O[b];
            b++;
            d <<= 1;
            this.ha || (d += 0 > d ? -1 : 1);
            d = d * this.Db * c[f] >> 4;
            0 == (d & 1) && (d -= 0 < d ? 1 : -1);
            2047 < d ? d = 2047 : -2048 > d && (d = -2048);
            this.g[f] = d * ha[f]
        }
        1 == b ? this.xb(this.g, this.g[0] + 128 >> 8) : this.Kc();
        4 > a ? (b = this.aa, d = this.A - 8, c = this.O * this.A + this.N << 4, 0 != (a & 1) && (c += 8), 0 != (a & 2) && (c += this.A << 3)) : (b = 4 == a ? this.Z : this.$, d = (this.A >> 1) - 8, c = (this.O * this.A << 2) + (this.N << 3));
        this.ha ? this.ec(this.g, b, c, d) : this.$b(this.g, b, c, d)
    };
    b.prototype.ec = function (a, b, c, d) {
        for (var f =
            0, h = 0; 8 > h; h++) {
            for (var k = 0; 8 > k; k++)b[c++] = a[f++];
            c += d
        }
    };
    b.prototype.$b = function (a, b, c, d) {
        for (var f = 0, h = 0; 8 > h; h++) {
            for (var k = 0; 8 > k; k++)b[c++] += a[f++];
            c += d
        }
    };
    b.prototype.Yc = function (a, b, c, d) {
        for (var f = 0, h = 0; 8 > h; h++) {
            for (var k = 0; 8 > k; k++) {
                var p = a[f++];
                b[c++] = 255 < p ? 255 : 0 > p ? 0 : p
            }
            c += d
        }
    };
    b.prototype.Tc = function (a, b, c, d) {
        for (var f = 0, h = 0; 8 > h; h++) {
            for (var k = 0; 8 > k; k++) {
                var p = a[f++] + b[c];
                b[c++] = 255 < p ? 255 : 0 > p ? 0 : p
            }
            c += d
        }
    };
    b.prototype.Kc = function () {
        var a, b, c, d, f, h, k, p, g, n, u, m, r = this.g;
        for (m = 0; 8 > m; ++m)a = r[32 + m], b = r[16 +
            m] + r[48 + m], c = r[40 + m] - r[24 + m], h = r[8 + m] + r[56 + m], k = r[24 + m] + r[40 + m], d = r[8 + m] - r[56 + m], f = h + k, p = r[0 + m], u = (473 * d - 196 * c + 128 >> 8) - f, h = u - (362 * (h - k) + 128 >> 8), k = p - a, g = (362 * (r[16 + m] - r[48 + m]) + 128 >> 8) - b, n = p + a, a = k + g, p = n + b, k -= g, b = n - b, c = -h - (473 * c + 196 * d + 128 >> 8), r[0 + m] = f + p, r[8 + m] = u + a, r[16 + m] = k - h, r[24 + m] = b - c, r[32 + m] = b + c, r[40 + m] = h + k, r[48 + m] = a - u, r[56 + m] = p - f;
        for (m = 0; 64 > m; m += 8)a = r[4 + m], b = r[2 + m] + r[6 + m], c = r[5 + m] - r[3 + m], h = r[1 + m] + r[7 + m], k = r[3 + m] + r[5 + m], d = r[1 + m] - r[7 + m], f = h + k, p = r[0 + m], u = (473 * d - 196 * c + 128 >> 8) - f, h = u - (362 * (h - k) + 128 >>
            8), k = p - a, g = (362 * (r[2 + m] - r[6 + m]) + 128 >> 8) - b, n = p + a, a = k + g, p = n + b, k -= g, b = n - b, c = -h - (473 * c + 196 * d + 128 >> 8), r[0 + m] = f + p + 128 >> 8, r[1 + m] = u + a + 128 >> 8, r[2 + m] = k - h + 128 >> 8, r[3 + m] = b - c + 128 >> 8, r[4 + m] = b + c + 128 >> 8, r[5 + m] = h + k + 128 >> 8, r[6 + m] = a - u + 128 >> 8, r[7 + m] = p - f + 128 >> 8
    };
    var H = 30, u = 1, c = 3E5, D = 5E7, x = 300, G = 1, R = [0, 23.976, 24, 25, 29.97, 30, 50, 59.94, 60, 15, 5, 10, 12, 15, 0, 0], O = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38,
            31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]), U = new Uint8Array([8, 16, 19, 22, 26, 27, 29, 34, 16, 16, 22, 24, 27, 29, 34, 37, 19, 22, 26, 27, 29, 34, 34, 38, 22, 22, 26, 27, 29, 34, 37, 40, 22, 26, 27, 29, 32, 35, 40, 48, 26, 27, 29, 32, 35, 40, 48, 58, 26, 27, 29, 34, 38, 46, 56, 69, 27, 29, 35, 38, 46, 56, 69, 83]), V = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]), ha = new Uint8Array([32, 44, 42, 38, 32, 25, 17, 9, 44,
            62, 58, 52, 44, 35, 24, 12, 42, 58, 55, 49, 42, 33, 23, 12, 38, 52, 49, 44, 38, 30, 20, 10, 32, 44, 42, 38, 32, 25, 17, 9, 25, 35, 33, 30, 25, 20, 14, 7, 17, 24, 23, 20, 17, 14, 9, 5, 9, 12, 12, 10, 9, 7, 5, 2]), P = new Int16Array([3, 6, 0, 9, 12, 0, 0, 0, 1, 15, 18, 0, 21, 24, 0, 27, 30, 0, 33, 36, 0, 0, 0, 3, 0, 0, 2, 39, 42, 0, 45, 48, 0, 0, 0, 5, 0, 0, 4, 51, 54, 0, 57, 60, 0, 0, 0, 7, 0, 0, 6, 63, 66, 0, 69, 72, 0, 75, 78, 0, 81, 84, 0, -1, 87, 0, -1, 90, 0, 93, 96, 0, 99, 102, 0, 105, 108, 0, 111, 114, 0, 0, 0, 9, 0, 0, 8, 117, 120, 0, 123, 126, 0, 129, 132, 0, 135, 138, 0, 0, 0, 15, 0, 0, 14, 0, 0, 13, 0, 0, 12, 0, 0, 11, 0, 0, 10, 141, -1, 0, -1, 144, 0, 147, 150, 0,
            153, 156, 0, 159, 162, 0, 165, 168, 0, 171, 174, 0, 177, 180, 0, 183, -1, 0, -1, 186, 0, 189, 192, 0, 195, 198, 0, 201, 204, 0, 207, 210, 0, 213, 216, 0, 219, 222, 0, 0, 0, 21, 0, 0, 20, 0, 0, 19, 0, 0, 18, 0, 0, 17, 0, 0, 16, 0, 0, 35, 0, 0, 34, 0, 0, 33, 0, 0, 32, 0, 0, 31, 0, 0, 30, 0, 0, 29, 0, 0, 28, 0, 0, 27, 0, 0, 26, 0, 0, 25, 0, 0, 24, 0, 0, 23, 0, 0, 22]), ia = new Int8Array([3, 6, 0, -1, 9, 0, 0, 0, 1, 0, 0, 17]), ja = new Int8Array([3, 6, 0, 9, 12, 0, 0, 0, 10, 15, 18, 0, 0, 0, 2, 21, 24, 0, 0, 0, 8, 27, 30, 0, 33, 36, 0, -1, 39, 0, 0, 0, 18, 0, 0, 26, 0, 0, 1, 0, 0, 17]), ka = new Int8Array([3, 6, 0, 9, 15, 0, 12, 18, 0, 24, 21, 0, 0, 0, 12, 27, 30, 0, 0, 0,
            14, 39, 42, 0, 36, 33, 0, 0, 0, 4, 0, 0, 6, 54, 48, 0, 45, 51, 0, 0, 0, 8, 0, 0, 10, -1, 57, 0, 0, 0, 1, 60, 63, 0, 0, 0, 30, 0, 0, 17, 0, 0, 22, 0, 0, 26]), da = new Int16Array([6, 3, 0, 9, 18, 0, 12, 15, 0, 24, 33, 0, 36, 39, 0, 27, 21, 0, 30, 42, 0, 60, 57, 0, 54, 48, 0, 69, 51, 0, 81, 75, 0, 63, 84, 0, 45, 66, 0, 72, 78, 0, 0, 0, 60, 105, 120, 0, 132, 144, 0, 114, 108, 0, 126, 141, 0, 87, 93, 0, 117, 96, 0, 0, 0, 32, 135, 138, 0, 99, 123, 0, 129, 102, 0, 0, 0, 4, 90, 111, 0, 0, 0, 8, 0, 0, 16, 0, 0, 44, 150, 168, 0, 0, 0, 28, 0, 0, 52, 0, 0, 62, 183, 177, 0, 156, 180, 0, 0, 0, 1, 165, 162, 0, 0, 0, 61, 0, 0, 56, 171, 174, 0, 0, 0, 2, 0, 0, 40, 153, 186, 0, 0, 0, 48, 192, 189,
            0, 147, 159, 0, 0, 0, 20, 0, 0, 12, 240, 249, 0, 0, 0, 63, 231, 225, 0, 195, 219, 0, 252, 198, 0, 0, 0, 24, 0, 0, 36, 0, 0, 3, 207, 261, 0, 243, 237, 0, 204, 213, 0, 210, 234, 0, 201, 228, 0, 216, 222, 0, 258, 255, 0, 264, 246, 0, -1, 282, 0, 285, 291, 0, 0, 0, 33, 0, 0, 9, 318, 330, 0, 306, 348, 0, 0, 0, 5, 0, 0, 10, 279, 267, 0, 0, 0, 6, 0, 0, 18, 0, 0, 17, 0, 0, 34, 339, 357, 0, 309, 312, 0, 270, 276, 0, 327, 321, 0, 351, 354, 0, 303, 297, 0, 294, 288, 0, 300, 273, 0, 342, 345, 0, 315, 324, 0, 336, 333, 0, 363, 375, 0, 0, 0, 41, 0, 0, 14, 0, 0, 21, 372, 366, 0, 360, 369, 0, 0, 0, 11, 0, 0, 19, 0, 0, 7, 0, 0, 35, 0, 0, 13, 0, 0, 50, 0, 0, 49, 0, 0, 58, 0, 0, 37, 0, 0,
            25, 0, 0, 45, 0, 0, 57, 0, 0, 26, 0, 0, 29, 0, 0, 38, 0, 0, 53, 0, 0, 23, 0, 0, 43, 0, 0, 46, 0, 0, 42, 0, 0, 22, 0, 0, 54, 0, 0, 51, 0, 0, 15, 0, 0, 30, 0, 0, 39, 0, 0, 47, 0, 0, 55, 0, 0, 27, 0, 0, 59, 0, 0, 31]), Q = new Int16Array([3, 6, 0, 12, 9, 0, 0, 0, 0, 18, 15, 0, 24, 21, 0, 0, 0, -1, 0, 0, 1, 27, 30, 0, 36, 33, 0, 0, 0, 2, 0, 0, -2, 42, 45, 0, 48, 39, 0, 60, 54, 0, 0, 0, 3, 0, 0, -3, 51, 57, 0, -1, 69, 0, 81, 75, 0, 78, 63, 0, 72, 66, 0, 96, 84, 0, 87, 93, 0, -1, 99, 0, 108, 105, 0, 0, 0, -4, 90, 102, 0, 0, 0, 4, 0, 0, -7, 0, 0, 5, 111, 123, 0, 0, 0, -5, 0, 0, 7, 114, 120, 0, 126, 117, 0, 0, 0, -6, 0, 0, 6, 153, 162, 0, 150, 147, 0, 135, 138, 0, 156, 141, 0, 129, 159, 0, 132,
            144, 0, 0, 0, 10, 0, 0, 9, 0, 0, 8, 0, 0, -8, 171, 198, 0, 0, 0, -9, 180, 192, 0, 168, 183, 0, 165, 186, 0, 174, 189, 0, 0, 0, -10, 177, 195, 0, 0, 0, 12, 0, 0, 16, 0, 0, 13, 0, 0, 14, 0, 0, 11, 0, 0, 15, 0, 0, -16, 0, 0, -12, 0, 0, -14, 0, 0, -15, 0, 0, -11, 0, 0, -13]), ea = new Int8Array([6, 3, 0, 18, 15, 0, 9, 12, 0, 0, 0, 1, 0, 0, 2, 27, 24, 0, 21, 30, 0, 0, 0, 0, 36, 33, 0, 0, 0, 4, 0, 0, 3, 39, 42, 0, 0, 0, 5, 0, 0, 6, 48, 45, 0, 51, -1, 0, 0, 0, 7, 0, 0, 8]), fa = new Int8Array([6, 3, 0, 12, 9, 0, 18, 15, 0, 24, 21, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 30, 27, 0, 0, 0, 3, 36, 33, 0, 0, 0, 4, 42, 39, 0, 0, 0, 5, 48, 45, 0, 0, 0, 6, 51, -1, 0, 0, 0, 7, 0, 0, 8]), ga = new Int32Array([3,
            6, 0, 12, 9, 0, 0, 0, 1, 21, 24, 0, 18, 15, 0, 39, 27, 0, 33, 30, 0, 42, 36, 0, 0, 0, 257, 60, 66, 0, 54, 63, 0, 48, 57, 0, 0, 0, 513, 51, 45, 0, 0, 0, 2, 0, 0, 3, 81, 75, 0, 87, 93, 0, 72, 78, 0, 96, 90, 0, 0, 0, 1025, 69, 84, 0, 0, 0, 769, 0, 0, 258, 0, 0, 1793, 0, 0, 65535, 0, 0, 1537, 111, 108, 0, 0, 0, 1281, 105, 102, 0, 117, 114, 0, 99, 126, 0, 120, 123, 0, 156, 150, 0, 162, 159, 0, 144, 147, 0, 129, 135, 0, 138, 132, 0, 0, 0, 2049, 0, 0, 4, 0, 0, 514, 0, 0, 2305, 153, 141, 0, 165, 171, 0, 180, 168, 0, 177, 174, 0, 183, 186, 0, 0, 0, 2561, 0, 0, 3329, 0, 0, 6, 0, 0, 259, 0, 0, 5, 0, 0, 770, 0, 0, 2817, 0, 0, 3073, 228, 225, 0, 201, 210, 0, 219, 213, 0, 234, 222,
            0, 216, 231, 0, 207, 192, 0, 204, 189, 0, 198, 195, 0, 243, 261, 0, 273, 240, 0, 246, 237, 0, 249, 258, 0, 279, 276, 0, 252, 255, 0, 270, 282, 0, 264, 267, 0, 0, 0, 515, 0, 0, 260, 0, 0, 7, 0, 0, 1026, 0, 0, 1282, 0, 0, 4097, 0, 0, 3841, 0, 0, 3585, 315, 321, 0, 333, 342, 0, 312, 291, 0, 375, 357, 0, 288, 294, 0, -1, 369, 0, 285, 303, 0, 318, 363, 0, 297, 306, 0, 339, 309, 0, 336, 348, 0, 330, 300, 0, 372, 345, 0, 351, 366, 0, 327, 354, 0, 360, 324, 0, 381, 408, 0, 417, 420, 0, 390, 378, 0, 435, 438, 0, 384, 387, 0, 0, 0, 2050, 396, 402, 0, 465, 462, 0, 0, 0, 8, 411, 399, 0, 429, 432, 0, 453, 414, 0, 426, 423, 0, 0, 0, 10, 0, 0, 9, 0, 0, 11, 0, 0, 5377,
            0, 0, 1538, 0, 0, 771, 0, 0, 5121, 0, 0, 1794, 0, 0, 4353, 0, 0, 4609, 0, 0, 4865, 444, 456, 0, 0, 0, 1027, 459, 450, 0, 0, 0, 261, 393, 405, 0, 0, 0, 516, 447, 441, 0, 516, 519, 0, 486, 474, 0, 510, 483, 0, 504, 498, 0, 471, 537, 0, 507, 501, 0, 522, 513, 0, 534, 531, 0, 468, 477, 0, 492, 495, 0, 549, 546, 0, 525, 528, 0, 0, 0, 263, 0, 0, 2562, 0, 0, 2306, 0, 0, 5633, 0, 0, 5889, 0, 0, 6401, 0, 0, 6145, 0, 0, 1283, 0, 0, 772, 0, 0, 13, 0, 0, 12, 0, 0, 14, 0, 0, 15, 0, 0, 517, 0, 0, 6657, 0, 0, 262, 540, 543, 0, 480, 489, 0, 588, 597, 0, 0, 0, 27, 609, 555, 0, 606, 603, 0, 0, 0, 19, 0, 0, 22, 591, 621, 0, 0, 0, 18, 573, 576, 0, 564, 570, 0, 0, 0, 20, 552, 582,
            0, 0, 0, 21, 558, 579, 0, 0, 0, 23, 612, 594, 0, 0, 0, 25, 0, 0, 24, 600, 615, 0, 0, 0, 31, 0, 0, 30, 0, 0, 28, 0, 0, 29, 0, 0, 26, 0, 0, 17, 0, 0, 16, 567, 618, 0, 561, 585, 0, 654, 633, 0, 0, 0, 37, 645, 648, 0, 0, 0, 36, 630, 636, 0, 0, 0, 34, 639, 627, 0, 663, 666, 0, 657, 624, 0, 651, 642, 0, 669, 660, 0, 0, 0, 35, 0, 0, 267, 0, 0, 40, 0, 0, 268, 0, 0, 266, 0, 0, 32, 0, 0, 264, 0, 0, 265, 0, 0, 38, 0, 0, 269, 0, 0, 270, 0, 0, 33, 0, 0, 39, 0, 0, 7937, 0, 0, 6913, 0, 0, 7681, 0, 0, 4098, 0, 0, 7425, 0, 0, 7169, 0, 0, 271, 0, 0, 274, 0, 0, 273, 0, 0, 272, 0, 0, 1539, 0, 0, 2818, 0, 0, 3586, 0, 0, 3330, 0, 0, 3074, 0, 0, 3842]), S = 150, ba = 1, K = 2, W = 3, J = 195, N = 184,
        Z = 1, aa = 175, T = 0, X = 181, Y = 178, ca = [null, ia, ja, ka];
    d.Va = -1;
    d.Wa = -2;
    d.prototype.eb = function () {
        this.Ub();
        if (this.$a) {
            var a;
            (a = this.ud()) && this.Ad(a)
        }
    };
    d.prototype.Ad = function (a) {
        for (var b = this.d, c = 0; c < a; c++)this.Da(b), b = b.next;
        this.d = b;
        for (a = this.m; a.next && a.next.start < this.d.start;)a = a.next;
        a.start = this.d.start;
        this.m = a
    };
    d.prototype.ud = function () {
        for (var a = 0, b = this.d; b && b.start < this.a.start;)a++, b = b.next;
        a -= 3;
        return 0 < a ? a : 0
    };
    d.prototype.sd = function (a, b, c, d) {
        if (a > this.za || this.Qb)return !1;
        if (this.ba.end +
            1 == a)var f = ""; else {
            for (var h = f = this.d; f && f.start < a;)h = f, f = f.next;
            if (h.start <= a && h.end >= a) {
                if (f && h.end + 1 == f.start)for (; f && h.end + 1 == f.start;)h = f, f = f.next;
                a = h.end + 1
            }
            f = f ? f.start - 1 : ""
        }
        b = (!this.a || d ? a : this.a.end + 1) + c * b - 1;
        if (a > b)return !1;
        if (f > b || "" == f)f = b;
        return {start: a, end: f}
    };
    d.prototype.vd = function () {
        if (!this.TimeRanges) {
            this.TimeRanges = {};
            var a = this;
            this.TimeRanges.__defineGetter__("length", function () {
                var b = 0;
                if (a.m) {
                    b++;
                    for (var c = a.m; c.next;)c = c.next, b++
                }
                return b
            });
            this.TimeRanges.start = function (a) {
                return this.Fc(a,
                    "start")
            };
            this.TimeRanges.end = function (a) {
                return this.Fc(a, "end")
            };
            this.TimeRanges.Fc = function (b, c) {
                for (var d = 0, f = a.m; ;) {
                    if (d == b)return f[c];
                    f = f.next;
                    d++
                }
            }
        }
        return this.TimeRanges
    };
    d.prototype.Vc = function (a) {
        this.za = a.total;
        a.data = new Uint8Array(a.data);
        a.next = null;
        if (this.d)if (this.ba.end + 1 <= a.start)this.ba.next = a, this.ba = this.ba.next, this.ca.end + 1 == a.start ? this.ca.end = a.end : (a = {
            start: a.start,
            end: a.end,
            next: null
        }, this.ca.next = a, this.ca = this.ca.next); else if (this.d.start >= a.end + 1)a.next = this.d, this.d =
            a, this.m.start == a.end + 1 ? this.m.start = a.start : (a = {
            start: a.start,
            end: a.end,
            next: null
        }, a.next = this.m, this.m = a); else {
            for (var b = this.d, c = this.d; b.end < a.start;)c = b, b = b.next;
            a.next = b;
            c.next = a;
            for (c = b = this.m; b.end < a.start;)c = b, b = b.next;
            c.end + 1 == a.start && b.start == a.end + 1 ? (c.end = b.end, c.next = b.next) : c.end + 1 == a.start ? c.end = a.end : b.start == a.end + 1 ? b.start = a.start : (a = {
                start: a.start,
                end: a.end,
                next: null
            }, a.next = c.next, c.next = a)
        } else this.a = this.ba = this.d = a, this.J = this.d.data.byteLength, this.ca = this.m = {
            start: a.start,
            end: a.end, next: null
        }
    };
    d.prototype.Oa = function () {
        this.b = this.b + 7 >> 3 << 3;
        this.index = this.index + 7 >> 3 << 3;
        for (var a = this.za - 4 << 3, b = this.b + 7 >> 3; this.index < a; b++) {
            if (this.zc()) {
                a = (this.b >> 3) + 4 - this.a.data.byteLength - 1;
                if (0 < a) {
                    if (this.a.next && this.a.end + 1 == this.a.next.start)return this.Sa = this.a, this.a = this.a.next, this.J = this.a.data.byteLength, this.index = this.a.start + a << 3, this.b = a << 3, this.a.data[a];
                    this.Q(this.a.end + 1);
                    return this.Wa
                }
                this.b += 32;
                this.index += 32;
                return this.a.data[this.b - 8 >> 3]
            }
            this.advance(8)
        }
        this.index =
            this.za << 3;
        return d.Va
    };
    d.prototype.zc = function () {
        if (this.index + 7 >> 3 >= this.za)return !0;
        var a = this.b + 7 >> 3, b = (this.J << 3) - a;
        if (2 < b)return 0 == this.a.data[a] && 0 == this.a.data[a + 1] && 1 == this.a.data[a + 2];
        if (this.a.next && this.a.end + 1 == this.a.next.start)switch (b) {
            case 2:
                return 0 == this.a.data[a] && 0 == this.a.data[a + 1] && 1 == this.a.next.data[0];
            case 1:
                return 0 == this.a.data[a] && 0 == this.a.next.data[0] && 1 == this.a.next.data[1];
            default:
                return 0 == this.a.next.data[0] && 0 == this.a.next.data[1] && 1 == this.a.next.data[2]
        } else return this.Q(this.a.end +
            1), this.Wa
    };
    d.prototype.appendBuffer = function (a, b) {
        var c = new Uint8Array(a.byteLength + b.byteLength);
        c.set(new Uint8Array(a), 0);
        c.set(new Uint8Array(b), a.byteLength);
        return c
    };
    d.prototype.c = function (a) {
        var b = !1, c = this.b >> 3, d = 8 - this.b % 8;
        if ((this.a.end + 1 << 3) - 1 >= this.index + a)var f = this.a.data; else if (this.a.next && this.a.end + 1 == this.a.next.start)b = !0, f = 1 == a ? this.a.data : this.appendBuffer(this.a.data.buffer, this.a.next.data.buffer), this.Sa = this.a, this.a = this.a.next, this.J = this.a.data.byteLength, this.eb();
        else return this.Q(this.a.end + 1), this.Wa;
        if (d >= a)return this.index += a, b ? (this.b = this.index - (this.a.start << 3), this.b >= this.d.byteLength << 3 && (this.b -= this.d.byteLength << 3)) : this.b += a, f[c] >> d - a & 255 >> 8 - a;
        var h = (this.b + a) % 8, k = this.b + a - 1 >> 3, d = f[c] & 255 >> 8 - d;
        for (c++; c < k; c++)d <<= 8, d |= f[c];
        0 < h ? d = d << h | f[c] >> 8 - h : (d <<= 8, d |= f[c]);
        this.index += a;
        this.b = b ? this.index - (this.a.start << 3) : this.b + a;
        return d
    };
    d.prototype.Hc = function (a) {
        0 < a ? this.a.next && this.a.end + 1 == this.a.next.start ? (this.Sa = this.a, this.a = this.a.next, this.J =
            this.a.data.byteLength, this.b = a - 1, this.index = (this.a.start << 3) + this.b, this.eb()) : this.Q(this.a.end + 1) : (this.a = this.Sa, this.J = this.a.data.byteLength, this.b = (this.a.data.byteLength << 3) + a, this.index = (this.a.end + 1 << 3) + a)
    };
    d.prototype.advance = function (a) {
        var b;
        return 0 >= (b = this.b + a - ((this.J << 3) - 1)) ? (this.index += a, this.b += a) : this.Hc(b)
    };
    d.prototype.Cc = function (a) {
        a <= this.b ? (this.index -= a, this.b -= a) : this.Hc(this.b - a)
    };
    d.prototype.seek = function (a) {
        var b = this.d;
        do {
            if (b.end >= a && b.start <= a)return this.a = b, this.J =
                this.a.data.byteLength, this.b = a - this.a.start << 3, this.index = a << 3, this.eb(), !0;
            if (!b.next || b.next.start > a)return this.Q(a), !1;
            b = b.next
        } while (1)
    };
    f.jsv_helper = function () {
    };
    f.jsv_helper.iPhoneVersion = function () {
        if (!/(iPhone)/g.test(navigator.userAgent))return NaN;
        var a = f.screen.height;
        switch (a) {
            case 480:
                return "4";
            case 568:
                return "5";
            case 667:
                return "6";
            case 736:
                return "6";
            default:
                return 736 < a ? "6" : "4"
        }
    }
})(window);