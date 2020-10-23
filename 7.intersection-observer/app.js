window.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp () {
  const observer = new IntersectionObserver(entries => {
    console.log(entries);
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      setInterval(() => {
        addItems();
      }, 2000);
    })
  });
  observer.observe(document.querySelector('#end_of_page'));
  addItems();
}

const count = 10;
let index = 0;

function addItems() {
  const fragment = document.createDocumentFragment();
  for (let i = index + 1; i <= index + count; ++i){
    const item = document.createElement('div');
    item.classList.add('lg:w-1/4', 'md:w-1/2', 'p-4', 'w-full');
    item.innerHTML = `
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
    `;
    fragment.appendChild(item);
  }
  document.querySelector('#item-holder').appendChild(fragment);
  index += count; 
}
