(() => {
  var e = {
      682: (e, n, t) => {
        "use strict";
        t.d(n, { Z: () => i });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          ".title {\n  background-color: blue;\n  text-decoration: underline;\n}\n",
          "",
        ]);
        const i = o;
      },
      984: (e, n, t) => {
        "use strict";
        t.d(n, { Z: () => l });
        var r = t(645),
          o = t.n(r),
          i = t(667),
          a = t.n(i),
          c = t(205),
          s = o()(function (e) {
            return e[1];
          }),
          u = a()(c.Z);
        s.push([
          e.id,
          ".image-bg {\r\n\tbackground-image: url(" +
            u +
            ");\r\n\twidth: 200px;\r\n\theight: 200px;\r\n\tbackground-size: contain;\r\n}\r\n\r\n/* 为了让图片可以打包，我们要让它有联系 */\r\n/* \r\n 这时候我们会发现报错，这是因为我们没有对图片文件进行解析的loader\r\n 我们安装一个file-loader，再对它进行配置\r\n */",
          "",
        ]);
        const l = s;
      },
      390: (e, n, t) => {
        "use strict";
        t.d(n, { Z: () => i });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          ".title {\r\n  color: rgba(18,52,86,0.47059);\r\n  font-weight: 700;\r\n  font-size: 30px;\r\n\r\n  -webkit-user-select: none;\r\n\r\n     -moz-user-select: none;\r\n\r\n      -ms-user-select: none;\r\n\r\n          user-select: none;\r\n}",
          "",
        ]);
        const i = o;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = e(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
              }).join("");
            }),
            (n.i = function (e, t, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var o = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (o[a] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var s = [].concat(e[c]);
                (r && o[s[0]]) ||
                  (t &&
                    (s[2]
                      ? (s[2] = "".concat(t, " and ").concat(s[2]))
                      : (s[2] = t)),
                  n.push(s));
              }
            }),
            n
          );
        };
      },
      667: (e) => {
        "use strict";
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            "string" != typeof (e = e && e.__esModule ? e.default : e)
              ? e
              : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
          );
        };
      },
      205: (e, n, t) => {
        "use strict";
        t.d(n, { Z: () => r });
        const r = t.p + "06dedfb4ca6fc17e0b559c076504c435.jpg";
      },
      379: (e, n, t) => {
        "use strict";
        var r,
          o = (function () {
            var e = {};
            return function (n) {
              if (void 0 === e[n]) {
                var t = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (e) {
                    t = null;
                  }
                e[n] = t;
              }
              return e[n];
            };
          })(),
          i = [];
        function a(e) {
          for (var n = -1, t = 0; t < i.length; t++)
            if (i[t].identifier === e) {
              n = t;
              break;
            }
          return n;
        }
        function c(e, n) {
          for (var t = {}, r = [], o = 0; o < e.length; o++) {
            var c = e[o],
              s = n.base ? c[0] + n.base : c[0],
              u = t[s] || 0,
              l = "".concat(s, " ").concat(u);
            t[s] = u + 1;
            var d = a(l),
              f = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== d
              ? (i[d].references++, i[d].updater(f))
              : i.push({ identifier: l, updater: v(f, n), references: 1 }),
              r.push(l);
          }
          return r;
        }
        function s(e) {
          var n = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var i = t.nc;
            i && (r.nonce = i);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              n.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(n);
          else {
            var a = o(e.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(n);
          }
          return n;
        }
        var u,
          l =
            ((u = []),
            function (e, n) {
              return (u[e] = n), u.filter(Boolean).join("\n");
            });
        function d(e, n, t, r) {
          var o = t
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = l(n, o);
          else {
            var i = document.createTextNode(o),
              a = e.childNodes;
            a[n] && e.removeChild(a[n]),
              a.length ? e.insertBefore(i, a[n]) : e.appendChild(i);
          }
        }
        function f(e, n, t) {
          var r = t.css,
            o = t.media,
            i = t.sourceMap;
          if (
            (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
            i &&
              "undefined" != typeof btoa &&
              (r +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                  " */"
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var p = null,
          h = 0;
        function v(e, n) {
          var t, r, o;
          if (n.singleton) {
            var i = h++;
            (t = p || (p = s(n))),
              (r = d.bind(null, t, i, !1)),
              (o = d.bind(null, t, i, !0));
          } else
            (t = s(n)),
              (r = f.bind(null, t, n)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              });
          return (
            r(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                r((e = n));
              } else o();
            }
          );
        }
        e.exports = function (e, n) {
          (n = n || {}).singleton ||
            "boolean" == typeof n.singleton ||
            (n.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var t = c((e = e || []), n);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < t.length; r++) {
                var o = a(t[r]);
                i[o].references--;
              }
              for (var s = c(e, n), u = 0; u < t.length; u++) {
                var l = a(t[u]);
                0 === i[l].references && (i[l].updater(), i.splice(l, 1));
              }
              t = s;
            }
          };
        };
      },
      466: (e) => {
        e.exports = {
          priceFormat: function () {
            return "￥99.88";
          },
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { id: r, exports: {} });
    return e[r](i, i.exports, t), i.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.p = "/"),
    (() => {
      "use strict";
      var e = t(379),
        n = t.n(e),
        r = t(682);
      n()(r.Z, { insert: "head", singleton: !1 }), r.Z.locals;
      var o = t(984);
      n()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals;
      const i = document.createElement("div");
      (i.className = "title"), (i.innerHTML = "你好啊，李银河");
      const a = document.createElement("div");
      a.className = "image-bg";
      const c = document.createElement("img");
      (c.src = "../img/zznh.png"),
        document.body.appendChild(i),
        document.body.appendChild(a),
        document.body.appendChild(c);
      var s = t(390);
      n()(s.Z, { insert: "head", singleton: !1 }), s.Z.locals;
      const { priceFormat: u } = t(466);
      console.log(50), console.log(u());
    })();
})();
