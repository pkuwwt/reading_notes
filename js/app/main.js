define(['vue', 'app/utils'], function(Vue, Utils) {
	var comp = Vue.extend({
		template: `
    <v-app>
      <v-toolbar app>
        <v-toolbar-title>My Reading Notes</v-toolbar-title>
		<div style="margin-left:auto;width:40%">
		<v-autocomplete autofocus v-model="filename" :items="items"></v-autocomplete>
		</div>
      </v-toolbar>
      <v-navigation-drawer app></v-navigation-drawer>
      <v-content>
        <v-container fluid>
			{{content}}
        </v-container>
      </v-content>
      <v-footer></v-footer>
    </v-app>
		`,
		data() {
			return {
				filename: '',
				items: ['abc', 'def'],
				files: {},
			};
		},
		mounted() {
			Utils.parse_json('./files.json').then(files => {
				this.files = files;
				files.forEach(({filename,content}) => {
					this.$set(this.files, filename, content);
				});
				this.items = files.map(f => f.filename);
				this.filename = this.files[0].filename;
				this.content = this.files[0].content
			});
		},
		computed: {
			content () {
				return this.files[this.filename];
			}
		}
	});
	Vue.component("Main", comp);
	return Vue.component("Main");
});
