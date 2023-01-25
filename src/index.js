import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
 alert("Bana tıkladın!")
 });

// Kodlar buraya gelecek!


//NAV-LİNK(NAVBAR)--mouseover--preventdefault
const navBar=document.querySelectorAll(".nav-link");
navBar.forEach((item)=>{
item.addEventListener("mouseover", (event)=> {
    event.target.style.color="yellow";

    setTimeout(()=> {
        event.target.style.color="";
    }, 1000)
})
item.addEventListener("click",(e)=>{
    alert("You stuck here!!!");
    //e.preventDefault();
})

});


const btn=document.querySelectorAll(".btn")

btn.forEach((item)=>{
   
    item.addEventListener("dblclick", (evt)=>{
        evt.target.style.color="red"
        evt.preventDefault();
        })
})

const foot=document.querySelector(".footer");
foot.addEventListener("mouseleave", (event)=> {
    event.target.style.fontWeight="bold"

})

const imgBus=document.querySelectorAll("img");
imgBus.forEach((e)=>{
e.addEventListener("click", (event)=>{
    event.target.style.filter="grayscale(100%)"

    
});
e.addEventListener("dblclick", (event)=>{
    event.target.style.border="dashed"
})
})

const el=document.getElementById("scroll-box")
const pOut=document.getElementById("output")

el.addEventListener("scroll", (event) => {
    pOut.textContent = "Scroll event fired!";
    pOut.style.fontWeight="bold";  //Aynı anda iki farklı özellik atayabiliyo muyuz? bold ve color gibi(denedim olmadı)...

    setTimeout(() => {
      pOut.textContent = "Waiting on scroll events...";
    }, 1000);
  });
 

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.drag1);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }