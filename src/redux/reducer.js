import { tblactions } from "./action"

const init = {

    list : [],
    loading :false,
    error : false

}

export const tblreducer = (store=init,action) =>{

    switch(action.type)
    {
        case tblactions.getreq : {

            return({
                ...store,
                loading : true,
                error : false
            })

        };

        case tblactions.getsuc : {

            return({
                ...store,
                loading :false,
                list : action.payload,
            })

        }

        case tblactions.getfal : {

            return({
                ...store,
                loading:false,
                error :true
            })

        }

        default : return store;
    }

}