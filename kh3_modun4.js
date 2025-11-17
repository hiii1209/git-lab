function initGallery() {
  console.log("Trang đã tải xong, onload kích hoạt!");
  const images = document.querySelectorAll('.interactive');

  for (let i = 0; i < images.length; i++) {
    const img = images[i];

    img.setAttribute('tabindex', '0');

    img.tabfocus = i + 1;

    img.addEventListener('focus', () => {
      console.log(`Hình ảnh ${i+1} được focus`);
      img.style.borderColor = '#ff9900';
    });
    img.addEventListener('blur', () => {
      console.log(`Hình ảnh ${i+1} mất focus`);
      img.style.borderColor = '#ccc';
    });

    img.addEventListener('mouseover', () => {
      console.log(`Chuột ở trên hình ảnh ${i+1}`);
    });
    img.addEventListener('mouseleave', () => {
      console.log(`Chuột rời khỏi hình ảnh ${i+1}`);
    });
  }
}

window.addEventListener('load', initGallery);
