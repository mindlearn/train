const fs = require('fs');
const readlineSync = require('readline-sync');
const tokenizer = require('@mindlearn/tokenizer'); // Substitua pelo caminho correto para a biblioteca de tokenização

function train(tokenizeQuestion, modelPath) {
  let modelData = [];

  if (fs.existsSync(modelPath)) {
    const existingData = fs.readFileSync(modelPath, 'utf8');
    modelData = JSON.parse(existingData);
  }

  let idCounter = modelData.length > 0 ? modelData[modelData.length - 1].id + 1 : 1;

  while (true) {
    const question = readlineSync.question('Enter a question (or press Enter to finish): ');
    if (!question.trim()) {
      break;
    }

    const tokenizedQuestion = tokenizeQuestion ? tokenizer(question) : question;
    const answers = [];

    while (true) {
      const answer = readlineSync.question('Enter an answer (or press Enter to finish answers): ');
      if (!answer.trim()) {
        if (answers.length === 0) {
          console.log('Please provide at least one answer.');
        } else {
          break;
        }
      } else {
        const tokenizedAnswer = tokenizeQuestion ? tokenizer(answer) : answer;
        answers.push(tokenizedAnswer);
      }
    }

    modelData.push({
      id: idCounter,
      question: tokenizedQuestion,
      answers: answers
    });

    idCounter++;
  }

  saveModelData(modelData, modelPath);
}

function saveModelData(data, modelPath) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(modelPath, jsonData);
  console.log(`Model data saved to ${modelPath}`);
}

module.exports = train;
