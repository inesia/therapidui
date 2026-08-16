import React from 'react';
import { ResumeLayout } from '../components/ResumeLayout';
import { resumeEn } from '../data/resumeContent';

export const Resume: React.FC = () => {
  return <ResumeLayout data={resumeEn} />;
};

export default Resume;
