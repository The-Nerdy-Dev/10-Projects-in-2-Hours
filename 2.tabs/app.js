window.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  const tabs = new Tabs(document.querySelector('.container'));
  tabs.doEventBindings();
}

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabButtons = Array.from(container.querySelectorAll('.trigger'));
    this.activateTabAndShowItsContent = this.activateTabAndShowItsContent.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }
  handleTabChange(event) {
    // console.log(event.which);
    if (event.which === 9) {
      this.activateTabAndShowItsContent(event);
    }
  }
  doEventBindings() {
    this.tabButtons.forEach(tabButton => {
      tabButton.addEventListener('click', this.activateTabAndShowItsContent);
      tabButton.addEventListener('keyup', this.handleTabChange);
    });
  }
  activateTabAndShowItsContent(event) {
    // this.tabButtons.forEach(tabButton => tabButton.classList.remove('active'));
    // 2nd way
    this.container.querySelector('button.active').classList.remove('active');
    event.currentTarget.classList.add('active');
    // this.container.querySelectorAll('.content').forEach(tabDiv => {
    //   tabDiv.classList.remove('active');
    // })
    // 2nd way
    this.container.querySelector('div.active').classList.remove('active');
    const selector = event.currentTarget.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.add('active');
  }
}
