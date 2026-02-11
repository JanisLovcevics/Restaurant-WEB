enlarge_gallery_button = document.getElementById("gallery_section").children[3];
enlarge_specials_button = document.getElementById("specials_section").children[3];

enlarge_gallery_button.addEventListener("click",  addImage)
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