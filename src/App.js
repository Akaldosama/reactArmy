import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  // const [countStep, setCountStep] = useState(0);
  // const [sizeStep, setSizeStep] = useState(0);
  // const [addCounter, setCounter] = useState([1, 2, 3, 4]);
  // const [boolean, setBoolean] = useState(false);
  const [agreeText, setAgreeText] = useState("");
  let [list, setList] = useState([
    {
      id: 1,
      name: "John",
      last: "Smith",
      age: 18,
      dept: 100,
      city: "Chicago",
      state: "IL",
      salary: 1000,
    },
    {
      id: 2,
      name: "Jane",
      last: "Doe",
      age: 16,
      dept: 100,
      city: "Phoenix",
      state: "AZ",
      salary: 5000,
    },
    {
      id: 3,

      name: "Mary",
      last: "Smith",
      age: 26,
      dept: 200,
      city: "Chicago",
      state: "IL",
      salary: 2500,
    },
    {
      id: 4,
      name: "George ",
      last: "Edwards",
      age: 17,
      dept: 300,
      city: "NewYork",
      state: "AZ",
      salary: 3000,
    },
  ]);

  const handleOptionChange = (e) => {
    if (e.target.value === "yes") {
      setAgreeText("You are agree");
    } else {
      setAgreeText("You aren't agree");
    }
  };

  const getArmy = () => {
    let army = list.filter((item) => item.age >= 18);
    setList(a => a = army)
  };

  // function addItem() {
  //   setCounter([...addCounter, 1]);
  // }
  // function plusFunc(index) {
  //   addCounter[index] += 1;
  //   setCounter([...addCounter]);
  // }
  // function minusFunc(index) {
  //   addCounter[index] -= 1;
  //   setCounter([...addCounter]);
  // }
  // function Filter(){
  //   let result = addCounter.filter((item) => item % 2 !== 0)
  //   setCounter([...result])
  // }

  // function Boolean() {
  //   setBoolean(boolean ? 'Welcome' : 'Login')
  // }

  return (
    <div>
      <input
        type="radio"
        id="yes"
        name="agree"
        value="yes"
        onChange={handleOptionChange}
      />
      <label htmlFor="yes">Yes</label>
      <input
        type="radio"
        id="no"
        name="agree"
        value="no"
        onChange={handleOptionChange}
      />
      <label htmlFor="no">No</label>
      <p>{agreeText}</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={getArmy}>Armiyaga qabul qlw</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Dept_number</th>
            <th>City</th>
            <th>State</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
          list.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.last}</td>
                <td>{item.age}</td>
                <td>{item.dept}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.salary}</td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </div>

    // <div className="wrapper">
    //   <div className="container">
    //     <h1>{countStep} metr</h1>
    //     <button onClick={() => setCountStep((prev) => prev + sizeStep)}>
    //       Step
    //     </button>
    //     <br />
    //     <h1>Size of Step: {sizeStep} metr</h1>
    //     <button onClick={() => setSizeStep((prev) => prev + 1)}>
    //       Step Size
    //     </button>
    //   </div>

    //   <div className="container">
    //     <button onClick={() => addItem(1)}>ADD COUNTER</button>
    //     <button onClick={Filter}>Filter</button>
    //     {addCounter.map((item, index) => {
    //       return (
    //         <div>
    //           <span className="d-flex gap-2">
    //             <button onClick={() => plusFunc(index)}>+</button>
    //             <p>{item}</p>
    //             <button onClick={() => minusFunc(index)}>-</button>
    //           </span>
    //         </div>
    //       );
    //     })}
    //   </div>
    //   <div className="container">
    //     <button onClick={() =>Boolean(prev => !prev)}>Login</button>
    //   </div>
    // </div>
  );
}
