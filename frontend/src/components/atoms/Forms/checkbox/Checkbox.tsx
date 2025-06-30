import { ICheckboxProps } from "./Checkbox.props";
import clsx from "clsx";

export const Checkbox: React.FC<ICheckboxProps> = ({
  id,
  label,
  register,
  error,
  className,
}) => {
  return (
    <div className="checkbox">
      <label htmlFor={id} className="checkbox__label">
        <input
          id={id}
          type="checkbox"
          {...register}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="checkbox__input"
        />
        {label}
        <span>*</span>
      </label>
    </div>
  );
};
