// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  ENDPOINT_BASE:'http://127.0.0.1:8000/process_image/',
  ENDPOIN_BASE_EYESCARE: 'https://eyescare.azurewebsites.net/',
  TOKEN: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJBZG1pbiI6IkFkbWluIiwiVXNlcnMiOiJBdXRoQ29udHJvbGxlciIsIm5iZiI6MTY5NzU5NDg5MiwiZXhwIjoxNjk3NjgxMjkyLCJpYXQiOjE2OTc1OTQ4OTIsImlzcyI6IkV5ZXNDYXJlQmFja2VuZCJ9.RfITgyyyMiH3xW91vYUon2RnIYkeW3d48-t4bPt5rabkTUaoB3k-BY56eIt_3BU7O7H_p4ydQaXgn8JDHP9DqA',
  firebase: {
    projectId: 'diabeticdb-438f3',
    appId: '1:846087337823:web:6acb5b5a2359c43c4028ea',
    storageBucket: 'diabeticdb-438f3.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCSrswRxNBB7QycFf1Z8LA2_2YLSSwBve4',
    authDomain: 'diabeticdb-438f3.firebaseapp.com',
    messagingSenderId: '846087337823',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
