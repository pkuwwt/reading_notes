
requirejs.config({
	baseUrl: '../libs',
	paths: {
		app: '../app'
	}
});

requirejs(['vue', 'vuex.min', 'vuetify', 'app/utils'], function (Vue, vuex, vuetify, Utils) {
	Vue.use(vuex);
	Vue.use(vuetify);
	var app = new Vue({
		el: "#app",
		data: {
			filename: '',
	 		items: [
				'js/app/views/Tree.js',
				'js/app/views/PathTree.js',
			],
		},
		watch: {
			filename (f) {
				console.log(f);
				var root = '../../';
				try {
					require([root+f], function(comp) {
						var c = new comp();
						c.$mount('#comp');
					})
				} catch(e) {
					console.error(e);
				};
			}
		},
		template: `<v-app>
      <v-toolbar app>
        <v-toolbar-title>My Reading Notes</v-toolbar-title>
		<div style="margin-left:auto;width:40%">
		<v-autocomplete autofocus v-model="filename" :items="items"></v-autocomplete>
		</div>
      </v-toolbar>
      <v-content>
        <v-container fluid>
			<div id="comp"></div>
        </v-container>
      </v-content>
		</v-app>`,
	});
});

