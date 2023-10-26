import { useEffect } from 'react';

const Script = () => {
  useEffect(() => {
    let prefix = ['https://typebot.io/'];

    function getParams() {
      let t = '',
        e = window.top.location.href,
        r = new URL(e);
      if (r !== null) {
        let a = r.searchParams.get('utm_source'),
          n = r.searchParams.get('utm_medium'),
          o = r.searchParams.get('utm_campaign'),
          m = r.searchParams.get('utm_term'),
          c = r.searchParams.get('utm_content');
        if (e.indexOf('?') !== -1) {
          t = `&sck=${a}|${n}|${o}|${m}|${c}`;
        }
        console.log(t);
      }
      return t;
    }

    function appendSearchParamsToLinks() {
      var t = new URLSearchParams(window.location.search);
      if (t.toString()) {
        document.querySelectorAll('a').forEach(function (e) {
          for (let r = 0; r < prefix.length; r++) {
            if (e.href.indexOf(prefix[r]) !== -1) {
              if (e.href.indexOf('?') === -1) {
                e.href += '?' + t.toString() + getParams();
              } else {
                e.href += '&' + t.toString() + getParams();
              }
            }
          }
        });
      }
    }

    appendSearchParamsToLinks();
  }, []);

  return null;
};

export default Script;
