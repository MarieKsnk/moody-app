export interface SelectOption {
  label: string;
  value: string;
}

export interface ISelectIngredientProps {
  id: string;
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption) => void;
  error?: boolean;
  placeholder?: string;
  className?: string;
}
