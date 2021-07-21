import React, { useState, ChangeEvent } from 'react';
import styles from './Input.module.scss';

type InputType = 'text' | 'password';

interface IProps {
  value?: string;
  type?: InputType;
  placeholder?: string;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input: React.FC<IProps> = ({
  value,
  type = 'text',
  placeholder,
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
          placeholder={placeholder}
          className={styles.input}
          value={inputValue}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
        />
      )}

      {type === 'password' && (
        <input
          placeholder={placeholder}
          className={styles.input}
          value={inputValue}
          type="password"
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
        />
      )}
    </>
  );
};
