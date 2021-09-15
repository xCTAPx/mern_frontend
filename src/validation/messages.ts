export const REQUIRED = 'This field is required';
export const INVALID_EMAIL = 'Invalid email';
export const PASSWORD_FORMAT =
  'Password must include spec symbols, latin characters or numbers only';
export const PASSWORDS_MATCHING =
  'Password confirmation does not match';

export const SHORT = (length: number): string =>
  `Min length of this field is ${length}`;
export const LONG = (length: number): string =>
  `Max length of this field is ${length}`;
