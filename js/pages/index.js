import { downloadPdf } from "../use-cases/download-pdf.js";

function main() {
  const btnDownloadCv = document.querySelector("#btn-download-cv");
  btnDownloadCv.addEventListener("click", handleDownloadCv);
}

main();

function handleDownloadCv() {
  console.log("DESCARGANDO PDF...");

  downloadPdf({
    filePath: "/assets/documents/cv-test.pdf",
    downloadName: "cv-saul-porras.pdf",
  });
}
