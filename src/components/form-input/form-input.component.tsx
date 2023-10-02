import { FC, InputHTMLAttributes } from "react";

type FormInputProp = {label: string} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProp> = ({label, ...otherProp}) => {
    
    return (
      <>
        <label>{label}</label>
        <input {...otherProp} />
      </>
    )
}

export default FormInput;