//Immediately Invoked Function Expression
(function () {
    $.connection.hub.start()
        .done(function () {
            console.log("IT WORKED!");
            $.connection.myHub.server.announce("Connected!");
        })
        .fail(function () { alert("ERROR") });

    $.connection.myHub.client.announce = function (message) {
        writeToPage(message);
    }

    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br/>")
    }
})()