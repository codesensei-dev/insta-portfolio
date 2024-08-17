import { useContext } from "react";
import { userContext } from "../App";
import LinkCardComponent from "./LinkCardComponent";
import GroupCardComponent from "./GroupCardComponent";

export default function ContentSection({DisplayComponent}){
    const userObj = useContext(userContext);

    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <DisplayComponent />
      </div>
    );
}


// {
//   userObj.groups.map((item, index) => {
//     return (
//       <>
//         <h6
//           className="poppins-medium"
//           style={{ margin: '40px 0px 20px 0px' }}
//           key={index}
//         >
//           {item.mainText}
//         </h6>
//         {item.links.map((item, index) => {
//           return <LinkCardComponent link={item} key={index} />;
//         })}
//       </>
//     );
//   });
// }