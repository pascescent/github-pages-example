let url = 'https://www.google.ccadsfom';
let newUrl = '';




if (url.startsWith('http://')) {
    url = url.slice(7)
} else if (url.startsWith('https://')) {
    url = url.slice(8)
}

if (url.startsWith('www.')) {
    url = url.slice(4)
}

newUrl = url.slice(0, url.indexOf('.') - url.length)


console.log(newUrl)







