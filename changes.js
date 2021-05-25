/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */


function fewestCoinChange(cents){
    let coins_needed = {quarter: 0, dime: 0, nickel: 0, penny: 0};
    while (cents >= 25){
        cents -= 25;
        coins_needed.quarter ++;
    }
    while (cents >= 10){
        cents -= 10;
        coins_needed.dime ++;
    }
    while (cents >= 5){
        cents -= 5;
        coins_needed.nickel ++;
    }
    while (cents >= 1){
        cents -= 1;
        coins_needed.penny ++;
    }
    return coins_needed;
}


function fewestCoinChange(cents) {
    let coin_value = [25, 10, 5, 1];
    let coin_name = ['quarter', 'dime', 'nickel', 'penny'];
    let coins_needed = {quarter: 0, dime: 0, nickel: 0, penny: 0};

    for(let i=0; i<coin_value.length; i++){
        while(cents >= coin_value[i]){
            cents -= coin_value[i];
            coins_needed[ coin_name[i] ] ++;
        }
    }

    return coins_needed;
    //first we see how many quarters fit into cents
    //Divide cents by quarter_value (25) and math.floor the answer to get number of quarters
    //Next, we modular divide cents by 25 to get the remaining cents we need to divide up.
    //Repeat for dimes, nickles, and pennies.
}


console.log(fewestCoinChange(99));


