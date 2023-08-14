import React from 'react';
import { DropDownArrow, UpArrow } from '../icons/accordianIcons';

const AccordianContent = ({ data }) => {
  const [openIds, setOpenIds] = React.useState([]);

  const handleAccordianToggle = (id) => {
    if (openIds.includes(id)) {
      setOpenIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
    } else {
      setOpenIds((prevIds) => [...prevIds, id]);
    }
  };
  console.log(openIds);

  return (
    <div>
      {data?.map((acc) => (
        <div
          key={acc.id}
          className='p-4 border border-gray-400 rounded-xl shadow-md relative mb-4 min-w-[420px]'
        >
          <p className='m-2'>{acc.title}</p>
          {openIds.includes(acc.id) && <p className='m-2'>{acc.desc}</p>}
          <p
            onClick={() => {
              handleAccordianToggle(acc.id);
            }}
            className='absolute right-0 top-2 cursor-pointer'
          >
            {openIds.includes(acc.id) ? <UpArrow /> : <DropDownArrow />}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AccordianContent;
