import React, {useState} from 'react'
import TopBar from "./TopBar";
import Welcome from "./Welcome";
import ButtonDark from "./ButtonDark";
import {faApple, faGooglePlay} from "@fortawesome/free-brands-svg-icons";



function BodyZero() {

    const [email, setEmail] = useState('');

    const onPress = () => {
        console.log(email);

        try {
            const waitlist = axios.post('https://www.finanzi.in/api/waitlist', {
                    email: email
                })
                .then(function (response) {
                    console.log(response.data);
                    //return {};
                    //toast.notify(`Thanks, You've successfully joined our waitlist!`)
                })
                .catch(function (error) {
                    //return {}
                    //toast.notify(`Error in sending your email!`)
                });
        }catch(e) {
            console.log(e)
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-5/6 w-screen">
            <div className="flex flex-col h-1/2 md:h-full w-full md:w-3/5 justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <div className="">
                        <img src="/logo.svg" alt="GoFree Logo" className="h-10 w-10"/>
                    </div>
                    <div className="px-10 py-10">
                        <p className="text-white font-base text-lg md:text-3xl text-center font-sans">Connecting a billion Africans with </p>
                        <p className="text-white font-base text-lg md:text-3xl text-center font-sans">calls, chats, banking and more</p>
                    </div>

                    <div className="lg:mt-10 md:w-96 w-auto px-5 md:px-0">
                        <form onSubmit={onPress} className="flex flex-row justify-center items-center w-full ">
                            <input 
                                id="email"
                                type="email" 
                                name="email" 
                                className="px-3 text-xs text-gray-500 h-10 w-full sm:text-sm border border-transparent shadow-sm rounded-md bg-white" 
                                placeholder="Enter your email" 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="ml-3 w-56 h-10 justify-center py-2 px-2 border border-transparent shadow-sm text-xs font-bold rounded-md text-white bg-transparent border-lg border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-900"
                                >
                                GET EARLY ACCCES
                            </button>
                        </form>
                    </div>

                </div>
                <div className="mt-5 md:mt-10 flex justify-center">
                    <ButtonDark subtitle="COMING SOON" title="Google PlayStore" icon={faGooglePlay} />
                    <ButtonDark subtitle="COMING SOON" title="App Store" icon={faApple} />
                </div>
            </div>

            <div className="flex h-1/2 md:h-auto w-full md:w-2/5 justify-center items-center ">
                <img src="/phone.png" alt="Phone Demo" className=" h-full w-4/6 object-contain"/>
            </div>
        </div>
    )
}

export default BodyZero;