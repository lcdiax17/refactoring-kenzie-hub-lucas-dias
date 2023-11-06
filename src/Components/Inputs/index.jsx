import { forwardRef } from "react";

export const Input = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <div className="inputDiv">
      <label>{label}</label>
      <input className="inputStyle" ref={ref} {...rest} />
      {error ? <small>{error.message}</small> : null}
    </div>
  );
});
