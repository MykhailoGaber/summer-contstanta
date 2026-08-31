const mogged = document.querySelector(".button.mogged__btn");

const handleMogged = () => {
  alert("Вас освятил небесный десант чайки!");
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
};

mogged.addEventListener("click", handleMogged);
