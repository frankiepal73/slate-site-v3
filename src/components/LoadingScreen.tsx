import React, { useEffect, useState, useRef } from 'react';
import { Bot, SmilePlus, MessageSquare } from 'lucide-react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="relative">
        {/* Bot Icon */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 animate-chat-bubble">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-blue-400" />
          </div>
        </div>

        {/* Chat Bubbles */}
        <div className="space-y-4">
          {/* First message */}
          <div className="opacity-0 animate-chat-bubble flex items-end gap-2">
            <div className="bg-blue-500/20 backdrop-blur-xl p-4 rounded-t-xl rounded-br-xl max-w-[200px]">
              <p className="text-white">Hey there! 👋</p>
            </div>
          </div>

          {/* Second message */}
          <div className="opacity-0 animate-chat-bubble-delayed-1 flex items-end justify-end gap-2">
            <div className="bg-purple-500/20 backdrop-blur-xl p-4 rounded-t-xl rounded-bl-xl max-w-[200px]">
              <p className="text-white">Hi! Looking for help!</p>
            </div>
          </div>

          {/* Third message with floating emojis */}
          <div className="opacity-0 animate-chat-bubble-delayed-2 flex items-end gap-2">
            <div className="bg-blue-500/20 backdrop-blur-xl p-4 rounded-t-xl rounded-br-xl max-w-[200px]">
              <p className="text-white">I'm here to assist you 🚀</p>
            </div>
          </div>

          {/* Floating emojis */}
          <div className="absolute -right-8 -top-8 animate-emoji">
            <SmilePlus className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="absolute -left-8 -bottom-8 animate-emoji" style={{ animationDelay: '0.5s' }}>
            <MessageSquare className="w-6 h-6 text-blue-400" />
          </div>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}