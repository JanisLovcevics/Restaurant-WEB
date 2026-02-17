/**enlarge_gallery_button = document.getElementById("gallery_section").getElementsByClassName("image_input")[0].children[1];
enlarge_specials_button = document.getElementById("specials_section").getElementsByClassName("image_input")[0].children[1];

enlarge_gallery_button.addEventListener("click", addImage)
enlarge_specials_button.addEventListener("click", addImageSpecials)
function addImage() {
    image_link = document.getElementById("image_url_input_gallery").value;
    if (image_link !== null && image_link !== "") {
        new_image = document.createElement("img");
        new_image.src = image_link;
        new_image.classList.add("scaling_object");
        document.getElementById("gallery_section").children[1].appendChild(new_image);
    }
}

function addImageSpecials() {
    image_link = document.getElementById("image_url_input_specials").value;
    if (image_link !== null && image_link !== "") {
        new_image = document.createElement("img");
        new_image.src = image_link;
        new_image.classList.add("scaling_object");
        document.getElementById("specials_section").children[1].appendChild(new_image);
    }
}
    */


order_button = document.getElementById("order_button")

order_button.addEventListener("click",function(){
    if (order_button.parentElement.childElementCount > 2){
        const image = document.getElementById("order_animation_image")
        image.classList.remove("order_button_animation")
        image.offsetWidth;
        image.classList.add("order_button_animation");
    }
    else{
        const image = document.createElement("img");
        image.id = "order_animation_image";
        image.src = "images/gallery/goaway.jpg";
        image.style = "width: 300px; margin: 30px;"
        image.classList.add("order_button_animation");
        order_button.parentElement.appendChild(image);
        image.addEventListener("click",function(){
            image.remove()
        })
    }
})