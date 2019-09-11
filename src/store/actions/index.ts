import * as userActions from './users';
import * as authActions from './auth';
import * as searchActions from './search';

export default {
    ...userActions,
    ...authActions,
    ...searchActions
}