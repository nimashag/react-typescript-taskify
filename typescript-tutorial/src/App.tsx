import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

// let name: string; 
// let age: number | string;  //this is union
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// let printName: (name: string) => never; // never means this won't give output. if we put the 'void' .it means it will give any kind of output.

// function printName(name: string) {
//   console.log(name);
// }

// printName("Piyush");

// type Person = {
//   name: string;
//   age?: number;  // "age?" kiyla danne optional kiyla kiynna.apit ethkota person define krddi age kiyna variable eka aniwaryn dnna one na.
// };
 
// let person: Person = {
//   name: "Piyush",
// };

// let lotOfPeople: Person[];



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
