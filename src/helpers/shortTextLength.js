export default (val,len) => {
    if (val.length > len) {
        return `${val.slice(0, len)}...`;
    }
    else {
        return val;
    }
}