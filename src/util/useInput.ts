import { useState } from "react";
import { InputChangeEventType } from "../types/interface";

export const useInput = (initValue: string = "") => {
  const [value, setValue] = useState(initValue);

  const onChange = (e: InputChangeEventType) => {
    setValue(e.currentTarget.value);
  };

  const resetValue = () => setValue("");

  return { value, onChange, resetValue };
};
