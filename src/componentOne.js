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

            <dialog id="id-dialog">
                <div>
                    <button type="submit" aria-label="Close dialog" id="id-cancel-modal">
                        <svg viewBox="0 0 352 512" width="100" title="times">
                            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                        </svg>
                    </button>
                    
                </div>
                <div>
                    <img id="id-img-dialog" src="" alt="Elva dressed as a fairy" />
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
