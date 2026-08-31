const header=document.querySelector(".header"),menu=document.querySelector(".menu"),nav=document.querySelector("nav"),links=document.querySelectorAll("nav a"),sections=document.querySelectorAll("main section[id]"),glow=document.querySelector(".cursor-glow");
document.getElementById("year").textContent=new Date().getFullYear();
window.addEventListener("scroll",()=>{header.classList.toggle("scrolled",scrollY>20);let cur="";sections.forEach(s=>{if(scrollY>=s.offsetTop-180)cur=s.id});links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+cur));});
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
links.forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
