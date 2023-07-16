/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, 
and a string. The function should return the first object with the key of username that matches the string 
passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
return usersArray.find(function(val) {
   return val.username === username;
});
}
//console.log(findUserByUsername(users, 'mlewis'))



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//ite a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. 
//e function should remove the  object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

//removeUser(users, 'akagen') // {username: 'akagen'}
//removeUser(users, 'akagen') // undefined


function removeUser(usersArray, username) {
  const index = usersArray.findIndex(function(val){
    return val.username === username;
  });
  if (index !== -1) {
    return usersArray.splice(index, 1)[0];  //have to use index 0 because it's the first index returned by the operation
  } else {
    return undefined;
  }
}
console.log(removeUser(users, 'akagen'));
//did not need to create a new array with .map.....
    //return val.username === username;

 