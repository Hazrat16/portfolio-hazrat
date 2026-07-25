import type { ReactNode } from "react";
import type { TechCardIconKey } from "../data";

const iconPaths: Record<TechCardIconKey, ReactNode> = {
  frontend: (
    <>
      <path
        d="M8.5 8.5L4.5 12L8.5 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8.5L19.5 12L15.5 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 7L11 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  backend: (
    <>
      <path
        d="M7 7C7 5.34315 8.34315 4 10 4H14C15.6569 4 17 5.34315 17 7V17C17 18.6569 15.6569 20 14 20H10C8.34315 20 7 18.6569 7 17V7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10 8H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 12H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 16H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  database: (
    <>
      <ellipse
        cx="12"
        cy="6"
        rx="8"
        ry="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 6V12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 12V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </>
  ),
  devops: (
    <>
      <path
        d="M7 10V6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 13L12 17L16 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 20H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  tools: (
    <>
      <path
        d="M14.7 6.3C15.5 5.5 16.8 5.5 17.6 6.3C18.4 7.1 18.4 8.4 17.6 9.2L9.2 17.6C8.4 18.4 7.1 18.4 6.3 17.6C5.5 16.8 5.5 15.5 6.3 14.7L14.7 6.3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13 7L17 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
};

type TechCardIconProps = {
  name: TechCardIconKey;
};

export default function TechCardIcon({ name }: TechCardIconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {iconPaths[name]}
    </svg>
  );
}
