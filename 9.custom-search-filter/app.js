window.addEventListener('DOMContentLoaded', initializeApp);

const list = document.querySelector('.list');
const searchInput = document.querySelector('#search');
const span = document.querySelector('span');
const form = document.querySelector('form');

function initializeApp () {
  doEventBindings();
}

const filterThings = (event) => {
  const term = event.target.value.toLowerCase();
  const things = document.querySelectorAll('li');
  things.forEach(thing => {
    const thingTitle = thing.firstElementChild.textContent;
    if (thingTitle.toLowerCase().indexOf(term) != -1) {
      thing.style.display = 'block';
    } else {
      thing.style.display = 'none';
    }
  });
}

function deleteThing(event) {
  // console.log(event.target.tagName);
  if (event.target.tagName === "BUTTON") {
    // button -> li -> ul
    event.target.parentElement.parentElement.remove();
  }
  if (list.children.length === 0) {
     span.style.display = 'block';
  }

}


function createThing (event) {
  event.preventDefault();
  const thingName = document.querySelector('#thing').value;
  if (thingName.trim().length === 0) return;
  let html = `
    <li class="thing">
      <span className="thingName">
      ${thingName}
      <button>Delete Thing</button>
      </span>
    </li>
  `;
  list.innerHTML += html;
  span.style.display = 'none';
  document.querySelector('#thing').value = '';
}

function doEventBindings() {
  // Filter Things
  searchInput.addEventListener('keyup', filterThings);
  // Creating a thing
  form.addEventListener('submit', createThing);
  // Deleting a thing
  list.addEventListener('click', deleteThing);
}
