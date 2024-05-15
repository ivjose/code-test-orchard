import data from "./data/componentTwo.json";

export function componentTwo() {
  document.querySelector("#id-component-two").innerHTML = `
        <section  class="max-w-7xl mx-auto py-24 md:py-48 px-8 text-white">
            <h3 class="text-center font-light text-5xl py-16">${data.title}</h3>
            <div class="grid grid-rows-1 md:grid-cols-3 gap-5">
                ${data.images.map(image => `<div class="pb-6">
                        <a href="#" id=${`id-component-two-${image.id}`}>
                            <img class="border-b-[5px] border-[#CD1430]"  src=${`img/component-02/${image.img.md}`} alt="Elva dressed as a fairy" />
                        </a>
                        <div class="mt-7">
                            <h4 class="text-lg font-bold mb-2">${image.title}</h4>
                            <p class="text-base font-light">${image.descriptions}</p>
                        </div>
                        <div  class="mt-7">
                            <a href="#" class="text-base py-2 px-1 font-bold border-b-2 border-[#CD1430]" id=${`id-component-two-readme-${image.id}`}>
                                READ ME
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
             
        </section>
    `;


    const imgCount = {}
    const setCounter = (name,count) => {
        imgCount[`${name}`] = count

        console.log('COMPONENT_TWO_LOGS:',imgCount)
    }

    data.images.forEach(image => {
        const selectedImg = document.querySelector(`${`#id-component-two-${image.id}`}`)
        selectedImg.addEventListener('click', () => {
            setCounter(`component-two-${image.id}`, imgCount?.[`component-two-${image.id}`] ? imgCount?.[`component-two-${image.id}`] + 1 : 1)
        })

        const selectedReadme = document.querySelector(`${`#id-component-two-readme-${image.id}`}`)
        selectedReadme.addEventListener('click', () => {
            setCounter(`component-two-readme-${image.id}`, imgCount?.[`component-two-readme-${image.id}`] ? imgCount?.[`component-two-readme-${image.id}`] + 1 : 1)
        })
    })




}
