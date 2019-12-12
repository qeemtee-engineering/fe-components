export interface IFileUploader {
  multiple?: boolean;
  onUpload?(files: { mediaUrl: string; mediaType: string; name?: string }[]): void;
  defaultValue?: { mediaUrl: string; mediaType: string; name?: string }[];
}
