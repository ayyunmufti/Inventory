console.log("hi");

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved");
//   }, 2000);

//   reject("rejected");
// });

// p.then((message) => {
//   console.log(message);
// }).catch((message) => {
//   console.log(message);
// });

function loginUser(email, pass) {
  return new Promise((resolve, reject) => {
    console.log("Accessing login");
    setTimeout(() => {
      resolve({
        useremail: email,
        password: pass,
      });
    }, 1000);
  });
}
function userVideos(email) {
  return new Promise((resolve, reject) => {
    console.log("Getting Videos");

    setTimeout(() => {
      resolve(["video1123", "video2"]);
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    console.log("loading video");

    setTimeout(() => {
      resolve(video[0]);
    }, 1000);
  });
}
async function userdetails() {
  const userDetails1 = await loginUser("ayyn", 123);
  const uservideos = await userVideos(userDetails1.useremail);
  const viddetails = await videoDetails(uservideos);
  console.log(viddetails);
}

userdetails();
