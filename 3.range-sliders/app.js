function useSliders() {
  const sliderOne = document.querySelector('#sliderOne');
  const sliderTwo = document.querySelector('#sliderTwo');
  const sliderThree = document.querySelector('#sliderThree');
  const sliderFour = document.querySelector('#sliderFour');
  return [sliderOne, sliderTwo, sliderThree, sliderFour];
}


window.addEventListener('DOMContentLoaded', function () {
  function updateColor() {
    const [redComponent, greenComponent, blueComponent, opacityComponent]
      = useSliders().map(slider => slider.nextElementSibling.querySelector('span').innerHTML);
    document.body.style.backgroundColor = `rgba(${redComponent}, ${greenComponent},${blueComponent}, ${opacityComponent})`;
  }

  function bindEventAndSetValue(slider) {
    slider.addEventListener('input', function (event) {
      slider.nextElementSibling.querySelector('span').innerHTML = this.value;
      updateColor();
    })
  }
  useSliders().forEach(bindEventAndSetValue);

});
