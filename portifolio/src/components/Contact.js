// src/components/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import styled from 'styled-components';

const ContactContainer = styled(Container)`
  padding: 20px;
  margin: 20px auto;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Typography variant="h4">Contato</Typography>
      <ContactForm>
        <TextField label="Nome" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Mensagem" variant="outlined" multiline rows={4} />
        <Button variant="contained" color="primary">
          Enviar Mensagem
        </Button>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
