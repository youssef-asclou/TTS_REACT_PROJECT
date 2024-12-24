import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { SquareArrowLeft } from 'lucide-react';
 import LoginForm from './LoginForm'
 import { useNavigate } from 'react-router-dom';
// import Modal from 'react-modal';

const navigation = [
  { name: 'Convertir un fichier', href: '#' },
  { name: 'Lecture en continue', href: '#' },
  { name: 'Voiceover', href: '#' },
  // { name: 'Company', href: '#' },
]

const Header = (props) =>{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [Nav, setNav] = useState(false)
  const navigate = useNavigate(); //for page navigation

  
  // const handleNav = () =>{
  //   setNav(true)
  // }

  return (
    
      <header >
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <button onClick={()=>navigate('/')} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Acceuil"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center font-[Poppins] ">
            {/* <div className='mr-8 p-1 border-solid border-2 font-bold text-gray-900 border-solid border-2'>
              Get Started
            </div> */}
            <Button onClick={()=>{  props.gotstarted ? navigate('/') : navigate('/signup')   }} className='mr-3 p-5 rounded-full bg-black text-white ' variant={'transparent'}>  {props.gotstarted?<SquareArrowLeft />:'Get Started'}  </Button>
            <button onClick={()=>setNav(true)} href="#" className="text-sm border-black border-2 rounded-full px-4 py-2 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

        </nav>
        
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
                   
         <LoginForm trigger={Nav} setTrigger={setNav}></LoginForm>  
         
      </header>
      
    )
}

export default Header