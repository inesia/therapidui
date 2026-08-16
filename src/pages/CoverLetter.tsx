import React from 'react';
import { CoverLetterLayout } from '../components/CoverLetterLayout';
import { resumeEn } from '../data/resumeContent';

const letterContent = [
  "I am writing to apply for the Senior UI/UX Designer position.",
  "With 15+ years of experience in UI/UX and digital product design, I have worked across media, enterprise platforms, banking, automotive, CRM systems, dashboards, web applications, and mobile experiences. Throughout my career, I have often worked at the intersection of design and technical implementation, helping turn requirements and early concepts into clear interfaces and interactive prototypes.",
  "One of my strongest capabilities is taking a project beyond static design. I am comfortable working from a brief or an early-stage idea, helping shape the user flow and interface direction, creating the UI in Figma, and turning the design into a functional prototype that can be reviewed and iterated with stakeholders and developers.",
  "I have strong hands-on expertise in HTML and CSS and increasingly use AI-assisted development workflows to accelerate rapid prototyping. Recent work includes enterprise CRM and executive dashboard interfaces at Ivosights, as well as ongoing web, mobile, and PWA projects. This combination allows me to work comfortably with both creative teams and technical teams and to communicate design decisions in a practical way.",
  "I am particularly interested in this opportunity because the role emphasizes creative thinking, technical understanding, interactive prototyping, and close collaboration with developers. These are areas that have been central to how I have worked throughout my career.",
  "I would welcome the opportunity to contribute to your client's team and help turn ideas and requirements into polished digital experiences."
];

export const CoverLetter: React.FC = () => {
  return <CoverLetterLayout data={resumeEn} letterContent={letterContent} />;
};

export default CoverLetter;
