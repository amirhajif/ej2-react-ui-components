/**
 * Dependency injection
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Inject extends React.PureComponent<{ services: Object[] }, {}> {
    public static isService: boolean = true;
    // eslint-disable-next-line
    public render(): any {
        return null;
    }

}
