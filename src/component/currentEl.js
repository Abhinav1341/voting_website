import React from "react";
import NavBarCurrent from "./navcurrent";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function CurrentElement() {
  const percentage = 74;
  return (
    <div>
      <NavBarCurrent />
      <div className="home-main">
        <div className="p-bar">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({ textColor: "#2f2f2f", pathColor: "#1a1d6c" })}
          />
          ;
        </div>
        <div className="state-name">
          Bihar
          <div className="phase">Phase1</div>
        </div>
        <div className="see-more">Below is the list of winners of election</div>
        <div className="list-of-const">
          <div className="list-cont">
            <div className="el-list"> Valmiki Nagar </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Ramnagar </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Narkatiaganj </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Lauriya </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Nautan </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Chanpatia </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Bettiah </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Sikta </div>
            <div className="el-list"> CPIL </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Raxaul </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Sugauli </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Narkatiya </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Harsidhi </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Govindganj </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Kesaria </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Kalyanpur </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Pipra </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Madhuban </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Motihari </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Chirala </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Dhaka </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Sheohar </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Riga </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Bathnaha </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Parihar </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Sursand </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Bajpatti </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Sitamarhi </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Runnisaidpur </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Belsand </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Harlakhi </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Benipatti </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Khajauli </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Bisfi </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Babubarhi </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Madhubani </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Rajnagar </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Jhanjharpur </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Phulparas </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Lauka </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Nirmali </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Pipra </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Supaul </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Triveniganj </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Chhatapur </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Narpatganj </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Raniganj </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Forbesganj </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Araria </div>
            <div className="el-list"> INC </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Jokihat </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Sikti </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Bahadurganj </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Thakurganj </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Kishanganj </div>
            <div className="el-list"> INC </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Kochadhaman </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Amour </div>
            <div className="el-list"> AIMIM </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Baisi </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Kasba </div>
            <div className="el-list"> INC </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Banmankhi </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Rupauli </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Dhamdaha </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Purnia </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Katihar </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Kadwa </div>
            <div className="el-list"> INC </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Balrampur </div>
            <div className="el-list"> CPIL </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Pranpur </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Manihari </div>
            <div className="el-list"> INC </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Barari </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Korha </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Alamnagar </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Biharganj </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Singheshwar </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Madhepur </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Sonbarsha </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Saharsa </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Simri Bakhtiarpur </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Mahishi </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Kusheshwar Asthan </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Gaura Bauram </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Benipur </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Alinagar </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Darbhanga Rural </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Hayaghat </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Keoti </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Jale </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Gaighat </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Aurai </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Minapur </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Bochachan </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Sakra </div>
            <div className="el-list"> JD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Kurhani </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Muzaffarpur </div>
            <div className="el-list"> INC </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Kanti </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Baruraj </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Paroo </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Sahebganj </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Baikunthpur </div>
            <div className="el-list"> RJD </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Barauli </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="list-cont">
            <div className="el-list"> Gopalganj </div>
            <div className="el-list"> BJP </div>
          </div>
          <div className="space"></div>
        </div>
      </div>
    </div>
  );
}
