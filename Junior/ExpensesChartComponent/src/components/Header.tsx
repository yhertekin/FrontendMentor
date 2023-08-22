import HeaderLogo from "./../assets/images/logo.svg";

const Header = () => {
    return (
        <header className='bg-red rounded-md flex justify-between items-center p-4 w-full mx-auto md:w-[500px]'>
            <div className='text-white'>
                <p className=''>My balance</p>
                <p className='text-3xl font-bold'>$921.48</p>
            </div>
            <img src={HeaderLogo} alt='logo' />
        </header>
    );
};

export default Header;
