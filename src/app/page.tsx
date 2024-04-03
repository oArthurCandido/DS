
"use client"
import Image from 'next/image'
import { Button } from '@/components/atoms'
import {Avatar} from '@/components/atoms'

export default function Home() {
  return (
    <div>
      <Button onClick={() => window.alert("Button Clicked")} className='w-full' variant={'default'} size={'lg'}>
        Button
      </Button>
      <Avatar size={'xl'} src='https://avatars.githubusercontent.com/u/103594555?v=4' alt='User Avatar' fallback='AC'></Avatar>
      <Button variant={'link'} size={'icon'}>
      <Avatar size={'xl'} src='https://avatars.githubusercontent.com/u/103594555?v=4' alt='User Avatar' fallback='AC'></Avatar>
      </Button>
    </div>
  )
}
