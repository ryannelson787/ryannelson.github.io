import React from "react";

import { Document, Page, pdfjs } from 'react-pdf';
import '../css/Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const resume_url = 'Ryan_Nelson_resume.pdf';

  const [pdfWidth, setPdfWidth] = React.useState(window.innerWidth * 0.3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setPdfWidth(window.innerWidth * 0.3);
      } else {
        setPdfWidth(window.innerWidth * 0.7);
      }
      
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const resumeButton = (e) => {
    window.location.href = './Ryan_Nelson_resume.pdf';
  }

  return (
    <div 
      className="resume_div"
      onClick={resumeButton}>
      <Document className="resume_doc" file={resume_url}>
        <Page pageNumber={1} width={pdfWidth}/>
      </Document>
    </div>
  )
}

export default Resume;