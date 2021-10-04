// Loop over the following arrays, and console.log() the item both arrays have in common:

const arr1 = ['tree', 'river', 'mountain']; const arr2 = ['ocean', 'tree', 'sand'];

    for (i=0; i<arr1.length; i++){
        for (j=0; j<arr2.length; j++){
            item = [];
            if (arr1[i] === arr2[j]){
                item.push(arr1[i])
            }
            console.log(item)
        }

    }
