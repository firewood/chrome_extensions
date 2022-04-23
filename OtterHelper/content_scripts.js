function main() {
  let now = new Date();
  let div = document.getElementsByClassName('sharing-overlay__close')[0]
  if (div) {
    let button = div.getElementsByTagName('button')[0];
    button.click();
  }
}

setInterval(main, 250);
