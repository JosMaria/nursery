import { InferType, object, string } from 'yup';

export const signInValidation = object({
  username: string().required('Nombre de usuario requerido'),
  password: string().required('Contraseña requerida'),
});

export type SignInSchemaType = InferType<typeof signInValidation>;
