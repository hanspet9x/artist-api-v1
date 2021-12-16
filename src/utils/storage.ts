type storageType = "local" | "session";

export default class Storage {


    static set(id: string, data: any, storageType?: storageType){
        Storage.getStorage(storageType).setItem(id, typeof data === "string" ? data : JSON.stringify(data));
    }

    static get(id: string, storageType?: storageType){
        return Storage.getStorage(storageType).getItem(id);
    }
    
    static getObject<T>(id: string, storageType?: storageType){
        const data = Storage.get(id, storageType);
        if(data) {
            return JSON.parse(data) as T;
        }
        return null;
    }

    static has(id: string, storageType?: storageType){
        return Storage.getStorage(storageType).getItem(id) !== null;
    }
    static append(id: string, data: never, storageType?: storageType){
        Storage.addEx(id, data, true, storageType);
    }
    
    static prepend(id: string, data: never, storageType?: storageType){
        Storage.addEx(id, data, false, storageType);
    }


    static addEx(id: string, data: never, append: boolean, storageType?: storageType){
        const nData = Storage.get(id, storageType);
        let store: never[] = [];
        if(nData){
            store = JSON.parse(nData) as [];
             if(append) {
                store.push(data);  
             } else {
                store.unshift(data);  
             }      
        }else {
            store.push(data);   
        } 
        Storage.set(id, store);
    }
    
    static getStorage(storageType?: storageType) {
        if(storageType) {
            return storageType === "local" ? window.localStorage : window.sessionStorage;
        }
        return window.sessionStorage;
    }
}