var vm = new Vue({
	el: "#component"
});
// 注册一个组件
Vue.component('my-component',{
	template : '<div>hello component</div>'
});