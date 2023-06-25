
/*
{
    average : a,
    min     : b,
    max     : c,
    length  : d
}
*/
function analyse(array) {
    const data = {};
    data['average'] = average(array);
    data['min'] = min(array);
    data['max'] = max(array);
    data['length'] = array.length;

    return data;
}

function average(array){
    return array.reduce((sum, n) => sum + n, 0)/array.length;
}

function min(array){
    return array.reduce((l, n) => {
        return n < l ? n : l;
    }, array[0]);
}

function max(array){
    return array.reduce((l, n) => {
        return n > l ? n : l;
    }, array[0]);
}

export { analyse };