import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const AboutMeWrapper = styled.section`
  background-color: #333;
  color: white;
  padding: 50px 0;
  position: relative;
  overflow: hidden;
`;

const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(30px); /* Ajuste o valor do desfoque conforme necessário */
  z-index: -1;
`;


const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-left: 30px;
  
`;

const AboutContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AboutImage = styled.img`
  max-width: 100%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const StacksOrbit = styled.div`
  position: absolute;
  top: calc(55% - 25px); /* Ajuste a posição vertical dos ícones */
  left: calc(25% - 20px); /* Ajuste a posição horizontal dos ícones */
  animation: orbit 10s linear infinite;
`;

const StackIcon = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:nth-child(1) {
    animation: orbit 10s linear infinite;
  }
  &:nth-child(2) {
    animation: orbit 8s linear infinite;
  }
  &:nth-child(3) {
    animation: orbit 12s linear infinite;
  }
  &:nth-child(4) {
    animation: orbit 9s linear infinite;
  }
  &:nth-child(5) {
    animation: orbit 11s linear infinite;
  }

  @keyframes orbit {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) translateX(100px) translateY(0); /* Ajuste translateY para girar ao redor da imagem */
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) translateX(100px) translateY(0); /* Ajuste translateY para girar ao redor da imagem */
    }
  }
`;
const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ccc;
  max-width: 800px;
  
`;

function About() {
  const iconsRef = useRef(null);

  useEffect(() => {
    const icons = iconsRef.current.children;
    const totalIcons = icons.length;

    for (let i = 0; i < totalIcons; i++) {
      icons[i].style.animationDelay = `${i * 0.3}s`;
    }
  }, []);

  return (
    <AboutMeWrapper>
      <BackgroundBlur />
      <Title>About Me</Title>
      <AboutContent>
        <AboutImage src="https://cdn-vana.com/cdn-cgi/image/width=640,format=auto,quality=80/https://storage.googleapis.com/vana-jobs-output/fd208ae0-aad5-4c73-8e64-cc68158c75af%2F9de95052-5978-4167-8719-4d66bae2d440.png" alt="Sua Foto" />
        <StacksOrbit ref={iconsRef}>
          <StackIcon>
            <FontAwesomeIcon icon={faHtml5} />
          </StackIcon>
          <StackIcon>
            <FontAwesomeIcon icon={faCss3} />
          </StackIcon>
          <StackIcon>
            <FontAwesomeIcon icon={faJs} />
          </StackIcon>
          <StackIcon>
            <FontAwesomeIcon icon={faReact} />
          </StackIcon>
          <StackIcon>
            <FontAwesomeIcon icon={faNodeJs} />
          </StackIcon>
        </StacksOrbit>
        <AboutText>
        I am Ruan Lima Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into electronic but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        </AboutText>
      </AboutContent>
    </AboutMeWrapper>
  );
}

export default About;
