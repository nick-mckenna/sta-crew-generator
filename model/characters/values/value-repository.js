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
    'I will not interfere in the development of another species',
    'I despise weakness',
    'I don\'t believe in the no-win scenario',
    'Always be the smartest person in the room',
    'Measure twice, cut once',
    'First of all, do no harm',
    'It is better to die than shirk one\'s duty',
    'Embrace all life in its myriad forms',
    'Learn all the knowledge that the universe has to offer',
    'Compassion and understanding are the best solutions',
    'Infect others with your enthusiasm',
    'Work is more fun than fun',
    'The ideals of the Federation are worth dying for',
    'The only way to get things done is by breaking the rules',
    'The Captain\'s life is more important than the ship',
    'The safety of my ship is my number one concern',
    'Never tell the truth when a lie will do',
    'All Cardassians are to be hated',
    'Klingons cannot be trusted',
    'Romulans are my mortal enemy',
    'Growing new life is superior to seeking out new life',
    'Greed is good',
    'I love to emulate Klingon culture',
    'The more we argue, the better our ideas are',
    'I thrive on the challenges of the frontier',
    'Justice is more important than right or wrong',
    'My crew are my family',
    'Restrain the best within',
    'Let the beast loose',
    'Democracy is more important than life',
    'Victory is life',
    'I\'d rather read a technical manual than go on holiday',
    'I\'d rather be brave than smart',
    'Animals are our best friends',
    'Success is derived from  bloody-minded refusal to quit',
    'Friends are made through kindness and thoughtfulness',
    'War is hell',
    'Mastery of a discipline is essential',
    'Be open and transparent and you\'ll never have to remember your lies',
    'Success is created from peaceful confidence',
    'Find the ethical approach, not the quick and easy path',
    'Strength in the face of certain defeat is the greatest of virtues',
    'Team wor makes the dream work',
    'Simplicity is the ultimate sophistication',
    'Doing things with style is more important thn doing them well',
    'Rely on yourself - others cannot be trusted',
    'Use your head before your heart or your gut',
    'Always go with your gut',
    'Always go with your heart',
    'Great results justify any approach',
    'Sacrifice your life for your family',
    'When you are at your most terrified, show no fear',
    'When conflict arises, find common ground',
    'Communication is the key to peace',
    'Give everything you have to those in need',
    'Never bodge a job',
    'Rigorous evaluation of the evidence leads to excellent conclusions',
    'Peace and harmony are more important than justice',
    'The search for truth drives me',
    'We flourish because of our differences',
    'I enjoy the benefits of structure and order',
    'Empathise and you\'ll understand why',
    'I cannot rest while my enemies remain standing',
    'All sentient creatures are born equal',
    'I cannot be alone',
    'Welcome those who have nothing as they have the most to offer',
    'Nothing is as it seems',
    'When the world is exploding around you, focus on the job in front of you',
    'It\'s a game of risk if you\'re going to sit in that chair',
    'Being right is the most important thing',
    'I\'ll take care of my friends if it kills me',
    'If everyone would just follow my instructions, this would go a lot better',
    'A messy mind creates novel solutions',
    'Riddles fascinate me',
    'I will not sleep until justice is served',
    'A relaxed environment is essential to problem solving',
    'A well-organised environment is critical to success'
];

const randomValue = (currentValues) => {

    let found = null;

    while (found == null) {
        let candidate = allValues[getRandomInt(allValues.length)];

        if (currentValues.includes(candidate) == false) {
            found = candidate;
        }
    }

    return [...found, ...currentValues];
}

module.exports.randomValue = randomValue;