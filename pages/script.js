import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Script = () => {
  const prefix = ["https://typebot.io/funil-do-tiger-9x5el9g"];

  const getParams = () => {
    let t = "";
    const e = window.top.location.href;
    const r = new URL(e);

    if (r) {
      const a = r.searchParams.get("utm_source");
      const n = r.searchParams.get("utm_medium");
      const o = r.searchParams.get("utm_campaign");
      const m = r.searchParams.get("utm_term");
      const c = r.searchParams.get("utm_content");

      if (e.includes("?")) {
        t = `&sck=${a}|${n}|${o}|${m}|${c}`;
      }
      console.log(t);
    }

    return t;
  };

  useEffect(() => {
    const router = useRouter();
    const t = new URLSearchParams(window.location.search);

    if (t.toString()) {
      document.querySelectorAll("a").forEach((e) => {
        for (let r = 0; r < prefix.length; r++) {
          if (e.href.includes(prefix[r])) {
            if (e.href.includes("?")) {
              e.href += "?" + t.toString() + getParams();
            } else {
              e.href += "&" + t.toString() + getParams();
            }
          }
        }
      });
    }
  }, []);

  return null;
};

export default Script;
