const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Updating nav links
const links = document.querySelector("nav")

links.children[0].textContent = siteContent["nav"]["nav-item-1"]
links.children[1].textContent = siteContent["nav"]["nav-item-2"]
links.children[2].textContent = siteContent["nav"]["nav-item-3"]
links.children[3].textContent = siteContent["nav"]["nav-item-4"]
links.children[4].textContent = siteContent["nav"]["nav-item-5"]
links.children[5].textContent = siteContent["nav"]["nav-item-6"]

const addLink1 = document.createElement("a");
addLink1.href = "#";
addLink1.textContent = "Home";
document.querySelector("nav").prepend(addLink1);

const addLink2 = document.createElement("a");
addLink2.href = "#";
addLink2.textContent = "Pitbulls";
document.querySelector("nav").appendChild(addLink2);

links.children[1].style.color = "green"
links.children[2].style.color = "green"
links.children[3].style.color = "green"
links.children[4].style.color = "green"
links.children[5].style.color = "green"
links.children[6].style.color = "green"
addLink1.style.color = "green";
addLink2.style.color = "green";
// Updating the cta section
//img
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"])

//h1
const h1 = document.querySelector("h1")
const br = document.createElement("br")
const br2 = document.createElement("br")
const h1text1 = document.createTextNode("Dom")
const h1text2 = document.createTextNode("Is")
const h1text3 = document.createTextNode("Awesome")
h1.appendChild(h1text1)
h1.appendChild(br)
h1.appendChild(h1text2)
h1.appendChild(br2)
h1.appendChild(h1text3)

//button
const button = document.querySelector("button")
button.textContent = siteContent["cta"]["button"]

//updating main-content section
//h4
const featuresH4 = document.querySelector(".text-content:nth-of-type(1) h4")
featuresH4.textContent = siteContent["main-content"]["features-h4"]
const aboutH4 = document.querySelector(".text-content:nth-of-type(2) h4")
aboutH4.textContent = siteContent["main-content"]["about-h4"]
const servicesH4 = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4")
servicesH4.textContent = siteContent["main-content"]["services-h4"]
const productH4 = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4")
productH4.textContent = siteContent["main-content"]["product-h4"]
const visionH4 = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4")
visionH4.textContent = siteContent["main-content"]["vision-h4"]

//p
const featuresP = document.querySelector(".text-content:nth-of-type(1) P")
featuresP.textContent = siteContent["main-content"]["features-content"]
const aboutP = document.querySelector(".text-content:nth-of-type(2) P")
aboutP.textContent = siteContent["main-content"]["about-content"]
const servicesP = document.querySelector(".bottom-content .text-content:nth-of-type(1) P")
servicesP.textContent = siteContent["main-content"]["services-content"]
const productP = document.querySelector(".bottom-content .text-content:nth-of-type(2) P")
productP.textContent = siteContent["main-content"]["product-content"]
const visionP = document.querySelector(".bottom-content .text-content:nth-of-type(3) P")
visionP.textContent = siteContent["main-content"]["vision-content"]

//center img
const mainContentImg = document.querySelector("#middle-img");
mainContentImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//updating contact section
//h4
const contactH4 = document.querySelector(".contact h4")
contactH4.textContent = siteContent["contact"]["contact-h4"]

//p
//breaking address
const contactP1 = document.querySelector(".contact p:nth-of-type(1)")
const br3 = document.createElement("br")
const contactPText1 = document.createTextNode("123 Way 456 Street")
const contactPText2 = document.createTextNode("Somewhere, USA")
contactP1.appendChild(contactPText1)
contactP1.appendChild(br3)
contactP1.appendChild(contactPText2)

//phone number
const contactP2 = document.querySelector(".contact p:nth-of-type(2)")
contactP2.textContent = siteContent["contact"]["phone"]

//email
const contactP3 = document.querySelector(".contact p:nth-of-type(3)")
contactP3.textContent = siteContent["contact"]["email"]

//updating footer section
const footerP = document.querySelector("footer p")
footerP.textContent = siteContent["footer"]["copyright"]