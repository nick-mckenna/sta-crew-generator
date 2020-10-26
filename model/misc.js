const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const deepClone = (source) => {

    return JSON.parse(JSON.stringify(source));
}

module.exports.getRandomInt = getRandomInt;
module.exports.deepClone = deepClone;