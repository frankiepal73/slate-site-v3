import React from 'react';
import { Star } from 'lucide-react';

const avatars = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "Happy customer"
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "Satisfied client"
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "Happy user"
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "Satisfied customer"
  }
];

export function RatingBadge() {
  return (
    <button 
      className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200 animate-pulse hover:bg-white transition-all"
      id="hero-rating-button"
      data-gtm-category="Hero"
      data-gtm-action="click"
      data-gtm-label="Rating Badge"
    >
      <div className="flex items-center gap-2">
        <div className="flex -space-x-1">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar.src}
              alt={avatar.alt}
              className="w-5 h-5 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <div className="flex">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <div className="relative w-3.5 h-3.5">
            <Star className="absolute inset-0 w-3.5 h-3.5 text-yellow-400/20" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: '90%' }}>
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        </div>
        <span className="text-gray-600 text-xs">Rated 4.9 by happy clients</span>
      </div>
    </button>
  );
}