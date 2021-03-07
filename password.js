const _ = require('lodash');

const password = (charsQuantity) => {
  // Implement function
  const regex = new RegExp(/^\d+$/);

  // check if it isnt a number
  if (typeof charsQuantity !== 'number') {
    return 'Not A Number';
    // if it is....
  } else if (typeof charsQuantity === 'number') {
    // if it is not a whole number
    if (!Number.isInteger(charsQuantity)) {
      return 'Not An Integer';
      // its lower than 3
    } else if (charsQuantity < 4 && typeof charsQuantity === 'number') {
      return 'Minimum length allowed: 4';
    } else {
      const generatePassword = (num) => {
        // nope

        // let charset1 = "abcdefghijklmnopqrstuvwxyz";
        // let charset2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // let charset3 = "0123456789";
        // let charset4 = "!#@$%^&*";

        // yep - make an array with the 4 charsets
        let pickArr = [
          'abcdefghijklmnopqrstuvwxyz',
          'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          '0123456789',
          '!#@$%^&*',
        ];

        // set password length limit
        let length = num;
        let retVal = '';

        // set 4 groups to ultimately pick randomly from
        let pick1 = '';
        let pick2 = '';
        let pick3 = '';
        let pick4 = '';

        //initialise index of charset array to pick from
        let pick = 0;
        // do a barrel roll
        for (let i = 0; i < length; ++i) {
          // make sure each picker function operates within length of charset
          let n = pickArr[pick].length;

          // push random chars to pick groups
          if (pick === 0) {
            pick1 += pickArr[pick].charAt(Math.floor(Math.random() * n));
          }
          if (pick === 1) {
            pick2 += pickArr[pick].charAt(Math.floor(Math.random() * n));
          }
          if (pick === 2) {
            pick3 += pickArr[pick].charAt(Math.floor(Math.random() * n));
          }
          if (pick === 3) {
            pick4 += pickArr[pick].charAt(Math.floor(Math.random() * n));
          }
          // increment pick index
          if (pick < 3) {
            pick += 1;
          } else if (pick === 3) {
            pick = 0;
          }
        }

        //concat the pick strings

        const unshuffled = pick1 + pick2 + pick3 + pick4;
        const numArr = [];
        // make an array of unique numbers up to password length
        for (let i = 1; i <= charsQuantity; i++) {
          do {
            // LODASH!!!!
            random = _.random(0, charsQuantity - 1);
          } while (numArr.includes(random)); // will return false if random isn't asigned

          numArr.push(random);
        }
        // use numArr to shuffle unshuffled and push to an array
        const shuffleArr = [];

        numArr.forEach((num) => {
          shuffleArr.push(unshuffled[num]);
        });

        // join the shuffled array and return

        const shuffled = shuffleArr.join('');

        return shuffled;
      };

      // call generate password with required length, and return
      const password = generatePassword(charsQuantity);

      return password;

      //
    }
  }
};

module.exports = password;
