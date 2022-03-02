const is = {
  arr: (e) => Array.isArray(e),
};

const toArr = (elem) => {
  if (is.arr(elem)) {
    return elem;
  }
  if (elem instanceof NodeList || elem instanceof HTMLCollection) {
    return [].slice.call(elem);
  }
  return [elem];
};

class Lemon {
  constructor(obj) {
    this.obj = obj;
    this.targets = toArr(document.querySelectorAll(this.obj.el));
    this.lemons();
    this.animation(this.targets, this.obj.animation);
  }

  lemons() {
    let observer = new IntersectionObserver(this.callback, {
      root: null,
      rootMargin: this.obj.options.margin,
      threshold: this.obj.options.retard,
    });
    this.targets.forEach((element) => {
      observer.observe(element);
    });
  }

  callback(entry) {
    entry.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("isVisible");
      }
    });
  }

  animation(targets, ani) {
    if (ani) {
      let innerHeights = window.innerHeight;
      window.addEventListener("wheel", (event) => {
        targets.forEach((e) => {
          e.style.transition = `${this.obj.duration}s`;
          e.classList.add(ani);
          let top = e.getBoundingClientRect().top;
          let height = e.getBoundingClientRect().height;
          if (top - innerHeights > -(height / 2) && event.deltaY < 0) {
            if (e.classList.contains("isVisible")) {
              e.classList.remove("isVisible");
            }
          }
        });
      });
    }
  }
}

module.exports.Lemon = Lemon;

