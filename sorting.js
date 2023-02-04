function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  function quickSort(array, start = 0, end = array.length - 1) {
    if (start >= end) {
      return;
    }
  
    let arrIndex = start;
    let arrValue = array[end];
    for (let i = start; i < end; i++) {
      if (array[i] < arrValue) {
        swap(array, i, arrIndex);
        arrIndex++;
      }
    }
    swap(array, arrIndex, end);
  
    quickSort(array, start, arrIndex - 1);
    quickSort(array, arrIndex + 1, end);
  
    return array;
  }
  
  function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  
    return array;
  }
  
  function compareSorts(array) {
    let startTime, endTime;
    let sortedArray = array.slice();
  
    startTime = Date.now();
    bubbleSort(sortedArray);
    endTime = Date.now();
    console.log(`Bubble sort time: ${endTime - startTime} ms`);
  
    startTime = Date.now();
    quickSort(array);
    endTime = Date.now();
    console.log(`Quick sort time: ${endTime - startTime} ms`);
  }
  
  let arraySizes = [2, 5, 10, 50, 100, 500, 1000, 5000, 10000];
  for (let i = 0; i < arraySizes.length; i++) {
    let size = arraySizes[i];
    let randomArray = Array.from({ length: size }, () => Math.floor(Math.random() * size));
    console.log(`\nArray size: ${size}`);
    compareSorts(randomArray);
  }