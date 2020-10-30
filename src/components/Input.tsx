import React, {useState} from 'react';

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label: string;
  name: string;
  errors: any;
}
const Input = React.forwardRef(({label, value, errors, ...props}: IInputProps, ref) => {
  const [isFocus, setIsFocus] = useState(false);

  const offsetLabel = isFocus || !!value;

  const error = errors && errors[props.name] ? errors[props.name].message : '';

  return (
    <div className="form-item">
      <input id={props.name} {...props}  ref={ref as any} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} />
      <label className={`form-label ${offsetLabel ? 'form-label-top' : ''}`} htmlFor={props.name}>{label}</label>
      {error && <p className={'error-input'}>{error}</p>}
    </div>
  )
});

export default Input;
