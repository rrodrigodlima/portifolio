import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactWrapper = styled.section`
  background-color: #f4f4f4;
  padding: 50px 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const ContactIcon = styled.span`
  font-size: 24px;
  color: #333;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(360deg);
  }
`;

const ContactText = styled.p`
  font-size: 18px;
`;

function Contact() {
  const duration = 300; // Duração da animação em milissegundos

  return (
    <ContactWrapper>
      <Title>Contact</Title>
      <ContactInfo>
        <Transition in={true} timeout={duration} appear>
          {(state) => (
            <ContactItem style={{
              opacity: state === 'entered' ? 1 : 0,
              transform: `translateY(${state === 'entered' ? 0 : 20}px)`,
              transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
            }}>
              <ContactIcon>
                <FontAwesomeIcon icon={faEnvelope} />
              </ContactIcon>
              <ContactText>SeuEmail@gmail.com</ContactText>
            </ContactItem>
          )}
        </Transition>
        <Transition in={true} timeout={duration + 100} appear>
          {(state) => (
            <ContactItem style={{
              opacity: state === 'entered' ? 1 : 0,
              transform: `translateY(${state === 'entered' ? 0 : 20}px)`,
              transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
            }}>
              <ContactIcon>
                <FontAwesomeIcon icon={faPhone} />
              </ContactIcon>
              <ContactText>(11) 1234-5678</ContactText>
            </ContactItem>
          )}
        </Transition>
        {/* Outros itens de contato aqui */}
      </ContactInfo>
    </ContactWrapper>
  );
}

export default Contact;
