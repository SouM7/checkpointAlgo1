/*-----------------------------------------------EXO1----------------------------------------------------------------------------------------*/
function sentenceCounter(str) {
    
    let n, vow=0,  words= 0;

    n=str.length;

    for (let i = 0; i < str.length; i++)

      if (str[i] === " ") { 

        words++; 
    }

    words++; 


    for(let i=0;i<str.length;i++){

        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' ||str[i] === 'u' ||str[i] === 'y'){

            vow++ ;
        }
    }
let counter=`Length of the sentence : ${n}, number of words : ${words}, number of vowels : ${vow}`
 return(counter); 


}
let str='hello world.';
console.log(sentenceCounter(str))

