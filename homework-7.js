import { comments } from "./comments.js";

// №2

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = arrayNumbers.filter(num => num >= 5);

// №3

const films = ['Судная ночь', 'Судная ночь 2', 'Судная ночь 3', 'Интерстеллар', 'Бойцовский клуб'];
const checkSimilar = films.includes('Судная ночь');

console.log(checkSimilar);

// №4

const reverseArray = (array) => (array.reverse());

reverseArray(films);
reverseArray(filteredNumbers);

// №5,6,7

const onlyEmailComAUsers = comments.filter((user) => user.email.includes(".com"));

console.log(onlyEmailComAUsers);

// №8

const newArrayUsers = comments.map((user) => {
  return { ...user, postId: user.id <= 5 ? 2 : 1};
});

console.log(newArrayUsers);

// №9 посложнее вариант

const condensedInfoForUsers = comments.map(({ id, name }) => ({ id, name }));

console.log(condensedInfoForUsers);

// №9 попроще вариант

const condensedInfoForUsers2 = comments.map(user => {
  return { id: user.id, name: user.name };
});

console.log(condensedInfoForUsers2);

// №10

comments.forEach(user => {
  user.isInvalid = user.body > 180;
});

console.log(comments);

// №11 через reduce

const arrayEmailsUsingReduce = comments.reduce((array, { email }) => {
  array.push(email);
  return array;
}, []);

console.log(arrayEmailsUsingReduce);

// №11 через map

const arrayEmailsUsingMap = comments.map(user => user.email)

console.log(arrayEmailsUsingMap);

// №12

console.log(arrayEmailsUsingMap.join(', '));