import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyAdFddXKNT_n0pNyKOYaKtsU4wknpVgO20",
    authDomain: "crwn-db-74e3a.firebaseapp.com",
    databaseURL: "https://crwn-db-74e3a.firebaseio.com",
    projectId: "crwn-db-74e3a",
    storageBucket: "crwn-db-74e3a.appspot.com",
    messagingSenderId: "973436033809",
    appId: "1:973436033809:web:c7b209ec6e24352cbf4ab0"
};


export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('error creating user',error.message);
        }
    }
    return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

