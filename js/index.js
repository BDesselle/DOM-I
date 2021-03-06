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

  //let logo = document.getElementById("logo-img");
  //logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent.nav["img-src"]);

let navAnchors = document.getElementsByTagName("a");
for (let i = 0; i < navAnchors.length; i++) {
  navAnchors[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  navAnchors[i].style.color = "green";
}

let nav = document.querySelector("nav");
let a1 = document.createElement("a");
let textContent1 = document.createTextNode("Careers");
a1.appendChild(textContent1);
let a2 = document.createElement("a");
let textContent2 = document.createTextNode("Locations");
a2.appendChild(textContent2);

let newAnchor1 = nav.appendChild(a1);
let newAnchor2 = nav.appendChild(a2);
newAnchor1.setAttribute("href", "#");
newAnchor2.setAttribute("href", "#");
newAnchor1.style.color = "green";
newAnchor2.style.color = "green";

//CTA Section
let ctaHeading = document.querySelector("h1");
ctaHeading.textContent = "DOM IS AWESOME";

let ctaButton = document.querySelector("button");
ctaButton.textContent = "Get Started";

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

//Main Content
let main = document.querySelector(".main-content");
let mainHeadings = main.querySelectorAll("h4");
let mainParagraphs = main.querySelectorAll("p");

mainHeadings[0].textContent = siteContent["main-content"]["features-h4"];
mainParagraphs[0].textContent = siteContent["main-content"]["features-content"];

mainHeadings[1].textContent = siteContent["main-content"]["about-h4"];
mainParagraphs[1].textContent = siteContent["main-content"]["about-content"];

mainHeadings[2].textContent = siteContent["main-content"]["services-h4"];
mainParagraphs[2].textContent = siteContent["main-content"]["services-content"];

mainHeadings[3].textContent = siteContent["main-content"]["product-h4"];
mainParagraphs[3].textContent = siteContent["main-content"]["product-content"];

mainHeadings[4].textContent = siteContent["main-content"]["vision-h4"];
mainParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

let mainImg = document.querySelector("#middle-img");
mainImg.src = siteContent["main-content"]["middle-img-src"];

//Contact Content
let contact = document.querySelector(".contact").children;

contact[0].textContent = siteContent.contact["contact-h4"];
contact[1].textContent = siteContent.contact["address"];
contact[2].textContent = siteContent.contact["phone"];
contact[3].textContent = siteContent.contact["email"];

//Footer Content
let footer = document.querySelector("footer").querySelector("p");
footer.textContent = siteContent.footer.copyright;