const defaultLocale = 'en'
const localePublicFolder = undefined

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
    i18n: {
      defaultLocale,
      locales: ["en", "vi"],
    },
    localePath:
    typeof window === 'undefined'
      ? require('path').resolve('../../libs/i18n/src/locales')
      : localePublicFolder
  };