import { Status } from "../Types/status"

const finedStatus ={
  SUCCESS:(userData)=>{return new Status(0,'success',userData)},
  DEFAULT_STATE:(userData)=>{return new Status(1,'default state',userData)},
  ERROR_STATE:(userData)=>{return new Status(4,'error state',userData)},
  NOT_SUPPORT:(userData)=>{return new Status(5,'not support state',userData)},
}

export default finedStatus
