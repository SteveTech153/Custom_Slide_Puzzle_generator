const image_input = document.querySelector("#userimage");
image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
    let userimage = reader.result;
    sessionStorage.setItem("userimage", userimage);
    });
    reader.readAsDataURL(this.files[0]);
});

function redirect() {
    window.location.href = "puzz.html";
}
$("input[type='image']").click(function() {
    $("input[id='my_file']").click();
});
// let btns = document.querySelectorAll(".btn");
// btns[0].style.backgroundImage = image1;
// let prev = 9;
// let valids = {
//     1: [2, 4],
//     2: [1, 3, 5],
//     3: [2, 6],
//     4: [1, 5, 7],
//     5: [2, 4, 6, 8],
//     6: [3, 5, 9],
//     7: [4, 8],
//     8: [5, 7, 9],
//     9: [6, 8]
// };  

// function shuffleArray(ar)
// {
//     var n = ar.length;
//     for(var i = 0; i < n; i++)
//     {
//         var i2 = getRandomIntInclusive(0, n - 1);
//         var t = ar[i];
//         ar[i] = ar[i2];
//         ar[i2] = t;        
//     }
// }

// function getRandomIntInclusive(min, max) 
// {
//     min = Math.ceil(min);
//     max = Math.floor(max);

//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// let btns = document.querySelectorAll(".btn");
// btns[0].style.backgroundImage = image1;
// let indexes = [0, 1, 2, 3, 4, 5, 6, 7];
// // shuffleArray(indexes);
// for (let i1 = 0; i1 < 9; i1++){
//     btns[i1].style.backgroundImage = "url('images/" + (indexes[i1] + 1) + "-200.jpg')";
// }
// btns[8].style.backgroundImage = "url('images/bg.jpg')";



// function check() {
//     let flag = true;
//     let image1 = new Image();
//     let image2 = new Image();
//     for (let i = 0; i < btns.length; i++) {
//         if (i != 8) {
//             let str1 = "url(\"images/" + (i + 1) + "-200.jpg\")";
//             let str2 = btns[i].style.backgroundImage;
//             if (str1!= str2) {
//                 flag = false;
//                 break;
//             }
//         } else {
//             let str1 = "url(\"images/bg.jpg\")";
//             if (str1 != btns[i].style.backgroundImage) {
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     if (flag) {
//         alert("You Won");
//         new Audio("audio/done-vadi.mp3").play();
//         setTimeout(function(){
//             window.location.reload(1);
//          }, 2000);
//     }
// }


// let aah = new Audio("audio/check.mp3");
// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         if (valids[prev].indexOf(i + 1) != -1) {
//             aah.play();
//             btns[prev - 1].style.backgroundImage = btns[i].style.backgroundImage;
//             btns[i].style.backgroundImage = "url('images/bg.jpg')";
//             prev = i + 1;
//             check();
//         }
//     });
// }

