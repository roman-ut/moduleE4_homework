class ElectricalAppliance {
    constructor(name) {
        this.name = name;
    }

    on() {
        this.status = 'включено'
        console.log(this.name + ' в состоянии ' + this.status)
    }

    off() {
        this.status = 'выключено'
        console.log(this.name + ' в состоянии ' + this.status)
    }
}

class Desklamp extends ElectricalAppliance {
    constructor(name) {
        super(name);
        this.name = name;
    }

    CalculatePower (amperage, voltage) {
        console.log('Настольная лампа потребляет ' + (amperage*voltage)+ ' Вт')
    }
}

class Computer extends ElectricalAppliance {
    constructor(name) {
        super(name);
        this.name = name;
    }

    CalculatePower (amperage, voltage) {
        console.log('Компьтер потребляет ' + (amperage*voltage)+ ' Вт')
    }
}

const desklamp = new Desklamp('Настольная лампа')
desklamp.on()
desklamp.CalculatePower(0.3, 220)
desklamp.off()

const computer = new Computer('Компьютер')
computer.on()
computer.CalculatePower(1, 220)
computer.off()