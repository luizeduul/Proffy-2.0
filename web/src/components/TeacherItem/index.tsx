import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://conteudo.imguol.com.br/blogs/299/files/2020/03/coder-1024x576.jpg" alt="imagem" />
        <div>
          <strong>João </strong>
          <span>ReactJS</span>
        </div>
      </header>
      <p>
        Aulas de reactJS, você também pode aprender.
      </p>
      <footer>
        <p>Preço/Hora <strong>R$100,00</strong></p>
        <button type="button">
          <img src={whatsappIcon} alt="ícone whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
