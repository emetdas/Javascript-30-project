function pagePrint(paravalue) {
  var backup = document.body.innerHTML;
  var content = document.getElementById(paravalue).innerHTML;
  document.body.innerHTML = content;
  window.print();
  document.body.innerHTML = backup;
}
