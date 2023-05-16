import React from "react";
import NavBarFaq from "./navfaq";

export default function FAQs() {
  return (
    <div>
      <NavBarFaq />
      <div className="faq-box">
        <div className="faq">
          <div className="ques"> What is blockchain?</div>
          Ans: A blockchain is a type of distributed database which means the
          power to update a blockchain is distributed between the nodes, or
          participants, of a public or private computer network. This is known
          as distributed ledger technology
        </div>
        <div className="faq">
          <div className="ques">
            Why we use blockchain technology in our voting system?
          </div>
          Ans: Transparency and Security: Since the blockchain ledger is a
          decentralized and immutable record, every transaction is transparent
          and visible to all participants. This means that every vote cast can
          be tracked and verified by anyone, ensuring that the voting process is
          fair and secure. Blockchain-based voting systems are highly secure, as
          the technology uses cryptography to secure each transaction. Every
          vote cast is recorded on the blockchain ledger, and once recorded, the
          information cannot be changed or tampered with, ensuring that the
          voting process is free from fraud. Efficiency: Traditional voting
          systems often involve long lines, paper ballots, and manual vote
          counting. By contrast, blockchain-based voting systems can be
          conducted online, making the process more efficient, cost-effective,
          and convenient for voters. Cost-Effective: Blockchain-based voting
          systems can be more cost-effective than traditional voting systems, as
          they require less manual labour and resources. This can be
          particularly beneficial for smaller organizations or countries that
          may not have the financial resources to invest in traditional voting
          infrastructure. Fast and Real-Time Results: Blockchain-based voting
          systems can provide fast and real-time results, allowing voters to see
          the outcome of the election immediately. This can help to prevent
          delays in announcing the results and ensure that the election outcome
          is accepted by all parties.
        </div>
        <div className="faq">
          <div className="ques">
            Who is eligible to be registered as a general elector?
          </div>
          Ans. Every Indian citizen who has attained the age of 18 years on the
          qualifying date i.e. first day of January of the year of revision of
          electoral roll, unless otherwise disqualified, is eligible to be
          registered as a voter in the roll of the part/polling area of the
          constituency where he is ordinarily resident.
        </div>
        <div className="faq">
          <div className="ques">
            How can one get registered / enrolled in the electoral roll?
          </div>
          Ans. One has to file the application for the purpose, in prescribed
          Form 6, before the Electoral Registration Officer / Assistant
          Electoral Registration Officer of the constituency within which the
          place of ordinary residence of the applicant falls. The application
          accompanied by copies of the relevant documents can be filed in person
          before the concerned Electoral Registration Officer / Assistant
          Electoral Registration Officer or sent by post addressed to him or can
          be handed over to the Booth Level Officer of your polling area, or can
          even be filed online on website of Chief Electoral Officer of the
          concerned state or website of Election Commission of India. While
          filing Form 6 on line, the copies of necessary documents should also
          be uploaded.
        </div>
        <div className="faq">
          <div className="ques">
            I am a student staying at the place of study in a hostel / mess far
            from my native place. I want to get myself registered at my present
            address of residence. What should I do ?
          </div>
          Ans. In case of a student residing at the place of study, in hostel or
          mess managed by the educational institutions or elsewhere will have
          the option to get himself / herself registered as elector at his / her
          native place with his / her parents or at the address of hostel / mess
          where he / she is resident for the time being for pursuing his / her
          studies. The course pursued by the said students should be recognized
          by Central / State Governments / Boards / Universities / Deemed
          Universities and such courses should be of not less than 1 year’s
          duration. Such student who wants to enroll himself / herself at the
          hostel / mess will have to attach a bonafide certificate (as per the
          specimen at Annexure II of Guidelines attached to Form 6 available on
          the website of Election Commission) from the Headmaster / Principal /
          Director / Registrar / Dean of his/her educational institution with
          Form 6.
        </div>
        <div className="faq">
          <div className="ques">
            If I apply on line, whether I need to send to the Electoral
            Registration Officer’s address, signed copy of the Form 6 along with
            required documents.
          </div>
          Ans. As soon as the Electoral Registration Officer / Assistant
          Electoral Registration Officer receives Form 6 filed on line, he
          downloads the form along with enclosure and deputes Booth Level
          Officer to visit your residence to verify and obtain your original
          signature on the application form.
        </div>
        <div className="faq">
          <div className="ques">
            Can one be enrolled at more than one place? If I am working /
            residing in Delhi, can I be an elector in my native place in
            Uttarakhand?
          </div>
          Ans. No. A person cannot be enrolled as a voter at more than one place
          in view of the provisions contained in Sections 17 and 18 of
          Representation of People Act, 1950. Likewise, no person can be
          enrolled as an elector more than once in any electoral roll. Any
          person while applying for fresh enrolment, makes a statement or
          declaration whether his / her name is already included in the
          electoral roll of any other constituency, and if such
          statement/declaration is false and which the applicant either knows or
          believes to be false or does not believe to be true, he is liable to
          be punished under section 31 of the Representation of the People Act,
          1950.
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}
