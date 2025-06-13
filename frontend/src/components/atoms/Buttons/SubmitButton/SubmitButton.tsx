import { ISubmitButtonProps } from './SubmitButton.props';

export const Submit: React.FC<ISubmitButtonProps> = ({ 
    label, 
    type = "submit",
    ariaLabel
}) => {
    return (
        <button      
            type={type}
            aria-label={ariaLabel}>
        { label }</button>
    )
}