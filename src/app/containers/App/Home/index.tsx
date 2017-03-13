import * as React from 'react';

import Header from './header';

import './index.less';
import { IcontentProps, IcontentState } from '../../../constants/AppType';

let time = null;
let times = 0;

class Home extends React.Component<IcontentProps, IcontentState> {
    constructor(props: IcontentProps) {
        super(props);
        this.state = {
            showTermOfService: false,
        };
    }
    closeTerm = () => {
        if (time) {
            clearInterval(time);
        }
        this.setState({showTermOfService: false});
    }
    showTerm = () => {
        this.setState({showTermOfService: true});
    }
    showTermInit = () => {
        times++;
        if (this.props.account.content.id && !this.state.showTermOfService && times <= 10) {
            this.setState({showTermOfService: true});
        }
        if (time) {
            clearInterval(time);
        }
        if (times < 10) {
            time = setInterval(this.showTermInit, 1000);
        }
    }
    componentDidMount() {
        this.showTermInit();
    }
    render() {
        const accept = !this.props.terms.accept && this.props.account.content.id && this.state.showTermOfService;
        const {ticker, account, terms} = this.props;
        return (
            <div className='content'>
                {accept && <Tos closeTerm={this.closeTerm} />}
                <Header ticker={ticker} showTerm={this.showTerm} account={account} terms={terms}/>
            </div>
        );
    }
};

export default Home;
