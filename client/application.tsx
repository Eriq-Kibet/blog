import React from 'react';
import { Route, Switch, RouteChildrenProps } from 'react-router';
import routes from './src/config/routes';
export interface IApplcationProps { }

const Application: React.FunctionComponent<IApplcationProps> = props => {
    return (
        <Switch>
            {routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        render={(routeProps: RouteChildrenProps<any>) => <routeProps.component {...routeProps} />}
                    />
                )
            })}
        </Switch>
    )
}
export default Application