const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if(util.env.production) {// gulp --production
        sequence('deps', 'app')
        //gulp.start('deps', 'app')//execução paralela
    } else {
        sequence('deps', 'app', 'servidor')
        //gulp.start('deps', 'app', 'servidor')
    }
})
