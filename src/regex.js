const regex = {
  https: /^https/g,
  http: /^http/g, // Just in Case
  host: /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/g,
  path: /\/.+/g
};

export { regex as default };