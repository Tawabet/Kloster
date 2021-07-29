
WA.room.onEnterZone('zProgramminfo', () => {
    WA.nav.openCoWebSite("https://egyptainment.de/TdAe/Programm/index.html");
});
WA.room.onLeaveZone('zProgramminfo', () => {
    WA.nav.closeCoWebSite();
});


WA.room.onEnterZone('zRezepte', () => {
    WA.nav.openCoWebSite("https://egyptainment.de/TdAe/Rezepte.html");
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
//    console.log("popup: " + helloWorldPopup);
});

WA.room.onLeaveZone('zVortragssaal', () => {
    helloWorldPopup.close();
}); 

function skab(num, text) {
    WA.room.onEnterZone("SkabZone"+num, () => {
        helloWorldPopup = WA.ui.openPopup("Skab"+num, text, [{
            label: "OK",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        },
        }]);
    WA.room.onLeaveZone("SkabZone"+num, () => {
        helloWorldPopup.close();
    }); 
}

skab(16, "Das hier ist Skarabäus 16");
