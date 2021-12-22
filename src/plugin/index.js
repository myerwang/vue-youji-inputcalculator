import calculatorView from './calculator.vue';
import InputCalculator from './vue-youji-inputcalculator';

InputCalculator.install = Vue => {
  Vue.directive(InputCalculator.name, InputCalculator);
  Vue.component(calculatorView.name, calculatorView);
};

export default InputCalculator;
