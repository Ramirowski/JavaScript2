const watch = document.getElementById('watch');
setInterval(function() {
  let date = new Date();
  watch.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);
