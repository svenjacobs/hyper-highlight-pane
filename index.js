const defaultConfig = {
  activeOpacity: 1.0,
  inactiveOpacity: 0.5,
}

module.exports.decorateConfig = config => {
  // noinspection JSUnresolvedVariable
  let pluginConfig = {...defaultConfig, ...config.highlightPane || {}}

  // Do some sanity checks
  if (typeof pluginConfig.activeOpacity !== "number") {
    pluginConfig.activeOpacity = defaultConfig.activeOpacity;
  }
  if (typeof pluginConfig.inactiveOpacity !== "number") {
    pluginConfig.inactiveOpacity = defaultConfig.inactiveOpacity;
  }

  config.css += `
    .term_wrapper {
      opacity: ${pluginConfig.inactiveOpacity};
      transition: opacity 0.2s ease-in-out;
      will-change: opacity;
    }

    .term_active .term_wrapper {
      opacity: ${pluginConfig.activeOpacity};
      transition: opacity 0.2s ease-in-out;
      will-change: opacity;
    }
  `;

  return config;
};
