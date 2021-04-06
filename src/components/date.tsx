import { parseISO, format } from 'date-fns';
import React from 'react';

type Props = {
  dateString: string;
};

const Date: React.FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  // console.log(dateString);

  return (
    <div>
      <time dateTime={dateString}>{dateString}</time>
    </div>
  );
};
export default Date;
