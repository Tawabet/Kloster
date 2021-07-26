
// nothing for now

WA.sendChatMessage('Hello world', 'Mr Robot');

WA.onEnterZone('xzone', () => {
    WA.sendChatMessage("You are in 'xzone'!", 'Mr Robot');
    WA.sendChatMessage("Date: " + Date.now(), 'Mr Robot');
})

setTimeout(function() {
    WA.sendChatMessage("Date: " + Date.now(), 'Mr Robot');
}, 3000);

WA.onLeaveZone('xzone', () => {
    WA.sendChatMessage("Goodbye!", 'Mr Robot');
})


let helloWorldPopup;

// Open the popup when we enter a given zone
WA.onEnterZone('xzone', () => {
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
WA.onLeaveZone('xzone', () => {
    helloWorldPopup.close();
}); 


