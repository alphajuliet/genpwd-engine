// genpwd.js
// Main entry to genpwd

import * as R from 'ramda';

// Add generators
import * as generator_1 from './generator_1.js';
import * as generator_2 from './generator_2.js';
import * as generator_3 from './generator_3.js';
import * as generator_4 from './generator_4.js';

const generators = [
  generator_1,
  generator_2,
  generator_3,
  generator_4,
];

// Application metadata
const Info = {
  name: "GenPwd",
  author: "AndrewJ",
  version: "3.0.1",
  date: "2024-05-13",
  info: "GenPwd is a simple password generator.",
  aboutText: function () {
    let str = this.name + " v" + this.version;
    str += ", last modified: " + this.date;
    str += " by: " + this.author + ".\n\n";
    str += this.info;
    return str;
  }
};

// Available generators
const availableGenerators = [
  { id: 0, name: "Generator 0" },
  { id: 1, name: "Generator 1" },
  { id: 2, name: "Generator 2" },
  { id: 3, name: "Markov", default: true }
];

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

// Generate a list of random words from the chosen generator.
const generate = (params) => {
  const genId = parseInt(params.get('genId')) || 3;
  const generator = generators[genId];
  const nwords = parseInt(params.get('nwords')) || 10;
  const strength = parseInt(params.get('strength')) || 0;

  const options = {
    punctuation: params.get('punctuation') || null,
    numbers: params.get('numbers') || null,
    capitals: params.get('capitals') || null,
  };

  const wordList = R.map(() => generator.randomWord(strength, options), R.range(0, nwords));
  return new Response(JSON.stringify({ words: wordList }), {
    status: 200,
    headers: corsHeaders,
  });
};

const generatorList = () => {
  return new Response(JSON.stringify({ generators: availableGenerators }), {
    status: 200,
    headers: corsHeaders,
  });
};

export { Info, generate, generatorList, corsHeaders };

// The End
