import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Typography } from '@mui/material';

function MarkdownRenderer({ markdownText }) {
  return (
    <Typography component="div">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </Typography>
  );
}

export default MarkdownRenderer;
