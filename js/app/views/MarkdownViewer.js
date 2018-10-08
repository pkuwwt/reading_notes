
define(['vue'], function(Vue) {
  var name = 'MarkdownViewer';
  var comp = Vue.extend({
    name,
    props: ['source'],
    template: `<vue-markdown :source="source"><slot>$E=mc^2$</slot></vue-markdown>`,
    data () {
      return {};
    },
    components: {
    }
  });
  
  Vue.component(name, comp);
  return Vue.component(name);
});
