
define(['vue'], function(Vue) {
  var name = 'MarkdownViewer';
  var comp = Vue.extend({
    name,
    props: ['source'],
    template: `<vue-markdown :source="source"></vue-markdown>`,
    data () {
      return {
      };
    },
	  methods: {
	  },
    computed: {
    }
  });
  
  Vue.component(name, comp);
  return Vue.component(name);
});
