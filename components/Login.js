/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { signIn } from "next-auth/client";
function Login() {
  signIn();

  return (
    <div className='grid place-items-center'>
      <Image
        src='https://links.papareact.com/t4i'
        height={400}
        width={400}
        objectFit='contain'
      />
      <h1
        onClick={signIn}
        className='p-2 px-4 cursor-pointer bg-blue-500 rounded-full text-white text-center'
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
