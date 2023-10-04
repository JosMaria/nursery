import { Output, array, maxLength, minLength, object, regex, required, string } from 'valibot';

export const CreatePlantSchema = object({
  commonName: string([
    minLength(2, 'Minimo dos caracteres'),
    regex(/^[^\s].*[^\s]$/, 'Revise espacio en blanco al inicio y final'),
  ]),
  //scientificName: string([regex(/^[a-z]+(?: [a-z]+)*$/, 'Revise minusculas y espacios en blanco.')]),
  //scientistLastnameInitial: string([regex(/^[a-z]$/, 'solo una letra')]),
  // family: string('Se debe agregar caracteres alfabeticos'),
  // status: string('Se debe agregar un estado'),
  // classifications: array(string()),
  // description: string(),
  // details: array(object({ detail: string() })),
  // notes: array(object({ note: string() })),
  // dataSheet: array(
  //   object({
  //     word: string(),
  //     value: string(),
  //   })
  // ),
});

export type CreatePlantSchemaType = Output<typeof CreatePlantSchema>;
