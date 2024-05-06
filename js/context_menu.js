function openContextMenu(menuText, linkData, additionalText) {
    var popup = document.createElement('div');
    popup.className = 'popup';

    // Erstelle das Element für den Menütext
    var menuTextElement = document.createElement('div');
    menuTextElement.textContent = menuText;
    menuTextElement.className = 'popup-menu-text';
    popup.appendChild(menuTextElement);

    
// Füge Links zum Popup-Fenster hinzu, falls vorhanden
if (linkData) {
    if (Array.isArray(linkData)) {
        // Überprüfe, ob mehrere Links vorhanden sind und passe die Schriftgröße an
        var multipleLinks = linkData.length > 1;

        // Wenn linkData ein Array ist, füge jeden Link hinzu
        linkData.forEach(function(linkItem, index) {
            var link = document.createElement('a');
            link.textContent = linkItem.text || (multipleLinks ? 'Hier gibt\'s mich' : ''); // Ändere den Text, wenn mehrere Links vorhanden sind
            link.href = linkItem.url;
            link.className = 'popup-link-text' + (multipleLinks ? ' smaller' : ''); // Füge eine zusätzliche Klasse hinzu, wenn mehrere Links vorhanden sind

            // Passe den vertikalen Zeilenabstand für den Text an, wenn mehrere Links vorhanden sind
            if (multipleLinks && index > 0) {
                link.style.marginTop = '10px'; // Ändere den vertikalen Abstand für alle Links außer dem ersten
            }
            link.target = "_blank"; // Öffne den Link in einem neuen Tab >>> FUNKTIONIERT NICHT!
            popup.appendChild(link);
        });
    } else {
        // Wenn linkData ein einzelner Link ist, füge ihn hinzu
        var link = document.createElement('a');
        link.textContent = 'Hier gibt\'s mich';
        link.href = linkData;
        link.className = 'popup-link-text';
        popup.appendChild(link);
    }
}

    // Füge zusätzlichen Text hinzu, falls vorhanden
    if (additionalText) {
        var additionalTextContainer = document.createElement('div'); // Neuer Container für zusätzlichen Text
        additionalTextContainer.className = 'popup-additional-text-container'; // Klasse für den Container
        var additionalTextElement = document.createElement('div'); // Neues Element für den zusätzlichen Text
        additionalTextElement.innerHTML = additionalText; // Verwende innerHTML statt textContent
        additionalTextElement.className = 'popup-additional-text'; // Klasse für den zusätzlichen Text
        additionalTextContainer.appendChild(additionalTextElement); // Füge den zusätzlichen Text dem Container hinzu
        popup.appendChild(additionalTextContainer); // Füge den Container dem Popup-Fenster hinzu
    }


    // Close-Button hinzufügen
    var closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.className = 'popup-close-button'; // Füge die neue Klasse hinzu
    closeButton.onclick = function() {
        document.body.removeChild(popup);
    };
    popup.appendChild(closeButton);

    // Positioniere das Popup-Fenster in der Mitte des Bildschirms
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';

    // Füge das Popup-Fenster zum Body hinzu
    document.body.appendChild(popup);
}
