import React from "react"
import { ILogoutButtonProps } from "./LogoutButton.props"

export const LogoutButton: React.FC<ILogoutButtonProps> = ({ 
    label, 
    onClick, 
    ariaLabel
}) => {
    return (
        <button 
        type="button"
        onClick={onClick} 
        aria-label={ariaLabel}>
        { label }
        </button>
    )
}