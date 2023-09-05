// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import styled from 'styled-components';
import SettingsIcon from '@mui/icons-material/Settings';

const StyledAppBar = styled(AppBar)`
  background: rgba(255, 255, 255, ${({ scrolling }) => (scrolling ? '0.9' : '0.1')});
  backdrop-filter: ${({ scrolling }) => (scrolling ? 'blur(30px)' : 'none')};
  transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const LogoContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const LogoText = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

const ContactButton = styled(Button)`
  background-color: #e74c3c;
  color: #fff;

  &:hover {
    background-color: #c0392b;
  }
`;

const ContentContainer = styled.div`
  margin-top: 80px;
`;

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <StyledAppBar position="fixed" scrolling={scrolling}>
        <Toolbar>
          <HeaderContainer scrolling={scrolling}>
            <LogoContainer>
              <SettingsIcon style={{ fontSize: 40, color: scrolling ? '#3498db' : '#fff' }} />
            </LogoContainer>
            <LogoText variant="h6">Meu Portfólio</LogoText>
            <Navigation>
              <a href="#about">Sobre</a>
              <a href="#projects">Projetos</a>
              <a href="#contact">Contato</a>
              <ContactButton variant="contained" href="#contact">
                Entrar em Contato
              </ContactButton>
            </Navigation>
          </HeaderContainer>
        </Toolbar>
      </StyledAppBar>
      <ContentContainer>
        {/* Seu conteúdo principal da página aqui */}
      </ContentContainer>
    </div>
  );
};

export default Header;
