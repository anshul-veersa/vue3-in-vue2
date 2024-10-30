/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const U = {}, Ze = [], de = () => {
}, Ki = () => !1, Bt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), As = (e) => e.startsWith("onUpdate:"), G = Object.assign, Rs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, qi = Object.prototype.hasOwnProperty, F = (e, t) => qi.call(e, t), A = Array.isArray, Qe = (e) => Wt(e) === "[object Map]", Mn = (e) => Wt(e) === "[object Set]", R = (e) => typeof e == "function", J = (e) => typeof e == "string", Ve = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", In = (e) => (q(e) || R(e)) && R(e.then) && R(e.catch), Dn = Object.prototype.toString, Wt = (e) => Dn.call(e), Gi = (e) => Wt(e).slice(8, -1), Kt = (e) => Wt(e) === "[object Object]", Ns = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ut = /* @__PURE__ */ Ps(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Ji = /-(\w)/g, pe = qt(
  (e) => e.replace(Ji, (t, s) => s ? s.toUpperCase() : "")
), Yi = /\B([A-Z])/g, ae = qt(
  (e) => e.replace(Yi, "-$1").toLowerCase()
), Fn = qt((e) => e.charAt(0).toUpperCase() + e.slice(1)), ts = qt(
  (e) => e ? `on${Fn(e)}` : ""
), je = (e, t) => !Object.is(e, t), ss = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Hn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, zi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, tn = (e) => {
  const t = J(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let sn;
const Gt = () => sn || (sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ms(e) {
  if (A(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = J(n) ? ki(n) : Ms(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (J(e) || q(e))
    return e;
}
const Xi = /;(?![^(]*\))/g, Zi = /:([^]+)/, Qi = /\/\*[^]*?\*\//g;
function ki(e) {
  const t = {};
  return e.replace(Qi, "").split(Xi).forEach((s) => {
    if (s) {
      const n = s.split(Zi);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Is(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (A(e))
    for (let s = 0; s < e.length; s++) {
      const n = Is(e[s]);
      n && (t += n + " ");
    }
  else if (q(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const er = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tr = /* @__PURE__ */ Ps(er);
function jn(e) {
  return !!e || e === "";
}
const Ln = (e) => !!(e && e.__v_isRef === !0), _s = (e) => J(e) ? e : e == null ? "" : A(e) || q(e) && (e.toString === Dn || !R(e.toString)) ? Ln(e) ? _s(e.value) : JSON.stringify(e, Vn, 2) : String(e), Vn = (e, t) => Ln(t) ? Vn(e, t.value) : Qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[ns(n, r) + " =>"] = i, s),
    {}
  )
} : Mn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => ns(s))
} : Ve(t) ? ns(t) : q(t) && !A(t) && !Kt(t) ? String(t) : t, ns = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ve(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
var sr = { NODE_ENV: "production" };
let ce;
class nr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ce, !t && ce && (this.index = (ce.scopes || (ce.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ce;
      try {
        return ce = this, t();
      } finally {
        ce = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ce = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ce = this.parent;
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ir() {
  return ce;
}
let $;
const is = /* @__PURE__ */ new WeakSet();
class $n {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ce && ce.active && ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, is.has(this) && (is.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Bn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, nn(this), Wn(this);
    const t = $, s = _e;
    $ = this, _e = !0;
    try {
      return this.fn();
    } finally {
      Kn(this), $ = t, _e = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hs(t);
      this.deps = this.depsTail = void 0, nn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? is.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gs(this) && this.run();
  }
  get dirty() {
    return gs(this);
  }
}
let Un = 0, at, ht;
function Bn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ht, ht = e;
    return;
  }
  e.next = at, at = e;
}
function Ds() {
  Un++;
}
function Fs() {
  if (--Un > 0)
    return;
  if (ht) {
    let t = ht;
    for (ht = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; at; ) {
    let t = at;
    for (at = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function Wn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Kn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), Hs(n), rr(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function gs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bt))
    return;
  e.globalVersion = bt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !gs(e)) {
    e.flags &= -3;
    return;
  }
  const s = $, n = _e;
  $ = e, _e = !0;
  try {
    Wn(e);
    const i = e.fn(e._value);
    (t.version === 0 || je(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    $ = s, _e = n, Kn(e), e.flags &= -3;
  }
}
function Hs(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Hs(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function rr(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let _e = !0;
const Gn = [];
function Re() {
  Gn.push(_e), _e = !1;
}
function Ne() {
  const e = Gn.pop();
  _e = e === void 0 ? !0 : e;
}
function nn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = $;
    $ = void 0;
    try {
      t();
    } finally {
      $ = s;
    }
  }
}
let bt = 0;
class or {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class js {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!$ || !_e || $ === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== $)
      s = this.activeLink = new or($, this), $.deps ? (s.prevDep = $.depsTail, $.depsTail.nextDep = s, $.depsTail = s) : $.deps = $.depsTail = s, Jn(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = $.depsTail, s.nextDep = void 0, $.depsTail.nextDep = s, $.depsTail = s, $.deps === s && ($.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, bt++, this.notify(t);
  }
  notify(t) {
    Ds();
    try {
      sr.NODE_ENV;
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Fs();
    }
  }
}
function Jn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Jn(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const ms = /* @__PURE__ */ new WeakMap(), Je = Symbol(
  ""
), bs = Symbol(
  ""
), yt = Symbol(
  ""
);
function Q(e, t, s) {
  if (_e && $) {
    let n = ms.get(e);
    n || ms.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new js()), i.map = n, i.key = s), i.track();
  }
}
function Ae(e, t, s, n, i, r) {
  const o = ms.get(e);
  if (!o) {
    bt++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (Ds(), t === "clear")
    o.forEach(c);
  else {
    const u = A(e), d = u && Ns(s);
    if (u && s === "length") {
      const a = Number(n);
      o.forEach((p, S) => {
        (S === "length" || S === yt || !Ve(S) && S >= a) && c(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && c(o.get(s)), d && c(o.get(yt)), t) {
        case "add":
          u ? d && c(o.get("length")) : (c(o.get(Je)), Qe(e) && c(o.get(bs)));
          break;
        case "delete":
          u || (c(o.get(Je)), Qe(e) && c(o.get(bs)));
          break;
        case "set":
          Qe(e) && c(o.get(Je));
          break;
      }
  }
  Fs();
}
function ze(e) {
  const t = D(e);
  return t === e ? t : (Q(t, "iterate", yt), ge(e) ? t : t.map(se));
}
function Ls(e) {
  return Q(e = D(e), "iterate", yt), e;
}
const lr = {
  __proto__: null,
  [Symbol.iterator]() {
    return rs(this, Symbol.iterator, se);
  },
  concat(...e) {
    return ze(this).concat(
      ...e.map((t) => A(t) ? ze(t) : t)
    );
  },
  entries() {
    return rs(this, "entries", (e) => (e[1] = se(e[1]), e));
  },
  every(e, t) {
    return Oe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Oe(this, "filter", e, t, (s) => s.map(se), arguments);
  },
  find(e, t) {
    return Oe(this, "find", e, t, se, arguments);
  },
  findIndex(e, t) {
    return Oe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Oe(this, "findLast", e, t, se, arguments);
  },
  findLastIndex(e, t) {
    return Oe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Oe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return os(this, "includes", e);
  },
  indexOf(...e) {
    return os(this, "indexOf", e);
  },
  join(e) {
    return ze(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return os(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Oe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return lt(this, "pop");
  },
  push(...e) {
    return lt(this, "push", e);
  },
  reduce(e, ...t) {
    return rn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return rn(this, "reduceRight", e, t);
  },
  shift() {
    return lt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Oe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return lt(this, "splice", e);
  },
  toReversed() {
    return ze(this).toReversed();
  },
  toSorted(e) {
    return ze(this).toSorted(e);
  },
  toSpliced(...e) {
    return ze(this).toSpliced(...e);
  },
  unshift(...e) {
    return lt(this, "unshift", e);
  },
  values() {
    return rs(this, "values", se);
  }
};
function rs(e, t, s) {
  const n = Ls(e), i = n[t]();
  return n !== e && !ge(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.value && (r.value = s(r.value)), r;
  }), i;
}
const cr = Array.prototype;
function Oe(e, t, s, n, i, r) {
  const o = Ls(e), c = o !== e && !ge(e), u = o[t];
  if (u !== cr[t]) {
    const p = u.apply(e, r);
    return c ? se(p) : p;
  }
  let d = s;
  o !== e && (c ? d = function(p, S) {
    return s.call(this, se(p), S, e);
  } : s.length > 2 && (d = function(p, S) {
    return s.call(this, p, S, e);
  }));
  const a = u.call(o, d, n);
  return c && i ? i(a) : a;
}
function rn(e, t, s, n) {
  const i = Ls(e);
  let r = s;
  return i !== e && (ge(e) ? s.length > 3 && (r = function(o, c, u) {
    return s.call(this, o, c, u, e);
  }) : r = function(o, c, u) {
    return s.call(this, o, se(c), u, e);
  }), i[t](r, ...n);
}
function os(e, t, s) {
  const n = D(e);
  Q(n, "iterate", yt);
  const i = n[t](...s);
  return (i === -1 || i === !1) && $s(s[0]) ? (s[0] = D(s[0]), n[t](...s)) : i;
}
function lt(e, t, s = []) {
  Re(), Ds();
  const n = D(e)[t].apply(e, s);
  return Fs(), Ne(), n;
}
const fr = /* @__PURE__ */ Ps("__proto__,__v_isRef,__isVue"), Yn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ve)
);
function ur(e) {
  Ve(e) || (e = String(e));
  const t = D(this);
  return Q(t, "has", e), t.hasOwnProperty(e);
}
class zn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    const i = this._isReadonly, r = this._isShallow;
    if (s === "__v_isReactive")
      return !i;
    if (s === "__v_isReadonly")
      return i;
    if (s === "__v_isShallow")
      return r;
    if (s === "__v_raw")
      return n === (i ? r ? ti : ei : r ? kn : Qn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = A(t);
    if (!i) {
      let u;
      if (o && (u = lr[s]))
        return u;
      if (s === "hasOwnProperty")
        return ur;
    }
    const c = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      X(t) ? t : n
    );
    return (Ve(s) ? Yn.has(s) : fr(s)) || (i || Q(t, "get", s), r) ? c : X(c) ? o && Ns(s) ? c : c.value : q(c) ? i ? si(c) : Vs(c) : c;
  }
}
class Xn extends zn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    if (!this._isShallow) {
      const u = Ye(r);
      if (!ge(n) && !Ye(n) && (r = D(r), n = D(n)), !A(t) && X(r) && !X(n))
        return u ? !1 : (r.value = n, !0);
    }
    const o = A(t) && Ns(s) ? Number(s) < t.length : F(t, s), c = Reflect.set(
      t,
      s,
      n,
      X(t) ? t : i
    );
    return t === D(i) && (o ? je(n, r) && Ae(t, "set", s, n) : Ae(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = F(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Ae(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ve(s) || !Yn.has(s)) && Q(t, "has", s), n;
  }
  ownKeys(t) {
    return Q(
      t,
      "iterate",
      A(t) ? "length" : Je
    ), Reflect.ownKeys(t);
  }
}
class Zn extends zn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const ar = /* @__PURE__ */ new Xn(), hr = /* @__PURE__ */ new Zn(), dr = /* @__PURE__ */ new Xn(!0), pr = /* @__PURE__ */ new Zn(!0), ys = (e) => e, Rt = (e) => Reflect.getPrototypeOf(e);
function _r(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = D(i), o = Qe(r), c = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, d = i[e](...n), a = s ? ys : t ? xs : se;
    return !t && Q(
      r,
      "iterate",
      u ? bs : Je
    ), {
      // iterator protocol
      next() {
        const { value: p, done: S } = d.next();
        return S ? { value: p, done: S } : {
          value: c ? [a(p[0]), a(p[1])] : a(p),
          done: S
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Nt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function gr(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = D(r), c = D(i);
      e || (je(i, c) && Q(o, "get", i), Q(o, "get", c));
      const { has: u } = Rt(o), d = t ? ys : e ? xs : se;
      if (u.call(o, i))
        return d(r.get(i));
      if (u.call(o, c))
        return d(r.get(c));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Q(D(i), "iterate", Je), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw, o = D(r), c = D(i);
      return e || (je(i, c) && Q(o, "has", i), Q(o, "has", c)), i === c ? r.has(i) : r.has(i) || r.has(c);
    },
    forEach(i, r) {
      const o = this, c = o.__v_raw, u = D(c), d = t ? ys : e ? xs : se;
      return !e && Q(u, "iterate", Je), c.forEach((a, p) => i.call(r, d(a), d(p), o));
    }
  };
  return G(
    s,
    e ? {
      add: Nt("add"),
      set: Nt("set"),
      delete: Nt("delete"),
      clear: Nt("clear")
    } : {
      add(i) {
        !t && !ge(i) && !Ye(i) && (i = D(i));
        const r = D(this);
        return Rt(r).has.call(r, i) || (r.add(i), Ae(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !ge(r) && !Ye(r) && (r = D(r));
        const o = D(this), { has: c, get: u } = Rt(o);
        let d = c.call(o, i);
        d || (i = D(i), d = c.call(o, i));
        const a = u.call(o, i);
        return o.set(i, r), d ? je(r, a) && Ae(o, "set", i, r) : Ae(o, "add", i, r), this;
      },
      delete(i) {
        const r = D(this), { has: o, get: c } = Rt(r);
        let u = o.call(r, i);
        u || (i = D(i), u = o.call(r, i)), c && c.call(r, i);
        const d = r.delete(i);
        return u && Ae(r, "delete", i, void 0), d;
      },
      clear() {
        const i = D(this), r = i.size !== 0, o = i.clear();
        return r && Ae(
          i,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    s[i] = _r(i, e, t);
  }), s;
}
function Jt(e, t) {
  const s = gr(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    F(s, i) && i in n ? s : n,
    i,
    r
  );
}
const mr = {
  get: /* @__PURE__ */ Jt(!1, !1)
}, br = {
  get: /* @__PURE__ */ Jt(!1, !0)
}, yr = {
  get: /* @__PURE__ */ Jt(!0, !1)
}, xr = {
  get: /* @__PURE__ */ Jt(!0, !0)
}, Qn = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap();
function vr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Er(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vr(Gi(e));
}
function Vs(e) {
  return Ye(e) ? e : Yt(
    e,
    !1,
    ar,
    mr,
    Qn
  );
}
function Sr(e) {
  return Yt(
    e,
    !1,
    dr,
    br,
    kn
  );
}
function si(e) {
  return Yt(
    e,
    !0,
    hr,
    yr,
    ei
  );
}
function Mt(e) {
  return Yt(
    e,
    !0,
    pr,
    xr,
    ti
  );
}
function Yt(e, t, s, n, i) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = Er(e);
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, c), c;
}
function dt(e) {
  return Ye(e) ? dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ye(e) {
  return !!(e && e.__v_isReadonly);
}
function ge(e) {
  return !!(e && e.__v_isShallow);
}
function $s(e) {
  return e ? !!e.__v_raw : !1;
}
function D(e) {
  const t = e && e.__v_raw;
  return t ? D(t) : e;
}
function Cr(e) {
  return !F(e, "__v_skip") && Object.isExtensible(e) && Hn(e, "__v_skip", !0), e;
}
const se = (e) => q(e) ? Vs(e) : e, xs = (e) => q(e) ? si(e) : e;
function X(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function wr(e) {
  return Tr(e, !1);
}
function Tr(e, t) {
  return X(e) ? e : new Or(e, t);
}
class Or {
  constructor(t, s) {
    this.dep = new js(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : D(t), this._value = s ? t : se(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || ge(t) || Ye(t);
    t = n ? t : D(t), je(t, s) && (this._rawValue = t, this._value = n ? t : se(t), this.dep.trigger());
  }
}
function ni(e) {
  return X(e) ? e.value : e;
}
const Pr = {
  get: (e, t, s) => t === "__v_raw" ? e : ni(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return X(i) && !X(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function ii(e) {
  return dt(e) ? e : new Proxy(e, Pr);
}
class Ar {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new js(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    $ !== this)
      return Bn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Rr(e, t, s = !1) {
  let n, i;
  return R(e) ? n = e : (n = e.get, i = e.set), new Ar(n, i, s);
}
const It = {}, jt = /* @__PURE__ */ new WeakMap();
let qe;
function Nr(e, t = !1, s = qe) {
  if (s) {
    let n = jt.get(s);
    n || jt.set(s, n = []), n.push(e);
  }
}
function Mr(e, t, s = U) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: c, call: u } = s, d = (O) => i ? O : ge(O) || i === !1 || i === 0 ? He(O, 1) : He(O);
  let a, p, S, C, I = !1, M = !1;
  if (X(e) ? (p = () => e.value, I = ge(e)) : dt(e) ? (p = () => d(e), I = !0) : A(e) ? (M = !0, I = e.some((O) => dt(O) || ge(O)), p = () => e.map((O) => {
    if (X(O))
      return O.value;
    if (dt(O))
      return d(O);
    if (R(O))
      return u ? u(O, 2) : O();
  })) : R(e) ? t ? p = u ? () => u(e, 2) : e : p = () => {
    if (S) {
      Re();
      try {
        S();
      } finally {
        Ne();
      }
    }
    const O = qe;
    qe = a;
    try {
      return u ? u(e, 3, [C]) : e(C);
    } finally {
      qe = O;
    }
  } : p = de, t && i) {
    const O = p, Y = i === !0 ? 1 / 0 : i;
    p = () => He(O(), Y);
  }
  const k = ir(), j = () => {
    a.stop(), k && Rs(k.effects, a);
  };
  if (r && t) {
    const O = t;
    t = (...Y) => {
      O(...Y), j();
    };
  }
  let W = M ? new Array(e.length).fill(It) : It;
  const K = (O) => {
    if (!(!(a.flags & 1) || !a.dirty && !O))
      if (t) {
        const Y = a.run();
        if (i || I || (M ? Y.some((we, ue) => je(we, W[ue])) : je(Y, W))) {
          S && S();
          const we = qe;
          qe = a;
          try {
            const ue = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              W === It ? void 0 : M && W[0] === It ? [] : W,
              C
            ];
            u ? u(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            ), W = Y;
          } finally {
            qe = we;
          }
        }
      } else
        a.run();
  };
  return c && c(K), a = new $n(p), a.scheduler = o ? () => o(K, !1) : K, C = (O) => Nr(O, !1, a), S = a.onStop = () => {
    const O = jt.get(a);
    if (O) {
      if (u)
        u(O, 4);
      else
        for (const Y of O) Y();
      jt.delete(a);
    }
  }, t ? n ? K(!0) : W = a.run() : o ? o(K.bind(null, !0), !0) : a.run(), j.pause = a.pause.bind(a), j.resume = a.resume.bind(a), j.stop = j, j;
}
function He(e, t = 1 / 0, s) {
  if (t <= 0 || !q(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, X(e))
    He(e.value, t, s);
  else if (A(e))
    for (let n = 0; n < e.length; n++)
      He(e[n], t, s);
  else if (Mn(e) || Qe(e))
    e.forEach((n) => {
      He(n, t, s);
    });
  else if (Kt(e)) {
    for (const n in e)
      He(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && He(e[n], t, s);
  }
  return e;
}
var Ie = { NODE_ENV: "production" };
const pt = [];
let ls = !1;
function Ir(e, ...t) {
  if (ls) return;
  ls = !0, Re();
  const s = pt.length ? pt[pt.length - 1].component : null, n = s && s.appContext.config.warnHandler, i = Dr();
  if (n)
    st(
      n,
      s,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var o, c;
          return (c = (o = r.toString) == null ? void 0 : o.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        s && s.proxy,
        i.map(
          ({ vnode: r }) => `at <${Vi(s, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...Fr(i)), console.warn(...r);
  }
  Ne(), ls = !1;
}
function Dr() {
  let e = pt[pt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const s = t[0];
    s && s.vnode === e ? s.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function Fr(e) {
  const t = [];
  return e.forEach((s, n) => {
    t.push(...n === 0 ? [] : [`
`], ...Hr(s));
  }), t;
}
function Hr({ vnode: e, recurseCount: t }) {
  const s = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, i = ` at <${Vi(
    e.component,
    e.type,
    n
  )}`, r = ">" + s;
  return e.props ? [i, ...jr(e.props), r] : [i + r];
}
function jr(e) {
  const t = [], s = Object.keys(e);
  return s.slice(0, 3).forEach((n) => {
    t.push(...ri(n, e[n]));
  }), s.length > 3 && t.push(" ..."), t;
}
function ri(e, t, s) {
  return J(t) ? (t = JSON.stringify(t), s ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? s ? t : [`${e}=${t}`] : X(t) ? (t = ri(e, D(t.value), !0), s ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = D(t), s ? t : [`${e}=`, t]);
}
function st(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    zt(i, t, s);
  }
}
function Ce(e, t, s, n) {
  if (R(e)) {
    const i = st(e, t, s, n);
    return i && In(i) && i.catch((r) => {
      zt(r, t, s);
    }), i;
  }
  if (A(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ce(e[r], t, s, n));
    return i;
  }
}
function zt(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || U;
  if (t) {
    let c = t.parent;
    const u = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; c; ) {
      const a = c.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, u, d) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      Re(), st(r, null, 10, [
        e,
        u,
        d
      ]), Ne();
      return;
    }
  }
  Lr(e, s, i, n, o);
}
function Lr(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ne = [];
let xe = -1;
const ke = [];
let De = null, Xe = 0;
const oi = /* @__PURE__ */ Promise.resolve();
let Lt = null;
function li(e) {
  const t = Lt || oi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vr(e) {
  let t = xe + 1, s = ne.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = ne[n], r = xt(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Us(e) {
  if (!(e.flags & 1)) {
    const t = xt(e), s = ne[ne.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= xt(s) ? ne.push(e) : ne.splice(Vr(t), 0, e), e.flags |= 1, ci();
  }
}
function ci() {
  Lt || (Lt = oi.then(ui));
}
function $r(e) {
  A(e) ? ke.push(...e) : De && e.id === -1 ? De.splice(Xe + 1, 0, e) : e.flags & 1 || (ke.push(e), e.flags |= 1), ci();
}
function on(e, t, s = xe + 1) {
  for (; s < ne.length; s++) {
    const n = ne[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ne.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function fi(e) {
  if (ke.length) {
    const t = [...new Set(ke)].sort(
      (s, n) => xt(s) - xt(n)
    );
    if (ke.length = 0, De) {
      De.push(...t);
      return;
    }
    for (De = t, Xe = 0; Xe < De.length; Xe++) {
      const s = De[Xe];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    De = null, Xe = 0;
  }
}
const xt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ui(e) {
  const t = de;
  try {
    for (xe = 0; xe < ne.length; xe++) {
      const s = ne[xe];
      s && !(s.flags & 8) && (Ie.NODE_ENV !== "production" && t(s), s.flags & 4 && (s.flags &= -2), st(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; xe < ne.length; xe++) {
      const s = ne[xe];
      s && (s.flags &= -2);
    }
    xe = -1, ne.length = 0, fi(), Lt = null, (ne.length || ke.length) && ui();
  }
}
let Se = null, ai = null;
function Vt(e) {
  const t = Se;
  return Se = e, ai = e && e.type.__scopeId || null, t;
}
function Ur(e, t = Se, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && pn(-1);
    const r = Vt(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Vt(r), n._d && pn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function We(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const c = i[o];
    r && (c.oldValue = r[o].value);
    let u = c.dir[n];
    u && (Re(), Ce(u, s, 8, [
      e.el,
      c,
      e,
      t
    ]), Ne());
  }
}
const Br = Symbol("_vte"), Wr = (e) => e.__isTeleport;
function Bs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Bs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function hi(e, t) {
  return R(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    G({ name: e.name }, t, { setup: e })
  ) : e;
}
function di(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function vs(e, t, s, n, i = !1) {
  if (A(e)) {
    e.forEach(
      (I, M) => vs(
        I,
        t && (A(t) ? t[M] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (_t(n) && !i)
    return;
  const r = n.shapeFlag & 4 ? Gs(n.component) : n.el, o = i ? null : r, { i: c, r: u } = e, d = t && t.r, a = c.refs === U ? c.refs = {} : c.refs, p = c.setupState, S = D(p), C = p === U ? () => !1 : (I) => F(S, I);
  if (d != null && d !== u && (J(d) ? (a[d] = null, C(d) && (p[d] = null)) : X(d) && (d.value = null)), R(u))
    st(u, c, 12, [o, a]);
  else {
    const I = J(u), M = X(u);
    if (I || M) {
      const k = () => {
        if (e.f) {
          const j = I ? C(u) ? p[u] : a[u] : u.value;
          i ? A(j) && Rs(j, r) : A(j) ? j.includes(r) || j.push(r) : I ? (a[u] = [r], C(u) && (p[u] = a[u])) : (u.value = [r], e.k && (a[e.k] = u.value));
        } else I ? (a[u] = o, C(u) && (p[u] = o)) : M && (u.value = o, e.k && (a[e.k] = o));
      };
      o ? (k.id = -1, le(k, s)) : k();
    }
  }
}
Gt().requestIdleCallback;
Gt().cancelIdleCallback;
const _t = (e) => !!e.type.__asyncLoader, pi = (e) => e.type.__isKeepAlive;
function Kr(e, t) {
  _i(e, "a", t);
}
function qr(e, t) {
  _i(e, "da", t);
}
function _i(e, t, s = z) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Xt(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      pi(i.parent.vnode) && Gr(n, t, s, i), i = i.parent;
  }
}
function Gr(e, t, s, n) {
  const i = Xt(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  gi(() => {
    Rs(n[t], i);
  }, s);
}
function Xt(e, t, s = z, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Re();
      const c = Ct(s), u = Ce(t, s, e, o);
      return c(), Ne(), u;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const Me = (e) => (t, s = z) => {
  (!St || e === "sp") && Xt(e, (...n) => t(...n), s);
}, Jr = Me("bm"), Yr = Me("m"), zr = Me(
  "bu"
), Xr = Me("u"), Zr = Me(
  "bum"
), gi = Me("um"), Qr = Me(
  "sp"
), kr = Me("rtg"), eo = Me("rtc");
function to(e, t = z) {
  Xt("ec", e, t);
}
const so = Symbol.for("v-ndc"), Es = (e) => e ? ji(e) ? Gs(e) : Es(e.parent) : null, gt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ G(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Es(e.parent),
    $root: (e) => Es(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ws(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Us(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = li.bind(e.proxy)),
    $watch: (e) => wo.bind(e)
  })
), cs = (e, t) => e !== U && !e.__isScriptSetup && F(e, t), no = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: r, accessCache: o, type: c, appContext: u } = e;
    let d;
    if (t[0] !== "$") {
      const C = o[t];
      if (C !== void 0)
        switch (C) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return s[t];
          case 3:
            return r[t];
        }
      else {
        if (cs(n, t))
          return o[t] = 1, n[t];
        if (i !== U && F(i, t))
          return o[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && F(d, t)
        )
          return o[t] = 3, r[t];
        if (s !== U && F(s, t))
          return o[t] = 4, s[t];
        Ss && (o[t] = 0);
      }
    }
    const a = gt[t];
    let p, S;
    if (a)
      return t === "$attrs" && Q(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (s !== U && F(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      S = u.config.globalProperties, F(S, t)
    )
      return S[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return cs(i, t) ? (i[t] = s, !0) : n !== U && F(n, t) ? (n[t] = s, !0) : F(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, propsOptions: r }
  }, o) {
    let c;
    return !!s[o] || e !== U && F(e, o) || cs(t, o) || (c = r[0]) && F(c, o) || F(n, o) || F(gt, o) || F(i.config.globalProperties, o);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : F(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function ln(e) {
  return A(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Ss = !0;
function io(e) {
  const t = Ws(e), s = e.proxy, n = e.ctx;
  Ss = !1, t.beforeCreate && cn(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: c,
    provide: u,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: S,
    beforeUpdate: C,
    updated: I,
    activated: M,
    deactivated: k,
    beforeDestroy: j,
    beforeUnmount: W,
    destroyed: K,
    unmounted: O,
    render: Y,
    renderTracked: we,
    renderTriggered: ue,
    errorCaptured: Te,
    serverPrefetch: wt,
    // public API
    expose: $e,
    inheritAttrs: nt,
    // assets
    components: Tt,
    directives: Ot,
    filters: kt
  } = t;
  if (d && ro(d, n, null), o)
    for (const B in o) {
      const L = o[B];
      R(L) && (n[B] = L.bind(s));
    }
  if (i) {
    const B = i.call(s, s);
    q(B) && (e.data = Vs(B));
  }
  if (Ss = !0, r)
    for (const B in r) {
      const L = r[B], Ue = R(L) ? L.bind(s, s) : R(L.get) ? L.get.bind(s, s) : de, Pt = !R(L) && R(L.set) ? L.set.bind(s) : de, Be = Zo({
        get: Ue,
        set: Pt
      });
      Object.defineProperty(n, B, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (me) => Be.value = me
      });
    }
  if (c)
    for (const B in c)
      mi(c[B], n, s, B);
  if (u) {
    const B = R(u) ? u.call(s) : u;
    Reflect.ownKeys(B).forEach((L) => {
      ao(L, B[L]);
    });
  }
  a && cn(a, e, "c");
  function ee(B, L) {
    A(L) ? L.forEach((Ue) => B(Ue.bind(s))) : L && B(L.bind(s));
  }
  if (ee(Jr, p), ee(Yr, S), ee(zr, C), ee(Xr, I), ee(Kr, M), ee(qr, k), ee(to, Te), ee(eo, we), ee(kr, ue), ee(Zr, W), ee(gi, O), ee(Qr, wt), A($e))
    if ($e.length) {
      const B = e.exposed || (e.exposed = {});
      $e.forEach((L) => {
        Object.defineProperty(B, L, {
          get: () => s[L],
          set: (Ue) => s[L] = Ue
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === de && (e.render = Y), nt != null && (e.inheritAttrs = nt), Tt && (e.components = Tt), Ot && (e.directives = Ot), wt && di(e);
}
function ro(e, t, s = de) {
  A(e) && (e = Cs(e));
  for (const n in e) {
    const i = e[n];
    let r;
    q(i) ? "default" in i ? r = Dt(
      i.from || n,
      i.default,
      !0
    ) : r = Dt(i.from || n) : r = Dt(i), X(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function cn(e, t, s) {
  Ce(
    A(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function mi(e, t, s, n) {
  let i = n.includes(".") ? Ni(s, n) : () => s[n];
  if (J(e)) {
    const r = t[e];
    R(r) && us(i, r);
  } else if (R(e))
    us(i, e.bind(s));
  else if (q(e))
    if (A(e))
      e.forEach((r) => mi(r, t, s, n));
    else {
      const r = R(e.handler) ? e.handler.bind(s) : t[e.handler];
      R(r) && us(i, r, e);
    }
}
function Ws(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !i.length && !s && !n ? u = t : (u = {}, i.length && i.forEach(
    (d) => $t(u, d, o, !0)
  ), $t(u, t, o)), q(t) && r.set(t, u), u;
}
function $t(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && $t(e, r, s, !0), i && i.forEach(
    (o) => $t(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const c = oo[o] || s && s[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const oo = {
  data: fn,
  props: un,
  emits: un,
  // objects
  methods: ft,
  computed: ft,
  // lifecycle
  beforeCreate: te,
  created: te,
  beforeMount: te,
  mounted: te,
  beforeUpdate: te,
  updated: te,
  beforeDestroy: te,
  beforeUnmount: te,
  destroyed: te,
  unmounted: te,
  activated: te,
  deactivated: te,
  errorCaptured: te,
  serverPrefetch: te,
  // assets
  components: ft,
  directives: ft,
  // watch
  watch: co,
  // provide / inject
  provide: fn,
  inject: lo
};
function fn(e, t) {
  return t ? e ? function() {
    return G(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function lo(e, t) {
  return ft(Cs(e), Cs(t));
}
function Cs(e) {
  if (A(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ft(e, t) {
  return e ? G(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function un(e, t) {
  return e ? A(e) && A(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : G(
    /* @__PURE__ */ Object.create(null),
    ln(e),
    ln(t ?? {})
  ) : t;
}
function co(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = G(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = te(e[n], t[n]);
  return s;
}
function bi() {
  return {
    app: null,
    config: {
      isNativeTag: Ki,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let fo = 0;
function uo(e, t) {
  return function(n, i = null) {
    R(n) || (n = G({}, n)), i != null && !q(i) && (i = null);
    const r = bi(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const d = r.app = {
      _uid: fo++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Qo,
      get config() {
        return r.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && R(a.install) ? (o.add(a), a.install(d, ...p)) : R(a) && (o.add(a), a(d, ...p))), d;
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), d;
      },
      component(a, p) {
        return p ? (r.components[a] = p, d) : r.components[a];
      },
      directive(a, p) {
        return p ? (r.directives[a] = p, d) : r.directives[a];
      },
      mount(a, p, S) {
        if (!u) {
          const C = d._ceVNode || Le(n, i);
          return C.appContext = r, S === !0 ? S = "svg" : S === !1 && (S = void 0), p && t ? t(C, a) : e(C, a, S), u = !0, d._container = a, a.__vue_app__ = d, Gs(C.component);
        }
      },
      onUnmount(a) {
        c.push(a);
      },
      unmount() {
        u && (Ce(
          c,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, p) {
        return r.provides[a] = p, d;
      },
      runWithContext(a) {
        const p = et;
        et = d;
        try {
          return a();
        } finally {
          et = p;
        }
      }
    };
    return d;
  };
}
let et = null;
function ao(e, t) {
  if (z) {
    let s = z.provides;
    const n = z.parent && z.parent.provides;
    n === s && (s = z.provides = Object.create(n)), s[e] = t;
  }
}
function Dt(e, t, s = !1) {
  const n = z || Se;
  if (n || et) {
    const i = et ? et._context.provides : n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && R(t) ? t.call(n && n.proxy) : t;
  }
}
const yi = {}, xi = () => Object.create(yi), vi = (e) => Object.getPrototypeOf(e) === yi;
function ho(e, t, s, n = !1) {
  const i = {}, r = xi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ei(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : Sr(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function po(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, c = D(i), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let S = a[p];
        if (Zt(e.emitsOptions, S))
          continue;
        const C = t[S];
        if (u)
          if (F(r, S))
            C !== r[S] && (r[S] = C, d = !0);
          else {
            const I = pe(S);
            i[I] = ws(
              u,
              c,
              I,
              C,
              e,
              !1
            );
          }
        else
          C !== r[S] && (r[S] = C, d = !0);
      }
    }
  } else {
    Ei(e, t, i, r) && (d = !0);
    let a;
    for (const p in c)
      (!t || // for camelCase
      !F(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = ae(p)) === p || !F(t, a))) && (u ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (i[p] = ws(
        u,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (r !== c)
      for (const p in r)
        (!t || !F(t, p)) && (delete r[p], d = !0);
  }
  d && Ae(e.attrs, "set", "");
}
function Ei(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let u in t) {
      if (ut(u))
        continue;
      const d = t[u];
      let a;
      i && F(i, a = pe(u)) ? !r || !r.includes(a) ? s[a] = d : (c || (c = {}))[a] = d : Zt(e.emitsOptions, u) || (!(u in n) || d !== n[u]) && (n[u] = d, o = !0);
    }
  if (r) {
    const u = D(s), d = c || U;
    for (let a = 0; a < r.length; a++) {
      const p = r[a];
      s[p] = ws(
        i,
        u,
        p,
        d[p],
        e,
        !F(d, p)
      );
    }
  }
  return o;
}
function ws(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const c = F(o, "default");
    if (c && n === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && R(u)) {
        const { propsDefaults: d } = i;
        if (s in d)
          n = d[s];
        else {
          const a = Ct(i);
          n = d[s] = u.call(
            null,
            t
          ), a();
        }
      } else
        n = u;
      i.ce && i.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !c ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ae(s)) && (n = !0));
  }
  return n;
}
const _o = /* @__PURE__ */ new WeakMap();
function Si(e, t, s = !1) {
  const n = s ? _o : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, c = [];
  let u = !1;
  if (!R(e)) {
    const a = (p) => {
      u = !0;
      const [S, C] = Si(p, t, !0);
      G(o, S), C && c.push(...C);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !u)
    return q(e) && n.set(e, Ze), Ze;
  if (A(r))
    for (let a = 0; a < r.length; a++) {
      const p = pe(r[a]);
      an(p) && (o[p] = U);
    }
  else if (r)
    for (const a in r) {
      const p = pe(a);
      if (an(p)) {
        const S = r[a], C = o[p] = A(S) || R(S) ? { type: S } : G({}, S), I = C.type;
        let M = !1, k = !0;
        if (A(I))
          for (let j = 0; j < I.length; ++j) {
            const W = I[j], K = R(W) && W.name;
            if (K === "Boolean") {
              M = !0;
              break;
            } else K === "String" && (k = !1);
          }
        else
          M = R(I) && I.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = M, C[
          1
          /* shouldCastTrue */
        ] = k, (M || F(C, "default")) && c.push(p);
      }
    }
  const d = [o, c];
  return q(e) && n.set(e, d), d;
}
function an(e) {
  return e[0] !== "$" && !ut(e);
}
const Ci = (e) => e[0] === "_" || e === "$stable", Ks = (e) => A(e) ? e.map(Ee) : [Ee(e)], go = (e, t, s) => {
  if (t._n)
    return t;
  const n = Ur((...i) => (Ie.NODE_ENV !== "production" && z && (!s || (s.root, z.root)), Ks(t(...i))), s);
  return n._c = !1, n;
}, wi = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (Ci(i)) continue;
    const r = e[i];
    if (R(r))
      t[i] = go(i, r, n);
    else if (r != null) {
      const o = Ks(r);
      t[i] = () => o;
    }
  }
}, Ti = (e, t) => {
  const s = Ks(t);
  e.slots.default = () => s;
}, Oi = (e, t, s) => {
  for (const n in t)
    (s || n !== "_") && (e[n] = t[n]);
}, mo = (e, t, s) => {
  const n = e.slots = xi();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Oi(n, t, s), s && Hn(n, "_", i, !0)) : wi(t, n);
  } else t && Ti(e, t);
}, bo = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = U;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? s && c === 1 ? r = !1 : Oi(i, t, s) : (r = !t.$stable, wi(t, i)), o = t;
  } else t && (Ti(e, t), o = { default: 1 });
  if (r)
    for (const c in i)
      !Ci(c) && o[c] == null && delete i[c];
}, le = Mo;
function yo(e) {
  return xo(e);
}
function xo(e, t) {
  const s = Gt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: c,
    createComment: u,
    setText: d,
    setElementText: a,
    parentNode: p,
    nextSibling: S,
    setScopeId: C = de,
    insertStaticContent: I
  } = e, M = (l, f, h, m = null, _ = null, g = null, v = void 0, x = null, y = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !ct(l, f) && (m = At(l), me(l, _, g, !0), l = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: b, ref: T, shapeFlag: E } = f;
    switch (b) {
      case Qt:
        k(l, f, h, m);
        break;
      case vt:
        j(l, f, h, m);
        break;
      case hs:
        l == null && W(f, h, m, v);
        break;
      case ve:
        Tt(
          l,
          f,
          h,
          m,
          _,
          g,
          v,
          x,
          y
        );
        break;
      default:
        E & 1 ? Y(
          l,
          f,
          h,
          m,
          _,
          g,
          v,
          x,
          y
        ) : E & 6 ? Ot(
          l,
          f,
          h,
          m,
          _,
          g,
          v,
          x,
          y
        ) : (E & 64 || E & 128) && b.process(
          l,
          f,
          h,
          m,
          _,
          g,
          v,
          x,
          y,
          rt
        );
    }
    T != null && _ && vs(T, l && l.ref, g, f || l, !f);
  }, k = (l, f, h, m) => {
    if (l == null)
      n(
        f.el = c(f.children),
        h,
        m
      );
    else {
      const _ = f.el = l.el;
      f.children !== l.children && d(_, f.children);
    }
  }, j = (l, f, h, m) => {
    l == null ? n(
      f.el = u(f.children || ""),
      h,
      m
    ) : f.el = l.el;
  }, W = (l, f, h, m) => {
    [l.el, l.anchor] = I(
      l.children,
      f,
      h,
      m,
      l.el,
      l.anchor
    );
  }, K = ({ el: l, anchor: f }, h, m) => {
    let _;
    for (; l && l !== f; )
      _ = S(l), n(l, h, m), l = _;
    n(f, h, m);
  }, O = ({ el: l, anchor: f }) => {
    let h;
    for (; l && l !== f; )
      h = S(l), i(l), l = h;
    i(f);
  }, Y = (l, f, h, m, _, g, v, x, y) => {
    f.type === "svg" ? v = "svg" : f.type === "math" && (v = "mathml"), l == null ? we(
      f,
      h,
      m,
      _,
      g,
      v,
      x,
      y
    ) : wt(
      l,
      f,
      _,
      g,
      v,
      x,
      y
    );
  }, we = (l, f, h, m, _, g, v, x) => {
    let y, b;
    const { props: T, shapeFlag: E, transition: w, dirs: P } = l;
    if (y = l.el = o(
      l.type,
      g,
      T && T.is,
      T
    ), E & 8 ? a(y, l.children) : E & 16 && Te(
      l.children,
      y,
      null,
      m,
      _,
      fs(l, g),
      v,
      x
    ), P && We(l, null, m, "created"), ue(y, l, l.scopeId, v, m), T) {
      for (const V in T)
        V !== "value" && !ut(V) && r(y, V, null, T[V], g, m);
      "value" in T && r(y, "value", null, T.value, g), (b = T.onVnodeBeforeMount) && ye(b, m, l);
    }
    P && We(l, null, m, "beforeMount");
    const N = vo(_, w);
    N && w.beforeEnter(y), n(y, f, h), ((b = T && T.onVnodeMounted) || N || P) && le(() => {
      b && ye(b, m, l), N && w.enter(y), P && We(l, null, m, "mounted");
    }, _);
  }, ue = (l, f, h, m, _) => {
    if (h && C(l, h), m)
      for (let g = 0; g < m.length; g++)
        C(l, m[g]);
    if (_) {
      let g = _.subTree;
      if (f === g || Ii(g.type) && (g.ssContent === f || g.ssFallback === f)) {
        const v = _.vnode;
        ue(
          l,
          v,
          v.scopeId,
          v.slotScopeIds,
          _.parent
        );
      }
    }
  }, Te = (l, f, h, m, _, g, v, x, y = 0) => {
    for (let b = y; b < l.length; b++) {
      const T = l[b] = x ? Fe(l[b]) : Ee(l[b]);
      M(
        null,
        T,
        f,
        h,
        m,
        _,
        g,
        v,
        x
      );
    }
  }, wt = (l, f, h, m, _, g, v) => {
    const x = f.el = l.el;
    let { patchFlag: y, dynamicChildren: b, dirs: T } = f;
    y |= l.patchFlag & 16;
    const E = l.props || U, w = f.props || U;
    let P;
    if (h && Ke(h, !1), (P = w.onVnodeBeforeUpdate) && ye(P, h, f, l), T && We(f, l, h, "beforeUpdate"), h && Ke(h, !0), (E.innerHTML && w.innerHTML == null || E.textContent && w.textContent == null) && a(x, ""), b ? $e(
      l.dynamicChildren,
      b,
      x,
      h,
      m,
      fs(f, _),
      g
    ) : v || L(
      l,
      f,
      x,
      null,
      h,
      m,
      fs(f, _),
      g,
      !1
    ), y > 0) {
      if (y & 16)
        nt(x, E, w, h, _);
      else if (y & 2 && E.class !== w.class && r(x, "class", null, w.class, _), y & 4 && r(x, "style", E.style, w.style, _), y & 8) {
        const N = f.dynamicProps;
        for (let V = 0; V < N.length; V++) {
          const H = N[V], ie = E[H], Z = w[H];
          (Z !== ie || H === "value") && r(x, H, ie, Z, _, h);
        }
      }
      y & 1 && l.children !== f.children && a(x, f.children);
    } else !v && b == null && nt(x, E, w, h, _);
    ((P = w.onVnodeUpdated) || T) && le(() => {
      P && ye(P, h, f, l), T && We(f, l, h, "updated");
    }, m);
  }, $e = (l, f, h, m, _, g, v) => {
    for (let x = 0; x < f.length; x++) {
      const y = l[x], b = f[x], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ct(y, b) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      M(
        y,
        b,
        T,
        null,
        m,
        _,
        g,
        v,
        !0
      );
    }
  }, nt = (l, f, h, m, _) => {
    if (f !== h) {
      if (f !== U)
        for (const g in f)
          !ut(g) && !(g in h) && r(
            l,
            g,
            f[g],
            null,
            _,
            m
          );
      for (const g in h) {
        if (ut(g)) continue;
        const v = h[g], x = f[g];
        v !== x && g !== "value" && r(l, g, x, v, _, m);
      }
      "value" in h && r(l, "value", f.value, h.value, _);
    }
  }, Tt = (l, f, h, m, _, g, v, x, y) => {
    const b = f.el = l ? l.el : c(""), T = f.anchor = l ? l.anchor : c("");
    let { patchFlag: E, dynamicChildren: w, slotScopeIds: P } = f;
    P && (x = x ? x.concat(P) : P), l == null ? (n(b, h, m), n(T, h, m), Te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      T,
      _,
      g,
      v,
      x,
      y
    )) : E > 0 && E & 64 && w && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? ($e(
      l.dynamicChildren,
      w,
      h,
      _,
      g,
      v,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && Pi(
      l,
      f,
      !0
      /* shallow */
    )) : L(
      l,
      f,
      h,
      T,
      _,
      g,
      v,
      x,
      y
    );
  }, Ot = (l, f, h, m, _, g, v, x, y) => {
    f.slotScopeIds = x, l == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      h,
      m,
      v,
      y
    ) : kt(
      f,
      h,
      m,
      _,
      g,
      v,
      y
    ) : Ys(l, f, y);
  }, kt = (l, f, h, m, _, g, v) => {
    const x = l.component = Bo(
      l,
      m,
      _
    );
    if (pi(l) && (x.ctx.renderer = rt), Wo(x, !1, v), x.asyncDep) {
      if (_ && _.registerDep(x, ee, v), !l.el) {
        const y = x.subTree = Le(vt);
        j(null, y, f, h);
      }
    } else
      ee(
        x,
        l,
        f,
        h,
        _,
        g,
        v
      );
  }, Ys = (l, f, h) => {
    const m = f.component = l.component;
    if (Ro(l, f, h))
      if (m.asyncDep && !m.asyncResolved) {
        B(m, f, h);
        return;
      } else
        m.next = f, m.update();
    else
      f.el = l.el, m.vnode = f;
  }, ee = (l, f, h, m, _, g, v) => {
    const x = () => {
      if (l.isMounted) {
        let { next: E, bu: w, u: P, parent: N, vnode: V } = l;
        {
          const re = Ai(l);
          if (re) {
            E && (E.el = V.el, B(l, E, v)), re.asyncDep.then(() => {
              l.isUnmounted || x();
            });
            return;
          }
        }
        let H = E, ie;
        Ke(l, !1), E ? (E.el = V.el, B(l, E, v)) : E = V, w && ss(w), (ie = E.props && E.props.onVnodeBeforeUpdate) && ye(ie, N, E, V), Ke(l, !0);
        const Z = as(l), he = l.subTree;
        l.subTree = Z, M(
          he,
          Z,
          // parent may have changed if it's in a teleport
          p(he.el),
          // anchor may have changed if it's in a fragment
          At(he),
          l,
          _,
          g
        ), E.el = Z.el, H === null && No(l, Z.el), P && le(P, _), (ie = E.props && E.props.onVnodeUpdated) && le(
          () => ye(ie, N, E, V),
          _
        );
      } else {
        let E;
        const { el: w, props: P } = f, { bm: N, m: V, parent: H, root: ie, type: Z } = l, he = _t(f);
        if (Ke(l, !1), N && ss(N), !he && (E = P && P.onVnodeBeforeMount) && ye(E, H, f), Ke(l, !0), w && Qs) {
          const re = () => {
            l.subTree = as(l), Qs(
              w,
              l.subTree,
              l,
              _,
              null
            );
          };
          he && Z.__asyncHydrate ? Z.__asyncHydrate(
            w,
            l,
            re
          ) : re();
        } else {
          ie.ce && ie.ce._injectChildStyle(Z);
          const re = l.subTree = as(l);
          M(
            null,
            re,
            h,
            m,
            l,
            _,
            g
          ), f.el = re.el;
        }
        if (V && le(V, _), !he && (E = P && P.onVnodeMounted)) {
          const re = f;
          le(
            () => ye(E, H, re),
            _
          );
        }
        (f.shapeFlag & 256 || H && _t(H.vnode) && H.vnode.shapeFlag & 256) && l.a && le(l.a, _), l.isMounted = !0, f = h = m = null;
      }
    };
    l.scope.on();
    const y = l.effect = new $n(x);
    l.scope.off();
    const b = l.update = y.run.bind(y), T = l.job = y.runIfDirty.bind(y);
    T.i = l, T.id = l.uid, y.scheduler = () => Us(T), Ke(l, !0), b();
  }, B = (l, f, h) => {
    f.component = l;
    const m = l.vnode.props;
    l.vnode = f, l.next = null, po(l, f.props, m, h), bo(l, f.children, h), Re(), on(l), Ne();
  }, L = (l, f, h, m, _, g, v, x, y = !1) => {
    const b = l && l.children, T = l ? l.shapeFlag : 0, E = f.children, { patchFlag: w, shapeFlag: P } = f;
    if (w > 0) {
      if (w & 128) {
        Pt(
          b,
          E,
          h,
          m,
          _,
          g,
          v,
          x,
          y
        );
        return;
      } else if (w & 256) {
        Ue(
          b,
          E,
          h,
          m,
          _,
          g,
          v,
          x,
          y
        );
        return;
      }
    }
    P & 8 ? (T & 16 && it(b, _, g), E !== b && a(h, E)) : T & 16 ? P & 16 ? Pt(
      b,
      E,
      h,
      m,
      _,
      g,
      v,
      x,
      y
    ) : it(b, _, g, !0) : (T & 8 && a(h, ""), P & 16 && Te(
      E,
      h,
      m,
      _,
      g,
      v,
      x,
      y
    ));
  }, Ue = (l, f, h, m, _, g, v, x, y) => {
    l = l || Ze, f = f || Ze;
    const b = l.length, T = f.length, E = Math.min(b, T);
    let w;
    for (w = 0; w < E; w++) {
      const P = f[w] = y ? Fe(f[w]) : Ee(f[w]);
      M(
        l[w],
        P,
        h,
        null,
        _,
        g,
        v,
        x,
        y
      );
    }
    b > T ? it(
      l,
      _,
      g,
      !0,
      !1,
      E
    ) : Te(
      f,
      h,
      m,
      _,
      g,
      v,
      x,
      y,
      E
    );
  }, Pt = (l, f, h, m, _, g, v, x, y) => {
    let b = 0;
    const T = f.length;
    let E = l.length - 1, w = T - 1;
    for (; b <= E && b <= w; ) {
      const P = l[b], N = f[b] = y ? Fe(f[b]) : Ee(f[b]);
      if (ct(P, N))
        M(
          P,
          N,
          h,
          null,
          _,
          g,
          v,
          x,
          y
        );
      else
        break;
      b++;
    }
    for (; b <= E && b <= w; ) {
      const P = l[E], N = f[w] = y ? Fe(f[w]) : Ee(f[w]);
      if (ct(P, N))
        M(
          P,
          N,
          h,
          null,
          _,
          g,
          v,
          x,
          y
        );
      else
        break;
      E--, w--;
    }
    if (b > E) {
      if (b <= w) {
        const P = w + 1, N = P < T ? f[P].el : m;
        for (; b <= w; )
          M(
            null,
            f[b] = y ? Fe(f[b]) : Ee(f[b]),
            h,
            N,
            _,
            g,
            v,
            x,
            y
          ), b++;
      }
    } else if (b > w)
      for (; b <= E; )
        me(l[b], _, g, !0), b++;
    else {
      const P = b, N = b, V = /* @__PURE__ */ new Map();
      for (b = N; b <= w; b++) {
        const oe = f[b] = y ? Fe(f[b]) : Ee(f[b]);
        oe.key != null && V.set(oe.key, b);
      }
      let H, ie = 0;
      const Z = w - N + 1;
      let he = !1, re = 0;
      const ot = new Array(Z);
      for (b = 0; b < Z; b++) ot[b] = 0;
      for (b = P; b <= E; b++) {
        const oe = l[b];
        if (ie >= Z) {
          me(oe, _, g, !0);
          continue;
        }
        let be;
        if (oe.key != null)
          be = V.get(oe.key);
        else
          for (H = N; H <= w; H++)
            if (ot[H - N] === 0 && ct(oe, f[H])) {
              be = H;
              break;
            }
        be === void 0 ? me(oe, _, g, !0) : (ot[be - N] = b + 1, be >= re ? re = be : he = !0, M(
          oe,
          f[be],
          h,
          null,
          _,
          g,
          v,
          x,
          y
        ), ie++);
      }
      const ks = he ? Eo(ot) : Ze;
      for (H = ks.length - 1, b = Z - 1; b >= 0; b--) {
        const oe = N + b, be = f[oe], en = oe + 1 < T ? f[oe + 1].el : m;
        ot[b] === 0 ? M(
          null,
          be,
          h,
          en,
          _,
          g,
          v,
          x,
          y
        ) : he && (H < 0 || b !== ks[H] ? Be(be, h, en, 2) : H--);
      }
    }
  }, Be = (l, f, h, m, _ = null) => {
    const { el: g, type: v, transition: x, children: y, shapeFlag: b } = l;
    if (b & 6) {
      Be(l.component.subTree, f, h, m);
      return;
    }
    if (b & 128) {
      l.suspense.move(f, h, m);
      return;
    }
    if (b & 64) {
      v.move(l, f, h, rt);
      return;
    }
    if (v === ve) {
      n(g, f, h);
      for (let E = 0; E < y.length; E++)
        Be(y[E], f, h, m);
      n(l.anchor, f, h);
      return;
    }
    if (v === hs) {
      K(l, f, h);
      return;
    }
    if (m !== 2 && b & 1 && x)
      if (m === 0)
        x.beforeEnter(g), n(g, f, h), le(() => x.enter(g), _);
      else {
        const { leave: E, delayLeave: w, afterLeave: P } = x, N = () => n(g, f, h), V = () => {
          E(g, () => {
            N(), P && P();
          });
        };
        w ? w(g, N, V) : V();
      }
    else
      n(g, f, h);
  }, me = (l, f, h, m = !1, _ = !1) => {
    const {
      type: g,
      props: v,
      ref: x,
      children: y,
      dynamicChildren: b,
      shapeFlag: T,
      patchFlag: E,
      dirs: w,
      cacheIndex: P
    } = l;
    if (E === -2 && (_ = !1), x != null && vs(x, null, h, l, !0), P != null && (f.renderCache[P] = void 0), T & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const N = T & 1 && w, V = !_t(l);
    let H;
    if (V && (H = v && v.onVnodeBeforeUnmount) && ye(H, f, l), T & 6)
      Wi(l.component, h, m);
    else {
      if (T & 128) {
        l.suspense.unmount(h, m);
        return;
      }
      N && We(l, null, f, "beforeUnmount"), T & 64 ? l.type.remove(
        l,
        f,
        h,
        rt,
        m
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (g !== ve || E > 0 && E & 64) ? it(
        b,
        f,
        h,
        !1,
        !0
      ) : (g === ve && E & 384 || !_ && T & 16) && it(y, f, h), m && zs(l);
    }
    (V && (H = v && v.onVnodeUnmounted) || N) && le(() => {
      H && ye(H, f, l), N && We(l, null, f, "unmounted");
    }, h);
  }, zs = (l) => {
    const { type: f, el: h, anchor: m, transition: _ } = l;
    if (f === ve) {
      Bi(h, m);
      return;
    }
    if (f === hs) {
      O(l);
      return;
    }
    const g = () => {
      i(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: v, delayLeave: x } = _, y = () => v(h, g);
      x ? x(l.el, g, y) : y();
    } else
      g();
  }, Bi = (l, f) => {
    let h;
    for (; l !== f; )
      h = S(l), i(l), l = h;
    i(f);
  }, Wi = (l, f, h) => {
    const { bum: m, scope: _, job: g, subTree: v, um: x, m: y, a: b } = l;
    hn(y), hn(b), m && ss(m), _.stop(), g && (g.flags |= 8, me(v, l, f, h)), x && le(x, f), le(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, it = (l, f, h, m = !1, _ = !1, g = 0) => {
    for (let v = g; v < l.length; v++)
      me(l[v], f, h, m, _);
  }, At = (l) => {
    if (l.shapeFlag & 6)
      return At(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const f = S(l.anchor || l.el), h = f && f[Br];
    return h ? S(h) : f;
  };
  let es = !1;
  const Xs = (l, f, h) => {
    l == null ? f._vnode && me(f._vnode, null, null, !0) : M(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = l, es || (es = !0, on(), fi(), es = !1);
  }, rt = {
    p: M,
    um: me,
    m: Be,
    r: zs,
    mt: kt,
    mc: Te,
    pc: L,
    pbc: $e,
    n: At,
    o: e
  };
  let Zs, Qs;
  return {
    render: Xs,
    hydrate: Zs,
    createApp: uo(Xs, Zs)
  };
}
function fs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Ke({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pi(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (A(n) && A(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let c = i[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[r] = Fe(i[r]), c.el = o.el), !s && c.patchFlag !== -2 && Pi(o, c)), c.type === Qt && (c.el = o.el);
    }
}
function Eo(e) {
  const t = e.slice(), s = [0];
  let n, i, r, o, c;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const d = e[n];
    if (d !== 0) {
      if (i = s[s.length - 1], e[i] < d) {
        t[n] = i, s.push(n);
        continue;
      }
      for (r = 0, o = s.length - 1; r < o; )
        c = r + o >> 1, e[s[c]] < d ? r = c + 1 : o = c;
      d < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n);
    }
  }
  for (r = s.length, o = s[r - 1]; r-- > 0; )
    s[r] = o, o = t[o];
  return s;
}
function Ai(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ai(t);
}
function hn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const So = Symbol.for("v-scx"), Co = () => Dt(So);
function us(e, t, s) {
  return Ri(e, t, s);
}
function Ri(e, t, s = U) {
  const { immediate: n, deep: i, flush: r, once: o } = s, c = G({}, s), u = t && n || !t && r !== "post";
  let d;
  if (St) {
    if (r === "sync") {
      const C = Co();
      d = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!u) {
      const C = () => {
      };
      return C.stop = de, C.resume = de, C.pause = de, C;
    }
  }
  const a = z;
  c.call = (C, I, M) => Ce(C, a, I, M);
  let p = !1;
  r === "post" ? c.scheduler = (C) => {
    le(C, a && a.suspense);
  } : r !== "sync" && (p = !0, c.scheduler = (C, I) => {
    I ? C() : Us(C);
  }), c.augmentJob = (C) => {
    t && (C.flags |= 4), p && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const S = Mr(e, t, c);
  return St && (d ? d.push(S) : u && S()), S;
}
function wo(e, t, s) {
  const n = this.proxy, i = J(e) ? e.includes(".") ? Ni(n, e) : () => n[e] : e.bind(n, n);
  let r;
  R(t) ? r = t : (r = t.handler, s = t);
  const o = Ct(this), c = Ri(i, r.bind(n), s);
  return o(), c;
}
function Ni(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const To = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pe(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function Oo(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || U;
  let i = s;
  const r = t.startsWith("update:"), o = r && To(n, t.slice(7));
  o && (o.trim && (i = s.map((a) => J(a) ? a.trim() : a)), o.number && (i = s.map(zi)));
  let c, u = n[c = ts(t)] || // also try camelCase event handler (#2249)
  n[c = ts(pe(t))];
  !u && r && (u = n[c = ts(ae(t))]), u && Ce(
    u,
    e,
    6,
    i
  );
  const d = n[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Ce(
      d,
      e,
      6,
      i
    );
  }
}
function Mi(e, t, s = !1) {
  const n = t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, c = !1;
  if (!R(e)) {
    const u = (d) => {
      const a = Mi(d, t, !0);
      a && (c = !0, G(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (q(e) && n.set(e, null), null) : (A(r) ? r.forEach((u) => o[u] = null) : G(o, r), q(e) && n.set(e, o), o);
}
function Zt(e, t) {
  return !e || !Bt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), F(e, t[0].toLowerCase() + t.slice(1)) || F(e, ae(t)) || F(e, t));
}
function as(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: c,
    emit: u,
    render: d,
    renderCache: a,
    props: p,
    data: S,
    setupState: C,
    ctx: I,
    inheritAttrs: M
  } = e, k = Vt(e);
  let j, W;
  try {
    if (s.shapeFlag & 4) {
      const O = i || n, Y = Ie.NODE_ENV !== "production" && C.__isScriptSetup ? new Proxy(O, {
        get(we, ue, Te) {
          return Ir(
            `Property '${String(
              ue
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(we, ue, Te);
        }
      }) : O;
      j = Ee(
        d.call(
          Y,
          O,
          a,
          Ie.NODE_ENV !== "production" ? Mt(p) : p,
          C,
          S,
          I
        )
      ), W = c;
    } else {
      const O = t;
      Ie.NODE_ENV, j = Ee(
        O.length > 1 ? O(
          Ie.NODE_ENV !== "production" ? Mt(p) : p,
          Ie.NODE_ENV !== "production" ? {
            get attrs() {
              return Mt(c);
            },
            slots: o,
            emit: u
          } : { attrs: c, slots: o, emit: u }
        ) : O(
          Ie.NODE_ENV !== "production" ? Mt(p) : p,
          null
        )
      ), W = t.props ? c : Po(c);
    }
  } catch (O) {
    mt.length = 0, zt(O, e, 1), j = Le(vt);
  }
  let K = j;
  if (W && M !== !1) {
    const O = Object.keys(W), { shapeFlag: Y } = K;
    O.length && Y & 7 && (r && O.some(As) && (W = Ao(
      W,
      r
    )), K = tt(K, W, !1, !0));
  }
  return s.dirs && (K = tt(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(s.dirs) : s.dirs), s.transition && Bs(K, s.transition), j = K, Vt(k), j;
}
const Po = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Bt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Ao = (e, t) => {
  const s = {};
  for (const n in e)
    (!As(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Ro(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: c, patchFlag: u } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? dn(n, o, d) : !!o;
    if (u & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const S = a[p];
        if (o[S] !== n[S] && !Zt(d, S))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : n === o ? !1 : n ? o ? dn(n, o, d) : !0 : !!o;
  return !1;
}
function dn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (t[r] !== e[r] && !Zt(s, r))
      return !0;
  }
  return !1;
}
function No({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Ii = (e) => e.__isSuspense;
function Mo(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : $r(e);
}
const ve = Symbol.for("v-fgt"), Qt = Symbol.for("v-txt"), vt = Symbol.for("v-cmt"), hs = Symbol.for("v-stc"), mt = [];
let fe = null;
function Io(e = !1) {
  mt.push(fe = e ? null : []);
}
function Do() {
  mt.pop(), fe = mt[mt.length - 1] || null;
}
let Et = 1;
function pn(e) {
  Et += e, e < 0 && fe && (fe.hasOnce = !0);
}
function Fo(e) {
  return e.dynamicChildren = Et > 0 ? fe || Ze : null, Do(), Et > 0 && fe && fe.push(e), e;
}
function Ho(e, t, s, n, i, r) {
  return Fo(
    Ge(
      e,
      t,
      s,
      n,
      i,
      r,
      !0
    )
  );
}
function Di(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Fi = ({ key: e }) => e ?? null, Ft = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || X(e) || R(e) ? { i: Se, r: e, k: t, f: !!s } : e : null);
function Ge(e, t = null, s = null, n = 0, i = null, r = e === ve ? 0 : 1, o = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Fi(t),
    ref: t && Ft(t),
    scopeId: ai,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Se
  };
  return c ? (qs(u, s), r & 128 && e.normalize(u)) : s && (u.shapeFlag |= J(s) ? 8 : 16), Et > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && fe.push(u), u;
}
const Le = jo;
function jo(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === so) && (e = vt), Di(e)) {
    const c = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && qs(c, s), Et > 0 && !r && fe && (c.shapeFlag & 6 ? fe[fe.indexOf(e)] = c : fe.push(c)), c.patchFlag = -2, c;
  }
  if (Xo(e) && (e = e.__vccOpts), t) {
    t = Lo(t);
    let { class: c, style: u } = t;
    c && !J(c) && (t.class = Is(c)), q(u) && ($s(u) && !A(u) && (u = G({}, u)), t.style = Ms(u));
  }
  const o = J(e) ? 1 : Ii(e) ? 128 : Wr(e) ? 64 : q(e) ? 4 : R(e) ? 2 : 0;
  return Ge(
    e,
    t,
    s,
    n,
    i,
    o,
    r,
    !0
  );
}
function Lo(e) {
  return e ? $s(e) || vi(e) ? G({}, e) : e : null;
}
function tt(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: c, transition: u } = e, d = t ? Vo(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Fi(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? A(r) ? r.concat(Ft(t)) : [r, Ft(t)] : Ft(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ve ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && Bs(
    a,
    u.clone(a)
  ), a;
}
function Hi(e = " ", t = 0) {
  return Le(Qt, null, e, t);
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? Le(vt) : A(e) ? Le(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Di(e) ? Fe(e) : Le(Qt, null, String(e));
}
function Fe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function qs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (A(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), qs(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !vi(t) ? t._ctx = Se : i === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else R(t) ? (t = { default: t, _ctx: Se }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Hi(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Vo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Is([t.class, n.class]));
      else if (i === "style")
        t.style = Ms([t.style, n.style]);
      else if (Bt(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(A(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ye(e, t, s, n = null) {
  Ce(e, t, 7, [
    s,
    n
  ]);
}
const $o = bi();
let Uo = 0;
function Bo(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || $o, r = {
    uid: Uo++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new nr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Si(n, i),
    emitsOptions: Mi(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Oo.bind(null, r), e.ce && e.ce(r), r;
}
let z = null, Ut, Ts;
{
  const e = Gt(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Ut = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => z = s
  ), Ts = t(
    "__VUE_SSR_SETTERS__",
    (s) => St = s
  );
}
const Ct = (e) => {
  const t = z;
  return Ut(e), e.scope.on(), () => {
    e.scope.off(), Ut(t);
  };
}, _n = () => {
  z && z.scope.off(), Ut(null);
};
function ji(e) {
  return e.vnode.shapeFlag & 4;
}
let St = !1;
function Wo(e, t = !1, s = !1) {
  t && Ts(t);
  const { props: n, children: i } = e.vnode, r = ji(e);
  ho(e, n, r, t), mo(e, i, s);
  const o = r ? Ko(e, t) : void 0;
  return t && Ts(!1), o;
}
function Ko(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, no);
  const { setup: n } = s;
  if (n) {
    Re();
    const i = e.setupContext = n.length > 1 ? Go(e) : null, r = Ct(e), o = st(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), c = In(o);
    if (Ne(), r(), (c || e.sp) && !_t(e) && di(e), c) {
      if (o.then(_n, _n), t)
        return o.then((u) => {
          gn(e, u, t);
        }).catch((u) => {
          zt(u, e, 0);
        });
      e.asyncDep = o;
    } else
      gn(e, o, t);
  } else
    Li(e, t);
}
function gn(e, t, s) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = ii(t)), Li(e, s);
}
let mn;
function Li(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && mn && !n.render) {
      const i = n.template || Ws(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: c, compilerOptions: u } = n, d = G(
          G(
            {
              isCustomElement: r,
              delimiters: c
            },
            o
          ),
          u
        );
        n.render = mn(i, d);
      }
    }
    e.render = n.render || de;
  }
  {
    const i = Ct(e);
    Re();
    try {
      io(e);
    } finally {
      Ne(), i();
    }
  }
}
const qo = {
  get(e, t) {
    return Q(e, "get", ""), e[t];
  }
};
function Go(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, qo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Gs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ii(Cr(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in gt)
        return gt[s](e);
    },
    has(t, s) {
      return s in t || s in gt;
    }
  })) : e.proxy;
}
const Jo = /(?:^|[-_])(\w)/g, Yo = (e) => e.replace(Jo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function zo(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Vi(e, t, s = !1) {
  let n = zo(t);
  if (!n && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (n = i[1]);
  }
  if (!n && e && e.parent) {
    const i = (r) => {
      for (const o in r)
        if (r[o] === t)
          return o;
    };
    n = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return n ? Yo(n) : s ? "App" : "Anonymous";
}
function Xo(e) {
  return R(e) && "__vccOpts" in e;
}
const Zo = (e, t) => Rr(e, t, St), Qo = "3.5.12";
let Os;
const bn = typeof window < "u" && window.trustedTypes;
if (bn)
  try {
    Os = /* @__PURE__ */ bn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const $i = Os ? (e) => Os.createHTML(e) : (e) => e, ko = "http://www.w3.org/2000/svg", el = "http://www.w3.org/1998/Math/MathML", Pe = typeof document < "u" ? document : null, yn = Pe && /* @__PURE__ */ Pe.createElement("template"), tl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Pe.createElementNS(ko, e) : t === "mathml" ? Pe.createElementNS(el, e) : s ? Pe.createElement(e, { is: s }) : Pe.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Pe.createTextNode(e),
  createComment: (e) => Pe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Pe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, i, r) {
    const o = s ? s.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      yn.innerHTML = $i(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = yn.content;
      if (n === "svg" || n === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, sl = Symbol("_vtc");
function nl(e, t, s) {
  const n = e[sl];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const xn = Symbol("_vod"), il = Symbol("_vsh"), rl = Symbol(""), ol = /(^|;)\s*display\s*:/;
function ll(e, t, s) {
  const n = e.style, i = J(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (J(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          s[c] == null && Ht(n, c, "");
        }
      else
        for (const o in t)
          s[o] == null && Ht(n, o, "");
    for (const o in s)
      o === "display" && (r = !0), Ht(n, o, s[o]);
  } else if (i) {
    if (t !== s) {
      const o = n[rl];
      o && (s += ";" + o), n.cssText = s, r = ol.test(s);
    }
  } else t && e.removeAttribute("style");
  xn in e && (e[xn] = r ? n.display : "", e[il] && (n.display = "none"));
}
const vn = /\s*!important$/;
function Ht(e, t, s) {
  if (A(s))
    s.forEach((n) => Ht(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = cl(e, t);
    vn.test(s) ? e.setProperty(
      ae(n),
      s.replace(vn, ""),
      "important"
    ) : e[n] = s;
  }
}
const En = ["Webkit", "Moz", "ms"], ds = {};
function cl(e, t) {
  const s = ds[t];
  if (s)
    return s;
  let n = pe(t);
  if (n !== "filter" && n in e)
    return ds[t] = n;
  n = Fn(n);
  for (let i = 0; i < En.length; i++) {
    const r = En[i] + n;
    if (r in e)
      return ds[t] = r;
  }
  return t;
}
const Sn = "http://www.w3.org/1999/xlink";
function Cn(e, t, s, n, i, r = tr(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Sn, t.slice(6, t.length)) : e.setAttributeNS(Sn, t, s) : s == null || r && !jn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ve(s) ? String(s) : s
  );
}
function wn(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? $i(s) : s);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (c !== u || !("_value" in e)) && (e.value = u), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const c = typeof e[t];
    c === "boolean" ? s = jn(s) : s == null && c === "string" ? (s = "", o = !0) : c === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function fl(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function ul(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Tn = Symbol("_vei");
function al(e, t, s, n, i = null) {
  const r = e[Tn] || (e[Tn] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [c, u] = hl(t);
    if (n) {
      const d = r[t] = _l(
        n,
        i
      );
      fl(e, c, d, u);
    } else o && (ul(e, c, o, u), r[t] = void 0);
  }
}
const On = /(?:Once|Passive|Capture)$/;
function hl(e) {
  let t;
  if (On.test(e)) {
    t = {};
    let n;
    for (; n = e.match(On); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
let ps = 0;
const dl = /* @__PURE__ */ Promise.resolve(), pl = () => ps || (dl.then(() => ps = 0), ps = Date.now());
function _l(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Ce(
      gl(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = pl(), s;
}
function gl(e, t) {
  if (A(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const Pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ml = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? nl(e, n, o) : t === "style" ? ll(e, s, n) : Bt(t) ? As(t) || al(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bl(e, t, n, o)) ? (wn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Cn(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(n)) ? wn(e, pe(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Cn(e, t, n, o));
};
function bl(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Pn(t) && R(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Pn(t) && J(s) ? !1 : t in e;
}
const An = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function yl(e, t, s) {
  const n = /* @__PURE__ */ hi(e, t);
  Kt(n) && G(n, t);
  class i extends Js {
    constructor(o) {
      super(n, o, s);
    }
  }
  return i.def = n, i;
}
const xl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Js extends xl {
  constructor(t, s = {}, n = Nn) {
    super(), this._def = t, this._props = s, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n !== Nn ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Js) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, li(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const i of n)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: o } = n;
      let c;
      if (r && !A(r))
        for (const u in r) {
          const d = r[u];
          (d === Number || d && d.type === Number) && (u in this._props && (this._props[u] = tn(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[pe(u)] = !0);
        }
      this._numberProps = c, i && this._resolveProps(n), this.shadowRoot && this._applyStyles(o), this._mount(n);
    }, s = this._def.__asyncLoader;
    s ? this._pendingResolve = s().then(
      (n) => t(this._def = n, !0)
    ) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const s = this._instance && this._instance.exposed;
    if (s)
      for (const n in s)
        F(this, n) || Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ni(s[n])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, n = A(s) ? s : Object.keys(s || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && n.includes(i) && this._setProp(i, this[i]);
    for (const i of n.map(pe))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(r) {
          this._setProp(i, r, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const s = this.hasAttribute(t);
    let n = s ? this.getAttribute(t) : An;
    const i = pe(t);
    s && this._numberProps && this._numberProps[i] && (n = tn(n)), this._setProp(i, n, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, s, n = !0, i = !1) {
    s !== this._props[t] && (s === An ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), i && this._instance && this._update(), n && (s === !0 ? this.setAttribute(ae(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(ae(t), s + "") : s || this.removeAttribute(ae(t))));
  }
  _update() {
    El(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = Le(this._def, G(t, this._props));
    return this._instance || (s.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0;
      const i = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            Kt(o[0]) ? G({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      n.emit = (r, ...o) => {
        i(r, o), ae(r) !== r && i(ae(r), o);
      }, this._setParent();
    }), s;
  }
  _applyStyles(t, s) {
    if (!t) return;
    if (s) {
      if (s === this._def || this._styleChildren.has(s))
        return;
      this._styleChildren.add(s);
    }
    const n = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = document.createElement("style");
      n && r.setAttribute("nonce", n), r.textContent = t[i], this.shadowRoot.prepend(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let s;
    for (; s = this.firstChild; ) {
      const n = s.nodeType === 1 && s.getAttribute("slot") || "default";
      (t[n] || (t[n] = [])).push(s), this.removeChild(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), s = this._instance.type.__scopeId;
    for (let n = 0; n < t.length; n++) {
      const i = t[n], r = i.getAttribute("name") || "default", o = this._slots[r], c = i.parentNode;
      if (o)
        for (const u of o) {
          if (s && u.nodeType === 1) {
            const d = s + "-s", a = document.createTreeWalker(u, 1);
            u.setAttribute(d, "");
            let p;
            for (; p = a.nextNode(); )
              p.setAttribute(d, "");
          }
          c.insertBefore(u, i);
        }
      else
        for (; i.firstChild; ) c.insertBefore(i.firstChild, i);
      c.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const vl = /* @__PURE__ */ G({ patchProp: ml }, tl);
let Rn;
function Ui() {
  return Rn || (Rn = yo(vl));
}
const El = (...e) => {
  Ui().render(...e);
}, Nn = (...e) => {
  const t = Ui().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = Cl(n);
    if (!i) return;
    const r = t._component;
    !R(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, Sl(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function Sl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Cl(e) {
  return J(e) ? document.querySelector(e) : e;
}
const wl = { class: "card" }, Tl = /* @__PURE__ */ hi({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  emits: ["myEvent"],
  setup(e, { emit: t }) {
    const s = wr(0), n = t;
    function i() {
      n("myEvent"), s.value++;
    }
    return (r, o) => (Io(), Ho(ve, null, [
      Ge("h1", null, _s(r.msg), 1),
      Ge("div", wl, [
        Ge("button", {
          type: "button",
          onClick: i
        }, "count is " + _s(s.value), 1),
        o[0] || (o[0] = Ge("p", null, [
          Ge("code", null, "HelloWorld.vue"),
          Hi(" Component from vue3 app.")
        ], -1))
      ])
    ], 64));
  }
}), Ol = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, Pl = /* @__PURE__ */ Ol(Tl, [["__scopeId", "data-v-c32cf055"]]), Al = /* @__PURE__ */ yl(Pl);
customElements.define("some-component-ce", Al);
