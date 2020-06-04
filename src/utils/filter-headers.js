
export default  (headers, nameList) => {
     let hdrs =  nameList.map(name => name.toLowerCase())
       .reduce((acc, name) => ({
            ...acc,
            [name]: headers[name]
        }),{});
     // console.log(hdrs);
     return hdrs;
        
}

