import { getDuration } from 'utils/dateUtils';

const columnWidth = 150;
const rowHeight = 64;
const firstRowHeight = 48;
const timeInterval = 15;
const firstColumnOffset = 150;

const pixelPerMinute = columnWidth / timeInterval;

export const calculatePosition = ({ startTime, endTime, index }) => {

  const duration = getDuration(startTime, endTime);
  const leftDuration = getDuration('07:00 am', startTime);


  const width = `${duration * pixelPerMinute}px`;

  const top = `${((rowHeight * index) - (rowHeight - firstRowHeight))}px`;

  const left = leftDuration * pixelPerMinute + firstColumnOffset;

  return { style : { width, left, top, height: rowHeight ,position: 'absolute' } };
};
