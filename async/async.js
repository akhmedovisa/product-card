// Делаем запрос данных

const userCardTemplate = document.querySelector('.user-info');
const userCardWrapper = document.querySelector('.user-card-wrapper');
const status = document.querySelector('.download-status');

async function loadData() {
  
  let users = JSON.parse(localStorage.getItem('users'))
  
  if (users && users.length) {
    if (status) {
      status.remove();
    }
    renderUserCards(users);
    return;
  }
  
  status.textContent = 'Данные загружаются...';
  setTimeout(async () => {
    try {
      const responce = await fetch('users.json');
      const userData = await responce.json(); // responce.json() - (метод fetch()) - то же самое, что и JSON.parse(responce)

      localStorage.setItem('users', JSON.stringify(userData));

      status.textContent = 'Данные загружены !';

      renderUserCards(userData)
      setTimeout(() => {
        status.remove();
      },1000)
    }
    catch (error) {
      status.textContent = 'Ошибка при загрузке данных ('
      throw new Error("Ошибка при загрузке данных (");
    }
  }, 5000)
};

function renderUserCards(users) {

  userCardWrapper.innerHTML = '';

  users.forEach((userCard, i) => {

    const clone = userCardTemplate.content.cloneNode(true);


    clone.querySelector('.user__id').textContent = `ID: ${userCard.id}`;
    clone.querySelector('.user__name').textContent = `Name: ${userCard.name}`;
    clone.querySelector('.user__surname').textContent = `SurName: ${userCard.surname}`;
    clone.querySelector('.user__email').textContent = `Email: ${userCard.email}`;
    clone.querySelector('.user__age').textContent = `Age: ${userCard.age}`;
    clone.querySelector('.user__city').textContent = `City: ${userCard.city}`;
    clone.querySelector('.user__status-active').textContent = `Active: ${userCard.isActive}`;

    const deleteBtn = clone.querySelector('#delete-card');
    
    deleteBtn.addEventListener('click', () => {
      let userFromStorage = JSON.parse(localStorage.getItem('users'));

      userFromStorage.splice(i, 1);

      localStorage.setItem('users', JSON.stringify(userFromStorage));

      renderUserCards(userFromStorage);
    });
    
    userCardWrapper.appendChild(clone);
  });
};

const error = document.querySelector('.error-message');

function showMessage(text, type = 'error') {
  
  error.style.display = 'block';
  error.textContent = text;

  error.className = type;

  setTimeout(() => {
    error.style.display = 'none';
  }, 3000);
}

const deleteAllBtn = document.getElementById("delete-all-cards-btn");

deleteAllBtn.addEventListener('click', () => {
  
  try {
    if (localStorage.getItem('users') === '[]') {
      throw new Error('Все пользователи уже удалены');
    };
    
    localStorage.setItem('users', JSON.stringify([]));
    
    renderUserCards([]);
    
    showMessage('Все пользователи успешно удалены', 'succes')
  }
  catch (err) {
    console.error(err);
    showMessage(err.message);
  }
});

const getAllBtn = document.getElementById('get-all-cards-btn');

getAllBtn.addEventListener('click', async () => {
  
  try {
    const response = await fetch('./users.json');
    const userData = await response.json();
    
    if (JSON.parse(localStorage.getItem('users')).length === userData.length) {
      throw new Error('Все пользователи уже отображаются');
    };
    
    localStorage.setItem('users', JSON.stringify(userData));
    
    renderUserCards(userData);
    
    showMessage('Все пользователи успешно восстановлены', 'succes');
  } 
  catch (err) {
    console.error(err);
    showMessage(err.message);
  }
});

loadData();