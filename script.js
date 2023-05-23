const data = [{
  name: 'Amir Ali',
  skills: 'Master of English Language',
  details: 'Teach basic English skills including reading, writing, and speaking.',
  img: 'assets/Image/Teacher1.jpeg',
  alt: 'Amir Mohammad picture',
},
{
  name: 'Nora Habibi',
  skills: 'Master of English Language',
  details: 'Teach basic English skills including reading, writing, and speaking.',
  img: 'assets/Image/Teacher4.jpeg',
  alt: 'Nora Habibi Picture',
},
{
  name: 'Micale Jorden',
  skills: 'PHD of English language and percian language',
  details: 'Instruct students about the structure and content of the English language.',
  img: 'assets/Image/Teacher2.jpeg',
  alt: 'TMicale Jorden picture',
},
{
  name: 'Faati Noorzay',
  skills: 'PHD of English language and percian language',
  details: 'Instruct students about the structure and content of the English language.',
  img: 'assets/Image/Teacher5.jpeg',
  alt: 'Faati Noorzay picture',
},
{
  name: 'Basir Ahmadi',
  skills: 'Bachelor of English language and percian language',
  details: 'Teach basic English skills including reading, writing, and speaking.',
  img: 'assets/Image/Teacher3.jpeg',
  alt: 'Basir Ahmadi picture',
},
{
  name: 'Laila Ahmadi',
  skills: 'Bachelor of English language and percian language',
  details: 'Teach basic English skills including reading, writing, and speaking.',
  img: 'assets/Image/Teacher6.jpeg',
  alt: 'Laila Ahmadi picture',
},
];
const featureSection = document.querySelector('.feacherSpeakers');
const featureContainer = document.createElement('div');
featureContainer.innerHTML = `
<div class="container">
            <br><br>
            <div class="row text-center text-dark">
                <div class="col">
                    <h1>Features Teachers</h1>
                    <hr id="hr">
                </div>
            </div>
            <br><br>

            <div class="teacher-layout">
                <div class="mydiv">

                    <div class="teacher-item py-3">
                        <div class="teacher-img"><img src="${data[0].img}" alt="${data[0].alt}"></div>
                        <div class="teacher-disk">
                            <h4>${data[0].name}</h4>
                            <p class="text-danger">${data[0].skills}</p>
                            <hr id="hrT">
                            <p>${data[0].details}</p>
                        </div>
                    </div>

                    <div class="teacher-item py-3">
                        <div class="teacher-img"><img src="${data[1].img}" alt="${data[1].alt}"></div>
                        <div class="teacher-disk">
                            <h4>${data[1].name}</h4>
                            <p class="text-danger">${data[1].skills}</p>
                            <hr id="hrT">
                            <p>${data[1].details}</p>
                        </div>
                    </div>

                </div>

                <div class="hideMydiv">

                    <div class="teacher-item py-3">
                        <div class="teacher-img"><img src="${data[2].img}" alt="${data[2].alt}"></div>
                        <div class="teacher-disk">
                            <h4>${data[2].name}</h4>
                            <p class="text-danger">${data[2].skills}</p>
                            <hr id="hrT">
                            <p>${data[2].details}</p>
                        </div>
                    </div>

                    <div class="teacher-item py-3">
                        <div class="teacher-img"><img src="${data[3].img}" alt="${data[3].alt}"></div>
                        <div class="teacher-disk">
                            <h4>${data[3].name}</h4>
                            <p class="text-danger">${data[3].skills}</p>
                            <hr id="hrT">
                            <p>${data[3].details}</p>
                        </div>
                    </div>
                </div>

                <div class="hideMydiv2">

                    <div class="teacher-item py-3">
                        <div class="teacher-img"><img src="${data[4].img}" alt="${data[4].img}"></div>
                        <div class="teacher-disk">
                            <h4>${data[4].name}</h4>
                            <p class="text-danger">${data[4].skills}</p>
                            <hr id="hrT">
                            <p>${data[4].details}</p>
                        </div>
                    </div>

                    <div class="teacher-item py-3">
                        <div class="teacher-img"><img src="${data[5].img}" alt="${data[5].alt}"></div>
                        <div class="teacher-disk">
                            <h4>${data[5].name}</h4>
                            <p class="text-danger">${data[5].skills}</p>
                            <hr id="hrT">
                            <p>${data[5].details}</p>
                        </div>
                    </div>

                </div>

                <button class="btn btn-light d-block d-md-none border border-1 border-dark my-2 py-4 fw-bolder" id="moreBtn">See More &nbsp;&nbsp;<i class="fa fa-angle-down fw-red"></i></button>
                <button class="btn btn-light d-block d-md-none border border-1 border-dark my-2 py-4 d-none fw-bolder" id="lessBtn">See Less &nbsp;&nbsp;<i class="fa fa-angle-up fw-red"></i></button>

            </div>
        </div> 
       `;
featureSection.append(featureContainer);
const seeMoreBtn = document.getElementById('moreBtn');
const hideMydiv = document.querySelector('.hideMydiv');
const hideMydiv2 = document.querySelector('.hideMydiv2');

const seeLessBtn = document.getElementById('lessBtn');

seeMoreBtn.addEventListener('click', () => {
  hideMydiv.style.display = 'block';
  hideMydiv2.style.display = 'block';
  seeLessBtn.classList.remove('d-none');
  seeMoreBtn.classList.add('d-none');
});

seeLessBtn.addEventListener('click', () => {
  hideMydiv.style.display = 'none';
  hideMydiv2.style.display = 'none';
  window.location.reload();
  seeLessBtn.classList.add('d-none');
  seeMoreBtn.classList.remove('d-none');
});