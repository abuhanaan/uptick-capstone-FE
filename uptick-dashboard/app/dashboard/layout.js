import SideNav from '/app/components/sidenav';

const Layout = ({children}) => {
  return (
    <div className='flex flex-col h-screen md:flex-row md:overflow-hidden'>
        <div className='w-full flex-none md:w-64'>
            <SideNav />
        </div>
        <div className='flex-grow p-6 md:p-12 md:overflow-y-auto'>{children}</div>
    </div>
  )
}

export default Layout;