function add_or_del () {
    try {
        var us_i = {
            us_i1: {
                usi1_nm:0,
                usi1_sr:0,
                usi1_ag:0
            }
        };

        var usna_i1 = {
            us_n1:{
                us_nm1:"Igo",
                us_sr1:"Romanen",
                us_ag1:"19"
            }
        }
        
        Object.defineProperty(us_i, "us_i2", {value:0, writable:true, enumerable:true, configurable:true});
        if(us_i.hasOwnProperty("us_i2") == true && us_i.us_i1.usi1_nm instanceof Number == true) {
            if(confirm("Можете войти, или зарегестрироваться")) {
                if(confirm("Войти")) {
                    if(us_i.us_i1.usi1_nm == us_i.us_i1.usi1_ag && us_i.hasOwnProperty("us_i1") == true) {
                        var us_un1;
                        var us_sr1;
                        var us_ag1;
                        us_un1 = prompt("Введите ваше им");
                        if(us_un1 == usna_i1.us_n1.us_nm1 && us_un1 == "Igo") {
                            us_sr1 = prompt("Введите вашу фамили");
                            if(us_sr1 == usna_i1.us_n1.us_sr1 && us_sr1 == "Romanen") {
                                us_ag1 = prompt("Введите вашу фамили");
                                if(us_ag1 == usna_i1.us_n1.us_nm1 && us_ag1 == "19") {
                                    var us_pj1 = {
                                        us_i1de: "190",
                                        us_i1od: "175",
                                        us_i1op: "135"
                                    };
                                    if(us_pj1.hasOwnProperty("us_i1de") == true && us_pj1.hasOwnProperty("us_i1od") == true) {
                                        if(confirm("Введите паро"))  {
                                            var us_p2;
                                            us_p2 = prompt("Введите паро");
                                            if(us_p2 == us_pj1.us_i1de && us_pj1.hasOwnProperty("us_i1de") == true) {
                                                if(confirm("Вы можете посмотреть дескрипторы сво")) {
                                                    if(confirm("Выбирите объек")) {
                                                        
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else if(us_ag1 != usna_i1.us_n1.us_nm1 && us_ag1 != "19") throw new Error("У вас ошибка, поле должно быть звполн")
                            } else if(us_sr1 != usna_i1.us_n1.us_sr1 && us_sr1 != "Romanen") throw new Error("У вас ошибка, поле должно быть запо");
                        } else if(us_un1 != usna_i1.us_n1.us_nm1 && us_un1 != "Igo") throw new Error("У вас ошибка, поле должно быть зап");
                    }
                }
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