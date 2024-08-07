import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";

import { auth } from "./config";

export async function cadastrarUsuario(nome, email, senha) {
  // Indicamos o serviço de autenticação e o email e senha do novo usuário
  // 'user' é um objeto com informações do usuário autenticado
  const { user } = await createUserWithEmailAndPassword(auth, email, senha);
  // Define o nome de exibição com o nome vindo do formulário de cadastro
  await updateProfile(user, { displayName: nome });
  // Envia o e-mail de verificação
  await sendEmailVerification(user);
}

export async function entrarGoogle() {
  // Indicar qual o provedor de login será usado
  const provider = new GoogleAuthProvider();
  // Abre um pop-up na tela com o login do google
  await signInWithPopup(auth, provider);
}

export async function loginUsuario(email, senha) {
  const { user } = await signInWithEmailAndPassword(auth, email, senha)
  if (!user.emailVerified) {
    throw new Error("email-verification-required")
  }
}

export async function logout() {
  await signOut(auth);
}
