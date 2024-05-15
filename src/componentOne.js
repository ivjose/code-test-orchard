import data from "./data/componentOne.json";

export function componentOne() {

  document.querySelector("#id-component-one").innerHTML = `
        <section class="max-w-7xl mx-auto pt-24  md:pt-48 px-8">
            <div class="grid rid-cols-1 lg:grid-cols-3 lg:auto-cols-max  gap-5">
                ${data.images.map((image, index) => {
                    if (index === 0)
                        return `<div  data-aos-duration="500"  data-aos="flip-right" data-aos-delay="300">
                                <a href="#" id=${`id-component-one-${image.id}`}>
                                    <img  class="w-full" src=${`img/component-01/${image.img.md}`} alt="Elva dressed as a fairy" />
                                </a>
                            </div>
                        `
                }).join('')}

                <div class="grid grid-rows-2 gap-5">
                    ${data.images.map((image, index) => {
                        if (index !== 0)
                            return `<div  data-aos-duration="1000"  data-aos="flip-right" data-aos-delay="600">
                                    <a href="#" id=${`id-component-one-${image.id}`}>
                                        <img class="w-full" src=${`img/component-01/${image.img.md}`} alt="Elva dressed as a fairy" />
                                    </a>
                                </div>
                            `
                    }).join('')}
                </div>
                <div data-aos="fade-up" data-aos-mirror="true"  data-aos-duration="500" data-aos-delay="1200">
                    <div class="pb-10 text-white" >
                        <h2 class="text-2xl ">${data.title}</h2>
                        <hr class="h-px my-4 bg-gray-200 border-1 dark:bg-gray-700">
                        <p class="text-xl pt-4 font-light ">${data.descriptions}</p>
                    </div>
                    <div>
                        <h3 class="text-[#CD1430] font-bold mb-4">${data.notes.title}</h3>
                        <p class="text-xl text-white" font-bold">${data.notes.descriptions}</p>
                    </div>
                </div>
            </div>
            
    
           <dialog id="id-dialog" class="bg-white p-2">
                <div class="text-right">
                    <button  type="submit" aria-label="Close dialog" id="id-cancel-modal">
                        <svg class="w-8 h-8" viewBox="0 0 352 512" width="100" title="times">
                            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                        </svg>
                    </button>
                    
                </div>
                <div>
                    <img class="w-full"  id="id-img-dialog" src="" alt="Elva dressed as a fairy" />
                </div>      
            </dialog>
        </section>
    `;

    const closeButton = document.querySelector("#id-cancel-modal");
    const dialog = document.querySelector("#id-dialog");
    const imgModal = document.querySelector("#id-img-dialog");

    const imgCount = {}
    const setCounter = (name,count) => {
        imgCount[`${name}`] = count
        console.log('COMPONENT_ONE_LOGS:',imgCount)
    }

    data.images.forEach(image => {
        const selectedImg = document.querySelector(`${`#id-component-one-${image.id}`}`)
        selectedImg.addEventListener('click', () => {
            dialog.showModal();
            imgModal.src=`img/component-01/${image.img.lg}`
            setCounter(`component-one-${image.id}`, imgCount?.[`component-one-${image.id}`] ? imgCount?.[`component-one-${image.id}`] + 1 : 1)
        })
    })

    closeButton.addEventListener('click', () => {
        imgModal.src=""
        dialog.close("animalNotChosen");  
    })




}
