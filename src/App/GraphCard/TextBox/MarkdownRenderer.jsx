import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Typography } from '@mui/material';

function MarkdownRenderer({ markdownText, height }) {
  return (
    <Typography component="div" sx={{textAlign: "left", height: height}}>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </Typography>
  );
}

export default MarkdownRenderer;
