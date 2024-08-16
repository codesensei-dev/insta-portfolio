import CardComponent from "./CardComponent";
import { useContext } from "react";
import { userContext } from "../App";

export default function ContentSection(){
    const userObj = useContext(userContext);

    return <div style={{"textAlign" : "center", margin : '20px'}}>
        {userObj.groups.map((item,index)=>{
            return (
              <>
                <h6 className="poppins-medium" style={{ margin: '40px 0px 20px 0px' }} key={index}>{item.mainText}</h6>
                {
                    item.links.map((item,index)=>{
                        return <CardComponent link={item} key={index}/>;
                    })
                }
                
              </>
            );
        })}
        
    </div>
}