import React from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useContext, useState } from 'react';
import DataContext from './dataContext/dataContext';

const InterviewPrep = () => {
  let url = 'https://localhost:7086/api/material';
  const { data, fetchError, isLoading } = useAxiosFetch(url);
  
  const {colorTheme } = useContext(DataContext);

  return (
    <>
      {isLoading && <p className="statusMsg">Loading ...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg err" style={{ color: 'red' }}>
          {fetchError}
        </p>
      )}
      {!isLoading && !fetchError && (
        <>
        <div className={`design ${colorTheme}`}></div>
        <div className='listContainer'>
          <h2 className={`interview ${colorTheme}`}>Interview Preparation</h2>
          <ul>
            {data?.map((material) => (
              <li key={material.id}>
                {material.name}
                <ul>
                  {material.materials?.map((materials) => (
                    <li key={materials.name}>
                      <a className='educationLink' href={materials.name}>{materials.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          </div>
        </>
      )}
    </>
  );
};

export default InterviewPrep;
