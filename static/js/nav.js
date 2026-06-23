// Mobile navigation toggle. Progressive enhancement: the markup works as a
// plain visible list without JS; this adds the collapsible hamburger behaviour.
(function () {
  var btn = document.querySelector(".site-nav__toggle");
  var nav = document.getElementById("site-nav");
  if (!btn || !nav) return;

  function setOpen(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
  }

  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  // Close after following a link (so the menu doesn't stay open on navigation)
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  // Close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  // Reset state when widening back to the desktop layout
  window.addEventListener("resize", function () {
    if (window.innerWidth > 640) setOpen(false);
  });
})();
