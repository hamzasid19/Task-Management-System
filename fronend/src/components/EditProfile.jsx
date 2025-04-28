import Input from "./Input";
import Button from "./Button";

const EditProfile = ({ handleSubmit, editUser, setEditUser, setIsOpen }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="absolute top-20 xs:left-[20%] left-0 flex flex-col gap-3 bg-white rounded p-4 shadow z-16 xs:w-1/2 w-full z-16">
        <h1 className="xs:text-3xl text-2xl font-bold text-center">
          Edit Profile
        </h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 ">
            <Input
              variant="email"
              placeholder="Email"
              data={editUser.email}
              handleChange={handleChange}
              extraClasses="xs:w-full max-[800px]:w-full"
            />
            <Input
              variant="password"
              placeholder="Password"
              data={editUser.password}
              handleChange={handleChange}
              extraClasses="xs:w-full max-[800px]:w-full"
            />
            <Input
              variant="username"
              placeholder="Name"
              data={editUser.username}
              handleChange={handleChange}
              extraClasses="xs:w-full max-[800px]:w-full"
            />
          </div>
          <div className="flex justify-center gap-3">
            <Button extraClasses="w-40 " text="Save" />
            <Button
              extraClasses="w-40 "
              text="Cancel"
              handleClick={() => setIsOpen(false)}
            />
          </div>
        </form>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center z-14"></div>
    </>
  );
};

export default EditProfile;
