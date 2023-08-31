// catagory api ---------------->

const catagorigeHandle = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  showCatagory(data);
};

// catagory showing ----------->

const showCatagory = (data) => {
  const parent1 = document.getElementById("catagoryParent");

  data.data.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("flex");
    div.innerHTML = `
    <button onclick="clickedCatagory('${element.category_id}')" class="py-2 px-4 bg-[#25252533] rounded-md">${element.category}</button>
    `;
    parent1.appendChild(div);
  });
};

// dynamic catagory clicked---------->

const clickedCatagory = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  showVideo(data);
};

// showing videos function

const showVideo = (data) => {
  const parent2 = document.getElementById("videosEl");
  
  parent2.innerHTML = '';
  
  if (data.data.length === 0) {
    const div1 = document.createElement("div");
    div1.classList.add(
      "flex",
      "space-y-2",
      "justify-center",
      "items-center",
      "flex-col",
      "h-[60vh]",
      'absolute',
      'top-[30%]',
      'w-[90%]',
      'mx-auto'
    );
    div1.innerHTML = `
        <img src="./img/Icon.png" class="w-32" alt="">
            <h1 class="text-3xl text-center font-bold">Oops!! Sorry, There is no <br> content here</h1>
        `;
        parent2.appendChild(div1);
  }
   else {
    data.data.forEach((element) => {
        const div2 = document.createElement("div");
    div2.classList.add("card", "rounded-md");
    div2.innerHTML = `
    <figure><img src="${element.thumbnail}" class="h-52 w-[100%] rounded-md" alt="Shoes" /></figure>
            <div class="flex mt-4 gap-3">
              <div class="w-[20%]"><img src="${element.authors[0].profile_picture}" class=" w-11 h-11 rounded-full" alt="">
            
            </div class="w-[75%]">
              <div>
                <h1 class="text-lg font-bold">${element.title}</h1>
                <p class="text-[#171717b3]">${element.authors[0].profile_name} <span>${element.authors[0]?.verified}</span></p>
                <p class="text-[#171717b3]"><span>${element.others.views}</span> views</p>
            </div>
            </div>
    `;
    parent2.appendChild(div2)
    })
  }
};

catagorigeHandle();

clickedCatagory('1000')