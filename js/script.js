:root {
  --primary: #00fc65;
  --bg: #010101;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--bg);
  color: #fff;
}

html {
  scroll-behavior: smooth;
}

/*nav bar*/

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 7%;
  background-color: rgba(1, 1, 1, 0.8);
  border-bottom: 1px solid var(--primary);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.navbar .navbar-logo {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  font-style: italic;
}

.navbar .navbar-logo span {
  color: var(--primary);
}

.navbar .navbar-nav a {
  color: #fff;
  display: inline-block;
  font-size: 1.2rem;
  margin: 0 1rem;
}

.navbar .navbar-nav a:hover {
  color: var(--primary);
}

.navbar .navbar-nav a::after {
  content: "";
  display: block;
  padding: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid var(--primary);
  transform: scaleX(0);
  transition: 0.3s linear;
}

.navbar .navbar-nav a:hover::after {
  transform: scaleX(0.5);
}

.navbar .navbar-extra a {
  color: #fff;
  margin: 0 0.5rem;
}

.navbar .navbar-extra a:hover {
  color: var(--primary);
}

#hamburger-menu {
  display: none;
}

/* navbar search */

.navbar .search-form {
  position: absolute;
  top: 100%;
  right: 7%;
  background-color: #fff;
  width: 50rem;
  height: 5rem;
  display: flex;
  align-items: center;
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.3s;
}

.navbar .search-form.active {
  transform: scaleY(1);
}

.navbar .search-form input {
  height: 100%;
  width: 100%;
  font-size: 1.6rem;
  color: var(--primary);
  padding: 1rem;
}

.navbar .search-form label {
  cursor: pointer;
  font-size: 2rem;
  margin-right: 1.5rem;
  color: var(--primary);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/*shopping card */

#shopping-cart-button {
  position: relative;
}

#shopping-cart-button .quantity-badge {
  display: inline-block;
  padding: 1px 5px;
  background-color: red;
  border-radius: 6px;
  font-size: 0.8rem;
  position: absolute;
  top: 0;
  right: -7px;
}

.shopping-cart {
  position: absolute;
  top: 100%;
  right: -100%;
  height: 100vh;
  width: 35rem;
  padding: 0 1.5rem;
  background-color: #fff;
  color: var(--bg);
  transition: 0.5s;
}

.shopping-cart.active {
  right: 0;
}

.shopping-cart .cart-items {
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed #666;
  position: relative;
}

.shopping-cart img {
  height: 4rem;
  border-radius: 50%;
}

.shopping-cart h3 {
  font-size: 1.4rem;
}

.shopping-cart .items-price {
  font-size: 1.2rem;
}

.shopping-cart .cart-items #add,
.shopping-cart .cart-items #remove {
  display: inline-block;
  padding: 2px 5px;
  cursor: pointer;
  margin: 0 8px;
  background-color: var(--primary);
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
}

.shopping-cart h4 {
  font-size: 1.6rem;
  margin-top: -1rem;
  text-align: center;
}

/* checkout form */

.form-container {
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px dashed black;
  margin-top: 1rem;
  padding: 1rem;
}

.form-container h5 {
  text-align: center;
  font-size: 1rem;
}

.form-container form {
  width: 100%;
  text-align: center;
}

.form-container label {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
}

.form-container span {
  text-align: right;
}

.form-container input {
  background-color: #ddd;
  padding: 5px;
  font-size: 1rem;
  width: 70%;
}

.form-container .checkout-button {
  padding: 6px 14px;
  background-color: royalblue;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 20px;
  margin: 1rem auto;
  cursor: pointer;
}

.form-container .checkout-button.disabled {
  background-color: #999;
  cursor: not-allowed;
}

/*Hero selection*/

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url("../img/header-bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  mask-image: linear-gradient(rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
}

/* .hero::after {
content: "";
display: block;
position: absolute;
width: 100%;
height: 25%;
bottom: 0;
background: linear-gradient(
  0deg,
  rgba(1, 1, 3, 1) 8%,
  rgba(255, 255, 255, 0) 50%
);
} */

.hero .mask-container {
  position: absolute;
  /*background: salmon;*/
  inset: 0;
  /*foto svg erorr*/
  mask-image: url("../img/header-bg.svg");
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-position: center;
}

.hero .content {
  padding: 1.4rem 4%;
  /*max-width: 60rem; */
  width: 100%;
  text-align: center;
  position: fixed;
  top: 120px;
}

.hero .content h1 {
  font-size: 4em;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
  line-height: 1.2;
}

.hero .content h1 span {
  color: var(--primary);
}

.hero .content p {
  font-size: 1.6rem;
  margin-top: 1rem;
  line-height: 1.4;
  font-weight: 100;
  text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
  mix-blend-mode: difference;
}

.hero .content .cta {
  margin-top: 1rem;
  display: inline-block;
  padding: 1rem 3rem;
  font-size: 1.4rem;
  color: #fff;
  background-color: var(--primary);
  border-radius: 0.5rem;
  box-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
}

/* about section about */

.about,
.menu,
.contact {
  padding: 7rem 7% 1.4rem;
}

.about h2,
.menu h2,
.contact h2 {
  text-align: center;
  font-size: 2.6rem;
  margin-bottom: 3rem;
}

.about h2 span,
.menu h2 span,
.contact h2 span {
  color: var(--primary);
}

.about .row {
  display: flex;
}

.about .row .about-img {
  flex: 1 1 45rem;
}

.about .row .about-img img {
  width: 100%;
  mask-image: url("../img/menu/1763305.svg");
  mask-size: 90%;
  mask-repeat: no-repeat;
  mask-position: center;
}

.about .row .content {
  flex: 1 1 35rem;
  padding: 0 1rem;
  margin: auto;
}

.about .row .content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.about .row .content p {
  margin-bottom: 0.8rem;
  font-size: 1 4rem;
  font-weight: 100;
  line-height: 1.6;
}

/*menu*/

.menu h2,
.contact h2 {
  margin-bottom: 1rem;
}

.menu p,
.contact p {
  text-align: center;
  max-width: 30rem;
  margin: auto;
  font-weight: 100;
  line-height: 1.6;
  font-size: 1.2rem;
}

.menu .row {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  justify-content: center;
}

.menu .row .menu-card {
  padding-bottom: 4rem;
}

.menu .menu-card {
  text-align: center;
  border: 1px solid #666;
  border-radius: 5rem;
  padding: 2rem;
  margin: 1.5rem;
}

.menu .row .menu-card img {
  border-radius: 50%;
  width: 80%;
}

.menu .row .menu-card .menu-card-title {
  font-size: 2rem;
  margin: 1rem auto 0.5rem;
}

.menu .product-icons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.menu .product-icons a {
  width: 4rem;
  height: 4rem;
  color: #fff;
  margin: 0.3rem;
  border: 0.5px solid #666;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu .product-icons a:hover {
  background-color: var(--primary);
  border: 1px solid var(--primary);
}

.menu .product-stars {
  padding: 1rem;
  color: var(--primary);
}

.menu .product-stars .stars-full {
  fill: var(--primary);
}

.menu .menu-card-price {
  font-size: 1.3rem;
  font-weight: bold;
}

/* bagian cotact */

.contact .row {
  display: flex;
  margin-top: 2rem;
  background-color: #222;
}

.contact .row .map {
  flex: 1 1 45rem;
  width: 100%;
  object-fit: cover;
}

.contact .row form {
  flex: 1 1 45rem;
  padding: 5rem 2rem;
  text-align: center;
}

.contact .row form .input-group {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  background-color: var(--bg);
  border: 1px solid #eee;
  padding-left: 2rem;
}

.contact .row form .input-group input {
  width: 100%;
  padding: 2rem;
  font-size: 1.7rem;
  background: none;
  color: var(--primary);
}

.contact .row form .btn {
  margin-top: 3rem;
  display: inline-block;
  padding: 1rem 3rem;
  font-size: 1.7rem;
  color: #fff;
  background-color: var(--primary);
  cursor: pointer;
}

/*footer*/

footer {
  background-color: var(--primary);
  text-align: center;
  padding: 1rem 0 3rem;
  margin-top: 3rem;
}

footer .socials {
  padding: 1rem 0;
}

footer .socials a {
  color: #fff;
  margin: 1rem;
}

footer .socials a:hover,
footer .links a:hover {
  color: var(--bg);
}

footer.links {
  margin-bottom: 1.4rem;
}

footer .links a {
  color: #fff;
  padding: 0.7rem 0.5rem;
}

footer .credit {
  font-size: 1.1rem;
}

footer .credit a {
  color: var(--bg);
  font-weight: 700;
}

/* modaal box */

/* items detail */

.modal {
  display: none;
  position: fixed;
  z-index: 8888;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-container {
  position: relative;
  background-color: #fefefe;
  color: var(--bg);
  margin: 15% auto;
  padding: 1.2rem;
  border: 2px solid #666;
  width: 80%;
  animation: animateModal 0.5s;
}

/* modal animasi */

@keyframes animateModal {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.modal-container .close-icon {
  position: absolute;
  right: 1rem;
}

.modal-content {
  display: flex;
  flex-wrap: nowrap;
}

.modal-content img {
  height: 15rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
}

.modal-content p {
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-top: 1.2rem;
  padding: auto;
}

.modal-content a {
  display: flex;
  gap: 1rem;
  width: 14rem;
  background-color: var(--primary);
  color: #fff;
  margin-top: 1rem;
  padding: 1rem 1.6rem;
  font-size: 1.2rem;
}

.modal .product-stars {
  padding: 0, 5rem;
  color: var(--primary);
}

.modal .product-stars .stars-full {
  fill: var(--primary);
}

.modal .menu-card-price {
  font-size: 1.3rem;
  font-weight: bold;
}

.modal .menu-card-price span {
  text-decoration: line-through;
  font-weight: lighter;
  font-size: 1rem;
}

/* media queris */

/* laptop */

@media (max-width: 1366px) {
  html {
    font-size: 75%;
  }
}

/* tablet */

@media only screen and (max-width: 768px) {
  html {
    font-size: 62%;
  }
  #hamburger-menu {
    display: inline-block;
  }
  .navbar .navbar-nav {
    position: absolute;
    top: 100%;
    right: -100%;
    background-color: #fff;
    width: 30rem;
    height: 100vh;
    transition: 0.5s;
  }
  .navbar .navbar-nav.active {
    right: 0;
  }
  .navbar .navbar-nav a {
    color: var(--bg);
    display: block;
    margin: 1.5rem;
    padding: 0.5rem;
    font-size: 2rem;
  }
  .navbar .navbar-nav a::after {
    transform-origin: 0 0;
  }
  .navbar .navbar-nav a:hover:after {
    transform: scaleX(0.2);
  }
  .navbar .search-form {
    width: 90%;
    right: 2rem;
  }
  .about .row {
    flex-wrap: wrap;
  }
  .about .row .about-img img {
    height: 24rem;
    object-fit: cover;
    object-position: cover;
  }
  .about .row .content {
    padding: 0;
  }
  .about .row .content h3 {
    margin-top: 1rem;
    font-size: 2rem;
  }
  .about .row .content p {
    font-size: 1.6rem;
  }
  .menu p {
    font-size: 1.5rem;
  }
  .contact .row {
    flex-wrap: wrap;
  }
  .contact .row .map {
    height: 30rem;
  }
  .contact .row form {
    padding-top: 0;
  }
  .modal-content {
    flex-wrap: wrap;
  }
  .dropdown-content {
    position: relative;
    min-width: 100%;
    background-color: transparent;
  }
  .dropdown-content a {
    display: block;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
}

/* mobile */

@media (max-width: 450px) {
  html {
    font-size: 55%;
  }
}
