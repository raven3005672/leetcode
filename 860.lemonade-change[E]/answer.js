/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let pocket = {
        five: 0,
        ten: 0,
        twenty: 0
    };
    for (let i = 0; i < bills.length; i++) {
        switch (bills[i]) {
            case 5:
                pocket.five += 1;
                break;
            case 10:
                if (pocket.five > 0) {
                    pocket.five -= 1;
                    pocket.ten += 1;
                    break;
                } else {
                    return false;
                }
                case 20:
                    if (pocket.five > 0 && pocket.ten > 0) {
                        pocket.five -= 1;
                        pocket.ten -= 1;
                        pocket.twenty += 1
                    } else if (pocket.five > 2) {
                        pocket.five -= 3;
                        pocket.twenty += 1;
                    } else {
                        return false;
                    }
        }
    }
    return true;
};