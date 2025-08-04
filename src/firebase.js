import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBCCZ1MUh40mJk0j325woToJkmxuPRDvsw",
  authDomain: "netflix-clone-e3383.firebaseapp.com",
  projectId: "netflix-clone-e3383",
  storageBucket: "netflix-clone-e3383.firebasestorage.app",
  messagingSenderId: "856952659564",
  appId: "1:856952659564:web:7805e32afd93430d3c4249"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        alert(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};