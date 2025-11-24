const myname=document.getElementById('special-name');
if(myname){
    const nametext=myname.textContent;
    myname.textContent='';
    myname.style.opacity='1';
    let i=0;
    const writer=()=>{
        if(i<nametext.length){
            myname.textContent+=nametext.charAt(i);
            i++;
            setTimeout(writer,200);
        }
    }
    setTimeout(writer,500);
}

const cont=document.querySelectorAll('.txt_content');
cont.forEach((el,i)=>{
    el.style.opacity='0';
    el.style.transform='translateY(20px)';
    el.style.transition='opacity 0.6s ease, transform 0.6s ease';
    setTimeout(()=>{
        el.style.opacity='1';
        el.style.transform='translateY(0)';
    },300*i)
});

const dp=document.getElementById('imgid');
if(dp){
    dp.style.opacity='0';
    dp.style.transform='scale(0.8)';
    dp.style.transition='opacity 0.8s ease, transform 0.8s ease';
    setTimeout(()=>{
        dp.style.opacity='1';
        dp.style.transform='scale(1)';
    },600);
}


const socIc=document.querySelectorAll('#contact_logo a img');
socIc.forEach(icon=>{
    icon.style.transition='transform 0.3s ease, filter 0.3s ease';
    icon.addEventListener('mouseenter',function(){
        this.style.transform='translateY(-5px) scale(1.2)';
        this.style.filter='brightness(1.2)';
    });
    icon.addEventListener('mouseleave',function(){
        this.style.transform='translateY(0) scale(1)';
        this.style.filter='brightness(1)';
    });
})

const cvDown=document.querySelector("button");
const downLink=document.getElementById("button_inside");
if(downLink && cvDown){
    cvDown.addEventListener("click",function(e){
        e.preventDefault();
        const link=document.createElement('a');
        link.href="/assets/cv/cv.pdf";
        link.download="Manukrishna_JP_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log("Downloading CV");
    });
}
