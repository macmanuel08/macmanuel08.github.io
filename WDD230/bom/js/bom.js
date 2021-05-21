const input = document.querySelector("#fav");
const output = document.querySelector(".addlist");
const button = document.querySelector("button");

button.addEventListener('click', () => {
    if (input.value != '' ) {
        // Create the elements in the list
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');

        // Change some properties' text content
        li.textContent = input.value;
        deletebutton.textContent = '❌';

        // add button to the li
        li.append(deletebutton);
        output.append(li);
        deletebutton.addEventListener('click', () => {
            output.removeChild(li);
            input.focus;
        });
        input.value = '';
        input.focus;
    }
});
