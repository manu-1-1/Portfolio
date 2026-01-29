const projects=document.querySelectorAll(".project");

projects.forEach(card =>{
    card.addEventListener("mouseenter",()=>{
        card.style.transform="translateY(-10px)";
        card.style.transition="transform 0.3s ease";
    });
    card.addEventListener("mouseleave",()=>{
        card.style.transform="translateY(0)";
    });
});