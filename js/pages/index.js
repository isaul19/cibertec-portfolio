import { downloadPdf } from "../use-cases/download-pdf.js";

const btnDownloadCv = document.querySelector("#btn-download-cv");

btnDownloadCv.addEventListener("click", () => {
  console.log("DESCARGANDO PDF...");

  downloadPdf({
    filePath: "/assets/documents/cv-test.pdf",
    downloadName: "cv-saul-porras.pdf",
  });
});
