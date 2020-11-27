export class Lodash {
    compact(arr) {
        return arr.filter(val => !!val)
    }

    groupBy(arr, prop) {
        return arr.reduce((acc, i) => {
            let key = typeof prop === "function" ? prop(i) : i[prop]
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(i)
            return acc
        }, {})
    }
}

