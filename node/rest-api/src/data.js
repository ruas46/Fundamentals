const index = {
    _id: 1,
    get id() { return this._id++}
}

const data = {}

function saveInfo(info){
    if (!info.id) info.id = index.id
    data[info.id] = info
    return info
}

function getData(id) {
    return data[id] || {}
}

function deleteData(id) {
    const info = data[id]
    delete data[id]
    return info
}

function getAllData(){
    return Object.values(data)
}

module.exports = {saveInfo, getData, getAllData, deleteData}