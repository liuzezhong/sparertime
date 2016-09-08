(function() {
    $(function() {
        var n, t, e, r, i, o, a, s;
        return n = $("body"), r = $(".form-unit"), i = r.find("input"), o = $(".production-list"), e = $(".btn"), t = $('.passwordClear input[name="password"]'), t.on("focus", function(n) {
            return t.attr("type", "password")
        }), a = function() {
            return n.height() < $(window).height() ? (o.attr("style", "position:fixed;bottom:0;"), r.attr("style", "margin-bottom:100px;")) : (o.removeAttr("style"), r.removeAttr("style"))
        }, window.onresize = a, setTimeout(a), i.on("focus", function() {
            return n.addClass("is-typing")
        }), i.on("blur", function() {
            return n.removeClass("is-typing")
        }), e.on("click", function(n) {
            var t;
            return t = $(this).find("a"), t.length && t.attr("href") && n.target !== t[0] ? t[0].click() : void n.stopPropagation()
        }), $(".authorize-account").attr("href", "/login?next_url=" + encodeURIComponent(location.href) + "&enforceLogin=1"), s = "rand-" + Math.random().toString(36).slice(2), Gta.setUser(s, {
            displayName: s
        })
    })
}).call(this), function() {
    var n, t, e, r, i, o;
    n = function(n) {
        this.locals = n || {}, this.templates = t({}, o, !0)
    }, t = function(n, t, r) {
        var i;
        n = n || {};
        for (i in t)
            !e.call(t, i) ||!r && e.call(n, i) || (n[i] = t[i]);
        return n
    }, e = Object.prototype.hasOwnProperty, o = {}, r = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#96;"
    }, i = n.prototype, i.copy = t, i.render = function(n, t) {
        var e;
        if (e = this.get(n), "function" != typeof e)
            throw new Error(n + " is not found");
        return e.call(this, this.copy(t, this.locals), n)
    }, i.get = function(n) {
        return e.call(this.templates, n) ? this.templates[n] : null
    }, i.escape = function(n) {
        return this.stringify(n).replace(/[&<>"'`]/g, function(n) {
            return r[n]
        })
    }, i.stringify = function(n) {
        return null === n ? "" : String(n)
    }, o.captcha = function(n, t) {
        var e, r, i;
        for (r = this, e = "", e += '<div class="visual-captcha">\n  <div class="captcha-title">\n    <span>', e += r.escape(n.title), e += '</span>\n    <div class="captcha-refresh" title="', e += r.stringify(n.__("captchaRefresh")), e += '">\n      <span class="icon icon-refresh"></span>\n    </div>\n  </div>\n  <div class="group-imgs">\n    ', i = 0; i < n.num;)
            e += '\n      <div class="img-wrap">\n        <img class="captcha-image" src=', e += r.escape(n.imagePrefix + i), e += ' data-value="', e += r.escape(n.values[i]), e += '">\n      </div>\n    ', i++;
        return e += "\n  </div>\n  ", n.pass && (e += '\n    <div class="captcha-tips captcha-pass">\n      <span class="icon icon-circle-check"></span>\n      ', e += r.stringify(n.__("captchaValided")), e += "\n    </div>\n  "), e += "\n</div>\n", e.trim()
    }, window.Mejs = n
}.call(this), function() {
    var n = [].slice;
    $(function() {
        var t;
        if (t = {
            init: function() {
                return this.bindForm()
            },
            isCountryCode: function(n) {
                return /^[0-9]{1,7}$/.test(n)
            },
            isPhone: function(n) {
                return /^[0-9]{5,15}$/.test(n)
            },
            i18n: function() {
                var t, e, r;
                if (e = arguments[0], t = 2 <= arguments.length ? n.call(arguments, 1) : [], r = $("#locale").attr(e))
                    return r.replace(/{(\d+)}/g, function(n, e) {
                        return t[e] ? t[e] : n
                    })
            },
            setSignUpPhone: function() {
                var n, t, e, r, i, o, a, s, c, u, l, h, d, f, p;
                for (p = this, s = [{
                    abbr: "zh",
                    name: this.i18n("china"),
                    areaCode: "86"
                }, {
                    abbr: "hk",
                    name: this.i18n("hongkong"),
                    areaCode: "852"
                }, {
                    abbr: "tw",
                    name: this.i18n("taiwan"),
                    areaCode: "886"
                }, {
                    abbr: "jp",
                    name: this.i18n("japan"),
                    areaCode: "81"
                }, {
                    abbr: "us",
                    name: this.i18n("unitedstates"),
                    areaCode: "1"
                }, {
                    abbr: "other",
                    name: this.i18n("other"),
                    areaCode: ""
                }
                ], u = function(n) {
                    return '<li>\n  <a class="setcountry ' + n.abbr + '" data-abbr="' + n.abbr + '" data-areaCode="' + n.areaCode + '">\n    <span class="country"></span>' + n.name + "\n  </a>\n</li>"
                }, n = $(".area-code"), r = $(".current-country"), e = r.next("ul"), l = 0, h = s.length; l < h; l++)
                    c = s[l], o = $(u(c)), o.appendTo(e);
                return t = $("li > .setcountry"), a = $(".phone-country"), i = $(':input[name="countryCode"]'), f = function(n) {
                    var t, e, o, a, s, c, u;
                    return t = $(n.currentTarget), s = t.data("areacode"), e = t.data("abbr"), c = r.attr("class").split(" "), u = c[c.length - 1], i.val(s), r.removeClass(u).addClass(e), o = i.val(), a = o.length ? 8 * o.length + 9 : p.getAreaCodeWidth(), i.css("width", a), this
                }, d = function(n) {
                    var t, e, o, a, c, u, l, h, d;
                    for (t = $(n.currentTarget), e = "other", o = t.val(), c = r.attr("class").split(" "), u = c[c.length - 1], a = o.length ? 8 * o.length + 14 : p.getAreaCodeWidth(), i.css("width", a), h = 0, d = s.length; h < d; h++)
                        l = s[h], l.areaCode === o && (e = l.abbr);
                    return r.removeClass(u).addClass(e), this
                }, t.on("click", function(n) {
                    return f(n)
                }), n.on("input", function(n) {
                    return d(n)
                })
            },
            getAreaCodeWidth: function() {
                return $("body").hasClass("en") ? 45 : $("body").hasClass("ko") ? 34 : 56
            },
            sendSMS: function(n) {
                var t, e, r, i, o;
                return t = $("body.bind"), e = $(".send-sms", t), r = $(".timer", t), i = this.i18n("sendsmsagain", 60), o = $.post("/sendcode", {
                    phone: n,
                    sendtype: "bind"
                }), o.done(function(n) {
                    return function() {
                        var o, a;
                        return e.hide(), r.show().text(i), $(".bind-validation", t).hide(), o = 60, a = setInterval(function() {
                            if (r.text(n.i18n("sendsmsagain", --o)), 0 === o)
                                return clearInterval(a), r.text(i).hide(), e.show()
                        }, 1e3)
                    }
                }(this)), o.fail(function(n) {
                    return function(t) {
                        var e, r;
                        if (e = null != (r = t.responseJSON) ? r.error : void 0)
                            return n.$bv.show().html("<p style='text-align:center;'>" + e + "</p>"), n.hideError()
                    }
                }(this))
            },
            bindForm: function() {
                var n, t, e;
                return this.setSignUpPhone(), n = $("body.bind"), this.$bv = $(".bind-validation", n), t = $('input[name="countryCode"]', n), e = $('input[name="phone"]', n), t.on("change keyup", function(n) {
                    return function(e) {
                        if (n.isCountryCode(t.val()))
                            return n.hideError()
                    }
                }(this)), e.on("change keyup", function(n) {
                    return function(t) {
                        if (n.isPhone(e.val()))
                            return n.hideError()
                    }
                }(this)), $(".send-sms", n).on("click", function(n) {
                    return function(r) {
                        var i, o;
                        return r.preventDefault(), o = e.val(), i = t.val(), "" === o ? (e.focus(), !1) : n.isCountryCode(i) ? n.isPhone(o) ? n.sendSMS("+" + i + "-" + o) : (n.$bv.show().html("<p style='text-align:center;'>" + n.i18n("invalidmobile") + "</p>"), e.focus(), !1) : (n.$bv.show().html("<p style='text-align:center;'>" + n.i18n("invalidcountrycode") + "</p>"), t.focus(), !1)
                    }
                }(this))
            },
            hideError: function() {
                return $(".error-block").empty().hide()
            }
        }, $("body.bind").length)
            return t.init()
    })
}.call(this), function() {
    var n = [].slice;
    $(function() {
        var t;
        if (t = {
            init: function() {
                return this.onFormSubmit(), this.initGTA()
            },
            isPhone: function(n) {
                return /^[0-9]{5,15}$/.test(n)
            },
            isEmail: function(n) {
                return validator.isEmail(n)
            },
            i18n: function() {
                var t, e, r;
                if (e = arguments[0], t = 2 <= arguments.length ? n.call(arguments, 1) : [], r = $("#locale").attr(e))
                    return r.replace(/{(\d+)}/g, function(n, e) {
                        return t[e] ? t[e] : n
                    })
            },
            initGTA: function() {
                return Gta.setCurrentPage("Sign In Page")
            },
            onFormSubmit: function() {
                var n, t, e, r, i;
                return r = $(".auth-form")[0], e = $(".validation"), n = $('[name="email"]', r), t = $(".error-block"), i = this, n.on("input", function(n) {
                    return function(t) {
                        var e;
                        if (e = $(t.currentTarget).val(), e && (n.isPhone(e) || n.isEmail(e)))
                            return $(".validation").slideUp(218, function() {
                                return $(this).empty()
                            })
                    }
                }(this)), $(r).on("submit", function(n) {
                    return function(o) {
                        var a, s;
                        return o.preventDefault(), a = null != (s = r.elements.email) ? s.value.replace(/\s+/g, "") : void 0, !a || n.isPhone(a) || n.isEmail(a) ? n.isPhone(a) ? n.checkPhone(a).done(function(n) {
                            return r.elements.phone.value = a, r.submit()
                        }).fail(function(n) {
                            var r, o, s;
                            if (404 === n.status)
                                return t.empty().hide(), r = "<a id='bind-phone' href='/login-mobile?phone=" + a + "'>" + i.i18n("connectit") + "</a>", e.show().html("<p>" + i.i18n("unregisteredmobile", r) + "</p>"), !1;
                            if (o = null != (s = n.responseJSON) ? s.error : void 0)
                                return t.length ? t.text(o) : $("<span class='error-block'>" + o + "</span>").insertBefore($(".auth-form"))
                        }) : r.submit() : (t.remove(), $(".validation").show().html("<p style='text-align:center;'>" + n.i18n("invalidemailormobile") + "</p>"), !1)
                    }
                }(this))
            },
            checkPhone: function(n) {
                var t;
                return t = $.get("/login", {
                    phone: n
                })
            }
        }, $("body.login").length)
            return t.init()
    })
}.call(this), function() {
    $(function() {
        var n, t;
        return t = $("body.notify"), n = t.find(".close-page"), n.on("click", function(n) {
            return n.preventDefault(), window.location = "/"
        })
    })
}.call(this), function() {
    var n = [].slice;
    $(function() {
        var t;
        return t = {
            init: function() {
                return this.initSignupHeader(), this.initPhoneVerify(), this.initCaptchaComponent(), this.setSignUpPhone(), this.onEmailFormSubmit(), this.onCreateOrBindFormSubmit(), this.initGTA()
            },
            isCountryCode: function(n) {
                return /^[0-9]{1,7}$/.test(n)
            },
            isPhone: function(n) {
                return /^[0-9]{5,15}$/.test(n)
            },
            i18n: function() {
                var t, e, r;
                if (e = arguments[0], t = 2 <= arguments.length ? n.call(arguments, 1) : [], r = $("#locale").attr(e)) {
                    for (; /\%s/.test(r) && t.length;)
                        r = r.replace("%s", t.shift());
                    return r
                }
            },
            serializeObject: function(n) {
                var t;
                return t = {}, n.replace(/^\?/g, "").split("&").forEach(function(n) {
                    return t[n.split("=")[0]] = n.split("=")[1]
                }), t
            },
            initCaptchaComponent: function() {
                var n, t, e, r, i;
                return n = new Mejs({
                    __: this.i18n.bind(this.i18n)
                }), t = $("html").attr("lang"), this.$verifyImageWrap = $(".verify-image-wrap"), this.captcha = {
                    host: this.$verifyImageWrap.data("host"),
                    num: 5,
                    pass: !1
                }, e = function(e) {
                    return function() {
                        var r, i, o, a, s, c, u, l;
                        return s = e.captcha, r = s.host, i = s.num, a = s.port, u = s.uid, l = s.values, c = s.title, o = s.pass, e.$verifyImageWrap.html(n.render("captcha", {
                            imagePrefix: r + "/image?uid=" + u + "&lang=" + t + "&index=",
                            num: i,
                            values: l,
                            title: e.i18n("captchaTitle", c),
                            pass: o
                        }))
                    }
                }(this), i = function(n) {
                    return function(i) {
                        var o, a, s, c, u, l, h, d;
                        return d = $(i.target).data("value"), u = n.captcha, a = u.host, s = u.num, c = u.port, h = u.uid, o = a + "/valid?num=" + s + "&uid=" + h + "&value=" + d + "&lang=" + t, l = $.get(o), l.done(function(t) {
                            return (null != t ? t.valid : void 0) ? (n.captcha.pass=!0, n.hideError(), e()) : (n.showError(n.i18n("captchaInvalided")), r())
                        }), l.fail(function() {
                            return n.showError(n.i18n("captchaValidedFreq")), n.captcha.off=!0, n.$verifyImageWrap.remove()
                        })
                    }
                }(this), r = function(n) {
                    return function() {
                        var r, i, o, a, s, c, u;
                        return s = n.captcha, i = s.host, o = s.num, a = s.port, u = s.uid, r = i + "/setup?num=" + o + "&lang=" + t, c = $.get(r), c.done(function(t) {
                            if (null != t ? t.values : void 0)
                                return n.captcha.values = t.values, n.captcha.title = t.imageName, n.captcha.uid = t.uid, e()
                        }), c.fail(function() {
                            return n.showError(n.i18n("captchaSetupErr")), n.captcha.off=!0, n.$verifyImageWrap.remove()
                        })
                    }
                }(this), this.captcha.host ? (this.$verifyImageWrap.on("click", ".captcha-image", function(n) {
                    return function(n) {
                        return i(n)
                    }
                }(this)).on("click", ".captcha-refresh", function(n) {
                    return function(n) {
                        return r(n)
                    }
                }(this)), r()) : this.$verifyImageWrap.remove()
            },
            initGTA: function() {
                return Gta.setCurrentPage("Sign Up Page"), $(".btn.by-phone").on("click", function() {
                    return Gta.event({
                        action: "switch sign up",
                        type: "sms"
                    })
                }), $(".btn.by-email").on("click", function() {
                    return Gta.event({
                        action: "switch sign up",
                        type: "email"
                    })
                }), $(".verify-image-wrap").on("click", function() {
                    return Gta.event({
                        action: "click graphic verification",
                        type: "signup",
                        control: "graphic",
                        segment: "sms"
                    })
                }), $(".btn.send-sms").on("click", function() {
                    return Gta.event({
                        action: "send verification code",
                        type: "signup",
                        control: "send",
                        segment: "sms"
                    })
                }), $(".phone-form .timer.resend").on("click", function() {
                    return Gta.event({
                        action: "send verification code",
                        type: "signup",
                        control: "resend",
                        segment: "sms"
                    })
                }), $(".btn.verification").on("click", function() {
                    return Gta.event({
                        action: "verify cell number",
                        type: "signup",
                        segment: "sms"
                    })
                }), $(".auth-form.create-bind-form .btn.submit").on("click", function() {
                    return $(".privacy-field:visible").length ? Gta.event({
                        action: "sign up",
                        type: "sms",
                        control: "sign up button",
                        segment: "sms"
                    }) : Gta.event({
                        action: "bind account",
                        type: "sms",
                        control: "connect button",
                        segment: "sms"
                    })
                })
            },
            setSignUpPhone: function() {
                var n, t, e, r, i, o, a, s, c, u, l, h, d, f, p;
                for (p = this, s = [{
                    abbr: "zh",
                    name: this.i18n("china"),
                    areaCode: "86"
                }, {
                    abbr: "hk",
                    name: this.i18n("hongkong"),
                    areaCode: "852"
                }, {
                    abbr: "tw",
                    name: this.i18n("taiwan"),
                    areaCode: "886"
                }, {
                    abbr: "jp",
                    name: this.i18n("japan"),
                    areaCode: "81"
                }, {
                    abbr: "us",
                    name: this.i18n("unitedstates"),
                    areaCode: "1"
                }, {
                    abbr: "other",
                    name: this.i18n("other"),
                    areaCode: ""
                }
                ], u = function(n) {
                    return '<li>\n  <a class="setcountry ' + n.abbr + '" data-abbr="' + n.abbr + '" data-areaCode="' + n.areaCode + '">\n    <span class="country"></span>' + n.name + "\n  </a>\n</li>"
                }, n = $(".area-code"), r = $(".current-country"), e = r.next("ul"), l = 0, h = s.length; l < h; l++)
                    c = s[l], o = $(u(c)), o.appendTo(e);
                return t = $("li > .setcountry"), a = $(".phone-country"), i = $(':input[name="countryCode"]'), f = function(n) {
                    var t, e, o, a, s, c, u;
                    return t = $(n.currentTarget), s = t.data("areacode"), e = t.data("abbr"), c = r.attr("class").split(" "), u = c[c.length - 1], i.val(s), r.removeClass(u).addClass(e), o = i.val(), a = o.length ? 8 * o.length + 9 : p.getAreaCodeWidth(), i.css("width", a), this
                }, d = function(n) {
                    var t, e, o, a, c, u, l, h, d;
                    for (t = $(n.currentTarget), e = "other", o = t.val(), c = r.attr("class").split(" "), u = c[c.length - 1], a = o.length ? 8 * o.length + 14 : p.getAreaCodeWidth(), i.css("width", a), h = 0, d = s.length; h < d; h++)
                        l = s[h], l.areaCode === o && (e = l.abbr);
                    return r.removeClass(u).addClass(e), this
                }, t.on("click", function(n) {
                    return f(n)
                }), n.on("input", function(n) {
                    return d(n)
                })
            },
            getAreaCodeWidth: function() {
                return $("body").hasClass("en") ? 45 : $("body").hasClass("ko") ? 34 : 56
            },
            initSignupHeader: function() {
                var n, e, r, i, o;
                return n = $(".by-email"), e = $(".by-phone"), o = this.$phoneForm = $(".phone-form"), i = this.$emailForm = $(".email-form"), r = this.$createOrBindForm = $(".create-bind-form"), n.on("click", function(n) {
                    var a;
                    return a = $(this), t.resetForm(), a.addClass("current"), e.removeClass("current"), i.show(), o.hide(), $("input[name=email]", i).focus(), r.hide(), $(".privacy-field").show()
                }), e.on("click", function(e) {
                    var r;
                    return r = $(this), t.resetForm(), r.addClass("current"), n.removeClass("current"), o.show(), i.hide(), $("input[name=phone]", o).focus(), $(".privacy-field").hide()
                })
            },
            showError: function(n) {
                var t;
                return t = $(".error-block"), t.length ? t.show().html(n) : $("<span class='error-block'>" + n + "</span>").insertBefore(this.$emailForm)
            },
            hideError: function() {
                return $(".error-block").empty().hide()
            },
            initPhoneVerify: function() {
                var n, t, e, r, i, o, a;
                return n = $(':input[name="countryCode"]'), t = $("input.phone"), o = $("input.verify"), e = $(".send-sms"), r = $(".timer"), a = "style='text-align: center;'", i = this.$tips = $(".tips"), n.on("change keyup", function(t) {
                    return function(e) {
                        if (t.isCountryCode(n.val()))
                            return t.hideError()
                    }
                }(this)), t.on("change keyup", function(n) {
                    return function(e) {
                        if (n.isPhone(t.val())&&!n.captcha.off)
                            return n.hideError()
                    }
                }(this)), r.on("click", function(n) {
                    return n.preventDefault(), !1
                }), i.on("click", "#show-bind-form", function(n) {
                    return function() {
                        return n.showBindForm(t.val())
                    }
                }(this)), i.on("click", "#cancel-bind", function(n) {
                    return function() {
                        return n.showCreateForm(t.val())
                    }
                }(this)), e.on("click", function(e) {
                    return function(r) {
                        var i, o;
                        return r.preventDefault(), o = t.val(), i = n.val(), "" === o ? (t.focus(), !1) : e.isCountryCode(i) ? e.isPhone(o)?!e.captcha.off && (!e.captcha.pass && e.captcha.host ? e.showError(e.i18n("captchaTips")) : e.sendSMS("+" + i + "-" + o)) : (e.showError(e.i18n("invalidmobile")), n.focus(), !1) : (e.showError(e.i18n("invalidcountrycode")), t.focus(), !1)
                    }
                }(this)), this.$phoneForm.on("submit", function(e) {
                    return function(r) {
                        var i, a, s, c;
                        return r.preventDefault(), s = t.val(), a = n.val(), c = o.val(), e.isCountryCode(a) ? e.isPhone(s) ? (i = $.post("/verifycode", {
                            phone: "+" + a + "-" + s,
                            verify: c
                        }), i.done(function(n) {
                            return e.hideError(), e.showCreateForm(s), $('input[name="phone"]', e.$createOrBindForm).val(t.val()), $(".privacy-field").show()
                        }).fail(function(n) {
                            var t, r;
                            if (t = null != (r = n.responseJSON) ? r.error : void 0)
                                return e.showError(t)
                        })) : (e.showError(e.i18n("invalidmobile")), t.focus(), !1) : (e.showError(e.i18n("invalidcountrycode")), n.focus(), !1)
                    }
                }(this))
            },
            checkPhone: function(n) {
                var t;
                return t = $.get("/signup", {
                    phone: n
                })
            },
            sendSMS: function(n) {
                var t, e, r, i, o, a;
                return e = $(".timer"), t = $(".send-sms"), r = $(".verification"), i = this.i18n("sendsmsagain", 60), a = function() {
                    return t.click()
                }, o = $.post("/sendcode", {
                    phone: n,
                    uid: this.captcha.uid,
                    sendtype: "signup"
                }), o.done(function(n) {
                    return function() {
                        var o, s;
                        return n.hideError(), t.hide(), r.show(), e.text(i).removeClass("resend").off("click", a), o = 60, s = setInterval(function() {
                            if (e.text(n.i18n("sendsmsagain", --o)), 0 === o)
                                return clearInterval(s), e.text(n.i18n("resend")).addClass("resend").on("click", a)
                        }, 1e3)
                    }
                }(this)), o.fail(function(n) {
                    return function(t) {
                        var r, i;
                        if (e.off("click", a), r = null != (i = t.responseJSON) ? i.error : void 0)
                            return n.showError(r)
                    }
                }(this))
            },
            resetForm: function() {
                return this.hideError(), this.$tips.empty().hide()
            },
            onEmailFormSubmit: function() {
                return this.$emailForm.on("submit", function(n) {
                    return function(t) {
                        var e, r, i, o;
                        return t.preventDefault(), i = n.$emailForm.serialize(), e = n.serializeObject(i), e.uid = n.captcha.uid, e.email = decodeURIComponent(e.email), e.name = decodeURIComponent(e.name), r = e.next_url ? e.next_url = decodeURIComponent(e.next_url) : "/notify?status=signup-success&from=signup&email=" + e.email, !n.captcha.pass && n.captcha.host || n.captcha.off ? n.showError(n.i18n("captchaTips")) : (o = $.post("/signup" + window.location.search, e), o.done(function(n) {
                            return n.nextUrl ? window.location.href = n.nextUrl : window.location.href = r
                        }), o.fail(function(t) {
                            var e, r;
                            if (e = null != (r = t.responseJSON) ? r.error : void 0)
                                return n.showError(e)
                        }))
                    }
                }(this))
            },
            onCreateOrBindFormSubmit: function() {
                return this.$createOrBindForm.on("submit", function(n) {
                    return function(t) {
                        var e;
                        return t.preventDefault(), e = $.post("/signup" + window.location.search, n.$createOrBindForm.serialize() + ("&action=" + n.$createOrBindForm.data("action"))), e.done(function(n) {
                            if (n.nextUrl)
                                return window.location.href = n.nextUrl
                        }), e.fail(function(t) {
                            var e, r;
                            if (e = null != (r = t.responseJSON) ? r.error : void 0)
                                return n.showError(e)
                        })
                    }
                }(this))
            },
            showCreateForm: function(n) {
                var t, e;
                return $(".switch-tab").css("display", "none"), e = n.slice(0, 3) + "****" + n.slice(7), t = "<a id='show-bind-form' href='javascript:;'>" + this.i18n("connectit") + "</a>", this.$tips.show().html("<h4>" + this.i18n("verifiedmobile", e) + "</h4>" + ("<p>" + this.i18n("completeaccount", t) + "</p>")), this.$phoneForm.hide(), this.$createOrBindForm.show().data("action", "create").find(".username").show().find("input").prop("disabled", !1), $(".password", this.$createOrBindForm).attr("placeholder", this.i18n("passwordplaceholder")), $(".btn-text", this.$createOrBindForm).text(this.i18n("signup")), $(".privacy-field").show(), $(".login-links").hide(), this.hideError()
            },
            showBindForm: function(n) {
                var t, e;
                return $(".switch-tab").css("display", "none"), e = n.slice(0, 3) + "****" + n.slice(7), t = "<a id='cancel-bind' href='javascript:;'>" + this.i18n("createnewone") + "</a>", this.$tips.show().html("<h4>" + this.i18n("verifiedmobile", e) + "</h4>" + ("<p>" + this.i18n("connectaccount", t) + "</p>")), this.$phoneForm.hide(), this.$createOrBindForm.show().data("action", "bind").find(".username").hide().find("input").prop("disabled", !0), $(".password", this.$createOrBindForm).attr("placeholder", this.i18n("yourpassword")), $(".btn-text", this.$createOrBindForm).text(this.i18n("connect")), $(".privacy-field").hide(), this.hideError()
            }
        }, $("body.signup").length && t.init(), window.app = t
    })
}.call(this), function() {
    $(function() {
        var n, t, e, r, i;
        return i = $("body.two-factor"), t = i.find(".auth-form"), e = i.find('[name="authcode"]'), n = $('<div class="error-block"></div'), r = i.find(".qrcode-wrap"), r.qrcode({
            text: r.data("src"),
            size: 140
        }), t.on("submit", function(t) {
            return t.preventDefault(), $.ajax({
                type: "POST",
                url: "/user/authcode",
                data: {
                    authcode: e.val()
                },
                success: function(t) {
                    return t.ret===-1 ? (e.before(n.html(e.data("error"))), !1) : $.ajax({
                        method: "post",
                        url: "/user/google-two-factor",
                        data: {
                            authcode: e.val()
                        },
                        success: function(t) {
                            return t.err ? e.before(n.html(e.data("error"))) : window.location = "/notify?status=google-auth-bind-success"
                        }
                    })
                }
            })
        }), e.on("change keyup", function() {
            return $(".error-block").remove()
        })
    })
}.call(this);

