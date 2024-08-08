let n = 30;
const intervalID = setInterval(() => {
  if (n >= 0) {
    console.log(n);
    n--;
  } else {
    clearInterval(intervalID);
    console.log("CountDown Complete");
  }
}, 1000);
