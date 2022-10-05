export interface EditorProps {
  width?: string;
  height?: string;
  language: string;
  value?:string;
}
export interface EditorExposeType {
  getSelectionVal(): string;
}
