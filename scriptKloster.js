let weisheiten=["PTAHOTEP: Gib deinen Freunden ab von dem, was dir zuteil geworden ist.","PTAHOTEP: Wer den ganzen Tag missmutig ist, dem bereitet keiner einen frohen Augenblick. Wer aber den ganzen Tag nur lustig ist, dem hält keiner das Haus in Ordnung.","MERIKARE: Sei ein Meister im Reden, um zu siegen.","MERIKARE: Halte deine Beamten in Ehren und lass es deinen Untertanen wohl ergehen.","CHETI: Setze du dein Herz hinter die Bücher!","CHETI: Beim Grüßen sollst du aufstehen, beim Gehen beeile deine Füße.","ANI: Folge der alltäglichen Sitte und mache dich ans Pflügen, wenn Zeit zum Pflügen ist.","ANI: Betritt nicht das Haus eines anderen, bevor er dich dazu auffordert und begrüßt.","ANI: Bau dir ein Haus oder suche eines und kaufe es.","AMENEMOPE: Fang keinen Streit mit dem Heißmäuligen an und stichle ihn nicht mit Worten.","AMENEMOPE:  Begehre nicht die Habe eines Abhängigen und hungere nicht nach seinem Brot.","ANCHSHESCHONQUI: Wohne nicht mit deinen Schwiegereltern zusammen in einem Haus.","ANCHSHESCHONQUI: Ein Dieb stiehlt bei Nacht, wird aber bei Tage entdeckt.","ANCHSHESCHONQUI: Wer sich schämt mit seiner Frau zu schlafen, bekommt keine Kinder.","ANCHSHESCHONQUI: Es ist schöner im eigenen kleinen Haus zu wohnen, als im großen Haus eines anderen.","ANCHSHESCHONQUI: Belästige nicht das Herz deines Freundes mit unbedeutenden Dingen.","INSINGER: Der Tor, der auf eine Frau sieht, ist wie eine Fliege am Blut.","INSINGER: Der schlechte Mann nimmt zwei Drittel und verlangt noch das letzte Drittel.","INSINGER: Sei nicht geizig, damit dein Name nicht anrüchig werde.","INSINGER: Wer zu rasch redet, gibt falsche Antwort."];let helloWorldPopup;function skab(num,text){console.log("SkabZone hook für Skab "+num);WA.room.onEnterZone("SkabZone"+num,()=>{var t=text;if(Math.random()>0.33){t=weisheiten[Math.floor(Math.random()*weisheiten.length)];}
helloWorldPopup=WA.ui.openPopup("Skab"+num,t,[{label:"OK",className:"primary",callback:(popup)=>{popup.close();}}]);});WA.room.onLeaveZone("SkabZone"+num,()=>{helloWorldPopup.close();});}
skab(5,"5. Von welchem Künstler stammen die Holzfiguren im großen Gang?");skab(6,"6. Wer hält den Eröffnungsvortrag?");skab(7,"7. Welcher Gott streitet sich mit Horus um den Thron?");skab(8,"8. Warum finden die Tage der Ägyptologie 2021 digital statt?");