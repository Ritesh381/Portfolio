import React from 'react';
import resumePDF from '../assets/Resume.pdf';

function Resume({ darkMode }) {
  return (
    <div className="container py-5">
      <div
        className={`card p-4 rounded-4 shadow-lg ${
          darkMode ? 'bg-dark text-light border-info' : 'bg-white text-dark border-primary'
        } border`}
      >
        <h2 className={`mb-4 text-center ${darkMode ? 'text-info' : 'text-primary'}`}>
          My Resume
        </h2>

        {/* PDF Preview */}
        <div className="mb-4" style={{ height: '75vh' }}>
          <iframe
            src={resumePDF}
            title="Resume"
            width="100%"
            height="100%"
            style={{ border: '1px solid #ccc', borderRadius: '12px' }}
          />
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a
            href={resumePDF}
            download="Ritesh_Prajapati_Resume.pdf"
            className={`btn ${darkMode ? 'btn-info' : 'btn-primary'}`}
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
