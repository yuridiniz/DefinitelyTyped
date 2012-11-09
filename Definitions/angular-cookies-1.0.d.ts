/// Type definitions for Angular JS 1.0 (ngCookies module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="angular-1.0.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// ngCookies module (angular-cookies.js)
///////////////////////////////////////////////////////////////////////////////
module ng.cookies {

    ///////////////////////////////////////////////////////////////////////////
    // CookieService
    // see http://docs.angularjs.org/api/ngCookies.$cookies
    ///////////////////////////////////////////////////////////////////////////
    interface ICookiesService {}

    ///////////////////////////////////////////////////////////////////////////
    // CookieStoreService
    // see http://docs.angularjs.org/api/ngCookies.$cookieStore
    ///////////////////////////////////////////////////////////////////////////
    interface ICookieStoreService {
        get(key: string): any;
        put(key: string, value: any): void;
        remove(key: string): void;
    }

}
