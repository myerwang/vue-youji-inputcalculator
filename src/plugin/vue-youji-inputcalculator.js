export default {
  name: 'youji-inputcalculator',
  inserted: function (el, binding) {
    el.onfocus = function (e) {
      console.log('bind onfocus', e);
    } // 得到焦点时
    el.onblur = function (e) {
      console.log('bind onblur', e);
    } // 失去焦点时
    console.log('bind', el, binding);
  },
  update: function(el, binding, vnode, oldVnode) {
    console.log('update', el, binding, vnode, oldVnode);
  }
}
