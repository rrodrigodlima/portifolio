import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import backgroundImage from '../6.jpg';
import RotatingMandala from '../components/Mandala';

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Espaçamento entre as InfoBoxes */  align-items: center;
  text-align: center;
  padding: 100px 30px;
  position: relative;
  height: 90vh;
  background-size: contain;
  background-position: center;
  overflow: hidden;
`;

const ParallaxContent = styled.div`

  position: relative;
  padding: 100px 30px;
  justify-content: space-between; /* Espaçamento entre as InfoBoxes */  align-items: center;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 24px;
`;

const ParallaxBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const InfoBox = styled.div`
  width: 30%; /* Largura reduzida para acomodar duas InfoBoxes com espaço entre elas */
  height: 70vh;
  background-color: rgba(255, 255, 255, 0.1); /* Cor de fundo com transparência */
  backdrop-filter: blur(8px); /* Aplica um desfoque no fundo */
  border: 1px solid rgba(150, 68, 214, 0.51);
  border-radius: 10px; /* Bordas arredondadas */
  color: white;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Adicione a transição para box-shadow */
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 40px rgba(78, 115, 223, 0.4); /* Adicione a animação de brilho aqui */
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: #9644D6; /* Cor do texto */
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(150, 68, 214, 0.7); /* Adiciona uma sombra ao texto */`;
const Description = styled.p`
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.7);
  margin: 1em;
  font-size: 18px;
  color: #fff; /* Cor do texto secundário */
  
`;

const GlowBar = styled.p`
  margin: 1em;
  box-shadow: 0 0 100px rgba(255, 255, 255, 0.7); /* Adicione a animação de brilho aqui */
`;

const Button = styled.button`
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

function Home() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Função para atualizar o deslocamento da imagem de fundo com base na rolagem
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (backgroundRef.current) {
        // Atualize a posição vertical da imagem de fundo
        backgroundRef.current.style.transform = `translate3d(0, ${scrollTop * 0.5}px, 0)`;
      }
    };

    // Adicione um event listener para o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Remova o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (      
    <HomeContainer>
     <ParallaxBackground ref={backgroundRef} />
      <ParallaxContent>
      <InfoBox>
      <Title>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Ruan Lima - Full Stack Developer
          
        </motion.div>
      </Title>
      <Description>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          Bem-vindo ao meu portfólio. Aqui você pode encontrar informações sobre meus projetos e experiência.
          <GlowBar>
          <hr/>
          </GlowBar>
        </motion.div>
      </Description>
      <Button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Ver Projetos
      </Button>
      <Description>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into electronic but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing

        </motion.div>
      </Description>
      </InfoBox>
      <InfoBox>
      </InfoBox>
      <RotatingMandala />
      </ParallaxContent>
    </HomeContainer>

  );
}

export default Home;
