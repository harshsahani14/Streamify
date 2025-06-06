import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login } from '../lib/api.js'

const useLogin = () => {

    const queryClient = useQueryClient()

    const { mutate:loginMutation,isPending,error } = useMutation({
        mutationFn:login,
        onSuccess :async ()=>{
          queryClient.invalidateQueries( { queryKey:["authUser"] } )
        }
    })

    return { loginMutation,isPending,error }
}

export default useLogin