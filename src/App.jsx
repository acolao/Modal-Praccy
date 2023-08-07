import { useState } from "react";
import useModal from "./components/useModal";
import Modal from "./components/modal";
import "./App.css";
import Auth from "./components/Auth";
import inputForm from "./components/inputForm";

function App() {
  const[isShowingModal, toggleModal] = useModal();

  return (
    <div className="App">
      <Modal show={isShowingModal} oncCloseButtonClick={toggleModal} />
      <div className="button" onClick={toggleModal}>Open Modal</div>
      <div className="button button-smaller" onClick={toggleModal}>Another Button</div>
    </div>
  );
}

function Form() {
  return <Form />;
}

export default App;