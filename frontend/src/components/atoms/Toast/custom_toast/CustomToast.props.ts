export interface ICustomToastProps {
  message: string;
  onClose?: () => void;
  className?: string;
  duration?: number;
  type: "success" | "error" | "info" | "warning";
}
