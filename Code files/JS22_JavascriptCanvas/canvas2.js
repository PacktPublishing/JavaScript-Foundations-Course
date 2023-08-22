var drawing = false;
var context;

window.onload = function () {

    //Clear button
    document.getElementById('btnClear').addEventListener('click', function () {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }, false);

    //Back Button
    document.getElementById('btnBack').addEventListener('click', function() {
        document.getElementById('myCanvas').style.display = "block";
        document.getElementById('saveArea').style.display = "none";
        document.getElementById('tools').style.display = "block";
    }, false);

    //Width Scale
    document.getElementById('lineWidth').addEventListener('change', function() {
        context.lineWidth = document.getElementById('lineWidth').value;
    }, false);

    // Color
    document.getElementById('colorChange').addEventListener('change', function() {
        context.strokeStyle = document.getElementById('colorChange').value;
    }, false);

    //Save
    document.getElementById('btnSave').addEventListener('click', function() {
        document.getElementById('myCanvas').style.display = 'none';
        document.getElementById('saveArea').style.display = "block";
        document.getElementById('tools').style.display = "none";

        var dataURL = document.getElementById('myCanvas').toDataURL();
        document.getElementById('canvasImg').src = dataURL;
    }, false);

    //size Canvas
    context = document.getElementById('myCanvas').getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    // Mouse Movement
    document.onmousemove = handleMouseMove;
    document.onmousedown = handleDown;
    document.onmouseup = handleUp;

    // Style Line
    context.strokeStyle = "#000";
    context.lineJoin = "round";
    context.lineWidth = 5;

    //Hide save area
    document.getElementById('saveArea').style.display = "none";

}

function handleMouseMove(e) {
    console.log(e.clientX);
    console.log(e.clientY);

    if (drawing) {
        context.lineTo(e.clientX, e.clientY);
        context.closePath();
        context.stroke();
        context.moveTo(e.clientX, e.clientY);
    } else {
        context.moveTo(e.clientX, e.clientY);
    }
}

function handleDown(e) {
    drawing = !drawing;
    console.log(drawing);
    context.moveTo(e.clientX, e.clientY);
    context.beginPath();
}

function handleUp() {
    drawing = !drawing;
    console.log(drawing);
}