const getParams = (input) => {
    let param = "";
    let keys = Object.keys(input);
     
    keys.forEach(k => {
        param += `${k}=${encodeURIComponent(input[k])}&`
    });
    // if(hasValue(Perpage)) {
    //     param += `Perpage=${Perpage}&`;
    // }
    // if(hasValue(Startfrom)) {
    //     param += `Startfrom=${Startfrom}&`;
    // }
    // if(hasValue(sortbyStartfrom)) {
    //     param += `sortbyStartfrom=${sortbyStartfrom}&`;
    // }
    // if(hasValue(sortby)) {
    //     param += `sortby=${sortby}&`;
    // }
    param = param.substring(0, param.length -1);
    // console.log('pagination params ===>', param);
    return param
}

export { getParams }; 