module.exports = function toReadable (number) {
        let unitsNumber = [
          0,1,2,3, 4,5,6,7,8,9,10,11,12,13,14,15, 16, 17,18,19,
        ];
        let unitsWords = [
          "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
           "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen",
        ];
        let dozensNumder = [10, 20, 30, 40, 50, 60, 70, 80, 90];
          let dozensWords = [
              "ten","twenty", "thirty","forty","fifty", "sixty", "seventy", "eighty", "ninety",
          ];
      ///// 1-19
          for(let i = 0; i<=unitsNumber.length; i++) {
            if(number==unitsNumber[i])
            return (unitsWords[i]);
          }
          ///10 -90
          for(let i = 0; i<=dozensNumder.length; i++) {
            if(number==dozensNumder[i])
          return (dozensWords[i]);
          }
          for (let i = 0; i <= unitsNumber.length; i++) {
            if (number / 10 == dozensNumder[i] && number % 100 !== 0) 
            return (`${dozensWords[i]} hundred`);
          }
          /// 100 -900
          if(number % 100 == 0){
            for (let i = 0; i <= unitsNumber.length; i++) {
                if (number  == unitsNumber[i]) 
                return (`${unitsWords[i]} 'hundred`);
              }
        }
        if ((number / 10) && number / 10 > 1 && number / 10 < 10) {
          let units = number % 10;
          let dozens = Math.trunc(number / 10);
          for (let i = 0; i <= unitsNumber.length; i++) {
            if (units == unitsNumber[i]) units = unitsWords[i];
          }
          for (let i = 0; i <= dozensNumder.length; i++) {
            if (dozens * 10 == dozensNumder[i]) dozens = dozensWords[i];
          }
          return(`${dozens} ${units}`);
        }
         /////// 654,675
  if (
    !Number.isInteger(number / 10) &&
    number / 10 > 10 &&
    number / 10 < 100 &&
    number % 100 > 19
  ) {
    let hundreds = Math.trunc(number / 100);
    let dozens = Math.trunc(number / 10) % 10;
    let units = number % 10;
    
    for (let i = 0; i <= unitsNumber.length; i++) {
      if (hundreds == unitsNumber[i]) hundreds = unitsWords[i];
    }

    for (let i = 0; i <= unitsNumber.length; i++) {
      if (units == unitsNumber[i]) units = unitsWords[i];
    }

    for (let i = 0; i <= dozensNumder.length; i++) {
      if (dozens * 10 == dozensNumder[i] && dozens !== 0)
        dozens = dozensWords[i];
      if (dozens == 0) dozens = "";
    }

    
    return (`${hundreds}` + " hundred " + `${dozens} ${units}`);
  }
/////////// 101,605
  if (
    !Number.isInteger(number / 10) &&
    number / 10 > 10 &&
    number / 10 < 100 &&
    number % 100 < 10
  ) {
    let hundreds = Math.trunc(number / 100);
    let units = number % 10;
   

    for (let i = 0; i <= unitsNumber.length; i++) {
      if (hundreds == unitsNumber[i]) hundreds = unitsWords[i];
    }

    for (let i = 0; i <= unitsNumber.length; i++) {
      if (units == unitsNumber[i]) units = unitsWords[i];
    }
    return (`${hundreds}` + " hundred " + `${units}`);
  }
  ////////// 916 
  if (
    !Number.isInteger(number / 10) && number % 100 >= 10 && number % 100 <= 19
  ) {
    let hundreds = Math.trunc(number / 100);
    let units = number % 100;
    for (let i = 0; i <= unitsNumber.length; i++) {
      if (hundreds == unitsNumber[i]) hundreds = unitsWords[i];
    }
    for (let i = 0; i <= unitsNumber.length; i++) {
      if (units == unitsNumber[i]) units = unitsWords[i];
    }
    return (`${hundreds}` + " hundred " + `${units}`);
  }

  if (Number.isInteger(number / 10)) {
    let hundreds = Math.trunc(number / 100);

    let dozens = (number % 100) ;
    for (let i = 0; i <= unitsNumber.length; i++) {
      if (hundreds == unitsNumber[i]) hundreds = unitsWords[i];
    }

    for (let i = 0; i <= unitsNumber.length; i++) {
      if (dozens == dozensNumder[i]) dozens = dozensWords[i]
   
}
    
    return(`${hundreds}` + " hundred " + `${dozens}`);
  
}
        }
      
        toReadable(`${['1']}`)
        

