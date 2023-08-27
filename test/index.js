const train = require('@mindlearn/train');

const modelPath = './simple.json';
train(true, modelPath); // put 'false' to not tokenize. | true = tokenized text.
