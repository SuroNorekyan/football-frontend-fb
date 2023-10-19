import React from "react";

interface RichTextRendererProps {
  htmlContent: string; // Define the type for htmlContent as a string
  maxLength?: number; // Add an optional maxLength prop
}

function RichTextRenderer({ htmlContent, maxLength }: RichTextRendererProps) {
  // Truncate the content if maxLength is provided
  const truncatedContent =
    maxLength && htmlContent.length > maxLength
      ? htmlContent.substring(0, maxLength) + "..."
      : htmlContent;

  // Add a class to the parent div to apply Quill styles
  return (
    <div
      className="ql-editor"
      dangerouslySetInnerHTML={{ __html: truncatedContent }}
    />
  );
}

export default RichTextRenderer;
