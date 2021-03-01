// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const BASE_URL = "https://u3pgbxg4gg.execute-api.us-east-1.amazonaws.com/"

export const environment = {
  production: false,
  authURL: BASE_URL + 'auth/v1',
  customerURL: BASE_URL + 'customer/v1',
  performanceURL: BASE_URL + 'performance/v1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
