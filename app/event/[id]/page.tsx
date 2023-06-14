import { EventBody } from '@/typings';
import { data } from '@/utility/data';
import Image from 'next/image';
import React from 'react'

type PageProps = {
    params: {
        id: string;
    };
};

async function Event({ params: { id } }: PageProps) {
    const event = data.find((obj) => obj.eventId === parseInt(id));
    return (
        <div className='flex bg-[#555] overflow-y-hidden h-screen'>
            <div className='flex-1 ml-12 pb-12 scrollbar-hide overflow-y-scroll'>
                <p className='font-bold text-2xl text-[#f5a7a7a0] mb-20 mt-14 underline'>Know More</p>
                <div className='relative h-36 mb-10'>
                    <h3 className='absolute font-extrabold text-5xl sm:text-6xl md:text-7xl text-red-100 z-10'>{event?.eventName}</h3>
                    <h3 className='absolute left-2 font-extrabold text-5xl sm:text-6xl md:text-7xl text-[#b65e5e]'>{event?.eventName}</h3>
                </div>
                <p className='font-bold text-3xl text-[#de7474]'>Date & Time: <span className='font-medium text-lg text-white'>{event?.date} @ {event!.time}</span></p>
                <p className='font-bold text-3xl text-[#de7474]'>Venue: <span className='font-medium text-lg text-white'>{event?.venue}</span></p>
                <div className='mt-10'>
                    <p className='font-bold text-2xl text-[#de7474]'>Description: </p>
                    <p className='font-semibold text-lg text-white ml-2 lg:ml-4 mr-2 mt-2'>{event?.description}</p>
                </div>
                {event?.cashPrize && <div className='mt-10'>
                    <p className='font-bold text-2xl text-[#de7474]'>Cash prizes along with medals: </p>
                    <p className='ml-4 my-2 font-semibold text-lg text-gray-200'><span className='font-bold'>1st Prize : </span>{event?.cashPrize![0]}</p>
                    <p className='ml-4 my-2 font-semibold text-lg text-gray-200'><span className='font-bold'>2nd Prize : </span>{event?.cashPrize![1]}</p>
                </div>}
                <div className='mt-10'>
                    <p className='font-bold text-2xl text-[#de7474]'>Rules & Regulations: </p>
                    {event!.rules.map((rule, index) => (
                        <p key={index} className='my-2 font-semibold text-lg text-white ml-2 lg:ml-4'>-{rule}</p>
                    ))}
                </div>
                <div>
                    <p className='font-bold text-2xl text-[#de7474] mt-10'>Event Coordinators: </p>
                    <div className='flex flex-col space-y-2 mt-2 ml-2 lg:ml-4'>
                        {event?.contact.s_coord.map((student, k) => (
                            <p key={k} className='text-white font-medium text-lg'>{k + 1}. {student.name} - <span className='text-gray-300'>{student.number}</span></p>
                        ))}
                    </div>
                </div>
            </div>
            <div className='md:flex-wrap hidden xl:block bg-black h-screen overflow-hidden'>
                <Image src={event?.poster!} alt='poster' height={1080} width={710} />
            </div>
        </div>
    )
}

export default Event