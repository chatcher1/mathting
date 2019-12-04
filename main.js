function showAnswer() {
// Get the id of the answer col
answer = document.getElementsByClassName('answer');
// Change its display property to something aside from 'none'
for (var i = 0; i < answer.length; i++) {
  answer[i].style.display = 'block';
}


// Log a message to the console to make sure it all works!
console.log(`Made an answer visible for the user.`);

// Could you do the same thing yourself for the hide?
}
