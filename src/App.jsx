import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <>
      <div className='container mx-auto mt-32 '>
        <Header />
      </div>

      <Form />
      <ListadoPacientes />

    </>
  );
}

export default App;
