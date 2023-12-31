/*! For license information please see tutorialv1.6842716d8378466c6ca4.js.LICENSE.txt */
(() => {
  var t,
    e,
    r,
    n,
    o,
    i,
    c,
    a = {
      9282: (t, e, r) => {
        "use strict";
        var n = r(4155),
          o = r(5108);
        function i(t) {
          return (
            (i =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            i(t)
          );
        }
        var c,
          a,
          u = r(2136).codes,
          l = u.ERR_AMBIGUOUS_ARGUMENT,
          s = u.ERR_INVALID_ARG_TYPE,
          f = u.ERR_INVALID_ARG_VALUE,
          p = u.ERR_INVALID_RETURN_VALUE,
          d = u.ERR_MISSING_ARGS,
          y = r(5961),
          h = r(9539).inspect,
          g = r(9539).types,
          b = g.isPromise,
          m = g.isRegExp,
          v = Object.assign ? Object.assign : r(8091).assign,
          w = Object.is ? Object.is : r(609);
        function E() {
          var t = r(9158);
          (c = t.isDeepEqual), (a = t.isDeepStrictEqual);
        }
        new Map();
        var j = !1,
          S = (t.exports = k),
          O = {};
        function A(t) {
          if (t.message instanceof Error) throw t.message;
          throw new y(t);
        }
        function x(t, e, r, n) {
          if (!r) {
            var o = !1;
            if (0 === e)
              (o = !0), (n = "No value argument passed to `assert.ok()`");
            else if (n instanceof Error) throw n;
            var i = new y({
              actual: r,
              expected: !0,
              message: n,
              operator: "==",
              stackStartFn: t,
            });
            throw ((i.generatedMessage = o), i);
          }
        }
        function k() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          x.apply(void 0, [k, e.length].concat(e));
        }
        (S.fail = function t(e, r, i, c, a) {
          var u,
            l = arguments.length;
          if (0 === l) u = "Failed";
          else if (1 === l) (i = e), (e = void 0);
          else {
            if (!1 === j) {
              j = !0;
              var s = n.emitWarning ? n.emitWarning : o.warn.bind(o);
              s(
                "assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.",
                "DeprecationWarning",
                "DEP0094"
              );
            }
            2 === l && (c = "!=");
          }
          if (i instanceof Error) throw i;
          var f = {
            actual: e,
            expected: r,
            operator: void 0 === c ? "fail" : c,
            stackStartFn: a || t,
          };
          void 0 !== i && (f.message = i);
          var p = new y(f);
          throw (u && ((p.message = u), (p.generatedMessage = !0)), p);
        }),
          (S.AssertionError = y),
          (S.ok = k),
          (S.equal = function t(e, r, n) {
            if (arguments.length < 2) throw new d("actual", "expected");
            e != r &&
              A({
                actual: e,
                expected: r,
                message: n,
                operator: "==",
                stackStartFn: t,
              });
          }),
          (S.notEqual = function t(e, r, n) {
            if (arguments.length < 2) throw new d("actual", "expected");
            e == r &&
              A({
                actual: e,
                expected: r,
                message: n,
                operator: "!=",
                stackStartFn: t,
              });
          }),
          (S.deepEqual = function t(e, r, n) {
            if (arguments.length < 2) throw new d("actual", "expected");
            void 0 === c && E(),
              c(e, r) ||
                A({
                  actual: e,
                  expected: r,
                  message: n,
                  operator: "deepEqual",
                  stackStartFn: t,
                });
          }),
          (S.notDeepEqual = function t(e, r, n) {
            if (arguments.length < 2) throw new d("actual", "expected");
            void 0 === c && E(),
              c(e, r) &&
                A({
                  actual: e,
                  expected: r,
                  message: n,
                  operator: "notDeepEqual",
                  stackStartFn: t,
                });
          }),
          (S.deepStrictEqual = function t(e, r, n) {
            if (arguments.length < 2) throw new d("actual", "expected");
            void 0 === c && E(),
              a(e, r) ||
                A({
                  actual: e,
                  expected: r,
                  message: n,
                  operator: "deepStrictEqual",
                  stackStartFn: t,
                });
          }),
          (S.notDeepStrictEqual = function t(e, r, n) {
            if (arguments.length < 2) throw new d("actual", "expected");
            void 0 === c && E(),
              a(e, r) &&
                A({
                  actual: e,
                  expected: r,
                  message: n,
                  operator: "notDeepStrictEqual",
                  stackStartFn: t,
                });
          }),
          (S.strictEqual = function t(e, r, n) {
            if (arguments.length < 2) throw new d("actual", "expected");
            w(e, r) ||
              A({
                actual: e,
                expected: r,
                message: n,
                operator: "strictEqual",
                stackStartFn: t,
              });
          }),
          (S.notStrictEqual = function t(e, r, n) {
            if (arguments.length < 2) throw new d("actual", "expected");
            w(e, r) &&
              A({
                actual: e,
                expected: r,
                message: n,
                operator: "notStrictEqual",
                stackStartFn: t,
              });
          });
        var P = function t(e, r, n) {
          var o = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            r.forEach(function (t) {
              t in e &&
                (void 0 !== n &&
                "string" == typeof n[t] &&
                m(e[t]) &&
                e[t].test(n[t])
                  ? (o[t] = n[t])
                  : (o[t] = e[t]));
            });
        };
        function _(t, e, r, n, o, i) {
          if (!(r in t) || !a(t[r], e[r])) {
            if (!n) {
              var c = new P(t, o),
                u = new P(e, o, t),
                l = new y({
                  actual: c,
                  expected: u,
                  operator: "deepStrictEqual",
                  stackStartFn: i,
                });
              throw (
                ((l.actual = t), (l.expected = e), (l.operator = i.name), l)
              );
            }
            A({
              actual: t,
              expected: e,
              message: n,
              operator: i.name,
              stackStartFn: i,
            });
          }
        }
        function $(t, e, r, n) {
          if ("function" != typeof e) {
            if (m(e)) return e.test(t);
            if (2 === arguments.length)
              throw new s("expected", ["Function", "RegExp"], e);
            if ("object" !== i(t) || null === t) {
              var o = new y({
                actual: t,
                expected: e,
                message: r,
                operator: "deepStrictEqual",
                stackStartFn: n,
              });
              throw ((o.operator = n.name), o);
            }
            var a = Object.keys(e);
            if (e instanceof Error) a.push("name", "message");
            else if (0 === a.length)
              throw new f("error", e, "may not be an empty object");
            return (
              void 0 === c && E(),
              a.forEach(function (o) {
                ("string" == typeof t[o] && m(e[o]) && e[o].test(t[o])) ||
                  _(t, e, o, r, a, n);
              }),
              !0
            );
          }
          return (
            (void 0 !== e.prototype && t instanceof e) ||
            (!Error.isPrototypeOf(e) && !0 === e.call({}, t))
          );
        }
        function T(t) {
          if ("function" != typeof t) throw new s("fn", "Function", t);
          try {
            t();
          } catch (t) {
            return t;
          }
          return O;
        }
        function I(t) {
          return (
            b(t) ||
            (null !== t &&
              "object" === i(t) &&
              "function" == typeof t.then &&
              "function" == typeof t.catch)
          );
        }
        function R(t) {
          return Promise.resolve().then(function () {
            var e;
            if ("function" == typeof t) {
              if (!I((e = t())))
                throw new p("instance of Promise", "promiseFn", e);
            } else {
              if (!I(t)) throw new s("promiseFn", ["Function", "Promise"], t);
              e = t;
            }
            return Promise.resolve()
              .then(function () {
                return e;
              })
              .then(function () {
                return O;
              })
              .catch(function (t) {
                return t;
              });
          });
        }
        function F(t, e, r, n) {
          if ("string" == typeof r) {
            if (4 === arguments.length)
              throw new s(
                "error",
                ["Object", "Error", "Function", "RegExp"],
                r
              );
            if ("object" === i(e) && null !== e) {
              if (e.message === r)
                throw new l(
                  "error/message",
                  'The error message "'.concat(
                    e.message,
                    '" is identical to the message.'
                  )
                );
            } else if (e === r)
              throw new l(
                "error/message",
                'The error "'.concat(e, '" is identical to the message.')
              );
            (n = r), (r = void 0);
          } else if (null != r && "object" !== i(r) && "function" != typeof r)
            throw new s("error", ["Object", "Error", "Function", "RegExp"], r);
          if (e === O) {
            var o = "";
            r && r.name && (o += " (".concat(r.name, ")")),
              (o += n ? ": ".concat(n) : ".");
            var c = "rejects" === t.name ? "rejection" : "exception";
            A({
              actual: void 0,
              expected: r,
              operator: t.name,
              message: "Missing expected ".concat(c).concat(o),
              stackStartFn: t,
            });
          }
          if (r && !$(e, r, n, t)) throw e;
        }
        function N(t, e, r, n) {
          if (e !== O) {
            if (
              ("string" == typeof r && ((n = r), (r = void 0)), !r || $(e, r))
            ) {
              var o = n ? ": ".concat(n) : ".",
                i = "doesNotReject" === t.name ? "rejection" : "exception";
              A({
                actual: e,
                expected: r,
                operator: t.name,
                message:
                  "Got unwanted ".concat(i).concat(o, "\n") +
                  'Actual message: "'.concat(e && e.message, '"'),
                stackStartFn: t,
              });
            }
            throw e;
          }
        }
        function D() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          x.apply(void 0, [D, e.length].concat(e));
        }
        (S.throws = function t(e) {
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            n[o - 1] = arguments[o];
          F.apply(void 0, [t, T(e)].concat(n));
        }),
          (S.rejects = function t(e) {
            for (
              var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1;
              o < r;
              o++
            )
              n[o - 1] = arguments[o];
            return R(e).then(function (e) {
              return F.apply(void 0, [t, e].concat(n));
            });
          }),
          (S.doesNotThrow = function t(e) {
            for (
              var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1;
              o < r;
              o++
            )
              n[o - 1] = arguments[o];
            N.apply(void 0, [t, T(e)].concat(n));
          }),
          (S.doesNotReject = function t(e) {
            for (
              var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1;
              o < r;
              o++
            )
              n[o - 1] = arguments[o];
            return R(e).then(function (e) {
              return N.apply(void 0, [t, e].concat(n));
            });
          }),
          (S.ifError = function t(e) {
            if (null != e) {
              var r = "ifError got unwanted exception: ";
              "object" === i(e) && "string" == typeof e.message
                ? 0 === e.message.length && e.constructor
                  ? (r += e.constructor.name)
                  : (r += e.message)
                : (r += h(e));
              var n = new y({
                  actual: e,
                  expected: null,
                  operator: "ifError",
                  message: r,
                  stackStartFn: t,
                }),
                o = e.stack;
              if ("string" == typeof o) {
                var c = o.split("\n");
                c.shift();
                for (var a = n.stack.split("\n"), u = 0; u < c.length; u++) {
                  var l = a.indexOf(c[u]);
                  if (-1 !== l) {
                    a = a.slice(0, l);
                    break;
                  }
                }
                n.stack = "".concat(a.join("\n"), "\n").concat(c.join("\n"));
              }
              throw n;
            }
          }),
          (S.strict = v(D, S, {
            equal: S.strictEqual,
            deepEqual: S.deepStrictEqual,
            notEqual: S.notStrictEqual,
            notDeepEqual: S.notDeepStrictEqual,
          })),
          (S.strict.strict = S.strict);
      },
      5961: (t, e, r) => {
        "use strict";
        var n = r(4155);
        function o(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function i(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        function c(t, e) {
          return !e || ("object" !== d(e) && "function" != typeof e) ? a(t) : e;
        }
        function a(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function u(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (u = function (t) {
              if (
                null === t ||
                ((r = t),
                -1 === Function.toString.call(r).indexOf("[native code]"))
              )
                return t;
              var r;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return s(t, arguments, p(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                f(n, t)
              );
            }),
            u(t)
          );
        }
        function l() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function s(t, e, r) {
          return (
            (s = l()
              ? Reflect.construct
              : function (t, e, r) {
                  var n = [null];
                  n.push.apply(n, e);
                  var o = new (Function.bind.apply(t, n))();
                  return r && f(o, r.prototype), o;
                }),
            s.apply(null, arguments)
          );
        }
        function f(t, e) {
          return (
            (f =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              }),
            f(t, e)
          );
        }
        function p(t) {
          return (
            (p = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            p(t)
          );
        }
        function d(t) {
          return (
            (d =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            d(t)
          );
        }
        var y = r(9539).inspect,
          h = r(2136).codes.ERR_INVALID_ARG_TYPE;
        function g(t, e, r) {
          return (
            (void 0 === r || r > t.length) && (r = t.length),
            t.substring(r - e.length, r) === e
          );
        }
        var b = "",
          m = "",
          v = "",
          w = "",
          E = {
            deepStrictEqual: "Expected values to be strictly deep-equal:",
            strictEqual: "Expected values to be strictly equal:",
            strictEqualObject:
              'Expected "actual" to be reference-equal to "expected":',
            deepEqual: "Expected values to be loosely deep-equal:",
            equal: "Expected values to be loosely equal:",
            notDeepStrictEqual:
              'Expected "actual" not to be strictly deep-equal to:',
            notStrictEqual: 'Expected "actual" to be strictly unequal to:',
            notStrictEqualObject:
              'Expected "actual" not to be reference-equal to "expected":',
            notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
            notEqual: 'Expected "actual" to be loosely unequal to:',
            notIdentical: "Values identical but not reference-equal:",
          };
        function j(t) {
          var e = Object.keys(t),
            r = Object.create(Object.getPrototypeOf(t));
          return (
            e.forEach(function (e) {
              r[e] = t[e];
            }),
            Object.defineProperty(r, "message", { value: t.message }),
            r
          );
        }
        function S(t) {
          return y(t, {
            compact: !1,
            customInspect: !1,
            depth: 1e3,
            maxArrayLength: 1 / 0,
            showHidden: !1,
            breakLength: 1 / 0,
            showProxy: !1,
            sorted: !0,
            getters: !0,
          });
        }
        var O = (function (t) {
          function e(t) {
            var r;
            if (
              ((function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              "object" !== d(t) || null === t)
            )
              throw new h("options", "Object", t);
            var o = t.message,
              i = t.operator,
              u = t.stackStartFn,
              l = t.actual,
              s = t.expected,
              f = Error.stackTraceLimit;
            if (((Error.stackTraceLimit = 0), null != o))
              r = c(this, p(e).call(this, String(o)));
            else if (
              (n.stderr &&
                n.stderr.isTTY &&
                (n.stderr &&
                n.stderr.getColorDepth &&
                1 !== n.stderr.getColorDepth()
                  ? ((b = "[34m"), (m = "[32m"), (w = "[39m"), (v = "[31m"))
                  : ((b = ""), (m = ""), (w = ""), (v = ""))),
              "object" === d(l) &&
                null !== l &&
                "object" === d(s) &&
                null !== s &&
                "stack" in l &&
                l instanceof Error &&
                "stack" in s &&
                s instanceof Error &&
                ((l = j(l)), (s = j(s))),
              "deepStrictEqual" === i || "strictEqual" === i)
            )
              r = c(
                this,
                p(e).call(
                  this,
                  (function (t, e, r) {
                    var o = "",
                      i = "",
                      c = 0,
                      a = "",
                      u = !1,
                      l = S(t),
                      s = l.split("\n"),
                      f = S(e).split("\n"),
                      p = 0,
                      y = "";
                    if (
                      ("strictEqual" === r &&
                        "object" === d(t) &&
                        "object" === d(e) &&
                        null !== t &&
                        null !== e &&
                        (r = "strictEqualObject"),
                      1 === s.length && 1 === f.length && s[0] !== f[0])
                    ) {
                      var h = s[0].length + f[0].length;
                      if (h <= 10) {
                        if (
                          !(
                            ("object" === d(t) && null !== t) ||
                            ("object" === d(e) && null !== e) ||
                            (0 === t && 0 === e)
                          )
                        )
                          return (
                            "".concat(E[r], "\n\n") +
                            "".concat(s[0], " !== ").concat(f[0], "\n")
                          );
                      } else if (
                        "strictEqualObject" !== r &&
                        h < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)
                      ) {
                        for (; s[0][p] === f[0][p]; ) p++;
                        p > 2 &&
                          ((y = "\n  ".concat(
                            (function (t, e) {
                              if (
                                ((e = Math.floor(e)), 0 == t.length || 0 == e)
                              )
                                return "";
                              var r = t.length * e;
                              for (
                                e = Math.floor(Math.log(e) / Math.log(2));
                                e;

                              )
                                (t += t), e--;
                              return t + t.substring(0, r - t.length);
                            })(" ", p),
                            "^"
                          )),
                          (p = 0));
                      }
                    }
                    for (
                      var j = s[s.length - 1], O = f[f.length - 1];
                      j === O &&
                      (p++ < 2 ? (a = "\n  ".concat(j).concat(a)) : (o = j),
                      s.pop(),
                      f.pop(),
                      0 !== s.length && 0 !== f.length);

                    )
                      (j = s[s.length - 1]), (O = f[f.length - 1]);
                    var A = Math.max(s.length, f.length);
                    if (0 === A) {
                      var x = l.split("\n");
                      if (x.length > 30)
                        for (
                          x[26] = "".concat(b, "...").concat(w);
                          x.length > 27;

                        )
                          x.pop();
                      return ""
                        .concat(E.notIdentical, "\n\n")
                        .concat(x.join("\n"), "\n");
                    }
                    p > 3 &&
                      ((a = "\n".concat(b, "...").concat(w).concat(a)),
                      (u = !0)),
                      "" !== o && ((a = "\n  ".concat(o).concat(a)), (o = ""));
                    var k = 0,
                      P =
                        E[r] +
                        "\n"
                          .concat(m, "+ actual")
                          .concat(w, " ")
                          .concat(v, "- expected")
                          .concat(w),
                      _ = " ".concat(b, "...").concat(w, " Lines skipped");
                    for (p = 0; p < A; p++) {
                      var $ = p - c;
                      if (s.length < p + 1)
                        $ > 1 &&
                          p > 2 &&
                          ($ > 4
                            ? ((i += "\n".concat(b, "...").concat(w)), (u = !0))
                            : $ > 3 && ((i += "\n  ".concat(f[p - 2])), k++),
                          (i += "\n  ".concat(f[p - 1])),
                          k++),
                          (c = p),
                          (o += "\n"
                            .concat(v, "-")
                            .concat(w, " ")
                            .concat(f[p])),
                          k++;
                      else if (f.length < p + 1)
                        $ > 1 &&
                          p > 2 &&
                          ($ > 4
                            ? ((i += "\n".concat(b, "...").concat(w)), (u = !0))
                            : $ > 3 && ((i += "\n  ".concat(s[p - 2])), k++),
                          (i += "\n  ".concat(s[p - 1])),
                          k++),
                          (c = p),
                          (i += "\n"
                            .concat(m, "+")
                            .concat(w, " ")
                            .concat(s[p])),
                          k++;
                      else {
                        var T = f[p],
                          I = s[p],
                          R = I !== T && (!g(I, ",") || I.slice(0, -1) !== T);
                        R &&
                          g(T, ",") &&
                          T.slice(0, -1) === I &&
                          ((R = !1), (I += ",")),
                          R
                            ? ($ > 1 &&
                                p > 2 &&
                                ($ > 4
                                  ? ((i += "\n".concat(b, "...").concat(w)),
                                    (u = !0))
                                  : $ > 3 &&
                                    ((i += "\n  ".concat(s[p - 2])), k++),
                                (i += "\n  ".concat(s[p - 1])),
                                k++),
                              (c = p),
                              (i += "\n"
                                .concat(m, "+")
                                .concat(w, " ")
                                .concat(I)),
                              (o += "\n"
                                .concat(v, "-")
                                .concat(w, " ")
                                .concat(T)),
                              (k += 2))
                            : ((i += o),
                              (o = ""),
                              (1 !== $ && 0 !== p) ||
                                ((i += "\n  ".concat(I)), k++));
                      }
                      if (k > 20 && p < A - 2)
                        return (
                          ""
                            .concat(P)
                            .concat(_, "\n")
                            .concat(i, "\n")
                            .concat(b, "...")
                            .concat(w)
                            .concat(o, "\n") + "".concat(b, "...").concat(w)
                        );
                    }
                    return ""
                      .concat(P)
                      .concat(u ? _ : "", "\n")
                      .concat(i)
                      .concat(o)
                      .concat(a)
                      .concat(y);
                  })(l, s, i)
                )
              );
            else if ("notDeepStrictEqual" === i || "notStrictEqual" === i) {
              var y = E[i],
                O = S(l).split("\n");
              if (
                ("notStrictEqual" === i &&
                  "object" === d(l) &&
                  null !== l &&
                  (y = E.notStrictEqualObject),
                O.length > 30)
              )
                for (O[26] = "".concat(b, "...").concat(w); O.length > 27; )
                  O.pop();
              r =
                1 === O.length
                  ? c(this, p(e).call(this, "".concat(y, " ").concat(O[0])))
                  : c(
                      this,
                      p(e).call(
                        this,
                        "".concat(y, "\n\n").concat(O.join("\n"), "\n")
                      )
                    );
            } else {
              var A = S(l),
                x = "",
                k = E[i];
              "notDeepEqual" === i || "notEqual" === i
                ? (A = "".concat(E[i], "\n\n").concat(A)).length > 1024 &&
                  (A = "".concat(A.slice(0, 1021), "..."))
                : ((x = "".concat(S(s))),
                  A.length > 512 && (A = "".concat(A.slice(0, 509), "...")),
                  x.length > 512 && (x = "".concat(x.slice(0, 509), "...")),
                  "deepEqual" === i || "equal" === i
                    ? (A = ""
                        .concat(k, "\n\n")
                        .concat(A, "\n\nshould equal\n\n"))
                    : (x = " ".concat(i, " ").concat(x))),
                (r = c(this, p(e).call(this, "".concat(A).concat(x))));
            }
            return (
              (Error.stackTraceLimit = f),
              (r.generatedMessage = !o),
              Object.defineProperty(a(r), "name", {
                value: "AssertionError [ERR_ASSERTION]",
                enumerable: !1,
                writable: !0,
                configurable: !0,
              }),
              (r.code = "ERR_ASSERTION"),
              (r.actual = l),
              (r.expected = s),
              (r.operator = i),
              Error.captureStackTrace && Error.captureStackTrace(a(r), u),
              r.stack,
              (r.name = "AssertionError"),
              c(r)
            );
          }
          var r, u;
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && f(t, e);
            })(e, t),
            (r = e),
            (u = [
              {
                key: "toString",
                value: function () {
                  return ""
                    .concat(this.name, " [")
                    .concat(this.code, "]: ")
                    .concat(this.message);
                },
              },
              {
                key: y.custom,
                value: function (t, e) {
                  return y(
                    this,
                    (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {},
                          n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (
                              t
                            ) {
                              return Object.getOwnPropertyDescriptor(r, t)
                                .enumerable;
                            })
                          )),
                          n.forEach(function (e) {
                            o(t, e, r[e]);
                          });
                      }
                      return t;
                    })({}, e, { customInspect: !1, depth: 0 })
                  );
                },
              },
            ]),
            u && i(r.prototype, u),
            e
          );
        })(u(Error));
        t.exports = O;
      },
      2136: (t, e, r) => {
        "use strict";
        function n(t) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            n(t)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        function i(t, e) {
          return (
            (i =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              }),
            i(t, e)
          );
        }
        var c,
          a,
          u = {};
        function l(t, e, r) {
          r || (r = Error);
          var c = (function (r) {
            function c(r, i, a) {
              var u;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, c),
                (u = (function (t, e) {
                  return !e || ("object" !== n(e) && "function" != typeof e)
                    ? (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return t;
                      })(t)
                    : e;
                })(
                  this,
                  o(c).call(
                    this,
                    (function (t, r, n) {
                      return "string" == typeof e ? e : e(t, r, n);
                    })(r, i, a)
                  )
                )),
                (u.code = t),
                u
              );
            }
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  e && i(t, e);
              })(c, r),
              c
            );
          })(r);
          u[t] = c;
        }
        function s(t, e) {
          if (Array.isArray(t)) {
            var r = t.length;
            return (
              (t = t.map(function (t) {
                return String(t);
              })),
              r > 2
                ? "one of "
                    .concat(e, " ")
                    .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
                : 2 === r
                ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
                : "of ".concat(e, " ").concat(t[0])
            );
          }
          return "of ".concat(e, " ").concat(String(t));
        }
        l(
          "ERR_AMBIGUOUS_ARGUMENT",
          'The "%s" argument is ambiguous. %s',
          TypeError
        ),
          l(
            "ERR_INVALID_ARG_TYPE",
            function (t, e, o) {
              var i, a, u, l, f;
              if (
                (void 0 === c && (c = r(9282)),
                c("string" == typeof t, "'name' must be a string"),
                "string" == typeof e &&
                ((a = "not "), e.substr(0, a.length) === a)
                  ? ((i = "must not be"), (e = e.replace(/^not /, "")))
                  : (i = "must be"),
                (function (t, e, r) {
                  return (
                    (void 0 === r || r > t.length) && (r = t.length),
                    t.substring(r - e.length, r) === e
                  );
                })(t, " argument"))
              )
                u = "The ".concat(t, " ").concat(i, " ").concat(s(e, "type"));
              else {
                var p =
                  ("number" != typeof f && (f = 0),
                  f + ".".length > (l = t).length || -1 === l.indexOf(".", f)
                    ? "argument"
                    : "property");
                u = 'The "'
                  .concat(t, '" ')
                  .concat(p, " ")
                  .concat(i, " ")
                  .concat(s(e, "type"));
              }
              return u + ". Received type ".concat(n(o));
            },
            TypeError
          ),
          l(
            "ERR_INVALID_ARG_VALUE",
            function (t, e) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "is invalid";
              void 0 === a && (a = r(9539));
              var o = a.inspect(e);
              return (
                o.length > 128 && (o = "".concat(o.slice(0, 128), "...")),
                "The argument '"
                  .concat(t, "' ")
                  .concat(n, ". Received ")
                  .concat(o)
              );
            },
            TypeError,
            RangeError
          ),
          l(
            "ERR_INVALID_RETURN_VALUE",
            function (t, e, r) {
              var o;
              return (
                (o =
                  r && r.constructor && r.constructor.name
                    ? "instance of ".concat(r.constructor.name)
                    : "type ".concat(n(r))),
                "Expected "
                  .concat(t, ' to be returned from the "')
                  .concat(e, '"') + " function but got ".concat(o, ".")
              );
            },
            TypeError
          ),
          l(
            "ERR_MISSING_ARGS",
            function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              void 0 === c && (c = r(9282)),
                c(e.length > 0, "At least one arg needs to be specified");
              var o = "The ",
                i = e.length;
              switch (
                ((e = e.map(function (t) {
                  return '"'.concat(t, '"');
                })),
                i)
              ) {
                case 1:
                  o += "".concat(e[0], " argument");
                  break;
                case 2:
                  o += "".concat(e[0], " and ").concat(e[1], " arguments");
                  break;
                default:
                  (o += e.slice(0, i - 1).join(", ")),
                    (o += ", and ".concat(e[i - 1], " arguments"));
              }
              return "".concat(o, " must be specified");
            },
            TypeError
          ),
          (t.exports.codes = u);
      },
      9158: (t, e, r) => {
        "use strict";
        function n(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var r = [],
                n = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var c, a = t[Symbol.iterator]();
                  !(n = (c = a.next()).done) &&
                  (r.push(c.value), !e || r.length !== e);
                  n = !0
                );
              } catch (t) {
                (o = !0), (i = t);
              } finally {
                try {
                  n || null == a.return || a.return();
                } finally {
                  if (o) throw i;
                }
              }
              return r;
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            })()
          );
        }
        function o(t) {
          return (
            (o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            o(t)
          );
        }
        var i = void 0 !== /a/g.flags,
          c = function (t) {
            var e = [];
            return (
              t.forEach(function (t) {
                return e.push(t);
              }),
              e
            );
          },
          a = function (t) {
            var e = [];
            return (
              t.forEach(function (t, r) {
                return e.push([r, t]);
              }),
              e
            );
          },
          u = Object.is ? Object.is : r(609),
          l = Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols
            : function () {
                return [];
              },
          s = Number.isNaN ? Number.isNaN : r(360);
        function f(t) {
          return t.call.bind(t);
        }
        var p = f(Object.prototype.hasOwnProperty),
          d = f(Object.prototype.propertyIsEnumerable),
          y = f(Object.prototype.toString),
          h = r(9539).types,
          g = h.isAnyArrayBuffer,
          b = h.isArrayBufferView,
          m = h.isDate,
          v = h.isMap,
          w = h.isRegExp,
          E = h.isSet,
          j = h.isNativeError,
          S = h.isBoxedPrimitive,
          O = h.isNumberObject,
          A = h.isStringObject,
          x = h.isBooleanObject,
          k = h.isBigIntObject,
          P = h.isSymbolObject,
          _ = h.isFloat32Array,
          $ = h.isFloat64Array;
        function T(t) {
          if (0 === t.length || t.length > 10) return !0;
          for (var e = 0; e < t.length; e++) {
            var r = t.charCodeAt(e);
            if (r < 48 || r > 57) return !0;
          }
          return 10 === t.length && t >= Math.pow(2, 32);
        }
        function I(t) {
          return Object.keys(t)
            .filter(T)
            .concat(l(t).filter(Object.prototype.propertyIsEnumerable.bind(t)));
        }
        function R(t, e) {
          if (t === e) return 0;
          for (
            var r = t.length, n = e.length, o = 0, i = Math.min(r, n);
            o < i;
            ++o
          )
            if (t[o] !== e[o]) {
              (r = t[o]), (n = e[o]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }
        function F(t, e, r, n) {
          if (t === e) return 0 !== t || !r || u(t, e);
          if (r) {
            if ("object" !== o(t)) return "number" == typeof t && s(t) && s(e);
            if ("object" !== o(e) || null === t || null === e) return !1;
            if (Object.getPrototypeOf(t) !== Object.getPrototypeOf(e))
              return !1;
          } else {
            if (null === t || "object" !== o(t))
              return (null === e || "object" !== o(e)) && t == e;
            if (null === e || "object" !== o(e)) return !1;
          }
          var c,
            a,
            l,
            f,
            p = y(t);
          if (p !== y(e)) return !1;
          if (Array.isArray(t)) {
            if (t.length !== e.length) return !1;
            var d = I(t),
              h = I(e);
            return d.length === h.length && D(t, e, r, n, 1, d);
          }
          if ("[object Object]" === p && ((!v(t) && v(e)) || (!E(t) && E(e))))
            return !1;
          if (m(t)) {
            if (
              !m(e) ||
              Date.prototype.getTime.call(t) !== Date.prototype.getTime.call(e)
            )
              return !1;
          } else if (w(t)) {
            if (
              !w(e) ||
              ((l = t),
              (f = e),
              !(i
                ? l.source === f.source && l.flags === f.flags
                : RegExp.prototype.toString.call(l) ===
                  RegExp.prototype.toString.call(f)))
            )
              return !1;
          } else if (j(t) || t instanceof Error) {
            if (t.message !== e.message || t.name !== e.name) return !1;
          } else {
            if (b(t)) {
              if (r || (!_(t) && !$(t))) {
                if (
                  !(function (t, e) {
                    return (
                      t.byteLength === e.byteLength &&
                      0 ===
                        R(
                          new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
                          new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                        )
                    );
                  })(t, e)
                )
                  return !1;
              } else if (
                !(function (t, e) {
                  if (t.byteLength !== e.byteLength) return !1;
                  for (var r = 0; r < t.byteLength; r++)
                    if (t[r] !== e[r]) return !1;
                  return !0;
                })(t, e)
              )
                return !1;
              var T = I(t),
                F = I(e);
              return T.length === F.length && D(t, e, r, n, 0, T);
            }
            if (E(t)) return !(!E(e) || t.size !== e.size) && D(t, e, r, n, 2);
            if (v(t)) return !(!v(e) || t.size !== e.size) && D(t, e, r, n, 3);
            if (g(t)) {
              if (
                ((a = e),
                (c = t).byteLength !== a.byteLength ||
                  0 !== R(new Uint8Array(c), new Uint8Array(a)))
              )
                return !1;
            } else if (
              S(t) &&
              !(function (t, e) {
                return O(t)
                  ? O(e) &&
                      u(
                        Number.prototype.valueOf.call(t),
                        Number.prototype.valueOf.call(e)
                      )
                  : A(t)
                  ? A(e) &&
                    String.prototype.valueOf.call(t) ===
                      String.prototype.valueOf.call(e)
                  : x(t)
                  ? x(e) &&
                    Boolean.prototype.valueOf.call(t) ===
                      Boolean.prototype.valueOf.call(e)
                  : k(t)
                  ? k(e) &&
                    BigInt.prototype.valueOf.call(t) ===
                      BigInt.prototype.valueOf.call(e)
                  : P(e) &&
                    Symbol.prototype.valueOf.call(t) ===
                      Symbol.prototype.valueOf.call(e);
              })(t, e)
            )
              return !1;
          }
          return D(t, e, r, n, 0);
        }
        function N(t, e) {
          return e.filter(function (e) {
            return d(t, e);
          });
        }
        function D(t, e, r, n, o, i) {
          if (5 === arguments.length) {
            i = Object.keys(t);
            var c = Object.keys(e);
            if (i.length !== c.length) return !1;
          }
          for (var a = 0; a < i.length; a++) if (!p(e, i[a])) return !1;
          if (r && 5 === arguments.length) {
            var u = l(t);
            if (0 !== u.length) {
              var s = 0;
              for (a = 0; a < u.length; a++) {
                var f = u[a];
                if (d(t, f)) {
                  if (!d(e, f)) return !1;
                  i.push(f), s++;
                } else if (d(e, f)) return !1;
              }
              var y = l(e);
              if (u.length !== y.length && N(e, y).length !== s) return !1;
            } else {
              var h = l(e);
              if (0 !== h.length && 0 !== N(e, h).length) return !1;
            }
          }
          if (
            0 === i.length &&
            (0 === o || (1 === o && 0 === t.length) || 0 === t.size)
          )
            return !0;
          if (void 0 === n)
            n = { val1: new Map(), val2: new Map(), position: 0 };
          else {
            var g = n.val1.get(t);
            if (void 0 !== g) {
              var b = n.val2.get(e);
              if (void 0 !== b) return g === b;
            }
            n.position++;
          }
          n.val1.set(t, n.position), n.val2.set(e, n.position);
          var m = L(t, e, r, i, n, o);
          return n.val1.delete(t), n.val2.delete(e), m;
        }
        function U(t, e, r, n) {
          for (var o = c(t), i = 0; i < o.length; i++) {
            var a = o[i];
            if (F(e, a, r, n)) return t.delete(a), !0;
          }
          return !1;
        }
        function q(t) {
          switch (o(t)) {
            case "undefined":
              return null;
            case "object":
              return;
            case "symbol":
              return !1;
            case "string":
              t = +t;
            case "number":
              if (s(t)) return !1;
          }
          return !0;
        }
        function M(t, e, r) {
          var n = q(r);
          return null != n ? n : e.has(n) && !t.has(n);
        }
        function B(t, e, r, n, o) {
          var i = q(r);
          if (null != i) return i;
          var c = e.get(i);
          return (
            !((void 0 === c && !e.has(i)) || !F(n, c, !1, o)) &&
            !t.has(i) &&
            F(n, c, !1, o)
          );
        }
        function C(t, e, r, n, o, i) {
          for (var a = c(t), u = 0; u < a.length; u++) {
            var l = a[u];
            if (F(r, l, o, i) && F(n, e.get(l), o, i)) return t.delete(l), !0;
          }
          return !1;
        }
        function L(t, e, r, i, u, l) {
          var s = 0;
          if (2 === l) {
            if (
              !(function (t, e, r, n) {
                for (var i = null, a = c(t), u = 0; u < a.length; u++) {
                  var l = a[u];
                  if ("object" === o(l) && null !== l)
                    null === i && (i = new Set()), i.add(l);
                  else if (!e.has(l)) {
                    if (r) return !1;
                    if (!M(t, e, l)) return !1;
                    null === i && (i = new Set()), i.add(l);
                  }
                }
                if (null !== i) {
                  for (var s = c(e), f = 0; f < s.length; f++) {
                    var p = s[f];
                    if ("object" === o(p) && null !== p) {
                      if (!U(i, p, r, n)) return !1;
                    } else if (!r && !t.has(p) && !U(i, p, r, n)) return !1;
                  }
                  return 0 === i.size;
                }
                return !0;
              })(t, e, r, u)
            )
              return !1;
          } else if (3 === l) {
            if (
              !(function (t, e, r, i) {
                for (var c = null, u = a(t), l = 0; l < u.length; l++) {
                  var s = n(u[l], 2),
                    f = s[0],
                    p = s[1];
                  if ("object" === o(f) && null !== f)
                    null === c && (c = new Set()), c.add(f);
                  else {
                    var d = e.get(f);
                    if ((void 0 === d && !e.has(f)) || !F(p, d, r, i)) {
                      if (r) return !1;
                      if (!B(t, e, f, p, i)) return !1;
                      null === c && (c = new Set()), c.add(f);
                    }
                  }
                }
                if (null !== c) {
                  for (var y = a(e), h = 0; h < y.length; h++) {
                    var g = n(y[h], 2),
                      b = ((f = g[0]), g[1]);
                    if ("object" === o(f) && null !== f) {
                      if (!C(c, t, f, b, r, i)) return !1;
                    } else if (
                      !(
                        r ||
                        (t.has(f) && F(t.get(f), b, !1, i)) ||
                        C(c, t, f, b, !1, i)
                      )
                    )
                      return !1;
                  }
                  return 0 === c.size;
                }
                return !0;
              })(t, e, r, u)
            )
              return !1;
          } else if (1 === l)
            for (; s < t.length; s++) {
              if (!p(t, s)) {
                if (p(e, s)) return !1;
                for (var f = Object.keys(t); s < f.length; s++) {
                  var d = f[s];
                  if (!p(e, d) || !F(t[d], e[d], r, u)) return !1;
                }
                return f.length === Object.keys(e).length;
              }
              if (!p(e, s) || !F(t[s], e[s], r, u)) return !1;
            }
          for (s = 0; s < i.length; s++) {
            var y = i[s];
            if (!F(t[y], e[y], r, u)) return !1;
          }
          return !0;
        }
        t.exports = {
          isDeepEqual: function (t, e) {
            return F(t, e, !1);
          },
          isDeepStrictEqual: function (t, e) {
            return F(t, e, !0);
          },
        };
      },
      1924: (t, e, r) => {
        "use strict";
        var n = r(210),
          o = r(5559),
          i = o(n("String.prototype.indexOf"));
        t.exports = function (t, e) {
          var r = n(t, !!e);
          return "function" == typeof r && i(t, ".prototype.") > -1 ? o(r) : r;
        };
      },
      5559: (t, e, r) => {
        "use strict";
        var n = r(8612),
          o = r(210),
          i = o("%Function.prototype.apply%"),
          c = o("%Function.prototype.call%"),
          a = o("%Reflect.apply%", !0) || n.call(c, i),
          u = o("%Object.getOwnPropertyDescriptor%", !0),
          l = o("%Object.defineProperty%", !0),
          s = o("%Math.max%");
        if (l)
          try {
            l({}, "a", { value: 1 });
          } catch (t) {
            l = null;
          }
        t.exports = function (t) {
          var e = a(n, c, arguments);
          if (u && l) {
            var r = u(e, "length");
            r.configurable &&
              l(e, "length", {
                value: 1 + s(0, t.length - (arguments.length - 1)),
              });
          }
          return e;
        };
        var f = function () {
          return a(n, i, arguments);
        };
        l ? l(t.exports, "apply", { value: f }) : (t.exports.apply = f);
      },
      5108: (t, e, r) => {
        var n = r(9539),
          o = r(9282);
        function i() {
          return new Date().getTime();
        }
        var c,
          a = Array.prototype.slice,
          u = {};
        c =
          void 0 !== r.g && r.g.console
            ? r.g.console
            : "undefined" != typeof window && window.console
            ? window.console
            : {};
        for (
          var l = [
              [function () {}, "log"],
              [
                function () {
                  c.log.apply(c, arguments);
                },
                "info",
              ],
              [
                function () {
                  c.log.apply(c, arguments);
                },
                "warn",
              ],
              [
                function () {
                  c.warn.apply(c, arguments);
                },
                "error",
              ],
              [
                function (t) {
                  u[t] = i();
                },
                "time",
              ],
              [
                function (t) {
                  var e = u[t];
                  if (!e) throw new Error("No such label: " + t);
                  delete u[t];
                  var r = i() - e;
                  c.log(t + ": " + r + "ms");
                },
                "timeEnd",
              ],
              [
                function () {
                  var t = new Error();
                  (t.name = "Trace"),
                    (t.message = n.format.apply(null, arguments)),
                    c.error(t.stack);
                },
                "trace",
              ],
              [
                function (t) {
                  c.log(n.inspect(t) + "\n");
                },
                "dir",
              ],
              [
                function (t) {
                  if (!t) {
                    var e = a.call(arguments, 1);
                    o.ok(!1, n.format.apply(null, e));
                  }
                },
                "assert",
              ],
            ],
            s = 0;
          s < l.length;
          s++
        ) {
          var f = l[s],
            p = f[0],
            d = f[1];
          c[d] || (c[d] = p);
        }
        t.exports = c;
      },
      4289: (t, e, r) => {
        "use strict";
        var n = r(2215),
          o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
          i = Object.prototype.toString,
          c = Array.prototype.concat,
          a = Object.defineProperty,
          u = r(1044)(),
          l = a && u,
          s = function (t, e, r, n) {
            var o;
            (!(e in t) ||
              ("function" == typeof (o = n) &&
                "[object Function]" === i.call(o) &&
                n())) &&
              (l
                ? a(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: r,
                    writable: !0,
                  })
                : (t[e] = r));
          },
          f = function (t, e) {
            var r = arguments.length > 2 ? arguments[2] : {},
              i = n(e);
            o && (i = c.call(i, Object.getOwnPropertySymbols(e)));
            for (var a = 0; a < i.length; a += 1) s(t, i[a], e[i[a]], r[i[a]]);
          };
        (f.supportsDescriptors = !!l), (t.exports = f);
      },
      8091: (t) => {
        "use strict";
        function e(t, e) {
          if (null == t)
            throw new TypeError("Cannot convert first argument to object");
          for (var r = Object(t), n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            if (null != o)
              for (
                var i = Object.keys(Object(o)), c = 0, a = i.length;
                c < a;
                c++
              ) {
                var u = i[c],
                  l = Object.getOwnPropertyDescriptor(o, u);
                void 0 !== l && l.enumerable && (r[u] = o[u]);
              }
          }
          return r;
        }
        t.exports = {
          assign: e,
          polyfill: function () {
            Object.assign ||
              Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: e,
              });
          },
        };
      },
      4029: (t, e, r) => {
        "use strict";
        var n = r(5320),
          o = Object.prototype.toString,
          i = Object.prototype.hasOwnProperty,
          c = function (t, e, r) {
            for (var n = 0, o = t.length; n < o; n++)
              i.call(t, n) &&
                (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t));
          },
          a = function (t, e, r) {
            for (var n = 0, o = t.length; n < o; n++)
              null == r ? e(t.charAt(n), n, t) : e.call(r, t.charAt(n), n, t);
          },
          u = function (t, e, r) {
            for (var n in t)
              i.call(t, n) &&
                (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t));
          };
        t.exports = function (t, e, r) {
          if (!n(e)) throw new TypeError("iterator must be a function");
          var i;
          arguments.length >= 3 && (i = r),
            "[object Array]" === o.call(t)
              ? c(t, e, i)
              : "string" == typeof t
              ? a(t, e, i)
              : u(t, e, i);
        };
      },
      7648: (t) => {
        "use strict";
        var e = "Function.prototype.bind called on incompatible ",
          r = Array.prototype.slice,
          n = Object.prototype.toString,
          o = "[object Function]";
        t.exports = function (t) {
          var i = this;
          if ("function" != typeof i || n.call(i) !== o)
            throw new TypeError(e + i);
          for (
            var c,
              a = r.call(arguments, 1),
              u = function () {
                if (this instanceof c) {
                  var e = i.apply(this, a.concat(r.call(arguments)));
                  return Object(e) === e ? e : this;
                }
                return i.apply(t, a.concat(r.call(arguments)));
              },
              l = Math.max(0, i.length - a.length),
              s = [],
              f = 0;
            f < l;
            f++
          )
            s.push("$" + f);
          if (
            ((c = Function(
              "binder",
              "return function (" +
                s.join(",") +
                "){ return binder.apply(this,arguments); }"
            )(u)),
            i.prototype)
          ) {
            var p = function () {};
            (p.prototype = i.prototype),
              (c.prototype = new p()),
              (p.prototype = null);
          }
          return c;
        };
      },
      8612: (t, e, r) => {
        "use strict";
        var n = r(7648);
        t.exports = Function.prototype.bind || n;
      },
      210: (t, e, r) => {
        "use strict";
        var n,
          o = SyntaxError,
          i = Function,
          c = TypeError,
          a = function (t) {
            try {
              return i('"use strict"; return (' + t + ").constructor;")();
            } catch (t) {}
          },
          u = Object.getOwnPropertyDescriptor;
        if (u)
          try {
            u({}, "");
          } catch (t) {
            u = null;
          }
        var l = function () {
            throw new c();
          },
          s = u
            ? (function () {
                try {
                  return l;
                } catch (t) {
                  try {
                    return u(arguments, "callee").get;
                  } catch (t) {
                    return l;
                  }
                }
              })()
            : l,
          f = r(1405)(),
          p =
            Object.getPrototypeOf ||
            function (t) {
              return t.__proto__;
            },
          d = {},
          y = "undefined" == typeof Uint8Array ? n : p(Uint8Array),
          h = {
            "%AggregateError%":
              "undefined" == typeof AggregateError ? n : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%":
              "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
            "%ArrayIteratorPrototype%": f ? p([][Symbol.iterator]()) : n,
            "%AsyncFromSyncIteratorPrototype%": n,
            "%AsyncFunction%": d,
            "%AsyncGenerator%": d,
            "%AsyncGeneratorFunction%": d,
            "%AsyncIteratorPrototype%": d,
            "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? n : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%":
              "undefined" == typeof Float32Array ? n : Float32Array,
            "%Float64Array%":
              "undefined" == typeof Float64Array ? n : Float64Array,
            "%FinalizationRegistry%":
              "undefined" == typeof FinalizationRegistry
                ? n
                : FinalizationRegistry,
            "%Function%": i,
            "%GeneratorFunction%": d,
            "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": f ? p(p([][Symbol.iterator]())) : n,
            "%JSON%": "object" == typeof JSON ? JSON : n,
            "%Map%": "undefined" == typeof Map ? n : Map,
            "%MapIteratorPrototype%":
              "undefined" != typeof Map && f
                ? p(new Map()[Symbol.iterator]())
                : n,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? n : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? n : Set,
            "%SetIteratorPrototype%":
              "undefined" != typeof Set && f
                ? p(new Set()[Symbol.iterator]())
                : n,
            "%SharedArrayBuffer%":
              "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": f ? p(""[Symbol.iterator]()) : n,
            "%Symbol%": f ? Symbol : n,
            "%SyntaxError%": o,
            "%ThrowTypeError%": s,
            "%TypedArray%": y,
            "%TypeError%": c,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
            "%Uint8ClampedArray%":
              "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
            "%Uint16Array%":
              "undefined" == typeof Uint16Array ? n : Uint16Array,
            "%Uint32Array%":
              "undefined" == typeof Uint32Array ? n : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet,
          },
          g = function t(e) {
            var r;
            if ("%AsyncFunction%" === e) r = a("async function () {}");
            else if ("%GeneratorFunction%" === e) r = a("function* () {}");
            else if ("%AsyncGeneratorFunction%" === e)
              r = a("async function* () {}");
            else if ("%AsyncGenerator%" === e) {
              var n = t("%AsyncGeneratorFunction%");
              n && (r = n.prototype);
            } else if ("%AsyncIteratorPrototype%" === e) {
              var o = t("%AsyncGenerator%");
              o && (r = p(o.prototype));
            }
            return (h[e] = r), r;
          },
          b = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": [
              "AsyncGeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": [
              "GeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"],
          },
          m = r(8612),
          v = r(7642),
          w = m.call(Function.call, Array.prototype.concat),
          E = m.call(Function.apply, Array.prototype.splice),
          j = m.call(Function.call, String.prototype.replace),
          S = m.call(Function.call, String.prototype.slice),
          O = m.call(Function.call, RegExp.prototype.exec),
          A =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          x = /\\(\\)?/g,
          k = function (t) {
            var e = S(t, 0, 1),
              r = S(t, -1);
            if ("%" === e && "%" !== r)
              throw new o("invalid intrinsic syntax, expected closing `%`");
            if ("%" === r && "%" !== e)
              throw new o("invalid intrinsic syntax, expected opening `%`");
            var n = [];
            return (
              j(t, A, function (t, e, r, o) {
                n[n.length] = r ? j(o, x, "$1") : e || t;
              }),
              n
            );
          },
          P = function (t, e) {
            var r,
              n = t;
            if ((v(b, n) && (n = "%" + (r = b[n])[0] + "%"), v(h, n))) {
              var i = h[n];
              if ((i === d && (i = g(n)), void 0 === i && !e))
                throw new c(
                  "intrinsic " +
                    t +
                    " exists, but is not available. Please file an issue!"
                );
              return { alias: r, name: n, value: i };
            }
            throw new o("intrinsic " + t + " does not exist!");
          };
        t.exports = function (t, e) {
          if ("string" != typeof t || 0 === t.length)
            throw new c("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && "boolean" != typeof e)
            throw new c('"allowMissing" argument must be a boolean');
          if (null === O(/^%?[^%]*%?$/g, t))
            throw new o(
              "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
            );
          var r = k(t),
            n = r.length > 0 ? r[0] : "",
            i = P("%" + n + "%", e),
            a = i.name,
            l = i.value,
            s = !1,
            f = i.alias;
          f && ((n = f[0]), E(r, w([0, 1], f)));
          for (var p = 1, d = !0; p < r.length; p += 1) {
            var y = r[p],
              g = S(y, 0, 1),
              b = S(y, -1);
            if (
              ('"' === g ||
                "'" === g ||
                "`" === g ||
                '"' === b ||
                "'" === b ||
                "`" === b) &&
              g !== b
            )
              throw new o(
                "property names with quotes must have matching quotes"
              );
            if (
              (("constructor" !== y && d) || (s = !0),
              v(h, (a = "%" + (n += "." + y) + "%")))
            )
              l = h[a];
            else if (null != l) {
              if (!(y in l)) {
                if (!e)
                  throw new c(
                    "base intrinsic for " +
                      t +
                      " exists, but the property is not available."
                  );
                return;
              }
              if (u && p + 1 >= r.length) {
                var m = u(l, y);
                l =
                  (d = !!m) && "get" in m && !("originalValue" in m.get)
                    ? m.get
                    : l[y];
              } else (d = v(l, y)), (l = l[y]);
              d && !s && (h[a] = l);
            }
          }
          return l;
        };
      },
      1044: (t, e, r) => {
        "use strict";
        var n = r(210)("%Object.defineProperty%", !0),
          o = function () {
            if (n)
              try {
                return n({}, "a", { value: 1 }), !0;
              } catch (t) {
                return !1;
              }
            return !1;
          };
        (o.hasArrayLengthDefineBug = function () {
          if (!o()) return null;
          try {
            return 1 !== n([], "length", { value: 1 }).length;
          } catch (t) {
            return !0;
          }
        }),
          (t.exports = o);
      },
      1405: (t, e, r) => {
        "use strict";
        var n = "undefined" != typeof Symbol && Symbol,
          o = r(5419);
        t.exports = function () {
          return (
            "function" == typeof n &&
            "function" == typeof Symbol &&
            "symbol" == typeof n("foo") &&
            "symbol" == typeof Symbol("bar") &&
            o()
          );
        };
      },
      5419: (t) => {
        "use strict";
        t.exports = function () {
          if (
            "function" != typeof Symbol ||
            "function" != typeof Object.getOwnPropertySymbols
          )
            return !1;
          if ("symbol" == typeof Symbol.iterator) return !0;
          var t = {},
            e = Symbol("test"),
            r = Object(e);
          if ("string" == typeof e) return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(e))
            return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(r))
            return !1;
          for (e in ((t[e] = 42), t)) return !1;
          if ("function" == typeof Object.keys && 0 !== Object.keys(t).length)
            return !1;
          if (
            "function" == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(t).length
          )
            return !1;
          var n = Object.getOwnPropertySymbols(t);
          if (1 !== n.length || n[0] !== e) return !1;
          if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var o = Object.getOwnPropertyDescriptor(t, e);
            if (42 !== o.value || !0 !== o.enumerable) return !1;
          }
          return !0;
        };
      },
      6410: (t, e, r) => {
        "use strict";
        var n = r(5419);
        t.exports = function () {
          return n() && !!Symbol.toStringTag;
        };
      },
      7642: (t, e, r) => {
        "use strict";
        var n = r(8612);
        t.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
      },
      5717: (t) => {
        "function" == typeof Object.create
          ? (t.exports = function (t, e) {
              e &&
                ((t.super_ = e),
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })));
            })
          : (t.exports = function (t, e) {
              if (e) {
                t.super_ = e;
                var r = function () {};
                (r.prototype = e.prototype),
                  (t.prototype = new r()),
                  (t.prototype.constructor = t);
              }
            });
      },
      2584: (t, e, r) => {
        "use strict";
        var n = r(6410)(),
          o = r(1924)("Object.prototype.toString"),
          i = function (t) {
            return (
              !(n && t && "object" == typeof t && Symbol.toStringTag in t) &&
              "[object Arguments]" === o(t)
            );
          },
          c = function (t) {
            return (
              !!i(t) ||
              (null !== t &&
                "object" == typeof t &&
                "number" == typeof t.length &&
                t.length >= 0 &&
                "[object Array]" !== o(t) &&
                "[object Function]" === o(t.callee))
            );
          },
          a = (function () {
            return i(arguments);
          })();
        (i.isLegacyArguments = c), (t.exports = a ? i : c);
      },
      5320: (t) => {
        "use strict";
        var e,
          r,
          n = Function.prototype.toString,
          o = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
        if (
          "function" == typeof o &&
          "function" == typeof Object.defineProperty
        )
          try {
            (e = Object.defineProperty({}, "length", {
              get: function () {
                throw r;
              },
            })),
              (r = {}),
              o(
                function () {
                  throw 42;
                },
                null,
                e
              );
          } catch (t) {
            t !== r && (o = null);
          }
        else o = null;
        var i = /^\s*class\b/,
          c = function (t) {
            try {
              var e = n.call(t);
              return i.test(e);
            } catch (t) {
              return !1;
            }
          },
          a = Object.prototype.toString,
          u = "function" == typeof Symbol && !!Symbol.toStringTag,
          l =
            "object" == typeof document &&
            void 0 === document.all &&
            void 0 !== document.all
              ? document.all
              : {};
        t.exports = o
          ? function (t) {
              if (t === l) return !0;
              if (!t) return !1;
              if ("function" != typeof t && "object" != typeof t) return !1;
              if ("function" == typeof t && !t.prototype) return !0;
              try {
                o(t, null, e);
              } catch (t) {
                if (t !== r) return !1;
              }
              return !c(t);
            }
          : function (t) {
              if (t === l) return !0;
              if (!t) return !1;
              if ("function" != typeof t && "object" != typeof t) return !1;
              if ("function" == typeof t && !t.prototype) return !0;
              if (u)
                return (function (t) {
                  try {
                    return !c(t) && (n.call(t), !0);
                  } catch (t) {
                    return !1;
                  }
                })(t);
              if (c(t)) return !1;
              var e = a.call(t);
              return (
                "[object Function]" === e || "[object GeneratorFunction]" === e
              );
            };
      },
      8662: (t, e, r) => {
        "use strict";
        var n,
          o = Object.prototype.toString,
          i = Function.prototype.toString,
          c = /^\s*(?:function)?\*/,
          a = r(6410)(),
          u = Object.getPrototypeOf;
        t.exports = function (t) {
          if ("function" != typeof t) return !1;
          if (c.test(i.call(t))) return !0;
          if (!a) return "[object GeneratorFunction]" === o.call(t);
          if (!u) return !1;
          if (void 0 === n) {
            var e = (function () {
              if (!a) return !1;
              try {
                return Function("return function*() {}")();
              } catch (t) {}
            })();
            n = !!e && u(e);
          }
          return u(t) === n;
        };
      },
      8611: (t) => {
        "use strict";
        t.exports = function (t) {
          return t != t;
        };
      },
      360: (t, e, r) => {
        "use strict";
        var n = r(5559),
          o = r(4289),
          i = r(8611),
          c = r(9415),
          a = r(3194),
          u = n(c(), Number);
        o(u, { getPolyfill: c, implementation: i, shim: a }), (t.exports = u);
      },
      9415: (t, e, r) => {
        "use strict";
        var n = r(8611);
        t.exports = function () {
          return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")
            ? Number.isNaN
            : n;
        };
      },
      3194: (t, e, r) => {
        "use strict";
        var n = r(4289),
          o = r(9415);
        t.exports = function () {
          var t = o();
          return (
            n(
              Number,
              { isNaN: t },
              {
                isNaN: function () {
                  return Number.isNaN !== t;
                },
              }
            ),
            t
          );
        };
      },
      5692: (t, e, r) => {
        "use strict";
        var n = r(4029),
          o = r(3083),
          i = r(1924),
          c = i("Object.prototype.toString"),
          a = r(6410)(),
          u = "undefined" == typeof globalThis ? r.g : globalThis,
          l = o(),
          s =
            i("Array.prototype.indexOf", !0) ||
            function (t, e) {
              for (var r = 0; r < t.length; r += 1) if (t[r] === e) return r;
              return -1;
            },
          f = i("String.prototype.slice"),
          p = {},
          d = r(882),
          y = Object.getPrototypeOf;
        a &&
          d &&
          y &&
          n(l, function (t) {
            var e = new u[t]();
            if (Symbol.toStringTag in e) {
              var r = y(e),
                n = d(r, Symbol.toStringTag);
              if (!n) {
                var o = y(r);
                n = d(o, Symbol.toStringTag);
              }
              p[t] = n.get;
            }
          }),
          (t.exports = function (t) {
            if (!t || "object" != typeof t) return !1;
            if (!a || !(Symbol.toStringTag in t)) {
              var e = f(c(t), 8, -1);
              return s(l, e) > -1;
            }
            return (
              !!d &&
              (function (t) {
                var e = !1;
                return (
                  n(p, function (r, n) {
                    if (!e)
                      try {
                        e = r.call(t) === n;
                      } catch (t) {}
                  }),
                  e
                );
              })(t)
            );
          });
      },
      4783: (t, e, r) => {
        "use strict";
        var n = r(5108),
          o = r(5618),
          i = Object.create(null),
          c = "undefined" == typeof document,
          a = Array.prototype.forEach;
        function u() {}
        function l(t, e) {
          if (!e) {
            if (!t.href) return;
            e = t.href.split("?")[0];
          }
          if (f(e) && !1 !== t.isLoaded && e && e.indexOf(".css") > -1) {
            t.visited = !0;
            var r = t.cloneNode();
            (r.isLoaded = !1),
              r.addEventListener("load", function () {
                r.isLoaded || ((r.isLoaded = !0), t.parentNode.removeChild(t));
              }),
              r.addEventListener("error", function () {
                r.isLoaded || ((r.isLoaded = !0), t.parentNode.removeChild(t));
              }),
              (r.href = "".concat(e, "?").concat(Date.now())),
              t.nextSibling
                ? t.parentNode.insertBefore(r, t.nextSibling)
                : t.parentNode.appendChild(r);
          }
        }
        function s() {
          var t = document.querySelectorAll("link");
          a.call(t, function (t) {
            !0 !== t.visited && l(t);
          });
        }
        function f(t) {
          return !!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(t);
        }
        t.exports = function (t, e) {
          if (c) return n.log("no window.document found, will not HMR CSS"), u;
          var r,
            p,
            d = (function (t) {
              var e = i[t];
              if (!e) {
                if (document.currentScript) e = document.currentScript.src;
                else {
                  var r = document.getElementsByTagName("script"),
                    n = r[r.length - 1];
                  n && (e = n.src);
                }
                i[t] = e;
              }
              return function (t) {
                if (!e) return null;
                var r = e.split(/([^\\/]+)\.js$/),
                  n = r && r[1];
                return n && t
                  ? t.split(",").map(function (t) {
                      var r = new RegExp("".concat(n, "\\.js$"), "g");
                      return o(
                        e.replace(
                          r,
                          "".concat(t.replace(/{fileName}/g, n), ".css")
                        )
                      );
                    })
                  : [e.replace(".js", ".css")];
              };
            })(t);
          return (
            (r = function () {
              var t = d(e.filename),
                r = (function (t) {
                  if (!t) return !1;
                  var e = document.querySelectorAll("link"),
                    r = !1;
                  return (
                    a.call(e, function (e) {
                      if (e.href) {
                        var n = (function (t, e) {
                          var r;
                          return (
                            (t = o(t)),
                            e.some(function (n) {
                              t.indexOf(e) > -1 && (r = n);
                            }),
                            r
                          );
                        })(e.href, t);
                        f(n) && !0 !== e.visited && n && (l(e, n), (r = !0));
                      }
                    }),
                    r
                  );
                })(t);
              if (e.locals)
                return (
                  n.log("[HMR] Detected local css modules. Reload all css"),
                  void s()
                );
              r
                ? n.log("[HMR] css reload %s", t.join(" "))
                : (n.log("[HMR] Reload all css"), s());
            }),
            50,
            (p = 0),
            function () {
              var t = this,
                e = arguments,
                n = function () {
                  return r.apply(t, e);
                };
              clearTimeout(p), (p = setTimeout(n, 50));
            }
          );
        };
      },
      5618: (t) => {
        "use strict";
        t.exports = function (t) {
          if (((t = t.trim()), /^data:/i.test(t))) return t;
          var e = -1 !== t.indexOf("//") ? t.split("//")[0] + "//" : "",
            r = t.replace(new RegExp(e, "i"), "").split("/"),
            n = r[0].toLowerCase().replace(/\.$/, "");
          return (
            (r[0] = ""),
            e +
              n +
              r
                .reduce(function (t, e) {
                  switch (e) {
                    case "..":
                      t.pop();
                      break;
                    case ".":
                      break;
                    default:
                      t.push(e);
                  }
                  return t;
                }, [])
                .join("/")
          );
        };
      },
      9891: (t, e, r) => {
        "use strict";
        var n = r(4783)(t.id, { locals: !1 });
        t.hot.dispose(n), t.hot.accept(void 0, n);
      },
      6070: (t, e, r) => {
        "use strict";
        var n = r(4783)(t.id, { locals: !1 });
        t.hot.dispose(n), t.hot.accept(void 0, n);
      },
      5483: (t, e, r) => {
        "use strict";
        var n = r(4783)(t.id, { locals: !1 });
        t.hot.dispose(n), t.hot.accept(void 0, n);
      },
      4244: (t) => {
        "use strict";
        var e = function (t) {
          return t != t;
        };
        t.exports = function (t, r) {
          return 0 === t && 0 === r
            ? 1 / t == 1 / r
            : t === r || !(!e(t) || !e(r));
        };
      },
      609: (t, e, r) => {
        "use strict";
        var n = r(4289),
          o = r(5559),
          i = r(4244),
          c = r(5624),
          a = r(2281),
          u = o(c(), Object);
        n(u, { getPolyfill: c, implementation: i, shim: a }), (t.exports = u);
      },
      5624: (t, e, r) => {
        "use strict";
        var n = r(4244);
        t.exports = function () {
          return "function" == typeof Object.is ? Object.is : n;
        };
      },
      2281: (t, e, r) => {
        "use strict";
        var n = r(5624),
          o = r(4289);
        t.exports = function () {
          var t = n();
          return (
            o(
              Object,
              { is: t },
              {
                is: function () {
                  return Object.is !== t;
                },
              }
            ),
            t
          );
        };
      },
      8987: (t, e, r) => {
        "use strict";
        var n;
        if (!Object.keys) {
          var o = Object.prototype.hasOwnProperty,
            i = Object.prototype.toString,
            c = r(1414),
            a = Object.prototype.propertyIsEnumerable,
            u = !a.call({ toString: null }, "toString"),
            l = a.call(function () {}, "prototype"),
            s = [
              "toString",
              "toLocaleString",
              "valueOf",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "constructor",
            ],
            f = function (t) {
              var e = t.constructor;
              return e && e.prototype === t;
            },
            p = {
              $applicationCache: !0,
              $console: !0,
              $external: !0,
              $frame: !0,
              $frameElement: !0,
              $frames: !0,
              $innerHeight: !0,
              $innerWidth: !0,
              $onmozfullscreenchange: !0,
              $onmozfullscreenerror: !0,
              $outerHeight: !0,
              $outerWidth: !0,
              $pageXOffset: !0,
              $pageYOffset: !0,
              $parent: !0,
              $scrollLeft: !0,
              $scrollTop: !0,
              $scrollX: !0,
              $scrollY: !0,
              $self: !0,
              $webkitIndexedDB: !0,
              $webkitStorageInfo: !0,
              $window: !0,
            },
            d = (function () {
              if ("undefined" == typeof window) return !1;
              for (var t in window)
                try {
                  if (
                    !p["$" + t] &&
                    o.call(window, t) &&
                    null !== window[t] &&
                    "object" == typeof window[t]
                  )
                    try {
                      f(window[t]);
                    } catch (t) {
                      return !0;
                    }
                } catch (t) {
                  return !0;
                }
              return !1;
            })();
          n = function (t) {
            var e = null !== t && "object" == typeof t,
              r = "[object Function]" === i.call(t),
              n = c(t),
              a = e && "[object String]" === i.call(t),
              p = [];
            if (!e && !r && !n)
              throw new TypeError("Object.keys called on a non-object");
            var y = l && r;
            if (a && t.length > 0 && !o.call(t, 0))
              for (var h = 0; h < t.length; ++h) p.push(String(h));
            if (n && t.length > 0)
              for (var g = 0; g < t.length; ++g) p.push(String(g));
            else
              for (var b in t)
                (y && "prototype" === b) || !o.call(t, b) || p.push(String(b));
            if (u)
              for (
                var m = (function (t) {
                    if ("undefined" == typeof window || !d) return f(t);
                    try {
                      return f(t);
                    } catch (t) {
                      return !1;
                    }
                  })(t),
                  v = 0;
                v < s.length;
                ++v
              )
                (m && "constructor" === s[v]) ||
                  !o.call(t, s[v]) ||
                  p.push(s[v]);
            return p;
          };
        }
        t.exports = n;
      },
      2215: (t, e, r) => {
        "use strict";
        var n = Array.prototype.slice,
          o = r(1414),
          i = Object.keys,
          c = i
            ? function (t) {
                return i(t);
              }
            : r(8987),
          a = Object.keys;
        (c.shim = function () {
          if (Object.keys) {
            var t = (function () {
              var t = Object.keys(arguments);
              return t && t.length === arguments.length;
            })(1, 2);
            t ||
              (Object.keys = function (t) {
                return o(t) ? a(n.call(t)) : a(t);
              });
          } else Object.keys = c;
          return Object.keys || c;
        }),
          (t.exports = c);
      },
      1414: (t) => {
        "use strict";
        var e = Object.prototype.toString;
        t.exports = function (t) {
          var r = e.call(t),
            n = "[object Arguments]" === r;
          return (
            n ||
              (n =
                "[object Array]" !== r &&
                null !== t &&
                "object" == typeof t &&
                "number" == typeof t.length &&
                t.length >= 0 &&
                "[object Function]" === e.call(t.callee)),
            n
          );
        };
      },
      4155: (t) => {
        var e,
          r,
          n = (t.exports = {});
        function o() {
          throw new Error("setTimeout has not been defined");
        }
        function i() {
          throw new Error("clearTimeout has not been defined");
        }
        function c(t) {
          if (e === setTimeout) return setTimeout(t, 0);
          if ((e === o || !e) && setTimeout)
            return (e = setTimeout), setTimeout(t, 0);
          try {
            return e(t, 0);
          } catch (r) {
            try {
              return e.call(null, t, 0);
            } catch (r) {
              return e.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            e = "function" == typeof setTimeout ? setTimeout : o;
          } catch (t) {
            e = o;
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : i;
          } catch (t) {
            r = i;
          }
        })();
        var a,
          u = [],
          l = !1,
          s = -1;
        function f() {
          l &&
            a &&
            ((l = !1),
            a.length ? (u = a.concat(u)) : (s = -1),
            u.length && p());
        }
        function p() {
          if (!l) {
            var t = c(f);
            l = !0;
            for (var e = u.length; e; ) {
              for (a = u, u = []; ++s < e; ) a && a[s].run();
              (s = -1), (e = u.length);
            }
            (a = null),
              (l = !1),
              (function (t) {
                if (r === clearTimeout) return clearTimeout(t);
                if ((r === i || !r) && clearTimeout)
                  return (r = clearTimeout), clearTimeout(t);
                try {
                  r(t);
                } catch (e) {
                  try {
                    return r.call(null, t);
                  } catch (e) {
                    return r.call(this, t);
                  }
                }
              })(t);
          }
        }
        function d(t, e) {
          (this.fun = t), (this.array = e);
        }
        function y() {}
        (n.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
          u.push(new d(t, e)), 1 !== u.length || l || c(p);
        }),
          (d.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.browser = !0),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = y),
          (n.addListener = y),
          (n.once = y),
          (n.off = y),
          (n.removeListener = y),
          (n.removeAllListeners = y),
          (n.emit = y),
          (n.prependListener = y),
          (n.prependOnceListener = y),
          (n.listeners = function (t) {
            return [];
          }),
          (n.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function () {
            return "/";
          }),
          (n.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function () {
            return 0;
          });
      },
      1619: (t, e, r) => {
        "use strict";
        function n() {}
        function o(t) {
          return t();
        }
        function i() {
          return Object.create(null);
        }
        function c(t) {
          t.forEach(o);
        }
        function a(t) {
          return "function" == typeof t;
        }
        function u(t, e) {
          return t != t
            ? e == e
            : t !== e || (t && "object" == typeof t) || "function" == typeof t;
        }
        let l;
        function s(t, e) {
          return (
            l || (l = document.createElement("a")), (l.href = e), t === l.href
          );
        }
        function f(t) {
          return 0 === Object.keys(t).length;
        }
        function p(t, e, r) {
          t.$$.on_destroy.push(
            (function (t, ...e) {
              if (null == t) return n;
              const r = t.subscribe(...e);
              return r.unsubscribe ? () => r.unsubscribe() : r;
            })(e, r)
          );
        }
        function d(t, e, r, n) {
          return t[1] && n
            ? (function (t, e) {
                for (const r in e) t[r] = e[r];
                return t;
              })(r.ctx.slice(), t[1](n(e)))
            : r.ctx;
        }
        r(9891), r(5108), new Set();
        let y,
          h = !1;
        function g(t, e) {
          t.appendChild(e);
        }
        function b(t, e, r) {
          t.insertBefore(e, r || null);
        }
        function m(t) {
          t.parentNode.removeChild(t);
        }
        function v(t, e) {
          for (let r = 0; r < t.length; r += 1) t[r] && t[r].d(e);
        }
        function w(t) {
          return document.createElement(t);
        }
        function E(t) {
          return document.createTextNode(t);
        }
        function j() {
          return E(" ");
        }
        function S() {
          return E("");
        }
        function O(t, e, r, n) {
          return (
            t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n)
          );
        }
        function A(t) {
          return function (e) {
            return e.stopPropagation(), t.call(this, e);
          };
        }
        function x(t, e, r) {
          null == r
            ? t.removeAttribute(e)
            : t.getAttribute(e) !== r && t.setAttribute(e, r);
        }
        function k(t, e) {
          (e = "" + e), t.wholeText !== e && (t.data = e);
        }
        function P(t) {
          y = t;
        }
        new Map();
        const _ = [],
          $ = [],
          T = [],
          I = [],
          R = Promise.resolve();
        let F = !1;
        function N(t) {
          T.push(t);
        }
        const D = new Set();
        let U = 0;
        function q() {
          const t = y;
          do {
            for (; U < _.length; ) {
              const t = _[U];
              U++, P(t), M(t.$$);
            }
            for (P(null), _.length = 0, U = 0; $.length; ) $.pop()();
            for (let t = 0; t < T.length; t += 1) {
              const e = T[t];
              D.has(e) || (D.add(e), e());
            }
            T.length = 0;
          } while (_.length);
          for (; I.length; ) I.pop()();
          (F = !1), D.clear(), P(t);
        }
        function M(t) {
          if (null !== t.fragment) {
            t.update(), c(t.before_update);
            const e = t.dirty;
            (t.dirty = [-1]),
              t.fragment && t.fragment.p(t.ctx, e),
              t.after_update.forEach(N);
          }
        }
        const B = new Set();
        let C, L;
        function z() {
          C = { r: 0, c: [], p: C };
        }
        function G() {
          C.r || c(C.c), (C = C.p);
        }
        function W(t, e) {
          t && t.i && (B.delete(t), t.i(e));
        }
        function H(t, e, r, n) {
          if (t && t.o) {
            if (B.has(t)) return;
            B.add(t),
              C.c.push(() => {
                B.delete(t), n && (r && t.d(1), n());
              }),
              t.o(e);
          } else n && n();
        }
        function V(t) {
          t && t.c();
        }
        function J(t, e, r, n) {
          const {
            fragment: i,
            on_mount: u,
            on_destroy: l,
            after_update: s,
          } = t.$$;
          i && i.m(e, r),
            n ||
              N(() => {
                const e = u.map(o).filter(a);
                l ? l.push(...e) : c(e), (t.$$.on_mount = []);
              }),
            s.forEach(N);
        }
        function Y(t, e) {
          const r = t.$$;
          null !== r.fragment &&
            (c(r.on_destroy),
            r.fragment && r.fragment.d(e),
            (r.on_destroy = r.fragment = null),
            (r.ctx = []));
        }
        function K(t, e, r, o, a, u, l, s = [-1]) {
          const f = y;
          P(t);
          const p = (t.$$ = {
            fragment: null,
            ctx: null,
            props: u,
            update: n,
            not_equal: a,
            bound: i(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(e.context || (f ? f.$$.context : [])),
            callbacks: i(),
            dirty: s,
            skip_bound: !1,
            root: e.target || f.$$.root,
          });
          l && l(p.root);
          let d = !1;
          if (
            ((p.ctx = r
              ? r(t, e.props || {}, (e, r, ...n) => {
                  const o = n.length ? n[0] : r;
                  return (
                    p.ctx &&
                      a(p.ctx[e], (p.ctx[e] = o)) &&
                      (!p.skip_bound && p.bound[e] && p.bound[e](o),
                      d &&
                        (function (t, e) {
                          -1 === t.$$.dirty[0] &&
                            (_.push(t),
                            F || ((F = !0), R.then(q)),
                            t.$$.dirty.fill(0)),
                            (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
                        })(t, e)),
                    r
                  );
                })
              : []),
            p.update(),
            (d = !0),
            c(p.before_update),
            (p.fragment = !!o && o(p.ctx)),
            e.target)
          ) {
            if (e.hydrate) {
              h = !0;
              const t = ((g = e.target), Array.from(g.childNodes));
              p.fragment && p.fragment.l(t), t.forEach(m);
            } else p.fragment && p.fragment.c();
            e.intro && W(t.$$.fragment),
              J(t, e.target, e.anchor, e.customElement),
              (h = !1),
              q();
          }
          var g;
          P(f);
        }
        "undefined" != typeof window
          ? window
          : "undefined" != typeof globalThis
          ? globalThis
          : global,
          new Set([
            "allowfullscreen",
            "allowpaymentrequest",
            "async",
            "autofocus",
            "autoplay",
            "checked",
            "controls",
            "default",
            "defer",
            "disabled",
            "formnovalidate",
            "hidden",
            "ismap",
            "loop",
            "multiple",
            "muted",
            "nomodule",
            "novalidate",
            "open",
            "playsinline",
            "readonly",
            "required",
            "reversed",
            "selected",
          ]),
          "function" == typeof HTMLElement &&
            (L = class extends HTMLElement {
              constructor() {
                super(), this.attachShadow({ mode: "open" });
              }
              connectedCallback() {
                const { on_mount: t } = this.$$;
                this.$$.on_disconnect = t.map(o).filter(a);
                for (const t in this.$$.slotted)
                  this.appendChild(this.$$.slotted[t]);
              }
              attributeChangedCallback(t, e, r) {
                this[t] = r;
              }
              disconnectedCallback() {
                c(this.$$.on_disconnect);
              }
              $destroy() {
                Y(this, 1), (this.$destroy = n);
              }
              $on(t, e) {
                const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                return (
                  r.push(e),
                  () => {
                    const t = r.indexOf(e);
                    -1 !== t && r.splice(t, 1);
                  }
                );
              }
              $set(t) {
                this.$$set &&
                  !f(t) &&
                  ((this.$$.skip_bound = !0),
                  this.$$set(t),
                  (this.$$.skip_bound = !1));
              }
            });
        class Z {
          $destroy() {
            Y(this, 1), (this.$destroy = n);
          }
          $on(t, e) {
            const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return (
              r.push(e),
              () => {
                const t = r.indexOf(e);
                -1 !== t && r.splice(t, 1);
              }
            );
          }
          $set(t) {
            this.$$set &&
              !f(t) &&
              ((this.$$.skip_bound = !0),
              this.$$set(t),
              (this.$$.skip_bound = !1));
          }
        }
        const X = [];
        const Q = [
            {
              title: "Bienvenue 👋",
              videoUrl:
                "https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/upload/tuto_video/step1-onboarding.mp4",
              videoPoster:
                "https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/upload/tuto_video/step6-onboarding.png",
              description:
                `\n            
                <p>Déplacez votre avatar à l’aide des flèches de votre clavier ou en faisant un clic droit à un endroit de la carte. Sur mobile, déplacez simplement votre doigt sur l’écran.</p>\n            
                <p>Au besoin, appuyez sur la touche Espace pour interagir avec les objets et/ou personnages. Sur mobile, appuyez simplement sur l’encadré qui s’affichera.</p>\n
                \n
              `,
              shortTiltle:
                "",
            },
            {
              title: "Discutez avec quelqu’un 💬",
              videoUrl:
                "https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/upload/tuto_video/step2-onboarding.mp4",
              videoPoster:
                "https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/upload/tuto_video/step5-onboarding.png",
              description:
              `\n            
                <p>Partez à la rencontre des autres joueurs directement depuis la messagerie en direct :</p>\n            
                            <p>\n                
                              <ul>\n                    
                                <li>Accédez à la liste des utilisateurs connectés dans votre monde.</li>\n
                                <li>Cliquez sur le bouton de téléportation pour rejoindre un joueur facilement.</li>\n                    
                                <li>Rejoignez directement une conférence en cours.</li>\n 
                                <li>Échangez des fichiers avec les autres joueurs (documents, images).</li>\n                              
                              </ul>\n            
                            </p>
                \n
              `,
              shortTiltle: "",
            },
            {
              title: "Participez à une conférence 🎤",
              videoUrl:
                "https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/upload/tuto_video/step3-onboarding-v2.mp4",
              videoPoster:
                "https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/upload/tuto_video/step4-onboarding.png",
              description:
              `\n            
              <p>Entrez dans une salle de conférence pour vous connecter avec les autres joueurs.</p>\n            
                          <p>\n                
                            <ul>\n
                              <li>Appuyez sur la touche espace pour accéder à la conférence.</li>\n                    
                              <li>Cliquez sur la croix rouge pour fermer la conférence.</li>\n
                              <li>Ouvrez le chat ou le système de sondage.</li>\n
                              <li>Levez la main (les orateurs seront avertis) ou envoyez des émojis.</li>\n
                            </ul>\n            
                          </p>
              \n
            `,
            shortTiltle: "",
            },
            {
              title: "Interagissez avec votre environnement 🏌",
              videoUrl:
                "https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/upload/tuto_video/step4-onboarding.mp4",
              videoPoster:
                "https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/upload/tuto_video/step3-onboarding.png",
              description:
              `\n            
              <p>Vous pouvez interagir avec des objets en vous en approchant. Une fenêtre s’ouvrira à droite de votre écran : cela peut être une page web ou une vidéo YouTube.</p>\n
              \n
              <ul>\n    
              <li>Cliquez sur la croix rouge pour fermer la fenêtre interactive.</li>\n 
              <li>Cliquez sur les trois traits bleus pour agrandir ou réduire la fenêtre interactive.</li>\n 
              </ul>\n 
              </p>
              \n
            `,
            shortTiltle: "",
            },
            {
              title: "Ne pas déranger 🚫",
              videoUrl:
                "https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/upload/tuto_video/step5-onboarding.mp4",
              videoPoster:
                "https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/upload/tuto_video/step2-onboarding.png",
              description:
                "\n            <p>Entrez dans des zones silencieuses lorsque vous ne voulez pas être dérangé. Personne ne pourra se connecter avec vous et votre caméra et votre micro seront automatiquement désactivés.</p>\n            <p>Vous pouvez également utiliser le bouton \"Ne pas déranger\" dans la messagerie en direct.</p>\n            ",
                shortTiltle: "",
            },
            
          ],
          tt = (function (t, e = n) {
            let r;
            const o = new Set();
            function i(e) {
              if (u(t, e) && ((t = e), r)) {
                const e = !X.length;
                for (const e of o) e[1](), X.push(e, t);
                if (e) {
                  for (let t = 0; t < X.length; t += 2) X[t][0](X[t + 1]);
                  X.length = 0;
                }
              }
            }
            return {
              set: i,
              update: function (e) {
                i(e(t));
              },
              subscribe: function (c, a = n) {
                const u = [c, a];
                return (
                  o.add(u),
                  1 === o.size && (r = e(i) || n),
                  c(t),
                  () => {
                    o.delete(u), 0 === o.size && (r(), (r = null));
                  }
                );
              },
            };
          })(1);
        function et(t) {
          let e, r, o, i, c, a, u, l, f, p, d, y, h, v, S, O;
          return {
            c() {
              (e = w("div")),
                (r = w("div")),
                (o = w("h1")),
                (i = E(t[0])),
                (c = j()),
                (a = w("p")),
                (u = E(t[1])),
                (l = j()),
                (f = w("div")),
                (p = w("video")),
                (d = w("track")),
                (y = w("source")),
                (v = E("\n            Video not available in your navigator")),
                (S = j()),
                (O = w("div")),
                x(o, "class", "tw-p-3"),
                x(a, "class", "tw-p-3"),
                x(r, "class", "title tw-text-white"),
                x(d, "kind", "captions"),
                s(y.src, (h = t[2])) || x(y, "src", h),
                x(y, "type", "video/mp4"),
                x(p, "class", "tw-w-full tw-rounded-lg"),
                x(p, "poster", t[3]),
                (p.controls = !0),
                (p.autoplay = !0),
                (p.muted = !0),
                x(f, "class", "video"),
                x(
                  O,
                  "class",
                  "description tw-p-3 tw-mb-16 tw-text-left tw-text-white tw-pb-20"
                ),
                x(e, "class", "ste tw-px-16 tw-py-5 tw-overflow-y-scroll");
            },
            m(n, s) {
              b(n, e, s),
                g(e, r),
                g(r, o),
                g(o, i),
                g(r, c),
                g(r, a),
                g(a, u),
                g(e, l),
                g(e, f),
                g(f, p),
                g(p, d),
                g(p, y),
                g(p, v),
                g(e, S),
                g(e, O),
                (O.innerHTML = t[4]);
            },
            p(t, [e]) {
              1 & e && k(i, t[0]),
                2 & e && k(u, t[1]),
                4 & e && !s(y.src, (h = t[2])) && x(y, "src", h),
                8 & e && x(p, "poster", t[3]),
                16 & e && (O.innerHTML = t[4]);
            },
            i: n,
            o: n,
            d(t) {
              t && m(e);
            },
          };
        }
        function rt(t, e, r) {
          let { title: n } = e,
            { shortTiltle: o } = e,
            { videoUrl: i } = e,
            { videoPoster: c } = e,
            { description: a } = e;
          return (
            (t.$$set = (t) => {
              "title" in t && r(0, (n = t.title)),
                "shortTiltle" in t && r(1, (o = t.shortTiltle)),
                "videoUrl" in t && r(2, (i = t.videoUrl)),
                "videoPoster" in t && r(3, (c = t.videoPoster)),
                "description" in t && r(4, (a = t.description));
            }),
            [n, o, i, c, a]
          );
        }
        const nt = class extends Z {
          constructor(t) {
            super(),
              K(this, t, rt, et, u, {
                title: 0,
                shortTiltle: 1,
                videoUrl: 2,
                videoPoster: 3,
                description: 4,
              });
          }
        };
        function ot(t, e, r) {
          const n = t.slice();
          return (n[8] = e[r]), (n[10] = r), n;
        }
        function it(t) {
          let e, r;
          return {
            c() {
              (e = w("span")),
                x(
                  e,
                  "class",
                  (r =
                    "elispe " +
                    (t[10] + 1 === t[0]
                      ? "tw-bg-light-blue"
                      : "tw-bg-lighter-purple") +
                    " svelte-1lf2sdr")
                );
            },
            m(t, r) {
              b(t, e, r);
            },
            p(t, n) {
              1 & n &&
                r !==
                  (r =
                    "elispe " +
                    (t[10] + 1 === t[0]
                      ? "tw-bg-light-blue"
                      : "tw-bg-lighter-purple") +
                    " svelte-1lf2sdr") &&
                x(e, "class", r);
            },
            d(t) {
              t && m(e);
            },
          };
        }
        function ct(t) {
          let e, r, o;
          return {
            c() {
              (e = w("button")),
                (e.innerHTML =
                  'Suivant\n            <span class="tw-px-4 tw-absolute tw-right-4">&gt;</span>'),
                x(
                  e,
                  "class",
                  "btn light tw-w-1/3 tw-justify-center tw-mx-6 tw-relative tw-cursor-pointer svelte-1lf2sdr"
                );
            },
            m(n, i) {
              b(n, e, i), r || ((o = O(e, "click", A(t[1]))), (r = !0));
            },
            p: n,
            d(t) {
              t && m(e), (r = !1), o();
            },
          };
        }
        function at(t) {
          let e, r, o;
          return {
            c() {
              (e = w("button")),
                (e.textContent = "Finish"),
                x(
                  e,
                  "class",
                  "btn light tw-w-1/3 tw-justify-center tw-mx-6 tw-relative tw-cursor-pointer svelte-1lf2sdr"
                );
            },
            m(n, i) {
              b(n, e, i), r || ((o = O(e, "click", A(t[3]))), (r = !0));
            },
            p: n,
            d(t) {
              t && m(e), (r = !1), o();
            },
          };
        }
        function ut(t) {
          let e, r, n, o, i, a, u, l, s, f, p, y, h, S, k, P, _;
          const $ = t[6].default,
            T = (function (t, e, r, n) {
              if (t) {
                const n = d(t, e, r, null);
                return t[0](n);
              }
            })($, t, t[5]);
          let I = Q,
            R = [];
          for (let e = 0; e < I.length; e += 1) R[e] = it(ot(t, I, e));
          function F(t, e) {
            return t[0] === Q.length ? at : ct;
          }
          let N = F(t),
            D = N(t);
          return {
            c() {
              (e = w("div")),
                T && T.c(),
                (r = j()),
                (n = w("div")),
                (o = j()),
                (i = w("div")),
                (a = w("div"));
              for (let t = 0; t < R.length; t += 1) R[t].c();
              (u = j()),
                (l = w("button")),
                (s = w("span")),
                (s.textContent = "<"),
                (f = E(" Précédent")),
                (y = j()),
                D.c(),
                (h = j()),
                (S = w("button")),
                (S.textContent = "Passer"),
                x(n, "class", "progress-bar"),
                x(e, "class", "body"),
                x(
                  a,
                  "class",
                  "elispes tw-bg-medium-purple/60 tw-absolute tw-w-full -tw-top-10 tw-flex tw-flex-row tw-justify-center tw-align-middle svelte-1lf2sdr"
                ),
                x(s, "class", "tw-px-4 tw-absolute tw-left-4"),
                x(
                  l,
                  "class",
                  (p =
                    "btn " +
                    (1 === t[0] ? "disabled" : "light outline") +
                    " tw-w-1/3 tw-justify-center tw-mx-6 tw-relative tw-cursor-pointer svelte-1lf2sdr")
                ),
                x(
                  S,
                  "class",
                  "btn blue-title tw-underline tw-decoration-light-blue tw-cursor-pointer svelte-1lf2sdr"
                ),
                x(
                  i,
                  "class",
                  "footer tw-p-3 tw-bg-medium-purple tw-flex tw-justify-around tw-fixed tw-bottom-0 tw-w-full tw-overflow-y-hidden tw-overflow-x-auto tw-flex-wrap tw-overflow-visible svelte-1lf2sdr"
                );
            },
            m(c, p) {
              b(c, e, p),
                T && T.m(e, null),
                g(e, r),
                g(e, n),
                b(c, o, p),
                b(c, i, p),
                g(i, a);
              for (let t = 0; t < R.length; t += 1) R[t].m(a, null);
              g(i, u),
                g(i, l),
                g(l, s),
                g(l, f),
                g(i, y),
                D.m(i, null),
                g(i, h),
                g(i, S),
                (k = !0),
                P ||
                  ((_ = [O(l, "click", A(t[2])), O(S, "click", A(t[4]))]),
                  (P = !0));
            },
            p(t, [e]) {
              if (
                (T &&
                  T.p &&
                  (!k || 32 & e) &&
                  (function (t, e, r, n, o, i) {
                    if (o) {
                      const c = d(e, r, n, i);
                      t.p(c, o);
                    }
                  })(
                    T,
                    $,
                    t,
                    t[5],
                    k
                      ? (function (t, e, r, n) {
                          if (t[2] && n) {
                            const o = t[2](n(r));
                            if (void 0 === e.dirty) return o;
                            if ("object" == typeof o) {
                              const t = [],
                                r = Math.max(e.dirty.length, o.length);
                              for (let n = 0; n < r; n += 1)
                                t[n] = e.dirty[n] | o[n];
                              return t;
                            }
                            return e.dirty | o;
                          }
                          return e.dirty;
                        })($, t[5], e, null)
                      : (function (t) {
                          if (t.ctx.length > 32) {
                            const e = [],
                              r = t.ctx.length / 32;
                            for (let t = 0; t < r; t++) e[t] = -1;
                            return e;
                          }
                          return -1;
                        })(t[5]),
                    null
                  ),
                1 & e)
              ) {
                let r;
                for (I = Q, r = 0; r < I.length; r += 1) {
                  const n = ot(t, I, r);
                  R[r]
                    ? R[r].p(n, e)
                    : ((R[r] = it(n)), R[r].c(), R[r].m(a, null));
                }
                for (; r < R.length; r += 1) R[r].d(1);
                R.length = I.length;
              }
              (!k ||
                (1 & e &&
                  p !==
                    (p =
                      "btn " +
                      (1 === t[0] ? "disabled" : "light outline") +
                      " tw-w-1/3 tw-justify-center tw-mx-6 tw-relative tw-cursor-pointer svelte-1lf2sdr"))) &&
                x(l, "class", p),
                N === (N = F(t)) && D
                  ? D.p(t, e)
                  : (D.d(1), (D = N(t)), D && (D.c(), D.m(i, h)));
            },
            i(t) {
              k || (W(T, t), (k = !0));
            },
            o(t) {
              H(T, t), (k = !1);
            },
            d(t) {
              t && m(e),
                T && T.d(t),
                t && m(o),
                t && m(i),
                v(R, t),
                D.d(),
                (P = !1),
                c(_);
            },
          };
        }
        function lt(t, e, r) {
          let n;
          p(t, tt, (t) => r(0, (n = t)));
          let { $$slots: o = {}, $$scope: i } = e;
          const c = (function () {
            const t = (function () {
              if (!y)
                throw new Error(
                  "Function called outside component initialization"
                );
              return y;
            })();
            return (e, r, { cancelable: n = !1 } = {}) => {
              const o = t.$$.callbacks[e];
              if (o) {
                const i = (function (
                  t,
                  e,
                  { bubbles: r = !1, cancelable: n = !1 } = {}
                ) {
                  const o = document.createEvent("CustomEvent");
                  return o.initCustomEvent(t, r, n, e), o;
                })(e, r, { cancelable: n });
                return (
                  o.slice().forEach((e) => {
                    e.call(t, i);
                  }),
                  !i.defaultPrevented
                );
              }
              return !0;
            };
          })();
          return (
            (t.$$set = (t) => {
              "$$scope" in t && r(5, (i = t.$$scope));
            }),
            [
              n,
              function () {
                n !== Q.length && tt.set(n + 1);
              },
              function () {
                1 !== n && tt.set(n - 1);
              },
              function () {
                c("close");
              },
              function () {
                c("skip");
              },
              i,
              o,
            ]
          );
        }
        r(5483);
        const st = class extends Z {
          constructor(t) {
            super(), K(this, t, lt, ut, u, {});
          }
        };
        function ft(t, e, r) {
          const n = t.slice();
          return (n[1] = e[r]), (n[3] = r), n;
        }
        function pt(t) {
          let e, r;
          return (
            (e = new nt({
              props: {
                title: t[1].title,
                videoUrl: t[1].videoUrl,
                videoPoster: t[1].videoPoster,
                description: t[1].description,
                shortTiltle: t[1].shortTiltle,
              },
            })),
            {
              c() {
                V(e.$$.fragment);
              },
              m(t, n) {
                J(e, t, n), (r = !0);
              },
              p: n,
              i(t) {
                r || (W(e.$$.fragment, t), (r = !0));
              },
              o(t) {
                H(e.$$.fragment, t), (r = !1);
              },
              d(t) {
                Y(e, t);
              },
            }
          );
        }
        function dt(t) {
          let e,
            r,
            n = t[0] === t[3] + 1 && pt(t);
          return {
            c() {
              n && n.c(), (e = S());
            },
            m(t, o) {
              n && n.m(t, o), b(t, e, o), (r = !0);
            },
            p(t, r) {
              t[0] === t[3] + 1
                ? n
                  ? (n.p(t, r), 1 & r && W(n, 1))
                  : ((n = pt(t)), n.c(), W(n, 1), n.m(e.parentNode, e))
                : n &&
                  (z(),
                  H(n, 1, 1, () => {
                    n = null;
                  }),
                  G());
            },
            i(t) {
              r || (W(n), (r = !0));
            },
            o(t) {
              H(n), (r = !1);
            },
            d(t) {
              n && n.d(t), t && m(e);
            },
          };
        }
        function yt(t) {
          let e,
            r,
            n = Q,
            o = [];
          for (let e = 0; e < n.length; e += 1) o[e] = dt(ft(t, n, e));
          const i = (t) =>
            H(o[t], 1, 1, () => {
              o[t] = null;
            });
          return {
            c() {
              for (let t = 0; t < o.length; t += 1) o[t].c();
              e = S();
            },
            m(t, n) {
              for (let e = 0; e < o.length; e += 1) o[e].m(t, n);
              b(t, e, n), (r = !0);
            },
            p(t, r) {
              if (1 & r) {
                let c;
                for (n = Q, c = 0; c < n.length; c += 1) {
                  const i = ft(t, n, c);
                  o[c]
                    ? (o[c].p(i, r), W(o[c], 1))
                    : ((o[c] = dt(i)),
                      o[c].c(),
                      W(o[c], 1),
                      o[c].m(e.parentNode, e));
                }
                for (z(), c = n.length; c < o.length; c += 1) i(c);
                G();
              }
            },
            i(t) {
              if (!r) {
                for (let t = 0; t < n.length; t += 1) W(o[t]);
                r = !0;
              }
            },
            o(t) {
              o = o.filter(Boolean);
              for (let t = 0; t < o.length; t += 1) H(o[t]);
              r = !1;
            },
            d(t) {
              v(o, t), t && m(e);
            },
          };
        }
        function ht(t) {
          let e, r, n;
          return (
            (r = new st({
              props: { $$slots: { default: [yt] }, $$scope: { ctx: t } },
            })),
            r.$on("close", gt),
            r.$on("skip", gt),
            {
              c() {
                (e = w("div")),
                  V(r.$$.fragment),
                  x(
                    e,
                    "class",
                    "tuto tw-h-full tw-text-center tw-bg-dark-purple/95 svelte-wdtaju"
                  );
              },
              m(t, o) {
                b(t, e, o), J(r, e, null), (n = !0);
              },
              p(t, [e]) {
                const n = {};
                17 & e && (n.$$scope = { dirty: e, ctx: t }), r.$set(n);
              },
              i(t) {
                n || (W(r.$$.fragment, t), (n = !0));
              },
              o(t) {
                H(r.$$.fragment, t), (n = !1);
              },
              d(t) {
                t && m(e), Y(r);
              },
            }
          );
        }
        function gt() {
          (WA.player.state.tutorialDone = !0), WA.ui.modal.closeModal();
        }
        function bt(t, e, r) {
          let n;
          return p(t, tt, (t) => r(0, (n = t))), [n];
        }
        r(6070),
          new (class extends Z {
            constructor(t) {
              super(), K(this, t, bt, ht, u, {});
            }
          })({ target: document.body });
      },
      384: (t) => {
        t.exports = function (t) {
          return (
            t &&
            "object" == typeof t &&
            "function" == typeof t.copy &&
            "function" == typeof t.fill &&
            "function" == typeof t.readUInt8
          );
        };
      },
      5955: (t, e, r) => {
        "use strict";
        var n = r(2584),
          o = r(8662),
          i = r(6430),
          c = r(5692);
        function a(t) {
          return t.call.bind(t);
        }
        var u = "undefined" != typeof BigInt,
          l = "undefined" != typeof Symbol,
          s = a(Object.prototype.toString),
          f = a(Number.prototype.valueOf),
          p = a(String.prototype.valueOf),
          d = a(Boolean.prototype.valueOf);
        if (u) var y = a(BigInt.prototype.valueOf);
        if (l) var h = a(Symbol.prototype.valueOf);
        function g(t, e) {
          if ("object" != typeof t) return !1;
          try {
            return e(t), !0;
          } catch (t) {
            return !1;
          }
        }
        function b(t) {
          return "[object Map]" === s(t);
        }
        function m(t) {
          return "[object Set]" === s(t);
        }
        function v(t) {
          return "[object WeakMap]" === s(t);
        }
        function w(t) {
          return "[object WeakSet]" === s(t);
        }
        function E(t) {
          return "[object ArrayBuffer]" === s(t);
        }
        function j(t) {
          return (
            "undefined" != typeof ArrayBuffer &&
            (E.working ? E(t) : t instanceof ArrayBuffer)
          );
        }
        function S(t) {
          return "[object DataView]" === s(t);
        }
        function O(t) {
          return (
            "undefined" != typeof DataView &&
            (S.working ? S(t) : t instanceof DataView)
          );
        }
        (e.isArgumentsObject = n),
          (e.isGeneratorFunction = o),
          (e.isTypedArray = c),
          (e.isPromise = function (t) {
            return (
              ("undefined" != typeof Promise && t instanceof Promise) ||
              (null !== t &&
                "object" == typeof t &&
                "function" == typeof t.then &&
                "function" == typeof t.catch)
            );
          }),
          (e.isArrayBufferView = function (t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(t)
              : c(t) || O(t);
          }),
          (e.isUint8Array = function (t) {
            return "Uint8Array" === i(t);
          }),
          (e.isUint8ClampedArray = function (t) {
            return "Uint8ClampedArray" === i(t);
          }),
          (e.isUint16Array = function (t) {
            return "Uint16Array" === i(t);
          }),
          (e.isUint32Array = function (t) {
            return "Uint32Array" === i(t);
          }),
          (e.isInt8Array = function (t) {
            return "Int8Array" === i(t);
          }),
          (e.isInt16Array = function (t) {
            return "Int16Array" === i(t);
          }),
          (e.isInt32Array = function (t) {
            return "Int32Array" === i(t);
          }),
          (e.isFloat32Array = function (t) {
            return "Float32Array" === i(t);
          }),
          (e.isFloat64Array = function (t) {
            return "Float64Array" === i(t);
          }),
          (e.isBigInt64Array = function (t) {
            return "BigInt64Array" === i(t);
          }),
          (e.isBigUint64Array = function (t) {
            return "BigUint64Array" === i(t);
          }),
          (b.working = "undefined" != typeof Map && b(new Map())),
          (e.isMap = function (t) {
            return (
              "undefined" != typeof Map && (b.working ? b(t) : t instanceof Map)
            );
          }),
          (m.working = "undefined" != typeof Set && m(new Set())),
          (e.isSet = function (t) {
            return (
              "undefined" != typeof Set && (m.working ? m(t) : t instanceof Set)
            );
          }),
          (v.working = "undefined" != typeof WeakMap && v(new WeakMap())),
          (e.isWeakMap = function (t) {
            return (
              "undefined" != typeof WeakMap &&
              (v.working ? v(t) : t instanceof WeakMap)
            );
          }),
          (w.working = "undefined" != typeof WeakSet && w(new WeakSet())),
          (e.isWeakSet = function (t) {
            return w(t);
          }),
          (E.working =
            "undefined" != typeof ArrayBuffer && E(new ArrayBuffer())),
          (e.isArrayBuffer = j),
          (S.working =
            "undefined" != typeof ArrayBuffer &&
            "undefined" != typeof DataView &&
            S(new DataView(new ArrayBuffer(1), 0, 1))),
          (e.isDataView = O);
        var A =
          "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
        function x(t) {
          return "[object SharedArrayBuffer]" === s(t);
        }
        function k(t) {
          return (
            void 0 !== A &&
            (void 0 === x.working && (x.working = x(new A())),
            x.working ? x(t) : t instanceof A)
          );
        }
        function P(t) {
          return g(t, f);
        }
        function _(t) {
          return g(t, p);
        }
        function $(t) {
          return g(t, d);
        }
        function T(t) {
          return u && g(t, y);
        }
        function I(t) {
          return l && g(t, h);
        }
        (e.isSharedArrayBuffer = k),
          (e.isAsyncFunction = function (t) {
            return "[object AsyncFunction]" === s(t);
          }),
          (e.isMapIterator = function (t) {
            return "[object Map Iterator]" === s(t);
          }),
          (e.isSetIterator = function (t) {
            return "[object Set Iterator]" === s(t);
          }),
          (e.isGeneratorObject = function (t) {
            return "[object Generator]" === s(t);
          }),
          (e.isWebAssemblyCompiledModule = function (t) {
            return "[object WebAssembly.Module]" === s(t);
          }),
          (e.isNumberObject = P),
          (e.isStringObject = _),
          (e.isBooleanObject = $),
          (e.isBigIntObject = T),
          (e.isSymbolObject = I),
          (e.isBoxedPrimitive = function (t) {
            return P(t) || _(t) || $(t) || T(t) || I(t);
          }),
          (e.isAnyArrayBuffer = function (t) {
            return "undefined" != typeof Uint8Array && (j(t) || k(t));
          }),
          ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(
            function (t) {
              Object.defineProperty(e, t, {
                enumerable: !1,
                value: function () {
                  throw new Error(t + " is not supported in userland");
                },
              });
            }
          );
      },
      9539: (t, e, r) => {
        var n = r(4155),
          o = r(5108),
          i =
            Object.getOwnPropertyDescriptors ||
            function (t) {
              for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++)
                r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
              return r;
            },
          c = /%[sdj%]/g;
        (e.format = function (t) {
          if (!w(t)) {
            for (var e = [], r = 0; r < arguments.length; r++)
              e.push(s(arguments[r]));
            return e.join(" ");
          }
          r = 1;
          for (
            var n = arguments,
              o = n.length,
              i = String(t).replace(c, function (t) {
                if ("%%" === t) return "%";
                if (r >= o) return t;
                switch (t) {
                  case "%s":
                    return String(n[r++]);
                  case "%d":
                    return Number(n[r++]);
                  case "%j":
                    try {
                      return JSON.stringify(n[r++]);
                    } catch (t) {
                      return "[Circular]";
                    }
                  default:
                    return t;
                }
              }),
              a = n[r];
            r < o;
            a = n[++r]
          )
            m(a) || !S(a) ? (i += " " + a) : (i += " " + s(a));
          return i;
        }),
          (e.deprecate = function (t, r) {
            if (void 0 !== n && !0 === n.noDeprecation) return t;
            if (void 0 === n)
              return function () {
                return e.deprecate(t, r).apply(this, arguments);
              };
            var i = !1;
            return function () {
              if (!i) {
                if (n.throwDeprecation) throw new Error(r);
                n.traceDeprecation ? o.trace(r) : o.error(r), (i = !0);
              }
              return t.apply(this, arguments);
            };
          });
        var a = {},
          u = /^$/;
        if (n.env.NODE_DEBUG) {
          var l = n.env.NODE_DEBUG;
          (l = l
            .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
            .replace(/\*/g, ".*")
            .replace(/,/g, "$|^")
            .toUpperCase()),
            (u = new RegExp("^" + l + "$", "i"));
        }
        function s(t, r) {
          var n = { seen: [], stylize: p };
          return (
            arguments.length >= 3 && (n.depth = arguments[2]),
            arguments.length >= 4 && (n.colors = arguments[3]),
            b(r) ? (n.showHidden = r) : r && e._extend(n, r),
            E(n.showHidden) && (n.showHidden = !1),
            E(n.depth) && (n.depth = 2),
            E(n.colors) && (n.colors = !1),
            E(n.customInspect) && (n.customInspect = !0),
            n.colors && (n.stylize = f),
            d(n, t, n.depth)
          );
        }
        function f(t, e) {
          var r = s.styles[e];
          return r
            ? "[" + s.colors[r][0] + "m" + t + "[" + s.colors[r][1] + "m"
            : t;
        }
        function p(t, e) {
          return t;
        }
        function d(t, r, n) {
          if (
            t.customInspect &&
            r &&
            x(r.inspect) &&
            r.inspect !== e.inspect &&
            (!r.constructor || r.constructor.prototype !== r)
          ) {
            var o = r.inspect(n, t);
            return w(o) || (o = d(t, o, n)), o;
          }
          var i = (function (t, e) {
            if (E(e)) return t.stylize("undefined", "undefined");
            if (w(e)) {
              var r =
                "'" +
                JSON.stringify(e)
                  .replace(/^"|"$/g, "")
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return t.stylize(r, "string");
            }
            return v(e)
              ? t.stylize("" + e, "number")
              : b(e)
              ? t.stylize("" + e, "boolean")
              : m(e)
              ? t.stylize("null", "null")
              : void 0;
          })(t, r);
          if (i) return i;
          var c = Object.keys(r),
            a = (function (t) {
              var e = {};
              return (
                t.forEach(function (t, r) {
                  e[t] = !0;
                }),
                e
              );
            })(c);
          if (
            (t.showHidden && (c = Object.getOwnPropertyNames(r)),
            A(r) &&
              (c.indexOf("message") >= 0 || c.indexOf("description") >= 0))
          )
            return y(r);
          if (0 === c.length) {
            if (x(r)) {
              var u = r.name ? ": " + r.name : "";
              return t.stylize("[Function" + u + "]", "special");
            }
            if (j(r))
              return t.stylize(RegExp.prototype.toString.call(r), "regexp");
            if (O(r)) return t.stylize(Date.prototype.toString.call(r), "date");
            if (A(r)) return y(r);
          }
          var l,
            s = "",
            f = !1,
            p = ["{", "}"];
          return (
            g(r) && ((f = !0), (p = ["[", "]"])),
            x(r) && (s = " [Function" + (r.name ? ": " + r.name : "") + "]"),
            j(r) && (s = " " + RegExp.prototype.toString.call(r)),
            O(r) && (s = " " + Date.prototype.toUTCString.call(r)),
            A(r) && (s = " " + y(r)),
            0 !== c.length || (f && 0 != r.length)
              ? n < 0
                ? j(r)
                  ? t.stylize(RegExp.prototype.toString.call(r), "regexp")
                  : t.stylize("[Object]", "special")
                : (t.seen.push(r),
                  (l = f
                    ? (function (t, e, r, n, o) {
                        for (var i = [], c = 0, a = e.length; c < a; ++c)
                          T(e, String(c))
                            ? i.push(h(t, e, r, n, String(c), !0))
                            : i.push("");
                        return (
                          o.forEach(function (o) {
                            o.match(/^\d+$/) || i.push(h(t, e, r, n, o, !0));
                          }),
                          i
                        );
                      })(t, r, n, a, c)
                    : c.map(function (e) {
                        return h(t, r, n, a, e, f);
                      })),
                  t.seen.pop(),
                  (function (t, e, r) {
                    return t.reduce(function (t, e) {
                      return (
                        e.indexOf("\n"),
                        t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                      );
                    }, 0) > 60
                      ? r[0] +
                          ("" === e ? "" : e + "\n ") +
                          " " +
                          t.join(",\n  ") +
                          " " +
                          r[1]
                      : r[0] + e + " " + t.join(", ") + " " + r[1];
                  })(l, s, p))
              : p[0] + s + p[1]
          );
        }
        function y(t) {
          return "[" + Error.prototype.toString.call(t) + "]";
        }
        function h(t, e, r, n, o, i) {
          var c, a, u;
          if (
            ((u = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] }).get
              ? (a = u.set
                  ? t.stylize("[Getter/Setter]", "special")
                  : t.stylize("[Getter]", "special"))
              : u.set && (a = t.stylize("[Setter]", "special")),
            T(n, o) || (c = "[" + o + "]"),
            a ||
              (t.seen.indexOf(u.value) < 0
                ? (a = m(r)
                    ? d(t, u.value, null)
                    : d(t, u.value, r - 1)).indexOf("\n") > -1 &&
                  (a = i
                    ? a
                        .split("\n")
                        .map(function (t) {
                          return "  " + t;
                        })
                        .join("\n")
                        .substr(2)
                    : "\n" +
                      a
                        .split("\n")
                        .map(function (t) {
                          return "   " + t;
                        })
                        .join("\n"))
                : (a = t.stylize("[Circular]", "special"))),
            E(c))
          ) {
            if (i && o.match(/^\d+$/)) return a;
            (c = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((c = c.substr(1, c.length - 2)), (c = t.stylize(c, "name")))
              : ((c = c
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (c = t.stylize(c, "string")));
          }
          return c + ": " + a;
        }
        function g(t) {
          return Array.isArray(t);
        }
        function b(t) {
          return "boolean" == typeof t;
        }
        function m(t) {
          return null === t;
        }
        function v(t) {
          return "number" == typeof t;
        }
        function w(t) {
          return "string" == typeof t;
        }
        function E(t) {
          return void 0 === t;
        }
        function j(t) {
          return S(t) && "[object RegExp]" === k(t);
        }
        function S(t) {
          return "object" == typeof t && null !== t;
        }
        function O(t) {
          return S(t) && "[object Date]" === k(t);
        }
        function A(t) {
          return S(t) && ("[object Error]" === k(t) || t instanceof Error);
        }
        function x(t) {
          return "function" == typeof t;
        }
        function k(t) {
          return Object.prototype.toString.call(t);
        }
        function P(t) {
          return t < 10 ? "0" + t.toString(10) : t.toString(10);
        }
        (e.debuglog = function (t) {
          if (((t = t.toUpperCase()), !a[t]))
            if (u.test(t)) {
              var r = n.pid;
              a[t] = function () {
                var n = e.format.apply(e, arguments);
                o.error("%s %d: %s", t, r, n);
              };
            } else a[t] = function () {};
          return a[t];
        }),
          (e.inspect = s),
          (s.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39],
          }),
          (s.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red",
          }),
          (e.types = r(5955)),
          (e.isArray = g),
          (e.isBoolean = b),
          (e.isNull = m),
          (e.isNullOrUndefined = function (t) {
            return null == t;
          }),
          (e.isNumber = v),
          (e.isString = w),
          (e.isSymbol = function (t) {
            return "symbol" == typeof t;
          }),
          (e.isUndefined = E),
          (e.isRegExp = j),
          (e.types.isRegExp = j),
          (e.isObject = S),
          (e.isDate = O),
          (e.types.isDate = O),
          (e.isError = A),
          (e.types.isNativeError = A),
          (e.isFunction = x),
          (e.isPrimitive = function (t) {
            return (
              null === t ||
              "boolean" == typeof t ||
              "number" == typeof t ||
              "string" == typeof t ||
              "symbol" == typeof t ||
              void 0 === t
            );
          }),
          (e.isBuffer = r(384));
        var _ = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        function $() {
          var t = new Date(),
            e = [P(t.getHours()), P(t.getMinutes()), P(t.getSeconds())].join(
              ":"
            );
          return [t.getDate(), _[t.getMonth()], e].join(" ");
        }
        function T(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (e.log = function () {
          o.log("%s - %s", $(), e.format.apply(e, arguments));
        }),
          (e.inherits = r(5717)),
          (e._extend = function (t, e) {
            if (!e || !S(e)) return t;
            for (var r = Object.keys(e), n = r.length; n--; ) t[r[n]] = e[r[n]];
            return t;
          });
        var I =
          "undefined" != typeof Symbol
            ? Symbol("util.promisify.custom")
            : void 0;
        function R(t, e) {
          if (!t) {
            var r = new Error("Promise was rejected with a falsy value");
            (r.reason = t), (t = r);
          }
          return e(t);
        }
        (e.promisify = function (t) {
          if ("function" != typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          if (I && t[I]) {
            var e;
            if ("function" != typeof (e = t[I]))
              throw new TypeError(
                'The "util.promisify.custom" argument must be of type Function'
              );
            return (
              Object.defineProperty(e, I, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
              e
            );
          }
          function e() {
            for (
              var e,
                r,
                n = new Promise(function (t, n) {
                  (e = t), (r = n);
                }),
                o = [],
                i = 0;
              i < arguments.length;
              i++
            )
              o.push(arguments[i]);
            o.push(function (t, n) {
              t ? r(t) : e(n);
            });
            try {
              t.apply(this, o);
            } catch (t) {
              r(t);
            }
            return n;
          }
          return (
            Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            I &&
              Object.defineProperty(e, I, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
            Object.defineProperties(e, i(t))
          );
        }),
          (e.promisify.custom = I),
          (e.callbackify = function (t) {
            if ("function" != typeof t)
              throw new TypeError(
                'The "original" argument must be of type Function'
              );
            function e() {
              for (var e = [], r = 0; r < arguments.length; r++)
                e.push(arguments[r]);
              var o = e.pop();
              if ("function" != typeof o)
                throw new TypeError(
                  "The last argument must be of type Function"
                );
              var i = this,
                c = function () {
                  return o.apply(i, arguments);
                };
              t.apply(this, e).then(
                function (t) {
                  n.nextTick(c.bind(null, null, t));
                },
                function (t) {
                  n.nextTick(R.bind(null, t, c));
                }
              );
            }
            return (
              Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
              Object.defineProperties(e, i(t)),
              e
            );
          });
      },
      6430: (t, e, r) => {
        "use strict";
        var n = r(4029),
          o = r(3083),
          i = r(1924),
          c = i("Object.prototype.toString"),
          a = r(6410)(),
          u = "undefined" == typeof globalThis ? r.g : globalThis,
          l = o(),
          s = i("String.prototype.slice"),
          f = {},
          p = r(882),
          d = Object.getPrototypeOf;
        a &&
          p &&
          d &&
          n(l, function (t) {
            if ("function" == typeof u[t]) {
              var e = new u[t]();
              if (Symbol.toStringTag in e) {
                var r = d(e),
                  n = p(r, Symbol.toStringTag);
                if (!n) {
                  var o = d(r);
                  n = p(o, Symbol.toStringTag);
                }
                f[t] = n.get;
              }
            }
          });
        var y = r(5692);
        t.exports = function (t) {
          return (
            !!y(t) &&
            (a && Symbol.toStringTag in t
              ? (function (t) {
                  var e = !1;
                  return (
                    n(f, function (r, n) {
                      if (!e)
                        try {
                          var o = r.call(t);
                          o === n && (e = o);
                        } catch (t) {}
                    }),
                    e
                  );
                })(t)
              : s(c(t), 8, -1))
          );
        };
      },
      3083: (t, e, r) => {
        "use strict";
        var n = [
            "BigInt64Array",
            "BigUint64Array",
            "Float32Array",
            "Float64Array",
            "Int16Array",
            "Int32Array",
            "Int8Array",
            "Uint16Array",
            "Uint32Array",
            "Uint8Array",
            "Uint8ClampedArray",
          ],
          o = "undefined" == typeof globalThis ? r.g : globalThis;
        t.exports = function () {
          for (var t = [], e = 0; e < n.length; e++)
            "function" == typeof o[n[e]] && (t[t.length] = n[e]);
          return t;
        };
      },
      882: (t, e, r) => {
        "use strict";
        var n = r(210)("%Object.getOwnPropertyDescriptor%", !0);
        if (n)
          try {
            n([], "length");
          } catch (t) {
            n = null;
          }
        t.exports = n;
      },
    },
    u = {};
  function l(t) {
    var e = u[t];
    if (void 0 !== e) {
      if (void 0 !== e.error) throw e.error;
      return e.exports;
    }
    var r = (u[t] = { id: t, exports: {} });
    try {
      var n = { id: t, module: r, factory: a[t], require: l };
      l.i.forEach(function (t) {
        t(n);
      }),
        (r = n.module),
        n.factory.call(r.exports, r, r.exports, n.require);
    } catch (t) {
      throw ((r.error = t), t);
    }
    return r.exports;
  }
  (l.m = a),
    (l.c = u),
    (l.i = []),
    (l.hu = (t) => t + "." + l.h() + ".hot-update.js"),
    (l.miniCssF = (t) => {}),
    (l.hmrF = () => "tutorialv1." + l.h() + ".hot-update.json"),
    (l.h = () => "20c18be2451aac1af5c8"),
    (l.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (l.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (t = {}),
    (e = "@workadventure/scripting-api-extra:"),
    (l.l = (r, n, o, i) => {
      if (t[r]) t[r].push(n);
      else {
        var c, a;
        if (void 0 !== o)
          for (
            var u = document.getElementsByTagName("script"), s = 0;
            s < u.length;
            s++
          ) {
            var f = u[s];
            if (
              f.getAttribute("src") == r ||
              f.getAttribute("data-webpack") == e + o
            ) {
              c = f;
              break;
            }
          }
        c ||
          ((a = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          l.nc && c.setAttribute("nonce", l.nc),
          c.setAttribute("data-webpack", e + o),
          (c.src = r)),
          (t[r] = [n]);
        var p = (e, n) => {
            (c.onerror = c.onload = null), clearTimeout(d);
            var o = t[r];
            if (
              (delete t[r],
              c.parentNode && c.parentNode.removeChild(c),
              o && o.forEach((t) => t(n)),
              e)
            )
              return e(n);
          },
          d = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: c }),
            12e4
          );
        (c.onerror = p.bind(null, c.onerror)),
          (c.onload = p.bind(null, c.onload)),
          a && document.head.appendChild(c);
      }
    }),
    (() => {
      var t,
        e,
        r,
        n = {},
        o = l.c,
        i = [],
        c = [],
        a = "idle",
        u = 0,
        s = [];
      function f(t) {
        a = t;
        for (var e = [], r = 0; r < c.length; r++) e[r] = c[r].call(null, t);
        return Promise.all(e);
      }
      function p() {
        0 == --u &&
          f("ready").then(function () {
            if (0 === u) {
              var t = s;
              s = [];
              for (var e = 0; e < t.length; e++) t[e]();
            }
          });
      }
      function d(t) {
        if ("idle" !== a)
          throw new Error("check() is only allowed in idle status");
        return f("check")
          .then(l.hmrM)
          .then(function (r) {
            return r
              ? f("prepare").then(function () {
                  var n = [];
                  return (
                    (e = []),
                    Promise.all(
                      Object.keys(l.hmrC).reduce(function (t, o) {
                        return l.hmrC[o](r.c, r.r, r.m, t, e, n), t;
                      }, [])
                    ).then(function () {
                      return (
                        (e = function () {
                          return t
                            ? h(t)
                            : f("ready").then(function () {
                                return n;
                              });
                        }),
                        0 === u
                          ? e()
                          : new Promise(function (t) {
                              s.push(function () {
                                t(e());
                              });
                            })
                      );
                      var e;
                    })
                  );
                })
              : f(g() ? "ready" : "idle").then(function () {
                  return null;
                });
          });
      }
      function y(t) {
        return "ready" !== a
          ? Promise.resolve().then(function () {
              throw new Error(
                "apply() is only allowed in ready status (state: " + a + ")"
              );
            })
          : h(t);
      }
      function h(t) {
        (t = t || {}), g();
        var n = e.map(function (e) {
          return e(t);
        });
        e = void 0;
        var o = n
          .map(function (t) {
            return t.error;
          })
          .filter(Boolean);
        if (o.length > 0)
          return f("abort").then(function () {
            throw o[0];
          });
        var i = f("dispose");
        n.forEach(function (t) {
          t.dispose && t.dispose();
        });
        var c,
          a = f("apply"),
          u = function (t) {
            c || (c = t);
          },
          l = [];
        return (
          n.forEach(function (t) {
            if (t.apply) {
              var e = t.apply(u);
              if (e) for (var r = 0; r < e.length; r++) l.push(e[r]);
            }
          }),
          Promise.all([i, a]).then(function () {
            return c
              ? f("fail").then(function () {
                  throw c;
                })
              : r
              ? h(t).then(function (t) {
                  return (
                    l.forEach(function (e) {
                      t.indexOf(e) < 0 && t.push(e);
                    }),
                    t
                  );
                })
              : f("idle").then(function () {
                  return l;
                });
          })
        );
      }
      function g() {
        if (r)
          return (
            e || (e = []),
            Object.keys(l.hmrI).forEach(function (t) {
              r.forEach(function (r) {
                l.hmrI[t](r, e);
              });
            }),
            (r = void 0),
            !0
          );
      }
      (l.hmrD = n),
        l.i.push(function (s) {
          var h,
            g,
            b,
            m,
            v = s.module,
            w = (function (e, r) {
              var n = o[r];
              if (!n) return e;
              var c = function (c) {
                  if (n.hot.active) {
                    if (o[c]) {
                      var a = o[c].parents;
                      -1 === a.indexOf(r) && a.push(r);
                    } else (i = [r]), (t = c);
                    -1 === n.children.indexOf(c) && n.children.push(c);
                  } else
                    console.warn(
                      "[HMR] unexpected require(" +
                        c +
                        ") from disposed module " +
                        r
                    ),
                      (i = []);
                  return e(c);
                },
                l = function (t) {
                  return {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return e[t];
                    },
                    set: function (r) {
                      e[t] = r;
                    },
                  };
                };
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) &&
                  "e" !== s &&
                  Object.defineProperty(c, s, l(s));
              return (
                (c.e = function (t) {
                  return (function (t) {
                    switch (a) {
                      case "ready":
                        f("prepare");
                      case "prepare":
                        return u++, t.then(p, p), t;
                      default:
                        return t;
                    }
                  })(e.e(t));
                }),
                c
              );
            })(s.require, s.id);
          (v.hot =
            ((h = s.id),
            (g = v),
            (m = {
              _acceptedDependencies: {},
              _acceptedErrorHandlers: {},
              _declinedDependencies: {},
              _selfAccepted: !1,
              _selfDeclined: !1,
              _selfInvalidated: !1,
              _disposeHandlers: [],
              _main: (b = t !== h),
              _requireSelf: function () {
                (i = g.parents.slice()), (t = b ? void 0 : h), l(h);
              },
              active: !0,
              accept: function (t, e, r) {
                if (void 0 === t) m._selfAccepted = !0;
                else if ("function" == typeof t) m._selfAccepted = t;
                else if ("object" == typeof t && null !== t)
                  for (var n = 0; n < t.length; n++)
                    (m._acceptedDependencies[t[n]] = e || function () {}),
                      (m._acceptedErrorHandlers[t[n]] = r);
                else
                  (m._acceptedDependencies[t] = e || function () {}),
                    (m._acceptedErrorHandlers[t] = r);
              },
              decline: function (t) {
                if (void 0 === t) m._selfDeclined = !0;
                else if ("object" == typeof t && null !== t)
                  for (var e = 0; e < t.length; e++)
                    m._declinedDependencies[t[e]] = !0;
                else m._declinedDependencies[t] = !0;
              },
              dispose: function (t) {
                m._disposeHandlers.push(t);
              },
              addDisposeHandler: function (t) {
                m._disposeHandlers.push(t);
              },
              removeDisposeHandler: function (t) {
                var e = m._disposeHandlers.indexOf(t);
                e >= 0 && m._disposeHandlers.splice(e, 1);
              },
              invalidate: function () {
                switch (((this._selfInvalidated = !0), a)) {
                  case "idle":
                    (e = []),
                      Object.keys(l.hmrI).forEach(function (t) {
                        l.hmrI[t](h, e);
                      }),
                      f("ready");
                    break;
                  case "ready":
                    Object.keys(l.hmrI).forEach(function (t) {
                      l.hmrI[t](h, e);
                    });
                    break;
                  case "prepare":
                  case "check":
                  case "dispose":
                  case "apply":
                    (r = r || []).push(h);
                }
              },
              check: d,
              apply: y,
              status: function (t) {
                if (!t) return a;
                c.push(t);
              },
              addStatusHandler: function (t) {
                c.push(t);
              },
              removeStatusHandler: function (t) {
                var e = c.indexOf(t);
                e >= 0 && c.splice(e, 1);
              },
              data: n[h],
            }),
            (t = void 0),
            m)),
            (v.parents = i),
            (v.children = []),
            (i = []),
            (s.require = w);
        }),
        (l.hmrC = {}),
        (l.hmrI = {});
    })(),
    (() => {
      var t;
      l.g.importScripts && (t = l.g.location + "");
      var e = l.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var r = e.getElementsByTagName("script");
        r.length && (t = r[r.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (l.p = t + "../");
    })(),
    (r = (t, e, r, n) => {
      var o = document.createElement("link");
      return (
        (o.rel = "stylesheet"),
        (o.type = "text/css"),
        (o.onerror = o.onload =
          (i) => {
            if (((o.onerror = o.onload = null), "load" === i.type)) r();
            else {
              var c = i && ("load" === i.type ? "missing" : i.type),
                a = (i && i.target && i.target.href) || e,
                u = new Error(
                  "Loading CSS chunk " + t + " failed.\n(" + a + ")"
                );
              (u.code = "CSS_CHUNK_LOAD_FAILED"),
                (u.type = c),
                (u.request = a),
                o.parentNode.removeChild(o),
                n(u);
            }
          }),
        (o.href = e),
        document.head.appendChild(o),
        o
      );
    }),
    (n = (t, e) => {
      for (
        var r = document.getElementsByTagName("link"), n = 0;
        n < r.length;
        n++
      ) {
        var o = (c = r[n]).getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (o === t || o === e)) return c;
      }
      var i = document.getElementsByTagName("style");
      for (n = 0; n < i.length; n++) {
        var c;
        if ((o = (c = i[n]).getAttribute("data-href")) === t || o === e)
          return c;
      }
    }),
    (o = []),
    (i = []),
    (c = (t) => ({
      dispose: () => {
        for (var t = 0; t < o.length; t++) {
          var e = o[t];
          e.parentNode && e.parentNode.removeChild(e);
        }
        o.length = 0;
      },
      apply: () => {
        for (var t = 0; t < i.length; t++) i[t].rel = "stylesheet";
        i.length = 0;
      },
    })),
    (l.hmrC.miniCss = (t, e, a, u, s, f) => {
      s.push(c),
        t.forEach((t) => {
          var e = l.miniCssF(t),
            c = l.p + e,
            a = n(e, c);
          a &&
            u.push(
              new Promise((e, n) => {
                var u = r(
                  t,
                  c,
                  () => {
                    (u.as = "style"), (u.rel = "preload"), e();
                  },
                  n
                );
                o.push(a), i.push(u);
              })
            );
        });
    }),
    (() => {
      var t,
        e,
        r,
        n,
        o,
        i = (l.hmrS_jsonp = l.hmrS_jsonp || { 742: 0 }),
        c = {};
      function a(e, r) {
        return (
          (t = r),
          new Promise((t, r) => {
            c[e] = t;
            var n = l.p + l.hu(e),
              o = new Error();
            l.l(n, (t) => {
              if (c[e]) {
                c[e] = void 0;
                var n = t && ("load" === t.type ? "missing" : t.type),
                  i = t && t.target && t.target.src;
                (o.message =
                  "Loading hot update chunk " +
                  e +
                  " failed.\n(" +
                  n +
                  ": " +
                  i +
                  ")"),
                  (o.name = "ChunkLoadError"),
                  (o.type = n),
                  (o.request = i),
                  r(o);
              }
            });
          })
        );
      }
      function u(t) {
        function c(t) {
          for (
            var e = [t],
              r = {},
              n = e.map(function (t) {
                return { chain: [t], id: t };
              });
            n.length > 0;

          ) {
            var o = n.pop(),
              i = o.id,
              c = o.chain,
              u = l.c[i];
            if (u && (!u.hot._selfAccepted || u.hot._selfInvalidated)) {
              if (u.hot._selfDeclined)
                return { type: "self-declined", chain: c, moduleId: i };
              if (u.hot._main)
                return { type: "unaccepted", chain: c, moduleId: i };
              for (var s = 0; s < u.parents.length; s++) {
                var f = u.parents[s],
                  p = l.c[f];
                if (p) {
                  if (p.hot._declinedDependencies[i])
                    return {
                      type: "declined",
                      chain: c.concat([f]),
                      moduleId: i,
                      parentId: f,
                    };
                  -1 === e.indexOf(f) &&
                    (p.hot._acceptedDependencies[i]
                      ? (r[f] || (r[f] = []), a(r[f], [i]))
                      : (delete r[f],
                        e.push(f),
                        n.push({ chain: c.concat([f]), id: f })));
                }
              }
            }
          }
          return {
            type: "accepted",
            moduleId: t,
            outdatedModules: e,
            outdatedDependencies: r,
          };
        }
        function a(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            -1 === t.indexOf(n) && t.push(n);
          }
        }
        l.f && delete l.f.jsonpHmr, (e = void 0);
        var u = {},
          s = [],
          f = {},
          p = function (t) {
            console.warn(
              "[HMR] unexpected require(" + t.id + ") to disposed module"
            );
          };
        for (var d in r)
          if (l.o(r, d)) {
            var y,
              h = r[d],
              g = !1,
              b = !1,
              m = !1,
              v = "";
            switch (
              ((y = h ? c(d) : { type: "disposed", moduleId: d }).chain &&
                (v = "\nUpdate propagation: " + y.chain.join(" -> ")),
              y.type)
            ) {
              case "self-declined":
                t.onDeclined && t.onDeclined(y),
                  t.ignoreDeclined ||
                    (g = new Error(
                      "Aborted because of self decline: " + y.moduleId + v
                    ));
                break;
              case "declined":
                t.onDeclined && t.onDeclined(y),
                  t.ignoreDeclined ||
                    (g = new Error(
                      "Aborted because of declined dependency: " +
                        y.moduleId +
                        " in " +
                        y.parentId +
                        v
                    ));
                break;
              case "unaccepted":
                t.onUnaccepted && t.onUnaccepted(y),
                  t.ignoreUnaccepted ||
                    (g = new Error(
                      "Aborted because " + d + " is not accepted" + v
                    ));
                break;
              case "accepted":
                t.onAccepted && t.onAccepted(y), (b = !0);
                break;
              case "disposed":
                t.onDisposed && t.onDisposed(y), (m = !0);
                break;
              default:
                throw new Error("Unexception type " + y.type);
            }
            if (g) return { error: g };
            if (b)
              for (d in ((f[d] = h),
              a(s, y.outdatedModules),
              y.outdatedDependencies))
                l.o(y.outdatedDependencies, d) &&
                  (u[d] || (u[d] = []), a(u[d], y.outdatedDependencies[d]));
            m && (a(s, [y.moduleId]), (f[d] = p));
          }
        r = void 0;
        for (var w, E = [], j = 0; j < s.length; j++) {
          var S = s[j],
            O = l.c[S];
          O &&
            (O.hot._selfAccepted || O.hot._main) &&
            f[S] !== p &&
            !O.hot._selfInvalidated &&
            E.push({
              module: S,
              require: O.hot._requireSelf,
              errorHandler: O.hot._selfAccepted,
            });
        }
        return {
          dispose: function () {
            var t;
            n.forEach(function (t) {
              delete i[t];
            }),
              (n = void 0);
            for (var e, r = s.slice(); r.length > 0; ) {
              var o = r.pop(),
                c = l.c[o];
              if (c) {
                var a = {},
                  f = c.hot._disposeHandlers;
                for (j = 0; j < f.length; j++) f[j].call(null, a);
                for (
                  l.hmrD[o] = a,
                    c.hot.active = !1,
                    delete l.c[o],
                    delete u[o],
                    j = 0;
                  j < c.children.length;
                  j++
                ) {
                  var p = l.c[c.children[j]];
                  p &&
                    (t = p.parents.indexOf(o)) >= 0 &&
                    p.parents.splice(t, 1);
                }
              }
            }
            for (var d in u)
              if (l.o(u, d) && (c = l.c[d]))
                for (w = u[d], j = 0; j < w.length; j++)
                  (e = w[j]),
                    (t = c.children.indexOf(e)) >= 0 && c.children.splice(t, 1);
          },
          apply: function (e) {
            for (var r in f) l.o(f, r) && (l.m[r] = f[r]);
            for (var n = 0; n < o.length; n++) o[n](l);
            for (var i in u)
              if (l.o(u, i)) {
                var c = l.c[i];
                if (c) {
                  w = u[i];
                  for (var a = [], p = [], d = [], y = 0; y < w.length; y++) {
                    var h = w[y],
                      g = c.hot._acceptedDependencies[h],
                      b = c.hot._acceptedErrorHandlers[h];
                    if (g) {
                      if (-1 !== a.indexOf(g)) continue;
                      a.push(g), p.push(b), d.push(h);
                    }
                  }
                  for (var m = 0; m < a.length; m++)
                    try {
                      a[m].call(null, w);
                    } catch (r) {
                      if ("function" == typeof p[m])
                        try {
                          p[m](r, { moduleId: i, dependencyId: d[m] });
                        } catch (n) {
                          t.onErrored &&
                            t.onErrored({
                              type: "accept-error-handler-errored",
                              moduleId: i,
                              dependencyId: d[m],
                              error: n,
                              originalError: r,
                            }),
                            t.ignoreErrored || (e(n), e(r));
                        }
                      else
                        t.onErrored &&
                          t.onErrored({
                            type: "accept-errored",
                            moduleId: i,
                            dependencyId: d[m],
                            error: r,
                          }),
                          t.ignoreErrored || e(r);
                    }
                }
              }
            for (var v = 0; v < E.length; v++) {
              var j = E[v],
                S = j.module;
              try {
                j.require(S);
              } catch (r) {
                if ("function" == typeof j.errorHandler)
                  try {
                    j.errorHandler(r, { moduleId: S, module: l.c[S] });
                  } catch (n) {
                    t.onErrored &&
                      t.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: S,
                        error: n,
                        originalError: r,
                      }),
                      t.ignoreErrored || (e(n), e(r));
                  }
                else
                  t.onErrored &&
                    t.onErrored({
                      type: "self-accept-errored",
                      moduleId: S,
                      error: r,
                    }),
                    t.ignoreErrored || e(r);
              }
            }
            return s;
          },
        };
      }
      (self.webpackHotUpdate_workadventure_scripting_api_extra = (e, n, i) => {
        for (var a in n) l.o(n, a) && ((r[a] = n[a]), t && t.push(a));
        i && o.push(i), c[e] && (c[e](), (c[e] = void 0));
      }),
        (l.hmrI.jsonp = function (t, e) {
          r || ((r = {}), (o = []), (n = []), e.push(u)),
            l.o(r, t) || (r[t] = l.m[t]);
        }),
        (l.hmrC.jsonp = function (t, c, s, f, p, d) {
          p.push(u),
            (e = {}),
            (n = c),
            (r = s.reduce(function (t, e) {
              return (t[e] = !1), t;
            }, {})),
            (o = []),
            t.forEach(function (t) {
              l.o(i, t) && void 0 !== i[t]
                ? (f.push(a(t, d)), (e[t] = !0))
                : (e[t] = !1);
            }),
            l.f &&
              (l.f.jsonpHmr = function (t, r) {
                e && l.o(e, t) && !e[t] && (r.push(a(t)), (e[t] = !0));
              });
        }),
        (l.hmrM = () => {
          if ("undefined" == typeof fetch)
            throw new Error("No browser support: need fetch API");
          return fetch(l.p + l.hmrF()).then((t) => {
            if (404 !== t.status) {
              if (!t.ok)
                throw new Error(
                  "Failed to fetch update manifest " + t.statusText
                );
              return t.json();
            }
          });
        });
    })(),
    l(1619);
})();
//# sourceMappingURL=tutorialv1.6842716d8378466c6ca4.js.map
