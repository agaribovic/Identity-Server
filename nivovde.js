var maxArea = function(height) {
    let nowMax = -1;
    let max = -1;
    
    for(let i = 0;  i < height.length; i++){
        
        for(let j = height.length - 1; j > i ; j--){
            
            if(height[i] > height[j]) nowMax = height[j] * (j - i);
            else nowMax = height[i] * (j - i);
               
            if(nowMax > max ) max = nowMax;
        }
        
    }
     return max;
}; 