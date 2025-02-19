const img1 = document.querySelectorAll('.plus');
const img2 = document.querySelectorAll('.minus');
const text1 = document.querySelectorAll(".content");
const header1 = document.querySelectorAll(".headers");
text1.forEach((element, index) => {
    element.style.display = "none";
    img1[index].style.display = "block"; 
    img2[index].style.display = "none";  
});
header1.forEach((header, index) => {
    header.addEventListener("click", () => {
        const isVisible = text1[index].style.display === "block";
        text1.forEach((el, i) => {
            el.style.display = "none";
            img1[i].style.display = "block";
            img2[i].style.display = "none";
        });
        if (!isVisible) {
            text1[index].style.display = "block";
            img1[index].style.display = "none";
            img2[index].style.display = "block";
        }
    });
});

