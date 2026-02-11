enlarge_gallery_button = document.getElementById("enlarge_gallery");

enlarge_gallery_button.addEventListener("click",  addImage)

function addImage() {
    image_link = document.getElementById("image_url_input").value;
    if (image_link !== null && image_link !== "") {
        new_image = document.createElement("img");
        new_image.src = image_link;
        new_image.classList.add("scaling_object");
        document.getElementById("specials_section").children[1].appendChild(new_image);
    }
}