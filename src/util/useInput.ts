import { ChangeEvent, useState } from "react";
import { InputElement } from "../types/interface";

export const useInput = (initValue: string = "") => {
  const [value, setValue] = useState(initValue);

  const onChange = (e: ChangeEvent<InputElement>) => {
    setValue(e.currentTarget.value);
  };

  const resetValue = () => setValue("");

  return { value, onChange, resetValue };
};
