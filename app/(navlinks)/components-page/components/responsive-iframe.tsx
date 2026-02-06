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

    // 1. Set base href so relative links work correctly
    const base = doc.createElement("base");
    base.href = window.location.href;
    doc.head.appendChild(base);

    // 2. Reset default iframe styles
    doc.body.style.margin = "0";
    doc.body.style.padding = "0";

    // 3. Function to copy a style/link node
    const copyNode = (node: Node) => {
      if (node instanceof Element) {
        if (
          node.tagName === "LINK" &&
          (node as HTMLLinkElement).rel === "stylesheet"
        ) {
          const clone = node.cloneNode(true);
          doc.head.appendChild(clone);
        } else if (node.tagName === "STYLE") {
          const style = node as HTMLStyleElement;
          const clone = doc.createElement("style");
          // Try to copy rules from sheet if available (covers CSS-in-JS/injected styles)
          if (style.sheet) {
            try {
              const rules = Array.from(style.sheet.cssRules)
                .map((rule) => rule.cssText)
                .join("\n");
              clone.textContent = rules;
            } catch (e) {
              // Fallback if CORS prevents accessing rules
              clone.textContent = style.textContent;
            }
          } else {
            clone.textContent = style.textContent;
          }
          doc.head.appendChild(clone);
        }
      }
    };

    // 4. Initial copy of existing styles
    Array.from(document.head.children).forEach(copyNode);

    // 5. Observe head for new styles (Next.js development mode injection)
    const headObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach(copyNode);
      });
    });

    headObserver.observe(document.head, { childList: true });

    // 6. Sync body classes and theme
    const syncTheme = () => {
      const mainHtml = document.documentElement;
      const iframeHtml = doc.documentElement;

      iframeHtml.className = mainHtml.className;
      iframeHtml.style.cssText = mainHtml.style.cssText;

      doc.body.className = document.body.className;

      // Force background to follow variables (essential if body background comes from :root variable)
      doc.body.style.backgroundColor = "var(--background)";
      doc.body.style.color = "var(--foreground)";
    };

    const observer = new MutationObserver(() => {
      syncTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    // Initial sync
    syncTheme();

    setMountNode(doc.body);

    return () => {
      headObserver.disconnect();
      observer.disconnect();
    };
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
