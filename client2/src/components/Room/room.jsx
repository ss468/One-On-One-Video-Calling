import { useParams } from "react-router-dom";
import { appid} from "../helper";
import { Serversecret } from "../helper";
import {ZegoUIKitPrebuilt} from  "@zegocloud/zego-uikit-prebuilt";
const Room=()=>{
    const {roomid}=useParams();
    console.log("room id ===>", roomid);
    const mymeeting=async(element)=>{
           const appID=appid;
           const serverSecret=Serversecret;
           const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid, Date.now().toString() , "xnor");
           const zp = ZegoUIKitPrebuilt.create(kitToken);
           zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                  name: 'Copy link',
                  url: `http://localhost:5173/room/${roomid}`
                }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
              },
           })
    }
   return(
    <>
     <div ref={mymeeting}></div>
    </>
   )
}
export default Room;