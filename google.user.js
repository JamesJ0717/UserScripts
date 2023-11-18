// ==UserScript==
// @name            Google search
// @version         1.0.0
// @match           https://www.google.com/search*
// @run-at          document-end
// ==/UserScript==

(function () {
  const params = location.search.split("&");
  let search = params[0].replace("?q=", "");
  console.log("google search: ", { params });

  const type = params.filter((a) => a.includes("tbm="))[0]?.replace("tbm=", "");
  let filterTime = 240;

  switch (type) {
    case "vid":
      document.querySelectorAll(".JIv15d").forEach((a) => {
        let time = a.innerText.split(":")[0] * 60 + a.innerText.split(":")[1] * 1;
        if (time < filterTime) {
          let el = a;
          while (el.parentNode) {
            el = el.parentNode;
            if (el.className == "MjjYud") el.remove();
          }
        }
      });
    default:
      break;
  }

  window.addStyle(`
    .my-grid {
      display: grid; 
      grid-template-columns: auto auto; 
      grid-gap: 4%;
    }
  `);

  document.querySelector("#rcnt").style = "max-width: unset;";
  document.querySelector("#center_col").style = "width: 100%; margin-left: 8rem; margin-right: 8rem;";
  document.addEventListener("scroll", gridify);

  function gridify() {
    if (!window.mobileCheck()) {
      document.querySelectorAll("#rso").forEach((a) => a.classList.add("my-grid"));
      document.querySelectorAll("#tvcap").forEach((a) => a.parentElement.classList.add("my-grid"));
    }
  }
})();
