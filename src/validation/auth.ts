import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import * as messages from './messages';
import { PASSWORD } from './validators';

interface IAuthSchema {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

type RegistrationSchema = Pick<
  IAuthSchema,
  'email' | 'nickname' | 'password' | 'passwordConfirmation'
>;
type LoginSchema = Pick<IAuthSchema, 'email' | 'password'>;
type EmailSchema = Pick<IAuthSchema, 'email'>;
type PasswordSchema = Pick<
  IAuthSchema,
  'password' | 'passwordConfirmation'
>;

const AUTH_VALIDATORS: SchemaOf<IAuthSchema> =
  Yup.object().shape({
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
      .required(messages.REQUIRED)
      .oneOf(
        [Yup.ref('password')],
        messages.PASSWORDS_MATCHING
      ),
  });

export const registrationSchema = AUTH_VALIDATORS.pick([
  'email',
  'nickname',
  'password',
  'passwordConfirmation',
]) as SchemaOf<RegistrationSchema>;
export const loginSchema = AUTH_VALIDATORS.pick([
  'email',
  'password',
]) as SchemaOf<LoginSchema>;
export const emailSchema = AUTH_VALIDATORS.pick([
  'email',
]) as SchemaOf<EmailSchema>;
export const passwordSchema = AUTH_VALIDATORS.pick([
  'password',
  'passwordConfirmation',
]) as SchemaOf<PasswordSchema>;
