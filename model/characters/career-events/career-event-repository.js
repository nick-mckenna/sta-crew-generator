'use strict';

const { CareerEvent } = require("./career-event");
const { characterAttributes, randomAttributeExclude, randomAttribute } = require("./../character-attributes");
const { characterDisciplines, randomDiscipline } = require("./../character-disciplines");
const { getRandomInt } = require("../../misc");

const getAllCareerEvents = () => {

    return [

        new CareerEvent('Ship Destroyed', characterAttributes().daring, characterDisciplines().security, ['Extra Vehicular Operations', 'Small Craft', 'Survival']),
        new CareerEvent('Death Of A Friend', characterAttributes().insight, characterDisciplines().medicine, ['Counselling']),
        new CareerEvent('Lauded By Another Culture', characterAttributes().presence, characterDisciplines().science, ['Friend To The Andorians', 'Friend To The Bajorans', 'Friend To The Betazoids', 'Friend To The Denobulans', 'Friend To The Humans', 'Friend To The Tellarites', 'Friend To The Trill', 'Friend To The Vulcans']),
        new CareerEvent('Negotiate A Treay', characterAttributes().control, characterDisciplines().command, ['Diplomacy', 'Negotiation', 'Galactic Politics']),
        new CareerEvent('Required To Take Command', characterAttributes().daring, characterDisciplines().command, ['Lead By Example', 'Inspiration', 'Composure']),
        new CareerEvent('Encounter With A Truly Alien Being', characterAttributes().reason, characterDisciplines().science, ['Empathy', 'Philosophy', 'Xenobiology']),
        new CareerEvent('Serious Injury', characterAttributes().fitness, characterDisciplines().medicine, ['Athletics', 'Art', 'Philosophy']),
        new CareerEvent('Conflict With A Hostile Culture', characterAttributes().fitness, characterDisciplines().security, ['Hand Phasers', 'Hand-to-Hand Combat', 'Shipboard Tactical Systems']),
        new CareerEvent('Mentored', randomAttribute(), characterDisciplines().conn, ['Composure', 'Etiquette']),
        new CareerEvent('Transporter Accident', characterAttributes().control, characterDisciplines().conn, ['Transporters And Replicators', 'Small Craft', 'Quantum Mechanics']),
        new CareerEvent('Dealing With A Plague', characterAttributes().insight, characterDisciplines().medicine, ['Infectious Diseases', 'Emergency Medicine', 'Triage']),
        new CareerEvent('Betrayed Ideals For A Superior', characterAttributes().presence, characterDisciplines().command, ['Persuasion', 'Inspiration', 'Investigation']),
        new CareerEvent('Called Out By A Superior', characterAttributes().reason, characterDisciplines().conn, ['Uniform Code of Justice', 'History', 'Starfleet Protocol']),
        new CareerEvent('New Battle Strategy', characterAttributes().daring, characterDisciplines().security, ['Combat Tactics', 'Hazard Awareness', 'Lead By Example']),
        new CareerEvent('Learns Unique Language', characterAttributes().insight, characterDisciplines().science, ['Linguistics', 'Cultural Studies', 'Negotiations']),
        new CareerEvent('Discovers An Artefact', characterAttributes().reason, characterDisciplines().engineering, ['Ancient Technology', 'Computers', 'Reverse Engineering']),
        new CareerEvent('Special Commendation', characterAttributes().fitness, randomDiscipline(), ['Athletics', 'Survival', 'Emergency Medicine']),
        new CareerEvent('Solved An Engineering Crisis', characterAttributes().control, characterDisciplines().engineering, ['Electro-Plasma Power Systems', 'Fusion Reactors', 'Warp Engines']),
        new CareerEvent('Breathrough Or Invention', randomAttribute(), characterDisciplines().engineering, ['Experimental Technology', 'Invention', 'Improvisation']),
        new CareerEvent('First Contact', characterAttributes().presence, randomDiscipline(), ['Cultural Studies', 'Diplomacy', 'Infiltration'])
    ];
}

const randomCareerEvent = (excluding = []) => {
    
    const options = getAllCareerEvents();
    let found = null;

    while (found == null) {
        let candidate = options[getRandomInt(options.length)];

        if (excluding.find(element => element.name === candidate.name) == null) {
            found = candidate;
        }
    }

    return found;
};

module.exports.randomCareerEvent = randomCareerEvent;