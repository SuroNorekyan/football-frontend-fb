import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const QuillField = ({ field, form }: any) => {
  const handleChange = (html: string) => {
    form.setFieldValue(field.name, html);
  };

  return (
    <ReactQuill
      value={field.value}
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link"],
          ["clean"],
          // Add text alignment, text color, and font size options
          [{ align: [] }],
          [{ color: [] }],
          [{ size: ["small", false, "large", "huge"] }],
        ],
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "link",
        // Include formats for text alignment, text color, and font size
        "align",
        "color",
        "size",
      ]}
    />
  );
};
