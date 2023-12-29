import { InferType, array, object, string } from 'yup';

export const familyCreationSchema = object({
  families: array(
    object({ family_name: string().required('Introducir nombre de la familia.') })
  ).required('Test'),
});

export type FamilyCreationType = InferType<typeof familyCreationSchema>;
