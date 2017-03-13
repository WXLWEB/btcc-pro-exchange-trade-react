import * as React from 'react';
import { ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlaceOrderResponseActions from '../../../actions/placeOrderResponse';
import * as RequestActions from '../../../actions/request';

import './header.less';
import { BASE_URL } from '../../../utils/urls';
require('../../../resources/fonts/fonts.less');

import { IheaderProps, IheaderState, IaLLMapState } from '../../../constants/AppType';

class Header extends React.Component<IheaderProps, IheaderState> {

    handleClick = (type: string) => {
        if (type === 'trade' && !this.props.account.content.id) {
            window.location.href = `${BASE_URL}/trade/btcusd`;
        }else if (!this.props.account.content.id) {
            if (document.getElementById('sign_in_btn')) {
                document.getElementById('sign_in_btn').click();
            } else {
                window.location.reload();
            }
        } else if (!this.props.terms.accept) {
            this.props.showTerm();
        } else if (type === 'account') {
            window.location.href = `${BASE_URL}/account/overview`;
        } else {
            window.location.href = `${BASE_URL}/trade/btcusd`;
        }
    }
    componentDidMount() {
        const path = window.location.href;
        if (path.match('#download')) {
            document.getElementById('downloadButton').click();
        }
    }
    render() {
        return (
            <div className='header'>
                <header>
                  <div className='header-left'>
                    <a className='navbar-brand'>
                    </a>
                    <ButtonToolbar>
                      <DropdownButton title='Default button' id='dropdown-size-medium'>
                        <MenuItem eventKey='1'>Action</MenuItem>
                        <MenuItem eventKey='2'>Another action</MenuItem>
                        <MenuItem eventKey='3'>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey='4'>Separated link</MenuItem>
                      </DropdownButton>
                    </ButtonToolbar>
                  </div>
                  <div className='header-right'></div>
                </header>
            </div>
        );
    }
};

function mapStateToProps(state: IaLLMapState) {
   return {
       account: state.account,
   };
 }

 function mapDispatchToProps(dispatch: any) {
   return {
      actions: bindActionCreators(Object.assign({}, PlaceOrderResponseActions, RequestActions), dispatch),
   };
 }

 export default connect(
     mapStateToProps,
     mapDispatchToProps,
 )(Header);
