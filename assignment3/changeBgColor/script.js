const container = document.querySelector('.container');
const hexbox = document.getElementById('hexbox');



const color = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']


// random color generator
function getRandomColor() {
    const pt1 = color[Math.floor(Math.random() * 16)];
    const pt2 = color[Math.floor(Math.random() * 16)];
    const pt3 = color[Math.floor(Math.random() * 16)];
    const pt4 = color[Math.floor(Math.random() * 16)];
    const pt5 = color[Math.floor(Math.random() * 16)];
    const pt6 = color[Math.floor(Math.random() * 16)];

    const randomColor = `#${pt1}${pt2}${pt3}${pt4}${pt5}${pt6}`
    hexbox.value = randomColor
    return randomColor

}

// background color
function changeBackgroundColor() {
    container.style.backgroundColor = getRandomColor()

}

changeBackgroundColor()



//copy
function copyTextContent() {

    // Select the text field
    hexbox.select();
    hexbox.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(hexbox.value);


}


//on click anywhere in body, change the color
container.addEventListener('click', () => {
    changeBackgroundColor()
    hexbox.addEventListener('hover', copyTextContent())
    console.log("body listener")
});


