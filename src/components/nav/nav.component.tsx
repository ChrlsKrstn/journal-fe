'use client' 
import { useSession, signOut } from 'next-auth/react'
import { Menu } from "@headlessui/react"

const Nav = () => { 

  const { data: session  } = useSession();    

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center"> 
            <h1 className="self-center text-2xl font-semibold">Trade Journal</h1>
          </a> 
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>{session?.user?.name}</Menu.Button>
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-4 py-1">
                <Menu.Item>
                  <a className="hover:cursor-pointer" onClick={() => signOut()}>Logout</a>
                </Menu.Item>
              </div> 
            </Menu.Items>
          </Menu>
        </div>
      </nav>  
  )
}

export default Nav;