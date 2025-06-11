import { IInputProps } from "./Input.props";

export const Input: React.FC<IInputProps> = ({
  id,
  label,
  type,
  error,
  register,
  accept,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        {...register}
        accept={accept}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      
      {error && (
        <p role="alert" id={`${id}-error`} style={{ color: "red" }}>
          {error.message}
        </p>
      )}
    </div>
  );
};
