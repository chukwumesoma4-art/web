const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", function(){

    let value = searchBar.value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        let name = product.dataset.name;

        if(name.includes(value)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }

    });

});
function openImage(src){

    document.getElementById("lightbox").style.display = "block";

    document.getElementById("lightboxImg").src = src;

}

function closeImage(){

    document.getElementById("lightbox").style.display = "none";

}
document.getElementById("contactForm")
.addEventListener("submit", function(event){

event.preventDefault();

let email =
document.getElementById("email").value;

if(!email.includes("@")){

document.getElementById("result")
.innerHTML =
"Please enter a valid email.";

return;

}

document.getElementById("result")
.innerHTML =
"Message sent successfully!";

});

document.getElementById("enquiryForm")
.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("response")
.innerHTML =
"Product available. Estimated delivery: 3-5 days.";

});

function searchProduct(){

    let search =
    document.getElementById("searchBar")
    .value
    .toLowerCase()
    .trim();

    if(search === "cap" || search === "caps"){

        window.location.href =
        "Shop.html#caps";

    }

    else if(search === "tracksuit"){

        window.location.href =
        "Shop.html#tracksuit";

    }

   else if(search==="essentials"){

        window.location.href =
        "Shop.html#essentials";
    }
    else if(search==="knitwear"){

        window.location.href =
        "Shop.html#knitwear";
    }
    else{

        alert("Product not found.");

    }

}
document.getElementById("searchBar")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        searchProduct();

    }

});

function setRating(rating){

    let stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {

        if(index < rating){
            star.classList.add("active");
        }
        else{
            star.classList.remove("active");
        }

    });

    document.getElementById("ratingText").innerHTML =
    "You rated this product " + rating + " out of 5 stars.";
}

function setRating(rating){

    localStorage.setItem("userRating", rating);

    let stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {

        if(index < rating){
            star.classList.add("active");
        }
        else{
            star.classList.remove("active");
        }

    });

    document.getElementById("ratingText").innerHTML =
    "You rated this product " + rating + " out of 5 stars.";
}

window.onload = function(){

    let savedRating =
    localStorage.getItem("userRating");

    if(savedRating){

        setRating(savedRating);

    }

}
