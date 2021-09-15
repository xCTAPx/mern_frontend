import React, { useState, ChangeEvent } from 'react';
import styles from './Input.module.scss';

type InputType = 'text' | 'password';

interface IFormikProps {
  name: string;
  value: string;
  onChange: () => void;
  onBlur: () => void;
}

interface IFormikForm {
  touched: boolean;
  errors: string[];
}
interface IProps {
  name?: string;
  value?: string;
  type?: InputType;
  placeholder?: string;
  field?: IFormikProps;
  form?: IFormikForm;
  error?: boolean;
  errorMessage?: string;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input: React.FC<IProps> = ({
  name,
  value,
  type = 'text',
  placeholder,
  field,
  error,
  errorMessage,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
}) => {
  const [inputValue, setInputValue] = useState<string>(
    value || ''
  );

  const classes = `${styles.input} ${
    error ? styles.input_error : ''
  }`;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.target.value);
    onChange();
  };

  return (
    <>
      {type === 'text' && (
        <div className={styles.input_wrapper}>
          <input
            className={classes}
            name={name}
            placeholder={placeholder}
            value={inputValue}
            onBlur={onBlur}
            onChange={handleChange}
            onFocus={onFocus}
            {...field}
          />
          <p className={styles.error_message}>
            {errorMessage}
          </p>
        </div>
      )}

      {type === 'password' && (
        <div className={styles.input_wrapper}>
          <input
            autoComplete="on"
            className={classes}
            name={name}
            placeholder={placeholder}
            type="password"
            value={inputValue}
            onBlur={onBlur}
            onChange={handleChange}
            onFocus={onFocus}
            {...field}
          />
          <p className={styles.error_message}>
            {errorMessage}
          </p>
        </div>
      )}
    </>
  );
};
