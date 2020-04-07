const initialState = {
    userName: '',
    password: '',
    role: '',
    email: '',
    phone: '',
    localStorageData: '',
    success: '',
    requests: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "USERNAMECHANGE": {
            return {
                ...state,
                userName: action.payload
            }
        }

        case "PASSWORDCHANGE": {
            return {
                ...state,
                password: action.payload
            }
        }
        case "SUBMIT": {
            return {
                ...state,
                // userName: '',
                // password: ''
            }
        }
        case "LOGOUT": {
            return {
                ...state,
                userName: '',
                password: ''
            }
        }
        case "GETREQUESTS": {
            let l = JSON.parse(localStorage.getItem("admin"))

            return {
                ...state,
                localStorageData: JSON.parse(localStorage.getItem(state.userName)),
                requests: l.requests
            }
        }
        case "SET": {
            return {
                ...state,
                localStorageData: localStorage.setItem(state.userName, JSON.stringify(action.payload))
            }
        }
        case "ACCEPT": {
            console.log("entered accept")
            let l = JSON.parse(localStorage.getItem("admin"));
            if (action.payload.value === true) {
                console.log("entered accept if")
                let l2=l.requests.splice(action.payload.index, 1);
                // l.requests.splice(action.payload.index, 1);
                console.log(l.requests)
                let l3=JSON.parse(localStorage.getItem(l2[0]))
                l3.accept=true;
                localStorage.setItem(l2[0],JSON.stringify(l3))
                console.log(l2)
                l.users=(l.users.concat(...l.users,l2))
                console.log(l.users);
                localStorage.setItem("admin",JSON.stringify(l))
                return {
                    ...state,
                    localStorageData: l,
                }
            }
            return {
                ...state,
                localStorageData:l
            }
        }
        case "DECLINE": {
            let l = JSON.parse(localStorage.getItem("admin"));
            if (action.payload.value === true) {
                console.log("entered decline if")
                l.requests.splice(action.payload.index, 1);
                // l.requests.splice(action.payload.index, 1);
                
                localStorage.setItem("admin",JSON.stringify(l))
                return {
                    ...state,
                    localStorageData: l,
                }
            }
            return {
                ...state,
                localStorageData:l
            }
        }
        default: return state;
    }
}
export default reducer;