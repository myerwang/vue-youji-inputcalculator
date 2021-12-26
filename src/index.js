import InputCalculator from './plugin/index';
import calculatorComponent from './plugin/calculator.vue';

const directives = [
  InputCalculator
];

const install = function(Vue) {
  
  // 安装界面
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
  const CalculatorConstructor = Vue.extend(calculatorComponent);
  // 生成一个该子类的实例
  const instance = new CalculatorConstructor();

  // 将这个实例挂载在我创建的div上
  // 并将此div加入全局挂载点内部
  instance.$mount(document.createElement('div'));
  document.body.appendChild(instance.$el);
  
  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法 
  Vue.prototype.$CalculatorOpen = (el, x = 0, y = 0, zIndex = 99999) => {
    instance.el = el;
    instance.show = true;
    instance.zIndex = zIndex;
    instance.left = x + 'px';
    instance.top = y + 'px';
    console.log('CalculatorOpen', el);
  }
  Vue.prototype.$CalculatorClose = () => {
    instance.show = false;
 }

  // 安装指令
  directives.map(directive => {
    Vue.directive(directive.name, directive)
  });
  
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  InputCalculator,
  calculatorComponent,
}