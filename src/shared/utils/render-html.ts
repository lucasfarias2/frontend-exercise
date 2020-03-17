import React from 'react';

const renderHtml = (rawHTML: string) =>
  React.createElement('span', {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });

export default renderHtml;
