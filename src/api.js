// the Firebase SDKs for Cloud Firestore and Firebase

// initializeapp is a function that initializes the firebase app
import { initializeApp } from 'firebase/app'
// getFirestore is a function that initializes the firestore app
// /lite is a lightweight version of the firestore app
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore/lite'

// Your web app's Firebase configuration --------------------------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: 'AIzaSyCgBNwcRDD3fqB5P9Xx1RKvJco7-zmnl7c',
  authDomain: 'vanslife-f9ab5.firebaseapp.com',
  projectId: 'vanslife-f9ab5',
  storageBucket: 'vanslife-f9ab5.appspot.com',
  messagingSenderId: '397961047841',
  appId: '1:397961047841:web:4c36446b228e59ea915860',
}

// Initialize Firebase and Firestore app --------------------------------------------------------------------------------------------

// initializeApp is a function that initializes the firebase app
// the initializeApp function takes in the firebaseConfig object as an argument
// and returns the firebase app
const app = initializeApp(firebaseConfig)
// getFirestore is a function that initializes the firestore app
// getFirestore takes in the firebase app as an argument
const db = getFirestore(app)
// collection is a function that returns a reference to a collection in the firestore database
// it takes the firestore app (stored in the db variable) and the name of the collection as arguments
// and returns a reference to the collection
const vansCollection = collection(db, 'vans')

// function to fetch data from the db --------------------------------------------------------------------------------------------

export const getVans = async () => {
  // getDocs is a function that returns a snapshot of the documents in a collection
  // it takes a reference to a collection as an argument
  // and returns a promise that resolves with the snapshot
  const dataSnapshot = await getDocs(vansCollection)
  // the snapshot object contains a property called docs
  // which is an array of document snapshots
  // we can use the map method to transform the array of document snapshots into an array of data objects
  // by calling the data method on each document snapshot
  // and spreading the result into a new object along with the id of the document
  const vans = dataSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  // return the array of data objects
  return vans
}

// functions to manipulate documents in the collections--------------------------------------------------------------

// function usaded to rename a document in a collection
async function renameDocument(collection, oldDocId, newDocId) {
  try {
    // 1. Read the Document
    const oldDocRef = doc(collection, oldDocId)
    const docSnapshot = await getDoc(oldDocRef)

    if (!docSnapshot.exists()) {
      throw new Error('Document does not exist.')
    }

    const data = docSnapshot.data()

    // 2. Write to New Document
    const newDocRef = doc(collection, newDocId)
    await setDoc(newDocRef, data)

    // 3. Delete Old Document
    await deleteDoc(oldDocRef)

    console.log('Document renamed successfully.')
  } catch (error) {
    console.error('Error renaming document:', error)
  }
}
// Usage
// renameDocument(vansCollection, '2JWKtKSI8d2CKL1ca4FU', '2')

// function used to create copies of a document in a collection
async function createDocumentCopies(collection, sourceDocId, numberOfCopies) {
  try {
    // Get the reference to the source document
    const sourceDocRef = doc(collection, sourceDocId)

    // Retrieve data from the source document
    const sourceDocSnapshot = await getDoc(sourceDocRef)

    if (!sourceDocSnapshot.exists()) {
      throw new Error('Source document does not exist.')
    }

    const sourceData = sourceDocSnapshot.data()

    // Create copies of the source document
    for (let i = 0; i < numberOfCopies; i++) {
      const newDocRef = doc(collection)
      await setDoc(newDocRef, sourceData)
      console.log(`Copy ${i + 1} created successfully.`)
    }
  } catch (error) {
    console.error('Error creating document copies:', error)
  }
}
// Usage
// createDocumentCopies(vansCollection, '3QAi32MqbbgfGDP73eRA', 3)
