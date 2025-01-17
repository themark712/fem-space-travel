const tabsList = document.querySelector('[role="tablist"]');
const tabs = tabLists.querySelectorAll('[role="tab"]');

tabsList.addEventListener('keydown', (e) => {
  const keydownLeft = 37;
  const keydownRight = 39;

  let tabFocus = 0;

  // change the tabindex of the current tab to -1
  if (e.keycode === keydownLeft || e.keycode === keydownRight) {
    tabs[tabFocus].setAttribute("tablindex", -1);
  }

  // if the right key is pushed, move to the next tab on the right
  if(e.keycode === keydownRight) {
    tabFocus++;
  }

  // if the left key is pushed, move to the next tab on the left
  if(e.keycode === keydownLeft) {
    tabFocus--;
  }
});