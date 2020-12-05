/**
 * @param {string} kingName
 */
var ThroneInheritance = function(kingName) {

};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {

};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {

};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {

};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */


var ThroneInheritance = function (kingName) {
  this.name = kingName
  this.children = {}
  this.deathList = {}
}

ThroneInheritance.prototype.birth = function (parentName, childName) {
  this.children[parentName] = this.children[parentName] ? [...this.children[parentName], childName] : [childName]
}

ThroneInheritance.prototype.death = function (name) {
  this.deathList[name] = true
}

ThroneInheritance.prototype.getInheritanceOrder = function () {
  const allOrder = []
  const dfs = name => {
    if (!this.deathList[name]) allOrder.push(name)
    if (this.children[name]) {
      for (let i = 0; i < this.children[name].length; i++) dfs(this.children[name][i])
    }
  }
  dfs(this.name)
  return allOrder
}
