// import { valibotResolver } from "@hookform/resolvers/valibot";
// import { useForm } from "react-hook-form";
// import { Input, object, regex, string } from "valibot";

// const UpdateFamilySchema = object({
//   newName:  string([regex(/^[a-z]+$/, 'Introduzca la palabra en minuscula.')])
// });

// type UpdateFamilySchemaType = Input<typeof UpdateFamilySchema>;

// interface ModalProps {
//   close: () => void;
// }

// export const EditFamilyModal = ({ close }: ModalProps) => {
//   const { name: oldName, updateFamily } = useFamilyContext();

//   const {
//     handleSubmit,
//     formState: { errors },
//     register,
//   } = useForm<UpdateFamilySchemaType>({
//     resolver: valibotResolver(UpdateFamilySchema),
//   });

//   return (
//     <dialog className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl flex justify-center items-center select-none w-full h-screen text-skin-dark'>
//       <form
//         className=' bg-skin-light p-4 rounded flex flex-col justify-center items-center gap-5 relative'
//         onSubmit={handleSubmit((data) => {
//           updateFamily(data.newName);
//           close();
//         })}
//       >
//         <button
//           onClick={close}
//           className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-400 text-white font-bold text-lg leading-none px-1 rounded'
//         >
//           &times;
//         </button>
//         <h2 className='font-medium text-base'>Introduzca nuevo nombre</h2>
//         <div className='flex flex-col gap-1'>
//           <input
//             type='text'
//             className='custom-input-form'
//             placeholder={oldName}
//             autoComplete='off'
//             {...register('newName')}
//           />
//           <p className='custom-lbl-form-error'>{errors.newName?.message}</p>
//         </div>
//         <button className='custom-btn-form' type='submit'>
//           Cambiar
//         </button>
//       </form>
//     </dialog>
//   );
// };

// export const DeleteFamilyModal = ({ close }: ModalProps) => {
//   const { name, deleteFamily } = useFamilyContext();

//   return (
//     <dialog className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl flex justify-center items-center select-none w-full h-screen text-skin-dark'>
//       <div className=' bg-skin-light py-4 px-6 rounded flex flex-col justify-center items-center gap-5 relative w-80'>
//         <button
//           onClick={close}
//           className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-400 text-white font-bold text-lg leading-none px-1 rounded'
//         >
//           &times;
//         </button>
//         <h3 className='text-center'>
//           Seguro que quiere eliminar la familia: <span className='font-medium'>{name}</span>
//         </h3>

//         <button
//           className='custom-btn-form'
//           onClick={() => {
//             deleteFamily();
//             close();
//           }}
//         >
//           Eliminar
//         </button>
//       </div>
//     </dialog>
//   );
// };
