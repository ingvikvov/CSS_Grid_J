function add_or_del () {
    try {
        var us_i = {
            us_i1: {
                usi1_nm:0,
                usi1_sr:0,
                usi1_ag:0
            }
        };
        Object.defineProperty(us_i, "us_i2", {value:0, writable:true, enumerable:true, configurable:true});
        if(us_i.hasOwnProperty("us_i2") == true && us_i.us_i1.usi1_nm instanceof Number == true) {
            if(confirm("Можете войти, или зарегестрироваться")) {
    
            } else 
                  if(confirm("Зарегестрироватся")) {
    
                  } else 
                        var kh_1 = [1, 2, 3, 4, 5];
                        if(kh_1[0] < kh_1[1] && kh_1[1] != kh_1[2]) {
                            var kh_2 = {
                                jh_1:0,
                                jh_2:0
                            };
                            if(kh_2.hasOwnProperty("jh_1") == true && kh_2.jh_1 == kh_2.jh_2) {
                                Object.defineProperty(kh_2, "jh_3", {value:150, writable:true, enumerable:true, configurable:true});
                                if(kh_2.hasOwnProperty("jh_3") == true && kh_2.hasOwnProperty("jh_1") == true) throw new Error("У вас ошибка, нельзя ничего не выбирать");
                            }
                        }
        }
    }
    catch(e) {
        var kh_2 = {
            kx_1:10,
            get kg_1 () {return this.kx_1 + this.kh_2}
        };
        if(kh_2.hasOwnProperty("kx_1") == true && kh_2.propertyIsEnumerable("kx_1") == true) {
            Object.defineProperty(kh_2, "kx_2", {value:150, writable:true, enumerable:true, configurable:true});
            if(kh_2.hasOwnProperty("kx_2") == true && kh_2.kx_1 == 10) {
                document.write(kh_2.kg_1);
            }
        }
    }  
}