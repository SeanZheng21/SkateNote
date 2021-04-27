import { combineReducers } from 'redux';
import practice from './practice';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import trick from './trick';
import session from './session';

export default combineReducers({
    practice,
    errors,
    messages,
    auth,
    trick,
    session
});
