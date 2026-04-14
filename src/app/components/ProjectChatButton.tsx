"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ProjectChatButtonProps {
  projectName: string;
  projectDescription: string[];
  projectTechnologies: string[];
}

const ProjectChatButton: React.FC<ProjectChatButtonProps> = ({
  projectName,
  projectDescription,
  projectTechnologies,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const PRESET_QUESTIONS = [
    "What was the biggest challenge you faced building this?",
    "Why did you choose this tech stack?",
    "What would you improve if you rebuilt it today?",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(input);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: text.trim() },
    ];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          projectName,
          projectDescription,
          projectTechnologies,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply ?? "Sorry, I couldn't get a response.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Sparkle button rendered inside the hover overlay */}
      <button
        onClick={handleOpen}
        className="flex flex-col items-center gap-0.5 text-white hover:text-[#64ffda] transition-colors duration-200 group/btn"
        title={`Ask AI about ${projectName}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="transition-transform duration-200 group-hover/btn:scale-110"
        >
          <path d="M12 2l1.4 5.6L19 6l-4.6 4.6L20 12l-5.6 1.4L16 19l-4-3.8-4 3.8 1.6-5.6L4 12l5.6-1.4L8 6l5.6 1.6L12 2z" />
          <circle cx="5" cy="5" r="1.2" />
          <circle cx="19" cy="19" r="1.2" />
          <circle cx="5" cy="19" r="0.8" />
          <circle cx="19" cy="5" r="0.8" />
        </svg>
        <span className="text-[14px] leading-none">Ask AI</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={handleClose}
        >
          <div
            className="bg-[#0d1b2a] border border-slate-700 rounded-xl w-full max-w-md flex flex-col shadow-2xl"
            style={{ maxHeight: "80vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button
                    onClick={() => setMessages([])}
                    className="text-slate-400 hover:text-[#64ffda] transition-colors"
                    aria-label="Back to questions"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                  </button>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#64ffda"
                >
                  <path d="M12 2l1.4 5.6L19 6l-4.6 4.6L20 12l-5.6 1.4L16 19l-4-3.8-4 3.8 1.6-5.6L4 12l5.6-1.4L8 6l5.6 1.6L12 2z" />
                </svg>
                <span className="text-white text-sm font-semibold">
                  Ask about{" "}
                  <span className="text-[#64ffda]">{projectName}</span>
                </span>
              </div>
              <button
                onClick={handleClose}
                className="text-slate-400 hover:text-white transition-colors text-lg leading-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[220px]">
              {messages.length === 0 && (
                <div className="pt-4 space-y-3">
                  <p className="text-slate-500 text-xs text-center">
                    Ask me anything about this project, or pick a question:
                  </p>
                  <div className="flex flex-col gap-2">
                    {PRESET_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        disabled={isLoading}
                        className="text-left text-sm text-slate-300 border border-slate-600 hover:border-[#64ffda] hover:text-[#64ffda] rounded-lg px-3 py-2 transition-colors duration-150 disabled:opacity-40"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-lg px-3 py-2 text-sm max-w-[85%] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#64ffda] text-[#0d1b2a] font-medium"
                        : "bg-slate-800 text-slate-100"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 rounded-lg px-4 py-2 text-sm text-slate-400 flex gap-1 items-center">
                    <span className="animate-bounce [animation-delay:-0.3s]">
                      •
                    </span>
                    <span className="animate-bounce [animation-delay:-0.15s]">
                      •
                    </span>
                    <span className="animate-bounce">•</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-slate-700 flex gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={isLoading}
                className="flex-1 bg-slate-800 text-white text-sm rounded-lg px-3 py-2 outline-none border border-slate-600 focus:border-[#64ffda] placeholder-slate-500 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#64ffda] text-[#0d1b2a] font-semibold text-sm rounded-lg px-4 py-2 hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectChatButton;
