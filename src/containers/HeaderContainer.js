import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';
import Counter from '../components/Counter';

const mapStateToProps = ( state ) => {
    return {
        count: state.todoCount
    }
};

const HeaderContainer = connect(
    mapStateToProps
)( Counter );

export default HeaderContainer;
