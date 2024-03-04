var meni = [
    { text: 'Home', link: '#hero' },
    { text: 'Service', link: '#service' },
    { text: 'Featured Cars', link: '#featured-cars' },
	{ text: 'Newest Cars', link: '#new-cars' },  
    { text: 'Contact', link: '#contact' },
	{ text: 'Author', link: '#author' }
  ];
  
  
  function generateMenu() {
    var navbar = document.getElementById('navbar');
    var ul = document.createElement('ul');
  
    meni.forEach(function (item) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.setAttribute('href', item.link);
      a.setAttribute('class', 'nav-link scrollto');
      a.textContent = item.text;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    navbar.appendChild(ul);
  
    navbarlinks = document.querySelectorAll('#navbar .scrollto');
  }
  
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    let found = false;
  
    if (navbarlinks) {
      navbarlinks.forEach(navbarlink => {
        navbarlink.classList.remove('active');
  
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
  
        if (!found && position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
          found = true;
        }
      });
    }
  };
  
  window.addEventListener('load', function () {
    generateMenu();
    navbarlinksActive();
  });
  
  window.addEventListener('scroll', navbarlinksActive);
  
  $(document).ready(function () {
    $('.mobile-nav-toggle').on('click', function (e) {
      $('#navbar').toggleClass('navbar-mobile');	
      $(this).toggleClass('bi-list bi-x');
    });
  });
  


var pocetnaCover=['assets/img/slider.jpg','assets/img/slider2.jpg','assets/img/slider3.jpg'];

var currentImageIndex = 0;

function menjaj() {
  document.getElementById("hero").style.backgroundImage = "linear-gradient(rgba(42, 45, 84, .60), rgba(42, 45, 84, .60)), url('" + pocetnaCover[currentImageIndex] + "')";
  document.getElementById("hero").classList.add("slide-in-left"); 
  currentImageIndex = (currentImageIndex + 1) % pocetnaCover.length;

  setTimeout(function() {
    document.getElementById("hero").classList.remove("slide-in-left");
  }, 500);
}

menjaj();

setInterval(function() {
  menjaj();
}, 5000);


const automobili = [
    	{ 
			imgSrc: 'assets/img/audi-q3.png', 
			year: '2017', 
			hp:'192HP', 
			transmition:'automatic', 
			model: 'Audi Q3 40', 
			price: '$528,210', 
			description: 'Audi Q3 40 TFSI Premium Plus is the petrol variant in the Audi Q3 lineup. It gives a mileage of 14.93 kmpl. Audi Q3 40 TFSI Premium Plus is available in Automatic (DCT) transmission and offered in 5 colours: Mythos Black Metallic, Navarra Blue Metallic , Chronos Gray Metallic, Pulse Orange and Glacier White Metallic.'
		},

		{ 
			imgSrc: 'assets/img/mercedes-benz-c-class.png', 
			year: '2023', hp:'461HP', 
			transmition:'automatic', 
			model: 'Mercedes-Benz C-Class', 
			price: '$825,990', 
			description: 'Powering the new Mercedes-Benz C-Class is a 1.5-litre, four-cylinder, turbo-petrol engine and a 2.0-litre, four-cylinder diesel engine. The former is available in the C200 guise, producing 201bhp and 300Nm of torque, while the latter is offered in the C220d and C300d guise, producing 197bhp and 440Nm of torque, and 261bhp and 550Nm of torque, respectively.'
		},

		{ 
			imgSrc: 'assets/img/bmw-m5.png', 
			year: '2014', 
			hp:'560HP', 
			transmition:'automatic', 
			model: 'BMW M5', 
			price: '$768,000 ', 
			description: 'BMW M5 is available in 1 variants. All the variants are Automatic. BMW M5 is offered in 9 colours: Black Sapphire, Havnna, Silver stone II Metallic, Space Grey, Impherial Blue, Monte Carlo Blau Metallic, Singapur Grau, Space Grey and Black Sapphire. However, some of these colours are available in specific variants.'
		},

		{ 
			imgSrc: 'assets/img/mercedes-benz-glk-class.png', 
			year: '2013', hp:'268HP', 
			transmition:'automatic', 
			model: 'Mercedes-Benz GLK-Class', 
			price: '$39,395', 
			description: 'Mercedes-Benz GL is available in 2 variants. All the variants are Automatic. Mercedes-Benz GL is offered in 6 colours: Palladium Silver, Obsidian Black, Polar White, Cinnabarite Red, Diamond White and Cavansite Blue. However, some of these colours are available in specific variants.'
		},

		{ 
			imgSrc: 'assets/img/range-rover.png', 
			year: '2015', hp:'188HP', 
			transmition:'automatic', 
			model: 'Range Rover Evoque', 
			price: '$69,395', 
			description: 'Range Rover Evoque is available in 3 variants. All the variants are Automatic. Mercedes-Benz GL is offered in 6 colours: Fuji White, Scotia Grey, Firenze Red, Loire Blue,Santorini Black and Phoenix Orange. However, some of these colours are available in specific variants.'
		},

		{ 
			imgSrc: 'assets/img/bmw-3.png', 
			year: '2014', 
			hp:'255HP', 
			transmition:'automatic', 
			model: 'BMW 3 Series', 
			price: '$179,395', 
			description: 'BMW 3 Series is available in 9 variants. Out of these 9 variants, 3 are Automatic and 6 are Automatic (TC). 3 Series is offered in 8 colours: Alpine White, Black Sapphire Metallic, Mineral Grey Metallic, Mediterranean Blue Metallic, Portimao Blue, Sunset Orange Metallic, Tanzanite Blue Metallic and Dravit Grey Metallic. However, some of these colours are available in specific variants.'
		},
		
		{ 
			imgSrc: 'assets/img/bmw-x5.png', 
			year: '2010', 
			hp:'170HP', 
			transmition:'automatic', 
			model: 'BMW X5', 
			price: '$49,395', 
			description: 'BMW X5 is available in 2 variants. All the variants are Automatic. BMW X5 is offered in 6 colours: Black Sapphire, Monaco Blue, Alpine White, Titanium Silver, Sliver Grey and Platinum Bronze. However, some of these colours are available in specific variants..'
		},
		{ 
			imgSrc: 'assets/img/mercedes-benz-sl-65-amg.png', 
			year: '2013', 
			hp:'261HP', 
			transmition:'automatic', 
			model: 'Mercedes-Benz SL 65 AMG', 
			price: '$289,395', 
			description: 'Mercedes-Benz SL 65 AMG . Mercedes-Benz SL 65 AMG is available in 2 variants. All the variants are Automatic. Mercedes-Benz SL 65 AMG is offered in 6 colours: Black Sapphire, Mineral Grey Metallic, Alpine White, Mediterranean Blue Metallic, Sliver Grey and Platinum Bronze. However, some of these colours are available in specific variants..'
		},

];
function createFeaturedCarElement(carData) {
    const div = document.createElement('div');
    div.className = 'col-lg-3 col-md-4 col-sm-6';
    div.innerHTML = `
        <div class="single-featured-cars">
            <div class="featured-img-box">
                <div class="featured-cars-img">
                    <img src="${carData.imgSrc}" alt="cars">
                </div>
                <div class="featured-model-info text-center">
                    <p class="mb-0 p-2">
                        <span class="featured-hp-span">model: ${carData.year}</span>
                        <span class="featured-hp-span">${carData.hp}</span>
                        <span>${carData.transmition}</span>
                    </p>
                </div>
            </div>
            <div class="featured-cars-txt">
                <h4 class="py-3">${carData.model}</h4>
                <h3>${carData.price}</h3>
                <p >${carData.description}</p>
            </div>
        </div>
    `;
    return div;
}

function initializeFeaturedCars() {
    const featuredCarsContent = document.getElementById('featuredCarsContent');

    automobili.forEach(carData => {
        const featuredCarElement = createFeaturedCarElement(carData);
        featuredCarsContent.appendChild(featuredCarElement);
    });
}

initializeFeaturedCars();




document.addEventListener('DOMContentLoaded', function () {
    const testimonials = [
        {
            name: 'John T',
            location: 'new york',
            imageSrc: 'assets/img/john.png',
            comment: 'DriveMotive delivered exceptional service. Their commitment to customer satisfaction and a diverse range of cars made my purchase enjoyable and hassle-free.'
        },
        {
            name: 'Sophie R',
            location: 'london',
            imageSrc: 'assets/img/sophie.png',
            comment: 'DriveMotive exceeded expectations. Their knowledgeable team guided me to the perfect vehicle. Smooth transaction, top-notch service, and a happy customer!'
        },
        {
            name: 'Alex B',
            location: 'washington',
            imageSrc: 'assets/img/alex.png',
            comment: 'Impressed by DriveMotive`s professionalism. Found the ideal car at a fair price. The entire process, from selection to purchase, was seamless and enjoyable.'
        }
    ];

    const testimonialCarousel = document.getElementById('testimonial-carousel');

    testimonials.forEach(testimonial => {
        const testimonialHTML = `
            <div class="col-sm-4 col-xs-12 px-3">
                <div class="single-testimonial-box">
                    <div class="testimonial-description">
                        <div class="testimonial-info">
                            <div class="testimonial-img">
                                <img src="${testimonial.imageSrc}" alt="image of clients person" />
                            </div><!--/.testimonial-img-->
                        </div><!--/.testimonial-info-->
                        <div class="testimonial-comment">
                            <p>${testimonial.comment}</p>
                        </div><!--/.testimonial-comment-->
                        <div class="testimonial-person">
                            <h2><a href="#">${testimonial.name}</a></h2>
                            <h4>${testimonial.location}</h4>
                        </div><!--/.testimonial-person-->
                    </div><!--/.testimonial-description-->
                </div><!--/.single-testimonial-box-->
            </div><!--/.col-->
        `;

        testimonialCarousel.innerHTML += testimonialHTML;
    });

    var owl=$('#testimonial-carousel');
        owl.owlCarousel({
            items:3,
            margin:0,
            
            loop:true,
            autoplay:true,
            smartSpeed:1000,
            
            
            dots:false,
            autoplayHoverPause:false,
        
            responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }
            
            
        });
});


let nizNovihauta = document.querySelectorAll("#newCars .row.g-0");
let nAutaObj = [];
	nAutaObj.push(
		{ime:"chevrolet camaro za100",
		opis1:'Unleash pure adrenaline with the Chevrolet Camaro Za100. A masterpiece of power, style, and innovation that redefines the driving experience.', 
		opis2: "Sculpted for performance, the Camaro Za100 embodies precision on every curve. Elevate your journey with a blend of iconic design and thrilling capabilities.",
		link:"assets/img/chevrolet-camaro.png",
		alt:"chevrolet camaro"
		});
	nAutaObj.push({
		ime:"BMW series-3 wagon",
		opis1:'Indulge in luxury and versatility with the BMW Series-3 Wagon. A fusion of sophistication and functionality, offering an unparalleled driving experience.', 
		opis2: "The Series-3 Wagon exemplifies BMW's commitment to excellence, combining cutting-edge technology with spacious elegance for a journey that seamlessly blends style and practicality.",
		link:"assets/img/bmw-series-3.png",
		alt:"BMW series-3"
	});
	nAutaObj.push({
		ime:"ferrari 488 superfast",
		opis1:'Unleash unparalleled speed and elegance with the Ferrari 488 Superfast. A symbol of precision engineering, delivering an extraordinary blend of power and sophistication.', 
		opis2: "Experience the epitome of automotive artistry. The Ferrari 488 Superfast, where innovation meets aerodynamic excellence, defining a new era of high-performance luxury on the road.",
		link:"assets/img/ferrari-488.png",
		alt:"ferrari 488"
	});
	nAutaObj.push({
		ime:"Porsche 911",
		opis1:'Embark on a journey of precision and power with the Porsche 911. A driving icon that seamlessly merges performance, heritage, and innovation.', 
		opis2: "Incomparable agility meets timeless design. The Porsche 911, a testament to engineering brilliance, delivering an unrivaled experience with every exhilarating ride.",
		link:"assets/img/porsche-911.png",
		alt:"Porsche 911"
	});
	nAutaObj.push({
		ime:"Aston Martin Vantage",
		opis1:'Elevate your driving experience with the Aston Martin Vantage. A symphony of performance and style, epitomizing luxury and cutting-edge engineering.', 
		opis2: "Crafted for the passionate driver, the Aston Martin Vantage fuses exquisite design with dynamic capabilities, promising a thrilling journey every time you take the wheel.",
		link:"assets/img/aston-martin-vantage.png",
		alt:"Aston Martin Vantage"
	});

function ispisnAuta(objects,objDiv){
objDiv.forEach((element,indeks) =>{
var cuvarTeksta=``;
cuvarTeksta+=   `<div class="col-lg-7 col-md-12 d-flex align-items-center mb-5">   
                    <div class="new-cars-img">
                        <img src="${objects[indeks].link}" class="img-fluid" alt="${objects[indeks].alt}"/>
                    </div>
                </div>`;
cuvarTeksta+=   `<div class="col-lg-5 col-md-12 p-1">
                    <div class="new-cars-txt">
                        <h2 class="pt-3 text-center">${objects[indeks].ime}</h2>`;
cuvarTeksta+=`          <p class="pt-2">${objects[indeks].opis1}</p>
                        <p class="new-cars-para2">${objects[indeks].opis2}</p>
                    </div>
                </div>`;
element.innerHTML = cuvarTeksta;
});
}
ispisnAuta(nAutaObj, nizNovihauta);
$(document).ready(function(){
    $('#carouselCommentControls').carousel();
});


let nizRb = document.querySelectorAll('input[name="kupac"]');

function validateForm() {
  let form = document.forms['contactForm'];
  let passed = true;

  let emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  let nameRegex = new RegExp(/^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,19})+$/);
  
  let selectedkupac = form['kupac'].value;

  function showError(elem, message) {
    elem.classList.add('error');
    if (elem.nextElementSibling) {
      elem.nextElementSibling.innerText = message;
      elem.nextElementSibling.style.display = 'block';
    }
  }

  form.querySelectorAll("input").forEach(function (el) {
    el.classList.remove("error");
  });
  form.querySelector('textarea').classList.remove("error");
  form.querySelectorAll('.validation').forEach(function (el) {
    el.innerText = '';
    el.style.display = "none";
  });


  var adresaMessage = '';
  if (form['kupac'].value === '') {
    adresaMessage = "Please fill out this field!";
  } 
  

    let ddlUsluga = form.querySelector('#ddlUsluga');
    if (ddlUsluga.value === '0') {
        showError(ddlUsluga, 'You must select at least one car!');
        passed = false;
        document.getElementById('productError').innerText = 'Choose car!';
        document.getElementById('productError').style.display = 'block';
    } else {
        ddlUsluga.classList.add('validate');
        showError(ddlUsluga, '');
        document.getElementById('productError').innerText = ''; 
        document.getElementById('productError').style.display = 'none';
    }
 
   
  
  


let checkboxes = document.querySelectorAll('#cuvaj input[type="checkbox"]');
let checked = Array.from(checkboxes).some(checkbox => checkbox.checked);


if (!checked) {
    let errorElement = document.getElementById('productError');
    errorElement.innerText = 'You must select at least one product!';
    errorElement.style.display = 'block';
    passed = false;
} else {
  
    let errorElement = document.getElementById('productError');
    errorElement.innerText = '';
    errorElement.style.display = 'none';
}
var nameMessage = '';
if (form['name'].value === '') {
  nameMessage = "Please fill out this field!";
} else if (!nameRegex.test(form['name'].value)) {
  nameMessage = "Niste dobro uneli ime i prezime : (Luka Antić)";
}
if (nameMessage) {
  showError(form['name'], nameMessage);
  passed = false;
}


  var emailMessage = '';
  if (form['email'].value === '') {
    emailMessage = "Please fill out this field!";
  } else if (!emailRegex.test(form['email'].value)) {
    emailMessage = "You have entered an incorrect email format: example@gmail.com.";
  }
  if (emailMessage) {
    showError(form['email'], emailMessage);
    passed = false;
  }


    if (passed) {
        document.querySelector("#sendmessage").style.display = 'block';
        form['name'].value = '';
        form['email'].value = '';
    
        nizRb.forEach(rb => {
        rb.checked = false;
        });
    
        document.querySelector("#brojSlova").textContent = '0/150';
        
        nizRb.forEach(rb => {
          rb.checked = false;
        });
      
        
        
  
    
        checkboxes.forEach(checkbox => checkbox.checked = false);
    
        document.querySelector("#komentar").value = '';
        document.querySelector("#brojSlova").textContent = '0/150';
    
        form.querySelector("#ddlUsluga").value = '0';
    
        prikazCheckBoxova(0);
      }

    
      return false;
    }

document.querySelector("#komentar").addEventListener("keyup", function () {
    document.querySelector("#brojSlova").textContent = `${document.querySelector("#komentar").value.length}/150`;
    
});


document.getElementById("ddlUsluga").addEventListener("change", function () {
    prikazCheckBoxova(parseInt(this.value));
});

function handleIzborUsluge(selectElement) {
    let izabranaVrednost = parseInt(selectElement.value);
    prikazCheckBoxova(izabranaVrednost);
}


function prikazCheckBoxova(pom) {
    let cuvaj = document.getElementById("cuvaj");


    if (pom === 0) {
        cuvaj.innerHTML = ''; 
        return; 
    }

    cuvaj.innerHTML = ''; 

    switch (pom) {
        case 1: // Mercedes-Benz
            brElem = 3;
            prikaziCheckboxOpcije(["Mercedes-Benz C-Class", "Mercedes-Benz GLK-Class", "Mercedes-Benz SL 65 AMG"]);
            break;
        case 2: // BMW
            brElem = 4;
            prikaziCheckboxOpcije(["BMW Series-3 Wagon", "BMW M5", "BMW 3 Series", "BMW X5"]);
            break;
        case 3: // Audi
            brElem = 1;
            prikaziCheckboxOpcije(["Audi Q3 40"]);
            break;
        case 4: // Chevrolet Camaro
            brElem = 1;
            prikaziCheckboxOpcije(["Chevrolet Camaro Za100"]);
            break;
        case 5: // Ferrari
            brElem = 1;
            prikaziCheckboxOpcije(["Ferrari 488 Superfast"]);
            break;
        case 6: // Porsche
            brElem = 1;
            prikaziCheckboxOpcije(["Porsche 911"]);
            break;
		case 7: // Aston Martin
            brElem = 1;
            prikaziCheckboxOpcije(["Aston Martin Vantage"]);
            break;
		case 8: // Range Rover
            brElem = 1;
            prikaziCheckboxOpcije(["Range Rover Evoque"]);
            break;
        default:
            brElem = 6;
    }

    function prikaziCheckboxOpcije(opcije) {
        for (let i = 0; i < opcije.length; i++) {
            let divObj = document.createElement("div");
            divObj.classList.add("col-12","pt-1");
            let inputCbx = document.createElement("input");
            let idCbx = opcije[i].replace(/\s+/g, '-').toLowerCase();
            inputCbx.setAttribute("id", idCbx);
            inputCbx.setAttribute("type", "checkbox");
            inputCbx.setAttribute("value", `${i}`);
            inputCbx.classList.add("form-check-input", "me-2");
            let lblCbx = document.createElement("label");
            lblCbx.setAttribute("for", idCbx);
            lblCbx.classList.add("form-check-label");
            lblCbx.innerText = opcije[i];
            divObj.appendChild(inputCbx);
            divObj.appendChild(lblCbx);
            cuvaj.appendChild(divObj);

            if (i == 2) {

            }
        }
    }
}

