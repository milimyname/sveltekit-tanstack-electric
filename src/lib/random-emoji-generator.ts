const emojis = [
	'😄',
	'😃',
	'😀',
	'😊',
	'☺',
	'😉',
	'😍',
	'😘',
	'😚',
	'😗',
	'😙',
	'😜',
	'😝',
	'😛',
	'😳',
	'😁',
	'😔',
	'😌',
	'😒',
	'😞',
	'😣',
	'😢',
	'😂',
	'😭',
	'😪',
	'😥',
	'😰',
	'😅',
	'😓',
	'😩',
	'😫',
	'😨',
	'😱',
	'😠',
	'😡',
	'😤',
	'😖',
	'😆',
	'😋',
	'😷',
	'😎',
	'😴',
	'😵',
	'😲',
	'😟',
	'😦',
	'😧',
	'😈',
	'👿',
	'😮',
	'😬',
	'😐',
	'😕',
	'😯',
	'😶',
	'😇',
	'😏',
	'😑',
	'👲',
	'👳',
	'👮',
	'👷',
	'💂',
	'👶',
	'👦',
	'👧',
	'👨',
	'👩',
	'👴',
	'👵',
	'👱',
	'👼',
	'👸',
	'😺',
	'😸',
	'😻',
	'😽',
	'😼',
	'🙀',
	'😿',
	'😹',
	'😾',
	'👹',
	'👺',
	'🙈',
	'🙉',
	'🙊',
	'💀',
	'👽',
	'💩',
	'🔥',
	'✨',
	'🌟',
	'💫',
	'💥',
	'💢',
	'💦',
	'💧',
	'💤',
	'💨',
	'👂',
	'👀',
	'👃',
	'👅',
	'👄',
	'👍',
	'👎',
	'👌',
	'👊',
	'✊',
	'✌',
	'👋',
	'✋',
	'👐',
	'👆',
	'👇',
	'👉',
	'👈',
	'🙌',
	'🙏',
	'☝',
	'👏',
	'💪',
	'🚶',
	'🏃',
	'💃',
	'👫',
	'👪',
	'👬',
	'👭',
	'💏',
	'💑',
	'👯',
	'🙆',
	'🙅',
	'💁',
	'🙋',
	'💆',
	'💇',
	'💅',
	'👰',
	'🙎',
	'🙍',
	'🙇',
	'🎩',
	'👑',
	'👒',
	'👟',
	'👞',
	'👡',
	'👠',
	'👢',
	'👕',
	'👔',
	'👚',
	'👗',
	'🎽',
	'👖',
	'👘',
	'👙',
	'💼',
	'👜',
	'👝',
	'👛',
	'👓',
	'🎀',
	'🌂',
	'💄',
	'💛',
	'💙',
	'💜',
	'💚',
	'❤',
	'💔',
	'💗',
	'💓',
	'💕',
	'💖',
	'💞',
	'💘',
	'💌',
	'💋',
	'💍',
	'💎',
	'👤',
	'👥',
	'💬',
	'👣',
	'💭',
	'🐶',
	'🐺',
	'🐱',
	'🐭',
	'🐹',
	'🐰',
	'🐸',
	'🐯',
	'🐨',
	'🐻',
	'🐷',
	'🐽',
	'🐮',
	'🐗',
	'🐵',
	'🐒',
	'🐴',
	'🐑',
	'🐘',
	'🐼',
	'🐧',
	'🐦',
	'🐤',
	'🐥',
	'🐣',
	'🐔',
	'🐍',
	'🐢',
	'🐛',
	'🐝',
	'🐜',
	'🐞',
	'🐌',
	'🐙',
	'🐚',
	'🐠',
	'🐟',
	'🐬',
	'🐳',
	'🐋',
	'🐄',
	'🐏',
	'🐀',
	'🐃',
	'🐅',
	'🐇',
	'🐉',
	'🐎',
	'🐐',
	'🐓',
	'🐕',
	'🐖',
	'🐁',
	'🐂',
	'🐲',
	'🐡',
	'🐊',
	'🐫',
	'🐪',
	'🐆',
	'🐈',
	'🐩',
	'🐾',
	'💐',
	'🌸',
	'🌷',
	'🍀',
	'🌹',
	'🌻',
	'🌺',
	'🍁',
	'🍃',
	'🍂',
	'🌿',
	'🌾',
	'🍄',
	'🌵',
	'🌴',
	'🌲',
	'🌳',
	'🌰',
	'🌱',
	'🌼',
	'🌐',
	'🌞',
	'🌝',
	'🌚',
	'🌑',
	'🌒',
	'🌓',
	'🌔',
	'🌕',
	'🌖',
	'🌗',
	'🌘',
	'🌜',
	'🌛',
	'🌙',
	'🌍',
	'🌎',
	'🌏',
	'🌋',
	'🌌',
	'🌠',
	'⭐',
	'☀',
	'⛅',
	'☁',
	'⚡',
	'☔',
	'❄',
	'⛄',
	'🌀',
	'🌁',
	'🌈',
	'🌊',
	'🎍',
	'💝',
	'🎎',
	'🎒',
	'🎓',
	'🎏',
	'🎆',
	'🎇',
	'🎐',
	'🎑',
	'🎃',
	'👻',
	'🎅',
	'🎄',
	'🎁',
	'🎋',
	'🎉',
	'🎊',
	'🎈',
	'🎌',
	'🔮',
	'🎥',
	'📷',
	'📹',
	'📼',
	'💿',
	'📀',
	'💽',
	'💾',
	'💻',
	'📱',
	'☎',
	'📞',
	'📟',
	'📠',
	'📡',
	'📺',
	'📻',
	'🔊',
	'🔉',
	'🔈',
	'🔇',
	'🔔',
	'🔕',
	'📢',
	'📣',
	'⏳',
	'⌛',
	'⏰',
	'⌚',
	'🔓',
	'🔒',
	'🔏',
	'🔐',
	'🔑',
	'🔎',
	'💡',
	'🔦',
	'🔆',
	'🔅',
	'🔌',
	'🔋',
	'🔍',
	'🛁',
	'🛀',
	'🚿',
	'🚽',
	'🔧',
	'🔩',
	'🔨',
	'🚪',
	'🚬',
	'💣',
	'🔫',
	'🔪',
	'💊',
	'💉',
	'💰',
	'💴',
	'💵',
	'💷',
	'💶',
	'💳',
	'💸',
	'📲',
	'📧',
	'📥',
	'📤',
	'✉',
	'📩',
	'📨',
	'📯',
	'📫',
	'📪',
	'📬',
	'📭',
	'📮',
	'📦',
	'📝',
	'📄',
	'📃',
	'📑',
	'📊',
	'📈',
	'📉',
	'📜',
	'📋',
	'📅',
	'📆',
	'📇',
	'📁',
	'📂',
	'✂',
	'📌',
	'📎',
	'✒',
	'✏',
	'📏',
	'📐',
	'📕',
	'📗',
	'📘',
	'📙',
	'📓',
	'📔',
	'📒',
	'📚',
	'📖',
	'🔖',
	'📛',
	'🔬',
	'🔭',
	'📰',
	'🎨',
	'🎬',
	'🎤',
	'🎧',
	'🎼',
	'🎵',
	'🎶',
	'🎹',
	'🎻',
	'🎺',
	'🎷',
	'🎸',
	'👾',
	'🎮',
	'🃏',
	'🎴',
	'🀄',
	'🎲',
	'🎯',
	'🏈',
	'🏀',
	'⚽',
	'⚾',
	'🎾',
	'🎱',
	'🏉',
	'🎳',
	'⛳',
	'🚵',
	'🚴',
	'🏁',
	'🏇',
	'🏆',
	'🎿',
	'🏂',
	'🏊',
	'🏄',
	'🎣',
	'☕',
	'🍵',
	'🍶',
	'🍼',
	'🍺',
	'🍻',
	'🍸',
	'🍹',
	'🍷',
	'🍴',
	'🍕',
	'🍔',
	'🍟',
	'🍗',
	'🍖',
	'🍝',
	'🍛',
	'🍤',
	'🍱',
	'🍣',
	'🍥',
	'🍙',
	'🍘',
	'🍚',
	'🍜',
	'🍲',
	'🍢',
	'🍡',
	'🍳',
	'🍞',
	'🍩',
	'🍮',
	'🍦',
	'🍨',
	'🍧',
	'🎂',
	'🍰',
	'🍪',
	'🍫',
	'🍬',
	'🍭',
	'🍯',
	'🍎',
	'🍏',
	'🍊',
	'🍋',
	'🍒',
	'🍇',
	'🍉',
	'🍓',
	'🍑',
	'🍈',
	'🍌',
	'🍐',
	'🍍',
	'🍠',
	'🍆',
	'🍅',
	'🌽',
	'🏠',
	'🏡',
	'🏫',
	'🏢',
	'🏣',
	'🏥',
	'🏦',
	'🏪',
	'🏩',
	'🏨',
	'💒',
	'⛪',
	'🏬',
	'🏤',
	'🌇',
	'🌆',
	'🏯',
	'🏰',
	'⛺',
	'🏭',
	'🗼',
	'🗾',
	'🗻',
	'🌄',
	'🌅',
	'🌃',
	'🗽',
	'🌉',
	'🎠',
	'🎡',
	'⛲',
	'🎢',
	'🚢',
	'⛵',
	'🚤',
	'🚣',
	'⚓',
	'🚀',
	'✈',
	'💺',
	'🚁',
	'🚂',
	'🚊',
	'🚉',
	'🚞',
	'🚆',
	'🚄',
	'🚅',
	'🚈',
	'🚇',
	'🚝',
	'🚋',
	'🚃',
	'🚎',
	'🚌',
	'🚍',
	'🚙',
	'🚘',
	'🚗',
	'🚕',
	'🚖',
	'🚛',
	'🚚',
	'🚨',
	'🚓',
	'🚔',
	'🚒',
	'🚑',
	'🚐',
	'🚲',
	'🚡',
	'🚟',
	'🚠',
	'🚜',
	'💈',
	'🚏',
	'🎫',
	'🚦',
	'🚥',
	'⚠',
	'🚧',
	'🔰',
	'⛽',
	'🏮',
	'🎰',
	'♨',
	'🗿',
	'🎪',
	'🎭',
	'📍',
	'🚩',
	'⬆',
	'⬇',
	'⬅',
	'➡',
	'🔠',
	'🔡',
	'🔤',
	'↗',
	'↖',
	'↘',
	'↙',
	'↔',
	'↕',
	'🔄',
	'◀',
	'▶',
	'🔼',
	'🔽',
	'↩',
	'↪',
	'ℹ',
	'⏪',
	'⏩',
	'⏫',
	'⏬',
	'⤵',
	'⤴',
	'🆗',
	'🔀',
	'🔁',
	'🔂',
	'🆕',
	'🆙',
	'🆒',
	'🆓',
	'🆖',
	'📶',
	'🎦',
	'🈁',
	'🈯',
	'🈳',
	'🈵',
	'🈴',
	'🈲',
	'🉐',
	'🈹',
	'🈺',
	'🈶',
	'🈚',
	'🚻',
	'🚹',
	'🚺',
	'🚼',
	'🚾',
	'🚰',
	'🚮',
	'🅿',
	'♿',
	'🚭',
	'🈷',
	'🈸',
	'🈂',
	'Ⓜ',
	'🛂',
	'🛄',
	'🛅',
	'🛃',
	'🉑',
	'㊙',
	'㊗',
	'🆑',
	'🆘',
	'🆔',
	'🚫',
	'🔞',
	'📵',
	'🚯',
	'🚱',
	'🚳',
	'🚷',
	'🚸',
	'⛔',
	'✳',
	'❇',
	'❎',
	'✅',
	'✴',
	'💟',
	'🆚',
	'📳',
	'📴',
	'🅰',
	'🅱',
	'🆎',
	'🅾',
	'💠',
	'➿',
	'♻',
	'♈',
	'♉',
	'♊',
	'♋',
	'♌',
	'♍',
	'♎',
	'♏',
	'♐',
	'♑',
	'♒',
	'♓',
	'⛎',
	'🔯',
	'🏧',
	'💹',
	'💲',
	'💱',
	'©',
	'®',
	'™',
	'〽',
	'〰',
	'🔝',
	'🔚',
	'🔙',
	'🔛',
	'🔜',
	'❌',
	'⭕',
	'❗',
	'❓',
	'❕',
	'❔',
	'🔃',
	'🕛',
	'🕧',
	'🕐',
	'🕜',
	'🕑',
	'🕝',
	'🕒',
	'🕞',
	'🕓',
	'🕟',
	'🕔',
	'🕠',
	'🕕',
	'🕖',
	'🕗',
	'🕘',
	'🕙',
	'🕚',
	'🕡',
	'🕢',
	'🕣',
	'🕤',
	'🕥',
	'🕦',
	'✖',
	'➕',
	'➖',
	'➗',
	'♠',
	'♥',
	'♣',
	'♦',
	'💮',
	'💯',
	'✔',
	'☑',
	'🔘',
	'🔗',
	'➰',
	'🔱',
	'🔲',
	'🔳',
	'◼',
	'◻',
	'◾',
	'◽',
	'▪',
	'▫',
	'🔺',
	'⬜',
	'⬛',
	'⚫',
	'⚪',
	'🔴',
	'🔵',
	'🔻',
	'🔶',
	'🔷',
	'🔸',
	'🔹'
];

export function randomEmojiGenerator() {
	return emojis[Math.floor(Math.random() * emojis.length)];
}