const form=document.getElementById("send_message");

form.addEventListener("submit",function(e){
    e.preventDefault(); 
    const name=form.querySelector('input[placeholder="Your name"]').value.trim();
    const email=form.querySelector('input[type="email"]').value.trim();
    const subject=form.querySelector('input[placeholder="Subject"]').value.trim();
    const message=form.querySelector("textarea").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields");
        return;
    }

    if(!isValidEmail(email)){
        alert("Please enter a valid email address.");
        return;
    }
    alert("Message sent successfully!");
    form.reset();
});

function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
