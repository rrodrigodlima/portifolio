import React from 'react';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaCss3, FaDatabase } from 'react-icons/fa';
import styled from 'styled-components';

const SkillContainer = styled.div`

  h2 {
    font-size: 24px;
    text-align: center;

    margin-bottom: 20px;
  }
`;

const SkillsWrapper = styled.div`
justify-content: space-between; /* Espaçamento entre as InfoBoxes */  align-items: center;

  display: flex;
  overflow-x: auto;
  padding: 20px 0;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  font-size: 18px;
  transition: transform 0.3s ease;

  p {
    margin-top: 10px;
  }
  &:hover {
    transform: scale(1.5);
  }
`;

const skillIcons = [
  { icon: <FaHtml5 />, label: 'HTML' },
  { icon: <FaJs />, label: 'JavaScript' },
  { icon: <FaReact />, label: 'React' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <FaCss3 />, label: 'CSS' },
  { icon: <FaDatabase />, label: 'MySQL' },
  // Adicione mais ícones conforme necessário
];

function Skills() {
  return (
    <SkillContainer>
    <h2>Stacks</h2>
    <SkillsWrapper>
      {skillIcons.map((item, index) => (
        <SkillItem key={index}>
          {item.icon}
          <p>{item.label}</p>
        </SkillItem>
      ))}
    </SkillsWrapper>
  </SkillContainer>
  );
}

export default Skills;