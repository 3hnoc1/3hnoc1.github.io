//================ mouse draw ===========
//========c


const ctx = c.getContext('2d');
const $container = document.querySelector('#container');
let pathes = []; // this is where we will store all our pathes



// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  // 設置畫布寬度和高度完全符合視窗大小
  c.width = window.innerWidth;  // 螢幕的寬度
  c.height = window.innerHeight;  // 螢幕的高度

  /**
   * 重繪畫布內的內容，避免重設大小時清空畫布
   */
  drawStuff();
}
resizeCanvas();

function drawStuff() {

  // do your drawing stuff here//


  let mouse_down = false; // shall we draw ?
  $container.onmouseover = e => {
    // add a new path object
    pathes.push({
      pts: [], // an array of points
      // dashed: check.checked // boolean
    });
    mouse_down = true; // we should draw

  }
  $container.onmouseup = c.onmouseleave = e => mouse_down = false;

  $container.onmousemove = throttle(e => {
    if (!mouse_down) {
      return;
    } else {
      const rec = c.getBoundingClientRect();
      // add a new point
      addPoint(e.clientX - rec.left, e.clientY - rec.top);
      redraw(); // redraw everything

    }
  });



  function redraw() {
    ctx.clearRect(0, 0, c.width, c.height); // we clear everything
    // and draw every pathes
    pathes.forEach(path => {
      ctx.setLineDash(path.dashed ? [5, 5] : [0]);
      // set line color
      // ctx.strokeStyle = '#FF391F';
      ctx.strokeStyle = 'rgba(33, 33, 33, 1)';
      ctx.lineWidth = 30;
      ctx.beginPath();
      path.pts.forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.stroke();

    })
  }




  function addPoint(x, y) {
    // append to the last one
    let points = pathes[pathes.length - 1].pts;
    points.push({
      x: x,
      y: y
    });

  }


  // just to avoid unnecessary drawings
  function throttle(callback) {
    if (typeof callback !== 'function')
      throw 'A callback function must be passed';
    var active = false;
    var evt;
    var handler = function () {
      active = false;
      callback(evt);
    };
    return function handleEvent(e) {
      evt = e;
      if (!active) {
        active = true;
        requestAnimationFrame(handler);
      }
    };
  }

}

let tmp;

//clearCanvas

function clearCanvas() {

  ctx.clearRect(0, 0, c.width, c.height); // we clear everything
  pathes.length = 0;



}




//==================== c1 =============
//================ mouse draw ===========
//========c


// const ctx1 = c1.getContext('2d');
// const $container2 = document.querySelector('#containerAgain');




// // resize the canvas to fill browser window dynamically
// window.addEventListener('resize', resizeCanvas, false);

// function resizeCanvasAgain() {


//   c1.width = 0;
//   c1.height = window.innerHeight;

//   /**
//    * Your drawings need to be inside this function otherwise they will be reset when
//    * you resize the browser window and the canvas goes will be cleared.
//    */
//   drawStuff();
// }
// resizeCanvasAgain();

// function drawStuffAgain() {

//   // do your drawing stuff here//


//   let mouse_down = false; // shall we draw ?
//   $container2.onmouseover = e => {
//     // add a new path object
//     pathes.push({
//       pts: [], // an array of points
//       // dashed: check.checked // boolean
//     });
//     mouse_down = true; // we should draw

//   }
//   $container2.onmouseup = c1.onmouseleave = e => mouse_down = false;

//   $container2.onmousemove = throttleAgain(e => {
//     if (!mouse_down) {
//       return;
//     } else {
//       const rec = c.getBoundingClientRect();
//       // add a new point
//       addPoint(e.clientX - rec.left, e.clientY - rec.top);
//       redrawAgain(); // redraw everything

//     }
//   });



//   function redrawAgain() {
//     ctx1.clearRect(0, 0, c.width, c.height); // we clear everything
//     // and draw every pathes
//     pathes.forEach(path => {
//       ctx1.setLineDash(path.dashed ? [5, 5] : [0]);
//       // set line color
//       // ctx.strokeStyle = '#FF391F';
//       ctx1.strokeStyle = '#f5abac';
//       ctx1.lineWidth = 5;
//       ctx1.beginPath();
//       path.pts.forEach(pt => ctx1.lineTo(pt.x, pt.y));
//       ctx1.stroke();

//     })
//   }




//   function addPointAgain(x, y) {
//     // append to the last one
//     let points = pathes[pathes.length - 1].pts;
//     points.push({
//       x: x,
//       y: y
//     });

//   }


//   // just to avoid unnecessary drawings
//   function throttleAgain(callback) {
//     if (typeof callback !== 'function')
//       throw 'A callback function must be passed';
//     var active = false;
//     var evt;
//     var handler = function () {
//       active = false;
//       callback(evt);
//     };
//     return function handleEvent(e) {
//       evt = e;
//       if (!active) {
//         active = true;
//         requestAnimationFrame(handler);
//       }
//     };
//   }

// }

//================ randomizing columns====================
//================ randomizing columns=================================================================

let mediaElements = [...document.getElementsByClassName("col")];

// this is where u assign the array for the list of src (or randomise it)
//array.forEach(function(currentValue, index, arr), thisValue)

//put the range in an array
function range(start, end) {
  var ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}

//shuffle the array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

//now shuffle order
let orderNumber = range(1, mediaElements.length);
let shuffled = shuffle(orderNumber);
//console.log(shuffled); // [5, 3, 1, 2, 4]


//uncomment this later============
//assign order somehow lmao
mediaElements.forEach(y => {
  // this is where u add or the src
  // y is each of the img
  //console.log(y)
  y.style.order = shuffled.shift()
  // console.log(y.style.order)
});






//=========== download images====================================
//=========== download images====================================
// var n = event.timeStamp;
// console.log(n);

function DownloadCanvasAsImage() {

  let downloadLink = document.createElement('a');
  downloadLink.setAttribute('download', 'NearlyPublished.png');
  let canvas = document.getElementById('c');
  canvas.toBlob(function (blob) {
    let url = URL.createObjectURL(blob);
    downloadLink.setAttribute('href', url);
    downloadLink.click();
  });



  // downloadLink.setAttribute('download', 'NearlyPublished.png');
  // let canvas1 = document.getElementById('c1');
  // canvas1.toBlob(function (blob) {
  //   let url = URL.createObjectURL(blob);
  //   downloadLink.setAttribute('href', url);
  //   downloadLink.click();
  // });
}