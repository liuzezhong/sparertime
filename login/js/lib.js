if (function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = "length"in t && t.length, n = K.type(t);
        return "function" !== n&&!K.isWindow(t) && (!(1 !== t.nodeType ||!e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }
    function r(t, e, n) {
        if (K.isFunction(e))
            return K.grep(t, function(t, r) {
                return !!e.call(t, r, t) !== n
            });
        if (e.nodeType)
            return K.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (at.test(e))
                return K.filter(e, t, n);
            e = K.filter(e, t)
        }
        return K.grep(t, function(t) {
            return V.call(e, t) >= 0 !== n
        })
    }
    function i(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    function o(t) {
        var e = ht[t] = {};
        return K.each(t.match(dt) || [], function(t, n) {
            e[n]=!0
        }), e
    }
    function s() {
        Z.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), K.ready()
    }
    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = K.expando + a.uid++
    }
    function l(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace(wt, "-$1").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : + n + "" === n?+n : bt.test(n) ? K.parseJSON(n) : n)
                } catch (i) {}
                yt.set(t, e, n)
        } else 
            n = void 0;
        return n
    }
    function u() {
        return !0
    }
    function c() {
        return !1
    }
    function f() {
        try {
            return Z.activeElement
        } catch (t) {}
    }
    function p(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function d(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }
    function h(t) {
        var e = Pt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }
    function g(t, e) {
        for (var n = 0, r = t.length; n < r; n++)
            mt.set(t[n], "globalEval", !e || mt.get(e[n], "globalEval"))
    }
    function v(t, e) {
        var n, r, i, o, s, a, l, u;
        if (1 === e.nodeType) {
            if (mt.hasData(t) && (o = mt.access(t), s = mt.set(e, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (i in u)
                    for (n = 0, r = u[i].length; n < r; n++)
                        K.event.add(e, i, u[i][n])
                    }
            yt.hasData(t) && (a = yt.access(t), l = K.extend({}, a), yt.set(e, l))
        }
    }
    function m(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*"): t.querySelectorAll ? t.querySelectorAll(e || "*"): [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], n) : n
    }
    function y(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Et.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }
    function b(e, n) {
        var r, i = K(n.createElement(e)).appendTo(n.body), o = t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0])) ? r.display: K.css(i[0], "display");
        return i.detach(), o
    }
    function w(t) {
        var e = Z, n = It[t];
        return n || (n = b(t, e), "none" !== n && n || (qt = (qt || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = qt[0].contentDocument, e.write(), e.close(), n = b(t, e), qt.detach()), It[t] = n), n
    }
    function x(t, e, n) {
        var r, i, o, s, a = t.style;
        return n = n || Wt(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || K.contains(t.ownerDocument, t) || (s = K.style(t, e)), Rt.test(s) && Ht.test(e) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }
    function T(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function C(t, e) {
        if (e in t)
            return e;
        for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Yt.length; i--;)
            if (e = Yt[i] + n, e in t)
                return e;
        return r
    }
    function E(t, e, n) {
        var r = zt.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }
    function k(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2)
            "margin" === n && (s += K.css(t, n + Tt[o], !0, i)), r ? ("content" === n && (s -= K.css(t, "padding" + Tt[o], !0, i)), "margin" !== n && (s -= K.css(t, "border" + Tt[o] + "Width", !0, i))) : (s += K.css(t, "padding" + Tt[o], !0, i), "padding" !== n && (s += K.css(t, "border" + Tt[o] + "Width", !0, i)));
        return s
    }
    function D(t, e, n) {
        var r=!0, i = "width" === e ? t.offsetWidth : t.offsetHeight, o = Wt(t), s = "border-box" === K.css(t, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = x(t, e, o), (i < 0 || null == i) && (i = t.style[e]), Rt.test(i))
                return i;
            r = s && (G.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + k(t, e, n || (s ? "border" : "content"), r, o) + "px"
    }
    function $(t, e) {
        for (var n, r, i, o = [], s = 0, a = t.length; s < a; s++)
            r = t[s], r.style && (o[s] = mt.get(r, "olddisplay"), n = r.style.display, e ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ct(r) && (o[s] = mt.access(r, "olddisplay", w(r.nodeName)))) : (i = Ct(r), "none" === n && i || mt.set(r, "olddisplay", i ? n : K.css(r, "display"))));
        for (s = 0; s < a; s++)
            r = t[s], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[s] || "" : "none"));
        return t
    }
    function A(t, e, n, r, i) {
        return new A.prototype.init(t, e, n, r, i)
    }
    function S() {
        return setTimeout(function() {
            Gt = void 0
        }), Gt = K.now()
    }
    function _(t, e) {
        var n, r = 0, i = {
            height: t
        };
        for (e = e ? 1 : 0; r < 4; r += 2 - e)
            n = Tt[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }
    function N(t, e, n) {
        for (var r, i = (ne[e] || []).concat(ne["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, e, t))
                return r
    }
    function F(t, e, n) {
        var r, i, o, s, a, l, u, c, f = this, p = {}, d = t.style, h = t.nodeType && Ct(t), g = mt.get(t, "fxshow");
        n.queue || (a = K._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, K.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = K.css(t, "display"), c = "none" === u ? mt.get(t, "olddisplay") || w(t.nodeName) : u, "inline" === c && "none" === K.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in e)
            if (i = e[r], Jt.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i ||!g || void 0 === g[r])
                        continue;
                        h=!0
                }
                p[r] = g && g[r] || K.style(t, r)
            } else 
                u = void 0;
        if (K.isEmptyObject(p))
            "inline" === ("none" === u ? w(t.nodeName) : u) && (d.display = u);
        else {
            g ? "hidden"in g && (h = g.hidden) : g = mt.access(t, "fxshow", {}), o && (g.hidden=!h), h ? K(t).show() : f.done(function() {
                K(t).hide()
            }), f.done(function() {
                var e;
                mt.remove(t, "fxshow");
                for (e in p)
                    K.style(t, e, p[e])
            });
            for (r in p)
                s = N(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function j(t, e) {
        var n, r, i, o, s;
        for (n in t)
            if (r = K.camelCase(n), i = e[r], o = t[n], K.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), s = K.cssHooks[r], s && "expand"in s) {
                o = s.expand(o), delete t[r];
                for (n in o)
                    n in t || (t[n] = o[n], e[n] = i)
            } else 
                e[r] = i
    }
    function L(t, e, n) {
        var r, i, o = 0, s = ee.length, a = K.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (i)
                return !1;
            for (var e = Gt || S(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, o = 1 - r, s = 0, l = u.tweens.length; s < l; s++)
                u.tweens[s].run(o);
            return a.notifyWith(t, [u, o, n]), o < 1 && l ? n : (a.resolveWith(t, [u]), !1)
        }, u = a.promise({
            elem: t,
            props: K.extend({}, e),
            opts: K.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Gt || S(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var r = K.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(r), r
            },
            stop: function(e) {
                var n = 0, r = e ? u.tweens.length: 0;
                if (i)
                    return this;
                for (i=!0; n < r; n++)
                    u.tweens[n].run(1);
                return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
            }
        }), c = u.props;
        for (j(c, u.opts.specialEasing);
        o < s;
        o++)if (r = ee[o].call(u, t, c, u.opts))
            return r;
        return K.map(c, N, u), K.isFunction(u.opts.start) && u.opts.start.call(t, u), K.fx.timer(K.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function O(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0, o = e.toLowerCase().match(dt) || [];
            if (K.isFunction(n))
                for (; r = o[i++];)
                    "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
            }
    }
    function P(t, e, n, r) {
        function i(a) {
            var l;
            return o[a]=!0, K.each(t[a] || [], function(t, a) {
                var u = a(e, n, r);
                return "string" != typeof u || s || o[u] ? s?!(l = u) : void 0 : (e.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {}, s = t === be;
        return i(e.dataTypes[0]) ||!o["*"] && i("*")
    }
    function B(t, e) {
        var n, r, i = K.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && K.extend(!0, t, r), t
    }
    function M(t, e, n) {
        for (var r, i, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];)
            l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    l.unshift(i);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (i in n) {
                if (!l[0] || t.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o)
            return o !== l[0] && l.unshift(o), n[o]
    }
    function q(t, e, n, r) {
        var i, o, s, a, l, u = {}, c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (s = u[l + " " + o] || u["* " + o], !s)
                        for (i in u)
                            if (a = i.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                s===!0 ? s = u[i] : u[i]!==!0 && (o = a[0], c.unshift(a[1]));
                                break
                            }
                            if (s!==!0)
                                if (s && t["throws"])
                                    e = s(e);
                                else 
                                    try {
                                        e = s(e)
                                    } catch (f) {
                                        return {
                                            state: "parsererror",
                                            error: s ? f: "No conversion from " + l + " to " + o
                                        }
                                    }
                                }
        return {
            state: "success",
            data: e
        }
    }
    function I(t, e, n, r) {
        var i;
        if (K.isArray(e))
            K.each(e, function(e, i) {
                n || Ee.test(t) ? r(t, i) : I(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
            });
        else if (n || "object" !== K.type(e))
            r(t, e);
        else 
            for (i in e)
                I(t + "[" + i + "]", e[i], n, r)
            }
    function H(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var R = [], W = R.slice, U = R.concat, z = R.push, V = R.indexOf, X = {}, Q = X.toString, Y = X.hasOwnProperty, G = {}, Z = t.document, J = "2.1.4", K = function(t, e) {
        return new K.fn.init(t, e)
    }, tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, et = /^-ms-/, nt = /-([\da-z])/gi, rt = function(t, e) {
        return e.toUpperCase()
    };
    K.fn = K.prototype = {
        jquery: J,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : W.call(this)
        },
        pushStack: function(t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return K.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(K.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(W.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(t) {
            var e = this.length, n =+ t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: z,
        sort: R.sort,
        splice: R.splice
    }, K.extend = K.fn.extend = function() {
        var t, e, n, r, i, o, s = arguments[0] || {}, a = 1, l = arguments.length, u=!1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || K.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    n = s[e], r = t[e], s !== r && (u && r && (K.isPlainObject(r) || (i = K.isArray(r))) ? (i ? (i=!1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, s[e] = K.extend(u, o, r)) : void 0 !== r && (s[e] = r));
        return s
    }, K.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === K.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !K.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" === K.type(t)&&!t.nodeType&&!K.isWindow(t)&&!(t.constructor&&!Y.call(t.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[Q.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(nt, rt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, r) {
            var i, o = 0, s = t.length, a = n(t);
            if (r) {
                if (a)
                    for (; o < s && (i = e.apply(t[o], r), i!==!1); o++);
                else 
                    for (o in t)
                        if (i = e.apply(t[o], r), i===!1)
                            break
            } else if (a)
                for (; o < s && (i = e.call(t[o], o, t[o]), i!==!1); o++);
            else 
                for (o in t)
                    if (i = e.call(t[o], o, t[o]), i===!1)
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "")
        },
        makeArray: function(t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? K.merge(r, "string" == typeof t ? [t] : t) : z.call(r, t)), r
        },
        inArray: function(t, e, n) {
            return null == e?-1 : V.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n =+ e.length, r = 0, i = t.length; r < n; r++)
                t[i++] = e[r];
            return t.length = i, t
        },
        grep: function(t, e, n) {
            for (var r, i = [], o = 0, s = t.length, a=!n; o < s; o++)
                r=!e(t[o], o), r !== a && i.push(t[o]);
            return i
        },
        map: function(t, e, r) {
            var i, o = 0, s = t.length, a = n(t), l = [];
            if (a)
                for (; o < s; o++)
                    i = e(t[o], o, r), null != i && l.push(i);
            else 
                for (o in t)
                    i = e(t[o], o, r), null != i && l.push(i);
            return U.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r, i;
            if ("string" == typeof e && (n = t[e], e = t, t = n), K.isFunction(t))
                return r = W.call(arguments, 2), i = function() {
                    return t.apply(e || this, r.concat(W.call(arguments)))
                }, i.guid = t.guid = t.guid || K.guid++, i
        },
        now: Date.now,
        support: G
    }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        X["[object " + e + "]"] = e.toLowerCase()
    });
    var it = function(t) {
        function e(t, e, n, r) {
            var i, o, s, a, l, u, f, d, h, g;
            if ((e ? e.ownerDocument || e : I) !== F && N(e), e = e || F, n = n || [], a = e.nodeType, "string" != typeof t ||!t || 1 !== a && 9 !== a && 11 !== a)
                return n;
            if (!r && L) {
                if (11 !== a && (i = yt.exec(t)))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o ||!o.parentNode)
                                return n;
                                if (o.id === s)
                                    return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && M(e, o) && o.id === s)
                            return n.push(o), n
                    } else {
                        if (i[2])
                            return J.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = i[3]) && x.getElementsByClassName)
                                return J.apply(n, e.getElementsByClassName(s)), n
                    }
                if (x.qsa && (!O ||!O.test(t))) {
                    if (d = f = q, h = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = k(t), (f = e.getAttribute("id")) ? d = f.replace(wt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;)
                            u[l] = d + p(u[l]);
                        h = bt.test(t) && c(e.parentNode) || e, g = u.join(",")
                    }
                    if (g)
                        try {
                            return J.apply(n, h.querySelectorAll(g)), n
                    } catch (v) {} finally {
                        f || e.removeAttribute("id")
                    }
                }
            }
            return $(t.replace(lt, "$1"), e, n, r)
        }
        function n() {
            function t(n, r) {
                return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
            var e = [];
            return t
        }
        function r(t) {
            return t[q]=!0, t
        }
        function i(t) {
            var e = F.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), r = t.length; r--;)
                T.attrHandle[n[r]] = e
        }
        function s(t, e) {
            var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e)
                        return - 1;
            return t ? 1 : - 1
        }
        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function u(t) {
            return r(function(e) {
                return e =+ e, r(function(n, r) {
                    for (var i, o = t([], n.length, e), s = o.length; s--;)
                        n[i = o[s]] && (n[i]=!(r[i] = n[i]))
                })
            })
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function f() {}
        function p(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++)
                r += t[e].value;
            return r
        }
        function d(t, e, n) {
            var r = e.dir, i = n && "parentNode" === r, o = R++;
            return e.first ? function(e, n, o) {
                for (; e = e[r];)
                    if (1 === e.nodeType || i)
                        return t(e, n, o)
            } : function(e, n, s) {
                var a, l, u = [H, o];
                if (s) {
                    for (; e = e[r];)
                        if ((1 === e.nodeType || i) && t(e, n, s))
                            return !0
                } else 
                    for (; e = e[r];)
                        if (1 === e.nodeType || i) {
                            if (l = e[q] || (e[q] = {}), (a = l[r]) && a[0] === H && a[1] === o)
                                return u[2] = a[2];
                                if (l[r] = u, u[2] = t(e, n, s))
                                    return !0
                        }
            }
        }
        function h(t) {
            return t.length > 1 ? function(e, n, r) {
                for (var i = t.length; i--;)
                    if (!t[i](e, n, r))
                        return !1;
                return !0
            } : t[0]
        }
        function g(t, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                e(t, n[i], r);
            return r
        }
        function v(t, e, n, r, i) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) 
                && (n&&!n(o, r, i) || (s.push(o), u && e.push(a)));
            return s
        }
        function m(t, e, n, i, o, s) {
            return i&&!i[q] && (i = m(i)), o&&!o[q] && (o = m(o, s)), r(function(r, s, a, l) {
                var u, c, f, p = [], d = [], h = s.length, m = r || g(e || "*", a.nodeType ? [a] : a, []), y=!t ||!r && e ? m : v(m, p, t, a, l), b = n ? o || (r ? t : h || i) ? [] : s : y;
                if (n && n(y, b, a, l), i)
                    for (u = v(b, d), i(u, [], a, l), c = u.length; c--;)(f = u[c]) 
                        && (b[d[c]]=!(y[d[c]] = f));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(f = b[c]) 
                                && u.push(y[c] = f);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(f = b[c]) 
                            && (u = o ? tt(r, f) : p[c])>-1 && (r[u]=!(s[u] = f))
                        }
                } else 
                    b = v(b === s ? b.splice(h, b.length) : b), o ? o(null, s, b, l) : J.apply(s, b)
            })
        }
        function y(t) {
            for (var e, n, r, i = t.length, o = T.relative[t[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = d(function(t) {
                return t === e
            }, s, !0), u = d(function(t) {
                return tt(e, t)>-1
            }, s, !0), c = [function(t, n, r) {
                var i=!o && (r || n !== A) || ((e = n).nodeType ? l(t, n, r) : u(t, n, r));
                return e = null, i
            }
            ]; a < i; a++)
                if (n = T.relative[t[a].type])
                    c = [d(h(c), n)];
                else {
                    if (n = T.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                        for (r=++a; r < i&&!T.relative[t[r].type]; r++);
                        return m(a > 1 && h(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*": ""
                        })).replace(lt, "$1"), n, a < r && y(t.slice(a, r)), r < i && y(t = t.slice(r)), r < i && p(t))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function b(t, n) {
            var i = n.length > 0, o = t.length > 0, s = function(r, s, a, l, u) {
                var c, f, p, d = 0, h = "0", g = r && [], m = [], y = A, b = r || o && T.find.TAG("*", u), w = H += null == y ? 1: Math.random() || .1, x = b.length;
                for (u && (A = s !== F && s); h !== x && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (f = 0; p = t[f++];)
                            if (p(c, s, a)) {
                                l.push(c);
                                break
                            }
                        u && (H = w)
                    }
                    i && ((c=!p && c) && d--, r && g.push(c))
                }
                if (d += h, i && h !== d) {
                    for (f = 0; p = n[f++];)
                        p(g, m, s, a);
                    if (r) {
                        if (d > 0)
                            for (; h--;)
                                g[h] || m[h] || (m[h] = G.call(l));
                        m = v(m)
                    }
                    J.apply(l, m), u&&!r && m.length > 0 && d + n.length > 1 && e.uniqueSort(l)
                }
                return u && (H = w, A = y), g
            };
            return i ? r(s) : s
        }
        var w, x, T, C, E, k, D, $, A, S, _, N, F, j, L, O, P, B, M, q = "sizzle" + 1 * new Date, I = t.document, H = 0, R = 0, W = n(), U = n(), z = n(), V = function(t, e) {
            return t === e && (_=!0), 0
        }, X = 1<<31, Q = {}.hasOwnProperty, Y = [], G = Y.pop, Z = Y.push, J = Y.push, K = Y.slice, tt = function(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e)
                    return n;
            return - 1
        }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = rt.replace("w", "w#"), ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]", st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)", at = new RegExp(nt + "+", "g"), lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), ut = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), pt = new RegExp(st), dt = new RegExp("^" + it + "$"), ht = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + et + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        }, gt = /^(?:input|select|textarea|button)$/i, vt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, wt = /'|\\/g, xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), Tt = function(t, e, n) {
            var r = "0x" + e - 65536;
            return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r>>10 | 55296, 1023 & r | 56320)
        }, Ct = function() {
            N()
        };
        try {
            J.apply(Y = K.call(I.childNodes), I.childNodes), Y[I.childNodes.length].nodeType
        } catch (Et) {
            J = {
                apply: Y.length ? function(t, e) {
                    Z.apply(t, K.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        x = e.support = {}, E = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, N = e.setDocument = function(t) {
            var e, n, r = t ? t.ownerDocument || t: I;
            return r !== F && 9 === r.nodeType && r.documentElement ? (F = r, j = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), L=!E(r), x.attributes = i(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = i(function(t) {
                return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = mt.test(r.getElementsByClassName), x.getById = i(function(t) {
                return j.appendChild(t).id = q, !r.getElementsByName ||!r.getElementsByName(q).length
            }), x.getById ? (T.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && L) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(t) {
                var e = t.replace(xt, Tt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete T.find.ID, T.filter.ID = function(t) {
                var e = t.replace(xt, Tt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), T.find.TAG = x.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, r = [], i = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++];)
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = x.getElementsByClassName && function(t, e) {
                if (L)
                    return e.getElementsByClassName(t)
            }, P = [], O = [], (x.qsa = mt.test(r.querySelectorAll)) && (i(function(t) {
                j.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + q + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || O.push(".#.+[+~]")
            }), i(function(t) {
                var e = r.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
            })), (x.matchesSelector = mt.test(B = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function(t) {
                x.disconnectedMatch = B.call(t, "div"), B.call(t, "[s!='']:x"), P.push("!=", st)
            }), O = O.length && new RegExp(O.join("|")), P = P.length && new RegExp(P.join("|")), e = mt.test(j.compareDocumentPosition), M = e || mt.test(j.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement: t, r = e && e.parentNode;
                return t === r ||!(!r || 1 !== r.nodeType ||!(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t)
                            return !0;
                return !1
            }, V = e ? function(t, e) {
                if (t === e)
                    return _=!0, 0;
                var n=!t.compareDocumentPosition-!e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n ||!x.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === I && M(I, t)?-1 : e === r || e.ownerDocument === I && M(I, e) ? 1 : S ? tt(S, t) - tt(S, e) : 0 : 4 & n?-1 : 1)
            } : function(t, e) {
                if (t === e)
                    return _=!0, 0;
                var n, i = 0, o = t.parentNode, a = e.parentNode, l = [t], u = [e];
                if (!o ||!a)
                    return t === r?-1 : e === r ? 1 : o?-1 : a ? 1 : S ? tt(S, t) - tt(S, e) : 0;
                if (o === a)
                    return s(t, e);
                for (n = t; n = n.parentNode;)
                    l.unshift(n);
                for (n = e; n = n.parentNode;)
                    u.unshift(n);
                for (; l[i] === u[i];)
                    i++;
                return i ? s(l[i], u[i]) : l[i] === I?-1 : u[i] === I ? 1 : 0
            }, r) : F
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== F && N(t), n = n.replace(ft, "='$1']"), x.matchesSelector && L && (!P ||!P.test(n)) && (!O ||!O.test(n)))
                try {
                    var r = B.call(t, n);
                    if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return r
            } catch (i) {}
            return e(n, F, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== F && N(t), M(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== F && N(t);
            var n = T.attrHandle[e.toLowerCase()], r = n && Q.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !L): void 0;
            return void 0 !== r ? r : x.attributes ||!L ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [], r = 0, i = 0;
            if (_=!x.detectDuplicates, S=!x.sortStable && t.slice(0), t.sort(V), _) {
                for (; e = t[i++];)
                    e === t[i] && (r = n.push(i));
                for (; r--;)
                    t.splice(n[r], 1)
            }
            return S = null, t
        }, C = e.getText = function(t) {
            var e, n = "", r = 0, i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += C(t)
                    } else if (3 === i || 4 === i)
                    return t.nodeValue
            } else 
                for (; e = t[r++];)
                    n += C(e);
            return n
        }, T = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ht,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, Tt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] =+ (t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] =+ (t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n=!t[6] && t[2];
                    return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, Tt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r)>-1 : "$=" === n ? r && o.slice( - r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r)>-1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice( - 4), a = "of-type" === e;
                    return 1 === r && 0 === i ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var u, c, f, p, d, h, g = o !== s ? "nextSibling": "previousSibling", v = e.parentNode, m = a && e.nodeName.toLowerCase(), y=!l&&!a;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (f = e; f = f[g];)
                                        if (a ? f.nodeName.toLowerCase() === m : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === t&&!h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild: v.lastChild], s && y) {
                                for (c = v[q] || (v[q] = {}), u = c[t] || [], d = u[0] === H && u[1], p = u[0] === H && u[2], f = d && v.childNodes[d]; f=++d && f && f[g] || (p = d = 0) 
                                    || h.pop();
                                )if (1 === f.nodeType&&++p && f === e) {
                                    c[t] = [H, d, p];
                                    break
                                }
                            } else if (y && (u = (e[q] || (e[q] = {}))[t]) && u[0] === H)
                                p = u[1];
                            else 
                                for (; (f=++d && f && f[g] || (p = d = 0) || h.pop()) 
                                    && ((a ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType)||!++p || (y && ((f[q] || (f[q] = {}))[t] = [H, p]), f !== e));
                            );
                            return p -= i, p === r || p%r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var i, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[q] ? o(n) : o.length > 1 ? (i = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                        for (var r, i = o(t, n), s = i.length; s--;)
                            r = tt(t, i[s]), t[r]=!(e[r] = i[s])
                    }) : function(t) {
                        return o(t, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(t) {
                    var e = [], n = [], i = D(t.replace(lt, "$1"));
                    return i[q] ? r(function(t, e, n, r) {
                        for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) 
                            && (t[a]=!(e[a] = o))
                    }) : function(t, r, o) {
                        return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: r(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function(t) {
                    return t = t.replace(xt, Tt), function(e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t)>-1
                    }
                }),
                lang: r(function(t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, Tt).toLowerCase(), function(e) {
                        var n;
                        do 
                            if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === j
                },
                focus: function(t) {
                    return t === F.activeElement && (!F.hasFocus || F.hasFocus())&&!!(t.type || t.href||~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled===!1
                },
                disabled: function(t) {
                    return t.disabled===!0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e&&!!t.checked || "option" === e&&!!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected===!0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !T.pseudos.empty(t)
                },
                header: function(t) {
                    return vt.test(t.nodeName)
                },
                input: function(t) {
                    return gt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [n < 0 ? n + e: n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; --r >= 0;)
                        t.push(r);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e;)
                        t.push(r);
                    return t
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in{
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[w] = a(w);
        for (w in{
            submit: !0,
            reset: !0
        })
            T.pseudos[w] = l(w);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = e.tokenize = function(t, n) {
            var r, i, o, s, a, l, u, c = U[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = t, l = [], u = T.preFilter; a;) {
                r&&!(i = ut.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), r=!1, (i = ct.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(lt, " ")
                }), a = a.slice(r.length));
                for (s in T.filter)
                    !(i = ht[s].exec(a)) || u[s]&&!(i = u[s](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: s,
                        matches: i
                    }), a = a.slice(r.length));
                if (!r)
                    break
            }
            return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
        }, D = e.compile = function(t, e) {
            var n, r = [], i = [], o = z[t + " "];
            if (!o) {
                for (e || (e = k(t)), n = e.length; n--;)
                    o = y(e[n]), o[q] ? r.push(o) : i.push(o);
                o = z(t, b(i, r)), o.selector = t
            }
            return o
        }, $ = e.select = function(t, e, n, r) {
            var i, o, s, a, l, u = "function" == typeof t && t, f=!r && k(t = u.selector || t);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && L && T.relative[o[1].type]) {
                    if (e = (T.find.ID(s.matches[0].replace(xt, Tt), e) || [])[0], !e)
                        return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(t) ? 0 : o.length; i--&&(s = o[i], !T.relative[a = s.type]);)
                    if ((l = T.find[a]) && (r = l(s.matches[0].replace(xt, Tt), bt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(i, 1), t = r.length && p(o), !t)
                            return J.apply(n, r), n;
                            break
                    }
            }
            return (u || D(t, f))(r, e, !L, n, bt.test(t) && c(e.parentNode) || e), n
        }, x.sortStable = q.split("").sort(V).join("") === q, x.detectDuplicates=!!_, N(), x.sortDetached = i(function(t) {
            return 1 & t.compareDocumentPosition(F.createElement("div"))
        }), i(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && i(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }), i(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, n) {
            var r;
            if (!n)
                return t[e]===!0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }), e
    }(t);
    K.find = it, K.expr = it.selectors, K.expr[":"] = K.expr.pseudos, K.unique = it.uniqueSort, K.text = it.getText, K.isXMLDoc = it.isXML, K.contains = it.contains;
    var ot = K.expr.match.needsContext, st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, at = /^.[^:#\[\.,]*$/;
    K.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? K.find.matchesSelector(r, t) ? [r] : [] : K.find.matches(t, K.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, K.fn.extend({
        find: function(t) {
            var e, n = this.length, r = [], i = this;
            if ("string" != typeof t)
                return this.pushStack(K(t).filter(function() {
                    for (e = 0; e < n; e++)
                        if (K.contains(i[e], this))
                            return !0
                        }));
            for (e = 0; e < n; e++)
                K.find(t, i[e], r);
            return r = this.pushStack(n > 1 ? K.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !!r(this, "string" == typeof t && ot.test(t) ? K(t) : t || [], !1).length
        }
    });
    var lt, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = K.fn.init = function(t, e) {
        var n, r;
        if (!t)
            return this;
        if ("string" == typeof t) {
            if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ut.exec(t), !n ||!n[1] && e)
                return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), st.test(n[1]) && K.isPlainObject(e))
                    for (n in e)
                        K.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return r = Z.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Z, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
    };
    ct.prototype = K.fn, lt = K(Z);
    var ft = /^(?:parents|prev(?:Until|All))/, pt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    K.extend({
        dir: function(t, e, n) {
            for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (i && K(t).is(n))
                        break;
                        r.push(t)
                }
            return r
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), K.fn.extend({
        has: function(t) {
            var e = K(t, this), n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (K.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, r = 0, i = this.length, o = [], s = ot.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n)>-1 : 1 === n.nodeType && K.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? K.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? V.call(K(t), this[0]) : V.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(t, e) {
            return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), K.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return K.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return K.dir(t, "parentNode", n)
        },
        next: function(t) {
            return i(t, "nextSibling")
        },
        prev: function(t) {
            return i(t, "previousSibling")
        },
        nextAll: function(t) {
            return K.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return K.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return K.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return K.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return K.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return K.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || K.merge([], t.childNodes)
        }
    }, function(t, e) {
        K.fn[t] = function(n, r) {
            var i = K.map(this, e, n);
            return "Until" !== t.slice( - 5) && (r = n), r && "string" == typeof r && (i = K.filter(r, i)), this.length > 1 && (pt[t] || K.unique(i), ft.test(t) && i.reverse()), this.pushStack(i)
        }
    });
    var dt = /\S+/g, ht = {};
    K.Callbacks = function(t) {
        t = "string" == typeof t ? ht[t] || o(t) : K.extend({}, t);
        var e, n, r, i, s, a, l = [], u=!t.once && [], c = function(o) {
            for (e = t.memory && o, n=!0, a = i || 0, i = 0, s = l.length, r=!0; l && a < s; a++)
                if (l[a].apply(o[0], o[1])===!1 && t.stopOnFalse) {
                    e=!1;
                    break
                }
            r=!1, l && (u ? u.length && c(u.shift()) : e ? l = [] : f.disable())
        }, f = {
            add: function() {
                if (l) {
                    var n = l.length;
                    !function o(e) {
                        K.each(e, function(e, n) {
                            var r = K.type(n);
                            "function" === r ? t.unique && f.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments), r ? s = l.length : e && (i = n, c(e))
                }
                return this
            },
            remove: function() {
                return l && K.each(arguments, function(t, e) {
                    for (var n; (n = K.inArray(e, l, n))>-1;)
                        l.splice(n, 1), r && (n <= s && s--, n <= a && a--)
                }), this
            },
            has: function(t) {
                return t ? K.inArray(t, l)>-1 : !(!l ||!l.length)
            },
            empty: function() {
                return l = [], s = 0, this
            },
            disable: function() {
                return l = u = e = void 0, this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return u = void 0, e || f.disable(), this
            },
            locked: function() {
                return !u
            },
            fireWith: function(t, e) {
                return !l || n&&!u || (e = e || [], e = [t, e.slice ? e.slice(): e], r ? u.push(e) : c(e)), this
            },
            fire: function() {
                return f.fireWith(this, arguments), this
            },
            fired: function() {
                return !!n
            }
        };
        return f
    }, K.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]], n = "pending", r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this
                },
                then: function() {
                    var t = arguments;
                    return K.Deferred(function(n) {
                        K.each(e, function(e, o) {
                            var s = K.isFunction(t[e]) && t[e];
                            i[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && K.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? K.extend(t, r) : r
                }
            }, i = {};
            return r.pipe = r.then, K.each(e, function(t, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1^t][2].disable, e[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), t && t.call(i, i), i
        },
        when: function(t) {
            var e, n, r, i = 0, o = W.call(arguments), s = o.length, a = 1 !== s || t && K.isFunction(t.promise) ? s: 0, l = 1 === a ? t: K.Deferred(), u = function(t, n, r) {
                return function(i) {
                    n[t] = this, r[t] = arguments.length > 1 ? W.call(arguments) : i, r === e ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                }
            };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), r = new Array(s); i < s; i++)
                    o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, e)) : --a;
            return a || l.resolveWith(r, o), l.promise()
        }
    });
    var gt;
    K.fn.ready = function(t) {
        return K.ready.promise().done(t), this
    }, K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? K.readyWait++ : K.ready(!0)
        },
        ready: function(t) {
            (t===!0?--K.readyWait : K.isReady) || (K.isReady=!0, t!==!0&&--K.readyWait > 0 || (gt.resolveWith(Z, [K]), K.fn.triggerHandler && (K(Z).triggerHandler("ready"), K(Z).off("ready"))))
        }
    }), K.ready.promise = function(e) {
        return gt || (gt = K.Deferred(), "complete" === Z.readyState ? setTimeout(K.ready) : (Z.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), gt.promise(e)
    }, K.ready.promise();
    var vt = K.access = function(t, e, n, r, i, o, s) {
        var a = 0, l = t.length, u = null == n;
        if ("object" === K.type(n)) {
            i=!0;
            for (a in n)
                K.access(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i=!0, K.isFunction(r) || (s=!0), u && (s ? (e.call(t, r), e = null) : (u = e, e = function(t, e, n) {
            return u.call(K(t), n)
        })), e))for (; a < l; a++)
            e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
        return i ? t : u ? e.call(t) : l ? e(t[0], n) : o
    };
    K.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType||!+t.nodeType
    }, a.uid = 1, a.accepts = K.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t))
                return 0;
            var e = {}, n = t[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (r) {
                    e[this.expando] = n, K.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(t, e, n) {
            var r, i = this.key(t), o = this.cache[i];
            if ("string" == typeof e)
                o[e] = n;
            else if (K.isEmptyObject(o))
                K.extend(this.cache[i], e);
            else 
                for (r in e)
                    o[r] = e[r];
            return o
        },
        get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function(t, e, n) {
            var r;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, K.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, r, i, o = this.key(t), s = this.cache[o];
            if (void 0 === e)
                this.cache[o] = {};
            else {
                K.isArray(e) ? r = e.concat(e.map(K.camelCase)) : (i = K.camelCase(e), e in s ? r = [e, i] : (r = i, r = r in s ? [r] : r.match(dt) || [])), n = r.length;
                for (; n--;)
                    delete s[r[n]]
            }
        },
        hasData: function(t) {
            return !K.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var mt = new a, yt = new a, bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, wt = /([A-Z])/g;
    K.extend({
        hasData: function(t) {
            return yt.hasData(t) || mt.hasData(t)
        },
        data: function(t, e, n) {
            return yt.access(t, e, n)
        },
        removeData: function(t, e) {
            yt.remove(t, e)
        },
        _data: function(t, e, n) {
            return mt.access(t, e, n)
        },
        _removeData: function(t, e) {
            mt.remove(t, e)
        }
    }), K.fn.extend({
        data: function(t, e) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = yt.get(o), 1 === o.nodeType&&!mt.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;)
                        s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = K.camelCase(r.slice(5)), l(o, r, i[r])));
                    mt.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function() {
                yt.set(this, t)
            }) : vt(this, function(e) {
                var n, r = K.camelCase(t);
                if (o && void 0 === e) {
                    if (n = yt.get(o, t), void 0 !== n)
                        return n;
                    if (n = yt.get(o, r), void 0 !== n)
                        return n;
                    if (n = l(o, r, void 0), void 0 !== n)
                        return n
                } else 
                    this.each(function() {
                        var n = yt.get(this, r);
                        yt.set(this, r, e), t.indexOf("-")!==-1 && void 0 !== n && yt.set(this, t, e)
                    })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                yt.remove(this, t)
            })
        }
    }), K.extend({
        queue: function(t, e, n) {
            var r;
            if (t)
                return e = (e || "fx") + "queue", r = mt.get(t, e), n && (!r || K.isArray(n) ? r = mt.access(t, e, K.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = K.queue(t, e), r = n.length, i = n.shift(), o = K._queueHooks(t, e), s = function() {
                K.dequeue(t, e)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return mt.get(t, n) || mt.access(t, n, {
                empty: K.Callbacks("once memory").add(function() {
                    mt.remove(t, [e + "queue", n])
                })
            })
        }
    }), K.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = K.queue(this, t, e);
                K._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && K.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                K.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1, i = K.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)
                n = mt.get(o[s], t + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(e)
        }
    });
    var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Tt = ["Top", "Right", "Bottom", "Left"], Ct = function(t, e) {
        return t = e || t, "none" === K.css(t, "display") ||!K.contains(t.ownerDocument, t)
    }, Et = /^(?:checkbox|radio)$/i;
    !function() {
        var t = Z.createDocumentFragment(), e = t.appendChild(Z.createElement("div")), n = Z.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue
    }();
    var kt = "undefined";
    G.focusinBubbles = "onfocusin"in t;
    var Dt = /^key/, $t = /^(?:mouse|pointer|contextmenu)|click/, At = /^(?:focusinfocus|focusoutblur)$/, St = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, l, u, c, f, p, d, h, g, v = mt.get(t);
            if (v)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = K.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                    return typeof K !== kt && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(dt) || [""], u = e.length; u--;)
                    a = St.exec(e[u]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = K.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = K.event.special[d] || {}, c = K.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && K.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, f.setup && f.setup.call(t, r, h, s)!==!1 || t.addEventListener && t.addEventListener(d, s, !1)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), K.event.global[d]=!0)
        },
        remove: function(t, e, n, r, i) {
            var o, s, a, l, u, c, f, p, d, h, g, v = mt.hasData(t) && mt.get(t);
            if (v && (l = v.events)) {
                for (e = (e || "").match(dt) || [""], u = e.length; u--;)
                    if (a = St.exec(e[u]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = K.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;)
                            c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a&&!a.test(c.namespace) || r && r !== c.selector && ("**" !== r ||!c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(t, c));
                            s&&!p.length && (f.teardown && f.teardown.call(t, h, v.handle)!==!1 || K.removeEvent(t, d, v.handle), delete l[d])
                    } else 
                        for (d in l)
                            K.event.remove(t, d + e[u], n, r, !0);
                K.isEmptyObject(l) && (delete v.handle, mt.remove(t, "events"))
            }
        },
        trigger: function(e, n, r, i) {
            var o, s, a, l, u, c, f, p = [r || Z], d = Y.call(e, "type") ? e.type: e, h = Y.call(e, "namespace") ? e.namespace.split("."): [];
            if (s = a = r = r || Z, 3 !== r.nodeType && 8 !== r.nodeType&&!At.test(d + K.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, e = e[K.expando] ? e : new K.Event(d, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : K.makeArray(n, [e]), f = K.event.special[d] || {}, i ||!f.trigger || f.trigger.apply(r, n)!==!1)
                ) {
                if (!i&&!f.noBubble&&!K.isWindow(r)) {
                    for (l = f.delegateType || d, At.test(l + d) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s), a = s;
                    a === (r.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0; (s = p[o++])&&!e.isPropagationStopped();)
                    e.type = o > 1 ? l : f.bindType || d, c = (mt.get(s, "events") || {})[e.type] && mt.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && K.acceptData(s) && (e.result = c.apply(s, n), e.result===!1 && e.preventDefault());
                return e.type = d, i || e.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n)!==!1 ||!K.acceptData(r) || u && K.isFunction(r[d])&&!K.isWindow(r) && (a = r[u], a && (r[u] = null), K.event.triggered = d, r[d](), K.event.triggered = void 0, a && (r[u] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = K.event.fix(t);
            var e, n, r, i, o, s = [], a = W.call(arguments), l = (mt.get(this, "events") || {})[t.type] || [], u = K.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t)!==!1) {
                for (s = K.event.handlers.call(this, t, l), e = 0; (i = s[e++])&&!t.isPropagationStopped();)
                    for (t.currentTarget = i.elem, n = 0; (o = i.handlers[n++])&&!t.isImmediatePropagationStopped();)
                        t.namespace_re&&!t.namespace_re.test(o.namespace) || (t.handleObj = o, t.data = o.data, r = ((K.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (t.result = r)===!1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled!==!0 || "click" !== t.type) {
                        for (r = [], n = 0; n < a; n++)
                            o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? K(i, this).index(l) >= 0 : K.find(i, this, null, [l]).length), r[i] && r.push(o);
                            r.length && s.push({
                                elem: l,
                                handlers: r
                            })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, i, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Z, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[K.expando])
                return t;
            var e, n, r, i = t.type, o = t, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = $t.test(i) ? this.mouseHooks : Dt.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, t = new K.Event(o), e = r.length; e--;)
                n = r[e], t[n] = o[n];
            return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus)
                        return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === f() && this.blur)
                        return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && K.nodeName(this, "input"))
                        return this.click(), !1
                },
                _default: function(t) {
                    return K.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, r) {
            var i = K.extend(new K.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? K.event.trigger(i, null, e) : K.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, K.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, K.Event = function(t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue===!1 ? u : c) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando]=!0)) : new K.Event(t, e)
    }, K.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        K.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, r = this, i = t.relatedTarget, o = t.handleObj;
                return i && (i === r || K.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), G.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
        };
        K.event.special[e] = {
            setup: function() {
                var r = this.ownerDocument || this, i = mt.access(r, e);
                i || r.addEventListener(t, n, !0), mt.access(r, e, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this, i = mt.access(r, e) - 1;
                i ? mt.access(r, e, i) : (r.removeEventListener(t, n, !0), mt.remove(r, e))
            }
        }
    }), K.fn.extend({
        on: function(t, e, n, r, i) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (s in t)
                    this.on(s, e, n, t[s], i);
                return this
            }
            if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r===!1)
                r = c;
            else if (!r)
                return this;
            return 1 === i && (o = r, r = function(t) {
                return K().off(t), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = K.guid++)), this.each(function() {
                K.event.add(this, t, r, n, e)
            })
        },
        one: function(t, e, n, r) {
            return this.on(t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj)
                return r = t.handleObj, K(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t)
                    this.off(i, e, t[i]);
                return this
            }
            return e!==!1 && "function" != typeof e || (n = e, e = void 0), n===!1 && (n = c), this.each(function() {
                K.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                K.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n)
                return K.event.trigger(t, e, n, !0)
        }
    });
    var _t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Nt = /<([\w:]+)/, Ft = /<|&#?\w+;/, jt = /<(?:script|style|link)/i, Lt = /checked\s*(?:[^=]|=\s*.checked.)/i, Ot = /^$|\/(?:java|ecma)script/i, Pt = /^true\/(.*)/, Bt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Mt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Mt.optgroup = Mt.option, Mt.tbody = Mt.tfoot = Mt.colgroup = Mt.caption = Mt.thead, Mt.th = Mt.td, K.extend({
        clone: function(t, e, n) {
            var r, i, o, s, a = t.cloneNode(!0), l = K.contains(t.ownerDocument, t);
            if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                for (s = m(a), o = m(t), r = 0, i = o.length; r < i; r++)
                    y(o[r], s[r]);
            if (e)
                if (n)
                    for (o = o || m(t), s = s || m(a), r = 0, i = o.length; r < i; r++)
                        v(o[r], s[r]);
                else 
                    v(t, a);
            return s = m(a, "script"), s.length > 0 && g(s, !l && m(t, "script")), a
        },
        buildFragment: function(t, e, n, r) {
            for (var i, o, s, a, l, u, c = e.createDocumentFragment(), f = [], p = 0, d = t.length; p < d; p++)
                if (i = t[p], i || 0 === i)
                    if ("object" === K.type(i))
                        K.merge(f, i.nodeType ? [i] : i);
                    else if (Ft.test(i)) {
                        for (o = o || c.appendChild(e.createElement("div")), s = (Nt.exec(i) || ["", ""])[1].toLowerCase(), a = Mt[s] || Mt._default, o.innerHTML = a[1] + i.replace(_t, "<$1></$2>") + a[2], u = a[0]; u--;)
                            o = o.lastChild;
                            K.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
                    } else 
                        f.push(e.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)
                if ((!r || K.inArray(i, r)===-1) && (l = K.contains(i.ownerDocument, i), o = m(c.appendChild(i), "script"), l && g(o), n))
                    for (u = 0; i = o[u++];)
                        Ot.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(t) {
            for (var e, n, r, i, o = K.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                if (K.acceptData(n) && (i = n[mt.expando], i && (e = mt.cache[i]))) {
                    if (e.events)
                        for (r in e.events)
                            o[r] ? K.event.remove(n, r) : K.removeEvent(n, r, e.handle);
                    mt.cache[i] && delete mt.cache[i]
                }
                delete yt.cache[n[yt.expando]]
            }
        }
    }), K.fn.extend({
        text: function(t) {
            return vt(this, function(t) {
                return void 0 === t ? K.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, r = t ? K.filter(t, this) : this, i = 0; null != (n = r[i]); i++)
                e || 1 !== n.nodeType || K.cleanData(m(n)), n.parentNode && (e && K.contains(n.ownerDocument, n) && g(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (K.cleanData(m(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return K.clone(this, t, e)
            })
        },
        html: function(t) {
            return vt(this, function(t) {
                var e = this[0] || {}, n = 0, r = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t&&!jt.test(t)&&!Mt[(Nt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(_t, "<$1></$2>");
                    try {
                        for (; n < r; n++)
                            e = this[n] || {}, 1 === e.nodeType && (K.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (i) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, K.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = U.apply([], t);
            var n, r, i, o, s, a, l = 0, u = this.length, c = this, f = u - 1, p = t[0], g = K.isFunction(p);
            if (g || u > 1 && "string" == typeof p&&!G.checkClone && Lt.test(p))
                return this.each(function(n) {
                    var r = c.eq(n);
                    g && (t[0] = p.call(this, n, r.html())), r.domManip(t, e)
                });
            if (u && (n = K.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = K.map(m(n, "script"), d), o = i.length; l < u; l++)
                    s = n, l !== f && (s = K.clone(s, !0, !0), o && K.merge(i, m(s, "script"))), e.call(this[l], s, l);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, K.map(i, h), l = 0; l < o; l++)
                        s = i[l], Ot.test(s.type || "")&&!mt.access(s, "globalEval") && K.contains(a, s) && (s.src ? K._evalUrl && K._evalUrl(s.src) : K.globalEval(s.textContent.replace(Bt, "")))
            }
            return this
        }
    }), K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        K.fn[t] = function(t) {
            for (var n, r = [], i = K(t), o = i.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0), K(i[s])[e](n), z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var qt, It = {}, Ht = /^margin/, Rt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"), Wt = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    };
    !function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var e = t.getComputedStyle(s, null);
            n = "1%" !== e.top, r = "4px" === e.width, i.removeChild(o)
        }
        var n, r, i = Z.documentElement, o = Z.createElement("div"), s = Z.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && K.extend(G, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == r && e(), r
            },
            reliableMarginRight: function() {
                var e, n = s.appendChild(Z.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), e=!parseFloat(t.getComputedStyle(n, null).marginRight), i.removeChild(o), s.removeChild(n), e
            }
        }))
    }(), K.swap = function(t, e, n, r) {
        var i, o, s = {};
        for (o in e)
            s[o] = t.style[o], t.style[o] = e[o];
        i = n.apply(t, r || []);
        for (o in e)
            t.style[o] = s[o];
        return i
    };
    var Ut = /^(none|table(?!-c[ea]).+)/, zt = new RegExp("^(" + xt + ")(.*)$", "i"), Vt = new RegExp("^([+-])=(" + xt + ")", "i"), Xt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Qt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Yt = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = x(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
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
            "float": "cssFloat"
        },
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, s, a = K.camelCase(e), l = t.style;
                return e = K.cssProps[a] || (K.cssProps[a] = C(l, a)), s = K.cssHooks[e] || K.cssHooks[a], void 0 === n ? s && "get"in s && void 0 !== (i = s.get(t, !1, r)) ? i : l[e] : (o = typeof n, "string" === o && (i = Vt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(K.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || K.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set"in s && void 0 === (n = s.set(t, n, r)) || (l[e] = n)), void 0)
            }
        },
        css: function(t, e, n, r) {
            var i, o, s, a = K.camelCase(e);
            return e = K.cssProps[a] || (K.cssProps[a] = C(t.style, a)), s = K.cssHooks[e] || K.cssHooks[a], s && "get"in s && (i = s.get(t, !0, n)), void 0 === i && (i = x(t, e, r)), "normal" === i && e in Qt && (i = Qt[e]), "" === n || n ? (o = parseFloat(i), n===!0 || K.isNumeric(o) ? o || 0 : i) : i
        }
    }), K.each(["height", "width"], function(t, e) {
        K.cssHooks[e] = {
            get: function(t, n, r) {
                if (n)
                    return Ut.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Xt, function() {
                        return D(t, e, r)
                    }) : D(t, e, r)
            },
            set: function(t, n, r) {
                var i = r && Wt(t);
                return E(t, n, r ? k(t, e, r, "border-box" === K.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), K.cssHooks.marginRight = T(G.reliableMarginRight, function(t, e) {
        if (e)
            return K.swap(t, {
                display: "inline-block"
            }, x, [t, "marginRight"])
    }), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        K.cssHooks[t + e] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[t + Tt[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ht.test(t) || (K.cssHooks[t + e].set = E)
    }), K.fn.extend({
        css: function(t, e) {
            return vt(this, function(t, e, n) {
                var r, i, o = {}, s = 0;
                if (K.isArray(e)) {
                    for (r = Wt(t), i = e.length; s < i; s++)
                        o[e[s]] = K.css(t, e[s], !1, r);
                    return o
                }
                return void 0 !== n ? K.style(t, e, n) : K.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return $(this, !0)
        },
        hide: function() {
            return $(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ct(this) ? K(this).show() : K(this).hide()
            })
        }
    }), K.Tween = A, A.prototype = {
        constructor: A,
        init: function(t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = A.propHooks[this.prop];
            return t && t.get ? t.get(this) : A.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = A.propHooks[this.prop];
            return this.options.duration ? this.pos = e = K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, K.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, K.fx = A.prototype.init, K.fx.step = {};
    var Gt, Zt, Jt = /^(?:toggle|show|hide)$/, Kt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"), te = /queueHooks$/, ee = [F], ne = {
        "*": [function(t, e) {
            var n = this.createTween(t, e), r = n.cur(), i = Kt.exec(e), o = i && i[3] || (K.cssNumber[t] ? "" : "px"), s = (K.cssNumber[t] || "px" !== o&&+r) && Kt.exec(K.css(n.elem, t)), a = 1, l = 20;
            if (s && s[3] !== o) {
                o = o || s[3], i = i || [], s =+ r || 1;
                do 
                    a = a || ".5", s/=a, K.style(n.elem, t, s + o);
                while (a !== (a = n.cur() / r) && 1 !== a&&--l)
                }
            return i && (s = n.start =+ s||+r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : + i[2]), n
        }
        ]
    };
    K.Animation = K.extend(L, {
        tweener: function(t, e) {
            K.isFunction(t) ? (e = t, t = ["*"]): t = t.split(" ");
            for (var n,
            r = 0,
            i = t.length;
            r < i;
            r++)n = t[r],
            ne[n] = ne[n] || [],
            ne[n].unshift(e)
        }, prefilter : function(t, e) {
            e ? ee.unshift(t) : ee.push(t)
        }
    }), K.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? K.extend({}, t): {
            complete: n ||!n && e || K.isFunction(t) && t,
            duration: t,
            easing: n && e || e&&!K.isFunction(e) && e
        };
        return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, null != r.queue && r.queue!==!0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue)
        }, r
    }, K.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter(Ct).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r)
        },
        animate: function(t, e, n, r) {
            var i = K.isEmptyObject(t), o = K.speed(e, n, r), s = function() {
                var e = L(this, K.extend({}, t), o);
                (i || mt.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, i || o.queue===!1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t!==!1 && this.queue(t || "fx", []), this.each(function() {
                var e=!0, i = null != t && t + "queueHooks", o = K.timers, s = mt.get(this);
                if (i)
                    s[i] && s[i].stop && r(s[i]);
                else 
                    for (i in s)
                        s[i] && s[i].stop && te.test(i) && r(s[i]);
                for (i = o.length; i--;)
                    o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e=!1, o.splice(i, 1));
                !e && n || K.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t!==!1 && (t = t || "fx"), this.each(function() {
                var e, n = mt.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = K.timers, s = r ? r.length: 0;
                for (n.finish=!0, K.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;)
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++)
                    r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            })
        }
    }), K.each(["toggle", "show", "hide"], function(t, e) {
        var n = K.fn[e];
        K.fn[e] = function(t, r, i) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(_(e, !0), t, r, i)
        }
    }), K.each({
        slideDown: _("show"),
        slideUp: _("hide"),
        slideToggle: _("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        K.fn[t] = function(t, n, r) {
            return this.animate(e, t, n, r)
        }
    }), K.timers = [], K.fx.tick = function() {
        var t, e = 0, n = K.timers;
        for (Gt = K.now(); e < n.length; e++)
            t = n[e], t() || n[e] !== t || n.splice(e--, 1);
        n.length || K.fx.stop(), Gt = void 0
    }, K.fx.timer = function(t) {
        K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
    }, K.fx.interval = 13, K.fx.start = function() {
        Zt || (Zt = setInterval(K.fx.tick, K.fx.interval))
    }, K.fx.stop = function() {
        clearInterval(Zt), Zt = null
    }, K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, K.fn.delay = function(t, e) {
        return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
            var r = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }, function() {
        var t = Z.createElement("input"), e = Z.createElement("select"), n = e.appendChild(Z.createElement("option"));
        t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = n.selected, e.disabled=!0, G.optDisabled=!n.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
    }(); var re, ie, oe = K.expr.attrHandle; K.fn.extend({
        attr : function(t, e) {
            return vt(this, K.attr, t, e, arguments.length > 1)
        }, removeAttr: function(t) {
            return this.each(function() {
                K.removeAttr(this, t)
            })
        }
    }), K.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o)
                return typeof t.getAttribute === kt ? K.prop(t, e, n) : (1 === o && K.isXMLDoc(t) || (e = e.toLowerCase(), r = K.attrHooks[e] || (K.expr.match.bool.test(e) ? ie : re)), void 0 === n ? r && "get"in r && null !== (i = r.get(t, e)) ? i : (i = K.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void K.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, r, i = 0, o = e && e.match(dt);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];)
                    r = K.propFix[n] || n, K.expr.match.bool.test(n) && (t[r]=!1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!G.radioValue && "radio" === e && K.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), ie = {
        set: function(t, e, n) {
            return e===!1 ? K.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = oe[e] || K.find.attr;
        oe[e] = function(t, e, r) {
            var i, o;
            return r || (o = oe[e], oe[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, oe[e] = o), i
        }
    });
    var se = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function(t, e) {
            return vt(this, K.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[K.propFix[t] || t]
            })
        }
    }), K.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var r, i, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s)
                return o = 1 !== s ||!K.isXMLDoc(t), o && (e = K.propFix[e] || e, i = K.propHooks[e]), void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get"in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : - 1
                }
            }
        }
    }), G.optSelected || (K.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        K.propFix[this.toLowerCase()] = this
    });
    var ae = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a = "string" == typeof t && t, l = 0, u = this.length;
            if (K.isFunction(t))
                return this.each(function(e) {
                    K(this).addClass(t.call(this, e, this.className))
                });
            if (a)
                for (e = (t || "").match(dt) || []; l < u; l++)
                    if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : " ")) {
                        for (o = 0; i = e[o++];)
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            s = K.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof t && t, l = 0, u = this.length;
            if (K.isFunction(t))
                return this.each(function(e) {
                    K(this).removeClass(t.call(this, e, this.className))
                });
            if (a)
                for (e = (t || "").match(dt) || []; l < u; l++)
                    if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : "")) {
                        for (o = 0; i = e[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;)
                                r = r.replace(" " + i + " ", " ");
                                s = t ? K.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : K.isFunction(t) ? this.each(function(n) {
                K(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n)
                    for (var e, r = 0, i = K(this), o = t.match(dt) || []; e = o[r++];)
                        i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else 
                    n !== kt && "boolean" !== n || (this.className && mt.set(this, "__className__", this.className), this.className = this.className || t===!1 ? "" : mt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ae, " ").indexOf(e) >= 0)
                    return !0;
            return !1
        }
    });
    var le = /\r/g;
    K.fn.extend({
        val: function(t) {
            var e, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = K.isFunction(t), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? t.call(this, n, K(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : K.isArray(i) && (i = K.map(i, function(t) {
                            return null == t ? "" : t + ""
                        })), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return e = K.valHooks[i.type] || K.valHooks[i.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(le, "") : null == n ? "" : n)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = K.find.attr(t, "value");
                    return null != e ? e : K.trim(K.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, l = i < 0 ? a : o ? i : 0; l < a; l++)
                        if (n = r[l], (n.selected || l === i) && (G.optDisabled?!n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled ||!K.nodeName(n.parentNode, "optgroup"))
                            ) {
                        if (e = K(n).val(), o)
                            return e;
                        s.push(e)
                    }
                    return s
                },
                set: function(t, e) {
                    for (var n, r, i = t.options, o = K.makeArray(e), s = i.length; s--;)
                        r = i[s], (r.selected = K.inArray(r.value, o) >= 0) && (n=!0);
                    return n || (t.selectedIndex =- 1), o
                }
            }
        }
    }), K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            set: function(t, e) {
                if (K.isArray(e))
                    return t.checked = K.inArray(K(t).val(), e) >= 0
            }
        }, G.checkOn || (K.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        K.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), K.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var ue = K.now(), ce = /\?/;
    K.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, K.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (r) {
            e = void 0
        }
        return e&&!e.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + t), e
    };
    var fe = /#.*$/, pe = /([?&])_=[^&]*/, de = /^(.*?):[ \t]*([^\r\n]*)$/gm, he = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ge = /^(?:GET|HEAD)$/, ve = /^\/\//, me = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ye = {}, be = {}, we = "*/".concat("*"), xe = t.location.href, Te = me.exec(xe.toLowerCase()) || [];
    K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe,
            type: "GET",
            isLocal: he.test(Te[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": we,
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
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? B(B(t, K.ajaxSettings), e) : B(K.ajaxSettings, t)
        },
        ajaxPrefilter: O(ye),
        ajaxTransport: O(be),
        ajax: function(t, e) {
            function n(t, e, n, s) {
                var l, c, m, y, w, T = e;
                2 !== b && (b = 2, a && clearTimeout(a), r = void 0, o = s || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, n && (y = M(f, x, n)), y = q(f, y, x, l), l ? (f.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (K.lastModified[i] = w), w = x.getResponseHeader("etag"), w && (K.etag[i] = w)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state, c = y.data, m = y.error, l=!m)) : (m = T, !t && T || (T = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || T) + "", l ? h.resolveWith(p, [c, T, x]) : h.rejectWith(p, [x, T, m]), x.statusCode(v), v = void 0, u && d.trigger(l ? "ajaxSuccess" : "ajaxError", [x, f, l ? c: m]), g.fireWith(p, [x, T]), u && (d.trigger("ajaxComplete", [x, f]), --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var r, i, o, s, a, l, u, c, f = K.ajaxSetup({}, e), p = f.context || f, d = f.context && (p.nodeType || p.jquery) ? K(p): K.event, h = K.Deferred(), g = K.Callbacks("once memory"), v = f.statusCode || {}, m = {}, y = {}, b = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === b) {
                        if (!s)
                            for (s = {}; e = de.exec(o);)
                                s[e[1].toLowerCase()] = e[2];
                        e = s[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? o : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return b || (t = y[n] = y[n] || t, m[t] = e), this
                },
                overrideMimeType: function(t) {
                    return b || (f.mimeType = t), this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (b < 2)
                            for (e in t)
                                v[e] = [v[e], t[e]];
                        else 
                            x.always(t[x.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return r && r.abort(e), n(0, e), this
                }
            };
            if (h.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, f.url = ((t || f.url || xe) + "").replace(fe, "").replace(ve, Te[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(dt) || [""], null == f.crossDomain && (l = me.exec(f.url.toLowerCase()), f.crossDomain=!(!l || l[1] === Te[1] && l[2] === Te[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Te[3] || ("http:" === Te[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)), P(ye, f, e, x), 2 === b)
                return x;
            u = K.event && f.global, u && 0 === K.active++&&K.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent=!ge.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ce.test(i) ? "&" : "?") + f.data, delete f.data), f.cache===!1 && (f.url = pe.test(i) ? i.replace(pe, "$1_=" + ue++) : i + (ce.test(i) ? "&" : "?") + "_=" + ue++)), f.ifModified && (K.lastModified[i] && x.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && x.setRequestHeader("If-None-Match", K.etag[i])), (f.data && f.hasContent && f.contentType!==!1 || e.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + we + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers)
                x.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, x, f)===!1 || 2 === b))
                return x.abort();
            w = "abort";
            for (c in{
                success: 1,
                error: 1,
                complete: 1
            })
                x[c](f[c]);
            if (r = P(be, f, e, x)) {
                x.readyState = 1, u && d.trigger("ajaxSend", [x, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, r.send(m, n)
                } catch (T) {
                    if (!(b < 2))
                        throw T;
                    n( - 1, T)
                }
            } else 
                n( - 1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return K.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return K.get(t, void 0, e, "script")
        }
    }), K.each(["get", "post"], function(t, e) {
        K[e] = function(t, n, r, i) {
            return K.isFunction(n) && (i = i || r, r = n, n = void 0), K.ajax({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), K._evalUrl = function(t) {
        return K.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, K.fn.extend({
        wrapAll: function(t) {
            var e;
            return K.isFunction(t) ? this.each(function(e) {
                K(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;)
                    t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return K.isFunction(t) ? this.each(function(e) {
                K(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = K(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = K.isFunction(t);
            return this.each(function(n) {
                K(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }
    }), K.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, K.expr.filters.visible = function(t) {
        return !K.expr.filters.hidden(t)
    };
    var Ce = /%20/g, Ee = /\[\]$/, ke = /\r?\n/g, De = /^(?:submit|button|image|reset|file)$/i, $e = /^(?:input|select|textarea|keygen)/i;
    K.param = function(t, e) {
        var n, r = [], i = function(t, e) {
            e = K.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery&&!K.isPlainObject(t)
            )K.each(t, function() {
            i(this.name, this.value)
        });
        else 
            for (n in t)
                I(n, t[n], e, i);
        return r.join("&").replace(Ce, "+")
    }, K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = K.prop(this, "elements");
                return t ? K.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name&&!K(this).is(":disabled") && $e.test(this.nodeName)&&!De.test(t) && (this.checked ||!Et.test(t))
            }).map(function(t, e) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(ke, "\r\n")
                }
            }).get()
        }
    }), K.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Ae = 0, Se = {}, _e = {
        0: 200,
        1223: 204
    }, Ne = K.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Se)
            Se[t]()
    }), G.cors=!!Ne && "withCredentials"in Ne, G.ajax = Ne=!!Ne, K.ajaxTransport(function(t) {
        var e;
        if (G.cors || Ne&&!t.crossDomain)
            return {
                send: function(n, r) {
                    var i, o = t.xhr(), s=++Ae;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (i in t.xhrFields)
                            o[i] = t.xhrFields[i];
                            t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            for (i in n)
                                o.setRequestHeader(i, n[i]);
                                e = function(t) {
                                    return function() {
                                        e && (delete Se[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? r(o.status, o.statusText) : r(_e[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                            text: o.responseText
                                        } : void 0, o.getAllResponseHeaders()))
                                    }
                                }, o.onload = e(), o.onerror = e("error"), e = Se[s] = e("abort");
                                try {
                                    o.send(t.hasContent && t.data || null)
                                } catch (a) {
                                    if (e)
                                        throw a
                                }
                            },
                            abort: function() {
                                e && e()
                            }
                        }
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return K.globalEval(t), t
            }
        }
    }), K.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache=!1), t.crossDomain && (t.type = "GET")
    }), K.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(r, i) {
                    e = K("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                    }), Z.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Fe = [], je = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Fe.pop() || K.expando + "_" + ue++;
            return this[t]=!0, t
        }
    }), K.ajaxPrefilter("json jsonp", function(e, n, r) {
        var i, o, s, a = e.jsonp!==!1 && (je.test(e.url) ? "url" : "string" == typeof e.data&&!(e.contentType || "").indexOf("application/x-www-form-urlencoded") && je.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(je, "$1" + i) : e.jsonp!==!1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return s || K.error(i + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
                s = arguments
            }, r.always(function() {
                t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Fe.push(i)), s && K.isFunction(o) && o(s[0]), s = o = void 0
            }), "script"
    }), K.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e, e=!1), e = e || Z;
        var r = st.exec(t), i=!n && [];
        return r ? [e.createElement(r[1])] : (r = K.buildFragment([t], e, i), i && i.length && K(i).remove(), K.merge([], r.childNodes))
    };
    var Le = K.fn.load;
    K.fn.load = function(t, e, n) {
        if ("string" != typeof t && Le)
            return Le.apply(this, arguments);
        var r, i, o, s = this, a = t.indexOf(" ");
        return a >= 0 && (r = K.trim(t.slice(a)), t = t.slice(0, a)), K.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), s.length > 0 && K.ajax({
            url: t,
            type: i,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(r ? K("<div>").append(K.parseHTML(t)).find(r) : t)
        }).complete(n && function(t, e) {
            s.each(n, o || [t.responseText, e, t])
        }), this
    }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        K.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), K.expr.filters.animated = function(t) {
        return K.grep(K.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Oe = t.document.documentElement;
    K.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, s, a, l, u, c = K.css(t, "position"), f = K(t), p = {};
            "static" === c && (t.style.position = "relative"), a = f.offset(), o = K.css(t, "top"), l = K.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto")>-1, u ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), K.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + i), "using"in e ? e.using.call(t, p) : f.css(p)
        }
    }, K.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                K.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0], i = {
                top: 0,
                left: 0
            }, o = r && r.ownerDocument;
            if (o)
                return e = o.documentElement, K.contains(e, r) ? (typeof r.getBoundingClientRect !== kt && (i = r.getBoundingClientRect()), n = H(o), {
                    top: i.top + n.pageYOffset - e.clientTop,
                    left: i.left + n.pageXOffset - e.clientLeft
                }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === K.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (r = t.offset()), r.top += K.css(t[0], "borderTopWidth", !0), r.left += K.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - r.top - K.css(n, "marginTop", !0),
                    left: e.left - r.left - K.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Oe; t&&!K.nodeName(t, "html") && "static" === K.css(t, "position");)
                    t = t.offsetParent;
                return t || Oe
            })
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = "pageYOffset" === n;
        K.fn[e] = function(i) {
            return vt(this, function(e, i, o) {
                var s = H(e);
                return void 0 === o ? s ? s[n] : e[i] : void(s ? s.scrollTo(r ? t.pageXOffset : o, r ? o : t.pageYOffset) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), K.each(["top", "left"], function(t, e) {
        K.cssHooks[e] = T(G.pixelPosition, function(t, n) {
            if (n)
                return n = x(t, e), Rt.test(n) ? K(t).position()[e] + "px" : n
        })
    }), K.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        K.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, r) {
            K.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), s = n || (r===!0 || i===!0 ? "margin" : "border");
                return vt(this, function(e, n, r) {
                    var i;
                    return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? K.css(e, n, s) : K.style(e, n, r, s)
                }, e, o ? r : void 0, o, null)
            }
        })
    }), K.fn.size = function() {
        return this.length
    }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return K
    });
    var Pe = t.jQuery, Be = t.$;
    return K.noConflict = function(e) {
        return t.$ === K && (t.$ = Be), e && t.jQuery === K && (t.jQuery = Pe), K
    }, typeof e === kt && (t.jQuery = t.$ = K), K
}), function(t) {
    "use strict";
    function e(e, n, r, i) {
        function o(t, e) {
            return t -= i, e -= i, !(t < 0 || t >= a || e < 0 || e >= a) && s.isDark(t, e)
        }
        var s = t(r, n);
        s.addData(e), s.make(), i = i || 0;
        var a = s.getModuleCount(), l = s.getModuleCount() + 2 * i, u = function(t, e, n, r) {
            var i = this.isDark, o = 1 / l;
            this.isDark = function(s, a) {
                var l = a * o, u = s * o, c = l + o, f = u + o;
                return i(s, a) && (t > c || l > n || e > f || u > r)
            }
        };
        this.text = e, this.level = n, this.version = r, this.moduleCount = l, this.isDark = o, this.addBlank = u
    }
    function n(t, n, r, i, o) {
        r = Math.max(1, r || 1), i = Math.min(40, i || 40);
        for (var s = r; s <= i; s += 1)
            try {
                return new e(t, n, s, o)
        } catch (a) {}
    }
    function r(t, e, n) {
        var r = n.size, i = "bold " + n.mSize * r + "px " + n.fontname, o = v("<canvas/>")[0].getContext("2d");
        o.font = i;
        var s = o.measureText(n.label).width, a = n.mSize, l = s / r, u = (1 - l) * n.mPosX, c = (1 - a) * n.mPosY, f = u + l, p = c + a, d = .01;
        1 === n.mode ? t.addBlank(0, c - d, r, p + d) : t.addBlank(u - d, c - d, f + d, p + d), e.fillStyle = n.fontcolor, e.font = i, e.fillText(n.label, u * r, c * r + .75 * n.mSize * r)
    }
    function i(t, e, n) {
        var r = n.size, i = n.image.naturalWidth || 1, o = n.image.naturalHeight || 1, s = n.mSize, a = s * i / o, l = (1 - a) * n.mPosX, u = (1 - s) * n.mPosY, c = l + a, f = u + s, p = .01;
        3 === n.mode ? t.addBlank(0, u - p, r, f + p) : t.addBlank(l - p, u - p, c + p, f + p), e.drawImage(n.image, l * r, u * r, a * r, s * r)
    }
    function o(t, e, n) {
        v(n.background).is("img") ? e.drawImage(n.background, 0, 0, n.size, n.size) : n.background && (e.fillStyle = n.background, e.fillRect(n.left, n.top, n.size, n.size));
        var o = n.mode;
        1 === o || 2 === o ? r(t, e, n) : 3 !== o && 4 !== o || i(t, e, n)
    }
    function s(t, e, n, r, i, o, s, a) {
        t.isDark(s, a) && e.rect(r, i, o, o)
    }
    function a(t, e, n, r, i, o, s, a, l, u) {
        s ? t.moveTo(e + o, n) : t.moveTo(e, n), a ? (t.lineTo(r - o, n), t.arcTo(r, n, r, i, o)) : t.lineTo(r, n), l ? (t.lineTo(r, i - o), t.arcTo(r, i, e, i, o)) : t.lineTo(r, i), u ? (t.lineTo(e + o, i), t.arcTo(e, i, e, n, o)) : t.lineTo(e, i), s ? (t.lineTo(e, n + o), t.arcTo(e, n, r, n, o)) : t.lineTo(e, n)
    }
    function l(t, e, n, r, i, o, s, a, l, u) {
        s && (t.moveTo(e + o, n), t.lineTo(e, n), t.lineTo(e, n + o), t.arcTo(e, n, e + o, n, o)), a && (t.moveTo(r - o, n), t.lineTo(r, n), t.lineTo(r, n + o), t.arcTo(r, n, r - o, n, o)), l && (t.moveTo(r - o, i), t.lineTo(r, i), t.lineTo(r, i - o), t.arcTo(r, i, r - o, i, o)), u && (t.moveTo(e + o, i), t.lineTo(e, i), t.lineTo(e, i - o), t.arcTo(e, i, e + o, i, o))
    }
    function u(t, e, n, r, i, o, s, u) {
        var c = t.isDark, f = r + o, p = i + o, d = n.radius * o, h = s - 1, g = s + 1, v = u - 1, m = u + 1, y = c(s, u), b = c(h, v), w = c(h, u), x = c(h, m), T = c(s, m), C = c(g, m), E = c(g, u), k = c(g, v), D = c(s, v);
        y ? a(e, r, i, f, p, d, !w&&!D, !w&&!T, !E&&!T, !E&&!D) : l(e, r, i, f, p, d, w && D && b, w && T && x, E && T && C, E && D && k)
    }
    function c(t, e, n) {
        var r, i, o = t.moduleCount, a = n.size / o, l = s;
        for (y && n.radius > 0 && n.radius <= .5 && (l = u), e.beginPath(), r = 0; r < o; r += 1)
            for (i = 0; i < o; i += 1) {
                var c = n.left + i * a, f = n.top + r * a, p = a;
                l(t, e, n, c, f, p, r, i)
            }
        if (v(n.fill).is("img")) {
            e.strokeStyle = "rgba(0,0,0,0.5)", e.lineWidth = 2, e.stroke();
            var d = e.globalCompositeOperation;
            e.globalCompositeOperation = "destination-out", e.fill(), e.globalCompositeOperation = d, e.clip(), e.drawImage(n.fill, 0, 0, n.size, n.size), e.restore()
        } else 
            e.fillStyle = n.fill, e.fill()
    }
    function f(t, e) {
        var r = n(e.text, e.ecLevel, e.minVersion, e.maxVersion, e.quiet);
        if (!r)
            return null;
        var i = v(t).data("qrcode", r), s = i[0].getContext("2d");
        return o(r, s, e), c(r, s, e), i
    }
    function p(t) {
        var e = v("<canvas/>").attr("width", t.size).attr("height", t.size);
        return f(e, t)
    }
    function d(t) {
        return v("<img/>").attr("src", p(t)[0].toDataURL("image/png"))
    }
    function h(t) {
        var e = n(t.text, t.ecLevel, t.minVersion, t.maxVersion, t.quiet);
        if (!e)
            return null;
        var r, i, o = t.size, s = t.background, a = Math.floor, l = e.moduleCount, u = a(o / l), c = a(.5 * (o - u * l)), f = {
            position: "relative",
            left: 0,
            top: 0,
            padding: 0,
            margin: 0,
            width: o,
            height: o
        }, p = {
            position: "absolute",
            padding: 0,
            margin: 0,
            width: u,
            height: u,
            "background-color": t.fill
        }, d = v("<div/>").data("qrcode", e).css(f);
        for (s && d.css("background-color", s), r = 0; r < l; r += 1)
            for (i = 0; i < l; i += 1)
                e.isDark(r, i) && v("<div/>").css(p).css({
                    left: c + i * u,
                    top: c + r * u
                }).appendTo(d);
        return d
    }
    function g(t) {
        return m && "canvas" === t.render ? p(t) : m && "image" === t.render ? d(t) : h(t)
    }
    var v = jQuery, m = function() {
        var t = document.createElement("canvas");
        return Boolean(t.getContext && t.getContext("2d"))
    }(), y = "[object Opera]" !== Object.prototype.toString.call(window.opera), b = {
        render: "canvas",
        minVersion: 1,
        maxVersion: 40,
        ecLevel: "L",
        left: 0,
        top: 0,
        size: 200,
        fill: "#000",
        background: null,
        text: "no text",
        radius: 0,
        quiet: 0,
        mode: 0,
        mSize: .1,
        mPosX: .5,
        mPosY: .5,
        label: "no label",
        fontname: "sans",
        fontcolor: "#000",
        image: null
    };
    v.fn.qrcode = function(t) {
        var e = v.extend({}, b, t);
        return this.each(function() {
            "canvas" === this.nodeName.toLowerCase() ? f(this, e) : v(this).append(g(e))
        })
    }
}(function() {
    var t = function() {
        function t(e, n) {
            if ("undefined" == typeof e.length)
                throw new Error(e.length + "/" + n);
            var r = function() {
                for (var t = 0; t < e.length && 0 == e[t];)
                    t += 1;
                for (var r = new Array(e.length - t + n), i = 0; i < e.length - t; i += 1)
                    r[i] = e[i + t];
                return r
            }(), i = {};
            return i.getAt = function(t) {
                return r[t]
            }, i.getLength = function() {
                return r.length
            }, i.multiply = function(e) {
                for (var n = new Array(i.getLength() + e.getLength() - 1), r = 0; r < i.getLength(); r += 1)
                    for (var o = 0; o < e.getLength(); o += 1)
                        n[r + o]^=s.gexp(s.glog(i.getAt(r)) + s.glog(e.getAt(o)));
                return t(n, 0)
            }, i.mod = function(e) {
                if (i.getLength() - e.getLength() < 0)
                    return i;
                for (var n = s.glog(i.getAt(0)) - s.glog(e.getAt(0)), r = new Array(i.getLength()), o = 0; o < i.getLength(); o += 1)
                    r[o] = i.getAt(o);
                for (var o = 0; o < e.getLength(); o += 1)
                    r[o]^=s.gexp(s.glog(e.getAt(o)) + n);
                return t(r, 0).mod(e)
            }, i
        }
        var e = function(e, n) {
            var i = 236, s = 17, c = e, f = r[n], p = null, d = 0, g = null, v = new Array, m = {}, y = function(t, e) {
                d = 4 * c + 17, p = function(t) {
                    for (var e = new Array(t), n = 0; n < t; n += 1) {
                        e[n] = new Array(t);
                        for (var r = 0; r < t; r += 1)
                            e[n][r] = null
                    }
                    return e
                }(d), b(0, 0), b(d - 7, 0), b(0, d - 7), T(), x(), E(t, e), c >= 7 && C(t), null == g && (g = $(c, f, v)), k(g, e)
            }, b = function(t, e) {
                for (var n =- 1; n <= 7; n += 1)
                    if (!(t + n<=-1 || d <= t + n))
                        for (var r =- 1; r <= 7; r += 1)
                            e + r<=-1 || d <= e + r || (0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4 ? p[t + n][e + r]=!0 : p[t + n][e + r]=!1)
            }, w = function() {
                for (var t = 0, e = 0, n = 0; n < 8; n += 1) {
                    y(!0, n);
                    var r = o.getLostPoint(m);
                    (0 == n || t > r) && (t = r, e = n)
                }
                return e
            }, x = function() {
                for (var t = 8; t < d - 8; t += 1)
                    null == p[t][6] && (p[t][6] = t%2 == 0);
                for (var e = 8; e < d - 8; e += 1)
                    null == p[6][e] && (p[6][e] = e%2 == 0)
            }, T = function() {
                for (var t = o.getPatternPosition(c), e = 0; e < t.length; e += 1)
                    for (var n = 0; n < t.length; n += 1) {
                        var r = t[e], i = t[n];
                        if (null == p[r][i])
                            for (var s =- 2; s <= 2; s += 1)
                                for (var a =- 2; a <= 2; a += 1)
                                    s==-2 || 2 == s || a==-2 || 2 == a || 0 == s && 0 == a ? p[r + s][i + a]=!0 : p[r + s][i + a]=!1
                    }
            }, C = function(t) {
                for (var e = o.getBCHTypeNumber(c), n = 0; n < 18; n += 1) {
                    var r=!t && 1 == (e>>n & 1);
                    p[Math.floor(n / 3)][n%3 + d - 8 - 3] = r
                }
                for (var n = 0; n < 18; n += 1) {
                    var r=!t && 1 == (e>>n & 1);
                    p[n%3 + d - 8 - 3][Math.floor(n / 3)] = r
                }
            }, E = function(t, e) {
                for (var n = f<<3 | e, r = o.getBCHTypeInfo(n), i = 0; i < 15; i += 1) {
                    var s=!t && 1 == (r>>i & 1);
                    i < 6 ? p[i][8] = s : i < 8 ? p[i + 1][8] = s : p[d - 15 + i][8] = s
                }
                for (var i = 0; i < 15; i += 1) {
                    var s=!t && 1 == (r>>i & 1);
                    i < 8 ? p[8][d - i - 1] = s : i < 9 ? p[8][15 - i - 1 + 1] = s : p[8][15 - i - 1] = s
                }
                p[d - 8][8]=!t
            }, k = function(t, e) {
                for (var n =- 1, r = d - 1, i = 7, s = 0, a = o.getMaskFunction(e), l = d - 1; l > 0; l -= 2)
                    for (6 == l && (l -= 1); ;) {
                        for (var u = 0; u < 2; u += 1)
                            if (null == p[r][l - u]) {
                                var c=!1;
                                s < t.length && (c = 1 == (t[s]>>>i & 1));
                                var f = a(r, l - u);
                                f && (c=!c), p[r][l - u] = c, i -= 1, i==-1 && (s += 1, i = 7)
                            }
                            if (r += n, r < 0 || d <= r) {
                                r -= n, n =- n;
                                break
                            }
                    }
            }, D = function(e, n) {
                for (var r = 0, i = 0, s = 0, a = new Array(n.length), l = new Array(n.length), u = 0; u < n.length; u += 1) {
                    var c = n[u].dataCount, f = n[u].totalCount - c;
                    i = Math.max(i, c), s = Math.max(s, f), a[u] = new Array(c);
                    for (var p = 0; p < a[u].length; p += 1)
                        a[u][p] = 255 & e.getBuffer()[p + r];
                    r += c;
                    var d = o.getErrorCorrectPolynomial(f), h = t(a[u], d.getLength() - 1), g = h.mod(d);
                    l[u] = new Array(d.getLength() - 1);
                    for (var p = 0; p < l[u].length; p += 1) {
                        var v = p + g.getLength() - l[u].length;
                        l[u][p] = v >= 0 ? g.getAt(v) : 0
                    }
                }
                for (var m = 0, p = 0; p < n.length; p += 1)
                    m += n[p].totalCount;
                for (var y = new Array(m), b = 0, p = 0; p < i; p += 1)
                    for (var u = 0; u < n.length; u += 1)
                        p < a[u].length && (y[b] = a[u][p], b += 1);
                for (var p = 0; p < s; p += 1)
                    for (var u = 0; u < n.length; u += 1)
                        p < l[u].length && (y[b] = l[u][p], b += 1);
                return y
            }, $ = function(t, e, n) {
                for (var r = a.getRSBlocks(t, e), u = l(), c = 0; c < n.length; c += 1) {
                    var f = n[c];
                    u.put(f.getMode(), 4), u.put(f.getLength(), o.getLengthInBits(f.getMode(), t)), f.write(u)
                }
                for (var p = 0, c = 0; c < r.length; c += 1)
                    p += r[c].dataCount;
                if (u.getLengthInBits() > 8 * p)
                    throw new Error("code length overflow. (" + u.getLengthInBits() + ">" + 8 * p + ")");
                for (u.getLengthInBits() + 4 <= 8 * p && u.put(0, 4); u.getLengthInBits()%8 != 0;)
                    u.putBit(!1);
                for (; ;) {
                    if (u.getLengthInBits() >= 8 * p)
                        break;
                    if (u.put(i, 8), u.getLengthInBits() >= 8 * p)
                        break;
                    u.put(s, 8)
                }
                return D(u, r)
            };
            return m.addData = function(t) {
                var e = u(t);
                v.push(e), g = null
            }, m.isDark = function(t, e) {
                if (t < 0 || d <= t || e < 0 || d <= e)
                    throw new Error(t + "," + e);
                return p[t][e]
            }, m.getModuleCount = function() {
                return d
            }, m.make = function() {
                y(!1, w())
            }, m.createTableTag = function(t, e) {
                t = t || 2, e = "undefined" == typeof e ? 4 * t : e;
                var n = "";
                n += '<table style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: " + e + "px;", n += '">', n += "<tbody>";
                for (var r = 0; r < m.getModuleCount(); r += 1) {
                    n += "<tr>";
                    for (var i = 0; i < m.getModuleCount(); i += 1)
                        n += '<td style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: 0px;", n += " width: " + t + "px;", n += " height: " + t + "px;", n += " background-color: ", n += m.isDark(r, i) ? "#000000" : "#ffffff", n += ";", n += '"/>';
                    n += "</tr>"
                }
                return n += "</tbody>", n += "</table>"
            }, m.createImgTag = function(t, e) {
                t = t || 2, e = "undefined" == typeof e ? 4 * t : e;
                var n = m.getModuleCount() * t + 2 * e, r = e, i = n - e;
                return h(n, n, function(e, n) {
                    if (r <= e && e < i && r <= n && n < i) {
                        var o = Math.floor((e - r) / t), s = Math.floor((n - r) / t);
                        return m.isDark(s, o) ? 0 : 1
                    }
                    return 1
                })
            }, m
        };
        e.stringToBytes = function(t) {
            for (var e = new Array, n = 0; n < t.length; n += 1) {
                var r = t.charCodeAt(n);
                e.push(255 & r)
            }
            return e
        }, e.createStringToBytes = function(t, e) {
            var n = function() {
                for (var n = p(t), r = function() {
                    var t = n.read();
                    if (t==-1)
                        throw new Error;
                    return t
                }, i = 0, o = {}; ;) {
                    var s = n.read();
                    if (s==-1)
                        break;
                    var a = r(), l = r(), u = r(), c = String.fromCharCode(s<<8 | a), f = l<<8 | u;
                    o[c] = f, i += 1
                }
                if (i != e)
                    throw new Error(i + " != " + e);
                return o
            }(), r = "?".charCodeAt(0);
            return function(t) {
                for (var e = new Array, i = 0; i < t.length; i += 1) {
                    var o = t.charCodeAt(i);
                    if (o < 128)
                        e.push(o);
                    else {
                        var s = n[t.charAt(i)];
                        "number" == typeof s ? (255 & s) == s ? e.push(s) : (e.push(s>>>8), e.push(255 & s)) : e.push(r)
                    }
                }
                return e
            }
        };
        var n = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, r = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, i = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, o = function() {
            var e = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], r = 1335, o = 7973, a = 21522, l = {}, u = function(t) {
                for (var e = 0; 0 != t;)
                    e += 1, t>>>=1;
                return e
            };
            return l.getBCHTypeInfo = function(t) {
                for (var e = t<<10; u(e) - u(r) >= 0;)
                    e^=r<<u(e) - u(r);
                return (t<<10 | e)^a
            }, l.getBCHTypeNumber = function(t) {
                for (var e = t<<12; u(e) - u(o) >= 0;)
                    e^=o<<u(e) - u(o);
                return t<<12 | e
            }, l.getPatternPosition = function(t) {
                return e[t - 1]
            }, l.getMaskFunction = function(t) {
                switch (t) {
                case i.PATTERN000:
                    return function(t, e) {
                        return (t + e)%2 == 0
                    };
                case i.PATTERN001:
                    return function(t, e) {
                        return t%2 == 0
                    };
                case i.PATTERN010:
                    return function(t, e) {
                        return e%3 == 0
                    };
                case i.PATTERN011:
                    return function(t, e) {
                        return (t + e)%3 == 0
                    };
                case i.PATTERN100:
                    return function(t, e) {
                        return (Math.floor(t / 2) + Math.floor(e / 3))%2 == 0
                    };
                case i.PATTERN101:
                    return function(t, e) {
                        return t * e%2 + t * e%3 == 0
                    };
                case i.PATTERN110:
                    return function(t, e) {
                        return (t * e%2 + t * e%3)%2 == 0
                    };
                case i.PATTERN111:
                    return function(t, e) {
                        return (t * e%3 + (t + e)%2)%2 == 0
                    };
                default:
                    throw new Error("bad maskPattern:" + t)
                }
            }, l.getErrorCorrectPolynomial = function(e) {
                for (var n = t([1], 0), r = 0; r < e; r += 1)
                    n = n.multiply(t([1, s.gexp(r)], 0));
                return n
            }, l.getLengthInBits = function(t, e) {
                if (1 <= e && e < 10)
                    switch (t) {
                    case n.MODE_NUMBER:
                        return 10;
                    case n.MODE_ALPHA_NUM:
                        return 9;
                    case n.MODE_8BIT_BYTE:
                        return 8;
                    case n.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + t)
                    } else if (e < 27)
                    switch (t) {
                    case n.MODE_NUMBER:
                        return 12;
                    case n.MODE_ALPHA_NUM:
                        return 11;
                    case n.MODE_8BIT_BYTE:
                        return 16;
                    case n.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + t)
                    } else {
                    if (!(e < 41))
                        throw new Error("type:" + e);
                    switch (t) {
                    case n.MODE_NUMBER:
                        return 14;
                    case n.MODE_ALPHA_NUM:
                        return 13;
                    case n.MODE_8BIT_BYTE:
                        return 16;
                    case n.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + t)
                    }
                }
            }, l.getLostPoint = function(t) {
                for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r += 1)
                    for (var i = 0; i < e; i += 1) {
                        for (var o = 0, s = t.isDark(r, i), a =- 1; a <= 1; a += 1)
                            if (!(r + a < 0 || e <= r + a))
                                for (var l =- 1; l <= 1; l += 1)
                                    i + l < 0 || e <= i + l || 0 == a && 0 == l || s == t.isDark(r + a, i + l) && (o += 1);
                                    o > 5 && (n += 3 + o - 5)
                    }
                for (var r = 0; r < e - 1; r += 1)
                    for (var i = 0; i < e - 1; i += 1) {
                        var u = 0;
                        t.isDark(r, i) && (u += 1), t.isDark(r + 1, i) && (u += 1), t.isDark(r, i + 1) && (u += 1), t.isDark(r + 1, i + 1) && (u += 1), 0 != u && 4 != u || (n += 3)
                    }
                for (var r = 0; r < e; r += 1)
                    for (var i = 0; i < e - 6; i += 1)
                        t.isDark(r, i)&&!t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4)&&!t.isDark(r, i + 5) && t.isDark(r, i + 6) && (n += 40);
                for (var i = 0; i < e; i += 1)
                    for (var r = 0; r < e - 6; r += 1)
                        t.isDark(r, i)&&!t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i)&&!t.isDark(r + 5, i) && t.isDark(r + 6, i) && (n += 40);
                for (var c = 0, i = 0; i < e; i += 1)
                    for (var r = 0; r < e; r += 1)
                        t.isDark(r, i) && (c += 1);
                var f = Math.abs(100 * c / e / e - 50) / 5;
                return n += 10 * f
            }, l
        }(), s = function() {
            for (var t = new Array(256), e = new Array(256), n = 0; n < 8; n += 1)
                t[n] = 1<<n;
            for (var n = 8; n < 256; n += 1)
                t[n] = t[n - 4]^t[n - 5]^t[n - 6]^t[n - 8];
            for (var n = 0; n < 255; n += 1)
                e[t[n]] = n;
            var r = {};
            return r.glog = function(t) {
                if (t < 1)
                    throw new Error("glog(" + t + ")");
                return e[t]
            }, r.gexp = function(e) {
                for (; e < 0;)
                    e += 255;
                for (; e >= 256;)
                    e -= 255;
                return t[e]
            }, r
        }(), a = function() {
            var t = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], e = function(t, e) {
                var n = {};
                return n.totalCount = t, n.dataCount = e, n
            }, n = {}, i = function(e, n) {
                switch (n) {
                case r.L:
                    return t[4 * (e - 1) + 0];
                case r.M:
                    return t[4 * (e - 1) + 1];
                case r.Q:
                    return t[4 * (e - 1) + 2];
                case r.H:
                    return t[4 * (e - 1) + 3];
                default:
                    return 
                }
            };
            return n.getRSBlocks = function(t, n) {
                var r = i(t, n);
                if ("undefined" == typeof r)
                    throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + n);
                for (var o = r.length / 3, s = new Array, a = 0; a < o; a += 1)
                    for (var l = r[3 * a + 0], u = r[3 * a + 1], c = r[3 * a + 2], f = 0; f < l; f += 1)
                        s.push(e(u, c));
                return s
            }, n
        }(), l = function() {
            var t = new Array, e = 0, n = {};
            return n.getBuffer = function() {
                return t
            }, n.getAt = function(e) {
                var n = Math.floor(e / 8);
                return 1 == (t[n]>>>7 - e%8 & 1)
            }, n.put = function(t, e) {
                for (var r = 0; r < e; r += 1)
                    n.putBit(1 == (t>>>e - r - 1 & 1))
            }, n.getLengthInBits = function() {
                return e
            }, n.putBit = function(n) {
                var r = Math.floor(e / 8);
                t.length <= r && t.push(0), n && (t[r]|=128>>>e%8), e += 1
            }, n
        }, u = function(t) {
            var r = n.MODE_8BIT_BYTE, i = e.stringToBytes(t), o = {};
            return o.getMode = function() {
                return r
            }, o.getLength = function(t) {
                return i.length
            }, o.write = function(t) {
                for (var e = 0; e < i.length; e += 1)
                    t.put(i[e], 8)
            }, o
        }, c = function() {
            var t = new Array, e = {};
            return e.writeByte = function(e) {
                t.push(255 & e)
            }, e.writeShort = function(t) {
                e.writeByte(t), e.writeByte(t>>>8)
            }, e.writeBytes = function(t, n, r) {
                n = n || 0, r = r || t.length;
                for (var i = 0; i < r; i += 1)
                    e.writeByte(t[i + n])
                }, e.writeString = function(t) {
                for (var n = 0; n < t.length; n += 1)
                    e.writeByte(t.charCodeAt(n))
            }, e.toByteArray = function() {
                return t
            }, e.toString = function() {
                var e = "";
                e += "[";
                for (var n = 0; n < t.length; n += 1)
                    n > 0 && (e += ","), e += t[n];
                return e += "]"
            }, e
        }, f = function() {
            var t = 0, e = 0, n = 0, r = "", i = {}, o = function(t) {
                r += String.fromCharCode(s(63 & t))
            }, s = function(t) {
                if (t < 0);
                else {
                    if (t < 26)
                        return 65 + t;
                    if (t < 52)
                        return 97 + (t - 26);
                    if (t < 62)
                        return 48 + (t - 52);
                    if (62 == t)
                        return 43;
                    if (63 == t)
                        return 47
                }
                throw new Error("n:" + t)
            };
            return i.writeByte = function(r) {
                for (t = t<<8 | 255 & r, e += 8, n += 1; e >= 6;)
                    o(t>>>e - 6), e -= 6
            }, i.flush = function() {
                if (e > 0 && (o(t<<6 - e), t = 0, e = 0), n%3 != 0)
                    for (var i = 3 - n%3, s = 0; s < i; s += 1)
                        r += "="
            }, i.toString = function() {
                return r
            }, i
        }, p = function(t) {
            var e = t, n = 0, r = 0, i = 0, o = {};
            o.read = function() {
                for (; i < 8;) {
                    if (n >= e.length) {
                        if (0 == i)
                            return - 1;
                        throw new Error("unexpected end of file./" + i)
                    }
                    var t = e.charAt(n);
                    if (n += 1, "=" == t)
                        return i = 0, - 1;
                    t.match(/^\s$/) || (r = r<<6 | s(t.charCodeAt(0)), i += 6)
                }
                var o = r>>>i - 8 & 255;
                return i -= 8, o
            };
            var s = function(t) {
                if (65 <= t && t <= 90)
                    return t - 65;
                if (97 <= t && t <= 122)
                    return t - 97 + 26;
                if (48 <= t && t <= 57)
                    return t - 48 + 52;
                if (43 == t)
                    return 62;
                if (47 == t)
                    return 63;
                throw new Error("c:" + t)
            };
            return o
        }, d = function(t, e) {
            var n = t, r = e, i = new Array(t * e), o = {};
            o.setPixel = function(t, e, r) {
                i[e * n + t] = r
            }, o.write = function(t) {
                t.writeString("GIF87a"), t.writeShort(n), t.writeShort(r), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(n), t.writeShort(r), t.writeByte(0);
                var e = 2, i = a(e);
                t.writeByte(e);
                for (var o = 0; i.length - o > 255;)
                    t.writeByte(255), t.writeBytes(i, o, 255), o += 255;
                t.writeByte(i.length - o), t.writeBytes(i, o, i.length - o), t.writeByte(0), t.writeString(";")
            };
            var s = function(t) {
                var e = t, n = 0, r = 0, i = {};
                return i.write = function(t, i) {
                    if (t>>>i != 0)
                        throw new Error("length over");
                    for (; n + i >= 8;)
                        e.writeByte(255 & (t<<n | r)), i -= 8 - n, t>>>=8 - n, r = 0, n = 0;
                    r = t<<n | r, n += i
                }, i.flush = function() {
                    n > 0 && e.writeByte(r)
                }, i
            }, a = function(t) {
                for (var e = 1<<t, n = (1<<t) + 1, r = t + 1, o = l(), a = 0; a < e; a += 1)
                    o.add(String.fromCharCode(a));
                o.add(String.fromCharCode(e)), o.add(String.fromCharCode(n));
                var u = c(), f = s(u);
                f.write(e, r);
                var p = 0, d = String.fromCharCode(i[p]);
                for (p += 1; p < i.length;) {
                    var h = String.fromCharCode(i[p]);
                    p += 1, o.contains(d + h) ? d += h : (f.write(o.indexOf(d), r), o.size() < 4095 && (o.size() == 1<<r && (r += 1), o.add(d + h)), d = h)
                }
                return f.write(o.indexOf(d), r), f.write(n, r), f.flush(), u.toByteArray()
            }, l = function() {
                var t = {}, e = 0, n = {};
                return n.add = function(r) {
                    if (n.contains(r))
                        throw new Error("dup key:" + r);
                    t[r] = e, e += 1
                }, n.size = function() {
                    return e
                }, n.indexOf = function(e) {
                    return t[e]
                }, n.contains = function(e) {
                    return "undefined" != typeof t[e]
                }, n
            };
            return o
        }, h = function(t, e, n, r) {
            for (var i = d(t, e), o = 0; o < e; o += 1)
                for (var s = 0; s < t; s += 1)
                    i.setPixel(s, o, n(s, o));
            var a = c();
            i.write(a);
            for (var l = f(), u = a.toByteArray(), p = 0; p < u.length; p += 1)
                l.writeByte(u[p]);
            l.flush();
            var h = "";
            return h += "<img", h += ' src="', h += "data:image/gif;base64,", h += l, h += '"', h += ' width="', h += t, h += '"', h += ' height="', h += e, h += '"', r && (h += ' alt="', h += r, h += '"'), h += "/>"
        };
        return e
    }();
    return function(t) {
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports && (module.exports = t())
    }(function() {
        return t
    }), !function(t) {
        t.stringToBytes = function(t) {
            function e(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var r = t.charCodeAt(n);
                    r < 128 ? e.push(r) : r < 2048 ? e.push(192 | r>>6, 128 | 63 & r) : r < 55296 || r >= 57344 ? e.push(224 | r>>12, 128 | r>>6 & 63, 128 | 63 & r) : (n++, r = 65536 + ((1023 & r)<<10 | 1023 & t.charCodeAt(n)), e.push(240 | r>>18, 128 | r>>12 & 63, 128 | r>>6 & 63, 128 | 63 & r))
                }
                return e
            }
            return e(t)
        }
    }(t), t
}()), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+ function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)
            if (void 0 !== t.style[n])
                return {
                    end: e[n]
                };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n=!1, r = this;
        t(this).one("bsTransitionEnd", function() {
            n=!0
        });
        var i = function() {
            n || t(r).trigger(t.support.transition.end)
        };
        return setTimeout(i, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), i = n.data("bs.alert");
            i || n.data("bs.alert", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]', r = function(e) {
        t(e).on("click", n, this.close)
    };
    r.VERSION = "3.2.0", r.prototype.close = function(e) {
        function n() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this), i = r.attr("data-target");
        i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(i);
        e && e.preventDefault(), o.length || (o = r.hasClass("alert") ? r : r.parent()), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var i = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = r, t.fn.alert.noConflict = function() {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", n, r.prototype.close)
}(jQuery), + function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.button"), o = "object" == typeof e && e;
            i || r.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e)
        })
    }
    var n = function(e, r) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.isLoading=!1
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled", r = this.$element, i = r.is("input") ? "val": "html", o = r.data();
        e += "Text", null == o.resetText && r.data("resetText", r[i]()), r[i](null == o[e] ? this.options[e] : o[e]), setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading=!0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading=!1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t=!0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t=!1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var r = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = r, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var r = t(n.target);
        r.hasClass("btn") || (r = r.closest(".btn")), e.call(r, "toggle"), n.preventDefault()
    })
}(jQuery), + function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.carousel"), o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e), s = "string" == typeof e ? e: o.slide;
            i || r.data("bs.carousel", i = new n(this, o)), "number" == typeof e ? i.to(e) : s ? i[s]() : o.interval && i.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, n.prototype.keydown = function(t) {
        switch (t.which) {
        case 37:
            this.prev();
            break;
        case 39:
            this.next();
            break;
        default:
            return 
        }
        t.preventDefault()
    }, n.prototype.cycle = function(e) {
        return e || (this.paused=!1), this.interval && clearInterval(this.interval), this.options.interval&&!this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.to = function(e) {
        var n = this, r = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                n.to(e)
            }) : r == e ? this.pause().cycle() : this.slide(e > r ? "next" : "prev", t(this.$items[e]))
    }, n.prototype.pause = function(e) {
        return e || (this.paused=!0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }, n.prototype.slide = function(e, n) {
        var r = this.$element.find(".item.active"), i = n || r[e](), o = this.interval, s = "next" == e ? "left": "right", a = "next" == e ? "first": "last", l = this;
        if (!i.length) {
            if (!this.options.wrap)
                return;
            i = this.$element.find(".item")[a]()
        }
        if (i.hasClass("active"))
            return this.sliding=!1;
        var u = i[0], c = t.Event("slide.bs.carousel", {
            relatedTarget: u,
            direction: s
        });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding=!0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(i)]);
                f && f.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
            return t.support.transition && this.$element.hasClass("slide") ? (i.addClass(e), i[0].offsetWidth, r.addClass(s), i.addClass(s), r.one("bsTransitionEnd", function() {
                i.removeClass([e, s].join(" ")).addClass("active"), r.removeClass(["active", s].join(" ")), l.sliding=!1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(1e3 * r.css("transition-duration").slice(0, - 1))) : (r.removeClass("active"), i.addClass("active"), this.sliding=!1, this.$element.trigger(p)), o && this.cycle(), this
        }
    };
    var r = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = r, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
        var r, i = t(this), o = t(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), i.data()), a = i.attr("data-slide-to");
            a && (s.interval=!1), e.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
        }
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.collapse"), o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            !i && o.toggle && "show" == e && (e=!e), i || r.data("bs.collapse", i = new n(this, o)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e, r) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning&&!this.$element.hasClass("in")) {
            var n = t.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var r = this.$parent && this.$parent.find("> .panel > .in");
                if (r && r.length) {
                    var i = r.data("bs.collapse");
                    if (i && i.transitioning)
                        return;
                    e.call(r, "hide"), i || r.data("bs.collapse", null)
                }
                var o = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[o](0), this.transitioning = 1;
                var s = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition)
                    return s.call(this);
                var a = t.camelCase(["scroll", o].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(350)[o](this.$element[0][a])
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(350) : r.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    };
    var r = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var r, i = t(this), o = i.attr("data-target") || n.preventDefault() || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""), s = t(o), a = s.data("bs.collapse"), l = a ? "toggle": i.data(), u = i.attr("data-parent"), c = u && t(u);
        a && a.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + u + '"]').not(i).addClass("collapsed"), i[s.hasClass("in") ? "addClass": "removeClass"]("collapsed")), e.call(s, l)
    })
}(jQuery), + function(t) {
    "use strict";
    function e(e) {
        e && 3 === e.which || (t(i).remove(), t(o).each(function() {
            var r = n(t(this)), i = {
                relatedTarget: this
            };
            r.hasClass("open") && (r.trigger(e = t.Event("hide.bs.dropdown", i)), e.isDefaultPrevented() || r.removeClass("open").trigger("hidden.bs.dropdown", i))
        }))
    }
    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && t(n);
        return r && r.length ? r : e.parent()
    }
    function r(e) {
        return this.each(function() {
            var n = t(this), r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new s(this)), "string" == typeof e && r[e].call(n)
        })
    }
    var i = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', s = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.2.0", s.prototype.toggle = function(r) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var o = n(i), s = o.hasClass("open");
            if (e(), !s) {
                "ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(r = t.Event("show.bs.dropdown", a)), r.isDefaultPrevented())
                    return;
                i.trigger("focus"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var r = t(this);
            if (e.preventDefault(), e.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = n(r), s = i.hasClass("open");
                if (!s || s && 27 == e.keyCode)
                    return 27 == e.which && i.find(o).trigger("focus"), r.trigger("click");
                var a = " li:not(.divider):visible a", l = i.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = r, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ', [role="menu"], [role="listbox"]', s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";
    function e(e, r) {
        return this.each(function() {
            var i = t(this), o = i.data("bs.modal"), s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            o || i.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](r) : s.show && o.show(r)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var n = this, r = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown=!0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var r = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0).trigger("showing.bs.modal"), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var i = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(i)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(i)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown&&!e.isDefaultPrevented() && (this.isShown=!1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var n = this, r = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var i = t.support.transition && r;
            if (this.$backdrop = t('<div class="modal-backdrop ' + r + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
                return;
            i ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o()
        } else 
            e && e()
    }, n.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var r = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = r, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var r = t(this), i = r.attr("href"), o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), s = o.data("bs.modal") ? "toggle": t.extend({
            remote: !/#/.test(i) && i
        }, o.data(), r.data());
        r.is("a") && n.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        }), e.call(o, s, this)
    })
}(jQuery), + function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.tooltip"), o = "object" == typeof e && e;
            (i || "destroy" != e) && (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, r) {
        this.enabled=!0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var s = i[o];
            if ("click" == s)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter": "focusin", l = "hover" == s ? "mouseleave": "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function(t, r) {
            n[t] != r && (e[t] = r)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() ||!n)
                return;
            var r = this, i = this.tip(), o = this.getUID(this.type);
            this.setContent(), i.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && i.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]): this.options.placement, a = /\s?auto?\s?/i, l = a.test(s);
            l && (s = s.replace(a, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var u = this.getPosition(), c = i[0].offsetWidth, f = i[0].offsetHeight;
            if (l) {
                var p = s, d = this.$element.parent(), h = this.getPosition(d);
                s = "bottom" == s && u.top + u.height + f - h.scroll > h.height ? "top" : "top" == s && u.top - h.scroll - f < 0 ? "bottom" : "right" == s && u.right + c > h.width ? "left" : "left" == s && u.left - c < h.left ? "right" : s, i.removeClass(p).addClass(s)
            }
            var g = this.getCalculatedOffset(s, u, c, f);
            this.applyPlacement(g, s);
            var v = function() {
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", v).emulateTransitionEnd(150) : v()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var r = this.tip(), i = r[0].offsetWidth, o = r[0].offsetHeight, s = parseInt(r.css("margin-top"), 10), a = parseInt(r.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top = e.top + s, e.left = e.left + a, t.offset.setOffset(r[0], t.extend({
            using: function(t) {
                r.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), r.addClass("in");
        var l = r[0].offsetWidth, u = r[0].offsetHeight;
        "top" == n && u != o && (e.top = e.top + o - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var f = c.left ? 2 * c.left - i + l: 2 * c.top - o + u, p = c.left ? "left": "top", d = c.left ? "offsetWidth": "offsetHeight";
        r.offset(e), this.replaceArrow(f, r[0][d], p)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, n.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html": "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && r.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this, r = this.tip(), i = t.Event("hide.bs." + this.type);
        if (this.$element.removeAttr("aria-describedby"), this.$element.trigger(i), !i.isDefaultPrevented())
            return r.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0], r = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop: e.scrollTop(),
            width: r ? t(window).width(): e.outerWidth(),
            height: r ? t(window).height(): e.outerHeight()
        }, r ? {
            top: 0,
            left: 0
        } : e.offset())
    }, n.prototype.getCalculatedOffset = function(t, e, n, r) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - r,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - r / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - r / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return i;
        var o = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll, l = e.top + o - s.scroll + r;
            a < s.top ? i.top = s.top - a : l > s.top + s.height && (i.top = s.top + s.height - l);
        } else {
            var u = e.left - o, c = e.left + o + n;
            u < s.left ? i.left = s.left - u : c > s.width && (i.left = s.left + s.width - c)
        }
        return i
    }, n.prototype.getTitle = function() {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do 
            t+=~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function() {
        this.enabled=!0
    }, n.prototype.disable = function() {
        this.enabled=!1
    }, n.prototype.toggleEnabled = function() {
        this.enabled=!this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var r = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = r, this
    }
}(jQuery), + function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.popover"), o = "object" == typeof e && e;
            (i || "destroy" != e) && (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html": "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html": "append": "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var r = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = r, this
    }
}(jQuery), + function(t) {
    "use strict";
    function e(n, r) {
        var i = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(n).is("body") ? window : n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", i), this.refresh(), this.process()
    }
    function n(n) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.scrollspy"), o = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
        })
    }
    e.VERSION = "3.2.0", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = "offset", n = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var r = this;
        this.$body.find(this.selector).map(function() {
            var r = t(this), i = r.data("target") || r.attr("href"), o = /^#./.test(i) && t(i);
            return o && o.length && o.is(":visible") && [[o[e]().top + n, i]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            r.offsets.push(this[0]), r.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, o = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= r)
            return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e <= i[0])
            return s != (t = o[0]) && this.activate(t);
        for (t = i.length; t--;)
            s != o[t] && e >= i[t] && (!i[t + 1] || e <= i[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', r = t(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    };
    var r = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = r, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.2.0", n.prototype.show = function() {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), r = e.data("target");
        if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = n.find(".active:last a")[0], o = t.Event("show.bs.tab", {
                relatedTarget: i
            });
            if (e.trigger(o), !o.isDefaultPrevented()) {
                var s = t(r);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, n, r) {
        function i() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), r && r()
        }
        var o = n.find("> .active"), s = r && t.support.transition && o.hasClass("fade");
        s ? o.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i(), o.removeClass("in")
    };
    var r = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = r, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
        n.preventDefault(), e.call(t(this), "show")
    })
}(jQuery), + function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.affix"), o = "object" == typeof e && e;
            i || r.data("bs.affix", i = new n(this, o)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e, r) {
        this.options = t.extend({}, n.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = t(document).height(), r = this.$target.scrollTop(), i = this.$element.offset(), o = this.options.offset, s = o.top, a = o.bottom;
            "object" != typeof o && (a = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof a && (a = o.bottom(this.$element));
            var l=!(null != this.unpin && r + this.unpin <= i.top) && (null != a && i.top + this.$element.height() >= e - a ? "bottom" : null != s && r <= s && "top");
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""), c = t.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: e - this.$element.height() - a
                }))
            }
        }
    };
    var r = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = r, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this), r = n.data();
            r.offset = r.offset || {}, r.offsetBottom && (r.offset.bottom = r.offsetBottom), r.offsetTop && (r.offset.top = r.offsetTop), e.call(n, r)
        })
    })
}(jQuery);
var __slice = [].slice, __indexOf = [].indexOf || function(t) {
    for (var e = 0, n = this.length; e < n; e++)
        if (e in this && this[e] === t)
            return e;
    return - 1
};
!function(t, e) {
    "use strict";
    var n;
    return n = e(), "object" == typeof module && "object" == typeof module.exports ? module.exports = n : "function" == typeof define && define.amd ? define(function() {
        return n
    }) : t.Gta = n
}("object" == typeof window ? window : this, function() {
    "use strict";
    var t, e, n, r, i, o, s, a, l, u, c, f, p;
    return f = Array.prototype.slice, t = null, l = /^\s*\{(.*)\}\s*$/, c = function(t) {
        return t.parentNode.removeChild(t)
    }, n = function(t, e) {
        return t.onerror = function() {
            return window[e] = null, c(t)
        }, t.onload = function() {
            if (!t.getAttribute("data-site-id"))
                return c(t)
        }
    }, o = function(t, e) {
        var n, r;
        return r = document.createElement("script"), n = document.getElementsByTagName("script")[0], r.async = 1, r.src = t, e && (r.id = e), n.parentNode.insertBefore(r, n), r
    }, r = function() {
        var t, e, n, r, i, o, s;
        for (e = arguments[0], r = 2 <= arguments.length ? __slice.call(arguments, 1) : [], o = 0, s = r.length; o < s; o++) {
            t = r[o];
            for (n in t)
                i = t[n], e[n] = i
        }
        return e
    }, e = {
        google: function(t) {
            var e;
            if (t)
                return window.GoogleAnalyticsObject = "_ga", window._ga = function() {
                    return _ga.q.push(arguments)
                }, _ga.q = [], _ga.l = 1 * new Date, _ga("create", t, "auto"), _ga("require", "displayfeatures"), _ga("require", "linkid", "linkid.js"), _ga("send", "pageview"), e = o("//www.google-analytics.com/analytics.js"), n(e, "_ga"), {
                    name: "google",
                    pageview: function() {
                        var t, e;
                        if (window._ga)
                            return t = f.call(arguments), e = "object" == typeof t[0] ? t[0] : t.join("_"), window._ga("send", "pageview", e)
                        },
                        event: function(t) {
                            var e, n, r;
                            if (window._ga)
                                return n = t.page, e = t.action, r = t.type, window._ga("send", "event", n, e, r)
                            }
                        }
        },
        baidu: function(t) {
            var e;
            if (t)
                return window._hmt = [], e = o("//hm.baidu.com/hm.js?" + t), n(e, "_hmt"), {
                    name: "baidu",
                    pageview: function() {
                        var t, e, n, r;
                        if (window._hmt)
                            return t = f.call(arguments), "object" == typeof t[0] ? (e = t[0].page, e || (e = function() {
                                var e, i;
                                e = t[0], i = [];
                                for (n in e)
                                    r = e[n], i.push(r);
                                    return i
                                }().join("_"))) : e = t.join("_"), window._hmt.push(["_trackPageview", e])
                            },
                            event: function(t) {
                                var e, n, r;
                                if (window._hmt)
                                    return n = t.page, e = t.action, r = t.type, window._hmt.push(["_trackEvent", n, e, r])
                                }
                            }
        },
        tbpanel: function(t) {
            var e, i, s, a, l;
            if (t)
                return e = "tbpanel", s = window.tbpanel = [], s._i = [], s.init = function(t, n, r) {
                    var i, o, a, l, u, c;
                    for (a = s, null != r ? a = s[r] = [] : r = e, a.people || (a.people = []), a.toString = function(t) {
                        var n;
                        return n = e, r !== e && (n += "." + r), t || (n += " (stub)"), n
                    }, a.people.toString = function() {
                        return a.toString(1) + ".people (stub)"
                    }, c = function(t, e) {
                        var n;
                        return n = e.split("."), 2 === n.length && (t = t[n[0]], e = n[1]), t[e] = function() {
                            return t.push([e].concat(f.call(arguments)))
                        }
                    }, o = ["disable", "track", "track_pageview", "track_links", "track_forms", "register", "register_once", "alias", "unregister", "identify", "name_tag", "set_config", "people.set", "people.set_once", "people.increment", "people.append", "people.track_charge", "people.clear_charges", "people.delete_user"], l = 0, u = o.length; l < u; l++)
                        i = o[l], c(a, i);
                        return s._i.push([t, n, r])
                    }, s.__SV = 1.2, s.init(t), i = o("//dn-st.teambition.net/tbpanel/tbpanel.d812.js"), n(i, e), a = null, l = null, {
                        name: "tbpanel",
                        pageview: function() {},
                        setUser: function(t, e) {
                            var n, r, i, o, u;
                            if (l = t, a = e, i = navigator.userAgent.match(/(Teambition(?:-UWP)?)\/([\d\.]+)/i), i && (n = i[0], r = i[1], u = i[2], "Teambition" === r && (r = "Teambition_Desktop"), s.register({
                                $browser: r,
                                $browser_version: u
                            })), o = navigator.userAgent.match(/Windows NT [\d.]+|(?:Macintosh;|Linux|\b\w*BSD)[^;)]*?(?=\)|;)/i))
                                return s.register({
                                    $os_version: o[0]
                                })
                            },
                            event: function(t) {
                                var e, n;
                                return e = r({}, t), null == e.platform && (e.platform = "web"), null != l && (e.userKey = l), null != a && r(e, a), null != (n = window.tbpanel) ? n.track(e.action, e) : void 0
                            }
                        }
        },
        mixpanel: function(t) {
            var e, i, s, a, l;
            if (t)
                return e = "mixpanel", i = window.mixpanel = [], i._i = [], i.init = function(t, n, r) {
                    var o, s, a, l, u, c;
                    for (a = i, null != r ? a = i[r] = [] : r = e, a.people || (a.people = []), a.toString = function(t) {
                        var n;
                        return n = e, r !== e && (n += "." + r), t || (n += " (stub)"), n
                    }, a.people.toString = function() {
                        return a.toString(1) + ".people (stub)"
                    }, c = function(t, e) {
                        var n;
                        return n = e.split("."), 2 === n.length && (t = t[n[0]], e = n[1]), t[e] = function() {
                            return t.push([e].concat(f.call(arguments)))
                        }
                    }, s = ["disable", "track", "track_pageview", "track_links", "track_forms", "register", "register_once", "alias", "unregister", "identify", "name_tag", "set_config", "people.set", "people.set_once", "people.increment", "people.append", "people.track_charge", "people.clear_charges", "people.delete_user"], l = 0, u = s.length; l < u; l++)
                        o = s[l], c(a, o);
                        return i._i.push([t, n, r])
                    }, i.__SV = 1.2, i.init(t), s = o("//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"), n(s, e), a = null, l = null, {
                        name: "mixpanel",
                        pageview: function() {},
                        setUser: function(t, e) {
                            var n, r, o, s, u;
                            if (l = t, a = e, o = navigator.userAgent.match(/(Teambition(?:-UWP)?)\/([\d\.]+)/i), o && (n = o[0], r = o[1], u = o[2], "Teambition" === r && (r = "Teambition_Desktop"), i.register({
                                $browser: r,
                                $browser_version: u
                            })), s = navigator.userAgent.match(/Windows NT [\d.]+|(?:Macintosh;|Linux|\b\w*BSD)[^;)]*?(?=\)|;)/i))
                                return i.register({
                                    $os_version: s[0]
                                })
                            },
                            event: function(t) {
                                var e, n;
                                return e = r({}, t), null == e.platform && (e.platform = "web"), null != l && (e.userKey = l), null != a && r(e, a), null != (n = window.mixpanel) ? n.track(e.action, e) : void 0
                            }
                        }
        },
        customer: function(t) {
            var e;
            if (t)
                return e = function(e) {
                    var r, i, s, a, l, u, c, f;
                    for (l = window._cio = window._cio || [], l.invoked=!0, l.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "reset", "group", "ready", "alias", "page", "once", "off", "on", "load", "identify", "sidentify", "track"], l.factory = function(t) {
                        return function() {
                            return l.push([t].concat(Array.prototype.slice.call(arguments))), l
                        }
                    }, f = l.methods, u = 0, c = f.length; u < c; u++)
                        i = f[u], l[i] = l.factory(i);
                        return r = t.split(","), a = (null != e ? e.indexOf("@") : void 0) > 0 ? r[1] : r[0], s = o("//assets.customer.io/assets/track.js", "cio-tracker"), s.setAttribute("data-site-id", a), n(s, "_cio")
                    }, {
                        name: "customer",
                        setUser: function(t, n) {
                            var r;
                            return n.id = t, new Date(n.created_at) >= new Date("2016-01-01") && (n.id = n.email), n.created_at = Math.floor(new Date(n.created_at).valueOf() / 1e3), e(n.id), null != (r = window._cio) ? r.identify(n) : void 0
                        },
                        pageview: function(t) {},
                        event: function(e) {
                            var n, r;
                            if (t)
                                return n = e, null == n.platform && (n.platform = "web"), null != (r = window._cio) ? r.track(n.action, n) : void 0
                            }
                        }
        },
        fullstory: function(t) {
            var e, i, s, a, l;
            if (t)
                return l = window.FS = function(t, e) {
                    return l.q ? l.q.push(arguments) : l._api(t, e)
                }, l.q = [], i = window._fs_debug = window._fs_debug ||!1, s = window._fs_host = window._fs_host || "www.fullstory.com", a = window._fs_org = t, e = o("https://" + s + "/s/fs.js"), n(e), l.identify = function(t, e) {
                    if (l("user", {
                        uid: t
                    }), e)
                        return l("user", e)
                    }, l.setUserVars = function(t) {
                        return l("user", t)
                    }, l.identifyAccount = function(t, e) {
                        return null == e && (e = {}), e.acctId = t, l("account", e)
                    }, {
                        name: "fullstory",
                        setUser: function(t, e) {
                            var n, i, o;
                            n = r({}, e);
                            for (i in n)
                                o = n[i], /(^(displayName|email)$)|(.*_(str|int|real|date|bool)$)/.test(i) || delete n[i];
                                return n.displayName = t, n.email = "" + t + "@mail.teambition.com", l.identify(t, n)
                            }
                        }
        }
    }, p = function() {
        var t, e, n, r, i, o, a, l, u;
        try {
            for (a = /utm_(\w+)=([^&]*)&?/gi, l = {}; r = a.exec(window.location.search);)
                o = r[0], n = r[1], u = r[2], l[n] = u;
            t = "." + /\.?([\w-]+\.\w+)$/.exec(window.location.hostname)[1], i = new Date(Date.now() + 2592e6), o && (document.cookie = "utm=" + encodeURI(JSON.stringify(l)) + ";expires=" + i.toGMTString() + ";domain=" + t + ";path=/")
        } catch (c) {
            e = c, s.debug && console.error(e)
        }
        return this
    }, a = function() {
        var t, n, r, i, o, a, l, u, f;
        if (r = document.getElementById("gta-main"), a = s.providers = [], !r)
            return s;
        for (i in e)
            t = e[i], n = r.getAttribute("data-" + i), u = r.getAttribute("data-" + i + "-script"), f = r.getAttribute("data-" + i + "-track"), l = r.getAttribute("data-" + i + "-random-proportion"), l && Math.random() > l || n && (o = t(n, u, f)) && a.push(o);
        return s.delegateEvents(), c(r), p(), a
    }, u = [], i = function(t, e) {
        var n, r, i, o, s;
        r = {};
        for (n in e)
            i = e[n], i && (null != i.wlist && (o = t.name, __indexOf.call(i.wlist, o) < 0) || ((null != (s = i.alias) ? s[t.name] : void 0) ? r[i.alias[t.name]] = i.value : r[n] = "[object Object]" === Object.prototype.toString.call(i) && "value"in i ? i.value : i));
        return r
    }, s = {
        debug: !1,
        page: "",
        setCurrentPage: function(t) {
            return this.page = t, this
        },
        setUser: function(t, e) {
            var n, r, o, s, l;
            try {
                for (u = a(), o = 0, s = u.length; o < s; o++)
                    r = u[o], this.debug && console.log("formatUser", r.name, i(r, e)), null != (l = r.setUser) && l.call(r, t, i(r, e))
            } catch (c) {
                n = c, this.debug && console.error(n)
            }
            return this
        },
        pageview: function() {
            var t, e, n, r;
            try {
                for (n = 0, r = u.length; n < r; n++)
                    e = u[n], e.pageview.apply(e, arguments)
            } catch (i) {
                t = i
            }
            return this
        },
        event: function(t) {
            var e, n, r, i, o;
            try {
                if (n = "object" == typeof t&&!!t)
                    for (t.page || (t.page = this.page), t.method || (t.method = "click"), this.debug && console.log("gtaOptions: ", t), i = 0, o = u.length; i < o; i++)
                        r = u[i], "function" == typeof r.event && r.event(t)
            } catch (s) {
                e = s, this.debug && console.error(e)
            }
            return this
        },
        delegateEvents: function() {
            var t;
            return t = function(t) {
                return function(e) {
                    var n, r, i, o;
                    for (n = e.target, o = []; n;)
                        r = null != (i = n.dataset) ? i.gta : void 0, l.test(r) && t.event(t.parseGta(r)), o.push(n = n.parentElement);
                    return o
                }
            }(this), document.body.removeEventListener("click", t, !0), document.body.addEventListener("click", t, !0)
        },
        parseGta: function(t) {
            var e, n, r, i, o;
            if (t = l.exec(t)[1], t.length) {
                for (i = /[\s"']*([^:,"']+)[\s"']*:[\s"']*([^:,"']+)[\s"']*,?/g, e = {}; n = i.exec(t);)
                    r = n[1], o = n[2], e[r] = o;
                return e
            }
        }
    }
}), function(t, e) {
    "undefined" != typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && "object" == typeof define.amd ? define(e) : this[t] = e()
}("validator", function(t) {
    "use strict";
    function e(t) {
        var e = t.match(N);
        if (!e)
            return (new Date).getTimezoneOffset();
        var n = e[21];
        if (!n || "z" === n || "Z" === n)
            return 0;
        var r, i, o = e[22];
        return n.indexOf(":")!==-1 ? (r = parseInt(e[23]), i = parseInt(e[24])) : (r = 0, i = parseInt(e[23])), (60 * r + i) * ("-" === o ? 1 : - 1)
    }
    function n(t, e) {
        t = t || {};
        for (var n in e)
            "undefined" == typeof t[n] && (t[n] = e[n]);
        return t
    }
    function r(t) {
        var e = "(\\" + t.symbol.replace(/\./g, "\\.") + ")" + (t.require_symbol ? "" : "?"), n = "-?", r = "[1-9]\\d*", i = "[1-9]\\d{0,2}(\\" + t.thousands_separator + "\\d{3})*", o = ["0", r, i], s = "(" + o.join("|") + ")?", a = "(\\" + t.decimal_separator + "\\d{2})?", l = s + a;
        return t.allow_negatives&&!t.parens_for_negatives && (t.negative_sign_after_digits ? l += n : t.negative_sign_before_digits && (l = n + l)), t.allow_negative_sign_placeholder ? l = "( (?!\\-))?" + l : t.allow_space_after_symbol ? l = " ?" + l : t.allow_space_after_digits && (l += "( (?!$))?"), t.symbol_after_digits ? l += e : l = e + l, t.allow_negatives && (t.parens_for_negatives ? l = "(\\(" + l + "\\)|" + l + ")" : t.negative_sign_before_digits || t.negative_sign_after_digits || (l = n + l)), new RegExp("^(?!-? )(?=.*\\d)" + l + "$")
    }
    t = {
        version: "4.2.0"
    };
    var i = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, o = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, s = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, a = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, l = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i, u = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, c = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/, f = /^(?:[0-9]{9}X|[0-9]{10})$/, p = /^(?:[0-9]{13})$/, d = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/, h = /^[0-9A-F]{1,4}$/i, g = {
        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    }, v = /^[A-Z]+$/i, m = /^[0-9A-Z]+$/i, y = /^[-+]?[0-9]+$/, b = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, w = /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/, x = /^[0-9A-F]+$/i, T = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/, C = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i, E = /^[\x00-\x7F]+$/, k = /[^\x00-\x7F]/, D = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/, $ = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/, A = /[\uD800-\uDBFF][\uDC00-\uDFFF]/, S = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i, _ = {
        "zh-CN": /^(\+?0?86\-?)?1[345789]\d{9}$/,
        "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
        "en-ZA": /^(\+?27|0)\d{9}$/,
        "en-AU": /^(\+?61|0)4\d{8}$/,
        "en-HK": /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
        "fr-FR": /^(\+?33|0)[67]\d{8}$/,
        "pt-PT": /^(\+351)?9[1236]\d{7}$/,
        "el-GR": /^(\+30)?((2\d{9})|(69\d{8}))$/,
        "en-GB": /^(\+?44|0)7\d{9}$/,
        "en-US": /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
        "en-ZM": /^(\+26)?09[567]\d{7}$/,
        "ru-RU": /^(\+?7|8)?9\d{9}$/,
        "nb-NO": /^(\+?47)?[49]\d{7}$/,
        "nn-NO": /^(\+?47)?[49]\d{7}$/
    }, N = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    t.extend = function(e, n) {
        t[e] = function() {
            var e = Array.prototype.slice.call(arguments);
            return e[0] = t.toString(e[0]), n.apply(t, e)
        }
    }, t.init = function() {
        for (var e in t)
            "function" == typeof t[e] && "toString" !== e && "toDate" !== e && "extend" !== e && "init" !== e && t.extend(e, t[e])
    }, t.toString = function(t) {
        return "object" == typeof t && null !== t && t.toString ? t = t.toString() : (null === t || "undefined" == typeof t || isNaN(t)&&!t.length) && (t = ""), "" + t
    }, t.toDate = function(t) {
        return "[object Date]" === Object.prototype.toString.call(t) ? t : (t = Date.parse(t), isNaN(t) ? null : new Date(t))
    }, t.toFloat = function(t) {
        return parseFloat(t)
    }, t.toInt = function(t, e) {
        return parseInt(t, e || 10)
    }, t.toBoolean = function(t, e) {
        return e ? "1" === t || "true" === t : "0" !== t && "false" !== t && "" !== t
    }, t.equals = function(e, n) {
        return e === t.toString(n)
    }, t.contains = function(e, n) {
        return e.indexOf(t.toString(n)) >= 0
    }, t.matches = function(t, e, n) {
        return "[object RegExp]" !== Object.prototype.toString.call(e) && (e = new RegExp(e, n)), e.test(t)
    };
    var F = {
        allow_display_name: !1,
        allow_utf8_local_part: !0,
        require_tld: !0
    };
    t.isEmail = function(e, r) {
        if (r = n(r, F), r.allow_display_name) {
            var u = e.match(l);
            u && (e = u[1])
        }
        var c = e.split("@"), f = c.pop(), p = c.join("@"), d = f.toLowerCase();
        if ("gmail.com" !== d && "googlemail.com" !== d || (p = p.replace(/\./g, "").toLowerCase()), !t.isByteLength(p, 0, 64) ||!t.isByteLength(f, 0, 256))
            return !1;
        if (!t.isFQDN(f, {
            require_tld: r.require_tld
        }))
            return !1;
        if ('"' === p[0])
            return p = p.slice(1, p.length - 1), r.allow_utf8_local_part ? a.test(p) : o.test(p);
        for (var h = r.allow_utf8_local_part ? s : i, g = p.split("."), v = 0; v < g.length; v++)
            if (!h.test(g[v]))
                return !1;
        return !0
    };
    var j = {
        protocols: ["http", "https", "ftp"],
        require_tld: !0,
        require_protocol: !1,
        require_valid_protocol: !0,
        allow_underscores: !1,
        allow_trailing_dot: !1,
        allow_protocol_relative_urls: !1
    };
    t.isURL = function(e, r) {
        if (!e || e.length >= 2083 || /\s/.test(e))
            return !1;
        if (0 === e.indexOf("mailto:"))
            return !1;
        r = n(r, j);
        var i, o, s, a, l, u, c;
        if (c = e.split("://"), c.length > 1) {
            if (i = c.shift(), r.require_valid_protocol && r.protocols.indexOf(i)===-1)
                return !1
        } else {
            if (r.require_protocol)
                return !1;
            r.allow_protocol_relative_urls && "//" === e.substr(0, 2) && (c[0] = e.substr(2))
        }
        return e = c.join("://"), c = e.split("#"), e = c.shift(), c = e.split("?"), e = c.shift(), c = e.split("/"), e = c.shift(), c = e.split("@"), !(c.length > 1 && (o = c.shift(), o.indexOf(":") >= 0 && o.split(":").length > 2)) && (a = c.join("@"), c = a.split(":"), s = c.shift(), !(c.length && (u = c.join(":"), l = parseInt(u, 10), !/^[0-9]+$/.test(u) || l <= 0 || l > 65535)) && (!(!t.isIP(s)&&!t.isFQDN(s, r) && "localhost" !== s) && ((!r.host_whitelist || r.host_whitelist.indexOf(s)!==-1) && (!r.host_blacklist || r.host_blacklist.indexOf(s)===-1))))
    }, t.isIP = function(e, n) {
        if (n = t.toString(n), !n)
            return t.isIP(e, 4) || t.isIP(e, 6);
        if ("4" === n) {
            if (!d.test(e))
                return !1;
            var r = e.split(".").sort(function(t, e) {
                return t - e
            });
            return r[3] <= 255
        }
        if ("6" === n) {
            var i = e.split(":"), o=!1, s = t.isIP(i[i.length - 1], 4), a = s ? 7 : 8;
            if (i.length > a)
                return !1;
            if ("::" === e)
                return !0;
            "::" === e.substr(0, 2) ? (i.shift(), i.shift(), o=!0) : "::" === e.substr(e.length - 2) && (i.pop(), i.pop(), o=!0);
            for (var l = 0; l < i.length; ++l)
                if ("" === i[l] && l > 0 && l < i.length - 1) {
                    if (o)
                        return !1;
                        o=!0
                } else if (s && l == i.length - 1);
                else if (!h.test(i[l]))
                    return !1;
            return o ? i.length >= 1 : i.length === a
        }
        return !1
    };
    var L = {
        require_tld: !0,
        allow_underscores: !1,
        allow_trailing_dot: !1
    };
    t.isFQDN = function(t, e) {
        e = n(e, L), e.allow_trailing_dot && "." === t[t.length - 1] && (t = t.substring(0, t.length - 1));
        var r = t.split(".");
        if (e.require_tld) {
            var i = r.pop();
            if (!r.length ||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(i))
                return !1
        }
        for (var o, s = 0; s < r.length; s++) {
            if (o = r[s], e.allow_underscores) {
                if (o.indexOf("__") >= 0)
                    return !1;
                o = o.replace(/_/g, "")
            }
            if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(o))
                return !1;
            if (/[\uff01-\uff5e]/.test(o))
                return !1;
            if ("-" === o[0] || "-" === o[o.length - 1] || o.indexOf("---") >= 0)
                return !1
        }
        return !0
    }, t.isBoolean = function(t) {
        return ["true", "false", "1", "0"].indexOf(t) >= 0
    }, t.isAlpha = function(t) {
        return v.test(t)
    }, t.isAlphanumeric = function(t) {
        return m.test(t)
    }, t.isNumeric = function(t) {
        return y.test(t)
    }, t.isDecimal = function(t) {
        return "" !== t && T.test(t)
    }, t.isHexadecimal = function(t) {
        return x.test(t)
    }, t.isHexColor = function(t) {
        return C.test(t)
    }, t.isLowercase = function(t) {
        return t === t.toLowerCase()
    }, t.isUppercase = function(t) {
        return t === t.toUpperCase()
    }, t.isInt = function(t, e) {
        return e = e || {}, b.test(t) && (!e.hasOwnProperty("min") || t >= e.min) && (!e.hasOwnProperty("max") || t <= e.max)
    }, t.isFloat = function(t, e) {
        return e = e || {}, "" !== t && "." !== t && (w.test(t) && (!e.hasOwnProperty("min") || t >= e.min) && (!e.hasOwnProperty("max") || t <= e.max))
    }, t.isDivisibleBy = function(e, n) {
        return t.toFloat(e)%t.toInt(n) === 0
    }, t.isNull = function(t) {
        return 0 === t.length
    }, t.isLength = function(t, e, n) {
        var r = t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [], i = t.length - r.length;
        return i >= e && ("undefined" == typeof n || i <= n)
    }, t.isByteLength = function(t, e, n) {
        var r = encodeURI(t).split(/%..|./).length - 1;
        return r >= e && ("undefined" == typeof n || r <= n)
    }, t.isUUID = function(t, e) {
        var n = g[e ? e: "all"];
        return n && n.test(t)
    }, t.isDate = function(t) {
        var n = new Date(new Date(t).toUTCString()), r = String(n.getUTCDate()), i = n.getTimezoneOffset() - e(t);
        n = new Date(n.getTime() + 6e4 * i);
        var o, s, a, l = String(n.getDate());
        return !isNaN(Date.parse(n)) && (!(s = t.match(/(^|[^:\d])[23]\d([^:\d]|$)/g)) || (o = s.map(function(t) {
            return t.match(/\d+/g)[0]
        }).join("/"), a = String(n.getFullYear()).slice( - 2), o === l || o === r || o === a || (o === l + "/" + a || o === a + "/" + l || (o === r + "/" + a || o === a + "/" + r))))
    }, t.isAfter = function(e, n) {
        var r = t.toDate(n || new Date), i = t.toDate(e);
        return !!(i && r && i > r)
    }, t.isBefore = function(e, n) {
        var r = t.toDate(n || new Date), i = t.toDate(e);
        return !!(i && r && i < r)
    }, t.isIn = function(e, n) {
        var r;
        if ("[object Array]" === Object.prototype.toString.call(n)) {
            var i = [];
            for (r in n)
                i[r] = t.toString(n[r]);
            return i.indexOf(e) >= 0
        }
        return "object" == typeof n ? n.hasOwnProperty(e) : !(!n || "function" != typeof n.indexOf) && n.indexOf(e) >= 0
    }, t.isCreditCard = function(t) {
        var e = t.replace(/[^0-9]+/g, "");
        if (!u.test(e))
            return !1;
        for (var n, r, i, o = 0, s = e.length - 1; s >= 0; s--)
            n = e.substring(s, s + 1), r = parseInt(n, 10), i ? (r*=2, o += r >= 10 ? r%10 + 1 : r) : o += r, i=!i;
        return !(o%10 !== 0 ||!e)
    }, t.isISIN = function(t) {
        if (!c.test(t))
            return !1;
        for (var e, n, r = t.replace(/[A-Z]/g, function(t) {
            return parseInt(t, 36)
        }), i = 0, o=!0, s = r.length - 2; s >= 0; s--)
            e = r.substring(s, s + 1), n = parseInt(e, 10), o ? (n*=2, i += n >= 10 ? n + 1 : n) : i += n, o=!o;
        return parseInt(t.substr(t.length - 1), 10) === (1e4 - i)%10
    }, t.isISBN = function(e, n) {
        if (n = t.toString(n), !n)
            return t.isISBN(e, 10) || t.isISBN(e, 13);
        var r, i = e.replace(/[\s-]+/g, ""), o = 0;
        if ("10" === n) {
            if (!f.test(i))
                return !1;
            for (r = 0; r < 9; r++)
                o += (r + 1) * i.charAt(r);
            if (o += "X" === i.charAt(9) ? 100 : 10 * i.charAt(9), o%11 === 0)
                return !!i
        } else if ("13" === n) {
            if (!p.test(i))
                return !1;
            var s = [1, 3];
            for (r = 0; r < 12; r++)
                o += s[r%2] * i.charAt(r);
            if (i.charAt(12) - (10 - o%10)%10 === 0)
                return !!i
        }
        return !1
    }, t.isMobilePhone = function(t, e) {
        return e in _ && _[e].test(t)
    };
    var O = {
        symbol: "$",
        require_symbol: !1,
        allow_space_after_symbol: !1,
        symbol_after_digits: !1,
        allow_negatives: !0,
        parens_for_negatives: !1,
        negative_sign_before_digits: !1,
        negative_sign_after_digits: !1,
        allow_negative_sign_placeholder: !1,
        thousands_separator: ",",
        decimal_separator: ".",
        allow_space_after_digits: !1
    };
    t.isCurrency = function(t, e) {
        return e = n(e, O), r(e).test(t)
    }, t.isJSON = function(t) {
        try {
            var e = JSON.parse(t);
            return !!e && "object" == typeof e
        } catch (n) {}
        return !1
    }, t.isMultibyte = function(t) {
        return k.test(t)
    }, t.isAscii = function(t) {
        return E.test(t)
    }, t.isFullWidth = function(t) {
        return D.test(t)
    }, t.isHalfWidth = function(t) {
        return $.test(t)
    }, t.isVariableWidth = function(t) {
        return D.test(t) && $.test(t)
    }, t.isSurrogatePair = function(t) {
        return A.test(t)
    }, t.isBase64 = function(t) {
        return S.test(t)
    }, t.isMongoId = function(e) {
        return t.isHexadecimal(e) && 24 === e.length
    }, t.isISO8601 = function(t) {
        return N.test(t)
    }, t.ltrim = function(t, e) {
        var n = e ? new RegExp("^[" + e + "]+", "g"): /^\s+/g;
        return t.replace(n, "")
    }, t.rtrim = function(t, e) {
        var n = e ? new RegExp("[" + e + "]+$", "g"): /\s+$/g;
        return t.replace(n, "")
    }, t.trim = function(t, e) {
        var n = e ? new RegExp("^[" + e + "]+|[" + e + "]+$", "g"): /^\s+|\s+$/g;
        return t.replace(n, "")
    }, t.escape = function(t) {
        return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\`/g, "&#96;")
    }, t.stripLow = function(e, n) {
        var r = n ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F": "\\x00-\\x1F\\x7F";
        return t.blacklist(e, r)
    }, t.whitelist = function(t, e) {
        return t.replace(new RegExp("[^" + e + "]+", "g"), "")
    }, t.blacklist = function(t, e) {
        return t.replace(new RegExp("[" + e + "]+", "g"), "")
    };
    var P = {
        lowercase: !0
    };
    return t.normalizeEmail = function(e, r) {
        if (r = n(r, P), !t.isEmail(e))
            return !1;
        var i = e.split("@", 2);
        if (i[1] = i[1].toLowerCase(), "gmail.com" === i[1] || "googlemail.com" === i[1]) {
            if (i[0] = i[0].toLowerCase().replace(/\./g, ""), "+" === i[0][0])
                return !1;
            i[0] = i[0].split("+")[0], i[1] = "gmail.com"
        } else 
            r.lowercase && (i[0] = i[0].toLowerCase());
        return i.join("@")
    }, t.init(), t
});

