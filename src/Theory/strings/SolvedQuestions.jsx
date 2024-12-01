const  string = "hello";
// Without Inbuilt methods
const ReverseString = (str)=>{
    let Results = '';
  for (let index = str.length - 1 ; str.length >= 0; index--) {
    Results += str[index];
  }
  return Results ;
}
// with Mothods
function Reverse(str='hello'){
    return str.split('').reverse().join('')
}



useEffect(()=>{
    // console.log(Reverse())
//     const results = ReverseString(string) ;
// console.log(results)
},[])



    // In Built Methids Using
    const IsAnagram = (str1, str2) => {
      const Normalize = (str) => {
          return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      }
      const Sorted1 = Normalize(str1).split('').sort().join('');
      const Sorted2 = Normalize(str2).split('').sort().join('');
      return Sorted1 === Sorted2 ? 'is anagram' : 'is not anagram'
  }
  // Without Inbuilt Methods
  const IsAnagramWithoutBuiltIn = (str1, str2) => {
      if (!str1 || !str2) throw new Error('Please Provide 2 String for Comparison')
      const Normalize = (str) => {
          let results = '';
          for (let i = 0; i < str.length; i++) {
              if (/[a-zA-Z0-9]/.test(str[i])) {
                  results += str[i].toLowerCase();
              }
          }
          return results;
      }
      const SortedStrings = (str) => {
          if (!str) return
          let arr = str?.toLowerCase().split('');
          const n = arr?.length;
          for (let i = 0; i < n - 1; i++) {
              for (let j = 0; j < n - 1 - i; j++) {
                  if (arr[j] > arr[j + 1]) {
                      let temp = arr[j];
                      arr[j] = arr[j + 1];
                      arr[j + 1] = temp;
                  }
              }
          }

          return arr?.join('');
      }
      const Val1 = SortedStrings(str1)
      const Val2 = SortedStrings(str2)
      return Val1 === Val2 ? 'is anagram' : 'is not anagram'

  }

  // bubblesort 
  
  const Bubble = (arr) => {
    let n = arr.length ;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}
console.log(Bubble([1, 8, 5, 4, 6 , -1 ,0 , 78 ,79]))
  console.log(IsAnagramWithoutBuiltIn('HELLO', 'LLOHE'))
