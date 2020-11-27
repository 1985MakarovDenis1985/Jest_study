function expect(value) {
    return {
        toBe: exp => {
            if (value === exp){
                console.log("success")
            }else {
                console.error(`value is ${value} but expectation ${exp}`)
            }
        }
    }

}

export const sum = (a, b) => a + b
export const nl = () => null

// expect(sum(3,3)).toBe(6)