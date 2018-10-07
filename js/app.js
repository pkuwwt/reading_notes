
requirejs.config({
	baseUrl: 'js/libs',
	paths: {
		app: '../app'
	}
});

requirejs(['vue', 'vuex.min', 'vuetify', 'vue-markdown', 'app/utils', 'app/main'], function (Vue, vuex, vuetify, VueMarkdown, Utils, main) {
	Vue.use(vuex);
	Vue.use(vuetify);
	Vue.use(VueMarkdown);
	var app = new Vue({
		el: "#app",
		data: {
		},
		render: h => h(main),
	});
	window.app = app;
});

