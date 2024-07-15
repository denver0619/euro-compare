import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../firebase";

const storage = getStorage(app);
const rootPath = "datasets/";

class StorageHelper {
    constructor() {}

    static getStorage() {
        return storage;
    }

    static getRootRef() {
        return ref(storage, rootPath);
    }

    // static async uploadDataset(json, path) {
    //     const jsonString = JSON.stringify(json);
    //     const blob = new Blob([jsonString], { type: "application/json" });

    //     const datasetRef = ref(this.getRootRef(), path + "/");
    //     await uploadBytes(datasetRef, blob);
    // }

    static async downloadJsonData(path: string) {
        const datasetRef = ref(this.getRootRef(), path + "/");
        const url = await getDownloadURL(datasetRef);
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
}

export default StorageHelper;
