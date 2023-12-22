addEventListener('message', ({data}) => {
  performHeavyComputation(data);
});

function performHeavyComputation(n: number) {
  let a = 0, b = 1, sum = 0;

  postMessage({type: 'progress', value: 0});

  for (let i = 2; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;

    if (i % 10 === 0 || i === n) {
      const progress = Math.floor((i / n) * 100);
      postMessage({type: 'progress', value: progress});
    }
  }

  postMessage({type: 'result', value: b});
}
