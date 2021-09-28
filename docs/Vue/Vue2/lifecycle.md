# lifecycle

## 执行顺序

父组件`beforeCreate` => 父组件`created` => 父组件`beforeMount` => 子组件`beforeCreate` => 子组件`created` => 子组件`beforeMount` => 子组件`mounted` => 父组件`mounted`

父组件`beforeUpdate` => 子组件`beforeUpdate` => 子组件`updated` => 父组件`updated`

父组件`beforeDestroy` => 子组件`beforeDestroy` => 子组件`destroyed` => 父组件`destroyed`

## 总结

Create、父组件永远在子组件前面创建完成 beforeCreate和created成对执行

其他钩子、Before 都是递归执行-从父到子，After 都是一层一层结束调用栈-从子到父
