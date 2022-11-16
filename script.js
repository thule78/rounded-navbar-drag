const nav = document.querySelector("nav");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
})

// draggable nav function//
 function onDrag({movementY}) {
    const navStyle = window.getComputedStyle(nav),
    navTop = parseInt(navStyle.top),
    navHeight = parseInt(navStyle.height),
    winHeight = window.innerHeight;

    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
    if(navTop > winHeight - navHeight) {
        nav.style.top = `${winHeight - navHeight}px`;
    }
 }

 //mouse click & move //

 nav.addEventListener("mousedown", () => {
    nav.addEventListener("mousemove", onDrag);
 });

 // mouse relase //
nav.addEventListener("mouseup", () => {
    nav.removeEventListener("mousemove", onDrag);
});

 nav.addEventListener("mouseleave", () => {
    nav.removeEventListener("mousemove", onDrag);
 });
