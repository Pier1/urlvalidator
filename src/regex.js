const regex = {
  https: /^https:\/\//g,
  http: /^http:\/\//g, // Just in Case
  host: /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/g,
  path: /\/.+/g,
  unsafeChars: /("|<|>|%|\{|\}|\||\\|\^|~|\[|\]|`)/g
};

export { regex as default };