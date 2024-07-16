import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    getBlob,
    getBytes,
} from "firebase/storage";
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
        const datasetRef = ref(this.getRootRef(), path);

        try {
            const bytes = await getBytes(datasetRef);
            const jsonString = new TextDecoder().decode(bytes);
            const json = JSON.parse(jsonString);
            console.log(json);
            return json;
        } catch (error) {
            console.error("Error fetching JSON data:", error);
            throw error;
        }
    }
}

export default StorageHelper;
