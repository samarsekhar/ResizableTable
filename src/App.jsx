import React from "react";
import Table from "./Components/Table";
import "./App.css";

const App = () => {
  const dummyData = [
    {
      column1: "Sam",
      column2: "sam@gmail.com",
      column3: "+91 7878990088",
      column4: "Odisha",
      column5: "Bhubaneswar",
      column6: "751006",
      column7: "India",
    },
    {
      column1: "Swetha",
      column2: "swetha@gamil.com",
      column3: "+91 7897679900",
      column4: "Odisha",
      column5: "Bhubaneswar",
      column6: "751006",
      column7: "India",
    },
    {
      column1: "Ram",
      column2: "ram@gmail.com",
      column3: "+91 9988090988",
      column4: "Karnataka",
      column5: "Bangalore",
      column6: "560075",
      column7: "India",
    },
    {
      column1: "Shreenath",
      column2: "shreenath@gmail.com",
      column3: "+91 6798980077",
      column4: "Karnataka",
      column5: "Bangalore",
      column6: "560075",
      column7: "India",
    },
    {
      column1: "Nagendra",
      column2: "nagendra@gmail.com",
      column3: "+91 8978009923",
      column4: "Karnataka",
      column5: "Bangalore",
      column6: "560075",
      column7: "India",
    },
    {
      column1: "Parjil",
      column2: "parjil@gmail.com",
      column3: "+91 8877090944",
      column4: "Kerla",
      column5: "Kagadashpuram",
      column6: "670001",
      column7: "India",
    },
    {
      column1: "Anissa",
      column2: "anissa@gmail.com",
      column3: "+91 6778990036",
      column4: "Odisha",
      column5: "Bhadrak",
      column6: "756127",
      column7: "India",
    },
    {
      column1: "Soheb",
      column2: "soheb@gmail.com",
      column3: "+91 7787669034",
      column4: "Odisha",
      column5: "Puri",
      column6: "752001",
      column7: "India",
    },
    {
      column1: "Virat",
      column2: "virat@gmail.com",
      column3: "+91 9987679034",
      column4: "Odisha",
      column5: "Bhadrak",
      column6: "752001",
      column7: "India",
    },
    {
      column1: "Rohit",
      column2: "rohit@gmail.com",
      column3: "+91 9007679034",
      column4: "Maharashtra",
      column5: "Mumbai",
      column6: "632001",
      column7: "India",
    },
  ];

  return (
    <div className="App">
      <h1>Resizable Table with Sticky Columns</h1>
      <Table data={dummyData} />
    </div>
  );
};

export default App;
