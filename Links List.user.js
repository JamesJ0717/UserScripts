// ==UserScript==
// @name            Links List
// @version         1.0.0
// @license         MIT
// @author          James Johnson <james@jamesjohnson.io>
// @description     List all links on a page
// @run-at          document-idle
// @match           *://*/*
// @noframes
// ==/UserScript==

(function () {
  addStyle(`
    .links-list__button {
      position: fixed;
      bottom: 0;
      right: 1rem;
      border: 1px solid red;
      height: 32px;
      width: 32px;
      z-index: 11;
    }

    .links-list__modal {
      position: absolute;
      top: 0;
      background: rgba(89, 88, 88, .88);
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      z-index: 10;
    }

    .links-list__modal-content {
      background: white;
      height: 80vh;
      width: 80vw;
      margin: auto;
    }

    .hidden {
      display: none;
    }
  `);

  let button = document.createElement("div");
  button.className = "links-list__button";
  button.onclick = (e) => {
    e.preventDefault();
    document.querySelector("#links-list__modal").classList.toggle("hidden");
  };

  let modal = document.createElement("div");
  modal.className = "links-list__modal hidden";
  modal.id = "links-list__modal";

  let content = document.createElement("div");
  content.className = "links-list__modal-content";

  let list = document.createElement("ul");
  list.className = "links-list__list";
  for (let i = 0; i < 10; i++) {
    let item = document.createElement("li");
    item.textContent = i.toFixed(1);
    list.append(item);
  }
  content.append(list);
  modal.append(content);
  document.body.append(modal);
  document.body.append(button);
})();
