export const handleDataDetail = (details) => {
    // convert data detail from array to object
    // ex: [{name: 1}] => { name: 1 }
    let customData = {};
    details.forEach(detail => {
        Object.keys(detail).forEach(key => {
            customData[key] = detail[key]
        })
    })
    return customData;
}