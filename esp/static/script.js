function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     
./static/male0001.png
./static/male0002.png
./static/male0003.png
./static/male0004.png
./static/male0005.png
./static/male0006.png
./static/male0007.png
./static/male0008.png
./static/male0009.png
./static/male0010.png
./static/male0011.png
./static/male0012.png
./static/male0013.png
./static/male0014.png
./static/male0015.png
./static/male0016.png
./static/male0017.png
./static/male0018.png
./static/male0019.png
./static/male0020.png
./static/male0021.png
./static/male0022.png
./static/male0023.png
./static/male0024.png
./static/male0025.png
./static/male0026.png
./static/male0027.png
./static/male0028.png
./static/male0029.png
./static/male0030.png
./static/male0031.png
./static/male0032.png
./static/male0033.png
./static/male0034.png
./static/male0035.png
./static/male0036.png
./static/male0037.png
./static/male0038.png
./static/male0039.png
./static/male0040.png
./static/male0041.png
./static/male0042.png
./static/male0043.png
./static/male0044.png
./static/male0045.png
./static/male0046.png
./static/male0047.png
./static/male0048.png
./static/male0049.png
./static/male0050.png
./static/male0051.png
./static/male0052.png
./static/male0053.png
./static/male0054.png
./static/male0055.png
./static/male0056.png
./static/male0057.png
./static/male0058.png
./static/male0059.png
./static/male0060.png
./static/male0061.png
./static/male0062.png
./static/male0063.png
./static/male0064.png
./static/male0065.png
./static/male0066.png
./static/male0067.png
./static/male0068.png
./static/male0069.png
./static/male0070.png
./static/male0071.png
./static/male0072.png
./static/male0073.png
./static/male0074.png
./static/male0075.png
./static/male0076.png
./static/male0077.png
./static/male0078.png
./static/male0079.png
./static/male0080.png
./static/male0081.png
./static/male0082.png
./static/male0083.png
./static/male0084.png
./static/male0085.png
./static/male0086.png
./static/male0087.png
./static/male0088.png
./static/male0089.png
./static/male0090.png
./static/male0091.png
./static/male0092.png
./static/male0093.png
./static/male0094.png
./static/male0095.png
./static/male0096.png
./static/male0097.png
./static/male0098.png
./static/male0099.png
./static/male0100.png
./static/male0101.png
./static/male0102.png
./static/male0103.png
./static/male0104.png
./static/male0105.png
./static/male0106.png
./static/male0107.png
./static/male0108.png
./static/male0109.png
./static/male0110.png
./static/male0111.png
./static/male0112.png
./static/male0113.png
./static/male0114.png
./static/male0115.png
./static/male0116.png
./static/male0117.png
./static/male0118.png
./static/male0119.png
./static/male0120.png
./static/male0121.png
./static/male0122.png
./static/male0123.png
./static/male0124.png
./static/male0125.png
./static/male0126.png
./static/male0127.png
./static/male0128.png
./static/male0129.png
./static/male0130.png
./static/male0131.png
./static/male0132.png
./static/male0133.png
./static/male0134.png
./static/male0135.png
./static/male0136.png
./static/male0137.png
./static/male0138.png
./static/male0139.png
./static/male0140.png
./static/male0141.png
./static/male0142.png
./static/male0143.png
./static/male0144.png
./static/male0145.png
./static/male0146.png
./static/male0147.png
./static/male0148.png
./static/male0149.png
./static/male0150.png
./static/male0151.png
./static/male0152.png
./static/male0153.png
./static/male0154.png
./static/male0155.png
./static/male0156.png
./static/male0157.png
./static/male0158.png
./static/male0159.png
./static/male0160.png
./static/male0161.png
./static/male0162.png
./static/male0163.png
./static/male0164.png
./static/male0165.png
./static/male0166.png
./static/male0167.png
./static/male0168.png
./static/male0169.png
./static/male0170.png
./static/male0171.png
./static/male0172.png
./static/male0173.png
./static/male0174.png
./static/male0175.png
./static/male0176.png
./static/male0177.png
./static/male0178.png
./static/male0179.png
./static/male0180.png
./static/male0181.png
./static/male0182.png
./static/male0183.png
./static/male0184.png
./static/male0185.png
./static/male0186.png
./static/male0187.png
./static/male0188.png
./static/male0189.png
./static/male0190.png
./static/male0191.png
./static/male0192.png
./static/male0193.png
./static/male0194.png
./static/male0195.png
./static/male0196.png
./static/male0197.png
./static/male0198.png
./static/male0199.png
./static/male0200.png
./static/male0201.png
./static/male0202.png
./static/male0203.png
./static/male0204.png
./static/male0205.png
./static/male0206.png
./static/male0207.png
./static/male0208.png
./static/male0209.png
./static/male0210.png
./static/male0211.png
./static/male0212.png
./static/male0213.png
./static/male0214.png
./static/male0215.png
./static/male0216.png
./static/male0217.png
./static/male0218.png
./static/male0219.png
./static/male0220.png
./static/male0221.png
./static/male0222.png
./static/male0223.png
./static/male0224.png
./static/male0225.png
./static/male0226.png
./static/male0227.png
./static/male0228.png
./static/male0229.png
./static/male0230.png
./static/male0231.png
./static/male0232.png
./static/male0233.png
./static/male0234.png
./static/male0235.png
./static/male0236.png
./static/male0237.png
./static/male0238.png
./static/male0239.png
./static/male0240.png
./static/male0241.png
./static/male0242.png
./static/male0243.png
./static/male0244.png
./static/male0245.png
./static/male0246.png
./static/male0247.png
./static/male0248.png
./static/male0249.png
./static/male0250.png
./static/male0251.png
./static/male0252.png
./static/male0253.png
./static/male0254.png
./static/male0255.png
./static/male0256.png
./static/male0257.png
./static/male0258.png
./static/male0259.png
./static/male0260.png
./static/male0261.png
./static/male0262.png
./static/male0263.png
./static/male0264.png
./static/male0265.png
./static/male0266.png
./static/male0267.png
./static/male0268.png
./static/male0269.png
./static/male0270.png
./static/male0271.png
./static/male0272.png
./static/male0273.png
./static/male0274.png
./static/male0275.png
./static/male0276.png
./static/male0277.png
./static/male0278.png
./static/male0279.png
./static/male0280.png
./static/male0281.png
./static/male0282.png
./static/male0283.png
./static/male0284.png
./static/male0285.png
./static/male0286.png
./static/male0287.png
./static/male0288.png
./static/male0289.png
./static/male0290.png
./static/male0291.png
./static/male0292.png
./static/male0293.png
./static/male0294.png
./static/male0295.png
./static/male0296.png
./static/male0297.png
./static/male0298.png
./static/male0299.png
./static/male0300.png

 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})