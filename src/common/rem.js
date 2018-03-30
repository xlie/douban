(function(global) {
  function remChange() {
    document.documentElement.style.fontSize = 100 * document.documentElement.clientWidth / 750 + 'px';
    // document.getElementsByTagName("body")[0].style.height = document.documentElement.clientHeight +"px";
  }
  ;
  remChange();
  global.addEventListener('resize', remChange, false);
})(window);
