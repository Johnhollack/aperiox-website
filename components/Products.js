import React, {useState} from 'react'
import { View } from 'react-native';



function Products() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };


    return (
        <View style={{}}>
            <div className="flex flex-col h-auto w-full px-20 justify-start items-center overflow-hidden py-10 md:py-20 bg-white">
                <div className="flex flex-col w-full justify-center items-center">
                    <p className="text-black font-semibold text-2xl md:text-3xl text-center font-sans ">Payment products</p>
                    <div className="w-24 bg-blue-500 h-1 rounded-full mt-1 mb-5"></div>
                </div>

                <div className="flex flex-col md:flex-row lg:flex-col justify-evenly w-full">
                    <div className="flex flex-col lg:flex-row w-full items-center justify-evenly my-5 md:my-10">
                        <div className="shadow-md flex flex-col mb-5 lg:mb-0 drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                            <img src="/quick-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                            <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">Quick Pay</p>
                            <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                                Users present their GoFree Payment code to the merchant. Merchants scan the code to take the payment
                            </p>
                        </div>
                        <div className="shadow-md flex flex-col mb-5 lg:mb-0 drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                            <img src="/qrcode-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                            <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">QR Code Payment</p>
                            <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                                Users open GoFree to scan the code, confirm the amount, and make the payment after passing the security checks.
                            </p>
                        </div>
                        <div className="shadow-md flex flex-col mb-5 lg:mb-0 drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                            <img src="/program-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                            <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">Program Payment</p>
                            <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                                Users pay for goods or services in Mini Programs created inside GoFree.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full items-center justify-evenly mb-10 md:my-10">
                        <div className="shadow-md flex flex-col mb-5 lg:mb-0 drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                            <img src="/official-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                            <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">Business Accounts</p>
                            <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                                Users can pay for goods and services inside the business official account.
                            </p>
                        </div>
                        <div className="shadow-md flex flex-col mb-5 lg:mb-0 drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                            <img src="/app-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                            <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">In-App Payments</p>
                            <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                                Users make purchases in merchant apps using GoFree Pay.
                            </p>
                        </div>
                        <div className="shadow-md flex flex-col mb-5 lg:mb-0 drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                            <img src="/web-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                            <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">Quick Pay</p>
                            <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                                Users use GoFree's "Scan" feature to scan a payment code on a web page to make payment.
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </View>

    )
}

export default Products;