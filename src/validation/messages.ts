export const REQUIRED = 'This field is required';
export const INVALID_EMAIL = 'Invalid email';
export const SHORT = (length: number): string =>
  `Min length of this field is ${length}`;
export const LONG = (length: number): string =>
  `Max length of this field is ${length}`;
