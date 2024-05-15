import data from "./data/componentTwo.json";

export function componentTwo() {
  document.querySelector("#id-component-two").innerHTML = `
        <section>
            <h2>${data.title}</h2>
            <div>
                ${data.images.map(image => `<div>
                        <a href="#" id=${`id-component-two-${image.id}`}>
                            <img src=${`img/component-02/${image.img.md}`} alt="Elva dressed as a fairy" />
                        </a>
                        <div>
                            <h2>${image.title}</h2>
                            <p>${image.descriptions}</p>
                        </div>
                        <div>
                        <a href="#" id=${`id-component-two-readme-${image.id}`}>
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
