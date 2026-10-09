import { t, toggleLanguage } from "../i18n/i18n.js";

export function renderNavbar() {
  return `
    <div class="app-header">
      <div class="container">
        <div class="app-header-top">
          <a class="app-brand" href="#/overview">
            <h1 class="app-brand-title">${t("nav.brandSpan")} ${t("nav.brand")}</h1>
            <p class="app-brand-sub">${t("nav.subtitle")}</p>
          </a>
          <a href="#" id="langToggle" class="app-pill app-lang">${t("nav.language")}</a>
        </div>

        <nav class="app-nav" aria-label="main navigation">
          <a class="app-pill" href="#/overview">${t("nav.overview")}</a>
          <a class="app-pill" href="#/search">${t("nav.search")}</a>
          <a class="app-pill" href="#/calculation">${t("nav.calculation")}</a>
          <a class="app-pill" href="#/books">${t("nav.books")}</a>
          <a class="app-pill" href="#/contact">${t("nav.contact")}</a>
        </nav>
      </div>
    </div>
  `;
}

function markActive() {
  const hash = window.location.hash || "#/overview";
  document.querySelectorAll(".app-nav .app-pill").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === hash);
  });
}

export function initNavbar() {
  const languageToggle = document.getElementById("langToggle");

  if (languageToggle) {
    languageToggle.addEventListener("click", (event) => {
      event.preventDefault();
      toggleLanguage();
      window.location.reload();
    });
  }

  markActive();
  window.addEventListener("hashchange", markActive);
}

export function mountNavbar(root) {
  if (!root) return;
  root.innerHTML = renderNavbar();
  initNavbar();
}