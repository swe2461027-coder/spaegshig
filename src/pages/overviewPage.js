import { t } from "../js/i18n/i18n.js";

export function renderOverviewPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <h2 class="page-title">${t("overview.title")}</h2>
    <p class="page-text">${t("overview.welcome")}</p>

    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-number">500+</div>
        <div class="stat-label">${t("overview.stat1")}</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">30+</div>
        <div class="stat-label">${t("overview.stat2")}</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">12</div>
        <div class="stat-label">${t("overview.stat3")}</div>
      </div>
    </div>
  `;
}