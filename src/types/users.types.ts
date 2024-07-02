export interface IUsers extends IUserId, IStatus {
    name: string;
    last_name: string;
    second_name: string;
    coast: string;
    status_id: 0 | 1 | 2 | 3;
    time_format: string;
}

export interface IStatusUser extends IUserId, IStatus {
}


export interface IStatus {
    status: 'off' | 'start' | 'pause' | 'stop';
}

export enum IStatusEnum {
    OFF = 'off',
    START = 'start',
    PAUSE = 'pause',
    STOP = 'stop',
}

export interface IUserId {
    personal_id: number;
}