function ElectricalAppliance(name) {
    this.name = name;
}

ElectricalAppliance.prototype.on = function () {
    this.status = 'включено'
    console.log(this.name + ' в состоянии ' + this.status)
}

ElectricalAppliance.prototype.off = function () {
    this.status = 'выключено'
    console.log(this.name+ ' в состоянии ' + this.status)
}

function Desklamp(name) {
    this.name = name;
}

Desklamp.prototype = new ElectricalAppliance()

Desklamp.prototype.calculatePower = function (amperage, voltage) {
    console.log('Настольная лампа потребляет ' + (amperage*voltage)+ ' Вт')
}

function Computer(name) {
    this.name = name;
}

Computer.prototype = new ElectricalAppliance()

Computer.prototype.calculatePower = function (amperage, voltage) {
    console.log('Компьтер потребляет ' + (amperage*voltage)+ ' Вт')
}

const desklamp = new Desklamp('Настольная лампа')
const computer = new Computer('Компьютер')

desklamp.on()
desklamp.calculatePower(0.3, 220)
desklamp.off()
computer.on()
computer.calculatePower(1, 220)
computer.off()
