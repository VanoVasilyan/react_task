export interface IButton {
  text: string;
  width: string;
  border?: string;
  padding: string;
  bgColor: string;
  color: string;
  borderBlockColor?: string;
  borderRadius?: string;
  onClick: () => void;
}
