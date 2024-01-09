const countVoval = (str) =>{
    let count =0;
    for(const i of str){
        if(i === 'a'|| i==='i' || i === 'e' || i === 'o' || i === 'r')
            count++;
    }
    return count;

}