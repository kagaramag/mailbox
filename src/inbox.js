import config  from './config.mjs';
import { requestGet } from './request/get.mjs';
import { message } from './message.mjs';
import token from './auth.mjs';

var base64Url = token.split('.')[1];
var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
console.log(base64);

requestGet(`${config.url}messages`, 'inbox');