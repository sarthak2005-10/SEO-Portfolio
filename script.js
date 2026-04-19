window.onload = () => document.getElementById('preloader').style.display='none';

// Dark Mode
const toggle=document.getElementById('toggle');
toggle.onclick=()=>document.body.classList.toggle('dark');

// Counter
const counters=document.querySelectorAll('.counter');
counters.forEach(c=>{
  const update=()=>{
    const target=+c.dataset.target;
    const val=+c.innerText;
    const inc=target/100;
    if(val<target){c.innerText=Math.ceil(val+inc);setTimeout(update,20);} else c.innerText=target;
  };
  update();
});

// Scroll Progress
window.onscroll=()=>{
  let s=document.documentElement.scrollTop;
  let h=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  document.getElementById('progress').style.width=(s/h)*100+'%';
};

// Form
form.addEventListener('submit',e=>{e.preventDefault();alert('Message Sent!')});

// Slider
let i=0;
setInterval(()=>{
  let slides=document.querySelectorAll('.slider p');
  slides.forEach(s=>s.classList.remove('active'));
  i=(i+1)%slides.length;
  slides[i].classList.add('active');
},3000);