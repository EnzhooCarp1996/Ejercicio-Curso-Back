import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../data/data.js";

export const obtenerProductos = async () => {
  try {
    const productosCollection = await getDocs(collection(db, "products"));
    return productosCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};

export const obtenerPorId = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error obteniendo el documento con ID ${id}:`, error);
    throw error;
  }
};

export const buscarPorConsulta = async (valor) => {
  try {
    const q = query(
      collection(db, "products"),
      where("categoria", "==", valor),
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error(`Error realizando la consulta en products:`, err);
    throw err;
  }
};
