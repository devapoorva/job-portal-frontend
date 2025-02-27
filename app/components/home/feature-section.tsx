"use client"
import Image from "next/image";
import featureImg1 from '../../../public/feature-1.png'
import featureImg2 from '../../../public/feature-2.png'
import { motion } from "framer-motion";
export function FeatureSection() {
    return (
        <section className="bg-gray-50 dark:bg-gray-800 overflow-hidden">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
               
                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <motion.div  initial={{ opacity: 0, x: "-100%" }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                 className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Who We Are</h2>
                        <p className="mb-8 font-light lg:text-xl">At JITO, we collaborate every day to help make the world run better and improve people's lives.</p>
                      
                        <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                            <li className="flex space-x-3">
                               
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Seamless Job Matching</span>
                            </li>
                            <li className="flex space-x-3">
                                
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">User-Friendly Experience</span>
                            </li>
                            <li className="flex space-x-3">
                                
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Robust Employer & Candidate Insights</span>
                            </li>
                        </ul>
                        <p className="mb-8 font-light lg:text-xl">JITO Jobs is a smart job portal that connects job seekers with the right opportunities and helps employers find top talent. With AI-driven matching, real-time alerts, and advanced hiring tools, it simplifies recruitment and career growth for professionals at all levels..</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: "100%" }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}>
                        <Image className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={featureImg1}
                               alt="dashboard feature image"/>
                    </motion.div>
                </div>
                {/* <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <motion.div initial={{ opacity: 0, x: "-100%" }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}>
                        <Image className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={featureImg2}
                               alt="feature image 2"/>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: "100%" }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">We
                            invest in the world’s potential</h2>
                        <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions. Accelerate critical development work, eliminate
                            toil, and deploy changes with ease.</p>
                       
                        <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                            <li className="flex space-x-3">
                               
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Dynamic reports and dashboards</span>
                            </li>
                            <li className="flex space-x-3">
                               
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Templates for everyone</span>
                            </li>
                            <li className="flex space-x-3">
                               
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Development workflow</span>
                            </li>
                            <li className="flex space-x-3">
                                
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Limitless business automation</span>
                            </li>
                            <li className="flex space-x-3">
                              
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Knowledge management</span>
                            </li>
                        </ul>
                        <p className="font-light lg:text-xl">Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions.</p>
                    </motion.div>
                </div> */}
            </div>
        </section>
    )
}