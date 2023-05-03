function DownloadPDF() {
  function handleDownload() {
    // Path to the file to be downloaded
    const fileURL = process.env.PUBLIC_URL + "/resumePDF/resume.pdf";
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
  }
  

  return (
    <>
      <li onClick={handleDownload}>Resume</li>
    </>
  );
}

export default DownloadPDF;
