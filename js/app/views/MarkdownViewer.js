
define(['vue', 'libs/vue-markdown'], function(Vue,VueMarkdown) {
  var name = 'MarkdownViewer';
  var comp = Vue.extend({
    name,
    props: ['markdown'],
    template: `<vue-markdown><slot>$E=mc^2$</slot></vue-markdown>`,
    data () {
      return {};
    },
    components: {
      VueMarkdown,
    }
  });
  
  Vue.component(name, comp);
  return Vue.component(name);
});
