// // // let h1 = document.querySelector("h1");

// // // function changeColor(color, dely, nextColorChange) {
// // //   setTimeout(() => {
// // //     h1.style.color = color;
// // //     if (nextColorChange) nextColorChange();
// // //   }, dely);
// // // }

// // // changeColor("blue", 1000, () => {
// // //   //function ni andar bija function ne call karyo che
// // //   changeColor("re4d", 1000, () => {
// // //     changeColor("pink", 1000, () => {
// // //       changeColor("yellow", 1000);
// // //     });
// // //   });
// // // });

// // function saveToDb(data, success, failure) {
// //   let internetSpeed = Math.floor(Math.random() * 10) + 1;
// //   if (internetSpeed > 4) {
// //     success();
// //   } else {
// //     failure();
// //   }
// // }

// // saveToDb(
// //   "apna collage",
// //   () => {
// //     console.log("success,your data was saved : data1");
// //     saveToDb(
// //       "kiran mithapara",
// //       () => {
// //         console.log("success,your data was saved : data2");
// //         saveToDb(
// //           "kishan mithapara",
// //           () => {
// //             console.log("success,your data was saved : data3");
// //           },
// //           () => {
// //             console.log("failure 3,weak connection");
// //           }
// //         );
// //       },
// //       () => {
// //         console.log("failure 2,weak connection");
// //       }
// //     );
// //   },
// //   () => {
// //     console.log("failure 1,weak connection");
// //   }
// // );

// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success : data was solved");
//     } else {
//       reject("failer : weak connection");
//     }
//   });
// }

// saveToDb("kiran mithapara")
//   .then((result) => {
//     console.log(result); //main function ma je lakhyu hoy te valid result leva mate
//     console.log("promise 1 resolved");
//     return saveToDb("kishan mithapara"); //biji var function ne call karyo
//   })
//   .then((result) => {
//     console.log(result);
//     console.log("promise 2 resolved");
//   })
//   .catch((error) => {
//     console.log(error); //function ma je lkahyu che te error leva mate.

//     console.log("some promise rejected");
//   });

let h1 = document.querySelector("h1");
function colorChange(color, dely) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color was changed");
    }, dely);
  });
}

colorChange("red", 1000)
  .then(() => {
    console.log("red color was changed");
    return colorChange("blue", 1000);
  })
  .then(() => {
    console.log("blue color was changed");
    return colorChange("green", 1000);
  })
  .then(() => {
    console.log("green color was changed");
    return colorChange("orange", 1000);
  })
  .then(() => {
    console.log("orange color was changed");
  });
