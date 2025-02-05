const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "💖 I’m so grateful you said yes to being my Valentine. I can’t wait to celebrate you and make this day unforgettable—just like you are to me.(Text me after reading this Pookie😘)";
  gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDBnaGc1NGZla2V1eHBycDk1OTR2ZjZ2YmNsb2k4a2s0bXE1N3hlZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vX1C2TejT6OCOz2kLd/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});