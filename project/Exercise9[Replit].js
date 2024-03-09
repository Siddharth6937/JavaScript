let arr = [-1, 2, 1, -4];
target = 1;

// function threeSum(s, target) {
//     let n = s.length;
//     let closestSum  = s[0]+s[1]+s[2];

//     for(let  i = 0; i < n; i++){
//         for(let j = i+1; j <n; j++){
//             for(let k = j+1; k < n; k++){
//                 let currentSum = s[i]+s[j]+s[k];

//                 if(Math.abs(target - currentSum ) < Math.abs(target - closestSum) ){
//                     closestSum = currentSum;
//                 }
//             }

//         }
//     }
//     return closestSum;
// }

// console.log(threeSum(s, target));


function threeSum(arr, target) {
    arr.sort((a,b) => a-b);
    let n = arr.length;
    let closestSum = Number.POSITIVE_INFINITY;

    for(let i = 0; i < n-2; i++) {
        let start = i+1; let end = n-1;

        while(start < end){
            let sum = arr[i] + arr[start] + arr[end];

            if(Math.abs(target - closestSum) > Math.abs(target - sum)){
                closestSum = sum;
            }

            if(sum > target){
                end--;
            }else{
                start++;
            }
        }
    }
   return closestSum;
}

console.log(threeSum(arr, target));