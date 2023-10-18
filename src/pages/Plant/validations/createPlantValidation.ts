import { InferType, array, object, string } from 'yup';

export const createPlantSchema = object({
  commonName: string()
    .matches(/^(?!\s*$).+/, 'Nombre común obligatorio')
    .required('Nombre común requerido'),
  scientificName: string().default(''),
  scientistLastnameInitial: string().max(1, 'Max 1 letra').default(''),
  family: string().default(''),
  status: string().required(),
  classifications: array(string().required()).default([]),
  description: string().default(''),
  details: array(object({ detail: string().required() })).default([]),
  notes: array(object({ note: string().required() })).default([]),
  dataSheet: array(object({ word: string().required(), value: string().required() })).default([]),
});

export type CreatePlantSchemaType = InferType<typeof createPlantSchema>;
