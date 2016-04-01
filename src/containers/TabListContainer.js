import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeView } from '../actions';
import Tab from '../components/Tab';
import TodoIcon from '../components/TodoIcon';
import CheckIcon from '../components/CheckIcon';
import AllIcon from '../components/AllIcon';

class TabListContainer extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const currentViewFilter = this.props.view;

        return (
            <div className="tablist">
                <ul className="tablist__inner">
                    <Tab name="todo" onClick={this.createTabClick( "TODO" )} viewFilter='TODO'>
                        <TodoIcon className="tab__icon" />
                    </Tab>
                    <Tab name="completed" onClick={this.createTabClick( "COMPLETED" )} viewFilter='COMPLETED'>
                        <CheckIcon className="tab__icon" />
                    </Tab>
                    <Tab name="all" onClick={this.createTabClick( "ALL" )} viewFilter='ALL'>
                        <AllIcon className="tab__icon" />
                    </Tab>
                </ul>
            </div>
        );
    }

    createTabClick( viewFilter ) {
        const tabClick = ( e ) => {
            e.preventDefault();
            this.props.dispatch( changeView( viewFilter ) );
        }

        return tabClick;
    }
};

TabListContainer = connect( ( state ) => { return state } )( TabListContainer );

export default TabListContainer;
