import { InferType, array, object, string } from 'yup';

export const plantCreationSchema = object({
  commonName: string()
    .matches(/^(?!\s*$).+/, 'Nombre común obligatorio')
    .required('Nombre común requerido'),
  scientificName: string().default(''),
  scientistLastnameInitial: string().max(1, 'Max 1 letra').default(''),
  family: string().default(''),
  status: string().required(),
  classifications: array(string().required()).optional().default([]),
  description: string().default(''),
  details: array(object({ detail: string().required() })).optional().default([]),
  technicalSheet: array(object({ word: string().required(), value: string().required() })).default(
    []
  ),
});

export type PlantCreationSchemaType = InferType<typeof plantCreationSchema>;

export const familiesCreationSchema = object({
  families: array(
    object({
      family_name: string()
        .matches(/^[a-z]+$/, 'Introduzca el nombre en minusculas.')
        .required('Nombre de familia requerida'),
    })
  ).default([]),
});

export type FamiliesCreationSchemaType = InferType<typeof familiesCreationSchema>;

export const familyUpdateSchema = object({
  newName: string()
    .matches(/^[a-z]+$/, 'Introduzca la palabra en minuscula.')
    .required('Nombre de familia requerida'),
});

export type UpdateFamilySchemaType = InferType<typeof familyUpdateSchema>;
