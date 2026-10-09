import { mountNavbar } from "./components/navbar.js";
import { initRouter } from "./router.js";
import { routes } from "./routes.js";

const navbarRoot = document.getElementById("app-header");
mountNavbar(navbarRoot);

initRouter(routes);