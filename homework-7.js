// №2

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArrayNumbers = arrayNumbers.filter(num => num >= 5);

// №3

const films = ['Судная ночь', 'Судная ночь 2', 'Судная ночь 3', 'Интерстеллар', 'Бойцовский клуб'];
const checkSimilar = films.includes('Судная ночь');

console.log(checkSimilar);

// №4

const reverseArray = (array) => (console.log(array.reverse()));

reverseArray(films);
reverseArray(newArrayNumbers);

// №5,6,7

import { infoForUsers } from "./comments.js";

const onlyEmailComAUsers = infoForUsers.filter((user) => user.email.includes(".com"));

console.log(onlyEmailComAUsers);

// №8

const newArrayUsers = infoForUsers.map((user) => {
  return { ...user, postId: user.id <= 5 ? 2 : 1};
});

console.log(newArrayUsers);

// №9 посложнее вариант

const condensedInfoForUsers = infoForUsers.map(({ id, name }) => ({ id, name }));

console.log(condensedInfoForUsers);

// №9 попроще вариант

const condensedInfoForUsers2 = infoForUsers.map(user => {
  return { id: user.id, name: user.name };
});

console.log(condensedInfoForUsers2);

// №10

infoForUsers.forEach(user => {
  user.isInvalid = user.body > 180 ? "true" : "false";
})

console.log(infoForUsers);

// №11 через reduce

const arrayEmails = infoForUsers.reduce((array, { email }) => {
  array.push(email)
  return array;
},[]);

console.log(arrayEmails);

// №11 через map

const arrayEmails2 = infoForUsers.map(user => user.email)

console.log(arrayEmails2);

// №12

console.log(arrayEmails.join(', '));