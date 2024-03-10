import React from "react";
import "./Explore.css";
import Navbar from "./Navbar";
import doreamon from "../Components/charsImgs/doraemon.png";
import nobita from "../Components/charsImgs/nobita.png";
import shizuka from "../Components/charsImgs/Shizuka.png";
import gian from "../Components/charsImgs/Gian.png";
import suneo from "../Components/charsImgs/suneo.png";
import dorami from "../Components/charsImgs/dorami.png";

function Explore() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="dore">
          <img  src={doreamon} alt="" />
          <h1 className="dorahead">Doraemon</h1>
          <br />
          <p className="dorades">
            Doraemon is sent back in time by a young boy named Sewashi Nobi to
            improve the circumstances of his great-great-grandfather, Nobita, so
            that his descendants may enjoy a better future. In the original
            timeline, Nobita experienced nothing but misery and misfortune
            manifested in the form of very poor grades and bullying throughout
            his life. This culminates in the burning down of a future business
            he sets up which leaves his family line beset with financial
            problems. In order to alter history and improve the Nobi family’s
            fortunes, Sewashi initially wanted to send a super-robot to protect
            Nobita, but with his meager allowance he could only afford an
            imperfectly-made factory-rejected toy: an anthropomorphic robot cat
            called Doraemon.
            <br /> <br />
            Doraemon has a pocket from which he produces toys, medicines, and
            tools from the future, all of which are referred to as ‘gadgets’ by
            Doraemon. Some of the gadgets are based on real Japanese household
            devices with fanciful twists, but most are completely science
            fiction. Thousands of gadgets have been featured in the series with
            such as the “bamboo-copter”, a small head accessory that allows
            flight and the “Anywhere Door”, a door that opens up to any place
            the user wishes.
          </p>
        </div>

        <div className="nobita">
          <img src={nobita} alt="" />
          <h1 className="nohead">Nobita</h1>
          <p className="nobdes">Nobita is the other major character of the series. He is a fourth grader in Tokyo’s Nerima Ward and an only child. He wears glasses, a red or yellow polo shirt with a white collar, and blue shorts. Nobita’s character flaws are endless: he is lazy, uncoordinated, dim-witted, frail, plain-looking, unlucky, and bad at sports.
            <br /> <br /> Nobita’s typical day consists of arriving late to class, scoring zeros on his exam, getting lectured by his teacher, being bullied by classmates Gian and Suneo, falling into curbside rain gutters, being chased by dogs, and getting yelled at by his mom for refusing to do his homework.</p>
        </div>

        <div className="shizuka">
          <img src={shizuka} alt="" />
          <h1 className="shizhead">Shizuka</h1>
          <p className="shizdes">
          Shizuka, usually called Shizu-chan or Shizuka-chan , is the smart, kind, and pretty neighborhood girl who is the object of Nobita’s affections. She takes baths several times a day. Somehow, Nobita always seem to unintentionally walk in on her  while she is still in the bathtub. 
          <br /><br />She is also known for taking piano lessons unwillingly, which is sometimes used as an excuse for declining to hang out with Nobita. Her true passions are sweet potatoes and the violin, in which her playing is as atrocious as Gian’s singing. Due to Doraemon’s intervention, Shizuka will become Nobita’s wife in the future timeline.
          </p>
        </div>
        <div className="gian">
        <img src={gian} alt="" />
        <h1 className="gianhead">Gian</h1>
        <p className="giandes">Takeshi Goda, usually known by the nickname “Gian” from English word “giant”, is the big, strong, and quick-tempered local bully. His nickname may be derived from giant. He is known for his confidence in his terrible singing voice. He regularly subjects the neighborhood children to horrendous singing recitals, which is sometimes combined with his equally bad homemade dinner. Several of the stories revolve around Nobita and his friends’ efforts to avoid Gian’s concerts.
        <br /><br />
        He also frequently steals other children’s toys and books under the pretext of “borrowing” them, unless the toy is damaged. However, he does not hesitate to help Nobita and his friends when they are in real trouble, which often occurs in the movies. Although he bullies the other children (mostly Nobita), he is terrified of his mother, who runs the local grocery store. He founded his own baseball team named after himself. Although Nobita is often blamed for the losses against the baseball team’s rival, the “Tyranos”, Gian and Suneo still force Nobita to play because they do not have enough players. Gian has a younger sister named Jaiko, whom he adores.</p>

        </div>

        <div className="suneo">
          <img src={suneo} alt="" />
          <h1 className="suneohead">Suneo</h1>
          <p className="suneodes">Suneo, is the fox-faced rich kid who loves to flaunt his material wealth before everyone. He is often seen with Gian, serving as Gian’s lackey while they bully Nobita together. 
          <br /> <br />Some of the stories start with Suneo showing off some new video game or toy which evokes Nobita’s envy. He has an extensive knowledge of science, and is a talented artist and designer. He also has a younger brother Sunetsugu, who was adopted into his uncle’s family in New York.</p>
        </div>

        <div className="dorami">
          <img src={dorami} alt="" />
          <h1 className="doramihead">Dorami</h1>
          <p className="doramides">Dorami, also known as Dorami-chan, is the younger sister of Doraemon. Strangely enough, they are siblings due to the fact that they shared half of the oil from a can. <br /><br /> She lives in the 22nd-century Tokyo with Sewashi, Nobita’s great-great-grandson. She is yellow and has ears that resemble a large red bow. She likes melonpan and is afraid of cockroaches. She is also shown to be a more advanced robot than Doraemon (Dorami is able to produce 10,000 horse power, in comparison to Doraemon’s 129.3). She sometimes visits Nobita with a time machine when Doraemon is “off-duty.”</p>
        </div>
      </div>
    </>
  );
}

export default Explore;
