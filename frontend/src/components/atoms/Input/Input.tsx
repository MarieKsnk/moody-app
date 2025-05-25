import { IInputProps } from "./Input.props";

export const Input: React.FC<IInputProps> = ({
  id,
  label,
  type,
  error,
  register,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        {...register}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      
      {error && (
        <p role="alert" id={`${id}-error`} style={{ color: "red" }}>
          {error.message}
        </p>
      )}
    </div>
  );
};
