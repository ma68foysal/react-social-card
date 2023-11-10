import html2canvas from 'html2canvas';
import React from 'react';

const DownloadButton = ({ canvasRef }) => {
    
  const handleDownloadClick = () => {
    const container = canvasRef.current;
  if (container) {
    html2canvas(container).then(canvas => {
      canvas.toBlob(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'social-card.png';
        link.click();
      }, 'image/png');
    });
  }
  };

  return (
    <button onClick={handleDownloadClick} className='download'>Download Social Card</button>
  );
};

export default DownloadButton;