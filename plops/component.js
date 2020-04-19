module.exports = {
  description: 'Create a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name:',
    },
    {
      type: 'input',
      name: 'path',
      message: 'Path (By default will be added in /src/components/):',
    },
  ],
  actions: data => {
    let defaultPath = 'src/components/';
    if (data.path) defaultPath = `${defaultPath}${data.path}/`
    return [{
      type: 'add',
      path: `${defaultPath}{{name}}.js`,
      templateFile: 'plop-templates/component/component.js.hbs',
      abortOnFail: true,
      skipIfExists: true,
    }];
  }
}