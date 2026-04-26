export type S<T> = { [KeyType in keyof T]: T[KeyType] } & {};
