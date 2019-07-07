export const signUpConfig = {
  header: "Crea una nueva cuenta",
  signUpFields: [
    {
      label: "Usuario",
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string',
      custom: true
    },
    {
      label: "Correo electronico",
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: "Contraseña",
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password'
    },
  ],
  defaultCountryCode: '507',
  hiddenDefaults: [
    'phone_number',
    'username'
  ],
}
