import { ISubmitProps } from './Submit.props';

export const Submit: React.FC<ISubmitProps> = ({ 
    label, 
    type, 
    onClick, 
    disabled 
}) => {
    return (
        <button 
            type={type}        
            onClick={onClick}
            disabled={disabled}>
        { label }</button>
    )
}