import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="inputPasswordDiv">
      <label>{label}</label>
      <div className="inputDiv">
        <input className="inputStyle" type={isHidden ? "password" : "text"} ref={ref} {...rest} />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? <MdVisibility/> : <MdVisibilityOff/>}
        </button>
      </div>
      {error ? <small>{error.message}</small> : null}
    </div>
  );
});
