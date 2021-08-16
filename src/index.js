module.exports = function toReadable (number) {
    function toReadable(number) {
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
      
          for(let i = 0; i<=unitsNumber.length; i++) {
            if(number==unitsNumber[i])
            return (unitsWords[i]);
          }
          
          for(let i = 0; i<=dozensNumder.length; i++) {
            if(number==dozensNumder[i])
          return (dozensWords[i]);
          }
          for (let i = 0; i <= unitsNumber.length; i++) {
            if (number / 10 == dozensNumder[i] && number % 100 !== 0) 
            console.log (`${dozensWords[i]} hundred`);
          }
          if(number % 100 == 0){
            for (let i = 0; i <= unitsNumber.length; i++) {
                if (number / 100 == unitsNumber[i]) 
                console.log  (unitsWords[i], 'hundred')
              }
        }
        if ((number / 10) && number / 10 > 1 && number / 10 < 10) {
          let units = number % 10;
          let dozents = Math.trunc(number / 10);
          for (let i = 0; i <= unitsNumber.length; i++) {
            if (units == unitsNumber[i]) units = unitsWords[i];
          }
          for (let i = 0; i <= dozensNumder.length; i++) {
            if (dozents * 10 == dozensNumder[i]) dozents = dozensWords[i];
          }
          console.log(`${dozents} ${units}`);
        }
        }
      
        toReadable(`${['2000']}`)
        
}
