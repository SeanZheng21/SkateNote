import { combineReducers } from 'redux';
import practice from './practice';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    practice,
    errors,
    messages
});
