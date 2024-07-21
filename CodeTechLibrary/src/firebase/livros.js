import { db } from "./config"
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore"

const livrosCollection = collection(db, "livros")

export const createLivro = async (livro, idUsuario) => {
  await addDoc(livrosCollection, { ...livro, idUsuario })
}

export const readLivros = async () => {
  const snapshot = await getDocs(livrosCollection)
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export const getLivro = async (id) => {
  const livroDoc = doc(db, "livros", id)
  const livro = await getDoc(livroDoc)
  return livro.exists() ? { id: livro.id, ...livro.data() } : null
}

export const getLivrosUsuario = async (idUsuario) => {
  const filtro = query(livrosCollection, where("idUsuario", "==", idUsuario))
  const snapshot = await getDocs(filtro)
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export const updateLivro = async (id, updatedLivro) => {
  const livroDoc = doc(db, "livros", id)
  await updateDoc(livroDoc, updatedLivro)
}

export const deleteLivro = async (id) => {
  await deleteDoc(doc(db, "livros", id))
}
