export const downloadFolderAsZip = (folderName = "BangAI") => {
  const url = `/${folderName}.zip`;

  const link = document.createElement("a");
  link.href = url;
  link.download = `${folderName}.zip`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
