// ==UserScript==
// @name          JSON Formatter
// @match         *://*/*.json
// @match         data:application/json,*
// @description	  Format and display JSON in a much better way
// @author        JamesJ0717
// @license       MIT
// @version       1.0.0
// ==/UserScript==

function syntaxHighlight(json) {
  if (typeof json != "string") {
    return;
  }

  json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)|([\{\}\[\]]))/g,
    (match) => {
      console.log(match);
      var cls = "number";
      var onclick = "";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      } else if (/[\{\}\[\]]/.test(match)) {
        if (/[\{\[]/.test(match)) {
          cls = "openbracket";
          onclick = "alert('hi')";
        } else {
          cls = "closebracket";
        }
      }
      return `<span class="${cls}" onclick="${onclick}">${match}</span>`;
    }
  );
}

(function () {
  const path = location.pathname.split("/");
  let raw = JSON.parse(document.body.textContent);
  document.body.textContent = "";
  document.title = `${path[path.length - 1]} | Formatted`;
  let ele = document.createElement("pre");
  ele.innerHTML = syntaxHighlight(JSON.stringify(raw, undefined, 2));
  document.body.appendChild(ele);

  addStyle(`
    body { 
      background-color: darkslategrey; 
    }
    pre {
    }
    .string { 
      color: lime;
    }
    .number { 
      color: darkorange;
    }
    .boolean { 
      color: aqua;
    }
    .null { 
      color: magenta;
    }
    .key { 
      color: white;
    }
    .openbracket {
      color: darkgoldenrod;
    }
    .closebracket {
      color: darkgoldenrod;
    }
  `);
})();
