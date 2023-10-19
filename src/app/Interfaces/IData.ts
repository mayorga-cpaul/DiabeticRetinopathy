export interface IData<T> {
    status: Status
    data: T
}

export interface Status {
    hasError: boolean
}