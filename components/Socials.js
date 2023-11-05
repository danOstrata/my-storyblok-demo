import React from "react";

export const Socials = ({ isLight = false }) => {
  return (
    <>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <svg
          className={`h-6 w-6 ${isLight ? "stroke-zinc-800" : "stroke-slate-300"}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <use href="/socials.svg#linkedin" />
        </svg>
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <svg
          className={`h-6 w-6 ${isLight ? "stroke-zinc-800" : "stroke-slate-300"}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <use href="/socials.svg#instagram" />
        </svg>
        <span className="sr-only">Instagram</span>
      </a>
      <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
        <svg
          className={`h-6 w-6 ${isLight ? "stroke-zinc-800" : "stroke-slate-300"}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <use href="/socials.svg#twitter" />
        </svg>
        <span className="sr-only">Twitter</span>
      </a>
    </>
  );
};
