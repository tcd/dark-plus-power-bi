const { colors } = require("./colors")

const theme = {
    "name": "Dark Plus",
    "dataColors": [
        colors.light_blue,
        colors.dark_blue,
        colors.magenta,
        colors.green,
        colors.light_green,
        colors.cyan,
        colors.orange,
        colors.dark_yellow
    ],
    "foreground": colors.very_light_gray,
    "foregroundNeutralSecondary": colors.very_light_gray,
    "foregroundNeutralTertiary": colors.light_gray,
    "background": colors.very_dark_gray,
    "backgroundLight": colors.bright_black,
    "backgroundNeutral": colors.bright_black,
    "tableAccent": "#2878BD",
    "maximum": "#608B4E",
    "center": "#DCDCAA",
    "minimum": "#D16969",
    "hyperlink": "#2878BD",
    "bad": "#D16969",
    "neutral": "#DCDCAA",
    "good": "#608B4E",
    "null": "#808080",
    "visitedHyperlink": "#D0E4F5",
    "textClasses": {
        "callout": {
            "fontFace": "Arial",
            "color": "#D4D4D4"
        },
        "title": {
            "fontFace": "Arial",
            "color": "#D4D4D4"
        },
        "header": {
            "fontFace": "Arial",
            "color": "#D4D4D4"
        },
        "label": {
            "fontFace": "Arial",
            "color": "#D4D4D4"
        }
    },
    "visualStyles": {
        "*": {
            "*": {
                "background": [
                    {
                        "color": {
                            "solid": {
                                "color": "#1E1E1E"
                            }
                        }
                    }
                ],
                "visualHeader": [
                    {
                        "foreground": {
                            "solid": {
                                "color": "#D4D4D4"
                            }
                        },
                        "border": {
                            "solid": {
                                "color": "#3a3a3a"
                            }
                        },
                        "background": {
                            "solid": {
                                "color": "#1E1E1E"
                            }
                        }
                    }
                ],
                "outspacePane": [
                    {
                        "backgroundColor": {
                            "solid": {
                                "color": "#1E1E1E"
                            }
                        },
                        "foregroundColor": {
                            "solid": {
                                "color": "#D4D4D4"
                            }
                        },
                        "transparency": 50,
                        "border": true,
                        "borderColor": {
                            "solid": {
                                "color": "#979593"
                            }
                        },
                        "checkboxAndApplyColor": {
                            "solid": {
                                "color": "#C586C0"
                            }
                        }
                    }
                ],
                "filterCard": [
                    {
                        "$id": "Applied",
                        "transparency": 0,
                        "foregroundColor": {
                            "solid": {
                                "color": "#D4D4D4"
                            }
                        },
                        "backgroundColor": {
                            "solid": {
                                "color": "#C586C0"
                            }
                        },
                        "inputBoxColor": {
                            "solid": {
                                "color": "#605E5C"
                            }
                        },
                        "borderColor": {
                            "solid": {
                                "color": "#979593"
                            }
                        },
                        "border": true
                    },
                    {
                        "$id": "Available",
                        "transparency": 0,
                        "foregroundColor": {
                            "solid": {
                                "color": "#D4D4D4"
                            }
                        },
                        "backgroundColor": {
                            "solid": {
                                "color": "#1E1E1E"
                            }
                        },
                        "inputBoxColor": {
                            "solid": {
                                "color": "#3a3a3a"
                            }
                        },
                        "borderColor": {
                            "solid": {
                                "color": "#979593"
                            }
                        },
                        "border": true
                    }
                ],
                "visualTooltip": [
                    {
                        "themedTitleFontColor": {
                            "solid": {
                                "color": "#D4D4D4"
                            }
                        },
                        "themedValueFontColor": {
                            "solid": {
                                "color": "#D4D4D4"
                            }
                        },
                        "themedBackground": {
                            "solid": {
                                "color": "#1E1E1E"
                            }
                        },
                        "actionFontColor": {
                            "solid": {
                                "color": "#D4D4D4"
                            }
                        }
                    }
                ],
                "visualHeaderTooltip": [
                    {
                        "themedTitleFontColor": {
                            "solid": {
                                "color": "#D4D4D4"
                            }
                        },
                        "themedBackground": {
                            "solid": {
                                "color": "#1E1E1E"
                            }
                        }
                    }
                ],
                "border": [
                    {
                        "color": {
                            "solid": {
                                "color": "#D4D4D4"
                            }
                        },
                        "show": false
                    }
                ]
            }
        },
        "slicer": {
            "*": {
                "items": [
                    {
                        "background": {
                            "solid": {
                                "color": "#3a3a3a"
                            }
                        }
                    }
                ],
                "numericInputStyle": [
                    {
                        "background": {
                            "solid": {
                                "color": "#3a3a3a"
                            }
                        }
                    }
                ]
            }
        },
        "keyDriversVisual": {
            "*": {
                "keyInfluencersVisual": [
                    {
                        "canvasColor": {
                            "solid": {
                                "color": "#3B3A39"
                            }
                        }
                    }
                ]
            }
        },
        "page": {
            "*": {
                "outspace": [
                    {
                        "color": {
                            "solid": {
                                "color": "#1E1E1E"
                            }
                        }
                    }
                ],
                "background": [
                    {
                        "transparency": 0,
                        "color": {
                            "solid": {
                                "color": "#1E1E1E"
                            }
                        }
                    }
                ]
            }
        }
    },
    "icons": {
        "RedUpArrow": {
            "description": "Red Up Arrow",
            "url": "data&colon;image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23FF0066' d='M 16 4.09375 L 9.28125 10.8125 L 10.71875 12.21875 L 15 7.9375 L 15 28 L 17 28 L 17 7.9375 L 21.28125 12.21875 L 22.71875 10.8125 Z' /></svg>"
        },
        "BlueDownArrow": {
            "description": "Blue Down Arrow",
            "url": "data&colon;image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'> <path fill='%233F9FEC' d='M 15 4 L 15 24.0625 L 10.71875 19.78125 L 9.28125 21.1875 L 16 27.90625 L 22.71875 21.1875 L 21.28125 19.78125 L 17 24.0625 L 17 4 Z'/> </svg>"
        }
    }
}

module.exports.default = theme