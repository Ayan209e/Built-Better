import React from 'react'

function Header() {
  return (
    <div>
        {/* <!-- header section start --> */}
    <div class="header_section">
      <div class="container-fluid">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="logo"><a href="index.html"><img src="images/logo.png"/></a></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                     <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#services">services</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#shop">Shop</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#contact">Contact</a>
                  </li>
               </ul>
               <form class="form-inline my-2 my-lg-0">
                  <h1 class="call_text">Call Us : +01 1234567890</h1>
               </form>
               <div class="search_icon">
                  <ul>
                     <li><a href="#"><img src="images/search-icon.png"/></a></li>
                     <li><a href="/login">LOGIN</a></li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   </div>
   {/* <!-- header section end -->
   <!-- banner section start --> */}
   <div class="banner_section layout_padding">
      <div class="container">
         <div id="costum_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <h1 class="furniture_text">FURNITURE</h1>
                  <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
                  <div class="contact_bt_main">
                     <div class="contact_bt"><a href="contact.html">Contact Us</a></div>
                  </div>
               </div>
               <div class="carousel-item">
                  <h1 class="furniture_text">FURNITURE</h1>
                  <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
                  <div class="contact_bt_main">
                     <div class="contact_bt"><a href="contact.html">Contact Us</a></div>
                  </div>
               </div>
               <div class="carousel-item">
                  <h1 class="furniture_text">FURNITURE</h1>
                  <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
                  <div class="contact_bt_main">
                     <div class="contact_bt"><a href="contact.html">Contact Us</a></div>
                  </div>
               </div>
            </div>
            <a class="carousel-control-prev" href="#costum_slider" role="button" data-slide="prev">
            <i class=""><img src="images/left-arrow.png"/></i>
            </a>
            <a class="carousel-control-next" href="#costum_slider" role="button" data-slide="next">
            <i class=""><img src="images/right-arrow.png"/></i>
            </a>
         </div>
      </div>
   </div>
   {/* <!-- banner section end --> */}
    </div>
  )
}

export default Header