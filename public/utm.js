import { useEffect } from 'react';

function Utm () {
  useEffect(() => {
    // Seu código aqui
    let prefix = ["https://typebot.io"];
    
    function getParams() {
      let t = "",
          e = window.top.location.href,
          r = new URL(e);
      if (null != r) {
        let a = r.searchParams.get("utm_source"),
            n = r.searchParams.get("utm_medium"),
            o = r.searchParams.get("utm_campaign"),
            m = r.searchParams.get("utm_term"),
            c = r.searchParams.get("utm_content"); 
        if (-1 !== e.indexOf("?")) {
          t = `&sck=${a}|${n}|${o}|${m}|${c}`;
        }
        console.log(t);
      }
      return t;
    }

    !function() {
      var t = new URLSearchParams(window.location.search);
      t.toString() && document.querySelectorAll("a").forEach(function(e) {
        for (let r = 0; r < prefix.length; r++) {
          if (-1 !== e.href.indexOf(prefix[r])) {
            if (-1 === e.href.indexOf("?")) {
              e.href += "?" + t.toString() + getParams();
            } else {
              e.href += "&" + t.toString() + getParams();
            }
          }
        }
      });
    }();
  }, []);

  // Restante do seu componente
}

export default Utm;