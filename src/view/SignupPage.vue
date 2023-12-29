<template>
    <div class="page-bg w-full h-[919px] bg-[url('../../public/images/login-bg.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center">
    <div class="screen-wrapper bg-white rounded-xl w-[370px] h-[720px]  flex flex-col relative">
        <div class="form-bg h-[500px] flex flex-col justify-start items-center mt-9">
        <h1 class="title font-bold text-[28px]">
            Signup
        </h1>
        <form class="login-form flex flex-col mt-3 w-[280px] h-max grow">
            <div class="flex flex-col relative">
                <label for="" class="username-label">Username</label>
                <svg class="username-icon text-gray-400 h-5 w-5 absolute bottom-[21px] left-[7px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <input placeholder="Type your username" type="text" class="username-inp h-14 w-full border-b-2 border-gray-300 outline-none caret-gray-400 pl-9 pb-2"/>
            </div>
            <div class="flex flex-col relative mt-4">
                <label for="" class="username-label">Email address</label>
                <svg class="username-icon text-gray-400 h-5 w-5 absolute bottom-[21px] left-[7px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <input placeholder="Type your email address" type="text" class="username-inp h-14 w-full border-b-2 border-gray-300 outline-none caret-gray-400 pl-9 pb-2"/>
            </div>
            <div class="flex flex-col relative mt-4">
                <label for="" class="username-label">Phone number</label>
                <svg class="username-icon text-gray-400 h-5 w-5 absolute bottom-[21px] left-[7px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <input placeholder="Type your phone number" type="text" class="username-inp h-14 w-full border-b-2 border-gray-300 outline-none caret-gray-400 pl-9 pb-2"/>
            </div>
            <div class="flex flex-col relative mt-4">
                <label for="" class="username-label">Password</label>
                <svg class="username-icon text-gray-400 h-5 w-5 absolute bottom-[21px] left-[7px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <input placeholder="Type your password" type="password" class="username-inp h-14 w-full border-b-2 border-gray-300 outline-none caret-gray-400 pl-9 pb-2"/>
            </div>
            <button type="submit" class="form-login mb-0 mt-7 bg-pink-500 hover:bg-pink-600 rounded-3xl grow">Signup</button>
        </form>
    </div>
    <div class="other-choise  flex flex-col justify-start items-center mt-4">
        <h4 class="text-gray-500">Or Sign Up Using</h4>
        <div class="choises flex flex-row gap-4">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="50px" height="50px"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="50px" height="50px"><path fill="#03a9f4" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="50px" height="50px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
        </div>
    </div>
    <div class="sign-up  flex flex-col justify-start items-center mt-3 gap-2">
        <h4 class="text-gray-500">Or Sign in</h4>
        <a class="uppercase font-medium text-base" href="#">Sign In</a>
    </div>
</div>
</div>
</template>
<style scoped>
@import '../styles/index.css';
</style>