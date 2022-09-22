const formatter = new Intl.RelativeTimeFormat('en');

const diff = new Date() - new Date('4/18/2007')

const x = formatter.format(-diff / (1000*60*60*24), 'days')

console.log(x)