import React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getFriendRequests ,acceptFriendRequest} from '../lib/api';
const NotificationsPage = () => {
  const queryClient=useQueryClient();
  const {data:friendRequests,isLoading}=useQuery({
    queryKey:["friendRequests"],
    queryFn:getFriendRequests,

  })

  const {mutate:acceptRequestMutation,isPending}=useMutation({
    mutationFn:acceptFriendRequest,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["friendRequests"]})
      queryClient.invalidateQueries({queryKey:["friends"]})


    }

  })

  const incomingRequests=friendRequests?.incomingReqs || []
  const acceptedRequests=friendRequests?.aceptedReqs || []


  return (
    <div className='p-4 sm:p-6 lg:p-8'>
      <div className='container mx-auto max-w-4xl space-y-8'>
        <h1 className='text-2xl sm:text-3xl font-bold tracking-tight mb-6'>
          Notifications</h1>

          

      </div>

    </div>
  )
}

export default NotificationsPage