window.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  populateZeros();
  doEventBindings();
}

function populateZeros() {
  const spans = document.querySelectorAll('span');
  spans.forEach(span => span.innerHTML = 0);
}

function computeSalary () {
  document.querySelector('#details__info').style.display = 'none';
  const inputSalary = document.querySelector('#salary').value;

  if (inputSalary.trim().length === 0) {
    document.querySelector('#message').innerHTML = "Please enter an amount";
    return;
  } else if (!/\d/.test(parseFloat(inputSalary))) {
    document.querySelector('#message').innerHTML = "Only digits are allowed";
    return;
  }

  salaryOps.setTakeAwaySalary(parseFloat(inputSalary));
  document.querySelector('#details__info').style.display = 'block';
  printResult();
}

function printResult() {
  for (let key in salaryOps) {
    if (key === 'salary') {
      continue;
    }
    if (typeof salaryOps[key] === "function") {
     if (key === 'setTakeAwaySalary') {
       continue;
      }
      document.querySelector(`#${key}`).innerHTML = salaryOps[key]();
    }
  }
}

function doEventBindings () {
  document.querySelector('#compute').addEventListener('click',computeSalary);
}
