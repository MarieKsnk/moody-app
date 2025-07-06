import { ILinksModalProps } from "./LinksModal.props";
import { LightButton } from "@/components/atoms/Buttons/light_button";
import { DarkButton } from "@/components/atoms/Buttons/dark_button";

export const LinksModal = ({
  title,
  message,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: ILinksModalProps) => {
  return (
    <div className="modal-container" role="dialog" aria-modal="true">
      <div className="modal">
        <h2 className="modal__title">{title}</h2>
        {message && <p className="modal__text">{message}</p>}
        <div className="modal__buttons">
          <LightButton
            label={primaryLabel}
            href={primaryHref}
            className="light-button--pink-border"
          />
          <LightButton
            label={secondaryLabel}
            href={secondaryHref}
            className="light-button--pink-border"
          />
        </div>
      </div>
    </div>
  );
};
