import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

export function CalendarEmbed() {
  const [calHeight, setCalHeight] = useState(600);

  useEffect(() => {
    // Initialize Cal.com
    (function (C, A, L) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    // Initialize the calendar
    if (window.Cal) {
      window.Cal('init', 'slate-ai-initial-discovery-call', {
        origin: 'https://cal.com',
      });

      window.Cal.ns['slate-ai-initial-discovery-call']('inline', {
        elementOrSelector: '#my-cal-inline',
        config: { 
          layout: 'month_view',
          hideEventTypeDetails: false,
        },
        calLink: 'frankpalmeri/slate-ai-initial-discovery-call',
      });

      window.Cal.ns['slate-ai-initial-discovery-call']('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });

      // Listen for calendar events
      window.addEventListener('message', (e) => {
        if (e.data?.originator === 'Cal' && e.data?.height) {
          // Add some padding to the height
          const newHeight = Math.min(Math.max(e.data.height + 40, 600), 800);
          setCalHeight(newHeight);
        }
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('message', () => {});
    };
  }, []);

  return (
    <div 
      id="my-cal-inline" 
      className="w-full bg-white/5 backdrop-blur-xl rounded-xl transition-all duration-300 ease-in-out"
      style={{ height: calHeight }}
    />
  );
}