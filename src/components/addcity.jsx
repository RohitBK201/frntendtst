import axios from "axios";
import { useState } from "react";

import{Button} from "@chakra-ui/react"
import { adddet } from "../redux/action";
import { useDispatch } from "react-redux";

export const Addcty =()=>{

    const [cnt,setCnt] = useState("");
    const [cty,setCty] = useState("");
    const [pop,setPop] = useState("")

    const dispatch = useDispatch();



    

    return(
        <div style={{display:"flex",flexDirection : "column", width:"400px"}}>
            <input type="text" placeholder="country" onChange={(e)=>{setCnt(e.target.value)}}/>
            <br />
            <input type="text"  placeholder="city" onChange={(e)=>{setCty(e.target.value)}}/>
            <br />
            <input type="text" placeholder="population" onChange={(e)=>{setPop(e.target.value)}}/>
            <br />
            <Button onClick={()=>{ adddet(dispatch,cnt,cty,pop)}}>submit</Button>
        </div>
    )


}