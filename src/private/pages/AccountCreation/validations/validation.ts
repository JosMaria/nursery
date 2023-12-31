import { InferType, object, string } from 'yup';

export const accountCreationSchema = object({
  name: string().required('El nombre es requerido'),
  lastname: string().required('El apellido es requerido'),
  username: string().required('El nombre de usuario es requerido'),
  password: string().required('La contraseña es requerida'),
});

export type AccountCreateionSchemaType = InferType<typeof accountCreationSchema>;
