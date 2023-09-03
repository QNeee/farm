import * as Yup from 'yup';

export const getValidationSchema = (language: string, validation: string, google?: string | boolean) => {
  switch (validation) {
    case 'commonValidationSchema':
      return Yup.object({
        email: Yup.string()
          .email(
            language === 'en'
              ? 'Wrong email'
              : language === 'ru'
                ? 'Неверний адрес почты'
                : 'Невірна адреса пошти'
          )
          .required(
            language === 'en'
              ? 'Mandatory to fill'
              : language === 'ru'
                ? 'Обезательно для заполнения'
                : "Обов'язково для заповнення"
          ),
        password: Yup.string()
          .required(
            language === 'en'
              ? 'Mandatory to fill'
              : language === 'ru'
                ? 'Обезательно для заполнения'
                : "Обов'язково для заповнення"
          )
          .min(
            6,
            language === 'en'
              ? 'Password must contain at least 6 characters'
              : language === 'ru'
                ? 'Пароль должен содержать не менее 6 символов'
                : 'Пароль повинен містити принаймні 6 символів'
          )
          .max(
            20,
            language === 'en'
              ? 'Password must be no longer than 20 characters'
              : language === 'ru'
                ? 'Пароль должен быть не дольше 20 символов'
                : 'Пароль повинен бути не довше 20 символів'
          )
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
            language === 'en'
              ? 'Password must contain at least one digit, one lowercase letter, and one uppercase letter'
              : language === 'ru'
                ? 'Пароль должен содержать минимум одну цифру, одну маленьку букву і одну большую букву'
                : 'Пароль повинен містити мінімум одну цифру, одну маленьку літеру і одну велику літеру'
          ),
        toggle: Yup.boolean().oneOf(
          [true],
          language === 'en'
            ? 'Agreement with rules is required'
            : language === 'ru'
              ? "Погодження з правилами обов'язкове"
              : "Погодження з правилами обов'язкове"
        ),
      });
    case 'loginValidationSchema':
      return Yup.object({
        email: Yup.string()
          .email(
            language === 'en'
              ? 'Wrong email'
              : language === 'ru'
                ? 'Неверний адрес почты'
                : 'Невірна адреса пошти'
          )
          .required(
            language === 'en'
              ? 'Mandatory to fill'
              : language === 'ru'
                ? 'Обезательно для заполнения'
                : "Обов'язково для заповнення"
          ),
        password: Yup.string()
          .required(
            language === 'en'
              ? 'Mandatory to fill'
              : language === 'ru'
                ? 'Обезательно для заполнения'
                : "Обов'язково для заповнення"
          )
          .min(
            6,
            language === 'en'
              ? 'Password must contain at least 6 characters'
              : language === 'ru'
                ? 'Пароль должен содержать не менее 6 символов'
                : 'Пароль повинен містити принаймні 6 символів'
          ),
      });
    case 'passChangeValidationSchema':
      if (google === 'false' || !google) {
        return Yup.object().shape({
          oldPass: Yup.string().required(
            language === 'en'
              ? 'Enter your old password'
              : language === 'ru'
                ? 'Введите старый пароль'
                : 'Введіть ваш старий пароль'
          ),
          newPass: Yup.string()
            .required(
              language === 'en'
                ? 'Enter your new password'
                : language === 'ru'
                  ? 'Введите нновый пароль'
                  : 'Введіть ваш новий пароль'
            )
            .min(
              6,
              language === 'en'
                ? 'must contain at least 6 characters'
                : language === 'ru'
                  ? 'должен содержать не менее 6 символов'
                  : 'повинен містити принаймні 6 символів'
            )
            .max(
              20,
              language === 'en'
                ? 'must be no longer than 20 characters'
                : language === 'ru'
                  ? 'должен быть не дольше 20 символов'
                  : 'повинен бути не довше 20 символів'
            )
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
              language === 'en'
                ? 'must contain at least one digit, one lowercase letter, and one uppercase letter'
                : language === 'ru'
                  ? 'должен содержать минимум одну цифру, одну маленьку букву і одну большую букву'
                  : 'повинен містити мінімум одну цифру, одну маленьку літеру і одну велику літеру'
            ),
          newPassRepeat: Yup.string()
            .oneOf(
              [Yup.ref('newPass'), undefined],
              language === 'en'
                ? 'Passwords do not match'
                : language === 'ru'
                  ? 'Пароли не совпадают'
                  : 'Паролі не співдадають'
            )
            .required(
              language === 'en'
                ? 'Confirm your password'
                : language === 'ru'
                  ? 'Подтвердите ваш пароль'
                  : 'Підтвердіть ваш пароль'
            ),
        })
      } else {
        return Yup.object().shape({
          newPass: Yup.string()
            .required(
              language === 'en'
                ? 'Enter your new password'
                : language === 'ru'
                  ? 'Введите нновый пароль'
                  : 'Введіть ваш новий пароль'
            )
            .min(
              6,
              language === 'en'
                ? 'must contain at least 6 characters'
                : language === 'ru'
                  ? 'должен содержать не менее 6 символов'
                  : 'повинен містити принаймні 6 символів'
            )
            .max(
              20,
              language === 'en'
                ? 'must be no longer than 20 characters'
                : language === 'ru'
                  ? 'должен быть не дольше 20 символов'
                  : 'повинен бути не довше 20 символів'
            )
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
              language === 'en'
                ? 'must contain at least one digit, one lowercase letter, and one uppercase letter'
                : language === 'ru'
                  ? 'должен содержать минимум одну цифру, одну маленьку букву і одну большую букву'
                  : 'повинен містити мінімум одну цифру, одну маленьку літеру і одну велику літеру'
            ),
          newPassRepeat: Yup.string()
            .oneOf(
              [Yup.ref('newPass'), undefined],
              language === 'en'
                ? 'Passwords do not match'
                : language === 'ru'
                  ? 'Пароли не совпадают'
                  : 'Паролі не співдадають'
            )
            .required(
              language === 'en'
                ? 'Confirm your password'
                : language === 'ru'
                  ? 'Подтвердите ваш пароль'
                  : 'Підтвердіть ваш пароль'
            ),
        })
      }


    case 'phoneValidationSchema':
      return Yup.object({
        phone: Yup.string().length(10, 'Длина номера не больше 10'),
        // .matches(
        //   /^\d{11}$/,
        //   // /^(\(\d{3}\)\s?\d{3}-\d{2}-\d{2})$/,
        //   language === 'en'
        //     ? 'Incorrect number'
        //     : language === 'ru'
        //     ? 'Не верный номер'
        //     : 'Не вірний номер'
        // )
        // .required(
        //   language === 'en'
        //     ? 'Mandatory to fill'
        //     : language === 'ru'
        //     ? 'Обезательно для заполнения'
        //     : "Обов'язково для заповнення"
        // ),
        // .min(9, language === 'en' ? '9' : language === 'ru' ? '9' : '9'),
      });

    default:
      break;
  }
};
