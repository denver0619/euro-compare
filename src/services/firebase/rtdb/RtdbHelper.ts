import { getDatabase, ref, set, child } from "firebase/database";
import { app } from "../firebase";

const db = getDatabase(app);
const rootPath = "dataset/";

class RtdbHelper {
    constructor() {}

    static getDB() {
        return db;
    }

    static getRootRef() {
        return ref(this.getDB(), rootPath);
    }

    static updateDataset(json: any, dataset_name: string) {
        let datasetRef = child(this.getRootRef(), dataset_name + "/");
        console.log(datasetRef);
        set(datasetRef, json);
    }
}

export default RtdbHelper;
