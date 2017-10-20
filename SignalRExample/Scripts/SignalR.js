//Immediately Invoked Function Expression
(function () {
    var chat = $.connection.chat;
   
    $.connection.hub.start()
        .done(function () {
            $.connection.hub.logging = true;
            writeToPage("It worked!");
            $.connection.hub.log("Connected!");
            chat.server.announceToEverybody("Connected!");           
        })
        .fail(function () {
            writeToPage("Error connnecting to SignalR");
        });

    chat.client.announce = function (message) {
        writeToPage(message);
    };

    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br/>");
    };

    $("#click-me").on("click", function () {
        chat.server.getServerDateTime()
            .done(function (serverDateTime) {
                writeToPage(serverDateTime);
            })
            .fail(function (e) {
                writeToPage(e);
            });
    });

})();