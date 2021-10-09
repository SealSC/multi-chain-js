import { Status } from "../actions/status"
const PredefinedStatus = {
  SUCCESS: (userData) => { return new Status(0, 'success', userData) },
  DEFAULT_STATE: (userData) => { return new Status(1, 'default state', userData) },
  ERROR_STATE: (userData) => { return new Status(4, 'error state', userData) },
  NOT_SUPPORT: (userData) => { return new Status(5, 'The method is not supported', userData) },
}

export default PredefinedStatus
