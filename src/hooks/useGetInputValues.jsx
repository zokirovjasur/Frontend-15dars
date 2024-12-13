import { useState, useCallback } from "react";

const useGetInputValues = (initialValues) => {
  const [inputValues, setInputValues] = useState(initialValues);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const resetInputValues = useCallback(() => {
    setInputValues(initialValues);
  }, [initialValues]);

  return { inputValues, handleInputChange, resetInputValues };
};

export default useGetInputValues;
