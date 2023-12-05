//  selected 
let button = document.querySelector("#button");

// button click function
button.addEventListener("click", function(){
    let para = document.querySelector("#para");
    let call = generateRandomColor();
    para.innerText = call; // rgb  text will be in para

    //  change toh yaha se hi hoga 
    let fullBody = document.querySelector("body");
    fullBody.style.backgroundColor = call; 
    console.log("New Background Color Updated ");
});

// this function will generate random number between 0 to 255 rgb
function generateRandomColor(){
    let red   = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue  = Math.floor(Math.random() *255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}