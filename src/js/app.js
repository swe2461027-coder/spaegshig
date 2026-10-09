import { mountNavbar } from "./components/navbar.js";
import { initRouter } from "./router.js";
import { routes } from "./routes.js";
import { t } from "./i18n/i18n.js";

mountNavbar(document.getElementById("navbar"));

const footer = document.getElementById("footer");
if (footer) footer.textContent = t("footer");

initRouter(routes);