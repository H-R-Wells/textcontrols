import React, { useState } from 'react';


export default function TextForm(props) {
    const [text1, setText] = useState("");


    if (text1.match(/(\w+)/g) !== null) {
        var wordCount = text1.match(/(\w+)/g).length;
        var letterCount = text1.match(/(\w)/g).length;
    }
    else {
        wordCount = "0";
        letterCount = "0";
    }






    const upClick = () => {
        console.log("Upper case button is clicked");
        let upText = text1.toUpperCase();
        setText(upText);
    }
    const lowClick = () => {
        console.log("Lower case buttoen is clicked");
        let lowertext = text1.toLowerCase();
        setText(lowertext);
    }
    const cleartext1 = () => {
        console.log("Clearing the text");
        setText("");
    }
    const sentanceCase = () => {
        console.log("Converting to sentance case");
        let demo = text1.toLowerCase();
        let senCase = demo.charAt(0).toUpperCase();
        setText(senCase + demo.slice(1));
    }
    const capiCase = () => {
        console.log("Conveting text to capitalize text");
        let demo = text1.toLowerCase();
        setText(demo.replace(/\b(\w)/g, s => s.toUpperCase()));
    }
    const copyText = () => {
        console.log("Cooping your text");
        var textom = document.getElementById("textBox");
        textom.select();
        navigator.clipboard.writeText(textom.value);
    }
    const handleSpace = () => {
        console.log("Removing extra spaces for text");
        let texttom = text1.split(/[ ]+/);
        setText(texttom.join(" "));
    }
    const handleOnChange = (event) => {
        console.log("On change is triggered bitch");
        setText(event.target.value);
    }

    return (
        <div className='md:flex min-w-full justify-center w-full container bg-slate-400 pb-12'>
            {/* <!-- main  --> */}
            <div className="flex w-full max-w-lg bg-slate-400 justify-center py-12">

                <div className={`mx-8 block container max-w-xs px-9 py-10 md:px-12 lg:py-12 rounded-lg shadow-lg  w-full lg:max-w-2xl transition  ease-in-out duration-500 ${props.mainBox} `}>
                    <form>
                        {/* <div id="titlediv" className="form-group mb-6">
                            <label className="text-lg form-label inline-block mb-2 text-gray-700 font-semibold">Write your text here</label>
                            <input id="title" type="text"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Title Name" />
                        </div> */}
                        <div className="form-group mb-6">
                            <label className={`text-lg form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Enter your text below:</label>
                            <textarea id="textBox" value={text1} onChange={handleOnChange}
                                className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-700   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${props.textArea}`}
                                rows="5" placeholder="Enter text here"></textarea>
                        </div>

                        <div className="flex">
                            <button type="button" id="addbtn" onClick={upClick} onChange={handleOnChange}
                                className=" w-full mx-2 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out">
                                Upper case
                            </button>
                            <button type="button" onClick={lowClick} onChange={handleOnChange}
                                className=" w-full mx-2 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out">
                                 Lower case
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <button type="button" id="addbtn" onClick={sentanceCase} onChange={handleOnChange}
                                className=" w-full mx-2 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out">
                                Sentance case
                            </button>
                            <button type="button" onClick={capiCase} onChange={handleOnChange}
                                className=" w-full mx-2 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out">
                                 capitalized case
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <button type="button" id="addbtn" onClick={copyText} onChange={handleOnChange}
                                className=" w-full mx-2 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out">
                                Copy Text
                            </button>
                            <button type="button" onClick={handleSpace} onChange={handleOnChange}
                                className=" w-full mx-2 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out">
                                Clear extra space
                            </button>
                        </div>
                        <div className="flex mt-2">
                            <button type="button" onClick={cleartext1} onChange={handleOnChange}
                                className=" w-full mx-2 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out">
                                Clear Text
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`justify-center px-5 text-left pt-8 pb-12 md:block md:container  py-0 md:px-12 md:py-12 rounded-lg shadow-lg md:my-12  md:max-w-lg mx-8 transition  ease-in-out duration-500 ${props.mainBox2} ${props.textMain}`}>
                <div className='container flex-grow'>
                    <h1 className='font-semibold text-4xl '>Your Text Summary</h1>
                    <p className='font-medium text-xl'>{wordCount} words and {letterCount} characters</p>
                    <p className='font-semibold text-2xl mt-4'>Preview:</p>
                    <p id='preview' className='hidden text-slate-400'>Preview of the text will print here </p>
                    <p className=' text-clip break-words'>{text1.length>0?text1: "Nothing to preview"}</p>
                </div>
            </div>
        </div>
    )
}



