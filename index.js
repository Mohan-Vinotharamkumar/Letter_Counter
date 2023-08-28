const divField = document.getElementById("div");

// Creating input element
const inputField = document.createElement("input");
inputField.placeholder="Type here...";

divField.style.cssText='display:flex;height: 20rem;width:80%;border-radius:2rem;margin:auto;flex-direction:column;border:2px solid grey;';
inputField.style.cssText='display:block;height:3rem;width:45%;text-align:center;margin:auto;font-size:1.5rem;border:none;border-bottom:2px solid grey;outline:0;';

// Creating h1 tag to display the letter count
const h1_tag = document.createElement("h1");
h1_tag.innerText="Number of letters : "+inputField.value.length;

// Styling H1 Tag
h1_tag.style.cssText='margin:auto;display:block;font-size:1.3rem;'

inputField.addEventListener("keyup",()=>
{   
    // Getting Field Value from the input element
    const FieldValue = inputField.value;
    h1_tag.innerText="Number of letters : "+(FieldValue.split(" ").join("")).length; 

})


// Appending Input Field to the index.html file...
divField.appendChild(inputField);

// Appending H1 Field to the index.html file...
divField.appendChild(h1_tag);