import * as Yup from 'yup';

export const commonValidationSchema = Yup.object({
  email: Yup.string()
    .email('Невірна email адреса')
    .required("Обов'язково для заповнення"),
  password: Yup.string()
    .required("Обов'язково для заповнення")
    .min(6, 'Пароль повинен містити принаймні 6 символів')
    .max(20, 'Пароль повинен бути не довше 20 символів')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'Пароль повинен містити мінімум одну цифру, одну маленьку літеру і одну велику літеру'
    ),
});

export const loginValidationSchema = Yup.object({
  email: commonValidationSchema.fields.email,
  password: Yup.string()
    .required("Обов'язково для заповнення")
    .min(6, 'Пароль повинен містити принаймні 6 символів'),
});

export const registrationValidationSchema = commonValidationSchema;
