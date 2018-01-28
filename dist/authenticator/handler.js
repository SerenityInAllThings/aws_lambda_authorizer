"use strict";
exports.hello = (event, context, cb) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        }),
    };
    if (cb)
        cb(null, response);
};
