import styled, { keyframes } from 'styled-components';
import backgroundImage from '../mandala.png';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


const Mandala = styled.div`
  width: 600px;
  height: 600px;
  position: absolute;
  left: -440px;
  bottom: -300px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  animation: ${rotateAnimation} 16s linear infinite; /* Define a animação de rotação */
  filter: drop-shadow(0 0 10px #9644D6)drop-shadow(0 0 2px #9644D6);
  transition: transform 0.3s ease-in-out;
`;

function RotatingMandala() {
  return (
      <Mandala />
  );
}

export default RotatingMandala;
