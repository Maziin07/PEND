

function countToFive() {
  let count = 1;
  const interval = setInterval(() => {
    console.log(count);
    if (count === 5) clearInterval(interval);
    count++;
  }, 1000);
}