
// naive solution
// O(n**2)
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

// refactored
// O(n) - Linear time complexity
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

const response = sumZero([1, 5, 6, -7, -5, 2])
console.log(response)


// multiple pointers - count unique values challenge
function unique(arr){
    var i = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        // console.log(i, j)
    }
    return i + 1;
}

console.log(unique([1,1,1,1,2,3]))