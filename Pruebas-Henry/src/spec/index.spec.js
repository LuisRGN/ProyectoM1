class Activity {
    constructor({ id, title, description, imgURL }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgURL = imgURL;
    }
}
class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }
    createActivity(activity) {
        this.id++;
        const newActivity = new Activity({ id: this.id, ...activity });
        this.activities.push(newActivity);
    }
    getAllActivities() {
        return this.activities;
    }
    deleteActivity(id) {
        const filter = this.activities.filter((activity) => activity.id !== id);
        this.activities = filter;
    }
}

class Demo {
    constructor() {
        this.demo = [];
    }
    gettTodos() {
        return this.demo;
    }
    addTodos(todo) {
        this.demo.push(todo)
    }
    deleteTodo() {
        this.demo.pop()
    }
}

describe("la clase Activity", () => {
    it("Debe ser una clase", () => {
        expect(typeof Activity.prototype.constructor).toBe("function")
    });
    it("Debe tener implementado el metodo getAllACtivities()", () => {
        const lista = new Repository();
        expect(lista.activities).toBeDefined();
    });
    it("Debe tener el metodo createActivity()", () => {
        const lista = new Repository();
        expect(lista.activities).toBeDefined();
    });
    it("debe tener implementado el metodo deleteActivity()", () => {
        const lista = new Repository();
        expect(lista.activities).toBeDefined();
    });
    it("El metodo getAllActivities() debe retornar un array", () => {
        const lista = new Repository();
        expect(Array.isArray(lista.getAllActivities())).toBeTrue();
    });
    it("El metodo addTodos() debe agrear un nuevo elemento", () => {
        const lista = new Demo();
        lista.addTodos("Hacer la HW de la clase de hoy");
        expect(lista.gettTodos()).toContain("Hacer la HW de la clase de hoy");
    });
    it("El metodo deleteTodo() debe eliminar la ultima tarea", () => {
        const lista = new Demo();
        lista.addTodos("A");
        lista.addTodos("B");
        lista.addTodos("C");
        lista.deleteTodo();
        expect(lista.gettTodos()).toContain("A")
        expect(lista.gettTodos()).toContain("B")
        expect(lista.gettTodos()).not.toContain("C")
    })
});