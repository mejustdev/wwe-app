(function() {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    c(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === "childList")
        for (const t of r.addedNodes)
          t.tagName === "LINK" && t.rel === "modulepreload" && c(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const r = {};
    return e.integrity && (r.integrity = e.integrity), e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? r.credentials = "include" : e.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function c(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const r = i(e);
    fetch(e.href, r);
  }
})();
function u(n) {
  document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(n, 1) : document.addEventListener("DOMContentLoaded", n);
}
u(function() {
  var n = document.getElementById("qr-reader-results"), o, i = 0, c = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
  function e(t, s) {
    t !== o && (++i, o = t, console.log(`Scan result = ${t}`, s), n.innerHTML += `<div>[${i}] - ${t}</div>`, c.clear());
  }
  function r(t) {
  }
  c.render(e, r);
});
