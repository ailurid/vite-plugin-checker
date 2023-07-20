import { text } from './text'

var hello = 'Hello'

const notNumber: number = ':O'

const hi = `hi`

const rootDom = document.querySelector('#root')! as HTMLElement
rootDom.innerHTML = hello + text

export {}
