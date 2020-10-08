import * as React from 'react';
import './Home.style.scss';
import SectionTitle from '../../components/SectionTitle';
import FeaturesList from '../../components/FeaturesList';
import Card from '../../components/Card';
import Copyright from '../../components/CopyRight';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

/**
 * import componany brand
 */
import whatisdidvideo from "../../assets/whatisdid.mp4";
import tiktok from '../../assets/tiktok-brands.svg';
import lishipin from "../../assets/lishipin.png";
import weishi from "../../assets/weishi.png";
import kuaishou from "../../assets/kuaishou.png";
import xiguashipin from "../../assets/xiguashipin.png";
import bilibili from "../../assets/bilibili.png";

interface IProps {
  component: any;
  colorMode?: string
}
const Home = (props: IProps) => {
  const history = useHistory();

  const addSideNavController = () => {
    const board: HTMLElement | null = document.querySelector(".App-board");
    const sideNav: HTMLElement | null = document.querySelector(".side-nav");
    if (board !== null && sideNav !== null) {
      let observer: IntersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting === false) {
              sideNav.classList.add("sidenav-show");
            }
            if (entry.isIntersecting === true) {
              sideNav.classList.remove("sidenav-show");
            }
          });
        },
        {
          threshold: 0.35,
        }
      );
      observer.observe(board);
    }
  }
  const getStartedButtonClick = () => {
    history.push("/register");
  }
  React.useEffect(() => {
    // 控制侧边导航的显示与否
    addSideNavController();

  }, []);
  return (
    <>
      <props.component colorMode={props.colorMode} />
      <div className="side-nav">
        <div>
          <p>
            <a href="#1">What is DID</a>
          </p>
        </div>
        <div>
          <p>
            <a href="#2">What can our platform provide you?</a>
          </p>
        </div>
        <div>
          <p>
            <a href="#3">How about our production ?</a>
          </p>
        </div>
        <div>
          <p>
            <a href="#4">Currently supported plantforms</a>
          </p>
        </div>
      </div>
      <section className="App-board">
        <div className="golbal__container">
          <div className="App-board-in">
            <h1>DID-Based Short Video Joint Control Platform</h1>
            <Typography variant="body1" component="p">
              基于区块链技术的分布式身份标识短视频联合管控平台。致力于解决目前短视频领域常见的用户身份中心化管理、强化版权司法效力、改善视频质量良莠不齐、协作发掘用户兴趣点等。为短视频平台的视频创作者和用户提供更好的短视频发布及使用体验
            </Typography>
            <button onClick={getStartedButtonClick}>
              <span>get started</span>
            </button>
          </div>
        </div>
      </section>
      <section id="1">
        <div className="golbal__container">
          <div className="what-is-did">
            <SectionTitle name="What is DID ?"></SectionTitle>
            <video src={whatisdidvideo} controls></video>
          </div>
        </div>
      </section>
      <section id="2">
        <div className="golbal__container">
          <div className="what-provide">
            <SectionTitle name="What can our platform provide you?"></SectionTitle>
            <FeaturesList></FeaturesList>
          </div>
        </div>
      </section>
      <section id="3">
        <div className="golbal__container">
          <div className="video-demo">
            <SectionTitle name="How about our production ?"></SectionTitle>
          </div>
        </div>
      </section>
      <section id="4">
        <div className="golbal__container">
          <div className="support-plantforms">
            <SectionTitle name="Currently supported plantforms"></SectionTitle>
            <div className="cards-list">
              {staticCardsData.map((v) => {
                return (
                  <Card
                    img={v.img}
                    title={v.title}
                    intro={v.intro}
                    key={v.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <footer className="App-footer">
        <div className="left"></div>
        <div
          className="mid"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ textAlign: "center", marginBottom: "30px" }}
            gutterBottom
          >
            团队：XDUGenesis<br></br>
            项目开源：
            <Typography
              component="a"
              color="inherit"
              href="https://github.com/XDUGenesis/WeIdentity-ShortVideo"
            >
              https://github.com/XDUGenesis/WeIdentity-ShortVideo
            </Typography>
            <br></br>
            邮箱：resistantcolli@163.com
          </Typography>
          <Copyright></Copyright>
        </div>
        <div className="right"></div>
      </footer>
    </>
  );
}

const staticCardsData = [
  {
    img: tiktok,
    title: "抖音",
    intro:
      "抖音短视频，是由今日头条孵化的一款音乐创意短视频社交软件，该软件于2016年9月20日上线，是一个面向全年龄的音乐短视频社区平台。用户可以通过这款软件选择歌曲，拍摄音乐短视频，形成自己的作品，会根据用户的爱好，来更新用户喜爱的视频。",
  },
  {
    img: lishipin,
    title: "梨视频",
    intro:
    "梨视频上线，定位为主打资讯阅读的短视频产品。梨视频大部分视频时长在30秒到3分钟之间，力求展现新闻事件最精华的内容，偶有的一些纪录片也多在10分钟的篇幅内。",
  },
  {
    img: weishi,
    title: "微视",
    intro:
    "微视，腾讯旗下短视频创作平台与分享社区，用户不仅可以在微视上浏览各种短视频,同时还可以通过创作短视频来分享自己的所见所闻。此外,微视还结合了微信和QQ等社交平台,用户可以将微视上的视频分享给好友和社交平台。",
  },
  {
    img: kuaishou,
    title: "快手",
    intro:
    "快手是北京快手科技有限公司旗下的产品。诞生于2011年3月，最初是一款用来制作、分享GIF图片的手机应用。2012年11月，快手从纯粹的工具应用转型为短视频社区，用于用户记录和分享生产、生活的平台。",
  },
  {
    img: xiguashipin,
    title: "西瓜视频",
    intro:
    "西瓜视频是字节跳动旗下的个性化推荐视频平台，以“点亮对生活的好奇心”为slogan，由今日头条孵化。西瓜视频通过人工智能帮助每个人发现自己喜欢的视频，并帮助视频创作人们轻松地向全世界分享自己的视频作品。",
  },
  {
    img: bilibili,
    title: "哔哩哔哩动画",
    intro:
    "哔哩哔哩（bilibili）现为国内领先的年轻人文化社区，该网站于2009年6月26日创建，被粉丝们亲切的称为“B站”。B站的特色是悬浮于视频上方的实时评论功能，爱好者称其为“弹幕”，这种独特的视频体验让基于互联网的弹幕能够超越时空限制，构建出一种奇妙的共时性的关系，形成一种虚拟的部落式观影氛围，让B站成为极具互动分享和二次创造的文化社区。",
  },
];


export default Home;