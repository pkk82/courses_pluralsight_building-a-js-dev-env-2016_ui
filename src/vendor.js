/*
This file contains referneces to the vendor libraries we're using in this project.
this is used by webpack in the production build only.
A separate bundle for vendor code is useful since it's unlikely to change as often as the application's code.
So all the librarties we reference here will be written to vender.js so they can be cached until one of them change.
So basically, this avoids customers having to download a hug JS file anytime a line of code changes.
They only have to download vendor.js when a vendor library  changes which should be less frequent.
Any files that aren't referenced here will be bundled into main.js for the production build.
*/

/* eslint-disable no-unused-vars */
import fetch from 'whatwg-fetch';
