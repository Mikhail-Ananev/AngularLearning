import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, tap } from 'rxjs/operators';

import { AppState } from '../../models/interfaces';
import { Login, SaveUserName, InitUserInfo, ClearUserName } from '../actions/user.action';
import { AuthService } from '../../services/auth.service';
import { TOKEN_NAME } from '../../models/const';

@Injectable()
export class UserEffects {
    login$ = createEffect(() => this.actions$.pipe(
        ofType(Login),
        exhaustMap(({ email, password }) => {
            return this.authService.getUserInfo(email).pipe(
                    tap(userInfo => {
                        const user = userInfo[0];

                        if (user && user.password === password) {
                            const userName = {
                                firstName: user.firstName,
                                lastName: user.lastName
                            };

                            this.store$.dispatch(SaveUserName({ userName }));
                            this.authService.storeUserInfo(userName);

                            this.router.navigate(['/Courses']);
                        }
                }));
        })),
        { dispatch: false }
    );

    initUserInfo$ = createEffect(() => this.actions$.pipe(
        ofType(InitUserInfo),
        tap(() => {
            if (localStorage.getItem(TOKEN_NAME)) {
                const userName = this.authService.getStoredUserInfo();

                this.store$.dispatch(SaveUserName({ userName }));
            }})),
        { dispatch: false }
    );

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(ClearUserName),
        tap(() => {
            this.router.navigate(['/Login']);
        })),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store$: Store<AppState>,
        private router: Router,
    ) {}
}
