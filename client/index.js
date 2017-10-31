
var param = query();
var send = function () {
  var defer = $.Deferred()
  $.ajax({
    url: './api/userInfo?code='+param.code + '&state='+param.state,
    success: function (data) {
        defer.resolve(data)
    },
    error: function (err) {
      defer.reject(err)
    }
  })
  return defer.promise()
}

send().always(function (callback) {
	console.log(callback, 'success')
}, function (err) {
	console.log(err, 'err')
})
function query(search) {
    var url = search || location.search; //获取url中"?"符后的字串
    var str = url;
	var theRequest = {};

	if (url.indexOf("?")  !==  -1) {
		str = url.substr(1);
	}

	if(str.length > 0){
		str = str.split("&");

		for(var i = 0; i < str.length; i ++) {
		    theRequest[str[i].split("=")[0]] = unescape(str[i].split("=")[1]);
		}
	}
	return theRequest;
};