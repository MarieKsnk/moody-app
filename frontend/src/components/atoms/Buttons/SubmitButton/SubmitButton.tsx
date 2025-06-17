import { ISubmitButtonProps } from "./SubmitButton.props";

export const SubmitButton: React.FC<ISubmitButtonProps> = ({
  label,
  type = "submit",
  ariaLabel,
}) => {
  return (
    <button type={type} aria-label={ariaLabel}>
      {label}
    </button>
  );
};
