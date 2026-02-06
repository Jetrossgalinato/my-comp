"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

interface ResponsiveIframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  children: React.ReactNode;
}

export function ResponsiveIframe({
  children,
  className,
  ...props
}: ResponsiveIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow?.document) return;

    const doc = iframe.contentWindow.document;

    // Reset default iframe styles
    doc.body.style.margin = "0";
    doc.body.style.padding = "0";

    // Copy stylesheets and styles from main document
    const updateStyles = () => {
      Array.from(document.querySelectorAll('link[rel="stylesheet"]')).forEach(
        (link) => {
          doc.head.appendChild(link.cloneNode(true));
        },
      );
      Array.from(document.querySelectorAll("style")).forEach((style) => {
        doc.head.appendChild(style.cloneNode(true));
      });
    };

    updateStyles();

    // Sync body classes (for theme support)
    const observer = new MutationObserver(() => {
      doc.body.className = document.body.className;
      // Also sync specific style attributes if needed (e.g. background-color variables if set on body)
      if (document.body.getAttribute("style")) {
        doc.body.setAttribute(
          "style",
          document.body.getAttribute("style") || "",
        );
        // Re-apply margin reset just in case
        doc.body.style.margin = "0";
        doc.body.style.padding = "0";
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    // Initial sync
    doc.body.className = document.body.className;

    setMountNode(doc.body);

    return () => observer.disconnect();
  }, []);

  // We wrap the portal content in a div to ensure it creates a new stacking context if needed,
  // but mostly just to render children into the body.
  return (
    <iframe
      ref={iframeRef}
      className={className}
      title="Component Preview"
      {...props}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}
