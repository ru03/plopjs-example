module.exports = {
  description: 'Create a view',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'Screen name',
  }],
  actions: [{
    type: 'add',
    path: `src/screens/{{name}}/{{name}}.js`,
    templateFile: 'plop-templates/screen/screen.js.hbs',
    abortOnFail: true,
    skipIfExists: true,
  }],
}
