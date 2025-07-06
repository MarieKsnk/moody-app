import clsx from "clsx";
import { ISelectCategorieProps } from "./SelectCategorie.props";

export const SelectCategorie: React.FC<ISelectCategorieProps> = ({
  id,
  options,
  register,
  placeholder = "Sélectionne une option",
  error,
  className,
}) => {
  return (
    <select
      id={id}
      {...register}
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
