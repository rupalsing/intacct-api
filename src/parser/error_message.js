import { transform } from 'hoek';

function errorMessageSingle(err) {
    return transform(err, {
        errorno: 'error.0.errorno.0',
        description: 'error.0.description.0',
        description2: 'error.0.description2.0',
        correction: 'error.0.correction.0'
    });
}

function errormessage(data) {
    return data.map(errorMessageSingle);
}

export default {
    errormessage
};
