function questionListAsMap(newList, oldList = new Map()) {
    return newList.reduce((list, question) => {
        list.set(question.country, question)
        return list
    }, oldList)
}

function getAllCountrys(list, oldList= []) {
    return oldList.concat(list.map(question => question.country))
}

export {
    questionListAsMap,
    getAllCountrys
}