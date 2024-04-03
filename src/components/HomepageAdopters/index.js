import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import "./styles.module.css"
import Translate from '@docusaurus/Translate';


const AdopterList = [
  {
    Svg: require('@site/static/img/homepage/aliyun.png').default,
    url: "https://www.alibabacloud.com/"
  },
  {
    Svg: require('@site/static/img/homepage/tencentCloud.png').default,
    url: "https://intl.cloud.tencent.com/"
  },
  {
    Svg: require('@site/static/img/homepage/baidu.png').default,
    url: "https://cloud.baidu.com/"
  },
  {
    Svg: require('@site/static/img/homepage/mi.png').default,
    url: "https://www.mi.com/"
  },
  {
    Svg: "https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/bilibili.png",
    url: "https://www.bilibili.com/"
  },
  {
    Svg: "https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/dianxin.png",
    url: "https://www.chinatelecom-h.com/en/global/home.php"
  },
  {
    Svg: "https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/weibo.png",
    url: "https://weibo.com"
  },
  {
    Svg: require('@site/static/img/homepage/oppo.png').default,
    url: "https://www.oppo.com"
  },
  {
    Svg: require('@site/static/img/homepage/huya.png').default,
    url: "https://www.huya.com"
  },
  {
    Svg: "https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/360.png",
    url: "https://www.360.cn"
  },
  {
    Svg: require('@site/static/img/homepage/zte.png').default,
    url: "https://www.zte.com.cn"
  },
  {
    Svg: "https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/boss.png",
    url: "https://www.zhipin.com"
  },
  {
    Svg: require('@site/static/img/homepage/disifanshi.png').default,
    url: "http://www.4paradigm.com"
  },
  {
    Svg: "https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/yunzhishen.png",
    url: "https://www.unisound.com"
  },
  {
    Svg: require('@site/static/img/homepage/metabit.png').default,
    url: "https://www.metabit-trading.com"
  },
  {
    Svg: require('@site/static/img/homepage/cloudview.png').default,
    url: "https://www.cloudview.com"
  },
  {
    Svg: "https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/zuoyebang.png",
    url: "https://www.zybang.com"
  },
  {
    Svg: require('@site/static/img/homepage/more.png').default,
    url: "community/adopters"
  }
]

function Adopter({Svg, url}) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.adopterSvg}>
        <div className={styles.elimage}>
          <a href={url} target="_blank">
            <img src={Svg}  className={styles.elimageinner}/>
          </a>
        </div>      
      </div>
    </div>
  );
}

export default function HomepageAdopters() {
  return (
    <section className={styles.adopters}>
      <div className="container hero__title">
          <h1>
            <Translate>Adopters</Translate>
          </h1>
        </div>
      <div className="container">
        <div className="row">
          {AdopterList.map((props, idx) => (
            <Adopter key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}