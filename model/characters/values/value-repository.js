'use strict';

const { getRandomInt } = require("../../misc");

const allValues = [

    'I\'d take a disruptor blast for my Captain',
    'Starfleet is always right',
    'The Federation is always right',
    'Logic tells us everything we need to know about the universe',
    'Take care of yourself before anyone else',
    'You can\'t trust strangers',
    'The most interesting life is alien life',
    'Today is a good day to die',
    'Family is more important than anything',
    'Freedom trumps stability every time',
    'Law and order are most important than individual liberty',
    'I love the chaos',
    'I am committed to the success of the mission above all else',
    'The survival of the Federation is my highest goal',
    'I\'ll take efficiency over creativity any time',
    'Education solves all of life\'s problems',
    'Persevere with your very last breath',
    'Fighting is a fool\'s option',
    'I\'d die before betraying a friend',
    'My faith in my religion will overcome all obstacles',
    'No risk, no reward',
    'Listen to everyone\'s ideas, no matter how much I disagree',
    'A brutal truth is better than a lie',
    'The natural world is our most treasured possession',
    'Science will explain all things',
    'I will not interfere in the development of anotehr species'

];

const randomValue = () => {
    return allValues[getRandomInt(allValues.length)];
}

module.exports.randomValue = randomValue;