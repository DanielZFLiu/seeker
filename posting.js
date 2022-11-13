// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore, collection, addDoc, doc, getDocs} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDziZ4JbHa-xhDEA8UKd1gjB2WHjCgYCkg",
    authDomain: "seeker-8aca3.firebaseapp.com",
    projectId: "seeker-8aca3",
    storageBucket: "seeker-8aca3.appspot.com",
    messagingSenderId: "837444216152",
    appId: "1:837444216152:web:c13d6359a685263ae1312d",
    measurementId: "G-QJER4FV4W0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // add post
  async function post(description, tags){
    await addDoc(collection(db, "posts"), {
      description: description,
      tags: tags,
    });
  }

  window.post = post;

  // load all documents into array
  async function load(arr){
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      arr.push(doc.data());
    });
  }

  window.load = load;

