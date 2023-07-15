import { db } from "../../config/firebase";
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
  const collectionRef = collection(db, "Paintings");

  const querySnapshot = await getDocs(collectionRef);
  console.log("querySnapshot: ", querySnapshot);
  console.log("docs: ", querySnapshot.docs);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  // return array of Obj
};
