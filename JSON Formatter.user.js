// ==UserScript==
// @name          JSON Formatter
// @match         *://*/*.json
// @description	  Format and display JSON in a much better way
// @author        JamesJ0717
// @license       free
// @version       1.0.0
// @grant         GM.addStyle
// ==/UserScript==

function syntaxHighlight(json) {
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      var cls = "number";
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
      }
      return '<span class="' + cls + '">' + match + "</span>";
    },
  );
}

(function () {
  let raw = JSON.parse(document.body.textContent);
  //console.log(raw);
  document.body.textContent = "";
  document.title = "JSON Formatter";
  let ele = document.createElement("pre");
  ele.innerHTML = syntaxHighlight(JSON.stringify(raw, null, 4));
  document.body.appendChild(ele);

  GM.addStyle(`
    body { background-color: darkslategrey; }
    pre {  }
    .string { color: lime; }
    .number { color: darkorange; }
    .boolean { color: aqua; }
    .null { color: magenta; }
    .key { color: white; }
  `);
})();
