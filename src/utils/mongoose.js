// to use transform array object data from mongoDB to legal
const arrayMongooseToObject = (data) => {
    return data.map((item) => item.toObject());
};
const objectMongooseToObject = (data) => {
    return data.toObject();
};

module.exports = { arrayMongooseToObject, objectMongooseToObject };
