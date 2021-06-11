// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Footer from "../components/Footer";




function Privacy() {

    return (
        <div className="flex flex-col ">
            <Head>
                <title>ApeiroX</title>
                <meta name="ApeiroX - privacy" content="Connecting Trades" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Header />

            <NavBar
                classIconHome="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleHome="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconAirdrop="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleAirdrop="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconBounty="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleBounty="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconWhitepaper="text-yellow-500 h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleWhitepaper="text-yellow-500 opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconExchange="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleExchange="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconForum="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleForum="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconRoadmap="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleRoadmap="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconProduct="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleProduct="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconPartners="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitlePartners="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconTokenomics="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleTokenomics="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconAbout="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleAbout="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"

            />

            <div className="flex flex-col h-auto w-5/6 mt-20">

                <div className="ml-10 ">
                    <div className=" ">
                        <p className="font-extrabold text-3xl md:text-5xl">ApeiroX</p>
                        <p className="font-semibold mt-3 text-sm md:text-base text-gray-300">Privacy Policy</p>
                    </div>


                    <div className="my-10">
                        <p className="font-semibold mt-10 text-normal text-white">1. Information About ApeiroX</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            ApeiroX is a trust-less, flexibly safe, and robust e-commerce platform that brings blockchain benefits to commerce and link local suppliers to both local and foreign markets, with the aim of reducing financial disparities and improving product accessibility. Our suite of products includes e-Commerce, DEX swaps, P2P and e-Wallets.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">Definitions</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            a) “ApeiroX”, “we”, “us”, or “our” means ApeiroX. Or any of its affiliates or subsidiaries;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            b) “ApeiroX Content” means any text, sound, graphics, trade-marks, service marks, logos, taglines, trade names and other material owned by us or our licensors and made available through the Services;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            c) “Parties” means you and us;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            d) “Personal Information” has the meaning set out in the Privacy Statement;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            e) “Privacy Statement” means the privacy policy;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            f) “Representatives” means us and our affiliates, business partners, licensors, agents, content providers (not including you), service providers, employees, personnel, officers, directors, and representatives;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            g) “Services” means the website, any of our associated websites or mobile applications (collectively the “ApeiroX Site”) and the services available through the AperioX Site or any of our platforms;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            h) “Submissions” means any unsolicited idea, suggestion or other material in any format;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            i) “Terms” means these ApeiroX Terms and Conditions of Use (including, for greater certainty, the Privacy Statement and the Anti-Money Laundering Policy);
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            j) “you” or ”your” means (i) the individual, if the individual is licensing the Services for his or her personal use; or (ii) the corporation, institution, partnership, organization or other entity on whose behalf the individual accepting these Terms is acting;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            k) “Your account” means the user account, you must register for, in order to use certain Services; and
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            l) “Your content” means any text, sound, graphics, or other material which you post, upload, or otherwise share on or through the Services.
                        </p>


                        <p className="font-semibold mt-10 text-normal text-white">3. Privacy Policy</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Privacy is of utmost importance at APEIROX. We recognise the significance of protecting information which is stored on our servers, network or platform; or is intended to be stored on our servers or network and which relates to an individual. The data we protect are the “Personal Data” which is any information relating to an identified or identifiable natural person, sometimes called a data subject, and have made protecting the privacy and the confidentiality of Personal Data a fundamental component of the way we do business. This Privacy Policy informs you of the ways we work to ensure privacy and the confidentiality of Personal Data and describes the information we gather, how we use those Personal Data and the circumstances under which we disclose such information to third-parties.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            This Privacy Policy is designed to address regulatory requirements of the jurisdictions in which APEIROX offers its Services, including the Nigeria Data Protection Regulation (“NDPR”), as enacted by the Nigerian government and other relevant Data Protection Regulations across the jurisdictions in which the services extend . In this Privacy Policy, the term “Service” and “Services” has the same meaning as described in the User Agreement, but excludes API services, which are governed by a separate agreement. If you do not agree with this Privacy Policy, in general, or any part of it, you should not use the Services. This Privacy Policy is periodically reviewed to ensure that any new obligations and changes to our business model are taken into consideration. We may amend this Privacy Policy at any time by posting an amended version on our website or any of our digital platforms.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">4. Collection of Personal Data</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            When you access or use the Services, we collect the following information:
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Information you may provide to us: You may give us information about you by filling in forms on our website or through our app or by corresponding with us by phone, email or otherwise. This includes information you provide when you register to use the Services and when you report a problem with the website or with our app.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Information we collect about you: With regard to each of your visits to our website or our app we automatically collect the following information:
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Login Information: We log technical information about your use of the Services, including the type of browser and version you use, the wallet identifier, the last access time of your wallet, the Internet Protocol (IP) address used to create the wallet and the most recent IP address used to access the wallet.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Device Information: We collect information about the device you use to access your account, including the hardware model, operating system and version, and unique device identifiers, but this information is anonymised and not tied to any particular person.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Wallet Information: If you create an ApeiroX Wallet through our Services, you will generate a public and private key pair. When you log-out of the Wallet, we collect an encrypted file that, if unencrypted, would contain these keys, along with your transaction history. When you enable notifications through your Account Settings, we will collect the unencrypted public key in order to provide such notifications. Under no circumstances do we collect an unencrypted private key from you, nor can we decrypt any Wallet file data.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Transaction Information: In connection with our Conversion Service, as such term is defined in our User Agreement, we may collect and maintain information relating to transactions you effect in your Wallet that convert one virtual currency to another (e.g. Bitcoin for Ether).
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Information We Collect Required By Law, Rule, or Regulation: Depending on the Service, we may collect information from you in order to meet regulatory obligations around know-your-customer (“KYC”) and anti-money laundering (“AML”) requirements. Information that we collect from you includes the following:
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Full name
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Residential address
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Contact details (telephone number, email address)
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Date and place of birth, gender, place of citizenship
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Bank account information and/or credit card details
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Your status as a politically exposed person
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Source of funds & proof of address
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Passport and/or national driver’s license or government-issued identification card to verify your identity
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Transaction history and account balances in connection with your use of certain Services.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Information We Collect from Other Sources: We also receive information from other sources and combine that with the information we collect through our Services. For instance:
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	We use third-party services that may be co-branded as ApeiroX but will do so with clear notice. Any third-party services may collect information as determined by their own privacy policies.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	We also use "cookies" from time to time to help personalise your online experience with us. A cookie is a small text file that is stored on your computer to help us make your visit to our site more “user-friendly.” Cookies provide us with information about your use of the site that can help us improve the site and your experience with it. We will process Personal Data collected through cookies in accordance with this Privacy Policy. If you have set your browser to alert you before accepting cookies, you should receive an alert message with each cookie. You may refuse cookies by turning them off in your browser, however, you should be aware that our site, like most other popular sites, may not work well with cookies disabled.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Banks or payment processors that you use to transfer fiat currency may provide us with basic Personal Data, such as your name and address, as well as, your bank account information.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Advertising or analytics providers may provide us with anonymised information about you, including but not limited to, how you found our website.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">5. Use of Personal Data</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            We will use your Personal Data, to:
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Understand and strive to meet your needs and preferences in using our Services;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Develop new and enhance existing service and product offerings;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Manage and develop our business and operations;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Carry out any actions for which we have received your consent;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Prevent and investigate fraudulent or other criminal activity;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	To address service requests and resolve user questions; and
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Meet legal and regulatory requirements.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            We also reserve the right to use aggregated Personal Data to understand how our users use our Services, provided that those data cannot identify any individual.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            We also use third-party web analytics tools that help us understand how users engage with our website. These third-parties may use first-party cookies to track user interactions to collect information about how users use our website. This information is used to compile reports and to help us improve our website. The reports disclose website trends without identifying individual visitors. You can opt-out of such third-party analytic tools without affecting how you visit our site.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            We will process your Personal Data legally and fairly and not use it outside the purposes of which we have informed you, including selling it individually or in the aggregate for commercial use.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">6. Disclosure of Personal Data</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            We may share your information with selected recipients to perform functions required to provide certain Services to you and/or in connection with our efforts to prevent and investigate fraudulent or other criminal activity. All such third parties will be contractually bound to protect data in compliance with our Privacy Policy. The categories of recipients include:
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Companies within the ApeiroX corporate family located in the Nigeria, Africa, and any other specified part of the world in future in order to provide the Services to you.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Cloud service providers to store certain personal data and for disaster recovery services, as well as, for the performance of any contract we enter into with you.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Fraud detection service providers who will run certain fraud detection checks against Personal Data provided.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Spam and abuse detection providers making software available designed to prevent users from programatically using the Services in unsupported ways.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            We also may share Personal Data with a buyer or other successor in the event of a merger, divestiture, restructuring, reorganisation, dissolution or other sale or transfer of some or all of ApeiroX’s assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which Personal Data held by ApeiroX is among the assets transferred.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Except where we are required by law to disclose Personal Data, or are exempted from, released from or not subject to any legal requirement concerning the disclosure of Personal Data, we will require any person to whom we provide your Personal Data to agree to comply with our Privacy Policy in force at that time or requirements substantially similar to such policy. We will make reasonable commercial efforts to ensure that they comply with such policy or requirements, however, where not expressly prohibited by law, we will have no liability to you, if any person fails to do so.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            We shall require any third-party, including without limitation, any government or enforcement entity, seeking access to the data we hold to a court order, or equivalent proof that they are statutorily authorised to access your data and that their request is valid and within their statutory or regulatory power.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Funding and transaction information related to your use of certain Services may be recorded on a public block chain. Public block chains are distributed ledgers, intended to immutably record transactions across wide networks of computer systems. Many block chains are open to forensic analysis which can lead to deanonymisation and the unintentional revelation of private financial information, especially when block chain data is combined with other data.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Because block chains are decentralised or third-party networks that are not controlled or operated by ApeiroX or its affiliates, we are not able to erase, modify, or alter Personal Data from such networks.
                        </p>


                        <p className="font-semibold mt-10 text-normal text-white">7. Security of Your Personal Data</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            We protect Personal Data with appropriate physical, technological and organisational safeguards and security measures. Your Personal Data comes to us via the internet which chooses its own routes and means, whereby information is conveyed from location to location. We audit our procedures and security measures regularly to ensure they are being properly administered and remain effective and appropriate. Every member of ApeiroX is committed to our privacy policies and procedures to safeguard Personal Data. Our site has security measures in place to protect against the loss, misuse and unauthorised alteration of the information under our control. Our server uses a unique security protection by encrypting your Personal Data to prevent individuals from accessing such Personal Data as it travels over the internet.
                        </p>


                        <p className="font-semibold mt-10 text-normal text-white">8. Retention of Your Personal Data</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            The length of time we retain Personal Data outside our back-up system varies depending on the purpose for which it was collected and used, as follows:
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Data you provide to us when subscribing for our Services: while user remains active, our cloud.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Country location data: while user remains active, stored in our cloud.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Data on your preferences: while user remains active, stored in our cloud.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	IP address login: until subsequent login from a new IP, stored in our cloud.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            When Personal Data is no longer necessary for the purpose for which it was collected, we will remove any details that identifies you or we will securely destroy the records, where permissible. However, we may need to maintain records for a significant period of time (after you cease using a particular Service) as mandated by regulation. For example, we are subject to certain anti-money laundering laws that require us to retain the following, for a period of five (5) years after our business relationship with you has ended.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	A copy of the records we used in order to comply with our client due diligence obligations;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Supporting evidence and records of transactions with you and your relationship with us.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Except where prohibited by law, this period may extend beyond the end of the particular relationship with us, but only for as long as we are bound to do so for the audit, regulatory or other accounting purposes. When Personal Data is no longer needed, we have procedures either to destroy, delete, erase or convert it to an anonymous form. If you have opted-out of receiving marketing communications, we will hold your details on our suppression list so that we know you do not want to receive these communications.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            After you have terminated the use of our Services, we reserve the right to maintain your Personal Data as part of our standard back-up procedures in an aggregated format.
                        </p>


                        <p className="font-semibold mt-10 text-normal text-white">9. Your Rights</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            The rights that are available to you in relation to the Personal Data we hold about you are outlined below.
                        </p>
                        <p className="font-semibold mt-10 text-normal text-white">Information Access</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            If you ask us, we will confirm whether we are processing your Personal Data and, if so, what information we process and, if requested, provide you with a copy of that information within 30 days from the date of your request.
                        </p>
                        <p className="font-semibold mt-10 text-normal text-white">Rectification</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            It is important to us that your Personal Data is up-to-date. We will take all reasonable steps to make sure that your Personal Data remains accurate, complete and up-to-date. If the Personal Data we hold about you is inaccurate or incomplete, you are entitled to have it rectified. If we have disclosed your Personal Data to others, we will let them know about the rectification where possible. If you ask us, if possible and lawful to do so, we will also inform you with whom we have shared your Personal Data so that you can contact them directly.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            You may inform us at any time that your personal details have changed by emailing us or contacting us and we will change your Personal Data in accordance with your instructions. To proceed with such requests, in some cases we may need supporting documents from you as proof that we are required to keep for regulatory or other legal purposes.
                        </p>
                        <p className="font-semibold mt-10 text-normal text-white">Erasure</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            You can ask us to delete or remove your Personal Data in certain circumstances such as if we no longer need it, provided that we have no legal or regulatory obligation to retain that data. Such requests will be subject to any agreements that you have entered into with us, and to any retention limits, we are required to comply with in accordance with applicable laws and regulations. If we have disclosed your Personal Data to others, we will let them know about the erasure request where possible. If you ask us, if possible and lawful to do so, we will also inform you with whom we have shared your Personal Data so that you can contact them directly.
                        </p>
                        <p className="font-semibold mt-10 text-normal text-white">Processing restrictions</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            You can ask us to block or suppress the processing of your Personal Data in certain circumstances, such as, if you contest the accuracy of that Personal Data or object to us processing it. It will not stop us from storing your Personal Data. We will inform you before we decide not to agree with any requested restriction. If we have disclosed your Personal Data to others, we will let them know about the restriction of processing where possible. If you ask us, if possible and lawful to do so, we will also inform you with whom we have shared your Personal Data so that you can contact them directly.
                        </p>
                        <p className="font-semibold mt-10 text-normal text-white">Data portability</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            In certain circumstances, you might have the right to obtain Personal Data you have provided us with (in a structured, commonly used and machine-readable format) and to re-use it elsewhere or ask us to transfer this to a third party of your choice.
                        </p>
                        <p className="font-semibold mt-10 text-normal text-white">Objection</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            You can ask us to stop processing your Personal Data, and we will do so if we are:
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Relying on our own or someone else’s legitimate interests to process your Personal Data, except if we can demonstrate compelling legal grounds for the processing;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Processing your Personal Data for direct marketing; or
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            •	Processing your Personal Data for research, unless we reasonably believe such processing is necessary or prudent for the performance of a task carried out in the public interest (such as by a regulatory or enforcement agency).
                        </p>
                        <p className="font-semibold mt-10 text-normal text-white">Automated decision-making and profiling</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            If we make a decision about you based solely on an automated process (e.g. through automatic profiling) that affects your ability to access our Services or has another significant effect on you, you can request not to be subject to such a decision unless we can demonstrate to you that such a decision is necessary for entering into, or the performance of, a contract between us. Even if a decision is necessary for entering into or performing a contract, you may contest the decision and require human intervention. We may not be able to offer our Services if we agree to such a request by terminating our relationship with you. You can exercise any of these rights by contacting us.
                        </p>


                        <p className="font-semibold mt-10 text-normal text-white">10. Acceptance</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            By using the Services, you signify your agreement to this Privacy Policy. ApeiroX reserves the right to change or amend this Privacy Policy at any time. If we make any material changes to this Privacy Policy, the revised Policy will be posted here and we will notify our users at least 30 days prior to the changes taking effect so that you are always aware of what information we collect, how we use it and under what circumstances we disclose it. Please check this page frequently to see any updates or changes to this Privacy Policy.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">11. Questions and Complaints</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Any questions about this Privacy Policy, the collection, use and disclosure of Personal Data by ApeiroX or access to your Personal Data as required by law (to be disclosed should be directed to……).
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            In the event that you wish to make a complaint about how we process your Personal Data, please contact us in the first instance at In the event that you wish to make a complaint about how we process your personal data, please contact us in the first instance at privacy@....com and we will attempt to handle your request as soon as possible. This is without prejudice to your right to launch a claim with the data protection supervisory authority in the country in which you live or work where you think we have violated data protection laws.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">12. Changes to This Privacy Policy</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the “effective date” at the top of this Privacy Policy.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                        </p>

                    </div>

                </div>

            </div>

            <Footer className=" "/>


        </div>
    );
}

export default Privacy;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 16,
    },
    textTitleContainer: {
        width: 500,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 100,
    },
    textTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'whitesmoke',
        lineHeight: 50,
    },
    textSubtitle: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 22,
        color: '#969494',
        paddingTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 40,
    },
    emailContainer: {
        backgroundColor: 'white',
        width: 300,
        height: 40,
        borderRadius: 5,
        alignItems: "baseline",
    },
    textInput: {
        width: '100%',
        height: '100%',
        color: 'black',
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: 'normal',
    },
    downloadContainer: {
        flexDirection: 'row',
       marginTop: 40,
        width: 600,
    },
});
