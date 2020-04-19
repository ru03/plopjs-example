module.exports = {
  description: 'Create a redux action or redux flow',
  prompts: [
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to create',
      choices: ['An Action', 'Redux flow'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Action Name',
    },
    {
      type: 'input',
      name: 'path',
      message: 'path',
    },
  ],
  actions: (data) => {
    let actions = [];
    if (data.action === 'An Action') {
      actions = actions.concat([{
        type: 'add',
        path: `src/components/{{path}}/{{name}}.js`,
        templateFile: 'plop-templates/component/{{name}}.js.hbs',
        abortOnFail: true,
      }]);
    } else {
      actions = actions.concat(
        {
          type: 'addMany',
          destination: 'src/actions/{{path}}/',
          base: 'plop-templates/reduxFlow/',
          templateFiles: 'plop-templates/reduxFlow/*.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `src/reducers/calls/{{path}}/{{name}}Requested.js`,
          templateFile: 'plop-templates/calls/calls.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `src/sagas/{{path}}/{{name}}.js`,
          templateFile: 'plop-templates/sagas/saga.js.hbs',
          abortOnFail: true,
        }
      );
    }
    return actions;
  }
};
