import Head from 'next/head';
import Avatar from '../components/Avatar';
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  //pointer to feild you are targeting to get input from
  const searchInputRef = useRef(null);

  const search = (e) => {
    // prevent refresh on click
    e.preventDefault();
    // collect input data at targeted feild
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen min-h-[800px]">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left Section */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link" className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

          {/* Avatar */}
          <Avatar url={"https://scontent-jnb1-1.xx.fbcdn.net/v/t1.18169-9/26230786_10155427988809200_7616275700659617044_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=cdbe9c&_nc_eui2=AeHl3VO_RxztKWRwBUZQEI8ahuWVqg-R7QaG5ZWqD5HtBs0YizvGvwFjr5r5mq35_8M&_nc_ohc=3bdHWTJyDLIAX-K1KZ6&_nc_ht=scontent-jnb1-1.xx&oh=1486727b1429a480075f3b80d0f92336&oe=60CE39C7"}/>
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image 
          src="https://www.google.co.za/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" 
          width={320} 
          height={112}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md 
        rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text=gray-500"/>
          <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow"/>
          <MicrophoneIcon className="h-5"/>
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>

          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />

    </div>
  )
}
