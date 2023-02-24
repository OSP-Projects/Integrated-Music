import { v4 as uuid } from "uuid";

import Users from "./Users";
import PlayList from "./Playlist";


class Profile {
    public readonly _id:        string;

    public readonly ownerID:    string;

    public name:                string;

    public description:         string;

    public bio:                 string;

    public status:              string;

    public role:                string;

    public createdAt:           string;

    public updateAt:            string;

    public readonly owner?:     Users;

    public readonly PlayList?:   PlayList[]

    constructor(props: Omit<Profile, '_id' | 'createdAt', | 'updateAt'>, _id: string) {
        Object.assign(this, props);
        if(!_id) {
            this._id = uuid();
        }
    }
}

export default Profile;