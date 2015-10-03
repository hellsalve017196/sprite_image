var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = "150";
canvas.height = "150";

//basic variables
var frame = 0;

var x = 0,y = 0;

function draw(img,x,y) {
    canvas.width = canvas.width;

    context.drawImage(img,x,y,130,150,0,0,150,150);
}


var img = new Image();
img.onload = function () {
    draw(this,x,y);
}
img.src = "sample.png";

var framing = function () {
    frame++;

    if(frame % 2 == 0)
    {
        if(x >= 6 || x >= 5)
        {
            if(y >= 3)
            {
                x = 0;
                y = 0;
            }
            else
            {
                x = 0;
                y++;
            }
        }
        else
        {
            x++;
        }

        draw(img,x * 130,y * 150);
    }
};

var update  = function () {

    framing();

    window.requestAnimationFrame(update);
};

update();
