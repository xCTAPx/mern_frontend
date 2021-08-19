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
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
}) => {
  const [inputValue, setInputValue] = useState<string>(
    value || ''
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.target.value);
    onChange();
  };

  return (
    <>
      {type === 'text' && (
        <input
          className={styles.input}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
          {...field}
        />
      )}

      {type === 'password' && (
        <input
          autoComplete="on"
          className={styles.input}
          name={name}
          placeholder={placeholder}
          type="password"
          value={inputValue}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
          {...field}
        />
      )}
    </>
  );
};
