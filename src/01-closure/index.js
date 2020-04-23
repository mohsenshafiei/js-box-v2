const stringBuilder = (str) => (arg) => typeof arg === "string" ? stringBuilder(str + arg) : str

console.log(stringBuilder("Hello")(" Functional")(" Javascript")(".")(" This")(" is")(" js-box-v2")(".")())
