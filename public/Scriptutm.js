import { useEffect } from 'react';

function ScriptUTM() {
  useEffect(() => {
    window.onload = function () {
      var links = document.getElementsByTagName("a");
      for (var i = 0, n = links.length; i < n; i++) {
        var href = links[i].href.trim() +
          (links[i].href.indexOf("?") > 0 ? '&' : '?') +
          document.location.search.replace('?', '').toString();
        links[i].href = href;
      }
    }
  }, []); // Certifique-se de passar um array vazio aqui para que o efeito seja executado apenas uma vez

  return null; // Como este é apenas um efeito, não há conteúdo a ser renderizado
}

export default ScriptUTM;
