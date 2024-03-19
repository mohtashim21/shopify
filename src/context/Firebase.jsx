import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyB2f-F3TQOcIhemi5av3IRyQfdS_BbqUiY",
  authDomain: "shopify-56820.firebaseapp.com",
  projectId: "shopify-56820",
  storageBucket: "shopify-56820.appspot.com",
  messagingSenderId: "405614154106",
  appId: "1:405614154106:web:47d8ec1c9e187db84c06c3",
};

export const useFirebase = () => {
  const firebase = useContext(FirebaseContext);
  return firebase;
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
      console.log("User", user);
    });
  }, []);

  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithEmailAndPass = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const SigninWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  console.log(user);

  // home products
  // create home men - function
  const createHomeMenProduct = async (title, price, img) => {
    const imageRef = ref(storage, `images/men/${img.name}`);
    const uploadResult = await uploadBytes(imageRef, img);
    return await addDoc(collection(firestore, "home_men"), {
      title,
      price,
      imageUrl: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  // create home women - function
  const createHomeWomenProduct = async (title, price, img) => {
    const imageRef = ref(storage, `images/women/${img.name}`);
    const uploadResult = await uploadBytes(imageRef, img);
    return await addDoc(collection(firestore, "home_women"), {
      title,
      price,
      imageUrl: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  // products
  // create products men - function
  const createProductsMen = async (title, price, img) => {
    const imageRef = ref(storage, `images/product_men/${img.name}`);
    const uploadResult = await uploadBytes(imageRef, img);
    return await addDoc(collection(firestore, "products_men"), {
      title,
      price,
      imageUrl: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  // create products women - function
  const createProductsWomen = async (title, price, img) => {
    const imageRef = ref(storage, `images/product_women/${img.name}`);
    const uploadResult = await uploadBytes(imageRef, img);
    return await addDoc(collection(firestore, "products_women"), {
      title,
      price,
      imageUrl: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  // Home
  // get all Home men - function
  const listHomeMen = () => {
    return getDocs(collection(firestore, "home_men"));
  };
  // get all Home women - function
  const listHomeWomen = () => {
    return getDocs(collection(firestore, "home_women"));
  };


  // Products
  // get all Products men - function
  const listProductMen = () => {
    return getDocs(collection(firestore, "products_men"));
  };
  // get all Products women - function
  const listProductWomen = () => {
    return getDocs(collection(firestore, "products_women"));
  };

  // get single product by id men - function
  const getProductByIdMen = async (id) => {
    const docRef = doc(firestore, "home_men", id);
    const result = await getDoc(docRef);
    return result;
  };

  // get single product by id women - function
  const getProductByIdWomen = async (id) => {
    const docRef = doc(firestore, "home_women", id);
    const result = await getDoc(docRef);
    return result;
  };

  const getImageURL = (path) => {
    return getDownloadURL(ref(storage, path));
  };


  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signinWithEmailAndPass,
        SigninWithGoogle,
        createHomeMenProduct,
        createHomeWomenProduct,
        createProductsMen,
        createProductsWomen,
        listHomeMen,
        listHomeWomen,
        listProductMen,
        listProductWomen,
        getImageURL,
        getProductByIdMen,
        getProductByIdWomen,
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
