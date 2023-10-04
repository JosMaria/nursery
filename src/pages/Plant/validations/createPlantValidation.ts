// import {
//   Output,
//   maxLength,
//   minLength,
//   object,
//   regex,
//   string,
//   optional,
// } from 'valibot';

import { InferType, object, string } from 'yup';

// const scientificNameValidation = optional(
//   string([
//     minLength(2, 'Minimo 2 caracteres'),
//     regex(/^[^\s].*[^\s]$/, 'Revise espacio en blanco al inicio y final'),
//   ])
// );

// export const CreatePlantSchema = object({
//   commonName: string([
//     minLength(2, 'Minimo 2 caracteres'),
//     regex(/^[^\s].*[^\s]$/, 'Revise espacio en blanco al inicio y final'),
//   ]),
//   ...(scientificNameValidation && { scientificName: scientificNameValidation }),

//   scientistLastnameInitial: string([maxLength(1, '1')]),
//   // family: string('Se debe agregar caracteres alfabeticos'),
//   // status: string('Se debe agregar un estado'),
//   // classifications: array(string()),
//   // description: string(),
//   // details: array(object({ detail: string() })),
//   // notes: array(object({ note: string() })),
//   // dataSheet: array(
//   //   object({
//   //     word: string(),
//   //     value: string(),
//   //   })
//   // ),
// });

//export type CreatePlantSchemaType = Output<typeof CreatePlantSchema>;

export const createPlantSchema = object().shape({
  commonName: string().required(),
});

export type CreatePlantSchemaType = InferType<typeof createPlantSchema>;
