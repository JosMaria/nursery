import { Input, array, object, regex, string } from 'valibot';

export const CreateFamilySchema = object({
  families: array(
    object({
      family_name: string([regex(/^[a-z]+$/, 'Introduzca la palabra en minuscula.')]),
    })
  ),
});


export type CreateFamilySchemaType = Input<typeof CreateFamilySchema>;
