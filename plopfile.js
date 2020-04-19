const { component, redux, views } = require('./plops');

module.exports = function (plop) {
  plop.setGenerator('Component', component);
  plop.setGenerator('Redux', redux);
  plop.setGenerator('Views', views);
}

// Basic Example
// module.exports = function (plop) {
//   plop.setGenerator('Basic Example', {
//     description: 'Create a view',
//     prompts: [{
//       type: 'input',
//       name: 'name',
//       message: 'Screen name',
//     }],
//     actions: [{
//       type: 'add',
//       path: `src/screens/{{name}}/{{name}}.js`,
//       templateFile: 'plop-templates/screen/screen.js.hbs',
//       abortOnFail: true,
//       skipIfExists: true,
//     }],
//   });
// }
