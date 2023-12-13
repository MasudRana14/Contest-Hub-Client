
const Qna = () => {

    return (

        <div className="mb-10 ">

            <h1 className="text-3xl text-center font-bold mt-5 text-sky-500">QNA</h1>
            <p className="border-2 border-b-orange-600 w-1/12 mx-auto"></p>



            <div className="bg-slate-500 h-80 rounded-xl mt-8">

                <div className="join join-vertical w-full py-10 px-5 text-white " >
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input  type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        How to participate in the Contest Hub?
                        </div>
                        <div className="collapse-content">
                            <p>Here all users can participate in the contest of their choice. But to participate you must can an Account on our contest Hub site. Then you can participate by registering the contest of your choice.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                           What is the Prize of the contest?
                        </div>
                        <div className="collapse-content">
                            <p>There are many types of contest here. Here prize Contest will be according to Category. Here you will participate in the contest that will be given the prize that is determined in the contest. </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Contest of what category is here?
                        </div>
                        <div className="collapse-content">
                            <p>Here we currently have contests for some category such as Business, Art and Culture, Gaming And Medical.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default Qna;