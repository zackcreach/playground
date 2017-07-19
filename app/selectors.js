class selectors {
  constructor(colors, ary) {
    this.colors = colors;
    this.ary = ary;
    this.events();
  }
  events() {
    document.addEventListener('click', this.cycleColor.bind(this));
  }
  cycleColor() {
    for (let i = 0; i < this.ary.length; i++) {
      console.log(this.ary[i]);
    }
  }
}

export default selectors;
