const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    writing () {
        
        //把每一个文件通过模板转换到目标路径
        const templates = [
            '.gitignore',
            'babel.config.js',
            'package.json',
            'README.md',
            'public/favicon.ico',
            'public/index.html',
            'src/App.vue',
            'src/main.js',
            'src/router/index.js',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/store/index.js',
            'src/views/Element.vue',
            'src/views/Home.vue',
            'src/views/Iview.vue'
          ]
 
          templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
              )
          })
    }
    // 传入一个prompting方法用于在用户执行工具时，输入一些信息
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Input Your Project Name',
                default: this.appname
            }
        ])
            .then(answers => {
                this.answers = answers
            })
    }
}