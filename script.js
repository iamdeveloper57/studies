// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {getStorage,ref,uploadBytes,getDownloadURL,listAll} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
import {getFirestore,collection,addDoc, getDocs,} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import {getAuth,signInAnonymously,onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// Your web app's FC 
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
const auth = getAuth(app);
// Sign in anonymously
signInAnonymously(auth)
  .then(() => {
    console.log("Signed in anonymously");
  })
  .catch((error) => {
    console.error("Error signing in anonymously", error);
  });
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user.uid);
  } else {
    console.log("No user is signed in");
  }
});
let btn = document.querySelector(".uploadbtn"); let input = document.querySelector("#fileInput");
btn.addEventListener("click", () => {
  input.click();
});
input.addEventListener("change", (event) => {
  const file = event.target.files[0];
  btn.innerHTML = "uploading..."
  if (file) {
    // console.log("File selected:", file.name);
    const storageRef = ref(storage, 'uploads/' + file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      // console.log('Uploaded a blob or file!', snapshot);
      btn.innerHTML = "uploading..."
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        btn.innerHTML = "Uploaded";
//set the url in local storage
localStorage.setItem("img", downloadURL)
//display the img
let img = document.createElement("img");
img.classList.add("img");
img.src = downloadURL; 
img.style.width = "370px";
const imgupload = document.getElementById("uploadimg");
imgupload.appendChild(img)
        setTimeout(function (){
btn.innerHTML = "upload Image"
        },2500)
});}).catch((error) => {console.error('Upload failed', error);});} else {console.log("No file selected");}});

setTimeout(()=>{
// Reference to the directory in Firebase Storage
const listRef = ref(storage, 'uploads/');
// Get the images container
const imagesContainer = document.getElementById('imagesContainer');
const imagebox = document.createElement('div');
imagesContainer.appendChild(imagebox);
imagebox.classList.add("imagebox");
// List all files in the directory
listAll(listRef)
  .then((res) => {
    res.items.forEach((itemRef) => {
      // Get the download URL for each file
      getDownloadURL(itemRef)
  
      .then((url) => {
            // Create an img element and set its src attribute
const img = document.createElement('img');
img.src = url;
img.alt = itemRef.name;
img.style.width = '370px';
imagebox.appendChild(img);
img.classList.add("center")}).catch((error) => {console.error('Error fetching image URL:', error);});});}).catch((error) => {console.error('Error listing files:', error);});
      }, 1500)