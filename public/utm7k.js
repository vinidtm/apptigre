import { useEffect } from 'react';

function Utm7k () {
  useEffect(() => {
    // Seu código aqui
    let prefix = ["https://app.chatonline.chat/"];
    
    function getParams() {
      let t = "",
          e = window.top.location.href,
          r = new URL(e);
      if (null != r) {
        let a = r.searchParams.get("utm_source"),
            n = r.searchParams.get("utm_medium"),
            o = r.searchParams.get("utm_campaign");
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
            }
          }
        }
      });
    }();
  }, []);

  // Restante do seu componente
}

export default Utm7k;
