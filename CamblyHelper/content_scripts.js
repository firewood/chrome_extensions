function main() {
  let d = document.getElementsByClassName('container-fluid');
  d[0].style.minHeight = 0;
  d = document.getElementsByClassName('container');
  if (d[1] && d[1].getElementsByClassName('MuiTypography-root')[0]) {
    d[1].style.display = "none";
  }
}

setTimeout(main, 2000);
