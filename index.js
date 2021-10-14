// --- Dependencies
require('string.fromcodepoint')
const emojiData = require('emoji-datasource')
const _ = require('lodash')

// --- Turn emojis alone or in text into code
const stringify = text => {
	let result = ''

	// --- Parse emojiData
	_.each(emojiData, (val, key) => {
		emojiData[key].textValue = String.fromCodePoint(...val.unified.split('-').map(e => `0x${e}`))
	})

	// --- Parse text
	let arrText = _.toArray(text)

	// --- Loop to find emoji
	_.each(arrText, val => {
		// --- Find index emoji to text value
		let index = _.findIndex(emojiData, e => {
			return e.textValue === val
		})

		// --- Check index
		if(index > -1) {
			result += `[${emojiData[index]['unified']}]`
		}else {
			result += val
		}
	})

	// --- Return text and emoji code
	return result
}

// --- Parse the text to find an emoji code
const parse = text => {
	// --- Find emoji to emojiData
	_.each(emojiData, val => {
		let regex = new RegExp('\\['+val.unified+'\\]', 'g')
		let emoji = String.fromCodePoint(...val.unified.split('-').map(u => `0x${u}`))

		// --- Check text
		if(text) {
			// --- Replace text to emoji
			text = text.replace(regex, emoji)
		}
	})

	// --- Return text and emoji
	return text
}

module.exports = {stringify, parse}