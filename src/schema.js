/**
 * @namespace
 * @property {boolean} https                  - If true use https, otherwise use http
 * @property {string}  host                   - The url hostname
 * @property {string}  path                   - The url path following the hostname
 * @property {object}  params                 - Key/value store of query params. All values should be strings.
 * @property {object}  hash                   - Key/value store of hash values. All values should be strings.
 */

const obj = {
  https: true,
  host: 'www.pier1.com',
  path: '/rugs',
  params: {
    device: 'mobile',
    log: 'true',
    campaign: '170712-July'
  },
  hash: {
    nav: 'left',
    email: 'true'
  }
};
