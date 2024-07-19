import { db } from "./config"
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
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

const getLivro = async (id) => {
  const livroDoc = doc(db, "livros", id)
  const livro = await getDoc(livroDoc)
  return livro.exists() ? { id: livro.id, ...livro.data() } : null
}

const updateLivro = async (id, updatedLivro) => {
  const livroDoc = doc(db, "livros", id)
  await updateDoc(livroDoc, updatedLivro)
}

const deleteLivro = async (id) => {
  const livroDoc = doc(db, "livros", id)
  await deleteDoc(livroDoc)
}

export { createLivro, readLivros, getLivro, updateLivro, deleteLivro }
