import React from 'react'

function About() {
  return (
    <div>
       {/* <!-- about section start --> */}
   <div class="about_section layout_padding" id='about'>
      <div class="container">
         <div class="row">
            <div class="col-md-6">
               <h1 class="about_text">About Us</h1>
               <p class="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able</p>
               <div class="read_bt1"><a href="#">Read More</a></div>
            </div>
            <div class="col-md-6">
               <div class="image_1"><img src="images/img-1.png"/></div>
            </div>
         </div>
      </div>
   </div>

   {/* <!-- furnitures section start --> */}
   <div class="furnitures_section layout_padding" id='shop'>
      <div class="container">
         <h1 class="our_text">OUR furnitures</h1>
         <p class="ipsum_text">There are many variations of passages of Lorem Ipsum </p>
         <div class="furnitures_section2 layout_padding">
            <div class="row">
               <div class="col-md-6">
                  <div class="container_main">
                     <img src="images/img-2.png" alt="Avatar" class="image"/>
                     <div class="overlay">
                        <a href="#" class="icon" title="User Profile">
                        <i class="fa fa-search"></i>
                        </a>
                     </div>
                  </div>
                  <h3 class="temper_text">Tempor incididunt ut labore et dolore</h3>
                  <p class="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
               </div>
               <div class="col-md-6">
                  <div class="container_main">
                     <img src="images/img-3.png" alt="Avatar" class="image"/>
                     <div class="overlay">
                        <a href="#" class="icon" title="User Profile">
                        <i class="fa fa-search"></i>
                        </a>
                     </div>
                  </div>
                  <h3 class="temper_text">Tempor incididunt ut labore et dolore</h3>
                  <p class="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
               </div>
            </div>
         </div>
      </div>
   </div>
   
   {/* <!-- who section start --> */}
   <div class="who_section layout_padding">
      <div class="container">
         <h1 class="who_taital">who we are ?</h1>
         <h4 class="designer_text">DESIGNERS & INNOVATORS</h4>
         <p class="lorem_ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
      </div>
      <div class="get_bt_main">
         <div class="get_bt"><a href="#">Get A Quote</a></div>
      </div>
   </div> 
    </div>
  )
}

export default About