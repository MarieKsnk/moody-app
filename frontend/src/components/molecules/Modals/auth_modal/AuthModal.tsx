import { IAuthModalProps } from "./AuthModal.props";
import { LightButton } from "@/components/atoms/Buttons/light_button";
import { DarkButton } from "@/components/atoms/Buttons/dark_button";

export const AuthModal = ({
  title,
  message,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: IAuthModalProps) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2 className="modal__title">{title}</h2>
        {message && <p className="modal__text">{message}</p>}
        <div className="modal__buttons">
          <LightButton label={primaryLabel} href={primaryHref} />
          <DarkButton label={secondaryLabel} href={secondaryHref} />
        </div>
      </div>
    </div>
  );
};
