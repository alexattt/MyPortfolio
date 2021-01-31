window.addEventListener("resize", function() {
  if (window.innerWidth < 1024) resize.classList.remove("transform:translateX(0%);")
                                                .remove("transform:translateX(-300%)");
});