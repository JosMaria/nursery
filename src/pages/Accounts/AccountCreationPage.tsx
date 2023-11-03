const AccountCreationPage = () => {
  return (
    <section>
      <h1 className='text-xl max-sm:text-lg font-medium text-center'>Crear usuario</h1>
      <form>
        <fieldset>
          <label htmlFor=''>Nombre</label>
          <input type='text' />
        </fieldset>

        <fieldset>
          <label htmlFor=''>Apellido</label>
          <input type='text' />
        </fieldset>

        <fieldset>
          <label htmlFor=''>Nombre de Usuario</label>
          <input type='text' />
        </fieldset>

        <fieldset>
          <label htmlFor=''>Contraseña</label>
          <input type='password' />
        </fieldset>

        <fieldset>
          <label htmlFor=''>Permisos</label>
          <input type='checkbox' />
        </fieldset>
      </form>
    </section>
  );
};

export default AccountCreationPage;
