export interface IButtonsModalProps {
  title: string;
  message?: string;
  primaryLabel: string;
  secondaryLabel: string;
  primaryOnClick: () => void;
  secondaryOnClick: () => void;
  className?: string;
}
