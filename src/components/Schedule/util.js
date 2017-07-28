import { getDuration } from 'utils/dateUtils';

const firstColumnWidth = 100;

export const calculatePosition = ({ event, rect, gridHeight, numberOfEntriesInHour, index }) => {
  const { backgroundColor, startTime, endTime } = event;
  const pixelPerMinute = (gridHeight + 1) / 60;
  const duration = getDuration(startTime, endTime);
  const topDuration = getDuration('07:00 am', startTime);

  const top = (pixelPerMinute * topDuration);
  const height = (pixelPerMinute * duration);
  const width = 100 / numberOfEntriesInHour;

  const left = index * (100 / numberOfEntriesInHour) + 6;
  return {
    style: {
      backgroundColor,
      height: `${duration}px`,
      top: `${top}px`,
      position: 'absolute',
      right: '0',
      left: `${firstColumnWidth}px`,
      width: `${width}%`
    }
  }
}


export const getTimeClassName = (time) => {
  return `${time.substring(0, 2)}${time.substring(time.length - 2, time.length)}`;
};
