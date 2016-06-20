
var jQueryGetData = function (url, data) {
    var promise = new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            data: data,
            dataType: 'json',
            success: resolve,
            error: reject
        });

    });

    return promise;
};


var url = 'https://api.github.com/users/defunkt';
jQueryGetData(url, {}).then(function (result) {
        var followers_url = result.followers_url;
        $('h2').text(result.name);
        return jQueryGetData(followers_url, {});
    },
    function (err) {
        console.log(err.message);
    }
).then(function (result) {
    result.forEach(function (item) {
        console.log(item.login);
        $('#content').append($('<p></p>').text(item.login));
    });
});
