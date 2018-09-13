
requirejs.config({
	baseUrl: 'js/libs',
	paths: {
		app: '../app'
	}
});

requirejs(['vue', 'vuex.min', 'vuetify', 'app/utils', 'js/app/main.js'], function (Vue, vuex, vuetify, Utils, main) {
	Vue.use(vuex);
	Vue.use(vuetify);
	var app = new Vue({
		el: "#app",
		data: {
		},
		render: h => h(main),
	});
	window.app = app;
});

