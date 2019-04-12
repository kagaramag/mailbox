import config  from './config.mjs';
import { requestGet } from './request/get.mjs';
import { message } from './message.mjs';
import token from './auth.mjs';

requestGet(`${config.url}messages`, 'inbox', token);