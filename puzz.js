// bug iruku da doii
let prev = 9;
let valids = {
    1: [2, 4],
    2: [1, 3, 5],
    3: [2, 6],
    4: [1, 5, 7],
    5: [2, 4, 6, 8],
    6: [3, 5, 9],
    7: [4, 8],
    8: [5, 7, 9],
    9: [6, 8]
};
let bg = [0, 1, 2, 3, 4, 5, 6, 7];
let CorrectPosition = [];
let flag = true;  
if (flag) {
    setup();
    flag = false;
}
let btns = document.querySelectorAll(".btn");


let flag2 = true;
if (flag2) {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            if (valids[prev].indexOf(i + 1) != -1) {
                btns[prev - 1].style.backgroundImage = btns[i].style.backgroundImage;
                btns[i].style.backgroundImage = "url('images/bg.jpg')";
                prev = i + 1;
                check();
            }
        });
    }
    flag2 = false;
}


function shuffleArray(ar)
{
    var n = ar.length;
    for(var i = 0; i < n; i++)
    {
        var i2 = getRandomIntInclusive(0, n - 1);
        var t = ar[i];
        ar[i] = ar[i2];
        ar[i2] = t;        
    }
}

function getRandomIntInclusive(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function check() {
    let flag1 = true;
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].style.backgroundImage != CorrectPosition[i]) {
            // alert(i);
            flag1 = false;
            break; 
        }
    }
    if (flag1) {
        setTimeout(function () {
            alert("You Won");
        }, 100);
    }
}

document.querySelector("#shuffle").addEventListener("click", shuffler);

function shuffler() {
    shuffleArray(bg);
    for (let i = 0; i < btns.length-1; i++) {
        btns[i].style.backgroundImage = CorrectPosition[bg[i]];
    }
    btns[8].style.backgroundImage = "url('images/bg.jpg')";  
    prev = 9;
}

////////
function setup() {
    var canvas = document.getElementById("canvas");
    var contex = canvas.getContext("2d");
    canvas.hidden = true;
        let dataURL;
        let btns = document.querySelectorAll(".btn");
        var userimage = new Image(); userimage.src = sessionStorage.getItem("userimage");
    document.body.appendChild(userimage); userimage.style.visibility = "hidden";
        let originalHeight = userimage.clientHeight;
        let originalWidth = userimage.clientWidth;
        canvas.width = originalWidth / 3 ;
        canvas.height = originalHeight / 3 ;
        contex.drawImage(userimage, 0, 0, originalWidth, originalHeight, 0, 0, 600, 600);
        dataURL = canvas.toDataURL();
        btns[0].style.backgroundImage = "url(" + dataURL + ")";
        CorrectPosition.push(btns[0].style.backgroundImage);
        contex.drawImage(userimage, 0, 0, originalWidth, originalHeight, -200, 0, 600, 600);
        dataURL = canvas.toDataURL();
        btns[1].style.backgroundImage = "url(" + dataURL + ")";
        CorrectPosition.push(btns[1].style.backgroundImage);
        contex.drawImage(userimage, 0, 0, originalWidth, originalHeight, -400, 0, 600, 600);
         dataURL = canvas.toDataURL();
        btns[2].style.backgroundImage = "url(" + dataURL + ")";
        CorrectPosition.push(btns[2].style.backgroundImage);
        contex.drawImage(userimage, 0, 0, originalWidth, originalHeight, 0, -200, 600, 600);
        dataURL = canvas.toDataURL();
        btns[3].style.backgroundImage = "url(" + dataURL + ")";    
        CorrectPosition.push(btns[3].style.backgroundImage);
        contex.drawImage(userimage, 0, 0, originalWidth, originalHeight, -200, -200, 600, 600);
        dataURL = canvas.toDataURL();
        btns[4].style.backgroundImage = "url(" + dataURL + ")";    
        CorrectPosition.push(btns[4].style.backgroundImage);
        contex.drawImage(userimage, 0, 0, originalWidth, originalHeight, -400, -200, 600, 600);
        dataURL = canvas.toDataURL();
        btns[5].style.backgroundImage = "url(" + dataURL + ")";
        CorrectPosition.push(btns[5].style.backgroundImage);
        contex.drawImage(userimage, 0, 0, originalWidth, originalHeight, 0, -400, 600, 600);
        dataURL = canvas.toDataURL();
        btns[6].style.backgroundImage = "url(" + dataURL + ")";
        CorrectPosition.push(btns[6].style.backgroundImage);
        contex.drawImage(userimage, 0, 0, originalWidth, originalHeight, -200, -400, 600, 600);
        dataURL = canvas.toDataURL();
        btns[7].style.backgroundImage = "url(" + dataURL + ")";
        CorrectPosition.push(btns[7].style.backgroundImage);
        btns[8].style.backgroundImage = "url('images/bg.jpg')";
        CorrectPosition.push(btns[8].style.backgroundImage);
            window.onload = function () {
                if (!window.location.hash) {
                    window.location = window.location + '#';
                    window.location.reload();
                } 
    } 
        userimage.style.display = "none";
}

function toDataURL1(src){
    var image = new Image();
    image.crossOrigin = 'Anonymous';
    image.onload = function(){
       var canvas = document.createElement('canvas');
       var context = canvas.getContext('2d');
       canvas.height = this.naturalHeight;
       canvas.width = this.naturalWidth;
       context.drawImage(this, 0, 0);
       var dataURL = canvas.toDataURL('image/jpeg');
    };
    image.src = src;
    return dataURL;
 }

// window.onload = function () {
//     var canvas = document.getElementById("myCanvas");
//     var contex = canvas.getContext("2d");
//     var img = document.getElementById("myImage");
//     let originalHeight = img.clientHeight;
//     let originalWidth = img.clientWidth;
//     canvas.width = originalWidth / 3;
//     canvas.height = originalHeight / 3;
//     contex.drawImage(img, 0, 0,
//         originalWidth, originalHeight, 0, 0, Math.min(originalHeight, originalWidth), Math.min(originalHeight, originalWidth));
//     //get the image data from the canvas
//     var dataURL = canvas.toDataURL("image/png");
//     //set the source of the image to the data url
//     document.getElementById("myImage").src = data;
//     canvas.hidden = false;
// }
