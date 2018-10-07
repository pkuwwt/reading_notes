
define(['vue'], function(Vue) {
  var name = 'MarkdownViewer';
  var comp = Vue.extend({
    name,
    template: `<vue-markdown><slot>$E=mc^2$</slot></vue-markdown>`,
    data () {
      return {};
    },
    components: {
    }
  });
  
  Vue.component(name, comp);
  return Vue.component(name);
});
