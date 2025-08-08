<template>
  <footer id="footer" class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Section 1 -->
        <div class="footer-logo-section">
          <a href="/Crypgo">
            <img src="/images/logo.svg" alt="logo" class="footer-logo" />
          </a>
          <div class="social-icons">
            <a href="#" class="icon-group" aria-label="Facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="icon-group" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" class="icon-group" aria-label="Twitter">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
          <h3 class="footer-copy">2025 Copyright | Crypgo</h3>
          <h3 class="footer-copy">
            Distributed by
            <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
          </h3>
        </div>

        <!-- Section 2 -->
        <div class="footer-column">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Buy & Sell</a></li>
            <li><a href="/">Development</a></li>
            <li><a href="/">Work</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Upgrade</a></li>
            <li><a href="/">Docs</a></li>
          </ul>
        </div>

        <!-- Section 3 -->
        <div class="footer-column">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Disclosures</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Latest News</a></li>
          </ul>
        </div>

        <!-- Section 4 -->
        <div class="footer-subscribe">
          <h4>Subscribe</h4>
          <p>Subscribe to get the latest <br />news from us</p>
          <div class="subscribe-input">
            <input type="email" placeholder="Enter Email" />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" class="send-icon" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: #fff;
  padding: 40px 20px;
  font-family: 'DM Sans', sans-serif;
}

.footer-container {
  max-width: 1400px;
  margin: auto;
}

.footer-grid {
  display: grid;
  gap: 20px;
}

.footer-logo-section{
  width: max-content;
}

@media (max-width:320px){
  .footer-logo-section{
    width: auto;
  }
}

/* Margin Adjustments Based on Resolution */
@media (min-width: 2560px) {
  .footer-container {
    margin-left: 680px;
    margin-right: 680px;
  }
}

@media (min-width: 1440px) and (max-width: 2559px) {
  .footer-container {
    margin-left: 120px;
    margin-right: 120px;
  }
}

@media (max-width: 1439px) {
  .footer-container {
    margin: 0;
  }
}

.footer-container {
  padding-left: 16px;
  padding-right: 16px;
}

.footer {
  padding-top: 64px;
  color: white;
}

.footer-copy a{
  color: #fff;
  text-decoration: none;
}

@media (min-width: 768px) {
  .footer-copy {
    margin-top: 80px;
  }
}

/* Grid Layout */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding-bottom: 64px;
}


/* ≥1024px → 1 row, 4 equal columns */
@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* 768px–1023px → 2 rows, 3 columns */
@media (min-width: 768px) and (max-width: 1023px) {
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
  }

  /* Section-4 on second row, first column */
  .footer-subscribe {
    grid-column: 1 / 2; /* column 1 */
    grid-row: 2; /* second row */
  }
}

/* <768px → stacked layout */
@media (max-width: 767px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}

/* Social icons styling */
.social-icons {
  margin-top: 32px;
  display: flex;
  gap: 20px;
}

.social-icons i {
  font-size: 24px;
  color: #fff;
  transition: color 0.3s ease;
  margin-top: 32px;
  height: 24px;
  width: 24px;
}

/* Default: below 768px → 48px top margin */
.footer-copy {
  margin-top: 48px;
  font-size: 24px;
  font-weight: 500;
}

/* ≥768px → 80px top margin */
@media (min-width: 768px) {
  .footer-copy {
    margin-top: 80px;
    margin-bottom: 0px;
  }
}

.footer-column h4,
.footer-subscribe h4 {
  margin-bottom: 16px;
  margin-top: 0px;
  font-size: 24px;
  font-weight: 500;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0px;
}

.footer-column li {
  padding-bottom: 16px;
  font-size:18px;
}

.footer-column a {
  color: #fff;
  text-decoration: none;
}

.footer-column a:hover {
  color: rgb(153, 227, 158);
}

.footer-subscribe p{
  margin-top: 20px;
  color: #dbd8d899;
  font-size: 18px;
}

/* Subscribe input */
.subscribe-input {
  display: flex;
  align-items: center;
  padding: 16px 24px;
  border: 1px solid rgba(149, 149, 149, 0.6);
  border-radius: 8px;
  margin-top: 10px;
  width:220px;
  height: 20px;
}

.subscribe-input input {
  flex: 1;
  border: none;
  background: transparent;
  font-size:16px;
  outline: none;
  color: white;
}

.subscribe-input button {
  background: transparent;
  border: none;
  color: rgb(153, 227, 158);
  cursor: pointer;
  padding-right: 20px;
}

.subscribe-input:focus-within {
  border: 2px solid#fff;;
}


</style>
