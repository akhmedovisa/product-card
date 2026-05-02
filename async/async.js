function getDataLocalStorage() {
  const user = JSON.parse(localStorage.getItem('users')) || [];
  return user;
}

function setDataLocalStorageAndRender(array) {
  localStorage.setItem('users', JSON.stringify(array));
  
  renderUserCards(array);
}

async function fetchUsers() {
  const responce = await fetch('users.json');
  if (!responce.ok) {
    throw new Error('Ошибка при загрузке данных');
  }
  return await responce.json(); // responce.json() - (метод fetch()) - то же самое, что и JSON.parse(responce)
};

// Делаем запрос данных

const userCardTemplate = document.querySelector('.user-info');
const userCardWrapper = document.querySelector('.user-card-wrapper');
const status = document.querySelector('.download-status');

async function loadData() {
  try {
    let users = JSON.parse(localStorage.getItem('users'))
    
    if (users && users.length) {
      status.remove();
      renderUserCards(users);
      return;
    }
    
    status.textContent = 'Данные загружаются...';
    
    users = await fetchUsers();
    
    localStorage.setItem('users', JSON.stringify(users));
    
    status.textContent = 'Данные загружены !';
    
    renderUserCards(users);
    
    setTimeout(() => {
      status.remove();
    },1000)

  } catch (err) {
    status.textContent = 'Ошибка при загрузке данных(';
    console.error(err)
  }
};

function renderUserCards(users) {

  userCardWrapper.innerHTML = '';

  users.forEach((userCard) => {

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
      deleteUserCard(userCard.id)
    });
    
    userCardWrapper.appendChild(clone);
  });
};

function deleteUserCard(id) {
  const user = JSON.parse(localStorage.getItem('users'));
  
  const updatedUsersCard = user.filter(user => user.id !== id);
  
  setDataLocalStorageAndRender(updatedUsersCard);
};

const error = document.querySelector('.error-message');

function showMessage(text, type = 'error-message') {
  
  error.style.display = 'block';
  error.textContent = text;

  error.className = type;

  setTimeout(() => {
    error.style.display = 'none';
  }, 2000);
}

const deleteAllBtn = document.getElementById("delete-all-cards-btn");

deleteAllBtn.addEventListener('click', () => {
  
  try {
    if (getDataLocalStorage().length === 0) {
      throw new Error('Все пользователи уже удалены');
    };
    
    setDataLocalStorageAndRender([])
    
    showMessage('Все пользователи успешно удалены', 'success')
  }
  catch (err) {
    console.error(err);
    showMessage(err.message);
  }
});

const getAllBtn = document.getElementById('get-all-cards-btn');

getAllBtn.addEventListener('click', async () => {
  
  try {
    const userData = await fetchUsers();
    
    if (getDataLocalStorage().length === userData.length) {
      throw new Error('Все пользователи уже отображаются');
    };
    
    setDataLocalStorageAndRender(userData)
    
    showMessage('Все пользователи успешно восстановлены', 'success');
  } 
  catch (err) {
    console.error(err);
    showMessage(err.message);
  }
});

loadData();