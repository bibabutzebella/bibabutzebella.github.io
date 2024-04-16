function openContextMenu(menuText, linkUrl, additionalText) {
    var popup = document.createElement('div');
    popup.className = 'popup';

    // Erstelle das Element für den Menütext
    var menuTextElement = document.createElement('div');
    menuTextElement.textContent = menuText;
    menuTextElement.className = 'popup-menu-text';
    popup.appendChild(menuTextElement);

    // Füge Link zum Popup-Fenster hinzu, falls vorhanden
    if (linkUrl) {
        var link = document.createElement('a');
        link.textContent = 'Hier gibt\'s mich';
        link.href = linkUrl;
        link.className = 'popup-link-text';
        popup.appendChild(link);
    }

    // Füge weiteren Text hinzu, falls vorhanden
    if (additionalText) {
        var additionalTextElement = document.createElement('div');
        additionalTextElement.textContent = additionalText;
        additionalTextElement.className = 'popup-additional-text';
        popup.appendChild(additionalTextElement);
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
