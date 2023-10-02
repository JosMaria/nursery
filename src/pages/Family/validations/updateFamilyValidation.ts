import { Input, object, regex, string } from 'valibot';

export const UpdateFamilySchema = object({
  newName: string([regex(/^[a-z]+$/, 'Introduzca la palabra en minuscula.')]),
});

export type UpdateFamilySchemaType = Input<typeof UpdateFamilySchema>;
