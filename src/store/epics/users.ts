import { Epic } from 'redux-observable';
import {from, ObservableInput, of} from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { ActionType, isActionOf } from 'typesafe-actions';

// Actions
import * as actions from '../actions/users';
// Reducers
import { RootState } from '../reducers';

// Api
import { getUsers, getUser, getRepos, getFollowers } from '../../services/Api';


type Action = ActionType<typeof actions>;

export const getUsersEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.getUsers)),
        switchMap((action: any): ObservableInput<any> =>
            from(getUsers()).pipe(
                map(actions.getUsersSuccess),
                catchError(error => of(actions.getUsersFail(error)))
            )
        )

    );

export const getUserEpic: Epic<Action, Action, RootState> = (actions$, store) =>
    actions$.pipe(
        filter(isActionOf(actions.getUser)),
        switchMap((action: any): ObservableInput<any> =>
            from(getUser(action.payload)).pipe(
                map(actions.getUserSuccess),
                catchError(error => of(actions.getUserFail(error)))
            )
        )
    );


export const getReposEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.getRepos)),
        switchMap((action: any): ObservableInput<any> =>
            from(getRepos(action.payload)).pipe(
                map(actions.getReposSuccess),
                catchError(error => of(actions.getReposFail(error)))
            )
        )
    );


export const getFollowersEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.getFollowers)),
        switchMap((action: any): ObservableInput<any> =>
            from(getFollowers(action.payload)).pipe(
                map(actions.getFollowersSuccess),
                catchError(error => of(actions.getFollowersFail(error)))
            )
        )
    );