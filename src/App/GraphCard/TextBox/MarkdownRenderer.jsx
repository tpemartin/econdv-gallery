import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Typography } from '@mui/material';

function MarkdownRenderer({ markdownText }) {
  return (
    <Typography component="div" sx={{textAlign: "left"}}>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </Typography>
  );
}

export default MarkdownRenderer;
