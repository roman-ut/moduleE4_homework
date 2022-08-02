var obj = { 0: 'a', 1: 'b', 2: 'c' };

function searchKeys(obj, st) {
    for (let key in obj) {
        if (key === st) {
            console.log(true)
            break
        } else {
            console.log(false)
        }
    }

}

searchKeys(obj, '0')