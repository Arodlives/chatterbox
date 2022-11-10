import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { getSession,useSession,signOut } from "next-auth/react"
import {LogOutIcon} from "@heroicons/react/outline";



export default function Home() {
  //?  ⬇️Connecting next auth to change this state variable⬇️
  const{data:session}=useSession();


  function handleSignout(){
    signOut()
  }
  // const[session,setSession]=useState(false);
  // const [user, setUser] = useState({});
  // const [client,setClient]=useState();
  // const [channel,setChannel]=useState();
  // const[messages,setMessages]=useState([]);

  // const videoRef = useRef();

  // useEffect(()=>{
  //   //*Optional chaining with '?'
  //   if(!user?.id) return;
  //   //Wrapping with async
  //   (async function run(){
  //     //*➡️Initializing a Server Client Through env 
  //     const apiKey = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY);
  //     setClient(apiKey);
      
  //     const { token } = await fetch('/api/token',{
  //       method:'POST',
  //       body:JSON.stringify({
  //         id:user.id
  //       })
  //     }).then(r=>r.json())

  //     //* ⬇️ Ideally the user is pulled from a database instead of hard-coded
  //     const connectedUser = await apiKey.connectUser(
  //       {
  //           id: user.id,
  //           name: user.id,
  //           image: 'https://i.imgur.com/fR9Jz14.png',
  //       },
  //       //*⬇️Creates A token
  //     token
  //     )
  //       //* What to do after once they are connected
  //             //* After connecting user
  //     const channel = apiKey.channel('livestream','spacejelly', {
  //       name: 'Spacejelly',
  //       });
  //       setChannel(channel);
  
  
  //     })();
  //     //*Cleaning resource when that instance is no longer needed
  //     return ()=> {
  //       apiKey.disconnectUser();
  //       setChannel(undefined)
  //     }
  // },[user.id]);

  return (
    <div >
      <Head>
        <title>Chatterbox</title>
        <meta name="description" content="Social Chat App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session? User({session,handleSignout}): Guest()}
    </div>
    
  )
}

//Guest 
 function Guest(){
  return (
    <main className='container py-20 mx-auto text-center'>
      <h3 className='text-4xl font-bold'>
        Guest Homepage
      </h3>
      <div className='flex justify-center'>
        <Link href={'/login'} alt="To Login page" className='px-10 py-1 mt-5 bg-indigo-500 rounded-sm text-gray '>Sign in</Link>
      </div>
    </main>
  )
 }
//Authorize User 
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

export async function getServerSideProps({req}){
                  //? Returns a cookie🍪
  const session = await getSession({req})

  if(!session){
    return{
      redirect:{
        destination:'/login',
        permanent:false,
      }
    }
  }
  

  return {
    props:{
      session
    }
  }
}