<template>
    <footer class="footer">
        <div class="content-box">
        <div class="information">
            <div class="column-1">
                <a href="">
                    <img src="/images/logo.svg" alt="">
                </a>
                <div class="icon-palce">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <p>2025 Copright | Crypgo</p>
                    <a href="">Distributed by ThemeWagon</a>
                </div>
            </div>
            <div class="column-2">
            <h3 class="lines-column">Links</h3>
            <ul>
                <li><a href="">Buy & Sell</a></li>
                <li><a href="">Development</a></li>
                <li><a href="">Work</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Upgrade</a></li>
                <li><a href="">Docs</a></li>
            </ul>
            </div>
            <div class="column-3">
                <h3>Information</h3>
                <ul>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Disclosures</a></li>
                    <li><a href="">Disclosures</a></li>
                    <li><a href="">Latest News</a></li>
                </ul>
            </div>
            <div class="column-4">
                <h3>
                    Subscribe
                </h3>
                <p>Subscribe to get the latest
                    <br>
                    news form us
                </p>
                <div class="input-container">
                    <input type="text" placeholder="Enter Email">
                    <i class="fa-solid fa-paper-plane"></i>
                </div>

            </div>
        </div>
        </div> 
    </footer>
</template>


<style scoped>
.content-box {
  margin-left: 0;
  margin-right: 0;
  padding-left: 16px;
  padding-right: 16px;
}

.information {
  padding-bottom: 64px;
  display: grid;
  grid-template-columns: 1fr; /* default for mobile */
  gap: 2rem;
}

img {
  width: 195px;
  height: 55px;
  max-width: 100%;
  height: auto;
  display: block;
}



/* Link styling */
a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: rgb(153, 227, 158);
}

/* Remove list dots */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Input with icon styling */
.input-container {
  position: relative;
  width: 100%;
  max-width: 300px;
}

.input-container input {
  width: 100%;
  padding: 10px 24px 10px 12px; /* reduced from 32px to 24px */
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #000;
}

.input-container i {
  position: absolute;
  right: 6px; /* reduced from 8px to 6px */
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  cursor: pointer;
  transition: color 0.3s ease;
}



.input-container i:hover {
  color: rgb(153, 227, 158);
}

/* Responsive grid layout */
@media (min-width: 768px) {
  .information {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .information {
    grid-template-columns: 2fr 1fr 1fr 2fr; /* dynamic layout */
  }
}

/* Laptop screens */
@media (min-width: 1024px) {
  .content-box {
    margin-left: 120px;
    margin-right: 120px;
  }
}

/* 4K screens */
@media (min-width: 2560px) {
  .content-box {
    margin-left: 680px;
    margin-right: 680px;
  }
}

</style>
