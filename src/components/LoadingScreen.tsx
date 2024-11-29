import React, { useState, useEffect } from 'react';
import { Bot, SmilePlus, MessageSquare } from 'lucide-react';

export function LoadingScreen() {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let mounted = true;

    setTimeout(() => {
      if (mounted) {
        setIsExiting(true);
      }
    }, 2300);

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center z-50 transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 animate-chat-bubble">
          <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-500" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="opacity-0 animate-chat-bubble flex items-end gap-2">
            <div className="bg-primary-500/10 backdrop-blur-xl p-4 rounded-t-xl rounded-br-xl max-w-[200px]">
              <p className="text-gray-900">Hey there! 👋</p>
            </div>
          </div>

          <div className="opacity-0 animate-chat-bubble-delayed-1 flex items-end justify-end gap-2">
            <div className="bg-secondary-500/10 backdrop-blur-xl p-4 rounded-t-xl rounded-bl-xl max-w-[200px]">
              <p className="text-gray-900">Hi! Looking for help!</p>
            </div>
          </div>

          <div className="opacity-0 animate-chat-bubble-delayed-2 flex items-end gap-2">
            <div className="bg-primary-500/10 backdrop-blur-xl p-4 rounded-t-xl rounded-br-xl max-w-[200px]">
              <p className="text-gray-900">I'm here to assist you 🚀</p>
            </div>
          </div>

          <div className="absolute -right-8 -top-8 animate-emoji">
            <SmilePlus className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="absolute -left-8 -bottom-8 animate-emoji" style={{ animationDelay: '0.5s' }}>
            <MessageSquare className="w-6 h-6 text-primary-500" />
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}