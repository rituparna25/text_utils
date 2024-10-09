import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLoClick = () => {
    //console.log("Button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }

  const handleClearText = () => {
    //console.log("Button was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared!","success");
  }

  const handleToggleCase = () => {
    //console.log("Button was clicked");
    let newText="";
    for(let i=0;i<text.length;i++)
      {
        if(text[i]===text[i].toLowerCase())
          {
            newText=newText+text[i].toUpperCase();
          }
        else 
        {
          newText=newText+text[i].toLowerCase();
        }
      }
    setText(newText);
    props.showAlert("Case is toggled!","success");
  }

  const handleTitleCase = () => {
    let newText="";
    let s=text.split(" ");
    for(let i=0;i<s.length;i++)
      {
        newText = newText+s[i].charAt(0).toUpperCase();
        for(let j=1;j<s[i].length;j++)
          {
            newText = newText+s[i].charAt(j);
          }
        newText = newText+" ";
      }
      setText(newText);
      props.showAlert("Converted to Title case","success");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed.","success");
  }

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);//jo click hua keyboard mein wo value jaiga {text} mein
  }

  const [text, setText] = useState("");
  //text = "new text"; //Wrong way to change the state
  //setText("new text");// correct way to change text
return (
  <>
<div className='container' > 
    <h1>{props.heading}</h1>  
    <div className="mb-3">
    <textarea 
  className="form-control" 
  value={text.length > 0 ? text : ""} 
  onChange={handleOnChange} 
  id="mytext" 
  rows="8" 
  style={{
    backgroundColor: props.mode === "light" ? "white" : props.color, 
    color: text.length > 0 
      ? (props.mode === "light" ? "black" : "white")  // normal text color
      : "grey"  // placeholder color
  }} 
  placeholder={text.length === 0 ? "Start typing..." : ""}>
</textarea>

    </div>
    <button className={`btn btn-${props.btnMode} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
    <button className={`btn btn-${props.btnMode} mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
    <button className={`btn btn-${props.btnMode} mx-2`} onClick={handleToggleCase}>Toggle case</button>
    <button className={`btn btn-${props.btnMode} mx-2`} onClick={handleTitleCase}>Title case</button>
    <button className={`btn btn-${props.btnMode} mx-2`} onClick={handleExtraSpace}>Remove extra spaces</button>
    <button className={`btn btn-${props.btnMode} mx-2`} onClick={handleClearText}>Clear Text</button>

  </div>
    
<div className="container my-4 ">
  <h1>Your text summary</h1>
  <p>{text.split(/[,;.! ]+/).filter(Boolean).length} words and {text.length} characters</p>
  <p> {0.008 * text.split(" ").length} minutes read</p>
  <h3>Preview</h3>
  <p style={{color: text.length > 0 ? (props.mode === "light" ? "black" : "white"): "grey"}} >{text.length>0 ? text:"Write in the textbox to preview."}</p>
</div>
</>
  )
}


