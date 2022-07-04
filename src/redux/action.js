import axios from "axios"

export const tblactions = {
    getreq : "getreq",
    getsuc : "getsuc",
    getfal : "getfal"
}

export const getblreq = () =>{

    return({ type : tblactions.getreq });

}

export const getblsuc = (data) =>{

    return ({
        type : tblactions.getsuc,
        payload : data,
    });

}

export const getblfal = () =>{

    return({
        type : tblactions.getfal,
    })

}





    export const getlist = (dispatch) =>{

        const apireq = getblreq();

        dispatch(apireq);

        return axios({ method : "GET",
                    url : "https://fakeapio.herokuapp.com/dat"})
                    .then((res)=>{
                        const apisuc = getblsuc(res.data);
                        dispatch(apisuc)
                    })
                    .catch((err)=>{
                        const apifal = getblfal();
                        dispatch(apifal)
                    })
    }

    export const adddet = (dispatch,cnt,cty,pop) =>{

        axios({ method : "Post",
                   url : "https://fakeapio.herokuapp.com/dat",
                   data : {
                       country : cnt,
                       nm : cty,
                       pop : pop
                   }})

                   getlist(dispatch)
                  
   }

   export const Updateit = (dispatch,cnt,cty,pop,id) =>{

    axios({ method : "PATCH",
               url : `https://fakeapio.herokuapp.com/dat/${id}`,
               data : {
                   country : cnt,
                   nm : cty,
                   pop : pop
               }})

               getlist(dispatch)
              
}