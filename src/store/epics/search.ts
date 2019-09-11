import { Epic } from 'redux-observable';
import { from, ObservableInput, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { ActionType, isActionOf } from 'typesafe-actions';

// Actions
import * as actions from '../actions/search';

// Reducers 
import { RootState } from '../reducers';

// Api
import { search } from '../../services/Api';

type Action = ActionType<typeof actions>;

export const searchReposEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.searchRepos)),
        switchMap((action: any): ObservableInput<any> =>
            from(search(action.payload, 'repositories')).pipe(
                map(actions.searchReposSuccess),
                catchError(error => of(actions.searchReposFail(error)))
            )
        )
    );


export const searchUsersEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.searchUsers)),
        switchMap((action: any): ObservableInput<any> =>
            from(search(action.payload, 'users')).pipe(
                map(actions.searchUsersSuccess),
                catchError(error => of(actions.searchUserFail(error)))
            )
        )
    );