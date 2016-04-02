import React, { PropTypes } from 'react';
import Tab from '../components/Footer/Tab';
import TodoIcon from '../components/Icons/TodoIcon';
import CheckIcon from '../components/Icons/CheckIcon';
import AllIcon from '../components/Icons/AllIcon';

const Footer = ( { todos, viewFilter, actions } ) => {
    const views = {
        TODO: <TodoIcon className="tab__icon" />,
        COMPLETED: <CheckIcon className="tab__icon" />,
        ALL: <AllIcon className="tab__icon" />
    }

    const tabHandler = ( view ) => {
        return ( e ) => {
            e.preventDefault();
            actions.changeView( view );
        }
    };

    return (
        <nav className="tablist">
            <ul className="tablist__inner">{
                Object.keys( views ).map( ( view ) => {
                    const currentTabHandler = tabHandler( view );
                    const count = Object.keys( todos[view] ).length;

                    return (
                        <Tab
                            key={view}
                            icon={views[view]}
                            text={view}
                            count={count}
                            selected={viewFilter === view}
                            onClick={currentTabHandler}
                        />
                    );
                })
            }</ul>
        </nav>
    );
};

Footer.propTypes = {
    todos: PropTypes.object.isRequired,
    viewFilter: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

export default Footer;
