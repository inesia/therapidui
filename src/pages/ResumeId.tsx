import React from 'react';
import { ResumeLayout } from '../components/ResumeLayout';
import { resumeId } from '../data/resumeContent';

export const ResumeId: React.FC = () => {
  return <ResumeLayout data={resumeId} />;
};

export default ResumeId;
