
var name = 'Tree';

var template = `
  <li>
    <div
      :class="{bold: isFolder}"
	  style="display:inline-block"
      @click="toggle"
	>
      {{ model.name }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <${name}
        class="tree-item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model">
      </${name}>
    </ul>
  </li>
`

define(['vue'], function(Vue) {
	var comp = Vue.extend({
		name, template,
		props: {
			model: {
				type: Object,
				default: ()=>Object.assign({},{name: 'root', children: [{name: 'child1'},{name:'child2'}]})
			}
		},
		data: function () {
			return {
				open: false
			}
		},
		computed: {
			isFolder: function () {
				return this.model.children &&
					this.model.children.length
			}
		},
		methods: {
			toggle: function () {
				if (this.isFolder) {
					this.open = !this.open
				}
			},
		},
	});
	Vue.component(name, comp);
	return Vue.component(name);
});

