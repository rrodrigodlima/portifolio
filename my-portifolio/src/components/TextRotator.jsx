import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

function TextRotator() {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = ['Web Developer', 'Web Designer', 'Gamer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, );

  return (
    <Wrapper>
      <Title>Eu sou Ruan Lima, {textArray[textIndex]}</Title>
    </Wrapper>
  );
}

export default TextRotator;
