import { v1 } from 'uuid';

class ControlFunction {
    constructor(name, params = {}, controlId = null) {
        if (!name) {
            throw new Error('Missing control function name');
        }

        this.name = name;
        this.parameters = params;

        this.assignControlId(controlId);
    }

    assignControlId(controlId = null) {
        if (controlId) {
            this.controlId = controlId;
        } else {
            this.controlId = v1();
        }
    }

    toXML(root) {
        const elements = {
            function: {
                '@controlid': this.controlId
            }
        };

        elements.function[this.name] = this.parameters;

        return root.ele(elements);
    }
}

export default {
    ControlFunction
};