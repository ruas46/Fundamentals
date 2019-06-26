function hello(name) {
    return function (req, res, next) {
        console.log(`Hello ${name}!!`)
        next()
    }
}

module.exports = hello