// eslint-disable-next-line
var merge = require('deepmerge');

// translate:start
const transen = merge.all([
  require('../components/ChinaCompare/Header/translate/locale-en.json'),
  require('../components/ChinaCompare/translate/locale-en.json')
]);
const transes = merge.all([
  require('../components/ChinaCompare/Header/translate/locale-es.json'),
  require('../components/ChinaCompare/translate/locale-es.json')
]);
export const translate = {
  en: transen,
  es: transes
};
// translate:end

// eslint-disable-next-line
export default translate;
