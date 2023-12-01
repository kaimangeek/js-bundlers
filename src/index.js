import String from '/main.js'

import { name } from 'package.json'

function Hi() {
    console.log(String);
}

const goodBye = () => {
    console.log(name)
}

Hi()

goodBye();