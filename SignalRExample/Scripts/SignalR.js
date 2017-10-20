//Immediately Invoked Function Expression
(function () {
    var myHub = $.connection.myHub;
    $.connection.hub.start()
        .done(function () {
            writeToPage("It worked!");
            myHub.server.announce("Connected!");
        })
        .fail(function () { writeToPage("Error connnecting to SignalR"); });

    myHub.client.announce = function (message) {
        writeToPage(message);
    }

    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br/>")
    }
})()