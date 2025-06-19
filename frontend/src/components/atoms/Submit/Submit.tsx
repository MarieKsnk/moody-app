import { ISubmitProps } from "./Submit.props";

export const Submit: React.FC<ISubmitProps> = ({
  label,
  onClick,
  disabled,
  ariaLabel,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {label}
    </button>
  );
};
