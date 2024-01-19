import { InferType, array, object, string } from 'yup';

export const plantCreationSchema = object({
  commonName: string()
    .matches(/^(?!\s*$).+/, 'Nombre común obligatorio')
    .required('Nombre común requerido'),
  scientificName: string().default(''),
  scientistLastnameInitial: string().max(1, 'Max 1 letra').default(''),
  family: string().default(''),
  status: string().required(),
  classifications: array()
    .of(string().required())
    .min(1, 'Selecciona al menos una clasificacion de planta')
    .required(),
  description: string().default(''),
  details: array(object({ detail: string().required() }))
    .optional()
    .default([]),
  technicalSheet: array(object({ word: string().required(), value: string().required() })).default(
    []
  ),
});

export type PlantCreationSchemaType = InferType<typeof plantCreationSchema>;
