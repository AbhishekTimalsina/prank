const imgSrc =
  "https://as1.ftcdn.net/v2/jpg/02/20/98/04/1000_F_220980428_vpst8eyrAhIt4hSylq2xfaPpWPZDU9nF.jpg";

let imgElement = document.createElement("img");
imgElement.src = imgSrc;

function RandomNumberGenerator(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function RandomTimeGenerator() {
  return RandomNumberGenerator(10, 30) * 1000;
}

console.log(imgElement);
if (RandomNumberGenerator(0, 10) > 8) {
  const Add_Custom_Style = (css) =>
    (document.head.appendChild(document.createElement("style")).innerHTML =
      css);

  imgElement.classList.add("ghost-png_image--prank");
  setTimeout(() => {
    document.body.append(imgElement);
    Add_Custom_Style(`
     @keyframes enlarge{
      from {
         transform: scale(0) translate(-50%,-50%)
        }
      to {
        transform: scale(1.5)  translate(-50%,-50%)
        }
      }
  
      .ghost-png_image--prank {
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 50vh;
      left: 50vw;
      transform: translate(-50%,-50%) scale(0);
      animation-iteration-count: 1;
      isolation: isolate;
      animation-name: enlarge;
      animation-duration: .5s;
      z-index: 99999999999999999999999999999999999;
      transform-origin: 0 0;
    }`);
  }, RandomTimeGenerator());
} else {
  console.log("lucky guy");
}
