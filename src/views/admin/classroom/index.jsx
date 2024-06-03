import Banner from "./components/Banner";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import NftCard from "components/card/NftCard";
import MiniCalendar from "components/calendar/MiniCalendar";


const Classroom = () => {
    return (
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
          {/* NFt Banner */}
          <Banner />
  
          {/* NFt Header */}
          <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
            <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
              Favourite Classroom
            </h4>
            {/* <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
              <li>
                <a
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                >
                  Art
                </a>
              </li>
              <li>
                <a
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                >
                  Music
                </a>
              </li>
              <li>
                <a
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                >
                  <a href=" ">Sports</a>
                </a>
              </li>
            </ul> */}
          </div>
  
          {/* NFTs trending card */}
          <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
            <NftCard
                bidders={[avatar1, avatar2, avatar3]}
                title="Math 101"
                author="Mr. John Doe"
                price="Morning Shift"
                image={NFt3}
            />
            <NftCard
                bidders={[avatar1, avatar2, avatar3]}
                title="Science 202"
                author="Mrs. Jane Smith"
                price="Afternoon Shift"
                image={NFt2}
            />
            <NftCard
                bidders={[avatar1, avatar2, avatar3]}
                title="History 303"
                author="Dr. Emily Johnson"
                price="Evening Shift"
                image={NFt4}
            />
            </div>

            {/* Recently Added section */}
            <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
            <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                Recently Added
            </h4>
            </div>

            {/* Recently Added Classrooms */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <NftCard
                bidders={[avatar1, avatar2, avatar3]}
                title="Art 404"
                author="Ms. Laura Brown"
                price="Morning Shift"
                image={NFt4}
            />
            <NftCard
                bidders={[avatar1, avatar2, avatar3]}
                title="Physics 505"
                author="Mr. Alan Green"
                price="Afternoon Shift"
                image={NFt5}
            />
            <NftCard
                bidders={[avatar1, avatar2, avatar3]}
                title="Chemistry 606"
                author="Dr. Sara White"
                price="Evening Shift"
                image={NFt6}
            />
            </div>

        </div>
  
        {/* right side section */}
  
        <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
            <div className="grid grid-cols-1 mb-5 rounded-[20px]">
                <MiniCalendar />
            </div>

          <TopCreatorTable
            extra="mb-5"
            tableData={tableDataTopCreators}
            columnsData={tableColumnsTopCreators}
          />
          
        </div>
      </div>
    );
  };
  
  
export default Classroom;
