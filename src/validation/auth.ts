import * as Yup from 'yup';
import * as messages from './messages';
import { PASSWORD } from './validators';

export const authSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email(messages.INVALID_EMAIL)
    .required(messages.REQUIRED),
  nickname: Yup.string()
    .trim()
    .min(5, messages.SHORT(5))
    .max(20, messages.LONG(20))
    .required(messages.REQUIRED),
  password: Yup.string()
    .trim()
    .min(8, messages.SHORT(8))
    .max(32, messages.LONG(32))
    .required(messages.REQUIRED),
  passwordConfirmation: Yup.string()
    .trim()
    .min(8, messages.SHORT(8))
    .max(32, messages.LONG(32))
    .matches(PASSWORD, messages.PASSWORD_FORMAT)
    .required(messages.REQUIRED),
});
