import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ITextAreaProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const TextArea = ({ className, ...props }: ITextAreaProps) => {
  return (
    <textarea
      className={twMerge(clsx(""), className)}
      {...(props as any)}
    ></textarea>
  );
};

export default TextArea;
