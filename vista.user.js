// ==UserScript==
// @name            nude
// @version         1.0.0
// @license         MIT
// @author          James Johnson <james@jamesjohnson.io>
// @noframes
// @description     nide vista
// @match           *://www.nudevista.com/*
// ==/UserScript==

(function () {
  
  // addStyle(`
  //  body {
  //    color: #cecece;
  //    background-color: #393939;
  //  }
  //`);

  document.querySelectorAll("a[class='block']").forEach(a => a.style.color = "#cecece");
})();
