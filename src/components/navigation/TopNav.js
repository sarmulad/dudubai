
import Only from "assets/images/only.png";




const DesktopNavbar = () => {
  return (
    <div className=" bg-black h-[20px] flex justify-center items-center mb-[100px]">
       <img 
             className="w-[200px] h-[50px]" 
             src={Only} 
             alt='programs-images'
             />
    </div>
  );
};




const Navbar = () => {

  return (
      <div
        className="w-full "
      >
          <DesktopNavbar />
      </div>
  );
};

export default Navbar;