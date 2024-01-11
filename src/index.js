const loading = document.getElementById('loading')
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// async function intro(){
//   const name = ['KPOP','Rice','Flour','Chicken']

//   for (let i = 0; i < 4; i++){
//     loading.textContent = name[i]
//     await new Promise(resolve => setTimeout(resolve,500))
//   }

//   loading.classList.add('hidden')
//   loading.classList.add('gone')
// }

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// window.onload = intro()
