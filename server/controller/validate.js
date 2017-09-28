
import _ from 'lodash'
import tools from '../common/tools'
import crypto from 'crypto'

export default {

    validateToken(req, res, next) {

        let signature = req.query.signature;
        let echostr = req.query.echostr;
        let timestamp = req.query['timestamp'];
        let nonce = req.query.nonce;
        let original = [nonce, timestamp, 'lyntoken'].sort().join('');
        console.log("Original str : " + original);
        console.log("Signature : " + signature );

        let scyptoString = sha1(original);
        if(signature == scyptoString){
            res.end(echostr);
            console.log("Confirm and send echo back");
        }else {
            res.end('Failed');
            console.log("Failed!");
        }
    }
}

function sha1(str){

    let md5sum = crypto.createHash("sha1");
    md5sum.update(str);
    str = md5sum.digest("hex");
    return str;
}