import { db } from "../../config/firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

export const getAllPaintings = async () => {
  try {
    const collectionRef = collection(db, "Paintings");

    const querySnapshot = await getDocs(collectionRef);
    let paintings = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return paintings;
    // return array of Obj
  } catch (err) {
    console.error("Error getting paintings: ", err);
  }
};

export const createPainting = async (data) => {
  try {
    const collectionRef = collection(db, "Paintings");

    const newPaintingRef = await addDoc(collectionRef, {
      ...data,
      isFavorite: false,
    });

    return newPaintingRef;
    // returns Obj
  } catch (err) {
    console.error("Error adding paintings: ", err);
  }
};

export const getPaintingById = async (id) => {
  try {
    const docRef = doc(db, "Paintings", id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      throw new Error("Painting not found");
    }

    return { id: snapshot.id, ...snapshot.data() };
    // returns Obj
  } catch (err) {
    console.error("Error getting painting: ", err);
  }
};

///// add paintings data to firestore
// import paintings from "../../resources/painting_data.json";

// paintings.forEach((painting) => {
//   createPainting(painting);
// });
