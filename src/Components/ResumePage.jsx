// ResumePage.jsx
import React from 'react';

function ResumePage() {
  return (
    <div>
      <h2>My Resume</h2>
      <div style={{ overflow: 'auto', height: '100vh' }}> 
      <embed src="/Resume .pdf" width="100%" height="100%" />
      </div>
    </div>
  );
}

export default ResumePage;