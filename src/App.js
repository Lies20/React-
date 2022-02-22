import React from "react";
import './App.css';
import { Steps } from "./components/Steps";
import './Styles/global.css'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax =100
const stepsMin = 0
const stepsMax = 50000

 export default function App() {
    return (
      <div class='container-fluid'>
          <div class='row'>
              <Steps></Steps>
              <p> heart : {heartMin}</p>
              <p> temperature : {tempMin}</p>
              <p> steps : {stepsMin}</p>
          </div>
       
      </div>
    );
}
