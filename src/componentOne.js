import data from "./data/componentOne.json";

export function componentOne() {
  document.querySelector("#id-component-one").innerHTML = `
        <section>
            <div>
                ${data.images.map(image => `<div>
                        <a href="#" id=${`id-component-one-${image.id}`}>
                            <img src=${`img/component-01/${image.img.md}`} alt="Elva dressed as a fairy" />
                        </a>
                    </div>
                `).join('')}
            </div>
            <div>
                <div>
                    <h2>${data.title}</h2>
                    <p>${data.descriptions}</p>
                </div>
                <div>
                    <h2>${data.notes.title}</h2>
                    <p>${data.notes.descriptions}</p>
                </div>
            </div>
        </section>
    `;


    const imgCount = {}
    const setCounter = (name,count) => {
        imgCount[`${name}`] = count

        console.log('COMPONENT_ONE_LOGS:',imgCount)
    }

    data.images.forEach(image => {
        const selectedImg = document.querySelector(`${`#id-component-one-${image.id}`}`)
        selectedImg.addEventListener('click', () => {
            setCounter(`component-one-${image.id}`, imgCount?.[`component-one-${image.id}`] ? imgCount?.[`component-one-${image.id}`] + 1 : 1)
        })
    })




}
