(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const l of r.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && s(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ws(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const de = {},
  Ft = [],
  Qe = () => {},
  so = () => !1,
  Gn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  qs = (e) => e.startsWith("onUpdate:"),
  Ce = Object.assign,
  Us = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  io = Object.prototype.hasOwnProperty,
  le = (e, t) => io.call(e, t),
  J = Array.isArray,
  Nt = (e) => Wn(e) === "[object Map]",
  yr = (e) => Wn(e) === "[object Set]",
  ee = (e) => typeof e == "function",
  ve = (e) => typeof e == "string",
  gt = (e) => typeof e == "symbol",
  ge = (e) => e !== null && typeof e == "object",
  br = (e) => (ge(e) || ee(e)) && ee(e.then) && ee(e.catch),
  xr = Object.prototype.toString,
  Wn = (e) => xr.call(e),
  ro = (e) => Wn(e).slice(8, -1),
  Cr = (e) => Wn(e) === "[object Object]",
  Ks = (e) =>
    ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  sn = Ws(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  qn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  lo = /-(\w)/g,
  Ye = qn((e) => e.replace(lo, (t, n) => (n ? n.toUpperCase() : ""))),
  oo = /\B([A-Z])/g,
  At = qn((e) => e.replace(oo, "-$1").toLowerCase()),
  Un = qn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  is = qn((e) => (e ? `on${Un(e)}` : "")),
  St = (e, t) => !Object.is(e, t),
  rs = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Sr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  ao = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let bi;
const Kn = () =>
  bi ||
  (bi =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function xn(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = ve(s) ? po(s) : xn(s);
      if (i) for (const r in i) t[r] = i[r];
    }
    return t;
  } else if (ve(e) || ge(e)) return e;
}
const co = /;(?![^(]*\))/g,
  uo = /:([^]+)/,
  fo = /\/\*[^]*?\*\//g;
function po(e) {
  const t = {};
  return (
    e
      .replace(fo, "")
      .split(co)
      .forEach((n) => {
        if (n) {
          const s = n.split(uo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Ys(e) {
  let t = "";
  if (ve(e)) t = e;
  else if (J(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ys(e[n]);
      s && (t += s + " ");
    }
  else if (ge(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const ho =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  go = Ws(ho);
function Er(e) {
  return !!e || e === "";
}
const _r = (e) => !!(e && e.__v_isRef === !0),
  Ve = (e) =>
    ve(e)
      ? e
      : e == null
      ? ""
      : J(e) || (ge(e) && (e.toString === xr || !ee(e.toString)))
      ? _r(e)
        ? Ve(e.value)
        : JSON.stringify(e, Tr, 2)
      : String(e),
  Tr = (e, t) =>
    _r(t)
      ? Tr(e, t.value)
      : Nt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, i], r) => ((n[ls(s, r) + " =>"] = i), n),
            {}
          ),
        }
      : yr(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => ls(n)) }
      : gt(t)
      ? ls(t)
      : ge(t) && !J(t) && !Cr(t)
      ? String(t)
      : t,
  ls = (e, t = "") => {
    var n;
    return gt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let je;
class Pr {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = je),
      !t && je && (this.index = (je.scopes || (je.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = je;
      try {
        return (je = this), t();
      } finally {
        je = n;
      }
    }
  }
  on() {
    je = this;
  }
  off() {
    je = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function mo(e) {
  return new Pr(e);
}
function vo() {
  return je;
}
let fe;
const os = new WeakSet();
class Mr {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      je && je.active && je.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), os.has(this) && (os.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Lr(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), xi(this), Ir(this);
    const t = fe,
      n = Je;
    (fe = this), (Je = !0);
    try {
      return this.fn();
    } finally {
      Ar(this), (fe = t), (Je = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Qs(t);
      (this.deps = this.depsTail = void 0),
        xi(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? os.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Ts(this) && this.run();
  }
  get dirty() {
    return Ts(this);
  }
}
let Or = 0,
  rn,
  ln;
function Lr(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = ln), (ln = e);
    return;
  }
  (e.next = rn), (rn = e);
}
function Xs() {
  Or++;
}
function Zs() {
  if (--Or > 0) return;
  if (ln) {
    let t = ln;
    for (ln = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; rn; ) {
    let t = rn;
    for (rn = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ir(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Ar(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Qs(s), wo(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = i);
  }
  (e.deps = t), (e.depsTail = n);
}
function Ts(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Rr(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Rr(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === dn)
  )
    return;
  e.globalVersion = dn;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Ts(e))) {
    e.flags &= -3;
    return;
  }
  const n = fe,
    s = Je;
  (fe = e), (Je = !0);
  try {
    Ir(e);
    const i = e.fn(e._value);
    (t.version === 0 || St(i, e._value)) && ((e._value = i), t.version++);
  } catch (i) {
    throw (t.version++, i);
  } finally {
    (fe = n), (Je = s), Ar(e), (e.flags &= -3);
  }
}
function Qs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (
    (s && ((s.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) Qs(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function wo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Je = !0;
const Br = [];
function Et() {
  Br.push(Je), (Je = !1);
}
function _t() {
  const e = Br.pop();
  Je = e === void 0 ? !0 : e;
}
function xi(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = fe;
    fe = void 0;
    try {
      t();
    } finally {
      fe = n;
    }
  }
}
let dn = 0;
class yo {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Js {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!fe || !Je || fe === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== fe)
      (n = this.activeLink = new yo(fe, this)),
        fe.deps
          ? ((n.prevDep = fe.depsTail),
            (fe.depsTail.nextDep = n),
            (fe.depsTail = n))
          : (fe.deps = fe.depsTail = n),
        Dr(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = fe.depsTail),
        (n.nextDep = void 0),
        (fe.depsTail.nextDep = n),
        (fe.depsTail = n),
        fe.deps === n && (fe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, dn++, this.notify(t);
  }
  notify(t) {
    Xs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Zs();
    }
  }
}
function Dr(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Dr(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Ps = new WeakMap(),
  Ot = Symbol(""),
  Ms = Symbol(""),
  pn = Symbol("");
function Te(e, t, n) {
  if (Je && fe) {
    let s = Ps.get(e);
    s || Ps.set(e, (s = new Map()));
    let i = s.get(n);
    i || (s.set(n, (i = new Js())), (i.map = s), (i.key = n)), i.track();
  }
}
function dt(e, t, n, s, i, r) {
  const l = Ps.get(e);
  if (!l) {
    dn++;
    return;
  }
  const o = (a) => {
    a && a.trigger();
  };
  if ((Xs(), t === "clear")) l.forEach(o);
  else {
    const a = J(e),
      u = a && Ks(n);
    if (a && n === "length") {
      const c = Number(s);
      l.forEach((f, d) => {
        (d === "length" || d === pn || (!gt(d) && d >= c)) && o(f);
      });
    } else
      switch (
        ((n !== void 0 || l.has(void 0)) && o(l.get(n)), u && o(l.get(pn)), t)
      ) {
        case "add":
          a ? u && o(l.get("length")) : (o(l.get(Ot)), Nt(e) && o(l.get(Ms)));
          break;
        case "delete":
          a || (o(l.get(Ot)), Nt(e) && o(l.get(Ms)));
          break;
        case "set":
          Nt(e) && o(l.get(Ot));
          break;
      }
  }
  Zs();
}
function Dt(e) {
  const t = re(e);
  return t === e ? t : (Te(t, "iterate", pn), Ke(e) ? t : t.map(Pe));
}
function Yn(e) {
  return Te((e = re(e)), "iterate", pn), e;
}
const bo = {
  __proto__: null,
  [Symbol.iterator]() {
    return as(this, Symbol.iterator, Pe);
  },
  concat(...e) {
    return Dt(this).concat(...e.map((t) => (J(t) ? Dt(t) : t)));
  },
  entries() {
    return as(this, "entries", (e) => ((e[1] = Pe(e[1])), e));
  },
  every(e, t) {
    return at(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return at(this, "filter", e, t, (n) => n.map(Pe), arguments);
  },
  find(e, t) {
    return at(this, "find", e, t, Pe, arguments);
  },
  findIndex(e, t) {
    return at(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return at(this, "findLast", e, t, Pe, arguments);
  },
  findLastIndex(e, t) {
    return at(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return at(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cs(this, "includes", e);
  },
  indexOf(...e) {
    return cs(this, "indexOf", e);
  },
  join(e) {
    return Dt(this).join(e);
  },
  lastIndexOf(...e) {
    return cs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return at(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Zt(this, "pop");
  },
  push(...e) {
    return Zt(this, "push", e);
  },
  reduce(e, ...t) {
    return Ci(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ci(this, "reduceRight", e, t);
  },
  shift() {
    return Zt(this, "shift");
  },
  some(e, t) {
    return at(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Zt(this, "splice", e);
  },
  toReversed() {
    return Dt(this).toReversed();
  },
  toSorted(e) {
    return Dt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Dt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Zt(this, "unshift", e);
  },
  values() {
    return as(this, "values", Pe);
  },
};
function as(e, t, n) {
  const s = Yn(e),
    i = s[t]();
  return (
    s !== e &&
      !Ke(e) &&
      ((i._next = i.next),
      (i.next = () => {
        const r = i._next();
        return r.value && (r.value = n(r.value)), r;
      })),
    i
  );
}
const xo = Array.prototype;
function at(e, t, n, s, i, r) {
  const l = Yn(e),
    o = l !== e && !Ke(e),
    a = l[t];
  if (a !== xo[t]) {
    const f = a.apply(e, r);
    return o ? Pe(f) : f;
  }
  let u = n;
  l !== e &&
    (o
      ? (u = function (f, d) {
          return n.call(this, Pe(f), d, e);
        })
      : n.length > 2 &&
        (u = function (f, d) {
          return n.call(this, f, d, e);
        }));
  const c = a.call(l, u, s);
  return o && i ? i(c) : c;
}
function Ci(e, t, n, s) {
  const i = Yn(e);
  let r = n;
  return (
    i !== e &&
      (Ke(e)
        ? n.length > 3 &&
          (r = function (l, o, a) {
            return n.call(this, l, o, a, e);
          })
        : (r = function (l, o, a) {
            return n.call(this, l, Pe(o), a, e);
          })),
    i[t](r, ...s)
  );
}
function cs(e, t, n) {
  const s = re(e);
  Te(s, "iterate", pn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && ni(n[0])
    ? ((n[0] = re(n[0])), s[t](...n))
    : i;
}
function Zt(e, t, n = []) {
  Et(), Xs();
  const s = re(e)[t].apply(e, n);
  return Zs(), _t(), s;
}
const Co = Ws("__proto__,__v_isRef,__isVue"),
  $r = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(gt)
  );
function So(e) {
  gt(e) || (e = String(e));
  const t = re(this);
  return Te(t, "has", e), t.hasOwnProperty(e);
}
class zr {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly,
      r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return s === (i ? (r ? Ro : jr) : r ? Hr : Nr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const l = J(t);
    if (!i) {
      let a;
      if (l && (a = bo[n])) return a;
      if (n === "hasOwnProperty") return So;
    }
    const o = Reflect.get(t, n, Le(t) ? t : s);
    return (gt(n) ? $r.has(n) : Co(n)) || (i || Te(t, "get", n), r)
      ? o
      : Le(o)
      ? l && Ks(n)
        ? o
        : o.value
      : ge(o)
      ? i
        ? kr(o)
        : Xn(o)
      : o;
  }
}
class Fr extends zr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    if (!this._isShallow) {
      const a = Lt(r);
      if (
        (!Ke(s) && !Lt(s) && ((r = re(r)), (s = re(s))),
        !J(t) && Le(r) && !Le(s))
      )
        return a ? !1 : ((r.value = s), !0);
    }
    const l = J(t) && Ks(n) ? Number(n) < t.length : le(t, n),
      o = Reflect.set(t, n, s, Le(t) ? t : i);
    return (
      t === re(i) && (l ? St(s, r) && dt(t, "set", n, s) : dt(t, "add", n, s)),
      o
    );
  }
  deleteProperty(t, n) {
    const s = le(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && dt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!gt(n) || !$r.has(n)) && Te(t, "has", n), s;
  }
  ownKeys(t) {
    return Te(t, "iterate", J(t) ? "length" : Ot), Reflect.ownKeys(t);
  }
}
class Eo extends zr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const _o = new Fr(),
  To = new Eo(),
  Po = new Fr(!0);
const Os = (e) => e,
  _n = (e) => Reflect.getPrototypeOf(e);
function Mo(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = re(i),
      l = Nt(r),
      o = e === "entries" || (e === Symbol.iterator && l),
      a = e === "keys" && l,
      u = i[e](...s),
      c = n ? Os : t ? Ls : Pe;
    return (
      !t && Te(r, "iterate", a ? Ms : Ot),
      {
        next() {
          const { value: f, done: d } = u.next();
          return d
            ? { value: f, done: d }
            : { value: o ? [c(f[0]), c(f[1])] : c(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Tn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Oo(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw,
        l = re(r),
        o = re(i);
      e || (St(i, o) && Te(l, "get", i), Te(l, "get", o));
      const { has: a } = _n(l),
        u = t ? Os : e ? Ls : Pe;
      if (a.call(l, i)) return u(r.get(i));
      if (a.call(l, o)) return u(r.get(o));
      r !== l && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Te(re(i), "iterate", Ot), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw,
        l = re(r),
        o = re(i);
      return (
        e || (St(i, o) && Te(l, "has", i), Te(l, "has", o)),
        i === o ? r.has(i) : r.has(i) || r.has(o)
      );
    },
    forEach(i, r) {
      const l = this,
        o = l.__v_raw,
        a = re(o),
        u = t ? Os : e ? Ls : Pe;
      return (
        !e && Te(a, "iterate", Ot),
        o.forEach((c, f) => i.call(r, u(c), u(f), l))
      );
    },
  };
  return (
    Ce(
      n,
      e
        ? {
            add: Tn("add"),
            set: Tn("set"),
            delete: Tn("delete"),
            clear: Tn("clear"),
          }
        : {
            add(i) {
              !t && !Ke(i) && !Lt(i) && (i = re(i));
              const r = re(this);
              return (
                _n(r).has.call(r, i) || (r.add(i), dt(r, "add", i, i)), this
              );
            },
            set(i, r) {
              !t && !Ke(r) && !Lt(r) && (r = re(r));
              const l = re(this),
                { has: o, get: a } = _n(l);
              let u = o.call(l, i);
              u || ((i = re(i)), (u = o.call(l, i)));
              const c = a.call(l, i);
              return (
                l.set(i, r),
                u ? St(r, c) && dt(l, "set", i, r) : dt(l, "add", i, r),
                this
              );
            },
            delete(i) {
              const r = re(this),
                { has: l, get: o } = _n(r);
              let a = l.call(r, i);
              a || ((i = re(i)), (a = l.call(r, i))), o && o.call(r, i);
              const u = r.delete(i);
              return a && dt(r, "delete", i, void 0), u;
            },
            clear() {
              const i = re(this),
                r = i.size !== 0,
                l = i.clear();
              return r && dt(i, "clear", void 0, void 0), l;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      n[i] = Mo(i, e, t);
    }),
    n
  );
}
function ei(e, t) {
  const n = Oo(e, t);
  return (s, i, r) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? s
      : Reflect.get(le(n, i) && i in s ? n : s, i, r);
}
const Lo = { get: ei(!1, !1) },
  Io = { get: ei(!1, !0) },
  Ao = { get: ei(!0, !1) };
const Nr = new WeakMap(),
  Hr = new WeakMap(),
  jr = new WeakMap(),
  Ro = new WeakMap();
function Bo(e) {
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
function Do(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Bo(ro(e));
}
function Xn(e) {
  return Lt(e) ? e : ti(e, !1, _o, Lo, Nr);
}
function Vr(e) {
  return ti(e, !1, Po, Io, Hr);
}
function kr(e) {
  return ti(e, !0, To, Ao, jr);
}
function ti(e, t, n, s, i) {
  if (!ge(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = i.get(e);
  if (r) return r;
  const l = Do(e);
  if (l === 0) return e;
  const o = new Proxy(e, l === 2 ? s : n);
  return i.set(e, o), o;
}
function Ht(e) {
  return Lt(e) ? Ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Lt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ke(e) {
  return !!(e && e.__v_isShallow);
}
function ni(e) {
  return e ? !!e.__v_raw : !1;
}
function re(e) {
  const t = e && e.__v_raw;
  return t ? re(t) : e;
}
function Gr(e) {
  return (
    !le(e, "__v_skip") && Object.isExtensible(e) && Sr(e, "__v_skip", !0), e
  );
}
const Pe = (e) => (ge(e) ? Xn(e) : e),
  Ls = (e) => (ge(e) ? kr(e) : e);
function Le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _e(e) {
  return Wr(e, !1);
}
function $o(e) {
  return Wr(e, !0);
}
function Wr(e, t) {
  return Le(e) ? e : new zo(e, t);
}
class zo {
  constructor(t, n) {
    (this.dep = new Js()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : re(t)),
      (this._value = n ? t : Pe(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Ke(t) || Lt(t);
    (t = s ? t : re(t)),
      St(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Pe(t)),
        this.dep.trigger());
  }
}
function Re(e) {
  return Le(e) ? e.value : e;
}
const Fo = {
  get: (e, t, n) => (t === "__v_raw" ? e : Re(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const i = e[t];
    return Le(i) && !Le(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function qr(e) {
  return Ht(e) ? e : new Proxy(e, Fo);
}
class No {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Js(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = dn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && fe !== this))
      return Lr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Rr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ho(e, t, n = !1) {
  let s, i;
  return ee(e) ? (s = e) : ((s = e.get), (i = e.set)), new No(s, i, n);
}
const Pn = {},
  Bn = new WeakMap();
let Mt;
function jo(e, t = !1, n = Mt) {
  if (n) {
    let s = Bn.get(n);
    s || Bn.set(n, (s = [])), s.push(e);
  }
}
function Vo(e, t, n = de) {
  const {
      immediate: s,
      deep: i,
      once: r,
      scheduler: l,
      augmentJob: o,
      call: a,
    } = n,
    u = (b) => (i ? b : Ke(b) || i === !1 || i === 0 ? xt(b, 1) : xt(b));
  let c,
    f,
    d,
    p,
    v = !1,
    y = !1;
  if (
    (Le(e)
      ? ((f = () => e.value), (v = Ke(e)))
      : Ht(e)
      ? ((f = () => u(e)), (v = !0))
      : J(e)
      ? ((y = !0),
        (v = e.some((b) => Ht(b) || Ke(b))),
        (f = () =>
          e.map((b) => {
            if (Le(b)) return b.value;
            if (Ht(b)) return u(b);
            if (ee(b)) return a ? a(b, 2) : b();
          })))
      : ee(e)
      ? t
        ? (f = a ? () => a(e, 2) : e)
        : (f = () => {
            if (d) {
              Et();
              try {
                d();
              } finally {
                _t();
              }
            }
            const b = Mt;
            Mt = c;
            try {
              return a ? a(e, 3, [p]) : e(p);
            } finally {
              Mt = b;
            }
          })
      : (f = Qe),
    t && i)
  ) {
    const b = f,
      E = i === !0 ? 1 / 0 : i;
    f = () => xt(b(), E);
  }
  const _ = vo(),
    x = () => {
      c.stop(), _ && _.active && Us(_.effects, c);
    };
  if (r && t) {
    const b = t;
    t = (...E) => {
      b(...E), x();
    };
  }
  let g = y ? new Array(e.length).fill(Pn) : Pn;
  const w = (b) => {
    if (!(!(c.flags & 1) || (!c.dirty && !b)))
      if (t) {
        const E = c.run();
        if (i || v || (y ? E.some((A, z) => St(A, g[z])) : St(E, g))) {
          d && d();
          const A = Mt;
          Mt = c;
          try {
            const z = [E, g === Pn ? void 0 : y && g[0] === Pn ? [] : g, p];
            a ? a(t, 3, z) : t(...z), (g = E);
          } finally {
            Mt = A;
          }
        }
      } else c.run();
  };
  return (
    o && o(w),
    (c = new Mr(f)),
    (c.scheduler = l ? () => l(w, !1) : w),
    (p = (b) => jo(b, !1, c)),
    (d = c.onStop =
      () => {
        const b = Bn.get(c);
        if (b) {
          if (a) a(b, 4);
          else for (const E of b) E();
          Bn.delete(c);
        }
      }),
    t ? (s ? w(!0) : (g = c.run())) : l ? l(w.bind(null, !0), !0) : c.run(),
    (x.pause = c.pause.bind(c)),
    (x.resume = c.resume.bind(c)),
    (x.stop = x),
    x
  );
}
function xt(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, Le(e))) xt(e.value, t, n);
  else if (J(e)) for (let s = 0; s < e.length; s++) xt(e[s], t, n);
  else if (yr(e) || Nt(e))
    e.forEach((s) => {
      xt(s, t, n);
    });
  else if (Cr(e)) {
    for (const s in e) xt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && xt(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Cn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Zn(i, t, n);
  }
}
function ot(e, t, n, s) {
  if (ee(e)) {
    const i = Cn(e, t, n, s);
    return (
      i &&
        br(i) &&
        i.catch((r) => {
          Zn(r, t, n);
        }),
      i
    );
  }
  if (J(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++) i.push(ot(e[r], t, n, s));
    return i;
  }
}
function Zn(e, t, n, s = !0) {
  const i = t ? t.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: l } =
      (t && t.appContext.config) || de;
  if (t) {
    let o = t.parent;
    const a = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, a, u) === !1) return;
      }
      o = o.parent;
    }
    if (r) {
      Et(), Cn(r, null, 10, [e, a, u]), _t();
      return;
    }
  }
  ko(e, n, i, s, l);
}
function ko(e, t, n, s = !0, i = !1) {
  if (i) throw e;
  console.error(e);
}
const Ae = [];
let st = -1;
const jt = [];
let wt = null,
  $t = 0;
const Ur = Promise.resolve();
let Dn = null;
function si(e) {
  const t = Dn || Ur;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Go(e) {
  let t = st + 1,
    n = Ae.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = Ae[s],
      r = hn(i);
    r < e || (r === e && i.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function ii(e) {
  if (!(e.flags & 1)) {
    const t = hn(e),
      n = Ae[Ae.length - 1];
    !n || (!(e.flags & 2) && t >= hn(n)) ? Ae.push(e) : Ae.splice(Go(t), 0, e),
      (e.flags |= 1),
      Kr();
  }
}
function Kr() {
  Dn || (Dn = Ur.then(Xr));
}
function Wo(e) {
  J(e)
    ? jt.push(...e)
    : wt && e.id === -1
    ? wt.splice($t + 1, 0, e)
    : e.flags & 1 || (jt.push(e), (e.flags |= 1)),
    Kr();
}
function Si(e, t, n = st + 1) {
  for (; n < Ae.length; n++) {
    const s = Ae[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      Ae.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Yr(e) {
  if (jt.length) {
    const t = [...new Set(jt)].sort((n, s) => hn(n) - hn(s));
    if (((jt.length = 0), wt)) {
      wt.push(...t);
      return;
    }
    for (wt = t, $t = 0; $t < wt.length; $t++) {
      const n = wt[$t];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (wt = null), ($t = 0);
  }
}
const hn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Xr(e) {
  const t = Qe;
  try {
    for (st = 0; st < Ae.length; st++) {
      const n = Ae[st];
      n &&
        !(n.flags & 8) &&
        (n.flags & 4 && (n.flags &= -2),
        Cn(n, n.i, n.i ? 15 : 14),
        n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; st < Ae.length; st++) {
      const n = Ae[st];
      n && (n.flags &= -2);
    }
    (st = -1),
      (Ae.length = 0),
      Yr(),
      (Dn = null),
      (Ae.length || jt.length) && Xr();
  }
}
let Be = null,
  Zr = null;
function $n(e) {
  const t = Be;
  return (Be = e), (Zr = (e && e.type.__scopeId) || null), t;
}
function be(e, t = Be, n) {
  if (!t || e._n) return e;
  const s = (...i) => {
    s._d && Ai(-1);
    const r = $n(t);
    let l;
    try {
      l = e(...i);
    } finally {
      $n(r), s._d && Ai(1);
    }
    return l;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Tt(e, t, n, s) {
  const i = e.dirs,
    r = t && t.dirs;
  for (let l = 0; l < i.length; l++) {
    const o = i[l];
    r && (o.oldValue = r[l].value);
    let a = o.dir[s];
    a && (Et(), ot(a, n, 8, [e.el, o, e, t]), _t());
  }
}
const qo = Symbol("_vte"),
  Uo = (e) => e.__isTeleport;
function ri(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), ri(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function Xe(e, t) {
  return ee(e) ? (() => Ce({ name: e.name }, t, { setup: e }))() : e;
}
function Qr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function zn(e, t, n, s, i = !1) {
  if (J(e)) {
    e.forEach((v, y) => zn(v, t && (J(t) ? t[y] : t), n, s, i));
    return;
  }
  if (Vt(s) && !i) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      zn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? pi(s.component) : s.el,
    l = i ? null : r,
    { i: o, r: a } = e,
    u = t && t.r,
    c = o.refs === de ? (o.refs = {}) : o.refs,
    f = o.setupState,
    d = re(f),
    p = f === de ? () => !1 : (v) => le(d, v);
  if (
    (u != null &&
      u !== a &&
      (ve(u)
        ? ((c[u] = null), p(u) && (f[u] = null))
        : Le(u) && (u.value = null)),
    ee(a))
  )
    Cn(a, o, 12, [l, c]);
  else {
    const v = ve(a),
      y = Le(a);
    if (v || y) {
      const _ = () => {
        if (e.f) {
          const x = v ? (p(a) ? f[a] : c[a]) : a.value;
          i
            ? J(x) && Us(x, r)
            : J(x)
            ? x.includes(r) || x.push(r)
            : v
            ? ((c[a] = [r]), p(a) && (f[a] = c[a]))
            : ((a.value = [r]), e.k && (c[e.k] = a.value));
        } else
          v
            ? ((c[a] = l), p(a) && (f[a] = l))
            : y && ((a.value = l), e.k && (c[e.k] = l));
      };
      l ? ((_.id = -1), He(_, n)) : _();
    }
  }
}
Kn().requestIdleCallback;
Kn().cancelIdleCallback;
const Vt = (e) => !!e.type.__asyncLoader,
  Jr = (e) => e.type.__isKeepAlive;
function Ko(e, t) {
  el(e, "a", t);
}
function Yo(e, t) {
  el(e, "da", t);
}
function el(e, t, n = Oe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((Qn(t, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      Jr(i.parent.vnode) && Xo(s, t, n, i), (i = i.parent);
  }
}
function Xo(e, t, n, s) {
  const i = Qn(t, e, s, !0);
  nl(() => {
    Us(s[t], i);
  }, n);
}
function Qn(e, t, n = Oe, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...l) => {
          Et();
          const o = Sn(n),
            a = ot(t, n, e, l);
          return o(), _t(), a;
        });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const mt =
    (e) =>
    (t, n = Oe) => {
      (!wn || e === "sp") && Qn(e, (...s) => t(...s), n);
    },
  Zo = mt("bm"),
  li = mt("m"),
  tl = mt("bu"),
  oi = mt("u"),
  ai = mt("bum"),
  nl = mt("um"),
  Qo = mt("sp"),
  Jo = mt("rtg"),
  ea = mt("rtc");
function ta(e, t = Oe) {
  Qn("ec", e, t);
}
const sl = "components";
function Jn(e, t) {
  return sa(sl, e, !0, t) || e;
}
const na = Symbol.for("v-ndc");
function sa(e, t, n = !0, s = !1) {
  const i = Be || Oe;
  if (i) {
    const r = i.type;
    if (e === sl) {
      const o = ka(r, !1);
      if (o && (o === t || o === Ye(t) || o === Un(Ye(t)))) return r;
    }
    const l = Ei(i[e] || r[e], t) || Ei(i.appContext[e], t);
    return !l && s ? r : l;
  }
}
function Ei(e, t) {
  return e && (e[t] || e[Ye(t)] || e[Un(Ye(t))]);
}
function Is(e, t, n, s) {
  let i;
  const r = n && n[s],
    l = J(e);
  if (l || ve(e)) {
    const o = l && Ht(e);
    let a = !1;
    o && ((a = !Ke(e)), (e = Yn(e))), (i = new Array(e.length));
    for (let u = 0, c = e.length; u < c; u++)
      i[u] = t(a ? Pe(e[u]) : e[u], u, void 0, r && r[u]);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let o = 0; o < e; o++) i[o] = t(o + 1, o, void 0, r && r[o]);
  } else if (ge(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (o, a) => t(o, a, void 0, r && r[a]));
    else {
      const o = Object.keys(e);
      i = new Array(o.length);
      for (let a = 0, u = o.length; a < u; a++) {
        const c = o[a];
        i[a] = t(e[c], c, a, r && r[a]);
      }
    }
  else i = [];
  return n && (n[s] = i), i;
}
function il(e, t, n = {}, s, i) {
  if (Be.ce || (Be.parent && Vt(Be.parent) && Be.parent.ce))
    return (
      t !== "default" && (n.name = t),
      me(),
      mn(Me, null, [U("slot", n, s && s())], 64)
    );
  let r = e[t];
  r && r._c && (r._d = !1), me();
  const l = r && rl(r(n)),
    o = n.key || (l && l.key),
    a = mn(
      Me,
      { key: (o && !gt(o) ? o : `_${t}`) + (!l && s ? "_fb" : "") },
      l || (s ? s() : []),
      l && e._ === 1 ? 64 : -2
    );
  return (
    !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    a
  );
}
function rl(e) {
  return e.some((t) =>
    vn(t) ? !(t.type === qt || (t.type === Me && !rl(t.children))) : !0
  )
    ? e
    : null;
}
const As = (e) => (e ? (_l(e) ? pi(e) : As(e.parent)) : null),
  on = Ce(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => As(e.parent),
    $root: (e) => As(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ci(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ii(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = si.bind(e.proxy)),
    $watch: (e) => Ea.bind(e),
  }),
  us = (e, t) => e !== de && !e.__isScriptSetup && le(e, t),
  ia = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: l,
        type: o,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== "$") {
        const p = l[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return s[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (us(s, t)) return (l[t] = 1), s[t];
          if (i !== de && le(i, t)) return (l[t] = 2), i[t];
          if ((u = e.propsOptions[0]) && le(u, t)) return (l[t] = 3), r[t];
          if (n !== de && le(n, t)) return (l[t] = 4), n[t];
          Rs && (l[t] = 0);
        }
      }
      const c = on[t];
      let f, d;
      if (c) return t === "$attrs" && Te(e.attrs, "get", ""), c(e);
      if ((f = o.__cssModules) && (f = f[t])) return f;
      if (n !== de && le(n, t)) return (l[t] = 4), n[t];
      if (((d = a.config.globalProperties), le(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: r } = e;
      return us(i, t)
        ? ((i[t] = n), !0)
        : s !== de && le(s, t)
        ? ((s[t] = n), !0)
        : le(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: r,
        },
      },
      l
    ) {
      let o;
      return (
        !!n[l] ||
        (e !== de && le(e, l)) ||
        us(t, l) ||
        ((o = r[0]) && le(o, l)) ||
        le(s, l) ||
        le(on, l) ||
        le(i.config.globalProperties, l)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : le(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function _i(e) {
  return J(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Rs = !0;
function ra(e) {
  const t = ci(e),
    n = e.proxy,
    s = e.ctx;
  (Rs = !1), t.beforeCreate && Ti(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: r,
    methods: l,
    watch: o,
    provide: a,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: d,
    beforeUpdate: p,
    updated: v,
    activated: y,
    deactivated: _,
    beforeDestroy: x,
    beforeUnmount: g,
    destroyed: w,
    unmounted: b,
    render: E,
    renderTracked: A,
    renderTriggered: z,
    errorCaptured: D,
    serverPrefetch: P,
    expose: M,
    inheritAttrs: $,
    components: K,
    directives: Y,
    filters: ne,
  } = t;
  if ((u && la(u, s, null), l))
    for (const Z in l) {
      const F = l[Z];
      ee(F) && (s[Z] = F.bind(n));
    }
  if (i) {
    const Z = i.call(n, n);
    ge(Z) && (e.data = Xn(Z));
  }
  if (((Rs = !0), r))
    for (const Z in r) {
      const F = r[Z],
        oe = ee(F) ? F.bind(n, n) : ee(F.get) ? F.get.bind(n, n) : Qe,
        pe = !ee(F) && ee(F.set) ? F.set.bind(n) : Qe,
        ye = Ue({ get: oe, set: pe });
      Object.defineProperty(s, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => ye.value,
        set: (we) => (ye.value = we),
      });
    }
  if (o) for (const Z in o) ll(o[Z], s, n, Z);
  if (a) {
    const Z = ee(a) ? a.call(n) : a;
    Reflect.ownKeys(Z).forEach((F) => {
      Gt(F, Z[F]);
    });
  }
  c && Ti(c, e, "c");
  function G(Z, F) {
    J(F) ? F.forEach((oe) => Z(oe.bind(n))) : F && Z(F.bind(n));
  }
  if (
    (G(Zo, f),
    G(li, d),
    G(tl, p),
    G(oi, v),
    G(Ko, y),
    G(Yo, _),
    G(ta, D),
    G(ea, A),
    G(Jo, z),
    G(ai, g),
    G(nl, b),
    G(Qo, P),
    J(M))
  )
    if (M.length) {
      const Z = e.exposed || (e.exposed = {});
      M.forEach((F) => {
        Object.defineProperty(Z, F, {
          get: () => n[F],
          set: (oe) => (n[F] = oe),
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === Qe && (e.render = E),
    $ != null && (e.inheritAttrs = $),
    K && (e.components = K),
    Y && (e.directives = Y),
    P && Qr(e);
}
function la(e, t, n = Qe) {
  J(e) && (e = Bs(e));
  for (const s in e) {
    const i = e[s];
    let r;
    ge(i)
      ? "default" in i
        ? (r = ht(i.from || s, i.default, !0))
        : (r = ht(i.from || s))
      : (r = ht(i)),
      Le(r)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (l) => (r.value = l),
          })
        : (t[s] = r);
  }
}
function Ti(e, t, n) {
  ot(J(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ll(e, t, n, s) {
  let i = s.includes(".") ? bl(n, s) : () => n[s];
  if (ve(e)) {
    const r = t[e];
    ee(r) && an(i, r);
  } else if (ee(e)) an(i, e.bind(n));
  else if (ge(e))
    if (J(e)) e.forEach((r) => ll(r, t, n, s));
    else {
      const r = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(r) && an(i, r, e);
    }
}
function ci(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: l },
    } = e.appContext,
    o = r.get(t);
  let a;
  return (
    o
      ? (a = o)
      : !i.length && !n && !s
      ? (a = t)
      : ((a = {}), i.length && i.forEach((u) => Fn(a, u, l, !0)), Fn(a, t, l)),
    ge(t) && r.set(t, a),
    a
  );
}
function Fn(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && Fn(e, r, n, !0), i && i.forEach((l) => Fn(e, l, n, !0));
  for (const l in t)
    if (!(s && l === "expose")) {
      const o = oa[l] || (n && n[l]);
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const oa = {
  data: Pi,
  props: Mi,
  emits: Mi,
  methods: nn,
  computed: nn,
  beforeCreate: Ie,
  created: Ie,
  beforeMount: Ie,
  mounted: Ie,
  beforeUpdate: Ie,
  updated: Ie,
  beforeDestroy: Ie,
  beforeUnmount: Ie,
  destroyed: Ie,
  unmounted: Ie,
  activated: Ie,
  deactivated: Ie,
  errorCaptured: Ie,
  serverPrefetch: Ie,
  components: nn,
  directives: nn,
  watch: ca,
  provide: Pi,
  inject: aa,
};
function Pi(e, t) {
  return t
    ? e
      ? function () {
          return Ce(
            ee(e) ? e.call(this, this) : e,
            ee(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function aa(e, t) {
  return nn(Bs(e), Bs(t));
}
function Bs(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nn(e, t) {
  return e ? Ce(Object.create(null), e, t) : t;
}
function Mi(e, t) {
  return e
    ? J(e) && J(t)
      ? [...new Set([...e, ...t])]
      : Ce(Object.create(null), _i(e), _i(t ?? {}))
    : t;
}
function ca(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ce(Object.create(null), e);
  for (const s in t) n[s] = Ie(e[s], t[s]);
  return n;
}
function ol() {
  return {
    app: null,
    config: {
      isNativeTag: so,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let ua = 0;
function fa(e, t) {
  return function (s, i = null) {
    ee(s) || (s = Ce({}, s)), i != null && !ge(i) && (i = null);
    const r = ol(),
      l = new WeakSet(),
      o = [];
    let a = !1;
    const u = (r.app = {
      _uid: ua++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Wa,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          l.has(c) ||
            (c && ee(c.install)
              ? (l.add(c), c.install(u, ...f))
              : ee(c) && (l.add(c), c(u, ...f))),
          u
        );
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), u;
      },
      component(c, f) {
        return f ? ((r.components[c] = f), u) : r.components[c];
      },
      directive(c, f) {
        return f ? ((r.directives[c] = f), u) : r.directives[c];
      },
      mount(c, f, d) {
        if (!a) {
          const p = u._ceVNode || U(s, i);
          return (
            (p.appContext = r),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            f && t ? t(p, c) : e(p, c, d),
            (a = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            pi(p.component)
          );
        }
      },
      onUnmount(c) {
        o.push(c);
      },
      unmount() {
        a &&
          (ot(o, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(c, f) {
        return (r.provides[c] = f), u;
      },
      runWithContext(c) {
        const f = kt;
        kt = u;
        try {
          return c();
        } finally {
          kt = f;
        }
      },
    });
    return u;
  };
}
let kt = null;
function Gt(e, t) {
  if (Oe) {
    let n = Oe.provides;
    const s = Oe.parent && Oe.parent.provides;
    s === n && (n = Oe.provides = Object.create(s)), (n[e] = t);
  }
}
function ht(e, t, n = !1) {
  const s = Oe || Be;
  if (s || kt) {
    const i = kt
      ? kt._context.provides
      : s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && ee(t) ? t.call(s && s.proxy) : t;
  }
}
const al = {},
  cl = () => Object.create(al),
  ul = (e) => Object.getPrototypeOf(e) === al;
function da(e, t, n, s = !1) {
  const i = {},
    r = cl();
  (e.propsDefaults = Object.create(null)), fl(e, t, i, r);
  for (const l in e.propsOptions[0]) l in i || (i[l] = void 0);
  n ? (e.props = s ? i : Vr(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r);
}
function pa(e, t, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: l },
    } = e,
    o = re(i),
    [a] = e.propsOptions;
  let u = !1;
  if ((s || l > 0) && !(l & 16)) {
    if (l & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (es(e.emitsOptions, d)) continue;
        const p = t[d];
        if (a)
          if (le(r, d)) p !== r[d] && ((r[d] = p), (u = !0));
          else {
            const v = Ye(d);
            i[v] = Ds(a, o, v, p, e, !1);
          }
        else p !== r[d] && ((r[d] = p), (u = !0));
      }
    }
  } else {
    fl(e, t, i, r) && (u = !0);
    let c;
    for (const f in o)
      (!t || (!le(t, f) && ((c = At(f)) === f || !le(t, c)))) &&
        (a
          ? n &&
            (n[f] !== void 0 || n[c] !== void 0) &&
            (i[f] = Ds(a, o, f, void 0, e, !0))
          : delete i[f]);
    if (r !== o)
      for (const f in r) (!t || !le(t, f)) && (delete r[f], (u = !0));
  }
  u && dt(e.attrs, "set", "");
}
function fl(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let l = !1,
    o;
  if (t)
    for (let a in t) {
      if (sn(a)) continue;
      const u = t[a];
      let c;
      i && le(i, (c = Ye(a)))
        ? !r || !r.includes(c)
          ? (n[c] = u)
          : ((o || (o = {}))[c] = u)
        : es(e.emitsOptions, a) ||
          ((!(a in s) || u !== s[a]) && ((s[a] = u), (l = !0)));
    }
  if (r) {
    const a = re(n),
      u = o || de;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      n[f] = Ds(i, a, f, u[f], e, !le(u, f));
    }
  }
  return l;
}
function Ds(e, t, n, s, i, r) {
  const l = e[n];
  if (l != null) {
    const o = le(l, "default");
    if (o && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && ee(a)) {
        const { propsDefaults: u } = i;
        if (n in u) s = u[n];
        else {
          const c = Sn(i);
          (s = u[n] = a.call(null, t)), c();
        }
      } else s = a;
      i.ce && i.ce._setProp(n, s);
    }
    l[0] &&
      (r && !o ? (s = !1) : l[1] && (s === "" || s === At(n)) && (s = !0));
  }
  return s;
}
const ha = new WeakMap();
function dl(e, t, n = !1) {
  const s = n ? ha : t.propsCache,
    i = s.get(e);
  if (i) return i;
  const r = e.props,
    l = {},
    o = [];
  let a = !1;
  if (!ee(e)) {
    const c = (f) => {
      a = !0;
      const [d, p] = dl(f, t, !0);
      Ce(l, d), p && o.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a) return ge(e) && s.set(e, Ft), Ft;
  if (J(r))
    for (let c = 0; c < r.length; c++) {
      const f = Ye(r[c]);
      Oi(f) && (l[f] = de);
    }
  else if (r)
    for (const c in r) {
      const f = Ye(c);
      if (Oi(f)) {
        const d = r[c],
          p = (l[f] = J(d) || ee(d) ? { type: d } : Ce({}, d)),
          v = p.type;
        let y = !1,
          _ = !0;
        if (J(v))
          for (let x = 0; x < v.length; ++x) {
            const g = v[x],
              w = ee(g) && g.name;
            if (w === "Boolean") {
              y = !0;
              break;
            } else w === "String" && (_ = !1);
          }
        else y = ee(v) && v.name === "Boolean";
        (p[0] = y), (p[1] = _), (y || le(p, "default")) && o.push(f);
      }
    }
  const u = [l, o];
  return ge(e) && s.set(e, u), u;
}
function Oi(e) {
  return e[0] !== "$" && !sn(e);
}
const pl = (e) => e[0] === "_" || e === "$stable",
  ui = (e) => (J(e) ? e.map(it) : [it(e)]),
  ga = (e, t, n) => {
    if (t._n) return t;
    const s = be((...i) => ui(t(...i)), n);
    return (s._c = !1), s;
  },
  hl = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
      if (pl(i)) continue;
      const r = e[i];
      if (ee(r)) t[i] = ga(i, r, s);
      else if (r != null) {
        const l = ui(r);
        t[i] = () => l;
      }
    }
  },
  gl = (e, t) => {
    const n = ui(t);
    e.slots.default = () => n;
  },
  ml = (e, t, n) => {
    for (const s in t) (n || s !== "_") && (e[s] = t[s]);
  },
  ma = (e, t, n) => {
    const s = (e.slots = cl());
    if (e.vnode.shapeFlag & 32) {
      const i = t._;
      i ? (ml(s, t, n), n && Sr(s, "_", i, !0)) : hl(t, s);
    } else t && gl(e, t);
  },
  va = (e, t, n) => {
    const { vnode: s, slots: i } = e;
    let r = !0,
      l = de;
    if (s.shapeFlag & 32) {
      const o = t._;
      o
        ? n && o === 1
          ? (r = !1)
          : ml(i, t, n)
        : ((r = !t.$stable), hl(t, i)),
        (l = t);
    } else t && (gl(e, t), (l = { default: 1 }));
    if (r) for (const o in i) !pl(o) && l[o] == null && delete i[o];
  },
  He = Ia;
function wa(e) {
  return ya(e);
}
function ya(e, t) {
  const n = Kn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: l,
      createText: o,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: d,
      setScopeId: p = Qe,
      insertStaticContent: v,
    } = e,
    y = (
      h,
      m,
      C,
      O = null,
      S = null,
      L = null,
      N = void 0,
      B = null,
      R = !!m.dynamicChildren
    ) => {
      if (h === m) return;
      h && !Qt(h, m) && ((O = T(h)), we(h, S, L, !0), (h = null)),
        m.patchFlag === -2 && ((R = !1), (m.dynamicChildren = null));
      const { type: I, ref: X, shapeFlag: j } = m;
      switch (I) {
        case ts:
          _(h, m, C, O);
          break;
        case qt:
          x(h, m, C, O);
          break;
        case Ln:
          h == null && g(m, C, O, N);
          break;
        case Me:
          K(h, m, C, O, S, L, N, B, R);
          break;
        default:
          j & 1
            ? E(h, m, C, O, S, L, N, B, R)
            : j & 6
            ? Y(h, m, C, O, S, L, N, B, R)
            : (j & 64 || j & 128) && I.process(h, m, C, O, S, L, N, B, R, W);
      }
      X != null && S && zn(X, h && h.ref, L, m || h, !m);
    },
    _ = (h, m, C, O) => {
      if (h == null) s((m.el = o(m.children)), C, O);
      else {
        const S = (m.el = h.el);
        m.children !== h.children && u(S, m.children);
      }
    },
    x = (h, m, C, O) => {
      h == null ? s((m.el = a(m.children || "")), C, O) : (m.el = h.el);
    },
    g = (h, m, C, O) => {
      [h.el, h.anchor] = v(h.children, m, C, O, h.el, h.anchor);
    },
    w = ({ el: h, anchor: m }, C, O) => {
      let S;
      for (; h && h !== m; ) (S = d(h)), s(h, C, O), (h = S);
      s(m, C, O);
    },
    b = ({ el: h, anchor: m }) => {
      let C;
      for (; h && h !== m; ) (C = d(h)), i(h), (h = C);
      i(m);
    },
    E = (h, m, C, O, S, L, N, B, R) => {
      m.type === "svg" ? (N = "svg") : m.type === "math" && (N = "mathml"),
        h == null ? A(m, C, O, S, L, N, B, R) : P(h, m, S, L, N, B, R);
    },
    A = (h, m, C, O, S, L, N, B) => {
      let R, I;
      const { props: X, shapeFlag: j, transition: q, dirs: Q } = h;
      if (
        ((R = h.el = l(h.type, L, X && X.is, X)),
        j & 8
          ? c(R, h.children)
          : j & 16 && D(h.children, R, null, O, S, fs(h, L), N, B),
        Q && Tt(h, null, O, "created"),
        z(R, h, h.scopeId, N, O),
        X)
      ) {
        for (const ue in X)
          ue !== "value" && !sn(ue) && r(R, ue, null, X[ue], L, O);
        "value" in X && r(R, "value", null, X.value, L),
          (I = X.onVnodeBeforeMount) && nt(I, O, h);
      }
      Q && Tt(h, null, O, "beforeMount");
      const te = ba(S, q);
      te && q.beforeEnter(R),
        s(R, m, C),
        ((I = X && X.onVnodeMounted) || te || Q) &&
          He(() => {
            I && nt(I, O, h), te && q.enter(R), Q && Tt(h, null, O, "mounted");
          }, S);
    },
    z = (h, m, C, O, S) => {
      if ((C && p(h, C), O)) for (let L = 0; L < O.length; L++) p(h, O[L]);
      if (S) {
        let L = S.subTree;
        if (
          m === L ||
          (Cl(L.type) && (L.ssContent === m || L.ssFallback === m))
        ) {
          const N = S.vnode;
          z(h, N, N.scopeId, N.slotScopeIds, S.parent);
        }
      }
    },
    D = (h, m, C, O, S, L, N, B, R = 0) => {
      for (let I = R; I < h.length; I++) {
        const X = (h[I] = B ? yt(h[I]) : it(h[I]));
        y(null, X, m, C, O, S, L, N, B);
      }
    },
    P = (h, m, C, O, S, L, N) => {
      const B = (m.el = h.el);
      let { patchFlag: R, dynamicChildren: I, dirs: X } = m;
      R |= h.patchFlag & 16;
      const j = h.props || de,
        q = m.props || de;
      let Q;
      if (
        (C && Pt(C, !1),
        (Q = q.onVnodeBeforeUpdate) && nt(Q, C, m, h),
        X && Tt(m, h, C, "beforeUpdate"),
        C && Pt(C, !0),
        ((j.innerHTML && q.innerHTML == null) ||
          (j.textContent && q.textContent == null)) &&
          c(B, ""),
        I
          ? M(h.dynamicChildren, I, B, C, O, fs(m, S), L)
          : N || F(h, m, B, null, C, O, fs(m, S), L, !1),
        R > 0)
      ) {
        if (R & 16) $(B, j, q, C, S);
        else if (
          (R & 2 && j.class !== q.class && r(B, "class", null, q.class, S),
          R & 4 && r(B, "style", j.style, q.style, S),
          R & 8)
        ) {
          const te = m.dynamicProps;
          for (let ue = 0; ue < te.length; ue++) {
            const ae = te[ue],
              ze = j[ae],
              Ee = q[ae];
            (Ee !== ze || ae === "value") && r(B, ae, ze, Ee, S, C);
          }
        }
        R & 1 && h.children !== m.children && c(B, m.children);
      } else !N && I == null && $(B, j, q, C, S);
      ((Q = q.onVnodeUpdated) || X) &&
        He(() => {
          Q && nt(Q, C, m, h), X && Tt(m, h, C, "updated");
        }, O);
    },
    M = (h, m, C, O, S, L, N) => {
      for (let B = 0; B < m.length; B++) {
        const R = h[B],
          I = m[B],
          X =
            R.el && (R.type === Me || !Qt(R, I) || R.shapeFlag & 70)
              ? f(R.el)
              : C;
        y(R, I, X, null, O, S, L, N, !0);
      }
    },
    $ = (h, m, C, O, S) => {
      if (m !== C) {
        if (m !== de)
          for (const L in m) !sn(L) && !(L in C) && r(h, L, m[L], null, S, O);
        for (const L in C) {
          if (sn(L)) continue;
          const N = C[L],
            B = m[L];
          N !== B && L !== "value" && r(h, L, B, N, S, O);
        }
        "value" in C && r(h, "value", m.value, C.value, S);
      }
    },
    K = (h, m, C, O, S, L, N, B, R) => {
      const I = (m.el = h ? h.el : o("")),
        X = (m.anchor = h ? h.anchor : o(""));
      let { patchFlag: j, dynamicChildren: q, slotScopeIds: Q } = m;
      Q && (B = B ? B.concat(Q) : Q),
        h == null
          ? (s(I, C, O), s(X, C, O), D(m.children || [], C, X, S, L, N, B, R))
          : j > 0 && j & 64 && q && h.dynamicChildren
          ? (M(h.dynamicChildren, q, C, S, L, N, B),
            (m.key != null || (S && m === S.subTree)) && vl(h, m, !0))
          : F(h, m, C, X, S, L, N, B, R);
    },
    Y = (h, m, C, O, S, L, N, B, R) => {
      (m.slotScopeIds = B),
        h == null
          ? m.shapeFlag & 512
            ? S.ctx.activate(m, C, O, N, R)
            : ne(m, C, O, S, L, N, R)
          : se(h, m, R);
    },
    ne = (h, m, C, O, S, L, N) => {
      const B = (h.component = Fa(h, O, S));
      if ((Jr(h) && (B.ctx.renderer = W), Na(B, !1, N), B.asyncDep)) {
        if ((S && S.registerDep(B, G, N), !h.el)) {
          const R = (B.subTree = U(qt));
          x(null, R, m, C);
        }
      } else G(B, h, m, C, S, L, N);
    },
    se = (h, m, C) => {
      const O = (m.component = h.component);
      if (Oa(h, m, C))
        if (O.asyncDep && !O.asyncResolved) {
          Z(O, m, C);
          return;
        } else (O.next = m), O.update();
      else (m.el = h.el), (O.vnode = m);
    },
    G = (h, m, C, O, S, L, N) => {
      const B = () => {
        if (h.isMounted) {
          let { next: j, bu: q, u: Q, parent: te, vnode: ue } = h;
          {
            const Fe = wl(h);
            if (Fe) {
              j && ((j.el = ue.el), Z(h, j, N)),
                Fe.asyncDep.then(() => {
                  h.isUnmounted || B();
                });
              return;
            }
          }
          let ae = j,
            ze;
          Pt(h, !1),
            j ? ((j.el = ue.el), Z(h, j, N)) : (j = ue),
            q && rs(q),
            (ze = j.props && j.props.onVnodeBeforeUpdate) && nt(ze, te, j, ue),
            Pt(h, !0);
          const Ee = ds(h),
            Ze = h.subTree;
          (h.subTree = Ee),
            y(Ze, Ee, f(Ze.el), T(Ze), h, S, L),
            (j.el = Ee.el),
            ae === null && La(h, Ee.el),
            Q && He(Q, S),
            (ze = j.props && j.props.onVnodeUpdated) &&
              He(() => nt(ze, te, j, ue), S);
        } else {
          let j;
          const { el: q, props: Q } = m,
            { bm: te, m: ue, parent: ae, root: ze, type: Ee } = h,
            Ze = Vt(m);
          if (
            (Pt(h, !1),
            te && rs(te),
            !Ze && (j = Q && Q.onVnodeBeforeMount) && nt(j, ae, m),
            Pt(h, !0),
            q && he)
          ) {
            const Fe = () => {
              (h.subTree = ds(h)), he(q, h.subTree, h, S, null);
            };
            Ze && Ee.__asyncHydrate ? Ee.__asyncHydrate(q, h, Fe) : Fe();
          } else {
            ze.ce && ze.ce._injectChildStyle(Ee);
            const Fe = (h.subTree = ds(h));
            y(null, Fe, C, O, h, S, L), (m.el = Fe.el);
          }
          if ((ue && He(ue, S), !Ze && (j = Q && Q.onVnodeMounted))) {
            const Fe = m;
            He(() => nt(j, ae, Fe), S);
          }
          (m.shapeFlag & 256 ||
            (ae && Vt(ae.vnode) && ae.vnode.shapeFlag & 256)) &&
            h.a &&
            He(h.a, S),
            (h.isMounted = !0),
            (m = C = O = null);
        }
      };
      h.scope.on();
      const R = (h.effect = new Mr(B));
      h.scope.off();
      const I = (h.update = R.run.bind(R)),
        X = (h.job = R.runIfDirty.bind(R));
      (X.i = h), (X.id = h.uid), (R.scheduler = () => ii(X)), Pt(h, !0), I();
    },
    Z = (h, m, C) => {
      m.component = h;
      const O = h.vnode.props;
      (h.vnode = m),
        (h.next = null),
        pa(h, m.props, O, C),
        va(h, m.children, C),
        Et(),
        Si(h),
        _t();
    },
    F = (h, m, C, O, S, L, N, B, R = !1) => {
      const I = h && h.children,
        X = h ? h.shapeFlag : 0,
        j = m.children,
        { patchFlag: q, shapeFlag: Q } = m;
      if (q > 0) {
        if (q & 128) {
          pe(I, j, C, O, S, L, N, B, R);
          return;
        } else if (q & 256) {
          oe(I, j, C, O, S, L, N, B, R);
          return;
        }
      }
      Q & 8
        ? (X & 16 && We(I, S, L), j !== I && c(C, j))
        : X & 16
        ? Q & 16
          ? pe(I, j, C, O, S, L, N, B, R)
          : We(I, S, L, !0)
        : (X & 8 && c(C, ""), Q & 16 && D(j, C, O, S, L, N, B, R));
    },
    oe = (h, m, C, O, S, L, N, B, R) => {
      (h = h || Ft), (m = m || Ft);
      const I = h.length,
        X = m.length,
        j = Math.min(I, X);
      let q;
      for (q = 0; q < j; q++) {
        const Q = (m[q] = R ? yt(m[q]) : it(m[q]));
        y(h[q], Q, C, null, S, L, N, B, R);
      }
      I > X ? We(h, S, L, !0, !1, j) : D(m, C, O, S, L, N, B, R, j);
    },
    pe = (h, m, C, O, S, L, N, B, R) => {
      let I = 0;
      const X = m.length;
      let j = h.length - 1,
        q = X - 1;
      for (; I <= j && I <= q; ) {
        const Q = h[I],
          te = (m[I] = R ? yt(m[I]) : it(m[I]));
        if (Qt(Q, te)) y(Q, te, C, null, S, L, N, B, R);
        else break;
        I++;
      }
      for (; I <= j && I <= q; ) {
        const Q = h[j],
          te = (m[q] = R ? yt(m[q]) : it(m[q]));
        if (Qt(Q, te)) y(Q, te, C, null, S, L, N, B, R);
        else break;
        j--, q--;
      }
      if (I > j) {
        if (I <= q) {
          const Q = q + 1,
            te = Q < X ? m[Q].el : O;
          for (; I <= q; )
            y(null, (m[I] = R ? yt(m[I]) : it(m[I])), C, te, S, L, N, B, R),
              I++;
        }
      } else if (I > q) for (; I <= j; ) we(h[I], S, L, !0), I++;
      else {
        const Q = I,
          te = I,
          ue = new Map();
        for (I = te; I <= q; I++) {
          const Ne = (m[I] = R ? yt(m[I]) : it(m[I]));
          Ne.key != null && ue.set(Ne.key, I);
        }
        let ae,
          ze = 0;
        const Ee = q - te + 1;
        let Ze = !1,
          Fe = 0;
        const Xt = new Array(Ee);
        for (I = 0; I < Ee; I++) Xt[I] = 0;
        for (I = Q; I <= j; I++) {
          const Ne = h[I];
          if (ze >= Ee) {
            we(Ne, S, L, !0);
            continue;
          }
          let tt;
          if (Ne.key != null) tt = ue.get(Ne.key);
          else
            for (ae = te; ae <= q; ae++)
              if (Xt[ae - te] === 0 && Qt(Ne, m[ae])) {
                tt = ae;
                break;
              }
          tt === void 0
            ? we(Ne, S, L, !0)
            : ((Xt[tt - te] = I + 1),
              tt >= Fe ? (Fe = tt) : (Ze = !0),
              y(Ne, m[tt], C, null, S, L, N, B, R),
              ze++);
        }
        const wi = Ze ? xa(Xt) : Ft;
        for (ae = wi.length - 1, I = Ee - 1; I >= 0; I--) {
          const Ne = te + I,
            tt = m[Ne],
            yi = Ne + 1 < X ? m[Ne + 1].el : O;
          Xt[I] === 0
            ? y(null, tt, C, yi, S, L, N, B, R)
            : Ze && (ae < 0 || I !== wi[ae] ? ye(tt, C, yi, 2) : ae--);
        }
      }
    },
    ye = (h, m, C, O, S = null) => {
      const { el: L, type: N, transition: B, children: R, shapeFlag: I } = h;
      if (I & 6) {
        ye(h.component.subTree, m, C, O);
        return;
      }
      if (I & 128) {
        h.suspense.move(m, C, O);
        return;
      }
      if (I & 64) {
        N.move(h, m, C, W);
        return;
      }
      if (N === Me) {
        s(L, m, C);
        for (let j = 0; j < R.length; j++) ye(R[j], m, C, O);
        s(h.anchor, m, C);
        return;
      }
      if (N === Ln) {
        w(h, m, C);
        return;
      }
      if (O !== 2 && I & 1 && B)
        if (O === 0) B.beforeEnter(L), s(L, m, C), He(() => B.enter(L), S);
        else {
          const { leave: j, delayLeave: q, afterLeave: Q } = B,
            te = () => s(L, m, C),
            ue = () => {
              j(L, () => {
                te(), Q && Q();
              });
            };
          q ? q(L, te, ue) : ue();
        }
      else s(L, m, C);
    },
    we = (h, m, C, O = !1, S = !1) => {
      const {
        type: L,
        props: N,
        ref: B,
        children: R,
        dynamicChildren: I,
        shapeFlag: X,
        patchFlag: j,
        dirs: q,
        cacheIndex: Q,
      } = h;
      if (
        (j === -2 && (S = !1),
        B != null && zn(B, null, C, h, !0),
        Q != null && (m.renderCache[Q] = void 0),
        X & 256)
      ) {
        m.ctx.deactivate(h);
        return;
      }
      const te = X & 1 && q,
        ue = !Vt(h);
      let ae;
      if ((ue && (ae = N && N.onVnodeBeforeUnmount) && nt(ae, m, h), X & 6))
        En(h.component, C, O);
      else {
        if (X & 128) {
          h.suspense.unmount(C, O);
          return;
        }
        te && Tt(h, null, m, "beforeUnmount"),
          X & 64
            ? h.type.remove(h, m, C, W, O)
            : I && !I.hasOnce && (L !== Me || (j > 0 && j & 64))
            ? We(I, m, C, !1, !0)
            : ((L === Me && j & 384) || (!S && X & 16)) && We(R, m, C),
          O && Rt(h);
      }
      ((ue && (ae = N && N.onVnodeUnmounted)) || te) &&
        He(() => {
          ae && nt(ae, m, h), te && Tt(h, null, m, "unmounted");
        }, C);
    },
    Rt = (h) => {
      const { type: m, el: C, anchor: O, transition: S } = h;
      if (m === Me) {
        Bt(C, O);
        return;
      }
      if (m === Ln) {
        b(h);
        return;
      }
      const L = () => {
        i(C), S && !S.persisted && S.afterLeave && S.afterLeave();
      };
      if (h.shapeFlag & 1 && S && !S.persisted) {
        const { leave: N, delayLeave: B } = S,
          R = () => N(C, L);
        B ? B(h.el, L, R) : R();
      } else L();
    },
    Bt = (h, m) => {
      let C;
      for (; h !== m; ) (C = d(h)), i(h), (h = C);
      i(m);
    },
    En = (h, m, C) => {
      const { bum: O, scope: S, job: L, subTree: N, um: B, m: R, a: I } = h;
      Li(R),
        Li(I),
        O && rs(O),
        S.stop(),
        L && ((L.flags |= 8), we(N, h, m, C)),
        B && He(B, m),
        He(() => {
          h.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve());
    },
    We = (h, m, C, O = !1, S = !1, L = 0) => {
      for (let N = L; N < h.length; N++) we(h[N], m, C, O, S);
    },
    T = (h) => {
      if (h.shapeFlag & 6) return T(h.component.subTree);
      if (h.shapeFlag & 128) return h.suspense.next();
      const m = d(h.anchor || h.el),
        C = m && m[qo];
      return C ? d(C) : m;
    };
  let k = !1;
  const H = (h, m, C) => {
      h == null
        ? m._vnode && we(m._vnode, null, null, !0)
        : y(m._vnode || null, h, m, null, null, null, C),
        (m._vnode = h),
        k || ((k = !0), Si(), Yr(), (k = !1));
    },
    W = {
      p: y,
      um: we,
      m: ye,
      r: Rt,
      mt: ne,
      mc: D,
      pc: F,
      pbc: M,
      n: T,
      o: e,
    };
  let ie, he;
  return (
    t && ([ie, he] = t(W)), { render: H, hydrate: ie, createApp: fa(H, ie) }
  );
}
function fs({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Pt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function ba(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function vl(e, t, n = !1) {
  const s = e.children,
    i = t.children;
  if (J(s) && J(i))
    for (let r = 0; r < s.length; r++) {
      const l = s[r];
      let o = i[r];
      o.shapeFlag & 1 &&
        !o.dynamicChildren &&
        ((o.patchFlag <= 0 || o.patchFlag === 32) &&
          ((o = i[r] = yt(i[r])), (o.el = l.el)),
        !n && o.patchFlag !== -2 && vl(l, o)),
        o.type === ts && (o.el = l.el);
    }
}
function xa(e) {
  const t = e.slice(),
    n = [0];
  let s, i, r, l, o;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (((i = n[n.length - 1]), e[i] < u)) {
        (t[s] = i), n.push(s);
        continue;
      }
      for (r = 0, l = n.length - 1; r < l; )
        (o = (r + l) >> 1), e[n[o]] < u ? (r = o + 1) : (l = o);
      u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, l = n[r - 1]; r-- > 0; ) (n[r] = l), (l = t[l]);
  return n;
}
function wl(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : wl(t);
}
function Li(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Ca = Symbol.for("v-scx"),
  Sa = () => ht(Ca);
function an(e, t, n) {
  return yl(e, t, n);
}
function yl(e, t, n = de) {
  const { immediate: s, deep: i, flush: r, once: l } = n,
    o = Ce({}, n),
    a = (t && s) || (!t && r !== "post");
  let u;
  if (wn) {
    if (r === "sync") {
      const p = Sa();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!a) {
      const p = () => {};
      return (p.stop = Qe), (p.resume = Qe), (p.pause = Qe), p;
    }
  }
  const c = Oe;
  o.call = (p, v, y) => ot(p, c, v, y);
  let f = !1;
  r === "post"
    ? (o.scheduler = (p) => {
        He(p, c && c.suspense);
      })
    : r !== "sync" &&
      ((f = !0),
      (o.scheduler = (p, v) => {
        v ? p() : ii(p);
      })),
    (o.augmentJob = (p) => {
      t && (p.flags |= 4),
        f && ((p.flags |= 2), c && ((p.id = c.uid), (p.i = c)));
    });
  const d = Vo(e, t, o);
  return wn && (u ? u.push(d) : a && d()), d;
}
function Ea(e, t, n) {
  const s = this.proxy,
    i = ve(e) ? (e.includes(".") ? bl(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  ee(t) ? (r = t) : ((r = t.handler), (n = t));
  const l = Sn(this),
    o = yl(i, r.bind(s), n);
  return l(), o;
}
function bl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
const _a = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Ye(t)}Modifiers`] || e[`${At(t)}Modifiers`];
function Ta(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || de;
  let i = n;
  const r = t.startsWith("update:"),
    l = r && _a(s, t.slice(7));
  l &&
    (l.trim && (i = n.map((c) => (ve(c) ? c.trim() : c))),
    l.number && (i = n.map(ao)));
  let o,
    a = s[(o = is(t))] || s[(o = is(Ye(t)))];
  !a && r && (a = s[(o = is(At(t)))]), a && ot(a, e, 6, i);
  const u = s[o + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[o]) return;
    (e.emitted[o] = !0), ot(u, e, 6, i);
  }
}
function xl(e, t, n = !1) {
  const s = t.emitsCache,
    i = s.get(e);
  if (i !== void 0) return i;
  const r = e.emits;
  let l = {},
    o = !1;
  if (!ee(e)) {
    const a = (u) => {
      const c = xl(u, t, !0);
      c && ((o = !0), Ce(l, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !r && !o
    ? (ge(e) && s.set(e, null), null)
    : (J(r) ? r.forEach((a) => (l[a] = null)) : Ce(l, r),
      ge(e) && s.set(e, l),
      l);
}
function es(e, t) {
  return !e || !Gn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      le(e, t[0].toLowerCase() + t.slice(1)) || le(e, At(t)) || le(e, t));
}
function ds(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: i,
      propsOptions: [r],
      slots: l,
      attrs: o,
      emit: a,
      render: u,
      renderCache: c,
      props: f,
      data: d,
      setupState: p,
      ctx: v,
      inheritAttrs: y,
    } = e,
    _ = $n(e);
  let x, g;
  try {
    if (n.shapeFlag & 4) {
      const b = i || s,
        E = b;
      (x = it(u.call(E, b, c, f, p, d, v))), (g = o);
    } else {
      const b = t;
      (x = it(
        b.length > 1 ? b(f, { attrs: o, slots: l, emit: a }) : b(f, null)
      )),
        (g = t.props ? o : Pa(o));
    }
  } catch (b) {
    (cn.length = 0), Zn(b, e, 1), (x = U(qt));
  }
  let w = x;
  if (g && y !== !1) {
    const b = Object.keys(g),
      { shapeFlag: E } = w;
    b.length &&
      E & 7 &&
      (r && b.some(qs) && (g = Ma(g, r)), (w = Ut(w, g, !1, !0)));
  }
  return (
    n.dirs &&
      ((w = Ut(w, null, !1, !0)),
      (w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ri(w, n.transition),
    (x = w),
    $n(_),
    x
  );
}
const Pa = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Gn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ma = (e, t) => {
    const n = {};
    for (const s in e) (!qs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Oa(e, t, n) {
  const { props: s, children: i, component: r } = e,
    { props: l, children: o, patchFlag: a } = t,
    u = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? Ii(s, l, u) : !!l;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (l[d] !== s[d] && !es(u, d)) return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable)
      ? !0
      : s === l
      ? !1
      : s
      ? l
        ? Ii(s, l, u)
        : !0
      : !!l;
  return !1;
}
function Ii(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !es(n, r)) return !0;
  }
  return !1;
}
function La({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Cl = (e) => e.__isSuspense;
function Ia(e, t) {
  t && t.pendingBranch
    ? J(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Wo(e);
}
const Me = Symbol.for("v-fgt"),
  ts = Symbol.for("v-txt"),
  qt = Symbol.for("v-cmt"),
  Ln = Symbol.for("v-stc"),
  cn = [];
let Ge = null;
function me(e = !1) {
  cn.push((Ge = e ? null : []));
}
function Aa() {
  cn.pop(), (Ge = cn[cn.length - 1] || null);
}
let gn = 1;
function Ai(e, t = !1) {
  (gn += e), e < 0 && Ge && t && (Ge.hasOnce = !0);
}
function Sl(e) {
  return (
    (e.dynamicChildren = gn > 0 ? Ge || Ft : null),
    Aa(),
    gn > 0 && Ge && Ge.push(e),
    e
  );
}
function Se(e, t, n, s, i, r) {
  return Sl(V(e, t, n, s, i, r, !0));
}
function mn(e, t, n, s, i) {
  return Sl(U(e, t, n, s, i, !0));
}
function vn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const El = ({ key: e }) => e ?? null,
  In = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ve(e) || Le(e) || ee(e)
        ? { i: Be, r: e, k: t, f: !!n }
        : e
      : null
  );
function V(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  r = e === Me ? 0 : 1,
  l = !1,
  o = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && El(t),
    ref: t && In(t),
    scopeId: Zr,
    slotScopeIds: null,
    children: n,
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
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Be,
  };
  return (
    o
      ? (di(a, n), r & 128 && e.normalize(a))
      : n && (a.shapeFlag |= ve(n) ? 8 : 16),
    gn > 0 &&
      !l &&
      Ge &&
      (a.patchFlag > 0 || r & 6) &&
      a.patchFlag !== 32 &&
      Ge.push(a),
    a
  );
}
const U = Ra;
function Ra(e, t = null, n = null, s = 0, i = null, r = !1) {
  if (((!e || e === na) && (e = qt), vn(e))) {
    const o = Ut(e, t, !0);
    return (
      n && di(o, n),
      gn > 0 &&
        !r &&
        Ge &&
        (o.shapeFlag & 6 ? (Ge[Ge.indexOf(e)] = o) : Ge.push(o)),
      (o.patchFlag = -2),
      o
    );
  }
  if ((Ga(e) && (e = e.__vccOpts), t)) {
    t = Ba(t);
    let { class: o, style: a } = t;
    o && !ve(o) && (t.class = Ys(o)),
      ge(a) && (ni(a) && !J(a) && (a = Ce({}, a)), (t.style = xn(a)));
  }
  const l = ve(e) ? 1 : Cl(e) ? 128 : Uo(e) ? 64 : ge(e) ? 4 : ee(e) ? 2 : 0;
  return V(e, t, n, s, i, l, r, !0);
}
function Ba(e) {
  return e ? (ni(e) || ul(e) ? Ce({}, e) : e) : null;
}
function Ut(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: l, children: o, transition: a } = e,
    u = t ? Da(i || {}, t) : i,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && El(u),
      ref:
        t && t.ref
          ? n && r
            ? J(r)
              ? r.concat(In(t))
              : [r, In(t)]
            : In(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: o,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Me ? (l === -1 ? 16 : l | 16) : l,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Ut(e.ssContent),
      ssFallback: e.ssFallback && Ut(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return a && s && ri(c, a.clone(c)), c;
}
function pt(e = " ", t = 0) {
  return U(ts, null, e, t);
}
function fi(e, t) {
  const n = U(Ln, null, e);
  return (n.staticCount = t), n;
}
function it(e) {
  return e == null || typeof e == "boolean"
    ? U(qt)
    : J(e)
    ? U(Me, null, e.slice())
    : vn(e)
    ? yt(e)
    : U(ts, null, String(e));
}
function yt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ut(e);
}
function di(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (J(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), di(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !ul(t)
        ? (t._ctx = Be)
        : i === 3 &&
          Be &&
          (Be.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ee(t)
      ? ((t = { default: t, _ctx: Be }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [pt(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Da(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Ys([t.class, s.class]));
      else if (i === "style") t.style = xn([t.style, s.style]);
      else if (Gn(i)) {
        const r = t[i],
          l = s[i];
        l &&
          r !== l &&
          !(J(r) && r.includes(l)) &&
          (t[i] = r ? [].concat(r, l) : l);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function nt(e, t, n, s = null) {
  ot(e, t, 7, [n, s]);
}
const $a = ol();
let za = 0;
function Fa(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || $a,
    r = {
      uid: za++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Pr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: dl(s, i),
      emitsOptions: xl(s, i),
      emit: null,
      emitted: null,
      propsDefaults: de,
      inheritAttrs: s.inheritAttrs,
      ctx: de,
      data: de,
      props: de,
      attrs: de,
      slots: de,
      refs: de,
      setupState: de,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
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
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = Ta.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let Oe = null,
  Nn,
  $s;
{
  const e = Kn(),
    t = (n, s) => {
      let i;
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(s),
        (r) => {
          i.length > 1 ? i.forEach((l) => l(r)) : i[0](r);
        }
      );
    };
  (Nn = t("__VUE_INSTANCE_SETTERS__", (n) => (Oe = n))),
    ($s = t("__VUE_SSR_SETTERS__", (n) => (wn = n)));
}
const Sn = (e) => {
    const t = Oe;
    return (
      Nn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Nn(t);
      }
    );
  },
  Ri = () => {
    Oe && Oe.scope.off(), Nn(null);
  };
function _l(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function Na(e, t = !1, n = !1) {
  t && $s(t);
  const { props: s, children: i } = e.vnode,
    r = _l(e);
  da(e, s, r, t), ma(e, i, n);
  const l = r ? Ha(e, t) : void 0;
  return t && $s(!1), l;
}
function Ha(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, ia));
  const { setup: s } = n;
  if (s) {
    Et();
    const i = (e.setupContext = s.length > 1 ? Va(e) : null),
      r = Sn(e),
      l = Cn(s, e, 0, [e.props, i]),
      o = br(l);
    if ((_t(), r(), (o || e.sp) && !Vt(e) && Qr(e), o)) {
      if ((l.then(Ri, Ri), t))
        return l
          .then((a) => {
            Bi(e, a, t);
          })
          .catch((a) => {
            Zn(a, e, 0);
          });
      e.asyncDep = l;
    } else Bi(e, l, t);
  } else Tl(e, t);
}
function Bi(e, t, n) {
  ee(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ge(t) && (e.setupState = qr(t)),
    Tl(e, n);
}
let Di;
function Tl(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Di && !s.render) {
      const i = s.template || ci(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: l } = e.appContext.config,
          { delimiters: o, compilerOptions: a } = s,
          u = Ce(Ce({ isCustomElement: r, delimiters: o }, l), a);
        s.render = Di(i, u);
      }
    }
    e.render = s.render || Qe;
  }
  {
    const i = Sn(e);
    Et();
    try {
      ra(e);
    } finally {
      _t(), i();
    }
  }
}
const ja = {
  get(e, t) {
    return Te(e, "get", ""), e[t];
  },
};
function Va(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ja),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function pi(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(qr(Gr(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in on) return on[n](e);
          },
          has(t, n) {
            return n in t || n in on;
          },
        }))
    : e.proxy;
}
function ka(e, t = !0) {
  return ee(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Ga(e) {
  return ee(e) && "__vccOpts" in e;
}
const Ue = (e, t) => Ho(e, t, wn);
function $e(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? ge(t) && !J(t)
      ? vn(t)
        ? U(e, null, [t])
        : U(e, t)
      : U(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && vn(n) && (n = [n]),
      U(e, t, n));
}
const Wa = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let zs;
const $i = typeof window < "u" && window.trustedTypes;
if ($i)
  try {
    zs = $i.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Pl = zs ? (e) => zs.createHTML(e) : (e) => e,
  qa = "http://www.w3.org/2000/svg",
  Ua = "http://www.w3.org/1998/Math/MathML",
  ft = typeof document < "u" ? document : null,
  zi = ft && ft.createElement("template"),
  Ka = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const i =
        t === "svg"
          ? ft.createElementNS(qa, e)
          : t === "mathml"
          ? ft.createElementNS(Ua, e)
          : n
          ? ft.createElement(e, { is: n })
          : ft.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      );
    },
    createText: (e) => ft.createTextNode(e),
    createComment: (e) => ft.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ft.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, i, r) {
      const l = n ? n.previousSibling : t.lastChild;
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));

        );
      else {
        zi.innerHTML = Pl(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const o = zi.content;
        if (s === "svg" || s === "mathml") {
          const a = o.firstChild;
          for (; a.firstChild; ) o.appendChild(a.firstChild);
          o.removeChild(a);
        }
        t.insertBefore(o, n);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Ya = Symbol("_vtc");
function Xa(e, t, n) {
  const s = e[Ya];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Fi = Symbol("_vod"),
  Za = Symbol("_vsh"),
  Qa = Symbol(""),
  Ja = /(^|;)\s*display\s*:/;
function ec(e, t, n) {
  const s = e.style,
    i = ve(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ve(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          n[o] == null && An(s, o, "");
        }
      else for (const l in t) n[l] == null && An(s, l, "");
    for (const l in n) l === "display" && (r = !0), An(s, l, n[l]);
  } else if (i) {
    if (t !== n) {
      const l = s[Qa];
      l && (n += ";" + l), (s.cssText = n), (r = Ja.test(n));
    }
  } else t && e.removeAttribute("style");
  Fi in e && ((e[Fi] = r ? s.display : ""), e[Za] && (s.display = "none"));
}
const Ni = /\s*!important$/;
function An(e, t, n) {
  if (J(n)) n.forEach((s) => An(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = tc(e, t);
    Ni.test(n)
      ? e.setProperty(At(s), n.replace(Ni, ""), "important")
      : (e[s] = n);
  }
}
const Hi = ["Webkit", "Moz", "ms"],
  ps = {};
function tc(e, t) {
  const n = ps[t];
  if (n) return n;
  let s = Ye(t);
  if (s !== "filter" && s in e) return (ps[t] = s);
  s = Un(s);
  for (let i = 0; i < Hi.length; i++) {
    const r = Hi[i] + s;
    if (r in e) return (ps[t] = r);
  }
  return t;
}
const ji = "http://www.w3.org/1999/xlink";
function Vi(e, t, n, s, i, r = go(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(ji, t.slice(6, t.length))
      : e.setAttributeNS(ji, t, n)
    : n == null || (r && !Er(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, r ? "" : gt(n) ? String(n) : n);
}
function ki(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Pl(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (o !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean"
      ? (n = Er(n))
      : n == null && o === "string"
      ? ((n = ""), (l = !0))
      : o === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(i || t);
}
function nc(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function sc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Gi = Symbol("_vei");
function ic(e, t, n, s, i = null) {
  const r = e[Gi] || (e[Gi] = {}),
    l = r[t];
  if (s && l) l.value = s;
  else {
    const [o, a] = rc(t);
    if (s) {
      const u = (r[t] = ac(s, i));
      nc(e, o, u, a);
    } else l && (sc(e, o, l, a), (r[t] = void 0));
  }
}
const Wi = /(?:Once|Passive|Capture)$/;
function rc(e) {
  let t;
  if (Wi.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Wi)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : At(e.slice(2)), t];
}
let hs = 0;
const lc = Promise.resolve(),
  oc = () => hs || (lc.then(() => (hs = 0)), (hs = Date.now()));
function ac(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    ot(cc(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = oc()), n;
}
function cc(e, t) {
  if (J(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return t;
}
const qi = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  uc = (e, t, n, s, i, r) => {
    const l = i === "svg";
    t === "class"
      ? Xa(e, s, l)
      : t === "style"
      ? ec(e, n, s)
      : Gn(t)
      ? qs(t) || ic(e, t, n, s, r)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : fc(e, t, s, l)
        )
      ? (ki(e, t, s),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Vi(e, t, s, l, r, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !ve(s))
      ? ki(e, Ye(t), s, r, t)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Vi(e, t, s, l));
  };
function fc(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && qi(t) && ee(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return qi(t) && ve(n) ? !1 : t in e;
}
const dc = Ce({ patchProp: uc }, Ka);
let Ui;
function pc() {
  return Ui || (Ui = wa(dc));
}
const hc = (...e) => {
  const t = pc().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const i = mc(s);
      if (!i) return;
      const r = t._component;
      !ee(r) && !r.render && !r.template && (r.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = "");
      const l = n(i, !1, gc(i));
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        l
      );
    }),
    t
  );
};
function gc(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function mc(e) {
  return ve(e) ? document.querySelector(e) : e;
}
var vc = !1;
/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const wc = Symbol();
var Ki;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(Ki || (Ki = {}));
function yc() {
  const e = mo(!0),
    t = e.run(() => _e({}));
  let n = [],
    s = [];
  const i = Gr({
    install(r) {
      (i._a = r),
        r.provide(wc, i),
        (r.config.globalProperties.$pinia = i),
        s.forEach((l) => n.push(l)),
        (s = []);
    },
    use(r) {
      return !this._a && !vc ? s.push(r) : n.push(r), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return i;
}
const ns = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, i] of t) n[s] = i;
    return n;
  },
  bc = {},
  xc = { class: "px-10 py-5 max-w-7xl mx-auto" };
function Cc(e, t) {
  const n = Jn("router-view");
  return me(), Se("main", xc, [U(n)]);
}
const Sc = ns(bc, [["render", Cc]]);
/*!
 * vue-router v4.4.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const zt = typeof document < "u";
function Ml(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Ec(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && Ml(e.default))
  );
}
const ce = Object.assign;
function gs(e, t) {
  const n = {};
  for (const s in t) {
    const i = t[s];
    n[s] = et(i) ? i.map(e) : e(i);
  }
  return n;
}
const un = () => {},
  et = Array.isArray,
  Ol = /#/g,
  _c = /&/g,
  Tc = /\//g,
  Pc = /=/g,
  Mc = /\?/g,
  Ll = /\+/g,
  Oc = /%5B/g,
  Lc = /%5D/g,
  Il = /%5E/g,
  Ic = /%60/g,
  Al = /%7B/g,
  Ac = /%7C/g,
  Rl = /%7D/g,
  Rc = /%20/g;
function hi(e) {
  return encodeURI("" + e)
    .replace(Ac, "|")
    .replace(Oc, "[")
    .replace(Lc, "]");
}
function Bc(e) {
  return hi(e).replace(Al, "{").replace(Rl, "}").replace(Il, "^");
}
function Fs(e) {
  return hi(e)
    .replace(Ll, "%2B")
    .replace(Rc, "+")
    .replace(Ol, "%23")
    .replace(_c, "%26")
    .replace(Ic, "`")
    .replace(Al, "{")
    .replace(Rl, "}")
    .replace(Il, "^");
}
function Dc(e) {
  return Fs(e).replace(Pc, "%3D");
}
function $c(e) {
  return hi(e).replace(Ol, "%23").replace(Mc, "%3F");
}
function zc(e) {
  return e == null ? "" : $c(e).replace(Tc, "%2F");
}
function yn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const Fc = /\/$/,
  Nc = (e) => e.replace(Fc, "");
function ms(e, t, n = "/") {
  let s,
    i = {},
    r = "",
    l = "";
  const o = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    o < a && o >= 0 && (a = -1),
    a > -1 &&
      ((s = t.slice(0, a)),
      (r = t.slice(a + 1, o > -1 ? o : t.length)),
      (i = e(r))),
    o > -1 && ((s = s || t.slice(0, o)), (l = t.slice(o, t.length))),
    (s = kc(s ?? t, n)),
    { fullPath: s + (r && "?") + r + l, path: s, query: i, hash: yn(l) }
  );
}
function Hc(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Yi(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function jc(e, t, n) {
  const s = t.matched.length - 1,
    i = n.matched.length - 1;
  return (
    s > -1 &&
    s === i &&
    Kt(t.matched[s], n.matched[i]) &&
    Bl(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Kt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Bl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Vc(e[n], t[n])) return !1;
  return !0;
}
function Vc(e, t) {
  return et(e) ? Xi(e, t) : et(t) ? Xi(t, e) : e === t;
}
function Xi(e, t) {
  return et(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function kc(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    s = e.split("/"),
    i = s[s.length - 1];
  (i === ".." || i === ".") && s.push("");
  let r = n.length - 1,
    l,
    o;
  for (l = 0; l < s.length; l++)
    if (((o = s[l]), o !== "."))
      if (o === "..") r > 1 && r--;
      else break;
  return n.slice(0, r).join("/") + "/" + s.slice(l).join("/");
}
const vt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var bn;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(bn || (bn = {}));
var fn;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(fn || (fn = {}));
function Gc(e) {
  if (!e)
    if (zt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Nc(e);
}
const Wc = /^[^#]+#/;
function qc(e, t) {
  return e.replace(Wc, "#") + t;
}
function Uc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const ss = () => ({ left: window.scrollX, top: window.scrollY });
function Kc(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      i =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!i) return;
    t = Uc(i, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function Zi(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ns = new Map();
function Yc(e, t) {
  Ns.set(e, t);
}
function Xc(e) {
  const t = Ns.get(e);
  return Ns.delete(e), t;
}
let Zc = () => location.protocol + "//" + location.host;
function Dl(e, t) {
  const { pathname: n, search: s, hash: i } = t,
    r = e.indexOf("#");
  if (r > -1) {
    let o = i.includes(e.slice(r)) ? e.slice(r).length : 1,
      a = i.slice(o);
    return a[0] !== "/" && (a = "/" + a), Yi(a, "");
  }
  return Yi(n, e) + s + i;
}
function Qc(e, t, n, s) {
  let i = [],
    r = [],
    l = null;
  const o = ({ state: d }) => {
    const p = Dl(e, location),
      v = n.value,
      y = t.value;
    let _ = 0;
    if (d) {
      if (((n.value = p), (t.value = d), l && l === v)) {
        l = null;
        return;
      }
      _ = y ? d.position - y.position : 0;
    } else s(p);
    i.forEach((x) => {
      x(n.value, v, {
        delta: _,
        type: bn.pop,
        direction: _ ? (_ > 0 ? fn.forward : fn.back) : fn.unknown,
      });
    });
  };
  function a() {
    l = n.value;
  }
  function u(d) {
    i.push(d);
    const p = () => {
      const v = i.indexOf(d);
      v > -1 && i.splice(v, 1);
    };
    return r.push(p), p;
  }
  function c() {
    const { history: d } = window;
    d.state && d.replaceState(ce({}, d.state, { scroll: ss() }), "");
  }
  function f() {
    for (const d of r) d();
    (r = []),
      window.removeEventListener("popstate", o),
      window.removeEventListener("beforeunload", c);
  }
  return (
    window.addEventListener("popstate", o),
    window.addEventListener("beforeunload", c, { passive: !0 }),
    { pauseListeners: a, listen: u, destroy: f }
  );
}
function Qi(e, t, n, s = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: i ? ss() : null,
  };
}
function Jc(e) {
  const { history: t, location: n } = window,
    s = { value: Dl(e, n) },
    i = { value: t.state };
  i.value ||
    r(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function r(a, u, c) {
    const f = e.indexOf("#"),
      d =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a
          : Zc() + e + a;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), (i.value = u);
    } catch (p) {
      console.error(p), n[c ? "replace" : "assign"](d);
    }
  }
  function l(a, u) {
    const c = ce({}, t.state, Qi(i.value.back, a, i.value.forward, !0), u, {
      position: i.value.position,
    });
    r(a, c, !0), (s.value = a);
  }
  function o(a, u) {
    const c = ce({}, i.value, t.state, { forward: a, scroll: ss() });
    r(c.current, c, !0);
    const f = ce({}, Qi(s.value, a, null), { position: c.position + 1 }, u);
    r(a, f, !1), (s.value = a);
  }
  return { location: s, state: i, push: o, replace: l };
}
function eu(e) {
  e = Gc(e);
  const t = Jc(e),
    n = Qc(e, t.state, t.location, t.replace);
  function s(r, l = !0) {
    l || n.pauseListeners(), history.go(r);
  }
  const i = ce(
    { location: "", base: e, go: s, createHref: qc.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(i, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(i, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    i
  );
}
function tu(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function $l(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const zl = Symbol("");
var Ji;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Ji || (Ji = {}));
function Yt(e, t) {
  return ce(new Error(), { type: e, [zl]: !0 }, t);
}
function ct(e, t) {
  return e instanceof Error && zl in e && (t == null || !!(e.type & t));
}
const er = "[^/]+?",
  nu = { sensitive: !1, strict: !1, start: !0, end: !0 },
  su = /[.+*?^${}()[\]/\\]/g;
function iu(e, t) {
  const n = ce({}, nu, t),
    s = [];
  let i = n.start ? "^" : "";
  const r = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (i += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        f || (i += "/"), (i += d.value.replace(su, "\\$&")), (p += 40);
      else if (d.type === 1) {
        const { value: v, repeatable: y, optional: _, regexp: x } = d;
        r.push({ name: v, repeatable: y, optional: _ });
        const g = x || er;
        if (g !== er) {
          p += 10;
          try {
            new RegExp(`(${g})`);
          } catch (b) {
            throw new Error(
              `Invalid custom RegExp for param "${v}" (${g}): ` + b.message
            );
          }
        }
        let w = y ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`;
        f || (w = _ && u.length < 2 ? `(?:/${w})` : "/" + w),
          _ && (w += "?"),
          (i += w),
          (p += 20),
          _ && (p += -8),
          y && (p += -20),
          g === ".*" && (p += -50);
      }
      c.push(p);
    }
    s.push(c);
  }
  if (n.strict && n.end) {
    const u = s.length - 1;
    s[u][s[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (i += "/?"), n.end ? (i += "$") : n.strict && (i += "(?:/|$)");
  const l = new RegExp(i, n.sensitive ? "" : "i");
  function o(u) {
    const c = u.match(l),
      f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const p = c[d] || "",
        v = r[d - 1];
      f[v.name] = p && v.repeatable ? p.split("/") : p;
    }
    return f;
  }
  function a(u) {
    let c = "",
      f = !1;
    for (const d of e) {
      (!f || !c.endsWith("/")) && (c += "/"), (f = !1);
      for (const p of d)
        if (p.type === 0) c += p.value;
        else if (p.type === 1) {
          const { value: v, repeatable: y, optional: _ } = p,
            x = v in u ? u[v] : "";
          if (et(x) && !y)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`
            );
          const g = et(x) ? x.join("/") : x;
          if (!g)
            if (_)
              d.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${v}"`);
          c += g;
        }
    }
    return c || "/";
  }
  return { re: l, score: s, keys: r, parse: o, stringify: a };
}
function ru(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Fl(e, t) {
  let n = 0;
  const s = e.score,
    i = t.score;
  for (; n < s.length && n < i.length; ) {
    const r = ru(s[n], i[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(i.length - s.length) === 1) {
    if (tr(s)) return 1;
    if (tr(i)) return -1;
  }
  return i.length - s.length;
}
function tr(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const lu = { type: 0, value: "" },
  ou = /[a-zA-Z0-9_]/;
function au(e) {
  if (!e) return [[]];
  if (e === "/") return [[lu]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${u}": ${p}`);
  }
  let n = 0,
    s = n;
  const i = [];
  let r;
  function l() {
    r && i.push(r), (r = []);
  }
  let o = 0,
    a,
    u = "",
    c = "";
  function f() {
    u &&
      (n === 0
        ? r.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (r.length > 1 &&
            (a === "*" || a === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          r.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function d() {
    u += a;
  }
  for (; o < e.length; ) {
    if (((a = e[o++]), a === "\\" && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (u && f(), l()) : a === ":" ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = s);
        break;
      case 1:
        a === "("
          ? (n = 2)
          : ou.test(a)
          ? d()
          : (f(), (n = 0), a !== "*" && a !== "?" && a !== "+" && o--);
        break;
      case 2:
        a === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + a)
            : (n = 3)
          : (c += a);
        break;
      case 3:
        f(), (n = 0), a !== "*" && a !== "?" && a !== "+" && o--, (c = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), l(), i;
}
function cu(e, t, n) {
  const s = iu(au(e.path), n),
    i = ce(s, { record: e, parent: t, children: [], alias: [] });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function uu(e, t) {
  const n = [],
    s = new Map();
  t = rr({ strict: !1, end: !0, sensitive: !1 }, t);
  function i(f) {
    return s.get(f);
  }
  function r(f, d, p) {
    const v = !p,
      y = sr(f);
    y.aliasOf = p && p.record;
    const _ = rr(t, f),
      x = [y];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const E of b)
        x.push(
          sr(
            ce({}, y, {
              components: p ? p.record.components : y.components,
              path: E,
              aliasOf: p ? p.record : y,
            })
          )
        );
    }
    let g, w;
    for (const b of x) {
      const { path: E } = b;
      if (d && E[0] !== "/") {
        const A = d.record.path,
          z = A[A.length - 1] === "/" ? "" : "/";
        b.path = d.record.path + (E && z + E);
      }
      if (
        ((g = cu(b, d, _)),
        p
          ? p.alias.push(g)
          : ((w = w || g),
            w !== g && w.alias.push(g),
            v && f.name && !ir(g) && l(f.name)),
        Nl(g) && a(g),
        y.children)
      ) {
        const A = y.children;
        for (let z = 0; z < A.length; z++) r(A[z], g, p && p.children[z]);
      }
      p = p || g;
    }
    return w
      ? () => {
          l(w);
        }
      : un;
  }
  function l(f) {
    if ($l(f)) {
      const d = s.get(f);
      d &&
        (s.delete(f),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(l),
        d.alias.forEach(l));
    } else {
      const d = n.indexOf(f);
      d > -1 &&
        (n.splice(d, 1),
        f.record.name && s.delete(f.record.name),
        f.children.forEach(l),
        f.alias.forEach(l));
    }
  }
  function o() {
    return n;
  }
  function a(f) {
    const d = pu(f, n);
    n.splice(d, 0, f), f.record.name && !ir(f) && s.set(f.record.name, f);
  }
  function u(f, d) {
    let p,
      v = {},
      y,
      _;
    if ("name" in f && f.name) {
      if (((p = s.get(f.name)), !p)) throw Yt(1, { location: f });
      (_ = p.record.name),
        (v = ce(
          nr(
            d.params,
            p.keys
              .filter((w) => !w.optional)
              .concat(p.parent ? p.parent.keys.filter((w) => w.optional) : [])
              .map((w) => w.name)
          ),
          f.params &&
            nr(
              f.params,
              p.keys.map((w) => w.name)
            )
        )),
        (y = p.stringify(v));
    } else if (f.path != null)
      (y = f.path),
        (p = n.find((w) => w.re.test(y))),
        p && ((v = p.parse(y)), (_ = p.record.name));
    else {
      if (((p = d.name ? s.get(d.name) : n.find((w) => w.re.test(d.path))), !p))
        throw Yt(1, { location: f, currentLocation: d });
      (_ = p.record.name),
        (v = ce({}, d.params, f.params)),
        (y = p.stringify(v));
    }
    const x = [];
    let g = p;
    for (; g; ) x.unshift(g.record), (g = g.parent);
    return { name: _, path: y, params: v, matched: x, meta: du(x) };
  }
  e.forEach((f) => r(f));
  function c() {
    (n.length = 0), s.clear();
  }
  return {
    addRoute: r,
    resolve: u,
    removeRoute: l,
    clearRoutes: c,
    getRoutes: o,
    getRecordMatcher: i,
  };
}
function nr(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function sr(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: fu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function fu(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function ir(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function du(e) {
  return e.reduce((t, n) => ce(t, n.meta), {});
}
function rr(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function pu(e, t) {
  let n = 0,
    s = t.length;
  for (; n !== s; ) {
    const r = (n + s) >> 1;
    Fl(e, t[r]) < 0 ? (s = r) : (n = r + 1);
  }
  const i = hu(e);
  return i && (s = t.lastIndexOf(i, s - 1)), s;
}
function hu(e) {
  let t = e;
  for (; (t = t.parent); ) if (Nl(t) && Fl(e, t) === 0) return t;
}
function Nl({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function gu(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let i = 0; i < s.length; ++i) {
    const r = s[i].replace(Ll, " "),
      l = r.indexOf("="),
      o = yn(l < 0 ? r : r.slice(0, l)),
      a = l < 0 ? null : yn(r.slice(l + 1));
    if (o in t) {
      let u = t[o];
      et(u) || (u = t[o] = [u]), u.push(a);
    } else t[o] = a;
  }
  return t;
}
function lr(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = Dc(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (et(s) ? s.map((r) => r && Fs(r)) : [s && Fs(s)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? "&" : "") + n), r != null && (t += "=" + r));
    });
  }
  return t;
}
function mu(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = et(s)
        ? s.map((i) => (i == null ? null : "" + i))
        : s == null
        ? s
        : "" + s);
  }
  return t;
}
const vu = Symbol(""),
  or = Symbol(""),
  gi = Symbol(""),
  Hl = Symbol(""),
  Hs = Symbol("");
function Jt() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const i = e.indexOf(s);
        i > -1 && e.splice(i, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function bt(e, t, n, s, i, r = (l) => l()) {
  const l = s && (s.enterCallbacks[i] = s.enterCallbacks[i] || []);
  return () =>
    new Promise((o, a) => {
      const u = (d) => {
          d === !1
            ? a(Yt(4, { from: n, to: t }))
            : d instanceof Error
            ? a(d)
            : tu(d)
            ? a(Yt(2, { from: t, to: d }))
            : (l &&
                s.enterCallbacks[i] === l &&
                typeof d == "function" &&
                l.push(d),
              o());
        },
        c = r(() => e.call(s && s.instances[i], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((d) => a(d));
    });
}
function vs(e, t, n, s, i = (r) => r()) {
  const r = [];
  for (const l of e)
    for (const o in l.components) {
      let a = l.components[o];
      if (!(t !== "beforeRouteEnter" && !l.instances[o]))
        if (Ml(a)) {
          const c = (a.__vccOpts || a)[t];
          c && r.push(bt(c, n, s, l, o, i));
        } else {
          let u = a();
          r.push(() =>
            u.then((c) => {
              if (!c)
                throw new Error(
                  `Couldn't resolve component "${o}" at "${l.path}"`
                );
              const f = Ec(c) ? c.default : c;
              (l.mods[o] = c), (l.components[o] = f);
              const p = (f.__vccOpts || f)[t];
              return p && bt(p, n, s, l, o, i)();
            })
          );
        }
    }
  return r;
}
function ar(e) {
  const t = ht(gi),
    n = ht(Hl),
    s = Ue(() => {
      const a = Re(e.to);
      return t.resolve(a);
    }),
    i = Ue(() => {
      const { matched: a } = s.value,
        { length: u } = a,
        c = a[u - 1],
        f = n.matched;
      if (!c || !f.length) return -1;
      const d = f.findIndex(Kt.bind(null, c));
      if (d > -1) return d;
      const p = cr(a[u - 2]);
      return u > 1 && cr(c) === p && f[f.length - 1].path !== p
        ? f.findIndex(Kt.bind(null, a[u - 2]))
        : d;
    }),
    r = Ue(() => i.value > -1 && xu(n.params, s.value.params)),
    l = Ue(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        Bl(n.params, s.value.params)
    );
  function o(a = {}) {
    return bu(a)
      ? t[Re(e.replace) ? "replace" : "push"](Re(e.to)).catch(un)
      : Promise.resolve();
  }
  return {
    route: s,
    href: Ue(() => s.value.href),
    isActive: r,
    isExactActive: l,
    navigate: o,
  };
}
const wu = Xe({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: ar,
    setup(e, { slots: t }) {
      const n = Xn(ar(e)),
        { options: s } = ht(gi),
        i = Ue(() => ({
          [ur(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [ur(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const r = t.default && t.default(n);
        return e.custom
          ? r
          : $e(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value,
              },
              r
            );
      };
    },
  }),
  yu = wu;
function bu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function xu(e, t) {
  for (const n in t) {
    const s = t[n],
      i = e[n];
    if (typeof s == "string") {
      if (s !== i) return !1;
    } else if (!et(i) || i.length !== s.length || s.some((r, l) => r !== i[l]))
      return !1;
  }
  return !0;
}
function cr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const ur = (e, t, n) => e ?? t ?? n,
  Cu = Xe({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = ht(Hs),
        i = Ue(() => e.route || s.value),
        r = ht(or, 0),
        l = Ue(() => {
          let u = Re(r);
          const { matched: c } = i.value;
          let f;
          for (; (f = c[u]) && !f.components; ) u++;
          return u;
        }),
        o = Ue(() => i.value.matched[l.value]);
      Gt(
        or,
        Ue(() => l.value + 1)
      ),
        Gt(vu, o),
        Gt(Hs, i);
      const a = _e();
      return (
        an(
          () => [a.value, o.value, e.name],
          ([u, c, f], [d, p, v]) => {
            c &&
              ((c.instances[f] = u),
              p &&
                p !== c &&
                u &&
                u === d &&
                (c.leaveGuards.size || (c.leaveGuards = p.leaveGuards),
                c.updateGuards.size || (c.updateGuards = p.updateGuards))),
              u &&
                c &&
                (!p || !Kt(c, p) || !d) &&
                (c.enterCallbacks[f] || []).forEach((y) => y(u));
          },
          { flush: "post" }
        ),
        () => {
          const u = i.value,
            c = e.name,
            f = o.value,
            d = f && f.components[c];
          if (!d) return fr(n.default, { Component: d, route: u });
          const p = f.props[c],
            v = p
              ? p === !0
                ? u.params
                : typeof p == "function"
                ? p(u)
                : p
              : null,
            _ = $e(
              d,
              ce({}, v, t, {
                onVnodeUnmounted: (x) => {
                  x.component.isUnmounted && (f.instances[c] = null);
                },
                ref: a,
              })
            );
          return fr(n.default, { Component: _, route: u }) || _;
        }
      );
    },
  });
function fr(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Su = Cu;
function Eu(e) {
  const t = uu(e.routes, e),
    n = e.parseQuery || gu,
    s = e.stringifyQuery || lr,
    i = e.history,
    r = Jt(),
    l = Jt(),
    o = Jt(),
    a = $o(vt);
  let u = vt;
  zt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const c = gs.bind(null, (T) => "" + T),
    f = gs.bind(null, zc),
    d = gs.bind(null, yn);
  function p(T, k) {
    let H, W;
    return (
      $l(T) ? ((H = t.getRecordMatcher(T)), (W = k)) : (W = T), t.addRoute(W, H)
    );
  }
  function v(T) {
    const k = t.getRecordMatcher(T);
    k && t.removeRoute(k);
  }
  function y() {
    return t.getRoutes().map((T) => T.record);
  }
  function _(T) {
    return !!t.getRecordMatcher(T);
  }
  function x(T, k) {
    if (((k = ce({}, k || a.value)), typeof T == "string")) {
      const m = ms(n, T, k.path),
        C = t.resolve({ path: m.path }, k),
        O = i.createHref(m.fullPath);
      return ce(m, C, {
        params: d(C.params),
        hash: yn(m.hash),
        redirectedFrom: void 0,
        href: O,
      });
    }
    let H;
    if (T.path != null) H = ce({}, T, { path: ms(n, T.path, k.path).path });
    else {
      const m = ce({}, T.params);
      for (const C in m) m[C] == null && delete m[C];
      (H = ce({}, T, { params: f(m) })), (k.params = f(k.params));
    }
    const W = t.resolve(H, k),
      ie = T.hash || "";
    W.params = c(d(W.params));
    const he = Hc(s, ce({}, T, { hash: Bc(ie), path: W.path })),
      h = i.createHref(he);
    return ce(
      { fullPath: he, hash: ie, query: s === lr ? mu(T.query) : T.query || {} },
      W,
      { redirectedFrom: void 0, href: h }
    );
  }
  function g(T) {
    return typeof T == "string" ? ms(n, T, a.value.path) : ce({}, T);
  }
  function w(T, k) {
    if (u !== T) return Yt(8, { from: k, to: T });
  }
  function b(T) {
    return z(T);
  }
  function E(T) {
    return b(ce(g(T), { replace: !0 }));
  }
  function A(T) {
    const k = T.matched[T.matched.length - 1];
    if (k && k.redirect) {
      const { redirect: H } = k;
      let W = typeof H == "function" ? H(T) : H;
      return (
        typeof W == "string" &&
          ((W = W.includes("?") || W.includes("#") ? (W = g(W)) : { path: W }),
          (W.params = {})),
        ce(
          {
            query: T.query,
            hash: T.hash,
            params: W.path != null ? {} : T.params,
          },
          W
        )
      );
    }
  }
  function z(T, k) {
    const H = (u = x(T)),
      W = a.value,
      ie = T.state,
      he = T.force,
      h = T.replace === !0,
      m = A(H);
    if (m)
      return z(
        ce(g(m), {
          state: typeof m == "object" ? ce({}, ie, m.state) : ie,
          force: he,
          replace: h,
        }),
        k || H
      );
    const C = H;
    C.redirectedFrom = k;
    let O;
    return (
      !he &&
        jc(s, W, H) &&
        ((O = Yt(16, { to: C, from: W })), ye(W, W, !0, !1)),
      (O ? Promise.resolve(O) : M(C, W))
        .catch((S) => (ct(S) ? (ct(S, 2) ? S : pe(S)) : F(S, C, W)))
        .then((S) => {
          if (S) {
            if (ct(S, 2))
              return z(
                ce({ replace: h }, g(S.to), {
                  state: typeof S.to == "object" ? ce({}, ie, S.to.state) : ie,
                  force: he,
                }),
                k || C
              );
          } else S = K(C, W, !0, h, ie);
          return $(C, W, S), S;
        })
    );
  }
  function D(T, k) {
    const H = w(T, k);
    return H ? Promise.reject(H) : Promise.resolve();
  }
  function P(T) {
    const k = Bt.values().next().value;
    return k && typeof k.runWithContext == "function"
      ? k.runWithContext(T)
      : T();
  }
  function M(T, k) {
    let H;
    const [W, ie, he] = _u(T, k);
    H = vs(W.reverse(), "beforeRouteLeave", T, k);
    for (const m of W)
      m.leaveGuards.forEach((C) => {
        H.push(bt(C, T, k));
      });
    const h = D.bind(null, T, k);
    return (
      H.push(h),
      We(H)
        .then(() => {
          H = [];
          for (const m of r.list()) H.push(bt(m, T, k));
          return H.push(h), We(H);
        })
        .then(() => {
          H = vs(ie, "beforeRouteUpdate", T, k);
          for (const m of ie)
            m.updateGuards.forEach((C) => {
              H.push(bt(C, T, k));
            });
          return H.push(h), We(H);
        })
        .then(() => {
          H = [];
          for (const m of he)
            if (m.beforeEnter)
              if (et(m.beforeEnter))
                for (const C of m.beforeEnter) H.push(bt(C, T, k));
              else H.push(bt(m.beforeEnter, T, k));
          return H.push(h), We(H);
        })
        .then(
          () => (
            T.matched.forEach((m) => (m.enterCallbacks = {})),
            (H = vs(he, "beforeRouteEnter", T, k, P)),
            H.push(h),
            We(H)
          )
        )
        .then(() => {
          H = [];
          for (const m of l.list()) H.push(bt(m, T, k));
          return H.push(h), We(H);
        })
        .catch((m) => (ct(m, 8) ? m : Promise.reject(m)))
    );
  }
  function $(T, k, H) {
    o.list().forEach((W) => P(() => W(T, k, H)));
  }
  function K(T, k, H, W, ie) {
    const he = w(T, k);
    if (he) return he;
    const h = k === vt,
      m = zt ? history.state : {};
    H &&
      (W || h
        ? i.replace(T.fullPath, ce({ scroll: h && m && m.scroll }, ie))
        : i.push(T.fullPath, ie)),
      (a.value = T),
      ye(T, k, H, h),
      pe();
  }
  let Y;
  function ne() {
    Y ||
      (Y = i.listen((T, k, H) => {
        if (!En.listening) return;
        const W = x(T),
          ie = A(W);
        if (ie) {
          z(ce(ie, { replace: !0 }), W).catch(un);
          return;
        }
        u = W;
        const he = a.value;
        zt && Yc(Zi(he.fullPath, H.delta), ss()),
          M(W, he)
            .catch((h) =>
              ct(h, 12)
                ? h
                : ct(h, 2)
                ? (z(h.to, W)
                    .then((m) => {
                      ct(m, 20) &&
                        !H.delta &&
                        H.type === bn.pop &&
                        i.go(-1, !1);
                    })
                    .catch(un),
                  Promise.reject())
                : (H.delta && i.go(-H.delta, !1), F(h, W, he))
            )
            .then((h) => {
              (h = h || K(W, he, !1)),
                h &&
                  (H.delta && !ct(h, 8)
                    ? i.go(-H.delta, !1)
                    : H.type === bn.pop && ct(h, 20) && i.go(-1, !1)),
                $(W, he, h);
            })
            .catch(un);
      }));
  }
  let se = Jt(),
    G = Jt(),
    Z;
  function F(T, k, H) {
    pe(T);
    const W = G.list();
    return (
      W.length ? W.forEach((ie) => ie(T, k, H)) : console.error(T),
      Promise.reject(T)
    );
  }
  function oe() {
    return Z && a.value !== vt
      ? Promise.resolve()
      : new Promise((T, k) => {
          se.add([T, k]);
        });
  }
  function pe(T) {
    return (
      Z ||
        ((Z = !T),
        ne(),
        se.list().forEach(([k, H]) => (T ? H(T) : k())),
        se.reset()),
      T
    );
  }
  function ye(T, k, H, W) {
    const { scrollBehavior: ie } = e;
    if (!zt || !ie) return Promise.resolve();
    const he =
      (!H && Xc(Zi(T.fullPath, 0))) ||
      ((W || !H) && history.state && history.state.scroll) ||
      null;
    return si()
      .then(() => ie(T, k, he))
      .then((h) => h && Kc(h))
      .catch((h) => F(h, T, k));
  }
  const we = (T) => i.go(T);
  let Rt;
  const Bt = new Set(),
    En = {
      currentRoute: a,
      listening: !0,
      addRoute: p,
      removeRoute: v,
      clearRoutes: t.clearRoutes,
      hasRoute: _,
      getRoutes: y,
      resolve: x,
      options: e,
      push: b,
      replace: E,
      go: we,
      back: () => we(-1),
      forward: () => we(1),
      beforeEach: r.add,
      beforeResolve: l.add,
      afterEach: o.add,
      onError: G.add,
      isReady: oe,
      install(T) {
        const k = this;
        T.component("RouterLink", yu),
          T.component("RouterView", Su),
          (T.config.globalProperties.$router = k),
          Object.defineProperty(T.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Re(a),
          }),
          zt &&
            !Rt &&
            a.value === vt &&
            ((Rt = !0), b(i.location).catch((ie) => {}));
        const H = {};
        for (const ie in vt)
          Object.defineProperty(H, ie, {
            get: () => a.value[ie],
            enumerable: !0,
          });
        T.provide(gi, k), T.provide(Hl, Vr(H)), T.provide(Hs, a);
        const W = T.unmount;
        Bt.add(T),
          (T.unmount = function () {
            Bt.delete(T),
              Bt.size < 1 &&
                ((u = vt),
                Y && Y(),
                (Y = null),
                (a.value = vt),
                (Rt = !1),
                (Z = !1)),
              W();
          });
      },
    };
  function We(T) {
    return T.reduce((k, H) => k.then(() => P(H)), Promise.resolve());
  }
  return En;
}
function _u(e, t) {
  const n = [],
    s = [],
    i = [],
    r = Math.max(t.matched.length, e.matched.length);
  for (let l = 0; l < r; l++) {
    const o = t.matched[l];
    o && (e.matched.find((u) => Kt(u, o)) ? s.push(o) : n.push(o));
    const a = e.matched[l];
    a && (t.matched.find((u) => Kt(u, a)) || i.push(a));
  }
  return [n, s, i];
}
const Tu = {},
  Pu = {
    class:
      "my-10 bg-[#0F172B] rounded-[5px] px-5 h-[35px] text-xs flex items-center justify-between",
  };
function Mu(e, t) {
  return (
    me(),
    Se(
      "div",
      Pu,
      t[0] ||
        (t[0] = [
          fi(
            '<div class="flex items-center gap-x-3"><svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.73443 2.09045C6.55382 2.09045 5.39972 2.44055 4.41807 3.09646C3.43643 3.75238 2.67133 4.68465 2.21952 5.7754C1.76772 6.86614 1.64951 8.06637 1.87984 9.2243C2.11016 10.3822 2.67868 11.4459 3.5135 12.2807C4.34833 13.1155 5.41195 13.684 6.56988 13.9143C7.72781 14.1447 8.92803 14.0265 10.0188 13.5747C11.1095 13.1229 12.0418 12.3578 12.6977 11.3761C13.3536 10.3945 13.7037 9.24036 13.7037 8.05975C13.7021 6.4771 13.0726 4.95976 11.9535 3.84067C10.8344 2.72157 9.31707 2.09213 7.73443 2.09045ZM7.50484 4.84551C7.64107 4.84551 7.77423 4.88591 7.8875 4.96159C8.00077 5.03727 8.08905 5.14484 8.14118 5.2707C8.19331 5.39655 8.20695 5.53504 8.18037 5.66865C8.1538 5.80226 8.0882 5.92498 7.99187 6.02131C7.89555 6.11763 7.77282 6.18323 7.63921 6.20981C7.50561 6.23638 7.36712 6.22274 7.24126 6.17061C7.11541 6.11848 7.00784 6.0302 6.93216 5.91693C6.85647 5.80367 6.81608 5.6705 6.81608 5.53428C6.81608 5.3516 6.88864 5.17641 7.01781 5.04725C7.14698 4.91808 7.32217 4.84551 7.50484 4.84551ZM8.19361 11.274C7.95005 11.274 7.71646 11.1772 7.54423 11.005C7.37201 10.8328 7.27525 10.5992 7.27525 10.3556V8.05975C7.15347 8.05975 7.03668 8.01137 6.95057 7.92526C6.86446 7.83914 6.81608 7.72235 6.81608 7.60057C6.81608 7.47879 6.86446 7.362 6.95057 7.27588C7.03668 7.18977 7.15347 7.14139 7.27525 7.14139C7.51882 7.14139 7.7524 7.23815 7.92463 7.41037C8.09685 7.5826 8.19361 7.81618 8.19361 8.05975V10.3556C8.31539 10.3556 8.43218 10.404 8.51829 10.4901C8.60441 10.5762 8.65278 10.693 8.65278 10.8148C8.65278 10.9366 8.60441 11.0534 8.51829 11.1395C8.43218 11.2256 8.31539 11.274 8.19361 11.274Z" fill="#155DFC"></path></svg><h6 class="font-medium text-[#90A1B9]"> بیانیه سلب مسئولیت </h6><span class="size-1 rounded-full bg-[#314158]"></span><p class="text-[#90A1B9]"> این وب‌سایت فقط اطلاعات فیلم و سریال را نمایش می‌دهد و هیچ محتوایی را میزبانی نمی‌کند. اطلاعات از APIهای عمومی و لینک‌های دانلود از الماس مووی دریافت می‌شود. </p></div><button class="flex items-center gap-x-2"><span class="text-[#BEDBFF]">اطلاعات بیشتر</span><svg width="8" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.25794 6.90438C4.28638 6.93282 4.30894 6.96659 4.32434 7.00375C4.33973 7.04091 4.34765 7.08074 4.34765 7.12096C4.34765 7.16118 4.33973 7.20101 4.32434 7.23817C4.30894 7.27533 4.28638 7.3091 4.25794 7.33754C4.2295 7.36598 4.19573 7.38854 4.15857 7.40393C4.12141 7.41933 4.08158 7.42725 4.04136 7.42725C4.00114 7.42725 3.96131 7.41933 3.92415 7.40393C3.88699 7.38854 3.85323 7.36598 3.82478 7.33754L0.763608 4.27636C0.735146 4.24793 0.712568 4.21417 0.697163 4.17701C0.681757 4.13985 0.673828 4.10001 0.673828 4.05978C0.673828 4.01956 0.681757 3.97972 0.697163 3.94256C0.712568 3.9054 0.735146 3.87164 0.763608 3.84321L3.82478 0.782031C3.88222 0.724591 3.96013 0.692322 4.04136 0.692322C4.12259 0.692322 4.2005 0.724591 4.25794 0.782031C4.31538 0.839471 4.34765 0.917377 4.34765 0.99861C4.34765 1.07984 4.31538 1.15775 4.25794 1.21519L1.41296 4.05978L4.25794 6.90438Z" fill="#BEDBFF"></path></svg></button>',
            2
          ),
        ])
    )
  );
}
const Ou = ns(Tu, [["render", Mu]]),
  jl = "/dist/logo-free-movie.png",
  Lu = {},
  Iu = {
    class:
      "flex items-center justify-center rounded-full bg-transparent border border-[#314158] size-[30px]",
  };
function Au(e, t) {
  return me(), Se("div", Iu, [il(e.$slots, "default")]);
}
const en = ns(Lu, [["render", Au]]),
  Ru = { class: "flex items-center justify-center flex-col space-y-6 py-1" },
  Bu = { class: "flex items-center gap-x-8 text-[#CAD5E2]" },
  Du = { class: "my-3 flex items-center gap-x-3" },
  $u = Xe({
    __name: "Footer",
    setup(e) {
      return (t, n) => {
        const s = Jn("router-link");
        return (
          me(),
          Se("footer", Ru, [
            V("div", Bu, [
              U(
                s,
                { to: "/", class: "text-xs" },
                {
                  default: be(() => n[0] || (n[0] = [pt(" توسعه دهندگان ")])),
                  _: 1,
                }
              ),
              U(
                s,
                { to: "/", class: "text-xs" },
                {
                  default: be(() => n[1] || (n[1] = [pt(" درباره ما ")])),
                  _: 1,
                }
              ),
              U(
                s,
                { to: "/", class: "text-xs" },
                {
                  default: be(() => n[2] || (n[2] = [pt(" سلب مسئولیت ")])),
                  _: 1,
                }
              ),
              U(
                s,
                { to: "/", class: "text-xs" },
                { default: be(() => n[3] || (n[3] = [pt(" DMCA ")])), _: 1 }
              ),
            ]),
            n[9] ||
              (n[9] = V(
                "img",
                {
                  src: jl,
                  alt: "free-movie",
                  class: "w-[78px] h-[29px] object-cover",
                },
                null,
                -1
              )),
            V("div", Du, [
              U(en, null, {
                default: be(
                  () =>
                    n[4] ||
                    (n[4] = [
                      V(
                        "svg",
                        {
                          width: "15",
                          height: "15",
                          viewBox: "0 0 15 15",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        [
                          V("path", {
                            d: "M13.3381 4.52066C13.1969 3.99618 12.7833 3.58265 12.2589 3.44144C11.3007 3.1792 7.46791 3.1792 7.46791 3.1792C7.46791 3.1792 3.63515 3.1792 2.67696 3.43135C2.16256 3.57256 1.73894 3.99618 1.59774 4.52066C1.34558 5.47885 1.34558 7.46583 1.34558 7.46583C1.34558 7.46583 1.34558 9.4629 1.59774 10.411C1.73894 10.9355 2.15248 11.349 2.67696 11.4902C3.64524 11.7525 7.46791 11.7525 7.46791 11.7525C7.46791 11.7525 11.3007 11.7525 12.2589 11.5003C12.7833 11.3591 13.1969 10.9456 13.3381 10.4211C13.5902 9.4629 13.5902 7.47592 13.5902 7.47592C13.5902 7.47592 13.6003 5.47885 13.3381 4.52066Z",
                            fill: "#314158",
                          }),
                          V("path", {
                            d: "M6.24768 9.3015L9.43492 7.46582L6.24768 5.63013V9.3015Z",
                            fill: "#90A1B9",
                          }),
                        ],
                        -1
                      ),
                    ])
                ),
                _: 1,
              }),
              U(en, null, {
                default: be(
                  () =>
                    n[5] ||
                    (n[5] = [
                      V(
                        "svg",
                        {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 15",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        [
                          V("path", {
                            d: "M13.8563 7.46512C13.8563 4.08349 11.1156 1.34277 7.73392 1.34277C4.35229 1.34277 1.61157 4.08349 1.61157 7.46512C1.61157 10.5215 3.85006 13.0542 6.77731 13.5133V9.23486H5.22279V7.46512H6.77731V6.11629C6.77731 4.58211 7.69089 3.73432 9.08992 3.73432C9.75955 3.73432 10.4603 3.85389 10.4603 3.85389V5.36056H9.68782C8.9273 5.36056 8.69054 5.8329 8.69054 6.31718V7.46512H10.3885L10.1171 9.23486H8.69054V13.5133C11.6178 13.0542 13.8563 10.5215 13.8563 7.46512Z",
                            fill: "#314158",
                          }),
                          V("path", {
                            d: "M10.117 9.23444L10.3884 7.46469H8.69041V6.31675C8.69041 5.83248 8.92716 5.36014 9.68769 5.36014H10.4601V3.85346C10.4601 3.85346 9.75942 3.73389 9.08979 3.73389C7.69075 3.73389 6.77717 4.58168 6.77717 6.11586V7.46469H5.22266V9.23444H6.77717V13.5129C7.08926 13.5619 7.40854 13.587 7.73379 13.587C8.05904 13.587 8.37832 13.5619 8.69041 13.5129V9.23444H10.117Z",
                            fill: "#90A1B9",
                          }),
                        ],
                        -1
                      ),
                    ])
                ),
                _: 1,
              }),
              U(en, null, {
                default: be(
                  () =>
                    n[6] ||
                    (n[6] = [
                      V(
                        "svg",
                        {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 15",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        [
                          V("path", {
                            d: "M13.5097 7.46495C13.5097 10.5081 11.0428 12.9751 7.99962 12.9751C6.8389 12.9751 5.762 12.6162 4.87385 12.0033L2.99042 12.4741L3.48397 10.6233C2.85727 9.729 2.4895 8.63992 2.4895 7.46495C2.4895 4.4218 4.95646 1.95483 7.99962 1.95483C11.0428 1.95483 13.5097 4.4218 13.5097 7.46495Z",
                            fill: "#314158",
                          }),
                          V("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M7.99976 13.8931C11.5501 13.8931 14.4282 11.0149 14.4282 7.4646C14.4282 3.91426 11.5501 1.03613 7.99976 1.03613C4.44941 1.03613 1.57129 3.91426 1.57129 7.4646C1.57129 8.61754 1.8748 9.69958 2.40629 10.6352L1.57129 13.8931L4.9301 13.1142C5.84226 13.6109 6.88805 13.8931 7.99976 13.8931ZM7.99976 12.9041C11.0039 12.9041 13.4392 10.4687 13.4392 7.4646C13.4392 4.46046 11.0039 2.02513 7.99976 2.02513C4.99562 2.02513 2.56028 4.46046 2.56028 7.4646C2.56028 8.62451 2.92333 9.69962 3.542 10.5825L3.05478 12.4096L4.91406 11.9448C5.79083 12.5498 6.85392 12.9041 7.99976 12.9041Z",
                            fill: "#90A1B9",
                          }),
                          V("path", {
                            d: "M6.39263 4.48014C6.23979 4.17314 6.00532 4.20032 5.76845 4.20032C5.34513 4.20032 4.68506 4.70738 4.68506 5.65107C4.68506 6.42447 5.02586 7.27108 6.17424 8.53753C7.28252 9.75974 8.73873 10.392 9.94765 10.3705C11.1566 10.349 11.4053 9.30863 11.4053 8.95731C11.4053 8.80159 11.3087 8.72389 11.2421 8.70278C10.8301 8.50507 10.0703 8.13668 9.89743 8.06746C9.72455 7.99824 9.63428 8.09186 9.57816 8.14279C9.42138 8.2922 9.1106 8.73252 9.00419 8.83156C8.89778 8.9306 8.73914 8.88047 8.67312 8.84303C8.43018 8.74555 7.77149 8.45256 7.24644 7.94358C6.5971 7.31412 6.55899 7.09756 6.43666 6.90478C6.33879 6.75056 6.4106 6.65594 6.44644 6.61459C6.58635 6.45316 6.77952 6.20393 6.86616 6.08008C6.95279 5.95623 6.88401 5.76819 6.84275 5.65107C6.66527 5.14738 6.51491 4.72573 6.39263 4.48014Z",
                            fill: "#90A1B9",
                          }),
                        ],
                        -1
                      ),
                    ])
                ),
                _: 1,
              }),
              U(en, null, {
                default: be(
                  () =>
                    n[7] ||
                    (n[7] = [
                      V(
                        "svg",
                        {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 15",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        [
                          V("path", {
                            d: "M9.66288 6.52757L13.9835 1.34277H12.9597L9.20805 5.84466L6.21163 1.34277H2.75562L7.28679 8.15042L2.75562 13.5875H3.77953L7.74136 8.83333L10.9058 13.5875H14.3618L9.66263 6.52757H9.66288ZM8.26048 8.2104L7.80138 7.53251L4.14847 2.13848H5.72114L8.66909 6.49163L9.12819 7.16952L12.9602 12.828H11.3875L8.26048 8.21066V8.2104Z",
                            fill: "#90A1B9",
                          }),
                        ],
                        -1
                      ),
                    ])
                ),
                _: 1,
              }),
              U(en, null, {
                default: be(
                  () =>
                    n[8] ||
                    (n[8] = [
                      V(
                        "svg",
                        {
                          width: "13",
                          height: "13",
                          viewBox: "0 0 15 15",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        [
                          V("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M2.25118 6.93534C5.53809 5.50329 7.72987 4.55919 8.82654 4.10305C11.9577 2.80068 12.6084 2.57444 13.0325 2.56697C13.1257 2.56533 13.3343 2.58845 13.4694 2.69806C13.5834 2.79062 13.6148 2.91565 13.6298 3.0034C13.6448 3.09116 13.6635 3.29106 13.6487 3.44726C13.479 5.23011 12.7448 9.55661 12.3713 11.5534C12.2132 12.3984 11.902 12.6817 11.6007 12.7094C10.946 12.7696 10.4488 12.2767 9.8146 11.861C8.82225 11.2105 8.26163 10.8055 7.29838 10.1708C6.18518 9.43719 6.90682 9.034 7.54123 8.37508C7.70726 8.20264 10.5922 5.5786 10.648 5.34056C10.655 5.31079 10.6615 5.19982 10.5955 5.14122C10.5296 5.08262 10.4323 5.10266 10.3621 5.1186C10.2626 5.14118 8.67727 6.189 5.60621 8.26205C5.15623 8.57104 4.74865 8.72159 4.38348 8.7137C3.9809 8.705 3.2065 8.48608 2.63082 8.29895C1.92472 8.06942 1.36352 7.94807 1.41239 7.55827C1.43784 7.35523 1.71744 7.14759 2.25118 6.93534Z",
                            fill: "#90A1B9",
                          }),
                        ],
                        -1
                      ),
                    ])
                ),
                _: 1,
              }),
            ]),
            n[10] ||
              (n[10] = V(
                "div",
                { class: "text-center text-sm text-[#45556C]" },
                [
                  V("span", null, "ساخته شده با 🤍"),
                  V(
                    "p",
                    null,
                    "استفاده از فونت وزیر متن به یاد صابر راستی کردار"
                  ),
                ],
                -1
              )),
          ])
        );
      };
    },
  });
function Vl(e) {
  const t = typeof e == "string" ? Number.parseInt(e, 10) : e;
  if (isNaN(t) || t <= 0) return "0m";
  const n = Math.floor(t / 60),
    s = Math.floor(t % 60);
  return n === 0 ? `${s}m` : `${n}h  ${s > 0 ? `${s}m` : ""}`;
}
const zu = { class: "w-full" },
  Fu = { class: "relative w-full" },
  Nu = ["src"],
  Hu = { class: "py-2 flex items-center justify-between" },
  ju = { class: "flex flex-col items-end space-y-2" },
  Vu = { class: "text-sm text-[#CAD5E2]" },
  ku = { class: "text-xs text-[#45556C] space-x-4" },
  qe = Xe({
    __name: "AppMovieCard",
    props: {
      imageUrl: { type: String, required: !0 },
      name: { type: String, required: !0 },
      year: { type: String, required: !0 },
      duration: { type: String, required: !0 },
    },
    setup(e) {
      return (t, n) => (
        me(),
        Se("div", zu, [
          V("div", Fu, [
            V(
              "img",
              {
                src: e.imageUrl,
                alt: "Movie poster",
                class: "w-full h-[214px] object-cover rounded-2xl",
              },
              null,
              8,
              Nu
            ),
          ]),
          V("div", Hu, [
            n[0] ||
              (n[0] = V(
                "button",
                {
                  class:
                    "flex items-center justify-center p-[5px] rounded-full border border-[#193CB8]",
                },
                [
                  V(
                    "svg",
                    {
                      width: "10",
                      height: "11",
                      viewBox: "0 0 10 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    [
                      V("path", {
                        d: "M4.9412 1.78857C4.15412 1.78857 3.38472 2.02197 2.73029 2.45925C2.07586 2.89652 1.5658 3.51804 1.2646 4.2452C0.963394 4.97237 0.884586 5.77252 1.03814 6.54447C1.19169 7.31642 1.5707 8.02551 2.12725 8.58205C2.6838 9.1386 3.39288 9.51761 4.16483 9.67116C4.93679 9.82472 5.73694 9.74591 6.4641 9.44471C7.19126 9.14351 7.81278 8.63344 8.25006 7.97901C8.68733 7.32458 8.92073 6.55518 8.92073 5.7681C8.91961 4.71301 8.49998 3.70145 7.75392 2.95538C7.00786 2.20932 5.99629 1.78969 4.9412 1.78857ZM4.9412 9.1354C4.27521 9.1354 3.62418 8.93791 3.07043 8.5679C2.51668 8.1979 2.08509 7.672 1.83023 7.05671C1.57536 6.44142 1.50868 5.76437 1.63861 5.11118C1.76854 4.45799 2.08924 3.85799 2.56016 3.38707C3.03109 2.91614 3.63108 2.59544 4.28427 2.46551C4.93746 2.33558 5.61451 2.40227 6.22981 2.65713C6.8451 2.91199 7.371 3.34359 7.741 3.89733C8.111 4.45108 8.30849 5.10211 8.30849 5.7681C8.30748 6.66085 7.95239 7.51675 7.32112 8.14802C6.68985 8.77929 5.83395 9.13438 4.9412 9.1354ZM6.7779 5.7681C6.7779 5.84929 6.74565 5.92715 6.68825 5.98456C6.63084 6.04197 6.55297 6.07422 6.47179 6.07422H5.24732V7.29869C5.24732 7.37988 5.21507 7.45774 5.15766 7.51515C5.10025 7.57256 5.02239 7.60481 4.9412 7.60481C4.86001 7.60481 4.78215 7.57256 4.72474 7.51515C4.66733 7.45774 4.63508 7.37988 4.63508 7.29869V6.07422H3.41061C3.32942 6.07422 3.25156 6.04197 3.19415 5.98456C3.13675 5.92715 3.10449 5.84929 3.10449 5.7681C3.10449 5.68691 3.13675 5.60905 3.19415 5.55164C3.25156 5.49424 3.32942 5.46198 3.41061 5.46198H4.63508V4.23751C4.63508 4.15633 4.66733 4.07846 4.72474 4.02106C4.78215 3.96365 4.86001 3.9314 4.9412 3.9314C5.02239 3.9314 5.10025 3.96365 5.15766 4.02106C5.21507 4.07846 5.24732 4.15633 5.24732 4.23751V5.46198H6.47179C6.55297 5.46198 6.63084 5.49424 6.68825 5.55164C6.74565 5.60905 6.7779 5.68691 6.7779 5.7681Z",
                        fill: "#BEDBFF",
                      }),
                    ]
                  ),
                ],
                -1
              )),
            V("div", ju, [
              V("h5", Vu, Ve(e.name), 1),
              V("div", ku, [
                V("span", null, Ve(e.year), 1),
                V("span", null, Ve(Re(Vl)(e.duration)), 1),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  Gu = { class: "flex items-center justify-between" },
  Wu = { class: "font-medium" },
  qu = { class: "text-sm text-[#BEDBFF]" },
  dr = Xe({
    __name: "AppRow",
    props: { title: {}, linkText: {}, path: {} },
    setup(e) {
      return (t, n) => {
        const s = Jn("router-link");
        return (
          me(),
          Se("div", Gu, [
            V("h4", Wu, Ve(t.title), 1),
            U(
              s,
              { to: t.path, class: "flex items-center gap-x-2" },
              {
                default: be(() => [
                  V("span", qu, Ve(t.linkText), 1),
                  n[0] ||
                    (n[0] = V(
                      "svg",
                      {
                        width: "15",
                        height: "16",
                        viewBox: "0 0 15 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      [
                        V("path", {
                          d: "M9.78022 12.1544C9.82288 12.1971 9.85672 12.2477 9.87981 12.3034C9.9029 12.3592 9.91479 12.4189 9.91479 12.4793C9.91479 12.5396 9.9029 12.5993 9.87981 12.6551C9.85672 12.7108 9.82288 12.7615 9.78022 12.8041C9.73756 12.8468 9.68691 12.8806 9.63117 12.9037C9.57543 12.9268 9.51569 12.9387 9.45535 12.9387C9.39502 12.9387 9.33528 12.9268 9.27954 12.9037C9.2238 12.8806 9.17315 12.8468 9.13049 12.8041L4.53872 8.21237C4.49603 8.16972 4.46216 8.11908 4.43905 8.06334C4.41595 8.00759 4.40405 7.94784 4.40405 7.8875C4.40405 7.82716 4.41595 7.7674 4.43905 7.71166C4.46216 7.65592 4.49603 7.60528 4.53872 7.56263L9.13049 2.97087C9.21665 2.88471 9.3335 2.8363 9.45535 2.8363C9.5772 2.8363 9.69406 2.88471 9.78022 2.97087C9.86638 3.05703 9.91479 3.17389 9.91479 3.29574C9.91479 3.41758 9.86638 3.53444 9.78022 3.6206L5.51275 7.8875L9.78022 12.1544Z",
                          fill: "#BEDBFF",
                        }),
                      ],
                      -1
                    )),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
          ])
        );
      };
    },
  }),
  Uu = { class: "my-5" },
  Ku = { class: "grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-7 my-5" },
  Yu = { class: "grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-7 my-5" },
  Xu = Xe({
    __name: "MoviesBox",
    setup(e) {
      return (t, n) => (
        me(),
        Se("section", Uu, [
          U(dr, {
            "link-text": "مشاهده همه",
            title: "جدیدترین فیلم‌ها",
            path: "/",
          }),
          V("div", Ku, [
            U(qe, {
              "image-url": "/dist/images/pic-2.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
            U(qe, {
              "image-url": "/dist/images/pic-3.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
            U(qe, {
              "image-url": "/dist/images/pic-4.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
            U(qe, {
              "image-url": "/dist/images/pic-5.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
            U(qe, {
              "image-url": "/dist/images/pic-6.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
            U(qe, {
              "image-url": "/dist/images/pic-7.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
          ]),
          U(dr, {
            "link-text": "مشاهده همه",
            title: "جدیدترین سریال ها",
            path: "/",
          }),
          V("div", Yu, [
            U(qe, {
              "image-url": "/dist/images/pic-2.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
            U(qe, {
              "image-url": "/dist/images/pic-3.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
            U(qe, {
              "image-url": "/dist/images/pic-4.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
            U(qe, {
              "image-url": "/dist/images/pic-5.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
            U(qe, {
              "image-url": "/dist/images/pic-6.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
            U(qe, {
              "image-url": "/dist/images/pic-7.jpg",
              name: "Riff Raff 2024",
              year: "2024",
              duration: "166",
            }),
          ]),
        ])
      );
    },
  }),
  Zu = {},
  Qu = { class: "relative flex items-center gap-x-4" };
function Ju(e, t) {
  return (
    me(),
    Se(
      "form",
      Qu,
      t[0] ||
        (t[0] = [
          fi(
            '<input type="text" placeholder="فیلم یا سریالی که دنبالشی رو به فارسی یا انگلیسی بنویس" class="w-[400px] text-[10px] placeholder:text-[#314158] outline-none h-[35px] rounded-full pr-8 bg-transparent border border-[#1D293D]"><span class="absolute right-2 top-2"><svg width="18" height="18" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3447 12.7568L10.6189 10.0298C11.4362 8.96482 11.8178 7.6288 11.6862 6.2928C11.5547 4.9568 10.9199 3.72085 9.91056 2.83569C8.90126 1.95052 7.59305 1.48242 6.25131 1.52633C4.90956 1.57024 3.63476 2.12288 2.68549 3.07215C1.73623 4.02141 1.18359 5.29622 1.13967 6.63796C1.09576 7.97971 1.56387 9.28792 2.44903 10.2972C3.3342 11.3065 4.57014 11.9413 5.90614 12.0729C7.24214 12.2044 8.57816 11.8229 9.64318 11.0056L12.3713 13.7342C12.4353 13.7983 12.5114 13.8491 12.5951 13.8838C12.6788 13.9185 12.7685 13.9363 12.8591 13.9363C12.9497 13.9363 13.0395 13.9185 13.1232 13.8838C13.2069 13.8491 13.2829 13.7983 13.347 13.7342C13.4111 13.6702 13.4619 13.5941 13.4966 13.5104C13.5313 13.4267 13.5491 13.337 13.5491 13.2464C13.5491 13.1558 13.5313 13.066 13.4966 12.9823C13.4619 12.8986 13.4111 12.8226 13.347 12.7585L13.3447 12.7568ZM2.52595 6.81561C2.52595 6.04367 2.75486 5.28906 3.18372 4.64722C3.61259 4.00537 4.22216 3.50511 4.93534 3.20971C5.64852 2.9143 6.43328 2.837 7.19039 2.9876C7.94749 3.1382 8.64294 3.50993 9.18879 4.05577C9.73463 4.60161 10.1064 5.29706 10.257 6.05417C10.4076 6.81128 10.3303 7.59604 10.0348 8.30922C9.73944 9.0224 9.23918 9.63196 8.59734 10.0608C7.95549 10.4897 7.20089 10.7186 6.42895 10.7186C5.39414 10.7175 4.40201 10.306 3.67029 9.57427C2.93856 8.84254 2.52701 7.85042 2.52595 6.81561Z" fill="#45556C"></path></svg></span><button class="rounded-full w-[35px] h-[35px] bg-[#BEDBFF] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3447 12.7568L10.6189 10.0298C11.4362 8.96482 11.8178 7.6288 11.6862 6.2928C11.5547 4.9568 10.9199 3.72085 9.91056 2.83569C8.90126 1.95052 7.59305 1.48242 6.25131 1.52633C4.90956 1.57024 3.63476 2.12288 2.68549 3.07215C1.73623 4.02141 1.18359 5.29622 1.13967 6.63796C1.09576 7.97971 1.56387 9.28792 2.44903 10.2972C3.3342 11.3065 4.57014 11.9413 5.90614 12.0729C7.24214 12.2044 8.57816 11.8229 9.64318 11.0056L12.3713 13.7342C12.4353 13.7983 12.5114 13.8491 12.5951 13.8838C12.6788 13.9185 12.7685 13.9363 12.8591 13.9363C12.9497 13.9363 13.0395 13.9185 13.1232 13.8838C13.2069 13.8491 13.2829 13.7983 13.347 13.7342C13.4111 13.6702 13.4619 13.5941 13.4966 13.5104C13.5313 13.4267 13.5491 13.337 13.5491 13.2464C13.5491 13.1558 13.5313 13.066 13.4966 12.9823C13.4619 12.8986 13.4111 12.8226 13.347 12.7585L13.3447 12.7568ZM2.52595 6.81561C2.52595 6.04367 2.75486 5.28906 3.18372 4.64722C3.61259 4.00537 4.22216 3.50511 4.93534 3.20971C5.64852 2.9143 6.43328 2.837 7.19039 2.9876C7.94749 3.1382 8.64294 3.50993 9.18879 4.05577C9.73463 4.60161 10.1064 5.29706 10.257 6.05417C10.4076 6.81128 10.3303 7.59604 10.0348 8.30922C9.73944 9.0224 9.23918 9.63196 8.59734 10.0608C7.95549 10.4897 7.20089 10.7186 6.42895 10.7186C5.39414 10.7175 4.40201 10.306 3.67029 9.57427C2.93856 8.84254 2.52701 7.85042 2.52595 6.81561Z" fill="#020618"></path></svg></button>',
            3
          ),
        ])
    )
  );
}
const ef = ns(Zu, [["render", Ju]]),
  tf = { class: "flex items-center justify-between" },
  nf = { class: "flex items-center gap-x-5" },
  sf = Xe({
    __name: "Navbar",
    setup(e) {
      return (t, n) => {
        const s = Jn("router-link");
        return (
          me(),
          Se("nav", tf, [
            V("div", nf, [
              U(
                s,
                { to: "/", class: "text-xs" },
                { default: be(() => n[0] || (n[0] = [pt(" خانه ")])), _: 1 }
              ),
              U(
                s,
                { to: "/", class: "text-xs" },
                { default: be(() => n[1] || (n[1] = [pt(" واچ لیست ")])), _: 1 }
              ),
              U(
                s,
                { to: "/", class: "text-xs" },
                {
                  default: be(() => n[2] || (n[2] = [pt(" توسعه دهندگان ")])),
                  _: 1,
                }
              ),
              U(
                s,
                { to: "/", class: "text-xs" },
                {
                  default: be(() => n[3] || (n[3] = [pt(" درباره ما ")])),
                  _: 1,
                }
              ),
            ]),
            U(ef),
            n[4] ||
              (n[4] = V(
                "img",
                {
                  src: jl,
                  alt: "free-movie",
                  class: "w-[78px] h-[29px] object-cover",
                },
                null,
                -1
              )),
          ])
        );
      };
    },
  }),
  rf = "/dist/imdb.png";
function pr(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function mi(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {});
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : pr(t[s]) &&
          pr(e[s]) &&
          Object.keys(t[s]).length > 0 &&
          mi(e[s], t[s]);
    });
}
const kl = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function lt() {
  const e = typeof document < "u" ? document : {};
  return mi(e, kl), e;
}
const lf = {
  document: kl,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function De() {
  const e = typeof window < "u" ? window : {};
  return mi(e, lf), e;
}
function of(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function af(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function js(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function Hn() {
  return Date.now();
}
function cf(e) {
  const t = De();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function uf(e, t) {
  t === void 0 && (t = "x");
  const n = De();
  let s, i, r;
  const l = cf(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = l.transform || l.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((o) => o.replace(",", "."))
            .join(", ")),
        (r = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((r =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = r.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = r.m41)
        : s.length === 16
        ? (i = parseFloat(s[12]))
        : (i = parseFloat(s[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = r.m42)
        : s.length === 16
        ? (i = parseFloat(s[13]))
        : (i = parseFloat(s[5]))),
    i || 0
  );
}
function Mn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function ff(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function ke() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (s != null && !ff(s)) {
      const i = Object.keys(Object(s)).filter((r) => t.indexOf(r) < 0);
      for (let r = 0, l = i.length; r < l; r += 1) {
        const o = i[r],
          a = Object.getOwnPropertyDescriptor(s, o);
        a !== void 0 &&
          a.enumerable &&
          (Mn(e[o]) && Mn(s[o])
            ? s[o].__swiper__
              ? (e[o] = s[o])
              : ke(e[o], s[o])
            : !Mn(e[o]) && Mn(s[o])
            ? ((e[o] = {}), s[o].__swiper__ ? (e[o] = s[o]) : ke(e[o], s[o]))
            : (e[o] = s[o]));
      }
    }
  }
  return e;
}
function On(e, t, n) {
  e.style.setProperty(t, n);
}
function Gl(e) {
  let { swiper: t, targetPosition: n, side: s } = e;
  const i = De(),
    r = -t.translate;
  let l = null,
    o;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > r ? "next" : "prev",
    c = (d, p) => (u === "next" && d >= p) || (u === "prev" && d <= p),
    f = () => {
      (o = new Date().getTime()), l === null && (l = o);
      const d = Math.max(Math.min((o - l) / a, 1), 0),
        p = 0.5 - Math.cos(d * Math.PI) / 2;
      let v = r + p * (n - r);
      if ((c(v, n) && (v = n), t.wrapperEl.scrollTo({ [s]: v }), c(v, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [s]: v });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(f);
    };
  f();
}
function rt(e, t) {
  t === void 0 && (t = "");
  const n = De(),
    s = [...e.children];
  return (
    n.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      s.push(...e.assignedElements()),
    t ? s.filter((i) => i.matches(t)) : s
  );
}
function df(e, t) {
  const n = [t];
  for (; n.length > 0; ) {
    const s = n.shift();
    if (e === s) return !0;
    n.push(
      ...s.children,
      ...(s.shadowRoot ? s.shadowRoot.children : []),
      ...(s.assignedElements ? s.assignedElements() : [])
    );
  }
}
function pf(e, t) {
  const n = De();
  let s = t.contains(e);
  return (
    !s &&
      n.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      ((s = [...t.assignedElements()].includes(e)), s || (s = df(e, t))),
    s
  );
}
function jn(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Vn(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : of(t))), n;
}
function hf(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const s = e.previousElementSibling;
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s);
  }
  return n;
}
function gf(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const s = e.nextElementSibling;
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s);
  }
  return n;
}
function Ct(e, t) {
  return De().getComputedStyle(e, null).getPropertyValue(t);
}
function kn(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Wl(e, t) {
  const n = [];
  let s = e.parentElement;
  for (; s; ) t ? s.matches(t) && n.push(s) : n.push(s), (s = s.parentElement);
  return n;
}
function Vs(e, t, n) {
  const s = De();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          s
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          s
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
function xe(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let ws;
function mf() {
  const e = De(),
    t = lt();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function ql() {
  return ws || (ws = mf()), ws;
}
let ys;
function vf(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = ql(),
    s = De(),
    i = s.navigator.platform,
    r = t || s.navigator.userAgent,
    l = { ios: !1, android: !1 },
    o = s.screen.width,
    a = s.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = r.match(/(iPad).*OS\s([\d_]+)/);
  const f = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = i === "Win32";
  let v = i === "MacIntel";
  const y = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      v &&
      n.touch &&
      y.indexOf(`${o}x${a}`) >= 0 &&
      ((c = r.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (v = !1)),
    u && !p && ((l.os = "android"), (l.android = !0)),
    (c || d || f) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function Ul(e) {
  return e === void 0 && (e = {}), ys || (ys = vf(e)), ys;
}
let bs;
function wf() {
  const e = De(),
    t = Ul();
  let n = !1;
  function s() {
    const o = e.navigator.userAgent.toLowerCase();
    return (
      o.indexOf("safari") >= 0 &&
      o.indexOf("chrome") < 0 &&
      o.indexOf("android") < 0
    );
  }
  if (s()) {
    const o = String(e.navigator.userAgent);
    if (o.includes("Version/")) {
      const [a, u] = o
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      n = a < 16 || (a === 16 && u < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    r = s(),
    l = r || (i && t.ios);
  return {
    isSafari: n || r,
    needPerspectiveFix: n,
    need3dFix: l,
    isWebView: i,
  };
}
function Kl() {
  return bs || (bs = wf()), bs;
}
function yf(e) {
  let { swiper: t, on: n, emit: s } = e;
  const i = De();
  let r = null,
    l = null;
  const o = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((r = new ResizeObserver((f) => {
          l = i.requestAnimationFrame(() => {
            const { width: d, height: p } = t;
            let v = d,
              y = p;
            f.forEach((_) => {
              let { contentBoxSize: x, contentRect: g, target: w } = _;
              (w && w !== t.el) ||
                ((v = g ? g.width : (x[0] || x).inlineSize),
                (y = g ? g.height : (x[0] || x).blockSize));
            }),
              (v !== d || y !== p) && o();
          });
        })),
        r.observe(t.el));
    },
    u = () => {
      l && i.cancelAnimationFrame(l),
        r && r.unobserve && t.el && (r.unobserve(t.el), (r = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", o),
        i.removeEventListener("orientationchange", c);
    });
}
function bf(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e;
  const r = [],
    l = De(),
    o = function (c, f) {
      f === void 0 && (f = {});
      const d = l.MutationObserver || l.WebkitMutationObserver,
        p = new d((v) => {
          if (t.__preventObserver__) return;
          if (v.length === 1) {
            i("observerUpdate", v[0]);
            return;
          }
          const y = function () {
            i("observerUpdate", v[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(y)
            : l.setTimeout(y, 0);
        });
      p.observe(c, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: t.isElement || (typeof f.childList > "u" ? !0 : f).childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }),
        r.push(p);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = Wl(t.hostEl);
          for (let f = 0; f < c.length; f += 1) o(c[f]);
        }
        o(t.hostEl, { childList: t.params.observeSlideChildren }),
          o(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      r.forEach((c) => {
        c.disconnect();
      }),
        r.splice(0, r.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", a),
    s("destroy", u);
}
var xf = {
  on(e, t, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((r) => {
        s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][i](t);
      }),
      s
    );
  },
  once(e, t, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    function i() {
      s.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
        l[o] = arguments[o];
      t.apply(s, l);
    }
    return (i.__emitterProxy = t), s.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const s = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((s) => {
          typeof t > "u"
            ? (n.eventsListeners[s] = [])
            : n.eventsListeners[s] &&
              n.eventsListeners[s].forEach((i, r) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[s].splice(r, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, s;
    for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++)
      r[l] = arguments[l];
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((t = r[0]), (n = r.slice(1, r.length)), (s = e))
        : ((t = r[0].events), (n = r[0].data), (s = r[0].context || e)),
      n.unshift(s),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(s, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((u) => {
              u.apply(s, n);
            });
      }),
      e
    );
  },
};
function Cf() {
  const e = this;
  let t, n;
  const s = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = s.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = s.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Ct(s, "padding-left") || 0, 10) -
        parseInt(Ct(s, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Ct(s, "padding-top") || 0, 10) -
        parseInt(Ct(s, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Sf() {
  const e = this;
  function t(M, $) {
    return parseFloat(M.getPropertyValue(e.getDirectionLabel($)) || 0);
  }
  const n = e.params,
    { wrapperEl: s, slidesEl: i, size: r, rtlTranslate: l, wrongRTL: o } = e,
    a = e.virtual && n.virtual.enabled,
    u = a ? e.virtual.slides.length : e.slides.length,
    c = rt(i, `.${e.params.slideClass}, swiper-slide`),
    f = a ? e.virtual.slides.length : c.length;
  let d = [];
  const p = [],
    v = [];
  let y = n.slidesOffsetBefore;
  typeof y == "function" && (y = n.slidesOffsetBefore.call(e));
  let _ = n.slidesOffsetAfter;
  typeof _ == "function" && (_ = n.slidesOffsetAfter.call(e));
  const x = e.snapGrid.length,
    g = e.slidesGrid.length;
  let w = n.spaceBetween,
    b = -y,
    E = 0,
    A = 0;
  if (typeof r > "u") return;
  typeof w == "string" && w.indexOf("%") >= 0
    ? (w = (parseFloat(w.replace("%", "")) / 100) * r)
    : typeof w == "string" && (w = parseFloat(w)),
    (e.virtualSize = -w),
    c.forEach((M) => {
      l ? (M.style.marginLeft = "") : (M.style.marginRight = ""),
        (M.style.marginBottom = ""),
        (M.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (On(s, "--swiper-centered-offset-before", ""),
      On(s, "--swiper-centered-offset-after", ""));
  const z = n.grid && n.grid.rows > 1 && e.grid;
  z ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let D;
  const P =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (M) => typeof n.breakpoints[M].slidesPerView < "u"
    ).length > 0;
  for (let M = 0; M < f; M += 1) {
    D = 0;
    let $;
    if (
      (c[M] && ($ = c[M]),
      z && e.grid.updateSlide(M, $, c),
      !(c[M] && Ct($, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        P && (c[M].style[e.getDirectionLabel("width")] = "");
        const K = getComputedStyle($),
          Y = $.style.transform,
          ne = $.style.webkitTransform;
        if (
          (Y && ($.style.transform = "none"),
          ne && ($.style.webkitTransform = "none"),
          n.roundLengths)
        )
          D = e.isHorizontal() ? Vs($, "width", !0) : Vs($, "height", !0);
        else {
          const se = t(K, "width"),
            G = t(K, "padding-left"),
            Z = t(K, "padding-right"),
            F = t(K, "margin-left"),
            oe = t(K, "margin-right"),
            pe = K.getPropertyValue("box-sizing");
          if (pe && pe === "border-box") D = se + F + oe;
          else {
            const { clientWidth: ye, offsetWidth: we } = $;
            D = se + G + Z + F + oe + (we - ye);
          }
        }
        Y && ($.style.transform = Y),
          ne && ($.style.webkitTransform = ne),
          n.roundLengths && (D = Math.floor(D));
      } else
        (D = (r - (n.slidesPerView - 1) * w) / n.slidesPerView),
          n.roundLengths && (D = Math.floor(D)),
          c[M] && (c[M].style[e.getDirectionLabel("width")] = `${D}px`);
      c[M] && (c[M].swiperSlideSize = D),
        v.push(D),
        n.centeredSlides
          ? ((b = b + D / 2 + E / 2 + w),
            E === 0 && M !== 0 && (b = b - r / 2 - w),
            M === 0 && (b = b - r / 2 - w),
            Math.abs(b) < 1 / 1e3 && (b = 0),
            n.roundLengths && (b = Math.floor(b)),
            A % n.slidesPerGroup === 0 && d.push(b),
            p.push(b))
          : (n.roundLengths && (b = Math.floor(b)),
            (A - Math.min(e.params.slidesPerGroupSkip, A)) %
              e.params.slidesPerGroup ===
              0 && d.push(b),
            p.push(b),
            (b = b + D + w)),
        (e.virtualSize += D + w),
        (E = D),
        (A += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, r) + _),
    l &&
      o &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (s.style.width = `${e.virtualSize + w}px`),
    n.setWrapperSize &&
      (s.style[e.getDirectionLabel("width")] = `${e.virtualSize + w}px`),
    z && e.grid.updateWrapperSize(D, d),
    !n.centeredSlides)
  ) {
    const M = [];
    for (let $ = 0; $ < d.length; $ += 1) {
      let K = d[$];
      n.roundLengths && (K = Math.floor(K)),
        d[$] <= e.virtualSize - r && M.push(K);
    }
    (d = M),
      Math.floor(e.virtualSize - r) - Math.floor(d[d.length - 1]) > 1 &&
        d.push(e.virtualSize - r);
  }
  if (a && n.loop) {
    const M = v[0] + w;
    if (n.slidesPerGroup > 1) {
      const $ = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        K = M * n.slidesPerGroup;
      for (let Y = 0; Y < $; Y += 1) d.push(d[d.length - 1] + K);
    }
    for (let $ = 0; $ < e.virtual.slidesBefore + e.virtual.slidesAfter; $ += 1)
      n.slidesPerGroup === 1 && d.push(d[d.length - 1] + M),
        p.push(p[p.length - 1] + M),
        (e.virtualSize += M);
  }
  if ((d.length === 0 && (d = [0]), w !== 0)) {
    const M =
      e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter(($, K) =>
      !n.cssMode || n.loop ? !0 : K !== c.length - 1
    ).forEach(($) => {
      $.style[M] = `${w}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let M = 0;
    v.forEach((K) => {
      M += K + (w || 0);
    }),
      (M -= w);
    const $ = M > r ? M - r : 0;
    d = d.map((K) => (K <= 0 ? -y : K > $ ? $ + _ : K));
  }
  if (n.centerInsufficientSlides) {
    let M = 0;
    v.forEach((K) => {
      M += K + (w || 0);
    }),
      (M -= w);
    const $ = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (M + $ < r) {
      const K = (r - M - $) / 2;
      d.forEach((Y, ne) => {
        d[ne] = Y - K;
      }),
        p.forEach((Y, ne) => {
          p[ne] = Y + K;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: d,
      slidesGrid: p,
      slidesSizesGrid: v,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    On(s, "--swiper-centered-offset-before", `${-d[0]}px`),
      On(
        s,
        "--swiper-centered-offset-after",
        `${e.size / 2 - v[v.length - 1] / 2}px`
      );
    const M = -e.snapGrid[0],
      $ = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((K) => K + M)),
      (e.slidesGrid = e.slidesGrid.map((K) => K + $));
  }
  if (
    (f !== u && e.emit("slidesLengthChange"),
    d.length !== x &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    p.length !== g && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const M = `${n.containerModifierClass}backface-hidden`,
      $ = e.el.classList.contains(M);
    f <= n.maxBackfaceHiddenSlides
      ? $ || e.el.classList.add(M)
      : $ && e.el.classList.remove(M);
  }
}
function Ef(e) {
  const t = this,
    n = [],
    s = t.virtual && t.params.virtual.enabled;
  let i = 0,
    r;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const l = (o) => (s ? t.slides[t.getSlideIndexByData(o)] : t.slides[o]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((o) => {
        n.push(o);
      });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const o = t.activeIndex + r;
        if (o > t.slides.length && !s) break;
        n.push(l(o));
      }
  else n.push(l(t.activeIndex));
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < "u") {
      const o = n[r].offsetHeight;
      i = o > i ? o : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function _f() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < t.length; s += 1)
    t[s].swiperSlideOffset =
      (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const hr = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function Tf(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: s, rtlTranslate: i, snapGrid: r } = t;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let l = -e;
  i && (l = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let o = n.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0
    ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
    : typeof o == "string" && (o = parseFloat(o));
  for (let a = 0; a < s.length; a += 1) {
    const u = s[a];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= s[0].swiperSlideOffset);
    const f =
        (l + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + o),
      d =
        (l - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + o),
      p = -(l - c),
      v = p + t.slidesSizesGrid[a],
      y = p >= 0 && p <= t.size - t.slidesSizesGrid[a],
      _ =
        (p >= 0 && p < t.size - 1) ||
        (v > 1 && v <= t.size) ||
        (p <= 0 && v >= t.size);
    _ && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(a)),
      hr(u, _, n.slideVisibleClass),
      hr(u, y, n.slideFullyVisibleClass),
      (u.progress = i ? -f : f),
      (u.originalProgress = i ? -d : d);
  }
}
function Pf(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    s = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: r, isEnd: l, progressLoop: o } = t;
  const a = r,
    u = l;
  if (s === 0) (i = 0), (r = !0), (l = !0);
  else {
    i = (e - t.minTranslate()) / s;
    const c = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1;
    (r = c || i <= 0), (l = f || i >= 1), c && (i = 0), f && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      d = t.slidesGrid[c],
      p = t.slidesGrid[f],
      v = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e);
    y >= d ? (o = (y - d) / v) : (o = (y + v - p) / v), o > 1 && (o -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: o, isBeginning: r, isEnd: l }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    r && !a && t.emit("reachBeginning toEdge"),
    l && !u && t.emit("reachEnd toEdge"),
    ((a && !r) || (u && !l)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const xs = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function Mf() {
  const e = this,
    { slides: t, params: n, slidesEl: s, activeIndex: i } = e,
    r = e.virtual && n.virtual.enabled,
    l = e.grid && n.grid && n.grid.rows > 1,
    o = (f) => rt(s, `.${n.slideClass}${f}, swiper-slide${f}`)[0];
  let a, u, c;
  if (r)
    if (n.loop) {
      let f = i - e.virtual.slidesBefore;
      f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        (a = o(`[data-swiper-slide-index="${f}"]`));
    } else a = o(`[data-swiper-slide-index="${i}"]`);
  else
    l
      ? ((a = t.find((f) => f.column === i)),
        (c = t.find((f) => f.column === i + 1)),
        (u = t.find((f) => f.column === i - 1)))
      : (a = t[i]);
  a &&
    (l ||
      ((c = gf(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = hf(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((f) => {
      xs(f, f === a, n.slideActiveClass),
        xs(f, f === c, n.slideNextClass),
        xs(f, f === u, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Rn = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      s = t.closest(n());
    if (s) {
      let i = s.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (s.shadowRoot
          ? (i = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((i = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Cs = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  ks = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const s =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const l = i,
        o = [l - t];
      o.push(...Array.from({ length: t }).map((a, u) => l + s + u)),
        e.slides.forEach((a, u) => {
          o.includes(a.column) && Cs(e, u);
        });
      return;
    }
    const r = i + s - 1;
    if (e.params.rewind || e.params.loop)
      for (let l = i - t; l <= r + t; l += 1) {
        const o = ((l % n) + n) % n;
        (o < i || o > r) && Cs(e, o);
      }
    else
      for (let l = Math.max(i - t, 0); l <= Math.min(r + t, n - 1); l += 1)
        l !== i && (l > r || l < i) && Cs(e, l);
  };
function Of(e) {
  const { slidesGrid: t, params: n } = e,
    s = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let r = 0; r < t.length; r += 1)
    typeof t[r + 1] < "u"
      ? s >= t[r] && s < t[r + 1] - (t[r + 1] - t[r]) / 2
        ? (i = r)
        : s >= t[r] && s < t[r + 1] && (i = r + 1)
      : s >= t[r] && (i = r);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function Lf(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: i, activeIndex: r, realIndex: l, snapIndex: o } = t;
  let a = e,
    u;
  const c = (p) => {
    let v = p - t.virtual.slidesBefore;
    return (
      v < 0 && (v = t.virtual.slides.length + v),
      v >= t.virtual.slides.length && (v -= t.virtual.slides.length),
      v
    );
  };
  if ((typeof a > "u" && (a = Of(t)), s.indexOf(n) >= 0)) u = s.indexOf(n);
  else {
    const p = Math.min(i.slidesPerGroupSkip, a);
    u = p + Math.floor((a - p) / i.slidesPerGroup);
  }
  if ((u >= s.length && (u = s.length - 1), a === r && !t.params.loop)) {
    u !== o && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (a === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(a);
    return;
  }
  const f = t.grid && i.grid && i.grid.rows > 1;
  let d;
  if (t.virtual && i.virtual.enabled && i.loop) d = c(a);
  else if (f) {
    const p = t.slides.find((y) => y.column === a);
    let v = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(v) && (v = Math.max(t.slides.indexOf(p), 0)),
      (d = Math.floor(v / i.grid.rows));
  } else if (t.slides[a]) {
    const p = t.slides[a].getAttribute("data-swiper-slide-index");
    p ? (d = parseInt(p, 10)) : (d = a);
  } else d = a;
  Object.assign(t, {
    previousSnapIndex: o,
    snapIndex: u,
    previousRealIndex: l,
    realIndex: d,
    previousIndex: r,
    activeIndex: a,
  }),
    t.initialized && ks(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (l !== d && t.emit("realIndexChange"), t.emit("slideChange"));
}
function If(e, t) {
  const n = this,
    s = n.params;
  let i = e.closest(`.${s.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((o) => {
      !i && o.matches && o.matches(`.${s.slideClass}, swiper-slide`) && (i = o);
    });
  let r = !1,
    l;
  if (i) {
    for (let o = 0; o < n.slides.length; o += 1)
      if (n.slides[o] === i) {
        (r = !0), (l = o);
        break;
      }
  }
  if (i && r)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = l);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  s.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var Af = {
  updateSize: Cf,
  updateSlides: Sf,
  updateAutoHeight: Ef,
  updateSlidesOffset: _f,
  updateSlidesProgress: Tf,
  updateProgress: Pf,
  updateSlidesClasses: Mf,
  updateActiveIndex: Lf,
  updateClickedSlide: If,
};
function Rf(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: s, translate: i, wrapperEl: r } = t;
  if (n.virtualTranslate) return s ? -i : i;
  if (n.cssMode) return i;
  let l = uf(r, e);
  return (l += t.cssOverflowAdjustment()), s && (l = -l), l || 0;
}
function Bf(e, t) {
  const n = this,
    { rtlTranslate: s, params: i, wrapperEl: r, progress: l } = n;
  let o = 0,
    a = 0;
  const u = 0;
  n.isHorizontal() ? (o = s ? -e : e) : (a = e),
    i.roundLengths && ((o = Math.floor(o)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? o : a),
    i.cssMode
      ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -o
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (o -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${o}px, ${a}px, ${u}px)`));
  let c;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (c = 0) : (c = (e - n.minTranslate()) / f),
    c !== l && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function Df() {
  return -this.snapGrid[0];
}
function $f() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function zf(e, t, n, s, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0);
  const r = this,
    { params: l, wrapperEl: o } = r;
  if (r.animating && l.preventInteractionOnTransition) return !1;
  const a = r.minTranslate(),
    u = r.maxTranslate();
  let c;
  if (
    (s && e > a ? (c = a) : s && e < u ? (c = u) : (c = e),
    r.updateProgress(c),
    l.cssMode)
  ) {
    const f = r.isHorizontal();
    if (t === 0) o[f ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!r.support.smoothScroll)
        return (
          Gl({ swiper: r, targetPosition: -c, side: f ? "left" : "top" }), !0
        );
      o.scrollTo({ [f ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(c),
        n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
      : (r.setTransition(t),
        r.setTranslate(c),
        n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (d) {
              !r ||
                r.destroyed ||
                (d.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  (r.animating = !1),
                  n && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Ff = {
  getTranslate: Rf,
  setTranslate: Bf,
  minTranslate: Df,
  maxTranslate: $f,
  translateTo: zf,
};
function Nf(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Yl(e) {
  let { swiper: t, runCallbacks: n, direction: s, step: i } = e;
  const { activeIndex: r, previousIndex: l } = t;
  let o = s;
  if (
    (o || (r > l ? (o = "next") : r < l ? (o = "prev") : (o = "reset")),
    t.emit(`transition${i}`),
    n && r !== l)
  ) {
    if (o === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      o === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function Hf(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: s } = n;
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    Yl({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function jf(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: s } = n;
  (n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      Yl({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var Vf = { setTransition: Nf, transitionStart: Hf, transitionEnd: jf };
function kf(e, t, n, s, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const r = this;
  let l = e;
  l < 0 && (l = 0);
  const {
    params: o,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: f,
    rtlTranslate: d,
    wrapperEl: p,
    enabled: v,
  } = r;
  if (
    (!v && !s && !i) ||
    r.destroyed ||
    (r.animating && o.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = r.params.speed);
  const y = Math.min(r.params.slidesPerGroupSkip, l);
  let _ = y + Math.floor((l - y) / r.params.slidesPerGroup);
  _ >= a.length && (_ = a.length - 1);
  const x = -a[_];
  if (o.normalizeSlideIndex)
    for (let z = 0; z < u.length; z += 1) {
      const D = -Math.floor(x * 100),
        P = Math.floor(u[z] * 100),
        M = Math.floor(u[z + 1] * 100);
      typeof u[z + 1] < "u"
        ? D >= P && D < M - (M - P) / 2
          ? (l = z)
          : D >= P && D < M && (l = z + 1)
        : D >= P && (l = z);
    }
  if (
    r.initialized &&
    l !== f &&
    ((!r.allowSlideNext &&
      (d
        ? x > r.translate && x > r.minTranslate()
        : x < r.translate && x < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        x > r.translate &&
        x > r.maxTranslate() &&
        (f || 0) !== l))
  )
    return !1;
  l !== (c || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(x);
  let g;
  l > f ? (g = "next") : l < f ? (g = "prev") : (g = "reset");
  const w = r.virtual && r.params.virtual.enabled;
  if (!(w && i) && ((d && -x === r.translate) || (!d && x === r.translate)))
    return (
      r.updateActiveIndex(l),
      o.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      o.effect !== "slide" && r.setTranslate(x),
      g !== "reset" && (r.transitionStart(n, g), r.transitionEnd(n, g)),
      !1
    );
  if (o.cssMode) {
    const z = r.isHorizontal(),
      D = d ? x : -x;
    if (t === 0)
      w &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        w && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              p[z ? "scrollLeft" : "scrollTop"] = D;
            }))
          : (p[z ? "scrollLeft" : "scrollTop"] = D),
        w &&
          requestAnimationFrame(() => {
            (r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1);
          });
    else {
      if (!r.support.smoothScroll)
        return (
          Gl({ swiper: r, targetPosition: D, side: z ? "left" : "top" }), !0
        );
      p.scrollTo({ [z ? "left" : "top"]: D, behavior: "smooth" });
    }
    return !0;
  }
  const A = Kl().isSafari;
  return (
    w && !i && A && r.isElement && r.virtual.update(!1, !1, l),
    r.setTransition(t),
    r.setTranslate(x),
    r.updateActiveIndex(l),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, s),
    r.transitionStart(n, g),
    t === 0
      ? r.transitionEnd(n, g)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (D) {
            !r ||
              r.destroyed ||
              (D.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(n, g)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Gf(e, t, n, s) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const r = i.grid && i.params.grid && i.params.grid.rows > 1;
  let l = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) l = l + i.virtual.slidesBefore;
    else {
      let o;
      if (r) {
        const d = l * i.params.grid.rows;
        o = i.slides.find(
          (p) => p.getAttribute("data-swiper-slide-index") * 1 === d
        ).column;
      } else o = i.getSlideIndexByData(l);
      const a = r
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params;
      let c = i.params.slidesPerView;
      c === "auto"
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let f = a - o < c;
      if (
        (u && (f = f || o < Math.ceil(c / 2)),
        s && u && i.params.slidesPerView !== "auto" && !r && (f = !1),
        f)
      ) {
        const d = u
          ? o < i.activeIndex
            ? "prev"
            : "next"
          : o - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: d,
          slideTo: !0,
          activeSlideIndex: d === "next" ? o + 1 : o - a + 1,
          slideRealIndex: d === "next" ? i.realIndex : void 0,
        });
      }
      if (r) {
        const d = l * i.params.grid.rows;
        l = i.slides.find(
          (p) => p.getAttribute("data-swiper-slide-index") * 1 === d
        ).column;
      } else l = i.getSlideIndexByData(l);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(l, t, n, s);
    }),
    i
  );
}
function Wf(e, t, n) {
  t === void 0 && (t = !0);
  const s = this,
    { enabled: i, params: r, animating: l } = s;
  if (!i || s.destroyed) return s;
  typeof e > "u" && (e = s.params.speed);
  let o = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : o,
    u = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (l && !u && r.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + a, e, t, n);
        }),
        !0
      );
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, e, t, n)
    : s.slideTo(s.activeIndex + a, e, t, n);
}
function qf(e, t, n) {
  t === void 0 && (t = !0);
  const s = this,
    {
      params: i,
      snapGrid: r,
      slidesGrid: l,
      rtlTranslate: o,
      enabled: a,
      animating: u,
    } = s;
  if (!a || s.destroyed) return s;
  typeof e > "u" && (e = s.params.speed);
  const c = s.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  const f = o ? s.translate : -s.translate;
  function d(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
  }
  const p = d(f),
    v = r.map((g) => d(g)),
    y = i.freeMode && i.freeMode.enabled;
  let _ = r[v.indexOf(p) - 1];
  if (typeof _ > "u" && (i.cssMode || y)) {
    let g;
    r.forEach((w, b) => {
      p >= w && (g = b);
    }),
      typeof g < "u" && (_ = y ? r[g] : r[g > 0 ? g - 1 : g]);
  }
  let x = 0;
  if (
    (typeof _ < "u" &&
      ((x = l.indexOf(_)),
      x < 0 && (x = s.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((x = x - s.slidesPerViewDynamic("previous", !0) + 1),
        (x = Math.max(x, 0)))),
    i.rewind && s.isBeginning)
  ) {
    const g =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(g, e, t, n);
  } else if (i.loop && s.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(x, e, t, n);
      }),
      !0
    );
  return s.slideTo(x, e, t, n);
}
function Uf(e, t, n) {
  t === void 0 && (t = !0);
  const s = this;
  if (!s.destroyed)
    return (
      typeof e > "u" && (e = s.params.speed), s.slideTo(s.activeIndex, e, t, n)
    );
}
function Kf(e, t, n, s) {
  t === void 0 && (t = !0), s === void 0 && (s = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let r = i.activeIndex;
  const l = Math.min(i.params.slidesPerGroupSkip, r),
    o = l + Math.floor((r - l) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[o]) {
    const u = i.snapGrid[o],
      c = i.snapGrid[o + 1];
    a - u > (c - u) * s && (r += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[o - 1],
      c = i.snapGrid[o];
    a - u <= (c - u) * s && (r -= i.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, i.slidesGrid.length - 1)),
    i.slideTo(r, e, t, n)
  );
}
function Yf() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    r;
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - s / 2 ||
          i > e.slides.length - e.loopedSlides + s / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              rt(n, `${l}[data-swiper-slide-index="${r}"]`)[0]
            )),
            js(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - s
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            rt(n, `${l}[data-swiper-slide-index="${r}"]`)[0]
          )),
          js(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var Xf = {
  slideTo: kf,
  slideToLoop: Gf,
  slideNext: Wf,
  slidePrev: qf,
  slideReset: Uf,
  slideToClosest: Kf,
  slideToClickedSlide: Yf,
};
function Zf(e, t) {
  const n = this,
    { params: s, slidesEl: i } = n;
  if (!s.loop || (n.virtual && n.params.virtual.enabled)) return;
  const r = () => {
      rt(i, `.${s.slideClass}, swiper-slide`).forEach((d, p) => {
        d.setAttribute("data-swiper-slide-index", p);
      });
    },
    l = n.grid && s.grid && s.grid.rows > 1,
    o = s.slidesPerGroup * (l ? s.grid.rows : 1),
    a = n.slides.length % o !== 0,
    u = l && n.slides.length % s.grid.rows !== 0,
    c = (f) => {
      for (let d = 0; d < f; d += 1) {
        const p = n.isElement
          ? Vn("swiper-slide", [s.slideBlankClass])
          : Vn("div", [s.slideClass, s.slideBlankClass]);
        n.slidesEl.append(p);
      }
    };
  if (a) {
    if (s.loopAddBlankSlides) {
      const f = o - (n.slides.length % o);
      c(f), n.recalcSlides(), n.updateSlides();
    } else
      jn(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    r();
  } else if (u) {
    if (s.loopAddBlankSlides) {
      const f = s.grid.rows - (n.slides.length % s.grid.rows);
      c(f), n.recalcSlides(), n.updateSlides();
    } else
      jn(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    r();
  } else r();
  n.loopFix({
    slideRealIndex: e,
    direction: s.centeredSlides ? void 0 : "next",
    initial: t,
  });
}
function Qf(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: s,
    setTranslate: i,
    activeSlideIndex: r,
    initial: l,
    byController: o,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const u = this;
  if (!u.params.loop) return;
  u.emit("beforeLoopFix");
  const {
      slides: c,
      allowSlidePrev: f,
      allowSlideNext: d,
      slidesEl: p,
      params: v,
    } = u,
    { centeredSlides: y, initialSlide: _ } = v;
  if (
    ((u.allowSlidePrev = !0),
    (u.allowSlideNext = !0),
    u.virtual && v.virtual.enabled)
  ) {
    n &&
      (!v.centeredSlides && u.snapIndex === 0
        ? u.slideTo(u.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && u.snapIndex < v.slidesPerView
        ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0)
        : u.snapIndex === u.snapGrid.length - 1 &&
          u.slideTo(u.virtual.slidesBefore, 0, !1, !0)),
      (u.allowSlidePrev = f),
      (u.allowSlideNext = d),
      u.emit("loopFix");
    return;
  }
  let x = v.slidesPerView;
  x === "auto"
    ? (x = u.slidesPerViewDynamic())
    : ((x = Math.ceil(parseFloat(v.slidesPerView, 10))),
      y && x % 2 === 0 && (x = x + 1));
  const g = v.slidesPerGroupAuto ? x : v.slidesPerGroup;
  let w = g;
  w % g !== 0 && (w += g - (w % g)),
    (w += v.loopAdditionalSlides),
    (u.loopedSlides = w);
  const b = u.grid && v.grid && v.grid.rows > 1;
  c.length < x + w || (u.params.effect === "cards" && c.length < x + w * 2)
    ? jn(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : b &&
      v.grid.fill === "row" &&
      jn(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const E = [],
    A = [],
    z = b ? Math.ceil(c.length / v.grid.rows) : c.length,
    D = l && z - _ < x && !y;
  let P = D ? _ : u.activeIndex;
  typeof r > "u"
    ? (r = u.getSlideIndex(
        c.find((G) => G.classList.contains(v.slideActiveClass))
      ))
    : (P = r);
  const M = s === "next" || !s,
    $ = s === "prev" || !s;
  let K = 0,
    Y = 0;
  const se = (b ? c[r].column : r) + (y && typeof i > "u" ? -x / 2 + 0.5 : 0);
  if (se < w) {
    K = Math.max(w - se, g);
    for (let G = 0; G < w - se; G += 1) {
      const Z = G - Math.floor(G / z) * z;
      if (b) {
        const F = z - Z - 1;
        for (let oe = c.length - 1; oe >= 0; oe -= 1)
          c[oe].column === F && E.push(oe);
      } else E.push(z - Z - 1);
    }
  } else if (se + x > z - w) {
    (Y = Math.max(se - (z - w * 2), g)), D && (Y = Math.max(Y, x - z + _ + 1));
    for (let G = 0; G < Y; G += 1) {
      const Z = G - Math.floor(G / z) * z;
      b
        ? c.forEach((F, oe) => {
            F.column === Z && A.push(oe);
          })
        : A.push(Z);
    }
  }
  if (
    ((u.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      u.__preventObserver__ = !1;
    }),
    u.params.effect === "cards" &&
      c.length < x + w * 2 &&
      (A.includes(r) && A.splice(A.indexOf(r), 1),
      E.includes(r) && E.splice(E.indexOf(r), 1)),
    $ &&
      E.forEach((G) => {
        (c[G].swiperLoopMoveDOM = !0),
          p.prepend(c[G]),
          (c[G].swiperLoopMoveDOM = !1);
      }),
    M &&
      A.forEach((G) => {
        (c[G].swiperLoopMoveDOM = !0),
          p.append(c[G]),
          (c[G].swiperLoopMoveDOM = !1);
      }),
    u.recalcSlides(),
    v.slidesPerView === "auto"
      ? u.updateSlides()
      : b &&
        ((E.length > 0 && $) || (A.length > 0 && M)) &&
        u.slides.forEach((G, Z) => {
          u.grid.updateSlide(Z, G, u.slides);
        }),
    v.watchSlidesProgress && u.updateSlidesOffset(),
    n)
  ) {
    if (E.length > 0 && $) {
      if (typeof t > "u") {
        const G = u.slidesGrid[P],
          F = u.slidesGrid[P + K] - G;
        a
          ? u.setTranslate(u.translate - F)
          : (u.slideTo(P + Math.ceil(K), 0, !1, !0),
            i &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - F),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - F)));
      } else if (i) {
        const G = b ? E.length / v.grid.rows : E.length;
        u.slideTo(u.activeIndex + G, 0, !1, !0),
          (u.touchEventsData.currentTranslate = u.translate);
      }
    } else if (A.length > 0 && M)
      if (typeof t > "u") {
        const G = u.slidesGrid[P],
          F = u.slidesGrid[P - Y] - G;
        a
          ? u.setTranslate(u.translate - F)
          : (u.slideTo(P - Y, 0, !1, !0),
            i &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - F),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - F)));
      } else {
        const G = b ? A.length / v.grid.rows : A.length;
        u.slideTo(u.activeIndex - G, 0, !1, !0);
      }
  }
  if (
    ((u.allowSlidePrev = f),
    (u.allowSlideNext = d),
    u.controller && u.controller.control && !o)
  ) {
    const G = {
      slideRealIndex: t,
      direction: s,
      setTranslate: i,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(u.controller.control)
      ? u.controller.control.forEach((Z) => {
          !Z.destroyed &&
            Z.params.loop &&
            Z.loopFix({
              ...G,
              slideTo: Z.params.slidesPerView === v.slidesPerView ? n : !1,
            });
        })
      : u.controller.control instanceof u.constructor &&
        u.controller.control.params.loop &&
        u.controller.control.loopFix({
          ...G,
          slideTo:
            u.controller.control.params.slidesPerView === v.slidesPerView
              ? n
              : !1,
        });
  }
  u.emit("loopFix");
}
function Jf() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || !n || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const s = [];
  e.slides.forEach((i) => {
    const r =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    s[r] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    s.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var ed = { loopCreate: Zf, loopFix: Qf, loopDestroy: Jf };
function td(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function nd() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var sd = { setGrabCursor: td, unsetGrabCursor: nd };
function id(e, t) {
  t === void 0 && (t = this);
  function n(s) {
    if (!s || s === lt() || s === De()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const i = s.closest(e);
    return !i && !s.getRootNode ? null : i || n(s.getRootNode().host);
  }
  return n(t);
}
function gr(e, t, n) {
  const s = De(),
    { params: i } = e,
    r = i.edgeSwipeDetection,
    l = i.edgeSwipeThreshold;
  return r && (n <= l || n >= s.innerWidth - l)
    ? r === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function rd(e) {
  const t = this,
    n = lt();
  let s = e;
  s.originalEvent && (s = s.originalEvent);
  const i = t.touchEventsData;
  if (s.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== s.pointerId) return;
    i.pointerId = s.pointerId;
  } else
    s.type === "touchstart" &&
      s.targetTouches.length === 1 &&
      (i.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    gr(t, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: r, touches: l, enabled: o } = t;
  if (
    !o ||
    (!r.simulateTouch && s.pointerType === "mouse") ||
    (t.animating && r.preventInteractionOnTransition)
  )
    return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let a = s.target;
  if (
    (r.touchEventsTarget === "wrapper" && !pf(a, t.wrapperEl)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!r.noSwipingClass && r.noSwipingClass !== "",
    c = s.composedPath ? s.composedPath() : s.path;
  u && s.target && s.target.shadowRoot && c && (a = c[0]);
  const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    d = !!(s.target && s.target.shadowRoot);
  if (r.noSwiping && (d ? id(f, a) : a.closest(f))) {
    t.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
  (l.currentX = s.pageX), (l.currentY = s.pageY);
  const p = l.currentX,
    v = l.currentY;
  if (!gr(t, s, p)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (l.startX = p),
    (l.startY = v),
    (i.touchStartTime = Hn()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (i.allowThresholdMove = !1);
  let y = !0;
  a.matches(i.focusableElements) &&
    ((y = !1), a.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== a &&
      (s.pointerType === "mouse" ||
        (s.pointerType !== "mouse" && !a.matches(i.focusableElements))) &&
      n.activeElement.blur();
  const _ = y && t.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || _) &&
    !a.isContentEditable &&
    s.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", s);
}
function ld(e) {
  const t = lt(),
    n = this,
    s = n.touchEventsData,
    { params: i, touches: r, rtlTranslate: l, enabled: o } = n;
  if (!o || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (s.touchId !== null || a.pointerId !== s.pointerId))
  )
    return;
  let u;
  if (a.type === "touchmove") {
    if (
      ((u = [...a.changedTouches].find((A) => A.identifier === s.touchId)),
      !u || u.identifier !== s.touchId)
    )
      return;
  } else u = a;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const c = u.pageX,
    f = u.pageY;
  if (a.preventedByNestedSwiper) {
    (r.startX = c), (r.startY = f);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, { startX: c, startY: f, currentX: c, currentY: f }),
        (s.touchStartTime = Hn()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop)
    if (n.isVertical()) {
      if (
        (f < r.startY && n.translate <= n.maxTranslate()) ||
        (f > r.startY && n.translate >= n.minTranslate())
      ) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
    } else {
      if (
        l &&
        ((c > r.startX && -n.translate <= n.maxTranslate()) ||
          (c < r.startX && -n.translate >= n.minTranslate()))
      )
        return;
      if (
        !l &&
        ((c < r.startX && n.translate <= n.maxTranslate()) ||
          (c > r.startX && n.translate >= n.minTranslate()))
      )
        return;
    }
  if (
    (t.activeElement &&
      t.activeElement.matches(s.focusableElements) &&
      t.activeElement !== a.target &&
      a.pointerType !== "mouse" &&
      t.activeElement.blur(),
    t.activeElement &&
      a.target === t.activeElement &&
      a.target.matches(s.focusableElements))
  ) {
    (s.isMoved = !0), (n.allowClick = !1);
    return;
  }
  s.allowTouchCallbacks && n.emit("touchMove", a),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = c),
    (r.currentY = f);
  const d = r.currentX - r.startX,
    p = r.currentY - r.startY;
  if (n.params.threshold && Math.sqrt(d ** 2 + p ** 2) < n.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let A;
    (n.isHorizontal() && r.currentY === r.startY) ||
    (n.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : d * d + p * p >= 25 &&
        ((A = (Math.atan2(Math.abs(p), Math.abs(d)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? A > i.touchAngle
          : 90 - A > i.touchAngle));
  }
  if (
    (s.isScrolling && n.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (a.type === "touchmove" && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let v = n.isHorizontal() ? d : p,
    y = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  i.oneWayMovement &&
    ((v = Math.abs(v) * (l ? 1 : -1)), (y = Math.abs(y) * (l ? 1 : -1))),
    (r.diff = v),
    (v *= i.touchRatio),
    l && ((v = -v), (y = -y));
  const _ = n.touchesDirection;
  (n.swipeDirection = v > 0 ? "prev" : "next"),
    (n.touchesDirection = y > 0 ? "prev" : "next");
  const x = n.params.loop && !i.cssMode,
    g =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (x && g && n.loopFix({ direction: n.swipeDirection }),
      (s.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const A = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(A);
    }
    (s.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let w;
  if (
    (new Date().getTime(),
    i._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      _ !== n.touchesDirection &&
      x &&
      g &&
      Math.abs(v) >= 1)
  ) {
    Object.assign(r, {
      startX: c,
      startY: f,
      currentX: c,
      currentY: f,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate);
    return;
  }
  n.emit("sliderMove", a),
    (s.isMoved = !0),
    (s.currentTranslate = v + s.startTranslate);
  let b = !0,
    E = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (E = 0),
    v > 0
      ? (x &&
          g &&
          !w &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > n.minTranslate() &&
          ((b = !1),
          i.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + v) ** E)))
      : v < 0 &&
        (x &&
          g &&
          !w &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        s.currentTranslate < n.maxTranslate() &&
          ((b = !1),
          i.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - v) ** E))),
    b && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(v) > i.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = n.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY);
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(s.currentTranslate),
    n.setTranslate(s.currentTranslate));
}
function od(e) {
  const t = this,
    n = t.touchEventsData;
  let s = e;
  s.originalEvent && (s = s.originalEvent);
  let i;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((i = [...s.changedTouches].find((E) => E.identifier === n.touchId)),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || s.pointerId !== n.pointerId) return;
    i = s;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      s.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(s.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: l,
    touches: o,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: c,
  } = t;
  if (!c || (!l.simulateTouch && s.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", s),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && l.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  l.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const f = Hn(),
    d = f - n.touchStartTime;
  if (t.allowClick) {
    const E = s.path || (s.composedPath && s.composedPath());
    t.updateClickedSlide((E && E[0]) || s.target, E),
      t.emit("tap click", s),
      d < 300 &&
        f - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", s);
  }
  if (
    ((n.lastClickTime = Hn()),
    js(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (o.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let p;
  if (
    (l.followFinger
      ? (p = a ? t.translate : -t.translate)
      : (p = -n.currentTranslate),
    l.cssMode)
  )
    return;
  if (l.freeMode && l.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  const v = p >= -t.maxTranslate() && !t.params.loop;
  let y = 0,
    _ = t.slidesSizesGrid[0];
  for (
    let E = 0;
    E < u.length;
    E += E < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
  ) {
    const A = E < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    typeof u[E + A] < "u"
      ? (v || (p >= u[E] && p < u[E + A])) && ((y = E), (_ = u[E + A] - u[E]))
      : (v || p >= u[E]) && ((y = E), (_ = u[u.length - 1] - u[u.length - 2]));
  }
  let x = null,
    g = null;
  l.rewind &&
    (t.isBeginning
      ? (g =
          l.virtual && l.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (x = 0));
  const w = (p - u[y]) / _,
    b = y < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
  if (d > l.longSwipesMs) {
    if (!l.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (w >= l.longSwipesRatio
        ? t.slideTo(l.rewind && t.isEnd ? x : y + b)
        : t.slideTo(y)),
      t.swipeDirection === "prev" &&
        (w > 1 - l.longSwipesRatio
          ? t.slideTo(y + b)
          : g !== null && w < 0 && Math.abs(w) > l.longSwipesRatio
          ? t.slideTo(g)
          : t.slideTo(y));
  } else {
    if (!l.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
      ? s.target === t.navigation.nextEl
        ? t.slideTo(y + b)
        : t.slideTo(y)
      : (t.swipeDirection === "next" && t.slideTo(x !== null ? x : y + b),
        t.swipeDirection === "prev" && t.slideTo(g !== null ? g : y));
  }
}
function mr() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = e,
    l = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const o = l && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !o
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !l
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = s),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
}
function ad(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function cd() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: s } = e;
  if (!s) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const r = e.maxTranslate() - e.minTranslate();
  r === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / r),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function ud(e) {
  const t = this;
  Rn(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function fd() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const Xl = (e, t) => {
  const n = lt(),
    { params: s, el: i, wrapperEl: r, device: l } = e,
    o = !!s.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  !i ||
    typeof i == "string" ||
    (n[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
    i[a]("touchstart", e.onTouchStart, { passive: !1 }),
    i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
    n[a]("touchend", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    s.cssMode && r[a]("scroll", e.onScroll),
    s.updateOnWindowResize
      ? e[u](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          mr,
          !0
        )
      : e[u]("observerUpdate", mr, !0),
    i[a]("load", e.onLoad, { capture: !0 }));
};
function dd() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = rd.bind(e)),
    (e.onTouchMove = ld.bind(e)),
    (e.onTouchEnd = od.bind(e)),
    (e.onDocumentTouchStart = fd.bind(e)),
    t.cssMode && (e.onScroll = cd.bind(e)),
    (e.onClick = ad.bind(e)),
    (e.onLoad = ud.bind(e)),
    Xl(e, "on");
}
function pd() {
  Xl(this, "off");
}
var hd = { attachEvents: dd, detachEvents: pd };
const vr = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function gd() {
  const e = this,
    { realIndex: t, initialized: n, params: s, el: i } = e,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const l = lt(),
    o =
      s.breakpointsBase === "window" || !s.breakpointsBase
        ? s.breakpointsBase
        : "container",
    a =
      ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase
        ? e.el
        : l.querySelector(s.breakpointsBase),
    u = e.getBreakpoint(r, o, a);
  if (!u || e.currentBreakpoint === u) return;
  const f = (u in r ? r[u] : void 0) || e.originalParams,
    d = vr(e, s),
    p = vr(e, f),
    v = e.params.grabCursor,
    y = f.grabCursor,
    _ = s.enabled;
  d && !p
    ? (i.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !d &&
      p &&
      (i.classList.add(`${s.containerModifierClass}grid`),
      ((f.grid.fill && f.grid.fill === "column") ||
        (!f.grid.fill && s.grid.fill === "column")) &&
        i.classList.add(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    v && !y ? e.unsetGrabCursor() : !v && y && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((A) => {
      if (typeof f[A] > "u") return;
      const z = s[A] && s[A].enabled,
        D = f[A] && f[A].enabled;
      z && !D && e[A].disable(), !z && D && e[A].enable();
    });
  const x = f.direction && f.direction !== s.direction,
    g = s.loop && (f.slidesPerView !== s.slidesPerView || x),
    w = s.loop;
  x && n && e.changeDirection(), ke(e.params, f);
  const b = e.params.enabled,
    E = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    _ && !b ? e.disable() : !_ && b && e.enable(),
    (e.currentBreakpoint = u),
    e.emit("_beforeBreakpoint", f),
    n &&
      (g
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !w && E
        ? (e.loopCreate(t), e.updateSlides())
        : w && !E && e.loopDestroy()),
    e.emit("breakpoint", f);
}
function md(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let s = !1;
  const i = De(),
    r = t === "window" ? i.innerHeight : n.clientHeight,
    l = Object.keys(e).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const a = parseFloat(o.substr(1));
        return { value: r * a, point: o };
      }
      return { value: o, point: o };
    });
  l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
  for (let o = 0; o < l.length; o += 1) {
    const { point: a, value: u } = l[o];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (s = a)
      : u <= n.clientWidth && (s = a);
  }
  return s || "max";
}
var vd = { setBreakpoint: gd, getBreakpoint: md };
function wd(e, t) {
  const n = [];
  return (
    e.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((i) => {
            s[i] && n.push(t + i);
          })
        : typeof s == "string" && n.push(t + s);
    }),
    n
  );
}
function yd() {
  const e = this,
    { classNames: t, params: n, rtl: s, el: i, device: r } = e,
    l = wd(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: s },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...l), i.classList.add(...t), e.emitContainerClasses();
}
function bd() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var xd = { addClasses: yd, removeClasses: bd };
function Cd() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: s } = n;
  if (s) {
    const i = e.slides.length - 1,
      r = e.slidesGrid[i] + e.slidesSizesGrid[i] + s * 2;
    e.isLocked = e.size > r;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Sd = { checkOverflow: Cd },
  Gs = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Ed(e, t) {
  return function (s) {
    s === void 0 && (s = {});
    const i = Object.keys(s)[0],
      r = s[i];
    if (typeof r != "object" || r === null) {
      ke(t, s);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in r))
    ) {
      ke(t, s);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      ke(t, s);
  };
}
const Ss = {
    eventsEmitter: xf,
    update: Af,
    translate: Ff,
    transition: Vf,
    slide: Xf,
    loop: ed,
    grabCursor: sd,
    events: hd,
    breakpoints: vd,
    checkOverflow: Sd,
    classes: xd,
  },
  Es = {};
let vi = class ut {
  constructor() {
    let t, n;
    for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
      i[r] = arguments[r];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = ke({}, n)),
      t && !n.el && (n.el = t);
    const l = lt();
    if (
      n.el &&
      typeof n.el == "string" &&
      l.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        l.querySelectorAll(n.el).forEach((f) => {
          const d = ke({}, n, { el: f });
          c.push(new ut(d));
        }),
        c
      );
    }
    const o = this;
    (o.__swiper__ = !0),
      (o.support = ql()),
      (o.device = Ul({ userAgent: n.userAgent })),
      (o.browser = Kl()),
      (o.eventsListeners = {}),
      (o.eventsAnyListeners = []),
      (o.modules = [...o.__modules__]),
      n.modules && Array.isArray(n.modules) && o.modules.push(...n.modules);
    const a = {};
    o.modules.forEach((c) => {
      c({
        params: n,
        swiper: o,
        extendParams: Ed(n, a),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o),
      });
    });
    const u = ke({}, Gs, a);
    return (
      (o.params = ke({}, u, Es, n)),
      (o.originalParams = ke({}, o.params)),
      (o.passedParams = ke({}, n)),
      o.params &&
        o.params.on &&
        Object.keys(o.params.on).forEach((c) => {
          o.on(c, o.params.on[c]);
        }),
      o.params && o.params.onAny && o.onAny(o.params.onAny),
      Object.assign(o, {
        enabled: o.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return o.params.direction === "horizontal";
        },
        isVertical() {
          return o.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      o.emit("_swiper"),
      o.params.init && o.init(),
      o
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: s } = this,
      i = rt(n, `.${s.slideClass}, swiper-slide`),
      r = kn(i[0]);
    return kn(t) - r;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.find(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: s } = t;
    t.slides = rt(n, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const s = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = s.minTranslate(),
      l = (s.maxTranslate() - i) * t + i;
    s.translateTo(l, typeof n > "u" ? 0 : n),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((s) => {
      const i = t.getSlideClasses(s);
      n.push({ slideEl: s, classNames: i }), t.emit("_slideClass", s, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const s = this,
      {
        params: i,
        slides: r,
        slidesGrid: l,
        slidesSizesGrid: o,
        size: a,
        activeIndex: u,
      } = s;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let f = r[u] ? Math.ceil(r[u].swiperSlideSize) : 0,
        d;
      for (let p = u + 1; p < r.length; p += 1)
        r[p] &&
          !d &&
          ((f += Math.ceil(r[p].swiperSlideSize)), (c += 1), f > a && (d = !0));
      for (let p = u - 1; p >= 0; p -= 1)
        r[p] &&
          !d &&
          ((f += r[p].swiperSlideSize), (c += 1), f > a && (d = !0));
    } else if (t === "current")
      for (let f = u + 1; f < r.length; f += 1)
        (n ? l[f] + o[f] - l[u] < a : l[f] - l[u] < a) && (c += 1);
    else for (let f = u - 1; f >= 0; f -= 1) l[u] - l[f] < a && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: s } = t;
    s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && Rn(t, l);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const l = t.rtlTranslate ? t.translate * -1 : t.translate,
        o = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
      t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      i(), s.autoHeight && t.updateAutoHeight();
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        t.isEnd &&
        !s.centeredSlides
      ) {
        const l = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
        r = t.slideTo(l.length - 1, 0, !1, !0);
      } else r = t.slideTo(t.activeIndex, 0, !1, !0);
      r || i();
    }
    s.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const s = this,
      i = s.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.forEach((r) => {
          t === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        s.emit("changeDirection"),
        n && s.update()),
      s
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let s = t || n.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    (s.swiper = n),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = (() =>
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(i())
        : rt(s, i())[0])();
    return (
      !l &&
        n.params.createElements &&
        ((l = Vn("div", n.params.wrapperClass)),
        s.append(l),
        rt(s, `.${n.params.slideClass}`).forEach((o) => {
          l.append(o);
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: l,
        slidesEl:
          n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || Ct(s, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || Ct(s, "direction") === "rtl"),
        wrongRTL: Ct(l, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(void 0, !0),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((r) => {
        r.complete
          ? Rn(n, r)
          : r.addEventListener("load", (l) => {
              Rn(n, l.target);
            });
      }),
      ks(n),
      (n.initialized = !0),
      ks(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const s = this,
      { params: i, el: r, wrapperEl: l, slides: o } = s;
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        i.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          r && typeof r != "string" && r.removeAttribute("style"),
          l && l.removeAttribute("style"),
          o &&
            o.length &&
            o.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a);
        }),
        t !== !1 &&
          (s.el && typeof s.el != "string" && (s.el.swiper = null), af(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    ke(Es, t);
  }
  static get extendedDefaults() {
    return Es;
  }
  static get defaults() {
    return Gs;
  }
  static installModule(t) {
    ut.prototype.__modules__ || (ut.prototype.__modules__ = []);
    const n = ut.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => ut.installModule(n)), ut)
      : (ut.installModule(t), ut);
  }
};
Object.keys(Ss).forEach((e) => {
  Object.keys(Ss[e]).forEach((t) => {
    vi.prototype[t] = Ss[e][t];
  });
});
vi.use([yf, bf]);
const Zl = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function It(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function Wt(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : It(t[s]) && It(e[s]) && Object.keys(t[s]).length > 0
        ? t[s].__swiper__
          ? (e[s] = t[s])
          : Wt(e[s], t[s])
        : (e[s] = t[s]);
    });
}
function Ql(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function Jl(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function eo(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function to(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((s) => s.trim())
      .filter((s) => !!s),
    n = [];
  return (
    t.forEach((s) => {
      n.indexOf(s) < 0 && n.push(s);
    }),
    n.join(" ")
  );
}
function _d(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function Td(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: s,
    changedParams: i,
    nextEl: r,
    prevEl: l,
    scrollbarEl: o,
    paginationEl: a,
  } = e;
  const u = i.filter(
      (P) => P !== "children" && P !== "direction" && P !== "wrapperClass"
    ),
    {
      params: c,
      pagination: f,
      navigation: d,
      scrollbar: p,
      virtual: v,
      thumbs: y,
    } = t;
  let _, x, g, w, b, E, A, z;
  i.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    c.thumbs &&
    (!c.thumbs.swiper || c.thumbs.swiper.destroyed) &&
    (_ = !0),
    i.includes("controller") &&
      s.controller &&
      s.controller.control &&
      c.controller &&
      !c.controller.control &&
      (x = !0),
    i.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      f &&
      !f.el &&
      (g = !0),
    i.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || o) &&
      (c.scrollbar || c.scrollbar === !1) &&
      p &&
      !p.el &&
      (w = !0),
    i.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || l) &&
      (s.navigation.nextEl || r) &&
      (c.navigation || c.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (b = !0);
  const D = (P) => {
    t[P] &&
      (t[P].destroy(),
      P === "navigation"
        ? (t.isElement && (t[P].prevEl.remove(), t[P].nextEl.remove()),
          (c[P].prevEl = void 0),
          (c[P].nextEl = void 0),
          (t[P].prevEl = void 0),
          (t[P].nextEl = void 0))
        : (t.isElement && t[P].el.remove(),
          (c[P].el = void 0),
          (t[P].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (c.loop && !s.loop ? (E = !0) : !c.loop && s.loop ? (A = !0) : (z = !0)),
    u.forEach((P) => {
      if (It(c[P]) && It(s[P]))
        Object.assign(c[P], s[P]),
          (P === "navigation" || P === "pagination" || P === "scrollbar") &&
            "enabled" in s[P] &&
            !s[P].enabled &&
            D(P);
      else {
        const M = s[P];
        (M === !0 || M === !1) &&
        (P === "navigation" || P === "pagination" || P === "scrollbar")
          ? M === !1 && D(P)
          : (c[P] = s[P]);
      }
    }),
    u.includes("controller") &&
      !x &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes("children") && n && v && c.virtual.enabled
      ? ((v.slides = n), v.update(!0))
      : i.includes("virtual") &&
        v &&
        c.virtual.enabled &&
        (n && (v.slides = n), v.update(!0)),
    i.includes("children") && n && c.loop && (z = !0),
    _ && y.init() && y.update(!0),
    x && (t.controller.control = c.controller.control),
    g &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (c.pagination.el = a),
      f.init(),
      f.render(),
      f.update()),
    w &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-scrollbar"),
        o.part.add("scrollbar"),
        t.el.appendChild(o)),
      o && (c.scrollbar.el = o),
      p.init(),
      p.updateSize(),
      p.setTranslate()),
    b &&
      (t.isElement &&
        ((!r || typeof r == "string") &&
          ((r = document.createElement("div")),
          r.classList.add("swiper-button-next"),
          (r.innerHTML = t.hostEl.constructor.nextButtonSvg),
          r.part.add("button-next"),
          t.el.appendChild(r)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          (l.innerHTML = t.hostEl.constructor.prevButtonSvg),
          l.part.add("button-prev"),
          t.el.appendChild(l))),
      r && (c.navigation.nextEl = r),
      l && (c.navigation.prevEl = l),
      d.init(),
      d.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev),
    i.includes("direction") && t.changeDirection(s.direction, !1),
    (E || z) && t.loopDestroy(),
    (A || z) && t.loopCreate(),
    t.update();
}
function wr(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    s = {},
    i = {};
  Wt(n, Gs), (n._emitClasses = !0), (n.init = !1);
  const r = {},
    l = Zl.map((a) => a.replace(/_/, "")),
    o = Object.assign({}, e);
  return (
    Object.keys(o).forEach((a) => {
      typeof e[a] > "u" ||
        (l.indexOf(a) >= 0
          ? It(e[a])
            ? ((n[a] = {}), (i[a] = {}), Wt(n[a], e[a]), Wt(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
          ? t
            ? (s[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (r[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: r, events: s }
  );
}
function Pd(e, t) {
  let {
    el: n,
    nextEl: s,
    prevEl: i,
    paginationEl: r,
    scrollbarEl: l,
    swiper: o,
  } = e;
  Ql(t) &&
    s &&
    i &&
    ((o.params.navigation.nextEl = s),
    (o.originalParams.navigation.nextEl = s),
    (o.params.navigation.prevEl = i),
    (o.originalParams.navigation.prevEl = i)),
    Jl(t) &&
      r &&
      ((o.params.pagination.el = r), (o.originalParams.pagination.el = r)),
    eo(t) &&
      l &&
      ((o.params.scrollbar.el = l), (o.originalParams.scrollbar.el = l)),
    o.init(n);
}
function Md(e, t, n, s, i) {
  const r = [];
  if (!t) return r;
  const l = (a) => {
    r.indexOf(a) < 0 && r.push(a);
  };
  if (n && s) {
    const a = s.map(i),
      u = n.map(i);
    a.join("") !== u.join("") && l("children"),
      s.length !== n.length && l("children");
  }
  return (
    Zl.filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (It(e[a]) && It(t[a])) {
            const u = Object.keys(e[a]),
              c = Object.keys(t[a]);
            u.length !== c.length
              ? l(a)
              : (u.forEach((f) => {
                  e[a][f] !== t[a][f] && l(a);
                }),
                c.forEach((f) => {
                  e[a][f] !== t[a][f] && l(a);
                }));
          } else e[a] !== t[a] && l(a);
      }),
    r
  );
}
const Od = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function _s(e, t, n) {
  e === void 0 && (e = {});
  const s = [],
    i = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    r = (l, o) => {
      Array.isArray(l) &&
        l.forEach((a) => {
          const u = typeof a.type == "symbol";
          o === "default" && (o = "container-end"),
            u && a.children
              ? r(a.children, o)
              : (a.type &&
                  (a.type.name === "SwiperSlide" ||
                    a.type.name === "AsyncComponentWrapper")) ||
                (a.componentOptions && a.componentOptions.tag === "SwiperSlide")
              ? s.push(a)
              : i[o] && i[o].push(a);
        });
    };
  return (
    Object.keys(e).forEach((l) => {
      if (typeof e[l] != "function") return;
      const o = e[l]();
      r(o, l);
    }),
    (n.value = t.value),
    (t.value = s),
    { slides: s, slots: i }
  );
}
function Ld(e, t, n) {
  if (!n) return null;
  const s = (c) => {
      let f = c;
      return (
        c < 0 ? (f = t.length + c) : f >= t.length && (f = f - t.length), f
      );
    },
    i = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: r, to: l } = n,
    o = e.value.params.loop ? -t.length : 0,
    a = e.value.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = o; c < a; c += 1)
    c >= r && c <= l && u.length < t.length && u.push(t[s(c)]);
  return u.map((c) => {
    if (
      (c.props || (c.props = {}),
      c.props.style || (c.props.style = {}),
      (c.props.swiperRef = e),
      (c.props.style = i),
      c.type)
    )
      return $e(c.type, { ...c.props }, c.children);
    if (c.componentOptions)
      return $e(
        c.componentOptions.Ctor,
        { ...c.props },
        c.componentOptions.children
      );
  });
}
const Id = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      swiperElementNodeName: { type: String, default: "SWIPER-CONTAINER" },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      breakpointsBase: { type: String, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideFullyVisibleClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "autoplayTimeLeft",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "init",
      "keyPress",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slidesUpdated",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(e, t) {
      let { slots: n, emit: s } = t;
      const { tag: i, wrapperTag: r } = e,
        l = _e("swiper"),
        o = _e(null),
        a = _e(!1),
        u = _e(!1),
        c = _e(null),
        f = _e(null),
        d = _e(null),
        p = { value: [] },
        v = { value: [] },
        y = _e(null),
        _ = _e(null),
        x = _e(null),
        g = _e(null),
        { params: w, passedParams: b } = wr(e, !1);
      _s(n, p, v), (d.value = b), (v.value = p.value);
      const E = () => {
        _s(n, p, v), (a.value = !0);
      };
      (w.onAny = function (D) {
        for (
          var P = arguments.length, M = new Array(P > 1 ? P - 1 : 0), $ = 1;
          $ < P;
          $++
        )
          M[$ - 1] = arguments[$];
        s(D, ...M);
      }),
        Object.assign(w.on, {
          _beforeBreakpoint: E,
          _containerClasses(D, P) {
            l.value = P;
          },
        });
      const A = { ...w };
      if (
        (delete A.wrapperClass,
        (f.value = new vi(A)),
        f.value.virtual && f.value.params.virtual.enabled)
      ) {
        f.value.virtual.slides = p.value;
        const D = {
          cache: !1,
          slides: p.value,
          renderExternal: (P) => {
            o.value = P;
          },
          renderExternalUpdate: !1,
        };
        Wt(f.value.params.virtual, D), Wt(f.value.originalParams.virtual, D);
      }
      oi(() => {
        !u.value && f.value && (f.value.emitSlidesClasses(), (u.value = !0));
        const { passedParams: D } = wr(e, !1),
          P = Md(D, d.value, p.value, v.value, (M) => M.props && M.props.key);
        (d.value = D),
          (P.length || a.value) &&
            f.value &&
            !f.value.destroyed &&
            Td({
              swiper: f.value,
              slides: p.value,
              passedParams: D,
              changedParams: P,
              nextEl: y.value,
              prevEl: _.value,
              scrollbarEl: g.value,
              paginationEl: x.value,
            }),
          (a.value = !1);
      }),
        Gt("swiper", f),
        an(o, () => {
          si(() => {
            Od(f.value);
          });
        }),
        li(() => {
          c.value &&
            (Pd(
              {
                el: c.value,
                nextEl: y.value,
                prevEl: _.value,
                paginationEl: x.value,
                scrollbarEl: g.value,
                swiper: f.value,
              },
              w
            ),
            s("swiper", f.value));
        }),
        ai(() => {
          f.value && !f.value.destroyed && f.value.destroy(!0, !1);
        });
      function z(D) {
        return w.virtual
          ? Ld(f, D, o.value)
          : (D.forEach((P, M) => {
              P.props || (P.props = {}),
                (P.props.swiperRef = f),
                (P.props.swiperSlideIndex = M);
            }),
            D);
      }
      return () => {
        const { slides: D, slots: P } = _s(n, p, v);
        return $e(i, { ref: c, class: to(l.value) }, [
          P["container-start"],
          $e(r, { class: _d(w.wrapperClass) }, [
            P["wrapper-start"],
            z(D),
            P["wrapper-end"],
          ]),
          Ql(e) && [
            $e("div", { ref: _, class: "swiper-button-prev" }),
            $e("div", { ref: y, class: "swiper-button-next" }),
          ],
          eo(e) && $e("div", { ref: g, class: "swiper-scrollbar" }),
          Jl(e) && $e("div", { ref: x, class: "swiper-pagination" }),
          P["container-end"],
        ]);
      };
    },
  },
  Ad = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        s = !1;
      const { swiperRef: i } = e,
        r = _e(null),
        l = _e("swiper-slide"),
        o = _e(!1);
      function a(f, d, p) {
        d === r.value && (l.value = p);
      }
      li(() => {
        !i || !i.value || (i.value.on("_slideClass", a), (s = !0));
      }),
        tl(() => {
          s || !i || !i.value || (i.value.on("_slideClass", a), (s = !0));
        }),
        oi(() => {
          !r.value ||
            !i ||
            !i.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (r.value.swiperSlideIndex = e.swiperSlideIndex),
            i.value.destroyed &&
              l.value !== "swiper-slide" &&
              (l.value = "swiper-slide"));
        }),
        ai(() => {
          !i || !i.value || i.value.off("_slideClass", a);
        });
      const u = Ue(() => ({
        isActive: l.value.indexOf("swiper-slide-active") >= 0,
        isVisible: l.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: l.value.indexOf("swiper-slide-prev") >= 0,
        isNext: l.value.indexOf("swiper-slide-next") >= 0,
      }));
      Gt("swiperSlide", u);
      const c = () => {
        o.value = !0;
      };
      return () =>
        $e(
          e.tag,
          {
            class: to(`${l.value}`),
            ref: r,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && i && i.value && i.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: c,
          },
          e.zoom
            ? $e(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof e.zoom == "number" ? e.zoom : void 0,
                },
                [
                  n.default && n.default(u.value),
                  e.lazy &&
                    !o.value &&
                    $e("div", { class: "swiper-lazy-preloader" }),
                ]
              )
            : [
                n.default && n.default(u.value),
                e.lazy &&
                  !o.value &&
                  $e("div", { class: "swiper-lazy-preloader" }),
              ]
        );
    },
  },
  Rd = { class: "flex items-center -space-x-1.5 rtl:space-x-reverse" },
  Bd = ["src", "alt"],
  Dd = Xe({
    __name: "OverlappingAvatars",
    props: { avatars: {} },
    setup(e) {
      return (t, n) => (
        me(),
        Se("div", Rd, [
          (me(!0),
          Se(
            Me,
            null,
            Is(
              t.avatars,
              (s, i) => (
                me(),
                Se(
                  "img",
                  {
                    key: i,
                    src: s.src,
                    alt: s.alt || "User avatar",
                    loading: "lazy",
                    class:
                      "size-[34px] rounded-full relative hover:z-50 border border-[#314158] transition-transform hover:scale-110",
                    style: xn({ zIndex: i + 1 }),
                  },
                  null,
                  12,
                  Bd
                )
              )
            ),
            128
          )),
        ])
      );
    },
  });
function no(e, t, n, s) {
  return (
    e.params.createElements &&
      Object.keys(s).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let r = rt(e.el, `.${s[i]}`)[0];
          r || ((r = Vn("div", s[i])), (r.className = s[i]), e.el.append(r)),
            (n[i] = r),
            (t[i] = r);
        }
      }),
    n
  );
}
function $d(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  function r(v) {
    let y;
    return v &&
      typeof v == "string" &&
      t.isElement &&
      ((y = t.el.querySelector(v) || t.hostEl.querySelector(v)), y)
      ? y
      : (v &&
          (typeof v == "string" && (y = [...document.querySelectorAll(v)]),
          t.params.uniqueNavElements &&
          typeof v == "string" &&
          y &&
          y.length > 1 &&
          t.el.querySelectorAll(v).length === 1
            ? (y = t.el.querySelector(v))
            : y && y.length === 1 && (y = y[0])),
        v && !y ? v : y);
  }
  function l(v, y) {
    const _ = t.params.navigation;
    (v = xe(v)),
      v.forEach((x) => {
        x &&
          (x.classList[y ? "add" : "remove"](..._.disabledClass.split(" ")),
          x.tagName === "BUTTON" && (x.disabled = y),
          t.params.watchOverflow &&
            t.enabled &&
            x.classList[t.isLocked ? "add" : "remove"](_.lockClass));
      });
  }
  function o() {
    const { nextEl: v, prevEl: y } = t.navigation;
    if (t.params.loop) {
      l(y, !1), l(v, !1);
      return;
    }
    l(y, t.isBeginning && !t.params.rewind), l(v, t.isEnd && !t.params.rewind);
  }
  function a(v) {
    v.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function u(v) {
    v.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"));
  }
  function c() {
    const v = t.params.navigation;
    if (
      ((t.params.navigation = no(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(v.nextEl || v.prevEl))
    )
      return;
    let y = r(v.nextEl),
      _ = r(v.prevEl);
    Object.assign(t.navigation, { nextEl: y, prevEl: _ }),
      (y = xe(y)),
      (_ = xe(_));
    const x = (g, w) => {
      g && g.addEventListener("click", w === "next" ? u : a),
        !t.enabled && g && g.classList.add(...v.lockClass.split(" "));
    };
    y.forEach((g) => x(g, "next")), _.forEach((g) => x(g, "prev"));
  }
  function f() {
    let { nextEl: v, prevEl: y } = t.navigation;
    (v = xe(v)), (y = xe(y));
    const _ = (x, g) => {
      x.removeEventListener("click", g === "next" ? u : a),
        x.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    v.forEach((x) => _(x, "next")), y.forEach((x) => _(x, "prev"));
  }
  s("init", () => {
    t.params.navigation.enabled === !1 ? p() : (c(), o());
  }),
    s("toEdge fromEdge lock unlock", () => {
      o();
    }),
    s("destroy", () => {
      f();
    }),
    s("enable disable", () => {
      let { nextEl: v, prevEl: y } = t.navigation;
      if (((v = xe(v)), (y = xe(y)), t.enabled)) {
        o();
        return;
      }
      [...v, ...y]
        .filter((_) => !!_)
        .forEach((_) => _.classList.add(t.params.navigation.lockClass));
    }),
    s("click", (v, y) => {
      let { nextEl: _, prevEl: x } = t.navigation;
      (_ = xe(_)), (x = xe(x));
      const g = y.target;
      let w = x.includes(g) || _.includes(g);
      if (t.isElement && !w) {
        const b = y.path || (y.composedPath && y.composedPath());
        b && (w = b.find((E) => _.includes(E) || x.includes(E)));
      }
      if (t.params.navigation.hideOnClick && !w) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === g || t.pagination.el.contains(g))
        )
          return;
        let b;
        _.length
          ? (b = _[0].classList.contains(t.params.navigation.hiddenClass))
          : x.length &&
            (b = x[0].classList.contains(t.params.navigation.hiddenClass)),
          i(b === !0 ? "navigationShow" : "navigationHide"),
          [..._, ...x]
            .filter((E) => !!E)
            .forEach((E) =>
              E.classList.toggle(t.params.navigation.hiddenClass)
            );
      }
    });
  const d = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        c(),
        o();
    },
    p = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        f();
    };
  Object.assign(t.navigation, {
    enable: d,
    disable: p,
    update: o,
    init: c,
    destroy: f,
  });
}
function tn(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function zd(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e;
  const r = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (g) => g,
      formatFractionTotal: (g) => g,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let l,
    o = 0;
  function a() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function u(g, w) {
    const { bulletActiveClass: b } = t.params.pagination;
    g &&
      ((g = g[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
      g &&
        (g.classList.add(`${b}-${w}`),
        (g = g[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
        g && g.classList.add(`${b}-${w}-${w}`)));
  }
  function c(g, w, b) {
    if (((g = g % b), (w = w % b), w === g + 1)) return "next";
    if (w === g - 1) return "previous";
  }
  function f(g) {
    const w = g.target.closest(tn(t.params.pagination.bulletClass));
    if (!w) return;
    g.preventDefault();
    const b = kn(w) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === b) return;
      const E = c(t.realIndex, b, t.slides.length);
      E === "next"
        ? t.slideNext()
        : E === "previous"
        ? t.slidePrev()
        : t.slideToLoop(b);
    } else t.slideTo(b);
  }
  function d() {
    const g = t.rtl,
      w = t.params.pagination;
    if (a()) return;
    let b = t.pagination.el;
    b = xe(b);
    let E, A;
    const z =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      D = t.params.loop
        ? Math.ceil(z / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((A = t.previousRealIndex || 0),
          (E =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((E = t.snapIndex), (A = t.previousSnapIndex))
        : ((A = t.previousIndex || 0), (E = t.activeIndex || 0)),
      w.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const P = t.pagination.bullets;
      let M, $, K;
      if (
        (w.dynamicBullets &&
          ((l = Vs(P[0], t.isHorizontal() ? "width" : "height", !0)),
          b.forEach((Y) => {
            Y.style[t.isHorizontal() ? "width" : "height"] = `${
              l * (w.dynamicMainBullets + 4)
            }px`;
          }),
          w.dynamicMainBullets > 1 &&
            A !== void 0 &&
            ((o += E - (A || 0)),
            o > w.dynamicMainBullets - 1
              ? (o = w.dynamicMainBullets - 1)
              : o < 0 && (o = 0)),
          (M = Math.max(E - o, 0)),
          ($ = M + (Math.min(P.length, w.dynamicMainBullets) - 1)),
          (K = ($ + M) / 2)),
        P.forEach((Y) => {
          const ne = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (se) => `${w.bulletActiveClass}${se}`
            ),
          ]
            .map((se) =>
              typeof se == "string" && se.includes(" ") ? se.split(" ") : se
            )
            .flat();
          Y.classList.remove(...ne);
        }),
        b.length > 1)
      )
        P.forEach((Y) => {
          const ne = kn(Y);
          ne === E
            ? Y.classList.add(...w.bulletActiveClass.split(" "))
            : t.isElement && Y.setAttribute("part", "bullet"),
            w.dynamicBullets &&
              (ne >= M &&
                ne <= $ &&
                Y.classList.add(...`${w.bulletActiveClass}-main`.split(" ")),
              ne === M && u(Y, "prev"),
              ne === $ && u(Y, "next"));
        });
      else {
        const Y = P[E];
        if (
          (Y && Y.classList.add(...w.bulletActiveClass.split(" ")),
          t.isElement &&
            P.forEach((ne, se) => {
              ne.setAttribute("part", se === E ? "bullet-active" : "bullet");
            }),
          w.dynamicBullets)
        ) {
          const ne = P[M],
            se = P[$];
          for (let G = M; G <= $; G += 1)
            P[G] &&
              P[G].classList.add(...`${w.bulletActiveClass}-main`.split(" "));
          u(ne, "prev"), u(se, "next");
        }
      }
      if (w.dynamicBullets) {
        const Y = Math.min(P.length, w.dynamicMainBullets + 4),
          ne = (l * Y - l) / 2 - K * l,
          se = g ? "right" : "left";
        P.forEach((G) => {
          G.style[t.isHorizontal() ? se : "top"] = `${ne}px`;
        });
      }
    }
    b.forEach((P, M) => {
      if (
        (w.type === "fraction" &&
          (P.querySelectorAll(tn(w.currentClass)).forEach(($) => {
            $.textContent = w.formatFractionCurrent(E + 1);
          }),
          P.querySelectorAll(tn(w.totalClass)).forEach(($) => {
            $.textContent = w.formatFractionTotal(D);
          })),
        w.type === "progressbar")
      ) {
        let $;
        w.progressbarOpposite
          ? ($ = t.isHorizontal() ? "vertical" : "horizontal")
          : ($ = t.isHorizontal() ? "horizontal" : "vertical");
        const K = (E + 1) / D;
        let Y = 1,
          ne = 1;
        $ === "horizontal" ? (Y = K) : (ne = K),
          P.querySelectorAll(tn(w.progressbarFillClass)).forEach((se) => {
            (se.style.transform = `translate3d(0,0,0) scaleX(${Y}) scaleY(${ne})`),
              (se.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      w.type === "custom" && w.renderCustom
        ? ((P.innerHTML = w.renderCustom(t, E + 1, D)),
          M === 0 && i("paginationRender", P))
        : (M === 0 && i("paginationRender", P), i("paginationUpdate", P)),
        t.params.watchOverflow &&
          t.enabled &&
          P.classList[t.isLocked ? "add" : "remove"](w.lockClass);
    });
  }
  function p() {
    const g = t.params.pagination;
    if (a()) return;
    const w =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
        ? t.slides.length / Math.ceil(t.params.grid.rows)
        : t.slides.length;
    let b = t.pagination.el;
    b = xe(b);
    let E = "";
    if (g.type === "bullets") {
      let A = t.params.loop
        ? Math.ceil(w / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && A > w && (A = w);
      for (let z = 0; z < A; z += 1)
        g.renderBullet
          ? (E += g.renderBullet.call(t, z, g.bulletClass))
          : (E += `<${g.bulletElement} ${
              t.isElement ? 'part="bullet"' : ""
            } class="${g.bulletClass}"></${g.bulletElement}>`);
    }
    g.type === "fraction" &&
      (g.renderFraction
        ? (E = g.renderFraction.call(t, g.currentClass, g.totalClass))
        : (E = `<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`)),
      g.type === "progressbar" &&
        (g.renderProgressbar
          ? (E = g.renderProgressbar.call(t, g.progressbarFillClass))
          : (E = `<span class="${g.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      b.forEach((A) => {
        g.type !== "custom" && (A.innerHTML = E || ""),
          g.type === "bullets" &&
            t.pagination.bullets.push(...A.querySelectorAll(tn(g.bulletClass)));
      }),
      g.type !== "custom" && i("paginationRender", b[0]);
  }
  function v() {
    t.params.pagination = no(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" }
    );
    const g = t.params.pagination;
    if (!g.el) return;
    let w;
    typeof g.el == "string" && t.isElement && (w = t.el.querySelector(g.el)),
      !w &&
        typeof g.el == "string" &&
        (w = [...document.querySelectorAll(g.el)]),
      w || (w = g.el),
      !(!w || w.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof g.el == "string" &&
          Array.isArray(w) &&
          w.length > 1 &&
          ((w = [...t.el.querySelectorAll(g.el)]),
          w.length > 1 && (w = w.find((b) => Wl(b, ".swiper")[0] === t.el))),
        Array.isArray(w) && w.length === 1 && (w = w[0]),
        Object.assign(t.pagination, { el: w }),
        (w = xe(w)),
        w.forEach((b) => {
          g.type === "bullets" &&
            g.clickable &&
            b.classList.add(...(g.clickableClass || "").split(" ")),
            b.classList.add(g.modifierClass + g.type),
            b.classList.add(
              t.isHorizontal() ? g.horizontalClass : g.verticalClass
            ),
            g.type === "bullets" &&
              g.dynamicBullets &&
              (b.classList.add(`${g.modifierClass}${g.type}-dynamic`),
              (o = 0),
              g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)),
            g.type === "progressbar" &&
              g.progressbarOpposite &&
              b.classList.add(g.progressbarOppositeClass),
            g.clickable && b.addEventListener("click", f),
            t.enabled || b.classList.add(g.lockClass);
        }));
  }
  function y() {
    const g = t.params.pagination;
    if (a()) return;
    let w = t.pagination.el;
    w &&
      ((w = xe(w)),
      w.forEach((b) => {
        b.classList.remove(g.hiddenClass),
          b.classList.remove(g.modifierClass + g.type),
          b.classList.remove(
            t.isHorizontal() ? g.horizontalClass : g.verticalClass
          ),
          g.clickable &&
            (b.classList.remove(...(g.clickableClass || "").split(" ")),
            b.removeEventListener("click", f));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((b) =>
          b.classList.remove(...g.bulletActiveClass.split(" "))
        );
  }
  s("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const g = t.params.pagination;
    let { el: w } = t.pagination;
    (w = xe(w)),
      w.forEach((b) => {
        b.classList.remove(g.horizontalClass, g.verticalClass),
          b.classList.add(
            t.isHorizontal() ? g.horizontalClass : g.verticalClass
          );
      });
  }),
    s("init", () => {
      t.params.pagination.enabled === !1 ? x() : (v(), p(), d());
    }),
    s("activeIndexChange", () => {
      typeof t.snapIndex > "u" && d();
    }),
    s("snapIndexChange", () => {
      d();
    }),
    s("snapGridLengthChange", () => {
      p(), d();
    }),
    s("destroy", () => {
      y();
    }),
    s("enable disable", () => {
      let { el: g } = t.pagination;
      g &&
        ((g = xe(g)),
        g.forEach((w) =>
          w.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass
          )
        ));
    }),
    s("lock unlock", () => {
      d();
    }),
    s("click", (g, w) => {
      const b = w.target,
        E = xe(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        E &&
        E.length > 0 &&
        !b.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && b === t.navigation.nextEl) ||
            (t.navigation.prevEl && b === t.navigation.prevEl))
        )
          return;
        const A = E[0].classList.contains(t.params.pagination.hiddenClass);
        i(A === !0 ? "paginationShow" : "paginationHide"),
          E.forEach((z) => z.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const _ = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: g } = t.pagination;
      g &&
        ((g = xe(g)),
        g.forEach((w) =>
          w.classList.remove(t.params.pagination.paginationDisabledClass)
        )),
        v(),
        p(),
        d();
    },
    x = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: g } = t.pagination;
      g &&
        ((g = xe(g)),
        g.forEach((w) =>
          w.classList.add(t.params.pagination.paginationDisabledClass)
        )),
        y();
    };
  Object.assign(t.pagination, {
    enable: _,
    disable: x,
    render: p,
    update: d,
    init: v,
    destroy: y,
  });
}
function Fd(e) {
  let { swiper: t, extendParams: n, on: s, emit: i, params: r } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let l,
    o,
    a = r && r.autoplay ? r.autoplay.delay : 3e3,
    u = r && r.autoplay ? r.autoplay.delay : 3e3,
    c,
    f = new Date().getTime(),
    d,
    p,
    v,
    y,
    _,
    x,
    g;
  function w(F) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (F.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", w),
        !(g || (F.detail && F.detail.bySwiperTouchMove)) && M()));
  }
  const b = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (d = !0) : d && ((u = c), (d = !1));
      const F = t.autoplay.paused ? c : f + u - new Date().getTime();
      (t.autoplay.timeLeft = F),
        i("autoplayTimeLeft", F, F / a),
        (o = requestAnimationFrame(() => {
          b();
        }));
    },
    E = () => {
      let F;
      return (
        t.virtual && t.params.virtual.enabled
          ? (F = t.slides.find((pe) =>
              pe.classList.contains("swiper-slide-active")
            ))
          : (F = t.slides[t.activeIndex]),
        F ? parseInt(F.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    A = (F) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(o), b();
      let oe = typeof F > "u" ? t.params.autoplay.delay : F;
      (a = t.params.autoplay.delay), (u = t.params.autoplay.delay);
      const pe = E();
      !Number.isNaN(pe) &&
        pe > 0 &&
        typeof F > "u" &&
        ((oe = pe), (a = pe), (u = pe)),
        (c = oe);
      const ye = t.params.speed,
        we = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(ye, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, ye, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(ye, !0, !0), i("autoplay"))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, ye, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((f = new Date().getTime()),
              requestAnimationFrame(() => {
                A();
              })));
        };
      return (
        oe > 0
          ? (clearTimeout(l),
            (l = setTimeout(() => {
              we();
            }, oe)))
          : requestAnimationFrame(() => {
              we();
            }),
        oe
      );
    },
    z = () => {
      (f = new Date().getTime()),
        (t.autoplay.running = !0),
        A(),
        i("autoplayStart");
    },
    D = () => {
      (t.autoplay.running = !1),
        clearTimeout(l),
        cancelAnimationFrame(o),
        i("autoplayStop");
    },
    P = (F, oe) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(l), F || (x = !0);
      const pe = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", w)
            : M();
      };
      if (((t.autoplay.paused = !0), oe)) {
        _ && (c = t.params.autoplay.delay), (_ = !1), pe();
        return;
      }
      (c = (c || t.params.autoplay.delay) - (new Date().getTime() - f)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), pe());
    },
    M = () => {
      (t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((f = new Date().getTime()),
        x ? ((x = !1), A(c)) : A(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    $ = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const F = lt();
      F.visibilityState === "hidden" && ((x = !0), P(!0)),
        F.visibilityState === "visible" && M();
    },
    K = (F) => {
      F.pointerType === "mouse" &&
        ((x = !0), (g = !0), !(t.animating || t.autoplay.paused) && P(!0));
    },
    Y = (F) => {
      F.pointerType === "mouse" && ((g = !1), t.autoplay.paused && M());
    },
    ne = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", K),
        t.el.addEventListener("pointerleave", Y));
    },
    se = () => {
      t.el &&
        typeof t.el != "string" &&
        (t.el.removeEventListener("pointerenter", K),
        t.el.removeEventListener("pointerleave", Y));
    },
    G = () => {
      lt().addEventListener("visibilitychange", $);
    },
    Z = () => {
      lt().removeEventListener("visibilitychange", $);
    };
  s("init", () => {
    t.params.autoplay.enabled && (ne(), G(), z());
  }),
    s("destroy", () => {
      se(), Z(), t.autoplay.running && D();
    }),
    s("_freeModeStaticRelease", () => {
      (v || x) && M();
    }),
    s("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? D() : P(!0, !0);
    }),
    s("beforeTransitionStart", (F, oe, pe) => {
      t.destroyed ||
        !t.autoplay.running ||
        (pe || !t.params.autoplay.disableOnInteraction ? P(!0, !0) : D());
    }),
    s("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          D();
          return;
        }
        (p = !0),
          (v = !1),
          (x = !1),
          (y = setTimeout(() => {
            (x = !0), (v = !0), P(!0);
          }, 200));
      }
    }),
    s("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !p)) {
        if (
          (clearTimeout(y),
          clearTimeout(l),
          t.params.autoplay.disableOnInteraction)
        ) {
          (v = !1), (p = !1);
          return;
        }
        v && t.params.cssMode && M(), (v = !1), (p = !1);
      }
    }),
    s("slideChange", () => {
      t.destroyed || !t.autoplay.running || (_ = !0);
    }),
    Object.assign(t.autoplay, { start: z, stop: D, pause: P, resume: M });
}
const Nd = { class: "slider-container" },
  Hd = Xe({
    __name: "AppSwiper",
    setup(e) {
      return (t, n) => (
        me(),
        Se("div", Nd, [
          U(
            Re(Id),
            {
              modules: [Re($d), Re(zd), Re(Fd)],
              "slides-per-view": 1,
              "space-between": 20,
              autoplay: { delay: 5e3 },
              loop: !0,
              pagination: { el: ".swiper-custom-pagination", clickable: !0 },
              navigation: {
                nextEl: ".swiper-custom-next",
                prevEl: ".swiper-custom-prev",
              },
              class: "mySwiper",
            },
            { default: be(() => [il(t.$slots, "default")]), _: 3 },
            8,
            ["modules"]
          ),
          n[0] ||
            (n[0] = fi(
              '<div class="flex items-center justify-end my-4"><div class="pagination-container flex items-center justify-center"><div class="swiper-custom-prev cursor-pointer text-[#E2E8F0]"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.01396 4.21367L3.71808 6.50955C3.69675 6.53088 3.67142 6.5478 3.64355 6.55934C3.61568 6.57089 3.58581 6.57683 3.55564 6.57683C3.52548 6.57683 3.49561 6.57089 3.46774 6.55934C3.43986 6.5478 3.41454 6.53088 3.39321 6.50955C3.37188 6.48822 3.35496 6.46289 3.34341 6.43502C3.33187 6.40715 3.32593 6.37728 3.32593 6.34711C3.32593 6.31695 3.33187 6.28708 3.34341 6.25921C3.35496 6.23133 3.37188 6.20601 3.39321 6.18468L5.52695 4.05123L3.39321 1.91778C3.35013 1.8747 3.32593 1.81627 3.32593 1.75535C3.32593 1.69443 3.35013 1.636 3.39321 1.59292C3.43629 1.54984 3.49472 1.52563 3.55564 1.52563C3.61657 1.52563 3.675 1.54984 3.71808 1.59292L6.01396 3.8888C6.03531 3.91012 6.05224 3.93544 6.06379 3.96331C6.07535 3.99119 6.08129 4.02106 6.08129 4.05123C6.08129 4.0814 6.07535 4.11128 6.06379 4.13915C6.05224 4.16702 6.03531 4.19234 6.01396 4.21367Z" fill="#E2E8F0"></path></svg></div><div class="swiper-custom-pagination px-5"></div><div class="swiper-custom-next cursor-pointer"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.69944 6.18468C5.72077 6.20601 5.73769 6.23133 5.74923 6.25921C5.76078 6.28708 5.76672 6.31695 5.76672 6.34711C5.76672 6.37728 5.76078 6.40715 5.74923 6.43502C5.73769 6.46289 5.72077 6.48822 5.69944 6.50955C5.67811 6.53088 5.65278 6.5478 5.62491 6.55934C5.59704 6.57089 5.56717 6.57683 5.537 6.57683C5.50684 6.57683 5.47696 6.57089 5.44909 6.55934C5.42122 6.5478 5.3959 6.53088 5.37457 6.50955L3.07869 4.21367C3.05734 4.19234 3.04041 4.16702 3.02885 4.13915C3.0173 4.11128 3.01135 4.0814 3.01135 4.05123C3.01135 4.02106 3.0173 3.99119 3.02885 3.96331C3.04041 3.93544 3.05734 3.91012 3.07869 3.8888L5.37457 1.59292C5.41765 1.54984 5.47608 1.52563 5.537 1.52563C5.59793 1.52563 5.65636 1.54984 5.69944 1.59292C5.74252 1.636 5.76672 1.69443 5.76672 1.75535C5.76672 1.81627 5.74252 1.8747 5.69944 1.91778L3.5657 4.05123L5.69944 6.18468Z" fill="#E2E8F0"></path></svg></div></div></div>',
              1
            )),
        ])
      );
    },
  });
const jd = { class: "absolute bottom-4 right-4 space-y-4" },
  Vd = { class: "text-3xl text-white" },
  kd = { class: "flex items-center text-white mt-1 w-[250px] justify-between" },
  Gd = { class: "flex items-center gap-x-2 text-sm" },
  Wd = { class: "text-sm" },
  qd = {
    class:
      "flex items-center justify-center bg-[#1D293D] text-xs text-white px-3 py-1 rounded-full",
  },
  Ud = { class: "text-sm" },
  Kd = { class: "flex items-center gap-x-3" },
  Yd = { class: "text-sm text-[#CAD5E2] tracking-wide w-[500px] text-wrap" },
  Xd = Xe({
    __name: "ThumbnailBox",
    props: { movies: {}, avatars: {} },
    setup(e) {
      const t = e,
        n = [
          { src: "/dist/images/avatar-1.jpg", alt: "User 1" },
          { src: "/dist/images/avatar-1.jpg", alt: "User 2" },
          { src: "/dist/images/avatar-1.jpg", alt: "User 3" },
          { src: "/dist/images/avatar-1.jpg", alt: "User 4" },
          { src: "/dist/images/avatar-1.jpg", alt: "User 5" },
        ],
        s = t.avatars || n,
        i = Array.isArray(t.movies) ? t.movies : [t.movies];
      return (r, l) => (
        me(),
        mn(Hd, null, {
          default: be(() => [
            (me(!0),
            Se(
              Me,
              null,
              Is(
                Re(i),
                (o) => (
                  me(),
                  mn(
                    Re(Ad),
                    { key: o.id || Math.random() },
                    {
                      default: be(() => [
                        V(
                          "div",
                          {
                            style: xn({
                              backgroundImage: `url(${o.coverImage})`,
                            }),
                            class:
                              "bg-cover p-5 relative bg-center h-[446px] rounded-[.9rem] w-full",
                          },
                          [
                            l[5] ||
                              (l[5] = V(
                                "div",
                                { class: "absolute inset-0 bg-black/50" },
                                null,
                                -1
                              )),
                            V("div", jd, [
                              V("h2", Vd, Ve(o.title), 1),
                              V("div", kd, [
                                V("div", Gd, [
                                  V("span", null, Ve(o.rating) + "/10", 1),
                                  l[0] ||
                                    (l[0] = V(
                                      "img",
                                      {
                                        src: rf,
                                        alt: "imdb",
                                        class: "w-[24px] h-3",
                                      },
                                      null,
                                      -1
                                    )),
                                ]),
                                l[1] ||
                                  (l[1] = V(
                                    "div",
                                    {
                                      class:
                                        "size-[5px] rounded-full bg-[#D9D9D9]",
                                    },
                                    null,
                                    -1
                                  )),
                                V("p", Wd, Ve(Re(Vl)(o.duration)), 1),
                                l[2] ||
                                  (l[2] = V(
                                    "div",
                                    {
                                      class:
                                        "size-[5px] rounded-full bg-[#D9D9D9]",
                                    },
                                    null,
                                    -1
                                  )),
                                V("button", qd, Ve(o.ageRating), 1),
                                l[3] ||
                                  (l[3] = V(
                                    "div",
                                    {
                                      class:
                                        "size-[5px] rounded-full bg-[#D9D9D9]",
                                    },
                                    null,
                                    -1
                                  )),
                                V("h6", Ud, Ve(o.year), 1),
                              ]),
                              V("div", Kd, [
                                (me(!0),
                                Se(
                                  Me,
                                  null,
                                  Is(
                                    o.genres,
                                    (a, u) => (
                                      me(),
                                      Se(
                                        "button",
                                        {
                                          key: u,
                                          class:
                                            "flex items-center justify-center bg-[#1D293D] text-xs text-white px-3 py-1 rounded-full",
                                        },
                                        Ve(a),
                                        1
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                              U(Dd, { avatars: Re(s) }, null, 8, ["avatars"]),
                              V("p", Yd, Ve(o.description), 1),
                              l[4] ||
                                (l[4] = V(
                                  "div",
                                  { class: "flex items-center gap-x-3" },
                                  [
                                    V(
                                      "button",
                                      {
                                        class:
                                          "bg-[#BEDBFF] flex items-center gap-x-1 justify-center p-2 rounded-full text-[#020618] text-xs",
                                      },
                                      [
                                        V("span", null, "دانلود"),
                                        V(
                                          "svg",
                                          {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                          },
                                          [
                                            V("path", {
                                              d: "M13.6062 8.64411V12.3175C13.6062 12.4393 13.5578 12.5561 13.4717 12.6422C13.3856 12.7283 13.2688 12.7767 13.147 12.7767H3.04511C2.92333 12.7767 2.80654 12.7283 2.72043 12.6422C2.63431 12.5561 2.58594 12.4393 2.58594 12.3175L2.58594 8.64411C2.58594 8.52233 2.63431 8.40554 2.72043 8.31943C2.80654 8.23331 2.92333 8.18494 3.04511 8.18494C3.16689 8.18494 3.28369 8.23331 3.3698 8.31943C3.45591 8.40554 3.50429 8.52233 3.50429 8.64411L3.50429 11.8583H12.6878V8.64411C12.6878 8.52233 12.7362 8.40554 12.8223 8.31943C12.9084 8.23331 13.0252 8.18494 13.147 8.18494C13.2688 8.18494 13.3856 8.23331 13.4717 8.31943C13.5578 8.40554 13.6062 8.52233 13.6062 8.64411ZM7.77119 8.96898C7.81383 9.01167 7.86447 9.04554 7.92022 9.06865C7.97596 9.09176 8.03571 9.10365 8.09605 9.10365C8.1564 9.10365 8.21615 9.09176 8.27189 9.06865C8.32763 9.04554 8.37828 9.01167 8.42092 8.96898L10.7168 6.6731C10.7595 6.63044 10.7933 6.57979 10.8164 6.52405C10.8395 6.46831 10.8514 6.40857 10.8514 6.34823C10.8514 6.2879 10.8395 6.22816 10.8164 6.17242C10.7933 6.11667 10.7595 6.06603 10.7168 6.02337C10.6741 5.9807 10.6235 5.94686 10.5678 5.92377C10.512 5.90068 10.4523 5.8888 10.3919 5.8888C10.3316 5.8888 10.2719 5.90068 10.2161 5.92377C10.1604 5.94686 10.1097 5.9807 10.0671 6.02337L8.55523 7.53578V2.21565C8.55523 2.09386 8.50685 1.97707 8.42074 1.89096C8.33463 1.80485 8.21783 1.75647 8.09605 1.75647C7.97427 1.75647 7.85748 1.80485 7.77137 1.89096C7.68525 1.97707 7.63688 2.09386 7.63688 2.21565V7.53578L6.12504 6.02337C6.03888 5.93721 5.92202 5.8888 5.80017 5.8888C5.67832 5.8888 5.56146 5.93721 5.4753 6.02337C5.38914 6.10953 5.34074 6.22638 5.34074 6.34823C5.34074 6.47008 5.38914 6.58694 5.4753 6.6731L7.77119 8.96898Z",
                                              fill: "#020618",
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    V(
                                      "button",
                                      {
                                        class:
                                          "bg-[#193CB8] p-2 flex items-center justify-center gap-x-1 rounded-full text-xs text-[#BEDBFF]",
                                      },
                                      [
                                        V(
                                          "svg",
                                          {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                          },
                                          [
                                            V("path", {
                                              d: "M7.91302 1.75647C6.73241 1.75647 5.5783 2.10656 4.59666 2.76248C3.61501 3.41839 2.84992 4.35067 2.39811 5.44141C1.94631 6.53216 1.8281 7.73238 2.05843 8.89031C2.28875 10.0482 2.85727 11.1119 3.69209 11.9467C4.52691 12.7815 5.59054 13.35 6.74847 13.5804C7.9064 13.8107 9.10662 13.6925 10.1974 13.2407C11.2881 12.7889 12.2204 12.0238 12.8763 11.0421C13.5322 10.0605 13.8823 8.90638 13.8823 7.72576C13.8806 6.14312 13.2512 4.62578 12.1321 3.50668C11.013 2.38758 9.49566 1.75814 7.91302 1.75647ZM7.91302 12.7767C6.91404 12.7767 5.93749 12.4805 5.10687 11.9255C4.27625 11.3705 3.62885 10.5816 3.24656 9.65867C2.86427 8.73573 2.76424 7.72016 2.95913 6.74037C3.15402 5.76059 3.63508 4.86059 4.34147 4.15421C5.04785 3.44782 5.94784 2.96677 6.92763 2.77187C7.90742 2.57698 8.92299 2.67701 9.84593 3.0593C10.7689 3.4416 11.5577 4.08899 12.1127 4.91961C12.6677 5.75023 12.964 6.72678 12.964 7.72576C12.9624 9.06489 12.4298 10.3487 11.4829 11.2956C10.536 12.2425 9.25215 12.7752 7.91302 12.7767ZM10.6681 7.72576C10.6681 7.84754 10.6197 7.96434 10.5336 8.05045C10.4475 8.13656 10.3307 8.18494 10.2089 8.18494H8.3722V10.0216C8.3722 10.1434 8.32382 10.2602 8.23771 10.3463C8.15159 10.4324 8.0348 10.4808 7.91302 10.4808C7.79124 10.4808 7.67445 10.4324 7.58833 10.3463C7.50222 10.2602 7.45384 10.1434 7.45384 10.0216V8.18494H5.61714C5.49536 8.18494 5.37856 8.13656 5.29245 8.05045C5.20634 7.96434 5.15796 7.84754 5.15796 7.72576C5.15796 7.60398 5.20634 7.48719 5.29245 7.40108C5.37856 7.31496 5.49536 7.26659 5.61714 7.26659H7.45384V5.42988C7.45384 5.3081 7.50222 5.19131 7.58833 5.10519C7.67445 5.01908 7.79124 4.9707 7.91302 4.9707C8.0348 4.9707 8.15159 5.01908 8.23771 5.10519C8.32382 5.19131 8.3722 5.3081 8.3722 5.42988V7.26659H10.2089C10.3307 7.26659 10.4475 7.31496 10.5336 7.40108C10.6197 7.48719 10.6681 7.60398 10.6681 7.72576Z",
                                              fill: "#BEDBFF",
                                            }),
                                          ]
                                        ),
                                        V("span", null, "واچ لیست"),
                                      ]
                                    ),
                                  ],
                                  -1
                                )),
                            ]),
                          ],
                          4
                        ),
                      ]),
                      _: 2,
                    },
                    1024
                  )
                )
              ),
              128
            )),
          ]),
          _: 1,
        })
      );
    },
  }),
  Zd = Xe({
    __name: "HomeWrapper",
    setup(e) {
      const t = [
        {
          id: 1,
          title: "I'm Still Here",
          coverImage: "/dist/pic-1.jpg",
          rating: "8.5",
          duration: "146",
          ageRating: "16+",
          year: "2024",
          genres: ["Drama", "History", "Biography"],
          description:
            "داستان مادری که پس از فروپاشی خانواده‌اش در یک حادثه طی دیکتاتوری نظامی در سال 1971 و در برزیل، باید دوباره روی پای خودش بایستد تا...",
        },
        {
          id: 2,
          title: "The Godfather",
          coverImage: "/dist/pic-1.jpg",
          rating: "9.2",
          duration: "175",
          ageRating: "18+",
          year: "1972",
          genres: ["Crime", "Drama"],
          description:
            "داستان خانواده کورلئونه، یکی از قدرتمندترین خانواده‌های مافیایی آمریکا در دهه ۱۹۴۰...",
        },
        {
          id: 3,
          title: "Interstellar",
          coverImage: "/dist/pic-1.jpg",
          rating: "8.7",
          duration: "169",
          ageRating: "13+",
          year: "2014",
          genres: ["Adventure", "Sci-Fi", "Drama"],
          description:
            "گروهی از فضانوردان از طریق یک کرم‌چاله به سفر بین ستاره‌ای می‌روند تا برای بشریت سیاره قابل سکونت جدیدی پیدا کنند...",
        },
      ];
      return (n, s) => (
        me(),
        Se(
          Me,
          null,
          [
            U(sf),
            U(Ou),
            U(Xd, { movies: t }),
            U(Xu),
            s[0] ||
              (s[0] = V(
                "hr",
                { class: "my-5 border-[#1D293D] border" },
                null,
                -1
              )),
            U($u),
          ],
          64
        )
      );
    },
  }),
  Qd = Xe({
    __name: "Home",
    setup(e) {
      return (t, n) => (me(), mn(Zd));
    },
  }),
  Jd = [{ path: "/", name: "Home", component: Qd }],
  ep = Eu({ history: eu(), routes: Jd });
hc(Sc).use(ep).use(yc()).mount("#app");
