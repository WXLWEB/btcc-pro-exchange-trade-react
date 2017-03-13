import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as zh from 'react-intl/locale-data/zh';

import { IConnectIntlState, IConnectIntlReturn } from '../../constants/ComponentsType';
addLocaleData(en);
addLocaleData(zh);

function mapStateToProps(state: IConnectIntlState): IConnectIntlReturn {
  const { lang, messages } = state.locales;
  return { locale: lang, messages };
}

export default connect(mapStateToProps)(IntlProvider);
