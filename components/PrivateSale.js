import Link from "next/link";
import {StyleSheet, TextInput} from "react-native";
import {useRouter} from "next/router";
import axios from 'axios';
import {toast} from "react-nextjs-toast";
import ButtonYellow from "./ButtonYellow";
import React, {useState} from "react";



function PrivateSale() {

    const router = useRouter();
    const [res1, setRes1] = useState('');
    const [res2, setRes2] = useState('');
    const [res3, setRes3] = useState('');
    const [res4, setRes4] = useState('');
    const [res5, setRes5] = useState('');
    const [res6, setRes6] = useState('');
    const [res7, setRes7] = useState('');

    const onPress = () => {

        try {
            const waitlist = axios.post('https://api.myjobdesk.com/api/apeirox_waitlist', {
                res1: res1,
                res2: res2,
                res3: res3,
                res4: res4,
                res5: res5,
                res6: res6,
                res7: res7,
            })
                .then(function (response) {
                    console.log(response.data);
                    //return {};
                    toast.notify(`Thanks, You've successfully submitted your details!`)
                })
                .catch(function (error) {
                    //return {}
                    toast.notify(`Error in submitting your details!`)
                });
        }catch(e) {
            console.log(e)
        }
    };


    return (
        <div className=" w-4/5 ">
            <div className="my-3 ">
                <p className="mb-1 ">1. How could you add value to the Aperiox platform launch?</p>
                <div className="w-4/5 bg-white mr-3 rounded mb-3 md:mb-0" >
                    <TextInput placeholder={'Type your answer here...'} style={styles.textInput} value={res1} onChangeText={setRes1}/>
                </div>
            </div>

            <div className="my-3 ">
                <p className="mb-1 ">2. Who's the biggest influencer you could directly introduce us to...?</p>
                <div className="w-4/5 bg-white mr-3 rounded mb-3 md:mb-0" >
                    <TextInput placeholder={'Type your answer here...'} style={styles.textInput} value={res2} onChangeText={setRes2}/>
                </div>
            </div>

            <div className="my-3 ">
                <p className="mb-1 ">3. How much would you like to invest on apeirox's private sale? (Amount in $USD) </p>
                <div className="w-4/5 bg-white mr-3 rounded mb-3 md:mb-0" >
                    <TextInput placeholder={'Type your answer here...'} style={styles.textInput} value={res3} onChangeText={setRes3}/>
                </div>
            </div>

            <div className="my-3 ">
                <p className="mb-1 ">4. Your name and/or company name?</p>
                <div className="w-4/5 bg-white mr-3 rounded mb-3 md:mb-0" >
                    <TextInput placeholder={'Type your answer here...'} style={styles.textInput} value={res4} onChangeText={setRes4}/>
                </div>
            </div>

            <div className="my-3 ">
                <p className="mb-1 ">5. Telegram username?</p>
                <div className="w-4/5 bg-white mr-3 rounded mb-3 md:mb-0" >
                    <TextInput placeholder={'Type your answer here...'} style={styles.textInput} value={res5} onChangeText={setRes5}/>
                </div>
            </div>

            <div className="my-3 ">
                <p className="mb-1 ">6. Your email address?</p>
                <div className="w-4/5 bg-white mr-3 rounded mb-3 md:mb-0" >
                    <TextInput placeholder={'Type your answer here...'} style={styles.textInput} value={res6} onChangeText={setRes6}/>
                </div>
            </div>

            <div className="my-3 mb-6">
                <p className="mb-1 ">7. Additional notes, comments...</p>
                <div className="w-4/5 bg-white mr-3 rounded mb-3 md:mb-0" >
                    <TextInput placeholder={'Type your answer here...'} style={styles.textInput} value={res7} onChangeText={setRes7}/>
                </div>
            </div>

            <ButtonYellow title="Submit" onClick={onPress}/>

            <div className=" mb-16">

            </div>
        </div>

    )
}

export default PrivateSale;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    textInput: {
        width: '100%',
        height: 40,
        color: 'black',
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: 'normal',
        //marginBottom: 5,
    },
});