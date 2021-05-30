export function validateFile(file: File, supportedMimeTypes: string[]) {
  return supportedMimeTypes.includes(file.type)
}
