/**
**@desc: 快速排序的实现
 * http://wiki.jikexueyuan.com/project/easy-learn-algorithm/images/3.9.png
*/

const list = [1,10,5,3,8,7,9,6];

const quick = (array,left,right) =>{
    let index;
    if(array.length > 1){
        index = partition(array,left,right);

        if(left < index -1){
            quick(array,left,index -1)
        }

        if(index < right){
            quick(array,index,right)
        }

    }
    
    return array
};

// 划分操作
function partition(array,left,right) {

    // 用下标取中间值
    const pivot = array[Math.floor((right+left)/2)];

    let i = left, j = right ;

    while (i <= j){
        while (array[i] < pivot){
            i++;
        }

        while (array[j] > pivot){
            j--;
        }

        if(i <=j ){
            swap(array,i,j);
            i++;
            j--;
        }

    }
    return i;

}


// 原地交换函数，而非用临时数组
function swap(array, a, b) {
    // [array[a], array[b]] = [array[b], array[a]];
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

const quickSort = (list)=>{

    if(!(list instanceof Array) || !list.length){
        return [];
    }

  return  quick(list,0,list.length -1);

};

console.log(list);

quickSort(list);

console.log(list);





