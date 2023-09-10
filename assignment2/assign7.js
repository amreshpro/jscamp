


function countVowel(str){
    let count = 0;
    let strArray = str.split("");
    for(let i=0;i<strArray.length;i++){
        if(
            strArray[i]==='a' || strArray[i]==='A' ||
            strArray[i]==='e' || strArray[i]==='E' ||
            strArray[i]==='i' || strArray[i]==='I' ||
            strArray[i]==='o' || strArray[i]==='O' ||
            strArray[i]==='u' || strArray[i]==='U' 

            
            
            
            ) {
           ++count
        }
    }


    return count;
}



console.log(countVowel("Amresh"))//2
console.log(countVowel("Ashish"))//2
console.log(countVowel("Shubhangi"))//3
console.log(countVowel("Abhiuday"))//4
console.log(countVowel("Vedant"))//2



