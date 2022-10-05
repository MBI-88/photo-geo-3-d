// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAACQY3-YywcWeW_wiTTWNOiaHhv0dGJxY",
    authDomain: "photo-geo-3d.firebaseapp.com",
    projectId: "photo-geo-3d",
    storageBucket: "photo-geo-3d.appspot.com",
    messagingSenderId: "513804970288",
    appId: "1:513804970288:web:13bd074f1d83a444a680f5"
  }

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
