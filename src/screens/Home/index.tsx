import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiHome, FiMapPin, FiUser, FiCrosshair } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import getValidationErrors from '../../utils/getVallidationsError';
import { Container, AnimationContainer, Content, Button } from './styles';
import validateCEP from '../../services/validateCEP';
import api from '../../services/api';

interface ResidenceFormData {
  cep: string;
  latitude: string;
  longitude: string;
  houseNumber: string;
  residents: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: ResidenceFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        cep: Yup.string()
          .required('CEP Obrigatório')
          .length(8, 'Quantidade errada de números'),
        latitude: Yup.string().required('Latitude Obrigatória'),
        longitude: Yup.string().required('Longititude Obrigatória'),
        houseNumber: Yup.string().required('Número da casa Obrigatório'),
        residents: Yup.string().required('Número da residentes Obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await validateCEP.get(`/${data.cep}/json`);

      const { erro } = response.data;

      if (erro) {
        toast.error('CEP inválido');
        return;
      }

      await api.post('/residences', data);

      toast.success('Residência cadastrada com sucesso');
      formRef.current?.reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        toast.error('Erro ao cadastrar residência');
        return;
      }
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Cadastre uma residência</h1>
            <Input name="cep" icon={FiCrosshair} placeholder="Digite seu CEP" />
            <Input name="houseNumber" icon={FiHome} placeholder="Nº da casa" />
            <Input name="latitude" icon={FiMapPin} placeholder="Latitude" />
            <Input name="longitude" icon={FiMapPin} placeholder="Longitude" />
            <Input
              name="residents"
              icon={FiUser}
              placeholder="Quantidade de residentes"
            />

            <Button onClick={() => {}} type="submit">
              Cadastrar
            </Button>
            <Link to="/map">Ir para o mapa</Link>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Home;
