function Emoji() {
    return function (target: any, key: string | symbol) {
      let val = target[key];
   
      Object.defineProperty(target, key, {
        get: () => val,
        set: (newVal) => {
          val = `🍥 ${newVal} 🍥`;
        },
        configurable: true,
        enumerable: true,
      });
    };
  }
   
  class IceCream {
    @Emoji()
    flavor = "naruto";
  }
   
  let IC1 = new IceCream();
  console.log(IC1.flavor);