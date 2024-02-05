// ==UserScript==
// @name            AST
// @version         1.0.0
// @license         MIT
// @author          James Johnson <james@jamesjohnson.io>
// @noframes
// @description
// @match           *://www.ashemaletube.com/*
// ==/UserScript==

(function () {
  addStyle(`
    .base-container {
      max-width: 95vw !important;
    }
  `);
  document.body.style = "width: 100vw;";
})();
