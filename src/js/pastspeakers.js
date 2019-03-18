import flickity from 'flickity';
function init() {

  const pastSpeakers = [
    {
      name: "Shradha Sharma",
      subName: "Founder, CEO and Chief Editor of YourStory. Former Assistant Vice President at     CNBC TV18",
      img: require("../imgs/speakers/shradhaSharma.png")
    },
    {
      name: "Ajay Bohora",
      subName: "The man who transformed the world of finance, Co-Founder and MD HDFC Credila, Ex-Board of Directors of WNS Global Systems",
      img: require("../imgs/speakers/ajayBohra.png")
    },
    {
      name: "Utkarsh Amitabh",
      subName: "Business Development Manager at Microsoft, Founder of Networkcapital.co and global shaper at the World Economic Forum",
      img: require("../imgs/speakers/utkarshAmitabh.png")
    },
    {
      name: "Sanjay Agarwal",
      subName: "Renowned entrepreneur, Gold medallist Chartered Accountant and MD and CEO, AU Small Finance Bank",
      img: require("../imgs/speakers/sanjayAgarwal.png")
    },
     {
       name: "Chandan Agarwal",
       subName: "President of Hindalco Industries Limited, a Chartered Accountant and MBA graduate from Indian School of Business",
       img: require("../imgs/speakers/chandanAgarwal.png")
      }
    // {
    //   name: "Simon Taufel",
    //   subName: "Retired Elite Cricket Umpire (2017)",
    //   img: require("../imgs/speakers/simon.jpg")
    // },
    // {
    //   name: "Danielle Feinberg",
    //   subName: "Director of Photography in Lighting, PIXAR (2018)",
    //   img: require("../imgs/speakers/DanielleFeinberg.jpg")
    // },
    // {
    //   name: "Kailash Satyarthi",
    //   subName: "Nobel Laureate in Peace (2015)",
    //   img: require("../imgs/speakers/satyarathi.jpeg")
    // }
  ];

  const speakers = document.getElementsByClassName("carousel-speaker")[0];
  pastSpeakers.forEach(
    speaker => {
      const wrap = document.createElement("div");
      wrap.classList.add("carousel-elem-pastspeakers");

      const speakerImg = document.createElement("div");
      speakerImg.classList.add("pastspeakers-img");
      speakerImg.style.background = `url(${speaker.img})`;
      speakerImg.style.backgroundSize = "cover";
      speakerImg.style.backgroundPosition = "center";

      const speakerName = document.createElement("div");
      speakerName.classList.add("pastspeakers-name");
      speakerName.innerHTML = speaker.name;

      const speakerSubName = document.createElement("div");
      speakerSubName.classList.add("pastspeakers-subname");
      speakerSubName.innerHTML = speaker.subName;

      wrap.appendChild(speakerImg);
      wrap.appendChild(speakerName);
      wrap.appendChild(speakerSubName);

      speakers.appendChild(wrap);
    }
  );

  const flkty2 = new flickity(
    '.carousel-speaker', {
      wrapAround: true,
      draggable: true,
      pageDots: false,
    }
  );

  setTimeout(function () {
    flkty2.reloadCells();
    flkty2.reloadCells();
    flkty2.next();
  }, 500);
}

init();
