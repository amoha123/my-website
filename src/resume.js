// resume.js
import React from 'react';
import resumepdf from './AbdirahmanMohamed_Resume2022.pdf';
import './resume.css';

function Resume() {
  return (
    <section id="resume" className="content-section resume">
      <button
        className="resume-button"
        onClick={() => window.open(resumepdf, '_blank')}
      >
        Download My Resume
      </button>
    </section>
  );
}

export default Resume;
