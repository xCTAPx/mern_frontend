import * as Yup from 'yup';
import * as messages from './messages';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email(messages.INVALID_EMAIL)
    .required(messages.REQUIRED),
  nickname: Yup.string()
    .trim()
    .min(4, messages.SHORT(4))
    .max(20, messages.LONG(20))
    .required(messages.REQUIRED),
  password: Yup.string()
    .trim()
    .min(6, messages.SHORT(6))
    .max(32, messages.LONG(32))
    .required(messages.REQUIRED),
  password_confirmation: Yup.string()
    .trim()
    .min(6, messages.SHORT(6))
    .max(32, messages.LONG(32))
    .required(messages.REQUIRED),
});
