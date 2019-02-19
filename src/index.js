
export default (editor, opts = {}) => {
  let commandName = 'gjs-call-save';

  let config = {
    root: {
      css: ed => ed.getCss(),
      html: ed => ed.getHtml(),
    },
    call: () => {},
    ...opts,
  };

  // Add command
  editor.Commands.add(commandName, {
    async callSave({ root, call }) {
      const data  = {};

      root = typeof root === 'function' ? await root(editor) : root;

      for (const name in root) {
        if (root.hasOwnProperty(name)) {
          let content = root[name];
          content = typeof content === 'function' ? await content(editor) : content;
          data[name] = content;
        }
      }

      call(data);
    },

    run() {
      this.callSave(config);
    }
  });
};
