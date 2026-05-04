console.log("script js connected");

let btn = document.querySelector(".navbar_btn");

if (btn) {
    btn.addEventListener("click", () => {
        console.log("button was clicked");
        
    });
} else {
    console.warn("Button with class .navbar_btn was not found on this page.");
}