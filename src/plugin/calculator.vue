<template>
  <transition name="fade">
    <div class="calculator" v-show="show" :style="{left:left, top:top, zIndex: zIndex}">
      <span>{{this.inputShow.value}}</span>
      <div>
        <b @click="acValue()">AC</b>
        <b @click="clearValue()">C</b>
        <b @click="backValue()">←</b>
        <b @click="inputValue('%')">%</b>
        <b @click="inputValue('7')" class="n">7</b>
        <b @click="inputValue('8')" class="n">8</b>
        <b @click="inputValue('9')" class="n">9</b>
        <b @click="inputValue('÷')">÷</b>
        <b @click="inputValue('4')" class="n">4</b>
        <b @click="inputValue('5')" class="n">5</b>
        <b @click="inputValue('6')" class="n">6</b>
        <b @click="inputValue('×')">×</b>
        <b @click="inputValue('1')" class="n">1</b>
        <b @click="inputValue('2')" class="n">2</b>
        <b @click="inputValue('3')" class="n">3</b>
        <b @click="inputValue('-')">-</b>
        <b @click="inputValue('0')" class="n">0</b>
        <b @click="inputValue('00')" class="n">00</b>
        <b @click="inputValue('.')">.</b>
        <b @click="inputValue('+')">+</b>
      </div>
      <em @click="calValue()">=</em>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'calculator',
  data() {
    return {
      el: null, // input对象
      show: true,
      left: '50%',
      top: '50%',
      zIndex: 99999,

      inputShow:{
        value:'0', // 计算用
        input:'0', // input显示用（只显示数字）
      }
    };
  },
  methods: {
    inputValue(param) {
      this.el.focus();

      if(Object.prototype.toString.call(this.inputShow.value) === "[object Number]"){   //判断输入框内容是否为数字类型
        this.inputShow.value = "0";   //数字类型说明是上个计算结果,清空内容
      }
      let str ='' + this.inputShow.value; //输入内容时,将输入框内容转为字符串类型
      let len = str.length;
      let arr = ["+","-","×","÷"];
      let num = (''+parseFloat(str.split('').reverse().join(''))).split('').reverse().join('');   //parseInt(str.split('').reverse().join('')))是获取输入框内最后一串数字,再反转回来 ,num为输入框内最后一串数字
      let nlen = num.length;
      if ((num !== '0' && param !== '.')|| (param == '.'&& num.indexOf(".") === -1)) {   //输入框内最后一串数字不为0时拼接字符串
        if(arr.indexOf(str.charAt(len-1)) !== -1 && arr.indexOf(param) !== -1){    //若一开始输入内容为运算符,输入无效
          return;
        }
        this.inputShow.value += param;   //拼接输入内容
        this.inputShow.input += param;   //拼接输入内容
      } else {
        arr.push("%");
        if(param === '.'){      //若num中已有小数点,输入内容为小数点,视为无效
          return;
        }else if(!(arr.indexOf(param) !== -1)){    //判断输入框内最后一个字符不为运算符
          this.inputShow.value = str.substring(0,str.length-nlen) + param;  //输入框内最后一串数字为0时,删除0拼接
          this.inputShow.input = str.substring(0,str.length-nlen) + param;  //输入框内最后一串数字为0时,删除0拼接
        }
      }
      if (["+","-","×","÷"].includes(param)) { // 如果输入的是运算符号
        this.inputShow.input = ""; // 重制显示部分
      }
      // 输入值输出到input
      this.el.value = this.inputShow.input;
      console.log('inputValue', param, this.el);
    },
    backValue() {
      let str = this.inputShow.value;
      if (str.length === 1) {
        this.inputShow.value = "0";
      } else {
         this.inputShow.value = str.slice(0,str.length-1);
      }
      console.log('backValue');
    },
    calValue() {
      let str = this.inputShow.value.toString();
      str = str.replace('×','*').replace('÷','/').replace('%','*0.01');    //替换运算符
      try{
        this.inputShow.value = eval(str);      //若用户输入内容不符合运算规则,不计算
        this.inputShow.input = eval(str);
        this.el.value = this.inputShow.input;
      }catch(error){
        return;
      }
    },
    acValue() {
      this.inputShow.value = '0';
      console.log('acValue');
    },
    clearValue() {
      this.inputShow.value = '0';
      console.log('clearValue');
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator * {
 user-select: none;
}
.calculator {
  position: fixed;
  width: 136px;
  background-color: #E7E8F0;
  border-radius: 8px;
  padding: 10px;
}
.calculator span {
  display: block;
  height: 20px;
  font-size: 8pt;
  border:1px solid #A4A8BA
}
.calculator div{
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto auto;
  grid-gap: 2px;
  margin: 2px 0;
}
.calculator div b{
  border: 1px solid #A4A8BA;
  border-radius: 4px;
  text-align: center;
  width: 30px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  font-size: 10pt;
}
.calculator div b.n{
  background-color: #2963E330;
}
.calculator div b:hover {
  background-color: white;
}
.calculator em {
  display: block;
  height: 20px;
  font-size: 10pt;
  border:1px solid #A4A8BA;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  font-style: normal;
  font-weight: bold;
}
.calculator em:hover {
  background-color: white;
}
</style>
