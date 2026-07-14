type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, ...props }: InputProps) {
  return (
    <div>
    <label htmlFor={props.name}>{label}</label>
    <input id={props.name} 
    {...props}/>
    </div>
  )
}