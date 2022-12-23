function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  const length = arr.length;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives++;
    } else if (arr[i] < 0) {
      negatives++;
    } else {
      zeros++;
    }
  }
  const positiveRatio = Number(positives / length).toFixed(6);
  const negativeRatio = Number(negatives / length).toFixed(6);
  const zeroRatio = Number(zeros / length).toFixed(6);
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}
