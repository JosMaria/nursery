import { EditButton } from '.';
import { useInfoBase } from '../hooks';

export const InfoBaseZone = () => {
  const { commonName, scientificName, scientistLastnameInitial, family, status, classifications } =
    useInfoBase();

  return (
    <section className='bg-skin-form rounded-md p-3 flex flex-col gap-2'>
      <fieldset className='flex flex-col gap-0.5 w-72'>
        <label className='font-medium text-sm'>Nombre Com&uacute;n</label>
        <div className='flex gap-2 justify-between items-center'>
          <p className='bg-skin-light p-1'>{commonName}</p>
          <input
            defaultValue={commonName}
            className={`custom-input-form`}
            readOnly={false}
          />
          <EditButton isShow={true} />
        </div>
      </fieldset>

      <fieldset className='flex flex-col gap-0.5 w-72'>
        <label className='font-medium text-sm'>Nombre Cientifico</label>
        <div className='flex gap-2 justify-between items-center'>
          <input
            defaultValue={scientificName || 'sin nombre cientifico'}
            className={`custom-input-form`}
            readOnly={false}
          />
          <EditButton isShow={true} />
        </div>
      </fieldset>
      
      <fieldset className='flex flex-col gap-0.5 w-52'>
        <label className='font-medium text-sm'>Inicial Nombre Cientifico</label>
        <div className='flex gap-2 justify-between items-center'>
          <input
            defaultValue={scientistLastnameInitial || 'sin inicial'}
            className={`custom-input-form`}
            readOnly={false}
          />
          <EditButton isShow={true} />
        </div>
      </fieldset>

      <p>{family}</p>
      <p>{status}</p>
      <p>{classifications}</p>
    </section>
  );
};
