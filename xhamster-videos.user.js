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
  }
  let link = document.createElement("a");
  link.href = a;
  link.target = "_blank";
  link.innerText = "Open in New Tab";
  let para = document.createElement("p");
  para.append(link);
  mobileCheck()
    ? ipadCheck()
      ? document.querySelector(".header-icons").after(para)
      : document.querySelector(".page-video-header__title-views").after(para)
    : document.querySelector(".header-icons").after(para);

  document.querySelectorAll("[class*='yld']").forEach((b) => b.remove());
  document.querySelectorAll("[data-role*='yld']").forEach((b) => b.remove());
})();
