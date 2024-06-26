function DownloadPDF() {
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
    <>
      <li onClick={handleDownload}>Resume</li>
    </>
  );
}

export default DownloadPDF;
