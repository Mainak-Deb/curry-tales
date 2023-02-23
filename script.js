var product = document.getElementById("product");
var prodForm = ``;
var achar = ["chilli pickle", "Pea pickle", "Kuler Achar", "amla pickle",
    "Mango Pickle", "Chilli Pickle", "Guava Pickle", "Veggies Pickle",
    "Gooseberry Pickle", "Tamarind Pickle", "Cucumber Pickle",
    "Lemon Pickle"]
var prodbox = `
    <div class="prodbox">
    <img src="images/shopping ({i}).webp" alt="">
    <div class="downbox">
        <div class="prodname">{picklename}</div>
        <div class="prodprice">Price : {pickleprice} rs.</div>
        <div class="free">Free delivery</div>
        <div class="buttonbox">
            <button class="butbutton  wood2">Buy Now</button>
            <button class="butbutton wood">Add to Cart</button>
         </div>
    </div>
    </div>
`;


for (var i = 1; i <= 12; i++) {
    var price = Math.floor(100 + Math.random() * 400);
    var name = achar[i - 1];
    var newprodbox = prodbox.replace(/\{i}/g, i);
    newprodbox = newprodbox.replace(/\{pickleprice}/g, price);
    newprodbox = newprodbox.replace(/\{picklename}/g, name);
    prodForm += newprodbox;

}
// console.log(prodForm)


product.innerHTML = prodForm;



var homepage = document.getElementById("homebar");
var loginpage = document.getElementById("loginbar");

function toogle() {
    if (homepage.style.display == "block") {
        loginpage.style.display = "block";
        homepage.style.display = "none";
    } else {
        loginpage.style.display = "none";
        homepage.style.display= "block";
    }

}


var login=document.getElementById("login");
var signup=document.getElementById("signup");

function toogleAuth() {
    console.log(login.style.display)
    
    if (login.style.display == "flex") {
        signup.style.display = "flex";
        login.style.display = "none";
    } else {
        signup.style.display = "none";
        login.style.display= "flex";
    }

}

