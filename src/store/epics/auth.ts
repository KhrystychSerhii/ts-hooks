import { Epic } from 'redux-observable';
import {from, ObservableInput, of} from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { ActionType, isActionOf } from 'typesafe-actions';

// Actions
import * as actions from '../actions/auth';
// Reducers
import { RootState } from "../reducers";

// Api
import { login } from '../../services/Api';

// Models

type Action = ActionType<typeof actions>;

export const loginEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.login)),
        switchMap((action: any): ObservableInput<any> =>
            from(login(action.payload)).pipe(
                map(actions.loginSuccess),
                catchError((error: any) => of(actions.loginFail(error)))
            )
        )
    );