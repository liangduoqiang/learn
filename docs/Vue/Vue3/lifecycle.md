# lifecycle

## 执行顺序

父组件`onBeforeMount` => 子组件`onBeforeMount` => 子组件`onMounted` => 父组件`onMounted`

父组件`onBeforeUpdate` => 子组件`onBeforeUpdate` => 子组件`onUpdated` => 父组件`onUpdated`

父组件`onBeforeUnmount` => 子组件`onBeforeUnmount` => 子组件`onUnmounted` => 父组件`onUnmounted`

## 总结

Before 全都是递归执行-从父到子，After 全都是一层一层结束调用栈往回走-从子到父
