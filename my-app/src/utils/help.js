export const handleDataDetail = (details) => {
    let customData = {};
    details.forEach(detail => {
        Object.keys(detail).forEach(key => {
            customData[key] = detail[key]
        })
    })
    return customData;
}