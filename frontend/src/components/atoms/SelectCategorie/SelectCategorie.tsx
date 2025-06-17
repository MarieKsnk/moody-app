import { ISelectCategorieProps } from "./SelectCategorie.props";

export const SelectCategorie: React.FC<ISelectCategorieProps> = ({
  id,
  options,
  register,
  placeholder,
}) => {
  return (
    <div>
      <select id={id} {...register}>
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
