import React from "react";
import clsx from "clsx";

export interface IChatMessage {
  text: string;
  direction: "incoming" | "outgoing";
}

interface IChatMessageProps {
  message: IChatMessage;
}
const ChatMessage = ({ message }: IChatMessageProps) => {
  const { text, direction } = message;

  return (
    <li
      className={clsx("flex", {
        "justify-start": direction === "incoming",
        "justify-end": direction === "outgoing",
      })}
    >
      <div
        className={clsx(
          "relative max-w-xl px-4 py-2 text-gray-700 rounded shadow",
          {
            "bg-gray-100": direction === "outgoing",
          },
        )}
      >
        <span
          className="block whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </li>
  );
};

export default ChatMessage;
