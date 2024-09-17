const removeFromArray = function(arr, num) {
    const args = Array.prototype.slice.call(arguments, 1);
    let newArr = [];
    for (const i of arr){
        let flag = false;
        for (const j of args) {
            if (j === i) {
                flag = true;
                break;
            }
        }
        if (flag) continue;
        newArr.push(i);
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
