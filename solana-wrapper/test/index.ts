const tests = require.context('./', true, /\.spec\.tsx?$/)

tests.keys().forEach(tests)

const sources = require.context('../src/', true, /\.tsx?$/)

sources.keys().forEach(sources)
// window.open('http://localhost:9876/');