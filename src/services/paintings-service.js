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

// live subscribe to collection
export const getPaintingsSubscription = (callback) => {
  const collectionRef = collection(db, "Paintings");

  // onSnapshot:
  // creates a listener listening to update of firestore collection
  // returns unsubscribe function that can be called to cancel the snapshot listener.
  const unsubscribeFn = onSnapshot(collectionRef, (snapshot) => {
    // every time a new document added -> take a snapshot of what database look like at that time
    const paintingData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(paintingData);
  });
  return unsubscribeFn;
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
