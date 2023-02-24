import { v4 as uuid } from "uuid";

import Profile from './Profile';
import PlayList from "./Playlist";

class Users {
    public readonly _id:    string;

    public firstName:       string;

    public email:           string;

    public username:        string;

    public password:        string;

    public isVerified:      boolean;

    public createdAt:       Date;

    public updatedAt:       Date;

    public readonly PlayList?: PlayList[];

    public readonly Profile?: Profile[];

    constructor(props: Omit<Users, '_id' | 'isVerified', | 'createdAt', | 'updatedAt'>, _id: string) {
        Object.assign(this, props);
        if(!_id) {
            this._id = uuid();
        }
    }

}

export default Users