/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let pointX = 0,pointY = 0,currentDir = 1;//1:前,2:左，3:后，4:右

    instructions = instructions.repeat(4)
        
    for(let i = 0; i < instructions.length; i++){
        
        let instruction = instructions[i]

        switch (instruction) {
            case 'L':
                currentDir++
                break;
            case 'R':
                currentDir+=3
                break;
            case 'G':
                {
                    switch (currentDir%4) {
                        case 1:
                        pointY++
                        break;
                        case 2:
                        pointX--
                        break;
                        case 3:
                        pointY--
                        break;
                        case 0:
                        pointX++
                        break;
                
                        default:
                            break;
                    }    
                }
                break;
        
            default:
                break;
        }
    }

    return (pointX == 0 && pointY == 0)
};