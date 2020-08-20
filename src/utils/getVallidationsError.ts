import { ValidationError } from 'yup';

interface Erros {
  [key: string]: string;
}

export default function getVallidationErros(err: ValidationError): Erros {
  const validationsErrors: Erros = {};

  err.inner.forEach(error => {
    validationsErrors[error.path] = error.message;
  });

  return validationsErrors;
}
