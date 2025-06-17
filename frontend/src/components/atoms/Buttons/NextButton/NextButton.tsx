import { INextButtonProps } from "./NextButton.props";

export const NextButton: React.FC<INextButtonProps> = ({
  ariaLabel,
  type = "submit",
}) => {
  return (
    <button type={type} aria-label={ariaLabel}>
      Suivant
    </button>
  );
};
