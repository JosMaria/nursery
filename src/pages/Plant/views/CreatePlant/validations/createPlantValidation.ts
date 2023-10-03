import { Output, array, maxLength, minLength, object, string } from 'valibot';

export const CreatePlantSchema = object({
  commonName: string([minLength(1, 'Nombre común obligatorio')]),
  scientificName: string('Se debe agregar caracteres alfanumericos'),
  scientistLastnameInitial: string('Se debe agregar un caracter alfanumerico', [
    maxLength(1, 'Maximo 1 caracter'),
  ]),
  family: string('Se debe agregar caracteres alfanumericos'),
  status: string('Se debe agregar un estado'),
  classifications: array(string()),
  description: string(),
  details: array(object({ detail: string() })),
  notes: array(object({ note: string() })),
  dataSheet: array(
    object({
      word: string(),
      value: string(),
    })
  ),
});

export type CreatePlantSchemaType = Output<typeof CreatePlantSchema>;
