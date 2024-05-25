// ! Bất đồng bộ theo callback

function taskA(callBack) {
  setTimeout(() => {
    console.log("Task A Done");
    callBack();
  }, 3000);
}
function taskB(callBack) {
  setTimeout(() => {
    console.log("Task B Done");
    callBack();
  }, 2000);
}
function taskC(callBack) {
  setTimeout(() => {
    console.log("Task C Done");
    callBack();
  }, 1000);
}

// taskA(() =>
//   taskB(() =>
//     taskC(() => {
//       console.log("Các task đa xác nhận");
//     })
//   )
// );

// ! Bất đồng bộ theo Promise
function taskD() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task D Done");
      resolve();
    }, 1000);
  });
}
function taskE() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task E Done");
      resolve();
    }, 2000);
  });
}
function taskF() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task F Done");
      resolve();
    }, 1500);
  });
}

// taskD()
//   .then(taskE)
//   .then(taskF)
//   .then(() => {
//     console.log("Các task đa xác nhận");
//   })
//   .catch((error) => {
//     console.log("Đã xảy ra lỗi", error);
//   });

// console.time("Thời gian thực hiện tất cả các tác vụ");
// Promise.all([taskD(), taskE(), taskF()])
//   .then(() => {
//     console.timeEnd("Thời gian thực hiện tất cả các tác vụ");
//   })
//   .catch((error) => {
//     console.log("Đã xảy ra lỗi", error);
//   });

// ! Bất đồng bộ theo async/await của ES6
async function taskCommons() {
  try {
    await taskD();
    await taskE();
    await taskF();
    console.log("Các task đã xác nhận");
  } catch (error) {
    console.log("Error:", error);
  }
}
taskCommons();
