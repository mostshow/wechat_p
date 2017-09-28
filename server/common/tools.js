
'use strict'
import _ from 'lodash'

export default {

    getParam (req, fieldName){
        let fieldValue = req.body[fieldName] || req.query[fieldName];
        return _.trim(fieldValue);
    },

    htmlEncode (str) {
        var s = '';
        if (str == null || typeof(str) == 'undefined' || str.length == 0) return '';
        s = str.replace(/&/g, "&amp;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/ /g, "&nbsp;");
        s = s.replace(/\'/g, "'");
        s = s.replace(/\"/g, "&quot;");
        s = s.replace(/\n/g, "<br>");
        return s;
    }
}

