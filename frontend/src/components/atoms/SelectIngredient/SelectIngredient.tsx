import { ISelectIngredientProps } from "./SelectIngredient.props";

export const SelectIngredient: React.FC<ISelectIngredientProps> = ({
  id,
  options,
  register,
  error,
  placeholder = "Sélectionne une option",
}) => {
  return (
    <div>
      <select
        id={id}
        {...register}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
