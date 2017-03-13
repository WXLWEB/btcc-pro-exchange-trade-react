import cookie from 'react-cookie';
import { ILocales } from '../constants/ReducerType';
import { ILocalesAction } from '../constants/ActionType';

import getDefaultLang from '../utils/lang';

import enLocales from '../resources/locales/en';
import zhLocales from '../resources/locales/zh';

const locales = {
  en: enLocales,
  zh: zhLocales,
};

const lang = getDefaultLang();

const initialState: ILocales = {
  lang,
  messages: locales[lang],
};

export default function localesManage(state: ILocales = initialState, action:  ILocalesAction): ILocales {
  switch (action.type) {
      case 'change lang':
        const userLang = action.payload ? action.payload === 'en' ? 'en' : 'zh' : state.lang === 'en' ? 'zh' : 'en';
        cookie.save('btcchina_lang', userLang, {
            domain: '.btcc.com',
            path: '/',
            expires: new Date(Date.now() + 8760 * 3600 * 1000),
          });
        return {
          lang: userLang,
          messages: locales[userLang],
        };
      default:
        return state;
  }
}
