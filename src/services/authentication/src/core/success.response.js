'use strict';

const StatusResponse = {
    CREATED: '201',
    OK: '200'
};

const ReasonResponse = {
    CREATED: 'Created',
    OK: 'Success'
};

class SuccessResponse {
    constructor({ message, statusCode = StatusResponse.OK, reasonStatusCode = ReasonResponse.OK, data = {} }) {
        this.message = message ? message : reasonStatusCode;
        this.status = statusCode;
        this.data = data;
    }

    send(res) {
        res.status(this.status).json(this);
    }
}

class OK extends SuccessResponse {
    constructor({ message, data }) {
        super({ message, data });
    }
}

class Created extends SuccessResponse {
    constructor({ message, statusCode = StatusResponse.CREATED, reasonStatusCode = ReasonResponse.CREATED, data}) {
        super({ message, statusCode, reasonStatusCode, data });
    }
}

export { OK, Created };
