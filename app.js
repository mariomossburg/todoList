let userInput = prompt("what would you like to do?");
const todos = ['buy pants', 'but watch battery'];

while(userInput !== 'quit' && userInput !== 'q'){
    if(userInput === 'list'){
        console.log('*******************');
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*******************');
    }else if(userInput === 'new'){
        const newTodo = prompt('ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }else if(userInput === 'delete'){
        const index = parseInt(prompt('ok, enter index to delete'));
        if(!Number.isNaN(index)){
        const deleted = todos.splice(index,1);
        console.log(`ok, deleted ${deleted[0]}`);
    }else{
        console.log('unknown index');
        }
    }
    userInput = prompt('what would you like to do?');
}
console.log('Ok, quit the app');