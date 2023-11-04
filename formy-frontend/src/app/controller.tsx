"use client"

import { useEffect } from "react"
import { service } from "@/services"

const initUser = async () => {
  await service.task.findAll()
}

export const Controller = () => {  
  useEffect(() => {
    initUser()
  }, [])

  return (<></>)
}