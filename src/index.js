// directives
import InputCalculator from './plugin/index';

const directives = [
  InputCalculator
];

const install = function(Vue) {
  directives.map(directive => {
    Vue.directive(directive.name, directive)
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  InputCalculator
}