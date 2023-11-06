import { forwardRef } from "react";

export const Select = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <div className="inputDiv">
      <label>{label}</label>
      <select className="inputStyle" {...rest}>
        <option className="inputStyle" ref={ref} disabled>Selecione uma opção</option>
        <option className="inputStyle" ref={ref}>Primeiro módulo (Introdução ao Frontend)</option>
        <option className="inputStyle" ref={ref}>Segundo módulo (Frontend Avançado)</option>
        <option className="inputStyle" ref={ref}>Terceiro módulo (Introdução ao Backend)</option>
        <option className="inputStyle" ref={ref}>Quarto módulo (Backend Avançado)</option>
      </select>
      {error ? <small>{error.message}</small> : null}
    </div>
  );
});
