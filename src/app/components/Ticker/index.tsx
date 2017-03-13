import * as React from 'react';
import { FormattedNumber, FormattedMessage } from 'react-intl';
import InstantBuySellForm from '..//Form/InstantBuySellForm/index' ;

import './style.less';
// import { IInstantBuySellProps, IInstantBuySellState } from '../../../constants/ComponentsType';

class Ticker extends React.Component<any, any>  {
    render() {
        const ticker = this.props.ticker;
        const last = ticker.last;
        const volume24H = ticker.volume24H;
        const prevcls = ticker.prevcls;
        const rate = (last - prevcls) / prevcls * 100 ? (last - prevcls) / prevcls * 100 : 0;
        const {showTerm, account, actions, terms} = this.props;
        return (
            <div className='realPrice'>
                <ul>
                    <li><FormattedMessage id='spot_usd_landing_page_label_last_price' />
                        <span className='usd'><FormattedNumber value={last} minimumFractionDigits={2} maximumFractionDigits={2} /> USD</span>
                        <span><FormattedNumber value={rate} minimumFractionDigits={2} maximumFractionDigits={2} />% <span className={rate > 0 ? 'up' : rate < 0 ? 'down' : ''} /></span>
                    </li>
                    <li>
                        <InstantBuySellForm terms={terms} showTerm={showTerm} account={account} actions={actions} ticker={this.props.ticker}/>
                    </li>
                    <li>
                        <FormattedMessage id='spot_usd_landing_page_label_daily_volume' />
                        <span className='usd'><FormattedNumber value={volume24H} minimumFractionDigits={0} maximumFractionDigits={0} /> BTC</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Ticker;
