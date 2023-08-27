# Mindscript Training Library

This is a training library for Mindscript models based on a user-friendly terminal UI. It supports simple training with tokenized or non-tokenized text.

## Installation

Install the `@mindlearn/train` library using npm:

```bash
npm install @mindlearn/train
```

## Usage

1. Import the `train` function and specify the `modelPath`:

```javascript
const train = require('@mindlearn/train');

const modelPath = './simple.json';
```

2. Use the `train` function to initiate training:

```javascript
// To train with tokenized text
train(true, modelPath);

// To train with non-tokenized text
train(false, modelPath);
```

3. Follow the prompts in the terminal to provide training data and responses.

**Code example:**

```js
const train = require('@mindlearn/train');

const modelPath = './simple.json';
// To train with tokenized text
train(true, modelPath);
```

## Running

To run the training "UI", run:

```bash
node train.js
```

