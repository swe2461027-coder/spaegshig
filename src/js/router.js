import { routes } from "./routes.js";

const DEFAULT_ROUTE = "#/overview";

function setActiveLink(hash) {
  document.querySelectorAll("nav a").forEach((a) => {
    const active = a.getAttribute("href") === hash;
    a.classList.toggle("is-primary", active);
    a.classList.toggle("is-light", !active);
  });
}

export function renderRoute() {
  const hash = window.location.hash || DEFAULT_ROUTE;
  const page = routes[hash] || routes["#/404"];

  try {
    page();
  } catch (error) {
    document.getElementById("app").innerHTML = `
      <section class="section"><div class="container">
        <div class="notification is-danger">Алдаа: ${error.message}</div>
      </div></section>`;
    console.error(error);
  }

  setActiveLink(hash);
}

export function initRouter() {
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
}