
import _ from 'lodash'
import tools from '../common/tools'
import crypto from 'crypto'
import getWebToken from '../common/getWebToken'

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
            console.log(echostr);
        }else {
            res.end('Failed');
            console.log("Failed!");
        }
    },
    //?code=CODE&state=STATE。
    userInfo(req, res, next){
        let code = req.query.code;
        let state = req.query.state;
        console.log(state)
        getWebToken(code).then(function(err, body){
            if(err){
                console.log(err)
                res.end('Failed2');
            }else{
                res.end(body);

            }

        })
    }
}

function sha1(str){

    let md5sum = crypto.createHash("sha1");
    md5sum.update(str);
    str = md5sum.digest("hex");
    return str;
}