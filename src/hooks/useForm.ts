import { ChangeEvent, useState } from 'react';

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const validMap = Object.keys(initialState).reduce(
    (allValues, currentValue) => ({ ...allValues, [currentValue]: true }),
    {}
  );
  const [valid, setValid] = useState(validMap);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  const resetForm = () => {
    setValues(initialState);
    setValid(validMap);
  };

  const setValidField = (field: string, isValid = false) => {
    setValid((v) => ({
      ...v,
      [field]: isValid,
    }));
  };

  return [values, handleInputChange, resetForm, valid, setValidField] as const;
};

export default useForm;
