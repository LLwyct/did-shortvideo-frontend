import * as React from 'react';
import './FeaturesList.style.scss';

/**
 * import img
 */
import shen from "../assets/shen.png";
import kua from '../assets/kua.png';
import shu from '../assets/shu.png';
import xing from '../assets/xing.png';
import wang from '../assets/wang.png';
import fang from '../assets/fang.png';
import Typography from '@material-ui/core/Typography';


interface Feature {
    img: string;
    title: string;
    content: string;
}

type FeaturesList = Array<Feature>;

const staticData: FeaturesList = [
  {
    img: shen,
    title: "身份标识符管理",
    content:
      "分布式身份标识的注册申请、生成可验证凭证、保证最小泄漏的证明机制以及对信息真实性的核实。",
  },
  {
    img: kua,
    title: "跨平台版权认定仲裁",
    content:
      "利用区块链技术为创作者上传的短视频提供唯一数字标识，使版权存证信息透明共享且无法篡改和删除，进而提高版权的公信力和司法效力。",
  },
  {
    img: shu,
    title: "数字身份信用体系",
    content:
      "数字身份与信用值相结合，构建信用体系。对于浏览者，根据信用，建立用户身份黑名单；不同的创作者具有不同的信用，提高对视频内容的审核效率。高信用的视频创作者的视频内容可以优先进入推荐页。",
  },
  {
    img: xing,
    title: "兴趣标签写作分析",
    content:
      "对单用户跨平台的兴趣话题进行关键字提取和多次校对,通过精细划分，得到最精准的用户兴趣标签。",
  },
  {
    img: wang,
    title: "网络环境安全监管",
    content:
      "在区块链上设计和实现符合法规的智能合约，惩罚视频创作者和恶意用户的恶意行为，营造绿色的上网环境，积极响应国家“净网行动”，构建网络空间的秩序。",
  },
  {
    img: fang,
    title: "防沉迷应用",
    content:
      "严格保证用户身份的真实性，发挥身份认证作用的同时，对虚假身份或是未成年身份开启保护和限制措施。",
  },
];

const App = () => {
    return (
        <ul className="feature-items-list">
            {
                staticData.map((item) => {
                    return (
                      <li className="feature-item" key={item.title}>
                        <img src={item.img} alt="avatar" />
                        <div>
                          <Typography variant="body1" component="h3">
                            {item.title}
                          </Typography>
                          <Typography variant="body2" component="p" color="textSecondary">
                            {item.content}
                          </Typography>
                        </div>
                      </li>
                    );
                })
            }
        </ul>
    )
}

export default App;