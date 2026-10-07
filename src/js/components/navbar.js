export function renderNavbar() {
  const navbarHTML = `
    <nav class="navbar is-white app-sticky app-shadow" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item app-logo" href="#/overview">
            <img src="./img/icon/icon.png" alt="Logo">
            <span class="logo-text-orange">MONGOLIAN</span>
            <span class="logo-text-green">FOOD COMPOSITION DATABASE</span>
          </a>

          <a role="button" class="navbar-burger" id="navbarBurger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <a href="#/overview" class="navbar-item">
              <i class="fas fa-question-circle text-orange"></i> Overview
            </a>
            <a href="#/search" class="navbar-item">
              <i class="fas fa-search text-green"></i> Search
            </a>
            <a href="#/calculation" class="navbar-item">
              <i class="fas fa-calculator text-blue"></i> Food Calculator
            </a>
            <a href="#/books" class="navbar-item">
              <i class="fas fa-book text-lightblue"></i> Books
            </a>
            <a href="#/contact" class="navbar-item">
              <i class="fas fa-address-card text-pink"></i> Contact us
            </a>
            <span class="navbar-item lang-switch">MN</span>
          </div>
        </div>
      </div>
    </nav>
  `;

  // DOM руу оруулах
  const headerElem = document.getElementById("app-header");
  if (headerElem) {
    headerElem.innerHTML = navbarHTML;
    
    // Burger товчлуур дээр дарахад цэс нээгдэх event
    const burger = document.getElementById("navbarBurger");
    const menu = document.getElementById("navbarMenu");
    
    if (burger && menu) {
      burger.addEventListener("click", () => {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
      });
    }
  }
}