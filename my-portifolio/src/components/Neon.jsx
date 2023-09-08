import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animação para alternar entre as cores
const neonAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px #ff00ff, 0 0 10px #ff00ff, 0 0 10px #ff00ff;
  }
  50% {
    box-shadow: none;
  }
`;

const NeonCirclesContainer = styled.div`
  position: relative;
  width: 50px; /* Ajuste o tamanho do container */
  height: 50px; /* Ajuste o tamanho do container */
`;

const Circle = styled.div`
  position: absolute;
  width: ${(props) => props.size || '100px'};
  height: ${(props) => props.size || '100px'};
  border-radius: 50%;
  animation: ${neonAnimation} 1.5s linear infinite;
  background-color: transparent;
  transition: width 0.5s, height 0.5s;
  cursor: pointer;
`;

const NeonCircles = () => {
  return (
    <NeonCirclesContainer> 
      <Circle size="25px" style={{ top: '15px', left: '15px' }} />
      <Circle size="35px" style={{ top: '7,5px', left: '7,5px' }} />
      <Circle size="45px" style={{ top: '2,5px', left: '2,5px' }} />
    </NeonCirclesContainer>
  );
};

export default NeonCircles;
