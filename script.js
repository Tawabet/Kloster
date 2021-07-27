
// nothing for now

WA.chat.sendChatMessage('Hello world', 'Mr Robot');

WA.room.onEnterZone('xzone', () => {
    WA.chat.sendChatMessage("You are in 'xzone'!", 'Mr Robot');
    WA.chat.sendChatMessage("Date: " + Date.now(), 'Mr Robot');
})

setTimeout(function() {
    WA.chat.sendChatMessage("Date: " + Date.now(), 'Mr Robot');
}, 3000);

WA.room.onLeaveZone('xzone', () => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot');
})


let helloWorldPopup;

// Open the popup when we enter a given zone
WA.room.onEnterZone('xzone', () => {
    helloWorldPopup = WA.openPopup("welcome", 'Will<b>kommen!</b>', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    },
    {
        label: "Weg!",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
//            popup.close();
            WA.goToPage("https://seschat-fernschule.de");
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveZone('xzone', () => {
    helloWorldPopup.close();
}); 


