gsap.to("#nav",{
    backgroundColor: "#000",
    duratntion:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})