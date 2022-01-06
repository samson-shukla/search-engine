import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation();

    useEffect(()=> {
        if(searchTerm !== ''){
            if(location.pathname === '/videos'){
                getResults(`/search/q=${searchTerm} videos`);
            }
            else{
                getResults(`${location.pathname}/q=${searchTerm}&num50`);
            }
        }
    }, [searchTerm, location.pathname]);

    if(isLoading) return <Loading />;
    
    switch (location.pathname) {
        case '/search':
            return (
                <div className="sm:px-56 lg:text-left text-justify flex flex-wrap justify-between">
                  {results?.map(({ link, title }, index) => (
                    <div key={index} className="md:w-2/5 w-full mb-5 pl-2 border-l-2 dark:border-sky-400 border-sky-600">
                      <a href={link} target="_blank" rel="noreferrer">
                        <p className="text-sm">{link.length > 45 ? link.substring(0, 45) : link}</p>
                        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
                      </a>
                    </div>
                  ))}
                </div>
              );
        
        case '/images':
            return (
                <div className='grid md:grid-cols-5 grid-cols-2 gap-3'>
                    {results?.map(({image, link:{href, title}}, index)=> (
                        <a className='grid place-content-center sm:p-5 p-2 dark:bg-gray-800 bg-sky-200 rounded-md text-clip overflow-hidden' href={href} key={index}>
                            <img src={image?.src} alt={title} loading='lazy' />
                            <p className='w-36 break-words text-sm mt-3'>
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            );

            case '/news':
                return (
                    <div className="sm:px-56 lg:text-left text-justify flex flex-wrap justify-between items-center">
                      {results?.map(({ links, id, source, title }) => (
                        <div key={id} className="md:w-2/5 w-full mb-5 pl-2 border-dotted border-l-2 dark:border-sky-400 border-sky-600">
                            <a href={links?.[0].href} target="_blank" rel="noreferrer" className='hover:underline'>
                                <p className="text-lg dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                            </a>
                            <div className='flex gap-4'>
                                <a href={source?.href} target='_blank' rel='noreferrer'>
                                    {source?.href}
                                </a>
                            </div>
                        
                        </div>
                      ))}
                    </div>
                  );
            
            case '/videos':
                return (
                    <div className='flex flex-wrap justify-center items-center'>
                        {results.map((video, index)=> (
                            <div key={index} className='p-2'>
                                {video?.additional_links?.[0].href && <ReactPlayer url={video.additional_links?.[0].href} controls width="290px" height="240px" />}
                            </div>
                        ))}
                    </div>
                );
    
        default:
            return "ERROR! Link is Broken!";
    }    
}
