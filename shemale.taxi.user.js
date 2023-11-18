// ==UserScript==
// @name            shemale.taxi
// @version         1.0.0
// @license         MIT
// @author          James Johnson <james@jamesjohnson.io>
// @description     shemale taxi
// @match           https://shemale.taxi/video/*
// ==/UserScript==

(function () {
  window.addStyle(`
    .me-vid {
      width: auto;
      height: 95vh;
    }
  `);

  let wrap = document.querySelector(".player__video-wrapper");
  let vid = wrap.querySelector("video");
  let a = vid.querySelector("source").src;
  wrap.remove();

  let newVid = document.createElement("video");
  newVid.setAttribute("src", a);
  newVid.setAttribute("controls", true);
  newVid.classList.add("me-vid");
  document.querySelector(".player__wrapper").append(newVid);
  console.log("vid", vid);
})();
