import clsx from "clsx";
import { ISelectIngredientProps } from "./SelectIngredient.props";

export const SelectIngredient: React.FC<ISelectIngredientProps> = ({
  id,
  options,
  value,
  onChange,
  error,
  placeholder = "Sélectionne une option",
  className,
}) => {
  return (
    <select
      id={id}
      value={value?.value || ""}
      onChange={(e) =>
        onChange(
          options.find((opt) => opt.value === e.target.value) || {
            label: "",
            value: "",
          }
        )
      }
      className={clsx("select", className)}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
