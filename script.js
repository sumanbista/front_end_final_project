
//  sponsor logo 
const sponsorLogoContainer = document.createElement('div');
sponsorLogoContainer.id = 'sponsor-logo';
sponsorLogoContainer.classList.add('sponsor-logo');

const sponsorHeading = document.createElement('h2');
sponsorHeading.textContent = 'Our Sponsors';

sponsorLogoContainer.appendChild(sponsorHeading);

const sponsors = [
  {
    name: 'MRF Tyres',
    logoUrl: 'https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/ec719b27-9cd2-4636-9085-646f0e07b2cf/mrf-tyres-1.svg'
  },
  {
    name: 'Booking',
    logoUrl: 'https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/b0aa6dfb-931e-414d-b4f3-cd0c76e1fca2/booking.com_Light.svg'
  },
  {
    name:'Indusind Bank',
    logoUrl:'https://resources.pulse.icc-cricket.com/ICC/document/2023/09/27/5b8d4047-922d-44d2-bc67-f13e07a49a73/Induslnd_Bank.svg'  
  },
  {
    name:'Mastercard',
    logoUrl:'https://resources.pulse.icc-cricket.com/ICC/document/2023/08/23/f4c5fd86-2751-470f-b596-7925b1a0badb/Mastercard_light.svg'
  },
{
    name:'Aramco',
    logoUrl:'https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/e3a4013c-528f-453a-aed4-c173903ab85a/aramco.svg'
},
{
    name:'Emirates',    
    logoUrl:'https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/3eb26b23-9379-486d-b7f1-bac9964227e3/Emirates.svg'
}
];

sponsors.forEach(sponsor => {
  const sponsorItem = document.createElement('div');
  sponsorItem.classList.add('sponsor-item');

  const sponsorImage = document.createElement('img');
  sponsorImage.classList.add('sponsor-image');
  sponsorImage.src = sponsor.logoUrl;
  sponsorImage.alt = sponsor.name;

  sponsorItem.appendChild(sponsorImage);
  sponsorLogoContainer.appendChild(sponsorItem);
});

document.body.appendChild(sponsorLogoContainer);
let iccRankings = document.getElementById('icc-rankings');
iccRankings.innerHTML = '<h1>ICC Rankings</h2>';


async function fetchBatsmenRankings() {
    const url = 'https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings?category=batsmen&formatType=test&isWomen=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f187fbfa94msh0ed9a67ab0e000ap19013bjsn720364ede630',
            'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        displayTopBatsmenRankings(result);
    } catch (error) {
        console.error(error);
    }
}


function displayTopBatsmenRankings(data) {
    const rankingsElement = document.getElementById('batsmen-ranking');
    rankingsElement.innerHTML = '';

    data.rank.slice(0, 10).forEach(batsman => {
        const batsmanDiv = document.createElement('div');
        batsmanDiv.className = 'batsman-card';
        batsmanDiv.innerHTML = `
            <div class="batsman-name">${batsman.name} (${batsman.country})</div>
            <div class="batsman-details">
                <span>Rank: ${batsman.rank}</span>
                <span>Rating: ${batsman.rating}</span>

            </div>
        `;
        rankingsElement.appendChild(batsmanDiv);
    });
    let menRankings = document.getElementById('batsmen-ranking-conatiner');

    menRankings.style.display = 'block';
    let bowlerRankings = document.getElementById('bowler-ranking-conatiner');

    bowlerRankings.style.display = 'none';
}
var batsmenButton = document.getElementById('batsmen-ranking-button');
batsmenButton.addEventListener('click', fetchBatsmenRankings)

async function fetchTopBowlerRankings() {
    const url = 'https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings?category=bowlers&formatType=test&isWomen=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f187fbfa94msh0ed9a67ab0e000ap19013bjsn720364ede630',
            'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        displayTopBowlerRankings(result);
    } catch (error) {
        console.error(error);
    }
}

function displayTopBowlerRankings(data) {
    const rankingsElement = document.getElementById('bowler-ranking');
    rankingsElement.innerHTML = '';

    data.rank.slice(0, 10).forEach(bowler => {
        const bowlerDiv = document.createElement('div');
        bowlerDiv.className = 'bowler-card';
        bowlerDiv.innerHTML = `
            <div class="bowler-name">${bowler.name} (${bowler.country})</div>
            <div class="bowler-details">
                <span>Rank: ${bowler.rank}</span>
                <span>Rating: ${bowler.rating}</span>

            </div>
        `;
        rankingsElement.appendChild(bowlerDiv);
    });
    let bowlerRankings = document.getElementById('bowler-ranking-conatiner');

    bowlerRankings.style.display = 'block';
    let menRankings = document.getElementById('batsmen-ranking-conatiner');

    menRankings.style.display = 'none';
}
var bowlerButton = document.getElementById('bowler-ranking-button');
bowlerButton.addEventListener('click', fetchTopBowlerRankings)

fetchBatsmenRankings();
document.getElementById('batsmen-ranking-container').style.display = 'none';
document.getElementById('bowler-ranking-container').style.display = 'none';


// //  sponsor logo 
// const sponsorLogoContainer = document.createElement('div');
// sponsorLogoContainer.id = 'sponsor-logo';
// sponsorLogoContainer.classList.add('sponsor-logo');

// const sponsorHeading = document.createElement('h2');
// sponsorHeading.textContent = 'Our Sponsors';

// sponsorLogoContainer.appendChild(sponsorHeading);

// const sponsors = [
//   {
//     name: 'MRF Tyres',
//     logoUrl: 'https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/ec719b27-9cd2-4636-9085-646f0e07b2cf/mrf-tyres-1.svg'
//   },
//   {
//     name: 'Booking',
//     logoUrl: 'https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/b0aa6dfb-931e-414d-b4f3-cd0c76e1fca2/booking.com_Light.svg'
//   },
//   {
//     name:'Indusind Bank',
//     logoUrl:'https://resources.pulse.icc-cricket.com/ICC/document/2023/09/27/5b8d4047-922d-44d2-bc67-f13e07a49a73/Induslnd_Bank.svg'  
//   },
//   {
//     name:'Mastercard',
//     logoUrl:'https://resources.pulse.icc-cricket.com/ICC/document/2023/08/23/f4c5fd86-2751-470f-b596-7925b1a0badb/Mastercard_light.svg'
//   },
// {
//     name:'Aramco',
//     logoUrl:'https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/e3a4013c-528f-453a-aed4-c173903ab85a/aramco.svg'
// },
// {
//     name:'Emirates',    
//     logoUrl:'https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/3eb26b23-9379-486d-b7f1-bac9964227e3/Emirates.svg'
// }
// ];

// sponsors.forEach(sponsor => {
//   const sponsorItem = document.createElement('div');
//   sponsorItem.classList.add('sponsor-item');

//   const sponsorImage = document.createElement('img');
//   sponsorImage.classList.add('sponsor-image');
//   sponsorImage.src = sponsor.logoUrl;
//   sponsorImage.alt = sponsor.name;

//   sponsorItem.appendChild(sponsorImage);
//   sponsorLogoContainer.appendChild(sponsorItem);
// });

// document.body.appendChild(sponsorLogoContainer);
