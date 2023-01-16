let count = 0;
console.log("I called: ", count)
export function assoc<K extends string, T>(key: K, value: T) {
    count++ ;
    console.log("Assoc called", count);
    return <O extends object>(obj: O) => ({
        ... obj,
        [key]: value,
    }) as K extends keyof O ? (Omit<O, K> & Record<K, T>) : (O & Record<K, T>);
}