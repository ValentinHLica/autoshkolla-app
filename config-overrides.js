const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@icon": "src/components/CustomIcons.tsx",
    "@context": "src/components/Context.tsx",
    "@ui": "src/components/UI/index.tsx",
    "@components": "src/components",
    "@pages": "src/pages",
    "@config": "src/config",
    "@interface": "src/interface",
    "@styles": "src/styles",
    "@utils": "src/utils",
    "@data": "src/data",
  })(config);

  return config;
};
