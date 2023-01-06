let animals = 1
switch(animals) {
  case 0:
    animals = "cho"
  case 1:
    animals = "cho cho"
  case 2:
    animals = "vip"
    break;
    // khi không có break, thì dù có chọn animal = 1, thì vẫn chạy xuống case 2
};
console.log(animals);