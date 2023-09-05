// src/components/Projects.js
import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import styled from 'styled-components';

const ProjectsContainer = styled(Container)`
  padding: 20px;
  margin: 20px auto;
`;

const ProjectCard = styled(Card)`
  margin: 20px 0;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectCard>
        <CardContent>
          <Typography variant="h4">Projeto 1</Typography>
          <Typography variant="body1">
            Este é um exemplo de projeto. Você pode adicionar uma descrição mais detalhada aqui.
          </Typography>
        </CardContent>
      </ProjectCard>
      <ProjectCard>
        <CardContent>
          <Typography variant="h4">Projeto 2</Typography>
          <Typography variant="body1">
            Este é outro exemplo de projeto. Descreva o que este projeto faz e quais tecnologias foram utilizadas.
          </Typography>
        </CardContent>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default Projects;
