var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "iconSize": "3",
                    "positions": "10,13,desktop:/Home.desktop,1,0,desktop:/Software ,3,12,desktop:/YaST.desktop,2,12,desktop:/Pfade,4,12,desktop:/Krusader – Admin,3,0,desktop:/writer.desktop,4,0,desktop:/pinta.desktop,5,0,desktop:/org.kde.krusader.desktop,2,0,desktop:/Einstellungen,1,12,desktop:/audacious.desktop,9,0,desktop:/trash.desktop,9,12,desktop:/chromium-browser.desktop,1,1,desktop:/firefox.desktop,1,2",
                    "showToolbox": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/superuser/WALLPAPER/GTJLCARS_Wallpaper_1680x10850_enterprise.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "icon": "/home/superuser/Downloads/unnamed.png",
                            "searchFieldHeight": "0",
                            "showRecentApps": "false",
                            "sidebarIconSize": "48",
                            "sidebarShortcuts": "",
                            "tileModel": "W3siaCI6MiwidXJsIjoib3JnLmtkZS5rcnVzYWRlci5kZXNrdG9wIiwidyI6MiwieCI6MCwieSI6MH0seyJoIjoyLCJ1cmwiOiJvcmcua2RlLmtydXNhZGVyLnJvb3QtbW9kZS5kZXNrdG9wIiwidyI6MiwieCI6MiwieSI6MH0seyJoIjoyLCJ1cmwiOiJ3cml0ZXIuZGVza3RvcCIsInciOjIsIngiOjQsInkiOjB9LHsiaCI6MiwidXJsIjoiYXVkYWNpb3VzLmRlc2t0b3AiLCJ3IjoyLCJ4IjowLCJ5IjoyfSx7ImgiOjIsInVybCI6ImNocm9taXVtLWJyb3dzZXIuZGVza3RvcCIsInciOjIsIngiOjIsInkiOjR9LHsiaCI6MiwidXJsIjoib3JnLmtkZS5rY2FsYy5kZXNrdG9wIiwidyI6MiwieCI6MiwieSI6Nn0seyJoIjoyLCJ1cmwiOiJ0b3Jicm93c2VyLmRlc2t0b3AiLCJ3IjoyLCJ4IjowLCJ5Ijo0fSx7ImgiOjIsInVybCI6InN5c3RlbXNldHRpbmdzLmRlc2t0b3AiLCJ3IjoxLCJ4IjowLCJ5Ijo4fSx7ImgiOjIsInVybCI6IllhU1QuZGVza3RvcCIsInciOjEsIngiOjEsInkiOjh9LHsiaCI6MiwidXJsIjoieWFzdDItcGFja2FnZXIuZGVza3RvcCIsInciOjEsIngiOjIsInkiOjh9LHsiaCI6MiwidXJsIjoib3JnLmtkZS5rb25zb2xlLmRlc2t0b3AiLCJ3IjoxLCJ4Ijo1LCJ5Ijo4fSx7ImgiOjIsInVybCI6Im9yZy5rZGUuZG9scGhpbnN1LmRlc2t0b3AiLCJ3IjoyLCJ4Ijo0LCJ5Ijo2fSx7ImgiOjIsInVybCI6Im9yZy5rZGUua2FkZHJlc3Nib29rLmRlc2t0b3AiLCJ3IjoyLCJ4IjoyLCJ5IjoyfSx7ImgiOjIsInVybCI6InZpcnR1YWxib3guZGVza3RvcCIsInciOjIsIngiOjAsInkiOjZ9LHsiaCI6MiwidXJsIjoib3JnLmtkZS5rb3JnYW5pemVyLmRlc2t0b3AiLCJ3IjoyLCJ4Ijo0LCJ5IjoyfSx7ImgiOjIsInVybCI6Im9yZy5rZGUua2luZm9jZW50ZXIuZGVza3RvcCIsInciOjEsIngiOjMsInkiOjh9LHsiaCI6MiwidXJsIjoib3JnLmtkZS5rd2FsbGV0bWFuYWdlcjUuZGVza3RvcCIsInciOjEsIngiOjQsInkiOjh9LHsiaCI6MiwidXJsIjoiZmlyZWZveC5kZXNrdG9wIiwidyI6MiwieCI6NCwieSI6NH1d"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "com.github.zren.tiledmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "show_lockScreen": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.konsoleprofiles"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Appearance": {
                            "boldText": "true",
                            "dateFormat": "longDate",
                            "enabledCalendarPlugins": "/usr/lib64/qt5/plugins/plasmacalendarplugins/holidaysevents.so",
                            "showDate": "true",
                            "showSeconds": "true"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "76",
                    "DialogWidth": "1680"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 2,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 93.33333333333333,
            "minimumLength": 93.33333333333333,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
