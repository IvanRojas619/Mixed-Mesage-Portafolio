// array with some advices that the program random choose

const advices = ['take time to know yourself.',
    'be patient and persistent.',
    'eat fruits and vegetables.',
    'trust your instincs.',
    'learn something new everyday.',
    'believe in yoursefl.',
    'to do some exercise daily.',
    'sleep at least 8 hours at day.',
    'study daily.',
    'take a bath daily.',
    'organize your tasks to improve your times.'];

// function return a random number

function getRandomNumber(num) {

    return Math.floor(Math.random() * num);

}

function chooseAdviceRandomly(callback) {

    //Select the random advice using the index of advices array[] to choose;
let num = callback(advices.length);


    switch (num) {
        case 0:
            return `You should: ${advices[0]}`;
            break;
        case 1:
            return `You should: ${advices[1]}`;
            break;
        case 2:
            return `You should: ${advices[2]}`;
            break;
        case 3:
            return `You should: ${advices[3]}`;
            break;
        case 4:
            return `You should: ${advices[4]}`;
            break;
        case 5:
            return `You should: ${advices[5]}`;
            break;
        case 6:
            return `You should: ${advices[6]}`;
            break;
        case 7:
            return `You should: ${advices[7]}`;
            break;
        case 8:
            return `You should: ${advices[8]}`;
            break;
        case 9:
            return `You should: ${advices[9]}`;
            break;
        case 10:
            return `You should: ${advices[10]}`;
            break;
        default:
            return 'There´s no entries';
            break;

    }

}
// Shows de advice in console
console.log(chooseAdviceRandomly(getRandomNumber));