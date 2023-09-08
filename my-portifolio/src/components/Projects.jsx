import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';


const ProjectsWrapper = styled.section`
  background-color: #f0f0f0;
  padding: 50px 0;
  text-align: center;
`;

const Title = styled(animated.h2)`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;


const ProjectItem = styled.li`
  width: calc(33.333% - 20px);
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease; /* Adicione a transição para opacity e transform */
  cursor: pointer; /* Mude o cursor para indicar que é clicável */

  &:hover {
    opacity: 1;
    transform: translateY(0);
  }

  .project-image {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease; /* Adicione a transição para o efeito de escala */
  }

  &:hover .project-image {
    transform: scale(1.1); /* Aumenta o tamanho da imagem quando o mouse passa por cima */
  }
`;

const ProjectImage = styled(animated.img)`
  /* Estilos existentes da miniatura */
  width: 400px;
  height: 270px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Efeito de escala ao passar o mouse */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Aumente a sombra */
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-top: 15px;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  margin-top: 10px;
  color: #666;
`;

function Projects() {
   // Função para tratar a animação de fade in
   const handleScroll = () => {
    const elements = document.querySelectorAll('.fadeInOnScroll');
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Verifica se o elemento está na visualização
      if (rect.top <= windowHeight * 0.75) {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Adiciona o event listener para o evento de scroll
  window.addEventListener('scroll', handleScroll);
  
  return (
    <ProjectsWrapper>
      <Title >Projetos Recentes</Title>
      <ProjectList>
        <ProjectItem className="fadeInOnScroll">
          <ProjectImage src="https://mir-s3-cdn-cf.behance.net/projects/404/53da23176332383.Y3JvcCwxNjE2LDEyNjQsMCww.jpg" alt="Projeto 1" />
          <ProjectTitle>Development</ProjectTitle>
          <ProjectDescription>There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text.</ProjectDescription>
        </ProjectItem>
        <ProjectItem className="fadeInOnScroll">
          <ProjectImage src="https://mir-s3-cdn-cf.behance.net/projects/404/00a00f167026731.Y3JvcCwxNjA1LDEyNTYsOTUsMA.jpg" />
          <ProjectTitle>Web Design</ProjectTitle>
          <ProjectDescription>There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text.</ProjectDescription>
        </ProjectItem>
        <ProjectItem className="fadeInOnScroll">
          <ProjectImage src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f2f038142954775.62714f0b38f7c.png" alt="Projeto 3" />
          <ProjectTitle>Marketing</ProjectTitle>
          <ProjectDescription>There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text.</ProjectDescription>
        </ProjectItem>
      </ProjectList>
    </ProjectsWrapper>
  );
}

export default Projects;
