function displayRestaurantPage() {
    const restaurant = $(".restaurant-page");
    restaurant.html(``);
  }
  displayRestaurantPage();
  
  const logo = $(".logo-div");
  const area = $("[data-margin-top]");
  const nameInput = $("#inputName");
  const phone = $("#inputPhone");
  const yearDate = $("#inputDate");
  const seats = $("#inputSeats");
  const submitValues = $("#submitValues");
  const displayTable = $(".order-relative");
  const removeTableOrdered = $(".click-order");
  const getDisplayTable = displayTable.attr("data-display");
  const textDisplayTable = $(".table-book-text");
  
  function scrollDown() {
    $(window).on("scroll", function () {
      let scrolled = window.scrollY;
      let display = logo.attr("data-margin");
      if (display === "false") {
        logo.attr("data-margin", "true");
        area.attr("data-margin-top", "true");
        $('.call-576').show()
      }
  
      if (scrolled <= 100) {
        logo.attr("data-margin", "false");
        area.attr("data-margin-top", "false");
        $('.call-576').hide()
      }
      if($(document).width() > 576){
          $('.call-576').hide()
      }
    });
  }
  scrollDown();
  // Display header only on scroll up
  const body = $("body");
  let lastScroll = 0;
  function scrollUpDisplay() {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.removeClass("scroll-up");
        return;
      }
  
      if (currentScroll > lastScroll && !body.hasClass("scroll-down")) {
        // body.classList.remove("scroll-up");
        body.addClass("scroll-down");
      } else if (currentScroll < lastScroll && body.hasClass("scroll-down")) {
        body.removeClass("scroll-down");
        // body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    });
  }
  // scrollUpDisplay()
  
  var today = new Date().toISOString().slice(0, 16);
  document.getElementById('inputDate').min=today
  function validationForm() {
    $(document).ready(function () {
      submitValues.click(function () {
          let d1 = new Date(yearDate.val());
          let d2 = new Date(today)
  
        if (nameInput.val() === "") {
          $(".nameInput").html("This field is required");
          $(".namePhone").html("");
          $(".nameDate").html("");
          $(".nameSeats").html("");
        } else if (phone.val() === "") {
          $(".nameInput").html("");
          $(".namePhone").html("This field is required");
          $(".nameDate").html("");
          $(".nameSeats").html("");
        } else if (isNaN(parseInt(phone.val()))) {
          $(".nameInput").html("");
          $(".namePhone").html("The value must be a number");
          $(".nameDate").html("");
          $(".nameSeats").html("");
        } else if (yearDate.val() === "") {
          $(".nameInput").html("");
          $(".namePhone").html("");
          $(".nameDate").html("This field is required");
          $(".nameSeats").html("");
          
        }
        else if(d1<d2){
          $('.nameDate').html('Please put a valid date')
      }
        else if (seats.val() === "") {
          $(".nameInput").html("");
          $(".namePhone").html("");
          $(".nameDate").html("");
          $(".nameSeats").html("This field is required");
        } 
        else {
          $(".nameInput").html("");
          $(".namePhone").html("");
          $(".nameDate").html("");
          $(".nameSeats").html("");
          displayTable.attr("data-display", "true");
          $(".click-order").show();
          textDisplayTable.html(
            "Dear " +
              nameInput.val() +
              ", your table is booked " +
              moment(`${yearDate.val()}`).calendar() +
              " " +
              "for " +
              seats.val() +
              " people. Thank you!"
          );
          nameInput.css('color: ""');
          nameInput.val("");
          phone.val("");
          seats.val("");
          yearDate.val("");
          $("html, body").css({
            overflow: "hidden",
          });
        }
      });
    });
  }
  validationForm();
  
  function orderTable() {
    $(document).ready(function () {
      removeTableOrdered.on("click", function () {
        displayTable.attr("data-display", "false");
        $(".click-order").hide();
        $("html, body").css({
          overflow: "auto",
        });
      });
    });
  }
  orderTable();
  
  // ADD AN ACTIVE CLASS TO EACH SECTION
  $(document).ready(function () {
    $(document).on("scroll", onScroll);
  
    // Trigger Click to go specific section or add active
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");
  
      $("a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");
  
      var target = this.hash;
      $target = $(target);
  
      // Scrolling
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top + 2,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          }
        );
    });
  });
  
  function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
  
    // set your navigation a class name
    $("nav a").each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if (
        refElement.position().top <= scrollPosition &&
        refElement.position().top + refElement.height() > scrollPosition
      ) {
        $("nav ul li a").removeClass("active");
        currentLink.addClass("active");
      } else {
        currentLink.removeClass("active");
      }
    });
  }
  onScroll();
  
  function navBarMenu() {
    const menuBar = $(".fa-bars"),
      navBarMenu = $(".navbar-menu");
    $(document).ready(function () {
      menuBar.click(function () {
        if (menuBar.hasClass("fa-bars")) {
          navBarMenu.show(800);
          menuBar.addClass("fa-times");
          menuBar.removeClass("fa-bars");
          
        } else {
          navBarMenu.hide(400);
          menuBar.removeClass("fa-times");
          menuBar.addClass("fa-bars");
          
        }
      });
      
    });
  }
  navBarMenu();
  
  
  