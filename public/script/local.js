
const verifyText = () => {

  try{
    let resultVal;
    let fieldVal    = document.getElementById("txtToCheck").value.trim();
    let resultField = document.getElementById("resultField");

    //Use Regex to test that only leters and spaces are contained in the field
    let regLetters = /^[a-zA-Z\s]*$/;
    //If non valid Characters are detected notify and end.
    if (!regLetters.test(fieldVal) || fieldVal.length==1) {
      resultVal ="Invalid character(s) entered.  Only words are allowed.";
    }else{
      //pass string to palidrome testing function
      res       = testWord(fieldVal);
      // use terciary function to display results in UX
      resultVal = (fieldVal + (res?' is':' is not') +" a Palindrome.");
    }

    resultField.innerHTML=resultVal;
  }catch(e) {
    document.getElementById("resultField").innerHTML = err.message;
  }
};

const testWord = (validateWord)=>{
  try{
    let letterArr   = validateWord.toLowerCase().split('');
    let midPoint    = Math.floor(letterArr.length/2);
    let oddNum      = (letterArr.length%2);
    let firstHalf   = letterArr.splice(0,midPoint);
    let secondHalf  = letterArr.splice((oddNum>0?1:0),midPoint).reverse();
    let match       = true;
    //Compare each array elem in first array with second array
    firstHalf.forEach((elem,index) =>{
        if (elem !== secondHalf[index]) match = false;
    });
    return match;
  }catch(e){
    document.getElementById("resultField").innerHTML = err.message;
    return false;
  }
}
