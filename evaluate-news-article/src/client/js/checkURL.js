
var validUrl = require('valid-url');

const checkURL = function(url){
    return validUrl.isUri(url);
};

export default checkURL;