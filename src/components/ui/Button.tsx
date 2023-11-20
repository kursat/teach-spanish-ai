"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = (props: IButtonProps) => {
  return (
    <button
      {...(props as any)}
      className={twMerge(
        clsx("bg-red-400 p-2 px-10", "border-2 border-red-600"),
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
