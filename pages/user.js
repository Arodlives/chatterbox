import Link from 'next/link'
import { getSession,useSession,signOut } from "next-auth/react"
import LogOutIcon from "@heroicons/react/outline";


function User({session,handleSignout}){
    return(
      <main className='container py-20 mx-auto text-center'>
      <h3 className='text-4xl font-bold'>
        Authorized Homepage
      </h3>
  
      <div className='details'>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
  
      <div className='flex justify-center'>
        <button className='px-10 py-1 mt-5 bg-indigo-500 rounded-sm bg-gray-50' onClick={handleSignout}>
        <LogOutIcon className="w-5 h-5 rotate-180"  />
          Sign Out
        </button>
      </div>
  
      <div className='flex justify-center'>
        <Link href={'/profile'} alt="To Login page" className='px-10 py-1 mt-5 bg-indigo-500 rounded-sm text-gray '>Profile</Link>
      </div>
    </main>
    )
  }

export default User