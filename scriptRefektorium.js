
WA.room.onEnterZone('zProgramminfo', () => {
    WA.nav.openCoWebSite("http://egyptainment.de/TdAe/Programm/index.html");
});
WA.room.onLeaveZone('zProgramminfo', () => {
    WA.nav.closeCoWebSite();
});


WA.room.onEnterZone('zRezepte', () => {
    WA.nav.openCoWebSite("http://egyptainment.de/TdAe/Rezepte.html");
});
WA.room.onLeaveZone('zRezepte', () => {
    WA.nav.closeCoWebSite();
});

let helloWorldPopup;

WA.room.onEnterZone('zVortragssaal', () => {
    helloWorldPopup = WA.ui.openPopup("infovt", 'Hier geht es zum Vortragssaal im Obergeschoß!', [{
        label: "Jetzt nicht",
        className: "primary",
        callback: (popup) => {
            popup.close();
        }
    },
    {
        label: "Weiter",
        className: "primary",
        callback: (popup) => {
            WA.nav.goToPage("https://lecture.senfcall.de/kat-ixa-d9n-xik");
        }
    }]);
});

WA.room.onLeaveZone('zVortragssaal', () => {
    helloWorldPopup.close();
}); 

