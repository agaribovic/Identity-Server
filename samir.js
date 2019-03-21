var searchMatrix = function(matrix, target) {
    
    for(let i = 0; i < matrix[0].length; i++){
        let bottom = 0;
        let top = matrix[0].length - 1;
        let middle = Math.ceil(top / 2);
        
        while(bottom < top){
            console.log(middle, "before");
            if(middle === 0) break;
            if(matrix[i][middle] === target ) {
                return true;
            } else if( target > matrix[i][middle]){
                bottom = middle;
                middle = Math.ceil((top - bottom)/ 2) ;
                console.log(middle, ">")
            } else {
                top = middle;
                middle = Math.ceil((top - bottom) / 2) ;
                console.log(middle, "<")
            }

            //if(Math.abs(bottom - top) < 2) break;
            
        }
        
    }
    return false;
        
};

let matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
];
  let target = 13;
  
console.log(searchMatrix(matrix, target));