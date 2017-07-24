import moment from 'moment';
import * as Constants from 'constants'

export const getDayHours = (interval = 60) => {
  const dt = new Date(1970, 0, 1, 0, 0, 0, 0);
  const rc = [];
  while (dt.getDate() === 1) {
      rc.push(moment(dt).format(Constants.TIME_FORMAT));
      dt.setMinutes(dt.getMinutes() + interval);
  }
  return rc.slice(7);
}


export const addToTime = (time, amount = 30) => {
  return moment(time, Constants.TIME_FORMAT).add(amount, 'm').format(Constants.TIME_FORMAT);
}
