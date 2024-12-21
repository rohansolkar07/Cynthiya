const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var rotate = 0;
var diffrot = 0;
document.querySelectorAll(".item1").forEach(function(item) {
    item.addEventListener("mousemove", function(details){
        diffrot = details.clientX - rotate;
        rotate = details.clientX;
        var diff = (details.clientY*.8  - item.getBoundingClientRect().top) -20;
        console.log(diff)
        gsap.to(item.querySelector("Img"),{
            opacity : 1,
            left : details.clientX,
            top : diff,
            rotate : gsap.utils.clamp(-20, 20 ,diffrot)
        })
    })

    item.addEventListener("mouseleave", function(details){
        gsap.to(item.querySelector("Img"),{
            opacity : 0,
        })
    })
})



function mouseCircleSize() {
    var xscale = 1;
    var yscale = 1;

    var prevX = 0;
    var prey = 0 ; 


    window.addEventListener("mousemove", function(details) {
        xscale = gsap.utils.clamp(.7,1.2,details.clientX)
        yscale = gsap.utils.clamp(.9,1.2,details.clientY)

        prevX = details.clientX;
        prey = details.clientY;

        mouseMiniCirle(xscale,yscale)        
    })
}

mouseCircleSize()

function mouseMiniCirle(xscale,yscale) {
    window.addEventListener("mousemove",function(details){
        document.querySelector('#minicircle').style.transform = `translate(${details.clientX}px,${details.clientY}px) scale(${xscale}, ${yscale})`
    })    
}
mouseMiniCirle()

function animateHero() {
    var t1 = gsap.timeline();
    t1.from("#nav", {
        y : "-10",
        opacity : 0,
        ease : Expo.easeInOut,
        duration : 2,
        delay : -1
    })
    .to(".productBoxElm",{
        y : 0,
        ease : Expo.easeInOut,
        duration : 1,
        stagger : .5,

    })
    .from("#hirofooter" , {
        y: '-10',
        opacity : 0,
        ease : Expo.easeInOut,
        duration : 1.5,
        delay : -1
        
    })

}
animateHero()