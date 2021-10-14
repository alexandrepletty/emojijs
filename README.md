# Moji-node
![](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)
![](https://img.shields.io/badge/Version-1.0.0-blueviolet?style=flat-square)
[![](https://img.shields.io/badge/NPM-1.0.0-red?style=flat-square)](https://www.npmjs.com/package/moji-node)
[![](https://img.shields.io/badge/💻-Website-blue?style=flat-square)](https://alexandrepletty.com/portfolio/cd18/moji-node)

![](https://cloud.alexandrepletty.com/app/media/a3573af1-7426-498c-a0d8-565ec723d817.png)

### 🛠️ Installation
To set up the project run the following command
```
npm install moji-node
```
or if you use yarn
```
yarn add moji-node
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
the stringify function allows you to transform a text with emojis into code to be able to easily save them in a database  

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
![](https://cloud.alexandrepletty.com/app/media/ff91f1f9-2ca4-4a99-9fd7-89c548b891cc.png)
