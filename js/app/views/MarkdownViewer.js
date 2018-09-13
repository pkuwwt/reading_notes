
define(['vue'], function(Vue) {
  var name = MarkdownViewer;
  var comp = Vue.extend({
    name: name,
    template: ``,
    data () {
      return {};
    },
  });
  
  Vue.component(name, comp);
  return Vue.component(name);
});
