export interface IUsers extends IUserId, IStatus {
    name: string;
    last_name: string;
    second_name: string;
    coast: string;
    status_id: 0 | 1 | 2 | 3;
    time_format: string;
    coast_today: number;
}

export interface IStatusUser extends IUserId, IStatus {
}


export interface IStatus {
    status: 'off' | 'start' | 'pause' | 'stop';
}

export enum IStatusEnum {
    START = 'start',
    PAUSE_START = 'pause_start',
    PAUSE_END = 'pause_end',
    STOP = 'stop',
}

export interface IUserId {
    personal_id: number;
}

export interface IState {
    tab: 'today' | 'filter' | 'user';
    filter: {
        from: string;
        to: string;
    },
    userId?: null
}