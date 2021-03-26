class Tree {
  height = 0

  constructor (height) {
    this.height = height || 999
  }
}

let pear = new Tree()

console.log(pear.height);