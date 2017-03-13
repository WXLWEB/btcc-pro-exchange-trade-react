import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { IfeedbackProps, IfeedbackState, IaLLMapState } from '../../../constants/AppType';
import { connect } from 'react-redux';

import './style.less';

class FeedbackForm extends React.Component<IfeedbackProps, IfeedbackState> {
  constructor (props: any, context: any) {
    super(props, context);
  };

  componentWillReceiveProps(nextProps: IfeedbackProps) {
    const { actions } = this.props;
    if (nextProps.response.tipFailed || nextProps.response.tipSuccess) {
      const timeout = setTimeout(function(){
        actions.resetFeedbackTips();
        const timeout2 = setTimeout(function() {
          actions.resetFeedbackBack();
          clearTimeout(timeout2);
        }, 300);
        clearTimeout(timeout);
      }, 1000);
    }
  }

  render() {
    return (
      <div className='feedback-content'>
        <div className={`feedback ${this.props.response.tipFailed ? 'tip-failed' : ''} ${this.props.response.tipSuccess ? 'tip-success' : ''}`} >
          <div className={`back ${this.props.response.backFailed ? 'backFailed' : ''} ${this.props.response.backSuccess ? 'backSuccess' : ''}`}>
            {(this.props.response.failed.insufficient) && <span><FormattedMessage id='spot_usd_instant_feedback_insufficient_balance'/></span>}
            {(this.props.response.failed.incorrectQuantity) && <span><FormattedMessage id='spot_usd_instant_feedback_max_quantity_error'/></span>}
            {(this.props.response.failed.otherError) && <span><FormattedMessage id='spot_usd_instant_buy_sell_failed'/></span>}
            {(this.props.response.backSuccess) && <span><FormattedMessage id='spot_usd_instant_buy_sell_success'/></span>}
          </div>
          <div className='front'>
          </div>
        </div>
        <div className={`errorbox ${this.props.response.error ? 'show' : 'hide'}`}>
          { (this.props.response.error) && <span><FormattedMessage id='spot_usd_instant_feedback_input_error'/></span>}
        </div>
      </div>
    );
  };
}

function mapStateToProps(state: IaLLMapState) {
   return {
      response: {
       error: state.placeOrderResponse.error,
       failed: state.placeOrderResponse.failed,
       backSuccess: state.placeOrderResponse.backSuccess,
       tipFailed: state.placeOrderResponse.tipFailed,
       tipSuccess: state.placeOrderResponse.tipSuccess,
      },
      responseError: state.placeOrderResponse.error,
   };
 }

 export default connect(
     mapStateToProps,
 )(FeedbackForm);
