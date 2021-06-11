// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Footer from "../components/Footer";




function Terms() {

    return (
        <div className="flex flex-col ">
            <Head>
                <title>ApeiroX</title>
                <meta name="ApeiroX - terms" content="Connecting Trades" />
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
                        <p className="font-semibold mt-3 text-sm md:text-base text-gray-300">Terms</p>
                    </div>


                    <div className="my-10">
                        <p className="font-semibold mt-3 text-sm text-red-400  text-justify">
                            This is a legally binding contract between you and ApeiroX. Please make sure you read it.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">1. Definitions</p>

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
                            e) “Representatives” means us and our affiliates, business partners, licensors, agents, content providers (not including you), service providers, employees, personnel, officers, directors, and representatives;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            f) “Services” means the website, any of our associated websites or mobile applications (collectively the “ApeiroX Site”) and the services available through the AperioX Site or any of our platforms;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            g) “Submissions” means any unsolicited idea, suggestion or other material in any format;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            h) “Terms” means these ApeiroX Terms and Conditions of Use (including, for greater certainty, the Privacy Statement and the Anti-Money Laundering Policy);
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            i) “you” or ”your” means (i) the individual, if the individual is licensing the Services for his or her personal use; or (ii) the corporation, institution, partnership, organization or other entity on whose behalf the individual accepting these Terms is acting;
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            j) “Your account” means the user account, you must register for, in order to use certain Services; and
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            k) “Your content” means any text, sound, graphics, or other material which you post, upload, or otherwise share on or through the Services.
                        </p>


                        <p className="font-semibold mt-10 text-normal text-white">2. Accepting these Terms </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Please read these Terms before using the Services. If you do not agree to these Terms, you may not use the Services. When you use the Services, you represent and warrant that you have the legal capacity to form a binding contract with us, and are doing so by your agreement to these Terms. You agree to have these Terms and any related information made available to you, and to otherwise have communications between you and us, occur electronically. These Terms were last updated and are effective as of the dated first noted above. From time to time, and at our sole and absolute discretion, we may require you to agree to an amended version of these Terms by providing notice to you at least thirty (30) days in advance of effecting such amendment. If you do not agree with the amended version, you can choose to discontinue using the Services, and close your account before such amended version becomes effective. In order to use the Services, and prior to us opening your account, you must first provide the required identification information, to our satisfaction, pursuant to the Money Laundering (Prohibition) Act 2011 compliance policy (“Anti-Money Laundering Policy”).
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">3. Permitted Users, Licenses and Compliance with Laws</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            To use the Services, you must be at least 18 years of age or older and the age of majority in the jurisdiction in which you reside as of the time you use the Services. The Services are intended for use from locations where such Services are legal. Any use by you of the Services from a location where the services are illegal is expressly prohibited. Subject to these Terms, you are granted a non-exclusive, non-transferable, non-sub-licensable, revocable, limited right and license to use the Services, including the content therein and the services accessible through them solely for the purposes set out by the Services. You are also granted a limited, nonexclusive right to create a hyperlink to the Services, other than to those portions of the Services where registration is required. Other than as set out in this paragraph, nothing in these Terms gives you any licence, right, title, or ownership of, in, or to the ApeiroX Site or the Services. You agree to accept all applicable laws in connection with your use of the Services, including those related to intellectual property rights, data privacy, international communications and the transmission of technical or personal data. The Services may be used only for lawful purposes and in a lawful manner. All rights not expressly granted to you are reserved by ApeiroX and, if applicable, its licensors. Use of the Services may require internet and data access for which you shall be responsible and subject to your internet access provider terms and conditions of use. In no event shall ApeiroX be liable for any internet or data access fees or other charges incurred by you in connection with your use of the Services. Any such fees and charges shall be your sole responsibility. The Services may be subject to limitations, delays and other problems inherent in the use of the internet and electronic communications. We are not responsible for any delays, delivery failures, or other damage resulting from such problems.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">4. Copyright and Intellectual Property </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            You retain ownership of all your content that you post, upload to, or otherwise share on the Services. However, by posting, uploading, or sharing your content, you grant us a non-exclusive, sub-licensable, royalty-free, worldwide, and perpetual license to use, copy, reproduce, create derivative works from, and display your content in connection with the Services. All our Content, the selection, compilation, arrangement and presentation of all materials, and the overall design of the Services are copyrighted by us or our licensors, and are protected by Nigerian and international intellectual property laws. Use of our Content without our express prior written permission is strictly prohibited. “ApeiroX”, “https//apeirox.com”, the ApeiroX logo, and any other trade-marks used on the Services are trade-marks or registered trade-marks of ApeiroX or its licensors, in Nigeria and other countries. Our trade-marks may not be used in connection with any product or service without our express written permission. Subject to any applicable law (and, in the case of Personal Information, the requirements of Section 3), any communications that you send or which are sent to you via the Services, whether solicited by us or otherwise, are on a non-confidential basis, and we are free to use and disclose the content of any such communication, including any ideas, inventions, concepts or know-how disclosed therein, for any purpose including developing, manufacturing and/or marketing goods and services. You agree to not assert any ownership right of any kind in such communications (including copyright, trade-mark, patent, unfair competition, moral rights, or implied contract). If you send Submissions to us or the Services, you automatically grant to us and our successors and assigns a perpetual, royalty-free, irrevocable, unrestricted, non-exclusive, world-wide, right and license to use, copy, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, display and otherwise exploit the Submissions or any ideas, concepts, know-how or techniques associated with the Submissions for any purpose whatsoever, commercial or otherwise, using any form, media or technology now known or later developed, without providing compensation to you or anyone else, without any liability whatsoever, and free from any obligation of confidence or other duties on the part of us or our successors or assigns. You waive all author’s moral rights in your content and Submissions (including the right to be associated with your content or Submission) upon submission, as well as the right to receive any financial or other consideration in connection with your content and Submissions.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">5. Use Restrictions and Prohibited Conduct </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            When using the Services, you agree not to do any of the following: a) Threaten other users with violence; b) Use hateful, abusive, harassing, libellous, or obscene language towards other users; c) Post any material that infringes or violates any third party’s copyright, trade-mark, trade secret, privacy, or other proprietary or property right; d) Copy any ApeiroX Content onto your own or any other website; e) Post any material which promotes illegal activity, could constitute a criminal offense, give rise to civil liability, or otherwise violate any applicable law or regulation or these Terms; f) Purchase or sell any cryptocurrency with knowledge of any material, non-public information relating to such cryptocurrency; g) Use the Services to send spam, chain letters, junk mail, or any other type of unsolicited mass e-mail; h) Use the Services to distribute viruses or other harmful, disruptive, or destructive files; i) Use the Services in violation of ApeiroX's or any third party's intellectual property or other proprietary or legal rights; j) Use or attempt to use another person’s account; k) Disrupt or interfere with the security of, or otherwise abuse, the Services, or any servers or networks connected to the Services; l) Attempt to obtain unauthorized access to the Services; m) Impersonate another person; n) Share with any minor any content or materials inappropriate for children, or allow any minor access to such materials; o) Use any automated means to purchase or sell cryptocurrencies or otherwise use the Services or trade in high volume of cryptocurrencies, and we reserve the right to determine, at our sole discretion whether you are using automated means to use the Services or are trading in high volume; p) Systematically harvest or extract data from the Services or programmatically register accounts on the Services, including through the use of any robot, spider, crawler, or any other automated means; q) Access the Services for purposes of monitoring their availability, performance or functionality, or for any other benchmarking or competitive purposes; r) Modify or make derivative works based upon the Services , or any portion thereof; s) “Frame” or “mirror” any ApeiroX Content on any other server or wireless or Internet based device; t) Reverse engineer or access the Services in order to (a) build a competitive product or service, (b) build a product using similar ideas, features, functions or graphics from the Services, or (c) copy any ideas, features, functions or graphics from the Services; u) Copy, decompile, reverse engineer, disassemble, attempt to derive the source code of, modify, or create derivative works of Services or any part thereof (except as and only to the extent any foregoing restriction is prohibited by applicable law). v) Use the Services to take advantage of any technical glitch, malfunction, failure, delay, default or security breach.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">5. Use Restrictions and Prohibited Conduct </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            When using the Services, you agree not to do any of the following: a) Threaten other users with violence; b) Use hateful, abusive, harassing, libellous, or obscene language towards other users; c) Post any material that infringes or violates any third party’s copyright, trade-mark, trade secret, privacy, or other proprietary or property right; d) Copy any ApeiroX Content onto your own or any other website; e) Post any material which promotes illegal activity, could constitute a criminal offense, give rise to civil liability, or otherwise violate any applicable law or regulation or these Terms; f) Purchase or sell any cryptocurrency with knowledge of any material, non-public information relating to such cryptocurrency; g) Use the Services to send spam, chain letters, junk mail, or any other type of unsolicited mass e-mail; h) Use the Services to distribute viruses or other harmful, disruptive, or destructive files; i) Use the Services in violation of ApeiroX's or any third party's intellectual property or other proprietary or legal rights; j) Use or attempt to use another person’s account; k) Disrupt or interfere with the security of, or otherwise abuse, the Services, or any servers or networks connected to the Services; l) Attempt to obtain unauthorized access to the Services; m) Impersonate another person; n) Share with any minor any content or materials inappropriate for children, or allow any minor access to such materials; o) Use any automated means to purchase or sell cryptocurrencies or otherwise use the Services or trade in high volume of cryptocurrencies, and we reserve the right to determine, at our sole discretion whether you are using automated means to use the Services or are trading in high volume; p) Systematically harvest or extract data from the Services or programmatically register accounts on the Services, including through the use of any robot, spider, crawler, or any other automated means; q) Access the Services for purposes of monitoring their availability, performance or functionality, or for any other benchmarking or competitive purposes; r) Modify or make derivative works based upon the Services , or any portion thereof; s) “Frame” or “mirror” any ApeiroX Content on any other server or wireless or Internet based device; t) Reverse engineer or access the Services in order to (a) build a competitive product or service, (b) build a product using similar ideas, features, functions or graphics from the Services, or (c) copy any ideas, features, functions or graphics from the Services; u) Copy, decompile, reverse engineer, disassemble, attempt to derive the source code of, modify, or create derivative works of Services or any part thereof (except as and only to the extent any foregoing restriction is prohibited by applicable law). v) Use the Services to take advantage of any technical glitch, malfunction, failure, delay, default or security breach.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">6. Your Account</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Certain services provided through the Services may only be available to you upon registration for your account. By registering, you represent and warrant to ApeiroX that: (a) you are at least 18 years of age or older and the age of majority for using the Services in the jurisdiction where you reside as of the time you register with us; (b) all information provided by you to us during the registration process is truthful, accurate and complete; (c) you have an understanding of cryptocurrencies and the technology that underlies them; (d) you can afford to lose all amounts used to purchase cryptocurrencies through the Services; and (e) you will comply with all terms and conditions of these Terms. As a registered user, you agree to maintain and promptly update your registration data as necessary to keep it true, accurate, current and complete. The Representatives will rely on the information you provide. You will be responsible for any and all loss, damage, or additional costs that the Representatives or others may incur as a result of your submission of any false, incorrect or incomplete information or your failure to update your registration or other information that you submit via the Services. You acknowledge that you are solely responsible for maintaining the confidentiality of your account credentials (including any user names, passwords or security tokens created or provided) and that you will be responsible for any loss resulting from any unauthorized use of your account. You agree to immediately notify us of any unauthorized use of your account. Similarly, you are responsible for verifying and maintaining the protection, security, and distribution of your account information, including account numbers, user names, and passwords. All liability relating to password management resides with you and under no circumstances, including negligence or misconduct, will we be liable for any damages that result from the use of your account. You can cancel your account at any time by doing so from your account settings page and requesting that your account be deleted. We highly recommend you keep a secure backup of your password and any security credentials we provide to you in a safe and off-line environment. If you have a verified e-mail address you may use our automated account recovery procedure in order to request a password reset link. If you do not have a verified email address or if you have lost any security credentials we provide to you, in order to recover these credentials you must go through our assisted account recovery procedure, which may require a two (2) month waiting period with no logins by you and a service charge. If you want to start the assisted account recovery procedure, you must contact us by email support@apeirox.com with your account username.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">7. Purchaser's Acknowledgements</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            By purchasing via the Services, you agree and acknowledge that: a) the cryptocurrencies available for purchase via the Services are not “securities” within the meaning of the Investments and Securities Act (Nigeria) and accordingly you will not have access to any of the securities laws remedies or protections available to purchasers of securities; b) we are not responsible for any consequences arising from false, incorrect, or incomplete information that you provide to us, including any incorrect cryptocurrency wallet address; c) we do not own or control, and make no representations or warranties with respect to, the underlying technology of the cryptocurrencies you may purchase or sell using the Services, including those technologies that govern their use; the underlying technology of cryptocurrencies may suddenly change such that the new version is no longer compatible with existing versions or there is otherwise a permanent divergence of the blockchain which may impact the value, functionality, and other characteristics such as the name of the cryptocurrency and whether the Services are able to support the cryptocurrencies; d) we are not responsible for any consequences arising from any losses you may suffer. e) you have a sophisticated understanding of technical and business matters relating to cryptocurrencies and blockchain technology to understand these Terms and to appreciate the risks and implications of making purchases via the Services; f) we make no representations or warranties with respect to the cryptocurrencies available for purchase from us and you are solely responsible for researching the cryptocurrencies you purchase and ensuring that your purchases via the Services are made on an informed basis; g) holding crypto-currencies carries various risks, including those relating to the issuer of and the technology underlying the crypto-currencies and the value of your crypto-currencies may decrease to zero; h) the crypto-currencies you purchase via the Services are not protected by any government or other insurance; i) our ability to fill your purchase and sale orders on a timely basis depends in part on the presence of a market for those crypto-currencies; if there is a lack of corresponding purchase or sale orders in a particular crypto-currency it may not be possible to fill your order on a timely basis or at all; j) the Services may be subject to malicious cyber-attacks or may contain exploitable flaws in its security systems, which may result in security breaches and the loss or theft of crypto-currencies; k) issuers of the crypto-currencies available for purchase via the Services may not be subject to ongoing public disclosure requirements and accordingly it may be difficult to find accurate and current information relating thereto; l) crypto-currencies generally do not afford the holder thereof any rights commonly associated with securities ownership, such as voting rights and rights to participate in the equity of the issuer; m) you waive your right to participate in a class action lawsuit or a class-wide arbitration against ApeiroX and/or the Representatives; and n) you have obtained such legal and tax advice as you consider appropriate in connection with the purchase of crypto-currencies via the Services.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">8. Personal Information and Marketing </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            In addition to the collection, use, and disclosure of your Personal Information set out in the Privacy Statement, we may, with your consent, use your Personal Information to market our products and services to you, including by the use of electronic communications such as email, direct messaging, and text messaging, and through the use of telemarketing. You may withdraw your consent to such uses at any time.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">10. Purchases</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Purchases made via the Services are subject to the following terms: a) Orders: All orders confirmed by you are deemed final and are non-reversible by you. ApeiroX provides you with the tools to verify your order before confirming it to help you catch a mistyped orders, including any losses resulting from mistyped or incorrect cryptocurrency wallet addresses. ApeiroX will not be responsible for losses induced by mistyped or otherwise wrongly placed orders. An open order may be cancelled at any time by you but ApeiroX makes no guarantee on whether that order will be cancelled before execution. Notwithstanding the foregoing, in the event we determine, at our sole discretion, that as the result of a technical issue an executed order did not reflect the fair market value for the applicable coin, such order shall be cancelled and you shall be refunded the amount you paid for your order. Executed orders are subject to the then current trading fees collected in the coin settlement amount for that transaction. The current trading fees can be found under the account funding and withdrawal section for each coin available on the Services. b) Transfers: Coin deposits are subject to a minimal number of confirmations by the applicable blockchain before being fully credited to your account and coin withdrawals are subject to withdrawal fees. The number of confirmations and withdrawal fees are indicated in the account funding and withdrawal section for each coin available on the Services. ApeiroX shall attempt to process withdrawals and deposits in a timely manner but ApeiroX and the Representatives make no guarantee pertaining to the timing of those transfers. ApeiroX and the Representatives are not responsible for losses and liabilities induced by delayed transfers. c) Availability o : Coins are listed on the Services at the discretion of ApeiroX and can be removed or closed at any time. If a coin is so removed or closed, your open orders will be cancelled and your account credited back. If a coin is selected for removal, and if the applicable blockchain allows it, you will have twenty five (25) days to withdraw your funds. ApeiroX and the Representatives assume no liability or cost whatsoever arising from removed or closed coins. Removed coins left in your account after the withdrawal period will be forfeited.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">11. Disclaimers </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            The information provided in this paper does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the paper’s content as such. By purchasing APX, you agree that you are not purchasing a security or investment and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token ”as is” and is not required to provide any support or services. You should have no expectation of any form from APX tokens and its team. APX is a token that will get its value from whatever the community price it and not a digital currency. Always make sure that you are in compliance with your local laws and regulations before you make any purchase.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            The Services do not constitute an offer or solicitation in any jurisdiction in which such offer or solicitation is unauthorized or unlawful. ApeiroX does not control the trading value of cryptocurrencies and by using the Services you agree to keep ApeiroX free of any liabilities or losses, direct, indirect, special or consequential damages, however caused, and induced by the market price variation of any asset for any reason. Although ApeiroX tries to deliver you up to date market data such as quotes, order books, and charts the data is provided 'as is' without any guarantee of being the latest. The data may also have typographical errors, be incomplete and inaccurate. ApeiroX will try to correct those mistakes on a best effort basis but do not necessarily commit to do so. The services and crypto-currencies purchased via the services are provided on an “as is” and “as available” basis. the representatives cannot and do not guarantee, and do not make any, and, to the fullest extent permitted by law, expressly disclaim all representations, warranties, covenants, and conditions of any kind, whether express or implied, statutory or otherwise, including (1) any warranty of merchantability; (2) fitness for a particular purpose; (3) non-infringement; (4) that the services or any crypto-currencies purchased via the services, will meet your requirements; (5) that the services will be uninterrupted, timely, secure, or error free; and (6) that any defects with the services, if any, will be corrected. You understand that any use of, modification to or reliance on the services, or any crypto-currencies purchased via the service, is at your own discretion and risk. you are solely liable and responsible for any and all claims and demands made by any other person arising out of, in connection with, or relating to your use of the services, your breach of these terms, your violation or infringement of the rights of others, or your violation of any applicable civil or criminal law. Apeirox and the representatives disclaim any and all responsibility and liability regarding all such matters. You further agree that you are solely responsible for actions and communications undertaken or transmitted in the course of your usage of the services, and that you will comply with all applicable law in respect of same. We may investigate occurrences which may involve violations of such laws, and may involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations. we reserve the right at all times to disclose any information (including your personal information) regarding your usage of the services in each case as may be permitted or required by applicable law, including as necessary to satisfy any request authorized by applicable law.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Certain links on the services may take you to other websites. We are not responsible for the content of any such linked pages and we make no representation or warranty regarding, and do not endorse or approve, any linked websites, the information appearing thereon or any of the products or services described. Your use of any such linked website is at your own risk. No data transmission over the internet can be guaranteed to be 100% secure and as a result, we cannot ensure or warrant the security of any information you transmit to us. The United Nations convention on contracts for the international sale of goods does not apply to these terms.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">12. Limitations of Liability</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Under No Circumstances — Including Negligence — Shall Apeirox Or The Representatives Be Liable For Any Direct, Indirect, Incidental, Punitive, Exemplary, Special Or Consequential Loss Or Damages, Resulting From (1) The Use Or The Inability To Use The Services; (2) The Use Or The Inability To Use Any Crypto-currency Purchased Via The Services; (3) The Cost Of Procurement Of Substitute Goods Or Services; (4) Unauthorized Access To Or Alteration Of Your Transmissions Or Data; Or (5) Loss Of Profits, Use, Data Or Other Intangibles, Even If The Representatives Have Been Advised Of The Possibility Of Such Damages. The Foregoing Shall Not Apply To The Extent Prohibited By Applicable Law. You Acknowledge That ApeiroX Acts As Trustee For All Other Representatives With Respect To All Rights Contemplated Hereunder Arising In Favour Of Any Representative. Apeirox Agrees To Accept Such Trust And Hold And Enforce Such Rights On Behalf Of Each Such Representative.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">13. Indemnification</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            You agree to indemnify, defend, and hold harmless ApeiroX and the Representatives, from any and all claims and expenses, including legal fees, arising out of your use of the Services, including your violation of these Terms. We may, at our sole discretion, assume the exclusive defence and control of any matter subject to indemnification by you. The assumption of such defence or control by us, however, shall not excuse any of your indemnity obligations.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">14. Right to Terminate </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            We may at any time without notice or liability decide to alter, amend, restrict, modify, or terminate the Services or any functionality or portion of the Services, all in our sole discretion, and you understand that there is no guarantee that the Services or any portion or functionality of it will continue to operate or be available for any particular period of time, including removing, adding, modifying, or changing the availability of, restricting access to, or imposing limits on any or all features on, or links to, the Services. We reserve the right, in our sole discretion, to correct any errors or omissions in any portion of the Services at any time without notice, but confirm that we have no duty to do so.
                        </p>
                        <p classNme="mt-3 text-sm text-gray-200 text-justify">
                            If youa breach any provision of these Terms, then you may no longer use the Services and you may have your account cancelled. We, in our discretion, shall determine whether these Terms have been violated. We may also cancel trading and withdrawal rights for any account where there is suspected unauthorised access or hacking. We reserve the right to suspend or cancel your account without notice to you at any time for any reason, including if you are in default of your obligations with respect to the Services. We may terminate these Terms with you at any time.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">15. Governing Law</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            These Terms shall be governed by and construed in accordance with the laws of the Nigeria, without giving effect to its conflict of law provisions. You agree that you will bring any claim or cause of action arising out of these Terms, your use of the Services or any purchase made via the Services in the courts located within Nigeria, and you also agree to submit to the personal and non-exclusive jurisdiction of those courts. If any provision contained in these Terms is determined unenforceable, then such provision will be severed and replaced with a new provision that most closely reflects the intent of the original provision, and the remaining provisions of these Terms will remain in full force and effect. No waiver of any provision of these Terms shall be effective except pursuant to a written instrument signed by us expressly waiving compliance, and any such waiver shall be effective only in the specific instance and for the specific purpose stated in such writing. You agree that no joint venture, partnership, employment, or agency relationship exists between you and us as a result of these Terms and/or your use of the Services. You may not assign any right, interest, or benefit provided under these Terms or the Services without our express prior written consent. These Terms set forth the entire agreement between you and us, and supersede any and all prior communications, agreements and proposals, whether electronic, oral or written, between you and us with respect to the Services. The parties have expressly required that these Terms and all other related documents be drawn up in the English language. Credit card processing will be billed by ApeiroX and the charge will appear on your credit card statement as https//apeirox.com.
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
