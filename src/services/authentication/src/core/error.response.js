'use strict'

import statusCode from './httpStatusCodes.js';
import reasonCode from './reasonPhrases.js';

class HandelError extends Error {
    constructor(message, status) {
        super(message)
        this.status = status
    }
}

class BadRequest extends HandelError {
    constructor(message = reasonCode.BAD_REQUEST, status = statusCode.BAD_REQUEST) {
        super(message, status)
    }
}

class AuthRequest extends HandelError {
    constructor(message = reasonCode.UNAUTHORIZED, status = statusCode.UNAUTHORIZED) {
        super(message, status)
    }
}

export { BadRequest, AuthRequest}