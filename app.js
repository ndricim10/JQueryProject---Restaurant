function displayRestaurantPage(){
    const restaurant = $('.restaurant-page')
    restaurant.html(`<header class="container-fluid">
    <div class="row">
        <div class="col-sm-12">
            <div class="logo-div" data-margin="false">
                <div>
                    <a href="index.html">
                        <img src="./images/navbar-brand.svg" alt="">
                    </a>
                </div>

                <div class="call-us">
                    <span class="call-span">CALL US : </span>
                    <span>(123) 456 7890</span>
                </div>
            </div>
        </div>
        <div class="col-sm-12 nav-class">
            <nav class="navbar-menu">
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#service">our service</a></li>
                    <li><a href="#team">our team</a></li>
                    <li><a href="#testimonials">testimonial</a></li>
                </ul>
                <a href="#bookTable"><button>Book a table</button></a>
            </nav>
            <div class="menu-bar-logo">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </div>

</header>

<section class="area">
    <div class="hero-area" data-margin-top="false">
        <img src="./images/logo.svg" alt="">
        <p>Welcome To Our Restaurant</p>
        <h1>Really Fresh & Tasty</h1>
        <a href="#bookTable"><button>Book a table</button></a>
    </div>
</section>

<section id="about" class="working-times container-fluid sections">
    <div class="first-div">
        <span class="opening">Opening Times</span>
        <span class="h3">Working Times</span>
        <span><strong>Monday - Thursday :</strong> 7:00 am - 12:00 pm</span>
        <span><strong>Friday - Saturday :</strong> 7:00 am - Midnight</span>
        <span><strong>Saturday - Sunday :</strong> 9:00 am - 12:00 pm</span>
        <a href="#bookTable"><button>Book a table</button></a>
    </div>
    <div class="working-images">
        <img src="./images/about-1.jpg">
        <img src="./images/about-2.jpg">
    </div>

    <div class="images-grid">
        <img src="./images/about-3.jpg">
        <img src="./images/about-4.jpg">
    </div>
    <div class="first-div first-desc">
        <span>The Great Story</span>
        <span class="h3">Our Culinary Journey</span>
        <span class="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic illo a, aut, eum nesciunt
            obcaecati deserunt ipsam nostrum voluptate recusandae?</span>
    </div>
</section>

<section id="service" class="sections">
    <div class="dishes container-fluid">
        <div class="text-dishes">
            <span>Featured Food</span>
            <span class="h3">Special Dishes</span>
        </div>

        <div class="grid-dishes">
            <div class="flex-dishes">
                <img src="./images/dish-1.jpg">
                <div class="flex-menu">
                    <div class="price-menu">
                        <span>Aperiam incidunt dicta</span>
                        <span class="price">$25</span>
                    </div>
                    <hr>
                    <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum dicta
                        est
                        veniam beatae libero!</span>
                </div>
            </div>
            <div class="flex-dishes">
                <img src="./images/dish-2.jpg">
                <div class="flex-menu">
                    <div class="price-menu">
                        <span>Aperiam incidunt dicta</span>
                        <span class="price">$25</span>
                    </div>
                    <hr>
                    <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum dicta
                        est
                        veniam beatae libero!</span>
                </div>
            </div>
            <div class="flex-dishes">
                <img src="./images/dish-3.jpg">
                <div class="flex-menu">
                    <div class="price-menu">
                        <span>Aperiam incidunt dicta</span>
                        <span class="price">$25</span>
                    </div>
                    <hr>
                    <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum dicta
                        est
                        veniam beatae libero!</span>
                </div>
            </div>
            <div class="flex-dishes">
                <img src="./images/dish-4.jpg">
                <div class="flex-menu">
                    <div class="price-menu">
                        <span>Aperiam incidunt dicta</span>
                        <span class="price">$25</span>
                    </div>
                    <hr>
                    <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum dicta
                        est
                        veniam beatae libero!</span>
                </div>
            </div>
            <div class="flex-dishes">
                <img src="./images/dish-5.jpg">
                <div class="flex-menu">
                    <div class="price-menu">
                        <span>Aperiam incidunt dicta</span>
                        <span class="price">$25</span>
                    </div>
                    <hr>
                    <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum dicta
                        est
                        veniam beatae libero!</span>
                </div>
            </div>
            <div class="flex-dishes">
                <img src="./images/dish-6.jpg">
                <div class="flex-menu">
                    <div class="price-menu">
                        <span>Aperiam incidunt dicta</span>
                        <span class="price">$25</span>
                    </div>
                    <hr>
                    <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum dicta
                        est
                        veniam beatae libero!</span>
                </div>
            </div>
        </div>
    </div>

    <div class="main-menu ">
        <div class="menu-text">
            <span>Great Food</span>
            <span class="h3">Main Menu</span>
        </div>
        <div class="flex-hero">
            <div class="menu-hero">
                <div class="grid-dishes">
                    <div class="flex-dishes">

                        <div class="flex-menu">
                            <div class="price-menu">
                                <span>Aperiam incidunt dicta</span>
                                <span class="price">$25</span>
                            </div>
                            <hr>
                            <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum
                                dicta
                                est
                                veniam beatae libero!</span>
                        </div>
                    </div>
                    <div class="flex-dishes">
                        <div class="flex-menu">
                            <div class="price-menu">
                                <span>Aperiam incidunt dicta</span>
                                <span class="price">$25</span>
                            </div>
                            <hr>
                            <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum
                                dicta
                                est
                                veniam beatae libero!</span>
                        </div>
                    </div>
                    <div class="flex-dishes">
                        <div class="flex-menu">
                            <div class="price-menu">
                                <span>Aperiam incidunt dicta</span>
                                <span class="price">$25</span>
                            </div>
                            <hr>
                            <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum
                                dicta
                                est
                                veniam beatae libero!</span>
                        </div>
                    </div>
                    <div class="flex-dishes">
                        <div class="flex-menu">
                            <div class="price-menu">
                                <span>Aperiam incidunt dicta</span>
                                <span class="price">$25</span>
                            </div>
                            <hr>
                            <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum
                                dicta
                                est
                                veniam beatae libero!</span>
                        </div>
                    </div>
                    <div class="flex-dishes">
                        <div class="flex-menu">
                            <div class="price-menu">
                                <span>Aperiam incidunt dicta</span>
                                <span class="price">$25</span>
                            </div>
                            <hr>
                            <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum
                                dicta
                                est
                                veniam beatae libero!</span>
                        </div>
                    </div>
                    <div class="flex-dishes">
                        <div class="flex-menu">
                            <div class="price-menu">
                                <span>Aperiam incidunt dicta</span>
                                <span class="price">$25</span>
                            </div>
                            <hr>
                            <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum
                                dicta
                                est
                                veniam beatae libero!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-menu">
                <a href="#bookTable"><button>Book a table</button></a>
            </div>
        </div>

    </div>
</section>
<section id="team" class="team container-fluid sections">
    <div class="text-dishes">
        <span>Great Team</span>
        <span class="h3">Talented Chefs</span>
    </div>
    <div class="chefs">
        <div class="grid-chefs">
            <div class="flex-chefs">
                <img src="./images/chef-1.jpg">
                <span class="name">Brian Scott</span>
                <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio
                    nulla reiciendis!</span>
                <div class="social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                </div>
            </div>
            <div class="flex-chefs">
                <img src="./images/chef-2.jpg">
                <span class="name">Edward Harris</span>
                <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio
                    nulla reiciendis!</span>
                <div class="social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                </div>
            </div>
            <div class="flex-chefs">
                <img src="./images/chef-3.jpg">
                <span class="name">Richard Reb</span>
                <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio
                    nulla reiciendis!</span>
                <div class="social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="testimonials" class="sections testimonials container-fluid">
    <div class="text-dishes">
        <span>Best Clients</span>
        <span class="h3">Testmonials</span>
    </div>

    <div class="clients">
        <div class="flex-clients">
            <div class="client-name">
                <img src="./images/avatar.jpg">
                <div class="flex-name">
                    <span class="h3">John Doe</span>
                    <span>Business Analyst</span>
                </div>
            </div>
            <div class="description-client">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta
                    reiciendis itaque.</span>
            </div>
        </div>
        <div class="flex-clients">
            <div class="client-name">
                <img src="./images/avatar-1.jpg">
                <div class="flex-name">
                    <span class="h3">Maria Garcia</span>
                    <span>Insurance Agent</span>
                </div>
            </div>
            <div class="description-client">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta
                    reiciendis itaque.</span>
            </div>
        </div>
        <div class="flex-clients">
            <div class="client-name">
                <img src="./images/avatar-2.jpg">
                <div class="flex-name">
                    <span class="h3">Mason Miller</span>
                    <span>Residential Appraiser</span>
                </div>
            </div>
            <div class="description-client">
                <span>Lorem ipsum dolor sit amet,</span>
                <span>consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</span>
            </div>
        </div>
    </div>
</section>

<section class="book-table container-fluid sections" id="bookTable">
    <img src="./images/contact.jpg">
    <form action="">
        <input type="text" placeholder="your name" id="inputName">
        <span class="nameInput"></span>
        <input type="text" placeholder="your phone" id="inputPhone">
        <span class="namePhone"></span>
        <input type="datetime-local" placeholder="mm/dd/yyyy  --:--" id="inputDate">
        <span class="nameDate"></span>
        <input type="number" placeholder="seats" id="inputSeats">
        <span class="nameSeats"></span>
        <input type="button" value="book a table" id="submitValues">
        <span>We don't span customers. Check our <a href="#">Privacy Policy</a></span>
    </form>
</section>


<div class="order-relative" data-display="false">
    <div class="order">
        <div class="order-text">
            <div class="rounded-end">
                <div class="rounded">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <span class="table-book-text">THe table is ordered</span>
        </div>


        <div class="wrapper"> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
        </div>
    </div>
</div>

<footer class="container-fluid">
    <div class="footer-menu footer-menu1">
        <img src="./images/navbar-brand.svg">
        <ul>
            <li><a href="#">our company</a></li>
            <li><a href="#">our location</a></li>
            <li><a href="#">help center</a></li>
            <li><a href="#bookTable">book a table</a></li>
        </ul>
    </div>
    <!-- <hr> -->
    <div class="footer-menu">
        <div>© 2022, <span class="dev">Ndricim Jahaj</span> <span class="reserved">All rights reserved</span></div>
        <div class="social">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-google-plus-g"></i></a>
        </div>
    </div>
</footer>`)
}
displayRestaurantPage()

const logo = $('.logo-div')
const area = $('[data-margin-top]')
const nameInput = $('#inputName')
const phone = $('#inputPhone')
const yearDate = $('#inputDate')
const seats = $('#inputSeats')
const submitValues = $('#submitValues')
const displayTable = $('.order-relative')
const removeTableOrdered = $('.rounded')
const getDisplayTable = displayTable.attr('data-display')
const textDisplayTable = $('.table-book-text')

function scrollDown(){
    $(window).on('scroll', function(){
        let scrolled = window.scrollY;
        let display = logo.attr('data-margin')
        if(display==='false'){
            logo.attr('data-margin', 'true')
            area.attr('data-margin-top', 'true')
        }
    
        if(scrolled <=100){
            logo.attr('data-margin', 'false')
            area.attr('data-margin-top', 'false')
        }
    });
}
scrollDown()
// Display header only on scroll up
const body = $('body');
let lastScroll = 0;
function scrollUpDisplay(){
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.removeClass("scroll-up");
            return;
        }
    
        if (currentScroll > lastScroll && !body.hasClass("scroll-down")) {
            // body.classList.remove("scroll-up");
            body.addClass("scroll-down");
        } else if (
            currentScroll < lastScroll &&
            body.hasClass("scroll-down")
        ) {
            body.removeClass("scroll-down");
            // body.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    });
}
// scrollUpDisplay()

// yearDate.ejDateTimePicker({
//     dateTimeFormat: "dddd, MMMM dd, yyyy hh:mm:ss tt",
//     timePopupWidth: "150px",
//     timeDisplayFormat: "hh:mm:ss tt",
//     width: '300px'
//  });

function validationForm(){
    $(document).ready(function(){
        submitValues.click(function(){
            if(nameInput.val()===''){
                $('.nameInput').html('This field is required')
                $('.namePhone').html('')
                $('.nameDate').html('')
                $('.nameSeats').html('')
            }
            
            else if(phone.val()===''){
                $('.nameInput').html('')
                $('.namePhone').html('This field is required')
                $('.nameDate').html('')
                $('.nameSeats').html('')
            }
            else if(isNaN(parseInt(phone.val()))){
                $('.nameInput').html('')
                $('.namePhone').html('The value must be a number')
                $('.nameDate').html('')
                $('.nameSeats').html('')
            }
        
            else if(yearDate.val()===''){
                $('.nameInput').html('')
                $('.namePhone').html('')
                $('.nameDate').html('This field is required')
                $('.nameSeats').html('')
            }
        
            else if(seats.val()===''){
                $('.nameInput').html('')
                $('.namePhone').html('')
                $('.nameDate').html('')
                $('.nameSeats').html('This field is required')   
            }
            
            else{
                $('.nameInput').html('')
                $('.namePhone').html('')
                $('.nameDate').html('')
                $('.nameSeats').html('')
                displayTable.attr('data-display', 'true')
                textDisplayTable.html('Dear ' + nameInput.val() +', your table is booked at ' + yearDate.val() + ' ' + 'for ' + seats.val() + ' people. Thank you!')
                nameInput.css('color: ""')
                nameInput.val('')
                phone.val('')
                seats.val('')
                yearDate.val('')
                console.log(moment(nameInput.val()));
            }
        })
    })
}
validationForm()

function orderTable(){
    $(document).ready(function(){
        removeTableOrdered.on('click', function(){
            displayTable.attr('data-display', 'false')
        })
    })
}
orderTable()

// ADD AN ACTIVE CLASS TO EACH SECTION
$(document).ready(function () {
    $(document).on("scroll", onScroll);
     
    // Trigger Click to go specific section or add active
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
 
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
 
        var target = this.hash;
        $target = $(target);
         
        // Scrolling 
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
     
    // set your navigation a class name
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}
onScroll()


function navBarMenu(){
    const menuBar = $('.fa-bars'),
    navBarMenu = $('.navbar-menu')
    $(document).ready(function(){
        menuBar.click(function(){
            if(menuBar.hasClass('fa-bars')){
                navBarMenu.show(800)
                menuBar.addClass('fa-times')
                menuBar.removeClass('fa-bars')
            }
            else{
                navBarMenu.hide(400)
                menuBar.removeClass('fa-times')
                menuBar.addClass('fa-bars')
            }
        })
    })
}
navBarMenu()