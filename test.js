const car = (name, model, owner, year, phone, image) => ({
  name,
  model,
  owner,
  year,
  phone,
  image
});
const log = (text, type, date = new Date()) => ({
  text,
  type,
  date
})
const cars = [
  car("Ford", "Focus", "Max", 2015, "+38 012 34 56", "img/1/focus.png"),
  car("Ford", "Mondeo", "Kolia", 2018, "+38 0987 65 54", "img/1/mondeo.jpeg"),
  car("Porshe", "Panamera", "Igor", 2010, "+38 012 56 87", "img/1/panamera.jpg")
];

new Vue({
  el: "#app",
  data: {
    cars: cars,
    car: cars[0],
    logs: [],
    selectedCarIndex: 0,
    phoneVisibility: false,
    search: '',
    modalVisibility: false
  },
  methods: {
    selectCar(index) {
      this.car = cars[index];
      this.selectedCarIndex = index;
    },
    newOrder() {
      this.modalVisibility = false
      this.logs.push(
        log(`Success order: ${this.car.name} -  ${this.car.model}`, 'ok')
      )
    },
    cancelOrder() {
      this.modalVisibility = false
      this.logs.push(
        log(`canceled order: ${this.car.name} - ${this.car.model}`, 'cnl')
      )
    },
  },
  computed: {
    phoneBtntext() {
      return this.phoneVisibility ? "Hide phone" : "Show phone";
    },
    searchCars() {
      return this.cars.filter(car => {
        return car.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || car.model.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  }
});