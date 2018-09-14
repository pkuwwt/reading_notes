
define(['vue'], function(Vue) {
	var name = 'PathTree';
	var comp = Vue.extend({
		name,
		props: ['files'],
		data () {
			return {};
		},
		computed: {
			treeData () {
			}
		},
		template: `<tree :data='treeData'></tree>`,
	});
	Vue.component(name, comp);
	return Vue.component(name);
});
