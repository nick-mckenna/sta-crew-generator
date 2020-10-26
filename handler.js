'use strict';

const {generateCrew} = require("./model/generator/generate-crew");

module.exports.generate = (event, context, callback) => {

  // Body of the POST is the generate instruction
  const generateInstruction = JSON.parse(event.body);

  const newCrew = generateCrew(generateInstruction);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(newCrew),
  };

  callback(null, response);
};
