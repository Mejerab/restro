import PointHook2 from "../../hooks/PointHook2";

const Book = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/9RlwUY8.png)] bg-cover bg-no-repeat py-24">
            <div className="flex items-center flex-col">
                <PointHook2 head={'book a table'} center text={'Make Online Reservation'} />
            </div>
            <form className="w-[969px] mx-auto mt-14 grid grid-cols-3 gap-6">
                <input data-aos='fade-up' type="text" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] rounded-[8px]" placeholder="Full Name:" />
                <input data-aos='fade-down' type="email" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] rounded-[8px]" placeholder="Email Address:" />
                <input data-aos='fade-up' type="tel" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] rounded-[8px]" placeholder="Phone:" />
                <select data-aos='fade-up' className="px-4 select focus:outline-[#201F1B] w-[303px] h-[56px] rounded-[8px] text-[#201F1B] placeholder:text-[#201F1B] text-[19px] border border-[#201F1B] bg-white" defaultValue={'Person'}>
                    <option disabled>Person</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <input data-aos='fade-down' type="date" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] rounded-[8px]" />
                <input data-aos='fade-up' type="time" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] rounded-[8px]" />
                <button className="btn relative mt-6 w-[304px] col-span-3 mx-auto h-[56px] rounded-[8px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">Book A table</button>
            </form>
        </div>
    );
};

export default Book;