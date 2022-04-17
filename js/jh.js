function add_or_del () {
    var us_i = {
        us_i1: {
            usi1_nm:0,
            usi1_sr:0,
            usi1_ag:0
        }
    };
    Object.defineProperty(us_i, "us_i2", {value:0, writable:true, enumerable:true, configurable:true});
    if(us_i.hasOwnProperty("us_i2") == true && us_i.us_i1.usi1_nm instanceof Number == true) {
        
    }
}