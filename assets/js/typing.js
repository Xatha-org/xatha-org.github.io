$(document).ready (function() {
    $("#typing").each(function() {
        new Typed("#" + $(this)[0].id, {
            strings: ['Hacking Team', 'CTFers', '1337 Pwners', 'H4x0rs', 'Skids'],
            typeSpeed: 120,
            smartBackspace: 'true',
            backSpeed: 110,
            backDelay: 90,
            loop: true,
            showCursor: true
        });
    });

    $("#cursor").each(function() {
        new Typed("#" + $(this)[0].id, {
            strings: [$(this)[0].getAttribute("string")],
            typeSpeed: 120,
            loop: false,
            showCursor: true
        });
    });
});