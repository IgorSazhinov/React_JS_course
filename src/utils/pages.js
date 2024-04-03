
export function getPageCount(totalCount, limit) {
    return Math.ceil(totalCount / limit )
}

export function getPageArray (totalpages) {
    let result = []
    for (let i = 0; i < totalpages; i++) {
        result.push(i + 1)
    }
    return result
}
