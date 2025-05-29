import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const GeneratePDF = ({ className = '', style = {} }) => {
  const generatePDF = async () => {
    // Select the resume container element
    const resumeContent = document.querySelector('.resume-container.print-friendly');

    if (!resumeContent) {
      console.error('Resume content container not found');
      return;
    }

    try {
      // Show a loading message
      const loadingIndicator = document.createElement('div');
      loadingIndicator.style.position = 'fixed';
      loadingIndicator.style.top = '0';
      loadingIndicator.style.left = '0';
      loadingIndicator.style.right = '0';
      loadingIndicator.style.backgroundColor = 'rgba(138, 43, 226, 0.7)';
      loadingIndicator.style.color = 'white';
      loadingIndicator.style.padding = '10px';
      loadingIndicator.style.textAlign = 'center';
      loadingIndicator.style.zIndex = '9999';
      loadingIndicator.style.fontWeight = 'bold';
      loadingIndicator.textContent = 'Generating PDF, please wait...';
      document.body.appendChild(loadingIndicator);

      // Temporarily remove margin/padding for PDF generation and ensure full visibility
      const originalStyle = resumeContent.getAttribute('style') || '';
      resumeContent.setAttribute('style', `
        ${originalStyle}
        overflow: visible !important;
        height: auto !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        margin: 0 !important;
        padding: 8mm !important;
        width: 215.9mm !important;
        background-color: white !important;
        color: black !important;
      `);

      // Set scale to adjust quality/size balance (higher is better quality but larger file)
      const scale = 2;

      // Create canvas from the element
      const canvas = await html2canvas(resumeContent, {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        removeContainer: true,
        windowWidth: 1024, // Set a consistent window width
        height: resumeContent.scrollHeight // Capture full height
      });

      // Restore original styling
      resumeContent.setAttribute('style', originalStyle);

      // Calculate dimensions (A4 format)
      const imgWidth = 210; // A4 width in mm (ISO standard)
      const pageHeight = 297; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;

      // Create PDF (A4 format)
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');

      // Add the image to the PDF, handling multiple pages if needed
      let heightLeft = imgHeight;
      let position = 0;
      let pageNumber = 1;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add subsequent pages if needed
      while (heightLeft > 0) {
        position = -pageHeight * pageNumber;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        pageNumber++;
      }

      // Save the PDF
      pdf.save(`Resume_${new Date().toISOString().split('T')[0]}.pdf`);

      // Remove loading indicator
      document.body.removeChild(loadingIndicator);

      // Show success notification
      const notification = document.createElement('div');
      notification.style.position = 'fixed';
      notification.style.top = '10px';
      notification.style.left = '50%';
      notification.style.transform = 'translateX(-50%)';
      notification.style.backgroundColor = 'rgba(46, 204, 113, 0.9)';
      notification.style.color = 'white';
      notification.style.padding = '10px 20px';
      notification.style.borderRadius = '5px';
      notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
      notification.style.zIndex = '9999';
      notification.textContent = 'PDF successfully generated!';
      document.body.appendChild(notification);

      // Remove notification after 3 seconds
      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => document.body.removeChild(notification), 500);
      }, 3000);
      
      // If this was launched from a standalone resume page, indicate successful generation
      // This works in conjunction with the Resume.jsx component's navigation behavior
      const currentPath = window.location.pathname;
      if (currentPath === '/resume') {
        // Set a flag in sessionStorage that the PDF was generated successfully
        sessionStorage.setItem('resumePdfGenerated', 'true');
      }

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <button
      onClick={generatePDF}
      className={`generate-pdf-btn ${className}`}
      style={style}
      aria-label="Generate PDF"
    >
      Generate PDF
      <span className="download-indicator">↓</span>
    </button>
  );
};

export default GeneratePDF;