export default {
  name: 'youji-inputcalculator',
  inserted: function (el, binding, vnode) {
    el.onfocus = function (e) {
      const x = e.target.getBoundingClientRect().x;
      const y = e.target.getBoundingClientRect().y + e.target.getBoundingClientRect().height;
      vnode.context.$CalculatorOpen(el, x, y);
      console.log('bind onfocus', e.target.getBoundingClientRect());
    } // 得到焦点时
    // el.onblur = function (e) {
    //   vnode.context.$CalculatorClose();
    //   console.log('bind onblur', e);
    // } // 失去焦点时
    el.onmousedown = function (e) {
      // vnode.context.$CalculatorClose();
      console.log('bind onmousedown', e);
    } // 失去焦点时
    console.log('bind', el, binding);
  },
  update: function(el, binding, vnode, oldVnode) {
    console.log('update', el, binding, vnode, oldVnode);
  }
}
