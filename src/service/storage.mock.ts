export class StorageMock implements Storage {
    [name: string]: any;
    length: number = 0;

    data: Map<string, string> = new Map<string, string>()

    clear(): void {
        throw new Error("Method not implemented.");
    }
    getItem(key: string): string | null {
        const val = this.data.get(key)
        if (val == undefined || val == null) {
            return null
        }
        return val
    }
    key(index: number): string | null {
        throw new Error("Method not implemented.");
    }
    removeItem(key: string): void {
        throw new Error("Method not implemented.");
    }
    setItem(key: string, value: string): void {
        this.data.set(key, value)
    }

}