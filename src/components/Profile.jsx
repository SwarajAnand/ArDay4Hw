import { CgProfile } from "react-icons/cg";
function Profile() {
  return (
    <div className="w-[50%] m-auto flex pt-10 bg-white border-l-2  border-r-2">
      <div>
        <CgProfile className="text-[#0f0f0f] text-[5.5rem] mt-10 ml-5" />
        <h1 className="font-extrabold text-center text-xl mt-1 ml-4">
          Profile
        </h1>
      </div>
      <div className=" border-r-4 border-black border-b-4 px-6 mt-5 py-6">
        <h1 className="font-extrabold text-3xl">
          Aishwarya <br />
          Patni
        </h1>
        <p className=" tracking-wider">Frontend Developer</p>
      </div>
      <div className="border-b-4 border-black px-6 mt-10 ">
        <p>
          Hi i am Aishwarya Patni front end developer Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Corporis, pariatur.
        </p>
        <h1 className="">
          <strong>Email : </strong>ash.patni13@gmail.com
        </h1>
        <h1>
          <strong>Website : </strong>:myWebsite.com
        </h1>
      </div>
    </div>
  );
}

export default Profile;
