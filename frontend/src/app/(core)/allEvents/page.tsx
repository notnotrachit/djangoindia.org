import React from 'react'

import { EventCard } from '@sections'
import { fetchData } from '@/utils'
import { EventsResponse } from '@/types'
import { API_ENDPOINTS } from '@/constants'

const Page = async () => {
  const { data: events } = await fetchData<EventsResponse>(
    API_ENDPOINTS.allEvents,
  )

  return (
    <div>
      <div className='p-4 mb-10 md:mb-20 lg:mb-50'>
        <div className='flex flex-col items-center mb-4'>
          <h1 className='text-3xl text-center font-bold'>All Events</h1>
        </div>
        {events?.length ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {events?.map(({ cover_image, date_time, name, venue }, index) => (
              <div key={index} className='w-full h-auto mb-4'>
                <EventCard
                  title={name}
                  date={date_time}
                  imageSrc={cover_image}
                  venue={venue}
                  time={date_time}
                />
              </div>
            ))}
          </div>
        ) : (
          <h3 className='text-center'>No Events</h3>
        )}
      </div>
    </div>
  )
}

export default Page
