
function summ(s) {
    let result = 0;
    function h(){
        return next(eval(arguments.valueOf()));
    };
    function next(args) {
        for(let i in args)
        result += args[i];
        return h;
    }
        result = 0;
        h.valueOf = function(){return result};
        return next(eval(arguments.valueOf()));
    }


console.log(+summ(3)(5)(8)(17)(18)); //51
