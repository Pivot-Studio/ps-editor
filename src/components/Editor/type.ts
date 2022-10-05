export interface EditorProps {
  width?: string;
  height?: string;
  language: string;
}
export interface EditorExposeType {
  getSelectionVal(): string;
}
