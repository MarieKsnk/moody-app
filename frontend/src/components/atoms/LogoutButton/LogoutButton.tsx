import { ILogoutButtonProps } from "./LogoutButton.props"

export const LogoutButton: React.FC<ILogoutButtonProps> = ({ 
    label, 
    onClick, 
    disabled,
    ariaLabel
}) => {
    return (
        <button      
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}>
        { label }</button>
    )
}