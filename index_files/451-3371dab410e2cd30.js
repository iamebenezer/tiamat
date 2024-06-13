(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [451], {
        4435: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return Image
                }
            });
            let r = n(7295),
                i = n(3589),
                o = i._(n(9599)),
                u = r._(n(7456)),
                l = r._(n(2512)),
                a = n(417),
                s = n(1532),
                c = n(1211);
            n(1595);
            let d = n(6946),
                f = r._(n(5619)),
                m = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function p(e, t, n, r, i, o) {
                let u = null == e ? void 0 : e.src;
                if (!e || e["data-loaded-src"] === u) return;
                e["data-loaded-src"] = u;
                let l = "decode" in e ? e.decode() : Promise.resolve();
                l.catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && i(!0), null == n ? void 0 : n.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let r = !1,
                                i = !1;
                            n.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    r = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, t.stopPropagation()
                                }
                            })
                        }(null == r ? void 0 : r.current) && r.current(e)
                    }
                })
            }

            function v(e) {
                let [t, n] = o.version.split(".", 2), r = parseInt(t, 10), i = parseInt(n, 10);
                return r > 18 || 18 === r && i >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let g = (0, o.forwardRef)((e, t) => {
                let {
                    src: n,
                    srcSet: r,
                    sizes: i,
                    height: u,
                    width: l,
                    decoding: a,
                    className: s,
                    style: c,
                    fetchPriority: d,
                    placeholder: f,
                    loading: m,
                    unoptimized: g,
                    fill: h,
                    onLoadRef: b,
                    onLoadingCompleteRef: y,
                    setBlurComplete: E,
                    setShowAltText: w,
                    onLoad: S,
                    onError: x,
                    ...I
                } = e;
                return o.default.createElement("img", { ...I,
                    ...v(d),
                    loading: m,
                    width: l,
                    height: u,
                    decoding: a,
                    "data-nimg": h ? "fill" : "1",
                    className: s,
                    style: c,
                    sizes: i,
                    srcSet: r,
                    src: n,
                    ref: (0, o.useCallback)(e => {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (x && (e.src = e.src), e.complete && p(e, f, b, y, E, g))
                    }, [n, f, b, y, E, x, g, t]),
                    onLoad: e => {
                        let t = e.currentTarget;
                        p(t, f, b, y, E, g)
                    },
                    onError: e => {
                        w(!0), "empty" !== f && E(!0), x && x(e)
                    }
                })
            });

            function h(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: n
                } = e, r = {
                    as: "image",
                    imageSrcSet: n.srcSet,
                    imageSizes: n.sizes,
                    crossOrigin: n.crossOrigin,
                    referrerPolicy: n.referrerPolicy,
                    ...v(n.fetchPriority)
                };
                return t && u.default.preload ? (u.default.preload(n.src, r), null) : o.default.createElement(l.default, null, o.default.createElement("link", {
                    key: "__nimg-" + n.src + n.srcSet + n.sizes,
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src,
                    ...r
                }))
            }
            let Image = (0, o.forwardRef)((e, t) => {
                let n = (0, o.useContext)(d.RouterContext),
                    r = (0, o.useContext)(c.ImageConfigContext),
                    i = (0, o.useMemo)(() => {
                        let e = m || r || s.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            n = e.deviceSizes.sort((e, t) => e - t);
                        return { ...e,
                            allSizes: t,
                            deviceSizes: n
                        }
                    }, [r]),
                    {
                        onLoad: u,
                        onLoadingComplete: l
                    } = e,
                    p = (0, o.useRef)(u);
                (0, o.useEffect)(() => {
                    p.current = u
                }, [u]);
                let v = (0, o.useRef)(l);
                (0, o.useEffect)(() => {
                    v.current = l
                }, [l]);
                let [b, y] = (0, o.useState)(!1), [E, w] = (0, o.useState)(!1), {
                    props: S,
                    meta: x
                } = (0, a.getImgProps)(e, {
                    defaultLoader: f.default,
                    imgConf: i,
                    blurComplete: b,
                    showAltText: E
                });
                return o.default.createElement(o.default.Fragment, null, o.default.createElement(g, { ...S,
                    unoptimized: x.unoptimized,
                    placeholder: x.placeholder,
                    fill: x.fill,
                    onLoadRef: p,
                    onLoadingCompleteRef: v,
                    setBlurComplete: y,
                    setShowAltText: w,
                    ref: t
                }), x.priority ? o.default.createElement(h, {
                    isAppRouter: !n,
                    imgAttributes: S
                }) : null)
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8926: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(7295),
                i = r._(n(9599)),
                o = i.default.createContext({})
        },
        9277: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: n = !1,
                    hasQuery: r = !1
                } = void 0 === e ? {} : e;
                return t || n && r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        417: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return l
                }
            }), n(1595);
            let r = n(4229),
                i = n(1532);

            function o(e) {
                return void 0 !== e.default
            }

            function u(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function l(e, t) {
                var n;
                let l, a, s, {
                        src: c,
                        sizes: d,
                        unoptimized: f = !1,
                        priority: m = !1,
                        loading: p,
                        className: v,
                        quality: g,
                        width: h,
                        height: b,
                        fill: y = !1,
                        style: E,
                        onLoad: w,
                        onLoadingComplete: S,
                        placeholder: x = "empty",
                        blurDataURL: I,
                        fetchPriority: P,
                        layout: O,
                        objectFit: _,
                        objectPosition: C,
                        lazyBoundary: R,
                        lazyRoot: M,
                        ...F
                    } = e,
                    {
                        imgConf: T,
                        showAltText: A,
                        blurComplete: N,
                        defaultLoader: k
                    } = t,
                    j = T || i.imageConfigDefault;
                if ("allSizes" in j) l = j;
                else {
                    let e = [...j.deviceSizes, ...j.imageSizes].sort((e, t) => e - t),
                        t = j.deviceSizes.sort((e, t) => e - t);
                    l = { ...j,
                        allSizes: e,
                        deviceSizes: t
                    }
                }
                let D = F.loader || k;
                delete F.loader, delete F.srcSet;
                let L = "__next_img_default" in D;
                if (L) {
                    if ("custom" === l.loader) throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = D;
                    D = t => {
                        let {
                            config: n,
                            ...r
                        } = t;
                        return e(r)
                    }
                }
                if (O) {
                    "fill" === O && (y = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[O];
                    e && (E = { ...E,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[O];
                    t && !d && (d = t)
                }
                let z = "",
                    U = u(h),
                    H = u(b);
                if ("object" == typeof(n = c) && (o(n) || void 0 !== n.src)) {
                    let e = o(c) ? c.default : c;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (a = e.blurWidth, s = e.blurHeight, I = I || e.blurDataURL, z = e.src, !y) {
                        if (U || H) {
                            if (U && !H) {
                                let t = U / e.width;
                                H = Math.round(e.height * t)
                            } else if (!U && H) {
                                let t = H / e.height;
                                U = Math.round(e.width * t)
                            }
                        } else U = e.width, H = e.height
                    }
                }
                let V = !m && ("lazy" === p || void 0 === p);
                (!(c = "string" == typeof c ? c : z) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0, V = !1), l.unoptimized && (f = !0), L && c.endsWith(".svg") && !l.dangerouslyAllowSVG && (f = !0), m && (P = "high");
                let B = u(g),
                    G = Object.assign(y ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: _,
                        objectPosition: C
                    } : {}, A ? {} : {
                        color: "transparent"
                    }, E),
                    $ = N || "empty" === x ? null : "blur" === x ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
                        widthInt: U,
                        heightInt: H,
                        blurWidth: a,
                        blurHeight: s,
                        blurDataURL: I || "",
                        objectFit: G.objectFit
                    }) + '")' : 'url("' + x + '")',
                    W = $ ? {
                        backgroundSize: G.objectFit || "cover",
                        backgroundPosition: G.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: $
                    } : {},
                    q = function(e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: i,
                            quality: o,
                            sizes: u,
                            loader: l
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: a,
                            kind: s
                        } = function(e, t, n) {
                            let {
                                deviceSizes: r,
                                allSizes: i
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: i.filter(t => t >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: i,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: r,
                                kind: "w"
                            };
                            let o = [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))];
                            return {
                                widths: o,
                                kind: "x"
                            }
                        }(t, i, u), c = a.length - 1;
                        return {
                            sizes: u || "w" !== s ? u : "100vw",
                            srcSet: a.map((e, r) => l({
                                config: t,
                                src: n,
                                quality: o,
                                width: e
                            }) + " " + ("w" === s ? e : r + 1) + s).join(", "),
                            src: l({
                                config: t,
                                src: n,
                                quality: o,
                                width: a[c]
                            })
                        }
                    }({
                        config: l,
                        src: c,
                        unoptimized: f,
                        width: U,
                        quality: B,
                        sizes: d,
                        loader: D
                    }),
                    Y = { ...F,
                        loading: V ? "lazy" : p,
                        fetchPriority: P,
                        width: U,
                        height: H,
                        decoding: "async",
                        className: v,
                        style: { ...G,
                            ...W
                        },
                        sizes: q.sizes,
                        srcSet: q.srcSet,
                        src: q.src
                    },
                    Z = {
                        unoptimized: f,
                        priority: m,
                        placeholder: x,
                        fill: y
                    };
                return {
                    props: Y,
                    meta: Z
                }
            }
        },
        2512: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    defaultHead: function() {
                        return c
                    },
                    default: function() {
                        return p
                    }
                });
            let r = n(7295),
                i = n(3589),
                o = i._(n(9599)),
                u = r._(n(7798)),
                l = n(8926),
                a = n(9082),
                s = n(9277);

            function c(e) {
                void 0 === e && (e = !1);
                let t = [o.default.createElement("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push(o.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function d(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            n(1595);
            let f = ["name", "httpEquiv", "charSet", "itemProp"];

            function m(e, t) {
                let {
                    inAmpMode: n
                } = t;
                return e.reduce(d, []).reverse().concat(c(n).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return i => {
                        let o = !0,
                            u = !1;
                        if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                            u = !0;
                            let t = i.key.slice(i.key.indexOf("$") + 1);
                            e.has(t) ? o = !1 : e.add(t)
                        }
                        switch (i.type) {
                            case "title":
                            case "base":
                                t.has(i.type) ? o = !1 : t.add(i.type);
                                break;
                            case "meta":
                                for (let e = 0, t = f.length; e < t; e++) {
                                    let t = f[e];
                                    if (i.props.hasOwnProperty(t)) {
                                        if ("charSet" === t) n.has(t) ? o = !1 : n.add(t);
                                        else {
                                            let e = i.props[t],
                                                n = r[t] || new Set;
                                            ("name" !== t || !u) && n.has(e) ? o = !1 : (n.add(e), r[t] = n)
                                        }
                                    }
                                }
                        }
                        return o
                    }
                }()).reverse().map((e, t) => {
                    let r = e.key || t;
                    if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, o.default.cloneElement(e, t)
                    }
                    return o.default.cloneElement(e, {
                        key: r
                    })
                })
            }
            let p = function(e) {
                let {
                    children: t
                } = e, n = (0, o.useContext)(l.AmpStateContext), r = (0, o.useContext)(a.HeadManagerContext);
                return o.default.createElement(u.default, {
                    reduceComponentsToState: m,
                    headManager: r,
                    inAmpMode: (0, s.isInAmpMode)(n)
                }, t)
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        4229: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: i,
                    blurDataURL: o,
                    objectFit: u
                } = e, l = r ? 40 * r : t, a = i ? 40 * i : n, s = l && a ? "viewBox='0 0 " + l + " " + a + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + s + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (s ? "none" : "contain" === u ? "xMidYMid" : "cover" === u ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        1211: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(7295),
                i = r._(n(9599)),
                o = n(1532),
                u = i.default.createContext(o.imageConfigDefault)
        },
        1532: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    VALID_LOADERS: function() {
                        return n
                    },
                    imageConfigDefault: function() {
                        return r
                    }
                });
            let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
                r = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        2251: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    unstable_getImgProps: function() {
                        return a
                    },
                    default: function() {
                        return s
                    }
                });
            let r = n(7295),
                i = n(417),
                o = n(1595),
                u = n(4435),
                l = r._(n(5619)),
                a = e => {
                    (0, o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: t
                    } = (0, i.getImgProps)(e, {
                        defaultLoader: l.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
                    return {
                        props: t
                    }
                },
                s = u.Image
        },
        5619: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    config: t,
                    src: n,
                    width: r,
                    quality: i
                } = e;
                return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (i || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n.__next_img_default = !0;
            let r = n
        },
        6946: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(7295),
                i = r._(n(9599)),
                o = i.default.createContext(null)
        },
        7798: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(9599),
                i = r.useLayoutEffect,
                o = r.useEffect;

            function u(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: n
                } = e;

                function u() {
                    if (t && t.mountedInstances) {
                        let i = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(n(i, e))
                    }
                }
                return i(() => {
                    var n;
                    return null == t || null == (n = t.mountedInstances) || n.add(e.children), () => {
                        var n;
                        null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                    }
                }), i(() => (t && (t._pendingUpdate = u), () => {
                    t && (t._pendingUpdate = u)
                })), o(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        1595: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "warnOnce", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = e => {}
        },
        901: function(e, t, n) {
            "use strict";
            var r = n(9599),
                i = Symbol.for("react.element"),
                o = Symbol.for("react.fragment"),
                u = Object.prototype.hasOwnProperty,
                l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                a = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function s(e, t, n) {
                var r, o = {},
                    s = null,
                    c = null;
                for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) u.call(t, r) && !a.hasOwnProperty(r) && (o[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
                return {
                    $$typeof: i,
                    type: e,
                    key: s,
                    ref: c,
                    props: o,
                    _owner: l.current
                }
            }
            t.Fragment = o, t.jsx = s, t.jsxs = s
        },
        3353: function(e, t, n) {
            "use strict";
            e.exports = n(901)
        },
        5959: function(e, t, n) {
            e.exports = n(2251)
        },
        2648: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return en
                }
            });
            var r, i, o, u, l, a, s, c, d, f, m, p = n(9599),
                v = n(5120),
                g = n(7702),
                h = n(4807),
                b = n(814),
                y = n(4092),
                E = n(9809),
                w = n(5853),
                S = n(2602);
            let x = null != (m = p.useId) ? m : function() {
                let e = (0, w.H)(),
                    [t, n] = p.useState(e ? () => S.O.nextId() : null);
                return (0, y.e)(() => {
                    null === t && n(S.O.nextId())
                }, [t]), null != t ? "" + t : void 0
            };
            var I = ((r = I || {}).Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r),
                P = ((i = P || {})[i.First = 0] = "First", i[i.Previous = 1] = "Previous", i[i.Next = 2] = "Next", i[i.Last = 3] = "Last", i[i.Specific = 4] = "Specific", i[i.Nothing = 5] = "Nothing", i);

            function O(e) {
                return S.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
            let _ = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
            var C = ((o = C || {})[o.First = 1] = "First", o[o.Previous = 2] = "Previous", o[o.Next = 4] = "Next", o[o.Last = 8] = "Last", o[o.WrapAround = 16] = "WrapAround", o[o.NoScroll = 32] = "NoScroll", o),
                R = ((u = R || {})[u.Error = 0] = "Error", u[u.Overflow = 1] = "Overflow", u[u.Success = 2] = "Success", u[u.Underflow = 3] = "Underflow", u),
                M = ((l = M || {})[l.Previous = -1] = "Previous", l[l.Next = 1] = "Next", l);

            function F(e = document.body) {
                return null == e ? [] : Array.from(e.querySelectorAll(_)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
            }
            var T = ((a = T || {})[a.Strict = 0] = "Strict", a[a.Loose = 1] = "Loose", a);

            function A(e, t = 0) {
                var n;
                return e !== (null == (n = O(e)) ? void 0 : n.body) && (0, v.E)(t, {
                    0: () => e.matches(_),
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(_)) return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
            }

            function N(e) {
                let t = O(e);
                (0, h.k)().nextFrame(() => {
                    t && !A(t.activeElement, 0) && (null == e || e.focus({
                        preventScroll: !0
                    }))
                })
            }
            var k = ((s = k || {})[s.Keyboard = 0] = "Keyboard", s[s.Mouse = 1] = "Mouse", s);

            function j(e, t = e => e) {
                return e.slice().sort((e, n) => {
                    let r = t(e),
                        i = t(n);
                    if (null === r || null === i) return 0;
                    let o = r.compareDocumentPosition(i);
                    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0), document.addEventListener("click", e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0));
            var D = n(9410);

            function L(e, t, n) {
                let r = (0, D.E)(t);
                (0, p.useEffect)(() => {
                    function t(e) {
                        r.current(e)
                    }
                    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
                }, [e, n])
            }
            var z = n(7558);

            function U(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                if ("string" == typeof n && "button" === n.toLowerCase()) return "button"
            }
            var H = n(8344);

            function V(e) {
                return [e.screenX, e.screenY]
            }
            let B = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

            function G(e) {
                var t, n;
                let r = null != (t = e.innerText) ? t : "",
                    i = e.cloneNode(!0);
                if (!(i instanceof HTMLElement)) return r;
                let o = !1;
                for (let e of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) e.remove(), o = !0;
                let u = o ? null != (n = i.innerText) ? n : "" : r;
                return B.test(u) && (u = u.replace(B, "")), u
            }
            var $ = ((c = $ || {})[c.Open = 0] = "Open", c[c.Closed = 1] = "Closed", c),
                W = ((d = W || {})[d.Pointer = 0] = "Pointer", d[d.Other = 1] = "Other", d),
                q = ((f = q || {})[f.OpenMenu = 0] = "OpenMenu", f[f.CloseMenu = 1] = "CloseMenu", f[f.GoToItem = 2] = "GoToItem", f[f.Search = 3] = "Search", f[f.ClearSearch = 4] = "ClearSearch", f[f.RegisterItem = 5] = "RegisterItem", f[f.UnregisterItem = 6] = "UnregisterItem", f);

            function Y(e, t = e => e) {
                let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
                    r = j(t(e.items.slice()), e => e.dataRef.current.domRef.current),
                    i = n ? r.indexOf(n) : null;
                return -1 === i && (i = null), {
                    items: r,
                    activeItemIndex: i
                }
            }
            let Z = {
                    1: e => 1 === e.menuState ? e : { ...e,
                        activeItemIndex: null,
                        menuState: 1
                    },
                    0: e => 0 === e.menuState ? e : { ...e,
                        __demoMode: !1,
                        menuState: 0
                    },
                    2: (e, t) => {
                        var n;
                        let r = Y(e),
                            i = function(e, t) {
                                let n = t.resolveItems();
                                if (n.length <= 0) return null;
                                let r = t.resolveActiveIndex(),
                                    i = null != r ? r : -1,
                                    o = (() => {
                                        switch (e.focus) {
                                            case 0:
                                                return n.findIndex(e => !t.resolveDisabled(e));
                                            case 1:
                                                {
                                                    let e = n.slice().reverse().findIndex((e, n, r) => (-1 === i || !(r.length - n - 1 >= i)) && !t.resolveDisabled(e));
                                                    return -1 === e ? e : n.length - 1 - e
                                                }
                                            case 2:
                                                return n.findIndex((e, n) => !(n <= i) && !t.resolveDisabled(e));
                                            case 3:
                                                {
                                                    let e = n.slice().reverse().findIndex(e => !t.resolveDisabled(e));
                                                    return -1 === e ? e : n.length - 1 - e
                                                }
                                            case 4:
                                                return n.findIndex(n => t.resolveId(n) === e.id);
                                            case 5:
                                                return null;
                                            default:
                                                ! function(e) {
                                                    throw Error("Unexpected object: " + e)
                                                }(e)
                                        }
                                    })();
                                return -1 === o ? r : o
                            }(t, {
                                resolveItems: () => r.items,
                                resolveActiveIndex: () => r.activeItemIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return { ...e,
                            ...r,
                            searchQuery: "",
                            activeItemIndex: i,
                            activationTrigger: null != (n = t.trigger) ? n : 1
                        }
                    },
                    3: (e, t) => {
                        let n = "" !== e.searchQuery ? 0 : 1,
                            r = e.searchQuery + t.value.toLowerCase(),
                            i = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find(e => {
                                var t;
                                return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) && !e.dataRef.current.disabled
                            }),
                            o = i ? e.items.indexOf(i) : -1;
                        return -1 === o || o === e.activeItemIndex ? { ...e,
                            searchQuery: r
                        } : { ...e,
                            searchQuery: r,
                            activeItemIndex: o,
                            activationTrigger: 1
                        }
                    },
                    4: e => "" === e.searchQuery ? e : { ...e,
                        searchQuery: "",
                        searchActiveItemIndex: null
                    },
                    5: (e, t) => {
                        let n = Y(e, e => [...e, {
                            id: t.id,
                            dataRef: t.dataRef
                        }]);
                        return { ...e,
                            ...n
                        }
                    },
                    6: (e, t) => {
                        let n = Y(e, e => {
                            let n = e.findIndex(e => e.id === t.id);
                            return -1 !== n && e.splice(n, 1), e
                        });
                        return { ...e,
                            ...n,
                            activationTrigger: 1
                        }
                    }
                },
                K = (0, p.createContext)(null);

            function Q(e) {
                let t = (0, p.useContext)(K);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Menu /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Q), t
                }
                return t
            }

            function J(e, t) {
                return (0, v.E)(t.type, Z, e, t)
            }
            K.displayName = "MenuContext";
            let X = p.Fragment,
                ee = g.AN.RenderStrategy | g.AN.Static,
                et = p.Fragment,
                en = Object.assign((0, g.yV)(function(e, t) {
                    let {
                        __demoMode: n = !1,
                        ...r
                    } = e, i = (0, p.useReducer)(J, {
                        __demoMode: n,
                        menuState: n ? 0 : 1,
                        buttonRef: (0, p.createRef)(),
                        itemsRef: (0, p.createRef)(),
                        items: [],
                        searchQuery: "",
                        activeItemIndex: null,
                        activationTrigger: 1
                    }), [{
                        menuState: o,
                        itemsRef: u,
                        buttonRef: l
                    }, a] = i, s = (0, E.T)(t);
                    ! function(e, t, n = !0) {
                        var r;
                        let i, o = (0, p.useRef)(!1);

                        function u(n, r) {
                            if (!o.current || n.defaultPrevented) return;
                            let i = r(n);
                            if (null !== i && i.getRootNode().contains(i) && i.isConnected) {
                                for (let t of function e(t) {
                                        return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                                    }(e)) {
                                    if (null === t) continue;
                                    let e = t instanceof HTMLElement ? t : t.current;
                                    if (null != e && e.contains(i) || n.composed && n.composedPath().includes(e)) return
                                }
                                return A(i, T.Loose) || -1 === i.tabIndex || n.preventDefault(), t(n, i)
                            }
                        }(0, p.useEffect)(() => {
                            requestAnimationFrame(() => {
                                o.current = n
                            })
                        }, [n]);
                        let l = (0, p.useRef)(null);
                        L("pointerdown", e => {
                            var t, n;
                            o.current && (l.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                        }, !0), L("mousedown", e => {
                            var t, n;
                            o.current && (l.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                        }, !0), L("click", e => {
                            l.current && (u(e, () => l.current), l.current = null)
                        }, !0), L("touchend", e => u(e, () => e.target instanceof HTMLElement ? e.target : null), !0), r = "blur", i = (0, D.E)(e => u(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null)), (0, p.useEffect)(() => {
                            function e(e) {
                                i.current(e)
                            }
                            return window.addEventListener(r, e, !0), () => window.removeEventListener(r, e, !0)
                        }, [r, !0])
                    }([l, u], (e, t) => {
                        var n;
                        a({
                            type: 1
                        }), A(t, T.Loose) || (e.preventDefault(), null == (n = l.current) || n.focus())
                    }, 0 === o);
                    let c = (0, H.z)(() => {
                            a({
                                type: 1
                            })
                        }),
                        d = (0, p.useMemo)(() => ({
                            open: 0 === o,
                            close: c
                        }), [o, c]);
                    return p.createElement(K.Provider, {
                        value: i
                    }, p.createElement(z.up, {
                        value: (0, v.E)(o, {
                            0: z.ZM.Open,
                            1: z.ZM.Closed
                        })
                    }, (0, g.sY)({
                        ourProps: {
                            ref: s
                        },
                        theirProps: r,
                        slot: d,
                        defaultTag: X,
                        name: "Menu"
                    })))
                }), {
                    Button: (0, g.yV)(function(e, t) {
                        var n;
                        let r = x(),
                            {
                                id: i = `headlessui-menu-button-${r}`,
                                ...o
                            } = e,
                            [u, l] = Q("Menu.Button"),
                            a = (0, E.T)(u.buttonRef, t),
                            s = (0, b.G)(),
                            c = (0, H.z)(e => {
                                switch (e.key) {
                                    case I.Space:
                                    case I.Enter:
                                    case I.ArrowDown:
                                        e.preventDefault(), e.stopPropagation(), l({
                                            type: 0
                                        }), s.nextFrame(() => l({
                                            type: 2,
                                            focus: P.First
                                        }));
                                        break;
                                    case I.ArrowUp:
                                        e.preventDefault(), e.stopPropagation(), l({
                                            type: 0
                                        }), s.nextFrame(() => l({
                                            type: 2,
                                            focus: P.Last
                                        }))
                                }
                            }),
                            d = (0, H.z)(e => {
                                e.key === I.Space && e.preventDefault()
                            }),
                            f = (0, H.z)(t => {
                                if (function(e) {
                                        let t = e.parentElement,
                                            n = null;
                                        for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                                        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
                                        return !(r && function(e) {
                                            if (!e) return !1;
                                            let t = e.previousElementSibling;
                                            for (; null !== t;) {
                                                if (t instanceof HTMLLegendElement) return !1;
                                                t = t.previousElementSibling
                                            }
                                            return !0
                                        }(n)) && r
                                    }(t.currentTarget)) return t.preventDefault();
                                e.disabled || (0 === u.menuState ? (l({
                                    type: 1
                                }), s.nextFrame(() => {
                                    var e;
                                    return null == (e = u.buttonRef.current) ? void 0 : e.focus({
                                        preventScroll: !0
                                    })
                                })) : (t.preventDefault(), l({
                                    type: 0
                                })))
                            }),
                            m = (0, p.useMemo)(() => ({
                                open: 0 === u.menuState
                            }), [u]),
                            v = {
                                ref: a,
                                id: i,
                                type: function(e, t) {
                                    let [n, r] = (0, p.useState)(() => U(e));
                                    return (0, y.e)(() => {
                                        r(U(e))
                                    }, [e.type, e.as]), (0, y.e)(() => {
                                        n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
                                    }, [n, t]), n
                                }(e, u.buttonRef),
                                "aria-haspopup": "menu",
                                "aria-controls": null == (n = u.itemsRef.current) ? void 0 : n.id,
                                "aria-expanded": 0 === u.menuState,
                                onKeyDown: c,
                                onKeyUp: d,
                                onClick: f
                            };
                        return (0, g.sY)({
                            ourProps: v,
                            theirProps: o,
                            slot: m,
                            defaultTag: "button",
                            name: "Menu.Button"
                        })
                    }),
                    Items: (0, g.yV)(function(e, t) {
                        var n, r;
                        let i = x(),
                            {
                                id: o = `headlessui-menu-items-${i}`,
                                ...u
                            } = e,
                            [l, a] = Q("Menu.Items"),
                            s = (0, E.T)(l.itemsRef, t),
                            c = function(...e) {
                                return (0, p.useMemo)(() => O(...e), [...e])
                            }(l.itemsRef),
                            d = (0, b.G)(),
                            f = (0, z.oJ)(),
                            m = null !== f ? (f & z.ZM.Open) === z.ZM.Open : 0 === l.menuState;
                        (0, p.useEffect)(() => {
                            let e = l.itemsRef.current;
                            e && 0 === l.menuState && e !== (null == c ? void 0 : c.activeElement) && e.focus({
                                preventScroll: !0
                            })
                        }, [l.menuState, l.itemsRef, c]),
                        function({
                            container: e,
                            accept: t,
                            walk: n,
                            enabled: r = !0
                        }) {
                            let i = (0, p.useRef)(t),
                                o = (0, p.useRef)(n);
                            (0, p.useEffect)(() => {
                                i.current = t, o.current = n
                            }, [t, n]), (0, y.e)(() => {
                                if (!e || !r) return;
                                let t = O(e);
                                if (!t) return;
                                let n = i.current,
                                    u = o.current,
                                    l = Object.assign(e => n(e), {
                                        acceptNode: n
                                    }),
                                    a = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, l, !1);
                                for (; a.nextNode();) u(a.currentNode)
                            }, [e, r, i, o])
                        }({
                            container: l.itemsRef.current,
                            enabled: 0 === l.menuState,
                            accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                            walk(e) {
                                e.setAttribute("role", "none")
                            }
                        });
                        let v = (0, H.z)(e => {
                                var t, n;
                                switch (d.dispose(), e.key) {
                                    case I.Space:
                                        if ("" !== l.searchQuery) return e.preventDefault(), e.stopPropagation(), a({
                                            type: 3,
                                            value: e.key
                                        });
                                    case I.Enter:
                                        if (e.preventDefault(), e.stopPropagation(), a({
                                                type: 1
                                            }), null !== l.activeItemIndex) {
                                            let {
                                                dataRef: e
                                            } = l.items[l.activeItemIndex];
                                            null == (n = null == (t = e.current) ? void 0 : t.domRef.current) || n.click()
                                        }
                                        N(l.buttonRef.current);
                                        break;
                                    case I.ArrowDown:
                                        return e.preventDefault(), e.stopPropagation(), a({
                                            type: 2,
                                            focus: P.Next
                                        });
                                    case I.ArrowUp:
                                        return e.preventDefault(), e.stopPropagation(), a({
                                            type: 2,
                                            focus: P.Previous
                                        });
                                    case I.Home:
                                    case I.PageUp:
                                        return e.preventDefault(), e.stopPropagation(), a({
                                            type: 2,
                                            focus: P.First
                                        });
                                    case I.End:
                                    case I.PageDown:
                                        return e.preventDefault(), e.stopPropagation(), a({
                                            type: 2,
                                            focus: P.Last
                                        });
                                    case I.Escape:
                                        e.preventDefault(), e.stopPropagation(), a({
                                            type: 1
                                        }), (0, h.k)().nextFrame(() => {
                                            var e;
                                            return null == (e = l.buttonRef.current) ? void 0 : e.focus({
                                                preventScroll: !0
                                            })
                                        });
                                        break;
                                    case I.Tab:
                                        e.preventDefault(), e.stopPropagation(), a({
                                            type: 1
                                        }), (0, h.k)().nextFrame(() => {
                                            var t, n;
                                            t = l.buttonRef.current, n = e.shiftKey ? C.Previous : C.Next,
                                                function(e, t, {
                                                    sorted: n = !0,
                                                    relativeTo: r = null,
                                                    skipElements: i = []
                                                } = {}) {
                                                    var o, u, l;
                                                    let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                                                        s = Array.isArray(e) ? n ? j(e) : e : F(e);
                                                    i.length > 0 && s.length > 1 && (s = s.filter(e => !i.includes(e))), r = null != r ? r : a.activeElement;
                                                    let c = (() => {
                                                            if (5 & t) return 1;
                                                            if (10 & t) return -1;
                                                            throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                                                        })(),
                                                        d = (() => {
                                                            if (1 & t) return 0;
                                                            if (2 & t) return Math.max(0, s.indexOf(r)) - 1;
                                                            if (4 & t) return Math.max(0, s.indexOf(r)) + 1;
                                                            if (8 & t) return s.length - 1;
                                                            throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                                                        })(),
                                                        f = 32 & t ? {
                                                            preventScroll: !0
                                                        } : {},
                                                        m = 0,
                                                        p = s.length,
                                                        v;
                                                    do {
                                                        if (m >= p || m + p <= 0) return 0;
                                                        let e = d + m;
                                                        if (16 & t) e = (e + p) % p;
                                                        else {
                                                            if (e < 0) return 3;
                                                            if (e >= p) return 1
                                                        }
                                                        null == (v = s[e]) || v.focus(f), m += c
                                                    } while (v !== a.activeElement);
                                                    6 & t && null != (l = null == (u = null == (o = v) ? void 0 : o.matches) ? void 0 : u.call(o, "textarea,input")) && l && v.select()
                                                }(F(), n, {
                                                    relativeTo: t
                                                })
                                        });
                                        break;
                                    default:
                                        1 === e.key.length && (a({
                                            type: 3,
                                            value: e.key
                                        }), d.setTimeout(() => a({
                                            type: 4
                                        }), 350))
                                }
                            }),
                            w = (0, H.z)(e => {
                                e.key === I.Space && e.preventDefault()
                            }),
                            S = (0, p.useMemo)(() => ({
                                open: 0 === l.menuState
                            }), [l]),
                            _ = {
                                "aria-activedescendant": null === l.activeItemIndex || null == (n = l.items[l.activeItemIndex]) ? void 0 : n.id,
                                "aria-labelledby": null == (r = l.buttonRef.current) ? void 0 : r.id,
                                id: o,
                                onKeyDown: v,
                                onKeyUp: w,
                                role: "menu",
                                tabIndex: 0,
                                ref: s
                            };
                        return (0, g.sY)({
                            ourProps: _,
                            theirProps: u,
                            slot: S,
                            defaultTag: "div",
                            features: ee,
                            visible: m,
                            name: "Menu.Items"
                        })
                    }),
                    Item: (0, g.yV)(function(e, t) {
                        let n, r, i, o = x(),
                            {
                                id: u = `headlessui-menu-item-${o}`,
                                disabled: l = !1,
                                ...a
                            } = e,
                            [s, c] = Q("Menu.Item"),
                            d = null !== s.activeItemIndex && s.items[s.activeItemIndex].id === u,
                            f = (0, p.useRef)(null),
                            m = (0, E.T)(t, f);
                        (0, y.e)(() => {
                            if (s.__demoMode || 0 !== s.menuState || !d || 0 === s.activationTrigger) return;
                            let e = (0, h.k)();
                            return e.requestAnimationFrame(() => {
                                var e, t;
                                null == (t = null == (e = f.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                    block: "nearest"
                                })
                            }), e.dispose
                        }, [s.__demoMode, f, d, s.menuState, s.activationTrigger, s.activeItemIndex]);
                        let v = (n = (0, p.useRef)(""), r = (0, p.useRef)(""), (0, H.z)(() => {
                                let e = f.current;
                                if (!e) return "";
                                let t = e.innerText;
                                if (n.current === t) return r.current;
                                let i = (function(e) {
                                    let t = e.getAttribute("aria-label");
                                    if ("string" == typeof t) return t.trim();
                                    let n = e.getAttribute("aria-labelledby");
                                    if (n) {
                                        let e = n.split(" ").map(e => {
                                            let t = document.getElementById(e);
                                            if (t) {
                                                let e = t.getAttribute("aria-label");
                                                return "string" == typeof e ? e.trim() : G(t).trim()
                                            }
                                            return null
                                        }).filter(Boolean);
                                        if (e.length > 0) return e.join(", ")
                                    }
                                    return G(e).trim()
                                })(e).trim().toLowerCase();
                                return n.current = t, r.current = i, i
                            })),
                            b = (0, p.useRef)({
                                disabled: l,
                                domRef: f,
                                get textValue() {
                                    return v()
                                }
                            });
                        (0, y.e)(() => {
                            b.current.disabled = l
                        }, [b, l]), (0, y.e)(() => (c({
                            type: 5,
                            id: u,
                            dataRef: b
                        }), () => c({
                            type: 6,
                            id: u
                        })), [b, u]);
                        let w = (0, H.z)(() => {
                                c({
                                    type: 1
                                })
                            }),
                            S = (0, H.z)(e => {
                                if (l) return e.preventDefault();
                                c({
                                    type: 1
                                }), N(s.buttonRef.current)
                            }),
                            I = (0, H.z)(() => {
                                if (l) return c({
                                    type: 2,
                                    focus: P.Nothing
                                });
                                c({
                                    type: 2,
                                    focus: P.Specific,
                                    id: u
                                })
                            }),
                            O = (i = (0, p.useRef)([-1, -1]), {
                                wasMoved(e) {
                                    let t = V(e);
                                    return (i.current[0] !== t[0] || i.current[1] !== t[1]) && (i.current = t, !0)
                                },
                                update(e) {
                                    i.current = V(e)
                                }
                            }),
                            _ = (0, H.z)(e => O.update(e)),
                            C = (0, H.z)(e => {
                                O.wasMoved(e) && (l || d || c({
                                    type: 2,
                                    focus: P.Specific,
                                    id: u,
                                    trigger: 0
                                }))
                            }),
                            R = (0, H.z)(e => {
                                O.wasMoved(e) && (l || d && c({
                                    type: 2,
                                    focus: P.Nothing
                                }))
                            }),
                            M = (0, p.useMemo)(() => ({
                                active: d,
                                disabled: l,
                                close: w
                            }), [d, l, w]);
                        return (0, g.sY)({
                            ourProps: {
                                id: u,
                                ref: m,
                                role: "menuitem",
                                tabIndex: !0 === l ? void 0 : -1,
                                "aria-disabled": !0 === l || void 0,
                                disabled: void 0,
                                onClick: S,
                                onFocus: I,
                                onPointerEnter: _,
                                onMouseEnter: _,
                                onPointerMove: C,
                                onMouseMove: C,
                                onPointerLeave: R,
                                onMouseLeave: R
                            },
                            theirProps: a,
                            slot: M,
                            defaultTag: et,
                            name: "Menu.Item"
                        })
                    })
                })
        },
        1710: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return T
                }
            });
            var r, i = n(9599),
                o = n(7702),
                u = n(7558),
                l = n(5120),
                a = n(4092);

            function s() {
                let e = (0, i.useRef)(!1);
                return (0, a.e)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            var c = n(9410),
                d = n(5853),
                f = n(9809),
                m = n(4807);

            function p(e, ...t) {
                e && t.length > 0 && e.classList.add(...t)
            }

            function v(e, ...t) {
                e && t.length > 0 && e.classList.remove(...t)
            }
            var g = n(814),
                h = n(8344),
                b = n(4746);

            function y(e = "") {
                return e.split(" ").filter(e => e.trim().length > 1)
            }
            let E = (0, i.createContext)(null);
            E.displayName = "TransitionContext";
            var w = ((r = w || {}).Visible = "visible", r.Hidden = "hidden", r);
            let S = (0, i.createContext)(null);

            function x(e) {
                return "children" in e ? x(e.children) : e.current.filter(({
                    el: e
                }) => null !== e.current).filter(({
                    state: e
                }) => "visible" === e).length > 0
            }

            function I(e, t) {
                let n = (0, c.E)(e),
                    r = (0, i.useRef)([]),
                    u = s(),
                    a = (0, g.G)(),
                    d = (0, h.z)((e, t = o.l4.Hidden) => {
                        let i = r.current.findIndex(({
                            el: t
                        }) => t === e); - 1 !== i && ((0, l.E)(t, {
                            [o.l4.Unmount]() {
                                r.current.splice(i, 1)
                            },
                            [o.l4.Hidden]() {
                                r.current[i].state = "hidden"
                            }
                        }), a.microTask(() => {
                            var e;
                            !x(r) && u.current && (null == (e = n.current) || e.call(n))
                        }))
                    }),
                    f = (0, h.z)(e => {
                        let t = r.current.find(({
                            el: t
                        }) => t === e);
                        return t ? "visible" !== t.state && (t.state = "visible") : r.current.push({
                            el: e,
                            state: "visible"
                        }), () => d(e, o.l4.Unmount)
                    }),
                    m = (0, i.useRef)([]),
                    p = (0, i.useRef)(Promise.resolve()),
                    v = (0, i.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    b = (0, h.z)((e, n, r) => {
                        m.current.splice(0), t && (t.chains.current[n] = t.chains.current[n].filter(([t]) => t !== e)), null == t || t.chains.current[n].push([e, new Promise(e => {
                            m.current.push(e)
                        })]), null == t || t.chains.current[n].push([e, new Promise(e => {
                            Promise.all(v.current[n].map(([e, t]) => t)).then(() => e())
                        })]), "enter" === n ? p.current = p.current.then(() => null == t ? void 0 : t.wait.current).then(() => r(n)) : r(n)
                    }),
                    y = (0, h.z)((e, t, n) => {
                        Promise.all(v.current[t].splice(0).map(([e, t]) => t)).then(() => {
                            var e;
                            null == (e = m.current.shift()) || e()
                        }).then(() => n(t))
                    });
                return (0, i.useMemo)(() => ({
                    children: r,
                    register: f,
                    unregister: d,
                    onStart: b,
                    onStop: y,
                    wait: p,
                    chains: v
                }), [f, d, r, b, y, v, p])
            }

            function P() {}
            S.displayName = "NestingContext";
            let O = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function _(e) {
                var t;
                let n = {};
                for (let r of O) n[r] = null != (t = e[r]) ? t : P;
                return n
            }
            let C = o.AN.RenderStrategy,
                R = (0, o.yV)(function(e, t) {
                    let {
                        show: n,
                        appear: r = !1,
                        unmount: l = !0,
                        ...s
                    } = e, c = (0, i.useRef)(null), m = (0, f.T)(c, t);
                    (0, d.H)();
                    let p = (0, u.oJ)();
                    if (void 0 === n && null !== p && (n = (p & u.ZM.Open) === u.ZM.Open), ![!0, !1].includes(n)) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [v, g] = (0, i.useState)(n ? "visible" : "hidden"), b = I(() => {
                        g("hidden")
                    }), [y, w] = (0, i.useState)(!0), P = (0, i.useRef)([n]);
                    (0, a.e)(() => {
                        !1 !== y && P.current[P.current.length - 1] !== n && (P.current.push(n), w(!1))
                    }, [P, n]);
                    let O = (0, i.useMemo)(() => ({
                        show: n,
                        appear: r,
                        initial: y
                    }), [n, r, y]);
                    (0, i.useEffect)(() => {
                        if (n) g("visible");
                        else if (x(b)) {
                            let e = c.current;
                            if (!e) return;
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && g("hidden")
                        } else g("hidden")
                    }, [n, b]);
                    let _ = {
                            unmount: l
                        },
                        R = (0, h.z)(() => {
                            var t;
                            y && w(!1), null == (t = e.beforeEnter) || t.call(e)
                        }),
                        F = (0, h.z)(() => {
                            var t;
                            y && w(!1), null == (t = e.beforeLeave) || t.call(e)
                        });
                    return i.createElement(S.Provider, {
                        value: b
                    }, i.createElement(E.Provider, {
                        value: O
                    }, (0, o.sY)({
                        ourProps: { ..._,
                            as: i.Fragment,
                            children: i.createElement(M, {
                                ref: m,
                                ..._,
                                ...s,
                                beforeEnter: R,
                                beforeLeave: F
                            })
                        },
                        theirProps: {},
                        defaultTag: i.Fragment,
                        features: C,
                        visible: "visible" === v,
                        name: "Transition"
                    })))
                }),
                M = (0, o.yV)(function(e, t) {
                    var n, r, w;
                    let P;
                    let {
                        beforeEnter: O,
                        afterEnter: R,
                        beforeLeave: M,
                        afterLeave: F,
                        enter: T,
                        enterFrom: A,
                        enterTo: N,
                        entered: k,
                        leave: j,
                        leaveFrom: D,
                        leaveTo: L,
                        ...z
                    } = e, U = (0, i.useRef)(null), H = (0, f.T)(U, t), V = null == (n = z.unmount) || n ? o.l4.Unmount : o.l4.Hidden, {
                        show: B,
                        appear: G,
                        initial: $
                    } = function() {
                        let e = (0, i.useContext)(E);
                        if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), [W, q] = (0, i.useState)(B ? "visible" : "hidden"), Y = function() {
                        let e = (0, i.useContext)(S);
                        if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), {
                        register: Z,
                        unregister: K
                    } = Y;
                    (0, i.useEffect)(() => Z(U), [Z, U]), (0, i.useEffect)(() => {
                        if (V === o.l4.Hidden && U.current) {
                            if (B && "visible" !== W) {
                                q("visible");
                                return
                            }
                            return (0, l.E)(W, {
                                hidden: () => K(U),
                                visible: () => Z(U)
                            })
                        }
                    }, [W, U, Z, K, B, V]);
                    let Q = (0, c.E)({
                            base: y(z.className),
                            enter: y(T),
                            enterFrom: y(A),
                            enterTo: y(N),
                            entered: y(k),
                            leave: y(j),
                            leaveFrom: y(D),
                            leaveTo: y(L)
                        }),
                        J = (w = {
                            beforeEnter: O,
                            afterEnter: R,
                            beforeLeave: M,
                            afterLeave: F
                        }, P = (0, i.useRef)(_(w)), (0, i.useEffect)(() => {
                            P.current = _(w)
                        }, [w]), P),
                        X = (0, d.H)();
                    (0, i.useEffect)(() => {
                        if (X && "visible" === W && null === U.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }, [U, W, X]);
                    let ee = G && B && $,
                        et = X && (!$ || G) ? B ? "enter" : "leave" : "idle",
                        en = function(e = 0) {
                            let [t, n] = (0, i.useState)(e), r = s(), o = (0, i.useCallback)(e => {
                                r.current && n(t => t | e)
                            }, [t, r]), u = (0, i.useCallback)(e => !!(t & e), [t]);
                            return {
                                flags: t,
                                addFlag: o,
                                hasFlag: u,
                                removeFlag: (0, i.useCallback)(e => {
                                    r.current && n(t => t & ~e)
                                }, [n, r]),
                                toggleFlag: (0, i.useCallback)(e => {
                                    r.current && n(t => t ^ e)
                                }, [n])
                            }
                        }(0),
                        er = (0, h.z)(e => (0, l.E)(e, {
                            enter: () => {
                                en.addFlag(u.ZM.Opening), J.current.beforeEnter()
                            },
                            leave: () => {
                                en.addFlag(u.ZM.Closing), J.current.beforeLeave()
                            },
                            idle: () => {}
                        })),
                        ei = (0, h.z)(e => (0, l.E)(e, {
                            enter: () => {
                                en.removeFlag(u.ZM.Opening), J.current.afterEnter()
                            },
                            leave: () => {
                                en.removeFlag(u.ZM.Closing), J.current.afterLeave()
                            },
                            idle: () => {}
                        })),
                        eo = I(() => {
                            q("hidden"), K(U)
                        }, Y);
                    ! function({
                        immediate: e,
                        container: t,
                        direction: n,
                        classes: r,
                        onStart: i,
                        onStop: o
                    }) {
                        let u = s(),
                            d = (0, g.G)(),
                            f = (0, c.E)(n);
                        (0, a.e)(() => {
                            e && (f.current = "enter")
                        }, [e]), (0, a.e)(() => {
                            let e = (0, m.k)();
                            d.add(e.dispose);
                            let n = t.current;
                            if (n && "idle" !== f.current && u.current) {
                                var a, s, c;
                                let t, u, d, g, h, b, y;
                                return e.dispose(), i.current(f.current), e.add((a = r.current, s = "enter" === f.current, c = () => {
                                    e.dispose(), o.current(f.current)
                                }, u = s ? "enter" : "leave", d = (0, m.k)(), g = void 0 !== c ? (t = {
                                    called: !1
                                }, (...e) => {
                                    if (!t.called) return t.called = !0, c(...e)
                                }) : () => {}, "enter" === u && (n.removeAttribute("hidden"), n.style.display = ""), h = (0, l.E)(u, {
                                    enter: () => a.enter,
                                    leave: () => a.leave
                                }), b = (0, l.E)(u, {
                                    enter: () => a.enterTo,
                                    leave: () => a.leaveTo
                                }), y = (0, l.E)(u, {
                                    enter: () => a.enterFrom,
                                    leave: () => a.leaveFrom
                                }), v(n, ...a.base, ...a.enter, ...a.enterTo, ...a.enterFrom, ...a.leave, ...a.leaveFrom, ...a.leaveTo, ...a.entered), p(n, ...a.base, ...h, ...y), d.nextFrame(() => {
                                    v(n, ...a.base, ...h, ...y), p(n, ...a.base, ...h, ...b),
                                        function(e, t) {
                                            let n = (0, m.k)();
                                            if (!e) return n.dispose;
                                            let {
                                                transitionDuration: r,
                                                transitionDelay: i
                                            } = getComputedStyle(e), [o, u] = [r, i].map(e => {
                                                let [t = 0] = e.split(",").filter(Boolean).map(e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e, t) => t - e);
                                                return t
                                            }), l = o + u;
                                            if (0 !== l) {
                                                n.group(n => {
                                                    n.setTimeout(() => {
                                                        t(), n.dispose()
                                                    }, l), n.addEventListener(e, "transitionrun", e => {
                                                        e.target === e.currentTarget && n.dispose()
                                                    })
                                                });
                                                let r = n.addEventListener(e, "transitionend", e => {
                                                    e.target === e.currentTarget && (t(), r())
                                                })
                                            } else t();
                                            n.add(() => t()), n.dispose
                                        }(n, () => (v(n, ...a.base, ...h), p(n, ...a.base, ...a.entered), g()))
                                }), d.dispose)), e.dispose
                            }
                        }, [n])
                    }({
                        immediate: ee,
                        container: U,
                        classes: Q,
                        direction: et,
                        onStart: (0, c.E)(e => {
                            eo.onStart(U, e, er)
                        }),
                        onStop: (0, c.E)(e => {
                            eo.onStop(U, e, ei), "leave" !== e || x(eo) || (q("hidden"), K(U))
                        })
                    });
                    let eu = z;
                    return ee ? eu = { ...eu,
                        className: (0, b.A)(z.className, ...Q.current.enter, ...Q.current.enterFrom)
                    } : (eu.className = (0, b.A)(z.className, null == (r = U.current) ? void 0 : r.className), "" === eu.className && delete eu.className), i.createElement(S.Provider, {
                        value: eo
                    }, i.createElement(u.up, {
                        value: (0, l.E)(W, {
                            visible: u.ZM.Open,
                            hidden: u.ZM.Closed
                        }) | en.flags
                    }, (0, o.sY)({
                        ourProps: {
                            ref: H
                        },
                        theirProps: eu,
                        defaultTag: "div",
                        features: C,
                        visible: "visible" === W,
                        name: "Transition.Child"
                    })))
                }),
                F = (0, o.yV)(function(e, t) {
                    let n = null !== (0, i.useContext)(E),
                        r = null !== (0, u.oJ)();
                    return i.createElement(i.Fragment, null, !n && r ? i.createElement(R, {
                        ref: t,
                        ...e
                    }) : i.createElement(M, {
                        ref: t,
                        ...e
                    }))
                }),
                T = Object.assign(R, {
                    Child: F,
                    Root: R
                })
        },
        814: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return o
                }
            });
            var r = n(9599),
                i = n(4807);

            function o() {
                let [e] = (0, r.useState)(i.k);
                return (0, r.useEffect)(() => () => e.dispose(), [e]), e
            }
        },
        8344: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return o
                }
            });
            var r = n(9599),
                i = n(9410);
            let o = function(e) {
                let t = (0, i.E)(e);
                return r.useCallback((...e) => t.current(...e), [t])
            }
        },
        4092: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return o
                }
            });
            var r = n(9599),
                i = n(2602);
            let o = (e, t) => {
                i.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
            }
        },
        9410: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return o
                }
            });
            var r = n(9599),
                i = n(4092);

            function o(e) {
                let t = (0, r.useRef)(e);
                return (0, i.e)(() => {
                    t.current = e
                }, [e]), t
            }
        },
        5853: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return u
                }
            });
            var r, i = n(9599),
                o = n(2602);

            function u() {
                let e;
                let t = (e = "undefined" == typeof document, (0, (r || (r = n.t(i, 2))).useSyncExternalStore)(() => () => {}, () => !1, () => !e)),
                    [u, l] = i.useState(o.O.isHandoffComplete);
                return u && !1 === o.O.isHandoffComplete && l(!1), i.useEffect(() => {
                    !0 !== u && l(!0)
                }, [u]), i.useEffect(() => o.O.handoff(), []), !t && u
            }
        },
        9809: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return u
                }
            });
            var r = n(9599),
                i = n(8344);
            let o = Symbol();

            function u(...e) {
                let t = (0, r.useRef)(e);
                (0, r.useEffect)(() => {
                    t.current = e
                }, [e]);
                let n = (0, i.z)(e => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
                });
                return e.every(e => null == e || (null == e ? void 0 : e[o])) ? void 0 : n
            }
        },
        7558: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZM: function() {
                    return u
                },
                oJ: function() {
                    return l
                },
                up: function() {
                    return a
                }
            });
            var r, i = n(9599);
            let o = (0, i.createContext)(null);
            o.displayName = "OpenClosedContext";
            var u = ((r = u || {})[r.Open = 1] = "Open", r[r.Closed = 2] = "Closed", r[r.Closing = 4] = "Closing", r[r.Opening = 8] = "Opening", r);

            function l() {
                return (0, i.useContext)(o)
            }

            function a({
                value: e,
                children: t
            }) {
                return i.createElement(o.Provider, {
                    value: e
                }, t)
            }
        },
        4746: function(e, t, n) {
            "use strict";

            function r(...e) {
                return Array.from(new Set(e.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
            }
            n.d(t, {
                A: function() {
                    return r
                }
            })
        },
        4807: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return function e() {
                        let t = [],
                            n = {
                                addEventListener: (e, t, r, i) => (e.addEventListener(t, r, i), n.add(() => e.removeEventListener(t, r, i))),
                                requestAnimationFrame(...e) {
                                    let t = requestAnimationFrame(...e);
                                    return n.add(() => cancelAnimationFrame(t))
                                },
                                nextFrame: (...e) => n.requestAnimationFrame(() => n.requestAnimationFrame(...e)),
                                setTimeout(...e) {
                                    let t = setTimeout(...e);
                                    return n.add(() => clearTimeout(t))
                                },
                                microTask(...e) {
                                    var t;
                                    let r = {
                                        current: !0
                                    };
                                    return t = () => {
                                        r.current && e[0]()
                                    }, "function" == typeof queueMicrotask ? queueMicrotask(t) : Promise.resolve().then(t).catch(e => setTimeout(() => {
                                        throw e
                                    })), n.add(() => {
                                        r.current = !1
                                    })
                                },
                                style(e, t, n) {
                                    let r = e.style.getPropertyValue(t);
                                    return Object.assign(e.style, {
                                        [t]: n
                                    }), this.add(() => {
                                        Object.assign(e.style, {
                                            [t]: r
                                        })
                                    })
                                },
                                group(t) {
                                    let n = e();
                                    return t(n), this.add(() => n.dispose())
                                },
                                add: e => (t.push(e), () => {
                                    let n = t.indexOf(e);
                                    if (n >= 0)
                                        for (let e of t.splice(n, 1)) e()
                                }),
                                dispose() {
                                    for (let e of t.splice(0)) e()
                                }
                            };
                        return n
                    }
                }
            })
        },
        2602: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return l
                }
            });
            var r = Object.defineProperty,
                i = (e, t, n) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                o = (e, t, n) => (i(e, "symbol" != typeof t ? t + "" : t, n), n);
            class u {
                constructor() {
                    o(this, "current", this.detect()), o(this, "handoffState", "pending"), o(this, "currentId", 0)
                }
                set(e) {
                    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
            }
            let l = new u
        },
        5120: function(e, t, n) {
            "use strict";

            function r(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let i = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(i, r), i
            }
            n.d(t, {
                E: function() {
                    return r
                }
            })
        },
        7702: function(e, t, n) {
            "use strict";
            n.d(t, {
                AN: function() {
                    return a
                },
                l4: function() {
                    return s
                },
                sY: function() {
                    return c
                },
                yV: function() {
                    return m
                }
            });
            var r, i, o = n(9599),
                u = n(4746),
                l = n(5120),
                a = ((r = a || {})[r.None = 0] = "None", r[r.RenderStrategy = 1] = "RenderStrategy", r[r.Static = 2] = "Static", r),
                s = ((i = s || {})[i.Unmount = 0] = "Unmount", i[i.Hidden = 1] = "Hidden", i);

            function c({
                ourProps: e,
                theirProps: t,
                slot: n,
                defaultTag: r,
                features: i,
                visible: o = !0,
                name: u
            }) {
                let a = f(t, e);
                if (o) return d(a, n, r, u);
                let s = null != i ? i : 0;
                if (2 & s) {
                    let {
                        static: e = !1,
                        ...t
                    } = a;
                    if (e) return d(t, n, r, u)
                }
                if (1 & s) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = a;
                    return (0, l.E)(e ? 0 : 1, {
                        0: () => null,
                        1: () => d({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, r, u)
                    })
                }
                return d(a, n, r, u)
            }

            function d(e, t = {}, n, r) {
                let {
                    as: i = n,
                    children: l,
                    refName: a = "ref",
                    ...s
                } = v(e, ["unmount", "static"]), c = void 0 !== e.ref ? {
                    [a]: e.ref
                } : {}, d = "function" == typeof l ? l(t) : l;
                "className" in s && s.className && "function" == typeof s.className && (s.className = s.className(t));
                let m = {};
                if (t) {
                    let e = !1,
                        n = [];
                    for (let [r, i] of Object.entries(t)) "boolean" == typeof i && (e = !0), !0 === i && n.push(r);
                    e && (m["data-headlessui-state"] = n.join(" "))
                }
                if (i === o.Fragment && Object.keys(p(s)).length > 0) {
                    if (!(0, o.isValidElement)(d) || Array.isArray(d) && d.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map(e => `  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`)].join(`
`));
                    let e = d.props,
                        t = "function" == typeof(null == e ? void 0 : e.className) ? (...t) => (0, u.A)(null == e ? void 0 : e.className(...t), s.className) : (0, u.A)(null == e ? void 0 : e.className, s.className);
                    return (0, o.cloneElement)(d, Object.assign({}, f(d.props, p(v(s, ["ref"]))), m, c, function(...e) {
                        return {
                            ref: e.every(e => null == e) ? void 0 : t => {
                                for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
                            }
                        }
                    }(d.ref, c.ref), t ? {
                        className: t
                    } : {}))
                }
                return (0, o.createElement)(i, Object.assign({}, v(s, ["ref"]), i !== o.Fragment && c, i !== o.Fragment && m), d)
            }

            function f(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e)
                    for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(e => [e, void 0])));
                for (let e in n) Object.assign(t, {
                    [e](t, ...r) {
                        for (let i of n[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            i(t, ...r)
                        }
                    }
                });
                return t
            }

            function m(e) {
                var t;
                return Object.assign((0, o.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function p(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function v(e, t = []) {
                let n = Object.assign({}, e);
                for (let e of t) e in n && delete n[e];
                return n
            }
        },
        3073: function(e, t, n) {
            "use strict";
            n.d(t, {
                YD: function() {
                    return s
                }
            });
            var r = n(9599),
                i = Object.defineProperty,
                o = new Map,
                u = new WeakMap,
                l = 0,
                a = void 0;

            function s({
                threshold: e,
                delay: t,
                trackVisibility: n,
                rootMargin: i,
                root: s,
                triggerOnce: c,
                skip: d,
                initialInView: f,
                fallbackInView: m,
                onChange: p
            } = {}) {
                var v;
                let [g, h] = r.useState(null), b = r.useRef(), [y, E] = r.useState({
                    inView: !!f,
                    entry: void 0
                });
                b.current = p, r.useEffect(() => {
                    let r;
                    if (!d && g) return r = function(e, t, n = {}, r = a) {
                        if (void 0 === window.IntersectionObserver && void 0 !== r) {
                            let i = e.getBoundingClientRect();
                            return t(r, {
                                isIntersecting: r,
                                target: e,
                                intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
                                time: 0,
                                boundingClientRect: i,
                                intersectionRect: i,
                                rootBounds: i
                            }), () => {}
                        }
                        let {
                            id: i,
                            observer: s,
                            elements: c
                        } = function(e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                    var n;
                                    return `${t}_${"root"===t?(n=e.root)?(u.has(n)||(l+=1,u.set(n,l.toString())),u.get(n)):"0":e[t]}`
                                }).toString(),
                                n = o.get(t);
                            if (!n) {
                                let r;
                                let i = new Map,
                                    u = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var n;
                                            let o = t.isIntersecting && r.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o), null == (n = i.get(t.target)) || n.forEach(e => {
                                                e(o, t)
                                            })
                                        })
                                    }, e);
                                r = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                                    id: t,
                                    observer: u,
                                    elements: i
                                }, o.set(t, n)
                            }
                            return n
                        }(n), d = c.get(e) || [];
                        return c.has(e) || c.set(e, d), d.push(t), s.observe(e),
                            function() {
                                d.splice(d.indexOf(t), 1), 0 === d.length && (c.delete(e), s.unobserve(e)), 0 === c.size && (s.disconnect(), o.delete(i))
                            }
                    }(g, (e, t) => {
                        E({
                            inView: e,
                            entry: t
                        }), b.current && b.current(e, t), t.isIntersecting && c && r && (r(), r = void 0)
                    }, {
                        root: s,
                        rootMargin: i,
                        threshold: e,
                        trackVisibility: n,
                        delay: t
                    }, m), () => {
                        r && r()
                    }
                }, [Array.isArray(e) ? e.toString() : e, g, s, i, c, d, n, m, t]);
                let w = null == (v = y.entry) ? void 0 : v.target,
                    S = r.useRef();
                g || !w || c || d || S.current === w || (S.current = w, E({
                    inView: !!f,
                    entry: void 0
                }));
                let x = [h, y.inView, y.entry];
                return x.ref = x[0], x.inView = x[1], x.entry = x[2], x
            }
            r.Component
        }
    }
]);