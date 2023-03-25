const influencersTitleImage = document.querySelector(
  '.S_Influencers > .O_RunningLine > .A_RunningLineImage > .Q_Image > img'
)

const moviesTitleImage = document.querySelector(
  '.S_Movies > .O_RunningLine > .A_RunningLineImage > .Q_Image > img'
)

import image1influencer from '../images/influencers/mainpage/billieeilish1.jpg'
import image2influencer from '../images/influencers/mainpage/freddymercury1.jpg'
import image3influencer from '../images/influencers/mainpage/harrystyles2.jpg'
import image4influencer from '../images/influencers/mainpage/jen1.jpg'
import image5influencer from '../images/influencers/mainpage/kanye1.jpg'
import image6influencer from '../images/influencers/mainpage/ladygaga1.jpg'
import image7influencer from '../images/influencers/mainpage/rihanna1.jpg'
import image8influencer from '../images/influencers/mainpage/timotheechalamet1.jpg'
import image9influencer from '../images/influencers/mainpage/zendaya1.jpg'
import image10influencer from '../images/influencers/mainpage/lilnasx1.png'

import image1movie from '../images/influencers/mainpage/devilwearsprada1.jpg'
import image2movie from '../images/influencers/mainpage/euphoria3.jpg'
import image3movie from '../images/influencers/mainpage/sexeducation3.jpg'
import image4movie from '../images/influencers/mainpage/sexandthecity3.jpg'

const imagesInfluencers = []

const imagesMovies = []

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function imagesInit() {
  imagesInfluencers.push(image1influencer)
  imagesInfluencers.push(image2influencer)
  imagesInfluencers.push(image3influencer)
  imagesInfluencers.push(image4influencer)
  imagesInfluencers.push(image5influencer)
  imagesInfluencers.push(image6influencer)
  imagesInfluencers.push(image7influencer)
  imagesInfluencers.push(image8influencer)
  imagesInfluencers.push(image9influencer)
  imagesInfluencers.push(image10influencer)

  imagesMovies.push(image1movie)
  imagesMovies.push(image2movie)
  imagesMovies.push(image3movie)
  imagesMovies.push(image4movie)

  const imageInfluencer = sample(imagesInfluencers)
  influencersTitleImage.src = imageInfluencer

  const imageMovie = sample(imagesMovies)
  moviesTitleImage.src = imageMovie
}

document.addEventListener('DOMContentLoaded', imagesInit())
