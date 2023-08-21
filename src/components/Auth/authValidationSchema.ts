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
  toggle: Yup.boolean().oneOf([true], "Погодження з правилами обов'язкове"),
});

export const loginValidationSchema = Yup.object({
  email: commonValidationSchema.fields.email,
  password: Yup.string()
    .required("Обов'язково для заповнення")
    .min(6, 'Пароль повинен містити принаймні 6 символів'),
});

export const passChangeValidationSchema = Yup.object().shape({
  oldPass: Yup.string().required('Введіть ваш старий пароль'),
  newPass: Yup.string()
    .required('Введіть ваш новий пароль')
    .min(6, 'Мінімум 6 символів')
    .max(20, 'Не довше 20 символів')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'Мінімум 1 цифра, 1 маленька і 1 велика літера'
    ),
  newPassRepeat: Yup.string()
    .oneOf([Yup.ref('newPass'), undefined], 'Паролі не співпадають')
    .required('Підтвердіть ваш новий пароль'),
});
export const registrationValidationSchema = commonValidationSchema;
