import React, {useState} from 'react'



function Products() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };


    return (
        <div className="flex flex-col h-auto bg-gray-100 w-full px-20 justify-start items-center overflow-hidden ">
            <div className="flex flex-col my-10 w-full justify-center items-center">
                <p className="text-white font-semibold text-gray-900 text-base md:text-2xl text-center font-sans">Payment Products</p>
                <div className="w-24 h-1 bg-blue-400 rounded"></div>
            </div>

            <div className="flex flex-col md:flex-row w-full items-center justify-evenly my-5 md:my-10">
                <div className="flex flex-col mb-5 md:mb-0 drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                    <img src="/quick-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                    <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">Quick Pay</p>
                    <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                        Users present their GoFree Payment code to the merchant. Merchants scan the code to take the payment
                    </p>
                </div>
                <div className="flex flex-col mb-5 md:mb-0 drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                    <img src="/qrcode-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                    <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">QR Code Payment</p>
                    <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                        Users present their GoFree Payment code to the merchant. Merchants scan the code to take the payment
                    </p>
                </div>
                <div className="flex flex-col drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                    <img src="/program-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                    <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">Program Payment</p>
                    <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                        Users present their GoFree Payment code to the merchant. Merchants scan the code to take the payment
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full items-center justify-evenly mb-10 md:my-10">
                <div className="flex flex-col mb-5 md:mb-0 drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                    <img src="/official-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                    <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">Business Accounts</p>
                    <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                        Users can pay for goods and services inside the business official account.
                    </p>
                </div>
                <div className="flex flex-col mb-5 md:mb-0 drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                    <img src="/app-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                    <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">In-App Payments</p>
                    <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                        Users make purchases in merchant apps using GoFree Pay.
                    </p>
                </div>
                <div className="flex flex-col mb-5 md:mb-0 drop-shadow justify-evenly items-center h-96 w-72 bg-white ">
                    <img src="/web-pay.png" alt="Youtube PlayButton" className="h-40 w-52 object-contain"/>
                    <p className="text-white font-semibold text-gray-900 text-lg text-center font-sans">Quick Pay</p>
                    <p className="text-white px-5 mb-5 text-gray-700 text-sm text-center font-sans">
                        Users use GoFree's "Scan" feature to scan a payment code on a web page to make payment.
                    </p>
                </div>
            </div>



        </div>
    )
}

export default Products;