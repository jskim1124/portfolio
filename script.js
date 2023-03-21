const addProjectButton = document.querySelector('#add-project-button');
const projectTableBody = document.querySelector('table tbody');

addProjectButton.addEventListener('click', () => {
  const projectNameInput = document.querySelector('#project-name-input');
  const dateInput = document.querySelector('#date-input');
  const descriptionInput = document.querySelector('#description-input');
  
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${projectNameInput.value}</td>
    <td>${dateInput.value}</td>
    <td>${descriptionInput.value}</td>
  `;
  
  projectTableBody.appendChild(newRow);
});