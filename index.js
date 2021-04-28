const express = require('express');
const compression = require('compression');
const path = require('path');

var port = process.env.PORT || 3000;
var app = express();

app.use(compression());

// app.use(express.static(__dirname + '/public'));

app.get('/img/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, './public/img/' + req.params.id));
});

app.get('/js/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, './public/js/' + req.params.id));
});

app.get('/css/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, './public/css/' + req.params.id));
});

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
      <head>
          <title>Activation Method Coaching</title>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link rel="stylesheet" href="css/style.css" />
          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://use.typekit.net/fhf2sot.css">
          <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/nimbus-sans-l" type="text/css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/owl.carousel.js"></script>
          <script src="js/owl.carousel.min.js"></script>
          <script src="js/jquery.matchHeight.js"></script>
          <script>
            console.log("crash", window.location.href);
            if(window.location.href != "https://www.fandmccoaching.com/"){
              window.location.href = "https://www.fandmccoaching.com/";
            }
          </script>
      </head>
      <body>
          <!-- Header Section Starts here-->
          <section class="header_section navbar-fixed-top">
              <div class="maxwidth-class">
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-md-3 col-sm-2">
                              <div class="logo">
                                  <img src="img/logo.png" alt="Logo" class="img-responsive">
                              </div> </div>
                          <div class="col-md-9 col-sm-10">
                              <div class="navbar-header">
                                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynav" aria-expanded="false">
                                      <span class="sr-only">Toggle navigation</span>
                                      <span class="icon-bar"></span>
                                      <span class="icon-bar"></span>
                                      <span class="icon-bar"></span>
                                  </button>
                              </div>
                              <div class="collapse navbar-collapse" id="mynav">
                                  <ul class="nav navbar-nav" id="scroll-menu">
                                      <li class='active'><a href="#home">HOME</a></li>
                                      <li><a href="#about-method-sec">ACTIVATION&trade; METHOD</a></li>
                                      <!--<li><a href="#skills-sec">PASSION PATTERNS SKILLS</a></li>-->
                                      <li><a href="">BIO </a></li>
                                      <li><button class="booknow-btn bold-font" onClick="window.location.href = '#contact-sec'" />CONTACT</button> </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <!-- Header Section End here-->
          <!-- Banner Section Starts here-->
          <section class="banner-section" id="home">
              <div class="container">
                  <div class="row">
                      <div class="col-md-6 col-sm-6">
                          <h1 class="theme-color">Activation Method Coaching</h1>
                      </div>
                      <div class="col-md-6 col-sm-6 text-center">
                          <img src="img/yourimage.png" />
                      </div>
                  </div>
              </div>
          </section>
          <!-- Banner Section end here-->
          <!-- About coach Section starts here-->

          <section class="about-sec">
              <div class="row">
                  <div class="col-md-4 match col-sm-5" style="background-color: #e5f5f5;">
                      <div class="about-contact">
                          <img src="img/c11.png" />
                          <h3 class="bold-font">Get in touch</h3>
                          <h4>You can also feel free to contact us at</h4>
                          <div class="media">
                              <div class="media-left">
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                              </div>
                              <div class="media-body">
                                  <h5 class="media-heading">513-833-1213 | 513-515-1382</h5>
                              </div>
                          </div>
                          <div class="media">
                              <div class="media-left">
                                  <i class="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <div class="media-body">
                                  <h5 class="media-heading">fmc.sicoaching@gmail.com</h5>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-8 col-sm-7 match">
                      <div class="about-coach">
                          <p class="lite-color">
                              Hello! We are <strong>Fred and Mary Carol Gennett</strong>. We are Activation Method Coaches. We love to help people find purpose, love and success in their life. Most of us have a goal we would like to work towards, but are stuck finding a way to begin. Whether you are looking to create greater success, creativity, connection with others, or to overcome a habit or a problem, coaching can help you become clear, focused and active in your life.
                          </p>
                          <p class="lite-color">
                              By learning how to create powerful inner and outer goals, we become resourceful in all of our relationships and areas of life. As your coaches, we will help you figure out the next step you can take to making your life what you want it to be.
                          </p>
                          <p class="lite-color">
                              We have over 45 years of experience working with couples, families, and children. We help couples and families improve [and save] their relationships. We help clients put their dreams into action.
                          </p>
                          <p class="lite-color">
                              Let’s talk together, in a private no fee clarity session, where we can focus and make a plan to improve one part of your life right away
                          </p>
                      </div>
                  </div>
              </div>
          </section>


          <!-- About coach Section end here-->
          <!-- Responsive about section starts here-->
          <section class="responsive-about-section">
              <div class="container">
              <div class="row">
                  <div class="col-md-8 col-sm-7 match">
                      <div class="about-coach">
                         <p class="lite-color">
                           Hello! We are <strong>Fred and Mary Carol Gennett</strong>. We are Activation Method Coaches. We love to help people find purpose, love and success in their life. Most of us have a goal we would like to work towards, but are stuck finding a way to begin. Whether you are looking to create greater success, creativity, connection with others, or to overcome a habit or a problem, coaching can help you become clear, focused and active in your life.
                          </p>
                          <p class="lite-color">
                              By learning how to create powerful inner and outer goals, we become resourceful in all of our relationships and areas of life. As your coaches, we will help you figure out the next step you can take to making your life what you want it to be.
                          </p>
                          <p class="lite-color">
                              We have over 45 years of experience working with couples, families, and children. We help couples and families improve [and save] their relationships. We help clients put their dreams into action.
                          </p>
                          <p class="lite-color">
                              Let’s talk together, in a private no fee clarity session, where we can focus and make a plan to improve one part of your life right away
                          </p>
                      </div>
                  </div>
                  <div class="col-md-4 match col-sm-5">
                      <div class="about-contact">
                          <img src="img/c11.png" />
                          <h3 class="bold-font">Get in touch</h3>
                          <h4>You can also feel free to contact us at</h4>
                          <div class="media">
                              <div class="media-left">
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                              </div>
                              <div class="media-body">
                                  <h5 class="media-heading">513-833-1213 | 513-515-1382</h5>
                              </div>
                          </div>
                          <div class="media">
                              <div class="media-left">
                                  <i class="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <div class="media-body">
                                  <h5 class="media-heading">FMC.SIcoaching@gmail.com</h5>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
              </div>
          </section>

          <!-- Responsive about section end here-->
          <!-- About Activation method section starts here-->
          <section class="about-method-sec" id="about-method-sec">
              <div class="container">
                  <h1 class="theme-color text-center bold-font">About Activation Method Coaching</h1>
                  <div class="panel-group wrap" id="bs-collapse">
                      <div class="panel">
                          <a  aria-expanded="true" data-toggle="collapse" data-parent="#bs-collapse" href="#1">
                              <div class="panel-heading">
                                  <h4 class="panel-title">What is Activation Method Coaching?
                                  </h4>
                              </div>
                          </a>
                          <div id="1" class="panel-collapse collapse in">
                              <div class="panel-body">
                                  <div class="card-body">
                                      <p class="lite-color">
                                          Activation Method (AM) Coaching is a dynamic type of life coaching which is used worldwide to help individuals, families, couples, and organizations to support the individual and group. Our system of change empowers the client to take action daily in their life. It is through real actions, taught to you as Strategies, that a client creates the real and lasting change they desire.  Activation Method believes that all people have the potential to overcome the negative patterns and beliefs which keep them from thriving and reaching their goals.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="panel">
                          <a  aria-expanded="false" data-toggle="collapse" data-parent="#bs-collapse" href="#8">
                              <div class="panel-heading">
                                  <h4 class="panel-title">
                                      What to expect from your Activation Method Coach?
                                  </h4>
                              </div>
                          </a>
                          <div id="8" class="panel-collapse collapse ">
                              <div class="panel-body">
                                  <div class="card-body">
                                      <p class="lite-color">
                                          Your Coach will usually begin by learning all about you - your desired results as well as your highest priorities and closest relationships. By truly understanding your world, your coach will be an effective advocate for the results, relationships, and life that you desire. You will find that this system of coaching is a very customized experience. You will be heard, understood, and supported, and you’ll be presented with a unique perspective and a series of strategies to improve your life and relationships. Clients gain a greater ability to see the “big picture” of their life, find and improve key relationships, take daily actions that increase their joy, and stop the patterns of fear and resistance that hold them back from living a joyful life. Couples learn what skills and habits have been missing in their relationship and how to add them into daily life. Families learn how to appreciate each person's uniqueness and join together in shared purpose and love.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="panel">
                          <a  aria-expanded="false" data-toggle="collapse" data-parent="#bs-collapse" href="#2">
                              <div class="panel-heading">
                                  <h4 class="panel-title">
                                      How is Activation Method Coaching different from other types of Life Coaching?
                                  </h4>
                              </div>
                          </a>
                          <div id="2" class="panel-collapse collapse ">
                              <div class="panel-body">
                                  <div class="card-body">
                                      <p class="lite-color">
                                          A Certified Activation Method Coach has gone through intensive study and training in strategies to handle the whole range of human needs and life challenges. Most life coaching trainings focus on one type of result such as: goals, beliefs, or steps while AM helps address the wide range of human potential and obstacles. AM Coaches are trained to identify every type of obstacle that may be holding a client back (such as their internal beliefs, their communication patterns, their relationship beliefs and practices, their life stages) and prescribe practical strategies to create results in each of these areas. Coaches provide practical frameworks for the client to understand their options, and then offer them strategies and actions for bringing about the changes they want. Activation Method encompasses goal setting, communication skill building, relationship work, high performance, meaning/purpose discovery, and uses creative modalities to help clients put their dreams into action. The Client expands their ability to think creatively, see potential in every part of life, expand and deepen all their relationships, and overcome the fears which have limited their joy and progress.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="panel">
                          <a  aria-expanded="false" data-toggle="collapse" data-parent="#bs-collapse" href="#3">
                              <div class="panel-heading">
                                  <h4 class="panel-title">
                                      What can you expect to improve in your life as you work with your Certified AM Coach?
                                  </h4>
                              </div>
                          </a>
                          <div id="3" class="panel-collapse collapse ">
                              <div class="panel-body">
                                  <div class="card-body">
                                      <p class="lite-color">
                                          You can expect to gain clarity, action, and progress towards the goals you want to achieve. You will learn about yourself and how to be more effective with the key people in your life. Insights often include: how to rebuild a difficult relationship, how to become more inspired about your career, how to plan for effective action. Most clients discover areas of opportunity, freeing up energy and initiative, and more insight and harmony with those they care about. Relationship is key to all AM Coaching.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="panel">
                          <a  aria-expanded="false" data-toggle="collapse" data-parent="#bs-collapse" href="#4">
                              <div class="panel-heading">
                                  <h4 class="panel-title">
                                      How is Coaching different than therapy?
                                  </h4>
                              </div>
                          </a>
                          <div id="4" class="panel-collapse collapse ">
                              <div class="panel-body">
                                  <div class="card-body">
                                      <p class="lite-color">
                                          <!--Psychotherapy and counseling generally work within a medical framework: identifying and diagnosing dysfunctions and prescribing treatment.-->
                                          Activation Method begins with the belief that the solutions that the client wants are available to them right now, and greater well-being and happiness comes from the ability to take smart and creative actions in life. Coaching starts with wherever you’re at, right now, and how to take practical steps to make progress towards the goals, relationships, and experience you want. Coaching is not meant to replace psychotherapy - it is a distinct practical approach to supporting clients in the decisions and actions that will support their goals, relationships and fulfillment in life.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="panel">
                          <a  aria-expanded="false" data-toggle="collapse" data-parent="#bs-collapse" href="#5">
                              <div class="panel-heading">
                                  <h4 class="panel-title">
                                      What does it mean to be certified by Mark and Magali Peysha as an Activation Method Relationship Coach?
                                  </h4>
                              </div>
                          </a>
                          <div id="5" class="panel-collapse collapse">
                              <div class="panel-body">
                                  <div class="card-body">
                                      <p class="lite-color">
                                          Relationship Coaches who have been certified by Mark and Magali Peysha have received the highest level of personalized instruction. As founders of Activation Method and Strategic Intervention, the Peyshas are at the forefront of creating new and diverse strategies and applications in Coaching. The Coach who is Certified personally through the Activation Method and StrategicIntervention.com has shown dedication and mastery of a wide range of coaching skills and strategies.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="panel">
                          <a  aria-expanded="false" data-toggle="collapse" data-parent="#bs-collapse" href="#6">
                              <div class="panel-heading">
                                  <h4 class="panel-title">
                                      Who are the founders of Activation Method?
                                  </h4>
                              </div>
                          </a>
                          <div id="6" class="panel-collapse collapse ">
                              <div class="panel-body">
                                  <div class="card-body">
                                      <p class="lite-color">
                                          Mark and Magali Peysha founded Activation Method Coach Training as a way to train coaches in the art of Relationship, Group, Parenting, Spiritual and general Life Coaching. They are also co-founders of Strategic Intervention Coaching Methods and have written important books in the field of coaching. These books include <a target="_blank" href="https://www.amazon.com/Strategic-Intervention-Handbook-profound-yourself-ebook/dp/B00J15H0AI/ref=sr_1_2?keywords=strategic+intervention+handbook&qid=1571334299&sr=8-2"/>The Strategic Intervention Handbook</a>, and <a target="_blank" href="https://www.amazon.com/Love-Happier-Art-Practice-Relationship/dp/1934442607/ref=sr_1_1?keywords=love+happier&qid=1571334317&sr=8-1">Love Happier.</a>
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="panel">
                          <a  aria-expanded="false" data-toggle="collapse" data-parent="#bs-collapse" href="#7">
                              <div class="panel-heading">
                                  <h4 class="panel-title">
                                      How is Activation Method being applied in various industries worldwide?
                                  </h4>
                              </div>
                          </a>
                          <div id="7" class="panel-collapse collapse ">
                              <div class="panel-body">
                                  <div class="card-body">
                                      <p class="lite-color">
                                          Activation Method is being used with people of all ages to create greater understanding and personal success. In the medical field, hundreds of care providers are using it to improve the healing process for patients and their families. In industry, AM strategies are being used by managers, business owners, public relation representatives, entrepreneurs, and leaders to create understanding, personal responsibility, team cohesion, and higher standards for connection, leadership, and success. In education, teachers are using AM strategies to better understand, connect with, and teach students of all ages.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </section>
          <!-- About Activation method section end here-->
          <!-- Testimonial section starts here-->
          <div class="testimonial-space">
          <section class="testimonial-sec parallax">
              <div class="container" id="quotes">
                  <div class="owl-carousel owl-theme myowl">
                      <div class="item text-center">
                          <h1 class='text-white'>“Mary Carol and Fred are wonderful, compassionate and caring people! They have given us so much guidance and direction in our marriage, family and career decisions. We are so thankful for their continued encouragement and wise counsel”<br/><br/>



  “We thoroughly recommend Fred & Mary Carol. As a part of building into our marriage, my wife and I do something to develop our marriage every year. We met the Gennetts when they facilitated a marriage program called Real Marriage. We loved their vision, relationship and personalities instantly. They have the right mix of invitation and challenge. A year later, when we had a serious communication rut in our marriage around employment and the stories we were telling about each other, [as coaches] Fred and Mary Carol were  perfect in helping us create dialogue and a safe space to talk in order to unpack our thoughts and break out of our rut”<br/><br/>



  “We want to express our utmost thanks to Mary Carol and Fred for coaching us to better communicators. When we began seeing them, we were struggling to listen and struggling to express our wants and needs. Mary Carol and Fred have the tools to help you in your journey. We appreciate that they don’t tell us what to do, but they guide us to come up with better solutions to problems we face in our marriage. We are a stronger couple because now instead of brushing things off and getting more frustrated, we face issues with better stronger communication that they have helped us strategize and plan for.”<br/><br/>



  “God is with us and he is faithful. We’ll get through this and we’ll be stronger on the other side of this. Thank you for being there for us. The two of you have been priceless in this journey. I see a lot of us in you and in my hope for our marriage. Thank you for being in our corner”<br/><br/>



  “Fred & Mary Carol have helped my husband and me tremendously. We were on the brink of divorce. They taught us how to choose to love each other again so we are back together again after a separation.”</h1>
                          <h2 class='text-white'></h2>
                          <p class='text-white'></p>
                      </div>
                  </div>
              </div>

          </section>
               </div>
          <!-- Testimonial section end here-->
          <!-- Contact section starts here-->
          <section class="contact-sec" id="contact-sec">
              <div class="row">
                  <div class="col-md-6 match-height col-sm-6">
                      <div class="about-contact">
                          <h3>Get in touch</h3>
                          <h4>You can also feel free to contact us at</h4>
                          <div class="media">
                              <div class="media-left">
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                              </div>
                              <div class="media-body">
                                  <h5 class="media-heading">513-833-1213 | 513-515-1382</h5>
                              </div>
                          </div>
                          <div class="media">
                              <div class="media-left">
                                  <i class="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <div class="media-body">FMC.SIcoaching@gmail.com</h5>
                              </div>
                          </div>
                          <img class="first-img" src="img/c11.png">
                      </div>
                  </div>
                  <div class="col-md-6 match-height col-sm-6" >
                      <div class="contact-form">

                      </div>
                  </div>
              </div>
          </section>
          <!-- Contact section end here-->
          <!-- Copyright section starts here-->
          <section class="copyright text-center">
              <div class="maxwidth-class">
              <p>© 2019. All rights reserved.</p>
              </div>
          </section>
          <!-- Copyright section end here-->
          <script>
              jQuery(function () {
                  jQuery('.match-height').matchHeight();
              });
              jQuery(function () {
                  jQuery('.match').matchHeight();
              });
              jQuery('.myowl').owlCarousel({
                  loop: true,
                  margin: 10,
                  nav: true,
                  autoplay: true,
                  responsive: {
                      0: {
                          items: 1
                      },
                      600: {
                          items: 1
                      },
                      1000: {
                          items: 1
                      }
                  }
              });
              $(".myowl .owl-next").html('<img src="img/a1.png">');
              $(".myowl .owl-prev").html('<img src="img/a2.png">');
              jQuery('.nav li').click(function (e) {
                  //e.preventDefault()
                  jQuery('.nav li.active').removeClass('active');
                  jQuery(this).addClass('active');
              });
          </script>
          <script type="text/javascript">
              $(document).ready(function () {
                  jQuery('#submit').click(function () {
                      var name = $('#name').val();
                      var email = $('#email').val();
                      var subject = $('#subject').val();
                      var message = $('#message').val();
                      var vardata = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
                      if ((name != '') && (email != '') && (subject != '') && (message != '')) {
                          $.ajax({
                              type: "POST",
                              url: "send_mail.php",
                              data: vardata,
                              success: function () {
                                  swal({
                                      title: "Success",
                                      text: "Form Submitted Successfully",
                                      type: "success",
                                      confirmButtonClass: "btn-success",
                                      closeOnConfirm: true
                                  });
                              }
                          });
                      } else {
                          swal({
                              title: "error",
                              text: "Pls Fill Required Field",
                              type: "error",
                              confirmButtonClass: "btn-danger",
                              closeOnConfirm: true
                          });
                      }
                  });
              });
              if ($(window).width() <= 767) {
                  $('.nav li a').on('click', function () {
                      $('.navbar-collapse').collapse('hide');
                  });
                  $('.nav li button').on('click', function () {
                      $('.navbar-collapse').collapse('hide');
                  });
              }
          </script>
          <script>
              // Cache selectors
  var lastId,
      topMenu = $("#scroll-menu"),
      topMenuHeight = topMenu.outerHeight()+15,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;

     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active")
           .end().filter("[href='#"+id+"']").parent().addClass("active");
     }
  });
           </script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.js"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css">
      </body>
  </html>
`)
})

app.get('/health', (req, res) => res.send('OK'));

app.listen(port, function(){
  console.log("listening to " + port);
});
