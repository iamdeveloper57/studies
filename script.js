// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIgqX-mmVGRe67fhOaZixUUWJEFG5EPyc",
  authDomain: "studies-972a4.firebaseapp.com",
  projectId: "studies-972a4",
  storageBucket: "studies-972a4.appspot.com",
  messagingSenderId: "588930545350",
  appId: "1:588930545350:web:5ed62bdd8667362a2a89c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

let btn = document.querySelector(".uploadbtn");
let input = document.querySelector("#fileInput");
btn.addEventListener("click", () => {
  input.click();
});

//Animation

const scrollRevealOption = {
  distance: "50px",
  origin: "top",
  duration: 1400,
  // easing: 'cubic-bezier(0.50, -0.45, 0.20, 1.45)',
  opacity: 0,
  scale: 0.9,
  reset: true,
  mobile: true,
  // rotate: { x: 10, y: 0, z: 10 },
  viewFactor: 0.2,
};
const scrollReveal = {
  distance: "50px",
  origin: "bottom",
  duration: 2000,
};

ScrollReveal().reveal(".heroimg", scrollRevealOption);
ScrollReveal().reveal(".hero-text", scrollRevealOption);
ScrollReveal().reveal(".sec-text", scrollRevealOption);
ScrollReveal().reveal(".uploadbtn", scrollRevealOption);
ScrollReveal().reveal(".topic", scrollReveal);
ScrollReveal().reveal(".maths", scrollReveal);

const video = document.getElementById("video");

// Promise.all([
//   faceapi.nets.tnyFaceDetector.loadFromUrl('')
// ])

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    (stream) => (video.srcObject = stream),
    (err) => console.error(err)
  );
}

startVideo();



import * as fp from './node_modules/fingerpose/dist/fingerpose.js';
// import * as fp from './node_modules/fingerpose';

async function main() {
  const video = document.createElement("video");
  video.width = 640;
  video.height = 480;
  document.body.appendChild(video);

  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
  await video.play();

  const model = await handpose.load();
  const GE = new fp.GestureEstimator([
    fp.Gestures.VictoryGesture,
    fp.Gestures.ThumbsUpGesture,
  ]);

  video.addEventListener("loadeddata", async () => {
    const detect = async () => {
      const predictions = await model.estimateHands(video, true);
      if (predictions.length > 0) {
        const estimatedGestures = GE.estimate(predictions[0].landmarks, 8.5);
        if (estimatedGestures.gestures.length > 0) {
          const gesture = estimatedGestures.gestures[0].name;
          if (gesture === "thumbs_up") {
            window.scrollBy(0, -100); // Scroll up
          } else if (gesture === "victory") {
            window.scrollBy(0, 100); // Scroll down
          }
        }
      }
      requestAnimationFrame(detect);
    };
    detect();
  });
}

main();
