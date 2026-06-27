(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && i(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
function Yh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ep = { exports: {} },
  Hs = {},
  tp = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fr = Symbol.for("react.element"),
  Xh = Symbol.for("react.portal"),
  Zh = Symbol.for("react.fragment"),
  eg = Symbol.for("react.strict_mode"),
  tg = Symbol.for("react.profiler"),
  ng = Symbol.for("react.provider"),
  ig = Symbol.for("react.context"),
  rg = Symbol.for("react.forward_ref"),
  sg = Symbol.for("react.suspense"),
  ag = Symbol.for("react.memo"),
  og = Symbol.for("react.lazy"),
  Rc = Symbol.iterator;
function lg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Rc && e[Rc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var np = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ip = Object.assign,
  rp = {};
function mi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = rp),
    (this.updater = n || np));
}
mi.prototype.isReactComponent = {};
mi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
mi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sp() {}
sp.prototype = mi.prototype;
function fl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = rp),
    (this.updater = n || np));
}
var ml = (fl.prototype = new sp());
ml.constructor = fl;
ip(ml, mi.prototype);
ml.isPureReactComponent = !0;
var Ic = Array.isArray,
  ap = Object.prototype.hasOwnProperty,
  hl = { current: null },
  op = { key: !0, ref: !0, __self: !0, __source: !0 };
function lp(e, t, n) {
  var i,
    r = {},
    s = null,
    a = null;
  if (t != null)
    for (i in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      ap.call(t, i) && !op.hasOwnProperty(i) && (r[i] = t[i]);
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
    r.children = c;
  }
  if (e && e.defaultProps)
    for (i in ((o = e.defaultProps), o)) r[i] === void 0 && (r[i] = o[i]);
  return {
    $$typeof: fr,
    type: e,
    key: s,
    ref: a,
    props: r,
    _owner: hl.current,
  };
}
function cg(e, t) {
  return {
    $$typeof: fr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fr;
}
function ug(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vc = /\/+/g;
function ya(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ug("" + e.key)
    : t.toString(36);
}
function Jr(e, t, n, i, r) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case fr:
          case Xh:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (r = r(a)),
      (e = i === "" ? "." + ya(a, 0) : i),
      Ic(r)
        ? ((n = ""),
          e != null && (n = e.replace(Vc, "$&/") + "/"),
          Jr(r, t, n, "", function (u) {
            return u;
          }))
        : r != null &&
          (gl(r) &&
            (r = cg(
              r,
              n +
                (!r.key || (a && a.key === r.key)
                  ? ""
                  : ("" + r.key).replace(Vc, "$&/") + "/") +
                e,
            )),
          t.push(r)),
      1
    );
  if (((a = 0), (i = i === "" ? "." : i + ":"), Ic(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var c = i + ya(s, o);
      a += Jr(s, t, n, c, r);
    }
  else if (((c = lg(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(s = e.next()).done; )
      ((s = s.value), (c = i + ya(s, o++)), (a += Jr(s, t, n, c, r)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return a;
}
function br(e, t, n) {
  if (e == null) return e;
  var i = [],
    r = 0;
  return (
    Jr(e, i, "", "", function (s) {
      return t.call(n, s, r++);
    }),
    i
  );
}
function dg(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  Qr = { transition: null },
  pg = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: Qr,
    ReactCurrentOwner: hl,
  };
function cp() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = {
  map: br,
  forEach: function (e, t, n) {
    br(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      br(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      br(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
O.Component = mi;
O.Fragment = Zh;
O.Profiler = tg;
O.PureComponent = fl;
O.StrictMode = eg;
O.Suspense = sg;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pg;
O.act = cp;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var i = ip({}, e.props),
    r = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = hl.current)),
      t.key !== void 0 && (r = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in t)
      ap.call(t, c) &&
        !op.hasOwnProperty(c) &&
        (i[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) i.children = n;
  else if (1 < c) {
    o = Array(c);
    for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
    i.children = o;
  }
  return { $$typeof: fr, type: e.type, key: r, ref: s, props: i, _owner: a };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: ig,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ng, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = lp;
O.createFactory = function (e) {
  var t = lp.bind(null, e);
  return ((t.type = e), t);
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: rg, render: e };
};
O.isValidElement = gl;
O.lazy = function (e) {
  return { $$typeof: og, _payload: { _status: -1, _result: e }, _init: dg };
};
O.memo = function (e, t) {
  return { $$typeof: ag, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Qr.transition;
  Qr.transition = {};
  try {
    e();
  } finally {
    Qr.transition = t;
  }
};
O.unstable_act = cp;
O.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
O.useContext = function (e) {
  return Ce.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
O.useId = function () {
  return Ce.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return Ce.current.useRef(e);
};
O.useState = function (e) {
  return Ce.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return Ce.current.useTransition();
};
O.version = "18.3.1";
tp.exports = O;
var _ = tp.exports;
const vl = Yh(_);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fg = _,
  mg = Symbol.for("react.element"),
  hg = Symbol.for("react.fragment"),
  gg = Object.prototype.hasOwnProperty,
  vg = fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yg = { key: !0, ref: !0, __self: !0, __source: !0 };
function up(e, t, n) {
  var i,
    r = {},
    s = null,
    a = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref));
  for (i in t) gg.call(t, i) && !yg.hasOwnProperty(i) && (r[i] = t[i]);
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) r[i] === void 0 && (r[i] = t[i]);
  return {
    $$typeof: mg,
    type: e,
    key: s,
    ref: a,
    props: r,
    _owner: vg.current,
  };
}
Hs.Fragment = hg;
Hs.jsx = up;
Hs.jsxs = up;
ep.exports = Hs;
var l = ep.exports,
  io = {},
  dp = { exports: {} },
  Fe = {},
  pp = { exports: {} },
  fp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, R) {
    var z = E.length;
    E.push(R);
    e: for (; 0 < z; ) {
      var I = (z - 1) >>> 1,
        J = E[I];
      if (0 < r(J, R)) ((E[I] = R), (E[z] = J), (z = I));
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function i(E) {
    if (E.length === 0) return null;
    var R = E[0],
      z = E.pop();
    if (z !== R) {
      E[0] = z;
      e: for (var I = 0, J = E.length, un = J >>> 1; I < un; ) {
        var st = 2 * (I + 1) - 1,
          Rn = E[st],
          Me = st + 1,
          dn = E[Me];
        if (0 > r(Rn, z))
          Me < J && 0 > r(dn, Rn)
            ? ((E[I] = dn), (E[Me] = z), (I = Me))
            : ((E[I] = Rn), (E[st] = z), (I = st));
        else if (Me < J && 0 > r(dn, z)) ((E[I] = dn), (E[Me] = z), (I = Me));
        else break e;
      }
    }
    return R;
  }
  function r(E, R) {
    var z = E.sortIndex - R.sortIndex;
    return z !== 0 ? z : E.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var c = [],
    u = [],
    d = 1,
    p = null,
    f = 3,
    g = !1,
    y = !1,
    x = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(E) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) i(u);
      else if (R.startTime <= E)
        (i(u), (R.sortIndex = R.expirationTime), t(c, R));
      else break;
      R = n(u);
    }
  }
  function j(E) {
    if (((x = !1), h(E), !y))
      if (n(c) !== null) ((y = !0), ne(k));
      else {
        var R = n(u);
        R !== null && $e(j, R.startTime - E);
      }
  }
  function k(E, R) {
    ((y = !1), x && ((x = !1), v(C), (C = -1)), (g = !0));
    var z = f;
    try {
      for (
        h(R), p = n(c);
        p !== null && (!(p.expirationTime > R) || (E && !ce()));
      ) {
        var I = p.callback;
        if (typeof I == "function") {
          ((p.callback = null), (f = p.priorityLevel));
          var J = I(p.expirationTime <= R);
          ((R = e.unstable_now()),
            typeof J == "function" ? (p.callback = J) : p === n(c) && i(c),
            h(R));
        } else i(c);
        p = n(c);
      }
      if (p !== null) var un = !0;
      else {
        var st = n(u);
        (st !== null && $e(j, st.startTime - R), (un = !1));
      }
      return un;
    } finally {
      ((p = null), (f = z), (g = !1));
    }
  }
  var N = !1,
    P = null,
    C = -1,
    L = 5,
    M = -1;
  function ce() {
    return !(e.unstable_now() - M < L);
  }
  function fe() {
    if (P !== null) {
      var E = e.unstable_now();
      M = E;
      var R = !0;
      try {
        R = P(!0, E);
      } finally {
        R ? we() : ((N = !1), (P = null));
      }
    } else N = !1;
  }
  var we;
  if (typeof m == "function")
    we = function () {
      m(fe);
    };
  else if (typeof MessageChannel < "u") {
    var ue = new MessageChannel(),
      Dt = ue.port2;
    ((ue.port1.onmessage = fe),
      (we = function () {
        Dt.postMessage(null);
      }));
  } else
    we = function () {
      w(fe, 0);
    };
  function ne(E) {
    ((P = E), N || ((N = !0), we()));
  }
  function $e(E, R) {
    C = w(function () {
      E(e.unstable_now());
    }, R);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), ne(k));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (L = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (E) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = f;
      }
      var z = f;
      f = R;
      try {
        return E();
      } finally {
        f = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, R) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var z = f;
      f = E;
      try {
        return R();
      } finally {
        f = z;
      }
    }),
    (e.unstable_scheduleCallback = function (E, R, z) {
      var I = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? I + z : I))
          : (z = I),
        E)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = z + J),
        (E = {
          id: d++,
          callback: R,
          priorityLevel: E,
          startTime: z,
          expirationTime: J,
          sortIndex: -1,
        }),
        z > I
          ? ((E.sortIndex = z),
            t(u, E),
            n(c) === null &&
              E === n(u) &&
              (x ? (v(C), (C = -1)) : (x = !0), $e(j, z - I)))
          : ((E.sortIndex = J), t(c, E), y || g || ((y = !0), ne(k))),
        E
      );
    }),
    (e.unstable_shouldYield = ce),
    (e.unstable_wrapCallback = function (E) {
      var R = f;
      return function () {
        var z = f;
        f = R;
        try {
          return E.apply(this, arguments);
        } finally {
          f = z;
        }
      };
    }));
})(fp);
pp.exports = fp;
var xg = pp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jg = _,
  ze = xg;
function b(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var mp = new Set(),
  Gi = {};
function En(e, t) {
  (si(e, t), si(e + "Capture", t));
}
function si(e, t) {
  for (Gi[e] = t, e = 0; e < t.length; e++) mp.add(t[e]);
}
var bt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ro = Object.prototype.hasOwnProperty,
  _g =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zc = {},
  Oc = {};
function wg(e) {
  return ro.call(Oc, e)
    ? !0
    : ro.call(zc, e)
      ? !1
      : _g.test(e)
        ? (Oc[e] = !0)
        : ((zc[e] = !0), !1);
}
function kg(e, t, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Sg(e, t, n, i) {
  if (t === null || typeof t > "u" || kg(e, t, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, i, r, s, a) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a));
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yl = /[\-:]([a-z])/g;
function xl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yl, xl);
    ge[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yl, xl);
    ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yl, xl);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function jl(e, t, n, i) {
  var r = ge.hasOwnProperty(t) ? ge[t] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Sg(t, n, r, i) && (n = null),
    i || r === null
      ? wg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
        ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
        : ((t = r.attributeName),
          (i = r.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((r = r.type),
              (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
              i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
}
var At = jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cr = Symbol.for("react.element"),
  Vn = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  _l = Symbol.for("react.strict_mode"),
  so = Symbol.for("react.profiler"),
  hp = Symbol.for("react.provider"),
  gp = Symbol.for("react.context"),
  wl = Symbol.for("react.forward_ref"),
  ao = Symbol.for("react.suspense"),
  oo = Symbol.for("react.suspense_list"),
  kl = Symbol.for("react.memo"),
  It = Symbol.for("react.lazy"),
  vp = Symbol.for("react.offscreen"),
  Fc = Symbol.iterator;
function vi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fc && e[Fc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z = Object.assign,
  xa;
function Ni(e) {
  if (xa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xa = (t && t[1]) || "";
    }
  return (
    `
` +
    xa +
    e
  );
}
var ja = !1;
function _a(e, t) {
  if (!e || ja) return "";
  ja = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var i = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          i = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        i = u;
      }
      e();
    }
  } catch (u) {
    if (u && i && typeof u.stack == "string") {
      for (
        var r = u.stack.split(`
`),
          s = i.stack.split(`
`),
          a = r.length - 1,
          o = s.length - 1;
        1 <= a && 0 <= o && r[a] !== s[o];
      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (r[a] !== s[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || r[a] !== s[o])) {
                var c =
                  `
` + r[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    ((ja = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Ni(e) : "";
}
function bg(e) {
  switch (e.tag) {
    case 5:
      return Ni(e.type);
    case 16:
      return Ni("Lazy");
    case 13:
      return Ni("Suspense");
    case 19:
      return Ni("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = _a(e.type, !1)), e);
    case 11:
      return ((e = _a(e.type.render, !1)), e);
    case 1:
      return ((e = _a(e.type, !0)), e);
    default:
      return "";
  }
}
function lo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case Vn:
      return "Portal";
    case so:
      return "Profiler";
    case _l:
      return "StrictMode";
    case ao:
      return "Suspense";
    case oo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gp:
        return (e.displayName || "Context") + ".Consumer";
      case hp:
        return (e._context.displayName || "Context") + ".Provider";
      case wl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case kl:
        return (
          (t = e.displayName || null),
          t !== null ? t : lo(e.type) || "Memo"
        );
      case It:
        ((t = e._payload), (e = e._init));
        try {
          return lo(e(t));
        } catch {}
    }
  return null;
}
function Cg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return lo(t);
    case 8:
      return t === _l ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function en(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function yp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ng(e) {
  var t = yp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (a) {
          ((i = "" + a), s.call(this, a));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (a) {
          i = "" + a;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Nr(e) {
  e._valueTracker || (e._valueTracker = Ng(e));
}
function xp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    i = "";
  return (
    e && (i = yp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function cs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function co(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Bc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked;
  ((n = en(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function jp(e, t) {
  ((t = t.checked), t != null && jl(e, "checked", t, !1));
}
function uo(e, t) {
  jp(e, t);
  var n = en(t.value),
    i = t.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (i === "submit" || i === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? po(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && po(e, t.type, en(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function $c(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var i = t.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function po(e, t, n) {
  (t !== "number" || cs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pi = Array.isArray;
function Zn(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      ((r = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== r && (e[n].selected = r),
        r && i && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + en(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        ((e[r].selected = !0), i && (e[r].defaultSelected = !0));
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function fo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Uc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(b(92));
      if (Pi(n)) {
        if (1 < n.length) throw Error(b(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: en(n) };
}
function _p(e, t) {
  var n = en(t.value),
    i = en(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i));
}
function Wc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? wp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Pr,
  kp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, r);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Pr = Pr || document.createElement("div"),
          Pr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Pr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ki(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Li = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Pg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Li).forEach(function (e) {
  Pg.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Li[t] = Li[e]));
  });
});
function Sp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Li.hasOwnProperty(e) && Li[e])
      ? ("" + t).trim()
      : t + "px";
}
function bp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = Sp(n, t[n], i);
      (n === "float" && (n = "cssFloat"), i ? e.setProperty(n, r) : (e[n] = r));
    }
}
var Tg = Z(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ho(e, t) {
  if (t) {
    if (Tg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(b(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(b(62));
  }
}
function go(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var vo = null;
function Sl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yo = null,
  ei = null,
  ti = null;
function Hc(e) {
  if ((e = gr(e))) {
    if (typeof yo != "function") throw Error(b(280));
    var t = e.stateNode;
    t && ((t = qs(t)), yo(e.stateNode, e.type, t));
  }
}
function Cp(e) {
  ei ? (ti ? ti.push(e) : (ti = [e])) : (ei = e);
}
function Np() {
  if (ei) {
    var e = ei,
      t = ti;
    if (((ti = ei = null), Hc(e), t)) for (e = 0; e < t.length; e++) Hc(t[e]);
  }
}
function Pp(e, t) {
  return e(t);
}
function Tp() {}
var wa = !1;
function Ep(e, t, n) {
  if (wa) return e(t, n);
  wa = !0;
  try {
    return Pp(e, t, n);
  } finally {
    ((wa = !1), (ei !== null || ti !== null) && (Tp(), Np()));
  }
}
function Ji(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var i = qs(n);
  if (i === null) return null;
  n = i[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((i = !i.disabled) ||
        ((e = e.type),
        (i = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !i));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(b(231, t, typeof n));
  return n;
}
var xo = !1;
if (bt)
  try {
    var yi = {};
    (Object.defineProperty(yi, "passive", {
      get: function () {
        xo = !0;
      },
    }),
      window.addEventListener("test", yi, yi),
      window.removeEventListener("test", yi, yi));
  } catch {
    xo = !1;
  }
function Eg(e, t, n, i, r, s, a, o, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Di = !1,
  us = null,
  ds = !1,
  jo = null,
  Ag = {
    onError: function (e) {
      ((Di = !0), (us = e));
    },
  };
function Lg(e, t, n, i, r, s, a, o, c) {
  ((Di = !1), (us = null), Eg.apply(Ag, arguments));
}
function Dg(e, t, n, i, r, s, a, o, c) {
  if ((Lg.apply(this, arguments), Di)) {
    if (Di) {
      var u = us;
      ((Di = !1), (us = null));
    } else throw Error(b(198));
    ds || ((ds = !0), (jo = u));
  }
}
function An(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ap(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gc(e) {
  if (An(e) !== e) throw Error(b(188));
}
function Mg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = An(e)), t === null)) throw Error(b(188));
    return t !== e ? null : e;
  }
  for (var n = e, i = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return (Gc(r), e);
        if (s === i) return (Gc(r), t);
        s = s.sibling;
      }
      throw Error(b(188));
    }
    if (n.return !== i.return) ((n = r), (i = s));
    else {
      for (var a = !1, o = r.child; o; ) {
        if (o === n) {
          ((a = !0), (n = r), (i = s));
          break;
        }
        if (o === i) {
          ((a = !0), (i = r), (n = s));
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === n) {
            ((a = !0), (n = s), (i = r));
            break;
          }
          if (o === i) {
            ((a = !0), (i = s), (n = r));
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(b(189));
      }
    }
    if (n.alternate !== i) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? e : t;
}
function Lp(e) {
  return ((e = Mg(e)), e !== null ? Dp(e) : null);
}
function Dp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Dp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mp = ze.unstable_scheduleCallback,
  Kc = ze.unstable_cancelCallback,
  Rg = ze.unstable_shouldYield,
  Ig = ze.unstable_requestPaint,
  ie = ze.unstable_now,
  Vg = ze.unstable_getCurrentPriorityLevel,
  bl = ze.unstable_ImmediatePriority,
  Rp = ze.unstable_UserBlockingPriority,
  ps = ze.unstable_NormalPriority,
  zg = ze.unstable_LowPriority,
  Ip = ze.unstable_IdlePriority,
  Gs = null,
  ut = null;
function Og(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function")
    try {
      ut.onCommitFiberRoot(Gs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nt = Math.clz32 ? Math.clz32 : $g,
  Fg = Math.log,
  Bg = Math.LN2;
function $g(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Fg(e) / Bg) | 0)) | 0);
}
var Tr = 64,
  Er = 4194304;
function Ti(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~r;
    o !== 0 ? (i = Ti(o)) : ((s &= a), s !== 0 && (i = Ti(s)));
  } else ((a = n & ~r), a !== 0 ? (i = Ti(a)) : s !== 0 && (i = Ti(s)));
  if (i === 0) return 0;
  if (
    t !== 0 &&
    t !== i &&
    !(t & r) &&
    ((r = i & -i), (s = t & -t), r >= s || (r === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      ((n = 31 - nt(t)), (r = 1 << n), (i |= e[n]), (t &= ~r));
  return i;
}
function Ug(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Wg(e, t) {
  for (
    var n = e.suspendedLanes,
      i = e.pingedLanes,
      r = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var a = 31 - nt(s),
      o = 1 << a,
      c = r[a];
    (c === -1
      ? (!(o & n) || o & i) && (r[a] = Ug(o, t))
      : c <= t && (e.expiredLanes |= o),
      (s &= ~o));
  }
}
function _o(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Vp() {
  var e = Tr;
  return ((Tr <<= 1), !(Tr & 4194240) && (Tr = 64), e);
}
function ka(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nt(t)),
    (e[t] = n));
}
function Hg(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var i = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - nt(n),
      s = 1 << r;
    ((t[r] = 0), (i[r] = -1), (e[r] = -1), (n &= ~s));
  }
}
function Cl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var i = 31 - nt(n),
      r = 1 << i;
    ((r & t) | (e[i] & t) && (e[i] |= t), (n &= ~r));
  }
}
var $ = 0;
function zp(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Op,
  Nl,
  Fp,
  Bp,
  $p,
  wo = !1,
  Ar = [],
  Wt = null,
  Ht = null,
  Gt = null,
  Qi = new Map(),
  qi = new Map(),
  Ot = [],
  Gg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Jc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ht = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Qi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qi.delete(t.pointerId);
  }
}
function xi(e, t, n, i, r, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      t !== null && ((t = gr(t)), t !== null && Nl(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e);
}
function Kg(e, t, n, i, r) {
  switch (t) {
    case "focusin":
      return ((Wt = xi(Wt, e, t, n, i, r)), !0);
    case "dragenter":
      return ((Ht = xi(Ht, e, t, n, i, r)), !0);
    case "mouseover":
      return ((Gt = xi(Gt, e, t, n, i, r)), !0);
    case "pointerover":
      var s = r.pointerId;
      return (Qi.set(s, xi(Qi.get(s) || null, e, t, n, i, r)), !0);
    case "gotpointercapture":
      return (
        (s = r.pointerId),
        qi.set(s, xi(qi.get(s) || null, e, t, n, i, r)),
        !0
      );
  }
  return !1;
}
function Up(e) {
  var t = xn(e.target);
  if (t !== null) {
    var n = An(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ap(n)), t !== null)) {
          ((e.blockedOn = t),
            $p(e.priority, function () {
              Fp(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function qr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var i = new n.constructor(n.type, n);
      ((vo = i), n.target.dispatchEvent(i), (vo = null));
    } else return ((t = gr(n)), t !== null && Nl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Qc(e, t, n) {
  qr(e) && n.delete(t);
}
function Jg() {
  ((wo = !1),
    Wt !== null && qr(Wt) && (Wt = null),
    Ht !== null && qr(Ht) && (Ht = null),
    Gt !== null && qr(Gt) && (Gt = null),
    Qi.forEach(Qc),
    qi.forEach(Qc));
}
function ji(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    wo ||
      ((wo = !0),
      ze.unstable_scheduleCallback(ze.unstable_NormalPriority, Jg)));
}
function Yi(e) {
  function t(r) {
    return ji(r, e);
  }
  if (0 < Ar.length) {
    ji(Ar[0], e);
    for (var n = 1; n < Ar.length; n++) {
      var i = Ar[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
  }
  for (
    Wt !== null && ji(Wt, e),
      Ht !== null && ji(Ht, e),
      Gt !== null && ji(Gt, e),
      Qi.forEach(t),
      qi.forEach(t),
      n = 0;
    n < Ot.length;
    n++
  )
    ((i = Ot[n]), i.blockedOn === e && (i.blockedOn = null));
  for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
    (Up(n), n.blockedOn === null && Ot.shift());
}
var ni = At.ReactCurrentBatchConfig,
  ms = !0;
function Qg(e, t, n, i) {
  var r = $,
    s = ni.transition;
  ni.transition = null;
  try {
    (($ = 1), Pl(e, t, n, i));
  } finally {
    (($ = r), (ni.transition = s));
  }
}
function qg(e, t, n, i) {
  var r = $,
    s = ni.transition;
  ni.transition = null;
  try {
    (($ = 4), Pl(e, t, n, i));
  } finally {
    (($ = r), (ni.transition = s));
  }
}
function Pl(e, t, n, i) {
  if (ms) {
    var r = ko(e, t, n, i);
    if (r === null) (Da(e, t, i, hs, n), Jc(e, i));
    else if (Kg(r, e, t, n, i)) i.stopPropagation();
    else if ((Jc(e, i), t & 4 && -1 < Gg.indexOf(e))) {
      for (; r !== null; ) {
        var s = gr(r);
        if (
          (s !== null && Op(s),
          (s = ko(e, t, n, i)),
          s === null && Da(e, t, i, hs, n),
          s === r)
        )
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else Da(e, t, i, null, n);
  }
}
var hs = null;
function ko(e, t, n, i) {
  if (((hs = null), (e = Sl(i)), (e = xn(e)), e !== null))
    if (((t = An(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ap(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((hs = e), null);
}
function Wp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vg()) {
        case bl:
          return 1;
        case Rp:
          return 4;
        case ps:
        case zg:
          return 16;
        case Ip:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null,
  Tl = null,
  Yr = null;
function Hp() {
  if (Yr) return Yr;
  var e,
    t = Tl,
    n = t.length,
    i,
    r = "value" in $t ? $t.value : $t.textContent,
    s = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++);
  var a = n - e;
  for (i = 1; i <= a && t[n - i] === r[s - i]; i++);
  return (Yr = r.slice(e, 1 < i ? 1 - i : void 0));
}
function Xr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Lr() {
  return !0;
}
function qc() {
  return !1;
}
function Be(e) {
  function t(n, i, r, s, a) {
    ((this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null));
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Lr
        : qc),
      (this.isPropagationStopped = qc),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Lr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Lr));
      },
      persist: function () {},
      isPersistent: Lr,
    }),
    t
  );
}
var hi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  El = Be(hi),
  hr = Z({}, hi, { view: 0, detail: 0 }),
  Yg = Be(hr),
  Sa,
  ba,
  _i,
  Ks = Z({}, hr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Al,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _i &&
            (_i && e.type === "mousemove"
              ? ((Sa = e.screenX - _i.screenX), (ba = e.screenY - _i.screenY))
              : (ba = Sa = 0),
            (_i = e)),
          Sa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ba;
    },
  }),
  Yc = Be(Ks),
  Xg = Z({}, Ks, { dataTransfer: 0 }),
  Zg = Be(Xg),
  e0 = Z({}, hr, { relatedTarget: 0 }),
  Ca = Be(e0),
  t0 = Z({}, hi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  n0 = Be(t0),
  i0 = Z({}, hi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  r0 = Be(i0),
  s0 = Z({}, hi, { data: 0 }),
  Xc = Be(s0),
  a0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  o0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  l0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function c0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = l0[e]) ? !!t[e] : !1;
}
function Al() {
  return c0;
}
var u0 = Z({}, hr, {
    key: function (e) {
      if (e.key) {
        var t = a0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? o0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Al,
    charCode: function (e) {
      return e.type === "keypress" ? Xr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  d0 = Be(u0),
  p0 = Z({}, Ks, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Zc = Be(p0),
  f0 = Z({}, hr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Al,
  }),
  m0 = Be(f0),
  h0 = Z({}, hi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  g0 = Be(h0),
  v0 = Z({}, Ks, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  y0 = Be(v0),
  x0 = [9, 13, 27, 32],
  Ll = bt && "CompositionEvent" in window,
  Mi = null;
bt && "documentMode" in document && (Mi = document.documentMode);
var j0 = bt && "TextEvent" in window && !Mi,
  Gp = bt && (!Ll || (Mi && 8 < Mi && 11 >= Mi)),
  eu = String.fromCharCode(32),
  tu = !1;
function Kp(e, t) {
  switch (e) {
    case "keyup":
      return x0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Jp(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var On = !1;
function _0(e, t) {
  switch (e) {
    case "compositionend":
      return Jp(t);
    case "keypress":
      return t.which !== 32 ? null : ((tu = !0), eu);
    case "textInput":
      return ((e = t.data), e === eu && tu ? null : e);
    default:
      return null;
  }
}
function w0(e, t) {
  if (On)
    return e === "compositionend" || (!Ll && Kp(e, t))
      ? ((e = Hp()), (Yr = Tl = $t = null), (On = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Gp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var k0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!k0[e.type] : t === "textarea";
}
function Qp(e, t, n, i) {
  (Cp(i),
    (t = gs(t, "onChange")),
    0 < t.length &&
      ((n = new El("onChange", "change", null, n, i)),
      e.push({ event: n, listeners: t })));
}
var Ri = null,
  Xi = null;
function S0(e) {
  of(e, 0);
}
function Js(e) {
  var t = $n(e);
  if (xp(t)) return e;
}
function b0(e, t) {
  if (e === "change") return t;
}
var qp = !1;
if (bt) {
  var Na;
  if (bt) {
    var Pa = "oninput" in document;
    if (!Pa) {
      var iu = document.createElement("div");
      (iu.setAttribute("oninput", "return;"),
        (Pa = typeof iu.oninput == "function"));
    }
    Na = Pa;
  } else Na = !1;
  qp = Na && (!document.documentMode || 9 < document.documentMode);
}
function ru() {
  Ri && (Ri.detachEvent("onpropertychange", Yp), (Xi = Ri = null));
}
function Yp(e) {
  if (e.propertyName === "value" && Js(Xi)) {
    var t = [];
    (Qp(t, Xi, e, Sl(e)), Ep(S0, t));
  }
}
function C0(e, t, n) {
  e === "focusin"
    ? (ru(), (Ri = t), (Xi = n), Ri.attachEvent("onpropertychange", Yp))
    : e === "focusout" && ru();
}
function N0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Js(Xi);
}
function P0(e, t) {
  if (e === "click") return Js(t);
}
function T0(e, t) {
  if (e === "input" || e === "change") return Js(t);
}
function E0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rt = typeof Object.is == "function" ? Object.is : E0;
function Zi(e, t) {
  if (rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    i = Object.keys(t);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!ro.call(t, r) || !rt(e[r], t[r])) return !1;
  }
  return !0;
}
function su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function au(e, t) {
  var n = su(e);
  e = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = e + n.textContent.length), e <= t && i >= t))
        return { node: n, offset: t - e };
      e = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = su(n);
  }
}
function Xp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Xp(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Zp() {
  for (var e = window, t = cs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = cs(e.document);
  }
  return t;
}
function Dl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function A0(e) {
  var t = Zp(),
    n = e.focusedElem,
    i = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xp(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && Dl(n)) {
      if (
        ((t = i.start),
        (e = i.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        ((i = i.end === void 0 ? s : Math.min(i.end, r)),
          !e.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = au(n, s)));
        var a = au(n, i);
        r &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          s > i
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var L0 = bt && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  So = null,
  Ii = null,
  bo = !1;
function ou(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bo ||
    Fn == null ||
    Fn !== cs(i) ||
    ((i = Fn),
    "selectionStart" in i && Dl(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Ii && Zi(Ii, i)) ||
      ((Ii = i),
      (i = gs(So, "onSelect")),
      0 < i.length &&
        ((t = new El("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = Fn))));
}
function Dr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bn = {
    animationend: Dr("Animation", "AnimationEnd"),
    animationiteration: Dr("Animation", "AnimationIteration"),
    animationstart: Dr("Animation", "AnimationStart"),
    transitionend: Dr("Transition", "TransitionEnd"),
  },
  Ta = {},
  ef = {};
bt &&
  ((ef = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bn.animationend.animation,
    delete Bn.animationiteration.animation,
    delete Bn.animationstart.animation),
  "TransitionEvent" in window || delete Bn.transitionend.transition);
function Qs(e) {
  if (Ta[e]) return Ta[e];
  if (!Bn[e]) return e;
  var t = Bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ef) return (Ta[e] = t[n]);
  return e;
}
var tf = Qs("animationend"),
  nf = Qs("animationiteration"),
  rf = Qs("animationstart"),
  sf = Qs("transitionend"),
  af = new Map(),
  lu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function sn(e, t) {
  (af.set(e, t), En(t, [e]));
}
for (var Ea = 0; Ea < lu.length; Ea++) {
  var Aa = lu[Ea],
    D0 = Aa.toLowerCase(),
    M0 = Aa[0].toUpperCase() + Aa.slice(1);
  sn(D0, "on" + M0);
}
sn(tf, "onAnimationEnd");
sn(nf, "onAnimationIteration");
sn(rf, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(sf, "onTransitionEnd");
si("onMouseEnter", ["mouseout", "mouseover"]);
si("onMouseLeave", ["mouseout", "mouseover"]);
si("onPointerEnter", ["pointerout", "pointerover"]);
si("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ei =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  R0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));
function cu(e, t, n) {
  var i = e.type || "unknown-event";
  ((e.currentTarget = n), Dg(i, t, void 0, e), (e.currentTarget = null));
}
function of(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      r = i.event;
    i = i.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = i.length - 1; 0 <= a; a--) {
          var o = i[a],
            c = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), c !== s && r.isPropagationStopped())) break e;
          (cu(r, o, u), (s = c));
        }
      else
        for (a = 0; a < i.length; a++) {
          if (
            ((o = i[a]),
            (c = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            c !== s && r.isPropagationStopped())
          )
            break e;
          (cu(r, o, u), (s = c));
        }
    }
  }
  if (ds) throw ((e = jo), (ds = !1), (jo = null), e);
}
function H(e, t) {
  var n = t[Eo];
  n === void 0 && (n = t[Eo] = new Set());
  var i = e + "__bubble";
  n.has(i) || (lf(t, e, 2, !1), n.add(i));
}
function La(e, t, n) {
  var i = 0;
  (t && (i |= 4), lf(n, e, i, t));
}
var Mr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Mr]) {
    ((e[Mr] = !0),
      mp.forEach(function (n) {
        n !== "selectionchange" && (R0.has(n) || La(n, !1, e), La(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mr] || ((t[Mr] = !0), La("selectionchange", !1, t));
  }
}
function lf(e, t, n, i) {
  switch (Wp(t)) {
    case 1:
      var r = Qg;
      break;
    case 4:
      r = qg;
      break;
    default:
      r = Pl;
  }
  ((n = r.bind(null, t, n, e)),
    (r = void 0),
    !xo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: r })
        : e.addEventListener(t, n, !0)
      : r !== void 0
        ? e.addEventListener(t, n, { passive: r })
        : e.addEventListener(t, n, !1));
}
function Da(e, t, n, i, r) {
  var s = i;
  if (!(t & 1) && !(t & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var a = i.tag;
      if (a === 3 || a === 4) {
        var o = i.stateNode.containerInfo;
        if (o === r || (o.nodeType === 8 && o.parentNode === r)) break;
        if (a === 4)
          for (a = i.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === r || (c.nodeType === 8 && c.parentNode === r))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = xn(o)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            i = s = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      i = i.return;
    }
  Ep(function () {
    var u = s,
      d = Sl(n),
      p = [];
    e: {
      var f = af.get(e);
      if (f !== void 0) {
        var g = El,
          y = e;
        switch (e) {
          case "keypress":
            if (Xr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = d0;
            break;
          case "focusin":
            ((y = "focus"), (g = Ca));
            break;
          case "focusout":
            ((y = "blur"), (g = Ca));
            break;
          case "beforeblur":
          case "afterblur":
            g = Ca;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Yc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Zg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = m0;
            break;
          case tf:
          case nf:
          case rf:
            g = n0;
            break;
          case sf:
            g = g0;
            break;
          case "scroll":
            g = Yg;
            break;
          case "wheel":
            g = y0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = r0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Zc;
        }
        var x = (t & 4) !== 0,
          w = !x && e === "scroll",
          v = x ? (f !== null ? f + "Capture" : null) : f;
        x = [];
        for (var m = u, h; m !== null; ) {
          h = m;
          var j = h.stateNode;
          if (
            (h.tag === 5 &&
              j !== null &&
              ((h = j),
              v !== null && ((j = Ji(m, v)), j != null && x.push(tr(m, j, h)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < x.length &&
          ((f = new g(f, y, null, n, d)), p.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            n !== vo &&
            (y = n.relatedTarget || n.fromElement) &&
            (xn(y) || y[Ct]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? xn(y) : null),
              y !== null &&
                ((w = An(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((x = Yc),
            (j = "onMouseLeave"),
            (v = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Zc),
              (j = "onPointerLeave"),
              (v = "onPointerEnter"),
              (m = "pointer")),
            (w = g == null ? f : $n(g)),
            (h = y == null ? f : $n(y)),
            (f = new x(j, m + "leave", g, n, d)),
            (f.target = w),
            (f.relatedTarget = h),
            (j = null),
            xn(d) === u &&
              ((x = new x(v, m + "enter", y, n, d)),
              (x.target = h),
              (x.relatedTarget = w),
              (j = x)),
            (w = j),
            g && y)
          )
            t: {
              for (x = g, v = y, m = 0, h = x; h; h = In(h)) m++;
              for (h = 0, j = v; j; j = In(j)) h++;
              for (; 0 < m - h; ) ((x = In(x)), m--);
              for (; 0 < h - m; ) ((v = In(v)), h--);
              for (; m--; ) {
                if (x === v || (v !== null && x === v.alternate)) break t;
                ((x = In(x)), (v = In(v)));
              }
              x = null;
            }
          else x = null;
          (g !== null && uu(p, f, g, x, !1),
            y !== null && w !== null && uu(p, w, y, x, !0));
        }
      }
      e: {
        if (
          ((f = u ? $n(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var k = b0;
        else if (nu(f))
          if (qp) k = T0;
          else {
            k = N0;
            var N = C0;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = P0);
        if (k && (k = k(e, u))) {
          Qp(p, k, n, d);
          break e;
        }
        (N && N(e, f, u),
          e === "focusout" &&
            (N = f._wrapperState) &&
            N.controlled &&
            f.type === "number" &&
            po(f, "number", f.value));
      }
      switch (((N = u ? $n(u) : window), e)) {
        case "focusin":
          (nu(N) || N.contentEditable === "true") &&
            ((Fn = N), (So = u), (Ii = null));
          break;
        case "focusout":
          Ii = So = Fn = null;
          break;
        case "mousedown":
          bo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((bo = !1), ou(p, n, d));
          break;
        case "selectionchange":
          if (L0) break;
        case "keydown":
        case "keyup":
          ou(p, n, d);
      }
      var P;
      if (Ll)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        On
          ? Kp(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      (C &&
        (Gp &&
          n.locale !== "ko" &&
          (On || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && On && (P = Hp())
            : (($t = d),
              (Tl = "value" in $t ? $t.value : $t.textContent),
              (On = !0))),
        (N = gs(u, C)),
        0 < N.length &&
          ((C = new Xc(C, e, null, n, d)),
          p.push({ event: C, listeners: N }),
          P ? (C.data = P) : ((P = Jp(n)), P !== null && (C.data = P)))),
        (P = j0 ? _0(e, n) : w0(e, n)) &&
          ((u = gs(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Xc("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = P))));
    }
    of(p, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gs(e, t) {
  for (var n = t + "Capture", i = []; e !== null; ) {
    var r = e,
      s = r.stateNode;
    (r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = Ji(e, n)),
      s != null && i.unshift(tr(e, s, r)),
      (s = Ji(e, t)),
      s != null && i.push(tr(e, s, r))),
      (e = e.return));
  }
  return i;
}
function In(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uu(e, t, n, i, r) {
  for (var s = t._reactName, a = []; n !== null && n !== i; ) {
    var o = n,
      c = o.alternate,
      u = o.stateNode;
    if (c !== null && c === i) break;
    (o.tag === 5 &&
      u !== null &&
      ((o = u),
      r
        ? ((c = Ji(n, s)), c != null && a.unshift(tr(n, c, o)))
        : r || ((c = Ji(n, s)), c != null && a.push(tr(n, c, o)))),
      (n = n.return));
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var I0 = /\r\n?/g,
  V0 = /\u0000|\uFFFD/g;
function du(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      I0,
      `
`,
    )
    .replace(V0, "");
}
function Rr(e, t, n) {
  if (((t = du(t)), du(e) !== t && n)) throw Error(b(425));
}
function vs() {}
var Co = null,
  No = null;
function Po(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var To = typeof setTimeout == "function" ? setTimeout : void 0,
  z0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  pu = typeof Promise == "function" ? Promise : void 0,
  O0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof pu < "u"
        ? function (e) {
            return pu.resolve(null).then(e).catch(F0);
          }
        : To;
function F0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ma(e, t) {
  var n = t,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          (e.removeChild(r), Yi(t));
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  Yi(t);
}
function Kt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gi = Math.random().toString(36).slice(2),
  lt = "__reactFiber$" + gi,
  nr = "__reactProps$" + gi,
  Ct = "__reactContainer$" + gi,
  Eo = "__reactEvents$" + gi,
  B0 = "__reactListeners$" + gi,
  $0 = "__reactHandles$" + gi;
function xn(e) {
  var t = e[lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ct] || n[lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fu(e); e !== null; ) {
          if ((n = e[lt])) return n;
          e = fu(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function gr(e) {
  return (
    (e = e[lt] || e[Ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function qs(e) {
  return e[nr] || null;
}
var Ao = [],
  Un = -1;
function an(e) {
  return { current: e };
}
function K(e) {
  0 > Un || ((e.current = Ao[Un]), (Ao[Un] = null), Un--);
}
function U(e, t) {
  (Un++, (Ao[Un] = e.current), (e.current = t));
}
var tn = {},
  _e = an(tn),
  Ee = an(!1),
  bn = tn;
function ai(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tn;
  var i = e.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = t[s];
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function Ae(e) {
  return ((e = e.childContextTypes), e != null);
}
function ys() {
  (K(Ee), K(_e));
}
function mu(e, t, n) {
  if (_e.current !== tn) throw Error(b(168));
  (U(_e, t), U(Ee, n));
}
function cf(e, t, n) {
  var i = e.stateNode;
  if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in t)) throw Error(b(108, Cg(e) || "Unknown", r));
  return Z({}, n, i);
}
function xs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
    (bn = _e.current),
    U(_e, e),
    U(Ee, Ee.current),
    !0
  );
}
function hu(e, t, n) {
  var i = e.stateNode;
  if (!i) throw Error(b(169));
  (n
    ? ((e = cf(e, t, bn)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      K(Ee),
      K(_e),
      U(_e, e))
    : K(Ee),
    U(Ee, n));
}
var yt = null,
  Ys = !1,
  Ra = !1;
function uf(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
function U0(e) {
  ((Ys = !0), uf(e));
}
function on() {
  if (!Ra && yt !== null) {
    Ra = !0;
    var e = 0,
      t = $;
    try {
      var n = yt;
      for ($ = 1; e < n.length; e++) {
        var i = n[e];
        do i = i(!0);
        while (i !== null);
      }
      ((yt = null), (Ys = !1));
    } catch (r) {
      throw (yt !== null && (yt = yt.slice(e + 1)), Mp(bl, on), r);
    } finally {
      (($ = t), (Ra = !1));
    }
  }
  return null;
}
var Wn = [],
  Hn = 0,
  js = null,
  _s = 0,
  He = [],
  Ge = 0,
  Cn = null,
  xt = 1,
  jt = "";
function mn(e, t) {
  ((Wn[Hn++] = _s), (Wn[Hn++] = js), (js = e), (_s = t));
}
function df(e, t, n) {
  ((He[Ge++] = xt), (He[Ge++] = jt), (He[Ge++] = Cn), (Cn = e));
  var i = xt;
  e = jt;
  var r = 32 - nt(i) - 1;
  ((i &= ~(1 << r)), (n += 1));
  var s = 32 - nt(t) + r;
  if (30 < s) {
    var a = r - (r % 5);
    ((s = (i & ((1 << a) - 1)).toString(32)),
      (i >>= a),
      (r -= a),
      (xt = (1 << (32 - nt(t) + r)) | (n << r) | i),
      (jt = s + e));
  } else ((xt = (1 << s) | (n << r) | i), (jt = e));
}
function Ml(e) {
  e.return !== null && (mn(e, 1), df(e, 1, 0));
}
function Rl(e) {
  for (; e === js; )
    ((js = Wn[--Hn]), (Wn[Hn] = null), (_s = Wn[--Hn]), (Wn[Hn] = null));
  for (; e === Cn; )
    ((Cn = He[--Ge]),
      (He[Ge] = null),
      (jt = He[--Ge]),
      (He[Ge] = null),
      (xt = He[--Ge]),
      (He[Ge] = null));
}
var Ve = null,
  Ie = null,
  Q = !1,
  tt = null;
function pf(e, t) {
  var n = Ke(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function gu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (Ie = Kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Cn !== null ? { id: xt, overflow: jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Lo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Do(e) {
  if (Q) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!gu(e, t)) {
        if (Lo(e)) throw Error(b(418));
        t = Kt(n.nextSibling);
        var i = Ve;
        t && gu(e, t)
          ? pf(i, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Ve = e));
      }
    } else {
      if (Lo(e)) throw Error(b(418));
      ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Ve = e));
    }
  }
}
function vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ve = e;
}
function Ir(e) {
  if (e !== Ve) return !1;
  if (!Q) return (vu(e), (Q = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Po(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if (Lo(e)) throw (ff(), Error(b(418)));
    for (; t; ) (pf(e, t), (t = Kt(t.nextSibling)));
  }
  if ((vu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = Ve ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function ff() {
  for (var e = Ie; e; ) e = Kt(e.nextSibling);
}
function oi() {
  ((Ie = Ve = null), (Q = !1));
}
function Il(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
var W0 = At.ReactCurrentBatchConfig;
function wi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(b(147, e));
      var r = i,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var o = r.refs;
            a === null ? delete o[s] : (o[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(b(284));
    if (!n._owner) throw Error(b(290, e));
  }
  return e;
}
function Vr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      b(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function yu(e) {
  var t = e._init;
  return t(e._payload);
}
function mf(e) {
  function t(v, m) {
    if (e) {
      var h = v.deletions;
      h === null ? ((v.deletions = [m]), (v.flags |= 16)) : h.push(m);
    }
  }
  function n(v, m) {
    if (!e) return null;
    for (; m !== null; ) (t(v, m), (m = m.sibling));
    return null;
  }
  function i(v, m) {
    for (v = new Map(); m !== null; )
      (m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling));
    return v;
  }
  function r(v, m) {
    return ((v = Yt(v, m)), (v.index = 0), (v.sibling = null), v);
  }
  function s(v, m, h) {
    return (
      (v.index = h),
      e
        ? ((h = v.alternate),
          h !== null
            ? ((h = h.index), h < m ? ((v.flags |= 2), m) : h)
            : ((v.flags |= 2), m))
        : ((v.flags |= 1048576), m)
    );
  }
  function a(v) {
    return (e && v.alternate === null && (v.flags |= 2), v);
  }
  function o(v, m, h, j) {
    return m === null || m.tag !== 6
      ? ((m = $a(h, v.mode, j)), (m.return = v), m)
      : ((m = r(m, h)), (m.return = v), m);
  }
  function c(v, m, h, j) {
    var k = h.type;
    return k === zn
      ? d(v, m, h.props.children, j, h.key)
      : m !== null &&
          (m.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === It &&
              yu(k) === m.type))
        ? ((j = r(m, h.props)), (j.ref = wi(v, m, h)), (j.return = v), j)
        : ((j = ss(h.type, h.key, h.props, null, v.mode, j)),
          (j.ref = wi(v, m, h)),
          (j.return = v),
          j);
  }
  function u(v, m, h, j) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== h.containerInfo ||
      m.stateNode.implementation !== h.implementation
      ? ((m = Ua(h, v.mode, j)), (m.return = v), m)
      : ((m = r(m, h.children || [])), (m.return = v), m);
  }
  function d(v, m, h, j, k) {
    return m === null || m.tag !== 7
      ? ((m = Sn(h, v.mode, j, k)), (m.return = v), m)
      : ((m = r(m, h)), (m.return = v), m);
  }
  function p(v, m, h) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = $a("" + m, v.mode, h)), (m.return = v), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Cr:
          return (
            (h = ss(m.type, m.key, m.props, null, v.mode, h)),
            (h.ref = wi(v, null, m)),
            (h.return = v),
            h
          );
        case Vn:
          return ((m = Ua(m, v.mode, h)), (m.return = v), m);
        case It:
          var j = m._init;
          return p(v, j(m._payload), h);
      }
      if (Pi(m) || vi(m))
        return ((m = Sn(m, v.mode, h, null)), (m.return = v), m);
      Vr(v, m);
    }
    return null;
  }
  function f(v, m, h, j) {
    var k = m !== null ? m.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : o(v, m, "" + h, j);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Cr:
          return h.key === k ? c(v, m, h, j) : null;
        case Vn:
          return h.key === k ? u(v, m, h, j) : null;
        case It:
          return ((k = h._init), f(v, m, k(h._payload), j));
      }
      if (Pi(h) || vi(h)) return k !== null ? null : d(v, m, h, j, null);
      Vr(v, h);
    }
    return null;
  }
  function g(v, m, h, j, k) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return ((v = v.get(h) || null), o(m, v, "" + j, k));
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case Cr:
          return (
            (v = v.get(j.key === null ? h : j.key) || null),
            c(m, v, j, k)
          );
        case Vn:
          return (
            (v = v.get(j.key === null ? h : j.key) || null),
            u(m, v, j, k)
          );
        case It:
          var N = j._init;
          return g(v, m, h, N(j._payload), k);
      }
      if (Pi(j) || vi(j)) return ((v = v.get(h) || null), d(m, v, j, k, null));
      Vr(m, j);
    }
    return null;
  }
  function y(v, m, h, j) {
    for (
      var k = null, N = null, P = m, C = (m = 0), L = null;
      P !== null && C < h.length;
      C++
    ) {
      P.index > C ? ((L = P), (P = null)) : (L = P.sibling);
      var M = f(v, P, h[C], j);
      if (M === null) {
        P === null && (P = L);
        break;
      }
      (e && P && M.alternate === null && t(v, P),
        (m = s(M, m, C)),
        N === null ? (k = M) : (N.sibling = M),
        (N = M),
        (P = L));
    }
    if (C === h.length) return (n(v, P), Q && mn(v, C), k);
    if (P === null) {
      for (; C < h.length; C++)
        ((P = p(v, h[C], j)),
          P !== null &&
            ((m = s(P, m, C)),
            N === null ? (k = P) : (N.sibling = P),
            (N = P)));
      return (Q && mn(v, C), k);
    }
    for (P = i(v, P); C < h.length; C++)
      ((L = g(P, v, C, h[C], j)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? C : L.key),
          (m = s(L, m, C)),
          N === null ? (k = L) : (N.sibling = L),
          (N = L)));
    return (
      e &&
        P.forEach(function (ce) {
          return t(v, ce);
        }),
      Q && mn(v, C),
      k
    );
  }
  function x(v, m, h, j) {
    var k = vi(h);
    if (typeof k != "function") throw Error(b(150));
    if (((h = k.call(h)), h == null)) throw Error(b(151));
    for (
      var N = (k = null), P = m, C = (m = 0), L = null, M = h.next();
      P !== null && !M.done;
      C++, M = h.next()
    ) {
      P.index > C ? ((L = P), (P = null)) : (L = P.sibling);
      var ce = f(v, P, M.value, j);
      if (ce === null) {
        P === null && (P = L);
        break;
      }
      (e && P && ce.alternate === null && t(v, P),
        (m = s(ce, m, C)),
        N === null ? (k = ce) : (N.sibling = ce),
        (N = ce),
        (P = L));
    }
    if (M.done) return (n(v, P), Q && mn(v, C), k);
    if (P === null) {
      for (; !M.done; C++, M = h.next())
        ((M = p(v, M.value, j)),
          M !== null &&
            ((m = s(M, m, C)),
            N === null ? (k = M) : (N.sibling = M),
            (N = M)));
      return (Q && mn(v, C), k);
    }
    for (P = i(v, P); !M.done; C++, M = h.next())
      ((M = g(P, v, C, M.value, j)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? C : M.key),
          (m = s(M, m, C)),
          N === null ? (k = M) : (N.sibling = M),
          (N = M)));
    return (
      e &&
        P.forEach(function (fe) {
          return t(v, fe);
        }),
      Q && mn(v, C),
      k
    );
  }
  function w(v, m, h, j) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === zn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Cr:
          e: {
            for (var k = h.key, N = m; N !== null; ) {
              if (N.key === k) {
                if (((k = h.type), k === zn)) {
                  if (N.tag === 7) {
                    (n(v, N.sibling),
                      (m = r(N, h.props.children)),
                      (m.return = v),
                      (v = m));
                    break e;
                  }
                } else if (
                  N.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === It &&
                    yu(k) === N.type)
                ) {
                  (n(v, N.sibling),
                    (m = r(N, h.props)),
                    (m.ref = wi(v, N, h)),
                    (m.return = v),
                    (v = m));
                  break e;
                }
                n(v, N);
                break;
              } else t(v, N);
              N = N.sibling;
            }
            h.type === zn
              ? ((m = Sn(h.props.children, v.mode, j, h.key)),
                (m.return = v),
                (v = m))
              : ((j = ss(h.type, h.key, h.props, null, v.mode, j)),
                (j.ref = wi(v, m, h)),
                (j.return = v),
                (v = j));
          }
          return a(v);
        case Vn:
          e: {
            for (N = h.key; m !== null; ) {
              if (m.key === N)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === h.containerInfo &&
                  m.stateNode.implementation === h.implementation
                ) {
                  (n(v, m.sibling),
                    (m = r(m, h.children || [])),
                    (m.return = v),
                    (v = m));
                  break e;
                } else {
                  n(v, m);
                  break;
                }
              else t(v, m);
              m = m.sibling;
            }
            ((m = Ua(h, v.mode, j)), (m.return = v), (v = m));
          }
          return a(v);
        case It:
          return ((N = h._init), w(v, m, N(h._payload), j));
      }
      if (Pi(h)) return y(v, m, h, j);
      if (vi(h)) return x(v, m, h, j);
      Vr(v, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        m !== null && m.tag === 6
          ? (n(v, m.sibling), (m = r(m, h)), (m.return = v), (v = m))
          : (n(v, m), (m = $a(h, v.mode, j)), (m.return = v), (v = m)),
        a(v))
      : n(v, m);
  }
  return w;
}
var li = mf(!0),
  hf = mf(!1),
  ws = an(null),
  ks = null,
  Gn = null,
  Vl = null;
function zl() {
  Vl = Gn = ks = null;
}
function Ol(e) {
  var t = ws.current;
  (K(ws), (e._currentValue = t));
}
function Mo(e, t, n) {
  for (; e !== null; ) {
    var i = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
        : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ii(e, t) {
  ((ks = e),
    (Vl = Gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null)));
}
function qe(e) {
  var t = e._currentValue;
  if (Vl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
      if (ks === null) throw Error(b(308));
      ((Gn = e), (ks.dependencies = { lanes: 0, firstContext: e }));
    } else Gn = Gn.next = e;
  return t;
}
var jn = null;
function Fl(e) {
  jn === null ? (jn = [e]) : jn.push(e);
}
function gf(e, t, n, i) {
  var r = t.interleaved;
  return (
    r === null ? ((n.next = n), Fl(t)) : ((n.next = r.next), (r.next = n)),
    (t.interleaved = n),
    Nt(e, i)
  );
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function Bl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function vf(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jt(e, t, n) {
  var i = e.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), F & 2)) {
    var r = i.pending;
    return (
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (i.pending = t),
      Nt(e, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((t.next = t), Fl(i)) : ((t.next = r.next), (r.next = t)),
    (i.interleaved = t),
    Nt(e, n)
  );
}
function Zr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var i = t.lanes;
    ((i &= e.pendingLanes), (n |= i), (t.lanes = n), Cl(e, n));
  }
}
function xu(e, t) {
  var n = e.updateQueue,
    i = e.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (r = s = a) : (s = s.next = a), (n = n.next));
      } while (n !== null);
      s === null ? (r = s = t) : (s = s.next = t);
    } else r = s = t;
    ((n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Ss(e, t, n, i) {
  var r = e.updateQueue;
  Vt = !1;
  var s = r.firstBaseUpdate,
    a = r.lastBaseUpdate,
    o = r.shared.pending;
  if (o !== null) {
    r.shared.pending = null;
    var c = o,
      u = c.next;
    ((c.next = null), a === null ? (s = u) : (a.next = u), (a = c));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (o = d.lastBaseUpdate),
      o !== a &&
        (o === null ? (d.firstBaseUpdate = u) : (o.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (s !== null) {
    var p = r.baseState;
    ((a = 0), (d = u = c = null), (o = s));
    do {
      var f = o.lane,
        g = o.eventTime;
      if ((i & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var y = e,
            x = o;
          switch (((f = t), (g = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                p = y.call(g, p, f);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (f = typeof y == "function" ? y.call(g, p, f) : y),
                f == null)
              )
                break e;
              p = Z({}, p, f);
              break e;
            case 2:
              Vt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (f = r.effects),
          f === null ? (r.effects = [o]) : f.push(o));
      } else
        ((g = {
          eventTime: g,
          lane: f,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          d === null ? ((u = d = g), (c = p)) : (d = d.next = g),
          (a |= f));
      if (((o = o.next), o === null)) {
        if (((o = r.shared.pending), o === null)) break;
        ((f = o),
          (o = f.next),
          (f.next = null),
          (r.lastBaseUpdate = f),
          (r.shared.pending = null));
      }
    } while (1);
    if (
      (d === null && (c = p),
      (r.baseState = c),
      (r.firstBaseUpdate = u),
      (r.lastBaseUpdate = d),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t;
      do ((a |= r.lane), (r = r.next));
      while (r !== t);
    } else s === null && (r.shared.lanes = 0);
    ((Pn |= a), (e.lanes = a), (e.memoizedState = p));
  }
}
function ju(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(b(191, r));
        r.call(i);
      }
    }
}
var vr = {},
  dt = an(vr),
  ir = an(vr),
  rr = an(vr);
function _n(e) {
  if (e === vr) throw Error(b(174));
  return e;
}
function $l(e, t) {
  switch ((U(rr, t), U(ir, e), U(dt, vr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : mo(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = mo(t, e)));
  }
  (K(dt), U(dt, t));
}
function ci() {
  (K(dt), K(ir), K(rr));
}
function yf(e) {
  _n(rr.current);
  var t = _n(dt.current),
    n = mo(t, e.type);
  t !== n && (U(ir, e), U(dt, n));
}
function Ul(e) {
  ir.current === e && (K(dt), K(ir));
}
var q = an(0);
function bs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Ia = [];
function Wl() {
  for (var e = 0; e < Ia.length; e++)
    Ia[e]._workInProgressVersionPrimary = null;
  Ia.length = 0;
}
var es = At.ReactCurrentDispatcher,
  Va = At.ReactCurrentBatchConfig,
  Nn = 0,
  X = null,
  ae = null,
  de = null,
  Cs = !1,
  Vi = !1,
  sr = 0,
  H0 = 0;
function ve() {
  throw Error(b(321));
}
function Hl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n])) return !1;
  return !0;
}
function Gl(e, t, n, i, r, s) {
  if (
    ((Nn = s),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (es.current = e === null || e.memoizedState === null ? Q0 : q0),
    (e = n(i, r)),
    Vi)
  ) {
    s = 0;
    do {
      if (((Vi = !1), (sr = 0), 25 <= s)) throw Error(b(301));
      ((s += 1),
        (de = ae = null),
        (t.updateQueue = null),
        (es.current = Y0),
        (e = n(i, r)));
    } while (Vi);
  }
  if (
    ((es.current = Ns),
    (t = ae !== null && ae.next !== null),
    (Nn = 0),
    (de = ae = X = null),
    (Cs = !1),
    t)
  )
    throw Error(b(300));
  return e;
}
function Kl() {
  var e = sr !== 0;
  return ((sr = 0), e);
}
function ot() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (de === null ? (X.memoizedState = de = e) : (de = de.next = e), de);
}
function Ye() {
  if (ae === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = de === null ? X.memoizedState : de.next;
  if (t !== null) ((de = t), (ae = e));
  else {
    if (e === null) throw Error(b(310));
    ((ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      de === null ? (X.memoizedState = de = e) : (de = de.next = e));
  }
  return de;
}
function ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function za(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var i = ae,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var a = r.next;
      ((r.next = s.next), (s.next = a));
    }
    ((i.baseQueue = r = s), (n.pending = null));
  }
  if (r !== null) {
    ((s = r.next), (i = i.baseState));
    var o = (a = null),
      c = null,
      u = s;
    do {
      var d = u.lane;
      if ((Nn & d) === d)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (i = u.hasEagerState ? u.eagerState : e(i, u.action)));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (c === null ? ((o = c = p), (a = i)) : (c = c.next = p),
          (X.lanes |= d),
          (Pn |= d));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (c === null ? (a = i) : (c.next = o),
      rt(i, t.memoizedState) || (Te = !0),
      (t.memoizedState = i),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = i));
  }
  if (((e = n.interleaved), e !== null)) {
    r = e;
    do ((s = r.lane), (X.lanes |= s), (Pn |= s), (r = r.next));
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Oa(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var i = n.dispatch,
    r = n.pending,
    s = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var a = (r = r.next);
    do ((s = e(s, a.action)), (a = a.next));
    while (a !== r);
    (rt(s, t.memoizedState) || (Te = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, i];
}
function xf() {}
function jf(e, t) {
  var n = X,
    i = Ye(),
    r = t(),
    s = !rt(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (Te = !0)),
    (i = i.queue),
    Jl(kf.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || s || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      or(9, wf.bind(null, n, i, r, t), void 0, null),
      pe === null)
    )
      throw Error(b(349));
    Nn & 30 || _f(n, t, r);
  }
  return r;
}
function _f(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function wf(e, t, n, i) {
  ((t.value = n), (t.getSnapshot = i), Sf(t) && bf(e));
}
function kf(e, t, n) {
  return n(function () {
    Sf(t) && bf(e);
  });
}
function Sf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function bf(e) {
  var t = Nt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function _u(e) {
  var t = ot();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ar,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = J0.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function or(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  );
}
function Cf() {
  return Ye().memoizedState;
}
function ts(e, t, n, i) {
  var r = ot();
  ((X.flags |= e),
    (r.memoizedState = or(1 | t, n, void 0, i === void 0 ? null : i)));
}
function Xs(e, t, n, i) {
  var r = Ye();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (ae !== null) {
    var a = ae.memoizedState;
    if (((s = a.destroy), i !== null && Hl(i, a.deps))) {
      r.memoizedState = or(t, n, s, i);
      return;
    }
  }
  ((X.flags |= e), (r.memoizedState = or(1 | t, n, s, i)));
}
function wu(e, t) {
  return ts(8390656, 8, e, t);
}
function Jl(e, t) {
  return Xs(2048, 8, e, t);
}
function Nf(e, t) {
  return Xs(4, 2, e, t);
}
function Pf(e, t) {
  return Xs(4, 4, e, t);
}
function Tf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ef(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Xs(4, 4, Tf.bind(null, t, e), n)
  );
}
function Ql() {}
function Af(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && Hl(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e);
}
function Lf(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && Hl(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Df(e, t, n) {
  return Nn & 21
    ? (rt(n, t) || ((n = Vp()), (X.lanes |= n), (Pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function G0(e, t) {
  var n = $;
  (($ = n !== 0 && 4 > n ? n : 4), e(!0));
  var i = Va.transition;
  Va.transition = {};
  try {
    (e(!1), t());
  } finally {
    (($ = n), (Va.transition = i));
  }
}
function Mf() {
  return Ye().memoizedState;
}
function K0(e, t, n) {
  var i = qt(e);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Rf(e))
  )
    If(t, n);
  else if (((n = gf(e, t, n, i)), n !== null)) {
    var r = be();
    (it(n, e, i, r), Vf(n, t, i));
  }
}
function J0(e, t, n) {
  var i = qt(e),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Rf(e)) If(t, r);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = s(a, n);
        if (((r.hasEagerState = !0), (r.eagerState = o), rt(o, a))) {
          var c = t.interleaved;
          (c === null
            ? ((r.next = r), Fl(t))
            : ((r.next = c.next), (c.next = r)),
            (t.interleaved = r));
          return;
        }
      } catch {
      } finally {
      }
    ((n = gf(e, t, r, i)),
      n !== null && ((r = be()), it(n, e, i, r), Vf(n, t, i)));
  }
}
function Rf(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function If(e, t) {
  Vi = Cs = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Vf(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes;
    ((i &= e.pendingLanes), (n |= i), (t.lanes = n), Cl(e, n));
  }
}
var Ns = {
    readContext: qe,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  Q0 = {
    readContext: qe,
    useCallback: function (e, t) {
      return ((ot().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: qe,
    useEffect: wu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ts(4194308, 4, Tf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ts(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ts(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ot();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var i = ot();
      return (
        (t = n !== void 0 ? n(t) : t),
        (i.memoizedState = i.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (i.queue = e),
        (e = e.dispatch = K0.bind(null, X, e)),
        [i.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ot();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: _u,
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      return (ot().memoizedState = e);
    },
    useTransition: function () {
      var e = _u(!1),
        t = e[0];
      return ((e = G0.bind(null, e[1])), (ot().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = X,
        r = ot();
      if (Q) {
        if (n === void 0) throw Error(b(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(b(349));
        Nn & 30 || _f(i, t, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (r.queue = s),
        wu(kf.bind(null, i, s, e), [e]),
        (i.flags |= 2048),
        or(9, wf.bind(null, i, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ot(),
        t = pe.identifierPrefix;
      if (Q) {
        var n = jt,
          i = xt;
        ((n = (i & ~(1 << (32 - nt(i) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = H0++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  q0 = {
    readContext: qe,
    useCallback: Af,
    useContext: qe,
    useEffect: Jl,
    useImperativeHandle: Ef,
    useInsertionEffect: Nf,
    useLayoutEffect: Pf,
    useMemo: Lf,
    useReducer: za,
    useRef: Cf,
    useState: function () {
      return za(ar);
    },
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      var t = Ye();
      return Df(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = za(ar)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: jf,
    useId: Mf,
    unstable_isNewReconciler: !1,
  },
  Y0 = {
    readContext: qe,
    useCallback: Af,
    useContext: qe,
    useEffect: Jl,
    useImperativeHandle: Ef,
    useInsertionEffect: Nf,
    useLayoutEffect: Pf,
    useMemo: Lf,
    useReducer: Oa,
    useRef: Cf,
    useState: function () {
      return Oa(ar);
    },
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      var t = Ye();
      return ae === null ? (t.memoizedState = e) : Df(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Oa(ar)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: jf,
    useId: Mf,
    unstable_isNewReconciler: !1,
  };
function Ze(e, t) {
  if (e && e.defaultProps) {
    ((t = Z({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ro(e, t, n, i) {
  ((t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : Z({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Zs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? An(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var i = be(),
      r = qt(e),
      s = wt(i, r);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Jt(e, s, r)),
      t !== null && (it(t, e, r, i), Zr(t, e, r)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var i = be(),
      r = qt(e),
      s = wt(i, r);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Jt(e, s, r)),
      t !== null && (it(t, e, r, i), Zr(t, e, r)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = be(),
      i = qt(e),
      r = wt(n, i);
    ((r.tag = 2),
      t != null && (r.callback = t),
      (t = Jt(e, r, i)),
      t !== null && (it(t, e, i, n), Zr(t, e, i)));
  },
};
function ku(e, t, n, i, r, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(i, s, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Zi(n, i) || !Zi(r, s)
        : !0
  );
}
function zf(e, t, n) {
  var i = !1,
    r = tn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = qe(s))
      : ((r = Ae(t) ? bn : _e.current),
        (i = t.contextTypes),
        (s = (i = i != null) ? ai(e, r) : tn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zs),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Su(e, t, n, i) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && Zs.enqueueReplaceState(t, t.state, null));
}
function Io(e, t, n, i) {
  var r = e.stateNode;
  ((r.props = n), (r.state = e.memoizedState), (r.refs = {}), Bl(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (r.context = qe(s))
    : ((s = Ae(t) ? bn : _e.current), (r.context = ai(e, s))),
    (r.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ro(e, t, s, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      t !== r.state && Zs.enqueueReplaceState(r, r.state, null),
      Ss(e, n, r, i),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308));
}
function ui(e, t) {
  try {
    var n = "",
      i = t;
    do ((n += bg(i)), (i = i.return));
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function Fa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var X0 = typeof WeakMap == "function" ? WeakMap : Map;
function Of(e, t, n) {
  ((n = wt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var i = t.value;
  return (
    (n.callback = function () {
      (Ts || ((Ts = !0), (Ko = i)), Vo(e, t));
    }),
    n
  );
}
function Ff(e, t, n) {
  ((n = wt(-1, n)), (n.tag = 3));
  var i = e.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = t.value;
    ((n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        Vo(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Vo(e, t),
          typeof i != "function" &&
            (Qt === null ? (Qt = new Set([this])) : Qt.add(this)));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function bu(e, t, n) {
  var i = e.pingCache;
  if (i === null) {
    i = e.pingCache = new X0();
    var r = new Set();
    i.set(t, r);
  } else ((r = i.get(t)), r === void 0 && ((r = new Set()), i.set(t, r)));
  r.has(n) || (r.add(n), (e = pv.bind(null, e, t, n)), t.then(e, e));
}
function Cu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nu(e, t, n, i, r) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = r), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wt(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Z0 = At.ReactCurrentOwner,
  Te = !1;
function Se(e, t, n, i) {
  t.child = e === null ? hf(t, null, n, i) : li(t, e.child, n, i);
}
function Pu(e, t, n, i, r) {
  n = n.render;
  var s = t.ref;
  return (
    ii(t, r),
    (i = Gl(e, t, n, i, s, r)),
    (n = Kl()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Pt(e, t, r))
      : (Q && n && Ml(t), (t.flags |= 1), Se(e, t, i, r), t.child)
  );
}
function Tu(e, t, n, i, r) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ic(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Bf(e, t, s, i, r))
      : ((e = ss(n.type, null, i, t, t.mode, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & r))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zi), n(a, i) && e.ref === t.ref)
    )
      return Pt(e, t, r);
  }
  return (
    (t.flags |= 1),
    (e = Yt(s, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Bf(e, t, n, i, r) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Zi(s, i) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = i = s), (e.lanes & r) !== 0))
        e.flags & 131072 && (Te = !0);
      else return ((t.lanes = e.lanes), Pt(e, t, r));
  }
  return zo(e, t, n, i, r);
}
function $f(e, t, n) {
  var i = t.pendingProps,
    r = i.children,
    s = e !== null ? e.memoizedState : null;
  if (i.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(Jn, Re),
        (Re |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(Jn, Re),
          (Re |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        U(Jn, Re),
        (Re |= i));
    }
  else
    (s !== null ? ((i = s.baseLanes | n), (t.memoizedState = null)) : (i = n),
      U(Jn, Re),
      (Re |= i));
  return (Se(e, t, r, n), t.child);
}
function Uf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function zo(e, t, n, i, r) {
  var s = Ae(n) ? bn : _e.current;
  return (
    (s = ai(t, s)),
    ii(t, r),
    (n = Gl(e, t, n, i, s, r)),
    (i = Kl()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Pt(e, t, r))
      : (Q && i && Ml(t), (t.flags |= 1), Se(e, t, n, r), t.child)
  );
}
function Eu(e, t, n, i, r) {
  if (Ae(n)) {
    var s = !0;
    xs(t);
  } else s = !1;
  if ((ii(t, r), t.stateNode === null))
    (ns(e, t), zf(t, n, i), Io(t, n, i, r), (i = !0));
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var c = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = qe(u))
      : ((u = Ae(n) ? bn : _e.current), (u = ai(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    (p ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== i || c !== u) && Su(t, a, i, u)),
      (Vt = !1));
    var f = t.memoizedState;
    ((a.state = f),
      Ss(t, i, a, r),
      (c = t.memoizedState),
      o !== i || f !== c || Ee.current || Vt
        ? (typeof d == "function" && (Ro(t, n, d, i), (c = t.memoizedState)),
          (o = Vt || ku(t, n, o, i, f, c, u))
            ? (p ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = i),
              (t.memoizedState = c)),
          (a.props = i),
          (a.state = c),
          (a.context = u),
          (i = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (i = !1)));
  } else {
    ((a = t.stateNode),
      vf(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Ze(t.type, o)),
      (a.props = u),
      (p = t.pendingProps),
      (f = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = qe(c))
        : ((c = Ae(n) ? bn : _e.current), (c = ai(t, c))));
    var g = n.getDerivedStateFromProps;
    ((d =
      typeof g == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== p || f !== c) && Su(t, a, i, c)),
      (Vt = !1),
      (f = t.memoizedState),
      (a.state = f),
      Ss(t, i, a, r));
    var y = t.memoizedState;
    o !== p || f !== y || Ee.current || Vt
      ? (typeof g == "function" && (Ro(t, n, g, i), (y = t.memoizedState)),
        (u = Vt || ku(t, n, u, i, f, y, c) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(i, y, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(i, y, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = y)),
        (a.props = i),
        (a.state = y),
        (a.context = c),
        (i = u))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1));
  }
  return Oo(e, t, n, i, s, r);
}
function Oo(e, t, n, i, r, s) {
  Uf(e, t);
  var a = (t.flags & 128) !== 0;
  if (!i && !a) return (r && hu(t, n, !1), Pt(e, t, s));
  ((i = t.stateNode), (Z0.current = t));
  var o =
    a && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = li(t, e.child, null, s)), (t.child = li(t, null, o, s)))
      : Se(e, t, o, s),
    (t.memoizedState = i.state),
    r && hu(t, n, !0),
    t.child
  );
}
function Wf(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? mu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && mu(e, t.context, !1),
    $l(e, t.containerInfo));
}
function Au(e, t, n, i, r) {
  return (oi(), Il(r), (t.flags |= 256), Se(e, t, n, i), t.child);
}
var Fo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hf(e, t, n) {
  var i = t.pendingProps,
    r = q.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    U(q, r & 1),
    e === null)
  )
    return (
      Do(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(i & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = na(a, i, 0, null)),
              (e = Sn(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Bo(n)),
              (t.memoizedState = Fo),
              e)
            : ql(t, a))
    );
  if (((r = e.memoizedState), r !== null && ((o = r.dehydrated), o !== null)))
    return ev(e, t, a, i, o, r, n);
  if (s) {
    ((s = i.fallback), (a = t.mode), (r = e.child), (o = r.sibling));
    var c = { mode: "hidden", children: i.children };
    return (
      !(a & 1) && t.child !== r
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = c),
          (t.deletions = null))
        : ((i = Yt(r, c)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      o !== null ? (s = Yt(o, s)) : ((s = Sn(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Bo(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fo),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = Yt(s, { mode: "visible", children: i.children })),
    !(t.mode & 1) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function ql(e, t) {
  return (
    (t = na({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zr(e, t, n, i) {
  return (
    i !== null && Il(i),
    li(t, e.child, null, n),
    (e = ql(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ev(e, t, n, i, r, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = Fa(Error(b(422)))), zr(e, t, a, i))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = i.fallback),
          (r = t.mode),
          (i = na({ mode: "visible", children: i.children }, r, 0, null)),
          (s = Sn(s, r, a, null)),
          (s.flags |= 2),
          (i.return = t),
          (s.return = t),
          (i.sibling = s),
          (t.child = i),
          t.mode & 1 && li(t, e.child, null, a),
          (t.child.memoizedState = Bo(a)),
          (t.memoizedState = Fo),
          s);
  if (!(t.mode & 1)) return zr(e, t, a, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var o = i.dgst;
    return (
      (i = o),
      (s = Error(b(419))),
      (i = Fa(s, i, void 0)),
      zr(e, t, a, i)
    );
  }
  if (((o = (a & e.childLanes) !== 0), Te || o)) {
    if (((i = pe), i !== null)) {
      switch (a & -a) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      ((r = r & (i.suspendedLanes | a) ? 0 : r),
        r !== 0 &&
          r !== s.retryLane &&
          ((s.retryLane = r), Nt(e, r), it(i, e, r, -1)));
    }
    return (nc(), (i = Fa(Error(b(421)))), zr(e, t, a, i));
  }
  return r.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = fv.bind(null, e)),
      (r._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ie = Kt(r.nextSibling)),
      (Ve = t),
      (Q = !0),
      (tt = null),
      e !== null &&
        ((He[Ge++] = xt),
        (He[Ge++] = jt),
        (He[Ge++] = Cn),
        (xt = e.id),
        (jt = e.overflow),
        (Cn = t)),
      (t = ql(t, i.children)),
      (t.flags |= 4096),
      t);
}
function Lu(e, t, n) {
  e.lanes |= t;
  var i = e.alternate;
  (i !== null && (i.lanes |= t), Mo(e.return, t, n));
}
function Ba(e, t, n, i, r) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function Gf(e, t, n) {
  var i = t.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((Se(e, t, i.children, n), (i = q.current), i & 2))
    ((i = (i & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Lu(e, n, t);
        else if (e.tag === 19) Lu(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    i &= 1;
  }
  if ((U(q, i), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          ((e = n.alternate),
            e !== null && bs(e) === null && (r = n),
            (n = n.sibling));
        ((n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Ba(t, !1, r, n, s));
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && bs(e) === null)) {
            t.child = r;
            break;
          }
          ((e = r.sibling), (r.sibling = n), (n = r), (r = e));
        }
        Ba(t, !0, n, null, s);
        break;
      case "together":
        Ba(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ns(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Yt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function tv(e, t, n) {
  switch (t.tag) {
    case 3:
      (Wf(t), oi());
      break;
    case 5:
      yf(t);
      break;
    case 1:
      Ae(t.type) && xs(t);
      break;
    case 4:
      $l(t, t.stateNode.containerInfo);
      break;
    case 10:
      var i = t.type._context,
        r = t.memoizedProps.value;
      (U(ws, i._currentValue), (i._currentValue = r));
      break;
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (U(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Hf(e, t, n)
            : (U(q, q.current & 1),
              (e = Pt(e, t, n)),
              e !== null ? e.sibling : null);
      U(q, q.current & 1);
      break;
    case 19:
      if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (i) return Gf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((r = t.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        U(q, q.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), $f(e, t, n));
  }
  return Pt(e, t, n);
}
var Kf, $o, Jf, Qf;
Kf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
$o = function () {};
Jf = function (e, t, n, i) {
  var r = e.memoizedProps;
  if (r !== i) {
    ((e = t.stateNode), _n(dt.current));
    var s = null;
    switch (n) {
      case "input":
        ((r = co(e, r)), (i = co(e, i)), (s = []));
        break;
      case "select":
        ((r = Z({}, r, { value: void 0 })),
          (i = Z({}, i, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((r = fo(e, r)), (i = fo(e, i)), (s = []));
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (e.onclick = vs);
    }
    ho(n, i);
    var a;
    n = null;
    for (u in r)
      if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === "style") {
          var o = r[u];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Gi.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in i) {
      var c = i[u];
      if (
        ((o = r != null ? r[u] : void 0),
        i.hasOwnProperty(u) && c !== o && (c != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                o[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else (n || (s || (s = []), s.push(u, n)), (n = c));
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (o = o ? o.__html : void 0),
              c != null && o !== c && (s = s || []).push(u, c))
            : u === "children"
              ? (typeof c != "string" && typeof c != "number") ||
                (s = s || []).push(u, "" + c)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Gi.hasOwnProperty(u)
                  ? (c != null && u === "onScroll" && H("scroll", e),
                    s || o === c || (s = []))
                  : (s = s || []).push(u, c));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Qf = function (e, t, n, i) {
  n !== i && (t.flags |= 4);
};
function ki(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; )
          (n.alternate !== null && (i = n), (n = n.sibling));
        i === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (i.sibling = null);
    }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    i = 0;
  if (t)
    for (var r = e.child; r !== null; )
      ((n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling));
  else
    for (r = e.child; r !== null; )
      ((n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = e),
        (r = r.sibling));
  return ((e.subtreeFlags |= i), (e.childLanes = n), t);
}
function nv(e, t, n) {
  var i = t.pendingProps;
  switch ((Rl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ye(t), null);
    case 1:
      return (Ae(t.type) && ys(), ye(t), null);
    case 3:
      return (
        (i = t.stateNode),
        ci(),
        K(Ee),
        K(_e),
        Wl(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ir(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tt !== null && (qo(tt), (tt = null)))),
        $o(e, t),
        ye(t),
        null
      );
    case 5:
      Ul(t);
      var r = _n(rr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Jf(e, t, n, i, r),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(b(166));
          return (ye(t), null);
        }
        if (((e = _n(dt.current)), Ir(t))) {
          ((i = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((i[lt] = t), (i[nr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (H("cancel", i), H("close", i));
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Ei.length; r++) H(Ei[r], i);
              break;
            case "source":
              H("error", i);
              break;
            case "img":
            case "image":
            case "link":
              (H("error", i), H("load", i));
              break;
            case "details":
              H("toggle", i);
              break;
            case "input":
              (Bc(i, s), H("invalid", i));
              break;
            case "select":
              ((i._wrapperState = { wasMultiple: !!s.multiple }),
                H("invalid", i));
              break;
            case "textarea":
              (Uc(i, s), H("invalid", i));
          }
          (ho(n, s), (r = null));
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var o = s[a];
              a === "children"
                ? typeof o == "string"
                  ? i.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      Rr(i.textContent, o, e),
                    (r = ["children", o]))
                  : typeof o == "number" &&
                    i.textContent !== "" + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      Rr(i.textContent, o, e),
                    (r = ["children", "" + o]))
                : Gi.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  H("scroll", i);
            }
          switch (n) {
            case "input":
              (Nr(i), $c(i, s, !0));
              break;
            case "textarea":
              (Nr(i), Wc(i));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = vs);
          }
          ((i = r), (t.updateQueue = i), i !== null && (t.flags |= 4));
        } else {
          ((a = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = wp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == "string"
                  ? (e = a.createElement(n, { is: i.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      i.multiple
                        ? (a.multiple = !0)
                        : i.size && (a.size = i.size)))
              : (e = a.createElementNS(e, n)),
            (e[lt] = t),
            (e[nr] = i),
            Kf(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((a = go(n, i)), n)) {
              case "dialog":
                (H("cancel", e), H("close", e), (r = i));
                break;
              case "iframe":
              case "object":
              case "embed":
                (H("load", e), (r = i));
                break;
              case "video":
              case "audio":
                for (r = 0; r < Ei.length; r++) H(Ei[r], e);
                r = i;
                break;
              case "source":
                (H("error", e), (r = i));
                break;
              case "img":
              case "image":
              case "link":
                (H("error", e), H("load", e), (r = i));
                break;
              case "details":
                (H("toggle", e), (r = i));
                break;
              case "input":
                (Bc(e, i), (r = co(e, i)), H("invalid", e));
                break;
              case "option":
                r = i;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = Z({}, i, { value: void 0 })),
                  H("invalid", e));
                break;
              case "textarea":
                (Uc(e, i), (r = fo(e, i)), H("invalid", e));
                break;
              default:
                r = i;
            }
            (ho(n, r), (o = r));
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var c = o[s];
                s === "style"
                  ? bp(e, c)
                  : s === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && kp(e, c))
                    : s === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && Ki(e, c)
                        : typeof c == "number" && Ki(e, "" + c)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Gi.hasOwnProperty(s)
                          ? c != null && s === "onScroll" && H("scroll", e)
                          : c != null && jl(e, s, c, a));
              }
            switch (n) {
              case "input":
                (Nr(e), $c(e, i, !1));
                break;
              case "textarea":
                (Nr(e), Wc(e));
                break;
              case "option":
                i.value != null && e.setAttribute("value", "" + en(i.value));
                break;
              case "select":
                ((e.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? Zn(e, !!i.multiple, s, !1)
                    : i.defaultValue != null &&
                      Zn(e, !!i.multiple, i.defaultValue, !0));
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = vs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ye(t), null);
    case 6:
      if (e && t.stateNode != null) Qf(e, t, e.memoizedProps, i);
      else {
        if (typeof i != "string" && t.stateNode === null) throw Error(b(166));
        if (((n = _n(rr.current)), _n(dt.current), Ir(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[lt] = t),
            (s = i.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rr(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rr(i.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[lt] = t),
            (t.stateNode = i));
      }
      return (ye(t), null);
    case 13:
      if (
        (K(q),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Ie !== null && t.mode & 1 && !(t.flags & 128))
          (ff(), oi(), (t.flags |= 98560), (s = !1));
        else if (((s = Ir(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(b(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(b(317));
            s[lt] = t;
          } else
            (oi(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ye(t), (s = !1));
        } else (tt !== null && (qo(tt), (tt = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? le === 0 && (le = 3) : nc())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        ci(),
        $o(e, t),
        e === null && er(t.stateNode.containerInfo),
        ye(t),
        null
      );
    case 10:
      return (Ol(t.type._context), ye(t), null);
    case 17:
      return (Ae(t.type) && ys(), ye(t), null);
    case 19:
      if ((K(q), (s = t.memoizedState), s === null)) return (ye(t), null);
      if (((i = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (i) ki(s, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = bs(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    ki(s, !1),
                    i = a.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = i),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (U(q, (q.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ie() > di &&
            ((t.flags |= 128), (i = !0), ki(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!i)
          if (((e = bs(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ki(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !Q)
            )
              return (ye(t), null);
          } else
            2 * ie() - s.renderingStartTime > di &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), ki(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ie()),
          (t.sibling = null),
          (n = q.current),
          U(q, i ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        tc(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? Re & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function iv(e, t) {
  switch ((Rl(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && ys(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ci(),
        K(Ee),
        K(_e),
        Wl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ul(t), null);
    case 13:
      if ((K(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(b(340));
        oi();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (K(q), null);
    case 4:
      return (ci(), null);
    case 10:
      return (Ol(t.type._context), null);
    case 22:
    case 23:
      return (tc(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Or = !1,
  je = !1,
  rv = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function Kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        ee(e, t, i);
      }
    else n.current = null;
}
function Uo(e, t, n) {
  try {
    n();
  } catch (i) {
    ee(e, t, i);
  }
}
var Du = !1;
function sv(e, t) {
  if (((Co = ms), (e = Zp()), Dl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            c = -1,
            u = 0,
            d = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (r !== 0 && p.nodeType !== 3) || (o = a + r),
                p !== s || (i !== 0 && p.nodeType !== 3) || (c = a + i),
                p.nodeType === 3 && (a += p.nodeValue.length),
                (g = p.firstChild) !== null;
            )
              ((f = p), (p = g));
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++u === r && (o = a),
                f === s && ++d === i && (c = a),
                (g = p.nextSibling) !== null)
              )
                break;
              ((p = f), (f = p.parentNode));
            }
            p = g;
          }
          n = o === -1 || c === -1 ? null : { start: o, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (No = { focusedElem: e, selectionRange: n }, ms = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (A = e));
    else
      for (; A !== null; ) {
        t = A;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    w = y.memoizedState,
                    v = t.stateNode,
                    m = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ze(t.type, x),
                      w,
                    );
                  v.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(b(163));
            }
        } catch (j) {
          ee(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (A = e));
          break;
        }
        A = t.return;
      }
  return ((y = Du), (Du = !1), y);
}
function zi(e, t, n) {
  var i = t.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & e) === e) {
        var s = r.destroy;
        ((r.destroy = void 0), s !== void 0 && Uo(t, n, s));
      }
      r = r.next;
    } while (r !== i);
  }
}
function ea(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Wo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function qf(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), qf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[lt], delete t[nr], delete t[Eo], delete t[B0], delete t[$0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Yf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ho(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = vs)));
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Ho(e, t, n), e = e.sibling; e !== null; )
      (Ho(e, t, n), (e = e.sibling));
}
function Go(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Go(e, t, n), e = e.sibling; e !== null; )
      (Go(e, t, n), (e = e.sibling));
}
var me = null,
  et = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) (Xf(e, t, n), (n = n.sibling));
}
function Xf(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(Gs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || Kn(n, t);
    case 6:
      var i = me,
        r = et;
      ((me = null),
        Mt(e, t, n),
        (me = i),
        (et = r),
        me !== null &&
          (et
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode)));
      break;
    case 18:
      me !== null &&
        (et
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ma(e.parentNode, n)
              : e.nodeType === 1 && Ma(e, n),
            Yi(e))
          : Ma(me, n.stateNode));
      break;
    case 4:
      ((i = me),
        (r = et),
        (me = n.stateNode.containerInfo),
        (et = !0),
        Mt(e, t, n),
        (me = i),
        (et = r));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next;
        do {
          var s = r,
            a = s.destroy;
          ((s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && Uo(n, t, a),
            (r = r.next));
        } while (r !== i);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (Kn(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          ((i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount());
        } catch (o) {
          ee(n, t, o);
        }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (i = je) || n.memoizedState !== null), Mt(e, t, n), (je = i))
        : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function Ru(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new rv()),
      t.forEach(function (i) {
        var r = mv.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(r, r));
      }));
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              ((me = o.stateNode), (et = !1));
              break e;
            case 3:
              ((me = o.stateNode.containerInfo), (et = !0));
              break e;
            case 4:
              ((me = o.stateNode.containerInfo), (et = !0));
              break e;
          }
          o = o.return;
        }
        if (me === null) throw Error(b(160));
        (Xf(s, a, r), (me = null), (et = !1));
        var c = r.alternate;
        (c !== null && (c.return = null), (r.return = null));
      } catch (u) {
        ee(r, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Zf(t, e), (t = t.sibling));
}
function Zf(e, t) {
  var n = e.alternate,
    i = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xe(t, e), at(e), i & 4)) {
        try {
          (zi(3, e, e.return), ea(3, e));
        } catch (x) {
          ee(e, e.return, x);
        }
        try {
          zi(5, e, e.return);
        } catch (x) {
          ee(e, e.return, x);
        }
      }
      break;
    case 1:
      (Xe(t, e), at(e), i & 512 && n !== null && Kn(n, n.return));
      break;
    case 5:
      if (
        (Xe(t, e),
        at(e),
        i & 512 && n !== null && Kn(n, n.return),
        e.flags & 32)
      ) {
        var r = e.stateNode;
        try {
          Ki(r, "");
        } catch (x) {
          ee(e, e.return, x);
        }
      }
      if (i & 4 && ((r = e.stateNode), r != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (o === "input" && s.type === "radio" && s.name != null && jp(r, s),
              go(o, a));
            var u = go(o, s);
            for (a = 0; a < c.length; a += 2) {
              var d = c[a],
                p = c[a + 1];
              d === "style"
                ? bp(r, p)
                : d === "dangerouslySetInnerHTML"
                  ? kp(r, p)
                  : d === "children"
                    ? Ki(r, p)
                    : jl(r, d, p, u);
            }
            switch (o) {
              case "input":
                uo(r, s);
                break;
              case "textarea":
                _p(r, s);
                break;
              case "select":
                var f = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Zn(r, !!s.multiple, g, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Zn(r, !!s.multiple, s.defaultValue, !0)
                      : Zn(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[nr] = s;
          } catch (x) {
            ee(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Xe(t, e), at(e), i & 4)) {
        if (e.stateNode === null) throw Error(b(162));
        ((r = e.stateNode), (s = e.memoizedProps));
        try {
          r.nodeValue = s;
        } catch (x) {
          ee(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Xe(t, e), at(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yi(t.containerInfo);
        } catch (x) {
          ee(e, e.return, x);
        }
      break;
    case 4:
      (Xe(t, e), at(e));
      break;
    case 13:
      (Xe(t, e),
        at(e),
        (r = e.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (Zl = ie())),
        i & 4 && Ru(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (u = je) || d), Xe(t, e), (je = u)) : Xe(t, e),
        at(e),
        i & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (A = e, d = e.child; d !== null; ) {
            for (p = A = d; A !== null; ) {
              switch (((f = A), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zi(4, f, f.return);
                  break;
                case 1:
                  Kn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((i = f), (n = f.return));
                    try {
                      ((t = i),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (x) {
                      ee(i, n, x);
                    }
                  }
                  break;
                case 5:
                  Kn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Vu(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (A = g)) : Vu(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                ((r = p.stateNode),
                  u
                    ? ((s = r.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((o = p.stateNode),
                      (c = p.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (o.style.display = Sp("display", a))));
              } catch (x) {
                ee(e, e.return, x);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (x) {
                ee(e, e.return, x);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            ((p.child.return = p), (p = p.child));
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            (d === p && (d = null), (p = p.return));
          }
          (d === p && (d = null),
            (p.sibling.return = p.return),
            (p = p.sibling));
        }
      }
      break;
    case 19:
      (Xe(t, e), at(e), i & 4 && Ru(e));
      break;
    case 21:
      break;
    default:
      (Xe(t, e), at(e));
  }
}
function at(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yf(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(b(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (Ki(r, ""), (i.flags &= -33));
          var s = Mu(e);
          Go(e, s, r);
          break;
        case 3:
        case 4:
          var a = i.stateNode.containerInfo,
            o = Mu(e);
          Ho(e, o, a);
          break;
        default:
          throw Error(b(161));
      }
    } catch (c) {
      ee(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function av(e, t, n) {
  ((A = e), em(e));
}
function em(e, t, n) {
  for (var i = (e.mode & 1) !== 0; A !== null; ) {
    var r = A,
      s = r.child;
    if (r.tag === 22 && i) {
      var a = r.memoizedState !== null || Or;
      if (!a) {
        var o = r.alternate,
          c = (o !== null && o.memoizedState !== null) || je;
        o = Or;
        var u = je;
        if (((Or = a), (je = c) && !u))
          for (A = r; A !== null; )
            ((a = A),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? zu(r)
                : c !== null
                  ? ((c.return = a), (A = c))
                  : zu(r));
        for (; s !== null; ) ((A = s), em(s), (s = s.sibling));
        ((A = r), (Or = o), (je = u));
      }
      Iu(e);
    } else
      r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (A = s)) : Iu(e);
  }
}
function Iu(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || ea(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && ju(t, s, i);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ju(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && Yi(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(b(163));
          }
        je || (t.flags & 512 && Wo(t));
      } catch (f) {
        ee(t, t.return, f);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (A = n));
      break;
    }
    A = t.return;
  }
}
function Vu(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (A = n));
      break;
    }
    A = t.return;
  }
}
function zu(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ea(4, t);
          } catch (c) {
            ee(t, n, c);
          }
          break;
        case 1:
          var i = t.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = t.return;
            try {
              i.componentDidMount();
            } catch (c) {
              ee(t, r, c);
            }
          }
          var s = t.return;
          try {
            Wo(t);
          } catch (c) {
            ee(t, s, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Wo(t);
          } catch (c) {
            ee(t, a, c);
          }
      }
    } catch (c) {
      ee(t, t.return, c);
    }
    if (t === e) {
      A = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      ((o.return = t.return), (A = o));
      break;
    }
    A = t.return;
  }
}
var ov = Math.ceil,
  Ps = At.ReactCurrentDispatcher,
  Yl = At.ReactCurrentOwner,
  Je = At.ReactCurrentBatchConfig,
  F = 0,
  pe = null,
  se = null,
  he = 0,
  Re = 0,
  Jn = an(0),
  le = 0,
  lr = null,
  Pn = 0,
  ta = 0,
  Xl = 0,
  Oi = null,
  Pe = null,
  Zl = 0,
  di = 1 / 0,
  vt = null,
  Ts = !1,
  Ko = null,
  Qt = null,
  Fr = !1,
  Ut = null,
  Es = 0,
  Fi = 0,
  Jo = null,
  is = -1,
  rs = 0;
function be() {
  return F & 6 ? ie() : is !== -1 ? is : (is = ie());
}
function qt(e) {
  return e.mode & 1
    ? F & 2 && he !== 0
      ? he & -he
      : W0.transition !== null
        ? (rs === 0 && (rs = Vp()), rs)
        : ((e = $),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wp(e.type))),
          e)
    : 1;
}
function it(e, t, n, i) {
  if (50 < Fi) throw ((Fi = 0), (Jo = null), Error(b(185)));
  (mr(e, n, i),
    (!(F & 2) || e !== pe) &&
      (e === pe && (!(F & 2) && (ta |= n), le === 4 && Ft(e, he)),
      Le(e, i),
      n === 1 && F === 0 && !(t.mode & 1) && ((di = ie() + 500), Ys && on())));
}
function Le(e, t) {
  var n = e.callbackNode;
  Wg(e, t);
  var i = fs(e, e === pe ? he : 0);
  if (i === 0)
    (n !== null && Kc(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && Kc(n), t === 1))
      (e.tag === 0 ? U0(Ou.bind(null, e)) : uf(Ou.bind(null, e)),
        O0(function () {
          !(F & 6) && on();
        }),
        (n = null));
    else {
      switch (zp(i)) {
        case 1:
          n = bl;
          break;
        case 4:
          n = Rp;
          break;
        case 16:
          n = ps;
          break;
        case 536870912:
          n = Ip;
          break;
        default:
          n = ps;
      }
      n = lm(n, tm.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function tm(e, t) {
  if (((is = -1), (rs = 0), F & 6)) throw Error(b(327));
  var n = e.callbackNode;
  if (ri() && e.callbackNode !== n) return null;
  var i = fs(e, e === pe ? he : 0);
  if (i === 0) return null;
  if (i & 30 || i & e.expiredLanes || t) t = As(e, i);
  else {
    t = i;
    var r = F;
    F |= 2;
    var s = im();
    (pe !== e || he !== t) && ((vt = null), (di = ie() + 500), kn(e, t));
    do
      try {
        uv();
        break;
      } catch (o) {
        nm(e, o);
      }
    while (1);
    (zl(),
      (Ps.current = s),
      (F = r),
      se !== null ? (t = 0) : ((pe = null), (he = 0), (t = le)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((r = _o(e)), r !== 0 && ((i = r), (t = Qo(e, r)))), t === 1)
    )
      throw ((n = lr), kn(e, 0), Ft(e, i), Le(e, ie()), n);
    if (t === 6) Ft(e, i);
    else {
      if (
        ((r = e.current.alternate),
        !(i & 30) &&
          !lv(r) &&
          ((t = As(e, i)),
          t === 2 && ((s = _o(e)), s !== 0 && ((i = s), (t = Qo(e, s)))),
          t === 1))
      )
        throw ((n = lr), kn(e, 0), Ft(e, i), Le(e, ie()), n);
      switch (((e.finishedWork = r), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          hn(e, Pe, vt);
          break;
        case 3:
          if (
            (Ft(e, i), (i & 130023424) === i && ((t = Zl + 500 - ie()), 10 < t))
          ) {
            if (fs(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & i) !== i)) {
              (be(), (e.pingedLanes |= e.suspendedLanes & r));
              break;
            }
            e.timeoutHandle = To(hn.bind(null, e, Pe, vt), t);
            break;
          }
          hn(e, Pe, vt);
          break;
        case 4:
          if ((Ft(e, i), (i & 4194240) === i)) break;
          for (t = e.eventTimes, r = -1; 0 < i; ) {
            var a = 31 - nt(i);
            ((s = 1 << a), (a = t[a]), a > r && (r = a), (i &= ~s));
          }
          if (
            ((i = r),
            (i = ie() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                  ? 480
                  : 1080 > i
                    ? 1080
                    : 1920 > i
                      ? 1920
                      : 3e3 > i
                        ? 3e3
                        : 4320 > i
                          ? 4320
                          : 1960 * ov(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = To(hn.bind(null, e, Pe, vt), i);
            break;
          }
          hn(e, Pe, vt);
          break;
        case 5:
          hn(e, Pe, vt);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return (Le(e, ie()), e.callbackNode === n ? tm.bind(null, e) : null);
}
function Qo(e, t) {
  var n = Oi;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = As(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && qo(t)),
    e
  );
}
function qo(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function lv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!rt(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Ft(e, t) {
  for (
    t &= ~Xl,
      t &= ~ta,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - nt(t),
      i = 1 << n;
    ((e[n] = -1), (t &= ~i));
  }
}
function Ou(e) {
  if (F & 6) throw Error(b(327));
  ri();
  var t = fs(e, 0);
  if (!(t & 1)) return (Le(e, ie()), null);
  var n = As(e, t);
  if (e.tag !== 0 && n === 2) {
    var i = _o(e);
    i !== 0 && ((t = i), (n = Qo(e, i)));
  }
  if (n === 1) throw ((n = lr), kn(e, 0), Ft(e, t), Le(e, ie()), n);
  if (n === 6) throw Error(b(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    hn(e, Pe, vt),
    Le(e, ie()),
    null
  );
}
function ec(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    ((F = n), F === 0 && ((di = ie() + 500), Ys && on()));
  }
}
function Tn(e) {
  Ut !== null && Ut.tag === 0 && !(F & 6) && ri();
  var t = F;
  F |= 1;
  var n = Je.transition,
    i = $;
  try {
    if (((Je.transition = null), ($ = 1), e)) return e();
  } finally {
    (($ = i), (Je.transition = n), (F = t), !(F & 6) && on());
  }
}
function tc() {
  ((Re = Jn.current), K(Jn));
}
function kn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), z0(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var i = n;
      switch ((Rl(i), i.tag)) {
        case 1:
          ((i = i.type.childContextTypes), i != null && ys());
          break;
        case 3:
          (ci(), K(Ee), K(_e), Wl());
          break;
        case 5:
          Ul(i);
          break;
        case 4:
          ci();
          break;
        case 13:
          K(q);
          break;
        case 19:
          K(q);
          break;
        case 10:
          Ol(i.type._context);
          break;
        case 22:
        case 23:
          tc();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (se = e = Yt(e.current, null)),
    (he = Re = t),
    (le = 0),
    (lr = null),
    (Xl = ta = Pn = 0),
    (Pe = Oi = null),
    jn !== null)
  ) {
    for (t = 0; t < jn.length; t++)
      if (((n = jn[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          ((s.next = r), (i.next = a));
        }
        n.pending = i;
      }
    jn = null;
  }
  return e;
}
function nm(e, t) {
  do {
    var n = se;
    try {
      if ((zl(), (es.current = Ns), Cs)) {
        for (var i = X.memoizedState; i !== null; ) {
          var r = i.queue;
          (r !== null && (r.pending = null), (i = i.next));
        }
        Cs = !1;
      }
      if (
        ((Nn = 0),
        (de = ae = X = null),
        (Vi = !1),
        (sr = 0),
        (Yl.current = null),
        n === null || n.return === null)
      ) {
        ((le = 1), (lr = t), (se = null));
        break;
      }
      e: {
        var s = e,
          a = n.return,
          o = n,
          c = t;
        if (
          ((t = he),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = o,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = Cu(a);
          if (g !== null) {
            ((g.flags &= -257),
              Nu(g, a, o, s, t),
              g.mode & 1 && bu(s, u, t),
              (t = g),
              (c = u));
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              (x.add(c), (t.updateQueue = x));
            } else y.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              (bu(s, u, t), nc());
              break e;
            }
            c = Error(b(426));
          }
        } else if (Q && o.mode & 1) {
          var w = Cu(a);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              Nu(w, a, o, s, t),
              Il(ui(c, o)));
            break e;
          }
        }
        ((s = c = ui(c, o)),
          le !== 4 && (le = 2),
          Oi === null ? (Oi = [s]) : Oi.push(s),
          (s = a));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var v = Of(s, c, t);
              xu(s, v);
              break e;
            case 1:
              o = c;
              var m = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Qt === null || !Qt.has(h))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var j = Ff(s, o, t);
                xu(s, j);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      sm(n);
    } catch (k) {
      ((t = k), se === n && n !== null && (se = n = n.return));
      continue;
    }
    break;
  } while (1);
}
function im() {
  var e = Ps.current;
  return ((Ps.current = Ns), e === null ? Ns : e);
}
function nc() {
  ((le === 0 || le === 3 || le === 2) && (le = 4),
    pe === null || (!(Pn & 268435455) && !(ta & 268435455)) || Ft(pe, he));
}
function As(e, t) {
  var n = F;
  F |= 2;
  var i = im();
  (pe !== e || he !== t) && ((vt = null), kn(e, t));
  do
    try {
      cv();
      break;
    } catch (r) {
      nm(e, r);
    }
  while (1);
  if ((zl(), (F = n), (Ps.current = i), se !== null)) throw Error(b(261));
  return ((pe = null), (he = 0), le);
}
function cv() {
  for (; se !== null; ) rm(se);
}
function uv() {
  for (; se !== null && !Rg(); ) rm(se);
}
function rm(e) {
  var t = om(e.alternate, e, Re);
  ((e.memoizedProps = e.pendingProps),
    t === null ? sm(e) : (se = t),
    (Yl.current = null));
}
function sm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = iv(n, t)), n !== null)) {
        ((n.flags &= 32767), (se = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((le = 6), (se = null));
        return;
      }
    } else if (((n = nv(n, t, Re)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function hn(e, t, n) {
  var i = $,
    r = Je.transition;
  try {
    ((Je.transition = null), ($ = 1), dv(e, t, n, i));
  } finally {
    ((Je.transition = r), ($ = i));
  }
  return null;
}
function dv(e, t, n, i) {
  do ri();
  while (Ut !== null);
  if (F & 6) throw Error(b(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(b(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (Hg(e, s),
    e === pe && ((se = pe = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fr ||
      ((Fr = !0),
      lm(ps, function () {
        return (ri(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = Je.transition), (Je.transition = null));
    var a = $;
    $ = 1;
    var o = F;
    ((F |= 4),
      (Yl.current = null),
      sv(e, n),
      Zf(n, e),
      A0(No),
      (ms = !!Co),
      (No = Co = null),
      (e.current = n),
      av(n),
      Ig(),
      (F = o),
      ($ = a),
      (Je.transition = s));
  } else e.current = n;
  if (
    (Fr && ((Fr = !1), (Ut = e), (Es = r)),
    (s = e.pendingLanes),
    s === 0 && (Qt = null),
    Og(n.stateNode),
    Le(e, ie()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      ((r = t[n]), i(r.value, { componentStack: r.stack, digest: r.digest }));
  if (Ts) throw ((Ts = !1), (e = Ko), (Ko = null), e);
  return (
    Es & 1 && e.tag !== 0 && ri(),
    (s = e.pendingLanes),
    s & 1 ? (e === Jo ? Fi++ : ((Fi = 0), (Jo = e))) : (Fi = 0),
    on(),
    null
  );
}
function ri() {
  if (Ut !== null) {
    var e = zp(Es),
      t = Je.transition,
      n = $;
    try {
      if (((Je.transition = null), ($ = 16 > e ? 16 : e), Ut === null))
        var i = !1;
      else {
        if (((e = Ut), (Ut = null), (Es = 0), F & 6)) throw Error(b(331));
        var r = F;
        for (F |= 4, A = e.current; A !== null; ) {
          var s = A,
            a = s.child;
          if (A.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var u = o[c];
                for (A = u; A !== null; ) {
                  var d = A;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zi(8, d, s);
                  }
                  var p = d.child;
                  if (p !== null) ((p.return = d), (A = p));
                  else
                    for (; A !== null; ) {
                      d = A;
                      var f = d.sibling,
                        g = d.return;
                      if ((qf(d), d === u)) {
                        A = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = g), (A = f));
                        break;
                      }
                      A = g;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var w = x.sibling;
                    ((x.sibling = null), (x = w));
                  } while (x !== null);
                }
              }
              A = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) ((a.return = s), (A = a));
          else
            e: for (; A !== null; ) {
              if (((s = A), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zi(9, s, s.return);
                }
              var v = s.sibling;
              if (v !== null) {
                ((v.return = s.return), (A = v));
                break e;
              }
              A = s.return;
            }
        }
        var m = e.current;
        for (A = m; A !== null; ) {
          a = A;
          var h = a.child;
          if (a.subtreeFlags & 2064 && h !== null) ((h.return = a), (A = h));
          else
            e: for (a = m; A !== null; ) {
              if (((o = A), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ea(9, o);
                  }
                } catch (k) {
                  ee(o, o.return, k);
                }
              if (o === a) {
                A = null;
                break e;
              }
              var j = o.sibling;
              if (j !== null) {
                ((j.return = o.return), (A = j));
                break e;
              }
              A = o.return;
            }
        }
        if (
          ((F = r), on(), ut && typeof ut.onPostCommitFiberRoot == "function")
        )
          try {
            ut.onPostCommitFiberRoot(Gs, e);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (($ = n), (Je.transition = t));
    }
  }
  return !1;
}
function Fu(e, t, n) {
  ((t = ui(n, t)),
    (t = Of(e, t, 1)),
    (e = Jt(e, t, 1)),
    (t = be()),
    e !== null && (mr(e, 1, t), Le(e, t)));
}
function ee(e, t, n) {
  if (e.tag === 3) Fu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (Qt === null || !Qt.has(i)))
        ) {
          ((e = ui(n, e)),
            (e = Ff(t, e, 1)),
            (t = Jt(t, e, 1)),
            (e = be()),
            t !== null && (mr(t, 1, e), Le(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function pv(e, t, n) {
  var i = e.pingCache;
  (i !== null && i.delete(t),
    (t = be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (he & n) === n &&
      (le === 4 || (le === 3 && (he & 130023424) === he && 500 > ie() - Zl)
        ? kn(e, 0)
        : (Xl |= n)),
    Le(e, t));
}
function am(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Er), (Er <<= 1), !(Er & 130023424) && (Er = 4194304))
      : (t = 1));
  var n = be();
  ((e = Nt(e, t)), e !== null && (mr(e, t, n), Le(e, n)));
}
function fv(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), am(e, n));
}
function mv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = e.stateNode;
      break;
    default:
      throw Error(b(314));
  }
  (i !== null && i.delete(t), am(e, n));
}
var om;
om = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current) Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Te = !1), tv(e, t, n));
      Te = !!(e.flags & 131072);
    }
  else ((Te = !1), Q && t.flags & 1048576 && df(t, _s, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type;
      (ns(e, t), (e = t.pendingProps));
      var r = ai(t, _e.current);
      (ii(t, n), (r = Gl(null, t, i, e, r, n)));
      var s = Kl();
      return (
        (t.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(i) ? ((s = !0), xs(t)) : (s = !1),
            (t.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            Bl(t),
            (r.updater = Zs),
            (t.stateNode = r),
            (r._reactInternals = t),
            Io(t, i, e, n),
            (t = Oo(null, t, i, !0, s, n)))
          : ((t.tag = 0), Q && s && Ml(t), Se(null, t, r, n), (t = t.child)),
        t
      );
    case 16:
      i = t.elementType;
      e: {
        switch (
          (ns(e, t),
          (e = t.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (t.type = i),
          (r = t.tag = gv(i)),
          (e = Ze(i, e)),
          r)
        ) {
          case 0:
            t = zo(null, t, i, e, n);
            break e;
          case 1:
            t = Eu(null, t, i, e, n);
            break e;
          case 11:
            t = Pu(null, t, i, e, n);
            break e;
          case 14:
            t = Tu(null, t, i, Ze(i.type, e), n);
            break e;
        }
        throw Error(b(306, i, ""));
      }
      return t;
    case 0:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : Ze(i, r)),
        zo(e, t, i, r, n)
      );
    case 1:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : Ze(i, r)),
        Eu(e, t, i, r, n)
      );
    case 3:
      e: {
        if ((Wf(t), e === null)) throw Error(b(387));
        ((i = t.pendingProps),
          (s = t.memoizedState),
          (r = s.element),
          vf(e, t),
          Ss(t, i, null, n));
        var a = t.memoizedState;
        if (((i = a.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((r = ui(Error(b(423)), t)), (t = Au(e, t, i, n, r)));
            break e;
          } else if (i !== r) {
            ((r = ui(Error(b(424)), t)), (t = Au(e, t, i, n, r)));
            break e;
          } else
            for (
              Ie = Kt(t.stateNode.containerInfo.firstChild),
                Ve = t,
                Q = !0,
                tt = null,
                n = hf(t, null, i, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((oi(), i === r)) {
            t = Pt(e, t, n);
            break e;
          }
          Se(e, t, i, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        yf(t),
        e === null && Do(t),
        (i = t.type),
        (r = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = r.children),
        Po(i, r) ? (a = null) : s !== null && Po(i, s) && (t.flags |= 32),
        Uf(e, t),
        Se(e, t, a, n),
        t.child
      );
    case 6:
      return (e === null && Do(t), null);
    case 13:
      return Hf(e, t, n);
    case 4:
      return (
        $l(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = li(t, null, i, n)) : Se(e, t, i, n),
        t.child
      );
    case 11:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : Ze(i, r)),
        Pu(e, t, i, r, n)
      );
    case 7:
      return (Se(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Se(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Se(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((i = t.type._context),
          (r = t.pendingProps),
          (s = t.memoizedProps),
          (a = r.value),
          U(ws, i._currentValue),
          (i._currentValue = a),
          s !== null)
        )
          if (rt(s.value, a)) {
            if (s.children === r.children && !Ee.current) {
              t = Pt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                a = s.child;
                for (var c = o.firstContext; c !== null; ) {
                  if (c.context === i) {
                    if (s.tag === 1) {
                      ((c = wt(-1, n & -n)), (c.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c));
                      }
                    }
                    ((s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      Mo(s.return, n, t),
                      (o.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(b(341));
                ((a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  Mo(a, n, t),
                  (a = s.sibling));
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    ((s.return = a.return), (a = s));
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        (Se(e, t, r.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (r = t.type),
        (i = t.pendingProps.children),
        ii(t, n),
        (r = qe(r)),
        (i = i(r)),
        (t.flags |= 1),
        Se(e, t, i, n),
        t.child
      );
    case 14:
      return (
        (i = t.type),
        (r = Ze(i, t.pendingProps)),
        (r = Ze(i.type, r)),
        Tu(e, t, i, r, n)
      );
    case 15:
      return Bf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : Ze(i, r)),
        ns(e, t),
        (t.tag = 1),
        Ae(i) ? ((e = !0), xs(t)) : (e = !1),
        ii(t, n),
        zf(t, i, r),
        Io(t, i, r, n),
        Oo(null, t, i, !0, e, n)
      );
    case 19:
      return Gf(e, t, n);
    case 22:
      return $f(e, t, n);
  }
  throw Error(b(156, t.tag));
};
function lm(e, t) {
  return Mp(e, t);
}
function hv(e, t, n, i) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Ke(e, t, n, i) {
  return new hv(e, t, n, i);
}
function ic(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function gv(e) {
  if (typeof e == "function") return ic(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wl)) return 11;
    if (e === kl) return 14;
  }
  return 2;
}
function Yt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ke(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ss(e, t, n, i, r, s) {
  var a = 2;
  if (((i = e), typeof e == "function")) ic(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case zn:
        return Sn(n.children, r, s, t);
      case _l:
        ((a = 8), (r |= 8));
        break;
      case so:
        return (
          (e = Ke(12, n, t, r | 2)),
          (e.elementType = so),
          (e.lanes = s),
          e
        );
      case ao:
        return ((e = Ke(13, n, t, r)), (e.elementType = ao), (e.lanes = s), e);
      case oo:
        return ((e = Ke(19, n, t, r)), (e.elementType = oo), (e.lanes = s), e);
      case vp:
        return na(n, r, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hp:
              a = 10;
              break e;
            case gp:
              a = 9;
              break e;
            case wl:
              a = 11;
              break e;
            case kl:
              a = 14;
              break e;
            case It:
              ((a = 16), (i = null));
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ke(a, n, t, r)),
    (t.elementType = e),
    (t.type = i),
    (t.lanes = s),
    t
  );
}
function Sn(e, t, n, i) {
  return ((e = Ke(7, e, i, t)), (e.lanes = n), e);
}
function na(e, t, n, i) {
  return (
    (e = Ke(22, e, i, t)),
    (e.elementType = vp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $a(e, t, n) {
  return ((e = Ke(6, e, null, t)), (e.lanes = n), e);
}
function Ua(e, t, n) {
  return (
    (t = Ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vv(e, t, n, i, r) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ka(0)),
    (this.expirationTimes = ka(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ka(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null));
}
function rc(e, t, n, i, r, s, a, o, c) {
  return (
    (e = new vv(e, t, n, o, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ke(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bl(s),
    e
  );
}
function yv(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vn,
    key: i == null ? null : "" + i,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function cm(e) {
  if (!e) return tn;
  e = e._reactInternals;
  e: {
    if (An(e) !== e || e.tag !== 1) throw Error(b(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return cf(e, n, t);
  }
  return t;
}
function um(e, t, n, i, r, s, a, o, c) {
  return (
    (e = rc(n, i, !0, e, r, s, a, o, c)),
    (e.context = cm(null)),
    (n = e.current),
    (i = be()),
    (r = qt(n)),
    (s = wt(i, r)),
    (s.callback = t ?? null),
    Jt(n, s, r),
    (e.current.lanes = r),
    mr(e, r, i),
    Le(e, i),
    e
  );
}
function ia(e, t, n, i) {
  var r = t.current,
    s = be(),
    a = qt(r);
  return (
    (n = cm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wt(s, a)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = Jt(r, t, a)),
    e !== null && (it(e, r, a, s), Zr(e, r, a)),
    a
  );
}
function Ls(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sc(e, t) {
  (Bu(e, t), (e = e.alternate) && Bu(e, t));
}
function xv() {
  return null;
}
var dm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ac(e) {
  this._internalRoot = e;
}
ra.prototype.render = ac.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  ia(e, t, null, null);
};
ra.prototype.unmount = ac.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Tn(function () {
      ia(null, e, null, null);
    }),
      (t[Ct] = null));
  }
};
function ra(e) {
  this._internalRoot = e;
}
ra.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
    (Ot.splice(n, 0, e), n === 0 && Up(e));
  }
};
function oc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function sa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function $u() {}
function jv(e, t, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = Ls(a);
        s.call(u);
      };
    }
    var a = um(t, i, e, 0, null, !1, !1, "", $u);
    return (
      (e._reactRootContainer = a),
      (e[Ct] = a.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      a
    );
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof i == "function") {
    var o = i;
    i = function () {
      var u = Ls(c);
      o.call(u);
    };
  }
  var c = rc(e, 0, !1, null, null, !1, !1, "", $u);
  return (
    (e._reactRootContainer = c),
    (e[Ct] = c.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      ia(t, c, n, i);
    }),
    c
  );
}
function aa(e, t, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Ls(a);
        o.call(c);
      };
    }
    ia(t, a, e, r);
  } else a = jv(n, t, e, r, i);
  return Ls(a);
}
Op = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ti(t.pendingLanes);
        n !== 0 &&
          (Cl(t, n | 1), Le(t, ie()), !(F & 6) && ((di = ie() + 500), on()));
      }
      break;
    case 13:
      (Tn(function () {
        var i = Nt(e, 1);
        if (i !== null) {
          var r = be();
          it(i, e, 1, r);
        }
      }),
        sc(e, 1));
  }
};
Nl = function (e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = be();
      it(t, e, 134217728, n);
    }
    sc(e, 134217728);
  }
};
Fp = function (e) {
  if (e.tag === 13) {
    var t = qt(e),
      n = Nt(e, t);
    if (n !== null) {
      var i = be();
      it(n, e, t, i);
    }
    sc(e, t);
  }
};
Bp = function () {
  return $;
};
$p = function (e, t) {
  var n = $;
  try {
    return (($ = e), t());
  } finally {
    $ = n;
  }
};
yo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((uo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var i = n[t];
          if (i !== e && i.form === e.form) {
            var r = qs(i);
            if (!r) throw Error(b(90));
            (xp(i), uo(i, r));
          }
        }
      }
      break;
    case "textarea":
      _p(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Zn(e, !!n.multiple, t, !1));
  }
};
Pp = ec;
Tp = Tn;
var _v = { usingClientEntryPoint: !1, Events: [gr, $n, qs, Cp, Np, ec] },
  Si = {
    findFiberByHostInstance: xn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  wv = {
    bundleType: Si.bundleType,
    version: Si.version,
    rendererPackageName: Si.rendererPackageName,
    rendererConfig: Si.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Lp(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Si.findFiberByHostInstance || xv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Br.isDisabled && Br.supportsFiber)
    try {
      ((Gs = Br.inject(wv)), (ut = Br));
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _v;
Fe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oc(t)) throw Error(b(200));
  return yv(e, t, null, n);
};
Fe.createRoot = function (e, t) {
  if (!oc(e)) throw Error(b(299));
  var n = !1,
    i = "",
    r = dm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = rc(e, 1, !1, null, null, n, !1, i, r)),
    (e[Ct] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new ac(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(b(188))
      : ((e = Object.keys(e).join(",")), Error(b(268, e)));
  return ((e = Lp(t)), (e = e === null ? null : e.stateNode), e);
};
Fe.flushSync = function (e) {
  return Tn(e);
};
Fe.hydrate = function (e, t, n) {
  if (!sa(t)) throw Error(b(200));
  return aa(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
  if (!oc(e)) throw Error(b(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    a = dm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = um(t, null, e, 1, n ?? null, r, !1, s, a)),
    (e[Ct] = t.current),
    er(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      ((n = i[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r));
  return new ra(t);
};
Fe.render = function (e, t, n) {
  if (!sa(t)) throw Error(b(200));
  return aa(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
  if (!sa(e)) throw Error(b(40));
  return e._reactRootContainer
    ? (Tn(function () {
        aa(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ct] = null));
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = ec;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!sa(n)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return aa(e, t, n, !1, i);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function pm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pm);
    } catch (e) {
      console.error(e);
    }
}
(pm(), (dp.exports = Fe));
var kv = dp.exports,
  Uu = kv;
((io.createRoot = Uu.createRoot), (io.hydrateRoot = Uu.hydrateRoot));
let Sv = { data: "" },
  bv = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" },
          )
        ).firstChild
      : e || Sv,
  Cv = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Nv = /\/\*[^]*?\*\/|  +/g,
  Wu = /\n+/g,
  Bt = (e, t) => {
    let n = "",
      i = "",
      r = "";
    for (let s in e) {
      let a = e[s];
      s[0] == "@"
        ? s[1] == "i"
          ? (n = s + " " + a + ";")
          : (i +=
              s[1] == "f"
                ? Bt(a, s)
                : s + "{" + Bt(a, s[1] == "k" ? "" : t) + "}")
        : typeof a == "object"
          ? (i += Bt(
              a,
              t
                ? t.replace(/([^,])+/g, (o) =>
                    s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (c) =>
                      /&/.test(c) ? c.replace(/&/g, o) : o ? o + " " + c : c,
                    ),
                  )
                : s,
            ))
          : a != null &&
            ((s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (r += Bt.p ? Bt.p(s, a) : s + ":" + a + ";"));
    }
    return n + (t && r ? t + "{" + r + "}" : r) + i;
  },
  gt = {},
  fm = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + fm(e[n]);
      return t;
    }
    return e;
  },
  Pv = (e, t, n, i, r) => {
    let s = fm(e),
      a =
        gt[s] ||
        (gt[s] = ((c) => {
          let u = 0,
            d = 11;
          for (; u < c.length; ) d = (101 * d + c.charCodeAt(u++)) >>> 0;
          return "go" + d;
        })(s));
    if (!gt[a]) {
      let c =
        s !== e
          ? e
          : ((u) => {
              let d,
                p,
                f = [{}];
              for (; (d = Cv.exec(u.replace(Nv, ""))); )
                d[4]
                  ? f.shift()
                  : d[3]
                    ? ((p = d[3].replace(Wu, " ").trim()),
                      f.unshift((f[0][p] = f[0][p] || {})))
                    : (f[0][d[1]] = d[2].replace(Wu, " ").trim());
              return f[0];
            })(e);
      gt[a] = Bt(r ? { ["@keyframes " + a]: c } : c, n ? "" : "." + a);
    }
    let o = n && gt.g ? gt.g : null;
    return (
      n && (gt.g = gt[a]),
      ((c, u, d, p) => {
        p
          ? (u.data = u.data.replace(p, c))
          : u.data.indexOf(c) === -1 && (u.data = d ? c + u.data : u.data + c);
      })(gt[a], t, i, o),
      a
    );
  },
  Tv = (e, t, n) =>
    e.reduce((i, r, s) => {
      let a = t[s];
      if (a && a.call) {
        let o = a(n),
          c = (o && o.props && o.props.className) || (/^go/.test(o) && o);
        a = c
          ? "." + c
          : o && typeof o == "object"
            ? o.props
              ? ""
              : Bt(o, "")
            : o === !1
              ? ""
              : o;
      }
      return i + r + (a ?? "");
    }, "");
function oa(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return Pv(
    n.unshift
      ? n.raw
        ? Tv(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((i, r) => Object.assign(i, r && r.call ? r(t.p) : r), {})
      : n,
    bv(t.target),
    t.g,
    t.o,
    t.k,
  );
}
let mm, Yo, Xo;
oa.bind({ g: 1 });
let Tt = oa.bind({ k: 1 });
function Ev(e, t, n, i) {
  ((Bt.p = t), (mm = e), (Yo = n), (Xo = i));
}
function ln(e, t) {
  let n = this || {};
  return function () {
    let i = arguments;
    function r(s, a) {
      let o = Object.assign({}, s),
        c = o.className || r.className;
      ((n.p = Object.assign({ theme: Yo && Yo() }, o)),
        (n.o = / *go\d+/.test(c)),
        (o.className = oa.apply(n, i) + (c ? " " + c : "")),
        t && (o.ref = a));
      let u = e;
      return (
        e[0] && ((u = o.as || e), delete o.as),
        Xo && u[0] && Xo(o),
        mm(u, o)
      );
    }
    return t ? t(r) : r;
  };
}
var Av = (e) => typeof e == "function",
  Ds = (e, t) => (Av(e) ? e(t) : e),
  Lv = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  hm = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  Dv = 20,
  lc = "default",
  gm = (e, t) => {
    let { toastLimit: n } = e.settings;
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, n) };
      case 1:
        return {
          ...e,
          toasts: e.toasts.map((a) =>
            a.id === t.toast.id ? { ...a, ...t.toast } : a,
          ),
        };
      case 2:
        let { toast: i } = t;
        return gm(e, {
          type: e.toasts.find((a) => a.id === i.id) ? 1 : 0,
          toast: i,
        });
      case 3:
        let { toastId: r } = t;
        return {
          ...e,
          toasts: e.toasts.map((a) =>
            a.id === r || r === void 0
              ? { ...a, dismissed: !0, visible: !1 }
              : a,
          ),
        };
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((a) => a.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let s = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((a) => ({
            ...a,
            pauseDuration: a.pauseDuration + s,
          })),
        };
    }
  },
  as = [],
  vm = { toasts: [], pausedAt: void 0, settings: { toastLimit: Dv } },
  ct = {},
  ym = (e, t = lc) => {
    ((ct[t] = gm(ct[t] || vm, e)),
      as.forEach(([n, i]) => {
        n === t && i(ct[t]);
      }));
  },
  xm = (e) => Object.keys(ct).forEach((t) => ym(e, t)),
  Mv = (e) => Object.keys(ct).find((t) => ct[t].toasts.some((n) => n.id === e)),
  la =
    (e = lc) =>
    (t) => {
      ym(t, e);
    },
  Rv = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Iv = (e = {}, t = lc) => {
    let [n, i] = _.useState(ct[t] || vm),
      r = _.useRef(ct[t]);
    _.useEffect(
      () => (
        r.current !== ct[t] && i(ct[t]),
        as.push([t, i]),
        () => {
          let a = as.findIndex(([o]) => o === t);
          a > -1 && as.splice(a, 1);
        }
      ),
      [t],
    );
    let s = n.toasts.map((a) => {
      var o, c, u;
      return {
        ...e,
        ...e[a.type],
        ...a,
        removeDelay:
          a.removeDelay ||
          ((o = e[a.type]) == null ? void 0 : o.removeDelay) ||
          (e == null ? void 0 : e.removeDelay),
        duration:
          a.duration ||
          ((c = e[a.type]) == null ? void 0 : c.duration) ||
          (e == null ? void 0 : e.duration) ||
          Rv[a.type],
        style: {
          ...e.style,
          ...((u = e[a.type]) == null ? void 0 : u.style),
          ...a.style,
        },
      };
    });
    return { ...n, toasts: s };
  },
  Vv = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Lv(),
  }),
  yr = (e) => (t, n) => {
    let i = Vv(t, e, n);
    return (la(i.toasterId || Mv(i.id))({ type: 2, toast: i }), i.id);
  },
  oe = (e, t) => yr("blank")(e, t);
oe.error = yr("error");
oe.success = yr("success");
oe.loading = yr("loading");
oe.custom = yr("custom");
oe.dismiss = (e, t) => {
  let n = { type: 3, toastId: e };
  t ? la(t)(n) : xm(n);
};
oe.dismissAll = (e) => oe.dismiss(void 0, e);
oe.remove = (e, t) => {
  let n = { type: 4, toastId: e };
  t ? la(t)(n) : xm(n);
};
oe.removeAll = (e) => oe.remove(void 0, e);
oe.promise = (e, t, n) => {
  let i = oe.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    typeof e == "function" && (e = e()),
    e
      .then((r) => {
        let s = t.success ? Ds(t.success, r) : void 0;
        return (
          s
            ? oe.success(s, {
                id: i,
                ...n,
                ...(n == null ? void 0 : n.success),
              })
            : oe.dismiss(i),
          r
        );
      })
      .catch((r) => {
        let s = t.error ? Ds(t.error, r) : void 0;
        s
          ? oe.error(s, { id: i, ...n, ...(n == null ? void 0 : n.error) })
          : oe.dismiss(i);
      }),
    e
  );
};
var zv = 1e3,
  Ov = (e, t = "default") => {
    let { toasts: n, pausedAt: i } = Iv(e, t),
      r = _.useRef(new Map()).current,
      s = _.useCallback((p, f = zv) => {
        if (r.has(p)) return;
        let g = setTimeout(() => {
          (r.delete(p), a({ type: 4, toastId: p }));
        }, f);
        r.set(p, g);
      }, []);
    _.useEffect(() => {
      if (i) return;
      let p = Date.now(),
        f = n.map((g) => {
          if (g.duration === 1 / 0) return;
          let y = (g.duration || 0) + g.pauseDuration - (p - g.createdAt);
          if (y < 0) {
            g.visible && oe.dismiss(g.id);
            return;
          }
          return setTimeout(() => oe.dismiss(g.id, t), y);
        });
      return () => {
        f.forEach((g) => g && clearTimeout(g));
      };
    }, [n, i, t]);
    let a = _.useCallback(la(t), [t]),
      o = _.useCallback(() => {
        a({ type: 5, time: Date.now() });
      }, [a]),
      c = _.useCallback(
        (p, f) => {
          a({ type: 1, toast: { id: p, height: f } });
        },
        [a],
      ),
      u = _.useCallback(() => {
        i && a({ type: 6, time: Date.now() });
      }, [i, a]),
      d = _.useCallback(
        (p, f) => {
          let {
              reverseOrder: g = !1,
              gutter: y = 8,
              defaultPosition: x,
            } = f || {},
            w = n.filter(
              (h) => (h.position || x) === (p.position || x) && h.height,
            ),
            v = w.findIndex((h) => h.id === p.id),
            m = w.filter((h, j) => j < v && h.visible).length;
          return w
            .filter((h) => h.visible)
            .slice(...(g ? [m + 1] : [0, m]))
            .reduce((h, j) => h + (j.height || 0) + y, 0);
        },
        [n],
      );
    return (
      _.useEffect(() => {
        n.forEach((p) => {
          if (p.dismissed) s(p.id, p.removeDelay);
          else {
            let f = r.get(p.id);
            f && (clearTimeout(f), r.delete(p.id));
          }
        });
      }, [n, s]),
      {
        toasts: n,
        handlers: {
          updateHeight: c,
          startPause: o,
          endPause: u,
          calculateOffset: d,
        },
      }
    );
  },
  Fv = Tt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Bv = Tt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  $v = Tt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Uv = ln("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Fv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Bv} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${$v} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Wv = Tt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Hv = ln("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Wv} 1s linear infinite;
`,
  Gv = Tt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Kv = Tt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Jv = ln("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Gv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Kv} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Qv = ln("div")`
  position: absolute;
`,
  qv = ln("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Yv = Tt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Xv = ln("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Yv} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  Zv = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: i } = e;
    return t !== void 0
      ? typeof t == "string"
        ? _.createElement(Xv, null, t)
        : t
      : n === "blank"
        ? null
        : _.createElement(
            qv,
            null,
            _.createElement(Hv, { ...i }),
            n !== "loading" &&
              _.createElement(
                Qv,
                null,
                n === "error"
                  ? _.createElement(Uv, { ...i })
                  : _.createElement(Jv, { ...i }),
              ),
          );
  },
  ey = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  ty = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  ny = "0%{opacity:0;} 100%{opacity:1;}",
  iy = "0%{opacity:1;} 100%{opacity:0;}",
  ry = ln("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  sy = ln("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  ay = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [i, r] = hm() ? [ny, iy] : [ey(n), ty(n)];
    return {
      animation: t
        ? `${Tt(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Tt(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  oy = _.memo(({ toast: e, position: t, style: n, children: i }) => {
    let r = e.height
        ? ay(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      s = _.createElement(Zv, { toast: e }),
      a = _.createElement(sy, { ...e.ariaProps }, Ds(e.message, e));
    return _.createElement(
      ry,
      { className: e.className, style: { ...r, ...n, ...e.style } },
      typeof i == "function"
        ? i({ icon: s, message: a })
        : _.createElement(_.Fragment, null, s, a),
    );
  });
Ev(_.createElement);
var ly = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: i,
    children: r,
  }) => {
    let s = _.useCallback(
      (a) => {
        if (a) {
          let o = () => {
            let c = a.getBoundingClientRect().height;
            i(e, c);
          };
          (o(),
            new MutationObserver(o).observe(a, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            }));
        }
      },
      [e, i],
    );
    return _.createElement("div", { ref: s, className: t, style: n }, r);
  },
  cy = (e, t) => {
    let n = e.includes("top"),
      i = n ? { top: 0 } : { bottom: 0 },
      r = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
          ? { justifyContent: "flex-end" }
          : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: hm() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...i,
      ...r,
    };
  },
  uy = oa`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  $r = 16,
  dy = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: i,
    children: r,
    toasterId: s,
    containerStyle: a,
    containerClassName: o,
  }) => {
    let { toasts: c, handlers: u } = Ov(n, s);
    return _.createElement(
      "div",
      {
        "data-rht-toaster": s || "",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: $r,
          left: $r,
          right: $r,
          bottom: $r,
          pointerEvents: "none",
          ...a,
        },
        className: o,
        onMouseEnter: u.startPause,
        onMouseLeave: u.endPause,
      },
      c.map((d) => {
        let p = d.position || t,
          f = u.calculateOffset(d, {
            reverseOrder: e,
            gutter: i,
            defaultPosition: t,
          }),
          g = cy(p, f);
        return _.createElement(
          ly,
          {
            id: d.id,
            key: d.id,
            onHeightUpdate: u.updateHeight,
            className: d.visible ? uy : "",
            style: g,
          },
          d.type === "custom"
            ? Ds(d.message, d)
            : r
              ? r(d)
              : _.createElement(oy, { toast: d, position: p }),
        );
      }),
    );
  },
  py = oe;
const jm = _.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ca = _.createContext({}),
  ua = _.createContext(null),
  da = typeof document < "u",
  cc = da ? _.useLayoutEffect : _.useEffect,
  _m = _.createContext({ strict: !1 }),
  uc = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  fy = "framerAppearId",
  wm = "data-" + uc(fy);
function my(e, t, n, i) {
  const { visualElement: r } = _.useContext(ca),
    s = _.useContext(_m),
    a = _.useContext(ua),
    o = _.useContext(jm).reducedMotion,
    c = _.useRef();
  ((i = i || s.renderer),
    !c.current &&
      i &&
      (c.current = i(e, {
        visualState: t,
        parent: r,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: o,
      })));
  const u = c.current;
  _.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const d = _.useRef(!!(n[wm] && !window.HandoffComplete));
  return (
    cc(() => {
      u &&
        (u.render(),
        d.current && u.animationState && u.animationState.animateChanges());
    }),
    _.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !d.current && u.animationState && u.animationState.animateChanges(),
        d.current && ((d.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function Qn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function hy(e, t, n) {
  return _.useCallback(
    (i) => {
      (i && e.mount && e.mount(i),
        t && (i ? t.mount(i) : t.unmount()),
        n && (typeof n == "function" ? n(i) : Qn(n) && (n.current = i)));
    },
    [t],
  );
}
function cr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function pa(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const dc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  pc = ["initial", ...dc];
function fa(e) {
  return pa(e.animate) || pc.some((t) => cr(e[t]));
}
function km(e) {
  return !!(fa(e) || e.variants);
}
function gy(e, t) {
  if (fa(e)) {
    const { initial: n, animate: i } = e;
    return {
      initial: n === !1 || cr(n) ? n : void 0,
      animate: cr(i) ? i : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function vy(e) {
  const { initial: t, animate: n } = gy(e, _.useContext(ca));
  return _.useMemo(() => ({ initial: t, animate: n }), [Hu(t), Hu(n)]);
}
function Hu(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Gu = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ur = {};
for (const e in Gu) ur[e] = { isEnabled: (t) => Gu[e].some((n) => !!t[n]) };
function yy(e) {
  for (const t in e) ur[t] = { ...ur[t], ...e[t] };
}
const fc = _.createContext({}),
  Sm = _.createContext({}),
  xy = Symbol.for("motionComponentSymbol");
function jy({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: i,
  Component: r,
}) {
  e && yy(e);
  function s(o, c) {
    let u;
    const d = { ..._.useContext(jm), ...o, layoutId: _y(o) },
      { isStatic: p } = d,
      f = vy(o),
      g = i(o, p);
    if (!p && da) {
      f.visualElement = my(r, g, d, t);
      const y = _.useContext(Sm),
        x = _.useContext(_m).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(d, x, e, y));
    }
    return _.createElement(
      ca.Provider,
      { value: f },
      u && f.visualElement
        ? _.createElement(u, { visualElement: f.visualElement, ...d })
        : null,
      n(r, o, hy(g, f.visualElement, c), g, p, f.visualElement),
    );
  }
  const a = _.forwardRef(s);
  return ((a[xy] = r), a);
}
function _y({ layoutId: e }) {
  const t = _.useContext(fc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function wy(e) {
  function t(i, r = {}) {
    return jy(e(i, r));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (i, r) => (n.has(r) || n.set(r, t(r)), n.get(r)),
  });
}
const ky = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function mc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(ky.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Ms = {};
function Sy(e) {
  Object.assign(Ms, e);
}
const xr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Ln = new Set(xr);
function bm(e, { layout: t, layoutId: n }) {
  return (
    Ln.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ms[e] || e === "opacity"))
  );
}
const De = (e) => !!(e && e.getVelocity),
  by = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Cy = xr.length;
function Ny(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  i,
  r,
) {
  let s = "";
  for (let a = 0; a < Cy; a++) {
    const o = xr[a];
    if (e[o] !== void 0) {
      const c = by[o] || o;
      s += `${c}(${e[o]}) `;
    }
  }
  return (
    t && !e.z && (s += "translateZ(0)"),
    (s = s.trim()),
    r ? (s = r(e, i ? "" : s)) : n && i && (s = "none"),
    s
  );
}
const Cm = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Nm = Cm("--"),
  Zo = Cm("var(--"),
  Py =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  Ty = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  nn = (e, t, n) => Math.min(Math.max(n, e), t),
  Dn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Bi = { ...Dn, transform: (e) => nn(0, 1, e) },
  Ur = { ...Dn, default: 1 },
  $i = (e) => Math.round(e * 1e5) / 1e5,
  ma = /(-)?([\d]*\.?[\d])+/g,
  Pm =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Ey =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function jr(e) {
  return typeof e == "string";
}
const _r = (e) => ({
    test: (t) => jr(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Rt = _r("deg"),
  pt = _r("%"),
  D = _r("px"),
  Ay = _r("vh"),
  Ly = _r("vw"),
  Ku = {
    ...pt,
    parse: (e) => pt.parse(e) / 100,
    transform: (e) => pt.transform(e * 100),
  },
  Ju = { ...Dn, transform: Math.round },
  Tm = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    size: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    rotate: Rt,
    rotateX: Rt,
    rotateY: Rt,
    rotateZ: Rt,
    scale: Ur,
    scaleX: Ur,
    scaleY: Ur,
    scaleZ: Ur,
    skew: Rt,
    skewX: Rt,
    skewY: Rt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Bi,
    originX: Ku,
    originY: Ku,
    originZ: D,
    zIndex: Ju,
    fillOpacity: Bi,
    strokeOpacity: Bi,
    numOctaves: Ju,
  };
function hc(e, t, n, i) {
  const { style: r, vars: s, transform: a, transformOrigin: o } = e;
  let c = !1,
    u = !1,
    d = !0;
  for (const p in t) {
    const f = t[p];
    if (Nm(p)) {
      s[p] = f;
      continue;
    }
    const g = Tm[p],
      y = Ty(f, g);
    if (Ln.has(p)) {
      if (((c = !0), (a[p] = y), !d)) continue;
      f !== (g.default || 0) && (d = !1);
    } else p.startsWith("origin") ? ((u = !0), (o[p] = y)) : (r[p] = y);
  }
  if (
    (t.transform ||
      (c || i
        ? (r.transform = Ny(e.transform, n, d, i))
        : r.transform && (r.transform = "none")),
    u)
  ) {
    const { originX: p = "50%", originY: f = "50%", originZ: g = 0 } = o;
    r.transformOrigin = `${p} ${f} ${g}`;
  }
}
const gc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Em(e, t, n) {
  for (const i in t) !De(t[i]) && !bm(i, n) && (e[i] = t[i]);
}
function Dy({ transformTemplate: e }, t, n) {
  return _.useMemo(() => {
    const i = gc();
    return (
      hc(i, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, i.vars, i.style)
    );
  }, [t]);
}
function My(e, t, n) {
  const i = e.style || {},
    r = {};
  return (
    Em(r, i, e),
    Object.assign(r, Dy(e, t, n)),
    e.transformValues ? e.transformValues(r) : r
  );
}
function Ry(e, t, n) {
  const i = {},
    r = My(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((i.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (i.tabIndex = 0),
    (i.style = r),
    i
  );
}
const Iy = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Rs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Iy.has(e)
  );
}
let Am = (e) => !Rs(e);
function Vy(e) {
  e && (Am = (t) => (t.startsWith("on") ? !Rs(t) : e(t)));
}
try {
  Vy(require("@emotion/is-prop-valid").default);
} catch {}
function zy(e, t, n) {
  const i = {};
  for (const r in e)
    (r === "values" && typeof e.values == "object") ||
      ((Am(r) ||
        (n === !0 && Rs(r)) ||
        (!t && !Rs(r)) ||
        (e.draggable && r.startsWith("onDrag"))) &&
        (i[r] = e[r]));
  return i;
}
function Qu(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function Oy(e, t, n) {
  const i = Qu(t, e.x, e.width),
    r = Qu(n, e.y, e.height);
  return `${i} ${r}`;
}
const Fy = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  By = { offset: "strokeDashoffset", array: "strokeDasharray" };
function $y(e, t, n = 1, i = 0, r = !0) {
  e.pathLength = 1;
  const s = r ? Fy : By;
  e[s.offset] = D.transform(-i);
  const a = D.transform(t),
    o = D.transform(n);
  e[s.array] = `${a} ${o}`;
}
function vc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: i,
    originX: r,
    originY: s,
    pathLength: a,
    pathSpacing: o = 1,
    pathOffset: c = 0,
    ...u
  },
  d,
  p,
  f,
) {
  if ((hc(e, u, d, f), p)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: g, style: y, dimensions: x } = e;
  (g.transform && (x && (y.transform = g.transform), delete g.transform),
    x &&
      (r !== void 0 || s !== void 0 || y.transform) &&
      (y.transformOrigin = Oy(
        x,
        r !== void 0 ? r : 0.5,
        s !== void 0 ? s : 0.5,
      )),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    i !== void 0 && (g.scale = i),
    a !== void 0 && $y(g, a, o, c, !1));
}
const Lm = () => ({ ...gc(), attrs: {} }),
  yc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Uy(e, t, n, i) {
  const r = _.useMemo(() => {
    const s = Lm();
    return (
      vc(s, t, { enableHardwareAcceleration: !1 }, yc(i), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (Em(s, e.style, e), (r.style = { ...s, ...r.style }));
  }
  return r;
}
function Wy(e = !1) {
  return (n, i, r, { latestValues: s }, a) => {
    const c = (mc(n) ? Uy : Ry)(i, s, a, n),
      d = { ...zy(i, typeof n == "string", e), ...c, ref: r },
      { children: p } = i,
      f = _.useMemo(() => (De(p) ? p.get() : p), [p]);
    return _.createElement(n, { ...d, children: f });
  };
}
function Dm(e, { style: t, vars: n }, i, r) {
  Object.assign(e.style, t, r && r.getProjectionStyles(i));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Mm = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Rm(e, t, n, i) {
  Dm(e, t, void 0, i);
  for (const r in t.attrs) e.setAttribute(Mm.has(r) ? r : uc(r), t.attrs[r]);
}
function xc(e, t) {
  const { style: n } = e,
    i = {};
  for (const r in n)
    (De(n[r]) || (t.style && De(t.style[r])) || bm(r, e)) && (i[r] = n[r]);
  return i;
}
function Im(e, t) {
  const n = xc(e, t);
  for (const i in e)
    if (De(e[i]) || De(t[i])) {
      const r =
        xr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      n[r] = e[i];
    }
  return n;
}
function jc(e, t, n, i = {}, r = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, i, r)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, i, r)),
    t
  );
}
function Vm(e) {
  const t = _.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Is = (e) => Array.isArray(e),
  Hy = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Gy = (e) => (Is(e) ? e[e.length - 1] || 0 : e);
function os(e) {
  const t = De(e) ? e.get() : e;
  return Hy(t) ? t.toValue() : t;
}
function Ky(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  i,
  r,
  s,
) {
  const a = { latestValues: Jy(i, r, s, e), renderState: t() };
  return (n && (a.mount = (o) => n(i, o, a)), a);
}
const zm = (e) => (t, n) => {
  const i = _.useContext(ca),
    r = _.useContext(ua),
    s = () => Ky(e, t, i, r);
  return n ? s() : Vm(s);
};
function Jy(e, t, n, i) {
  const r = {},
    s = i(e, {});
  for (const f in s) r[f] = os(s[f]);
  let { initial: a, animate: o } = e;
  const c = fa(e),
    u = km(e);
  t &&
    u &&
    !c &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), o === void 0 && (o = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || a === !1;
  const p = d ? o : a;
  return (
    p &&
      typeof p != "boolean" &&
      !pa(p) &&
      (Array.isArray(p) ? p : [p]).forEach((g) => {
        const y = jc(e, g);
        if (!y) return;
        const { transitionEnd: x, transition: w, ...v } = y;
        for (const m in v) {
          let h = v[m];
          if (Array.isArray(h)) {
            const j = d ? h.length - 1 : 0;
            h = h[j];
          }
          h !== null && (r[m] = h);
        }
        for (const m in x) r[m] = x[m];
      }),
    r
  );
}
const te = (e) => e;
class qu {
  constructor() {
    ((this.order = []), (this.scheduled = new Set()));
  }
  add(t) {
    if (!this.scheduled.has(t))
      return (this.scheduled.add(t), this.order.push(t), !0);
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    ((this.order.length = 0), this.scheduled.clear());
  }
}
function Qy(e) {
  let t = new qu(),
    n = new qu(),
    i = 0,
    r = !1,
    s = !1;
  const a = new WeakSet(),
    o = {
      schedule: (c, u = !1, d = !1) => {
        const p = d && r,
          f = p ? t : n;
        return (u && a.add(c), f.add(c) && p && r && (i = t.order.length), c);
      },
      cancel: (c) => {
        (n.remove(c), a.delete(c));
      },
      process: (c) => {
        if (r) {
          s = !0;
          return;
        }
        if (((r = !0), ([t, n] = [n, t]), n.clear(), (i = t.order.length), i))
          for (let u = 0; u < i; u++) {
            const d = t.order[u];
            (d(c), a.has(d) && (o.schedule(d), e()));
          }
        ((r = !1), s && ((s = !1), o.process(c)));
      },
    };
  return o;
}
const Wr = ["prepare", "read", "update", "preRender", "render", "postRender"],
  qy = 40;
function Yy(e, t) {
  let n = !1,
    i = !0;
  const r = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = Wr.reduce((p, f) => ((p[f] = Qy(() => (n = !0))), p), {}),
    a = (p) => s[p].process(r),
    o = () => {
      const p = performance.now();
      ((n = !1),
        (r.delta = i ? 1e3 / 60 : Math.max(Math.min(p - r.timestamp, qy), 1)),
        (r.timestamp = p),
        (r.isProcessing = !0),
        Wr.forEach(a),
        (r.isProcessing = !1),
        n && t && ((i = !1), e(o)));
    },
    c = () => {
      ((n = !0), (i = !0), r.isProcessing || e(o));
    };
  return {
    schedule: Wr.reduce((p, f) => {
      const g = s[f];
      return (
        (p[f] = (y, x = !1, w = !1) => (n || c(), g.schedule(y, x, w))),
        p
      );
    }, {}),
    cancel: (p) => Wr.forEach((f) => s[f].cancel(p)),
    state: r,
    steps: s,
  };
}
const {
    schedule: W,
    cancel: Et,
    state: xe,
    steps: Wa,
  } = Yy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : te, !0),
  Xy = {
    useVisualState: zm({
      scrapeMotionValuesFromProps: Im,
      createRenderState: Lm,
      onMount: (e, t, { renderState: n, latestValues: i }) => {
        (W.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          W.render(() => {
            (vc(
              n,
              i,
              { enableHardwareAcceleration: !1 },
              yc(t.tagName),
              e.transformTemplate,
            ),
              Rm(t, n));
          }));
      },
    }),
  },
  Zy = {
    useVisualState: zm({
      scrapeMotionValuesFromProps: xc,
      createRenderState: gc,
    }),
  };
function ex(e, { forwardMotionProps: t = !1 }, n, i) {
  return {
    ...(mc(e) ? Xy : Zy),
    preloadedFeatures: n,
    useRender: Wy(t),
    createVisualElement: i,
    Component: e,
  };
}
function _t(e, t, n, i = { passive: !0 }) {
  return (e.addEventListener(t, n, i), () => e.removeEventListener(t, n));
}
const Om = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function ha(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const tx = (e) => (t) => Om(t) && e(t, ha(t));
function kt(e, t, n, i) {
  return _t(e, t, tx(n), i);
}
const nx = (e, t) => (n) => t(e(n)),
  Xt = (...e) => e.reduce(nx);
function Fm(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Yu = Fm("dragHorizontal"),
  Xu = Fm("dragVertical");
function Bm(e) {
  let t = !1;
  if (e === "y") t = Xu();
  else if (e === "x") t = Yu();
  else {
    const n = Yu(),
      i = Xu();
    n && i
      ? (t = () => {
          (n(), i());
        })
      : (n && n(), i && i());
  }
  return t;
}
function $m() {
  const e = Bm(!0);
  return e ? (e(), !1) : !0;
}
class cn {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function Zu(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    i = "onHover" + (t ? "Start" : "End"),
    r = (s, a) => {
      if (s.pointerType === "touch" || $m()) return;
      const o = e.getProps();
      (e.animationState &&
        o.whileHover &&
        e.animationState.setActive("whileHover", t),
        o[i] && W.update(() => o[i](s, a)));
    };
  return kt(e.current, n, r, { passive: !e.getProps()[i] });
}
class ix extends cn {
  mount() {
    this.unmount = Xt(Zu(this.node, !0), Zu(this.node, !1));
  }
  unmount() {}
}
class rx extends cn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Xt(
      _t(this.node.current, "focus", () => this.onFocus()),
      _t(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const Um = (e, t) => (t ? (e === t ? !0 : Um(e, t.parentElement)) : !1);
function Ha(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, ha(n));
}
class sx extends cn {
  constructor() {
    (super(...arguments),
      (this.removeStartListeners = te),
      (this.removeEndListeners = te),
      (this.removeAccessibleListeners = te),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const i = this.node.getProps(),
          s = kt(
            window,
            "pointerup",
            (o, c) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: d,
                globalTapTarget: p,
              } = this.node.getProps();
              W.update(() => {
                !p && !Um(this.node.current, o.target)
                  ? d && d(o, c)
                  : u && u(o, c);
              });
            },
            { passive: !(i.onTap || i.onPointerUp) },
          ),
          a = kt(window, "pointercancel", (o, c) => this.cancelPress(o, c), {
            passive: !(i.onTapCancel || i.onPointerCancel),
          });
        ((this.removeEndListeners = Xt(s, a)), this.startPress(t, n));
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const a = (o) => {
              o.key !== "Enter" ||
                !this.checkPressEnd() ||
                Ha("up", (c, u) => {
                  const { onTap: d } = this.node.getProps();
                  d && W.update(() => d(c, u));
                });
            };
            (this.removeEndListeners(),
              (this.removeEndListeners = _t(this.node.current, "keyup", a)),
              Ha("down", (o, c) => {
                this.startPress(o, c);
              }));
          },
          n = _t(this.node.current, "keydown", t),
          i = () => {
            this.isPressing && Ha("cancel", (s, a) => this.cancelPress(s, a));
          },
          r = _t(this.node.current, "blur", i);
        this.removeAccessibleListeners = Xt(n, r);
      }));
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: i, whileTap: r } = this.node.getProps();
    (r &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      i && W.update(() => i(t, n)));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !$m()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: i } = this.node.getProps();
    i && W.update(() => i(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = kt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) },
      ),
      i = _t(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Xt(n, i);
  }
  unmount() {
    (this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners());
  }
}
const el = new WeakMap(),
  Ga = new WeakMap(),
  ax = (e) => {
    const t = el.get(e.target);
    t && t(e);
  },
  ox = (e) => {
    e.forEach(ax);
  };
function lx({ root: e, ...t }) {
  const n = e || document;
  Ga.has(n) || Ga.set(n, {});
  const i = Ga.get(n),
    r = JSON.stringify(t);
  return (
    i[r] || (i[r] = new IntersectionObserver(ox, { root: e, ...t })),
    i[r]
  );
}
function cx(e, t, n) {
  const i = lx(t);
  return (
    el.set(e, n),
    i.observe(e),
    () => {
      (el.delete(e), i.unobserve(e));
    }
  );
}
const ux = { some: 0, all: 1 };
class dx extends cn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: i, amount: r = "some", once: s } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: i,
        threshold: typeof r == "number" ? r : ux[r],
      },
      o = (c) => {
        const { isIntersecting: u } = c;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: d, onViewportLeave: p } = this.node.getProps(),
          f = u ? d : p;
        f && f(c);
      };
    return cx(this.node.current, a, o);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(px(t, n)) && this.startObserver();
  }
  unmount() {}
}
function px({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const fx = {
  inView: { Feature: dx },
  tap: { Feature: sx },
  focus: { Feature: rx },
  hover: { Feature: ix },
};
function Wm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
  return !0;
}
function mx(e) {
  const t = {};
  return (e.values.forEach((n, i) => (t[i] = n.get())), t);
}
function hx(e) {
  const t = {};
  return (e.values.forEach((n, i) => (t[i] = n.getVelocity())), t);
}
function ga(e, t, n) {
  const i = e.getProps();
  return jc(i, t, n !== void 0 ? n : i.custom, mx(e), hx(e));
}
let gx = te,
  _c = te;
const Zt = (e) => e * 1e3,
  St = (e) => e / 1e3,
  vx = { current: !1 },
  Hm = (e) => Array.isArray(e) && typeof e[0] == "number";
function Gm(e) {
  return !!(
    !e ||
    (typeof e == "string" && Km[e]) ||
    Hm(e) ||
    (Array.isArray(e) && e.every(Gm))
  );
}
const Ai = ([e, t, n, i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`,
  Km = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ai([0, 0.65, 0.55, 1]),
    circOut: Ai([0.55, 0, 1, 0.45]),
    backIn: Ai([0.31, 0.01, 0.66, -0.59]),
    backOut: Ai([0.33, 1.53, 0.69, 0.99]),
  };
function Jm(e) {
  if (e) return Hm(e) ? Ai(e) : Array.isArray(e) ? e.map(Jm) : Km[e];
}
function yx(
  e,
  t,
  n,
  {
    delay: i = 0,
    duration: r,
    repeat: s = 0,
    repeatType: a = "loop",
    ease: o,
    times: c,
  } = {},
) {
  const u = { [t]: n };
  c && (u.offset = c);
  const d = Jm(o);
  return (
    Array.isArray(d) && (u.easing = d),
    e.animate(u, {
      delay: i,
      duration: r,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: s + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
function xx(e, { repeat: t, repeatType: n = "loop" }) {
  const i = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[i];
}
const Qm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  jx = 1e-7,
  _x = 12;
function wx(e, t, n, i, r) {
  let s,
    a,
    o = 0;
  do ((a = t + (n - t) / 2), (s = Qm(a, i, r) - e), s > 0 ? (n = a) : (t = a));
  while (Math.abs(s) > jx && ++o < _x);
  return a;
}
function wr(e, t, n, i) {
  if (e === t && n === i) return te;
  const r = (s) => wx(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Qm(r(s), t, i));
}
const kx = wr(0.42, 0, 1, 1),
  Sx = wr(0, 0, 0.58, 1),
  qm = wr(0.42, 0, 0.58, 1),
  bx = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ym = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Xm = (e) => (t) => 1 - e(1 - t),
  wc = (e) => 1 - Math.sin(Math.acos(e)),
  Zm = Xm(wc),
  Cx = Ym(wc),
  eh = wr(0.33, 1.53, 0.69, 0.99),
  kc = Xm(eh),
  Nx = Ym(kc),
  Px = (e) =>
    (e *= 2) < 1 ? 0.5 * kc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Tx = {
    linear: te,
    easeIn: kx,
    easeInOut: qm,
    easeOut: Sx,
    circIn: wc,
    circInOut: Cx,
    circOut: Zm,
    backIn: kc,
    backInOut: Nx,
    backOut: eh,
    anticipate: Px,
  },
  ed = (e) => {
    if (Array.isArray(e)) {
      _c(e.length === 4);
      const [t, n, i, r] = e;
      return wr(t, n, i, r);
    } else if (typeof e == "string") return Tx[e];
    return e;
  },
  Sc = (e, t) => (n) =>
    !!(
      (jr(n) && Ey.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  th = (e, t, n) => (i) => {
    if (!jr(i)) return i;
    const [r, s, a, o] = i.match(ma);
    return {
      [e]: parseFloat(r),
      [t]: parseFloat(s),
      [n]: parseFloat(a),
      alpha: o !== void 0 ? parseFloat(o) : 1,
    };
  },
  Ex = (e) => nn(0, 255, e),
  Ka = { ...Dn, transform: (e) => Math.round(Ex(e)) },
  wn = {
    test: Sc("rgb", "red"),
    parse: th("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: i = 1 }) =>
      "rgba(" +
      Ka.transform(e) +
      ", " +
      Ka.transform(t) +
      ", " +
      Ka.transform(n) +
      ", " +
      $i(Bi.transform(i)) +
      ")",
  };
function Ax(e) {
  let t = "",
    n = "",
    i = "",
    r = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (i = e.substring(5, 7)),
        (r = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (i = e.substring(3, 4)),
        (r = e.substring(4, 5)),
        (t += t),
        (n += n),
        (i += i),
        (r += r)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(i, 16),
      alpha: r ? parseInt(r, 16) / 255 : 1,
    }
  );
}
const tl = { test: Sc("#"), parse: Ax, transform: wn.transform },
  qn = {
    test: Sc("hsl", "hue"),
    parse: th("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: i = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      pt.transform($i(t)) +
      ", " +
      pt.transform($i(n)) +
      ", " +
      $i(Bi.transform(i)) +
      ")",
  },
  ke = {
    test: (e) => wn.test(e) || tl.test(e) || qn.test(e),
    parse: (e) =>
      wn.test(e) ? wn.parse(e) : qn.test(e) ? qn.parse(e) : tl.parse(e),
    transform: (e) =>
      jr(e) ? e : e.hasOwnProperty("red") ? wn.transform(e) : qn.transform(e),
  },
  Y = (e, t, n) => -n * e + n * t + e;
function Ja(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Lx({ hue: e, saturation: t, lightness: n, alpha: i }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let r = 0,
    s = 0,
    a = 0;
  if (!t) r = s = a = n;
  else {
    const o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      c = 2 * n - o;
    ((r = Ja(c, o, e + 1 / 3)), (s = Ja(c, o, e)), (a = Ja(c, o, e - 1 / 3)));
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(s * 255),
    blue: Math.round(a * 255),
    alpha: i,
  };
}
const Qa = (e, t, n) => {
    const i = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - i) + i));
  },
  Dx = [tl, wn, qn],
  Mx = (e) => Dx.find((t) => t.test(e));
function td(e) {
  const t = Mx(e);
  let n = t.parse(e);
  return (t === qn && (n = Lx(n)), n);
}
const nh = (e, t) => {
  const n = td(e),
    i = td(t),
    r = { ...n };
  return (s) => (
    (r.red = Qa(n.red, i.red, s)),
    (r.green = Qa(n.green, i.green, s)),
    (r.blue = Qa(n.blue, i.blue, s)),
    (r.alpha = Y(n.alpha, i.alpha, s)),
    wn.transform(r)
  );
};
function Rx(e) {
  var t, n;
  return (
    isNaN(e) &&
    jr(e) &&
    (((t = e.match(ma)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Pm)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const ih = { regex: Py, countKey: "Vars", token: "${v}", parse: te },
  rh = { regex: Pm, countKey: "Colors", token: "${c}", parse: ke.parse },
  sh = { regex: ma, countKey: "Numbers", token: "${n}", parse: Dn.parse };
function qa(e, { regex: t, countKey: n, token: i, parse: r }) {
  const s = e.tokenised.match(t);
  s &&
    ((e["num" + n] = s.length),
    (e.tokenised = e.tokenised.replace(t, i)),
    e.values.push(...s.map(r)));
}
function Vs(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return (n.value.includes("var(--") && qa(n, ih), qa(n, rh), qa(n, sh), n);
}
function ah(e) {
  return Vs(e).values;
}
function oh(e) {
  const { values: t, numColors: n, numVars: i, tokenised: r } = Vs(e),
    s = t.length;
  return (a) => {
    let o = r;
    for (let c = 0; c < s; c++)
      c < i
        ? (o = o.replace(ih.token, a[c]))
        : c < i + n
          ? (o = o.replace(rh.token, ke.transform(a[c])))
          : (o = o.replace(sh.token, $i(a[c])));
    return o;
  };
}
const Ix = (e) => (typeof e == "number" ? 0 : e);
function Vx(e) {
  const t = ah(e);
  return oh(e)(t.map(Ix));
}
const rn = {
    test: Rx,
    parse: ah,
    createTransformer: oh,
    getAnimatableNone: Vx,
  },
  lh = (e, t) => (n) => `${n > 0 ? t : e}`;
function ch(e, t) {
  return typeof e == "number"
    ? (n) => Y(e, t, n)
    : ke.test(e)
      ? nh(e, t)
      : e.startsWith("var(")
        ? lh(e, t)
        : dh(e, t);
}
const uh = (e, t) => {
    const n = [...e],
      i = n.length,
      r = e.map((s, a) => ch(s, t[a]));
    return (s) => {
      for (let a = 0; a < i; a++) n[a] = r[a](s);
      return n;
    };
  },
  zx = (e, t) => {
    const n = { ...e, ...t },
      i = {};
    for (const r in n)
      e[r] !== void 0 && t[r] !== void 0 && (i[r] = ch(e[r], t[r]));
    return (r) => {
      for (const s in i) n[s] = i[s](r);
      return n;
    };
  },
  dh = (e, t) => {
    const n = rn.createTransformer(t),
      i = Vs(e),
      r = Vs(t);
    return i.numVars === r.numVars &&
      i.numColors === r.numColors &&
      i.numNumbers >= r.numNumbers
      ? Xt(uh(i.values, r.values), n)
      : lh(e, t);
  },
  dr = (e, t, n) => {
    const i = t - e;
    return i === 0 ? 1 : (n - e) / i;
  },
  nd = (e, t) => (n) => Y(e, t, n);
function Ox(e) {
  return typeof e == "number"
    ? nd
    : typeof e == "string"
      ? ke.test(e)
        ? nh
        : dh
      : Array.isArray(e)
        ? uh
        : typeof e == "object"
          ? zx
          : nd;
}
function Fx(e, t, n) {
  const i = [],
    r = n || Ox(e[0]),
    s = e.length - 1;
  for (let a = 0; a < s; a++) {
    let o = r(e[a], e[a + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[a] || te : t;
      o = Xt(c, o);
    }
    i.push(o);
  }
  return i;
}
function ph(e, t, { clamp: n = !0, ease: i, mixer: r } = {}) {
  const s = e.length;
  if ((_c(s === t.length), s === 1)) return () => t[0];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Fx(t, i, r),
    o = a.length,
    c = (u) => {
      let d = 0;
      if (o > 1) for (; d < e.length - 2 && !(u < e[d + 1]); d++);
      const p = dr(e[d], e[d + 1], u);
      return a[d](p);
    };
  return n ? (u) => c(nn(e[0], e[s - 1], u)) : c;
}
function Bx(e, t) {
  const n = e[e.length - 1];
  for (let i = 1; i <= t; i++) {
    const r = dr(0, t, i);
    e.push(Y(n, 1, r));
  }
}
function $x(e) {
  const t = [0];
  return (Bx(t, e.length - 1), t);
}
function Ux(e, t) {
  return e.map((n) => n * t);
}
function Wx(e, t) {
  return e.map(() => t || qm).splice(0, e.length - 1);
}
function zs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: i = "easeInOut",
}) {
  const r = bx(i) ? i.map(ed) : ed(i),
    s = { done: !1, value: t[0] },
    a = Ux(n && n.length === t.length ? n : $x(t), e),
    o = ph(a, t, { ease: Array.isArray(r) ? r : Wx(t, r) });
  return {
    calculatedDuration: e,
    next: (c) => ((s.value = o(c)), (s.done = c >= e), s),
  };
}
function fh(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Hx = 5;
function mh(e, t, n) {
  const i = Math.max(t - Hx, 0);
  return fh(n - e(i), t - i);
}
const Ya = 0.001,
  Gx = 0.01,
  id = 10,
  Kx = 0.05,
  Jx = 1;
function Qx({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: i = 1,
}) {
  let r, s;
  gx(e <= Zt(id));
  let a = 1 - t;
  ((a = nn(Kx, Jx, a)),
    (e = nn(Gx, id, St(e))),
    a < 1
      ? ((r = (u) => {
          const d = u * a,
            p = d * e,
            f = d - n,
            g = nl(u, a),
            y = Math.exp(-p);
          return Ya - (f / g) * y;
        }),
        (s = (u) => {
          const p = u * a * e,
            f = p * n + n,
            g = Math.pow(a, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-p),
            x = nl(Math.pow(u, 2), a);
          return ((-r(u) + Ya > 0 ? -1 : 1) * ((f - g) * y)) / x;
        }))
      : ((r = (u) => {
          const d = Math.exp(-u * e),
            p = (u - n) * e + 1;
          return -Ya + d * p;
        }),
        (s = (u) => {
          const d = Math.exp(-u * e),
            p = (n - u) * (e * e);
          return d * p;
        })));
  const o = 5 / e,
    c = Yx(r, s, o);
  if (((e = Zt(e)), isNaN(c)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(c, 2) * i;
    return { stiffness: u, damping: a * 2 * Math.sqrt(i * u), duration: e };
  }
}
const qx = 12;
function Yx(e, t, n) {
  let i = n;
  for (let r = 1; r < qx; r++) i = i - e(i) / t(i);
  return i;
}
function nl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Xx = ["duration", "bounce"],
  Zx = ["stiffness", "damping", "mass"];
function rd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function e1(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!rd(e, Zx) && rd(e, Xx)) {
    const n = Qx(e);
    ((t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0));
  }
  return t;
}
function hh({ keyframes: e, restDelta: t, restSpeed: n, ...i }) {
  const r = e[0],
    s = e[e.length - 1],
    a = { done: !1, value: r },
    {
      stiffness: o,
      damping: c,
      mass: u,
      duration: d,
      velocity: p,
      isResolvedFromDuration: f,
    } = e1({ ...i, velocity: -St(i.velocity || 0) }),
    g = p || 0,
    y = c / (2 * Math.sqrt(o * u)),
    x = s - r,
    w = St(Math.sqrt(o / u)),
    v = Math.abs(x) < 5;
  (n || (n = v ? 0.01 : 2), t || (t = v ? 0.005 : 0.5));
  let m;
  if (y < 1) {
    const h = nl(w, y);
    m = (j) => {
      const k = Math.exp(-y * w * j);
      return (
        s - k * (((g + y * w * x) / h) * Math.sin(h * j) + x * Math.cos(h * j))
      );
    };
  } else if (y === 1) m = (h) => s - Math.exp(-w * h) * (x + (g + w * x) * h);
  else {
    const h = w * Math.sqrt(y * y - 1);
    m = (j) => {
      const k = Math.exp(-y * w * j),
        N = Math.min(h * j, 300);
      return (
        s - (k * ((g + y * w * x) * Math.sinh(N) + h * x * Math.cosh(N))) / h
      );
    };
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (h) => {
      const j = m(h);
      if (f) a.done = h >= d;
      else {
        let k = g;
        h !== 0 && (y < 1 ? (k = mh(m, h, j)) : (k = 0));
        const N = Math.abs(k) <= n,
          P = Math.abs(s - j) <= t;
        a.done = N && P;
      }
      return ((a.value = a.done ? s : j), a);
    },
  };
}
function sd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: i = 325,
  bounceDamping: r = 10,
  bounceStiffness: s = 500,
  modifyTarget: a,
  min: o,
  max: c,
  restDelta: u = 0.5,
  restSpeed: d,
}) {
  const p = e[0],
    f = { done: !1, value: p },
    g = (C) => (o !== void 0 && C < o) || (c !== void 0 && C > c),
    y = (C) =>
      o === void 0
        ? c
        : c === void 0 || Math.abs(o - C) < Math.abs(c - C)
          ? o
          : c;
  let x = n * t;
  const w = p + x,
    v = a === void 0 ? w : a(w);
  v !== w && (x = v - p);
  const m = (C) => -x * Math.exp(-C / i),
    h = (C) => v + m(C),
    j = (C) => {
      const L = m(C),
        M = h(C);
      ((f.done = Math.abs(L) <= u), (f.value = f.done ? v : M));
    };
  let k, N;
  const P = (C) => {
    g(f.value) &&
      ((k = C),
      (N = hh({
        keyframes: [f.value, y(f.value)],
        velocity: mh(h, C, f.value),
        damping: r,
        stiffness: s,
        restDelta: u,
        restSpeed: d,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (C) => {
        let L = !1;
        return (
          !N && k === void 0 && ((L = !0), j(C), P(C)),
          k !== void 0 && C > k ? N.next(C - k) : (!L && j(C), f)
        );
      },
    }
  );
}
const t1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => W.update(t, !0),
      stop: () => Et(t),
      now: () => (xe.isProcessing ? xe.timestamp : performance.now()),
    };
  },
  ad = 2e4;
function od(e) {
  let t = 0;
  const n = 50;
  let i = e.next(t);
  for (; !i.done && t < ad; ) ((t += n), (i = e.next(t)));
  return t >= ad ? 1 / 0 : t;
}
const n1 = { decay: sd, inertia: sd, tween: zs, keyframes: zs, spring: hh };
function Os({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = t1,
  keyframes: i,
  type: r = "keyframes",
  repeat: s = 0,
  repeatDelay: a = 0,
  repeatType: o = "loop",
  onPlay: c,
  onStop: u,
  onComplete: d,
  onUpdate: p,
  ...f
}) {
  let g = 1,
    y = !1,
    x,
    w;
  const v = () => {
    w = new Promise((I) => {
      x = I;
    });
  };
  v();
  let m;
  const h = n1[r] || zs;
  let j;
  h !== zs &&
    typeof i[0] != "number" &&
    ((j = ph([0, 100], i, { clamp: !1 })), (i = [0, 100]));
  const k = h({ ...f, keyframes: i });
  let N;
  o === "mirror" &&
    (N = h({
      ...f,
      keyframes: [...i].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let P = "idle",
    C = null,
    L = null,
    M = null;
  k.calculatedDuration === null && s && (k.calculatedDuration = od(k));
  const { calculatedDuration: ce } = k;
  let fe = 1 / 0,
    we = 1 / 0;
  ce !== null && ((fe = ce + a), (we = fe * (s + 1) - a));
  let ue = 0;
  const Dt = (I) => {
      if (L === null) return;
      (g > 0 && (L = Math.min(L, I)),
        g < 0 && (L = Math.min(I - we / g, L)),
        C !== null ? (ue = C) : (ue = Math.round(I - L) * g));
      const J = ue - t * (g >= 0 ? 1 : -1),
        un = g >= 0 ? J < 0 : J > we;
      ((ue = Math.max(J, 0)), P === "finished" && C === null && (ue = we));
      let st = ue,
        Rn = k;
      if (s) {
        const va = Math.min(ue, we) / fe;
        let Sr = Math.floor(va),
          pn = va % 1;
        (!pn && va >= 1 && (pn = 1),
          pn === 1 && Sr--,
          (Sr = Math.min(Sr, s + 1)),
          !!(Sr % 2) &&
            (o === "reverse"
              ? ((pn = 1 - pn), a && (pn -= a / fe))
              : o === "mirror" && (Rn = N)),
          (st = nn(0, 1, pn) * fe));
      }
      const Me = un ? { done: !1, value: i[0] } : Rn.next(st);
      j && (Me.value = j(Me.value));
      let { done: dn } = Me;
      !un && ce !== null && (dn = g >= 0 ? ue >= we : ue <= 0);
      const qh = C === null && (P === "finished" || (P === "running" && dn));
      return (p && p(Me.value), qh && E(), Me);
    },
    ne = () => {
      (m && m.stop(), (m = void 0));
    },
    $e = () => {
      ((P = "idle"), ne(), x(), v(), (L = M = null));
    },
    E = () => {
      ((P = "finished"), d && d(), ne(), x());
    },
    R = () => {
      if (y) return;
      m || (m = n(Dt));
      const I = m.now();
      (c && c(),
        C !== null ? (L = I - C) : (!L || P === "finished") && (L = I),
        P === "finished" && v(),
        (M = L),
        (C = null),
        (P = "running"),
        m.start());
    };
  e && R();
  const z = {
    then(I, J) {
      return w.then(I, J);
    },
    get time() {
      return St(ue);
    },
    set time(I) {
      ((I = Zt(I)),
        (ue = I),
        C !== null || !m || g === 0 ? (C = I) : (L = m.now() - I / g));
    },
    get duration() {
      const I = k.calculatedDuration === null ? od(k) : k.calculatedDuration;
      return St(I);
    },
    get speed() {
      return g;
    },
    set speed(I) {
      I === g || !m || ((g = I), (z.time = St(ue)));
    },
    get state() {
      return P;
    },
    play: R,
    pause: () => {
      ((P = "paused"), (C = ue));
    },
    stop: () => {
      ((y = !0), P !== "idle" && ((P = "idle"), u && u(), $e()));
    },
    cancel: () => {
      (M !== null && Dt(M), $e());
    },
    complete: () => {
      P = "finished";
    },
    sample: (I) => ((L = 0), Dt(I)),
  };
  return z;
}
function i1(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const r1 = i1(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  s1 = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Hr = 10,
  a1 = 2e4,
  o1 = (e, t) => t.type === "spring" || e === "backgroundColor" || !Gm(t.ease);
function l1(e, t, { onUpdate: n, onComplete: i, ...r }) {
  if (
    !(
      r1() &&
      s1.has(t) &&
      !r.repeatDelay &&
      r.repeatType !== "mirror" &&
      r.damping !== 0 &&
      r.type !== "inertia"
    )
  )
    return !1;
  let a = !1,
    o,
    c,
    u = !1;
  const d = () => {
    c = new Promise((h) => {
      o = h;
    });
  };
  d();
  let { keyframes: p, duration: f = 300, ease: g, times: y } = r;
  if (o1(t, r)) {
    const h = Os({ ...r, repeat: 0, delay: 0 });
    let j = { done: !1, value: p[0] };
    const k = [];
    let N = 0;
    for (; !j.done && N < a1; ) ((j = h.sample(N)), k.push(j.value), (N += Hr));
    ((y = void 0), (p = k), (f = N - Hr), (g = "linear"));
  }
  const x = yx(e.owner.current, t, p, { ...r, duration: f, ease: g, times: y }),
    w = () => {
      ((u = !1), x.cancel());
    },
    v = () => {
      ((u = !0), W.update(w), o(), d());
    };
  return (
    (x.onfinish = () => {
      u || (e.set(xx(p, r)), i && i(), v());
    }),
    {
      then(h, j) {
        return c.then(h, j);
      },
      attachTimeline(h) {
        return ((x.timeline = h), (x.onfinish = null), te);
      },
      get time() {
        return St(x.currentTime || 0);
      },
      set time(h) {
        x.currentTime = Zt(h);
      },
      get speed() {
        return x.playbackRate;
      },
      set speed(h) {
        x.playbackRate = h;
      },
      get duration() {
        return St(f);
      },
      play: () => {
        a || (x.play(), Et(w));
      },
      pause: () => x.pause(),
      stop: () => {
        if (((a = !0), x.playState === "idle")) return;
        const { currentTime: h } = x;
        if (h) {
          const j = Os({ ...r, autoplay: !1 });
          e.setWithVelocity(j.sample(h - Hr).value, j.sample(h).value, Hr);
        }
        v();
      },
      complete: () => {
        u || x.finish();
      },
      cancel: v,
    }
  );
}
function c1({ keyframes: e, delay: t, onUpdate: n, onComplete: i }) {
  const r = () => (
    n && n(e[e.length - 1]),
    i && i(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: te,
      pause: te,
      stop: te,
      then: (s) => (s(), Promise.resolve()),
      cancel: te,
      complete: te,
    }
  );
  return t
    ? Os({ keyframes: [0, 1], duration: 0, delay: t, onComplete: r })
    : r();
}
const u1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  d1 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  p1 = { type: "keyframes", duration: 0.8 },
  f1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  m1 = (e, { keyframes: t }) =>
    t.length > 2
      ? p1
      : Ln.has(e)
        ? e.startsWith("scale")
          ? d1(t[1])
          : u1
        : f1,
  il = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (rn.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  h1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function g1(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [i] = n.match(ma) || [];
  if (!i) return e;
  const r = n.replace(i, "");
  let s = h1.has(t) ? 1 : 0;
  return (i !== n && (s *= 100), t + "(" + s + r + ")");
}
const v1 = /([a-z-]*)\(.*?\)/g,
  rl = {
    ...rn,
    getAnimatableNone: (e) => {
      const t = e.match(v1);
      return t ? t.map(g1).join(" ") : e;
    },
  },
  y1 = {
    ...Tm,
    color: ke,
    backgroundColor: ke,
    outlineColor: ke,
    fill: ke,
    stroke: ke,
    borderColor: ke,
    borderTopColor: ke,
    borderRightColor: ke,
    borderBottomColor: ke,
    borderLeftColor: ke,
    filter: rl,
    WebkitFilter: rl,
  },
  bc = (e) => y1[e];
function gh(e, t) {
  let n = bc(e);
  return (
    n !== rl && (n = rn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const vh = (e) => /^0[^.\s]+$/.test(e);
function x1(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || vh(e);
}
function j1(e, t, n, i) {
  const r = il(t, n);
  let s;
  Array.isArray(n) ? (s = [...n]) : (s = [null, n]);
  const a = i.from !== void 0 ? i.from : e.get();
  let o;
  const c = [];
  for (let u = 0; u < s.length; u++)
    (s[u] === null && (s[u] = u === 0 ? a : s[u - 1]),
      x1(s[u]) && c.push(u),
      typeof s[u] == "string" && s[u] !== "none" && s[u] !== "0" && (o = s[u]));
  if (r && c.length && o)
    for (let u = 0; u < c.length; u++) {
      const d = c[u];
      s[d] = gh(t, o);
    }
  return s;
}
function _1({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: i,
  staggerDirection: r,
  repeat: s,
  repeatType: a,
  repeatDelay: o,
  from: c,
  elapsed: u,
  ...d
}) {
  return !!Object.keys(d).length;
}
function Cc(e, t) {
  return e[t] || e.default || e;
}
const w1 = { skipAnimations: !1 },
  Nc =
    (e, t, n, i = {}) =>
    (r) => {
      const s = Cc(i, e) || {},
        a = s.delay || i.delay || 0;
      let { elapsed: o = 0 } = i;
      o = o - Zt(a);
      const c = j1(t, e, n, s),
        u = c[0],
        d = c[c.length - 1],
        p = il(e, u),
        f = il(e, d);
      let g = {
        keyframes: c,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...s,
        delay: -o,
        onUpdate: (y) => {
          (t.set(y), s.onUpdate && s.onUpdate(y));
        },
        onComplete: () => {
          (r(), s.onComplete && s.onComplete());
        },
      };
      if (
        (_1(s) || (g = { ...g, ...m1(e, g) }),
        g.duration && (g.duration = Zt(g.duration)),
        g.repeatDelay && (g.repeatDelay = Zt(g.repeatDelay)),
        !p || !f || vx.current || s.type === !1 || w1.skipAnimations)
      )
        return c1(g);
      if (
        !i.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const y = l1(t, e, g);
        if (y) return y;
      }
      return Os(g);
    };
function Fs(e) {
  return !!(De(e) && e.add);
}
const yh = (e) => /^\-?\d*\.?\d+$/.test(e);
function Pc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Tc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ec {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Pc(this.subscriptions, t), () => Tc(this.subscriptions, t));
  }
  notify(t, n, i) {
    const r = this.subscriptions.length;
    if (r)
      if (r === 1) this.subscriptions[0](t, n, i);
      else
        for (let s = 0; s < r; s++) {
          const a = this.subscriptions[s];
          a && a(t, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const k1 = (e) => !isNaN(parseFloat(e));
class S1 {
  constructor(t, n = {}) {
    ((this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (i, r = !0) => {
        ((this.prev = this.current), (this.current = i));
        const { delta: s, timestamp: a } = xe;
        (this.lastUpdated !== a &&
          ((this.timeDelta = s),
          (this.lastUpdated = a),
          W.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          r &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.scheduleVelocityCheck = () => W.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: i }) => {
        i !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = k1(this.current)),
      (this.owner = n.owner));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ec());
    const i = this.events[t].add(n);
    return t === "change"
      ? () => {
          (i(),
            W.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : i;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, i) {
    (this.set(n), (this.prev = t), (this.timeDelta = i));
  }
  jump(t) {
    (this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? fh(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function pi(e, t) {
  return new S1(e, t);
}
const xh = (e) => (t) => t.test(e),
  b1 = { test: (e) => e === "auto", parse: (e) => e },
  jh = [Dn, D, pt, Rt, Ly, Ay, b1],
  bi = (e) => jh.find(xh(e)),
  C1 = [...jh, ke, rn],
  N1 = (e) => C1.find(xh(e));
function P1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pi(n));
}
function T1(e, t) {
  const n = ga(e, t);
  let {
    transitionEnd: i = {},
    transition: r = {},
    ...s
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...i };
  for (const a in s) {
    const o = Gy(s[a]);
    P1(e, a, o);
  }
}
function E1(e, t, n) {
  var i, r;
  const s = Object.keys(t).filter((o) => !e.hasValue(o)),
    a = s.length;
  if (a)
    for (let o = 0; o < a; o++) {
      const c = s[o],
        u = t[c];
      let d = null;
      (Array.isArray(u) && (d = u[0]),
        d === null &&
          (d =
            (r = (i = n[c]) !== null && i !== void 0 ? i : e.readValue(c)) !==
              null && r !== void 0
              ? r
              : t[c]),
        d != null &&
          (typeof d == "string" && (yh(d) || vh(d))
            ? (d = parseFloat(d))
            : !N1(d) && rn.test(u) && (d = gh(c, u)),
          e.addValue(c, pi(d, { owner: e })),
          n[c] === void 0 && (n[c] = d),
          d !== null && e.setBaseTarget(c, d)));
    }
}
function A1(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function L1(e, t, n) {
  const i = {};
  for (const r in e) {
    const s = A1(r, t);
    if (s !== void 0) i[r] = s;
    else {
      const a = n.getValue(r);
      a && (i[r] = a.get());
    }
  }
  return i;
}
function D1({ protectedKeys: e, needsAnimating: t }, n) {
  const i = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), i);
}
function M1(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let i = 0; i < t.length; i++) if (t[i] !== n) return !0;
  } else return n !== t;
}
function _h(e, t, { delay: n = 0, transitionOverride: i, type: r } = {}) {
  let {
    transition: s = e.getDefaultTransition(),
    transitionEnd: a,
    ...o
  } = e.makeTargetAnimatable(t);
  const c = e.getValue("willChange");
  i && (s = i);
  const u = [],
    d = r && e.animationState && e.animationState.getState()[r];
  for (const p in o) {
    const f = e.getValue(p),
      g = o[p];
    if (!f || g === void 0 || (d && D1(d, p))) continue;
    const y = { delay: n, elapsed: 0, ...Cc(s || {}, p) };
    if (window.HandoffAppearAnimations) {
      const v = e.getProps()[wm];
      if (v) {
        const m = window.HandoffAppearAnimations(v, p, f, W);
        m !== null && ((y.elapsed = m), (y.isHandoff = !0));
      }
    }
    let x = !y.isHandoff && !M1(f, g);
    if (
      (y.type === "spring" && (f.getVelocity() || y.velocity) && (x = !1),
      f.animation && (x = !1),
      x)
    )
      continue;
    f.start(Nc(p, f, g, e.shouldReduceMotion && Ln.has(p) ? { type: !1 } : y));
    const w = f.animation;
    (Fs(c) && (c.add(p), w.then(() => c.remove(p))), u.push(w));
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && T1(e, a);
      }),
    u
  );
}
function sl(e, t, n = {}) {
  const i = ga(e, t, n.custom);
  let { transition: r = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (r = n.transitionOverride);
  const s = i ? () => Promise.all(_h(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: d,
              staggerDirection: p,
            } = r;
            return R1(e, t, u + c, d, p, n);
          }
        : () => Promise.resolve(),
    { when: o } = r;
  if (o) {
    const [c, u] = o === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function R1(e, t, n = 0, i = 0, r = 1, s) {
  const a = [],
    o = (e.variantChildren.size - 1) * i,
    c = r === 1 ? (u = 0) => u * i : (u = 0) => o - u * i;
  return (
    Array.from(e.variantChildren)
      .sort(I1)
      .forEach((u, d) => {
        (u.notify("AnimationStart", t),
          a.push(
            sl(u, t, { ...s, delay: n + c(d) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(a)
  );
}
function I1(e, t) {
  return e.sortNodePosition(t);
}
function V1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let i;
  if (Array.isArray(t)) {
    const r = t.map((s) => sl(e, s, n));
    i = Promise.all(r);
  } else if (typeof t == "string") i = sl(e, t, n);
  else {
    const r = typeof t == "function" ? ga(e, t, n.custom) : t;
    i = Promise.all(_h(e, r, n));
  }
  return i.then(() => e.notify("AnimationComplete", t));
}
const z1 = [...dc].reverse(),
  O1 = dc.length;
function F1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: i }) => V1(e, n, i)));
}
function B1(e) {
  let t = F1(e);
  const n = U1();
  let i = !0;
  const r = (c, u) => {
    const d = ga(e, u);
    if (d) {
      const { transition: p, transitionEnd: f, ...g } = d;
      c = { ...c, ...g, ...f };
    }
    return c;
  };
  function s(c) {
    t = c(e);
  }
  function a(c, u) {
    const d = e.getProps(),
      p = e.getVariantContext(!0) || {},
      f = [],
      g = new Set();
    let y = {},
      x = 1 / 0;
    for (let v = 0; v < O1; v++) {
      const m = z1[v],
        h = n[m],
        j = d[m] !== void 0 ? d[m] : p[m],
        k = cr(j),
        N = m === u ? h.isActive : null;
      N === !1 && (x = v);
      let P = j === p[m] && j !== d[m] && k;
      if (
        (P && i && e.manuallyAnimateOnMount && (P = !1),
        (h.protectedKeys = { ...y }),
        (!h.isActive && N === null) ||
          (!j && !h.prevProp) ||
          pa(j) ||
          typeof j == "boolean")
      )
        continue;
      let L =
          $1(h.prevProp, j) ||
          (m === u && h.isActive && !P && k) ||
          (v > x && k),
        M = !1;
      const ce = Array.isArray(j) ? j : [j];
      let fe = ce.reduce(r, {});
      N === !1 && (fe = {});
      const { prevResolvedValues: we = {} } = h,
        ue = { ...we, ...fe },
        Dt = (ne) => {
          ((L = !0),
            g.has(ne) && ((M = !0), g.delete(ne)),
            (h.needsAnimating[ne] = !0));
        };
      for (const ne in ue) {
        const $e = fe[ne],
          E = we[ne];
        if (y.hasOwnProperty(ne)) continue;
        let R = !1;
        (Is($e) && Is(E) ? (R = !Wm($e, E)) : (R = $e !== E),
          R
            ? $e !== void 0
              ? Dt(ne)
              : g.add(ne)
            : $e !== void 0 && g.has(ne)
              ? Dt(ne)
              : (h.protectedKeys[ne] = !0));
      }
      ((h.prevProp = j),
        (h.prevResolvedValues = fe),
        h.isActive && (y = { ...y, ...fe }),
        i && e.blockInitialAnimation && (L = !1),
        L &&
          (!P || M) &&
          f.push(
            ...ce.map((ne) => ({ animation: ne, options: { type: m, ...c } })),
          ));
    }
    if (g.size) {
      const v = {};
      (g.forEach((m) => {
        const h = e.getBaseTarget(m);
        h !== void 0 && (v[m] = h);
      }),
        f.push({ animation: v }));
    }
    let w = !!f.length;
    return (
      i &&
        (d.initial === !1 || d.initial === d.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (i = !1),
      w ? t(f) : Promise.resolve()
    );
  }
  function o(c, u, d) {
    var p;
    if (n[c].isActive === u) return Promise.resolve();
    ((p = e.variantChildren) === null ||
      p === void 0 ||
      p.forEach((g) => {
        var y;
        return (y = g.animationState) === null || y === void 0
          ? void 0
          : y.setActive(c, u);
      }),
      (n[c].isActive = u));
    const f = a(d, c);
    for (const g in n) n[g].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: o,
    setAnimateFunction: s,
    getState: () => n,
  };
}
function $1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Wm(t, e) : !1;
}
function fn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function U1() {
  return {
    animate: fn(!0),
    whileInView: fn(),
    whileHover: fn(),
    whileTap: fn(),
    whileDrag: fn(),
    whileFocus: fn(),
    exit: fn(),
  };
}
class W1 extends cn {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = B1(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    (this.unmount(), pa(t) && (this.unmount = t.subscribe(this.node)));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let H1 = 0;
class G1 extends cn {
  constructor() {
    (super(...arguments), (this.id = H1++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: i,
      } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t, {
      custom: i ?? this.node.getProps().custom,
    });
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const K1 = { animation: { Feature: W1 }, exit: { Feature: G1 } },
  ld = (e, t) => Math.abs(e - t);
function J1(e, t) {
  const n = ld(e.x, t.x),
    i = ld(e.y, t.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class wh {
  constructor(
    t,
    n,
    { transformPagePoint: i, contextWindow: r, dragSnapToOrigin: s = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const p = Za(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          g = J1(p.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !g) return;
        const { point: y } = p,
          { timestamp: x } = xe;
        this.history.push({ ...y, timestamp: x });
        const { onStart: w, onMove: v } = this.handlers;
        (f ||
          (w && w(this.lastMoveEvent, p),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, p));
      }),
      (this.handlePointerMove = (p, f) => {
        ((this.lastMoveEvent = p),
          (this.lastMoveEventInfo = Xa(f, this.transformPagePoint)),
          W.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (p, f) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = Za(
          p.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Xa(f, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && g && g(p, w), y && y(p, w));
      }),
      !Om(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = i),
      (this.contextWindow = r || window));
    const a = ha(t),
      o = Xa(a, this.transformPagePoint),
      { point: c } = o,
      { timestamp: u } = xe;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: d } = n;
    (d && d(t, Za(o, this.history)),
      (this.removeListeners = Xt(
        kt(this.contextWindow, "pointermove", this.handlePointerMove),
        kt(this.contextWindow, "pointerup", this.handlePointerUp),
        kt(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Et(this.updatePoint));
  }
}
function Xa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function cd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Za({ point: e }, t) {
  return {
    point: e,
    delta: cd(e, kh(t)),
    offset: cd(e, Q1(t)),
    velocity: q1(t, 0.1),
  };
}
function Q1(e) {
  return e[0];
}
function kh(e) {
  return e[e.length - 1];
}
function q1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    i = null;
  const r = kh(e);
  for (; n >= 0 && ((i = e[n]), !(r.timestamp - i.timestamp > Zt(t))); ) n--;
  if (!i) return { x: 0, y: 0 };
  const s = St(r.timestamp - i.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const a = { x: (r.x - i.x) / s, y: (r.y - i.y) / s };
  return (a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a);
}
function Oe(e) {
  return e.max - e.min;
}
function al(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function ud(e, t, n, i = 0.5) {
  ((e.origin = i),
    (e.originPoint = Y(t.min, t.max, e.origin)),
    (e.scale = Oe(n) / Oe(t)),
    (al(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Y(n.min, n.max, e.origin) - e.originPoint),
    (al(e.translate) || isNaN(e.translate)) && (e.translate = 0));
}
function Ui(e, t, n, i) {
  (ud(e.x, t.x, n.x, i ? i.originX : void 0),
    ud(e.y, t.y, n.y, i ? i.originY : void 0));
}
function dd(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Oe(t)));
}
function Y1(e, t, n) {
  (dd(e.x, t.x, n.x), dd(e.y, t.y, n.y));
}
function pd(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Oe(t)));
}
function Wi(e, t, n) {
  (pd(e.x, t.x, n.x), pd(e.y, t.y, n.y));
}
function X1(e, { min: t, max: n }, i) {
  return (
    t !== void 0 && e < t
      ? (e = i ? Y(t, e, i.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = i ? Y(n, e, i.max) : Math.min(e, n)),
    e
  );
}
function fd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Z1(e, { top: t, left: n, bottom: i, right: r }) {
  return { x: fd(e.x, n, r), y: fd(e.y, t, i) };
}
function md(e, t) {
  let n = t.min - e.min,
    i = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, i] = [i, n]),
    { min: n, max: i }
  );
}
function ej(e, t) {
  return { x: md(e.x, t.x), y: md(e.y, t.y) };
}
function tj(e, t) {
  let n = 0.5;
  const i = Oe(e),
    r = Oe(t);
  return (
    r > i
      ? (n = dr(t.min, t.max - i, e.min))
      : i > r && (n = dr(e.min, e.max - r, t.min)),
    nn(0, 1, n)
  );
}
function nj(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const ol = 0.35;
function ij(e = ol) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = ol),
    { x: hd(e, "left", "right"), y: hd(e, "top", "bottom") }
  );
}
function hd(e, t, n) {
  return { min: gd(e, t), max: gd(e, n) };
}
function gd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const vd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Yn = () => ({ x: vd(), y: vd() }),
  yd = () => ({ min: 0, max: 0 }),
  re = () => ({ x: yd(), y: yd() });
function We(e) {
  return [e("x"), e("y")];
}
function Sh({ top: e, left: t, right: n, bottom: i }) {
  return { x: { min: t, max: n }, y: { min: e, max: i } };
}
function rj({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function sj(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    i = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: i.y, right: i.x };
}
function eo(e) {
  return e === void 0 || e === 1;
}
function ll({ scale: e, scaleX: t, scaleY: n }) {
  return !eo(e) || !eo(t) || !eo(n);
}
function gn(e) {
  return ll(e) || bh(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function bh(e) {
  return xd(e.x) || xd(e.y);
}
function xd(e) {
  return e && e !== "0%";
}
function Bs(e, t, n) {
  const i = e - n,
    r = t * i;
  return n + r;
}
function jd(e, t, n, i, r) {
  return (r !== void 0 && (e = Bs(e, r, i)), Bs(e, n, i) + t);
}
function cl(e, t = 0, n = 1, i, r) {
  ((e.min = jd(e.min, t, n, i, r)), (e.max = jd(e.max, t, n, i, r)));
}
function Ch(e, { x: t, y: n }) {
  (cl(e.x, t.translate, t.scale, t.originPoint),
    cl(e.y, n.translate, n.scale, n.originPoint));
}
function aj(e, t, n, i = !1) {
  const r = n.length;
  if (!r) return;
  t.x = t.y = 1;
  let s, a;
  for (let o = 0; o < r; o++) {
    ((s = n[o]), (a = s.projectionDelta));
    const c = s.instance;
    (c && c.style && c.style.display === "contents") ||
      (i &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Xn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), Ch(e, a)),
      i && gn(s.latestValues) && Xn(e, s.latestValues));
  }
  ((t.x = _d(t.x)), (t.y = _d(t.y)));
}
function _d(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function zt(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function wd(e, t, [n, i, r]) {
  const s = t[r] !== void 0 ? t[r] : 0.5,
    a = Y(e.min, e.max, s);
  cl(e, t[n], t[i], a, t.scale);
}
const oj = ["x", "scaleX", "originX"],
  lj = ["y", "scaleY", "originY"];
function Xn(e, t) {
  (wd(e.x, t, oj), wd(e.y, t, lj));
}
function Nh(e, t) {
  return Sh(sj(e.getBoundingClientRect(), t));
}
function cj(e, t, n) {
  const i = Nh(e, n),
    { scroll: r } = t;
  return (r && (zt(i.x, r.offset.x), zt(i.y, r.offset.y)), i);
}
const Ph = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  uj = new WeakMap();
class dj {
  constructor(t) {
    ((this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = re()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const r = (d) => {
        const { dragSnapToOrigin: p } = this.getProps();
        (p ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ha(d, "page").point));
      },
      s = (d, p) => {
        const { drag: f, dragPropagation: g, onDragStart: y } = this.getProps();
        if (
          f &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Bm(f)),
          !this.openGlobalLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          We((w) => {
            let v = this.getAxisMotionValue(w).get() || 0;
            if (pt.test(v)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const h = m.layout.layoutBox[w];
                h && (v = Oe(h) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[w] = v;
          }),
          y && W.update(() => y(d, p), !1, !0));
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      a = (d, p) => {
        const {
          dragPropagation: f,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: x,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: w } = p;
        if (g && this.currentDirection === null) {
          ((this.currentDirection = pj(w)),
            this.currentDirection !== null && y && y(this.currentDirection));
          return;
        }
        (this.updateAxis("x", p.point, w),
          this.updateAxis("y", p.point, w),
          this.visualElement.render(),
          x && x(d, p));
      },
      o = (d, p) => this.stop(d, p),
      c = () =>
        We((d) => {
          var p;
          return (
            this.getAnimationState(d) === "paused" &&
            ((p = this.getAxisMotionValue(d).animation) === null || p === void 0
              ? void 0
              : p.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new wh(
      t,
      {
        onSessionStart: r,
        onStart: s,
        onMove: a,
        onSessionEnd: o,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Ph(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const i = this.isDragging;
    if ((this.cancel(), !i)) return;
    const { velocity: r } = n;
    this.startAnimation(r);
    const { onDragEnd: s } = this.getProps();
    s && W.update(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: i } = this.getProps();
    (!i &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, i) {
    const { drag: r } = this.getProps();
    if (!i || !Gr(t, r, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + i[t];
    (this.constraints &&
      this.constraints[t] &&
      (a = X1(a, this.constraints[t], this.elastic[t])),
      s.set(a));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: i } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      s = this.constraints;
    (n && Qn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && r
        ? (this.constraints = Z1(r.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = ij(i)),
      s !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        We((a) => {
          this.getAxisMotionValue(a) &&
            (this.constraints[a] = nj(r.layoutBox[a], this.constraints[a]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Qn(t)) return !1;
    const i = t.current,
      { projection: r } = this.visualElement;
    if (!r || !r.layout) return !1;
    const s = cj(i, r.root, this.visualElement.getTransformPagePoint());
    let a = ej(r.layout.layoutBox, s);
    if (n) {
      const o = n(rj(a));
      ((this.hasMutatedConstraints = !!o), o && (a = Sh(o)));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: i,
        dragElastic: r,
        dragTransition: s,
        dragSnapToOrigin: a,
        onDragTransitionEnd: o,
      } = this.getProps(),
      c = this.constraints || {},
      u = We((d) => {
        if (!Gr(d, n, this.currentDirection)) return;
        let p = (c && c[d]) || {};
        a && (p = { min: 0, max: 0 });
        const f = r ? 200 : 1e6,
          g = r ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: i ? t[d] : 0,
            bounceStiffness: f,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...p,
          };
        return this.startAxisValueAnimation(d, y);
      });
    return Promise.all(u).then(o);
  }
  startAxisValueAnimation(t, n) {
    const i = this.getAxisMotionValue(t);
    return i.start(Nc(t, i, 0, n));
  }
  stopAnimation() {
    We((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    We((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      i = this.visualElement.getProps(),
      r = i[n];
    return (
      r ||
      this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    We((n) => {
      const { drag: i } = this.getProps();
      if (!Gr(n, i, this.currentDirection)) return;
      const { projection: r } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (r && r.layout) {
        const { min: a, max: o } = r.layout.layoutBox[n];
        s.set(t[n] - Y(a, o, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: i } = this.visualElement;
    if (!Qn(n) || !i || !this.constraints) return;
    this.stopAnimation();
    const r = { x: 0, y: 0 };
    We((a) => {
      const o = this.getAxisMotionValue(a);
      if (o) {
        const c = o.get();
        r[a] = tj({ min: c, max: c }, this.constraints[a]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      i.root && i.root.updateScroll(),
      i.updateLayout(),
      this.resolveConstraints(),
      We((a) => {
        if (!Gr(a, t, null)) return;
        const o = this.getAxisMotionValue(a),
          { min: c, max: u } = this.constraints[a];
        o.set(Y(c, u, r[a]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    uj.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = kt(t, "pointerdown", (c) => {
        const { drag: u, dragListener: d = !0 } = this.getProps();
        u && d && this.start(c);
      }),
      i = () => {
        const { dragConstraints: c } = this.getProps();
        Qn(c) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: r } = this.visualElement,
      s = r.addEventListener("measure", i);
    (r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
      i());
    const a = _t(window, "resize", () => this.scalePositionWithinConstraints()),
      o = r.addEventListener(
        "didUpdate",
        ({ delta: c, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (We((d) => {
              const p = this.getAxisMotionValue(d);
              p &&
                ((this.originPoint[d] += c[d].translate),
                p.set(p.get() + c[d].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (a(), n(), s(), o && o());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: i = !1,
        dragPropagation: r = !1,
        dragConstraints: s = !1,
        dragElastic: a = ol,
        dragMomentum: o = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: r,
      dragConstraints: s,
      dragElastic: a,
      dragMomentum: o,
    };
  }
}
function Gr(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function pj(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class fj extends cn {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = te),
      (this.removeListeners = te),
      (this.controls = new dj(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || te));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const kd = (e) => (t, n) => {
  e && W.update(() => e(t, n));
};
class mj extends cn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = te));
  }
  onPointerDown(t) {
    this.session = new wh(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ph(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: i,
      onPanEnd: r,
    } = this.node.getProps();
    return {
      onSessionStart: kd(t),
      onStart: kd(n),
      onMove: i,
      onEnd: (s, a) => {
        (delete this.session, r && W.update(() => r(s, a)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = kt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
function hj() {
  const e = _.useContext(ua);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: i } = e,
    r = _.useId();
  return (_.useEffect(() => i(r), []), !t && n ? [!1, () => n && n(r)] : [!0]);
}
const ls = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Sd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ci = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = Sd(e, t.target.x),
        i = Sd(e, t.target.y);
      return `${n}% ${i}%`;
    },
  },
  gj = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const i = e,
        r = rn.parse(e);
      if (r.length > 5) return i;
      const s = rn.createTransformer(e),
        a = typeof r[0] != "number" ? 1 : 0,
        o = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((r[0 + a] /= o), (r[1 + a] /= c));
      const u = Y(o, c, 0.5);
      return (
        typeof r[2 + a] == "number" && (r[2 + a] /= u),
        typeof r[3 + a] == "number" && (r[3 + a] /= u),
        s(r)
      );
    },
  };
class vj extends vl.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: i,
        layoutId: r,
      } = this.props,
      { projection: s } = t;
    (Sy(yj),
      s &&
        (n.group && n.group.add(s),
        i && i.register && r && i.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ls.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: i,
        drag: r,
        isPresent: s,
      } = this.props,
      a = i.projection;
    return (
      a &&
        ((a.isPresent = s),
        r || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? a.promote()
            : a.relegate() ||
              W.postRender(() => {
                const o = a.getStack();
                (!o || !o.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: i,
      } = this.props,
      { projection: r } = t;
    r &&
      (r.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(r),
      i && i.deregister && i.deregister(r));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Th(e) {
  const [t, n] = hj(),
    i = _.useContext(fc);
  return vl.createElement(vj, {
    ...e,
    layoutGroup: i,
    switchLayoutGroup: _.useContext(Sm),
    isPresent: t,
    safeToRemove: n,
  });
}
const yj = {
    borderRadius: {
      ...Ci,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Ci,
    borderTopRightRadius: Ci,
    borderBottomLeftRadius: Ci,
    borderBottomRightRadius: Ci,
    boxShadow: gj,
  },
  Eh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  xj = Eh.length,
  bd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Cd = (e) => typeof e == "number" || D.test(e);
function jj(e, t, n, i, r, s) {
  r
    ? ((e.opacity = Y(0, n.opacity !== void 0 ? n.opacity : 1, _j(i))),
      (e.opacityExit = Y(t.opacity !== void 0 ? t.opacity : 1, 0, wj(i))))
    : s &&
      (e.opacity = Y(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        i,
      ));
  for (let a = 0; a < xj; a++) {
    const o = `border${Eh[a]}Radius`;
    let c = Nd(t, o),
      u = Nd(n, o);
    if (c === void 0 && u === void 0) continue;
    (c || (c = 0),
      u || (u = 0),
      c === 0 || u === 0 || Cd(c) === Cd(u)
        ? ((e[o] = Math.max(Y(bd(c), bd(u), i), 0)),
          (pt.test(u) || pt.test(c)) && (e[o] += "%"))
        : (e[o] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = Y(t.rotate || 0, n.rotate || 0, i));
}
function Nd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const _j = Ah(0, 0.5, Zm),
  wj = Ah(0.5, 0.95, te);
function Ah(e, t, n) {
  return (i) => (i < e ? 0 : i > t ? 1 : n(dr(e, t, i)));
}
function Pd(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Ue(e, t) {
  (Pd(e.x, t.x), Pd(e.y, t.y));
}
function Td(e, t, n, i, r) {
  return (
    (e -= t),
    (e = Bs(e, 1 / n, i)),
    r !== void 0 && (e = Bs(e, 1 / r, i)),
    e
  );
}
function kj(e, t = 0, n = 1, i = 0.5, r, s = e, a = e) {
  if (
    (pt.test(t) &&
      ((t = parseFloat(t)), (t = Y(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let o = Y(s.min, s.max, i);
  (e === s && (o -= t),
    (e.min = Td(e.min, t, n, o, r)),
    (e.max = Td(e.max, t, n, o, r)));
}
function Ed(e, t, [n, i, r], s, a) {
  kj(e, t[n], t[i], t[r], t.scale, s, a);
}
const Sj = ["x", "scaleX", "originX"],
  bj = ["y", "scaleY", "originY"];
function Ad(e, t, n, i) {
  (Ed(e.x, t, Sj, n ? n.x : void 0, i ? i.x : void 0),
    Ed(e.y, t, bj, n ? n.y : void 0, i ? i.y : void 0));
}
function Ld(e) {
  return e.translate === 0 && e.scale === 1;
}
function Lh(e) {
  return Ld(e.x) && Ld(e.y);
}
function Cj(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Dh(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Dd(e) {
  return Oe(e.x) / Oe(e.y);
}
class Nj {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Pc(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Tc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((r) => t === r);
    if (n === 0) return !1;
    let i;
    for (let r = n; r >= 0; r--) {
      const s = this.members[r];
      if (s.isPresent !== !1) {
        i = s;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(t, n) {
    const i = this.lead;
    if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
      (i.instance && i.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = i),
        n && (t.resumeFrom.preserveOpacity = !0),
        i.snapshot &&
          ((t.snapshot = i.snapshot),
          (t.snapshot.latestValues = i.animationValues || i.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: r } = t.options;
      r === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: i } = t;
      (n.onExitComplete && n.onExitComplete(),
        i && i.options.onExitComplete && i.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Md(e, t, n) {
  let i = "";
  const r = e.x.translate / t.x,
    s = e.y.translate / t.y;
  if (
    ((r || s) && (i = `translate3d(${r}px, ${s}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: c, rotateX: u, rotateY: d } = n;
    (c && (i += `rotate(${c}deg) `),
      u && (i += `rotateX(${u}deg) `),
      d && (i += `rotateY(${d}deg) `));
  }
  const a = e.x.scale * t.x,
    o = e.y.scale * t.y;
  return ((a !== 1 || o !== 1) && (i += `scale(${a}, ${o})`), i || "none");
}
const Pj = (e, t) => e.depth - t.depth;
class Tj {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Pc(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Tc(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(Pj),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function Ej(e, t) {
  const n = performance.now(),
    i = ({ timestamp: r }) => {
      const s = r - n;
      s >= t && (Et(i), e(s - t));
    };
  return (W.read(i, !0), () => Et(i));
}
function Aj(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function Lj(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Dj(e, t, n) {
  const i = De(e) ? e : pi(e);
  return (i.start(Nc("", i, t, n)), i.animation);
}
const Rd = ["", "X", "Y", "Z"],
  Mj = { visibility: "hidden" },
  Id = 1e3;
let Rj = 0;
const vn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Mh({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: i,
  resetTransform: r,
}) {
  return class {
    constructor(a = {}, o = t == null ? void 0 : t()) {
      ((this.id = Rj++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            (vn.totalNodes =
              vn.resolvedTargetDeltas =
              vn.recalculatedProjection =
                0),
            this.nodes.forEach(zj),
            this.nodes.forEach(Uj),
            this.nodes.forEach(Wj),
            this.nodes.forEach(Oj),
            Aj(vn));
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = o ? o.root || o : this),
        (this.path = o ? [...o.path, o] : []),
        (this.parent = o),
        (this.depth = o ? o.depth + 1 : 0));
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Tj());
    }
    addEventListener(a, o) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Ec()),
        this.eventHandlers.get(a).add(o)
      );
    }
    notifyListeners(a, ...o) {
      const c = this.eventHandlers.get(a);
      c && c.notify(...o);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, o = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = Lj(a)), (this.instance = a));
      const { layoutId: c, layout: u, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        o && (u || c) && (this.isLayoutDirty = !0),
        e)
      ) {
        let p;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          ((this.root.updateBlockedByResize = !0),
            p && p(),
            (p = Ej(f, 250)),
            ls.hasAnimatedSinceResize &&
              ((ls.hasAnimatedSinceResize = !1), this.nodes.forEach(zd)));
        });
      }
      (c && this.root.registerSharedNode(c, this),
        this.options.animate !== !1 &&
          d &&
          (c || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: p,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const x =
                  this.options.transition || d.getDefaultTransition() || Qj,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: v } =
                  d.getProps(),
                m = !this.targetLayout || !Dh(this.targetLayout, y) || g,
                h = !f && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                h ||
                (f && (m || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(p, h));
                const j = { ...Cc(x, "layout"), onPlay: w, onComplete: v };
                ((d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((j.delay = 0), (j.type = !1)),
                  this.startAnimation(j));
              } else
                (f || zd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = y;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const a = this.getStack();
      (a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Et(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Hj),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const p = this.path[d];
        ((p.shouldResetTransform = !0),
          p.updateScroll("snapshot"),
          p.options.layoutRoot && p.willUpdate(!1));
      }
      const { layoutId: o, layout: c } = this.options;
      if (o === void 0 && !c) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Vd));
        return;
      }
      (this.isUpdating || this.nodes.forEach(Bj),
        (this.isUpdating = !1),
        this.nodes.forEach($j),
        this.nodes.forEach(Ij),
        this.nodes.forEach(Vj),
        this.clearAllSnapshots());
      const o = performance.now();
      ((xe.delta = nn(0, 1e3 / 60, o - xe.timestamp)),
        (xe.timestamp = o),
        (xe.isProcessing = !0),
        Wa.update.process(xe),
        Wa.preRender.process(xe),
        Wa.render.process(xe),
        (xe.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Fj), this.sharedNodes.forEach(Gj));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        W.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      W.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
      const a = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = re()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: o } = this.options;
      o &&
        o.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0,
        );
    }
    updateScroll(a = "measure") {
      let o = !!(this.options.layoutScroll && this.instance);
      (this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (o = !1),
        o &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: i(this.instance),
            offset: n(this.instance),
          }));
    }
    resetTransform() {
      if (!r) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        o = this.projectionDelta && !Lh(this.projectionDelta),
        c = this.getTransformTemplate(),
        u = c ? c(this.latestValues, "") : void 0,
        d = u !== this.prevTransformTemplateValue;
      a &&
        (o || gn(this.latestValues) || d) &&
        (r(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const o = this.measurePageBox();
      let c = this.removeElementScroll(o);
      return (
        a && (c = this.removeTransform(c)),
        qj(c),
        {
          animationId: this.root.animationId,
          measuredBox: o,
          layoutBox: c,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return re();
      const o = a.measureViewportBox(),
        { scroll: c } = this.root;
      return (c && (zt(o.x, c.offset.x), zt(o.y, c.offset.y)), o);
    }
    removeElementScroll(a) {
      const o = re();
      Ue(o, a);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: d, options: p } = u;
        if (u !== this.root && d && p.layoutScroll) {
          if (d.isRoot) {
            Ue(o, a);
            const { scroll: f } = this.root;
            f && (zt(o.x, -f.offset.x), zt(o.y, -f.offset.y));
          }
          (zt(o.x, d.offset.x), zt(o.y, d.offset.y));
        }
      }
      return o;
    }
    applyTransform(a, o = !1) {
      const c = re();
      Ue(c, a);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        (!o &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Xn(c, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          gn(d.latestValues) && Xn(c, d.latestValues));
      }
      return (gn(this.latestValues) && Xn(c, this.latestValues), c);
    }
    removeTransform(a) {
      const o = re();
      Ue(o, a);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !gn(u.latestValues)) continue;
        ll(u.latestValues) && u.updateSnapshot();
        const d = re(),
          p = u.measurePageBox();
        (Ue(d, p),
          Ad(o, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d));
      }
      return (gn(this.latestValues) && Ad(o, this.latestValues), o);
    }
    setTargetDelta(a) {
      ((this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== xe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var o;
      const c = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = c.isSharedProjectionDirty));
      const u = !!this.resumingFrom || this !== c;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: p, layoutId: f } = this.options;
      if (!(!this.layout || !(p || f))) {
        if (
          ((this.resolvedRelativeTargetAt = xe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = re()),
              (this.relativeTargetOrigin = re()),
              Wi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox,
              ),
              Ue(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = re()), (this.targetWithTransforms = re())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Y1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Ue(this.target, this.layout.layoutBox),
                  Ch(this.target, this.targetDelta))
                : Ue(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = re()),
                (this.relativeTargetOrigin = re()),
                Wi(this.relativeTargetOrigin, this.target, g.target),
                Ue(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          vn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ll(this.parent.latestValues) ||
          bh(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const o = this.getLead(),
        c = !!this.resumingFrom || this !== o;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        c &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === xe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: d, layoutId: p } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || p))
      )
        return;
      Ue(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        g = this.treeScale.y;
      (aj(this.layoutCorrected, this.treeScale, this.path, c),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (o.target = o.layout.layoutBox));
      const { target: y } = o;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = Yn()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Yn()),
        (this.projectionDeltaWithTransform = Yn()));
      const x = this.projectionTransform;
      (Ui(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = Md(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== x ||
          this.treeScale.x !== f ||
          this.treeScale.y !== g) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        vn.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const o = this.getStack();
        o && o.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, o = !1) {
      const c = this.snapshot,
        u = c ? c.latestValues : {},
        d = { ...this.latestValues },
        p = Yn();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !o));
      const f = re(),
        g = c ? c.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        x = g !== y,
        w = this.getStack(),
        v = !w || w.members.length <= 1,
        m = !!(x && !v && this.options.crossfade === !0 && !this.path.some(Jj));
      this.animationProgress = 0;
      let h;
      ((this.mixTargetDelta = (j) => {
        const k = j / 1e3;
        (Od(p.x, a.x, k),
          Od(p.y, a.y, k),
          this.setTargetDelta(p),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Wi(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Kj(this.relativeTarget, this.relativeTargetOrigin, f, k),
            h && Cj(this.relativeTarget, h) && (this.isProjectionDirty = !1),
            h || (h = re()),
            Ue(h, this.relativeTarget)),
          x &&
            ((this.animationValues = d), jj(d, u, this.latestValues, k, m, v)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(a) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Et(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = W.update(() => {
          ((ls.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Dj(0, Id, {
              ...a,
              onUpdate: (o) => {
                (this.mixTargetDelta(o), a.onUpdate && a.onUpdate(o));
              },
              onComplete: () => {
                (a.onComplete && a.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      (a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Id),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: o,
        target: c,
        layout: u,
        latestValues: d,
      } = a;
      if (!(!o || !c || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          Rh(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          c = this.target || re();
          const p = Oe(this.layout.layoutBox.x);
          ((c.x.min = a.target.x.min), (c.x.max = c.x.min + p));
          const f = Oe(this.layout.layoutBox.y);
          ((c.y.min = a.target.y.min), (c.y.max = c.y.min + f));
        }
        (Ue(o, c),
          Xn(o, d),
          Ui(this.projectionDeltaWithTransform, this.layoutCorrected, o, d));
      }
    }
    registerSharedNode(a, o) {
      (this.sharedNodes.has(a) || this.sharedNodes.set(a, new Nj()),
        this.sharedNodes.get(a).add(o));
      const u = o.options.initialPromotionConfig;
      o.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(o)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: o, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      (u && u.promote(this, c),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        o && this.setOptions({ transition: o }));
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let o = !1;
      const { latestValues: c } = a;
      if (((c.rotate || c.rotateX || c.rotateY || c.rotateZ) && (o = !0), !o))
        return;
      const u = {};
      for (let d = 0; d < Rd.length; d++) {
        const p = "rotate" + Rd[d];
        c[p] && ((u[p] = c[p]), a.setStaticValue(p, 0));
      }
      a.render();
      for (const d in u) a.setStaticValue(d, u[d]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var o, c;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Mj;
      const u = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = os(a == null ? void 0 : a.pointerEvents) || ""),
          (u.transform = d ? d(this.latestValues, "") : "none"),
          u
        );
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = os(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !gn(this.latestValues) &&
            ((x.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const f = p.animationValues || p.latestValues;
      (this.applyTransformsToTarget(),
        (u.transform = Md(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        d && (u.transform = d(f, u.transform)));
      const { x: g, y } = this.projectionDelta;
      ((u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        p.animationValues
          ? (u.opacity =
              p === this
                ? (c =
                    (o = f.opacity) !== null && o !== void 0
                      ? o
                      : this.latestValues.opacity) !== null && c !== void 0
                  ? c
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (u.opacity =
              p === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0));
      for (const x in Ms) {
        if (f[x] === void 0) continue;
        const { correct: w, applyTo: v } = Ms[x],
          m = u.transform === "none" ? f[x] : w(f[x], p);
        if (v) {
          const h = v.length;
          for (let j = 0; j < h; j++) u[v[j]] = m;
        } else u[x] = m;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            p === this
              ? os(a == null ? void 0 : a.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((a) => {
        var o;
        return (o = a.currentAnimation) === null || o === void 0
          ? void 0
          : o.stop();
      }),
        this.root.nodes.forEach(Vd),
        this.root.sharedNodes.clear());
    }
  };
}
function Ij(e) {
  e.updateLayout();
}
function Vj(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: r } = e.layout,
      { animationType: s } = e.options,
      a = n.source !== e.layout.source;
    s === "size"
      ? We((p) => {
          const f = a ? n.measuredBox[p] : n.layoutBox[p],
            g = Oe(f);
          ((f.min = i[p].min), (f.max = f.min + g));
        })
      : Rh(s, n.layoutBox, i) &&
        We((p) => {
          const f = a ? n.measuredBox[p] : n.layoutBox[p],
            g = Oe(i[p]);
          ((f.max = f.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[p].max = e.relativeTarget[p].min + g)));
        });
    const o = Yn();
    Ui(o, i, n.layoutBox);
    const c = Yn();
    a ? Ui(c, e.applyTransform(r, !0), n.measuredBox) : Ui(c, i, n.layoutBox);
    const u = !Lh(o);
    let d = !1;
    if (!e.resumeFrom) {
      const p = e.getClosestProjectingParent();
      if (p && !p.resumeFrom) {
        const { snapshot: f, layout: g } = p;
        if (f && g) {
          const y = re();
          Wi(y, n.layoutBox, f.layoutBox);
          const x = re();
          (Wi(x, i, g.layoutBox),
            Dh(y, x) || (d = !0),
            p.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = p)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: i,
      snapshot: n,
      delta: c,
      layoutDelta: o,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: i } = e.options;
    i && i();
  }
  e.options.transition = void 0;
}
function zj(e) {
  (vn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function Oj(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Fj(e) {
  e.clearSnapshot();
}
function Vd(e) {
  e.clearMeasurements();
}
function Bj(e) {
  e.isLayoutDirty = !1;
}
function $j(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function zd(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Uj(e) {
  e.resolveTargetDelta();
}
function Wj(e) {
  e.calcProjection();
}
function Hj(e) {
  e.resetRotation();
}
function Gj(e) {
  e.removeLeadSnapshot();
}
function Od(e, t, n) {
  ((e.translate = Y(t.translate, 0, n)),
    (e.scale = Y(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Fd(e, t, n, i) {
  ((e.min = Y(t.min, n.min, i)), (e.max = Y(t.max, n.max, i)));
}
function Kj(e, t, n, i) {
  (Fd(e.x, t.x, n.x, i), Fd(e.y, t.y, n.y, i));
}
function Jj(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Qj = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Bd = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  $d = Bd("applewebkit/") && !Bd("chrome/") ? Math.round : te;
function Ud(e) {
  ((e.min = $d(e.min)), (e.max = $d(e.max)));
}
function qj(e) {
  (Ud(e.x), Ud(e.y));
}
function Rh(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !al(Dd(t), Dd(n), 0.2))
  );
}
const Yj = Mh({
    attachResizeListener: (e, t) => _t(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  to = { current: void 0 },
  Ih = Mh({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!to.current) {
        const e = new Yj({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (to.current = e));
      }
      return to.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Xj = {
    pan: { Feature: mj },
    drag: { Feature: fj, ProjectionNode: Ih, MeasureLayout: Th },
  },
  Zj = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function e_(e) {
  const t = Zj.exec(e);
  if (!t) return [,];
  const [, n, i] = t;
  return [n, i];
}
function ul(e, t, n = 1) {
  const [i, r] = e_(e);
  if (!i) return;
  const s = window.getComputedStyle(t).getPropertyValue(i);
  if (s) {
    const a = s.trim();
    return yh(a) ? parseFloat(a) : a;
  } else return Zo(r) ? ul(r, t, n + 1) : r;
}
function t_(e, { ...t }, n) {
  const i = e.current;
  if (!(i instanceof Element)) return { target: t, transitionEnd: n };
  (n && (n = { ...n }),
    e.values.forEach((r) => {
      const s = r.get();
      if (!Zo(s)) return;
      const a = ul(s, i);
      a && r.set(a);
    }));
  for (const r in t) {
    const s = t[r];
    if (!Zo(s)) continue;
    const a = ul(s, i);
    a && ((t[r] = a), n || (n = {}), n[r] === void 0 && (n[r] = s));
  }
  return { target: t, transitionEnd: n };
}
const n_ = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Vh = (e) => n_.has(e),
  i_ = (e) => Object.keys(e).some(Vh),
  Wd = (e) => e === Dn || e === D,
  Hd = (e, t) => parseFloat(e.split(", ")[t]),
  Gd =
    (e, t) =>
    (n, { transform: i }) => {
      if (i === "none" || !i) return 0;
      const r = i.match(/^matrix3d\((.+)\)$/);
      if (r) return Hd(r[1], t);
      {
        const s = i.match(/^matrix\((.+)\)$/);
        return s ? Hd(s[1], e) : 0;
      }
    },
  r_ = new Set(["x", "y", "z"]),
  s_ = xr.filter((e) => !r_.has(e));
function a_(e) {
  const t = [];
  return (
    s_.forEach((n) => {
      const i = e.getValue(n);
      i !== void 0 &&
        (t.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const fi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Gd(4, 13),
  y: Gd(5, 14),
};
fi.translateX = fi.x;
fi.translateY = fi.y;
const o_ = (e, t, n) => {
    const i = t.measureViewportBox(),
      r = t.current,
      s = getComputedStyle(r),
      { display: a } = s,
      o = {};
    (a === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        o[u] = fi[u](i, s);
      }),
      t.render());
    const c = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const d = t.getValue(u);
        (d && d.jump(o[u]), (e[u] = fi[u](c, s)));
      }),
      e
    );
  },
  l_ = (e, t, n = {}, i = {}) => {
    ((t = { ...t }), (i = { ...i }));
    const r = Object.keys(t).filter(Vh);
    let s = [],
      a = !1;
    const o = [];
    if (
      (r.forEach((c) => {
        const u = e.getValue(c);
        if (!e.hasValue(c)) return;
        let d = n[c],
          p = bi(d);
        const f = t[c];
        let g;
        if (Is(f)) {
          const y = f.length,
            x = f[0] === null ? 1 : 0;
          ((d = f[x]), (p = bi(d)));
          for (let w = x; w < y && f[w] !== null; w++)
            g ? _c(bi(f[w]) === g) : (g = bi(f[w]));
        } else g = bi(f);
        if (p !== g)
          if (Wd(p) && Wd(g)) {
            const y = u.get();
            (typeof y == "string" && u.set(parseFloat(y)),
              typeof f == "string"
                ? (t[c] = parseFloat(f))
                : Array.isArray(f) && g === D && (t[c] = f.map(parseFloat)));
          } else
            p != null &&
            p.transform &&
            g != null &&
            g.transform &&
            (d === 0 || f === 0)
              ? d === 0
                ? u.set(g.transform(d))
                : (t[c] = p.transform(f))
              : (a || ((s = a_(e)), (a = !0)),
                o.push(c),
                (i[c] = i[c] !== void 0 ? i[c] : t[c]),
                u.jump(f));
      }),
      o.length)
    ) {
      const c = o.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = o_(t, e, o);
      return (
        s.length &&
          s.forEach(([d, p]) => {
            e.getValue(d).set(p);
          }),
        e.render(),
        da && c !== null && window.scrollTo({ top: c }),
        { target: u, transitionEnd: i }
      );
    } else return { target: t, transitionEnd: i };
  };
function c_(e, t, n, i) {
  return i_(t) ? l_(e, t, n, i) : { target: t, transitionEnd: i };
}
const u_ = (e, t, n, i) => {
    const r = t_(e, t, i);
    return ((t = r.target), (i = r.transitionEnd), c_(e, t, n, i));
  },
  dl = { current: null },
  zh = { current: !1 };
function d_() {
  if (((zh.current = !0), !!da))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (dl.current = e.matches);
      (e.addListener(t), t());
    } else dl.current = !1;
}
function p_(e, t, n) {
  const { willChange: i } = t;
  for (const r in t) {
    const s = t[r],
      a = n[r];
    if (De(s)) (e.addValue(r, s), Fs(i) && i.add(r));
    else if (De(a)) (e.addValue(r, pi(s, { owner: e })), Fs(i) && i.remove(r));
    else if (a !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        !o.hasAnimated && o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, pi(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Kd = new WeakMap(),
  Oh = Object.keys(ur),
  f_ = Oh.length,
  Jd = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  m_ = pc.length;
class h_ {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: i,
      reducedMotionConfig: r,
      visualState: s,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.scheduleRender = () => W.render(this.render, !1, !0)));
    const { latestValues: o, renderState: c } = s;
    ((this.latestValues = o),
      (this.baseTarget = { ...o }),
      (this.initialValues = n.initial ? { ...o } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = i),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = r),
      (this.options = a),
      (this.isControllingVariants = fa(n)),
      (this.isVariantNode = km(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(n, {});
    for (const p in d) {
      const f = d[p];
      o[p] !== void 0 && De(f) && (f.set(o[p], !1), Fs(u) && u.add(p));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    ((this.current = t),
      Kd.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, i) => this.bindToMotionValue(i, n)),
      zh.current || d_(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : dl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Kd.delete(this.current),
      this.projection && this.projection.unmount(),
      Et(this.notifyUpdate),
      Et(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const i = Ln.has(t),
      r = n.on("change", (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && W.update(this.notifyUpdate, !1, !0),
          i && this.projection && (this.projection.isTransformDirty = !0));
      }),
      s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      (r(), s());
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, i, r, s) {
    let a, o;
    for (let c = 0; c < f_; c++) {
      const u = Oh[c],
        {
          isEnabled: d,
          Feature: p,
          ProjectionNode: f,
          MeasureLayout: g,
        } = ur[u];
      (f && (a = f),
        d(n) &&
          (!this.features[u] && p && (this.features[u] = new p(this)),
          g && (o = g)));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      a
    ) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection,
      );
      const {
        layoutId: c,
        layout: u,
        drag: d,
        dragConstraints: p,
        layoutScroll: f,
        layoutRoot: g,
      } = n;
      this.projection.setOptions({
        layoutId: c,
        layout: u,
        alwaysMeasureLayout: !!d || (p && Qn(p)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: s,
        layoutScroll: f,
        layoutRoot: g,
      });
    }
    return o;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : re();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let i = 0; i < Jd.length; i++) {
      const r = Jd[i];
      this.propEventSubscriptions[r] &&
        (this.propEventSubscriptions[r](),
        delete this.propEventSubscriptions[r]);
      const s = t["on" + r];
      s && (this.propEventSubscriptions[r] = this.on(r, s));
    }
    ((this.prevMotionValues = p_(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const i = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (i.initial = this.props.initial),
        i
      );
    }
    const n = {};
    for (let i = 0; i < m_; i++) {
      const r = pc[i],
        s = this.props[r];
      (cr(s) || s === !1) && (n[r] = s);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    (n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let i = this.values.get(t);
    return (
      i === void 0 &&
        n !== void 0 &&
        ((i = pi(n, { owner: this })), this.addValue(t, i)),
      i
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
          n !== void 0
        ? n
        : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: i } = this.props,
      r =
        typeof i == "string" || typeof i == "object"
          ? (n = jc(this.props, i)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (i && r !== void 0) return r;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !De(s)
      ? s
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Ec()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Fh extends h_ {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: i }) {
    (delete n[t], delete i[t]);
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...i },
    { transformValues: r },
    s,
  ) {
    let a = L1(i, t || {}, this);
    if ((r && (n && (n = r(n)), i && (i = r(i)), a && (a = r(a))), s)) {
      E1(this, i, a);
      const o = u_(this, i, a, n);
      ((n = o.transitionEnd), (i = o.target));
    }
    return { transition: t, transitionEnd: n, ...i };
  }
}
function g_(e) {
  return window.getComputedStyle(e);
}
class v_ extends Fh {
  constructor() {
    (super(...arguments), (this.type = "html"));
  }
  readValueFromInstance(t, n) {
    if (Ln.has(n)) {
      const i = bc(n);
      return (i && i.default) || 0;
    } else {
      const i = g_(t),
        r = (Nm(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof r == "string" ? r.trim() : r;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Nh(t, n);
  }
  build(t, n, i, r) {
    hc(t, n, i, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return xc(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    De(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, i, r) {
    Dm(t, n, i, r);
  }
}
class y_ extends Fh {
  constructor() {
    (super(...arguments), (this.type = "svg"), (this.isSVGTag = !1));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ln.has(n)) {
      const i = bc(n);
      return (i && i.default) || 0;
    }
    return ((n = Mm.has(n) ? n : uc(n)), t.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return re();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Im(t, n);
  }
  build(t, n, i, r) {
    vc(t, n, i, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, i, r) {
    Rm(t, n, i, r);
  }
  mount(t) {
    ((this.isSVGTag = yc(t.tagName)), super.mount(t));
  }
}
const x_ = (e, t) =>
    mc(e)
      ? new y_(t, { enableHardwareAcceleration: !1 })
      : new v_(t, { enableHardwareAcceleration: !0 }),
  j_ = { layout: { ProjectionNode: Ih, MeasureLayout: Th } },
  __ = { ...K1, ...fx, ...Xj, ...j_ },
  T = wy((e, t) => ex(e, t, __, x_));
function Bh() {
  const e = _.useRef(!1);
  return (
    cc(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function w_() {
  const e = Bh(),
    [t, n] = _.useState(0),
    i = _.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [_.useCallback(() => W.postRender(i), [i]), t];
}
class k_ extends _.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const i = this.props.sizeRef.current;
      ((i.height = n.offsetHeight || 0),
        (i.width = n.offsetWidth || 0),
        (i.top = n.offsetTop),
        (i.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function S_({ children: e, isPresent: t }) {
  const n = _.useId(),
    i = _.useRef(null),
    r = _.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    _.useInsertionEffect(() => {
      const { width: s, height: a, top: o, left: c } = r.current;
      if (t || !i.current || !s || !a) return;
      i.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${o}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    _.createElement(
      k_,
      { isPresent: t, childRef: i, sizeRef: r },
      _.cloneElement(e, { ref: i }),
    )
  );
}
const no = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: i,
  custom: r,
  presenceAffectsLayout: s,
  mode: a,
}) => {
  const o = Vm(b_),
    c = _.useId(),
    u = _.useMemo(
      () => ({
        id: c,
        initial: t,
        isPresent: n,
        custom: r,
        onExitComplete: (d) => {
          o.set(d, !0);
          for (const p of o.values()) if (!p) return;
          i && i();
        },
        register: (d) => (o.set(d, !1), () => o.delete(d)),
      }),
      s ? void 0 : [n],
    );
  return (
    _.useMemo(() => {
      o.forEach((d, p) => o.set(p, !1));
    }, [n]),
    _.useEffect(() => {
      !n && !o.size && i && i();
    }, [n]),
    a === "popLayout" && (e = _.createElement(S_, { isPresent: n }, e)),
    _.createElement(ua.Provider, { value: u }, e)
  );
};
function b_() {
  return new Map();
}
function C_(e) {
  return _.useEffect(() => () => e(), []);
}
const yn = (e) => e.key || "";
function N_(e, t) {
  e.forEach((n) => {
    const i = yn(n);
    t.set(i, n);
  });
}
function P_(e) {
  const t = [];
  return (
    _.Children.forEach(e, (n) => {
      _.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const $s = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: i,
    exitBeforeEnter: r,
    presenceAffectsLayout: s = !0,
    mode: a = "sync",
  }) => {
    const o = _.useContext(fc).forceRender || w_()[0],
      c = Bh(),
      u = P_(e);
    let d = u;
    const p = _.useRef(new Map()).current,
      f = _.useRef(d),
      g = _.useRef(new Map()).current,
      y = _.useRef(!0);
    if (
      (cc(() => {
        ((y.current = !1), N_(u, g), (f.current = d));
      }),
      C_(() => {
        ((y.current = !0), g.clear(), p.clear());
      }),
      y.current)
    )
      return _.createElement(
        _.Fragment,
        null,
        d.map((m) =>
          _.createElement(
            no,
            {
              key: yn(m),
              isPresent: !0,
              initial: n ? void 0 : !1,
              presenceAffectsLayout: s,
              mode: a,
            },
            m,
          ),
        ),
      );
    d = [...d];
    const x = f.current.map(yn),
      w = u.map(yn),
      v = x.length;
    for (let m = 0; m < v; m++) {
      const h = x[m];
      w.indexOf(h) === -1 && !p.has(h) && p.set(h, void 0);
    }
    return (
      a === "wait" && p.size && (d = []),
      p.forEach((m, h) => {
        if (w.indexOf(h) !== -1) return;
        const j = g.get(h);
        if (!j) return;
        const k = x.indexOf(h);
        let N = m;
        if (!N) {
          const P = () => {
            p.delete(h);
            const C = Array.from(g.keys()).filter((L) => !w.includes(L));
            if (
              (C.forEach((L) => g.delete(L)),
              (f.current = u.filter((L) => {
                const M = yn(L);
                return M === h || C.includes(M);
              })),
              !p.size)
            ) {
              if (c.current === !1) return;
              (o(), i && i());
            }
          };
          ((N = _.createElement(
            no,
            {
              key: yn(j),
              isPresent: !1,
              onExitComplete: P,
              custom: t,
              presenceAffectsLayout: s,
              mode: a,
            },
            j,
          )),
            p.set(h, N));
        }
        d.splice(k, 0, N);
      }),
      (d = d.map((m) => {
        const h = m.key;
        return p.has(h)
          ? m
          : _.createElement(
              no,
              { key: yn(m), isPresent: !0, presenceAffectsLayout: s, mode: a },
              m,
            );
      })),
      _.createElement(
        _.Fragment,
        null,
        p.size ? d : d.map((m) => _.cloneElement(m)),
      )
    );
  },
  T_ = [
    {
      className: "top-[-10%] left-[-5%] w-[500px] h-[500px] bg-ocean-600/20",
      animate: {
        x: [0, 40, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      },
      duration: 20,
    },
    {
      className: "top-[30%] right-[-10%] w-[400px] h-[400px] bg-purple-600/15",
      animate: {
        x: [0, -30, 20, 0],
        y: [0, 40, -20, 0],
        scale: [1, 0.9, 1.05, 1],
      },
      duration: 25,
    },
    {
      className: "bottom-[10%] left-[20%] w-[350px] h-[350px] bg-blue-500/10",
      animate: {
        x: [0, 25, -35, 0],
        y: [0, -25, 15, 0],
        scale: [1, 1.05, 0.9, 1],
      },
      duration: 18,
    },
  ],
  E_ = () =>
    l.jsxs("div", {
      className: "fixed inset-0 pointer-events-none overflow-hidden z-0",
      children: [
        T_.map((e, t) =>
          l.jsx(
            T.div,
            {
              className: `absolute rounded-full blur-3xl ${e.className}`,
              animate: e.animate,
              transition: {
                duration: e.duration,
                repeat: 1 / 0,
                ease: "easeInOut",
              },
            },
            t,
          ),
        ),
        l.jsx("div", { className: "absolute inset-0 bg-mesh-dark" }),
      ],
    });
var A_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const L_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  B = (e, t) => {
    const n = _.forwardRef(
      (
        {
          color: i = "currentColor",
          size: r = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: a,
          children: o,
          ...c
        },
        u,
      ) =>
        _.createElement(
          "svg",
          {
            ref: u,
            ...A_,
            width: r,
            height: r,
            stroke: i,
            strokeWidth: a ? (Number(s) * 24) / Number(r) : s,
            className: `lucide lucide-${L_(e)}`,
            ...c,
          },
          [
            ...t.map(([d, p]) => _.createElement(d, p)),
            ...((Array.isArray(o) ? o : [o]) || []),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  },
  D_ = B("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ]),
  M_ = B("ArrowUp", [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }],
  ]),
  pr = B("Award", [
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
    ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }],
  ]),
  R_ = B("Brain", [
    [
      "path",
      {
        d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",
        key: "1mhkh5",
      },
    ],
    [
      "path",
      {
        d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",
        key: "1d6s00",
      },
    ],
  ]),
  kr = B("Calendar", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        ry: "2",
        key: "eu3xkr",
      },
    ],
    ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
    ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
    ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ]),
  $h = B("CheckCircle", [
    ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ]),
  Hi = B("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]),
  Uh = B("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ]),
  I_ = B("Cloud", [
    [
      "path",
      {
        d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
        key: "p7xjir",
      },
    ],
  ]),
  Us = B("Code", [
    ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
    ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
  ]),
  Ws = B("ExternalLink", [
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
    ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
    ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }],
  ]),
  Ac = B("Github", [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ]),
  V_ = B("Globe", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ]),
  z_ = B("GraduationCap", [
    ["path", { d: "M22 10v6M2 10l10-5 10 5-10 5z", key: "1ef52a" }],
    ["path", { d: "M6 12v5c3 3 9 3 12 0v-5", key: "1f75yj" }],
  ]),
  Wh = B("Heart", [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky",
      },
    ],
  ]),
  O_ = B("Lightbulb", [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }],
  ]),
  Hh = B("Linkedin", [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ]),
  Qd = B("Mail", [
    [
      "rect",
      { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ]),
  Lc = B("MapPin", [
    [
      "path",
      { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ]),
  F_ = B("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ]),
  B_ = B("Phone", [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5",
      },
    ],
  ]),
  $_ = B("Play", [
    ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }],
  ]),
  U_ = B("Puzzle", [
    [
      "path",
      {
        d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
        key: "i0oyt7",
      },
    ],
  ]),
  qd = B("Quote", [
    [
      "path",
      {
        d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
        key: "4rm80e",
      },
    ],
    [
      "path",
      {
        d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
        key: "10za9r",
      },
    ],
  ]),
  W_ = B("Send", [
    ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
    ["path", { d: "M22 2 11 13", key: "nzbqef" }],
  ]),
  H_ = B("Server", [
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2",
        key: "ngkwjq",
      },
    ],
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2",
        key: "iecqi9",
      },
    ],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
  ]),
  Dc = B("Star", [
    [
      "polygon",
      {
        points:
          "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6",
      },
    ],
  ]),
  Gh = B("TrendingUp", [
    ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
    ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
  ]),
  G_ = B("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ]),
  Kh = B("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Jh = _.createContext(void 0),
  mt = () => {
    const e = _.useContext(Jh);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  K_ = ({ children: e, value: t }) =>
    l.jsx(Jh.Provider, { value: t, children: e }),
  V = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
  Qe = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  },
  J_ = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  },
  Q_ = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
      },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  },
  G = { once: !0, margin: "-80px" },
  Yd = [
    { code: "en", label: "English", nativeLabel: "English" },
    { code: "es", label: "Spanish", nativeLabel: "Español" },
    { code: "de", label: "German", nativeLabel: "Deutsch" },
    { code: "ja", label: "Japanese", nativeLabel: "日本語" },
  ],
  Mc = { en: "", es: "spanish_", de: "german_", ja: "japanese_" },
  Qh = { en: "english", es: "spanish", de: "german", ja: "japanese" },
  q_ = (e) => ["en", "es", "de", "ja"].includes(e),
  Xd = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navExperience: "Experience",
      navProjects: "Projects",
      navSkills: "Skills",
      navContact: "Contact",
      nameShort: "Honda Iroban",
      nameJa: "Honda Iroban",
      scroll: "Scroll",
      professionalValues: "Professional Values",
      professionalValuesDesc: "The principles that guide my approach to work",
      personalHighlights: "Personal Highlights",
      experienceSubtitle: "A journey of 7+ years of professional experience",
      experienceTimeline: "Experience Timeline",
      keyAchievements: "Key Achievements",
      technologies: "Technologies",
      specializations: "Specializations",
      projectsSubtitle:
        "A collection of innovative solutions and creative projects",
      viewDetails: "View Details",
      projectCategories: "Project Categories",
      projectsCount: "Projects",
      keyFeatures: "Key Features",
      challenges: "Challenges",
      solutions: "Solutions",
      results: "Results",
      technologiesUsed: "Technologies Used",
      viewDemo: "View Demo",
      liveSite: "Live Site",
      skillsSubtitle: "Passion for modern technologies and continuous learning",
      skillCategories: "Skill Categories",
      experienceLabel: "Experience",
      years: "years",
      projectsUsed: "Projects Used",
      proficiency: "Proficiency",
      certifications: "Certifications",
      skillLevels: "Skill Levels",
      learningGoals: "Learning Goals",
      learningGoalsDesc:
        "Commitment to continuous growth and skill enhancement",
      targetDate: "Target Date",
      achievementsSubtitle:
        "A journey of professional achievements and certifications",
      professionalAwards: "Professional Awards",
      relatedProject: "Related Project",
      impact: "Impact",
      earned: "Earned",
      expires: "Expires",
      verify: "Verify",
      testimonialsSubtitle:
        "Words of recommendation from clients, colleagues, and mentors",
      keyQualities: "Key Qualities",
      viewOnLinkedIn: "View on LinkedIn",
      sendMessage: "Send a Message",
      selectSubject: "Select a subject",
      selectBudget: "Select budget",
      selectTimeline: "Select timeline",
      contactInformation: "Contact Information",
      socialLinks: "Social Links",
      availability: "Availability",
      stayUpdated: "Stay Updated",
      stayUpdatedDesc:
        "Get the latest insights on software development and Japanese culture",
      emailPlaceholder: "Enter your email address",
      subscribe: "Subscribe",
      copyright: "© 2025 Honda Iroban. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      sitemap: "Sitemap",
      backToTop: "Back to Top",
      lastUpdated: "Last Updated",
      version: "Version",
      madeInOsaka: "Made in Osaka",
      footerBio:
        "Software Engineer specializing in modern web technologies and Japanese cultural integration",
    },
    es: {
      navHome: "Inicio",
      navAbout: "Sobre mí",
      navExperience: "Experiencia",
      navProjects: "Proyectos",
      navSkills: "Habilidades",
      navContact: "Contacto",
      nameShort: "Honda Iroban",
      nameJa: "Honda Iroban",
      scroll: "Desplazar",
      professionalValues: "Valores profesionales",
      professionalValuesDesc: "Los principios que guían mi forma de trabajar",
      personalHighlights: "Aspectos personales",
      experienceSubtitle:
        "Un recorrido de más de 5 años de experiencia profesional",
      experienceTimeline: "Línea de experiencia",
      keyAchievements: "Logros clave",
      technologies: "Tecnologías",
      specializations: "Especializaciones",
      projectsSubtitle:
        "Una colección de soluciones innovadoras y proyectos creativos",
      viewDetails: "Ver detalles",
      projectCategories: "Categorías de proyectos",
      projectsCount: "Proyectos",
      keyFeatures: "Funciones principales",
      challenges: "Desafíos",
      solutions: "Soluciones",
      results: "Resultados",
      technologiesUsed: "Tecnologías utilizadas",
      viewDemo: "Ver demo",
      liveSite: "Sitio en vivo",
      skillsSubtitle:
        "Pasión por las tecnologías modernas y el aprendizaje continuo",
      skillCategories: "Categorías de habilidades",
      experienceLabel: "Experiencia",
      years: "años",
      projectsUsed: "Proyectos utilizados",
      proficiency: "Dominio",
      certifications: "Certificaciones",
      skillLevels: "Niveles de habilidad",
      learningGoals: "Objetivos de aprendizaje",
      learningGoalsDesc:
        "Compromiso con el crecimiento continuo y la mejora de habilidades",
      targetDate: "Fecha objetivo",
      achievementsSubtitle:
        "Un recorrido de logros profesionales y certificaciones",
      professionalAwards: "Premios profesionales",
      relatedProject: "Proyecto relacionado",
      impact: "Impacto",
      earned: "Obtenido",
      expires: "Expira",
      verify: "Verificar",
      testimonialsSubtitle:
        "Palabras de recomendación de clientes, colegas y mentores",
      keyQualities: "Cualidades clave",
      viewOnLinkedIn: "Ver en LinkedIn",
      sendMessage: "Enviar mensaje",
      selectSubject: "Seleccionar asunto",
      selectBudget: "Seleccionar presupuesto",
      selectTimeline: "Seleccionar plazo",
      contactInformation: "Información de contacto",
      socialLinks: "Redes sociales",
      availability: "Disponibilidad",
      stayUpdated: "Mantente informado",
      stayUpdatedDesc:
        "Recibe las últimas ideas sobre desarrollo de software y cultura japonesa",
      emailPlaceholder: "Introduce tu correo electrónico",
      subscribe: "Suscribirse",
      copyright: "© 2025 Honda Iroban. Todos los derechos reservados.",
      privacyPolicy: "Política de privacidad",
      termsOfService: "Términos de servicio",
      sitemap: "Mapa del sitio",
      backToTop: "Volver arriba",
      lastUpdated: "Última actualización",
      version: "Versión",
      madeInOsaka: "Hecho en Tokio",
      footerBio:
        "Ingeniero de software especializado en tecnologías web modernas e integración de la cultura japonesa",
    },
    de: {
      navHome: "Start",
      navAbout: "Über mich",
      navExperience: "Erfahrung",
      navProjects: "Projekte",
      navSkills: "Fähigkeiten",
      navContact: "Kontakt",
      nameShort: "Honda Iroban",
      nameJa: "Honda Iroban",
      scroll: "Scrollen",
      professionalValues: "Professionelle Werte",
      professionalValuesDesc: "Die Prinzipien, die meine Arbeitsweise leiten",
      personalHighlights: "Persönliche Highlights",
      experienceSubtitle: "Eine Reise von über 5 Jahren Berufserfahrung",
      experienceTimeline: "Erfahrungs-Timeline",
      keyAchievements: "Wichtigste Erfolge",
      technologies: "Technologien",
      specializations: "Spezialisierungen",
      projectsSubtitle:
        "Eine Sammlung innovativer Lösungen und kreativer Projekte",
      viewDetails: "Details ansehen",
      projectCategories: "Projektkategorien",
      projectsCount: "Projekte",
      keyFeatures: "Hauptfunktionen",
      challenges: "Herausforderungen",
      solutions: "Lösungen",
      results: "Ergebnisse",
      technologiesUsed: "Verwendete Technologien",
      viewDemo: "Demo ansehen",
      liveSite: "Live-Website",
      skillsSubtitle:
        "Leidenschaft für moderne Technologien und kontinuierliches Lernen",
      skillCategories: "Fähigkeitskategorien",
      experienceLabel: "Erfahrung",
      years: "Jahre",
      projectsUsed: "Verwendete Projekte",
      proficiency: "Kompetenz",
      certifications: "Zertifizierungen",
      skillLevels: "Fähigkeitsstufen",
      learningGoals: "Lernziele",
      learningGoalsDesc:
        "Engagement für kontinuierliches Wachstum und Kompetenzentwicklung",
      targetDate: "Zieltermin",
      achievementsSubtitle:
        "Eine Reise beruflicher Erfolge und Zertifizierungen",
      professionalAwards: "Berufliche Auszeichnungen",
      relatedProject: "Zugehöriges Projekt",
      impact: "Wirkung",
      earned: "Erworben",
      expires: "Läuft ab",
      verify: "Verifizieren",
      testimonialsSubtitle: "Empfehlungen von Kunden, Kollegen und Mentoren",
      keyQualities: "Schlüsselqualitäten",
      viewOnLinkedIn: "Auf LinkedIn ansehen",
      sendMessage: "Nachricht senden",
      selectSubject: "Betreff auswählen",
      selectBudget: "Budget auswählen",
      selectTimeline: "Zeitrahmen auswählen",
      contactInformation: "Kontaktinformationen",
      socialLinks: "Soziale Links",
      availability: "Verfügbarkeit",
      stayUpdated: "Bleiben Sie informiert",
      stayUpdatedDesc:
        "Erhalten Sie die neuesten Einblicke in Softwareentwicklung und japanische Kultur",
      emailPlaceholder: "E-Mail-Adresse eingeben",
      subscribe: "Abonnieren",
      copyright: "© 2025 Honda Iroban. Alle Rechte vorbehalten.",
      privacyPolicy: "Datenschutz",
      termsOfService: "Nutzungsbedingungen",
      sitemap: "Sitemap",
      backToTop: "Nach oben",
      lastUpdated: "Zuletzt aktualisiert",
      version: "Version",
      madeInOsaka: "Hergestellt in Tokio",
      footerBio:
        "Software-Ingenieur mit Schwerpunkt auf moderne Webtechnologien und japanische Kulturintegration",
    },
    ja: {
      navHome: "ホーム",
      navAbout: "自己紹介",
      navExperience: "経歴",
      navProjects: "制作実績",
      navSkills: "スキル",
      navContact: "お問い合わせ",
      nameShort: "たつや くろだ",
      nameJa: "たつや くろだ",
      scroll: "スクロール",
      professionalValues: "プロフェッショナルな価値観",
      professionalValuesDesc: "私の仕事へのアプローチを導く原則",
      personalHighlights: "個人的なハイライト",
      experienceSubtitle: "5年以上のプロフェッショナルな経験の軌跡",
      experienceTimeline: "経験のタイムライン",
      keyAchievements: "主要な成果",
      technologies: "使用技術",
      specializations: "専門分野",
      projectsSubtitle:
        "革新的なソリューションと創造的なプロジェクトのコレクション",
      viewDetails: "詳細を見る",
      projectCategories: "プロジェクトカテゴリ",
      projectsCount: "プロジェクト",
      keyFeatures: "主な機能",
      challenges: "課題",
      solutions: "解決策",
      results: "成果",
      technologiesUsed: "使用技術",
      viewDemo: "デモを見る",
      liveSite: "ライブサイト",
      skillsSubtitle: "モダンなテクノロジーと継続的な学習への情熱",
      skillCategories: "スキルカテゴリ",
      experienceLabel: "経験年数",
      years: "年",
      projectsUsed: "使用プロジェクト",
      proficiency: "習熟度",
      certifications: "認定",
      skillLevels: "スキルレベル",
      learningGoals: "学習目標",
      learningGoalsDesc: "継続的な成長とスキル向上への取り組み",
      targetDate: "目標時期",
      achievementsSubtitle: "プロフェッショナルな成果と認定の軌跡",
      professionalAwards: "プロフェッショナルな賞",
      relatedProject: "関連プロジェクト",
      impact: "影響",
      earned: "取得日",
      expires: "有効期限",
      verify: "検証",
      testimonialsSubtitle: "クライアント、同僚、メンターからの推薦の言葉",
      keyQualities: "主要な品質",
      viewOnLinkedIn: "LinkedInで確認",
      sendMessage: "メッセージを送信",
      selectSubject: "件名を選択してください",
      selectBudget: "予算を選択",
      selectTimeline: "期間を選択",
      contactInformation: "連絡先情報",
      socialLinks: "ソーシャルリンク",
      availability: "利用可能性",
      stayUpdated: "最新情報を受け取る",
      stayUpdatedDesc:
        "ソフトウェア開発と日本文化についての最新の洞察を受け取る",
      emailPlaceholder: "メールアドレスを入力してください",
      subscribe: "購読",
      copyright: "© 2025 たつや くろだ。すべての権利を保有。",
      privacyPolicy: "プライバシーポリシー",
      termsOfService: "利用規約",
      sitemap: "サイトマップ",
      backToTop: "トップに戻る",
      lastUpdated: "最終更新",
      version: "バージョン",
      madeInOsaka: "東京で作られました",
      footerBio:
        "モダンなWeb技術と日本文化統合を専門とするソフトウェアエンジニア",
    },
  },
  Y_ = (e, t) => Xd[t][e] ?? Xd.en[e],
  ht = (e) => (n) => Y_(n, e),
  X_ = () => {
    const [e, t] = _.useState(!1),
      [n, i] = _.useState(!1),
      [r, s] = _.useState(!1),
      [a, o] = _.useState("home"),
      { language: c, setLanguage: u } = mt(),
      d = ht(c);
    _.useEffect(() => {
      const w = () => {
        s(window.scrollY > 50);
        const v = [
            "home",
            "about",
            "experience",
            "projects",
            "skills",
            "achievements",
            "testimonials",
            "contact",
          ],
          m = window.scrollY + 100;
        for (const h of v) {
          const j = document.getElementById(h);
          if (j) {
            const { offsetTop: k, offsetHeight: N } = j;
            if (m >= k && m < k + N) {
              o(h);
              break;
            }
          }
        }
      };
      return (
        window.addEventListener("scroll", w),
        () => window.removeEventListener("scroll", w)
      );
    }, []);
    const p = [
        { id: "home", label: d("navHome") },
        { id: "about", label: d("navAbout") },
        { id: "experience", label: d("navExperience") },
        { id: "projects", label: d("navProjects") },
        { id: "skills", label: d("navSkills") },
        { id: "contact", label: d("navContact") },
      ],
      f = (w) => {
        const v = document.getElementById(w);
        (v && v.scrollIntoView({ behavior: "smooth", block: "start" }), t(!1));
      },
      g = (w) => {
        (u(w), i(!1));
      },
      y = Yd.find((w) => w.code === c),
      x = a === "home" && !r;
    return l.jsx(T.nav, {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      className:
        "fixed top-0 inset-x-0 z-[100] px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4 pointer-events-none",
      children: l.jsxs("div", {
        className: `mx-auto max-w-7xl rounded-2xl transition-all duration-300 pointer-events-auto ${r || x ? "glass shadow-glow-ocean-sm border-ocean-500/20 bg-white/10" : "glass border-white/10 bg-black/30"}`,
        children: [
          l.jsxs("div", {
            className:
              "grid grid-cols-[auto_1fr_auto] items-center h-14 px-3 sm:px-4 lg:px-5 gap-2 lg:gap-3",
            children: [
              l.jsxs(T.button, {
                onClick: () => f("home"),
                className: "flex items-center gap-2 flex-shrink-0 min-w-0",
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.98 },
                children: [
                  l.jsx("div", {
                    className:
                      "w-8 h-8 bg-ocean-gradient rounded-lg flex items-center justify-center shadow-glow-ocean-sm flex-shrink-0",
                    children: l.jsx("span", {
                      className: "text-white font-bold text-lg",
                      children: "T",
                    }),
                  }),
                  l.jsx("span", {
                    className:
                      "font-display font-bold text-sm lg:text-base text-white hidden md:block truncate max-w-[120px] lg:max-w-none",
                    children: d("nameShort"),
                  }),
                ],
              }),
              l.jsx("div", {
                className:
                  "hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 min-w-0 overflow-x-auto scrollbar-hide",
                children: p.map((w) => {
                  const v = a === w.id;
                  return l.jsxs(
                    "button",
                    {
                      onClick: () => f(w.id),
                      className:
                        "relative flex-shrink-0 px-2 xl:px-2.5 py-1.5 text-[11px] xl:text-xs font-heading font-medium uppercase tracking-wide transition-colors duration-200 whitespace-nowrap",
                      children: [
                        v &&
                          l.jsx(T.span, {
                            layoutId: "nav-indicator",
                            className:
                              "absolute inset-0 bg-ocean-500/20 rounded-lg border border-ocean-500/30",
                            transition: {
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            },
                          }),
                        l.jsx("span", {
                          className: `relative z-10 ${v ? "text-ocean-400" : "text-gray-300 hover:text-ocean-300"}`,
                          children: w.label,
                        }),
                      ],
                    },
                    w.id,
                  );
                }),
              }),
              l.jsxs("div", {
                className:
                  "flex items-center justify-end gap-1 sm:gap-2 flex-shrink-0",
                children: [
                  l.jsx("button", {
                    onClick: () => t(!e),
                    className:
                      "lg:hidden p-2 rounded-lg text-gray-300 hover:text-ocean-400 hover:bg-white/5 transition-colors duration-200",
                    "aria-label": e ? "Close menu" : "Open menu",
                    children: e
                      ? l.jsx(Kh, { className: "w-5 h-5" })
                      : l.jsx(F_, { className: "w-5 h-5" }),
                  }),
                ],
              }),
            ],
          }),
          l.jsx($s, {
            children:
              e &&
              l.jsx(T.div, {
                variants: Q_,
                initial: "hidden",
                animate: "visible",
                exit: "exit",
                className: "lg:hidden overflow-hidden border-t border-white/10",
                children: l.jsx("div", {
                  className: "px-3 py-2 space-y-1",
                  children: p.map((w) => {
                    const v = a === w.id;
                    return l.jsx(
                      T.button,
                      {
                        variants: J_,
                        onClick: () => f(w.id),
                        className: `block w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${v ? "text-ocean-400 bg-ocean-500/10 border border-ocean-500/20" : "text-gray-300 hover:text-ocean-300 hover:bg-white/5"}`,
                        children: w.label,
                      },
                      w.id,
                    );
                  }),
                }),
              }),
          }),
        ],
      }),
    });
  },
  Z_ = "home",
  ew = "Honda Iroban",
  tw = "Software Engineer & Full-Stack Developer",
  nw = "Passionate about creating innovative solutions and bridging technology",
  iw = { text: "View My Work", link: "#projects" },
  rw = [
    {
      id: 1,
      name: "Deep Blue Serenity",
      description: "Calm deep ocean with gentle waves",
      image_url: "/hero-bg/1.png",
      mood: "serene",
    },
    {
      id: 2,
      name: "Sunset Waves",
      description: "Golden hour ocean with warm reflections",
      image_url: "/hero-bg/2.png",
      mood: "warm",
    },
    {
      id: 3,
      name: "Stormy Depths",
      description: "Dynamic ocean with powerful waves",
      image_url: "/hero-bg/3.png",
      mood: "dynamic",
    },
    {
      id: 4,
      name: "Crystal Clear",
      description: "Tropical turquoise waters",
      image_url: "/hero-bg/4.png",
      mood: "tropical",
    },
    {
      id: 5,
      name: "Misty Horizon",
      description: "Foggy ocean morning with mystery",
      image_url: "/hero-bg/5.png",
      mood: "mysterious",
    },
    {
      id: 6,
      name: "Arctic Waters",
      description: "Cool blue-green arctic ocean",
      image_url: "/hero-bg/6.png",
      mood: "cool",
    },
    {
      id: 7,
      name: "Moonlit Waves",
      description: "Night ocean under moonlight",
      image_url: "/hero-bg/7.png",
      mood: "peaceful",
    },
  ],
  sw = { interval_seconds: 5, transition_duration: 1.5, fade_effect: !0 },
  aw = {
    japanese: {
      title: "たつや くろだ",
      subtitle: "ソフトウェアエンジニア・フルスタック開発者",
      description:
        "革新的なソリューションの創造と日本文化とテクノロジーの架け橋に情熱を注いでいます",
      cta: { text: "制作実績を見る", link: "#projects" },
    },
    english: {
      title: "Honda Iroban",
      subtitle: "AI Engineer & Senior Developer",
      description:
        "Passionate about creating innovative solutions and bridging technology",
      cta: { text: "View My Work", link: "#projects" },
    },
    spanish: {
      title: "Honda Iroban",
      subtitle: "Ingeniero de Software y Desarrollador Full-Stack",
      description:
        "Apasionado por crear soluciones innovadoras y conectar la tecnología con la cultura japonesa",
      cta: { text: "Ver mi trabajo", link: "#projects" },
    },
    german: {
      title: "Honda Iroban",
      subtitle: "Software-Ingenieur & Full-Stack-Entwickler",
      description:
        "Leidenschaft für innovative Lösungen und die Verbindung von Technologie mit japanischer Kultur",
      cta: { text: "Meine Arbeit ansehen", link: "#projects" },
    },
  },
  ow = {
    section: Z_,
    title: ew,
    subtitle: tw,
    description: nw,
    cta: iw,
    ocean_backgrounds: rw,
    rotation_settings: sw,
    languages: aw,
  },
  lw = "about",
  cw = "About Me",
  uw = "自己紹介",
  dw = {
    name: "Honda Iroban",
    japanese_name: "陳友楽",
    title: "Senior Software Engineer",
    japanese_title: "シニアソフトウェアエンジニア",
    photo_url: "/profile-photo.svg",
    location: "Osaka, Japan",
    japanese_location: "東京都",
  },
  pw = {
    english:
      "I am a dedicated Senior Full-Stack Developer and AI Engineer with over 7 years of experience building scalable web applications, cloud infrastructure, and AI-powered solutions. Based in Osaka, Japan, I specialize in designing high-performance software using modern technologies across frontend, backend, DevOps, and machine learning. My approach combines clean architecture, efficient development practices, and a strong focus on delivering reliable, user-centered products. I am passionate about continuous learning, solving complex technical challenges, and helping businesses transform ideas into production-ready solutions while maintaining the highest standards of quality and professionalism.",
    japanese:
      "私は、スケーラブルなWebアプリケーション、クラウドインフラストラクチャ、AI搭載ソリューションの構築に7年以上の経験を持つ、献身的なシニアフルスタック開発者兼AIエンジニアです。大阪を拠点に、フロントエンド、バックエンド、DevOps、機械学習といった最新技術を用いて高性能ソフトウェアの設計を専門としています。クリーンアーキテクチャ、効率的な開発手法、そして信頼性の高いユーザー中心の製品提供に重点を置いたアプローチを特徴としています。継続的な学習、複雑な技術的課題の解決、そして最高水準の品質とプロ意識を維持しながら、企業がアイデアを実運用可能なソリューションへと変革できるよう支援することに情熱を注いでいます。",
    spanish:
      "Soy un desarrollador full-stack senior y un ingeniero de IA con más de 7 años de experiencia en la creación de aplicaciones web escalables, infraestructura en la nube y soluciones basadas en IA. Resido en Osaka, Japón, y me especializo en el diseño de software de alto rendimiento utilizando tecnologías modernas en frontend, backend, DevOps y aprendizaje automático. Mi enfoque combina una arquitectura limpia, prácticas de desarrollo eficientes y un fuerte enfoque en la entrega de productos confiables y centrados en el usuario. Me apasiona el aprendizaje continuo, la resolución de desafíos técnicos complejos y ayudar a las empresas a transformar ideas en soluciones listas para producción, manteniendo siempre los más altos estándares de calidad y profesionalismo.",
    german:
      "Ich bin ein erfahrener Senior Full-Stack-Entwickler und KI-Ingenieur mit über sieben Jahren Erfahrung in der Entwicklung skalierbarer Webanwendungen, Cloud-Infrastrukturen und KI-gestützter Lösungen. Von meinem Standort in Osaka, Japan, aus bin ich auf die Entwicklung leistungsstarker Software mit modernen Technologien in den Bereichen Frontend, Backend, DevOps und Machine Learning spezialisiert. Mein Ansatz vereint saubere Architektur, effiziente Entwicklungsmethoden und die konsequente Ausrichtung auf zuverlässige, nutzerzentrierte Produkte. Ich lerne leidenschaftlich gern kontinuierlich dazu, löse komplexe technische Herausforderungen und unterstütze Unternehmen dabei, ihre Ideen in produktionsreife Lösungen umzusetzen – stets unter Einhaltung höchster Qualitäts- und Professionalitätsstandards.",
  },
  fw = [
    {
      title: "Problem-Solving",
      japanese_title: "問題解決",
      description:
        "I approach complex challenges with systematic thinking and creative solutions",
      japanese_description:
        "複雑な課題に体系的思考と創造的ソリューションでアプローチします",
      icon: "puzzle-piece",
    },
    {
      title: "Clean Code",
      japanese_title: "クリーンコード",
      description:
        "Writing maintainable, readable, and efficient code is my passion",
      japanese_description:
        "保守性、可読性、効率性を兼ね備えたコードを書くことが私の情熱です",
      icon: "code",
    },
    {
      title: "Teamwork",
      japanese_title: "チームワーク",
      description:
        "Collaborating effectively with diverse teams to achieve common goals",
      japanese_description:
        "多様なチームと効果的に協力し、共通の目標を達成します",
      icon: "users",
    },
    {
      title: "Continuous Learning",
      japanese_title: "継続的学習",
      description:
        "Always staying updated with latest technologies and best practices",
      japanese_description:
        "最新技術とベストプラクティスを常に学び続けています",
      icon: "graduation-cap",
    },
  ],
  mw = [
    {
      category: "Languages",
      japanese_category: "言語",
      items: [
        "Japanese (Native)",
        "English (Fluent)",
        "Chinese (Conversational)",
      ],
      japanese_items: [
        "日本語（母語）",
        "英語（流暢）",
        "中国語（会話レベル）",
      ],
    },
    {
      category: "Interests",
      japanese_category: "趣味",
      items: [
        "Ocean Photography",
        "Traditional Japanese Arts",
        "Open Source Contribution",
      ],
      japanese_items: ["海洋写真", "日本の伝統芸術", "オープンソース貢献"],
    },
    {
      category: "Philosophy",
      japanese_category: "哲学",
      items: [
        "Kaizen (Continuous Improvement)",
        "Omotenashi (Japanese Hospitality)",
        "Wabi-Sabi (Finding Beauty in Imperfection)",
      ],
      japanese_items: [
        "改善（継続的改善）",
        "おもてなし（日本のおもてなし精神）",
        "侘寂（不完全さの中の美しさ）",
      ],
    },
  ],
  hw = {
    english:
      "To bridge the gap between cutting-edge technology and traditional Japanese values, creating software that not only solves problems but also enhances human connection and cultural understanding.",
    japanese:
      "最先端技術と日本の伝統的価値観の架け橋となり、問題を解決するだけでなく、人間のつながりと文化的理解を深めるソフトウェアを作ることです。",
  },
  gw = {
    section: lw,
    title: cw,
    japanese_title: uw,
    profile: dw,
    introduction: pw,
    professional_values: fw,
    personal_highlights: mw,
    career_mission: hw,
  },
  vw = "experience",
  yw = "Experience",
  xw = "経歴",
  jw = [
    {
      id: 1,
      period: "2024 - Present",
      japanese_period: "2022年 - 現在",
      company: "TechFlow Solutions",
      japanese_company: "テックフローソリューションズ",
      position: "Senior developer & AI engineer",
      japanese_position: "シニアソフトウェアエンジニア",
      location: "Osaka, Japan",
      japanese_location: "東京都",
      description:
        "Leading development of microservices architecture and mentoring junior developers",
      japanese_description:
        "マイクロサービスアーキテクチャの開発をリードし、ジュニア開発者のメンタリングを担当",
      key_achievements: [
        "Design and deploy advanced AI models(LLMs, computer vision, time-series).",
        "Lead technicalstrategy for a team of 5–8 engineers.",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Optimize modelsto reduce costs and improve performance.",
      ],
      japanese_achievements: [
        "マイクロサービス最適化によりシステム応答時間を40%短縮",
        "5名の開発者チームを率いてスケーラブルなECプラットフォームを構築",
        "CI/CDパイプラインを実装し、デプロイ時間を60%短縮",
        "3名のジュニア開発者をメンタリングし、キャリアアップを支援",
      ],
      technologies: [
        "Node.js",
        "React",
        "Docker",
        "Kubernetes",
        "AWS",
        "PostgreSQL",
      ],
    },
    {
      id: 2,
      period: "2023 – 2024",
      japanese_period: "2023年 - 2024年",
      company: "Digital Innovations Inc.",
      japanese_company: "デジタルイノベーションズ株式会社",
      position: "Senior Developer",
      japanese_position: "フルスタック開発者",
      location: "Osaka, Japan",
      japanese_location: "大阪府",
      description:
        "Developed full-stack web applications and mobile-responsive solutions",
      japanese_description:
        "フルスタックWebアプリケーションとモバイル対応ソリューションの開発",
      key_achievements: [
        "Built ML modelsfor predictive analytics and NLP.",
        "Managed AWS cloud infrastructure and MLOps pipelines.",
        "Productionized research prototypesinto scalable applications using Kubernetes and Docker.",
        "Implemented MLOps practicesincluding model versioning, monitoring, and automated retraining.",
      ],
      japanese_achievements: [
        "15以上のクライアントプロジェクトを構築し、99.9%の稼働率を達成",
        "コンテンツ管理時間を50%短縮するカスタムCMSを開発",
        "モバイルファーストアプローチのレスポンシブデザインを実装",
        "UXチームと協力し、ユーザーエンゲージメントを35%向上",
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Nginx", "Linux"],
    },
    {
      id: 3,
      period: "2020 – 2023",
      japanese_period: "2020年 - 2023年",
      company: "StartupHub Osaka",
      japanese_company: "スタートアップハブ東京",
      position: "Mid-Level Developer ",
      japanese_position: "フロントエンド開発者",
      location: "Osaka, Japan",
      japanese_location: "東京都",
      description:
        "Specialized in modern frontend development and user experience optimization",
      japanese_description:
        "モダンフロントエンド開発とユーザーエクスペリエンス最適化に特化",
      key_achievements: [
        "Led the development of major featuresfor the company'sflagship enterprise product.",
        "Designed and implemented microservices architecture for a logistics client'stracking system.",
        "Introduced CI/CD pipelines using Jenkins and Docker to streamline deployments.",
      ],
      japanese_achievements: [
        "モダンなUI/UXで10以上のReactアプリケーションを開発",
        "アプリパフォーマンスを向上させる状態管理ソリューションを実装",
        "5つのプロジェクトで使用される再利用可能なコンポーネントライブラリを作成",
        "バンドルサイズを最適化し、読み込み時間を45%短縮",
      ],
      technologies: ["React", "TypeScript", "Redux", "Sass", "Webpack", "Jest"],
    },
    {
      id: 4,
      period: "2019 – 2020",
      japanese_period: "2019年 - 2020年",
      company: "WebCraft Solutions",
      japanese_company: "ウェブクラフトソリューションズ",
      position: "Junior Full-Stack Developer",
      japanese_position: "ジュニア開発者",
      location: "Osaka, Japan",
      japanese_location: "京都府",
      description:
        "Started career in web development with focus on learning and growth",
      japanese_description: "学習と成長に焦点を当ててWeb開発のキャリアを開始",
      key_achievements: [
        "Built web apps using Java (Spring Boot) and React.",
        "Created REST APIs and worked with PostgreSQL and MongoDB.",
      ],
      japanese_achievements: [
        "20以上の小中規模Webプロジェクトを完了",
        "モダンなJavaScriptフレームワークとベストプラクティスを学習",
        "GitHubでオープンソースプロジェクトに貢献",
        "優秀なパフォーマンスで「ライジングスター」賞を受賞",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "MySQL"],
    },
  ],
  _w = {
    total_experience: "7+ years",
    japanese_total_experience: "5年以上",
    projects_completed: "150+",
    japanese_projects_completed: "150以上",
    technologies_mastered: "30+",
    japanese_technologies_mastered: "30以上",
    team_leadership: "3+ years",
    japanese_team_leadership: "3年以上",
  },
  ww = [
    {
      area: "Frontend Development",
      japanese_area: "フロントエンド開発",
      expertise_level: "Expert",
      japanese_expertise_level: "エキスパート",
    },
    {
      area: "Backend Development",
      japanese_area: "バックエンド開発",
      expertise_level: "Advanced",
      japanese_expertise_level: "上級",
    },
    {
      area: "DevOps & Cloud",
      japanese_area: "DevOps・クラウド",
      expertise_level: "Intermediate",
      japanese_expertise_level: "中級",
    },
    {
      area: "Team Leadership",
      japanese_area: "チームリーダーシップ",
      expertise_level: "Advanced",
      japanese_expertise_level: "上級",
    },
  ],
  kw = {
    section: vw,
    title: yw,
    japanese_title: xw,
    timeline: jw,
    career_highlights: _w,
    specializations: ww,
  },
  Sw = "projects",
  bw = "Projects",
  Cw = "制作実績",
  Nw = [
    {
      id: 1,
      name: "mi-6 Recruit",
      japanese_name: "mi-6 リクルート",
      category: "Recruitment",
      japanese_category: "リクルート",
      status: "Completed",
      japanese_status: "完了",
      year: "2020",
      duration: "6 months",
      japanese_duration: "6ヶ月",
      description:
        "A comprehensive recruitment platform with microservices architecture, featuring real-time inventory management and AI-powered recommendations",
      japanese_description:
        "マイクロサービスアーキテクチャを採用した包括的なECプラットフォーム。リアルタイム在庫管理とAI搭載のレコメンデーション機能を特徴とする",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS",
        "Kubernetes",
        "Next.js",
      ],
      features: [
        "Real-time inventory tracking",
        "AI-powered product recommendations",
        "Multi-language support (EN/JP/CN)",
        "Mobile-responsive design",
        "Payment gateway integration",
        "Admin dashboard with analytics",
        "AI-powered job recommendations",
      ],
      japanese_features: [
        "リアルタイム在庫追跡",
        "AI搭載商品レコメンデーション",
        "多言語対応（英語/日本語/中国語）",
        "モバイルレスポンシブデザイン",
        "決済ゲートウェイ統合",
        "分析機能付き管理ダッシュボード",
        "AI搭載ジョブレコメンデーション",
      ],
      challenges:
        "Implementing real-time synchronization across microservices while maintaining data consistency, and AI-powered job recommendations",
      japanese_challenges:
        "データの一貫性を保ちながらマイクロサービス間のリアルタイム同期を実装",
      solutions:
        "Used event-driven architecture with Apache Kafka for reliable message queuing and eventual consistency, and AI-powered job recommendations",
      japanese_solutions:
        "Apache Kafkaを使用したイベント駆動アーキテクチャで信頼性の高いメッセージキューイングと結果整合性を実現",
      results: [
        "40% increase in conversion rate",
        "99.9% uptime achieved",
        "50% reduction in page load time",
        "Handled 10,000+ concurrent users",
        "AI-powered job recommendations",
      ],
      japanese_results: [
        "コンバージョン率40%向上",
        "99.9%の稼働率を達成",
        "ページ読み込み時間50%短縮",
        "10,000人以上の同時ユーザーに対応",
      ],
      images: ["/images/projects/project-1.png"],
      live_url: "https://recruit.mi-6.co.jp/",
    },
    {
      id: 2,
      name: "ジェイエムシー株式会社 Recruit Site",
      japanese_name: "ジェイエムシー株式会社 Recruit Site",
      category: "Productivity",
      japanese_category: "生産性ツール",
      status: "Completed",
      japanese_status: "完了",
      year: "2020",
      duration: "4 months",
      japanese_duration: "4ヶ月",
      description:
        "A comprehensive recruitment platform with microservices architecture, featuring real-time inventory management and AI-powered recommendations",
      japanese_description:
        "日本の禅哲学にインスパイアされたミニマリストなプロジェクト管理ツール。タスク管理におけるシンプルさとマインドフルネスに焦点を当てる",
      technologies: [
        "Express.js",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Docker",
        "React/Next.js",
      ],
      features: [
        "Kanban board with drag-and-drop",
        "Real-time collaboration",
        "AI-powered job recommendations",
        "Time tracking with Pomodoro technique",
        "Team chat integration",
        "Customizable themes",
      ],
      japanese_features: [
        "ドラッグ&ドロップ対応のカンバンボード",
        "リアルタイムコラボレーション",
        "マインドフルネスリマインダー",
        "ポモドーロテクニックによる時間追跡",
        "チームチャット統合",
        "カスタマイズ可能なテーマ",
      ],
      challenges:
        "Creating an intuitive interface that promotes focus while maintaining powerful project management features",
      japanese_challenges:
        "強力なプロジェクト管理機能を維持しながら、集中を促進する直感的なインターフェースの作成",
      solutions:
        "Applied progressive disclosure and minimal design principles with carefully crafted user flows",
      japanese_solutions:
        "段階的開示とミニマルデザインの原則を適用し、慎重に設計されたユーザーフローを実装",
      results: [
        "85% user satisfaction rate",
        "60% increase in team productivity",
        "30% reduction in project completion time",
        "500+ active users",
      ],
      japanese_results: [
        "85%のユーザー満足度",
        "チーム生産性60%向上",
        "プロジェクト完了時間30%短縮",
        "500人以上のアクティブユーザー",
      ],
      images: ["/images/projects/project-2.png"],
      live_url: "https://recruit.jmc-ltd.co.jp/",
    },
    {
      id: 3,
      name: "Misshelly",
      japanese_name: "Misshelly",
      category: "Mobile App",
      japanese_category: "モバイルアプリ",
      status: "Completed",
      japanese_status: "完了",
      year: "2021",
      duration: "3 months",
      japanese_duration: "3ヶ月",
      description:
        "A beautiful weather application with Japanese aesthetics, featuring cherry blossom animations and traditional weather forecasting methods",
      japanese_description:
        "日本の美学を取り入れた美しい天気アプリケーション。桜のアニメーションと伝統的な天気予報方法を特徴とする",
      technologies: [
        "React Native",
        "Expo",
        "OpenWeatherMap API",
        "Lottie",
        "AsyncStorage",
        "React/Next.js",
      ],
      features: [
        "Real-time inventory tracking",
        "AI-powered job recommendations",
        "Multi-language support (EN/JP/CN)",
        "Mobile-responsive design",
        "Payment gateway integration",
        "Admin dashboard with analytics",
        "AI-powered job recommendations",
      ],
      japanese_features: [
        "リアルタイム在庫追跡",
        "AI搭載ジョブレコメンデーション",
        "多言語対応（英語/日本語/中国語）",
        "モバイルレスポンシブデザイン",
        "決済ゲートウェイ統合",
        "分析機能付き管理ダッシュボード",
        "AI搭載ジョブレコメンデーション",
      ],
      challenges:
        "Creating smooth animations that work across different devices while maintaining performance",
      japanese_challenges:
        "パフォーマンスを維持しながら、異なるデバイスで動作するスムーズなアニメーションの作成",
      solutions:
        "Used Lottie animations with optimized JSON files and implemented device-specific performance scaling",
      japanese_solutions:
        "最適化されたJSONファイルでLottieアニメーションを使用し、デバイス固有のパフォーマンススケーリングを実装",
      results: [
        "4.8/5 App Store rating",
        "50,000+ downloads",
        "Featured in 'Apps We Love' section",
        "95% user retention rate",
      ],
      japanese_results: [
        "App Store評価4.8/5",
        "50,000回以上のダウンロード",
        "「お気に入りアプリ」セクションで紹介",
        "95%のユーザー継続率",
      ],
      images: ["/images/projects/project-3.png"],
      demo_url: "https://misshelly.com/",
    },
    {
      id: 4,
      name: "5IVE GROUP",
      japanese_name: "5IVE GROUP",
      category: "Life",
      japanese_category: "教育",
      status: "Completed",
      japanese_status: "進行中",
      year: "2022",
      duration: "1 month",
      japanese_duration: "1ヶ月",
      description:
        "A comprehensive life management platform with microservices architecture, featuring real-time inventory management and AI-powered recommendations",
      japanese_description:
        "日本の文化的メタファーとゲーミフィケーションを通じてプログラミングを教えるインタラクティブなコーディング教育プラットフォーム",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
        "Vercel",
        "React/Next.js",
      ],
      features: [
        "Real-time inventory tracking",
        "AI-powered job recommendations",
        "Multi-language support (EN/JP/CN)",
        "Mobile-responsive design",
        "Payment gateway integration",
        "Admin dashboard with analytics",
        "AI-powered job recommendations",
      ],
      japanese_features: [
        "インタラクティブなコーディングチャレンジ",
        "日本の文化的学習メタファー",
        "進捗追跡と実績システム",
        "ピアコードレビューシステム",
        "AI搭載コード提案",
        "多言語対応",
      ],
      challenges:
        "Creating engaging educational content that bridges programming concepts with Japanese culture",
      japanese_challenges:
        "プログラミング概念と日本文化を結びつける魅力的な教育コンテンツの作成",
      solutions:
        "Developed a unique curriculum that uses Japanese martial arts principles to explain programming concepts",
      japanese_solutions:
        "プログラミング概念を説明するために日本の武道の原則を使用するユニークなカリキュラムを開発",
      results: [
        "500+ active learners",
        "90% course completion rate",
        "Featured in TechCrunch Japan",
        "Partnership with 3 coding bootcamps",
      ],
      japanese_results: [
        "500人以上のアクティブラーナー",
        "90%のコース完了率",
        "TechCrunch Japanで紹介",
        "3つのコーディングブートキャンプとのパートナーシップ",
      ],
      images: ["/images/projects/project-4.png"],
      live_url: "https://recruit.five-group.co.jp/",
    },
    {
      id: 5,
      name: "Dance",
      japanese_name: "Dance",
      category: "Cultural Heritage",
      japanese_category: "文化遺産",
      status: "Completed",
      japanese_status: "進行中",
      year: "2023",
      duration: "3 months",
      japanese_duration: "1ヶ月",
      description:
        "It’s a Japanese vocational school in Kobe offering professional training in dance, music, and performance.",
      japanese_description:
        "これは、神戸にあるダンス・音楽・パフォーマンスの専門的な教育を提供する専門学校です。",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "AWS S3",
        "ImageMagick",
        "Next.js",
      ],
      features: [
        "Professional Dance & Music Training",
        "Experienced Instructors & Industry Professionals",
        "Overseas Study & Exchange Opportunities",
        "Multi-Genre Dance Curriculum (Hip-Hop, Jazz, Ballet, etc.)",
        "Performance & Stage Production Experience",
        "State-of-the-Art Facilities & Studios",
        "Career Support & Industry Connections",
      ],
      japanese_features: [
        "専門的なダンス・音楽教育",
        "現役で活躍する講師・業界プロによる指導",
        "海外留学・交流プログラム",
        "多ジャンル対応のダンスカリキュラム（ヒップホップ、ジャズ、バレエなど）",
        "舞台・ステージ制作を通じた実践的な経験",
        "最新設備を備えたスタジオ・施設",
        "最新設備を備えたスタジオ・施設",
      ],
      challenges:
        "Creating a platform that connects students with industry professionals and provides a comprehensive learning experience",
      japanese_challenges:
        "学生と業界プロフェッショナルをつなげ、総合的な学習体験を提供するプラットフォームの作成",
      solutions:
        "Developed custom scanning techniques and 3D rendering algorithms to capture paper texture and translucency",
      japanese_solutions:
        "紙の質感と半透明性を捉えるためのカスタムスキャニング技術と3Dレンダリングアルゴリズムを開発",
      results: [
        "1,000+ digitized paper samples",
        "Partnership with 5 museums",
        "UNESCO cultural preservation recognition",
        "Used by 20+ educational institutions",
      ],
      japanese_results: [
        "1,000以上のデジタル化された紙サンプル",
        "5つの博物館とのパートナーシップ",
        "UNESCO文化保存認定",
        "20以上の教育機関で使用",
      ],
      images: ["/images/projects/project-5.png"],
      live_url: "https://www.music.ac.jp/dance/",
    },
    {
      id: 6,
      name: "通信制大学 星槎大学",
      japanese_name: "通信制大学 星槎大学",
      category: "Children's Education",
      japanese_category: "開発者ツール",
      status: "Completed",
      japanese_status: "進行中",
      year: "2024",
      duration: "4 months",
      japanese_duration: "4ヶ月",
      description:
        "Seisa University is a distance-learning university in Japan offering programs in inclusive education, welfare, sports & physical expression, and global/local communication, with a focus on “living together” in diversity.",
      japanese_description:
        "星槎大学は、日本で通信制の大学として、「共生」を重視しながら、教育・福祉・スポーツ身体表現・グローカルコミュニケーションなどの学問分野を提供しています。",
      technologies: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "WebSocket",
        "Chart.js",
        "Docker",
      ],
      features: [
        "Visual bug lifecycle management",
        "Kintsugi-inspired UI design",
        "Seamless team collaboration tools",
        "Intelligent bug pattern analysis",
        "Automated testing integration",
        "Real-time performance impact tracking",
      ],
      japanese_features: [
        "視覚的なバグライフサイクル管理",
        "金継ぎから着想を得たUIデザイン",
        "シームレスなチームコラボレーションツール",
        "高度なバグパターン分析",
        "自動テストの統合",
        "リアルタイムのパフォーマンス影響追跡",
      ],
      challenges:
        "Creating a positive mindset around bug fixing while maintaining technical accuracy and efficiency",
      japanese_challenges:
        "技術的精度と効率性を維持しながら、バグ修正に対するポジティブなマインドセットを作成",
      solutions:
        "Implemented gamification elements and positive reinforcement to reframe bug fixing as a creative problem-solving process",
      japanese_solutions:
        "バグ修正を創造的な問題解決プロセスとして再構築するために、ゲーミフィケーション要素とポジティブ強化を実装",
      results: [
        "40% faster bug resolution time",
        "85% developer satisfaction rate",
        "60% reduction in bug recurrence",
        "Adopted by 10+ development teams",
      ],
      japanese_results: [
        "バグ解決時間40%短縮",
        "85%の開発者満足度",
        "バグ再発率60%削減",
        "10以上の開発チームで採用",
      ],
      images: ["/images/projects/project-6.png"],
      live_url: "https://seisa.ac.jp/",
    },
    {
      id: 7,
      name: "Lie:verse Liars",
      japanese_name: "公式サイト",
      category: "Children's Education",
      japanese_category: "開発者ツール",
      status: "Completed",
      japanese_status: "進行中",
      year: "2024",
      duration: "4 months",
      japanese_duration: "4ヶ月",
      description:
        "Lie:verse Liars is the official site for a multimedia / character-story IP (novels, merchandise, radio show) set in a world where lies and truths are switched.",
      japanese_description:
        "「Lie:verse Liars（リーバース・ライアーズ）」は、嘘と真実が入れ替わった世界を舞台に、小説、商品展開、ラジオ番組などを扱うマルチメディアキャラクター作品の公式サイトです。",
      technologies: [
        "Vue.js",
        "Nuxt.js",
        "MySQL",
        "Tailwind CSS",
        "Vercel",
        "AWS",
      ],
      features: [
        "Visual bug lifecycle management",
        "Kintsugi-inspired UI design",
        "Seamless team collaboration tools",
        "Advanced bug pattern analysis",
        "Automated testing integration",
        "Real-time performance impact tracking",
      ],
      japanese_features: [
        "視覚的なバグライフサイクル管理",
        "金継ぎをモチーフにしたUIデザイン",
        "シームレスなチームコラボレーションツール",
        "高度なバグパターン分析",
        "自動テスト統合",
        "リアルタイムでのパフォーマンス影響追跡",
      ],
      challenges:
        "Creating a positive mindset around bug fixing while maintaining technical accuracy and efficiency",
      japanese_challenges:
        "技術的精度と効率性を維持しながら、バグ修正に対するポジティブなマインドセットを作成",
      solutions:
        "Implemented gamification elements and positive reinforcement to reframe bug fixing as a creative problem-solving process",
      japanese_solutions:
        "バグ修正を創造的な問題解決プロセスとして再構築するために、ゲーミフィケーション要素とポジティブ強化を実装",
      results: [
        "40% faster bug resolution time",
        "85% developer satisfaction rate",
        "60% reduction in bug recurrence",
        "Adopted by 10+ development teams",
      ],
      japanese_results: [
        "バグ解決時間40%短縮",
        "85%の開発者満足度",
        "バグ再発率60%削減",
        "10以上の開発チームで採用",
      ],
      images: ["/images/projects/project-7.png"],
      live_url: "https://www.lieverse-liars.jp/",
    },
    {
      id: 8,
      name: "マグノリア･ホワイト",
      japanese_name: "マグノリア･ホワイト",
      category: "Children's Education",
      japanese_category: "開発者ツール",
      status: "Completed",
      japanese_status: "進行中",
      year: "2025",
      duration: "4 months",
      japanese_duration: "4ヶ月",
      description:
        "Tapple is a popular Japanese dating/matching-app by CyberAgent that helps users meet potential romantic partners based on shared hobbies and interests, with safety features like identity verification and 24/7 support.",
      japanese_description:
        "「タップル」は、趣味や関心をきっかけに出会いたい人々をつなげる、サイバーエージェント運営の人気マッチングアプリで、本人確認や24時間365日のサポートなど安心・安全機能が備わっています。",
      technologies: ["Wordpress", "PHP", "MySQL", "AWS", "Nginx", "SSL"],
      features: [
        "Visual bug lifecycle management",
        "Kintsugi-inspired UI design",
        "Seamless team collaboration tools",
        "Advanced bug pattern analysis",
        "Automated testing integration",
        "Real-time performance impact tracking",
      ],
      japanese_features: [
        "視覚的なバグライフサイクル管理",
        "金継ぎをモチーフにしたUIデザイン",
        "シームレスなチームコラボレーションツール",
        "高度なバグパターン分析",
        "自動テスト統合",
        "リアルタイムのパフォーマンス影響追跡",
      ],
      challenges:
        "Creating a positive mindset around bug fixing while maintaining technical accuracy and efficiency",
      japanese_challenges:
        "技術的精度と効率性を維持しながら、バグ修正に対するポジティブなマインドセットを作成",
      solutions:
        "Implemented gamification elements and positive reinforcement to reframe bug fixing as a creative problem-solving process",
      japanese_solutions:
        "バグ修正を創造的な問題解決プロセスとして再構築するために、ゲーミフィケーション要素とポジティブ強化を実装",
      results: [
        "40% faster bug resolution time",
        "85% developer satisfaction rate",
        "60% reduction in bug recurrence",
        "Adopted by 10+ development teams",
      ],
      japanese_results: [
        "バグ解決時間40%短縮",
        "85%の開発者満足度",
        "バグ再発率60%削減",
        "10以上の開発チームで採用",
      ],
      images: ["/images/projects/project-8.png"],
      live_url: "https://tapple.me/",
    },
    {
      id: 9,
      name: "タップル – 恋活･婚活マッチングアプリ【公式】",
      japanese_name: "タップル – 恋活･婚活マッチングアプリ【公式】",
      category: "Children's Education",
      japanese_category: "開発者ツール",
      status: "Completed",
      japanese_status: "進行中",
      year: "2025",
      duration: "4 months",
      japanese_duration: "4ヶ月",
      description:
        "MAGNOLIA WHITE is an import-dress salon in Japan that selects the trendiest bridal gowns from New York, London, Paris, etc., and offers custom coordination for customers’ special moments.",
      japanese_description:
        "MAGNOLIA WHITE（マグノリア・ホワイト）は、ニューヨーク・ロンドン・パリなどの最旬インポートウエディングドレスをセレクトし、人生の特別な日のためにお客様に合ったコーディネートを提案するインポートドレスサロンです。",
      technologies: ["Wordpress", "PHP", "MySQL", "AWS", "Nginx", "SSL"],
      features: [
        "Visual bug lifecycle management",
        "Kintsugi-inspired UI design",
        "Seamless team collaboration tools",
        "Advanced bug pattern analysis",
        "Automated testing integration",
        "Real-time performance impact tracking",
      ],
      japanese_features: [
        "視覚的なバグライフサイクル管理",
        "金継ぎにインスパイアされたUIデザイン",
        "シームレスなチームコラボレーションツール",
        "高度なバグパターン分析",
        "自動テスト統合",
        "リアルタイムのパフォーマンス影響追跡",
      ],
      challenges:
        "Creating a positive mindset around bug fixing while maintaining technical accuracy and efficiency",
      japanese_challenges:
        "技術的精度と効率性を維持しながら、バグ修正に対するポジティブなマインドセットを作成",
      solutions:
        "Implemented gamification elements and positive reinforcement to reframe bug fixing as a creative problem-solving process",
      japanese_solutions:
        "バグ修正を創造的な問題解決プロセスとして再構築するために、ゲーミフィケーション要素とポジティブ強化を実装",
      results: [
        "40% faster bug resolution time",
        "85% developer satisfaction rate",
        "60% reduction in bug recurrence",
        "Adopted by 10+ development teams",
      ],
      japanese_results: [
        "バグ解決時間40%短縮",
        "85%の開発者満足度",
        "バグ再発率60%削減",
        "10以上の開発チームで採用",
      ],
      images: ["/images/projects/project-9.png"],
      live_url: "https://jp.magnolia-white.com/",
    },
  ],
  Pw = [
    {
      name: "E-commerce",
      japanese_name: "ECサイト",
      count: 1,
      description: "Online shopping platforms and digital commerce solutions",
    },
    {
      name: "Productivity",
      japanese_name: "生産性ツール",
      count: 1,
      description: "Tools to enhance workflow and team collaboration",
    },
    {
      name: "Mobile App",
      japanese_name: "モバイルアプリ",
      count: 1,
      description: "Native and cross-platform mobile applications",
    },
    {
      name: "Education",
      japanese_name: "教育",
      count: 1,
      description: "Learning platforms and educational technology",
    },
    {
      name: "Cultural Heritage",
      japanese_name: "文化遺産",
      count: 1,
      description: "Digital preservation and cultural documentation",
    },
    {
      name: "Developer Tools",
      japanese_name: "開発者ツール",
      count: 1,
      description: "Tools and utilities for software development",
    },
  ],
  Tw = {
    total_projects: 6,
    japanese_total_projects: "6",
    completed_projects: 5,
    japanese_completed_projects: "5",
    in_progress: 1,
    japanese_in_progress: "1",
    technologies_used: 25,
    japanese_technologies_used: "25",
    total_users_impacted: "100,000+",
    japanese_total_users_impacted: "10万人以上",
  },
  Ew = {
    section: Sw,
    title: bw,
    japanese_title: Cw,
    projects: Nw,
    project_categories: Pw,
    project_stats: Tw,
  },
  Aw = "skills",
  Lw = "Skills",
  Dw = "スキル",
  Mw = [
    {
      id: "frontend",
      name: "Frontend Development",
      japanese_name: "フロントエンド開発",
      description: "Creating beautiful and responsive user interfaces",
      japanese_description:
        "美しくレスポンシブなユーザーインターフェースの作成",
      icon: "paint-brush",
      color: "#3B82F6",
      skills: [
        {
          name: "React",
          japanese_name: "React",
          level: "Expert",
          japanese_level: "エキスパート",
          years_experience: 4,
          description:
            "Building complex single-page applications with hooks and context",
          japanese_description:
            "フックとコンテキストを使用した複雑なシングルページアプリケーションの構築",
          projects_used: 15,
          certifications: ["React Developer Certification"],
        },
        {
          name: "Vue.js",
          japanese_name: "Vue.js",
          level: "Expert",
          japanese_level: "上級",
          years_experience: 3,
          description: "Progressive framework for building user interfaces",
          japanese_description:
            "ユーザーインターフェース構築のためのプログレッシブフレームワーク",
          projects_used: 8,
          certifications: [],
        },
        {
          name: "TypeScript",
          japanese_name: "TypeScript",
          level: "Expert",
          japanese_level: "エキスパート",
          years_experience: 3,
          description: "Type-safe JavaScript development",
          japanese_description: "型安全なJavaScript開発",
          projects_used: 20,
          certifications: ["TypeScript Fundamentals"],
        },
        {
          name: "Next.js",
          japanese_name: "Next.js",
          level: "Expert",
          japanese_level: "上級",
          years_experience: 2,
          description: "Full-stack React framework with SSR",
          japanese_description: "SSR対応のフルスタックReactフレームワーク",
          projects_used: 5,
          certifications: [],
        },
        {
          name: "Tailwind CSS",
          japanese_name: "Tailwind CSS",
          level: "Expert",
          japanese_level: "エキスパート",
          years_experience: 2,
          description: "Utility-first CSS framework",
          japanese_description: "ユーティリティファーストのCSSフレームワーク",
          projects_used: 12,
          certifications: [],
        },
        {
          name: "Sass/SCSS",
          japanese_name: "Sass/SCSS",
          level: "Expert",
          japanese_level: "上級",
          years_experience: 4,
          description: "CSS preprocessor for scalable styles",
          japanese_description:
            "スケーラブルなスタイルのためのCSSプリプロセッサ",
          projects_used: 18,
          certifications: [],
        },
      ],
    },
    {
      id: "backend",
      name: "Backend Development",
      japanese_name: "バックエンド開発",
      description: "Building robust server-side applications and APIs",
      japanese_description: "堅牢なサーバーサイドアプリケーションとAPIの構築",
      icon: "server",
      color: "#10B981",
      skills: [
        {
          name: "Node.js",
          japanese_name: "Node.js",
          level: "Expert",
          japanese_level: "エキスパート",
          years_experience: 4,
          description: "JavaScript runtime for server-side development",
          japanese_description:
            "サーバーサイド開発のためのJavaScriptランタイム",
          projects_used: 15,
          certifications: ["Node.js Developer Certification"],
        },
        {
          name: "Express.js",
          japanese_name: "Express.js",
          level: "Expert",
          japanese_level: "エキスパート",
          years_experience: 4,
          description: "Web application framework for Node.js",
          japanese_description:
            "Node.jsのためのWebアプリケーションフレームワーク",
          projects_used: 12,
          certifications: [],
        },
        {
          name: "Laravel",
          japanese_name: "Laravel",
          level: "Expert",
          japanese_level: "上級",
          years_experience: 3,
          description: "PHP web application framework",
          japanese_description: "PHP Webアプリケーションフレームワーク",
          projects_used: 8,
          certifications: ["Laravel Developer Certification"],
        },
        {
          name: "Python",
          japanese_name: "Python",
          level: "Advanced",
          japanese_level: "中級",
          years_experience: 2,
          description: "Versatile programming language for web and data",
          japanese_description: "Webとデータのための汎用プログラミング言語",
          projects_used: 5,
          certifications: ["Python Fundamentals"],
        },
        {
          name: "PostgreSQL",
          japanese_name: "PostgreSQL",
          level: "Expert",
          japanese_level: "上級",
          years_experience: 3,
          description: "Advanced open-source relational database",
          japanese_description:
            "高度なオープンソースリレーショナルデータベース",
          projects_used: 10,
          certifications: [],
        },
        {
          name: "MongoDB",
          japanese_name: "MongoDB",
          level: "Advanced",
          japanese_level: "中級",
          years_experience: 2,
          description: "NoSQL document database",
          japanese_description: "NoSQLドキュメントデータベース",
          projects_used: 6,
          certifications: ["MongoDB Basics"],
        },
      ],
    },
    {
      id: "devops",
      name: "DevOps & Cloud",
      japanese_name: "DevOps・クラウド",
      description: "Deployment, monitoring, and infrastructure management",
      japanese_description: "デプロイメント、監視、インフラストラクチャ管理",
      icon: "cloud",
      color: "#F59E0B",
      skills: [
        {
          name: "Docker",
          japanese_name: "Docker",
          level: "Advanced",
          japanese_level: "上級",
          years_experience: 3,
          description: "Containerization platform for applications",
          japanese_description:
            "アプリケーションのためのコンテナ化プラットフォーム",
          projects_used: 12,
          certifications: ["Docker Certified Associate"],
        },
        {
          name: "Kubernetes",
          japanese_name: "Kubernetes",
          level: "Advanced",
          japanese_level: "中級",
          years_experience: 2,
          description: "Container orchestration platform",
          japanese_description: "コンテナオーケストレーションプラットフォーム",
          projects_used: 4,
          certifications: [],
        },
        {
          name: "AWS",
          japanese_name: "AWS",
          level: "Advanced",
          japanese_level: "中級",
          years_experience: 2,
          description: "Amazon Web Services cloud platform",
          japanese_description: "Amazon Web Servicesクラウドプラットフォーム",
          projects_used: 8,
          certifications: ["AWS Cloud Practitioner"],
        },
        {
          name: "CI/CD",
          japanese_name: "CI/CD",
          level: "Intermediate",
          japanese_level: "上級",
          years_experience: 3,
          description: "Continuous Integration and Deployment",
          japanese_description: "継続的インテグレーションとデプロイメント",
          projects_used: 15,
          certifications: [],
        },
        {
          name: "Linux",
          japanese_name: "Linux",
          level: "Advanced",
          japanese_level: "中級",
          years_experience: 3,
          description: "Unix-like operating system administration",
          japanese_description: "Unixライクなオペレーティングシステムの管理",
          projects_used: 10,
          certifications: [],
        },
        {
          name: "Nginx",
          japanese_name: "Nginx",
          level: "Advanced",
          japanese_level: "中級",
          years_experience: 2,
          description: "High-performance web server and reverse proxy",
          japanese_description: "高性能Webサーバーとリバースプロキシ",
          projects_used: 8,
          certifications: [],
        },
      ],
    },
    {
      id: "ai_integrations",
      name: "AI & Integrations",
      japanese_name: "AI・統合",
      description: "Artificial intelligence and third-party integrations",
      japanese_description: "人工知能とサードパーティ統合",
      icon: "brain",
      color: "#8B5CF6",
      skills: [
        {
          name: "OpenAI API",
          japanese_name: "OpenAI API",
          level: "Expert",
          japanese_level: "中級",
          years_experience: 1,
          description: "Integration with GPT models for AI features",
          japanese_description: "AI機能のためのGPTモデルとの統合",
          projects_used: 3,
          certifications: [],
        },
        {
          name: "Machine Learning",
          japanese_name: "機械学習",
          level: "Advanced",
          japanese_level: "初級",
          years_experience: 1,
          description: "Basic machine learning concepts and implementation",
          japanese_description: "基本的な機械学習の概念と実装",
          projects_used: 2,
          certifications: [],
        },
        {
          name: "REST APIs",
          japanese_name: "REST API",
          level: "Expert",
          japanese_level: "エキスパート",
          years_experience: 4,
          description: "Designing and consuming RESTful web services",
          japanese_description: "RESTful Webサービスの設計と利用",
          projects_used: 20,
          certifications: [],
        },
        {
          name: "GraphQL",
          japanese_name: "GraphQL",
          level: "Advanced",
          japanese_level: "中級",
          years_experience: 2,
          description: "Query language for APIs",
          japanese_description: "APIのためのクエリ言語",
          projects_used: 4,
          certifications: [],
        },
        {
          name: "WebSocket",
          japanese_name: "WebSocket",
          level: "Advanced",
          japanese_level: "上級",
          years_experience: 3,
          description: "Real-time communication protocol",
          japanese_description: "リアルタイム通信プロトコル",
          projects_used: 6,
          certifications: [],
        },
        {
          name: "Payment Gateways",
          japanese_name: "決済ゲートウェイ",
          level: "Intermediate",
          japanese_level: "中級",
          years_experience: 2,
          description: "Stripe, PayPal, and other payment integrations",
          japanese_description: "Stripe、PayPal、その他の決済統合",
          projects_used: 5,
          certifications: [],
        },
      ],
    },
  ],
  Rw = [
    {
      level: "Expert",
      japanese_level: "エキスパート",
      description: "7+ years experience, can lead projects and mentor others",
      japanese_description:
        "5年以上の経験、プロジェクトをリードし他者をメンターできる",
      color: "#10B981",
      percentage: 90,
    },
    {
      level: "Advanced",
      japanese_level: "上級",
      description:
        "3-4 years experience, can work independently on complex tasks",
      japanese_description: "3-4年の経験、複雑なタスクを独立して作業できる",
      color: "#3B82F6",
      percentage: 75,
    },
    {
      level: "Intermediate",
      japanese_level: "中級",
      description: "1-2 years experience, can work with guidance on most tasks",
      japanese_description:
        "1-2年の経験、ほとんどのタスクでガイダンスと共に作業できる",
      color: "#F59E0B",
      percentage: 60,
    },
    {
      level: "Beginner",
      japanese_level: "初級",
      description: "Less than 1 year experience, learning and growing",
      japanese_description: "1年未満の経験、学習と成長中",
      color: "#EF4444",
      percentage: 30,
    },
  ],
  Iw = [
    {
      skill: "Rust",
      japanese_skill: "Rust",
      reason: "System programming and performance-critical applications",
      japanese_reason:
        "システムプログラミングとパフォーマンス重視のアプリケーション",
      target_date: "2024 Q3",
    },
    {
      skill: "WebAssembly",
      japanese_skill: "WebAssembly",
      reason: "High-performance web applications",
      japanese_reason: "高性能Webアプリケーション",
      target_date: "2024 Q4",
    },
    {
      skill: "Advanced AI/ML",
      japanese_skill: "高度なAI/ML",
      reason: "Building intelligent applications and automation",
      japanese_reason: "インテリジェントアプリケーションと自動化の構築",
      target_date: "2025 Q1",
    },
  ],
  Vw = [
    {
      name: "AWS Cloud Practitioner",
      japanese_name: "AWSクラウドプラクティショナー",
      issuer: "Amazon Web Services",
      date: "2023-06",
      credential_id: "AWS-CLF-2023-001",
      valid_until: "2026-06",
      description: "Foundational understanding of AWS Cloud concepts",
      japanese_description: "AWSクラウド概念の基礎理解",
    },
    {
      name: "React Developer Certification",
      japanese_name: "React開発者認定",
      issuer: "Meta",
      date: "2023-03",
      credential_id: "META-REACT-2023-001",
      valid_until: "2025-03",
      description: "Advanced React development skills and best practices",
      japanese_description: "高度なReact開発スキルとベストプラクティス",
    },
    {
      name: "Docker Certified Associate",
      japanese_name: "Docker認定アソシエイト",
      issuer: "Docker Inc.",
      date: "2022-11",
      credential_id: "DCA-2022-001",
      valid_until: "2024-11",
      description: "Containerization and orchestration expertise",
      japanese_description: "コンテナ化とオーケストレーションの専門知識",
    },
  ],
  zw = {
    section: Aw,
    title: Lw,
    japanese_title: Dw,
    categories: Mw,
    skill_levels: Rw,
    learning_goals: Iw,
    certifications: Vw,
  },
  Ow = "achievements",
  Fw = "Achievements & Certifications",
  Bw = "実績・資格",
  $w = [
    {
      id: 1,
      title: "Tech Innovation Award 2023",
      japanese_title: "テックイノベーション賞 2023",
      organization: "Japan Software Development Association",
      japanese_organization: "日本ソフトウェア開発協会",
      date: "2023-12",
      category: "Innovation",
      japanese_category: "イノベーション",
      description:
        "Recognized for outstanding contribution to e-commerce platform development with microservices architecture",
      japanese_description:
        "マイクロサービスアーキテクチャを活用したECプラットフォーム開発への優れた貢献を評価",
      project_related: "OceanFlow E-commerce Platform",
      japanese_project_related: "オーシャンフローECプラットフォーム",
      impact: "Platform serves 50,000+ users with 99.9% uptime",
      japanese_impact:
        "プラットフォームは50,000人以上のユーザーに99.9%の稼働率でサービス提供",
      certificate_url: "/certificates/tech-innovation-2023.pdf",
      badge_url: "/badges/tech-innovation-2023.png",
    },
    {
      id: 2,
      title: "Rising Star Developer 2022",
      japanese_title: "ライジングスター開発者 2022",
      organization: "Osaka Tech Community",
      japanese_organization: "東京テックコミュニティ",
      date: "2022-09",
      category: "Recognition",
      japanese_category: "表彰",
      description:
        "Awarded for exceptional growth and contribution to the local developer community",
      japanese_description:
        "地域の開発者コミュニティへの優れた成長と貢献を評価",
      project_related: "Community contributions and open source work",
      japanese_project_related: "コミュニティ貢献とオープンソース活動",
      impact:
        "Mentored 10+ junior developers and contributed to 15+ open source projects",
      japanese_impact:
        "10人以上のジュニア開発者をメンターし、15以上のオープンソースプロジェクトに貢献",
      certificate_url: "/certificates/rising-star-2022.pdf",
      badge_url: "/badges/rising-star-2022.png",
    },
    {
      id: 3,
      title: "Best UI/UX Design 2021",
      japanese_title: "ベストUI/UXデザイン 2021",
      organization: "Japan Web Design Awards",
      japanese_organization: "日本Webデザイン賞",
      date: "2021-11",
      category: "Design",
      japanese_category: "デザイン",
      description:
        "Recognized for innovative design approach in Sakura Weather App combining Japanese aesthetics with modern UX",
      japanese_description:
        "桜天気アプリで日本の美学とモダンなUXを組み合わせた革新的なデザインアプローチを評価",
      project_related: "Sakura Weather App",
      japanese_project_related: "桜天気アプリ",
      impact: "App featured in 'Apps We Love' section with 4.8/5 rating",
      japanese_impact:
        "アプリは「お気に入りアプリ」セクションで紹介され、4.8/5の評価を獲得",
      certificate_url: "/certificates/best-ui-ux-2021.pdf",
      badge_url: "/badges/best-ui-ux-2021.png",
    },
  ],
  Uw = [
    {
      id: 1,
      name: "AWS Solutions Architect Associate",
      japanese_name: "AWSソリューションアーキテクトアソシエイト",
      issuer: "Amazon Web Services",
      japanese_issuer: "Amazon Web Services",
      date_earned: "2023-08",
      expiry_date: "2026-08",
      credential_id: "AWS-SAA-2023-001",
      verification_url: "https://aws.amazon.com/verification/",
      description: "Designing distributed systems on AWS platform",
      japanese_description: "AWSプラットフォームでの分散システム設計",
      skills_covered: [
        "Cloud Architecture",
        "AWS Services",
        "Security",
        "Cost Optimization",
      ],
      japanese_skills_covered: [
        "クラウドアーキテクチャ",
        "AWSサービス",
        "セキュリティ",
        "コスト最適化",
      ],
      certificate_url: "/certificates/aws-saa-2023.pdf",
      badge_url: "/badges/aws-saa-2023.png",
    },
    {
      id: 2,
      name: "React Developer Certification",
      japanese_name: "React開発者認定",
      issuer: "Meta",
      japanese_issuer: "Meta",
      date_earned: "2023-03",
      expiry_date: "2025-03",
      credential_id: "META-REACT-2023-001",
      verification_url: "https://meta.com/verification/",
      description: "Advanced React development skills and best practices",
      japanese_description: "高度なReact開発スキルとベストプラクティス",
      skills_covered: [
        "React Hooks",
        "Context API",
        "Performance Optimization",
        "Testing",
      ],
      japanese_skills_covered: [
        "React Hooks",
        "Context API",
        "パフォーマンス最適化",
        "テスト",
      ],
      certificate_url: "/certificates/meta-react-2023.pdf",
      badge_url: "/badges/meta-react-2023.png",
    },
    {
      id: 3,
      name: "Docker Certified Associate",
      japanese_name: "Docker認定アソシエイト",
      issuer: "Docker Inc.",
      japanese_issuer: "Docker Inc.",
      date_earned: "2022-11",
      expiry_date: "2024-11",
      credential_id: "DCA-2022-001",
      verification_url: "https://docker.com/verification/",
      description: "Containerization and orchestration expertise",
      japanese_description: "コンテナ化とオーケストレーションの専門知識",
      skills_covered: [
        "Docker",
        "Container Security",
        "Multi-stage Builds",
        "Docker Compose",
      ],
      japanese_skills_covered: [
        "Docker",
        "コンテナセキュリティ",
        "マルチステージビルド",
        "Docker Compose",
      ],
      certificate_url: "/certificates/docker-ca-2022.pdf",
      badge_url: "/badges/docker-ca-2022.png",
    },
    {
      id: 4,
      name: "TypeScript Fundamentals",
      japanese_name: "TypeScript基礎",
      issuer: "Microsoft",
      japanese_issuer: "Microsoft",
      date_earned: "2022-06",
      expiry_date: "No expiry",
      credential_id: "MS-TS-2022-001",
      verification_url: "https://microsoft.com/verification/",
      description: "Type-safe JavaScript development",
      japanese_description: "型安全なJavaScript開発",
      skills_covered: ["TypeScript", "Type System", "Interfaces", "Generics"],
      japanese_skills_covered: [
        "TypeScript",
        "型システム",
        "インターフェース",
        "ジェネリクス",
      ],
      certificate_url: "/certificates/typescript-2022.pdf",
      badge_url: "/badges/typescript-2022.png",
    },
    {
      id: 5,
      name: "Laravel Developer Certification",
      japanese_name: "Laravel開発者認定",
      issuer: "Laravel LLC",
      japanese_issuer: "Laravel LLC",
      date_earned: "2021-12",
      expiry_date: "2024-12",
      credential_id: "LARAVEL-2021-001",
      verification_url: "https://laravel.com/verification/",
      description: "PHP web application framework expertise",
      japanese_description: "PHP Webアプリケーションフレームワークの専門知識",
      skills_covered: [
        "Laravel",
        "Eloquent ORM",
        "Blade Templates",
        "Artisan CLI",
      ],
      japanese_skills_covered: [
        "Laravel",
        "Eloquent ORM",
        "Bladeテンプレート",
        "Artisan CLI",
      ],
      certificate_url: "/certificates/laravel-2021.pdf",
      badge_url: "/badges/laravel-2021.png",
    },
  ],
  Ww = [
    {
      id: 1,
      title: "Bridging Japanese Aesthetics with Modern Web Development",
      japanese_title: "日本の美学とモダンWeb開発の架け橋",
      type: "Article",
      japanese_type: "記事",
      publication: "Japan Tech Weekly",
      japanese_publication: "日本テックウィークリー",
      date: "2023-10",
      url: "https://japantechweekly.com/bridging-aesthetics-web-dev",
      description:
        "Exploring how traditional Japanese design principles can enhance modern web applications",
      japanese_description:
        "伝統的な日本のデザイン原則がモダンなWebアプリケーションをどのように向上させるかを探る",
      read_time: "8 min read",
      japanese_read_time: "8分で読める",
      views: 2500,
      likes: 180,
    },
    {
      id: 2,
      title: "Microservices Architecture: Lessons from the Ocean",
      japanese_title: "マイクロサービスアーキテクチャ：海からの教訓",
      type: "Technical Blog",
      japanese_type: "技術ブログ",
      publication: "Dev.to",
      japanese_publication: "Dev.to",
      date: "2023-07",
      url: "https://dev.to/tatsuyakuroda/microservices-ocean-lessons",
      description:
        "Using ocean ecosystem metaphors to explain microservices patterns",
      japanese_description:
        "海洋生態系のメタファーを使用してマイクロサービスパターンを説明",
      read_time: "12 min read",
      japanese_read_time: "12分で読める",
      views: 4200,
      likes: 320,
    },
  ],
  Hw = [
    {
      id: 1,
      title: "The Art of Clean Code in Japanese Culture",
      japanese_title: "日本文化におけるクリーンコードの芸術",
      event: "Osaka Developer Conference 2023",
      japanese_event: "東京開発者カンファレンス 2023",
      date: "2023-09-15",
      location: "Osaka, Japan",
      japanese_location: "東京都",
      type: "Keynote",
      japanese_type: "基調講演",
      duration: "45 minutes",
      japanese_duration: "45分",
      audience_size: 500,
      description:
        "Exploring how Japanese principles of craftsmanship apply to software development",
      japanese_description:
        "日本の職人精神の原則がソフトウェア開発にどのように適用されるかを探る",
      slides_url: "/slides/clean-code-japanese-culture.pdf",
      video_url: "https://youtube.com/watch?v=example",
    },
    {
      id: 2,
      title: "Building Scalable E-commerce with Microservices",
      japanese_title: "マイクロサービスでスケーラブルなECサイトを構築",
      event: "Japan E-commerce Summit 2023",
      japanese_event: "日本ECサミット 2023",
      date: "2023-06-20",
      location: "Osaka, Japan",
      japanese_location: "大阪府",
      type: "Workshop",
      japanese_type: "ワークショップ",
      duration: "2 hours",
      japanese_duration: "2時間",
      audience_size: 80,
      description:
        "Hands-on workshop on implementing microservices for e-commerce platforms",
      japanese_description:
        "ECプラットフォーム向けマイクロサービス実装のハンズオンワークショップ",
      slides_url: "/slides/microservices-ecommerce.pdf",
      video_url: "https://youtube.com/watch?v=example2",
    },
  ],
  Gw = [
    {
      id: 1,
      project: "React Japanese Components",
      japanese_project: "React日本コンポーネント",
      repository: "https://github.com/Ron114/react-japanese-components",
      description:
        "A collection of React components with Japanese cultural themes",
      japanese_description:
        "日本の文化的テーマを持つReactコンポーネントのコレクション",
      stars: 150,
      forks: 25,
      contributors: 8,
      my_contributions: "Lead maintainer and primary contributor",
      japanese_my_contributions: "リードメンテナーと主要貢献者",
      technologies: ["React", "TypeScript", "Storybook"],
    },
    {
      id: 2,
      project: "Ocean Theme UI Kit",
      japanese_project: "オーシャンテーマUIキット",
      repository: "https://github.com/Ron114/ocean-ui-kit",
      description: "Beautiful UI components inspired by ocean aesthetics",
      japanese_description:
        "海洋美学にインスパイアされた美しいUIコンポーネント",
      stars: 89,
      forks: 15,
      contributors: 3,
      my_contributions: "Creator and maintainer",
      japanese_my_contributions: "作成者とメンテナー",
      technologies: ["Vue.js", "Sass", "Webpack"],
    },
  ],
  Kw = {
    total_awards: 3,
    japanese_total_awards: "3",
    total_certifications: 5,
    japanese_total_certifications: "5",
    total_publications: 2,
    japanese_total_publications: "2",
    total_speaking_engagements: 2,
    japanese_total_speaking_engagements: "2",
    open_source_projects: 2,
    japanese_open_source_projects: "2",
    total_github_stars: 239,
    japanese_total_github_stars: "239",
  },
  Jw = {
    section: Ow,
    title: Fw,
    japanese_title: Bw,
    professional_awards: $w,
    certifications: Uw,
    publications: Ww,
    speaking_engagements: Hw,
    open_source_contributions: Gw,
    achievement_stats: Kw,
  },
  Qw = "testimonials",
  qw = "Testimonials",
  Yw = "推薦の言葉",
  Xw = [
    {
      id: 1,
      name: "水谷真夏",
      japanese_name: "水谷真夏",
      position: "Project Manager",
      japanese_position: "Project Manager",
      company: "JLL Japan",
      japanese_company: "JLL Japan",
      relationship: "Project Manager",
      japanese_relationship: "プロジェクトマネージャー",
      duration: "1 year",
      japanese_duration: "2年",
      rating: 5,
      testimonial:
        "Honda Iroban is an exceptional developer who brings both technical excellence and cultural sensitivity to every project. His ability to bridge Japanese business practices with modern development methodologies is truly remarkable. He led our microservices migration and delivered results that exceeded all expectations.",
      japanese_testimonial:
        "達也は技術的卓越性と文化的感受性をすべてのプロジェクトに持ち込む優秀な開発者です。日本のビジネス慣行とモダンな開発手法を結びつける能力は本当に素晴らしいです。マイクロサービス移行をリードし、すべての期待を上回る結果を提供しました。",
      key_qualities: [
        "Lead Developer",
        "Senior Software Engineer",
        "React/Next.js",
      ],
      japanese_key_qualities: [
        "リーダーシップ",
        "技術的卓越性",
        "React/Next.js",
      ],
      project_context: "OceanFlow E-commerce Platform Migration",
      japanese_project_context: "オーシャンフローECプラットフォーム移行",
      photo_url: "/testimonials/2.jpg",
      linkedin_url: "https://www.linkedin.com/in/manatsumizutani/",
      date: "2025-05",
    },
    {
      id: 2,
      name: "Marica Labrou",
      japanese_name: "Marica Labrou",
      position: "DEPA Commercial S.A CEO",
      japanese_position: "DEPA Commercial S.A CEO",
      company: "DEPA Commercial S.A",
      japanese_company: "DEPA Commercial S.A",
      relationship: "CEO",
      japanese_relationship: "CEO",
      duration: "1.5 years",
      japanese_duration: "1.5年",
      rating: 5,
      testimonial:
        "Working with Honda Iroban was a pleasure. His attention to detail and user experience is outstanding. He transformed our client's vision into a beautiful, functional application that exceeded their expectations. His communication skills and ability to explain complex technical concepts in simple terms made collaboration seamless.",
      japanese_testimonial:
        "達也と働くのは楽しい経験でした。彼の細部への注意とユーザーエクスペリエンスは素晴らしいです。クライアントのビジョンを美しく機能的なアプリケーションに変え、期待を上回りました。複雑な技術概念を簡単な言葉で説明するコミュニケーションスキルと能力により、コラボレーションがスムーズでした。",
      key_qualities: ["User Experience", "Communication", "Problem Solving"],
      japanese_key_qualities: [
        "ユーザーエクスペリエンス",
        "コミュニケーション",
        "問題解決",
      ],
      project_context: "ZenTask Project Management Tool",
      japanese_project_context: "禅タスクプロジェクト管理ツール",
      photo_url: "/testimonials/1.jpg",
      linkedin_url: "https://www.linkedin.com/in/maricalabrou/",
      date: "2022-08",
    },
    {
      id: 3,
      name: "ユユアン (ベラ) バイ",
      japanese_name: "ユユアン (ベラ) バイ",
      position: "Project Manager",
      japanese_position: "プロジェクトマネージャー",
      company: "コネクレーン",
      japanese_company: "コネクレーン",
      relationship: "Project Manager",
      japanese_relationship: "プロジェクトマネージャー",
      duration: "1 year",
      japanese_duration: "1年",
      rating: 5,
      testimonial:
        "Honda Iroban was my mentor when I was starting my career, and I can't thank him enough. His patience, knowledge, and teaching ability helped me grow from a junior developer to a confident professional. He taught me not just technical skills, but also the importance of clean code, teamwork, and continuous learning.",
      japanese_testimonial:
        "達也は私のキャリアを始めた時のメンターでした。彼の忍耐力、知識、そして教える能力に感謝してもしきれません。彼は私をジュニア開発者から自信のあるプロフェッショナルに成長させてくれました。技術スキルだけでなく、クリーンコード、チームワーク、継続的学習の重要性も教えてくれました。",
      key_qualities: ["Mentoring", "Patience", "Knowledge Sharing"],
      japanese_key_qualities: ["メンタリング", "忍耐力", "知識共有"],
      project_context: "Frontend Development Training",
      japanese_project_context: "フロントエンド開発トレーニング",
      photo_url: "/testimonials/4.jpg",
      linkedin_url: "https://www.linkedin.com/in/yuyuan-bai-91427524a/",
      date: "2021-12",
    },
    {
      id: 4,
      name: "永見俊成",
      japanese_name: "永見俊成",
      position: "Project Manager",
      japanese_position: "プロジェクトマネージャー",
      company: "トルーナ",
      japanese_company: "トルーナ",
      relationship: "Client",
      japanese_relationship: "プロジェクトマネージャー",
      duration: "3 months",
      japanese_duration: "3ヶ月",
      rating: 5,
      testimonial:
        "Honda Iroban created the most beautiful weather app I've ever seen. His understanding of Japanese aesthetics and attention to cultural details is incredible. The app not only works perfectly but also tells a story through its design. Users love it, and it has become our most successful mobile application.",
      japanese_testimonial:
        "達也は私が今まで見た中で最も美しい天気アプリを作りました。彼の日本の美学への理解と文化的詳細への注意は信じられないほどです。アプリは完璧に動作するだけでなく、デザインを通じてストーリーを語ります。ユーザーはそれを愛し、私たちの最も成功したモバイルアプリケーションになりました。",
      key_qualities: [
        "Design Excellence",
        "Cultural Understanding",
        "User Focus",
      ],
      japanese_key_qualities: ["デザイン卓越性", "文化的理解", "ユーザー重視"],
      project_context: "Sakura Weather App Development",
      japanese_project_context: "桜天気アプリ開発",
      photo_url: "/testimonials/3.jpg",
      linkedin_url: "https://www.linkedin.com/in/toshinari-nagami-678ba627/",
      date: "2022-03",
    },
    {
      id: 5,
      name: "関治之",
      japanese_name: "関治之",
      position: "Lead Developer",
      japanese_position: "リード開発者",
      company: "デジタル庁/ Digital Agency",
      japanese_company: "デジタル庁/ Digital Agency",
      relationship: "Collaborator",
      japanese_relationship: "協力者",
      duration: "8 months",
      japanese_duration: "8ヶ月",
      rating: 5,
      testimonial:
        "Honda Iroban's innovative approach to combining Japanese cultural metaphors with programming education is brilliant. He created a unique learning experience that makes complex concepts accessible and engaging. His creativity and technical skills make him an invaluable team member.",
      japanese_testimonial:
        "達也の日本の文化的メタファーとプログラミング教育を組み合わせる革新的なアプローチは素晴らしいです。彼は複雑な概念をアクセス可能で魅力的にするユニークな学習体験を作りました。彼の創造性と技術スキルは彼を貴重なチームメンバーにしています。",
      key_qualities: ["Innovation", "Creativity", "Collaboration"],
      japanese_key_qualities: ["イノベーション", "創造性", "教育デザイン"],
      project_context: "Digital Agency",
      japanese_project_context: "デジタル庁/ Digital Agency",
      photo_url: "/testimonials/5.jpg",
      linkedin_url: "https://www.linkedin.com/in/halsk/",
      date: "2024-01",
    },
    {
      id: 6,
      name: "Dennis Ilic",
      japanese_name: "Dennis Ilic",
      position: "Electrifying Japan and APAC",
      japanese_position: "Electrifying Japan and APAC",
      company: "eMotion Fleet",
      japanese_company: "東京国立博物館",
      relationship: "Client",
      japanese_relationship: "クライアント",
      duration: "5 months",
      japanese_duration: "5ヶ月",
      rating: 5,
      testimonial:
        "The Washi Paper Digital Archive project was a masterpiece. Honda Iroban's respect for traditional Japanese culture and his technical expertise created a perfect bridge between heritage and technology. The 3D scanning technology he developed captures the delicate texture of traditional paper like nothing I've seen before.",
      japanese_testimonial:
        "和紙デジタルアーカイブプロジェクトは傑作でした。達也の日本の伝統文化への敬意と技術的専門知識が、遺産とテクノロジーの完璧な架け橋を作りました。彼が開発した3Dスキャニング技術は、私が今まで見たことのない方法で伝統的な紙の繊細な質感を捉えています。",
      key_qualities: [
        "Cultural Respect",
        "Technical Innovation",
        "Heritage Preservation",
      ],
      japanese_key_qualities: ["文化的敬意", "技術革新", "遺産保存"],
      project_context: "Washi Paper Digital Archive",
      japanese_project_context: "和紙デジタルアーカイブ",
      photo_url: "/testimonials/6.jpg",
      linkedin_url: "https://www.linkedin.com/in/dennis-ilic-714140115/",
      date: "2021-09",
    },
  ],
  Zw = {
    total_testimonials: 6,
    japanese_total_testimonials: "6",
    average_rating: 5,
    japanese_average_rating: "5.0",
    client_testimonials: 2,
    japanese_client_testimonials: "2",
    colleague_testimonials: 3,
    japanese_colleague_testimonials: "3",
    mentee_testimonials: 1,
    japanese_mentee_testimonials: "1",
  },
  e2 = [
    {
      category: "Leadership",
      japanese_category: "リーダーシップ",
      count: 2,
      description:
        "Testimonials highlighting leadership and mentoring abilities",
    },
    {
      category: "Technical Excellence",
      japanese_category: "技術的卓越性",
      count: 4,
      description:
        "Testimonials emphasizing technical skills and problem-solving",
    },
    {
      category: "Cultural Understanding",
      japanese_category: "文化的理解",
      count: 3,
      description:
        "Testimonials about cultural sensitivity and bridge-building",
    },
    {
      category: "User Experience",
      japanese_category: "ユーザーエクスペリエンス",
      count: 2,
      description: "Testimonials focusing on UX design and user satisfaction",
    },
  ],
  t2 = [
    {
      id: 1,
      name: "Yuki Tanaka",
      japanese_name: "田中ゆき",
      position: "CTO, TechFlow Solutions",
      japanese_position: "CTO、テックフローソリューションズ",
      video_url: "/videos/testimonials/yuki-tanaka.mp4",
      thumbnail_url: "/images/testimonials/yuki-tanaka-video-thumb.jpg",
      duration: "2:30",
      japanese_duration: "2分30秒",
      description: "Leadership and technical excellence testimonial",
      japanese_description: "リーダーシップと技術的卓越性の推薦",
    },
  ],
  n2 = {
    section: Qw,
    title: qw,
    japanese_title: Yw,
    testimonials: Xw,
    testimonial_stats: Zw,
    testimonial_categories: e2,
    video_testimonials: t2,
  },
  i2 = "blog",
  r2 = "Blog & Insights",
  s2 = "ブログ・記事",
  a2 = "Thoughts on software engineering, Japanese IT culture, and coding tips",
  o2 =
    "ソフトウェアエンジニアリング、日本のIT文化、コーディングのコツについての考察",
  l2 = [
    {
      id: 1,
      title: "The Art of Clean Code: Lessons from Japanese Craftsmanship",
      japanese_title: "クリーンコードの芸術：日本の職人精神からの教訓",
      slug: "clean-code-japanese-craftsmanship",
      excerpt:
        "Exploring how traditional Japanese principles of craftsmanship can transform our approach to writing software. From the concept of 'monozukuri' to the pursuit of perfection in every line of code.",
      japanese_excerpt:
        "伝統的な日本の職人精神の原則が、ソフトウェアの書き方へのアプローチをどのように変革できるかを探る。「ものづくり」の概念から、コードの一行一行における完璧の追求まで。",
      content: `In the world of software development, we often rush to deliver features and meet deadlines, sometimes at the expense of code quality. But what if we approached coding with the same reverence and attention to detail that Japanese craftsmen bring to their work?

**The Philosophy of Monozukuri**

Monozukuri (ものづくり) literally means 'making things,' but it encompasses much more than simple manufacturing. It's about the spirit of creation, the pursuit of excellence, and the deep respect for the craft itself. When we apply this philosophy to software development, we begin to see code not just as a means to an end, but as a craft worthy of our best efforts.

**The Seven Principles of Clean Code**

1. **Kanso (簡素) - Simplicity**: Remove unnecessary complexity
2. **Fukinsei (不均整) - Asymmetry**: Embrace natural, organic code structure
3. **Shibui (渋い) - Understated elegance**: Let the code speak for itself
4. **Shizen (自然) - Naturalness**: Write code that feels natural to read
5. **Yugen (幽玄) - Subtle profundity**: Deep understanding without showing off
6. **Datsuzoku (脱俗) - Freedom from habit**: Break free from conventional patterns
7. **Seijaku (静寂) - Tranquility**: Create peaceful, maintainable code

**Practical Applications**

- **Function Naming**: Choose names that reveal intent, like a master craftsman's signature
- **Code Organization**: Structure code like a well-designed Japanese garden
- **Error Handling**: Approach bugs with the patience of a Zen master
- **Refactoring**: Treat code improvement as an ongoing meditation

By embracing these principles, we can create software that not only works but also brings joy to those who maintain and extend it.`,
      japanese_content: `ソフトウェア開発の世界では、しばしば機能の提供と締切の達成に急いで、時にはコードの品質を犠牲にすることがあります。しかし、日本の職人が仕事に持つ敬意と細部への注意と同じアプローチでコーディングに取り組んだらどうでしょうか？

**ものづくりの哲学**

ものづくりは文字通り「ものを作る」ことを意味しますが、単純な製造以上のものを包含しています。それは創造の精神、卓越性の追求、そして工芸そのものへの深い敬意についてです。この哲学をソフトウェア開発に適用すると、コードを単なる手段ではなく、私たちの最善の努力に値する工芸として見るようになります。

**クリーンコードの七つの原則**

1. **簡素 - シンプルさ**: 不要な複雑さを取り除く
2. **不均整 - 非対称**: 自然で有機的なコード構造を受け入れる
3. **渋い - 控えめな優雅さ**: コードに語らせる
4. **自然 - 自然さ**: 読んで自然に感じるコードを書く
5. **幽玄 - 微妙な深遠さ**: 見せびらかさない深い理解
6. **脱俗 - 習慣からの自由**: 従来のパターンから脱却する
7. **静寂 - 静寂**: 平和で保守可能なコードを作る

**実践的な応用**

- **関数命名**: 職人の署名のように意図を明らかにする名前を選ぶ
- **コード組織**: よく設計された日本庭園のようにコードを構造化する
- **エラーハンドリング**: 禅の師匠の忍耐力でバグにアプローチする
- **リファクタリング**: コード改善を継続的な瞑想として扱う

これらの原則を受け入れることで、動作するだけでなく、それを保守し拡張する人々に喜びをもたらすソフトウェアを作ることができます。`,
      author: "Honda Iroban",
      japanese_author: "たつや くろだ",
      date: "2024-01-15",
      japanese_date: "2024年1月15日",
      read_time: "8 min read",
      japanese_read_time: "8分で読める",
      category: "Philosophy",
      japanese_category: "哲学",
      tags: [
        "Clean Code",
        "Japanese Culture",
        "Software Craftsmanship",
        "Philosophy",
      ],
      japanese_tags: [
        "クリーンコード",
        "日本文化",
        "ソフトウェアクラフトマンシップ",
        "哲学",
      ],
      featured_image: "/images/blog/clean-code-japanese-craftsmanship.jpg",
      japanese_featured_image:
        "/images/blog/clean-code-japanese-craftsmanship-jp.jpg",
      views: 1250,
      likes: 89,
      comments: 12,
      status: "published",
      japanese_status: "公開済み",
      seo_title:
        "Clean Code Japanese Craftsmanship - Software Development Philosophy",
      japanese_seo_title: "クリーンコード日本職人精神 - ソフトウェア開発哲学",
      meta_description:
        "Learn how Japanese craftsmanship principles can improve your code quality and development approach",
      japanese_meta_description:
        "日本の職人精神の原則がコード品質と開発アプローチをどのように改善できるかを学ぶ",
    },
    {
      id: 2,
      title: "Building Microservices: Lessons from Ocean Ecosystems",
      japanese_title: "マイクロサービス構築：海洋生態系からの教訓",
      slug: "microservices-ocean-ecosystems",
      excerpt:
        "Just as ocean ecosystems thrive through interconnected yet independent organisms, microservices architecture can benefit from understanding natural patterns of resilience and communication.",
      japanese_excerpt:
        "海洋生態系が相互接続されながらも独立した生物を通じて繁栄するように、マイクロサービスアーキテクチャは回復力とコミュニケーションの自然なパターンの理解から利益を得ることができます。",
      content: `The ocean is a complex, interconnected system where countless organisms coexist, each with their own role, yet all contributing to the greater ecosystem. This natural harmony offers profound insights for building resilient microservices architectures.

**The Ocean's Architecture Principles**

**1. Specialized Organisms (Services)**
Just as each marine species has evolved for specific functions, microservices should be designed with single responsibilities. A coral reef's cleaning fish has one job: keeping the reef healthy. Similarly, a user authentication service should only handle authentication.

**2. Natural Communication (APIs)**
Marine life communicates through various signals - chemical, electrical, and visual. Our microservices should communicate through well-defined, stable APIs that allow for evolution without breaking the ecosystem.

**3. Resilience Through Redundancy**
When one species faces challenges, others can often compensate. In microservices, we implement circuit breakers, retries, and fallback mechanisms to maintain system stability.

**4. Environmental Adaptation**
Ocean currents change, temperatures fluctuate, and species adapt. Our microservices must be designed to handle changing loads, failures, and requirements gracefully.

**5. Ecosystem Health Monitoring**
Marine biologists monitor water quality, species health, and environmental changes. Similarly, we need comprehensive monitoring and observability in our microservices architecture.

**Practical Implementation**

- **Service Mesh**: Like the ocean's communication network
- **Circuit Breakers**: Natural defense mechanisms
- **Load Balancing**: Ocean current distribution
- **Health Checks**: Ecosystem monitoring
- **Graceful Degradation**: Natural adaptation strategies

By studying how nature has solved complex distributed systems problems over millions of years, we can build more robust and maintainable software architectures.`,
      japanese_content: `海は、無数の生物が共存する複雑で相互接続されたシステムであり、それぞれが独自の役割を持ちながら、より大きな生態系に貢献しています。この自然の調和は、回復力のあるマイクロサービスアーキテクチャの構築に深い洞察を提供します。

**海洋のアーキテクチャ原則**

**1. 専門化された生物（サービス）**
各海洋種が特定の機能のために進化したように、マイクロサービスは単一の責任を持つように設計されるべきです。サンゴ礁の掃除魚には一つの仕事があります：サンゴ礁を健康に保つことです。同様に、ユーザー認証サービスは認証のみを処理すべきです。

**2. 自然なコミュニケーション（API）**
海洋生物は様々な信号（化学的、電気的、視覚的）を通じてコミュニケーションを取ります。私たちのマイクロサービスは、生態系を破壊することなく進化を可能にする、明確に定義された安定したAPIを通じてコミュニケーションを取るべきです。

**3. 冗長性による回復力**
一つの種が課題に直面したとき、他の種がしばしば補償できます。マイクロサービスでは、システムの安定性を維持するためにサーキットブレーカー、リトライ、フォールバックメカニズムを実装します。

**4. 環境適応**
海流は変化し、温度は変動し、種は適応します。私たちのマイクロサービスは、変化する負荷、障害、要件を優雅に処理するように設計されなければなりません。

**5. 生態系健康監視**
海洋生物学者は水質、種の健康、環境変化を監視します。同様に、マイクロサービスアーキテクチャでは包括的な監視と観察可能性が必要です。

**実践的な実装**

- **サービスメッシュ**: 海洋のコミュニケーションネットワークのように
- **サーキットブレーカー**: 自然の防御メカニズム
- **ロードバランシング**: 海流の分布
- **ヘルスチェック**: 生態系監視
- **グレースフルデグラデーション**: 自然適応戦略

自然が何百万年にもわたって複雑な分散システムの問題をどのように解決してきたかを研究することで、より堅牢で保守可能なソフトウェアアーキテクチャを構築できます。`,
      author: "Honda Iroban",
      japanese_author: "たつや くろだ",
      date: "2024-01-08",
      japanese_date: "2024年1月8日",
      read_time: "12 min read",
      japanese_read_time: "12分で読める",
      category: "Architecture",
      japanese_category: "アーキテクチャ",
      tags: ["Microservices", "Architecture", "Nature", "Resilience"],
      japanese_tags: ["マイクロサービス", "アーキテクチャ", "自然", "回復力"],
      featured_image: "/images/blog/microservices-ocean-ecosystems.jpg",
      japanese_featured_image:
        "/images/blog/microservices-ocean-ecosystems-jp.jpg",
      views: 2100,
      likes: 156,
      comments: 23,
      status: "published",
      japanese_status: "公開済み",
      seo_title:
        "Microservices Ocean Ecosystems - Natural Architecture Patterns",
      japanese_seo_title:
        "マイクロサービス海洋生態系 - 自然アーキテクチャパターン",
      meta_description:
        "Discover how ocean ecosystems can inspire better microservices architecture design",
      japanese_meta_description:
        "海洋生態系がより良いマイクロサービスアーキテクチャ設計にどのようにインスピレーションを与えるかを発見する",
    },
    {
      id: 3,
      title: "The Zen of React: Mindful Component Development",
      japanese_title: "Reactの禅：マインドフルなコンポーネント開発",
      slug: "zen-react-mindful-components",
      excerpt:
        "Applying Zen principles to React development can lead to more maintainable, elegant, and peaceful code. Learn how to approach component design with mindfulness and simplicity.",
      japanese_excerpt:
        "Zenの原則をReact開発に適用することで、より保守可能で優雅で平和なコードにつながります。マインドフルネスとシンプルさでコンポーネント設計にアプローチする方法を学びましょう。",
      content: `In the fast-paced world of React development, it's easy to get caught up in the latest trends and complex patterns. But sometimes, the most profound solutions come from stepping back and applying timeless principles of mindfulness and simplicity.

**The Zen Approach to React**

**1. One Component, One Purpose (一意専念)**
Just as a Zen master focuses on one task at a time, each React component should have a single, clear responsibility. Avoid the temptation to create 'god components' that do everything.

\`\`\`jsx
// ❌ Too many responsibilities
function UserDashboard({ user, posts, comments, settings }) {
  // Handles user display, posts, comments, and settings
}

// ✅ Single responsibility
function UserProfile({ user }) {
  return <div>{user.name}</div>;
}
\`\`\`

**2. Embrace Impermanence (無常)**
React components are ephemeral by nature. They mount, update, and unmount. Accept this impermanence and design for it. Use useEffect cleanup functions and avoid holding onto unnecessary state.

**3. The Middle Way (中道)**
Find balance between over-engineering and under-engineering. Don't abstract too early, but don't repeat yourself either. Let your components evolve naturally.

**4. Present Moment Awareness (今ここ)**
Focus on the current state of your component. Don't worry about future requirements that might never come. Build for today's needs with tomorrow's flexibility in mind.

**5. Simplicity in Complexity (簡素)**
Complex problems often have simple solutions. Before reaching for external libraries, ask: 'Can I solve this with built-in React features?'

**Practical Zen Patterns**

- **Composition over Configuration**: Let components compose naturally
- **Props as Contracts**: Clear, minimal interfaces
- **State as Truth**: Single source of truth for each concern
- **Effects as Side Effects**: Keep side effects contained and predictable

**The Mindful Development Process**

1. **Breathe**: Take a moment before coding
2. **Observe**: Understand the problem deeply
3. **Focus**: Work on one component at a time
4. **Reflect**: Review your code with fresh eyes
5. **Release**: Let go of perfectionism

Remember: The best React code is not the most clever, but the most clear and maintainable.`,
      japanese_content: `React開発の高速な世界では、最新のトレンドや複雑なパターンに巻き込まれがちです。しかし、時には最も深遠な解決策は、一歩下がってマインドフルネスとシンプルさの永遠の原則を適用することから生まれます。

**Reactへの禅アプローチ**

**1. 一つのコンポーネント、一つの目的（一意専念）**
禅の師匠が一度に一つのタスクに集中するように、各Reactコンポーネントは単一の明確な責任を持つべきです。すべてを行う「神コンポーネント」を作る誘惑を避けましょう。

\`\`\`jsx
// ❌ 責任が多すぎる
function UserDashboard({ user, posts, comments, settings }) {
  // ユーザー表示、投稿、コメント、設定を処理
}

// ✅ 単一責任
function UserProfile({ user }) {
  return <div>{user.name}</div>;
}
\`\`\`

**2. 無常を受け入れる**
Reactコンポーネントは本質的に一時的です。マウント、更新、アンマウントします。この無常を受け入れ、それに合わせて設計しましょう。useEffectのクリーンアップ関数を使用し、不要な状態を保持しないようにしましょう。

**3. 中道**
過度のエンジニアリングとエンジニアリング不足の間のバランスを見つけましょう。早すぎる抽象化は避けますが、繰り返しも避けましょう。コンポーネントが自然に進化するようにしましょう。

**4. 今ここへの意識**
コンポーネントの現在の状態に集中しましょう。来るかもしれない将来の要件を心配しないでください。明日の柔軟性を念頭に置いて、今日のニーズのために構築しましょう。

**5. 複雑さの中のシンプルさ（簡素）**
複雑な問題にはしばしばシンプルな解決策があります。外部ライブラリに手を伸ばす前に、自問しましょう：「これをReactの組み込み機能で解決できますか？」

**実践的な禅パターン**

- **設定より合成**: コンポーネントが自然に合成されるようにする
- **プロパティを契約として**: 明確で最小限のインターフェース
- **状態を真実として**: 各関心事の単一の真実の源
- **エフェクトを副作用として**: 副作用を封じ込め、予測可能にする

**マインドフルな開発プロセス**

1. **呼吸**: コーディング前に一呼吸
2. **観察**: 問題を深く理解する
3. **集中**: 一度に一つのコンポーネントに取り組む
4. **反省**: 新しい目でコードをレビューする
5. **解放**: 完璧主義を手放す

覚えておいてください：最高のReactコードは最も巧妙なものではなく、最も明確で保守可能なものです。`,
      author: "Honda Iroban",
      japanese_author: "たつや くろだ",
      date: "2023-12-20",
      japanese_date: "2023年12月20日",
      read_time: "10 min read",
      japanese_read_time: "10分で読める",
      category: "Frontend",
      japanese_category: "フロントエンド",
      tags: ["React", "Zen", "Mindfulness", "Component Design"],
      japanese_tags: ["React", "禅", "マインドフルネス", "コンポーネント設計"],
      featured_image: "/images/blog/zen-react-mindful-components.jpg",
      japanese_featured_image:
        "/images/blog/zen-react-mindful-components-jp.jpg",
      views: 1800,
      likes: 134,
      comments: 18,
      status: "published",
      japanese_status: "公開済み",
      seo_title: "Zen React Mindful Components - Peaceful Development",
      japanese_seo_title: "Reactの禅マインドフルコンポーネント - 平和な開発",
      meta_description:
        "Learn how Zen principles can improve your React development approach",
      japanese_meta_description:
        "Zenの原則がReact開発アプローチをどのように改善できるかを学ぶ",
    },
  ],
  c2 = [
    {
      id: "philosophy",
      name: "Philosophy",
      japanese_name: "哲学",
      description: "Thoughts on software development philosophy and principles",
      japanese_description: "ソフトウェア開発の哲学と原則についての考察",
      post_count: 1,
      color: "#8B5CF6",
    },
    {
      id: "architecture",
      name: "Architecture",
      japanese_name: "アーキテクチャ",
      description: "System design and architectural patterns",
      japanese_description: "システム設計とアーキテクチャパターン",
      post_count: 1,
      color: "#3B82F6",
    },
    {
      id: "frontend",
      name: "Frontend",
      japanese_name: "フロントエンド",
      description: "Frontend development techniques and best practices",
      japanese_description: "フロントエンド開発技術とベストプラクティス",
      post_count: 1,
      color: "#10B981",
    },
    {
      id: "culture",
      name: "Culture",
      japanese_name: "文化",
      description: "Japanese IT culture and workplace insights",
      japanese_description: "日本のIT文化と職場の洞察",
      post_count: 0,
      color: "#F59E0B",
    },
    {
      id: "tutorials",
      name: "Tutorials",
      japanese_name: "チュートリアル",
      description: "Step-by-step coding tutorials and guides",
      japanese_description:
        "ステップバイステップのコーディングチュートリアルとガイド",
      post_count: 0,
      color: "#EF4444",
    },
  ],
  u2 = [
    {
      tag: "Clean Code",
      japanese_tag: "クリーンコード",
      count: 1,
      color: "#10B981",
    },
    {
      tag: "Japanese Culture",
      japanese_tag: "日本文化",
      count: 1,
      color: "#F59E0B",
    },
    {
      tag: "Microservices",
      japanese_tag: "マイクロサービス",
      count: 1,
      color: "#3B82F6",
    },
    { tag: "React", japanese_tag: "React", count: 1, color: "#61DAFB" },
    {
      tag: "Architecture",
      japanese_tag: "アーキテクチャ",
      count: 1,
      color: "#8B5CF6",
    },
  ],
  d2 = {
    total_posts: 3,
    japanese_total_posts: "3",
    total_views: 5150,
    japanese_total_views: "5,150",
    total_likes: 379,
    japanese_total_likes: "379",
    total_comments: 53,
    japanese_total_comments: "53",
    average_read_time: "10 min",
    japanese_average_read_time: "10分",
    subscribers: 1250,
    japanese_subscribers: "1,250",
  },
  p2 = {
    title: "Ocean Waves Newsletter",
    japanese_title: "オーシャンウェーブニュースレター",
    description:
      "Monthly insights on software development, Japanese culture, and the intersection of technology and tradition",
    japanese_description:
      "ソフトウェア開発、日本文化、テクノロジーと伝統の交差点についての月次洞察",
    subscribers: 1250,
    japanese_subscribers: "1,250",
    signup_url: "/newsletter/signup",
    japanese_signup_url: "/newsletter/signup-jp",
  },
  f2 = {
    url: "/blog/rss.xml",
    japanese_url: "/blog/rss-jp.xml",
    description: "RSS feed for latest blog posts",
    japanese_description: "最新のブログ投稿のRSSフィード",
  },
  m2 = {
    section: i2,
    title: r2,
    japanese_title: s2,
    description: a2,
    japanese_description: o2,
    recent_posts: l2,
    categories: c2,
    popular_tags: u2,
    blog_stats: d2,
    newsletter: p2,
    rss_feed: f2,
  },
  h2 = "gallery",
  g2 = "Gallery",
  v2 = "ギャラリー",
  y2 =
    "Ocean-themed and Japan-inspired photography capturing the beauty of nature and culture",
  x2 = "自然と文化の美しさを捉えた海洋テーマと日本インスパイアの写真",
  j2 = [
    {
      id: "ocean",
      name: "Ocean Photography",
      japanese_name: "海洋写真",
      description: "Capturing the ever-changing moods and colors of the ocean",
      japanese_description: "海の常に変化する気分と色を捉える",
      icon: "waves",
      color: "#0EA5E9",
      photo_count: 12,
    },
    {
      id: "japan",
      name: "Japan Culture",
      japanese_name: "日本文化",
      description:
        "Traditional Japanese architecture, gardens, and cultural moments",
      japanese_description: "伝統的な日本の建築、庭園、文化的瞬間",
      icon: "temple",
      color: "#DC2626",
      photo_count: 8,
    },
    {
      id: "seasons",
      name: "Four Seasons",
      japanese_name: "四季",
      description: "The beauty of Japan's four distinct seasons",
      japanese_description: "日本の四つの異なる季節の美しさ",
      icon: "leaf",
      color: "#16A34A",
      photo_count: 16,
    },
    {
      id: "urban",
      name: "Urban Japan",
      japanese_name: "都市日本",
      description: "Modern Japanese cities and their unique character",
      japanese_description: "現代の日本の都市とその独特の特徴",
      icon: "building",
      color: "#7C3AED",
      photo_count: 6,
    },
  ],
  _2 = [
    {
      id: 1,
      title: "Deep Blue Serenity",
      japanese_title: "深い青の静寂",
      category: "ocean",
      description:
        "The calm before the storm - a moment of perfect stillness in the Pacific Ocean",
      japanese_description: "嵐の前の静寂 - 太平洋での完璧な静寂の瞬間",
      image_url: "/gallery-placeholder.svg",
      japanese_image_url: "/gallery-placeholder.svg",
      thumbnail_url: "/gallery-placeholder.svg",
      location: "Shizuoka Prefecture, Japan",
      japanese_location: "静岡県、日本",
      date_taken: "2023-08-15",
      japanese_date_taken: "2023年8月15日",
      camera: "Canon EOS R5",
      lens: "RF 24-70mm f/2.8L IS USM",
      settings: "f/8, 1/125s, ISO 100",
      tags: ["ocean", "serenity", "blue", "calm", "pacific"],
      japanese_tags: ["海", "静寂", "青", "穏やか", "太平洋"],
      featured: !0,
      likes: 245,
      views: 1200,
    },
    {
      id: 2,
      title: "Cherry Blossom Waves",
      japanese_title: "桜の波",
      category: "seasons",
      description: "Sakura petals dancing in the wind like ocean waves",
      japanese_description: "海の波のように風に舞う桜の花びら",
      image_url: "/gallery-placeholder.svg",
      japanese_image_url: "/gallery-placeholder.svg",
      thumbnail_url: "/gallery-placeholder.svg",
      location: "Ueno Park, Osaka",
      japanese_location: "上野公園、東京",
      date_taken: "2023-04-05",
      japanese_date_taken: "2023年4月5日",
      camera: "Sony A7R IV",
      lens: "FE 85mm f/1.4 GM",
      settings: "f/2.8, 1/500s, ISO 200",
      tags: ["sakura", "spring", "petals", "wind", "beauty"],
      japanese_tags: ["桜", "春", "花びら", "風", "美しさ"],
      featured: !0,
      likes: 312,
      views: 1800,
    },
    {
      id: 3,
      title: "Temple in Mist",
      japanese_title: "霧の中の寺院",
      category: "japan",
      description: "Ancient temple emerging from morning mist like a dream",
      japanese_description: "夢のように朝霧から現れる古代寺院",
      image_url: "/gallery-placeholder.svg",
      japanese_image_url: "/gallery-placeholder.svg",
      thumbnail_url: "/gallery-placeholder.svg",
      location: "Kiyomizu-dera, Kyoto",
      japanese_location: "清水寺、京都",
      date_taken: "2023-11-20",
      japanese_date_taken: "2023年11月20日",
      camera: "Fujifilm X-T4",
      lens: "XF 16-55mm f/2.8 R LM WR",
      settings: "f/5.6, 1/60s, ISO 400",
      tags: ["temple", "mist", "mystery", "tradition", "kyoto"],
      japanese_tags: ["寺院", "霧", "神秘", "伝統", "京都"],
      featured: !0,
      likes: 189,
      views: 950,
    },
  ],
  w2 = [
    {
      id: 4,
      title: "Stormy Depths",
      japanese_title: "嵐の深み",
      category: "ocean",
      description: "Powerful waves crashing against the rocky coast",
      japanese_description: "岩の多い海岸に打ち寄せる力強い波",
      image_url: "/gallery-placeholder.svg",
      thumbnail_url: "/gallery-placeholder.svg",
      location: "Izu Peninsula, Japan",
      japanese_location: "伊豆半島、日本",
      date_taken: "2023-12-10",
      japanese_date_taken: "2023年12月10日",
      camera: "Canon EOS R5",
      lens: "RF 70-200mm f/2.8L IS USM",
      settings: "f/11, 1/250s, ISO 400",
      tags: ["ocean", "storm", "waves", "power", "drama"],
      japanese_tags: ["海", "嵐", "波", "力", "ドラマ"],
      featured: !1,
      likes: 156,
      views: 780,
    },
    {
      id: 5,
      title: "Autumn Leaves Reflection",
      japanese_title: "紅葉の反射",
      category: "seasons",
      description: "Crimson maple leaves reflected in a tranquil pond",
      japanese_description: "静かな池に映る深紅の紅葉",
      image_url: "/gallery-placeholder.svg",
      thumbnail_url: "/gallery-placeholder.svg",
      location: "Rikugien Garden, Osaka",
      japanese_location: "六義園、東京",
      date_taken: "2023-11-15",
      japanese_date_taken: "2023年11月15日",
      camera: "Sony A7R IV",
      lens: "FE 24-70mm f/2.8 GM",
      settings: "f/8, 1/125s, ISO 100",
      tags: ["autumn", "leaves", "reflection", "pond", "crimson"],
      japanese_tags: ["秋", "葉", "反射", "池", "深紅"],
      featured: !1,
      likes: 203,
      views: 1100,
    },
    {
      id: 6,
      title: "Osaka Night Lights",
      japanese_title: "東京の夜の光",
      category: "urban",
      description: "Neon lights reflecting on wet streets after rain",
      japanese_description: "雨後の濡れた道路に映るネオンライト",
      image_url: "/gallery-placeholder.svg",
      thumbnail_url: "/gallery-placeholder.svg",
      location: "Shibuya, Osaka",
      japanese_location: "渋谷、東京",
      date_taken: "2023-10-28",
      japanese_date_taken: "2023年10月28日",
      camera: "Fujifilm X-T4",
      lens: "XF 23mm f/1.4 R LM WR",
      settings: "f/2.8, 1/30s, ISO 1600",
      tags: ["osaka", "night", "neon", "reflection", "urban"],
      japanese_tags: ["東京", "夜", "ネオン", "反射", "都市"],
      featured: !1,
      likes: 178,
      views: 920,
    },
  ],
  k2 = [
    {
      id: 1,
      name: "Ocean Moods",
      japanese_name: "海の気分",
      description:
        "A collection capturing the ever-changing personality of the ocean",
      japanese_description: "海の常に変化する個性を捉えたコレクション",
      cover_photo: "/images/gallery/collections/ocean-moods-cover.jpg",
      japanese_cover_photo:
        "/images/gallery/collections/ocean-moods-cover-jp.jpg",
      photo_count: 8,
      japanese_photo_count: "8",
      created_date: "2023-09-01",
      japanese_created_date: "2023年9月1日",
      tags: ["ocean", "moods", "weather", "emotions"],
      japanese_tags: ["海", "気分", "天気", "感情"],
    },
    {
      id: 2,
      name: "Seasons of Japan",
      japanese_name: "日本の四季",
      description:
        "The beauty of Japan's four distinct seasons through the lens",
      japanese_description: "レンズを通して見る日本の四つの異なる季節の美しさ",
      cover_photo: "/images/gallery/collections/seasons-japan-cover.jpg",
      japanese_cover_photo:
        "/images/gallery/collections/seasons-japan-cover-jp.jpg",
      photo_count: 16,
      japanese_photo_count: "16",
      created_date: "2023-01-01",
      japanese_created_date: "2023年1月1日",
      tags: ["seasons", "japan", "nature", "beauty"],
      japanese_tags: ["季節", "日本", "自然", "美しさ"],
    },
    {
      id: 3,
      name: "Urban Zen",
      japanese_name: "都市の禅",
      description:
        "Finding moments of peace and beauty in busy Japanese cities",
      japanese_description: "忙しい日本の都市で平和と美しさの瞬間を見つける",
      cover_photo: "/images/gallery/collections/urban-zen-cover.jpg",
      japanese_cover_photo:
        "/images/gallery/collections/urban-zen-cover-jp.jpg",
      photo_count: 6,
      japanese_photo_count: "6",
      created_date: "2023-06-15",
      japanese_created_date: "2023年6月15日",
      tags: ["urban", "zen", "peace", "cities"],
      japanese_tags: ["都市", "禅", "平和", "都市"],
    },
  ],
  S2 = {
    cameras: [
      {
        name: "Canon EOS R5",
        type: "Mirrorless",
        japanese_type: "ミラーレス",
        primary_use: "Ocean and landscape photography",
        japanese_primary_use: "海洋と風景写真",
      },
      {
        name: "Sony A7R IV",
        type: "Mirrorless",
        japanese_type: "ミラーレス",
        primary_use: "Street and urban photography",
        japanese_primary_use: "ストリートと都市写真",
      },
      {
        name: "Fujifilm X-T4",
        type: "Mirrorless",
        japanese_type: "ミラーレス",
        primary_use: "Travel and cultural photography",
        japanese_primary_use: "旅行と文化写真",
      },
    ],
    lenses: [
      {
        name: "Canon RF 24-70mm f/2.8L IS USM",
        focal_length: "24-70mm",
        aperture: "f/2.8",
        type: "Zoom",
        japanese_type: "ズーム",
        use: "Versatile everyday lens",
        japanese_use: "汎用日常レンズ",
      },
      {
        name: "Sony FE 85mm f/1.4 GM",
        focal_length: "85mm",
        aperture: "f/1.4",
        type: "Prime",
        japanese_type: "単焦点",
        use: "Portrait and detail photography",
        japanese_use: "ポートレートと詳細写真",
      },
      {
        name: "Fujifilm XF 16-55mm f/2.8 R LM WR",
        focal_length: "16-55mm",
        aperture: "f/2.8",
        type: "Zoom",
        japanese_type: "ズーム",
        use: "Wide-angle to standard zoom",
        japanese_use: "広角から標準ズーム",
      },
    ],
  },
  b2 = {
    total_photos: 42,
    japanese_total_photos: "42",
    featured_photos: 3,
    japanese_featured_photos: "3",
    total_views: 12500,
    japanese_total_views: "12,500",
    total_likes: 1283,
    japanese_total_likes: "1,283",
    collections: 3,
    japanese_collections: "3",
    categories: 4,
    japanese_categories: "4",
  },
  C2 = {
    instagram: "https://instagram.com/tatsuyakuroda_photos",
    japanese_instagram: "https://instagram.com/tatsuyakuroda_photos",
    flickr: "https://flickr.com/photos/tatsuyakuroda",
    japanese_flickr: "https://flickr.com/photos/tatsuyakuroda",
    "500px": "https://500px.com/tatsuyakuroda",
    japanese_500px: "https://500px.com/tatsuyakuroda",
  },
  N2 = {
    available: !0,
    japanese_available: "利用可能",
    description: "High-quality prints available for purchase",
    japanese_description: "購入可能な高品質プリント",
    shop_url: "/gallery/shop",
    japanese_shop_url: "/gallery/shop-jp",
    sizes: ["8x10", "11x14", "16x20", "20x24"],
    japanese_sizes: ["8x10", "11x14", "16x20", "20x24"],
    formats: ["Matte", "Glossy", "Canvas", "Metal"],
    japanese_formats: ["マット", "グロス", "キャンバス", "メタル"],
  },
  P2 = {
    section: h2,
    title: g2,
    japanese_title: v2,
    description: y2,
    japanese_description: x2,
    categories: j2,
    featured_photos: _2,
    recent_photos: w2,
    photo_collections: k2,
    equipment: S2,
    gallery_stats: b2,
    social_links: C2,
    print_shop: N2,
  },
  T2 = "contact",
  E2 = "Contact",
  A2 = "お問い合わせ",
  L2 = "Let's connect and discuss your next project",
  D2 = "つながって、あなたの次のプロジェクトについて話し合いましょう",
  M2 = {
    fields: [
      {
        id: "name",
        label: "Name",
        japanese_label: "お名前",
        type: "text",
        required: !0,
        japanese_required: "必須",
        placeholder: "Your full name",
        japanese_placeholder: "お名前を入力してください",
      },
      {
        id: "email",
        label: "Email",
        japanese_label: "メールアドレス",
        type: "email",
        required: !0,
        japanese_required: "必須",
        placeholder: "your.email@example.com",
        japanese_placeholder: "your.email@example.com",
      },
      {
        id: "company",
        label: "Company",
        japanese_label: "会社名",
        type: "text",
        required: !1,
        japanese_required: "任意",
        placeholder: "Your company name",
        japanese_placeholder: "会社名を入力してください",
      },
      {
        id: "subject",
        label: "Subject",
        japanese_label: "件名",
        type: "select",
        required: !0,
        japanese_required: "必須",
        options: [
          {
            value: "project_inquiry",
            label: "Project Inquiry",
            japanese_label: "プロジェクトのご相談",
          },
          {
            value: "collaboration",
            label: "Collaboration",
            japanese_label: "コラボレーション",
          },
          {
            value: "speaking",
            label: "Speaking Engagement",
            japanese_label: "講演依頼",
          },
          {
            value: "mentoring",
            label: "Mentoring",
            japanese_label: "メンタリング",
          },
          { value: "other", label: "Other", japanese_label: "その他" },
        ],
      },
      {
        id: "message",
        label: "Message",
        japanese_label: "メッセージ",
        type: "textarea",
        required: !0,
        japanese_required: "必須",
        placeholder: "Tell me about your project or how I can help...",
        japanese_placeholder:
          "プロジェクトについて、またはどのようにお手伝いできるかお聞かせください...",
        rows: 6,
      },
      {
        id: "budget",
        label: "Budget Range",
        japanese_label: "予算範囲",
        type: "select",
        required: !1,
        japanese_required: "任意",
        options: [
          {
            value: "under_10k",
            label: "Under $10,000",
            japanese_label: "100万円未満",
          },
          {
            value: "10k_25k",
            label: "$10,000 - $25,000",
            japanese_label: "100万円 - 250万円",
          },
          {
            value: "25k_50k",
            label: "$25,000 - $50,000",
            japanese_label: "250万円 - 500万円",
          },
          {
            value: "50k_100k",
            label: "$50,000 - $100,000",
            japanese_label: "500万円 - 1000万円",
          },
          {
            value: "over_100k",
            label: "Over $100,000",
            japanese_label: "1000万円以上",
          },
          {
            value: "discuss",
            label: "Let's discuss",
            japanese_label: "相談したい",
          },
        ],
      },
      {
        id: "timeline",
        label: "Project Timeline",
        japanese_label: "プロジェクト期間",
        type: "select",
        required: !1,
        japanese_required: "任意",
        options: [
          { value: "asap", label: "ASAP", japanese_label: "できるだけ早く" },
          {
            value: "1_month",
            label: "Within 1 month",
            japanese_label: "1ヶ月以内",
          },
          {
            value: "2_3_months",
            label: "2-3 months",
            japanese_label: "2-3ヶ月",
          },
          {
            value: "3_6_months",
            label: "3-6 months",
            japanese_label: "3-6ヶ月",
          },
          {
            value: "6_months_plus",
            label: "6+ months",
            japanese_label: "6ヶ月以上",
          },
          { value: "flexible", label: "Flexible", japanese_label: "柔軟" },
        ],
      },
    ],
    submit_button: {
      text: "Send Message",
      japanese_text: "メッセージを送信",
      loading_text: "Sending...",
      japanese_loading_text: "送信中...",
      success_text: "Message sent successfully!",
      japanese_success_text: "メッセージが正常に送信されました！",
    },
    validation: {
      required_field: "This field is required",
      japanese_required_field: "この項目は必須です",
      invalid_email: "Please enter a valid email address",
      japanese_invalid_email: "有効なメールアドレスを入力してください",
      message_too_short: "Message must be at least 10 characters",
      japanese_message_too_short: "メッセージは10文字以上で入力してください",
    },
  },
  R2 = {
    email: {
      address: "s.chain.engineer@gmail.com",
      japanese_address: "s.chain.engineer@gmail.com",
      label: "Email",
      japanese_label: "メール",
      description: "For project inquiries and general questions",
      japanese_description: "プロジェクトのご相談と一般的な質問用",
      icon: "mail",
    },
    telegram: {
      username: "@Healer020419",
      url: "https://t.me/Healer020419",
      label: "Telegram",
      japanese_label: "Telegram",
      description: "Message me on Telegram",
      japanese_description: "Telegramでご連絡ください",
      icon: "telegram",
    },
    phone: {
      number: "+90 533 099 37 82",
      japanese_number: "090-1234-5678",
      label: "Phone",
      japanese_label: "電話",
      description: "Available Monday-Friday, 9AM-6PM",
      japanese_description: "月曜日-金曜日、午前9時-午後6時",
      icon: "phone",
    },
    location: {
      address: "Istanbul, Turkey",
      japanese_address: "東京都、日本",
      label: "Location",
      japanese_label: "所在地",
      description: "Based in Istanbul, Turkey available for remote work",
      japanese_description: "東京在住、リモートワーク対応",
      icon: "map-pin",
    },
    timezone: {
      zone: "JST (UTC+9)",
      japanese_zone: "JST (UTC+9)",
      label: "Timezone",
      japanese_label: "タイムゾーン",
      description: "Japan Standard Time",
      japanese_description: "日本標準時",
      icon: "clock",
    },
  },
  I2 = [
    {
      platform: "GitHub",
      japanese_platform: "GitHub",
      url: "https://github.com/stealthemoon0331",
      japanese_url: "https://github.com/stealthemoon0331",
      username: "@tatsuyakuroda",
      japanese_username: "@tatsuyakuroda",
      description: "Code repositories and open source contributions",
      japanese_description: "コードリポジトリとオープンソース貢献",
      icon: "github",
      color: "#333333",
    },
    {
      platform: "LinkedIn",
      japanese_platform: "LinkedIn",
      url: "https://www.linkedin.com/in/kuroda-tatsuya-508276385/",
      japanese_url: "https://www.linkedin.com/in/kuroda-tatsuya-508276385/",
      username: "Honda Iroban",
      japanese_username: "たつや くろだ",
      description: "Professional network and career updates",
      japanese_description: "プロフェッショナルネットワークとキャリア更新",
      icon: "linkedin",
      color: "#0077B5",
    },
  ],
  V2 = {
    status: "Available",
    japanese_status: "利用可能",
    description: "Currently accepting new projects and collaborations",
    japanese_description:
      "現在、新しいプロジェクトとコラボレーションを受け付けています",
    response_time: "Within 24 hours",
    japanese_response_time: "24時間以内",
    working_hours: "Monday-Friday, 9AM-6PM JST",
    japanese_working_hours: "月曜日-金曜日、午前9時-午後6時（日本時間）",
    timezone: "JST (UTC+9)",
    japanese_timezone: "JST (UTC+9)",
  },
  z2 = [
    {
      id: "web_development",
      name: "Web Development",
      japanese_name: "Web開発",
      description: "Full-stack web applications with modern technologies",
      japanese_description:
        "モダンなテクノロジーを使用したフルスタックWebアプリケーション",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      japanese_technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      icon: "code",
    },
    {
      id: "mobile_apps",
      name: "Mobile App Development",
      japanese_name: "モバイルアプリ開発",
      description: "Cross-platform mobile applications for iOS and Android",
      japanese_description:
        "iOSとAndroid向けのクロスプラットフォームモバイルアプリケーション",
      technologies: ["React Native", "Expo", "TypeScript"],
      japanese_technologies: ["React Native", "Expo", "TypeScript"],
      icon: "smartphone",
    },
    {
      id: "consulting",
      name: "Technical Consulting",
      japanese_name: "技術コンサルティング",
      description: "Architecture design and technical strategy guidance",
      japanese_description: "アーキテクチャ設計と技術戦略ガイダンス",
      technologies: ["Microservices", "Cloud Architecture", "DevOps"],
      japanese_technologies: [
        "マイクロサービス",
        "クラウドアーキテクチャ",
        "DevOps",
      ],
      icon: "lightbulb",
    },
    {
      id: "mentoring",
      name: "Development Mentoring",
      japanese_name: "開発メンタリング",
      description: "One-on-one guidance for developers at any level",
      japanese_description: "あらゆるレベルの開発者向けの1対1ガイダンス",
      technologies: ["Code Review", "Career Guidance", "Best Practices"],
      japanese_technologies: [
        "コードレビュー",
        "キャリアガイダンス",
        "ベストプラクティス",
      ],
      icon: "users",
    },
  ],
  O2 = [
    {
      quote:
        "Tatsuya's ability to bridge Japanese business practices with modern development methodologies is truly remarkable.",
      japanese_quote:
        "達也の日本のビジネス慣行とモダンな開発手法を結びつける能力は本当に素晴らしいです。",
      author: "Yuki Tanaka, CTO at TechFlow Solutions",
      japanese_author: "田中ゆき、テックフローソリューションズCTO",
    },
  ],
  F2 = {
    title: "Ready to Start Your Project?",
    japanese_title: "プロジェクトを始める準備はできましたか？",
    description: "Let's discuss how I can help bring your ideas to life",
    japanese_description:
      "あなたのアイデアを実現するためにどのようにお手伝いできるか話し合いましょう",
    button_text: "Get In Touch",
    japanese_button_text: "お問い合わせ",
    button_link: "#contact-form",
  },
  B2 = [
    {
      question: "What is your typical project timeline?",
      japanese_question: "典型的なプロジェクト期間はどのくらいですか？",
      answer:
        "Project timelines vary depending on scope and complexity. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. I'll provide a detailed timeline during our initial consultation.",
      japanese_answer:
        "プロジェクト期間は範囲と複雑さによって異なります。シンプルなWebサイトは通常2-4週間、複雑なアプリケーションは3-6ヶ月かかります。初回相談時に詳細な期間を提供します。",
    },
    {
      question: "Do you work with international clients?",
      japanese_question: "国際的なクライアントとお仕事をしますか？",
      answer:
        "Yes! I work with clients worldwide and am comfortable with remote collaboration. I'm fluent in both English and Japanese, making communication seamless regardless of your location.",
      japanese_answer:
        "はい！世界中のクライアントとお仕事をしており、リモートコラボレーションに慣れています。英語と日本語の両方に堪能なので、場所に関係なくコミュニケーションがスムーズです。",
    },
    {
      question: "What technologies do you specialize in?",
      japanese_question: "どのような技術を専門としていますか？",
      answer:
        "I specialize in modern web technologies including React, Node.js, TypeScript, and cloud platforms like AWS. I also have experience with mobile development using React Native and various databases including PostgreSQL and MongoDB.",
      japanese_answer:
        "React、Node.js、TypeScript、AWSなどのクラウドプラットフォームを含むモダンなWeb技術を専門としています。React Nativeを使用したモバイル開発や、PostgreSQLやMongoDBなどの様々なデータベースの経験もあります。",
    },
  ],
  $2 = {
    section: T2,
    title: E2,
    japanese_title: A2,
    description: L2,
    japanese_description: D2,
    contact_form: M2,
    contact_info: R2,
    social_links: I2,
    availability: V2,
    services: z2,
    testimonials_preview: O2,
    cta: F2,
    faq: B2,
  },
  U2 = "footer",
  W2 = "© 2025 Honda Iroban. All rights reserved.",
  H2 = "© 2025 たつや くろだ。すべての権利を保有。",
  G2 = {
    sections: [
      {
        title: "Navigation",
        japanese_title: "ナビゲーション",
        links: [
          {
            text: "Home",
            japanese_text: "ホーム",
            url: "#home",
            japanese_url: "#home",
          },
          {
            text: "About",
            japanese_text: "自己紹介",
            url: "#about",
            japanese_url: "#about",
          },
          {
            text: "Experience",
            japanese_text: "経歴",
            url: "#experience",
            japanese_url: "#experience",
          },
          {
            text: "Projects",
            japanese_text: "制作実績",
            url: "#projects",
            japanese_url: "#projects",
          },
          {
            text: "Skills",
            japanese_text: "スキル",
            url: "#skills",
            japanese_url: "#skills",
          },
          {
            text: "Contact",
            japanese_text: "お問い合わせ",
            url: "#contact",
            japanese_url: "#contact",
          },
        ],
      },
      {
        title: "Resources",
        japanese_title: "リソース",
        links: [
          {
            text: "Blog",
            japanese_text: "ブログ",
            url: "#blog",
            japanese_url: "#blog",
          },
          {
            text: "Gallery",
            japanese_text: "ギャラリー",
            url: "#gallery",
            japanese_url: "#gallery",
          },
          {
            text: "Resume",
            japanese_text: "履歴書",
            url: "/resume/tatsuya-kuroda-resume.pdf",
            japanese_url: "/resume/tatsuya-kuroda-resume-jp.pdf",
          },
          {
            text: "Testimonials",
            japanese_text: "推薦の言葉",
            url: "#testimonials",
            japanese_url: "#testimonials",
          },
          {
            text: "Achievements",
            japanese_text: "実績・資格",
            url: "#achievements",
            japanese_url: "#achievements",
          },
        ],
      },
      {
        title: "Connect",
        japanese_title: "つながる",
        links: [
          {
            text: "GitHub",
            japanese_text: "GitHub",
            url: "https://github.com/stealthemoon0331",
            japanese_url: "https://github.com/stealthemoon0331",
            external: !0,
          },
          {
            text: "LinkedIn",
            japanese_text: "LinkedIn",
            url: "https://www.linkedin.com/in/kuroda-tatsuya-508276385/",
            japanese_url:
              "https://www.linkedin.com/in/kuroda-tatsuya-508276385/",
            external: !0,
          },
        ],
      },
      {
        title: "Services",
        japanese_title: "サービス",
        links: [
          {
            text: "Web Development",
            japanese_text: "Web開発",
            url: "#contact?service=web_development",
            japanese_url: "#contact?service=web_development",
          },
          {
            text: "Mobile Apps",
            japanese_text: "モバイルアプリ",
            url: "#contact?service=mobile_apps",
            japanese_url: "#contact?service=mobile_apps",
          },
          {
            text: "Consulting",
            japanese_text: "コンサルティング",
            url: "#contact?service=consulting",
            japanese_url: "#contact?service=consulting",
          },
          {
            text: "Mentoring",
            japanese_text: "メンタリング",
            url: "#contact?service=mentoring",
            japanese_url: "#contact?service=mentoring",
          },
        ],
      },
    ],
  },
  K2 = {
    email: "lukas.schneider0808@gmail.com",
    japanese_email: "lukas.schneider0808@gmail.com",
    phone: "+81 35-472-8961",
    japanese_phone: "090-1234-5678",
    location: "Osaka, Japan",
    japanese_location: "東京都、日本",
    timezone: "JST (UTC+9)",
    japanese_timezone: "JST (UTC+9)",
  },
  J2 = {
    title: "Stay Updated",
    japanese_title: "最新情報を受け取る",
    description:
      "Get the latest insights on software development and Japanese culture",
    japanese_description:
      "ソフトウェア開発と日本文化についての最新の洞察を受け取る",
    placeholder: "Enter your email address",
    japanese_placeholder: "メールアドレスを入力してください",
    button_text: "Subscribe",
    japanese_button_text: "購読",
    success_message: "Thank you for subscribing!",
    japanese_success_message: "購読ありがとうございます！",
    subscribers: 1250,
    japanese_subscribers: "1,250",
  },
  Q2 = {
    current_language: "English",
    japanese_current_language: "English",
    available_languages: [
      {
        code: "en",
        name: "English",
        japanese_name: "英語",
        flag: "🇺🇸",
        japanese_flag: "🇺🇸",
      },
      {
        code: "ja",
        name: "日本語",
        japanese_name: "日本語",
        flag: "🇯🇵",
        japanese_flag: "🇯🇵",
      },
    ],
  },
  q2 = { text: "Back to Top", japanese_text: "トップに戻る", icon: "arrow-up" },
  Y2 = {
    text: "Privacy Policy",
    japanese_text: "プライバシーポリシー",
    url: "/privacy-policy",
    japanese_url: "/privacy-policy-jp",
  },
  X2 = {
    text: "Terms of Service",
    japanese_text: "利用規約",
    url: "/terms-of-service",
    japanese_url: "/terms-of-service-jp",
  },
  Z2 = {
    text: "Sitemap",
    japanese_text: "サイトマップ",
    url: "/sitemap.xml",
    japanese_url: "/sitemap-jp.xml",
  },
  ek = {
    text: "RSS Feed",
    japanese_text: "RSSフィード",
    url: "/blog/rss.xml",
    japanese_url: "/blog/rss-jp.xml",
  },
  tk = {
    text: "Accessibility Statement",
    japanese_text: "アクセシビリティステートメント",
    url: "/accessibility",
    japanese_url: "/accessibility-jp",
  },
  nk = {
    text: "Performance",
    japanese_text: "パフォーマンス",
    metrics: {
      load_time: "< 2s",
      japanese_load_time: "< 2秒",
      lighthouse_score: "95+",
      japanese_lighthouse_score: "95+",
      accessibility_score: "100",
      japanese_accessibility_score: "100",
    },
  },
  ik = {
    title: "Built With",
    japanese_title: "使用技術",
    technologies: [
      {
        name: "React",
        japanese_name: "React",
        url: "https://reactjs.org",
        icon: "react",
      },
      {
        name: "Next.js",
        japanese_name: "Next.js",
        url: "https://nextjs.org",
        icon: "nextjs",
      },
      {
        name: "TypeScript",
        japanese_name: "TypeScript",
        url: "https://typescriptlang.org",
        icon: "typescript",
      },
      {
        name: "Tailwind CSS",
        japanese_name: "Tailwind CSS",
        url: "https://tailwindcss.com",
        icon: "tailwind",
      },
      {
        name: "Vercel",
        japanese_name: "Vercel",
        url: "https://vercel.com",
        icon: "vercel",
      },
    ],
  },
  rk = "2025-01-15",
  sk = "2025年1月15日",
  ak = "2.1.0",
  ok = "2.1.0",
  lk = {
    build_date: "2025-01-15T10:30:00Z",
    japanese_build_date: "2025年1月15日 10:30:00 UTC",
    git_commit: "a1b2c3d4e5f6",
    japanese_git_commit: "a1b2c3d4e5f6",
    environment: "production",
    japanese_environment: "本番環境",
  },
  ck = {
    google_analytics: "GA4-XXXXXXXXX",
    japanese_google_analytics: "GA4-XXXXXXXXX",
    privacy_compliant: !0,
    japanese_privacy_compliant: !0,
    cookie_consent: "Required",
    japanese_cookie_consent: "必須",
  },
  uk = {
    github_stars: 239,
    japanese_github_stars: "239",
    linkedin_connections: 500,
    japanese_linkedin_connections: "500",
    projects_completed: 50,
    japanese_projects_completed: "50",
    years_experience: 5,
    japanese_years_experience: "5",
  },
  dk = {
    section: U2,
    copyright: W2,
    japanese_copyright: H2,
    quick_links: G2,
    contact_info: K2,
    newsletter: J2,
    language_selector: Q2,
    back_to_top: q2,
    privacy_policy: Y2,
    terms_of_service: X2,
    sitemap: Z2,
    rss_feed: ek,
    accessibility: tk,
    performance: nk,
    technologies: ik,
    last_updated: rk,
    japanese_last_updated: sk,
    version: ak,
    japanese_version: ok,
    build_info: lk,
    analytics: ck,
    social_proof: uk,
  },
  pk = (e) => Qh[e],
  S = (e, t, n) => {
    const i = Mc[n];
    return i && e[`${i}${t}`]
      ? String(e[`${i}${t}`])
      : e[t]
        ? String(e[t])
        : e[`japanese_${t}`]
          ? String(e[`japanese_${t}`])
          : e[`spanish_${t}`]
            ? String(e[`spanish_${t}`])
            : e[`german_${t}`]
              ? String(e[`german_${t}`])
              : "";
  },
  ft = (e, t, n) => {
    const i = Mc[n];
    return i && Array.isArray(e[`${i}${t}`])
      ? e[`${i}${t}`]
      : Array.isArray(e[t])
        ? e[t]
        : Array.isArray(e[`japanese_${t}`])
          ? e[`japanese_${t}`]
          : Array.isArray(e[`spanish_${t}`])
            ? e[`spanish_${t}`]
            : Array.isArray(e[`german_${t}`])
              ? e[`german_${t}`]
              : [];
  },
  fk = (e, t) => {
    const n = Qh[t];
    return e[n] || e.english || e.japanese || "";
  },
  mk = (e, t, n) => {
    const i = Mc[n];
    return i && e[`${i}${t}`]
      ? String(e[`${i}${t}`])
      : t.replace(/_/g, " ").replace(/\b\w/g, (r) => r.toUpperCase());
  },
  Lt = () => ({
    home: ow,
    about: gw,
    experience: kw,
    projects: Ew,
    skills: zw,
    achievements: Jw,
    testimonials: n2,
    blog: m2,
    gallery: P2,
    contact: $2,
    footer: dk,
  }),
  hk = () => {
    const { language: e } = mt(),
      t = ht(e),
      [n, i] = _.useState(0),
      [r, s] = _.useState(!1),
      o = Lt().home,
      c = o.ocean_backgrounds,
      u = o.languages[pk(e)] ?? o.languages.english;
    _.useEffect(() => {
      s(!0);
      const p = setInterval(() => {
        i((f) => (f + 1) % c.length);
      }, o.rotation_settings.interval_seconds * 1e3);
      return () => clearInterval(p);
    }, [c.length, o.rotation_settings.interval_seconds]);
    const d = () => {
      const p = document.getElementById("projects");
      p && p.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return l.jsxs("div", {
      className: "relative min-h-screen overflow-hidden",
      children: [
        l.jsxs("div", {
          className: "absolute inset-0",
          children: [
            l.jsx($s, {
              mode: "wait",
              children: l.jsx(
                T.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: {
                    duration: o.rotation_settings.transition_duration,
                  },
                  className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                  style: { backgroundImage: `url(${c[n].image_url})` },
                },
                n,
              ),
            }),
            l.jsx("div", { className: "absolute inset-0 bg-black/50" }),
            l.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-surface-900/40",
            }),
          ],
        }),
        l.jsx("div", {
          className:
            "relative z-10 flex items-center justify-center min-h-screen",
          children: l.jsx("div", {
            className: "container-max text-center px-4 sm:px-6 lg:px-8",
            children: l.jsxs(T.div, {
              variants: V,
              initial: "hidden",
              animate: r ? "visible" : "hidden",
              transition: { delay: 0.2 },
              className: "max-w-4xl mx-auto",
              children: [
                l.jsx(T.h1, {
                  variants: V,
                  className:
                    "text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6",
                  children: l.jsx("span", {
                    className: "block text-gradient-cool py-3",
                    children: u.title,
                  }),
                }),
                l.jsx(T.h2, {
                  variants: V,
                  className:
                    "text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 font-heading font-medium",
                  children: u.subtitle,
                }),
                l.jsx(T.p, {
                  variants: V,
                  className:
                    "text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed",
                  children: u.description,
                }),
                l.jsx(T.div, {
                  variants: V,
                  children: l.jsxs("button", {
                    onClick: d,
                    className:
                      "inline-flex items-center space-x-2 bg-ocean-500/90 text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-ocean-400 transition-all duration-300 hover:scale-105 shadow-glow-ocean border border-ocean-400/30",
                    children: [
                      l.jsx("span", { children: u.cta.text }),
                      l.jsx(D_, { className: "w-5 h-5" }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
        l.jsx(T.div, {
          initial: { opacity: 0 },
          animate: { opacity: r ? 1 : 0 },
          transition: { duration: 0.8, delay: 1 },
          className:
            "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10",
          children: l.jsxs("button", {
            onClick: d,
            className:
              "flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300",
            children: [
              l.jsx("span", {
                className: "text-sm font-medium text-white/80",
                children: t("scroll"),
              }),
              l.jsx(T.div, {
                animate: { y: [0, 8, 0] },
                transition: { duration: 2, repeat: 1 / 0 },
                children: l.jsx(Hi, { className: "w-6 h-6" }),
              }),
            ],
          }),
        }),
        l.jsx("div", {
          className: "absolute bottom-8 right-8 z-10",
          children: l.jsx("div", {
            className: "flex space-x-2",
            children: c.map((p, f) =>
              l.jsx(
                "button",
                {
                  onClick: () => i(f),
                  className: `w-3 h-3 rounded-full transition-all duration-300 ${f === n ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"}`,
                },
                f,
              ),
            ),
          }),
        }),
        l.jsx("div", {
          className: "absolute bottom-8 left-8 z-10 text-white/80",
          children: l.jsxs("div", {
            className: "text-sm",
            children: [
              l.jsx("p", { className: "font-medium", children: c[n].name }),
              l.jsx("p", {
                className: "text-xs opacity-75",
                children: c[n].description,
              }),
            ],
          }),
        }),
      ],
    });
  };
var pl = new Map(),
  Kr = new WeakMap(),
  Zd = 0,
  gk = void 0;
function vk(e) {
  return e
    ? (Kr.has(e) || ((Zd += 1), Kr.set(e, Zd.toString())), Kr.get(e))
    : "0";
}
function yk(e) {
  return Object.keys(e)
    .sort()
    .filter((t) => e[t] !== void 0)
    .map((t) => `${t}_${t === "root" ? vk(e.root) : e[t]}`)
    .toString();
}
function xk(e) {
  const t = yk(e);
  let n = pl.get(t);
  if (!n) {
    const i = new Map();
    let r;
    const s = new IntersectionObserver((a) => {
      a.forEach((o) => {
        var c;
        const u = o.isIntersecting && r.some((d) => o.intersectionRatio >= d);
        (e.trackVisibility && typeof o.isVisible > "u" && (o.isVisible = u),
          (c = i.get(o.target)) == null ||
            c.forEach((d) => {
              d(u, o);
            }));
      });
    }, e);
    ((r =
      s.thresholds ||
      (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
      (n = { id: t, observer: s, elements: i }),
      pl.set(t, n));
  }
  return n;
}
function jk(e, t, n = {}, i = gk) {
  if (typeof window.IntersectionObserver > "u" && i !== void 0) {
    const c = e.getBoundingClientRect();
    return (
      t(i, {
        isIntersecting: i,
        target: e,
        intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
        time: 0,
        boundingClientRect: c,
        intersectionRect: c,
        rootBounds: c,
      }),
      () => {}
    );
  }
  const { id: r, observer: s, elements: a } = xk(n),
    o = a.get(e) || [];
  return (
    a.has(e) || a.set(e, o),
    o.push(t),
    s.observe(e),
    function () {
      (o.splice(o.indexOf(t), 1),
        o.length === 0 && (a.delete(e), s.unobserve(e)),
        a.size === 0 && (s.disconnect(), pl.delete(r)));
    }
  );
}
function Mn({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: i,
  root: r,
  triggerOnce: s,
  skip: a,
  initialInView: o,
  fallbackInView: c,
  onChange: u,
} = {}) {
  var d;
  const [p, f] = _.useState(null),
    g = _.useRef(u),
    [y, x] = _.useState({ inView: !!o, entry: void 0 });
  ((g.current = u),
    _.useEffect(() => {
      if (a || !p) return;
      let h;
      return (
        (h = jk(
          p,
          (j, k) => {
            (x({ inView: j, entry: k }),
              g.current && g.current(j, k),
              k.isIntersecting && s && h && (h(), (h = void 0)));
          },
          {
            root: r,
            rootMargin: i,
            threshold: e,
            trackVisibility: n,
            delay: t,
          },
          c,
        )),
        () => {
          h && h();
        }
      );
    }, [Array.isArray(e) ? e.toString() : e, p, r, i, s, a, n, c, t]));
  const w = (d = y.entry) == null ? void 0 : d.target,
    v = _.useRef(void 0);
  !p &&
    w &&
    !s &&
    !a &&
    v.current !== w &&
    ((v.current = w), x({ inView: !!o, entry: void 0 }));
  const m = [f, y.inView, y.entry];
  return ((m.ref = m[0]), (m.inView = m[1]), (m.entry = m[2]), m);
}
const _k = () => {
    const { language: e } = mt(),
      t = ht(e),
      i = Lt().about,
      [r, s] = Mn({ triggerOnce: !0, threshold: 0.1 }),
      a = { "puzzle-piece": U_, code: Us, users: G_, "graduation-cap": z_ };
    return l.jsxs("div", {
      className: "min-h-screen bg-transparent",
      children: [
        l.jsx("section", {
          className: "section-padding ocean-bg pt-24",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsx(T.div, {
              variants: V,
              initial: "hidden",
              animate: s ? "visible" : "hidden",
              ref: r,
              className: "text-center max-w-4xl mx-auto",
              children: l.jsxs(T.div, {
                variants: V,
                className: "inline-block",
                children: [
                  l.jsx("h1", {
                    className:
                      "text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-cool mb-4",
                    children: S(i, "title", e),
                  }),
                  l.jsx("div", {
                    className:
                      "w-24 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                  }),
                ],
              }),
            }),
          }),
        }),
        l.jsx("section", {
          className: "section-padding",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsxs("div", {
              className: "grid lg:grid-cols-2 gap-12 items-center",
              children: [
                l.jsx(T.div, {
                  variants: V,
                  initial: "hidden",
                  animate: s ? "visible" : "hidden",
                  transition: { delay: 0.2 },
                  className: "relative",
                  children: l.jsxs("div", {
                    className: "relative w-full max-w-md mx-auto",
                    children: [
                      l.jsx("div", {
                        className:
                          "aspect-square rounded-full overflow-hidden shadow-glow-ocean border-2 border-ocean-500/30",
                        children: l.jsx("img", {
                          src: "/avatar.png",
                          alt: S(i.profile, "name", e),
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      l.jsx("div", {
                        className:
                          "absolute -top-4 -right-4 w-8 h-8 bg-ocean-500 rounded-full animate-float shadow-glow-ocean-sm",
                      }),
                      l.jsx("div", {
                        className:
                          "absolute -bottom-4 -left-4 w-6 h-6 bg-japanese-gold rounded-full animate-float shadow-glow-ocean-sm",
                        style: { animationDelay: "1s" },
                      }),
                    ],
                  }),
                }),
                l.jsxs(T.div, {
                  variants: V,
                  initial: "hidden",
                  animate: s ? "visible" : "hidden",
                  transition: { delay: 0.4 },
                  className: "space-y-2",
                  children: [
                    l.jsxs("div", {
                      className: "text-center lg:text-left",
                      children: [
                        l.jsx("h2", {
                          className:
                            "text-4xl sm:text-5xl font-display font-bold text-gray-100 mb-3",
                          children: S(i.profile, "name", e),
                        }),
                        l.jsx("div", {
                          className:
                            "inline-flex items-center px-4 py-2 bg-ocean-500/10 rounded-full border border-ocean-500/20",
                          children: l.jsx("span", {
                            className:
                              "text-lg text-ocean-400 font-heading font-semibold",
                            children: S(i.profile, "title", e),
                          }),
                        }),
                      ],
                    }),
                    l.jsx("div", {
                      className: "glass-card rounded-2xl p-8",
                      children: l.jsx("p", {
                        className:
                          "text-lg text-gray-300 leading-relaxed font-medium",
                        children: fk(i.introduction, e),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        l.jsx("section", {
          className: "section-padding bg-surface-800/30",
          children: l.jsxs("div", {
            className: "container-max",
            children: [
              l.jsxs(T.div, {
                variants: V,
                initial: "hidden",
                animate: s ? "visible" : "hidden",
                className: "text-center mb-20",
                children: [
                  l.jsxs("div", {
                    className: "inline-block",
                    children: [
                      l.jsx("h2", {
                        className:
                          "text-4xl sm:text-5xl font-bold text-gradient-cool mb-4",
                        children: t("professionalValues"),
                      }),
                      l.jsx("div", {
                        className:
                          "w-24 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                      }),
                    ],
                  }),
                  l.jsx("p", {
                    className:
                      "text-xl text-gray-400 max-w-3xl mx-auto mt-8 leading-relaxed",
                    children: t("professionalValuesDesc"),
                  }),
                ],
              }),
              l.jsx(T.div, {
                variants: Qe,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: i.professional_values.map((o) => {
                  const c = a[o.icon] || Us;
                  return l.jsxs(
                    T.div,
                    {
                      variants: V,
                      whileHover: { y: -8, scale: 1.02 },
                      className: "group glass-card p-8 text-center card-hover",
                      children: [
                        l.jsx("div", {
                          className:
                            "w-20 h-20 bg-ocean-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-ocean-500/20",
                          children: l.jsx(c, {
                            className: "w-10 h-10 text-ocean-400",
                          }),
                        }),
                        l.jsx("h3", {
                          className:
                            "text-xl font-heading font-bold text-gray-100 mb-4",
                          children: S(o, "title", e),
                        }),
                        l.jsx("p", {
                          className: "text-gray-400 leading-relaxed text-sm",
                          children: S(o, "description", e),
                        }),
                      ],
                    },
                    o.title,
                  );
                }),
              }),
            ],
          }),
        }),
        l.jsx("section", {
          className: "section-padding",
          children: l.jsxs("div", {
            className: "container-max",
            children: [
              l.jsx(T.div, {
                variants: V,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "text-center mb-20",
                children: l.jsxs("div", {
                  className: "inline-block",
                  children: [
                    l.jsx("h2", {
                      className:
                        "text-4xl sm:text-5xl font-bold py-2 text-gradient-cool mb-4",
                      children: t("personalHighlights"),
                    }),
                    l.jsx("div", {
                      className:
                        "w-24 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                    }),
                  ],
                }),
              }),
              l.jsx(T.div, {
                variants: Qe,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "grid md:grid-cols-3 gap-8",
                children: i.personal_highlights.map((o) =>
                  l.jsxs(
                    T.div,
                    {
                      variants: V,
                      whileHover: { y: -8, scale: 1.02 },
                      className: "group glass-card p-8 card-hover",
                      children: [
                        l.jsxs("h3", {
                          className:
                            "text-xl font-heading font-bold text-gray-100 mb-6 flex items-center justify-center",
                          children: [
                            l.jsx("div", {
                              className:
                                "w-10 h-10 bg-pink-500/10 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 border border-pink-500/20",
                              children: l.jsx(Wh, {
                                className: "w-5 h-5 text-pink-400",
                              }),
                            }),
                            S(o, "category", e),
                          ],
                        }),
                        l.jsx("ul", {
                          className: "space-y-3",
                          children: ft(o, "items", e).map((c, u) =>
                            l.jsxs(
                              "li",
                              {
                                className:
                                  "text-gray-400 flex items-start group-hover:text-gray-300 transition-colors duration-300",
                                children: [
                                  l.jsx("span", {
                                    className:
                                      "w-2 h-2 bg-gradient-to-r from-ocean-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300",
                                  }),
                                  l.jsx("span", {
                                    className: "text-sm leading-relaxed",
                                    children: c,
                                  }),
                                ],
                              },
                              u,
                            ),
                          ),
                        }),
                      ],
                    },
                    o.category,
                  ),
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  wk = () => {
    const { language: e } = mt(),
      t = ht(e),
      i = Lt().experience,
      [r, s] = Mn({ triggerOnce: !0, threshold: 0.1 });
    return l.jsxs("div", {
      className: "min-h-screen bg-transparent",
      children: [
        l.jsx("section", {
          className: "section-padding ocean-bg pt-24",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsxs(T.div, {
              variants: V,
              initial: "hidden",
              animate: s ? "visible" : "hidden",
              ref: r,
              className: "text-center max-w-4xl mx-auto",
              children: [
                l.jsxs(T.div, {
                  variants: V,
                  className: "inline-block",
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-cool mb-4",
                      children: S(i, "title", e),
                    }),
                    l.jsx("div", {
                      className:
                        "w-24 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                    }),
                  ],
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-400 leading-relaxed mt-6",
                  children: t("experienceSubtitle"),
                }),
              ],
            }),
          }),
        }),
        l.jsx("section", {
          className: "section-padding bg-surface-800/30",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsx(T.div, {
              variants: Qe,
              initial: "hidden",
              whileInView: "visible",
              viewport: G,
              className: "grid grid-cols-2 md:grid-cols-4 gap-8",
              children: Object.entries(i.career_highlights).map(([a, o]) => {
                if (
                  a.startsWith("japanese_") ||
                  a.startsWith("spanish_") ||
                  a.startsWith("german_")
                )
                  return null;
                const c = mk(i.career_highlights, a, e);
                return l.jsxs(
                  T.div,
                  {
                    variants: V,
                    className: "text-center glass-card p-6",
                    children: [
                      l.jsx("div", {
                        className:
                          "text-3xl sm:text-4xl font-bold text-ocean-400 mb-2",
                        children: o,
                      }),
                      l.jsx("div", {
                        className: "text-sm text-gray-400",
                        children: c,
                      }),
                    ],
                  },
                  a,
                );
              }),
            }),
          }),
        }),
        l.jsx("section", {
          className: "section-padding",
          children: l.jsxs("div", {
            className: "container-max",
            children: [
              l.jsxs(T.div, {
                variants: V,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "text-center mb-16",
                children: [
                  l.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl font-bold text-gradient-cool mb-4",
                    children: t("experienceTimeline"),
                  }),
                  l.jsx("div", {
                    className:
                      "w-20 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "relative",
                children: [
                  l.jsx("div", {
                    className:
                      "absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-ocean-500/30 transform md:-translate-x-0.5",
                  }),
                  l.jsx("div", {
                    className: "space-y-12",
                    children: i.timeline.map((a, o) =>
                      l.jsxs(
                        T.div,
                        {
                          initial: { opacity: 0, x: o % 2 === 0 ? -50 : 50 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: G,
                          transition: { duration: 0.8, delay: o * 0.1 },
                          className: `relative flex items-center ${o % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
                          children: [
                            l.jsx("div", {
                              className:
                                "absolute left-4 md:left-1/2 w-4 h-4 bg-ocean-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-glow-ocean-sm",
                            }),
                            l.jsx("div", {
                              className: `ml-12 md:ml-0 w-full md:w-1/2 ${o % 2 === 0 ? "md:pr-8" : "md:pl-8"}`,
                              children: l.jsxs(T.div, {
                                whileHover: { scale: 1.02 },
                                className: "card p-6",
                                children: [
                                  l.jsxs("div", {
                                    className:
                                      "flex items-center text-sm text-ocean-400 font-semibold mb-2",
                                    children: [
                                      l.jsx(kr, { className: "w-4 h-4 mr-2" }),
                                      S(a, "period", e),
                                    ],
                                  }),
                                  l.jsx("h3", {
                                    className:
                                      "text-xl font-bold text-gray-100 mb-1",
                                    children: S(a, "position", e),
                                  }),
                                  l.jsx("h4", {
                                    className:
                                      "text-lg font-semibold text-ocean-400 mb-2",
                                    children: S(a, "company", e),
                                  }),
                                  l.jsxs("div", {
                                    className:
                                      "flex items-center text-sm text-gray-400 mb-4",
                                    children: [
                                      l.jsx(Lc, { className: "w-4 h-4 mr-2" }),
                                      S(a, "location", e),
                                    ],
                                  }),
                                  l.jsx("p", {
                                    className:
                                      "text-gray-300 mb-4 leading-relaxed",
                                    children: S(a, "description", e),
                                  }),
                                  l.jsxs("div", {
                                    className: "mb-4",
                                    children: [
                                      l.jsxs("h5", {
                                        className:
                                          "font-semibold text-gray-100 mb-2 flex items-center",
                                        children: [
                                          l.jsx(pr, {
                                            className:
                                              "w-4 h-4 mr-2 text-ocean-400",
                                          }),
                                          t("keyAchievements"),
                                        ],
                                      }),
                                      l.jsx("ul", {
                                        className: "space-y-1",
                                        children: ft(
                                          a,
                                          "key_achievements",
                                          e,
                                        ).map((c, u) =>
                                          l.jsxs(
                                            "li",
                                            {
                                              className:
                                                "text-sm text-gray-400 flex items-start",
                                              children: [
                                                l.jsx("span", {
                                                  className:
                                                    "w-1.5 h-1.5 bg-ocean-500 rounded-full mt-2 mr-2 flex-shrink-0",
                                                }),
                                                c,
                                              ],
                                            },
                                            u,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    children: [
                                      l.jsxs("h5", {
                                        className:
                                          "font-semibold text-gray-100 mb-2 flex items-center",
                                        children: [
                                          l.jsx(Gh, {
                                            className:
                                              "w-4 h-4 mr-2 text-ocean-400",
                                          }),
                                          t("technologies"),
                                        ],
                                      }),
                                      l.jsx("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: a.technologies.map((c, u) =>
                                          l.jsx(
                                            "span",
                                            {
                                              className:
                                                "px-3 py-1 bg-ocean-500/20 text-ocean-300 text-xs font-medium rounded-full border border-ocean-500/30",
                                              children: c,
                                            },
                                            u,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        a.id,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        l.jsx("section", {
          className: "section-padding bg-surface-800/30",
          children: l.jsxs("div", {
            className: "container-max",
            children: [
              l.jsxs(T.div, {
                variants: V,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "text-center mb-16",
                children: [
                  l.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl font-bold text-gradient-cool mb-4",
                    children: t("specializations"),
                  }),
                  l.jsx("div", {
                    className:
                      "w-20 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                  }),
                ],
              }),
              l.jsx(T.div, {
                variants: Qe,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: i.specializations.map((a) =>
                  l.jsxs(
                    T.div,
                    {
                      variants: V,
                      whileHover: { scale: 1.02 },
                      className: "card p-6 text-center",
                      children: [
                        l.jsx("h3", {
                          className: "text-lg font-semibold text-gray-100 mb-2",
                          children: S(a, "area", e),
                        }),
                        l.jsx("div", {
                          className: "text-sm text-ocean-400 font-medium",
                          children: S(a, "expertise_level", e),
                        }),
                      ],
                    },
                    a.area,
                  ),
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  kk = () => {
    const { language: e } = mt(),
      t = ht(e),
      i = Lt().projects,
      [r, s] = _.useState(null),
      [a, o] = Mn({ triggerOnce: !0, threshold: 0.1 }),
      c = (d) => {
        s(d);
      },
      u = () => {
        s(null);
      };
    return l.jsxs("div", {
      className: "min-h-screen bg-transparent",
      children: [
        l.jsx("section", {
          className: "section-padding ocean-bg pt-24",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsxs(T.div, {
              variants: V,
              initial: "hidden",
              animate: o ? "visible" : "hidden",
              ref: a,
              className: "text-center max-w-4xl mx-auto",
              children: [
                l.jsxs(T.div, {
                  variants: V,
                  className: "inline-block",
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-cool mb-4",
                      children: S(i, "title", e),
                    }),
                    l.jsx("div", {
                      className:
                        "w-24 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                    }),
                  ],
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-400 leading-relaxed mt-6",
                  children: t("projectsSubtitle"),
                }),
              ],
            }),
          }),
        }),
        l.jsx("section", {
          className: "section-padding",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsx(T.div, {
              variants: Qe,
              initial: "hidden",
              whileInView: "visible",
              viewport: G,
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: i.projects.map((d) =>
                l.jsxs(
                  T.div,
                  {
                    variants: V,
                    whileHover: { y: -8, scale: 1.02 },
                    className: "card card-hover cursor-pointer overflow-hidden",
                    onClick: () => c(d),
                    children: [
                      l.jsx("div", {
                        className: "aspect-video overflow-hidden",
                        children: l.jsx("img", {
                          src: d.images[0],
                          alt: S(d, "name", e),
                          className:
                            "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
                        }),
                      }),
                      l.jsxs("div", {
                        className: "p-6",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                              l.jsx("span", {
                                className:
                                  "px-3 py-1 bg-ocean-500/20 text-ocean-300 text-xs font-medium rounded-full border border-ocean-500/30",
                                children: S(d, "category", e),
                              }),
                              l.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: d.year,
                              }),
                            ],
                          }),
                          l.jsx("h3", {
                            className: "text-xl font-bold text-gray-100 mb-2",
                            children: S(d, "name", e),
                          }),
                          l.jsx("p", {
                            className: "text-gray-400 mb-4 line-clamp-3",
                            children: S(d, "description", e),
                          }),
                          l.jsxs("div", {
                            className: "flex flex-wrap gap-2 mb-4",
                            children: [
                              d.technologies.slice(0, 3).map((p, f) =>
                                l.jsx(
                                  "span",
                                  {
                                    className:
                                      "px-2 py-1 bg-white/10 text-gray-300 text-xs rounded",
                                    children: p,
                                  },
                                  f,
                                ),
                              ),
                              d.technologies.length > 3 &&
                                l.jsxs("span", {
                                  className:
                                    "px-2 py-1 bg-white/10 text-gray-300 text-xs rounded",
                                  children: [
                                    "+",
                                    d.technologies.length - 3,
                                    " more",
                                  ],
                                }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "flex items-center text-ocean-400 font-medium text-sm",
                            children: [
                              l.jsx("span", { children: t("viewDetails") }),
                              l.jsx(Ws, { className: "w-4 h-4 ml-2" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  d.id,
                ),
              ),
            }),
          }),
        }),
        l.jsx("section", {
          className: "section-padding bg-surface-800/30",
          children: l.jsxs("div", {
            className: "container-max",
            children: [
              l.jsxs(T.div, {
                variants: V,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "text-center mb-16",
                children: [
                  l.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl font-bold text-gradient-cool mb-4",
                    children: t("projectCategories"),
                  }),
                  l.jsx("div", {
                    className:
                      "w-20 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                  }),
                ],
              }),
              l.jsx(T.div, {
                variants: Qe,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: i.project_categories.map((d) =>
                  l.jsxs(
                    T.div,
                    {
                      variants: V,
                      whileHover: { scale: 1.02 },
                      className: "card p-6 text-center",
                      children: [
                        l.jsx("h3", {
                          className: "text-xl font-semibold text-gray-100 mb-2",
                          children: S(d, "name", e),
                        }),
                        l.jsx("p", {
                          className: "text-gray-400 mb-4",
                          children: S(d, "description", e),
                        }),
                        l.jsxs("div", {
                          className: "text-2xl font-bold text-ocean-400",
                          children: [d.count, " ", t("projectsCount")],
                        }),
                      ],
                    },
                    d.name,
                  ),
                ),
              }),
            ],
          }),
        }),
        l.jsx($s, {
          children:
            r &&
            l.jsx(T.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",
              onClick: u,
              children: l.jsxs(T.div, {
                initial: { scale: 0.9, opacity: 0, y: 20 },
                animate: { scale: 1, opacity: 1, y: 0 },
                exit: { scale: 0.9, opacity: 0, y: 20 },
                transition: { type: "spring", stiffness: 300, damping: 30 },
                className:
                  "glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-glow-ocean",
                onClick: (d) => d.stopPropagation(),
                children: [
                  l.jsxs("div", {
                    className: "relative",
                    children: [
                      l.jsx("img", {
                        src: r.images[0],
                        alt: S(r, "name", e),
                        className: "w-full h-64 object-cover rounded-t-2xl",
                      }),
                      l.jsx("button", {
                        onClick: u,
                        className:
                          "absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-200",
                        children: l.jsx(Kh, {
                          className: "w-6 h-6 text-gray-100",
                        }),
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "p-8",
                    children: [
                      l.jsx("div", {
                        className: "flex items-start justify-between mb-6",
                        children: l.jsxs("div", {
                          children: [
                            l.jsxs("div", {
                              className: "flex items-center space-x-4 mb-2",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "px-3 py-1 bg-ocean-500/20 text-ocean-300 text-sm font-medium rounded-full border border-ocean-500/30",
                                  children: S(r, "category", e),
                                }),
                                l.jsx("span", {
                                  className:
                                    "px-3 py-1 bg-white/10 text-gray-300 text-sm font-medium rounded-full",
                                  children: S(r, "status", e),
                                }),
                              ],
                            }),
                            l.jsx("h2", {
                              className:
                                "text-3xl font-bold text-gray-100 mb-2",
                              children: S(r, "name", e),
                            }),
                            l.jsxs("div", {
                              className:
                                "flex items-center space-x-6 text-sm text-gray-400",
                              children: [
                                l.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    l.jsx(kr, { className: "w-4 h-4 mr-2" }),
                                    r.year,
                                  ],
                                }),
                                l.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    l.jsx(Uh, { className: "w-4 h-4 mr-2" }),
                                    S(r, "duration", e),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      l.jsx("p", {
                        className: "text-lg text-gray-300 mb-6 leading-relaxed",
                        children: S(r, "description", e),
                      }),
                      l.jsxs("div", {
                        className: "mb-6",
                        children: [
                          l.jsxs("h3", {
                            className:
                              "text-xl font-semibold text-gray-100 mb-4 flex items-center",
                            children: [
                              l.jsx($h, {
                                className: "w-5 h-5 mr-2 text-ocean-400",
                              }),
                              t("keyFeatures"),
                            ],
                          }),
                          l.jsx("div", {
                            className: "grid md:grid-cols-2 gap-2",
                            children: ft(r, "features", e).map((d, p) =>
                              l.jsxs(
                                "div",
                                {
                                  className: "flex items-start",
                                  children: [
                                    l.jsx("span", {
                                      className:
                                        "w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0",
                                    }),
                                    l.jsx("span", {
                                      className: "text-gray-300",
                                      children: d,
                                    }),
                                  ],
                                },
                                p,
                              ),
                            ),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6 mb-6",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsxs("h3", {
                                className:
                                  "text-lg font-semibold text-gray-100 mb-3 flex items-center",
                                children: [
                                  l.jsx(O_, {
                                    className: "w-5 h-5 mr-2 text-orange-400",
                                  }),
                                  t("challenges"),
                                ],
                              }),
                              l.jsx("p", {
                                className: "text-gray-300",
                                children: S(r, "challenges", e),
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            children: [
                              l.jsxs("h3", {
                                className:
                                  "text-lg font-semibold text-gray-100 mb-3 flex items-center",
                                children: [
                                  l.jsx(pr, {
                                    className: "w-5 h-5 mr-2 text-green-400",
                                  }),
                                  t("solutions"),
                                ],
                              }),
                              l.jsx("p", {
                                className: "text-gray-300",
                                children: S(r, "solutions", e),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "mb-6",
                        children: [
                          l.jsx("h3", {
                            className:
                              "text-xl font-semibold text-gray-100 mb-4",
                            children: t("results"),
                          }),
                          l.jsx("div", {
                            className: "grid md:grid-cols-2 gap-2",
                            children: ft(r, "results", e).map((d, p) =>
                              l.jsxs(
                                "div",
                                {
                                  className: "flex items-start",
                                  children: [
                                    l.jsx("span", {
                                      className:
                                        "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0",
                                    }),
                                    l.jsx("span", {
                                      className: "text-gray-300",
                                      children: d,
                                    }),
                                  ],
                                },
                                p,
                              ),
                            ),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "mb-6",
                        children: [
                          l.jsx("h3", {
                            className:
                              "text-xl font-semibold text-gray-100 mb-4",
                            children: t("technologiesUsed"),
                          }),
                          l.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: r.technologies.map((d, p) =>
                              l.jsx(
                                "span",
                                {
                                  className:
                                    "px-3 py-1 bg-ocean-500/20 text-ocean-300 text-sm font-medium rounded-full border border-ocean-500/30",
                                  children: d,
                                },
                                p,
                              ),
                            ),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex flex-wrap gap-4",
                        children: [
                          r.demo_url &&
                            l.jsxs("a", {
                              href: r.demo_url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "btn-primary flex items-center",
                              children: [
                                l.jsx($_, { className: "w-4 h-4 mr-2" }),
                                t("viewDemo"),
                              ],
                            }),
                          r.github_url &&
                            l.jsxs("a", {
                              href: r.github_url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "btn-secondary flex items-center",
                              children: [
                                l.jsx(Ac, { className: "w-4 h-4 mr-2" }),
                                "GitHub",
                              ],
                            }),
                          r.live_url &&
                            l.jsxs("a", {
                              href: r.live_url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "btn-secondary flex items-center",
                              children: [
                                l.jsx(Ws, { className: "w-4 h-4 mr-2" }),
                                t("liveSite"),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
      ],
    });
  },
  Sk = () => {
    const { language: e } = mt(),
      t = ht(e),
      i = Lt().skills,
      [r, s] = Mn({ triggerOnce: !0, threshold: 0.1 }),
      a = { "paint-brush": Us, server: H_, cloud: I_, brain: R_ },
      o = (u) => {
        switch (u) {
          case "Expert":
            return "text-green-400 bg-green-500/20 border-green-500/30";
          case "Advanced":
            return "text-blue-400 bg-blue-500/20 border-blue-500/30";
          case "Intermediate":
            return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30";
          case "Beginner":
            return "text-red-400 bg-red-500/20 border-red-500/30";
          default:
            return "text-gray-400 bg-white/10 border-white/10";
        }
      },
      c = (u) => {
        switch (u) {
          case "Expert":
            return 90;
          case "Advanced":
            return 75;
          case "Intermediate":
            return 60;
          case "Beginner":
            return 30;
          default:
            return 50;
        }
      };
    return l.jsxs("div", {
      className: "min-h-screen bg-transparent",
      children: [
        l.jsx("section", {
          className: "section-padding ocean-bg pt-24",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsxs(T.div, {
              variants: V,
              initial: "hidden",
              animate: s ? "visible" : "hidden",
              ref: r,
              className: "text-center max-w-4xl mx-auto",
              children: [
                l.jsxs(T.div, {
                  variants: V,
                  className: "inline-block",
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-cool mb-4",
                      children: S(i, "title", e),
                    }),
                    l.jsx("div", {
                      className:
                        "w-24 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                    }),
                  ],
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-400 leading-relaxed mt-6",
                  children: t("skillsSubtitle"),
                }),
              ],
            }),
          }),
        }),
        l.jsx("section", {
          className: "section-padding",
          children: l.jsxs("div", {
            className: "container-max",
            children: [
              l.jsx(T.div, {
                variants: V,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "text-center mb-16",
                children: l.jsx("h2", {
                  className:
                    "text-3xl sm:text-4xl font-heading font-bold text-gray-100 mb-4",
                  children: t("skillCategories"),
                }),
              }),
              l.jsx("div", {
                className: "space-y-16",
                children: i.categories.map((u, d) => {
                  const p = a[u.icon] || Us;
                  return l.jsxs(
                    T.div,
                    {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: G,
                      transition: { duration: 0.8, delay: d * 0.1 },
                      className: "card p-8",
                      children: [
                        l.jsxs("div", {
                          className: "flex items-center mb-8",
                          children: [
                            l.jsx("div", {
                              className:
                                "w-16 h-16 rounded-xl flex items-center justify-center mr-6 border border-white/10",
                              style: { backgroundColor: `${u.color}20` },
                              children: l.jsx(p, {
                                className: "w-8 h-8",
                                style: { color: u.color },
                              }),
                            }),
                            l.jsxs("div", {
                              children: [
                                l.jsx("h3", {
                                  className:
                                    "text-2xl font-heading font-bold text-gray-100 mb-2",
                                  children: S(u, "name", e),
                                }),
                                l.jsx("p", {
                                  className: "text-gray-400",
                                  children: S(u, "description", e),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l.jsx(T.div, {
                          variants: Qe,
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: G,
                          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                          children: u.skills.map((f) =>
                            l.jsxs(
                              T.div,
                              {
                                variants: V,
                                whileHover: { scale: 1.02 },
                                className:
                                  "border border-white/10 rounded-lg p-6 hover:border-ocean-500/20 hover:shadow-glow-ocean-sm transition-all duration-300 bg-white/5",
                                children: [
                                  l.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-4",
                                    children: [
                                      l.jsx("h4", {
                                        className:
                                          "text-lg font-semibold text-gray-100",
                                        children: S(f, "name", e),
                                      }),
                                      l.jsx("span", {
                                        className: `px-3 py-1 rounded-full text-xs font-medium border ${o(f.level)}`,
                                        children: S(f, "level", e),
                                      }),
                                    ],
                                  }),
                                  l.jsx("p", {
                                    className:
                                      "text-gray-400 text-sm mb-4 leading-relaxed",
                                    children: S(f, "description", e),
                                  }),
                                  l.jsxs("div", {
                                    className: "space-y-3",
                                    children: [
                                      l.jsxs("div", {
                                        className:
                                          "flex items-center justify-between text-sm",
                                        children: [
                                          l.jsxs("span", {
                                            className:
                                              "text-gray-400 flex items-center",
                                            children: [
                                              l.jsx(kr, {
                                                className: "w-4 h-4 mr-2",
                                              }),
                                              t("experienceLabel"),
                                            ],
                                          }),
                                          l.jsxs("span", {
                                            className:
                                              "font-medium text-gray-200",
                                            children: [
                                              f.years_experience,
                                              " ",
                                              t("years"),
                                            ],
                                          }),
                                        ],
                                      }),
                                      l.jsxs("div", {
                                        className:
                                          "flex items-center justify-between text-sm",
                                        children: [
                                          l.jsxs("span", {
                                            className:
                                              "text-gray-400 flex items-center",
                                            children: [
                                              l.jsx(Gh, {
                                                className: "w-4 h-4 mr-2",
                                              }),
                                              t("projectsUsed"),
                                            ],
                                          }),
                                          l.jsx("span", {
                                            className:
                                              "font-medium text-gray-200",
                                            children: f.projects_used,
                                          }),
                                        ],
                                      }),
                                      l.jsxs("div", {
                                        children: [
                                          l.jsxs("div", {
                                            className:
                                              "flex items-center justify-between text-xs text-gray-400 mb-1",
                                            children: [
                                              l.jsx("span", {
                                                children: t("proficiency"),
                                              }),
                                              l.jsxs("span", {
                                                children: [c(f.level), "%"],
                                              }),
                                            ],
                                          }),
                                          l.jsx("div", {
                                            className:
                                              "w-full bg-white/10 rounded-full h-2",
                                            children: l.jsx("div", {
                                              className:
                                                "h-2 rounded-full transition-all duration-1000",
                                              style: {
                                                width: `${c(f.level)}%`,
                                                backgroundColor: u.color,
                                              },
                                            }),
                                          }),
                                        ],
                                      }),
                                      f.certifications.length > 0 &&
                                        l.jsxs("div", {
                                          className:
                                            "flex items-center text-sm",
                                          children: [
                                            l.jsx(pr, {
                                              className:
                                                "w-4 h-4 mr-2 text-yellow-400",
                                            }),
                                            l.jsxs("span", {
                                              className: "text-gray-400",
                                              children: [
                                                f.certifications.length,
                                                " ",
                                                t("certifications"),
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              f.name,
                            ),
                          ),
                        }),
                      ],
                    },
                    u.id,
                  );
                }),
              }),
            ],
          }),
        }),
        l.jsx("section", {
          className: "section-padding bg-surface-800/30",
          children: l.jsxs("div", {
            className: "container-max",
            children: [
              l.jsxs(T.div, {
                variants: V,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "text-center mb-12",
                children: [
                  l.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl font-bold text-gradient-cool mb-4",
                    children: t("skillLevels"),
                  }),
                  l.jsx("div", {
                    className:
                      "w-20 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                  }),
                ],
              }),
              l.jsx(T.div, {
                variants: Qe,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: i.skill_levels.map((u) =>
                  l.jsxs(
                    T.div,
                    {
                      variants: V,
                      whileHover: { scale: 1.02 },
                      className: "card p-6 text-center",
                      children: [
                        l.jsx("div", {
                          className:
                            "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10",
                          style: { backgroundColor: `${u.color}20` },
                          children: l.jsx(Dc, {
                            className: "w-8 h-8",
                            style: { color: u.color },
                          }),
                        }),
                        l.jsx("h3", {
                          className: "text-lg font-semibold text-gray-100 mb-2",
                          children: S(u, "level", e),
                        }),
                        l.jsx("p", {
                          className: "text-sm text-gray-400 mb-4",
                          children: S(u, "description", e),
                        }),
                        l.jsxs("div", {
                          className: "text-2xl font-mono font-bold",
                          style: { color: u.color },
                          children: [u.percentage, "%"],
                        }),
                      ],
                    },
                    u.level,
                  ),
                ),
              }),
            ],
          }),
        }),
        l.jsx("section", {
          className: "section-padding",
          children: l.jsxs("div", {
            className: "container-max",
            children: [
              l.jsxs(T.div, {
                variants: V,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "text-center mb-12",
                children: [
                  l.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl font-bold text-gradient-cool mb-4",
                    children: t("learningGoals"),
                  }),
                  l.jsx("div", {
                    className:
                      "w-20 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                  }),
                  l.jsx("p", {
                    className: "text-xl text-gray-400 mt-6",
                    children: t("learningGoalsDesc"),
                  }),
                ],
              }),
              l.jsx(T.div, {
                variants: Qe,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "grid md:grid-cols-3 gap-6",
                children: i.learning_goals.map((u) =>
                  l.jsxs(
                    T.div,
                    {
                      variants: V,
                      whileHover: { scale: 1.02 },
                      className: "card p-6",
                      children: [
                        l.jsx("h3", {
                          className: "text-lg font-semibold text-gray-100 mb-2",
                          children: S(u, "skill", e),
                        }),
                        l.jsx("p", {
                          className: "text-gray-400 mb-4",
                          children: S(u, "reason", e),
                        }),
                        l.jsxs("div", {
                          className: "text-sm text-ocean-400 font-medium",
                          children: [t("targetDate"), ": ", u.target_date],
                        }),
                      ],
                    },
                    u.skill,
                  ),
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  bk = () => {
    const { language: e } = mt(),
      t = ht(e),
      i = Lt().achievements,
      [r, s] = Mn({ triggerOnce: !0, threshold: 0.1 });
    return l.jsxs("div", {
      className: "min-h-screen bg-transparent",
      children: [
        l.jsx("section", {
          className: "section-padding ocean-bg pt-24",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsxs(T.div, {
              variants: V,
              initial: "hidden",
              animate: s ? "visible" : "hidden",
              ref: r,
              className: "text-center max-w-4xl mx-auto",
              children: [
                l.jsxs(T.div, {
                  variants: V,
                  className: "inline-block",
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-cool mb-4",
                      children: S(i, "title", e),
                    }),
                    l.jsx("div", {
                      className:
                        "w-24 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                    }),
                  ],
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-400 leading-relaxed mt-6",
                  children: t("achievementsSubtitle"),
                }),
              ],
            }),
          }),
        }),
        l.jsx("section", {
          className: "section-padding",
          children: l.jsxs("div", {
            className: "container-max",
            children: [
              l.jsxs(T.div, {
                variants: V,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "text-center mb-16",
                children: [
                  l.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl font-bold text-gradient-cool mb-4",
                    children: t("professionalAwards"),
                  }),
                  l.jsx("div", {
                    className:
                      "w-20 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                  }),
                ],
              }),
              l.jsx(T.div, {
                variants: Qe,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "space-y-8",
                children: i.professional_awards.map((a) =>
                  l.jsxs(
                    T.div,
                    {
                      variants: V,
                      whileHover: { scale: 1.01 },
                      className: "card p-8",
                      children: [
                        l.jsxs("div", {
                          className: "flex items-start justify-between mb-6",
                          children: [
                            l.jsxs("div", {
                              className: "flex items-start space-x-4",
                              children: [
                                l.jsx("div", {
                                  className:
                                    "w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-yellow-500/30",
                                  children: l.jsx(pr, {
                                    className: "w-8 h-8 text-yellow-400",
                                  }),
                                }),
                                l.jsxs("div", {
                                  children: [
                                    l.jsx("h3", {
                                      className:
                                        "text-2xl font-bold text-gray-100 mb-2",
                                      children: S(a, "title", e),
                                    }),
                                    l.jsx("p", {
                                      className:
                                        "text-lg text-ocean-400 font-semibold mb-2",
                                      children: S(a, "organization", e),
                                    }),
                                    l.jsxs("div", {
                                      className:
                                        "flex items-center text-sm text-gray-400",
                                      children: [
                                        l.jsx(kr, {
                                          className: "w-4 h-4 mr-2",
                                        }),
                                        a.date,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l.jsx("div", {
                              className: "text-right",
                              children: l.jsx("span", {
                                className:
                                  "px-3 py-1 bg-ocean-500/20 text-ocean-300 text-sm font-medium rounded-full border border-ocean-500/30",
                                children: S(a, "category", e),
                              }),
                            }),
                          ],
                        }),
                        l.jsx("p", {
                          className: "text-gray-300 mb-4 leading-relaxed",
                          children: S(a, "description", e),
                        }),
                        l.jsxs("div", {
                          className: "grid md:grid-cols-2 gap-6 mb-6",
                          children: [
                            l.jsxs("div", {
                              children: [
                                l.jsx("h4", {
                                  className: "font-semibold text-gray-100 mb-2",
                                  children: t("relatedProject"),
                                }),
                                l.jsx("p", {
                                  className: "text-gray-400",
                                  children: S(a, "project_related", e),
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              children: [
                                l.jsx("h4", {
                                  className: "font-semibold text-gray-100 mb-2",
                                  children: t("impact"),
                                }),
                                l.jsx("p", {
                                  className: "text-gray-400",
                                  children: S(a, "impact", e),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [
                            l.jsxs("div", {
                              className:
                                "flex items-center text-sm text-gray-400",
                              children: [
                                l.jsx(Dc, {
                                  className: "w-4 h-4 mr-1 text-yellow-400",
                                }),
                                l.jsx("span", { children: "5.0" }),
                              ],
                            }),
                            l.jsx("div", {
                              className: "text-sm text-gray-400",
                              children: a.date,
                            }),
                          ],
                        }),
                      ],
                    },
                    a.id,
                  ),
                ),
              }),
            ],
          }),
        }),
        l.jsx("section", {
          className: "section-padding bg-surface-800/30",
          children: l.jsxs("div", {
            className: "container-max",
            children: [
              l.jsxs(T.div, {
                variants: V,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "text-center mb-16",
                children: [
                  l.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl font-bold text-gradient-cool mb-4",
                    children: t("certifications"),
                  }),
                  l.jsx("div", {
                    className:
                      "w-20 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                  }),
                ],
              }),
              l.jsx(T.div, {
                variants: Qe,
                initial: "hidden",
                whileInView: "visible",
                viewport: G,
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: i.certifications.map((a) =>
                  l.jsxs(
                    T.div,
                    {
                      variants: V,
                      whileHover: { scale: 1.02 },
                      className: "card p-6",
                      children: [
                        l.jsxs("div", {
                          className: "flex items-start justify-between mb-4",
                          children: [
                            l.jsxs("div", {
                              children: [
                                l.jsx("h3", {
                                  className:
                                    "text-lg font-semibold text-gray-100 mb-1",
                                  children: S(a, "name", e),
                                }),
                                l.jsx("p", {
                                  className:
                                    "text-sm text-ocean-400 font-medium",
                                  children: S(a, "issuer", e),
                                }),
                              ],
                            }),
                            l.jsx(pr, { className: "w-6 h-6 text-yellow-400" }),
                          ],
                        }),
                        l.jsx("p", {
                          className: "text-gray-400 text-sm mb-4",
                          children: S(a, "description", e),
                        }),
                        l.jsxs("div", {
                          className: "space-y-2 text-xs text-gray-500 mb-4",
                          children: [
                            l.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                l.jsxs("span", {
                                  children: [t("earned"), ":"],
                                }),
                                l.jsx("span", { children: a.date_earned }),
                              ],
                            }),
                            l.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                l.jsxs("span", {
                                  children: [t("expires"), ":"],
                                }),
                                l.jsx("span", { children: a.expiry_date }),
                              ],
                            }),
                          ],
                        }),
                        l.jsx("div", {
                          className: "flex flex-wrap gap-1 mb-4",
                          children: ft(a, "skills_covered", e).map((o, c) =>
                            l.jsx(
                              "span",
                              {
                                className:
                                  "px-2 py-1 bg-white/10 text-gray-300 text-xs rounded",
                                children: o,
                              },
                              c,
                            ),
                          ),
                        }),
                        l.jsxs("a", {
                          href: a.verification_url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center text-sm text-ocean-400 hover:text-ocean-300 transition-colors duration-200",
                          children: [
                            l.jsx(Ws, { className: "w-4 h-4 mr-2" }),
                            t("verify"),
                          ],
                        }),
                      ],
                    },
                    a.id,
                  ),
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Ck = () => {
    const { language: e } = mt(),
      t = ht(e),
      i = Lt().testimonials,
      [r, s] = Mn({ triggerOnce: !0, threshold: 0.1 });
    return l.jsxs("div", {
      className: "min-h-screen bg-transparent",
      children: [
        l.jsx("section", {
          className: "section-padding ocean-bg pt-24",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsxs(T.div, {
              variants: V,
              initial: "hidden",
              animate: s ? "visible" : "hidden",
              ref: r,
              className: "text-center max-w-4xl mx-auto",
              children: [
                l.jsxs(T.div, {
                  variants: V,
                  className: "inline-block",
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-cool mb-4",
                      children: S(i, "title", e),
                    }),
                    l.jsx("div", {
                      className:
                        "w-24 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                    }),
                  ],
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-400 leading-relaxed mt-6",
                  children: t("testimonialsSubtitle"),
                }),
              ],
            }),
          }),
        }),
        l.jsx("section", {
          className: "section-padding",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsx(T.div, {
              variants: Qe,
              initial: "hidden",
              whileInView: "visible",
              viewport: G,
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
              children: i.testimonials.map((a) =>
                l.jsxs(
                  T.div,
                  {
                    variants: V,
                    whileHover: { y: -5, scale: 1.02 },
                    className: "card p-6 h-full flex flex-col",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-start space-x-4 mb-4",
                        children: [
                          l.jsxs(T.div, {
                            whileHover: { scale: 1.05 },
                            transition: { duration: 0.3 },
                            className: "flex-shrink-0 relative",
                            children: [
                              l.jsx("img", {
                                src: a.photo_url,
                                alt: S(a, "name", e),
                                className:
                                  "w-12 h-12 rounded-full object-cover shadow-glow-ocean-sm border border-ocean-500/30",
                              }),
                              l.jsx("div", {
                                className:
                                  "absolute -bottom-1 -right-1 w-6 h-6 bg-ocean-500 rounded-full flex items-center justify-center",
                                children: l.jsx(qd, {
                                  className: "w-3 h-3 text-white",
                                }),
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex-1",
                            children: [
                              l.jsx(qd, {
                                className: "w-6 h-6 text-ocean-500/40 mb-2",
                              }),
                              l.jsxs("p", {
                                className:
                                  "text-sm text-gray-300 leading-relaxed italic line-clamp-4",
                                children: ['"', S(a, "testimonial", e), '"'],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsx("div", {
                        className: "flex items-center space-x-1 mb-4",
                        children: [...Array(5)].map((o, c) =>
                          l.jsx(
                            Dc,
                            {
                              className: `w-4 h-4 transition-all duration-300 ${c < a.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`,
                            },
                            c,
                          ),
                        ),
                      }),
                      l.jsxs("div", {
                        className: "border-t border-white/10 pt-4 flex-1",
                        children: [
                          l.jsxs("div", {
                            className: "mb-4",
                            children: [
                              l.jsx("h3", {
                                className:
                                  "text-lg font-bold text-gray-100 mb-1",
                                children: S(a, "name", e),
                              }),
                              l.jsx("p", {
                                className:
                                  "text-ocean-400 font-semibold text-sm",
                                children: S(a, "position", e),
                              }),
                              l.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: S(a, "company", e),
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "flex items-center justify-between text-xs text-gray-500 mb-4",
                            children: [
                              l.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  l.jsx(kr, { className: "w-3 h-3 mr-1" }),
                                  l.jsx("span", { children: a.date }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  l.jsx(Lc, { className: "w-3 h-3 mr-1" }),
                                  l.jsx("span", {
                                    children: S(a, "relationship", e),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "mb-4",
                            children: [
                              l.jsx("h4", {
                                className:
                                  "text-xs font-semibold text-gray-200 mb-2",
                                children: t("keyQualities"),
                              }),
                              l.jsx("div", {
                                className: "flex flex-wrap gap-1",
                                children: ft(a, "key_qualities", e)
                                  .slice(0, 3)
                                  .map((o, c) =>
                                    l.jsx(
                                      "span",
                                      {
                                        className:
                                          "px-2 py-1 bg-ocean-500/20 text-ocean-300 text-xs font-medium rounded-full border border-ocean-500/30",
                                        children: o,
                                      },
                                      c,
                                    ),
                                  ),
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "mb-4",
                            children: [
                              l.jsx("h4", {
                                className:
                                  "text-xs font-semibold text-gray-200 mb-1",
                                children: t("relatedProject"),
                              }),
                              l.jsx("p", {
                                className: "text-xs text-gray-400 line-clamp-2",
                                children: S(a, "project_context", e),
                              }),
                            ],
                          }),
                          l.jsx("div", {
                            className: "mt-auto",
                            children: l.jsxs("a", {
                              href: a.linkedin_url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "inline-flex items-center text-xs text-ocean-400 hover:text-ocean-300 transition-all duration-300 hover:scale-105",
                              children: [
                                l.jsx(Ws, { className: "w-3 h-3 mr-1" }),
                                t("viewOnLinkedIn"),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  a.id,
                ),
              ),
            }),
          }),
        }),
      ],
    });
  },
  Nk = () => {
    const { language: e } = mt(),
      t = ht(e),
      i = Lt().contact,
      [r, s] = Mn({ triggerOnce: !0, threshold: 0.1 }),
      [a, o] = _.useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
      }),
      [c, u] = _.useState(!1),
      d = (g) => {
        const { name: y, value: x } = g.target;
        o((w) => ({ ...w, [y]: x }));
      },
      p = async (g) => {
        (g.preventDefault(),
          u(!0),
          await new Promise((y) => setTimeout(y, 2e3)),
          py.success(S(i.contact_form.submit_button, "success_text", e)),
          o({
            name: "",
            email: "",
            company: "",
            subject: "",
            message: "",
            budget: "",
            timeline: "",
          }),
          u(!1));
      },
      f = { github: Ac, linkedin: Hh };
    return l.jsxs("div", {
      className: "min-h-screen bg-transparent",
      children: [
        l.jsx("section", {
          className: "section-padding ocean-bg pt-24",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsxs(T.div, {
              variants: V,
              initial: "hidden",
              animate: s ? "visible" : "hidden",
              ref: r,
              className: "text-center max-w-4xl mx-auto",
              children: [
                l.jsxs(T.div, {
                  variants: V,
                  className: "inline-block",
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-cool mb-4",
                      children: S(i, "title", e),
                    }),
                    l.jsx("div", {
                      className:
                        "w-24 h-1 bg-gradient-to-r from-ocean-500 to-purple-500 mx-auto rounded-full",
                    }),
                  ],
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-400 leading-relaxed mt-6",
                  children: S(i, "description", e),
                }),
              ],
            }),
          }),
        }),
        l.jsx("section", {
          className: "section-padding",
          children: l.jsx("div", {
            className: "container-max",
            children: l.jsxs("div", {
              className: "grid lg:grid-cols-2 gap-12",
              style: { gridTemplateColumns: "inherit" },
              children: [
                l.jsxs(T.div, {
                  variants: V,
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: G,
                  transition: { delay: 0.4 },
                  className: "space-y-8",
                  children: [
                    l.jsxs("div", {
                      className: "card p-8",
                      children: [
                        l.jsx("h3", {
                          className: "text-xl font-bold text-gray-100 mb-6",
                          children: t("contactInformation"),
                        }),
                        l.jsxs("div", {
                          className: "space-y-6",
                          children: [
                            l.jsxs("div", {
                              className: "flex items-start space-x-4",
                              children: [
                                l.jsx(Qd, {
                                  className: "w-6 h-6 text-ocean-400 mt-1",
                                }),
                                l.jsxs("div", {
                                  children: [
                                    l.jsx("h4", {
                                      className: "font-semibold text-gray-100",
                                      children: S(
                                        i.contact_info.email,
                                        "label",
                                        e,
                                      ),
                                    }),
                                    l.jsx("p", {
                                      className: "text-gray-300",
                                      children: i.contact_info.email.address,
                                    }),
                                    l.jsx("p", {
                                      className: "text-sm text-gray-500",
                                      children: S(
                                        i.contact_info.email,
                                        "description",
                                        e,
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className: "flex items-start space-x-4",
                              children: [
                                l.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24",
                                  className: "w-6 h-6 text-ocean-400 mt-1",
                                  children: l.jsx("path", {
                                    d: "M21 3 2 12l6 2 3 6 9-17z",
                                    fill: "none",
                                    stroke: "#7dd3fc",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    key: "tg1",
                                  }),
                                }),
                                l.jsxs("div", {
                                  children: [
                                    l.jsx("h4", {
                                      className: "font-semibold text-gray-100",
                                      children: S(
                                        i.contact_info.telegram,
                                        "label",
                                        e,
                                      ),
                                    }),
                                    l.jsx("p", {
                                      className: "text-gray-300",
                                      children:
                                        i.contact_info.telegram.username,
                                    }),
                                    l.jsx("p", {
                                      className: "text-sm text-gray-500",
                                      children: S(
                                        i.contact_info.telegram,
                                        "description",
                                        e,
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className: "flex items-start space-x-4",
                              children: [
                                l.jsx(B_, {
                                  className: "w-6 h-6 text-ocean-400 mt-1",
                                }),
                                l.jsxs("div", {
                                  children: [
                                    l.jsx("h4", {
                                      className: "font-semibold text-gray-100",
                                      children: S(
                                        i.contact_info.phone,
                                        "label",
                                        e,
                                      ),
                                    }),
                                    l.jsx("p", {
                                      className: "text-gray-300",
                                      children: i.contact_info.phone.number,
                                    }),
                                    l.jsx("p", {
                                      className: "text-sm text-gray-500",
                                      children: S(
                                        i.contact_info.phone,
                                        "description",
                                        e,
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className: "flex items-start space-x-4",
                              children: [
                                l.jsx(Lc, {
                                  className: "w-6 h-6 text-ocean-400 mt-1",
                                }),
                                l.jsxs("div", {
                                  children: [
                                    l.jsx("h4", {
                                      className: "font-semibold text-gray-100",
                                      children: S(
                                        i.contact_info.location,
                                        "label",
                                        e,
                                      ),
                                    }),
                                    l.jsx("p", {
                                      className: "text-gray-300",
                                      children: i.contact_info.location.address,
                                    }),
                                    l.jsx("p", {
                                      className: "text-sm text-gray-500",
                                      children: S(
                                        i.contact_info.location,
                                        "description",
                                        e,
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "card p-8",
                      children: [
                        l.jsx("h3", {
                          className: "text-xl font-bold text-gray-100 mb-4",
                          children: t("availability"),
                        }),
                        l.jsxs("div", {
                          className: "flex items-center space-x-2 mb-4",
                          children: [
                            l.jsx($h, { className: "w-5 h-5 text-green-400" }),
                            l.jsx("span", {
                              className: "font-semibold text-green-400",
                              children: S(i.availability, "status", e),
                            }),
                          ],
                        }),
                        l.jsx("p", {
                          className: "text-gray-400 mb-4",
                          children: S(i.availability, "description", e),
                        }),
                        l.jsxs("div", {
                          className: "text-sm text-gray-500",
                          children: [
                            l.jsx("p", {
                              children: S(i.availability, "response_time", e),
                            }),
                            l.jsx("p", {
                              children: S(i.availability, "working_hours", e),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  Pk = () => null;
function Tk() {
  const language = "en";
  return l.jsx(K_, {
    value: { language, setLanguage: () => {} },
    children: l.jsxs("div", {
      className: "relative min-h-screen bg-surface-900 text-gray-100",
      children: [
        l.jsx(E_, {}),
        l.jsx(X_, {}),
        l.jsxs("main", {
          className: "relative z-10 overflow-x-hidden",
          children: [
            l.jsx("section", { id: "home", children: l.jsx(hk, {}) }),
            l.jsx("section", { id: "about", children: l.jsx(_k, {}) }),
            l.jsx("section", { id: "experience", children: l.jsx(wk, {}) }),
            l.jsx("section", { id: "projects", children: l.jsx(kk, {}) }),
            l.jsx("section", { id: "skills", children: l.jsx(Sk, {}) }),
            l.jsx("section", { id: "achievements", children: l.jsx(bk, {}) }),
            l.jsx("section", { id: "testimonials", children: l.jsx(Ck, {}) }),
            l.jsx("section", { id: "contact", children: l.jsx(Nk, {}) }),
          ],
        }),
        l.jsx(Pk, {}),
        l.jsx(dy, {
          position: "top-right",
          toastOptions: {
            duration: 4e3,
            style: { background: "#363636", color: "#fff" },
          },
        }),
      ],
    }),
  });
}
io.createRoot(document.getElementById("root")).render(
  l.jsx(vl.StrictMode, { children: l.jsx(Tk, {}) }),
);
//# sourceMappingURL=index-bd2e8e52.js.map
