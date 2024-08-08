const start = performance.now();
setTimeout(() => {
  const end = performance.now();
  console.log(`${end - start} milliseconds`);
}, 500);
