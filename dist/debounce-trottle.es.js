const r = (c, o) => {
  let e;
  const t = function() {
    const n = this, l = arguments;
    clearTimeout(e), e = setTimeout(() => {
      c.apply(n, l);
    }, o);
  };
  return t.cancel = () => {
    clearTimeout(e);
  }, t;
}, i = (c, o, e = !1) => {
  let t = null, n = !0;
  const l = function() {
    const s = e && n, u = () => {
      c.apply(this, arguments), t = null;
    };
    s && (n = !1, u()), t || (t = setTimeout(u, o));
  };
  return l.cancel = () => {
    clearTimeout(t), t = null, n = !0;
  }, l;
};
export {
  r as debounce,
  i as throttle
};
