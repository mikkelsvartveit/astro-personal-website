export const getFileNameFromPath = (path: string) => {
  const parts = path.split("/");
  const fileName = parts[parts.length - 1].split("?")[0];
  return fileName.split(".")[0];
};
