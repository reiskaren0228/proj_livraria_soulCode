import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoLinkedin,
} from "react-icons/io";
import "./Contato.css";

function Contato() {
  return (
    <>
      <header className='cabecalho'>
        <div>
          <h1 className='titulo'>Contato</h1>
        </div>
      </header>
      <main className='central'>
        <section className='info-contato'>
          <h2>Entre em Contato Conosco</h2>
          <p>
            <b>
              Para reservas de livros, eventos, dúvidas ou sugestões, entre em
              contato conosco:
            </b>
          </p>
          <ul>
            <li>
              <FaPhone className='icon' /> Telefone: (055) 1234-6532
            </li>
            <li>
              <FaEnvelope className='icon' /> Email:
              <a href='mailto:contato@codetechlibrary.com'>
                contato@codetechlibrary.com
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className='icon' /> Endereço: Rua dos Livros, 456,
              Centro, Cidade - Estado, CEP 98765-432
            </li>
          </ul>
        </section>

        <section className='form-contato'>
          <h2>Envie uma Mensagem</h2>
          <form action='enviar_mensagem.php' method='post'>
            <label htmlFor='nome'>Nome Completo:</label>
            <input
              type='text'
              id='nome'
              name='nome'
              placeholder='Digite seu nome'
            />
            <label htmlFor='email'>E-mail:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Digite seu e-mail'
            />
            <label htmlFor='mensagem'>Mensagem:</label>
            <textarea
              id='mensagem'
              name='mensagem'
              rows='4'
              placeholder='Digite aqui sua mensagem...'
              required
            ></textarea>
            <button type='submit'>Enviar</button>
          </form>
        </section>

        <section className='redes-sociais'>
          <div className='icon-container'>
            <a
              href='https://instagram.com/codetechlibrary'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoLogoInstagram />
            </a>
            <a
              href='https://wa.me/555512345678'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href='https://linkedin.com/company/codetechlibrary'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contato;
