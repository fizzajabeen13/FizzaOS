"use client";

import { useState } from "react";
import { Send, Terminal, X } from "lucide-react";

type Message = {
  role: "user" | "system";
  text: string;
};

const profile = {
  name: "Fizza Jabeen",
  role: "Full Stack Developer, AI Integration Developer, and Future SaaS Builder",
  email: "fizzajabeen13@gmail.com",
  location: "Pakistan",
  status: "Available for remote projects",
};

const projects = [
  "SmartConnect AI — AI communication platform",
  "Alpine MediScan AI — AI health analysis system",
  "Technova — modern e-commerce platform",
  "Solutions — business solutions website",
  "FizNPine AI — AI interface project",
  "Landing Page — responsive marketing landing page",
  "Book Portfolio — active portfolio system",
];

const skills = [
  "Frontend: React, Next.js, Tailwind CSS",
  "Backend: Node.js, Express, REST APIs",
  "AI: Prompt Engineering, AI Integration, Chatbots",
  "Database: MySQL, MongoDB",
];

const timeline = [
  "2021 — Development Journey Started",
  "2022 — Programming Foundations",
  "2023 — Landing Page",
  "2024 — Technova & Solutions",
  "2025 — FizNPine AI & Alpine MediScan AI",
  "2026 — Book Portfolio & SmartConnect AI",
  "2027 — First Commercial SaaS Launch",
  "2030 — Global Software & AI Products",
];

function includesAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

const getTerminalReply = (input: string) => {
  const message = input.toLowerCase();

  if (
    includesAny(message, [
      "who is fizza",
      "about fizza",
      "tell me about fizza",
      "about",
      "profile",
      "intro",
      "introduction",
    ])
  ) {
    return `${profile.name} is a ${profile.role}. She builds intelligent software, AI-powered experiences, and scalable digital products. She is currently focused on full stack development, AI integration, and future SaaS products.`;
  }

  if (
    includesAny(message, [
      "available",
      "hire",
      "work",
      "remote",
      "freelance",
      "job",
      "project",
      "client",
    ])
  ) {
    return `Yes. ${profile.name} is currently ${profile.status}. She is open to remote development work, AI integration projects, websites, dashboards, and SaaS-style product development.`;
  }

  if (
    includesAny(message, [
      "projects",
      "project",
      "missions",
      "mission",
      "portfolio",
      "built",
      "work sample",
    ])
  ) {
    return `Active missions retrieved:\n\n${projects
      .map((project) => `• ${project}`)
      .join("\n")}`;
  }

  if (
    includesAny(message, [
      "skills",
      "skill",
      "tech",
      "stack",
      "technology",
      "tools",
      "module",
      "modules",
    ])
  ) {
    return `Active modules online:\n\n${skills
      .map((skill) => `• ${skill}`)
      .join("\n")}`;
  }

  if (
    includesAny(message, [
      "contact",
      "email",
      "reach",
      "message",
      "connect",
    ])
  ) {
    return `You can contact Fizza at ${profile.email}. You can also use the Contact Terminal section to send project details directly.`;
  }

  if (
    includesAny(message, [
      "resume",
      "cv",
      "download resume",
    ])
  ) {
    return "Resume is available through the Resume button in the navbar and Recruiter Mode panel.";
  }

  if (message.includes("linkedin")) {
    return "LinkedIn profile: https://www.linkedin.com/in/fizza-jabeen-13ch";
  }

  if (message.includes("github")) {
    return "GitHub profile: https://github.com/fizzajabeen13";
  }

  if (
    includesAny(message, [
      "timeline",
      "archive",
      "journey",
      "history",
      "future archive",
    ])
  ) {
    return `Archive records retrieved:\n\n${timeline
      .map((item) => `• ${item}`)
      .join("\n")}`;
  }

  if (
    includesAny(message, [
      "smartconnect",
      "smart connect",
      "smartconnect ai",
    ])
  ) {
    return "SmartConnect AI is an active AI communication platform designed to help businesses manage customer conversations faster and smarter.";
  }

  if (
    includesAny(message, [
      "alpine",
      "mediscan",
      "medical",
      "health",
    ])
  ) {
    return "Alpine MediScan AI is a deployed AI health analysis system created to present health insights through a modern scanning interface.";
  }

  if (message.includes("technova")) {
    return "Technova is a deployed modern electronics e-commerce platform with product sections, cart flow, responsive UI, and a premium shopping experience.";
  }

  if (message.includes("solutions")) {
    return "Solutions is a deployed business website built to present services, value, and contact flow clearly.";
  }

  if (
    includesAny(message, [
      "fiznpine",
      "fiznpine ai",
      "chatbot",
    ])
  ) {
    return "FizNPine AI is a deployed AI interface project focused on presenting intelligent features in a simple and attractive way.";
  }

  if (
    includesAny(message, [
      "book portfolio",
      "book",
      "portfolio book",
    ])
  ) {
    return "Book Portfolio is an active portfolio system for presenting books, content, and author-style profile sections.";
  }

  if (
    includesAny(message, [
      "hello",
      "hi",
      "hey",
      "salam",
      "assalam",
    ])
  ) {
    return "Hello. FizzaOS communication terminal is online. You can ask about Fizza, projects, skills, availability, resume, GitHub, LinkedIn, or contact.";
  }

  return "I can answer questions about Fizza, her projects, skills, availability, resume, GitHub, LinkedIn, contact details, and timeline. Try asking: “What projects has Fizza built?”";
};

export default function AITerminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      text: "COMMUNICATION TERMINAL ONLINE.\nAsk me about Fizza, projects, skills, availability, resume, GitHub, LinkedIn, contact, or timeline.",
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      text: input,
    };

    const systemMessage: Message = {
      role: "system",
      text: getTerminalReply(input),
    };

    setMessages((prev) => [...prev, userMessage, systemMessage]);
    setInput("");
  };

  const quickQuestions = [
    "Who is Fizza?",
    "Show projects",
    "What skills does she use?",
    "Is she available?",
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-blue-500/30 transition hover:bg-blue-400 animate-[fizzaPulse_1.8s_ease-in-out_infinite]"
      >
        <Terminal size={18} />
        Ask FizzaOS
      </button>

      {open && (
        <div className="fixed inset-0 z-[9998] flex items-end justify-center bg-black/60 px-4 pb-6 backdrop-blur-sm md:items-center md:pb-0">
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-800 bg-[#081421] shadow-2xl shadow-blue-500/20">
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-6 py-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                  Communication Terminal
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Portfolio chatbot · Rule-based FizzaOS assistant
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-slate-700 p-2 text-slate-400 transition hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="border-b border-slate-800 bg-slate-950/40 px-5 py-3">
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => {
                      const userMessage: Message = {
                        role: "user",
                        text: question,
                      };

                      const systemMessage: Message = {
                        role: "system",
                        text: getTerminalReply(question),
                      };

                      setMessages((prev) => [
                        ...prev,
                        userMessage,
                        systemMessage,
                      ]);
                    }}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-blue-500/40 hover:text-white"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[420px] space-y-4 overflow-y-auto p-6">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 ${
                    msg.role === "user"
                      ? "ml-auto bg-blue-500 text-white"
                      : "border border-slate-800 bg-slate-900 text-slate-300"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="flex gap-3 border-t border-slate-800 bg-slate-950 p-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Ask a question about Fizza..."
                className="flex-1 rounded-full border border-slate-800 bg-slate-900 px-5 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
              />

              <button
                onClick={sendMessage}
                className="rounded-full bg-blue-500 px-5 py-3 text-white transition hover:bg-blue-400"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}