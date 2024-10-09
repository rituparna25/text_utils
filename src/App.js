import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';
import Accordion from './components/Accordion';
import React, {useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() 
{
  const [mode,setMode] = useState("light");//whether dark mode is enabled or not
  const [btnMode, setbtnMode] = useState("dark");
  const [color,setColor] = useState("white");
  const [alert, setalert] = useState(null);


  const showAlert = (message,type) => {
      setalert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setalert(null);
      },3000)
  }

  const enableGreyDark = () => {
    if(mode === "light")
      {
        setMode("dark");
        setbtnMode("secondary");
        setColor("#303030");
        document.body.style.backgroundColor="#303030";
        document.body.style.color="white";
        showAlert("Dark Mode has been enabled","success");
      }
      else
      {
        setMode("light");
        setbtnMode("primary");
        setColor("white");
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        showAlert("Light Mode has been enabled","success");
      }
  }

  const customTheme = (event) => 
  {
    const theme = event.target.getAttribute("data-theme");
    if(theme==="danger")
      {
        setMode("dark");
        setbtnMode("danger");
        setColor("#880808");
        document.body.style.backgroundColor="#880808";
        document.body.style.color="white";
        showAlert("Red Mode has been enabled","success");
      }
      else if(theme==="success")
      {
        setMode("dark");
        setbtnMode("success");
        setColor("#006600");
        document.body.style.backgroundColor="#006600";
        document.body.style.color="white";
        showAlert("Green Mode has been enabled","success");
      }
      else if(theme==="warning")
      {
        setMode("dark");
        setbtnMode("warning");
        setColor("#C49102");
        document.body.style.backgroundColor="#C49102";
        document.body.style.color="white";
        showAlert("Yellow Mode has been enabled","success");
      }
      else if(theme==="primary")
        {
          setMode("dark");
        setbtnMode("primary");
        setColor("#002D62");
        document.body.style.backgroundColor="#002D62";
        document.body.style.color="white";
        showAlert("Blue Mode has been enabled","success");
        }
        else if(theme==="light")
      {
        setMode("light");
        setbtnMode("dark");
        setColor("white");
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        showAlert("Light Mode has been enabled","success");
      }
      else if(theme==="dark")
        {
          setMode("dark");
        setbtnMode("secondary");
        setColor("#303030");
        document.body.style.backgroundColor="#303030";
        document.body.style.color="white";
        showAlert("Dark Mode has been enabled","success");
        }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextApp" aboutText="About" mode={mode}  customTheme={customTheme} enableGreyDark={enableGreyDark}></Navbar>
    <Alert  alert={alert}/>
    <div className="container col-6 my-3 mx-auto " style={{ width: '70%' }}>
      <Routes>
      <Route exact path="/" element={
      <TextForm heading="Enter text to analyse below" mode={mode} showAlert={showAlert} btnMode={btnMode} color={color} />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

Navbar.propTypes = {
  title : PropTypes.string,
  aboutText: PropTypes.string};

  Navbar.defaultProps = {
    title : "set title",
    aboutText : "about text"};

export default App;

