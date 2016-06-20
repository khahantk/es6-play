
var url = 'https://api.github.com/users/defunkt';
$.ajax({
    url: url,
    data: {},
    dataType: 'json',
    success: function (result) {
        var followers_url = result.followers_url;
        $('h2').text(result.name);
        //get followers of this user
        $.ajax({
            url: followers_url,
            data: {},
            dataType: 'json',
            success: function (result) {
                result.forEach(function (item) {
                    console.log(item.login);
                    $('#content').append($('<p></p>').text(item.login));
                });

            },
            error: function (err) {
                 console.log(err);       
            }
        });

    },
    error: function (err) {
         console.log(err);   
    }
});