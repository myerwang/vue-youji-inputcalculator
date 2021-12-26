import InputCalculator from './directive';

InputCalculator.install = Vue => {
  Vue.directive(InputCalculator.name, InputCalculator);
};

export default InputCalculator;
