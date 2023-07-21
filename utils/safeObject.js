const safeObject = {
  getFirst: (obj) => (obj ? obj[0] : null),
  getFirstKey: (obj) => Object.keys(obj)[0],
  getFirstKeyValue(obj) {
    let key = safeObject.getFirstKey(obj);
    return obj[key];
  }
};

export default safeObject;
