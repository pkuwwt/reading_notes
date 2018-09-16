
define(['vue', './Tree'], function(Vue, Tree) {
	var name = 'PathTree';
	var comp = Vue.extend({
		name,
		components: { Tree },
		template: `<Tree :model='treeData'></Tree>`,
		props: {
			files: {
				type: Array,
				default: ()=>new Array('a/b/c.txt','a/c/b.txt')
			}
		},
		data () {
			return {};
		},
		computed: {
			treeData () {
				return this.pathListsToTree(this.files.map(this.pathToList));
			}
		},
		methods: {
			pathToList (path) {
				var l = path.split('/');
				if(l[0]==='.') l.shift();
				// TODO: remove '..' in the middle
				return l;
			},
			getChild (item, name) {
				if(!item.children) return null;
				for(var child of item.children) {
					if(child.name===name) {
						return child;
					}
				}
				return null;
			},
			addChildByName (item, name) {
				if(!item) return;
				item.children = item.children || [];
				var child = {name};
				item.children.push(child);
				return child;
			},
			addPathListToTree(list, tree) {
				tree = tree || {};
				var curItem = tree;
				for(var name of list) {
					var item = this.getChild(curItem, name);
					if(!item) {
						item = this.addChildByName(curItem, name);
					}
					curItem = item;
				}
				return tree;
			},
			pathListsToTree (lists) {
				var tree = {name: 'root1', children: []};
				lists.forEach(list => {
					this.addPathListToTree(list, tree);
				});
				return tree;
			},
		}
	});
	Vue.component(name, comp);
	return Vue.component(name);
});

