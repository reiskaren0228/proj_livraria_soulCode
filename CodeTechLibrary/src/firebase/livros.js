import { db } from "./config"
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"

const livrosCollection = collection(db, "livros")

const createLivro = async (livro) => {
  await addDoc(livrosCollection, livro)
}

const readLivros = async () => {
  const snapshot = await getDocs(livrosCollection)
  const livrosList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  return livrosList
}

const updateLivro = async (id, updatedLivro) => {
  const livroDoc = doc(db, "livros", id)
  await updateDoc(livroDoc, updatedLivro)
}

const deleteLivro = async (id) => {
  const livroDoc = doc(db, "livros", id)
  await deleteDoc(livroDoc)
}

export { createLivro, readLivros, updateLivro, deleteLivro }
