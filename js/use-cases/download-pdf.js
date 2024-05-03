export const downloadPdf = ({ filePath, downloadName }) => {
  if (!filePath) throw new Error("filePath is required for downloadPdf");
  if (!downloadName) throw new Error("DownloadName is required for downloadPdf");

  const link = document.createElement("a");
  link.href = filePath;
  link.download = downloadName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
