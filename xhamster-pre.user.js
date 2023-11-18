// ==UserScript==
// @name            xhamster-pre
// @version         1.0.0
// @license         MIT
// @author          James Johnson <james@jamesjohnson.io>
// @description     xhamster-pre
// @match           *://xhamster.com/*
// @match           *://xhamster2.com/*
// @run-at          document-end
// @noframes
// ==/UserScript==

(function () {
  addStyle(`
    .thumb-list {
      height: unset !important;
      width: unset !important;
      min-height: unset !important;
      margin: 0 !important;
    }
    .width-wrap { 
      max-width: unset !important;
    }
    .main-wrap {
      max-width: unset !important;
    }
    .hideo {
        display: none !important;
    }
    .video_container {
      margin: auto; 
      width: 90vw;
    }
  `);
})();
