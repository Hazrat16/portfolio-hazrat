import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "footer" | "div";
  id?: string;
};

export default function Container({
  children,
  className = "",
  as: Tag = "section",
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-10 ${className}`}
    >
      {children}
    </Tag>
  );
}
