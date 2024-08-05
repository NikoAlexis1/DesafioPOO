function Consultorio(nombre, paciente) {
    this.nombre = function () {
        return nombre;
    };
    this.paciente = function () {
        return paciente || [];
    };
}

Consultorio.prototype.getNombre = function () {
    return this.nombre();
}

Consultorio.prototype.setPaciente = function (nuevo_nombre) {
    this.nombre = function () {
        return nuevo_nombre;
    }
}

function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = function () {
        return nombre;
    };
    this.edad = function () {
        return edad;
    };
    this.rut = function () {
        return rut;
    };
    this.diagnostico = function () {
        return diagnostico;
    };
}
Paciente.prototype.getNombre = function () {
    return this.nombre();
}
Paciente.prototype.getEdad = function () {
    return this.edad();
}
Paciente.prototype.getRut = function () {
    return this.rut();
}
Paciente.prototype.getDiagnostico = function () {
    return this.diagnostico();
}

Paciente.prototype.setNombre = function (nuevo_nombre) {
    this.nombre = function () {
        return nuevo_nombre;
    }
}
Paciente.prototype.setEdad = function (nueva_edad) {
    this.edad = function () {
        return nueva_edad;
    }
}
Paciente.prototype.setRut = function (nuevo_rut) {
    this.rut = function () {
        return nuevo_rut;
    }
}
Paciente.prototype.setDiagnostico = function (nuevo_diagnostico) {
    this.diagnostico = function () {
        return nuevo_diagnostico;
    }
}

Consultorio.prototype.agregarPaciente = function (paciente) {
    this.paciente.push([paciente]);
}

Consultorio.prototype.getPacientes = function () {
    this.paciente().forEach(function (elemento, indice) {
        console.log("-----------------------------------------------");
        console.log("Paciente: " + indice);
        console.log("Nombre: " + elemento.getNombre());
        console.log("Edad: " + elemento.getEdad());
        console.log("Rut: " + elemento.getRut());
        console.log("Diagnostico: " + elemento.getDiagnostico());
    });
}

Consultorio.prototype.getPacientePorNombre = function (busquedaNombre) {
    this.paciente().forEach(function (elemento, indice) {
        if (elemento.getNombre() == busquedaNombre) {
            console.log("--------------------PACIENTE ENCONTRADO---------------------------");
            console.log("Paciente: " + indice);
            console.log("Nombre: " + elemento.getNombre());
            console.log("Edad: " + elemento.getEdad());
            console.log("Rut: " + elemento.getRut());
            console.log("Diagnostico: " + elemento.getDiagnostico());
        }
    });
}

var p1 = new Paciente("Juan",35,"12345678-9","Lupus");
var p2 = new Paciente("Lorna",35,"3456543-9","Asma");

var consultorioLosAndes = new Consultorio("Los Andes",[p1,p2]);

console.log(p1.getNombre());
console.log(p2.getNombre());

p2.setDiagnostico("Diabetes");
console.log(p2.getDiagnostico());
console.log(consultorioLosAndes.getNombre())

consultorioLosAndes.getPacientes();

consultorioLosAndes.getPacientePorNombre("Juan");
consultorioLosAndes.getPacientePorNombre("Jose");