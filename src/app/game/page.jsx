'use client'
import React from 'react';
import Card from './cardComponent';
import { useState, useEffect } from 'react';

const Game = () => {
  
  const [TeamOnePoints, setTeamOnePoints] = useState(0);
  const [TeamTwoPoints, setTeamTwoPoints] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(1);
  const [isGameFinished, setIsGameFinished] = useState(false);


  
  const countPoint = (selectedAnswer, correctAnswer, points) => {
    if (selectedAnswer === correctAnswer) {
      if (currentTeam === 1) {
        setTeamOnePoints((prevPoints) => prevPoints + points);
      } else {
        setTeamTwoPoints((prevPoints) => prevPoints + points);
      }
    }
    turn();
  };

  const turn = () => {
    setCurrentTeam(currentTeam === 1 ? 2 : 1);
  };

  return (
    < >
    <div className="teamName">
      <h2 className={currentTeam === 1 ? 'active' : ''}>lag 1: {TeamOnePoints}</h2>
      <h2 className={currentTeam === 2 ? 'active' : ''}>lag 2: {TeamTwoPoints}</h2>
    </div>
    <div className="container">
      <div>
        <h2 className='category'>Historia</h2>
        <Card 
        number={1} 
        question={"Vad kallas denna skrift?"} 
        img={"https://historiska.se/wp-content/uploads/2015/08/runrad.gif.jpg"} 
        A={"A: Run skrift"}B={"B: Hieroglyfer"} C={"C: Kufiska skrifter"} answer={"A"} 
        countPoint={countPoint}
        >
        </Card>
        <Card 
        number={2} 
        question={"Vilket årtionde ägde Berlinmurens fall rum?"} 
        img={"https://karavanreseguider.se/wp-content/uploads/2018/05/berlin_berlinmuren.jpg"} 
        A={"A: 1960-talet"}B={"B: 1980-talet"} C={"C: 1970-talet"} answer={"B"} countPoint={countPoint} >
        </Card>
        <Card 
        number={3} 
        question={'Vilket land är känt som "Landet av midnattssolen"?'} 
        img={"https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_406,q_65,w_587/v1/clients/norway/north-cape-midnight-sun-norway-2-1_924eadf4-3245-4c4f-a11d-cd7f975acd27.jpg"} 
        A={"A: Sverige"}B={"B: Finland"} C={"C: Norge"} answer={"C"} countPoint={countPoint}>
        </Card>
        <Card 
        number={4} 
        question={"Vilket år hölls de första moderna olympiska spelen?"} 
        img={"https://sok.se/images/18.69b9f7ef14f1cd63f21732/1439469458819/Aten1896_hero-1.jpg"}
        A={"A: 1882"}B={"B: 1870"} C={"C: 1896"} answer={"C"} countPoint={countPoint}></Card>
        <Card 
        number={5} 
        question={"Vilket historiskt slag anses vara vändpunkten under andra världskriget på östfronten, där de tyska styrkorna besegrades och blev tvungna att backa för första gången?"}
        img={"https://images.bonnier.cloud/files/phi/production/2023/05/12111005/stalingrad-traktorfabriken-tysk-pluton-andra-varldskriget-oxYDr4UY4WOvFYM44f3Pog-1.jpg?max-w=1200&max-h=630&fit=crop"}
        A={"A: Slaget om Stalingrad"}B={"B: Slaget vid Kursk"} C={"C: Slaget vid Moskva"} answer={"A"} countPoint={countPoint}>
        </Card>
      </div>
      <div>
        <h2 className='category'>Musik</h2>
        <Card 
        number={1} 
        question={"Namn på låt och artist"}
        img={"https://media.istockphoto.com/id/1175435360/sv/vektor/ikon-f%C3%B6r-musik-anteckning-vektor-illustration.jpg?s=612x612&w=0&k=20&c=h-YOpYBWd4HflSvyubeFUDhXNCgz8VUatw4eOpRZaS0="}
        A={"A: Bleeding love, Leona lewis"} B={"B: Halo, beyonce "} C={"C: Bubbly, Colbie Caillat"} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={2} 
        question={"I vilken stad startade The Beatles"}
        img={"https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg"}
        A={"A: Manchester"} B={"B: London"} C={"C: Liverpool"} answer={"C"}
        countPoint={countPoint}></Card>
        <Card 
        number={3} 
        question={"Namn på låt och artist"} 
        img={"https://media.istockphoto.com/id/1175435360/sv/vektor/ikon-f%C3%B6r-musik-anteckning-vektor-illustration.jpg?s=612x612&w=0&k=20&c=h-YOpYBWd4HflSvyubeFUDhXNCgz8VUatw4eOpRZaS0="}
        A={"A: Stairway To Heaven, Far Corporation"} B={"B: Nothing's Gonna Stop Us Now, Starship"} C={"C: Baby Can I hold you, Tracy Chapman"} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={4} 
        question={"Namn på låt och artist"} 
        img={"https://media.istockphoto.com/id/1175435360/sv/vektor/ikon-f%C3%B6r-musik-anteckning-vektor-illustration.jpg?s=612x612&w=0&k=20&c=h-YOpYBWd4HflSvyubeFUDhXNCgz8VUatw4eOpRZaS0="}
        A={"A: Cant Fight This Feeling, REO Speedwagon"} B={"B: Satellite, The Hooters"} C={"C: You're My Heart, You're My Soul. Modern Talking "} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={5} 
        question={'Vilket år kom denna låt ut?'} 
        img={"https://media.istockphoto.com/id/1175435360/sv/vektor/ikon-f%C3%B6r-musik-anteckning-vektor-illustration.jpg?s=612x612&w=0&k=20&c=h-YOpYBWd4HflSvyubeFUDhXNCgz8VUatw4eOpRZaS0="}
        A={"A: 1979"} B={"B: 1989"} C={"C: 1992"} answer={"B"}
        countPoint={countPoint}></Card>
      </div>
      <div>
        <h2 className='category'>Sport</h2>
        <Card 
        number={1} 
        question={" Vem anses vara den bästa kvinnliga tennisspelaren genom tiderna med 23 Grand Slam-singeltitlar?"}
        img={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tennis_Racket_and_Balls.jpg/1200px-Tennis_Racket_and_Balls.jpg"}
        A={"A: Steffi Graf"} B={"B: Serena Williams"} C={"C: Martina Navratilova"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={2} 
        question={"Vilken fotbollsklubb vann UEFA Champions League säsongen 2018/2019?"} 
        img={"https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UEFA_Champions_League.svg/800px-UEFA_Champions_League.svg.png"}
        A={"A: Real Madrid"} B={"B: Bayern munchen"} C={"C: Liverpool"} answer={"C"}
        countPoint={countPoint}></Card>
        <Card 
        number={3} 
        question={"Vilken förening är det som arrangerar Gothia Cup"}
        img={"https://cdn.delikatesskungen.se/wp-content/uploads/2021/05/26120508/gothia.jpg"}
        A={"A: BK häcken"} B={"B: Gais"} C={"C: IFK Göteborg"} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={4} 
        question={"Hur många LPGA har Annika Sörenstam vunnit?"}
        img={"https://www.lpga.com/lpga-hall-of-fame/-/media/images/lpga/hub-landing-pages/hall-of-fame/profile-images/sorenstama_hof1_1023x500.jpg"}
        A={"A: 68"} B={"B: 72"} C={"C: 79"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={5} 
        question={"Vilken gren är utgången ur OS?"} 
        img={"https://www.allergia.se/wp-content/uploads/2016/08/OS-ringar.jpg"}
        A={"A: Hästpolo"} B={"B: Modern femkamp"} C={"C: Tyngdlyftning"} answer={"A"}
        countPoint={countPoint}></Card>
      </div>
      <div>
        <h2 className='category'>Film</h2>
        <Card 
        number={1} 
        question={"Vad va det Forrest gumps mamma sa om livet?"}
        img={"https://www.southernliving.com/thmb/6i9lgYX5elYmwf688LCIJGD1ah8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSDFOGU_EC025-c2ff15f416fe46299efbc46bfe4f402c.jpg"}
        A={"A: Life is the way you want it to be"} B={"B: Life is a long lesson in humility"} C={"C: Life is like a box of chocolates"} answer={"C"}
        countPoint={countPoint}></Card>
        <Card 
        number={2} 
        question={"Vilket år kom första indiana jones?"}
        img={"https://hips.hearstapps.com/hmg-prod/images/harrison-ford-indiana-jones-649da0a102993.jpeg?crop=0.752xw:1.00xh;0.129xw,0&resize=1200:*"}
        A={"A: 1981"} B={"B: 1988"} C={"C: 1984"} answer={"C"} 
        countPoint={countPoint}></Card>
        <Card 
        number={3} 
        question={"Vilken av följande animerade filmer producerades av Pixar Animation Studios?"}
        img={"https://www.gamereactor.se/media/93/_1809353b.jpg"}
        A={"A: Shrek"} B={"B: Toy Story"} C={"C: Ice Age"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card number={4} question={"Vad heter ön där jurassic park utspelar sig?"}
        img={"https://static.posters.cz/image/750/bilden-pa-canvas-jurassic-park-classic-logo-i111309.jpg"}
        A={"A: Isla nublar"} B={"B: Caye caulker"} C={"C: Isla verde"} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={5} 
        question={'Vilken av följande filmer vann priset för "Bästa film" på Oscarsgalan år 2000?'}
        img={"https://www.buttericks.se/media/contentmanager/content/blog/blogg-2023_oscar_1200x400.jpg"}
        A={"A: Saving Private Ryan"} B={"B: Gladiator"} C={"C: The Lord of the Rings: The Fellowship of the Ring"} answer={"B"} 
        countPoint={countPoint}></Card>
      </div>
      <div>
        <h2 className='category'>TV-Serie</h2>
        <Card 
        number={1} 
        question={"Vem är det Michael Scott hatar i The office?"}
        img={"https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/library/theoffice/mainpage/office-vertical-art.jpg/_jcr_content/renditions/original.JPEG"}
        A={"A: Dwight"} B={"B: Jim"} C={"C: Toby"} answer={"C"} 
        countPoint={countPoint}></Card>
        <Card 
        number={2} 
        question={'I TV-serien "Stranger Things" spelas en av huvudkaraktärerna, Eleven, av Millie Bobby Brown, en ung flicka med övernaturliga krafter. Vad kallas dessa krafter?'} 
        img={"https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"}
        A={"A: Telepati"} B={"B: Telekinesi"} C={"C: Teleportation"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={3} 
        question={"Vilket vapen är House Mormonts vapen i Game of Thrones?"} 
        img={"https://sm.mashable.com/mashable_in/photo/default/house-mormont-game-of-thrones_7u7s.jpg"}
        A={"A: En gycklande narr"} B={"B: En svart bäver"} C={"C: En brun björn"} answer={"C"}
        countPoint={countPoint}></Card>
        <Card 
        number={4} 
        question={"Vad heter Leyas företag i snabba cash?"} 
        img={"https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/443378/b0c994b8c72c0182610073e908815237-Screenshot_202022-09-25_2012.03.30.png"}
        A={"A: TargetCoach"} B={"B: InfoCoach"} C={"C: BusinessCoach"} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={5} 
        question={"Vad är namnet på den mystiska mannen i hatt som återkommer i olika tidsepoker och ser ut att ha en djupare koppling till Westworlds historia?"} 
        img={"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/39e9fe20301fdaa40652e548df2a3e018d9f61692adea57823f1e8afe9538f9f._RI_TTW_SX720_FMjpg_.jpg"}
        A={"A: The Man in Black"} B={"B: The Stranger"} C={"C: The Wanderer"} answer={"A"}
        countPoint={countPoint}></Card>
      </div>
      <div>
        <h2 className='category'>Dubbeln</h2>
        <Card 
        number={2} 
        question={"Vilket år kom youtube ut i Sverige?"} 
        img={"https://i.pinimg.com/originals/13/bb/c2/13bbc23466b28c669703e1deb682d068.jpg"}
        A={"A: 2005"} B={"B: 2007"} C={"C: 2008"} answer={"C"}
        countPoint={countPoint}></Card>
        <Card 
        number={4} 
        question={"Vem har vunnit dom senaste 4 mr.Olympia"} 
        img={"https://barbend.com/wp-content/uploads/2022/12/BarBend-Feature-Image-1200-x-675-63.jpg"}
        A={"A: ronnie coleman"} B={"B: Chris Bumstead"} C={"C: Breon Ansley"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={6} 
        question={"Vilket är det officiella språket som talas på Mallorca?"} 
        img={"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKa1xootiMRY/v1/-1x-1.jpg"}
        A={"A: Spanska"} B={"B: Katalanska"} C={"C: portugisiska"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={8} 
        question={"Vilken viking var känd för att ha upptäckt Nordamerika långt före Columbus?"} 
        img={"https://images.bonnier.cloud/files/phi/production/2021/07/29113053/vikingar-i-osterled-zEUqxsTPXv9arfmNzCgO8w.jpg"}
        A={"A: Leif Eriksson - En nordisk vikingakrigare och son till Erik den Röde"} B={"B: Bjarni Herjólfsson - En vikingakapten som oavsiktligt siktade Nordamerika under en färd till Grönland"} C={"C: Olav Tryggvason - En norsk kung som genomförde expeditioner till okända territorier"} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={10} 
        question={"Vilket av följande element har det högsta atomnumret?"} 
        img={"https://npr.brightspotcdn.com/dims4/default/014e9dd/2147483647/strip/true/crop/2400x1646+0+0/resize/880x604!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwuwm%2Ffiles%2F201912%2FAdobeStock_238869971.jpg"}
        A={"A: Uran (U)"} B={"B: Palladium (Pd)"} C={"C: Curium (Cm)"} answer={"C"} 
        countPoint={countPoint}></Card>
      </div>
      </div>
    </>
  );
};

export default Game;
