import { v4 as uuid } from "uuid";

import Users from "./Users";
import Profile from './Profile';

class PlayList {
    public readonly _id:        string;

    public readonly ownerID:    string;

    public description:         string;

    public createdAt:           string;

    public updateAt:            string;

    public readonly owner?:     Users;

    public readonly Profile?:   Profile[]

    constructor(props: Omit<PlayList, '_id' | 'createdAt', | 'updateAt'>, _id: string) {
        Object.assign(this, props);
        if(!_id) {
            this._id = uuid();
        }
    }
}

export default PlayList;