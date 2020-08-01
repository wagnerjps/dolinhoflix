import React from 'react';
import { FooterBase, FooterImage } from './styles';
import Logo from '../../assets/img/dolinhoflix.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <FooterImage src={Logo} alt="DolinhoFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
