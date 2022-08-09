
/**
 *NumPad
 */
//% weight=10 color=#1d8045 icon="\uf0e7" block="NumPad"
namespace NumPad {
    let toAdd = ""

    //% weight=90
    //% blockId="nfcEvent" block="Gib Nummernfolge aus"
  export function GibNummernfolgeAus () {
    toAdd = "-1"
    while (toAdd[-1] != "#") {
        pins.digitalWritePin(DigitalPin.P13, 1)
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            toAdd = "" + toAdd + "1"
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            toAdd = "" + toAdd + "4"
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            toAdd = "" + toAdd + "7"
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            toAdd = "" + toAdd + "*"
        }
        pins.digitalWritePin(DigitalPin.P13, 0)
        basic.pause(10)
        pins.digitalWritePin(DigitalPin.P14, 1)
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            pins.digitalWritePin(DigitalPin.P14, 0)
            toAdd = "" + toAdd + "2"
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            pins.digitalWritePin(DigitalPin.P14, 0)
            toAdd = "" + toAdd + "5"
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            pins.digitalWritePin(DigitalPin.P14, 0)
            toAdd = "" + toAdd + "8"
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            pins.digitalWritePin(DigitalPin.P14, 0)
            toAdd = "" + toAdd + "0"
        }
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.pause(10)
        pins.digitalWritePin(DigitalPin.P15, 1)
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            pins.digitalWritePin(DigitalPin.P15, 0)
            toAdd = "" + toAdd + "3"
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            pins.digitalWritePin(DigitalPin.P15, 0)
            toAdd = "" + toAdd + "6"
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            pins.digitalWritePin(DigitalPin.P15, 0)
            toAdd = "" + toAdd + "9"
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            pins.digitalWritePin(DigitalPin.P15, 0)
            toAdd = "" + toAdd + "#"
        }
        pins.digitalWritePin(DigitalPin.P15, 0)
        basic.pause(10)
    }
    basic.showString("" + (toAdd.replace("#", "")))
    return toAdd
}

    //% weight=80
    //% blockId="getUID" block="Chip ID Text"
    function GibNummerAus () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        return 1
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        return 4
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        return 7
    } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        return 10
    }
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(10)
    pins.digitalWritePin(DigitalPin.P14, 1)
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        return 2
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        return 5
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        return 8
    } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        return 0
    }
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(10)
    pins.digitalWritePin(DigitalPin.P15, 1)
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        return 3
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        return 6
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        return 9
    } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        return 11
    }
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(10)
    return 12
}



    basic.forever(() => {
        if (init && (myNFCevent != null)) {
            if (detectedRFIDcard()) {
                myNFCevent();
            }
            basic.pause(50);
        }
    })
}
