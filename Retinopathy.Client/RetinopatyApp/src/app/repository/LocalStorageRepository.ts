import { Injectable } from "@angular/core";
import { ILocalStorage } from "../Interfaces/ILocalStorage";
import { UserInfoDTO } from "../models/auth/UserInfo";

@Injectable({
    providedIn:"platform"
})
export class LocalStorageRepository implements ILocalStorage  {

    constructor() {

    }

    public saveData<Tmodel>(data: Tmodel, key: string): boolean {
        if (data !== null && data != undefined) {
            const JsonSerialize = JSON.stringify(data);
            localStorage.setItem(key, JsonSerialize);
            return true
        }
        return false;
    }

    public getData<Tmodel>(key: string): Tmodel {
        const localdata = localStorage.getItem(key);

        if (localdata !== null && localdata.trim() !== "") {
            try {
                const deserializedJson = JSON.parse(localdata) as Tmodel;
                return deserializedJson;
            } catch (error) {
                console.error("Error al analizar JSON:", error);
            }
        }

        return null;
    }

    public deleteData(key: string): boolean {
        return key.trim() !== "" ? (localStorage.removeItem(key), true) : false;
    }

    public removeAllData(): void {
        localStorage.clear();
    }
}