import {useState} from "react";
function SignUp() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <section className="w-full h-[calc(100vh-64px)] flex items-center">
      {!isSelected ? (
        <div className="flex flex-col gap-8 max-w-screen-lg mx-auto items-center">
          <h1 className="text-zinc-50 text-4xl">Select an account type</h1>
          <div className="flex gap-8">
            <div onClick={() => setIsSelected(true)} className="flex flex-col max-w-sm gap-4 rounded-lg bg-zinc-900 border-2 border-zinc-800 hover:border-pink-500 transition-all duration-300 ease-in p-4 items-center cursor-pointer">
              <img className="size-32" src="business-team.png" />
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-semibold text-zinc-50">Business</span>
                <p className="w-max-prose text-zinc-400">Scout players based on hours played, game type, mouse grip and previously reviewed items.</p>
              </div>
            </div>

            <div onClick={() => setIsSelected(true)} className="flex flex-col max-w-sm gap-4 rounded-lg bg-zinc-900 border-2 border-zinc-800 hover:border-pink-500 transition-all duration-300 p-4 items-center cursor-pointer">
              <img className="size-32" src="user-account.png" />
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-semibold text-zinc-50">User</span>
                <p className="w-max-prose text-zinc-400">Sign up and receive the opportunity to test and review great products.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>hi</div>
      )}
    </section>
  );
}

export default SignUp;
