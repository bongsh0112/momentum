const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");  //const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

localStorage.getItem(TODOS_KEY);

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify : array 등의 모든 컨텐츠들을 string 화 시킴. JSON.parse : 원래 자료형으로 되돌림.
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    // 방금 click(event)된 li의 id와 다른 것들만 true를 리턴함. 따라서 삭제하고자 하는 li만 제외됨. parseInt를 쓰는 이유는 li.id가 string이므로
    saveToDos();
}


function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodoObj.text;   
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj =  {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); //submit eventlistener가 event라는 인자를 제공해주는것처럼

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) { // savedToDos != null
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;  // 페이지가 시작될때 7번 라인에서 보이듯이 []로 출발하므로 savedToDos가 있다면 parsedToDos를 쓰는 array(toDos)에 넣어줌.
    parsedToDos.forEach((item) => {   //array의 매 element들마다 function 적용 / arrow function -> 함수이름을 정하지 않고 인라인으로 사용함.
        paintToDo(item);  //parsedToDos가 array 형식인데 array는 실행될때마다 item에 대해 function을 한번씩만 쓸 수 있게 해줌. array는 매우 똑똑한 자료구조이다.
                          //JS는 지금 처리되고 있는 item에 대해 인자를 제공한다. 그래서 forEach가 어느 item에 사용되고 있는지 알기 때문에 arrow function이 item으로 argument를 받아도 된다는 것이다.
    }); 
    //forEach(paintToDo)로 써도 되는데, parsedToDos가 array이기 때문에 forEach에서 현재 사용하는 item에 대해 저장하기 때문이다.
}

//filter함수 사용시 주의점
//filter(filter 할 것들의 기준이 되는 함수를 집어넣는다.)
//function sexyFilter(item) { return item === ??? } => item이 ???이라면 true를, 그게 아니라면 false를 return 한다.
//filter할 element.filter(sexyFilter)를 하면 filter가 되는데, sexyFilter의 argument는 자동으로 element로 지정된다.
//const arr = [1, 2, 3, 4]; arr.filter(item => item > 2)
//const newArr = arr.filter(item => item > 2)
//arr과 newArr은 다르다! filter에는 인자로 넘겨준 배열의 복사본이 들어간다!