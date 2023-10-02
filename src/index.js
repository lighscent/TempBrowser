const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Charger le fichier HTML de votre application
    mainWindow.loadFile('index.html');

    // Créer un modèle de menu personnalisé
    const template = [
        {
            label: 'Options',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'CmdOrCtrl+R',
                    click() {
                        mainWindow.reload();
                    }
                },
                {
                    label: 'Toggle DevTools',
                    accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'F12',
                    click() {
                        mainWindow.webContents.toggleDevTools();
                    }
                },
                {
                    type: 'separator' // Séparateur entre les éléments du menu
                },
                {
                    label: 'Leave',
                    accelerator: 'CmdOrCtrl+Q',
                    click() {
                        app.quit(); // Quitte l'application
                    }
                }
            ]
        }
    ];

    // Créez le menu à partir du modèle
    const menu = Menu.buildFromTemplate(template);

    // Définir le menu comme menu de l'application
    Menu.setApplicationMenu(menu);
});
