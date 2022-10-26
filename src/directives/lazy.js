export default {
  inserted(el) {
    const imgSrc = el.src;
    console.log(imgSrc);
    el.src = "";
    // console.log(el);

    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        // console.log("触发了");
        el.src = imgSrc;
        observer.unobserve(el);
      }
    });
    observer.observe(el);
  },
};
