const correctAnswers = ["E", "E", "E", "E"];
const form = document.querySelector(".queston-form");
const result = document.querySelector(".result"); //sonucu yazdırmak için

form.addEventListener("submit", (e) => {
  e.preventDefault(); //sayfa yenilenmesin aşağıdaki aksiyonları yapsın

  let score = 0;
  //cevapları karşılaştırma
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // console.log(score); score'u consolda görmek için 
  result.classList.remove("d-none");

  let puan = 0;
  const bastir = setInterval(() => {
    // bu result.querySelector seçmiştik yukarıda result adlı bir değişken onun içinden seçmek için ;
    result.querySelector("span").textContent = `${puan}%`;
    if (puan == score) {
      clearInterval(bastir);
    } else {
      puan++;
    }
  }, 10);
});

// SETINTERVAL KONU HATIRLATMASI ;

// önemli içerisindeki yazmış olduğumuz kod 1 kere çalışır.
// setTimeout(()=>{
//     console.log('Can');
// },2000)

// sürekli çalışır 1 sn de 1 sn
// setInterval(()=>{
//     console.log("Atakan")
// },1000)

// örnek
// let i = 0;
// const bastir = setInterval(()=>{
//     console.log("Atakan")
//     i++;
//     if(i==4){
//         clearInterval(bastir)
//     }
// },1000)
