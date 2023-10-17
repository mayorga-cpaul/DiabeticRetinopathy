export interface ILocalStorage {
    saveData<Tmodel>(data: Tmodel, key: string): boolean;
    getData<Tmodel>(key: string): Tmodel | null;
    deleteData(key: string): boolean;
    removeAllData(): void;
}
