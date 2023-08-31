const catagorigeHandle = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  showCatagory(data);
};

const showCatagory = (data) => {

    const parent1 = document.getElementById('catagoryParent')
  
  data.data.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('flex',)
    div.innerHTML = `
    <button class="py-2 px-4 bg-[#25252533] rounded-md">${element.category}</button>
    `
    parent1.appendChild(div)
  });
};
catagorigeHandle();
