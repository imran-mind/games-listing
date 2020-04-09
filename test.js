

var a = ["eat", "tea", "tan", "ate", "nat", "bat"];
const ngarms = () => {
    var object = {}
    for (let i of a) {
        const sortedWord = i.split('').sort().join('');
        if (!object[sortedWord]) {
            object[sortedWord] = [i];
        } else {
            object[sortedWord].push(i)
        }
    }
    console.log(Object.values(object))
    return Object.values(object)
}
ngarms();
// const object = {a: 1, b: 2, c: 3};
// function ngrams (){
//     const ngramses =[];
//     for(let i=0; i<a.length; i++){
//         // a.splice(i,1);
//         // console.log('==> ',a)
//         const arr = [];
//             arr.push(a[i]);
//             // a.shift();
//             a.splice(i,1);
//         for(let j=i+1; j<a.length; j++){
//             const w = a[j];
//             console.log('--<word ',w)
//             const isMatch = abv(w);
//             if(isMatch){
//                 arr.push(w);
//             }
//         };
//         ngramses.push(arr);
//     }
//     console.log('ngramses ',ngramses);
// }
// ngrams();
// function abv(word){

//     let isMatch = true;
//     for (const property of a) {
//         // console.log(property);
//         const strings = property.split('');// [e,a,t].includes()
//         for(let i=0; i<word.length; i++){
//             if(!strings.includes(word[i])){
//                 isMatch = false;
//             }
//         }
//     }
//     return isMatch;
// }
// // abv();