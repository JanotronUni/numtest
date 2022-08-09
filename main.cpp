#include "pxt.h"
using namespace pxt;
namespace NumPad {
    //%
    int RxBufferedSize(){
        return uBit.serial.rxBufferedSize();
    }
}
