import { RefObject, useCallback } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const useTemplate = () => {
  const getStyledComponentsStyles = useCallback(() => {
    return Array.from(document.querySelectorAll("style"))
      .map((style) => style.innerHTML)
      .join("\n");
  }, []);

  const captureHtml = useCallback(
    (ref: HTMLDivElement) => {
      const htmlContent = `
      <html>
        <head>
          <title>Exported Layout</title>
          <style>
            ${GlobalStyle.toString()}
            ${getStyledComponentsStyles()}
          </style>
        </head>
        <body>
          ${ref.innerHTML}
        </body>
      </html>
    `;
      return htmlContent;
    },
    [getStyledComponentsStyles]
  );

  const exportHtml = useCallback((htmlContent: string) => {
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "layout.html";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }, []);

  const handleExportHtml = useCallback(
    (layoutRef: RefObject<HTMLDivElement>) => {
      if (layoutRef.current) {
        const htmlContent = captureHtml(layoutRef.current);
        exportHtml(htmlContent);
      }
    },
    [captureHtml, exportHtml]
  );

  return {
    handleExportHtml,
    GlobalStyle,
  };
};
