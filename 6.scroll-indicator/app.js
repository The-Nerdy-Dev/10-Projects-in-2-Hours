window.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  doEventBindings();
}

function changeProgress() {
  const unitsScrolledFromTop = document.body.scrollTop;
  const height = document.body.scrollHeight - document.body.clientHeight;
  console.log("Client Height", document.body.clientHeight);
  console.log("Scroll Height", document.body.scrollHeight);
  console.log(unitsScrolledFromTop, height);
  const percentageScrolled = (unitsScrolledFromTop / height) * 100;
  document.querySelector('#bar').style.width = `${percentageScrolled}%`;

}

function doEventBindings() {
  window.addEventListener('scroll', changeProgress);
}
