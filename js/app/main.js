
define(['vue', 'app/utils', 'app/views/PathTree', 'app/views/MarkdownViewer'], function(Vue, Utils, PathTree, MarkdownViewer) {
	var name = 'Main';
	var comp = Vue.extend({
		name,
		components: {PathTree, MarkdownViewer},
		template: `
    <v-app>
      <v-toolbar app>
        <v-toolbar-title>My Reading Notes</v-toolbar-title>
		<div style="margin-left:auto;width:40%">
		<v-autocomplete autofocus v-model="filename" :items="filenames"></v-autocomplete>
		</div>
      </v-toolbar>
      <v-navigation-drawer app>
		<PathTree :files="filenames"></PathTree>
	  </v-navigation-drawer>
      <v-content>
        <v-container fluid>
			<MarkdownViewer>{{content}}</MarkdownViewer>
        </v-container>
      </v-content>
      <v-footer></v-footer>
    </v-app>
		`,
		data() {
			return {
				filename: '',
				filenames: ['abc', 'def'],
				files: {},
			};
		},
		mounted() {
			Utils.parse_json('./files.json').then(files => {
				this.files = files;
				files.forEach(({filename,content}) => {
					this.$set(this.files, filename, content);
				});
				this.filenames = files.map(f => f.filename);
				this.filename = this.filenames[0];
			});
		},
		computed: {
			content () {
				return this.files[this.filename];
			},
			filenames () {
				return Object.keys(this.files);
			}
		}
	});
	Vue.component(name, comp);
	return Vue.component(name);
});

