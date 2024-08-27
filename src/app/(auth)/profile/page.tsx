"use client"
import { useAuth } from '@/providers/auth-provider';
import Image from 'next/image';
import React from 'react'

export default function Profile() {
  const { user } = useAuth();
  return (
    <main className='w-screen h-[100vh]'>
      <div className='max-w-7xl mx-auto flex flex-col justify-start items-center'>
        <Image src={user?.image} alt='avatar' width={100} height={100} />
        <h1>Name: {user?.firstName} {user?.lastName}</h1>
        <p>Email: {user?.email}</p>
        <p>Gender: {user?.gender}</p>
        <p>Age: {user?.age}</p>
        <p>Phone: {user?.phone}</p>
        <p>University: {user?.university}</p>
        <p>Blood Group: {user?.bloodGroup}</p>
        <p>Role: {user?.role}</p>
      </div>
    </main>
  )
}
