import React, { useEffect, useState } from 'react';import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import NeonCircles from './Neon';

const HeaderWrapper = styled(animated.header)`
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 18px );
  -webkit-backdrop-filter: blur( 18px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 10px; /* Define a distância a partir do topo */  left: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease; /* Adiciona uma transição suave para o efeito de scroll */
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`

  align-items: center;
  display: flex;
  font-size: 24px;
  color: #fff;
  text-decoration: none;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
  }

  li {
    a {
      text-decoration: none;
      color: #fff;
      font-size: 18px;
      transition: all 0.3s ease-in-out;
      padding: 10px 10px;
      border-radius: 5px;

      &:hover {
        background-color: #fff;
        color: #000;
        text-decoration: none;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); /* Adicione a animação de brilho aqui */
        transform: scale(0.90);

      }

      &:active {
        transform: scale(0.90);
      }
    }
  }
`;


const ContactButton = styled(Link)`
  background: linear-gradient(135deg, #6366f1, #9a66f1); /* Gradiente azul para roxo */
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  border: none;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(45deg, #9a66f1, #6366f1); /* Gradiente roxo para azul */
    z-index: -1;
    filter: blur(20px);
  }

  &:hover {
    background: linear-gradient(135deg, #6366f1, #9a66f1); /* Gradiente azul para roxo */
    color: #fff;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
`;

function Header() {
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const [buttonHovered, setButtonHovered] = useState(false);

  const buttonAnimation1 = useSpring({
    transform: buttonHovered ? 'scale(1.1)' : 'scale(1)',
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Função para verificar o scroll da página
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Verifica se o scroll está além de um ponto específico (por exemplo, 100 pixels do topo)
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona um event listener para o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <HeaderWrapper className={isScrolled ? 'scrolled' : ''} style={headerAnimation}>
      <HeaderContainer >
        <Logo to="/"><NeonCircles />Ruan Lima</Logo>
        <Nav>
          <ul>
            <li>
              <Link
                to="/"
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                style={buttonHovered ? buttonAnimation1 : null}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                style={buttonHovered ? buttonAnimation1 : null}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                style={buttonHovered ? buttonAnimation1 : null}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                style={buttonHovered ? buttonAnimation1 : null}
              >
                Contato
              </Link>
            </li>
                      </ul>
        </Nav>
        <ContactButton
                to="/contact"
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                style={buttonHovered ? buttonAnimation1 : null}
              >
                Entre em Contato
              </ContactButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
