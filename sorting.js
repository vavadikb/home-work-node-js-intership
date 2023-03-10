
let sortArrLength = 2
let arraySizes = [sortArrLength]


function bubbleSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}

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


// makes arraySize to 500 with step 1 
for (let i=0; arraySizes.length<500;i++){
  sortArrLength++
  arraySizes.push(sortArrLength)
}

// makes sorting for every one varible of array
for(let i =0; i<arraySizes.length;i++){
    let size = arraySizes[i]
    let randomArray = Array.from({ length: size }, () => Math.floor(Math.random() * size*1000))
    result(randomArray)
}



function result (array){
    let startTime, endTime
    let randomRes= {bubbleS:0, quickS:0}
    let sortRes = {bubbleS:0, quickS:0}
    let reverseRes = {bubbleS:0, quickS:0}
    let arrQuick = array.slice()


    //time for random array
    startTime = Date.now()
    bubbleSort(array)
    endTime = Date.now()
    randomRes.bubbleS = endTime-startTime

  
    // time for sorted array
    startTime = Date.now()
    bubbleSort(array)
    endTime = Date.now()
    sortRes.bubbleS = endTime - startTime

    // time for reversed array
    startTime = Date.now()
    array.reverse()
    bubbleSort(array)
    endTime = Date.now()
    reverseRes.bubbleS = endTime - startTime

    // show result for bubble sort
    console.log(`Bubble sort result: randomRes:${randomRes.bubbleS}, sortRes: ${sortRes.bubbleS}, reverseRes: ${reverseRes.bubbleS}`)


    // time for random array
    startTime = Date.now()
    quickSort(arrQuick)
    endTime = Date.now()
    sortRes.quickS = endTime - startTime


    // time for sorted array
    startTime = Date.now()
    quickSort(arrQuick)
    endTime = Date.now()
    reverseRes.quickS


    // time for reversed array
    startTime = Date.now()
    arrQuick.reverse()
    quickSort(arrQuick)
    endTime = Date.now()
    randomRes.quickS = endTime - startTime

    console.log(`Quick sort result: randomRes:${randomRes.quickS}, sortRes: ${sortRes.quickS}, reverseRes: ${reverseRes.quickS}`)
}

