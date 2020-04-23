 
/*
 *   Copyright 2020 Tomcat from XNova-Ugamela-Welt
 */
 
    import QtQuick 2.5
    import QtQuick.Window 2.2
    
   Image {
        id: root
        source: "images/background.png"
        property int stage
    
       onStageChanged: {
        if (stage == 1) {
            introAnimation.running = true
        }
    }

    Text {
            id: date
            text: Qt.formatDateTime(new Date(),"dd.M.yyyy - hh:mm")
            font.pointSize: 35
            color: "white"
            opacity:0.85
            font { family: "LCARS GTJ2"; weight: Font.Light ;capitalization: Font.Capitalize}
            anchors.horizontalCenter: parent.horizontalCenter
            y: (parent.height - height) / 1.1
        }

    Image {
        id: topRect
        anchors.horizontalCenter: parent.horizontalCenter
        y: root.height
        source: "images/rectangle.svg"
        Image {
            source: "images/logo.png"
            anchors.centerIn: parent
        }
        Rectangle {
            radius: 2
            color: "#247d8f"
            anchors {
                bottom: parent.bottom
                bottomMargin: 2
                horizontalCenter: parent.horizontalCenter
            }
            height: 9
            width: height*32
            Rectangle {
                radius: 3
                anchors {
                    left: parent.left
                    top: parent.top
                    bottom: parent.bottom
                }
                width: (parent.width / 6) * (stage - 1)
                color: "#ffffff"
                Behavior on width { 
                    PropertyAnimation {
                        duration: 250
                        easing.type: Easing.InOutQuad
                    }
                }
            }
        }
    }

    SequentialAnimation {
        id: introAnimation
        running: false

        ParallelAnimation {
            PropertyAnimation {
                property: "y"
                target: topRect
                to: root.height / 3
                duration: 1000
                easing.type: Easing.InOutBack
                easing.overshoot: 1.0
            }

            PropertyAnimation {
                property: "y"
                target: bottomRect
                to: 2 * (root.height / 3) - bottomRect.height
                duration: 1000
                easing.type: Easing.InOutBack
                easing.overshoot: 1.0
            }
        }
    }
}
