function users(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.enter = function() {
        console.log(this.name + "已进入");
    }
}
module.exports = users;
