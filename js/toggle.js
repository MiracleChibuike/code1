
function navIcon() {
    let anchor = document.querySelector(".ul");
    let tags = document.querySelector(".listItem")
    if (tags.style.display === "none") {
        tags.style.display = "block"
        console.log(anchor);
        console.log(tags)
    }else{
        tags.style.display = "none"
    }
}