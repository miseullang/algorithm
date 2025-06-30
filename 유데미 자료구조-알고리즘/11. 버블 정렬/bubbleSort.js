function bubbleSort(arr) {
var noSwaps;
 for(var i = arr.length; i > 0; i--) {
   noSwaps = true;
   for(var j = 0; j < i - 1; j++) {
     console.log(arr, arr[j], arr[j+1]);
     if(arr[j] > arr[j+1]) {
       //SWAP!
       var temp = arr[j];
       arr[j] = arr[j+1];
       arr[j+1] = temp;
       noSwaps = false;
     }
   }
   console.log("ONE PASS COMPLETE!");
   if(noSwaps) break;
 }
 return arr;
}

// 예시 실행
// bubbleSort([64, 34, 25, 12]);

// 예상 결과:
// [64, 34, 25, 12] 64 34
// [34, 64, 25, 12] 64 25
// [34, 25, 64, 12] 64 12
// ONE PASS COMPLETE!
// [34, 25, 12, 64] 34 25
// [25, 34, 12, 64] 34 12
// ONE PASS COMPLETE!
// [25, 12, 34, 64] 25 12
// ONE PASS COMPLETE!
// ONE PASS COMPLETE!
// 최종 결과: [12, 25, 34, 64]