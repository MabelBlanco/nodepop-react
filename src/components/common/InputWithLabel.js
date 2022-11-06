export function InputWithLabel({ label, className, id, ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input name={props.name || id} id={id} {...props}></input>
    </div>
  );
}
