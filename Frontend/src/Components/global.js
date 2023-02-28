
let _obj = {};

export const setGlobal = (obj) => {
    Object.assign(_obj, obj);
};
export const getGlobal = (varName) => {
    if (_obj[varName] !== undefined) {
        return _obj[varName];
    } else {
        return null;
    }
};