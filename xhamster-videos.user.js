// ==UserScript==
// @name            xhamster-videos
// @version         1.0.0
// @license         MIT
// @author          James Johnson <james@jamesjohnson.io>
// @description     xhamster-videos
// @match           *://xhamster.com/videos/*
// @match           *://xhamster2.com/videos/*
// @run-at          document-idle
// @weight          50
// @noframes
// ==/UserScript==

(function () {
  let userAgent = navigator.userAgent;
  console.log(userAgent);

  addStyle(`
    .thumb-list__item {
      width: 25% !important;
    }
    .video-thumb__image-container {
      width: 100% !important;
      height: unset !important;
    }
  `);

  let a;
  if (mobileCheck()) {
    let container;
    if (!userAgent.includes("iPad")) {
      container = document.querySelector(".video_container");
    } else {
      container = document.querySelector(".player-container");
    }
    let raw = container.querySelector("noscript").innerText;
    let url = raw.substring(raw.indexOf("https://"), raw.indexOf('" poster'));
    let fallback = container.querySelector("video").source;

    console.log({ raw, url, fallback });
    a = url;
  } else {
    a = document.querySelector(".player-container__no-player").href;
    let k = document.querySelector(".large-mode");
    if (k.getAttribute("data-xp-tooltip") == "Enter large mode" || k.getAttribute("data-xp-tooltip") == "Large mode") {
      k.click();
    }
    document.querySelector(".player-container__player").style.height = "90vh";
    document.querySelector(".player-container__player").querySelector("video").load();
  }
  let link = document.createElement("a");
  link.href = a;
  link.target = "_blank";
  let icon = document.createElement("i");
  icon.className = "xh-icon anchor-link cobalt-dark";
  let text = document.createElement("span");
  text.innerText = "Open";
  link.append(icon, text);
  if (mobileCheck()) {
    document.querySelector(".page-video-header__title-views").after(link);
  } else {
    document.querySelector(".header-icons").append(link);
  }
  document.querySelectorAll("[class*='yld']").forEach((b) => b.remove());
  document.querySelectorAll("[data-role*='yld']").forEach((b) => b.remove());
})();
