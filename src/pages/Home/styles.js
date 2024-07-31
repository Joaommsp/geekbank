import styled from "styled-components";

import background from "../../assets/images/homeBg.png";
import aboutAppBackground from "../../assets/images/aboutAppBg.png";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-image: url(${background});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;

  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    background-image: none;
    background-attachment: scroll;
    background-position: center;
    background-size: contain;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 8rem 2rem 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .heroTextContainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .heroTextContainer h3 {
    color: #2f4149;
    font-weight: 400;
    -webkit-animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .heroTextContainer h1 {
    color: #f70627;
    font-size: 5rem;
    font-weight: 500;
    -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  .heroTextContainer h2 {
    color: #0e0e0e;
    font-weight: 400;
    margin-bottom: 2rem;
    -webkit-animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .heroTextContainer strong {
    font-weight: 500;
  }

  .downloadTheApp {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    margin-bottom: 4rem;
  }

  .downloadTheApp img {
    width: 24px;
  }

  .downloadTheApp a {
    text-decoration: none;
    color: #2f4149;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .satisfactionImage {
    width: 256px;
  }

  .heroImageContainer {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    -webkit-animation: slide-in-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .geekBankMockUp01 {
    width: 100%;
    max-width: 556px;
    -webkit-animation: vibrate-1 5s linear infinite alternate both;
    animation: vibrate-1 5s linear infinite alternate both;
  }

  .geekBankMockUp01:hover {
    cursor: pointer;
  }

  @-webkit-keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  @-webkit-keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
    padding: 4rem 1rem 2rem 1rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    .heroTextContainer {
      width: 100%;
    }

    .heroTextContainer h3 {
      font-size: 1rem;
    }

    .heroTextContainer h1 {
      font-size: 2.6rem;
    }

    .heroTextContainer h2 {
      font-size: 1.2rem;
      margin-bottom: 4rem;
    }

    .downloadTheApp {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      margin-bottom: 4rem;
    }

    .downloadTheApp img {
      width: 18px;
    }

    .downloadTheApp a {
      text-decoration: none;
      color: #2f4149;
      font-size: 0.875rem;
      font-weight: 500;
      font-size: 0.8rem;
    }

    .satisfactionImage {
      width: 164px;
    }

    .heroImageContainer {
      margin-top: 4rem;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
    }

    .geekBankMockUp01 {
      width: 100%;
      max-width: 556px;
      -webkit-animation: vibrate-1 5s linear infinite alternate both;
      animation: vibrate-1 5s linear infinite alternate both;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 4rem 4rem 2rem 4em;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    .heroTextContainer {
      width: 100%;
    }

    .heroTextContainer h3 {
      font-size: 1.5rem;
    }

    .heroTextContainer h1 {
      font-size: 3.8rem;
    }

    .heroTextContainer h2 {
      font-size: 1.2rem;
      margin-bottom: 4rem;
    }

    .downloadTheApp {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      margin-bottom: 4rem;
    }

    .downloadTheApp img {
      width: 24px;
    }

    .downloadTheApp a {
      text-decoration: none;
      color: #2f4149;
      font-size: 0.875rem;
      font-weight: 500;
      font-size: 0.8rem;
    }

    .satisfactionImage {
      width: 264px;
    }

    .heroImageContainer {
      margin-top: 4rem;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
    }

    .geekBankMockUp01 {
      width: 80%;
      max-width: 556px;
      -webkit-animation: vibrate-1 5s linear infinite alternate both;
      animation: vibrate-1 5s linear infinite alternate both;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 4rem 5rem 2rem 5rem;

    gap: 56px;
  }

  @media (max-width: 1024px) {
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  padding: 4rem 8rem 6rem 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .benefitsTitle {
    font-size: 1.5rem;
    font-weight: 500;
    color: #0e0e0e;
    margin-bottom: 2rem;
  }

  .benetitsCardsContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 56px;
  }

  @media (max-width: 576px) {
    padding: 2rem 2rem 4rem 2rem;

    .benetitsCardsContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 56px;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 2rem 4rem 4rem 4rem;

    .benetitsCardsContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 28px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 2rem 5rem 4rem 5rem;

    .benetitsCardsContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 28px;
    }
  }

  @media (max-width: 1024px) {
    background-color: transparent;
  }
`;

export const AboutAppContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 4rem 10rem;

  background-image: url(${aboutAppBackground});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .mockUpcontainer {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .mockUpAboutApp {
    width: 100%;
    max-width: 306px;
    -webkit-animation: vibrate-1 5s linear infinite alternate both;
    animation: vibrate-1 5s linear infinite alternate both;
  }

  .aboutAppTextContainer {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .aboutAppTitle {
    font-size: 2rem;
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 2rem;
    letter-spacing: 1px;
  }

  .aboutAppText {
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.8rem;
    margin-bottom: 2rem;
    font-weight: 300;
  }

  .aboutDashboardTitle {
    color: #ffffff;
    font-weight: 500;
  }

  .iconsContainer {
    display: flex;
    gap: 16px;
    margin-bottom: 2rem;
  }

  .iconContainer {
    background-color: #fdfdfd;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
  }

  .icon {
    width: 46px;
  }

  .downloadAppLink {
    width: fit-content;
    background-color: #fdfdfd;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 16px;
    border-radius: 50px;
  }

  .downloadAppLink img {
    width: 32px;
  }

  .downloadAppLink span {
    color: #2f4149;
    font-weight: 500;
  }

  .textContainer p:nth-of-type(2) {
    margin-bottom: 4rem;
  }

  @-webkit-keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 100%;

    padding: 4rem 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-position: right;

    .mockUpcontainer {
      order: 2;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .mockUpAboutApp {
      max-width: 256px;
    }

    .icon {
      width: 24px;
    }

    .aboutAppTextContainer {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .aboutAppTitle {
      font-size: 1.5rem;
    }

    .aboutAppText {
      font-size: 0.875rem;
      color: #ffffff;
      line-height: 1.5rem;
      margin-bottom: 2rem;
      font-weight: 300;
    }

    .downloadAppLink {
      width: 100%;
      background-color: #fdfdfd;
      padding: 0.8rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      gap: 16px;
      border-radius: 50px;
      margin-bottom: 4rem;
    }

    .downloadAppLink img {
      width: 18px;
    }

    .downloadAppLink span {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    height: 100%;

    padding: 4rem 4rem;
    align-items: center;
    justify-content: center;
    gap: 56px;

    background-position: right;

    .mockUpcontainer {
      order: 2;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .mockUpAboutApp {
      max-width: 256px;
    }

    .icon {
      width: 24px;
    }

    .aboutAppTextContainer {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .aboutAppTitle {
      font-size: 1.5rem;
    }

    .aboutAppText {
      font-size: 0.875rem;
      color: #ffffff;
      line-height: 1.5rem;
      margin-bottom: 2rem;
      font-weight: 300;
    }

    .downloadAppLink {
      width: 100%;
      background-color: #fdfdfd;
      padding: 0.8rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      gap: 16px;
      border-radius: 50px;
      margin-bottom: 4rem;
    }

    .downloadAppLink img {
      width: 18px;
    }

    .downloadAppLink span {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: 100%;

    padding: 4rem 5rem;
    align-items: center;
    justify-content: center;
    gap: 56px;

    background-position: right;

    .mockUpcontainer {
      order: 2;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .mockUpAboutApp {
      max-width: 256px;
    }

    .icon {
      width: 32px;
    }

    .aboutAppTextContainer {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .aboutAppTitle {
      font-size: 2rem;
    }

    .aboutAppText {
      font-size: 0.875rem;
      color: #ffffff;
      line-height: 1.5rem;
      margin-bottom: 2rem;
      font-weight: 300;
    }

    .downloadAppLink {
      width: 100%;
      background-color: #fdfdfd;
      padding: 0.8rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      gap: 16px;
      border-radius: 50px;
      margin-bottom: 4rem;
    }

    .downloadAppLink img {
      width: 18px;
    }

    .downloadAppLink span {
      font-size: 0.8rem;
    }
  }
`;

export const CredicardsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ededed;

  padding: 4rem 8rem;

  .card01Container,
  .card02Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cardImage {
    width: 386px;
    -webkit-animation: vibrate-1 3s linear infinite alternate both;
    animation: vibrate-1 3s linear infinite alternate both;
  }

  .card01TextContainer {
    width: 50%;
    height: 100%;
  }

  .cardName {
    font-size: 2rem;
    color: #0e0e0e;
    margin-bottom: 1rem;
  }

  .blackcardText strong {
    color: #f70627;
  }

  .gamePlataformsContainer {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;

    margin-top: 2rem;
  }

  .gamePlatForm {
    width: 42px;
  }

  @-webkit-keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  @media (max-width: 576px) {
    padding: 4rem 1rem;

    .card01Container,
    .card02Container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .card01Container {
      margin-bottom: 4rem;
    }

    .card01TextContainer {
      width: 100%;
      height: 50%;
      margin-bottom: 2rem;
    }

    .cardImage {
      width: 100%;
      order: 2;
    }

    .gamePlatForm {
      width: 24px;
    }

    .cardName {
      font-size: 1.5rem;
    }

    .cardText,
    .blackcardText {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 4rem 4rem;

    .card01Container,
    .card02Container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 56px;
    }

    .card01Container {
      margin-bottom: 4rem;
    }

    .card01TextContainer {
      width: 100%;
      height: 50%;
      margin-bottom: 2rem;
    }

    .cardImage {
      width: 100%;
      max-width: 256px;
    }

    .gamePlatForm {
      width: 24px;
    }

    .cardName {
      font-size: 1.5rem;
    }

    .cardText,
    .blackcardText {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 4rem 5rem;

    .card01Container,
    .card02Container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 56px;
    }

    .card01Container {
      margin-bottom: 4rem;
    }

    .card01TextContainer {
      width: 100%;
      height: 50%;
      margin-bottom: 2rem;
    }

    .cardImage {
      width: 100%;
      max-width: 256px;
    }

    .gamePlatForm {
      width: 24px;
    }

    .cardName {
      font-size: 1.5rem;
    }

    .cardText,
    .blackcardText {
      font-size: 0.875rem;
    }
  }
`;

export const AppFeedBackContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: #fdfdfd;

  padding: 4rem 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .appFeedBackTitle {
    font-size: 1.5rem;
    color: #0e0e0e;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .appFeedBackAbout {
    font-size: 1rem;
    color: #b4b4b4;
    text-align: center;
    display: block;
    margin-bottom: 4rem;
  }

  .feedBackCardsContainer {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 24px;
    overflow-x: visible;
    overflow-y: hidden;
  }

  .feedBackCardsContainer::-webkit-scrollbar {
    display: none;
  }

  .feedBackCardsContainer {
    scrollbar-width: none;
  }

  .feedBackCardsContainer:hover {
    cursor: pointer;
  }

  @media (max-width: 576px) {
    padding: 4rem 1rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 4rem 4rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 4rem 5rem;
  }
`;

export const DownloadAreaContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fdfdfd;
  padding: 2rem 8rem 2rem 8rem;

  .dowloadContainer {
    width: 100%;
    height: 100%;
    min-height: 256px;
    display: flex;
    background-color: #fa3440;
    padding: 4rem;
    border-radius: 32px;
  }

  .downloadTextContainer {
    width: 50%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .downloadTitle {
    font-size: 2rem;
    color: #fdfdfd;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .downloadText {
    color: #fdfdfd;
    font-size: 1rem;
    font-weight: 300;
  }

  .dowloadsLinksContainer {
    width: 50%;
    min-height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 56px;
  }

  .downloadLink {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .storeIcon {
    width: 42px;
  }

  .linkText {
    display: flex;
    flex-direction: column;
  }

  .linkText span:first-of-type {
    font-size: 0.875rem;
    color: #fdfdfd;
    font-weight: 200;
  }

  .storeName {
    font-size: 1.25rem;
    color: #fdfdfd;
  }

  @media (max-width: 576px) {
    padding: 2rem 1rem 2rem 1rem;

    .dowloadContainer {
      width: 100%;
      height: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      background-color: #fa3440;
      padding: 2rem;
      border-radius: 32px;
    }

    .downloadTextContainer {
      width: 100%;
      height: 50%;
      margin-bottom: 2rem;
    }

    .dowloadsLinksContainer {
      width: 100%;
      min-height: 50%;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }

    .storeIcon {
      width: 32px;
    }

    .storeName {
      font-size: 1rem;
    }

    .downloadTitle {
      font-size: 1.5rem;
    }

    .downloadText {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 2rem 4rem 2rem 4rem;

    .dowloadContainer {
      width: 100%;
      height: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      background-color: #fa3440;
      padding: 2rem;
      border-radius: 32px;
    }

    .downloadTextContainer {
      width: 100%;
      height: 50%;
      margin-bottom: 2rem;
    }

    .dowloadsLinksContainer {
      width: 100%;
      min-height: 50%;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }

    .storeIcon {
      width: 32px;
    }

    .storeName {
      font-size: 1rem;
    }

    .downloadTitle {
      font-size: 1.5rem;
    }

    .downloadText {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 2rem 4rem 2rem 4rem;

    .dowloadContainer {
      width: 100%;
      height: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      background-color: #fa3440;
      padding: 2rem;
      border-radius: 32px;
    }

    .downloadTextContainer {
      width: 100%;
      height: 50%;
      margin-bottom: 2rem;
    }

    .dowloadsLinksContainer {
      width: 100%;
      min-height: 50%;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }

    .storeIcon {
      width: 32px;
    }

    .storeName {
      font-size: 1rem;
    }

    .downloadTitle {
      font-size: 1.5rem;
    }

    .downloadText {
      font-size: 0.875rem;
    }
  }
`;

export const ParternsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem 8rem;
  background-color: #fdfdfd;

  .partnersTitle {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .partners {
    display: flex;
    gap: 74px;
  }

  .partner {
    width: 56px;
  }

  @media (max-width: 576px) {
    padding: 2rem 1rem;

    .partners {
      display: flex;
      gap: 74px;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }

    .partner {
      width: 36px;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 2rem 1rem;

    .partners {
      display: flex;
      gap: 74px;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }

    .partner {
      width: 36px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 2rem 5rem;

    .partners {
      display: flex;
      gap: 74px;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }

    .partner {
      width: 36px;
    }
  }
`;

export const MyLink = styled.div`
  position: fixed;

  width: fit-content;
  height: fit-content;

  background-color: #fdfdfd;

  padding: 0.5rem 0.5rem 0.1rem 0.5rem;

  border: 2px solid #ee4e4e;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  right: 1rem;
  bottom: 1rem;

  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  img {
    width: 56px;
  }

  @media (max-width: 1024px) {
    img {
      width: 36px;
    }
  }
`;
