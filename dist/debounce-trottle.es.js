const r = (n, s) => {
  let e;
  return function() {
    const t = this, l = arguments;
    clearTimeout(e), e = setTimeout(() => {
      n.apply(t, l);
    }, s);
  };
}, c = (n, s, e = !1) => {
  let t = null, l = !0;
  return function() {
    const u = e && l, o = () => {
      n.apply(this, arguments), t = null;
    };
    u && (l = !1, o()), t || (t = setTimeout(o, s));
  };
};
export {
  r as debounce,
  c as throttle
};
