"use client"
import React, { useEffect } from "react"
import {useSelector,useDispatch} from "react-redux"
import {fetchUsers,increment} from "@/slices/userSlice"
import { AppDispatch, RootState } from "@/store/store"

export default function Home() {
  const {entities,loading,value}=useSelector((state:RootState)=>state.user)
  const dispatch=useDispatch<AppDispatch>();
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  console.log(entities);
  
  return (
    <div>
      {loading?(<h1>Loading...</h1>):
      entities?.map((user:any)=>(
        <h3 key={user.id}>{user.name}</h3>
      ))
      }
      <div>
        {value}
        <button onClick={()=>dispatch(increment())}>Hit Me</button>
      </div>
      
    </div>
  )
}
