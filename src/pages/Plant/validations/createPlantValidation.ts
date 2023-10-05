import { InferType, array, mixed, object, string } from 'yup';

export const createPlantSchema = object({
  commonName: string()
    .matches(/^(?!\s*$).+/, 'Nombre común obligatorio')
    .required('Nombre común requerido'),
  scientificName: string().notRequired(),
  scientistLastnameInitial: string().max(1, 'Max 1 letra').notRequired(),
  family: string().notRequired(),
  status: string().required(),
  classifications: array().min(1, 'Minimo escoger 1 clasificación').of(string()),
  description: string().notRequired(),
  details: array().of(object({ detail: string() })),
  notes: array().of(object({ note: string() })),
  dataSheet: array().of(object({ word: string(), value: string() })),
  images: mixed().required()
});

export type CreatePlantSchemaType = InferType<typeof createPlantSchema>;
