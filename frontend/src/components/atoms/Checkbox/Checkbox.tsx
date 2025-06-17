import { ICheckboxProps } from "./Checkbox.props";

export const Checkbox: React.FC<ICheckboxProps> = ({
  id,
  label,
  register,
  error,
}) => {
  return (
    <div>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          {...register}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {label}
      </label>
    </div>
  );
};
