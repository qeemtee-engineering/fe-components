export interface IFileUploader {
  multiple?: boolean;
  onChange?(files: { mediaUrl: string; mediaType: string; name?: string }[]): void;
  value?: { mediaUrl: string; mediaType: string; name?: string }[];
  error?: string;
}
