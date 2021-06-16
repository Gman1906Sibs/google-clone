import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "../components/Avatar"
import HeaderOptions from "./HeaderOptions";


function Header() {
    const router = useRouter();

    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                className="cursor-pointer"
                src="https://www.google.co.za/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" 
                width={120} 
                height={40}
                onClick={() => router.push("/")}
                />

                <form className="flex border border-gray-200 rounded-full shadow-lg flex-grow max-w-3xl
                px-6 py-3 mr-5 ml-10 items-center">
                    <input ref={searchInputRef} type="text" className="flex-gro w-full focus:outline-none"/>
                    <XIcon className="h-7 text-gray-500 cursor-pointer sm:mr-3 transition
                    duration-100 transform hover:scale-125"
                        onClick={() => (searchInputRef.current.value = "")}
                    />

                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l pl-4 border-gray-300"/>

                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>

                    <button hidden type="submit" onClick={search}>Search</button>
                </form>

                <Avatar url="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.18169-9/26230786_10155427988809200_7616275700659617044_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=cdbe9c&_nc_eui2=AeHl3VO_RxztKWRwBUZQEI8ahuWVqg-R7QaG5ZWqD5HtBs0YizvGvwFjr5r5mq35_8M&_nc_ohc=3bdHWTJyDLIAX-K1KZ6&_nc_ht=scontent-jnb1-1.xx&oh=1486727b1429a480075f3b80d0f92336&oe=60CE39C7" 
                    className="ml-auto"
                />
            </div>

            {/* Header Options */}
            <HeaderOptions /> 
            
        </header>
    )
}

export default Header
