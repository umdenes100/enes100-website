import {initializeApp} from "firebase/app";
import {getStorage, listAll, ref, uploadBytesResumable} from "firebase/storage";
import {type Writable, writable} from "svelte/store";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAMDAGYHNMtPaXAwJl-BRvxvl37E7Z3xE",
    projectId: "engr-enes100tool-inv-firebase",
    databaseURL: "https://engr-enes100tool-inv-firebase-model-watcher.firebaseio.com/",
    storageBucket: "engr-enes100tool-inv-firebase.appspot.com",
    appId: "1:763916402491:web:e598de3c258f7d4faa811e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const rootref = ref(storage, '/studentmodels');

export type UploadState = {
    state: 'idle' | 'uploading' | 'done' | 'error',
    progress: number,
    error?: string,
}
export const progress: Writable<UploadState> = writable({
    state: 'idle',
    progress: 0,
});

export async function listStorage(): Promise<string[]> {
    // Create a reference under which you want to list
    // Find all the prefixes and items.
    const res = await listAll(rootref);
    return res.items.map((itemRef) => itemRef.name);
}

export async function uploadFile(filename: string, file: File): Promise<void> {
    // Create a root reference
    const uploadTask = uploadBytesResumable(ref(storage, '/studentmodels/' + filename), file)
    await new Promise<void>((resolve, reject) => {
        uploadTask.on('state_changed',
            (snapshot) => {
                const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is', p, '% done.');
                progress.set({state: 'uploading', progress: p});
            },
            (error) => {
                console.log(error);
                progress.set({state: 'error', progress: 0, error: error.message});
                reject(error);
            },
            () => {
                progress.set({state: 'done', progress: 100});
                resolve();
            }
        );
    });
}