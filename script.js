  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAIgqX-mmVGRe67fhOaZixUUWJEFG5EPyc",
    authDomain: "studies-972a4.firebaseapp.com",
    projectId: "studies-972a4",
    storageBucket: "studies-972a4.appspot.com",
    messagingSenderId: "588930545350",
    appId: "1:588930545350:web:5ed62bdd8667362a2a89c7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);






let btn = document.querySelector(".uploadbtn");
btn.addEventListener("click", ()=>{
   
})

//Animation

const scrollRevealOption={
    distance: '50px',
    origin: 'bottom',
    duration: 1700
}
const scrollReveal={
  distance : '50px',
  origin : 'left',
  duration : 2000

}

ScrollReveal().reveal('.heroimg', scrollRevealOption);
ScrollReveal().reveal('.hero-text', scrollRevealOption);
ScrollReveal().reveal('.sec-text', scrollRevealOption);
ScrollReveal().reveal('.uploadbtn', scrollRevealOption);
ScrollReveal().reveal('.topic', scrollReveal);
ScrollReveal().reveal('.maths', scrollReveal);




