# wo-range-selector

> 采用uniapp-vue3实现, 是一款支持范围选择的组件，支持H5、微信小程序（其他小程序未测试过，可自行尝试）

## props属性

### selectedTime

> 默认选中范围

~~~js
selectedTime: {
    type: any[],
    default: () => [],
},
~~~

### options

> 范围数据

~~~js
selectOptions: {
    type: any[],
    default: () => []
}
~~~

## 事件

### @changeSelect

> 点击选项时触发，返回包含了选项数据的数组

