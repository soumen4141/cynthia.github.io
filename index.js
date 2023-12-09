let timeout=0;
let smoothScroll=()=>{

    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
}
smoothScroll();

//mouse follower js 

let mousefollower=()=>{
    let scalex=1;
    let scaley=1;
    let diffx=0;
    let diffy=0;

   clearTimeout(timeout);

    let elem=document.querySelector(".pointer");

    console.log(elem);

    document.addEventListener('mousemove',(dets)=>{

       let diifrootX=dets.clientX-diffx;
       diffx=dets.clientX
       let diifrootY=dets.clientY-diffx;
       diffy=dets.clientY

       
     

       
    elem.style.top=`${dets.clientY}px`;
    elem.style.left=`${dets.clientX}px`;

    elem.style.transform=`scale(${gsap.utils.clamp(.8, 1.2,diifrootX )},${gsap.utils.clamp(.8, 1.2,diifrootY )})`
    


    
    })
  
}
mousefollower();


//photo hover js
let photo_hover=()=>{
    let prevx=0;
    let rotatex=0;
    let diffx=

    document.querySelectorAll(".first_hover").forEach((element)=>{
       let elem=element.querySelector(".hover_image");


        element.addEventListener('mousemove',(dets)=>{
            diffx=dets.clientX-prevx;
            prevx=dets.clientX;

            gsap.to(elem,{

                top:dets.clientY-element.getBoundingClientRect().top-200,
                left:dets.clientX,
                rotate: diffx
              
              })
              
              gsap.to(element.querySelector("h1"),{
                left:100,
                opacity:.5
              })


        })
        element.addEventListener('mouseleave',()=>{
            elem.style.display="none";

            gsap.to(element.querySelector("h1"),{
                left:0,
                opacity:1
              })

            console.log("leaving...")
    
            
        })
        element.addEventListener('mouseover',()=>{
            elem.style.display="inline-block";
    
            
        })
    })

   
}

photo_hover()

//hero section animation js
let hero_animation=()=>{

  let elem=document.querySelector(".bounding .first");
  let elem1=document.querySelector(".hero_div .second")
  

  let tl=gsap.timeline();
  tl.to(".navber",{
     top:0,
     duration:.8,
     delay:5.5
  })
  .to(elem,{

    top:0,
    duration:.5
  })
  .to(elem1,{
    
    top:0,
    duration:.5
  })
  .to(".hero_div h3",{
    top:0,
    duration:0.5

  })
  gsap.to(".sticky",{
    right:0,
    duration:.8,
    delay:6
  })
  
}

hero_animation();

//menu click animation js
let check=0;
let manu_click=()=>{
   
    let elem=document.querySelector(".navber .menu");
    console.log("click...")
    
        elem.addEventListener('click',()=>{
            if(check==0){
                gsap.to(".navber .manus h4",{
                    top:0,
                    stagger:.1
                })
                check=1
                
            }
            else{
                gsap.to(".navber .manus h4",{
                    top:-100,
                    stagger:.1
                }) 
                check=0; 
            }
           
        })

    }
    


manu_click();

//line hover js

let line_animation=()=>{
    let elements=document.querySelectorAll(".wrap");

    elements.forEach((elem)=>{
       let line=elem.querySelector(".line");

       elem.addEventListener('mouseover',()=>{
          line.style.float="left";
          line.style.width="100%";

       })
       elem.addEventListener('mouseleave',()=>{
        line.style.float="right";
        line.style.width="0%";
       })
     
    })

}

line_animation();

//clock js
let clock=()=>{



    let clock_elem=document.querySelector(".main_footer .footer_link .footer_left #clock");
    console.log("clock");
    setInterval(()=>{
        let date = new Date();
        clock_elem.innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} IST`
      
    },1000)


    
   
}

clock()

//loader animation js
let loader_animation=()=>{
  let tl=gsap.timeline()
    tl.from(".loader h3",{

        left:100,
        duration:2,
        opacity:.3
    })
    .to(".loader h3",{

        left:-100,
        opacity:0,
        duration:2
    })
    .to(".loader",{
        height:0,
        duration:1.5
    })
   
   
}

loader_animation()