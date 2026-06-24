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

// Light/dark theme toggle. Light is the default; the chosen theme is stored in
// localStorage and applied pre-paint by the inline script in head.html.
(function () {
  var btn = document.querySelector(".site-theme-toggle");
  if (!btn) return;

  function isDark() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }
  function apply(dark) {
    if (dark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
  }

  apply(isDark()); // sync the button to the pre-painted state

  btn.addEventListener("click", function () {
    var next = !isDark();
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch (e) {}
    apply(next);
  });
})();

// Table-of-contents scroll spy. Highlights the link for the heading nearest the
// top of the viewport. No-op on pages without a rendered .prose-toc.
(function () {
  var toc = document.querySelector(".prose-toc");
  if (!toc || !("IntersectionObserver" in window)) return;

  var links = Array.prototype.slice.call(toc.querySelectorAll("a[href^='#']"));
  if (!links.length) return;

  var byId = {};
  var headings = [];
  links.forEach(function (a) {
    var id = decodeURIComponent(a.getAttribute("href").slice(1));
    var el = document.getElementById(id);
    if (el) { byId[id] = a; headings.push(el); }
  });

  var current = null;
  function setCurrent(a) {
    if (a === current) return;
    if (current) current.classList.remove("is-current");
    if (a) a.classList.add("is-current");
    current = a;
  }

  var visible = {};
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      visible[entry.target.id] = entry.isIntersecting;
    });
    // Pick the first heading (in document order) currently in view.
    for (var i = 0; i < headings.length; i++) {
      if (visible[headings[i].id]) { setCurrent(byId[headings[i].id]); return; }
    }
  }, { rootMargin: "0px 0px -70% 0px", threshold: 0 });

  headings.forEach(function (el) { observer.observe(el); });
})();
