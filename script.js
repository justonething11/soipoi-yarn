// SOIPOI — Jiangsu Suyuan Baiyi Trading Co., Ltd.
// Site interactions: sticky header, mobile nav, scroll reveal, inquiry form.

(function () {
  "use strict";

  // ---- Sticky header ----
  var header = document.getElementById("siteHeader");
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 30);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Mobile nav toggle ----
  var toggle = document.getElementById("navToggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close nav after tapping a link (mobile)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Scroll reveal ----
  var revealEls = document.querySelectorAll(
    ".section-head, .about-grid, .product-card, .capability, .markets-grid, .contact-grid"
  );
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  // ---- Footer year ----
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ---- Inquiry form (mailto fallback — no backend on a static site) ----
  var form = document.getElementById("inquiryForm");
  var hint = document.getElementById("formHint");
  var CONTACT_EMAIL = "hedy_wang@soipoi.com";

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements["name"].value.trim();
      var email = form.elements["email"].value.trim();
      var message = form.elements["message"].value.trim();
      var company = form.elements["company"].value.trim();
      var country = form.elements["country"].value.trim();
      var interest = form.elements["interest"].value;

      if (!name || !email || !message) {
        if (hint) {
          hint.textContent = "Please fill in your name, email and requirement.";
          hint.classList.add("error");
        }
        return;
      }
      if (hint) {
        hint.textContent = "";
        hint.classList.remove("error");
      }

      var subject = "Yarn inquiry from " + name + (company ? " (" + company + ")" : "");
      var body = [
        "Name: " + name,
        "Company: " + (company || "-"),
        "Country / Region: " + (country || "-"),
        "Product interest: " + (interest || "-"),
        "Email: " + email,
        "",
        "Requirement:",
        message
      ].join("\n");

      var mailto =
        "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;

      if (hint) {
        hint.textContent = "Opening your email client… if nothing happens, email us directly at " + CONTACT_EMAIL + ".";
      }
    });
  }
})();
