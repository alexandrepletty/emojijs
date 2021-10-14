# Emoji-node
![](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)
![](https://img.shields.io/badge/Version-1.0.0-blueviolet?style=flat-square)

💻 [Website](https://alexandrepletty.com/)

### 🛠️ Installation
To set up the project run the following command
```
npm install emoji-node
```
or if you use yarn
```
yarn add emoji-node
```

### 📰 Usage
Import into the file where you want to use this dependency:

```javascript
const emojie = require('moji-node')
```
or

```javascript
const {stringify, parse} = require('moji-node')
```

### 🪄 Stringify
the X function allows you to transform a text with emojis into code to be able to easily save them in a database  

To transform a text that includes emojis you must use the **stringify** function :
```javascript
let text = 'Hello ➰'
stringify(text)
```
He will return :
```text
Hello [27B0]
```

### 🔎 Parse
The parse function is used when you want to transform a text with an emoji code  

To display the text that has an emoji use the **parse** function
```javascript
let text = 'Hello [27B0]'
parse(text)
```
He will return :
```text
Hello ➰
```