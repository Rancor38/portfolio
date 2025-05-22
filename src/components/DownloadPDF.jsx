import React from 'react';
import { motion } from 'framer-motion';

function DownloadPDF({ className = '' }) {
  function handleDownload() {
    // Display a confirmation dialog
    const isConfirmed = window.confirm("Download latest resume?");

    // If user confirms, proceed with download
    if (isConfirmed) {
      // Path to the file to be downloaded
      const fileURL = process.env.PUBLIC_URL + "/resumePDF/Zakariah_Software_Developer_Resume.pdf";

      // Create a temporary anchor element
      const downloadLink = document.createElement("a");

      // Set the href attribute to the file's URL
      downloadLink.href = fileURL;

      // Set the download attribute to the file's name
      downloadLink.download = "Zakariah's_Resume.pdf";

      // Append the anchor element to the document body
      document.body.appendChild(downloadLink);

      // Click the download link to start the download
      downloadLink.click();

      // Remove the temporary anchor element
      document.body.removeChild(downloadLink);

      // Open the downloaded file in a new window
      window.open(fileURL, "_blank");
    }
  }

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`download-resume-btn ${className}`}
    >
      Download PDF
      <motion.span
        className="download-indicator"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
      >
        ↓
      </motion.span>
    </motion.button>
  );
}

export default DownloadPDF;
