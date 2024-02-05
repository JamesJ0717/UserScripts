// ==UserScript==
// @name        bingo
// @description This is your new file, start writing code
// @match       https://gay.bingo/*
// @match       *://shemale.movie/*
// @run-at      document-idle
// @
// ==/UserScript==
(function () {
  const page = location.pathname.split("/").filter((a) => a.length >= 1)[0];
  addStyle(`
    body {
      background-color: #888888 !important;
    }
  `);
  console.log({ page });
  switch (page) {
    case "video":
      let source = document.querySelector("#player > source").src; //#player > source
      let log = document.createElement("a");
      log.href = source;
      log.target = "_blank";
      log.textContent = "Watch here";
      // log.style.display = "none";

      addStyle(`
        .video-page {
          padding: 0 !important;
        }
      `);

      let wrap = document.createElement("div");
      wrap.style.padding = "1rem";

      //document.querySelector(".fluid_video_wrapper").style = "width: 100vw; height: 95vh; background-color: #2d2d2d;";

      let title = document.createElement("h1");
      title.textContent = document.querySelector("title").text.split(" - ")[0];
      wrap.append(title);

      // let inps = document.getElementsByTagName("input");
      // let pre = document.createElement("pre");
      // pre.style.display = "none";
      // let code = document.createElement("code");
      // code.id = "json";
      // for (let i of inps) {
      //   if (i.value.includes("guid")) {
      //     code.innerText = JSON.stringify(JSON.parse(i.value), undefined, 4);
      //   }
      // }
      // pre.appendChild(code);
      console.log("52");

      let section = document.querySelector(".player-section__player-wrapper");
      section.className = "bingo";
      [...section.childNodes].forEach((a) => {
        console.log(a);
        // a.remove();
      });
      section.append(log);
      section.append(wrap);
      // section.append(pre);
      console.log("61");

      document.querySelectorAll("div[data-title='Advertisement']").forEach((h) => h.remove());
      document.querySelectorAll("video[loop='loop']").forEach((a) => a.setAttribute("autoplay", false));
      document.querySelector(".outstream-adv").remove();
      break;

    default:
      break;
  }
})();
